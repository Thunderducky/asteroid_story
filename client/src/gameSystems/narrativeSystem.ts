import { Entity } from '../entity'
import { PUBSUB } from '../pubSub/pubSub'
import { Grid } from '../grid'
import { Tile } from '../tile'

import GAME_TEXT from '../_data/gameText'
import { Point } from '../shapes/point'
import { TOPICS } from '../pubSub/pubsubTopicList'

// Narrative Data, should put this in the actual game data at some point
let foundCivilian = false
let exited = false
// This currently puts little neat notes in the message log
const NarrativeSystem = {
    init: (): void => {
        PUBSUB.subscribe('moved', (msg): void => {
            PUBSUB.publish('SYSTEM_NARRATIVE_REQUEST_FN', (gameData: any): void => {
                const tileGrid = gameData.tileGrid as Grid<Tile>
                const player = gameData.entityData.player as Entity
                const npc = gameData.entityData.npc as Entity

                if(msg.id === player.id){
                    const currentTile = tileGrid.getP(player)
                    const lastTile = tileGrid.getP(Point.subtract(player, msg.delta))
                    
                    // Narrative: Did we just enter the airlock?
                    if(currentTile.contained && !lastTile.contained){
                        PUBSUB.publish(TOPICS.MESSAGE_LOG, GAME_TEXT.SPACE_RETURN_AIRLOCK)
                    }
                    
                    // Narrative: Did we just find the civilian?
                    if(npc.x === currentTile.x && npc.y === currentTile.y){
                        foundCivilian = true
                        PUBSUB.publish(TOPICS.MESSAGE_LOG, GAME_TEXT.DEAD_CIVILIAN)
                    }
        
                    // Narrative: Did we just leave the airlock
                    if(!currentTile.contained && foundCivilian && !exited){
                        exited = true
                        PUBSUB.publish(TOPICS.MESSAGE_LOG, GAME_TEXT.LEAVE_DEAD_CIVILIAN)
                        // Game end at this point
                    } else if(lastTile.contained && !currentTile.contained){
                        PUBSUB.publish(TOPICS.MESSAGE_LOG, GAME_TEXT.AIRLOCK_TO_SPACE)
                    }
                }
            })
        })
    }
}
export { NarrativeSystem}