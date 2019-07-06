// Shapes
import { IRect } from './shapes/rect'

// GameData
import { Tile, TileMaterial } from './tile'
import { loadImage } from './assetHelper'

// Game Utilities
import { RANDOM } from './utils/rngHelper'
import { PUBSUB } from './pubSub/pubSub'

// Map Generator
import { progressiveMapGenerator } from './mapGeneration/bsp/bspMapGenerator'
//import { openSquareGenerator as progressiveMapGenerator } from './mapGeneration/staticGenerators/testMapGenerator'

// UI
import GameStates from './gameStates'
import { processNetwork } from './utils/floodFiller'
import { TOPICS } from './pubSub/pubsubTopicList'

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

GameData.init()
RANDOM.initializeSystem()

let gameState = GameStates.PLAYERS_TURN
const rooms: IRect[] = []

// MOVE THIS
let levelIterator: any
PUBSUB.publish(TOPICS.SYSTEM_REQUEST_FN, (gameData: any): void => {
    levelIterator = progressiveMapGenerator(gameData.tileGrid, rooms)
})
levelIterator.next()

// Mark things as being the enemy turn, not sure how to handle that one
PUBSUB.subscribe('player_wants_to_move', (msg): void => {
    PUBSUB.publish('move', msg)
    gameState = GameStates.ENEMY_TURN
})

// All of this is good
EntityPlacementSystem.init()
MessageLogSystem.init(GameData.messageLog) // Still need to do this
EntityPlacementSystem.placeInitialEntities(rooms) // Rooms should be moved inside gameData as well
DebugDrawSystem.init()
FovSystem.init()
CameraSystem.init()
NarrativeSystem.init()
MoveSystem.init()
InputSystem.init()

// MOVE THIS
let floodFillGenerator: any
PUBSUB.publish(TOPICS.SYSTEM_REQUEST_FN, (gameData: any): void => {
    floodFillGenerator = processNetwork(gameData.tileGrid, (c: Tile): boolean => !c.blockMove && c.material !== TileMaterial.Space, GameData.entityData.player.x, GameData.entityData.player.y)
})

loadImage('assets/out.png').then((image: any): void => {
    RenderSystem.init(image)

    // Loop
    const loop = (): void => {

        if(gameState === GameStates.PLAYERS_TURN){
            InputSystem.handleInput() // Translate player intention into system input
        } else {
            gameState = GameStates.PLAYERS_TURN // Handle monster/world turns here
        }

        // Check our map generator
        if(InputSystem.newKeyPress('q')){
            floodFillGenerator.next()
        }
        
        MoveSystem.processMoves()
        FovSystem.calculateFOV()
        RenderSystem.render()

        InputSystem.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console
