import { PUBSUB } from '../pubSub/pubSub'
import { Rect, IRect } from '../shapes/rect'
import { Point } from '../shapes/point'
import DEBUG from '../_settings/debugSettings'
import { RANDOM } from '../utils/rngHelper'
import { Entity } from '../entity'
import { placeEntitiesInRoom } from '../entityPlacer'

const EntityPlacementSystem = {
    init: (): void => {
        // Maybe we populate entity data
    },
    placeInitialEntities: (rooms: IRect[]): void => {
        PUBSUB.publish('SYSTEM_ENTITY_PLACEMENT_REQUEST_FN', (gameData: any): void => {
            const { player, npc } = gameData.entityData
            // player and npc placement
            if(rooms.length > 0){
                const pcenter = Rect.center(rooms[0])
                Point.set(player, pcenter.x, pcenter.y)
                const npcenter = Rect.center(rooms[rooms.length - 1])
                Point.set(npc, npcenter.x, npcenter.y)
            }
            if(!DEBUG.SKIP_ENTITY_PLACEMENT){
                for(let i = 1; i < (rooms.length - 2); i++){
                    if(RANDOM.next() < 0.3){
                        const placedEntities: Entity[] = []
                        placeEntitiesInRoom(rooms[i],placedEntities)
                        placedEntities.forEach((e: Entity): void => {gameData.entityData.entities.push(e)})
                    }
                }
            }
            
        })
    }
}
export { EntityPlacementSystem }