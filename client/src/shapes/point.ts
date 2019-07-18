/**
 * Interface for working with a 2D Point
 */
interface IPoint {
    x: number;
    y: number;
}

/**
 * Helpful enum for directions in a grid,
 * Up: -y, Down: +y, Left: -x, Right: +x
 */
enum GridDirection {
    Up,
    Down,
    Left,
    Right
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
const subtract = (a: IPoint, b: IPoint): IPoint => {
    return make(a.x - b.x, a.y - b.y)
}
const manhattanDistance = (a: IPoint, b: IPoint): number => {
    return Math.abs(b.x - a.x) + Math.abs(b.y - a.y)
}

/**
 * A utitily to move in a direction, allows for variability in the direction without having to resort to modifying the x and y coorindates individually
 * @param point Point to be moved, will be the return value
 * @param direction, the Grid Direction you want to move in
 * @param distance, optional defaults to 1, how far you want the point to move
 */
const move = (point: IPoint, direction: GridDirection, distance: number = 1): IPoint => {
    if(direction = GridDirection.Left){
        point.x -= distance
    }
    if(direction = GridDirection.Right){
        point.x += distance
    }
    if(direction = GridDirection.Up){
        point.y -= distance
    }
    if(direction = GridDirection.Down){
        point.y += distance
    }
    return point
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
    move,
    add,
    subtract,
    addTo,
    set,
    copy,
    manhattanDistance
}

export {IPoint, Point, GridDirection}
