import { KeyboardMonitor } from './keyboardMonitor'
import { MouseMonitor } from './mouseMonitor'
import { Grid } from './grid'
import { IRenderCell, RenderCell } from './renderCell'
import { Tile } from './tile'
import { Entity } from './entity'
import { loadImage } from './assetHelper'
import { CanvasRenderer } from './canvasRenderer'
import { Point } from './shapes/point'
import { PUBSUB } from './pubSub/pubSub'
import { Rect, IRect } from './shapes/rect'
import { ID_MANAGER } from './idManager'
import { calculateFOV, FOVCell } from './fov'
import { RANDOM } from './rngHelper'
import { mapGenerator1, mapGenerator2 } from './mapGeneration'
import COLORS from './colors'
//import { MapGenHelper } from './mapGenHelper'

import SETTINGS from './gameSettings'
// sizing


// THESE ARE IN TILE SIZES
const {
    TILE_WIDTH,
    TILE_HEIGHT,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    MAP_WIDTH,
    MAP_HEIGHT,
    CAMERA_WIDTH,
    CAMERA_HEIGHT,
    FOV_RADIUS
} = SETTINGS


// Let's look for query params with which to seed the generator
// INITIALIZE OUR SEED
const urlParams = new URLSearchParams(window.location.search)
const seedStr = urlParams.get('seed') 
if(!seedStr){
    const seed = RANDOM.seed(seedStr || undefined)
    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed
    if (history.pushState) {
        window.history.pushState({path:newurl},'',newurl)
    } else {
        window.location.href = newurl
    }
    
} else {
    RANDOM.seed(seedStr)
}



const player: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', '#FFFFFF')
const npc: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', '#CC0000')
const entities: Entity[] = [player,npc]


const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = SCREEN_WIDTH * TILE_WIDTH
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT

const km = new KeyboardMonitor().attach(document)
const mm = new MouseMonitor().attach(canvas)

const renderer = new CanvasRenderer()

const cameraFrame = Rect.make(0,0, CAMERA_WIDTH, CAMERA_HEIGHT) // CAMERA IS IN WORLD CELLS, NOT ABSOLUTE UNITS
const renderGrid = new Grid<IRenderCell>(cameraFrame.width, cameraFrame.height)
renderGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,' ',COLORS.black,COLORS.dark_ground)
})

const tileGrid: Grid<Tile> = new Grid<Tile>(MAP_WIDTH, MAP_HEIGHT)
tileGrid.setEach((cell: Tile, index: number, x: number, y: number): Tile => {
    return new Tile(x,y, true)
})

let fovRecompute = true
// TODO: Translate this from world to screen?
const fovGrid: Grid<FOVCell> = new Grid<FOVCell>(cameraFrame.width, cameraFrame.height)
// if we turn fov on it'll change it over to false
fovGrid.setEach((): FOVCell => { return {
    visible: false
}})


// this will also populate the rooms
const rooms: IRect[] = []
//generate the relevant terrain
mapGenerator1(tileGrid, rooms)
//mapGenerator2(tileGrid, rooms)

// const cameraFrame = Rect.make(0, 0, 10, 10)

// SET Entity Locations
{
    const pcenter = Rect.center(rooms[0])
    Point.set(player, pcenter.x, pcenter.y) 
    const npcenter = Rect.center(rooms[rooms.length - 1])
    Point.set(npc, npcenter.x, npcenter.y)

    // center the camera and fov on the player
    cameraFrame.x = Math.floor(player.x - cameraFrame.width/2)
    cameraFrame.y = Math.floor(player.y - cameraFrame.height/2)
    fovGrid.x = cameraFrame.x
    fovGrid.y = cameraFrame.y
}

// We need to move this into it's own section, and potentially allow substituting it out
const renderToGrid = (tileGrid: Grid<Tile>, fovGrid: Grid<FOVCell>, entities: Entity[], renderGrid: Grid<IRenderCell>): void => {
    // renderGrid is in SCREEN coordinates, and will have it's XY ignored for our purposes
    // tileGrid, entities and fovGrid are in WORLD coordinates and will have their XY and y ignored for now
    
    // camera and renderGrid both start at the topLeft in terms of aligning the two
    // I almost feel like we should tighten the coupling, but oh well, let's actually do it
    const screenP = Point.make(0,0)
    const worldP = Point.make(0,0)
    const playerIsOutside = !tileGrid.getP(player).contained
    for(let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++){
        for(let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++){
            // this maps to the renderGrid and the cameras
            Point.set(screenP, relCameraX, relCameraY)
            // this maps to the tileGrid, fovGrid, and entities
            Point.set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y)
            
            // Let's do some bounds checking
            // we know these poitns are always in cameras, so never need to check that
            // we are going to offload the case of checking if the renderGrid can fit the cameraSize for now
            // so for now just check if we are inside of the tileGrid, which currently should be the same dimensions as the fovGrid, though that is bound to change as we try and optimize things
            // soooooo, let's check if we are inside the tileGrid
            const renderCell  = renderGrid.getP(screenP)
            if(tileGrid.inBoundsXY(worldP.x, worldP.y)){
                const tile = tileGrid.getP(worldP)
                const fovCell = fovGrid.getP(screenP)
                renderCell.character = ''
                if(!tile.contained && playerIsOutside){
                    // go ahead and draw everything as lit
                    if(tile.blockMove){
                        renderCell.backColor = COLORS.light_wall
                    } else {
                        renderCell.backColor = COLORS.dark_outside
                    }
                }
                else if(tile.explored){
                    if(!fovCell.visible){
                        if(tile.blockMove){
                            renderCell.backColor = COLORS.dark_wall
                        } else if(tile.blockSight){ // it's a door
                            renderCell.backColor = COLORS.dark_door
                        } else {
                            renderCell.backColor = COLORS.dark_ground
                        }
                    } else {
                        if(tile.blockMove){
                            renderCell.backColor = COLORS.light_wall
                        } else if(tile.blockSight){ // it's a door
                            renderCell.backColor = COLORS.light_door
                        }
                        else {
                            renderCell.backColor = COLORS.light_ground
                        }
                    }
                } else {
                    renderCell.backColor = COLORS.black
                
                }
            } else {
                renderCell.character = ''
                renderCell.foreColor = COLORS.black
                renderCell.backColor = COLORS.black
            }
        }
    }

    entities.forEach((entity: Entity): void => {
        Point.set(screenP, entity.x - cameraFrame.x, entity.y - cameraFrame.y)
        // if this is inside of the camera bounds
        if(cameraFrame.x <= entity.x && entity.x <= cameraFrame.x + cameraFrame.width - 1 &&
            cameraFrame.y <= entity.y && entity.y <= cameraFrame.y + cameraFrame.height - 1){
            const rCell: IRenderCell = renderGrid.getP(screenP)
            const fovCell: FOVCell = fovGrid.getP(screenP)
            if(fovCell.visible){
                rCell.foreColor = entity.color
                rCell.character = entity.character
            }
        }
        
    })
}

// clean this up
const moves: any[] = []
const MoveProcessor = {
    // currently just tied to the player
    moves
}

PUBSUB.subscribe('move', (msg): void =>{
    MoveProcessor.moves.push(msg)
}) 

loadImage('assets/out.png').then((image: any): void => {
    renderer.init(canvas, image)
    // Loop
    const loop = (): void => {
        renderer.clear()

        // Look at player input
        // Z lets us be in ZOOM MODE!!!!
        // we need to translate this into a "move" type action
        // we'll just do the move section
        
        if(km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', {id: player.id, delta: Point.make(-1, 0)})
        }
        if(km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', {id: player.id, delta: Point.make(1, 0)})
        }
        if(km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', {id: player.id, delta: Point.make(0, -1)})
        }
        if(km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', {id: player.id, delta: Point.make(0, 1)})
        }
        // quick number generator
        if(!km.getKeyState('n').isDown && (km.getKeyState('n').halfSteps > 0)){
            const seed = btoa(new Date().toString())
            const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed
            window.location.href = newurl
        }

        // process moves
        // eventually we'll componentize this better
        MoveProcessor.moves.forEach((msg: any): void => {
            const move = msg.delta
            const id = msg.id
            const mover = entities.find((e): boolean => e.id == id)
            if(!mover){
                return
            }
            if(tileGrid.inBoundsXY(player.x + move.x, player.y + move.y)){
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y)
                if(!tile.blockMove){
                    mover.move(move.x, move.y)
                    if(mover.id === player.id){
                        fovRecompute = true
                        PUBSUB.publish('moved', msg) // only publish move if the entity actually completed the move
                    }
                }
            }            
        })
        MoveProcessor.moves.length = 0
        if(fovRecompute){
            calculateFOV(fovGrid, tileGrid, player, FOV_RADIUS)
        }

        // determine camera position
        cameraFrame.x = Math.floor(player.x - cameraFrame.width/2)
        cameraFrame.y = Math.floor(player.y - cameraFrame.height/2)
        fovGrid.x = cameraFrame.x
        fovGrid.y = cameraFrame.y

        // we might move all of this into some offscreen 
        renderToGrid(tileGrid, fovGrid, entities, renderGrid)
        renderer.render(renderGrid)

        // ctx.drawImage(image, 0, 500)
        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)
    window.tileGrid = tileGrid;
    window.player = player;

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console