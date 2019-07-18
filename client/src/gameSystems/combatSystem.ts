import { PUBSUB } from '../pubSub/pubSub'
import { Entity } from '../entitySystem/entity'
import { Fighter } from '../entitySystem/components/fighter'
import { TOPICS } from '../pubSub/pubsubTopicList'
import { RenderOrder } from '../rendering/renderCell'

const CombatSystem = {
    init: (): void => {
        // This is really a melee capability
        // we might need to refactor this later
        // depending on how much we focus on combat
        PUBSUB.subscribe('attack', (msg): void => {
            if(!msg.attacker || !msg.defender){
                throw new Error('attacks must have an attacker and a defender')
            }
            const attacker = msg.attacker as Entity
            const defender = msg.defender as Entity
            
            // Let's guarantee with have fighters for both, if not...
            // for now we'll throw an error during development
            const aFighter = attacker.components.get('fighter') as Fighter
            if(!aFighter){
                // well no point in attacking anyone
                throw new Error('attacker has no fighter component')
            }
            const bFighter = defender.components.get('fighter') as Fighter
            if(!bFighter){
                throw new Error('defender has no fighter component')
            }
            // If we have gotten here, everything should be fine

            const damage = aFighter.attack(bFighter)
            PUBSUB.publish(TOPICS.MESSAGE_LOG, { 
                text: `${attacker.name} attacks ${defender.name} for ${damage} damage`
            })

            if(bFighter.hp < 0){
                PUBSUB.publish('dies', { id: defender.id })
            }
        })

        PUBSUB.subscribe('dies', ({ id }): void => {
            PUBSUB.publish('SYSTEM_COMBAT_REQUEST_FN', (gameData: any): void => {
                const entityData = gameData.entityData
                const deceased = entityData.entities.find((e: any): boolean => e.id === id) as Entity
                PUBSUB.publish(TOPICS.MESSAGE_LOG, { 
                    text: `${deceased.name} has died`
                })
                deceased.blocksMove = false
                deceased.character = 'd'
                deceased.color = '#660000'
                deceased.renderOrder = RenderOrder.Corpse
                deceased.name = 'remains of ' + deceased.name
                deceased.components.delete('fighter')
                // if it has one
                deceased.components.delete('ai')
            })
        })
    }
} 

export { CombatSystem }