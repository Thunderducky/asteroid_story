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

// sizing
const TILE_WIDTH = 10
const TILE_HEIGHT = 10

// THESE ARE IN TILE SIZES
const SCREEN_WIDTH = 80
const SCREEN_HEIGHT = 50
const MAP_WIDTH = 80
const MAP_HEIGHT = 45

const COLORS = {
    'black': '#000000',
    'dark_wall': '#000064',
    'dark_ground': '#323296'
}

const player: Entity = new Entity(3,4, '@', '#FFFFFF')
const npc: Entity = new Entity(3,4, '@', '#FFFF00')

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
    return new Tile(x,y, false)
})

tileGrid.getXY(30,22).blockMove = true
tileGrid.getXY(30,22).blockSight = true
tileGrid.getXY(31,22).blockMove = true
tileGrid.getXY(31,22).blockSight = true
tileGrid.getXY(32,22).blockMove = true
tileGrid.getXY(32,22).blockSight = true

const renderToGrid = (tileGrid: Grid<Tile>, entities: Entity[], renderGrid: Grid<IRenderCell>): void => {
    tileGrid.forEach((tile: Tile, index): void => {
        const renderCell = renderGrid.getI(index)
        renderCell.foreColor = COLORS.black
        renderCell.character = ' '
        if(tile.blockMove){
            renderCell.backColor = COLORS.dark_wall
        } else {
            renderCell.backColor = COLORS.dark_ground
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

PUBSUB.subscribe('move', (delta): void =>{
    MoveProcessor.moves.push(delta)
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
            PUBSUB.publish('move', Point.make(-1, 0))
        }
        if(km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', Point.make(1, 0))
        }
        if(km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', Point.make(0, -1))
        }
        if(km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)){
            PUBSUB.publish('move', Point.make(0, 1))
        }

        // process moves
        MoveProcessor.moves.forEach((move: any): void => {
            if(tileGrid.inBoundsXY(player.x + move.x, player.y + move.y)){
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y)
                if(!tile.blockMove){
                    player.move(move.x, move.y)
                }
            }            
        })
        MoveProcessor.moves.length = 0

        // we might move all of this into some offscreen 
        renderToGrid(tileGrid, entities, renderGrid)
        renderer.render(renderGrid)

        // ctx.drawImage(image, 0, 500)
        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

    console.log("this is just here to fail the linter");

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console