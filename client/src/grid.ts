import { IPoint } from './shapes/point'

interface SetEachFn {
    (cell: any, index: number, x: number, y: number): any;
}

interface ForEachFn {
    (cell: any, index: number, x: number, y: number): void;
}

// TODO: FIGURE OUT HOW TO CREATE A GENERIC TYPE FOR THIS, CAUSE TYPES WOULD PROBABLY BE GOOD FOR THIS

/**
 * Grid to represent 2d collections, please don't resize it after creating it
 */
class Grid<T> {
    height: number;
    width: number;
    cells: T[];
    constructor(width: number, height: number){
        this.width = width
        this.height = height
        this.cells = []
        this.cells.length = width * height
    }

    /**
     * Primarily used for initialization of the grid, overwrites previous entries based on the current entry, don't use this unless entries are independent from each other
     * @param fn this function takes the cell itself as the first property and 
     */
    setEach(fn: SetEachFn): Grid<T>{
        let x = 0, y = 0
        for(let i = 0; i < this.cells.length; i++){
            x = i % this.width
            y = (i - x)/this.width
            this.cells[i] = fn(this.cells[i], i, x , y)
        }
        return this
    }

    // TODO: structure this
    /**
     * Do something for each member of a cell, going row by row from left to right
     * @param fn Get passed the cell, index, x and y
     */
    forEach(fn: ForEachFn): void{
        let x = 0, y = 0
        for(let i = 0; i < this.cells.length; i++){
            x = i % this.width
            y = (i - x)/this.width
            fn(this.cells[i], i, x , y)
        }
    }

    /**
     * The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param x x coordinate of the grid
     * @param y 
     */
    getXY(x: number, y: number): T {
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
}

export { Grid }