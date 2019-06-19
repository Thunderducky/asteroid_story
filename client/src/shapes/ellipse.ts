import { IPoint } from './point'
import { IRect, Rect } from './rect'

/**
 * X and Y are the CENTER of the ellipse (unlike the top left for IRect)
 */
interface IEllipse extends IPoint {
    xRadius: number;
    yRadius: number;
    rotation: number;
}

const make = (x: number, y: number, xRadius: number, yRadius: number, rotation: number = 0): IEllipse => {
    return {x, y, xRadius, yRadius, rotation}
}


/**
 * Contains XY
 * @param ellipse 
 * @param x 
 * @param y 
 */
const containsXY = (ellipse: IEllipse, x: number, y: number): boolean => {
    const cos = Math.cos(ellipse.rotation), sin = Math.sin(ellipse.rotation)
    const dx = (x - ellipse.x), dy = (y - ellipse.y)
    const tdx = cos * dx + sin * dy, tdy = sin * dx - cos * dy

    return ( (tdx * tdx) / (ellipse.xRadius* ellipse.xRadius) + (tdy * tdy)/(ellipse.yRadius * ellipse.yRadius) ) < 1
}
/**
 * Does the ellipse contain the point
 * @param ellipse 
 * @param point 
 */
const containsPoint = (ellipse: IEllipse, point: IPoint): boolean => {
    return containsXY(ellipse, point.x, point.y)
}

// 
/**
 * Are enough corners inside the Rect to be considered inside
 * @param ellipse ellipse
 * @param rect rect to test if it's edges are inside the ellipse
 * @param threshold how many corners must be inside to count, defaults to 4
 */
const containsRectCorners = (ellipse: IEllipse, rect: IRect, threshold: number = 4): boolean => {
    let cornersIn = 0
    const corners = Rect.corners(rect)
    if(containsPoint(ellipse, corners.tr)){ cornersIn++}
    if(containsPoint(ellipse, corners.tl)){ cornersIn++}
    if(containsPoint(ellipse, corners.bl)){ cornersIn++}
    if(containsPoint(ellipse, corners.br)){ cornersIn++}
    return cornersIn >= threshold
}

const Ellipse = {
    make,
    containsXY,
    containsPoint,
    containsRectCorners
}

export { IEllipse, Ellipse }