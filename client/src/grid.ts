import { IPoint } from './shapes/point'
import { IRect } from './shapes/rect'

interface SetEachFn<T> {
    (cell: T, index: number, x: number, y: number): any;
}

interface ForEachFn<T> {
    (cell: T, index: number, x: number, y: number): void;
}

interface NeighborList<T> {
    up: T | null;
    left: T | null;
    right: T | null;
    down: T | null;
    neighbors: T[];
}

// TODO: give grids their own x and ys, that way they can implement all the point and rect stuff
/**
 * Grid to represent 2d collections, please don't resize it after creating it
 */
class Grid<T> implements IRect {
    /**
     * Used to keep track of the offset and so we can treat it more like a rectangle
     */
    x: number;
    /**
     * Used to keep track of the offset and so we can treat it more like a rectangle
     */
    y: number;
    height: number;
    width: number;
    cells: T[];
    constructor(width: number, height: number, x: number = 0, y: number = 0){
        this.width = width
        this.height = height
        this.cells = []
        this.cells.length = width * height
        this.x = x
        this.y = y
    }

    /**
     * Primarily used for initialization of the grid, overwrites previous entries based on the current entry, don't use this unless entries are independent from each other
     * @param fn this function takes the cell itself as the first property and 
     */
    setEach(fn: SetEachFn<T>): Grid<T>{
        let i = 0
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                this.cells[i] = fn(this.cells[i], i, x , y)
                i++
            }
        }
        return this
    }

    /**
     * Do something for each member of a cell, going row by row from left to right
     * @param fn Get passed the cell, index, x and y
     */
    forEach(fn: ForEachFn<T>): void{
        let i = 0
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                fn(this.cells[i], i, x , y)
                i++
            }
        }

    }

    /**
     * The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param x x coordinate of the grid
     * @param y y coordinate of the grid
     */
    getXY(x: number, y: number): T  {
        if(!this.inBoundsXY(x,y)){
            throw new Error('boundary access issue')
        }
        return this.cells[x + y * this.width]
    }
    /**
     * Convenience method for getXY. The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param point contains the x and y coordinates of the cell you want to get
     */
    getP(point: IPoint): T {
        return this.getXY(point.x, point.y)
    }

    inBoundsXY(x: number, y: number): boolean{
        if(x < 0 || x >= this.width || y < 0 || y >= this.height){
            return false
        }
        return true
    }

    /**
     * Get the cell based off of an index, usually in conjunction with the forEach loop of a similarly sized grid
     * NOTE be careful that the other grid has the same dimension unless you really know what you're doing
     * @param index Index of the cells, mostly to be used with grids that are working alongside a different forEach loop
     */
    getI(index: number): T {
        return this.cells[index]
    }

    /**
     * A quick and easy way to get a subsection of a grid, especially for map generators
     * @param bounds Bounds are RELATIVE to the parent graph
     */
    getSubgrid(bounds: IRect): Grid<T> {    // TODO: Write some tests around this
        // TODO: validate that we are inside of the grid
        const subGrid = new Grid<T>(bounds.width - 1, bounds.height - 1, bounds.x + this.x, bounds.y + this.y)
        subGrid.setEach((cell, i, x, y): T => {
            return this.getXY(x + subGrid.x ,y + subGrid.y)
        })
        return subGrid
    }

    getNeighborsXY(x: number, y: number): NeighborList<T> {
        const list: NeighborList<T> = {
            up: null,
            down: null,
            left: null,
            right: null,
            neighbors:[]
        }
        if(this.inBoundsXY(x,y - 1)){
            list.up = this.getXY(x, y - 1)
            list.neighbors.push(list.up)
        }
        if(this.inBoundsXY(x,y + 1)){
            list.down = this.getXY(x, y + 1)
            list.neighbors.push(list.down)
        }
        if(this.inBoundsXY(x - 1,y)){
            list.left = this.getXY(x - 1, y)
            list.neighbors.push(list.left)
        }
        if(this.inBoundsXY(x + 1,y)){
            list.right = this.getXY(x + 1, y)
            list.neighbors.push(list.right)
        }
        
        return list
    }
}

export { Grid }