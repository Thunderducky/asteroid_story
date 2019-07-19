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
import { PathfindingSystem } from './gameSystems/pathfindingSystem'
import { CombatSystem } from './gameSystems/combatSystem'
import { drawStringToGrid } from './rendering/renderHelpers'
import COLORS from './_settings/colors'
import { Fighter } from './entitySystem/components/fighter'
import DEBUG from './_settings/debugSettings'
import { Inventory } from './entitySystem/components/inventory'
import { Rect } from './shapes/rect';
import { wrapText } from './messageLog';

RANDOM.initializeSystem()

GameData.init()


let gameState = GameStates.PLAYERS_TURN

// Mark things as being the enemy turn, not sure how to handle that one
PUBSUB.subscribe('player_wants_to_move', (msg): void => {
    PUBSUB.publish('move', msg)
    gameState = GameStates.ENEMY_TURN
})

PUBSUB.subscribe('player_wants_to_pickup_item', (): void => {
    PUBSUB.publish('pickup', {actorId: GameData.entityData.player.id})
    gameState = GameStates.ENEMY_TURN
})

// for now you just pickup whatever you have there
PUBSUB.subscribe('pickup', ({ actorId }): void => {
    // console.log('TRYING TO PICKUP')
    const entity = GameData.entityData.entities.find((e): boolean => e.id === actorId) as Entity
    if(!entity || !entity.components.has('inventory')){
        // Add debug flags so we can track these events
        return // couldn't find entity
    }
    // console.log(entity)
    const item = GameData.entityData.entities.find((e): boolean => {
        return e.x === entity.x && e.y === entity.y && e.components.has('item')
    })
    // console.log(item)
    // Let's look for items in that area
    if(item){
        const inventory = entity.components.get('inventory') as Inventory
        if(inventory.addItem(item)){
            // You successfully added the item
            // not exactly the MOST performant thing, but hey :D
            const itemIndex = GameData.entityData.entities.findIndex((e: Entity): boolean => e.id === item.id)
            GameData.entityData.entities.splice(itemIndex, 1)
            // We want to delete it GameData.entityData.entities.splice()
            // console.log('The item is picked up!')
        } else {
            // console.log('The item was not picked up')
            // Your inventory is probably full and you can't pick it up
        }
    }
})
if(DEBUG.MOUNT_WINDOW_DATA){
    const w = window as any
    w.GameData = GameData
    w.PUBSUB = PUBSUB
}

// All of this is good
MapBuilderSystem.init()
MapBuilderSystem.buildMap()
EntityPlacementSystem.init()
MessageLogSystem.init(GameData.messageLog) // Still need to do this
EntityPlacementSystem.placeInitialEntities() // Rooms should be moved inside gameData as well
DebugDrawSystem.init()
FovSystem.init()
CameraSystem.init()
NarrativeSystem.init()
MoveSystem.init()
InputSystem.init()
PathfindingSystem.init()
CombatSystem.init()

// Test that all the systems are activated?
//just allowing these out while we figure out what to do next
// generators are kind of really cool!

// I would need to manually lower the priority on this one
PUBSUB.subscribe('dies', ({ id }): void => {
    if (id === GameData.entityData.player.id && !DEBUG.PLAYER_UNKILLABLE) {
        gameState = GameStates.PLAYER_DEAD // game over man
        PUBSUB.publish(TOPICS.MESSAGE_LOG, { 
            text: 'Game over man!'
        })
    }
})
const textMonitor = {
    // convert this to work with phrases
    text: "this is some text",
    foreColor: "#FFFFFF",
    backColor: "#000000",
    screenFrame: Rect.make(0,0,30, 30) // these are 
}
const renderTextMonitorToGrid = (renderGrid): void => {
    const adjustedText = wrapText(textMonitor.text, textMonitor.screenFrame.width)
    drawStringToGrid(renderGrid, adjustedText, textMonitor.screenFrame.x, textMonitor.screenFrame.y, textMonitor.foreColor, textMonitor.backColor)
}
{
    const w = window as any
    w.textMonitor = textMonitor
}

// Let's handle some death sequences in here as well
gameState = GameStates.PLAYERS_TURN
loadImage('assets/out.png').then((image: any): void => {
    RenderSystem.init(image)

    // Need to have this marked appropriately
    PUBSUB.publish('fov_recompute', true)
    // Loop
    const loop = (): void => {

        // TODO: slowly let the game keep playing out if the player is dead, like let it flip
        // every so often in clock cycles
        if (gameState === GameStates.PLAYERS_TURN) {
            InputSystem.handleInput() // Translate player intention into system input
        } else if (gameState === GameStates.ENEMY_TURN) {
            // Process non player entities
            if(!DEBUG.SKIP_ENEMY_TURN){
                GameData.entityData.entities.filter((e: Entity): boolean => e.components.has('ai')).forEach((entity: Entity): void => {
                    // TODO: Only VISIBLE entities
                    const ai = entity.components.get('ai') as BasicMonster
                    ai.takeTurn(GameData)
                    MoveSystem.processMoves()
                })
            }

            if (gameState === GameStates.ENEMY_TURN) {
                gameState = GameStates.PLAYERS_TURN
            }
        }
        // Move a lot of this into a UI system that inspects things, and also keeps track of ui state

        // Let's pull something off of renderGrid, we can also set renderOrders of grids, but thats another concern

        // Monitor
        // WHat's a monitor it just tries to display text on page, the monitors text can be update, but it doesn't really care about that, it just tries to fit it in the render grid
        

        // Publish Move Towards and the movesystem handles that
        MoveSystem.processMoves()
        FovSystem.calculateFOV()
        // Let's add our stuff to the renderGrid here
        RenderSystem.clear();
        const renderGrid = GameData.renderGrid
        const HP_BAR_Y = 51
        renderGrid.getXY(0, HP_BAR_Y)
        const playerFighter = GameData.entityData.player.components.get('fighter') as Fighter
        if(playerFighter){
            for(let i = 0; i < playerFighter.hpMax; i++){
                const rCell = renderGrid.getXY(i, HP_BAR_Y )
                rCell.character = ''
            }
            drawStringToGrid(renderGrid, `HP ${playerFighter.hp}/${playerFighter.hpMax}`, 1, HP_BAR_Y, COLORS.palette.white)
            for(let i = 0; i < playerFighter.hpMax; i++){
                const rCell = renderGrid.getXY(i, HP_BAR_Y )
                rCell.backColor = (i <= playerFighter.hp) ? '#006600' : '#220000'
            }
        }
        RenderSystem.renderToGrid()
        renderTextMonitorToGrid(renderGrid)
        RenderSystem.render()
        InputSystem.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console
// FINISH THE INTERFACE AND THEN COMMIT