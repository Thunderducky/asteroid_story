import { IPoint } from './shapes/point'

interface SetEachFn {
    (cell?: any, index?: number): any;
}

/**
 * Grid to represent 2d collections, please don't resize it after creating it
 */
class Grid {
    height: number;
    width: number;
    cells: any[];
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
    setEach(fn: SetEachFn): any{
        for(let i = 0; i < this.cells.length; i++){
            this.cells[i] = fn(this.cells[i], i)
        }
    }

    /**
     * The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param x x coordinate of the grid
     * @param y 
     */
    getXY(x: number, y: number): any {
        if(x < 0 || x >= this.width || y < 0 || y >= this.height){
            return undefined
        }
        return this.cells[x + y * this.width]
    }
    /**
     * Convenience method for getXY. The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param point contains the x and y coordinates of the cell you want to get
     */
    getP(point: IPoint): any {
        return this.getXY(point.x, point.y)
    }
}

export { Grid }