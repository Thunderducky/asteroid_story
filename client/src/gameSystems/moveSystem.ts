import { PUBSUB } from '../pubSub/pubSub'
// import { TOPICS } from '../pubSub/pubsubTopicList'
import { Entity } from '../entitySystem/entity'
import DEBUG from '../_settings/debugSettings'
import { IMoveMessage } from '../pubSub/messageTypes'
// import { Fighter } from '../entitySystem/components/fighter'

// New law, no include listeners by default, they always have to be turned on
// TODO: Improve this

/**
 * This system is responsible for processing moves, including preventing invalid moves
 */
const MoveSystem = {
    init: (): void => {
        // Start listening for events
        PUBSUB.subscribe('move', (msg: IMoveMessage): void => {
            PUBSUB.publish('SYSTEM_MOVE_REQUEST_FN', (moveData: any): void => {
                moveData.moves.push(msg)
            })
        })

    },
    processMoves: (): void => {
        PUBSUB.publish('SYSTEM_MOVE_REQUEST_FN', (moveData: any): void => {
            const {player, entities} = moveData.entityData
            moveData.moves.forEach((moveMsg: IMoveMessage): void => {
                const move = moveMsg.delta
                const id = moveMsg.id
                const mover = entities.find((e: Entity): boolean => e.id == id) as Entity
                if(!mover){
                    return
                }
                // TODO: maybe split this into two moves?
                const destinationX = mover.x + move.x
                const destinationY = mover.y + move.y
                if(moveData.tileGrid.inBoundsXY(destinationX, destinationY)){
                    const tile = moveData.tileGrid.getXY(destinationX, destinationY)
                    if(!tile.blockMove || (DEBUG.ENABLE_CLIPPING && mover.id === player.id)){
                        // Now we need to handle attacking in here as well, as well as mitigate the debug settings
                        // check for blocking objects
                        const target = Entity.getBlockingEntityAtLocation(entities, destinationX, destinationY)

                        // we should be moving this over to a combat system eventually
                        if(target !== null){
                            // Republish this as an act
                            if(player.id === id){
                                if(target.components.has('fighter')){
                                    PUBSUB.publish('attack', { attacker: player, defender: target})
                                }
                                
                            } else if(target.id === player.id){
                                if(mover.components.has('fighter')){
                                    PUBSUB.publish('attack', { attacker: mover, defender: player})
                                } 
                            }
                            // Monsters will currently not try and attack each other
                        } else {
                            mover.move(move.x, move.y)
                            if(mover.id === player.id){
                                PUBSUB.publish('fov_recompute', true)
                            }
                            PUBSUB.publish('moved', moveMsg) // only publish move if the entity actually completed the move
                        }
                    }
                }
            })
            moveData.moves.length = 0
        })
    }
}

export { MoveSystem }
