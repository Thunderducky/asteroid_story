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
import { IRenderCell, RenderOrder } from './rendering/renderCell'
import { Point, IPoint } from './shapes/point'
import { processPathfindingGrid } from './pathfinding'
import { Rect } from './shapes/rect'
import { EntityMaker } from './entitySystem/entityMaker'
import { Tile } from './tile';
import { PathfindingSystem } from './gameSystems/pathfindingSystem'
import { CombatSystem } from './gameSystems/combatSystem'
import { drawStringToGrid } from './rendering/renderHelpers';
import COLORS from './_settings/colors';
import { Fighter } from './entitySystem/components/fighter';

RANDOM.initializeSystem()

GameData.init()


let gameState = GameStates.PLAYERS_TURN

// Mark things as being the enemy turn, not sure how to handle that one
PUBSUB.subscribe('player_wants_to_move', (msg): void => {
    PUBSUB.publish('move', msg)
    gameState = GameStates.ENEMY_TURN
})

// All of this is good
MapBuilderSystem.init()
MapBuilderSystem.buildMap()
EntityPlacementSystem.init()
MessageLogSystem.init(GameData.messageLog) // Still need to do this
//EntityPlacementSystem.placeInitialEntities() // Rooms should be moved inside gameData as well
DebugDrawSystem.init()
FovSystem.init()
CameraSystem.init()
NarrativeSystem.init()
MoveSystem.init()
InputSystem.init()
PathfindingSystem.init()
CombatSystem.init()

//just allowing these out while we figure out what to do next
// generators are kind of really cool!
GameData.entityData.player.x = 1
GameData.entityData.player.y = 1
const spaceOrc = EntityMaker.spaceOrc(10, 10)
const spaceOrc2 = EntityMaker.spaceOrc(12, 12)
const spaceOrc3 = EntityMaker.spaceOrc(8, 13)
GameData.entityData.entities.push(spaceOrc)
GameData.entityData.entities.push(spaceOrc2)
GameData.entityData.entities.push(spaceOrc3)

GameData.tileGrid.getSubgrid(Rect.make(5, 5, 8, 1)).forEach(t => { t.blockMove = true; t.blockSight = true })

// I would need to manually lower the priority on this one
PUBSUB.subscribe('dies', ({ id }) => {
    if (id === GameData.entityData.player.id) {
        gameState = GameStates.PLAYER_DEAD // game over man
        PUBSUB.publish(TOPICS.MESSAGE_LOG, { 
            text: `Game over man!`
        })
    }
});

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
            GameData.entityData.entities.filter((e: Entity): boolean => e.components.has('ai')).forEach((entity: Entity): void => {
                // TODO: Only VISIBLE entities
                const ai = entity.components.get('ai') as BasicMonster
                ai.takeTurn(GameData)
                MoveSystem.processMoves()
            })

            if (gameState === GameStates.ENEMY_TURN) {
                gameState = GameStates.PLAYERS_TURN
            }
        }


        // Publish Move Towards and the movesystem handles that
        MoveSystem.processMoves()
        FovSystem.calculateFOV()
        // Let's add our stuff to the renderGrid here
        const renderGrid = GameData.renderGrid;
        const HP_BAR_Y = 21;

        RenderSystem.render()
        for(let i = 0; i < 20; i++){

        }
        renderGrid.getXY(0, HP_BAR_Y)
        const playerFighter = GameData.entityData.player.components.get('fighter') as Fighter
        if(playerFighter){
            for(var i = 0; i < playerFighter.hpMax; i++){
                const rCell = renderGrid.getXY(i, HP_BAR_Y )
                rCell.character = ''
            }
            drawStringToGrid(renderGrid, `HP ${playerFighter.hp}/${playerFighter.hpMax}`, 1, 21, COLORS.palette.white)
            for(var i = 0; i < playerFighter.hpMax; i++){
                const rCell = renderGrid.getXY(i, HP_BAR_Y )
                rCell.backColor = (i <= playerFighter.hp) ? "#006600" : "#220000"
            }
        }
        InputSystem.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console

// FINISH THE INTERFACE AND THEN COMMIT