import { Entity, IComponent } from '../entity'
import { PUBSUB } from '../../pubSub/pubSub'
// import { TOPICS } from '../../pubSub/pubsubTopicList'
import { Point } from '../../shapes/point'
import { FOVCell } from '../../fov'
import { Grid } from '../../grid'
import { RANDOM } from '../../utils/rngHelper';

class BasicMonster implements IComponent{
    owner: Entity
    constructor(owner: Entity){
        this.owner = owner
    }
    takeTurn(gameData: any): void{
        const player = gameData.entityData.player as Entity
        const me = this.owner as Entity
        const path: any[] = []
        const fovGrid = gameData.fov.grid as Grid<FOVCell>
        // proceed unless interrupted. if not clear path, chill, or return to starting location
        const screenPosition = Point.subtract(me, fovGrid)
        
        if(gameData.fov.grid.inBoundsXY(screenPosition.x, screenPosition.y)){
            if(fovGrid.getP(screenPosition).visible){
                PUBSUB.publish('FIND_PATH', {origin: me, target: player, path})
                path.pop()
                const next = path.pop()
                if(next){
                    const delta = Point.subtract(next, me)
                    PUBSUB.publish('move', { delta, id: me.id })
                }
            }
        }
    }
}

class ConfusedMonster implements IComponent{
    owner: Entity
    constructor(owner: Entity){
        this.owner = owner
    }
    takeTurn(gameData: any): void{
        const player = gameData.entityData.player as Entity
        const me = this.owner as Entity
        const path: any[] = []
        const fovGrid = gameData.fov.grid as Grid<FOVCell>
        // proceed unless interrupted. if not clear path, chill, or return to starting location
        const screenPosition = Point.subtract(me, fovGrid)
        
        // Try and move in a random direction
        const x = RANDOM.nextInt(0, 2) - 1
        const y = RANDOM.nextInt(0,2) - 1
        PUBSUB.publish('move', { delta: {x,y}, id: me.id })
        // if(gameData.fov.grid.inBoundsXY(screenPosition.x, screenPosition.y)){
        //     if(fovGrid.getP(screenPosition).visible){
        //         PUBSUB.publish('FIND_PATH', {origin: me, target: player, path})
        //         path.pop()
        //         const next = path.pop()
        //         if(next){
        //             const delta = Point.subtract(next, me)
        //             PUBSUB.publish('move', { delta, id: me.id })
        //         }
        //     }
        // }
    }
}

export { BasicMonster, ConfusedMonster }