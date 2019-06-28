// using this for reference: https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
import { Grid } from '../grid'
import { Tile } from '../tile'
import { IRect, Rect } from '../shapes/rect'

import { IEllipse, Ellipse } from '../shapes/ellipse'
import { RANDOM } from '../rngHelper'
import { Point } from '../shapes/point'
import { MapGenHelper } from './mapGenHelper'

const MAX_LEAF_SIZE = 20
const MIN_LEAF_SIZE = 10
const MIN_ELLIPSE_RADIUS = 5
const MAX_ELLIPSE_RADIUS = 10
class Leaf implements IRect {
    x: number;
    y: number;
    width: number;
    height: number;
    left: Leaf | null;
    right: Leaf | null;
    room: IRect | null;
    halls: IRect[] | null;
    constructor(x: number,y: number,width: number,height: number){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.left = null
        this.right = null
        this.room = null
        this.halls = null
    }

    hasSplit(): boolean{
        if(this.left != null || this.right != null){
            // we've already split, cut it out!
            return true
        }
        return false

    }
    split(): boolean{
        if(this.hasSplit()){
            return false
        }

        let splitHorizontally: boolean = RANDOM.next() < 0.5
        if(this.width > this.height && this.width / this.height > 1.25){
            splitHorizontally = false
        } else if(this.height > this.width && this.height / this.width >= 1.25){
            splitHorizontally = true
        }

        const max = (splitHorizontally ? this.height : this.width) - MIN_LEAF_SIZE
        if(max <= MIN_LEAF_SIZE){
            // to smol, don't split any more
            return false
        }

        // find a split, calculated randomly
        const split = RANDOM.nextInt(MIN_LEAF_SIZE, max)

        if(splitHorizontally){
            this.left = new Leaf(this.x,this.y, this.width, split)
            this.right= new Leaf(this.x, this.y + split, this.width, this.height - split)
        } else {
            this.left = new Leaf(this.x,this.y, split, this.height)
            this.right= new Leaf(this.x + split, this.y, this.width - split, this.height)
        }
        return true
    }

    createRooms(): void {
        if(this.left != null || this.right != null){
            if(this.left != null || this.right != null){
                const left = this.left as Leaf
                left.createRooms()
            }
            if(this.right != null || this.right != null){
                const right = this.right as Leaf
                right.createRooms()
            }

            if(this.left != null && this.right != null){
                const leftRoom = this.left.getRoom()
                const rightRoom = this.right.getRoom()
                if(leftRoom != null && rightRoom != null){
                    this.createHall(leftRoom as IRect, rightRoom as IRect)
                }
            }

        } else {
            const roomSize = Point.make(RANDOM.nextInt(3, this.width - 2), RANDOM.nextInt(3, this.height - 2))
            const roomPos = Point.make(RANDOM.nextInt(1, this.width - roomSize.x - 1), RANDOM.nextInt(1, this.height - roomSize.y - 1))
            this.room = Rect.make(this.x + roomPos.x, this.y + roomPos.y, roomSize.x, roomSize.y)
        }
    }
    getRoom(): IRect | null {
        if(this.room != null){
            return this.room
        } else {
            let lRoom: IRect | null = null
            let rRoom: IRect | null = null
            if(this.left != null){
                lRoom = (this.left as Leaf).getRoom()
            }
            if(this.right != null){
                rRoom = (this.right as Leaf).getRoom()
            }
            if(lRoom == null && rRoom == null){
                return null
            } else if(rRoom == null){
                return lRoom
            } else if(lRoom == null){
                return rRoom
            } else {
                return RANDOM.next() > 0.5 ? lRoom : rRoom
            }
        }
    }
    createHall(start: IRect, end: IRect): void{
        this.halls = []
        // pick a random point inside both rooms and connect them
        const startP = Point.make(
            RANDOM.nextInt(start.x + 1, start.x + start.width - 2),
            RANDOM.nextInt(start.y + 1, start.y + start.height - 2)
        )

        const endP = Point.make(
            RANDOM.nextInt(end.x + 1, end.x + end.width - 2),
            RANDOM.nextInt(end.y + 1, end.y + end.height - 2)
        )
        const leftX = Math.min(startP.x, endP.x)
        const rightX = Math.max(startP.x, endP.x)
        const topY = Math.min(startP.y, endP.y)
        const bottomY = Math.max(startP.y, endP.y)
        if(RANDOM.nextInt(0,1) === 1){
            // horizontal first
            this.halls.push(Rect.make(leftX, startP.y, rightX - leftX, 1))
            this.halls.push(Rect.make(endP.x, topY, 1, bottomY - topY))
        }
        else {
            this.halls.push(Rect.make(start.x, topY, 1, bottomY - topY))
            this.halls.push(Rect.make(leftX, endP.y, rightX - leftX, 1))
        }
    }
}
const leafs: Leaf[] = []
const randomEllipse = (minX: number, maxX: number, minY: number, maxY: number): IEllipse => {
    return Ellipse.make(
        RANDOM.nextInt(minX, maxX),
        RANDOM.nextInt(minY, maxY),
        RANDOM.nextInt(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS),
        RANDOM.nextInt(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS),
        RANDOM.next() * Math.PI * 2
    )
}

function * progressiveMapGenerator(tileGrid: Grid<Tile>, rooms: IRect[]): any{
    // Clear out all the tiles
    const root = new Leaf(0,0, tileGrid.width - 1, tileGrid.height - 1)
    leafs.push(root)
    let hadSplit = true
    
    // Split up the rooms as much as possible // TODO: Change this so we can stop early if we marked it that way
    while(hadSplit){
        hadSplit = false
        leafs.forEach((l: Leaf): void => {
            if(!l.hasSplit()){
                if(l.width > MAX_LEAF_SIZE || l.height > MAX_LEAF_SIZE || RANDOM.next() > 0.25){
                    if(l.split()){
                        leafs.push(l.left as Leaf)
                        leafs.push(l.right as Leaf)
                        hadSplit = true
                    }
                }
            }
        })
    }
    // Create all the rooms 
    root.createRooms()
    for(let i = leafs.length - 1; i >=0; i--){
        const l = leafs[i]
        if(l.room != null){
            const room = l.room as IRect
            for(let y = room.y; y < room.y + room.height - 1; y++){
                for(let x = room.x; x < room.x + room.width - 1; x++){
                    const t = tileGrid.getXY(x,y)
                    t.blockMove = false
                    t.blockSight = false
                }
            }
            // Add it to our global list
            rooms.push(room)
        }
        if(l.halls != null){
            const halls = l.halls as IRect[]
            halls.forEach((room: IRect): void => {
                for(let y = room.y; y < room.y + room.height; y++){
                    for(let x = room.x; x < room.x + room.width; x++){
                        const t = tileGrid.getXY(x,y)
                        t.blockMove = false
                        t.blockSight = false
                    }
                }
            })
        }

    }
    // TODO: Generate the outside, and always draw the outside, or at least mark it as explored, we'll also probably want to add an airlock to the outside
    // Now let's throw some ellipses at it
    for(let i = 0; i < 20; i++){
        MapGenHelper.carveEllipse(tileGrid, randomEllipse(10, tileGrid.width - 10, 10, tileGrid.height - 10))
    }

   
}

export { progressiveMapGenerator }
