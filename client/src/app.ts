// GameData
import { loadImage } from './assetHelper'

// Game Utilities
import { RANDOM } from './utils/rngHelper'
import { PUBSUB } from './pubSub/pubSub'

// UI
import GameStates from './gameStates'

// Game Data
import { GameData } from './gameData/gameData'

// Combine these into a single system folder import
import { RenderSystem } from './gameSystems/renderSystem'
import { FovSystem } from './gameSystems/fovSystem'
import { MoveSystem } from './gameSystems/moveSystem'
import { CameraSystem } from './gameSystems/cameraSystem'
import { DebugDrawSystem } from './gameSystems/debugDrawSystem'
import { NarrativeSystem } from './gameSystems/narrativeSystem'
import { InputSystem } from './gameSystems/inputSystem'
import { EntityPlacementSystem } from './gameSystems/entityPlacementSystem'
import { MessageLogSystem } from './gameSystems/messageLogSystem'
import { MapBuilderSystem } from './gameSystems/mapBuilderSystem'
import { BasicMonster } from './entitySystem/components/ai'
import { Entity } from './entitySystem/entity'
import { TOPICS } from './pubSub/pubsubTopicList'
import { Grid } from './grid'
import { IRenderCell } from './rendering/renderCell'
import { Point, IPoint } from './shapes/point'
import { processPathfindingGrid } from './pathfinding'

RANDOM.initializeSystem()

GameData.init()


let gameState = GameStates.PLAYERS_TURN

// Mark things as being the enemy turn, not sure how to handle that one
PUBSUB.subscribe('player_wants_to_move', (msg): void => {
    PUBSUB.publish('move', msg)
    gameState = GameStates.ENEMY_TURN
})

// All of this is good
// MapBuilderSystem.init()
// MapBuilderSystem.buildMap()
// EntityPlacementSystem.init()
MessageLogSystem.init(GameData.messageLog) // Still need to do this
// EntityPlacementSystem.placeInitialEntities() // Rooms should be moved inside gameData as well
DebugDrawSystem.init()
// FovSystem.init()
// CameraSystem.init()
// NarrativeSystem.init()
// MoveSystem.init()
InputSystem.init()

// This is based off of terrain
// I'm really happy with a lot of my underlying library
// functions
const squareGrid = new Grid<any>(13,13)
squareGrid.setEach((cell, index, x, y): any => {
    return {
        x,y, blockMove: RANDOM.next() < 0.4
    }
})
window.squareGrid = squareGrid
const origin = new Entity(0, 'test', 0, 0, '@', '#FFFFFF', true)
const destination = Point.make(squareGrid.width - 1,squareGrid.height -1)

const pathfind = processPathfindingGrid(origin, destination, squareGrid)

//just allowing these out while we figure out what to do next
// generators are kind of really cool!
const pathGrid = pathfind.next().value
const pathQueue = pathfind.next().value
const backPath = pathfind.next().value

loadImage('assets/out.png').then((image: any): void => {
    RenderSystem.init(image)
    // Need to have this marked appropriately
    PUBSUB.publish('fov_recompute', true)
    // Loop
    const loop = (): void => {

        // if(gameState === GameStates.PLAYERS_TURN){
        //     InputSystem.handleInput() // Translate player intention into system input
        // } else {
        //     // Process non player entities
        //     GameData.entityData.entities.filter((e: Entity): boolean => e.components.has('ai')).forEach((entity: Entity): void => {
        //         const ai = entity.components.get('ai') as BasicMonster
        //         ai.takeTurn(GameData)
        //     })
        //     gameState = GameStates.PLAYERS_TURN // Handle monster/world turns here
        // }
        if(InputSystem.newKeyPress('n')){
            const seed = btoa(new Date().toString())
            const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed
            window.location.href = newurl
        }
        if(InputSystem.newKeyPress('q')){
            if(pathfind.next().done){
                const node = backPath.pop()
                if(node){
                    origin.x = node.x
                    origin.y = node.y
                }
            }
        }
        
        // if the player has a path, move along it
        // // if player moved process our moves, that way we're not waiting if we don't need to be?
        // Let's build in an a-star system
        PUBSUB.publish(TOPICS.DEBUG_DRAW_FN, (debugGrid: Grid<IRenderCell>): void => {
            debugGrid.forEach((cell): void => {
                cell.transparent = false
                cell.backColor = '#000000'
                cell.foreColor = '#000000'
                cell.character = ''
            })
            squareGrid.forEach((cell,index,x,y): void => {
                const dCell = debugGrid.getXY(x,y)
                dCell.backColor =  !cell.blockMove ? '#FFFFFF' : '#666666'
                dCell.transparent = false
            })
            pathGrid.forEach((cell, index, x, y): void => {
                const dCell = debugGrid.getXY(x,y)
                if(cell.visited){
                    dCell.backColor =  '#0000FF'
                    dCell.character =  (cell.distanceFromOrigin % 16).toString(16)
                }
                
                dCell.transparent = false
            })
            pathQueue.nodes.forEach((cell): void => {
                const dCell = debugGrid.getXY(cell.x,cell.y)
                dCell.backColor = '#FF00FF'
                dCell.transparent = false
            })
            backPath.forEach((cell): void => {
                const dCell = debugGrid.getXY(cell.x,cell.y)
                dCell.backColor = '#FF0000'
                dCell.transparent = false
            })
            {
                const dg = debugGrid.getXY(origin.x, origin.y)
                dg.foreColor = origin.color
                dg.character = origin.character
                dg.transparent = false
            }
        })

        // MoveSystem.processMoves()
        // FovSystem.calculateFOV()
        RenderSystem.render()

        InputSystem.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console
