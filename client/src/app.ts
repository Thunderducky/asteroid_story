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
import { MapGenerator } from './mapGenerator'
import { Rect, IRect } from './shapes/rect'
import { ID_MANAGER } from './idManager'
import { calculateFOV, FOVCell } from './fov'
import { RANDOM } from './rngHelper'


// sizing
const TILE_WIDTH = 10
const TILE_HEIGHT = 10

// THESE ARE IN TILE SIZES
const SCREEN_WIDTH = 80
const SCREEN_HEIGHT = 50
const MAP_WIDTH = 80
const MAP_HEIGHT = 45

// Let's look for query params with which to seed the generator
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






const COLORS = {
    'black': '#000000',
    'dark_wall': '#000064',
    'dark_ground': '#323296',
    'light_wall': '#826E32',
    'light_ground': '#C8B432'
}

const player: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', '#FFFFFF')
const npc: Entity = new Entity(ID_MANAGER.next(), 3,4, '@', '#BBAA00')

const entities: Entity[] = [player,npc]


const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = SCREEN_WIDTH * TILE_WIDTH
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT

const km = new KeyboardMonitor().attach(document)
const mm = new MouseMonitor().attach(canvas)

const renderer = new CanvasRenderer

const renderGrid = new Grid<IRenderCell>(MAP_WIDTH, MAP_HEIGHT)
renderGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,' ',COLORS.black,COLORS.dark_ground)
})

const tileGrid: Grid<Tile> = new Grid<Tile>(MAP_WIDTH, MAP_HEIGHT)
tileGrid.setEach((cell: Tile, index: number, x: number, y: number): Tile => {
    return new Tile(x,y, true)
})

const FOV_RADIUS = 10
let fovRecompute = true
const fovGrid: Grid<FOVCell> = new Grid<FOVCell>(MAP_WIDTH, MAP_HEIGHT)
// if we turn fov on it'll change it over to false
fovGrid.setEach((): FOVCell => { return {
    visible: true
}})

/**
 * Return an integer between min and max inclusive
 * @param min 
 * @param max 
 */
const randint = (min: number, max: number): number => {
    return Math.floor(RANDOM.next() * (max - min + 1)) + min
}



const ROOM_MAX_SIZE = 10
const ROOM_MIN_SIZE = 10
const MAX_ROOMS = 30

// GET READY FOR SOME MAP GENERATION!
const rooms: IRect[] = []
// MapGenerator.createRoom(tileGrid, Rect.make(1,1,20,20))
for(let r = 0; r < MAX_ROOMS; r++){
    
    const w = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE)
    const h = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE)
    const x = randint(0, MAP_WIDTH - w - 1)
    const y = randint(0, MAP_HEIGHT  - h - 1)

    const newRoom = Rect.make(x,y,w,h)
    let intersects = false
    for(let i = 0; i < rooms.length; i++){
        if(Rect.intersects(newRoom, rooms[i])){
            intersects = true
            break
        }
    }
    if(!intersects){
        MapGenerator.createRoom(tileGrid, newRoom)
        const center = Rect.center(newRoom)
        if(rooms.length === 0){
            Point.set(player, center.x, center.y)
        } else {
            const lastCenter = Rect.center(rooms[rooms.length -1])
            if(randint(0,1) === 1){
                MapGenerator.createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y)
                MapGenerator.createVTunnel(tileGrid, lastCenter.y, center.y, center.x)
            }
            else {
                MapGenerator.createVTunnel(tileGrid, lastCenter.y, center.y, lastCenter.x)
                MapGenerator.createHTunnel(tileGrid, lastCenter.x, center.x, center.y)
            }

        }
        rooms.push(newRoom)
    }
}
// SET NPC LOCATION
{
    const center = Rect.center(rooms[rooms.length - 1])
    Point.set(npc, center.x, center.y)
}

//
const renderToGrid = (tileGrid: Grid<Tile>, fovGrid: Grid<FOVCell>, entities: Entity[], renderGrid: Grid<IRenderCell>): void => {
    tileGrid.forEach((tile: Tile, index): void => {
        const renderCell = renderGrid.getI(index)
        const fovCell = fovGrid.getI(index)

        renderCell.foreColor = COLORS.black
        renderCell.character = ' '
        if(!fovCell.visible){
            if(tile.blockMove){
                renderCell.backColor = COLORS.dark_wall
            } else {
                renderCell.backColor = COLORS.dark_ground
            }
        } else {
            if(tile.blockMove){
                renderCell.backColor = COLORS.light_wall
            } else {
                renderCell.backColor = COLORS.light_ground
            }
        }
        
    })
    entities.forEach((entity: Entity): void => {
        if(!renderGrid.inBoundsXY(entity.x, entity.y)){
            return
        }
        const rCell: IRenderCell = renderGrid.getXY(entity.x, entity.y)
        rCell.foreColor = entity.color
        rCell.character = entity.character
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
                    }
                }
            }            
        })
        MoveProcessor.moves.length = 0
        if(fovRecompute){
            calculateFOV(fovGrid, tileGrid, player, FOV_RADIUS)
        }
        // recompute fov here

        // we might move all of this into some offscreen 
        renderToGrid(tileGrid, fovGrid, entities, renderGrid)
        renderer.render(renderGrid)

        // ctx.drawImage(image, 0, 500)
        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console