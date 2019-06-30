// using this for reference: https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
import { Grid } from '../../grid'
import { Tile, TileMaterial } from '../../tile'
import { IRect, Rect } from '../../shapes/rect'

import { IEllipse, Ellipse } from '../../shapes/ellipse'
import { RANDOM } from '../../rngHelper'

import BSP_SETTINGS from '../../_settings/bspMapGeneratorSettings'
import { Leaf } from './bspLeaf'
import { Point } from '../../shapes/point'

const { MAX_LEAF_SIZE, MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS, MAP_MARGINS } = BSP_SETTINGS

const leafs: Leaf[] = []

const PERCENT_CHANCE_WINDOW = 0.3

const placeInteriorExceptEdge = (tileGrid: Grid<Tile>, x: number, y: number, placeWindow = false): boolean => {
    const tile = tileGrid.getXY(x,y)
    const tiles = tileGrid.getNeighborsXY(x,y)
    // if our neighbors touch the outside or are outside, do not touch them
    if(!tiles.some((t: Tile): boolean => !t.contained )){
        tile.blockMove = false
        tile.blockSight = false
        return true
    } else {
        tile.blockSight = tile.contained && !placeWindow
        return false
    }
}

// This is a utility for just this section, maybe genericize it, but no need to export it
const randomEllipse = (minX: number, maxX: number, minY: number, maxY: number): IEllipse => {
    return Ellipse.make(
        RANDOM.nextInt(minX, maxX),
        RANDOM.nextInt(minY, maxY),
        RANDOM.nextInt(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS),
        RANDOM.nextInt(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS),
        RANDOM.next() * Math.PI * 2
    )
}

/**
 * Make an unexplored section of the map that is the interior of an ellipse
 * @param tileGrid The Tile Grid to place asteroid shells inside of
 * @param ellipse the ellipse that represents the asteroid chunk
 */
const placeAsteroidChunk = (tileGrid: Grid<Tile>, ellipse: IEllipse): void => {
    tileGrid.forEach((tile: Tile, index: number, x: number, y: number): void => {
        if(Ellipse.containsXY(ellipse, x,y)){
            tile.blockMove = true
            tile.blockSight = true
            tile.contained = true
            tile.explored = false
        }
    })
}
/**
 * Build the shell of the asteroid
 * @param tileGrid bounds to place the asteroid shell withing
 * @param sections how many random ellipses we want to place
 * @param margin how much to push in from the edges
 */
const buildAsteroidShell = (tileGrid: Grid<Tile>, sections: number, margin: number): void => {
    // TODO: Decapitalize this
    const minDimension = Math.min(tileGrid.width, tileGrid.height)
    const maxAsteroidSectionRadius = Math.floor((minDimension - margin * 2)/2)
    const minAsteroidSectionRadius = Math.floor(maxAsteroidSectionRadius * 0.3)
    
    for(let i = 0; i < sections; i++){
        const xRadius = RANDOM.nextInt(minAsteroidSectionRadius, maxAsteroidSectionRadius)
        const yRadius = RANDOM.nextInt(minAsteroidSectionRadius, maxAsteroidSectionRadius)
        const bigRadius = Math.max(xRadius, yRadius)
        const x = RANDOM.nextInt(margin + bigRadius, tileGrid.width - margin - bigRadius)
        const y = RANDOM.nextInt(margin + bigRadius, tileGrid.height - margin - bigRadius)
        placeAsteroidChunk(tileGrid, Ellipse.make(x,y,xRadius,yRadius, RANDOM.next() * Math.PI * 2))
    }
}

const carveEllipse = (tileGrid: Grid<Tile>, ellipse: IEllipse): void => {
    let hasWindow = RANDOM.next() <= PERCENT_CHANCE_WINDOW
    tileGrid.forEach((tile, index, x, y): void => {
        if(Ellipse.containsXY(ellipse, x,y)){
            placeInteriorExceptEdge(tileGrid, x,y, hasWindow)
        }
    })
}

// We are going to generate two types of things
// Exterior rooms and interior rooms
// if no exterior rooms exist, we'll force one, but one probably will
const exteriorRooms: IRect[] = []
function * progressiveMapGenerator(tileGrid: Grid<Tile>, rooms: IRect[]): any{
    // Section 1: Build the shell
    // TODO: move these somewhere else
    const SECTION_COUNT = 50
    const MARGINS = 1
    // I want to be able to export this and get a bounding rect out of it in the future
    buildAsteroidShell(tileGrid, SECTION_COUNT, MARGINS)
    // this is the space bound by the asteroid shell
    const interior = tileGrid.getSubgrid(Rect.make(MAP_MARGINS,MAP_MARGINS,tileGrid.width - 2 * MAP_MARGINS, tileGrid.height - 2 * MAP_MARGINS))

    const root = new Leaf(interior.x,interior.y, interior.width - 1, interior.height - 1)
    leafs.push(root)
    let hadSplit = true
    
    // Split up the rooms as much as possible // TODO: Change this so we can stop early if we marked it that way
    while(hadSplit){
        hadSplit = false
        leafs.forEach((l: Leaf): void => {
            if(!l.hasSplit()){
                if(l.width > MAX_LEAF_SIZE || l.height > MAX_LEAF_SIZE || RANDOM.next() > 0.25){
                    if(l.split()){
                        leafs.push(l.left as Leaf)
                        leafs.push(l.right as Leaf)
                        hadSplit = true
                    }
                }
            }
        })
    }

    
    // Create all the rooms 
    root.createRooms()
    for(let i = leafs.length - 1; i >=0; i--){
        const l = leafs[i]
        if(l.room != null){
            const room = l.room as IRect
            let allInterior = true
            let hasWindow = RANDOM.next() <= PERCENT_CHANCE_WINDOW
            for(let y = room.y; y < room.y + room.height - 1; y++){
                for(let x = room.x; x < room.x + room.width - 1; x++){
                    const interior = placeInteriorExceptEdge(tileGrid, x, y, hasWindow)
                    allInterior = allInterior && interior
                }
            }
            // Don't put us in rooms that are not inside of the boundary
            if(allInterior){
                // only allow rooms that are entirely in the interior
                // for now, we might use them later and
                // mark them out as candidates for airlocks
                room.x += tileGrid.x
                room.y += tileGrid.y
                rooms.push(room)
                // if the airlock is disconnected then we will turn it
                // into a broken/disused airlock
                // maybe see if we can build a broken hallway
            } else {
                exteriorRooms.push(room)
            }
        }
        if(l.halls != null){
            const halls = l.halls as IRect[]
            halls.forEach((room: IRect): void => {
                let hasWindow = RANDOM.next() <= PERCENT_CHANCE_WINDOW
                for(let y = room.y; y < room.y + room.height; y++){
                    for(let x = room.x; x < room.x + room.width; x++){
                        placeInteriorExceptEdge(tileGrid, x, y, hasWindow)
                    }
                }
            })
        } 

    }
    // Place Caves
    const internalCaves = RANDOM.nextInt(BSP_SETTINGS.MIN_INTERNAL_CAVES, BSP_SETTINGS.MAX_INTERNAL_CAVES)
    for(let i = 0; i < internalCaves; i++){
        carveEllipse(tileGrid, randomEllipse(10, tileGrid.width - 10, 10, tileGrid.height - 10))
    }

    // Let's take each exterior room and see if it's contained at least a little inside the asteroid
    // THen we'll make a face and place it on the asteroid, with a chance that we'll have more
    // we'll pull out them from the list of exterior rooms and put them in the airlocks portion
    

    // Let's write a piece of code to determine if we should add something
    // from the exterior rooms to edge rooms or airlocks
    const airlocks: IRect[] = []
    const edgeRooms: IRect[] = []
    {
        // Categorize into edge rooms and potential airlocks
        let roomIndex = 0
        exteriorRooms.forEach((exterior: IRect): void => {
            // Check if it can be a potential airlock
            let canBeAirlock = false

            // Test #1 enough cells are already interior
            let interiorCount = 0
            let totalCount = 0
            Rect.forEach(exterior, (x: number, y: number): void => {
                if(tileGrid.getXY(x,y).contained){
                    interiorCount++
                }
                totalCount++
            })
            console.log(roomIndex++, interiorCount, totalCount, exterior)

            if(interiorCount > 5 && ((totalCount - interiorCount) > 5) && RANDOM.next() > 0.5){
                airlocks.push(exterior)
            } else {
                edgeRooms.push(exterior)
            }
        })
        
        // lets treat them all like airlocks to start out with
        airlocks.forEach((airlock): void => {
            const outerEdges: Tile[] = []
            Rect.forEach(airlock, (x: number, y: number, isEdge: boolean): void => {
                const t = tileGrid.getXY(x,y)
                t.material = TileMaterial.Metal
                let isOuterEdge = false
                const neighbors = tileGrid.getNeighborsXY(t.x, t.y)
                // if neighbors aren't contained
                
                if(!t.contained){
                    if(isEdge){
                        t.blockSight = true
                        t.contained = true
                        t.blockMove = true
                        outerEdges.push(t)
                    } else {
                        t.blockMove = false
                        t.blockSight = false
                    }
                } else {
                    if(!isEdge){
                        t.blockMove = false
                        t.blockSight = false
                    }
                }
                t.contained = true
            })
            // Turn some of the outer edges into doors
            // pick a few to be windows and one to be a door
            for(let i = 0; i < 5; i++){
                const t = outerEdges[RANDOM.nextInt(0, outerEdges.length - 1)]
                t.blockMove = true
                t.blockSight = false
            }
            const t = outerEdges[RANDOM.nextInt(0, outerEdges.length)]
            t.blockMove = false
            t.blockSight = true
        })
    }

    // on each room go ahead an add a door on each of the exterior portions
    // that already have movement set up
    rooms.concat(edgeRooms).forEach((room: IRect): void => {
        const offset = Point.make(room.x, room.y)
        // This code is kinda wonky, we should probably fix it
        for(let y = -1; y < room.height; y++){
            for(let x = -1; x < room.width; x++){
                if(x === -1 || x === room.width - 1 || y === -1 || y === room.height - 1){
                    const t = tileGrid.getXY(offset.x + x, offset.y + y)
                    // make all the outlines part of the doors
                    
                    // if(t.blockMove !== true){
                    //     t.blockSight = true
                    // }
                    // if at least two neighbors are blockers then we will try
                    // placing a door
                    const up = tileGrid.getXY(t.x, t.y - 1)
                    const down = tileGrid.getXY(t.x, t.y + 1)
                    const left = tileGrid.getXY(t.x - 1, t.y)
                    const right = tileGrid.getXY(t.x + 1, t.y)
                    let makeDoor = false
                    if(!up.blockMove && !down.blockMove){
                        makeDoor = left.blockMove && right.blockMove
                    } else if(!left.blockMove && !right.blockMove){
                        makeDoor = up.blockMove && down.blockMove
                    }

                    if(makeDoor ){
                        t.blockSight = true
                    }

                }
            }
        }
    })
}

export { progressiveMapGenerator }
