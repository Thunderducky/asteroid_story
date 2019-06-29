import { RANDOM } from '../../rngHelper'
import { Point } from '../../shapes/point'
import { IRect, Rect } from '../../shapes/rect'
import BSP_SETTINGS from '../../_settings/bspMapGeneratorSettings'


// TODO SHOULD PASS THESE VALUES IN TO THE ROOT, AND HAVE IT PROPOGATE?
const { MIN_LEAF_SIZE } = BSP_SETTINGS

/**
 * The Leaf class is for helping to split space into smaller
 * components semi arbitrarily
 */
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

export { Leaf }