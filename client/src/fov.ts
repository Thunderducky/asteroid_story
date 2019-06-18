import { Grid } from './grid'
import { Tile } from './tile'
import { IPoint } from './shapes/point';

const calculateOctant = (fovGrid: Grid<boolean>, tileGrid: Grid<Tile>, start: IPoint, maxDistance: number,
    horizontalNotVertical: boolean, xDirection: number, yDirection: number) => {

}

const calculateFOV = (fovGrid: Grid<boolean>, tileGrid: Grid<Tile>, start: IPoint, maxDistance: number): void => {
    // be default we are going to shadowCast
    // by default everything is not visible
    fovGrid.setEach((): boolean => false)
}

export { calculateFOV }