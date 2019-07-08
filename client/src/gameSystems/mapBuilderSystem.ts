import { PUBSUB } from '../pubSub/pubSub'
import { Grid } from '../grid'
import { Tile, TileMaterial } from '../tile'
import { IRect } from '../shapes/rect'
import { progressiveMapGenerator } from '../mapGeneration/bsp/bspMapGenerator'
// import { TOPICS } from '../pubSub/pubsubTopicList';
import { generateFloodGrid, processNetwork } from '../utils/floodFiller'
import { RANDOM } from '../utils/rngHelper'

const tryToConnectNetworks = (): void => {
    PUBSUB.publish('SYSTEM_MAP_BUILDER_REQUEST_FN', (gameData: any): void => {

        let isVisited = gameData.mapBuilderData.rooms.map((r: any): any => { return { room: r, visited: false}}) // we're going to be updating this list
        // as a filter pretty often
        const floodGrid = generateFloodGrid(gameData.tileGrid)
        const getConnectedRooms = (floodGrid: Grid<any>, rooms: IRect[], evalFn: Function, startX: number, startY: number): any[] => {
            const floodFillGenerator = processNetwork(floodGrid, evalFn, startX, startY)
            floodFillGenerator.next() // right now it's just one step
            let visitedCells = floodGrid.cells.filter((c: any): void => c.visited)
            // this is our temporary fix, eventually I want to allow a 'visit' function in our floodFillGenerator as wel
            visitedCells.forEach((vc: any): void => {
                rooms.filter((iv: any): any => !iv.visited).forEach((iv: any): any => {
                    if(iv.room.x <= vc.cell.x && vc.cell.x < iv.room.x + iv.room.width &&
                        iv.room.y <= vc.cell.y && vc.cell.y < iv.room.y + iv.room.height){
                        iv.visited = true
                    }
                })
            })
            return rooms.filter((v: any): any => v.visited)
        }
        const networks = [] as any[]                                                           
        while(isVisited.length > 0){
            const network = getConnectedRooms(
                floodGrid, isVisited, 
                (c: Tile): boolean => !c.blockMove && c.material !== TileMaterial.Space,
                isVisited[0].room.x + isVisited[0].room.width/2 | 0, 
                isVisited[0].room.y  + isVisited[0].room.height/2 | 0 
            )
            isVisited = isVisited.filter((v: any): any => !v.visited)
            networks.push(network)
        }


        networks.forEach((network, index): void => {
            if(index === 0){
                return // skip this cycle
            }

            const lastNetwork = networks[index - 1]

            const lastNRoom = lastNetwork[RANDOM.nextInt(0, lastNetwork.length - 1)].room
            const nRoom = network[RANDOM.nextInt(0, network.length - 1)].room

            const drawH = (startX: number, endX: number, y: number): void => {
                for(let x = startX; x <= endX; x++){
                    const tile = gameData.tileGrid.getXY(x,y)
                    if(!gameData.tileGrid.getNeighborsXY(x,y).some((t: Tile): boolean => !t.contained)){
                        tile.blockMove = false
                        tile.blockSight = false
                    }
                }
            }
            

            const drawV = (startY: number, endY: number, x: number): void => {
                for(let y = startY; y <= endY; y++){
                    const tile = gameData.tileGrid.getXY(x,y)
                    if(!gameData.tileGrid.getNeighborsXY(x,y).some((t: Tile): boolean => !t.contained)){
                        tile.blockMove = false
                        tile.blockSight = false
                    }
                }
            }

            // right now this is blowing up doors, so it's probably best not to insert them
            if(lastNRoom.x < nRoom.x){
                drawH(lastNRoom.x + lastNRoom.width /2 | 0, nRoom.x + nRoom.width / 2 | 0, lastNRoom.y + lastNRoom.height / 2 | 0)
                if(lastNRoom.y < nRoom.y){
                    drawV(lastNRoom.y + lastNRoom.height /2 | 0, nRoom.y + nRoom.height / 2 | 0, nRoom.x + nRoom.width / 2 | 0)
                } else {
                    drawV(nRoom.y + nRoom.height /2 | 0, lastNRoom.y + lastNRoom.height / 2 | 0, nRoom.x + nRoom.width / 2 | 0)
                }
            } else {
                drawH(nRoom.x + nRoom.width /2 | 0, lastNRoom.x + lastNRoom.width / 2 | 0, nRoom.y + nRoom.height / 2 | 0)
                if(lastNRoom.y < nRoom.y){
                    drawV(lastNRoom.y + lastNRoom.height /2 | 0, nRoom.y + nRoom.height / 2 | 0, lastNRoom.x + lastNRoom.width / 2 | 0)
                } else {
                    drawV(nRoom.y + nRoom.height /2 | 0, lastNRoom.y + lastNRoom.height / 2 | 0, lastNRoom.x + nRoom.lastNRoom / 2 | 0)
            
                }
            }
        })

    })
}

const MapBuilderSystem =  {
    init: (): void => {

    },
    buildMap: (): void => {
        PUBSUB.publish('SYSTEM_MAP_BUILDER_REQUEST_FN', (gameData: any): void => {
            const tileGrid = gameData.tileGrid as Grid<Tile>
            const mapBuildData = gameData.mapBuilderData
            const rooms = mapBuildData.rooms as IRect[]
            const airlocks = mapBuildData.airlocks as IRect[]
            const levelIterator = progressiveMapGenerator(tileGrid, rooms, airlocks)
            levelIterator.next()
            tryToConnectNetworks()
        })
    },
    buildMapStep: (): void => {
        // useful for when we are working with generators
    }

}

export { MapBuilderSystem}