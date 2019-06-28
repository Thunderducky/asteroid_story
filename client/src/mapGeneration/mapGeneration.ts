import { Grid } from '../grid'
import { Tile } from '../tile'

import { IRect, Rect } from '../shapes/rect'
import { RANDOM } from '../rngHelper'
import { MapGenHelper } from './mapGenHelper'
import { IEllipse, Ellipse } from '../shapes/ellipse'


const ROOM_MAX_SIZE = 16
const ROOM_MIN_SIZE = 10
const MAX_ROOMS = 40
const MAX_ELLIPSE_RADIUS = ROOM_MAX_SIZE
const MIN_ELLIPSE_RADIUS = ROOM_MAX_SIZE / 4

const CAVE_ELLIPSES = 30

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
// todo, allow us to watch this in real time, and even toggle next
const mapGenerator3 = (tileGrid: Grid<Tile>, rooms: IRect[]): void => {
    tileGrid.forEach((t: Tile): void => {
        t.blockMove = false
        t.blockSight = false
        t.contained = false
        t.explored = true // remove later
    })

    const MARGINS = 10
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height)
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2)/2)
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7)
    const SECTION_COUNT = 10

    // GENERATE THE ASTEROID "SHELL"
    const asteroidEllipses = []
    for(let i = 0; i < SECTION_COUNT; i++){
        const xRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const yRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const bigRadius = Math.max(xRadius, yRadius)
        const x = randint(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius)
        const y = randint(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius)
        const ellipse = Ellipse.make(x,y,xRadius,yRadius, RANDOM.next() * Math.PI * 2)
        asteroidEllipses.push(ellipse)
        placeAsteroidChunk(tileGrid, ellipse)
    }

    // bounds of the asteroid shell
    let leftX = Math.floor(tileGrid.width/2), rightX = Math.floor(tileGrid.width/2)
    let topY = Math.floor(tileGrid.width/2), bottomY = Math.floor(tileGrid.width/2)

    // we need to be able to draw this debug container
    asteroidEllipses.forEach((ellipse: IEllipse): void => {
        const maxRadius = Math.max(ellipse.xRadius, ellipse.yRadius)
        leftX = Math.min(leftX, ellipse.x - maxRadius)
        topY = Math.min(topY, ellipse.y - maxRadius)
        rightX = Math.max(rightX, ellipse.x + maxRadius - 1 )
        bottomY = Math.max(bottomY, ellipse.y + maxRadius - 1)
    })

    // MapGenHelper.createHWall(tileGrid, leftX, rightX, topY)
    // MapGenHelper.createVWall(tileGrid, topY, bottomY, leftX)
    // MapGenHelper.createHWall(tileGrid, leftX, rightX, bottomY)
    // MapGenHelper.createVWall(tileGrid, topY, bottomY, rightX)
    // within this, let's build rooms and stuff

    for(let r = 0; r < MAX_ROOMS; r++){
        const w = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE)
        const h = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE)
        const x = randint(leftX, rightX - w - 1)
        const y = randint(topY, bottomY  - h - 1)

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
    // Now let's place some more ellipses
    for(let e = 0; e < CAVE_ELLIPSES; e++){
        const ellipse = randomEllipse(Math.floor(leftX + MAX_ELLIPSE_RADIUS/2), Math.floor(rightX - MAX_ELLIPSE_RADIUS/2), Math.floor(topY + MAX_ELLIPSE_RADIUS/2), Math.floor(bottomY - MAX_ELLIPSE_RADIUS/2))
        MapGenHelper.carveEllipse(tileGrid, ellipse )
    }

    // let's place some initial asteroid bumps
}

// TODO, add a debug rendering helper

export { mapGenerator1, mapGenerator2, mapGenerator3 }
