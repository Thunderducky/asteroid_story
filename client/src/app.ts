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
import { mapGenerator1 } from './mapGeneration'
import COLORS from './colors'
//import { MapGenHelper } from './mapGenHelper'

import SETTINGS from './gameSettings'
import { handleInput } from './handleInput'
import { renderToGrid } from './renderToGrid'
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

const player: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', COLORS.player)
const npc: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', COLORS.npc)
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

        handleInput(km, player)

        // process moves
        // eventually we'll componentize this better
        MoveProcessor.moves.forEach((msg: any): void => {
            const move = msg.delta
            const id = msg.id
            const mover = entities.find((e): boolean => e.id == id)
            if(!mover){
                return
            }
            if(tileGrid.inBoundsXY(mover.x + move.x, mover.y + move.y)){
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y)
                if(!tile.blockMove){
                    mover.move(move.x, move.y)
                    if(mover.id === player.id){
                        fovRecompute = true
                    }
                    PUBSUB.publish('moved', msg) // only publish move if the entity actually completed the move
                }
            }
        })
        MoveProcessor.moves.length = 0

        // determine camera position
        cameraFrame.x = Math.floor(player.x - cameraFrame.width/2)
        cameraFrame.y = Math.floor(player.y - cameraFrame.height/2)
        fovGrid.x = cameraFrame.x
        fovGrid.y = cameraFrame.y

        if(fovRecompute){
            calculateFOV(fovGrid, tileGrid, player, FOV_RADIUS)
        }

        // we might move all of this into some offscreen
        renderToGrid(tileGrid, fovGrid, entities, renderGrid, cameraFrame)
        renderer.render(renderGrid)

        // ctx.drawImage(image, 0, 500)
        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console
