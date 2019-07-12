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
import { Rect } from './shapes/rect';
import { EntityMaker } from './entitySystem/entityMaker';

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

// This is based off of terrain
// I'm really happy with a lot of my underlying library
// functions

// so let's build a system we can request pathfinding from
// this doesn't work with grouped moves, so we need a way to shift that I suppose
const pathfindingSystem = {
  requestPath: function(origin, destination, tileGrid){
  // inside is where we can do more optimizations
  // well worn territory is good, we should try there first, and I like
  // the idea that we can 'tread' and create roads that way
    let pathfind = processPathfindingGrid(origin, destination, tileGrid);
    let isDone = pathfind.next().done || false
    let value = []
    while(!isDone){
      const next = pathfind.next()
      value = next.value || value;
      isDone = next.done
    }
    console.log(value);
    return value;
    // and then be done
  }
}
// subturn scheduling and rework

// pathfindingSystem.requestPath(origin, destination, squareGrid);
// pathfindingSystem.requestPath(destination, origin, squareGrid);


//just allowing these out while we figure out what to do next
// generators are kind of really cool!
GameData.entityData.player.x = 1;
GameData.entityData.player.y = 1;
const spaceOrc = EntityMaker.spaceOrc(10, 10)
const spaceOrc2 = EntityMaker.spaceOrc(12, 12)
const spaceOrc3 = EntityMaker.spaceOrc(8, 13)
GameData.entityData.entities.push(spaceOrc)
GameData.entityData.entities.push(spaceOrc2)
GameData.entityData.entities.push(spaceOrc3)
GameData.tileGrid.getSubgrid(Rect.make(5, 5, 8, 1)).forEach(t => { t.blockMove = true; t.blockSight = true})
loadImage('assets/out.png').then((image: any): void => {
    RenderSystem.init(image)

    // Need to have this marked appropriately
    PUBSUB.publish('fov_recompute', true)
    // Loop
    const loop = (): void => {

        if(gameState === GameStates.PLAYERS_TURN){
            InputSystem.handleInput() // Translate player intention into system input
        } else {
            // Process non player entities
            GameData.entityData.entities.filter((e: Entity): boolean => e.components.has('ai')).forEach((entity: Entity): void => {
                const ai = entity.components.get('ai') as BasicMonster
                //ai.takeTurn(GameData)
            })
            gameState = GameStates.PLAYERS_TURN // Handle monster/world turns here
        }
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

        // Publish Move Towards and the movesystem handles that
        MoveSystem.processMoves()
        FovSystem.calculateFOV()
        RenderSystem.render()

        InputSystem.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

}).catch((err: any): void => console.log(err)) //eslint-disable-line no-console
