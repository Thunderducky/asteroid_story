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
import COLORS from './colors'

import SETTINGS from './_settings/gameSettings'
import { handleInput } from './handleInput'
import { renderToGrid } from './renderToGrid'
import DEBUG from './_settings/debugSettings'
//import { progressiveMapGenerator } from './mapGeneration/bsp/bspMapGenerator'
import { Ellipse, IEllipse } from './shapes/ellipse'
import { openSquareGenerator as progressiveMapGenerator } from './mapGeneration/staticGenerators/testMapGenerator'

// task one, how do we make a door, let's make it a tile feature I suppose

const {
    TILE_WIDTH, TILE_HEIGHT,
    SCREEN_WIDTH, SCREEN_HEIGHT,
    MAP_WIDTH, MAP_HEIGHT,
    CAMERA_WIDTH, CAMERA_HEIGHT,
    FOV_RADIUS
} = SETTINGS


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


// Set up Entities
const player: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', COLORS.player)
const npc: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', COLORS.npc)
const entities: Entity[] = [player,npc]

// Find our canvas and adjust it to our settings
const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = SCREEN_WIDTH * TILE_WIDTH
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT

// Initialize our input monitors
const km = new KeyboardMonitor().attach(document)
const mm = new MouseMonitor().attach(canvas)

// Initialize our canvas renderer
const renderer = new CanvasRenderer()
const cameraFrame = Rect.make(0,0, CAMERA_WIDTH, CAMERA_HEIGHT) // CAMERA IS IN WORLD CELLS, NOT ABSOLUTE UNITS

// Initialize our Grids
const renderGrid = new Grid<IRenderCell>(cameraFrame.width, cameraFrame.height)
renderGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,'', COLORS.black, COLORS.black)
})

// THESE ARE HERE BY DEFAULT, BUT WON'T BE SHOWN UNLESS ENABLED
const debugGrid = new Grid<IRenderCell>(MAP_WIDTH, MAP_HEIGHT)
debugGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,'', COLORS.black, COLORS.black)
})

// FOV
let fovRecompute = !DEBUG.DISABLE_FOV
const fovGrid: Grid<FOVCell> = new Grid<FOVCell>(cameraFrame.width, cameraFrame.height)
fovGrid.setEach((): FOVCell => { return {
    visible: false // I don't necessarily want visibility turned on by default
}})

// Tile Grid
const tileGrid: Grid<Tile> = new Grid<Tile>(MAP_WIDTH, MAP_HEIGHT)
tileGrid.setEach((cell: Tile, index: number, x: number, y: number): Tile => {
    const t = new Tile(x,y, true)
    if(DEBUG.DISABLE_FOV){
        t.explored = true
    }
    return t
})

// this will also populate the rooms
const rooms: IRect[] = []

// clean this up
const moves: any[] = []
const MoveProcessor = {
    moves
}

PUBSUB.subscribe('move', (msg): void =>{
    MoveProcessor.moves.push(msg)
})

PUBSUB.subscribe('moved', (msg): void =>{
    if(msg.id === player.id && !DEBUG.DISABLE_TRACKING){
        cameraFrame.x = Math.floor(player.x - cameraFrame.width/2)
        cameraFrame.y = Math.floor(player.y - cameraFrame.height/2)
        fovGrid.x = cameraFrame.x
        fovGrid.y = cameraFrame.y
    }
})

PUBSUB.subscribe('camera_move', (msg): void => {
    cameraFrame.x += msg.delta.x
    cameraFrame.y += msg.delta.y
    fovGrid.x = cameraFrame.x
    fovGrid.y = cameraFrame.y
})

// TODO: MOVE THIS TO the Keyboard Monitor itself as a helper property
const newKeyPress = (q: string, enableZoom: boolean = true): boolean => {
    const state = km.getKeyState(q)
    if(!enableZoom){
        return state.isDown && state.halfSteps > 0
    } else {
        return state.isDown && (state.halfSteps > 0 || km.getKeyState('z').isDown)
    }
}

// the rooms won't be quite right since we are passing back the room in a small area, or maybe we just need to keep track of that inside of the generator
// when we hand it back since the grid offers it's x and y coordinates
// build the asteroid before we pass it off to the level generator, then we'll find the closest room and connect it to that one
tileGrid.forEach((t: Tile): void => {
    t.contained = false
    t.blockMove = false
    t.blockSight = false
    t.explored = true
})
{
    // SECTION 1: PLACE ASTEROID CHUNKS TOGETHER
    const MARGINS = 1
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height)
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2)/2)
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.3)
    const SECTION_COUNT = 50
    // In this block we will generate teh asteroid chunk part
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

    for(let i = 0; i < SECTION_COUNT; i++){
        const xRadius = RANDOM.nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const yRadius = RANDOM.nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const bigRadius = Math.max(xRadius, yRadius)
        const x = RANDOM.nextInt(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius)
        const y = RANDOM.nextInt(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius)
        placeAsteroidChunk(tileGrid, Ellipse.make(x,y,xRadius,yRadius, RANDOM.next() * Math.PI * 2))
    }
}

// Let's go ahead and try and build those ellipses instead before moving them into the generator
const levelIterator = progressiveMapGenerator(tileGrid, rooms)
levelIterator.next()
// Some placement sections
// should put this logic somewhere else
{
    if(rooms.length > 0){
        const pcenter = Rect.center(rooms[0])
        Point.set(player, pcenter.x, pcenter.y)
        const npcenter = Rect.center(rooms[rooms.length - 1])
        Point.set(npc, npcenter.x, npcenter.y)
    }

    // center the camera and fov on the player
    if(!DEBUG.DISABLE_TRACKING){
        cameraFrame.x = Math.floor(player.x - cameraFrame.width/2)
        cameraFrame.y = Math.floor(player.y - cameraFrame.height/2)
        fovGrid.x = cameraFrame.x
        fovGrid.y = cameraFrame.y
    } else {
        // center everything
        cameraFrame.x = Math.floor(tileGrid.width/2 - cameraFrame.width/2)
        cameraFrame.y = Math.floor(tileGrid.height/2  - cameraFrame.height/2)
        fovGrid.x = cameraFrame.x
        fovGrid.y = cameraFrame.y
    }
}

{
    // let me build a specific scenario for doors
    const offset = Point.make(10,10)
    const roomWidth = 10
    const roomHeight = 10
    for(let y = 0; y < roomHeight; y++){
        for(let x = 0; x < roomWidth; x++){
            const t = tileGrid.getXY(offset.x + x, offset.y + y)
            if(x === Math.floor(roomWidth/2) && y === 0){
                t.isDoor = true
                t.blockMove = false
                t.blockSight = true
            } else if(x === 0 || y == 0 || x === roomWidth- 1 || y === roomHeight - 1){
                t.blockMove = true
                t.blockSight = true
    
            }
        }
    }
}

// Door is an entity with a MoveInteract component
// Right now we just want to draw it as a door, we can keep
// everything else about it the same
// Load our one asset right now
// Heck, we might put map gen in another thread and we can just have it working whenever the player is doing anything
// if web workers are supported that is
loadImage('assets/out.png').then((image: any): void => {
    renderer.init(canvas, image)
    if(!DEBUG.STAGE_MAP_GENERATORS){
        // JUST FULLY SEQUENCE THE GENERATOR
        //while(levelIterator.next().done !== false){}
    }
    // Loop
    const loop = (): void => {
        handleInput(km, player)

        // extra
        if(newKeyPress('w')){
            PUBSUB.publish('camera_move', {delta: {x: 0, y: -1}})
        }
        if(newKeyPress('a')){
            PUBSUB.publish('camera_move', {delta: {x: -1, y: 0}})
        }
        if(newKeyPress('s')){
            PUBSUB.publish('camera_move', {delta: {x: 0, y: 1}})
        }
        if(newKeyPress('d')){
            PUBSUB.publish('camera_move', {delta: {x: 1, y: 0}})
        }

        if(DEBUG.STAGE_MAP_GENERATORS){
            // q lets us progress through the map generator phase
            if(newKeyPress('q')){
                // yield the next level generating setting
                levelIterator.next()
            }
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
            if(tileGrid.inBoundsXY(mover.x + move.x, mover.y + move.y)){
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y)
                if(!tile.blockMove || (DEBUG.ENABLE_CLIPPING && mover.id === player.id)){
                    mover.move(move.x, move.y)
                    if(mover.id === player.id){
                        fovRecompute = true
                    }
                    PUBSUB.publish('moved', msg) // only publish move if the entity actually completed the move
                }
            }
        })
        MoveProcessor.moves.length = 0

        if(fovRecompute && !DEBUG.DISABLE_FOV){
            calculateFOV(fovGrid, tileGrid, player, FOV_RADIUS)
        }

        // Convert to render format
        renderToGrid(tileGrid, fovGrid, entities, renderGrid, cameraFrame, debugGrid)

        // actually render to canvas
        renderer.clear()
        renderer.render(renderGrid)

        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console