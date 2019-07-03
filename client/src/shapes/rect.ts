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

interface IRectCorners {
    tl: IPoint;
    tr: IPoint;
    bl: IPoint;
    br: IPoint;
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

const copy = (r: IRect): IRect => {
    return make(r.x, r.y, r.width, r.height)
}

const set = (r: IRect, x: number, y: number, width: number, height: number): IRect => {
    r.x = x
    r.y = y
    r.width = width
    r.height = height
    return r
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
const corners = (rect: IRect): IRectCorners => {
    return {
        tl: Point.make(rect.x, rect.y),
        tr: Point.make(rect.x + rect.width, rect.y),
        bl: Point.make(rect.x, rect.y + rect.height),
        br: Point.make(rect.x + rect.width, rect.y + rect.height),
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
 * Includes top/left boundaries but not the bottom/right boundaries
 * @param rect 
 * @param x 
 * @param y 
 */
const containsXY = (rect: IRect, x: number, y: number): boolean => {
    return rect.x <= x && x < rect.x + rect.width && rect.y <= y && y < rect.y + rect.height
}

interface RectForEachFn {
    (x: number, y: number, isEdge: boolean, isCorner: boolean): void;
} 
/**
 * Traverses through each of the indexes contained within the rectangle
 * being offset by the rects own x and y
 * @param rect 
 * @param fn 
 */

const forEach = (rect: IRect, fn: RectForEachFn): void => {
    const yEnd = rect.y + rect.height
    const xEnd = rect.x + rect.width
    for(let y = rect.y; y <= yEnd; y++){
        for(let x = rect.x; x <= xEnd; x++){
            const isEdge = x === rect.x || x === xEnd || y === rect.y || y === yEnd
            const isCorner = (x === rect.x || x === xEnd ) && (y === rect.y || y === yEnd)
            fn(x,y, isEdge, isCorner)
        }
    }
}
// don't use the outsides
const forEachIndex = (rect: IRect, fn: RectForEachFn): void => {
    const yEnd = rect.y + rect.height
    const xEnd = rect.x + rect.width
    for(let y = rect.y; y < yEnd; y++){
        for(let x = rect.x; x < xEnd; x++){
            const isEdge = (x === rect.x) || (x === xEnd -1) || (y === rect.y) || (y === yEnd - 1)
            const isCorner = (x === rect.x || (x === xEnd - 1) ) && (y === rect.y || (y === yEnd - 1))
            fn(x,y, isEdge, isCorner)
        }
    }
}

/**
 * An object used to create and manipulate rectangles
 */
const Rect = {
    make,
    copy,
    set,
    sides,
    corners,
    center,
    intersects,
    containsXY,
    forEach,
    forEachIndex
}

export {IRect, Rect}
