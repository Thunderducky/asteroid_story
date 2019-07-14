import { Entity, IComponent } from '../entity'
import { PUBSUB } from '../../pubSub/pubSub'
import { TOPICS } from '../../pubSub/pubsubTopicList'
import { Point } from '../../shapes/point';

class BasicMonster implements IComponent{
    owner: Entity
    constructor(owner: Entity){
        this.owner = owner
    }
    takeTurn(gameData): void{
        const player = gameData.entityData.player as Entity
        const me = this.owner as Entity
        const path: any[] = []
        
        // proceed unless interrupted. if not clear path, chill, or return to starting location
        const screenPosition = Point.add(me, gameData.fov.grid);
        if(gameData.fov.grid.getP(screenPosition).visible){
            PUBSUB.publish('FIND_PATH', {origin: me, target: player, path})
            path.pop()
            const next = path.pop()
            if(next){
                const delta = Point.subtract(next, me);
                PUBSUB.publish("move", { delta, id: me.id })
            }
        }
    }
}

export { BasicMonster }