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

const CAVE_ELLIPSES = 0

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
                const lastRoom = rooms[rooms.length -1]
                const lastCenter = Rect.center(lastRoom)
                if(randint(0,1) === 1){
                    MapGenHelper.createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y)
                    // place one door, at 
                    // if that distance is far at all
                    if(Math.abs(lastCenter.x - center.x) > 1){
                        console.log("BUILD A DOOR");
                        // let's build a door
                        if(lastCenter.x > center.x){
                            // this tunnel is moving to the right, grab the right side of the last
                            // room and combine it with the last center y, add one to that
                            const door = tileGrid.getXY(lastRoom.x + lastRoom.width - 1, lastCenter.y)
                            console.log(door)
                            door.blockSight = true
                        } else {
                            // this tunnel is moving to the left
                            const door = tileGrid.getXY(lastRoom.x, lastCenter.y)
                            door.blockSight = true
                        }
                    }


                    MapGenHelper.createVTunnel(tileGrid, lastCenter.y, center.y, center.x)
                    // create the h door and the v door
                    // let's take x put it there

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

const placeAsteroidChunk = (tileGrid: Grid<Tile>, ellipse: IEllipse): void => {
    tileGrid.forEach((tile: Tile, index: number, x: number, y: number): void => {
        if(Ellipse.containsXY(ellipse, x,y)){ 
            tile.blockMove = true
            tile.blockSight = true
            tile.contained = true
        }
    })
}

const mapGenerator2 = (tileGrid: Grid<Tile>, rooms: IRect[]): void => {
    const MARGINS = 10
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height)
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2)/2)
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7)
    
    
    const SECTION_COUNT = 10
    // const newRoom = Rect.make(Math.floor(tileGrid.width/2 - 10),Math.floor(tileGrid.height/2 - 10),20,20)
    // MapGenHelper.createRoom(tileGrid, newRoom)
    // rooms.push(newRoom)
    // first things first, lets layer some big asteroids on top of each other
    tileGrid.forEach((t: Tile): void => {
        t.blockMove = false
        t.blockSight = false
    })
    // now let's build an asteroid within the bounds
    for(let i = 0; i < SECTION_COUNT; i++){
        const xRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const yRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const bigRadius = Math.max(xRadius, yRadius)
        const x = randint(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius)
        const y = randint(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius)
        placeAsteroidChunk(tileGrid, Ellipse.make(x,y,xRadius,yRadius, RANDOM.next() * Math.PI * 2))
    }
    // now within this framework run the next map generator
    mapGenerator1(tileGrid, rooms)
    
}

export { mapGenerator1, mapGenerator2 }