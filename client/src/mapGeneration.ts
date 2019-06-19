import { Grid } from './grid'
import { Tile } from './tile'

import { IRect, Rect } from './shapes/rect'
import { RANDOM } from './rngHelper'
import { MapGenHelper } from './mapGenHelper'
import { IEllipse, Ellipse } from './shapes/ellipse'


const ROOM_MAX_SIZE = 10
const ROOM_MIN_SIZE = 10
const MAX_ROOMS = 30
const MAX_ELLIPSE_RADIUS = ROOM_MAX_SIZE / 2
const MIN_ELLIPSE_RADIUS = ROOM_MAX_SIZE / 4

const CAVE_ELLIPSES = 10

const randint = (min: number, max: number): number => {
    return Math.floor(RANDOM.next() * (max - min + 1)) + min
}

const randomEllipse = (minX: number, maxX: number, minY: number, maxY: number): IEllipse => {
    return Ellipse.make(
        randint(minX, maxX),
        randint(minY, maxY),
        randint(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS),
        randint(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS),
        RANDOM.next() * Math.PI * 2 
    )
}

/**
 * Place a bunch of rooms opportunistically, and then carve out some ellipses randomly
 * @param tileGrid tileGrid to be populated
 * @param rooms List of rooms to be populated
 */
const mapGenerator1 = (tileGrid: Grid<Tile>, rooms: IRect[]): void => {
    for(let r = 0; r < MAX_ROOMS; r++){
    
        const w = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE)
        const h = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE)
        const x = randint(0, tileGrid.width - w - 1)
        const y = randint(0, tileGrid.height  - h - 1)
    
        const newRoom = Rect.make(x,y,w,h)
        let intersects = false
        for(let i = 0; i < rooms.length; i++){
            if(Rect.intersects(newRoom, rooms[i])){
                intersects = true
                break
            }
        }
        if(!intersects){
            const center = Rect.center(newRoom)
            MapGenHelper.createRoom(tileGrid, newRoom)
            if(rooms.length > 0){
                const lastCenter = Rect.center(rooms[rooms.length -1])
                if(randint(0,1) === 1){
                    MapGenHelper.createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y)
                    MapGenHelper.createVTunnel(tileGrid, lastCenter.y, center.y, center.x)
                }
                else {
                    MapGenHelper.createVTunnel(tileGrid, lastCenter.y, center.y, lastCenter.x)
                    MapGenHelper.createHTunnel(tileGrid, lastCenter.x, center.x, center.y)
                }
    
            }
            rooms.push(newRoom)
        }
    }
    for(let e = 0; e < CAVE_ELLIPSES; e++){
        MapGenHelper.carveEllipse(tileGrid, randomEllipse(MAX_ELLIPSE_RADIUS, tileGrid.width -1 - MAX_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS, tileGrid.height - 1 - MAX_ELLIPSE_RADIUS))
    }
}

export { mapGenerator1 }