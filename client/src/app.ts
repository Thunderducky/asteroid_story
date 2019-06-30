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
import GAME_TEXT from './_data/gameText'
import SETTINGS from './_settings/gameSettings'
import { handleInput } from './handleInput'
import { renderToGrid } from './renderToGrid'
import DEBUG from './_settings/debugSettings'
import { progressiveMapGenerator } from './mapGeneration/bsp/bspMapGenerator'
import { drawBoxOnGrid, drawStringToGrid, CHARACTER_HELPER } from './renderHelpers'
//import { openSquareGenerator as progressiveMapGenerator } from './mapGeneration/staticGenerators/testMapGenerator'

const {
    TILE_WIDTH, TILE_HEIGHT,
    SCREEN_WIDTH, SCREEN_HEIGHT,
    MAP_WIDTH, MAP_HEIGHT,
    CAMERA_WIDTH, CAMERA_HEIGHT,
    FOV_RADIUS
} = SETTINGS


// INITIALIZE OUR SEED -> Should probably move this into it's own section, but whatever
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
const messageLogFrame = Rect.make(CAMERA_WIDTH, 0, SCREEN_WIDTH - CAMERA_WIDTH, CAMERA_HEIGHT)
// Initialize our Grids
const renderGrid = new Grid<IRenderCell>(SCREEN_WIDTH, SCREEN_HEIGHT)
renderGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,'', COLORS.black, COLORS.black)
})
const cameraRenderGrid = renderGrid.getSubgrid(cameraFrame)
const messageLogRenderGrid = renderGrid.getSubgrid(messageLogFrame)
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
// Narrative subscriber to moved
let foundCivilian = false
let exited = false
PUBSUB.subscribe('moved', (msg): void => {
    if(msg.id === player.id){
        // Did we just leave the airlock
        const currentTile = tileGrid.getP(player)
        const lastTile = tileGrid.getP(Point.subtract(player, msg.delta))
        
        if(currentTile.contained && !lastTile.contained){
            PUBSUB.publish('messagelog', GAME_TEXT.SPACE_RETURN_AIRLOCK)
        }
        
        if(npc.x === currentTile.x && npc.y === currentTile.y){
            foundCivilian = true
            PUBSUB.publish('messagelog', GAME_TEXT.DEAD_CIVILIAN)
        }

        if(!currentTile.contained && foundCivilian && !exited){
            exited = true
            PUBSUB.publish('messagelog', GAME_TEXT.LEAVE_DEAD_CIVILIAN)
            // Game end at this point
        } else if(lastTile.contained && !currentTile.contained){
            PUBSUB.publish('messagelog', GAME_TEXT.AIRLOCK_TO_SPACE)
        }

    }
})

class MessageLog {
    messages: string[];
    // for now just display the messages that you can
    constructor(){
        this.messages = []
    }
    addMessage(message: string): MessageLog{
        this.messages.push(message)
        return this
    }
    renderToGrid(renderGrid: Grid<IRenderCell>): void{
        const letterHeight = TILE_HEIGHT
        // the lazy way to do it, do it right later
        const finalLines: string[] = []
        // Temporary
        {
            const MAX_LINE_LENGTH = 25
            // first lines
           const firstLines = []
           this.messages.forEach(m => {
               m.split('\n').forEach(l => firstLines.push(l))
           });

           const secondLines = []
           firstLines.forEach(fl => {
                const words = fl.split(' ');
                // split ourselves up by spaces
                // let's go ahead and split up big words
                let newLine = ''
                words.forEach(w => {
                   // TODO: We currently don't handle EXTREMELY long words
                   // just handle spacing
                    if(newLine.length + 1 + w.length <= MAX_LINE_LENGTH){
                        newLine += ' ' + w
                    } else {
                        if(newLine.length > 0){
                            secondLines.push(newLine.trim())
                        }
                        newLine = w
                    }
                })
                if(newLine.length > 0){
                    secondLines.push(newLine.trim())
                }
                secondLines.push('\n')
           })
           secondLines.forEach(sl => finalLines.push(sl))
        }
        drawStringToGrid(renderGrid, finalLines.join('\n'), 1, 1)
    }
}
const messageLog = new MessageLog()

PUBSUB.subscribe('messagelog', (msg): void => {
    console.log(msg.text)
    messageLog.addMessage(msg.text)
})

PUBSUB.publish('messagelog', {text: "THIS IS A RELATIVELY LONG STRING WITHOUT MUCH TROUBLE"})
PUBSUB.publish('messagelog', {text: "SHORT STRING" })


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
        
        renderToGrid(tileGrid, fovGrid, entities, cameraRenderGrid, cameraFrame, debugGrid)
        const relativeBox = Rect.copy(messageLogFrame)
        relativeBox.x = 0
        relativeBox.y = 0
        // actually render to canvas
        drawBoxOnGrid(messageLogRenderGrid, relativeBox)
        messageLog.renderToGrid(messageLogRenderGrid)

        renderer.clear()
        renderer.render(renderGrid)

        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console