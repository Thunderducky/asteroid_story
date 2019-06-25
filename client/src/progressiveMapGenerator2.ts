import { Grid } from './grid'
import { Tile, TileMaterial } from './tile'
import { IRenderCell } from './renderCell'
import { IRect, Rect } from './shapes/rect'
import { IEllipse, Ellipse } from './shapes/ellipse'
import { RANDOM } from './rngHelper'
import COLORS from './colors'
import DEBUG from './debugSettings'
import { Point, IPoint, GridDirection } from './shapes/point'

const MAX_LEAF_SIZE = 20
const MIN_LEAF_SIZE = 6
class Leaf {
    x: number;
    y: number;
    width: number;
    height: number;
    left: Leaf | null;
    right: Leaf | null;
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.left = null
        this.right = null
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

        let splitHorizontally: bool = RANDOM.next() < 0.5
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
            this.left = new Leaf(this.x,this.y, this.width, split)
            this.right= new Leaf(this.x + split, this.y, this.width - split, this.height)
        }
        return true
    }
}
const leafs: Leaf[] = []
function * progressiveMapGenerator(tileGrid: Grid<Tile>, rooms: IRect[], debugGrid: Grid<IRenderCell>): any{
    // Clear out all the tiles
    const clear = () => {
        tileGrid.forEach((t): void => {
            t.blockMove = false
            t.blockSight = false
            t.contained = false
            t.explored = true // remove later
        })
    }
    clear()

    // TODO: Disable entities or placement, essentially stop us before we place all of that stuff
    // Let's make one big leaf at the beginning
    const root = new Leaf(0,0, tileGrid.width - 1, tileGrid.height - 1)
    leafs.push(root)
    let hadSplit = true
    while(hadSplit){
        hadSplit = false
        leafs.forEach(l => {
            if(!l.hasSplit()){
                if(l.width > MAX_LEAF_SIZE || l.height > MAX_LEAF_SIZE || RANDOM.next() > 0.25){
                    if(l.split()){
                        leafs.push(l.left)
                        leafs.push(l.right)
                        hadSplit = true;
                    }
                }
            }
        })
        // draw out each of these boys in walls
        clear()
        leafs.forEach(l => {
            // draw each of the edges
            for(let x = l.x; x< l.x + l.width - 1; x++){
                // draw our two bars
                const t = tileGrid.getXY(x, l.y)
                t.blockMove = true
                t.blockSight = true
            }
            for(let x = l.x; x< l.x + l.width; x++){
                // draw our two bars
                const t = tileGrid.getXY(x, l.y + l.height -1)
                t.blockMove = true
                t.blockSight = true
            }

            // verticals
            for(let y = l.y; y < l.y + l.height - 1; y++){
                // draw our two bars
                const t = tileGrid.getXY(l.x, y)
                t.blockMove = true
                t.blockSight = true
            }
            for(let y = l.y; y < l.y + l.height - 1; y++){
                // draw our two bars
                const t = tileGrid.getXY(l.x + l.width - 1, y)
                t.blockMove = true
                t.blockSight = true
            }
        })
        yield
    }

    // Next partition the space
    // using this for reference: https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
}

export { progressiveMapGenerator }
