/**
 * Interface for working with a 2D Point
 */
interface IPoint {  
    x: number;
    y: number;
}

/**
 * Create a new Point
 * @param x 
 * @param y 
 */
const make = (x: number, y: number): IPoint => {
    return {x,y}
}

/**
 * Returns a new point that is the result of adding both of them together, if you want to add a point TO another point, use addTo
 * @param a First Point, unmodified
 * @param b Second Point, unmodified
 */
const add = (a: IPoint, b: IPoint): IPoint => {
    return make(a.x + b.x, a.y + b.y)
}

/**
 * Add the value of Point a to Point b
 * @param a The point that changes, will have b added to it
 * @param b The point whose value is added to the other, it is unmodified itself
 */
const addTo = (a: IPoint, b: IPoint): IPoint => {
    a.x += b.x
    a.y += b.y
    return a
}

/**
 * Set the values of a point with x and y values, returns the now modified point
 * @param point point to be modified
 * @param x new x value
 * @param y new y value
 */
const set = (point: IPoint, x: number, y: number): IPoint => {
    point.x = x
    point.y = y
    return point
}

/**
 * Copy a point
 * @param point Point that will be copied
 */
const copy = (point: IPoint): IPoint => {
    return make(point.x, point.y)
}

/**
 * A collection of functions meant to work with things that have the IPoint interface
 */
const Point = {
    make,
    add,
    addTo,
    set,
    copy
}

export {IPoint, Point}