import { Entity, IComponent } from '../entity'
import { PUBSUB } from '../../pubSub/pubSub'
import { TOPICS } from '../../pubSub/pubsubTopicList'

class BasicMonster implements IComponent{
    owner: Entity
    constructor(owner: Entity){
        this.owner = owner
    }
    takeTurn(gameData): void{
        console.log(`The ${this.owner.name} wonders when it will get to move`)
        // this is where we publish a move event from if everything works out ok
        // but really we should move it into other ai systems eventually
        // where is the player, and can I move towards them
        // let's look for the player
        const player = gameData.entitiesData.player as Entity
        const me = this.owner as Entity
    }
}

export { BasicMonster }