import { PUBSUB } from '../pubSub/pubSub'
import { IPoint } from '../shapes/point'
import { Tile } from '../tile'
import { Grid } from '../grid'

import { processPathfindingGrid } from '../pathfinding'

const PathfindingSystem = {
    init: (): void => {
        PUBSUB.subscribe('FIND_PATH', (msg): void => {
            const origin = msg.origin as IPoint
            const target = msg.target as IPoint
            const path = msg.path as Tile[]
            PUBSUB.publish('SYSTEM_PATHFINDING_REQUEST', (msg): void => {
                const tileGrid = msg.tileGrid as Grid<Tile>
                const pathfind = processPathfindingGrid(origin, target, tileGrid)
                let isDone = pathfind.next().done || false
                let value: any[] = []
                while(!isDone){
                    const next = pathfind.next()
                    value = next.value || value
                    isDone = next.done
                }
                if(value && value.length > 0){
                    value.forEach((v): void => {
                        path.push(v)
                    })
                }
            })    
        })
    }
}

export { PathfindingSystem }