import {IPoint} from './point'
interface IRect extends IPoint {
    width: number;
    height: number;
}

/**
 * Create a rectangle
 * @param x 
 * @param y 
 * @param width 
 * @param height 
 */
const make = (x: number, y: number, width: number, height: number): IRect => {
    return {
        x,
        y,
        width,
        height
    }
}
/**
 * An object used to create and manipulate rectangles
 */
const Rect = {
    make
}

export {IRect, Rect}
