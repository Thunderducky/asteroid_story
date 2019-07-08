import { FOVCell } from '../fov'
import { Grid } from '../grid'
import SETTINGS from '../_settings/gameSettings'
import { PUBSUB } from '../pubSub/pubSub'
import { Tile } from '../tile'
import DEBUG from '../_settings/debugSettings'
import { TOPICS } from '../pubSub/pubsubTopicList'
import { IRenderCell, RenderCell } from '../rendering/renderCell'
import COLORS from '../_settings/colors'
import { Rect, IRect } from '../shapes/rect'
import { Entity } from '../entitySystem/entity'
import { ID_MANAGER } from '../utils/idManager'
import { MessageLog } from '../messageLog'
import { EntityMaker } from '../entitySystem/entityMaker'

// This is where we would export it into it's own data init functions
const fovGrid = new Grid<FOVCell>(SETTINGS.CAMERA_WIDTH, SETTINGS.CAMERA_HEIGHT)
fovGrid.setEach((): FOVCell => { return { visible: false} })

const tileGrid: Grid<Tile> = new Grid<Tile>(SETTINGS.MAP_WIDTH, SETTINGS.MAP_HEIGHT)
tileGrid.setEach((cell: Tile, index: number, x: number, y: number): Tile => {
    const t = new Tile(x,y, true)
    t.contained = false
    t.blockMove = false
    t.blockSight = false
    t.explored = false
    if(DEBUG.DISABLE_FOV){
        t.explored = true
    }
    return t
})
const renderGrid = new Grid<IRenderCell>(SETTINGS.SCREEN_WIDTH, SETTINGS.SCREEN_HEIGHT)
renderGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,'', COLORS.palette.black, COLORS.palette.black)
})

const debugGrid = new Grid<IRenderCell>(SETTINGS.CAMERA_WIDTH, SETTINGS.CAMERA_HEIGHT)
debugGrid.setEach((cell: any, index: number, x: number, y: number): IRenderCell => {
    return RenderCell.make(x,y,'', COLORS.palette.black, COLORS.palette.black, true)
})

const player: Entity = EntityMaker.player() //new Entity(ID_MANAGER.next(), 'player',  3,4, '@', COLORS.player) // TODO: Move this name into gameText
const npc: Entity = EntityMaker.npc() //new Entity(ID_MANAGER.next(), 'npc', 3,5, '@', COLORS.npc, false) // TODO: Move this name into gameText
const entities: Entity[] = [player,npc]

// fov/ grid/ recompute, put it all in one data set here
// and all other operations just work on them
const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = SETTINGS.SCREEN_WIDTH * SETTINGS.TILE_WIDTH
canvas.height = SETTINGS.SCREEN_HEIGHT * SETTINGS.TILE_HEIGHT
const messageLog = new MessageLog()
const rooms: IRect[] = []
const airlocks: IRect[] = []
const cameraFrame = Rect.make(0,0, SETTINGS.CAMERA_WIDTH, SETTINGS.CAMERA_HEIGHT)
const messageLogFrame = Rect.make(SETTINGS.CAMERA_WIDTH ,0, SETTINGS.SCREEN_WIDTH - SETTINGS.CAMERA_WIDTH, SETTINGS.CAMERA_HEIGHT)
const GameData = {
    // Our normal core settings
    canvas,
    fov: {
        grid: fovGrid,
        recompute: false
    },
    entityData: {
        player,
        npc,
        entities
    },
    mapBuilderData: {
        rooms,
        airlocks // this is a subset of all the rooms
    },
    tileGrid,
    renderGrid,
    debugGrid,

    messageLog, // This should be more decouple functionality wise

    moves: [], // keeps track of our moves
    cameraFrame,
    messageLogFrame,
    init: function(): void{
        // Our most generic topic, which we should progressively limit in the future
        PUBSUB.subscribe(TOPICS.SYSTEM_REQUEST_FN, (fn): void => {
            fn({
                fovGrid: GameData.fov.grid, 
                tileGrid: GameData.tileGrid,
                renderGrid: GameData.renderGrid,
                debugGrid: GameData.debugGrid,
            })
        })

        PUBSUB.subscribe('SYSTEM_FOV_REQUEST_FN', (fn): void => {
            fn({
                fov: GameData.fov,
                tileGrid: GameData.tileGrid,
                entityData: GameData.entityData
            })
        })

        PUBSUB.subscribe('SYSTEM_MOVE_REQUEST_FN', (fn): void => {
            fn({
                tileGrid: GameData.tileGrid,
                moves: GameData.moves,
                entityData: GameData.entityData
            })
        })
        PUBSUB.subscribe('SYSTEM_RENDER_REQUEST_FN', (fn): void => {
            fn({
                canvas: GameData.canvas,
                fovGrid: GameData.fov.grid, 
                tileGrid: GameData.tileGrid,
                renderGrid: GameData.renderGrid,
                debugGrid: GameData.debugGrid,
                cameraFrame: GameData.cameraFrame,
                messageLogFrame: GameData.messageLogFrame,
                entityData: GameData.entityData,
                messageLog: GameData.messageLog
            })
        })

        PUBSUB.subscribe('SYSTEM_CAMERA_REQUEST_FN', (fn): void => {
            fn({
                tileGrid: GameData.tileGrid,
                cameraFrame: GameData.cameraFrame,
                entityData: GameData.entityData
            })
        })

        PUBSUB.subscribe('SYSTEM_DEBUG_DRAW_REQUEST_FN', (fn): void => {
            if(DEBUG.DEBUG_DRAW){ // protection at multiple levels
                fn({
                    debugGrid: GameData.debugGrid
                })
            }
        })

        PUBSUB.subscribe('SYSTEM_NARRATIVE_REQUEST_FN', (fn): void => {
            fn({
                tileGrid: GameData.tileGrid,
                entityData: GameData.entityData
            })
        })

        PUBSUB.subscribe('SYSTEM_ENTITY_PLACEMENT_REQUEST_FN', (fn): void => {
            fn({
                tileGrid: GameData.tileGrid,
                entityData: GameData.entityData,
                mapBuilderData: GameData.mapBuilderData
            })
        })

        PUBSUB.subscribe('SYSTEM_INPUT_REQUEST_FN', (fn): void => {
            fn({
                canvas: GameData.canvas,
                entityData: GameData.entityData
            })
        })

        PUBSUB.subscribe('SYSTEM_MAP_BUILDER_REQUEST_FN', (fn): void => {
            fn({
                tileGrid: GameData.tileGrid,
                mapBuilderData: GameData.mapBuilderData
            })
        })
    }
}

export { GameData}