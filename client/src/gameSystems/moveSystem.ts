import { PUBSUB } from '../pubSub/pubSub'
import { TOPICS } from '../pubSub/pubsubTopicList'
import { Entity } from '../entitySystem/entity'
import DEBUG from '../_settings/debugSettings'

// New law, no include listeners by default, they always have to be turned on
// TODO: Improve this
const MoveSystem = {
    init: (): void => {
        // Start listening for events
        PUBSUB.subscribe('move', (msg): void => {
            PUBSUB.publish('SYSTEM_MOVE_REQUEST_FN', (moveData: any): void => {
                moveData.moves.push(msg)
            })
        })
    },
    processMoves: (): void => {
        PUBSUB.publish('SYSTEM_MOVE_REQUEST_FN', (moveData: any): void => {
            const {player, entities} = moveData.entityData
            moveData.moves.forEach((moveMsg: any): void => {
                const move = moveMsg.delta
                const id = moveMsg.id
                const mover = entities.find((e: Entity): boolean => e.id == id)
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

                        if(target !== null){
                            // Republish this as an act
                            PUBSUB.publish(TOPICS.MESSAGE_LOG, {text: 'You kick the ' + target.name + ' in the shins, annoying it greatly' })
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