import { Grid } from './grid'
import { Tile } from './tile'
import { IPoint, Point } from './shapes/point'

interface FOVCell  {
    visible: boolean;
}
interface ShadowRange {
    start: number;
    end: number;
}

const isBetweenInclusive = (a: number,b: number,t: number): boolean => {
    if(b < a){
        return b <= t && t <= a
    } else {
        return a <= t && t <= b
    }
}

const calculateOctant = (fovGrid: Grid<FOVCell>, tileGrid: Grid<Tile>, startPoint: IPoint, maxDistance: number,
    horizontalNotVertical: boolean, xDirection: number, yDirection: number): void => {
    
    // Our shadows we will cast
    const shadowRanges: ShadowRange[] = []
    // our starting location is always visible
    fovGrid.getP(startPoint).visible = true
    for(let row = 1; row < maxDistance; row++){
        const rowSize = row + 1
        for(let column = 0; column < rowSize; column++){
            // Depending on the octant, the traveller will move differently
            const traveller = Point.copy(startPoint)
            traveller.x += horizontalNotVertical ? xDirection * column : xDirection * row
            traveller.y += horizontalNotVertical ? yDirection * row : yDirection * column

            // if we are out of bounds, skip
            if(!tileGrid.inBoundsXY(traveller.x, traveller.y)){
                continue
            }

            const tile = tileGrid.getP(traveller)
            const fovCell = fovGrid.getP(traveller)

            const start = column/rowSize
            const end = (column + 1)/rowSize
            const middle = (start + end) / 2

            // test for visiblity
            let visibility = true

            // different edges are clear or not
            let startClear = true
            let middleClear = true
            let endClear = true

            // If we have built some shadow ranges
            if(shadowRanges.length !== 0){
                // determine if any shadows cross our three points
                shadowRanges.forEach( (sr: ShadowRange): void => {
                    startClear = startClear && !isBetweenInclusive(sr.start, sr.end, start)
                    middleClear = middleClear && !isBetweenInclusive(sr.start, sr.end, middle)
                    endClear = endClear && !isBetweenInclusive(sr.start, sr.end, end)
                })

                // calculate visibility based off of our sampling
                visibility = middleClear && (startClear || endClear)
            }

            // if we block sight, calculate our shadow ends
            if(tile.blockSight){
                shadowRanges.push({start, end})
            }

            fovCell.visible = visibility
        }
    }
}

const calculateFOV = (fovGrid: Grid<FOVCell>, tileGrid: Grid<Tile>, startPoint: IPoint, maxDistance: number): void => {
    // be default we are going to shadowCast
    // by default everything is not visible
    fovGrid.setEach((): FOVCell => {return { visible: false} })
    // NNW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, -1, -1)
    // WNW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, -1, -1)
    // WSW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, -1, 1)
    // SSW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, -1, 1)
    // SSE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, 1, 1)
    // ESE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, 1, 1)
    // ENE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, 1, -1)
    // NNE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, 1, -1)
}

export { calculateFOV, FOVCell}