// using this for reference: https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
import { Grid } from '../../grid'
import { Tile } from '../../tile'
import { IRect, Rect } from '../../shapes/rect'

import { IEllipse, Ellipse } from '../../shapes/ellipse'
import { RANDOM } from '../../rngHelper'

import BSP_SETTINGS from '../../_settings/bspMapGeneratorSettings'
import { Leaf } from './bspLeaf'

const { MAX_LEAF_SIZE, MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS, MAP_MARGINS } = BSP_SETTINGS

const leafs: Leaf[] = []

const placeInteriorExceptEdge = (tileGrid: Grid<Tile>, x: number, y: number): boolean => {
    const tile = tileGrid.getXY(x,y)
    const tiles = tileGrid.getNeighborsXY(x,y)
    // if our neighbors touch the outside or are outside, do not touch them
    if(!tiles.some((t: Tile): boolean => !t.contained )){
        tile.blockMove = false
        tile.blockSight = false
        return true
    } else {
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
    tileGrid.forEach((tile, index, x, y): void => {
        if(Ellipse.containsXY(ellipse, x,y)){
            placeInteriorExceptEdge(tileGrid, x,y)
        }
    })
}

// We are going to generate two types of things
// Exterior rooms and interior rooms
// if no exterior rooms exist, we'll force one, but one probably will

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
            for(let y = room.y; y < room.y + room.height - 1; y++){
                for(let x = room.x; x < room.x + room.width - 1; x++){
                    const interior = placeInteriorExceptEdge(tileGrid, x, y)
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
            }
        }
        if(l.halls != null){
            const halls = l.halls as IRect[]
            halls.forEach((room: IRect): void => {
                for(let y = room.y; y < room.y + room.height; y++){
                    for(let x = room.x; x < room.x + room.width; x++){
                        placeInteriorExceptEdge(tileGrid, x, y)
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
}

export { progressiveMapGenerator }
