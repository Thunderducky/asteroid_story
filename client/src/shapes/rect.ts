import {IPoint, Point} from './point'
interface IRect extends IPoint {
    width: number;
    height: number;
}

interface IRectSides {
    left: number;
    top: number;
    right: number;
    bottom: number;
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
 * Return the unit value of the sides of the rectangle, left and right return x coordinates, top and bottom include y coordinates
 * @param rect rectangle used
 */
const sides = (rect: IRect): IRectSides => {
    return {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    }
}

/**
 * Get the center point: NOTE: This finds the INTEGER center, coordinates are truncated
 * @param rect The rectangle we are finding the center of
 */
const center = (rect: IRect): IPoint => {
    return Point.make(Math.floor(rect.x + rect.width/2), Math.floor(rect.y + rect.height/2))
}

// OPTIMIZE: Don't call sides, just use the raw numbers and addition
const intersects = (a: IRect, b: IRect): boolean => {
    const aSides = sides(a)
    const bSides = sides(b)
    return aSides.left <= bSides.right && aSides.right >= bSides.left && 
        aSides.top <= bSides.bottom && aSides.bottom >= bSides.top

        
}

/**
 * An object used to create and manipulate rectangles
 */
const Rect = {
    make,
    sides,
    center,
    intersects
}

export {IRect, Rect}
