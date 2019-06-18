import { Grid } from './grid'
import { Tile } from './tile'
import { IRect, Rect } from './shapes/rect'

/**
 * A collection of static methods for helping to manipulate maps
 */
class MapGenerator {
    // TODO: Maybe come up with a better name
    /**
     * Place a room inside a group of tiles
     * @param tileGrid the grid of tiles to affect
     * @param room the room section that we will open up
     */
    static createRoom(tileGrid: Grid<Tile>, room: IRect): void {
        // TODO: Bounds check or something, right now terrible things can happen
        const { left,right,top,bottom} = Rect.sides(room)
        // we need to stop one early because of how we work with a grid
        // we will also include a margin of one on all sidex
        for(let y = top + 1; y < bottom - 1; y++){
            for(let x = left + 1; x < right - 1; x++){
                const tile = tileGrid.getXY(x, y)
                tile.blockMove = false
                tile.blockSight = false
            }
        }
    }

    static createHTunnel(tileGrid: Grid<Tile>, x1: number, x2: number, y: number): void {
        // swap them as necessary
        const min = Math.min(x1, x2)
        const max = Math.max(x1, x2)
        for(let x = min; x <= max; x++){
            const tile = tileGrid.getXY(x,y)
            tile.blockMove = false
            tile.blockSight = false
        }
    }

    static createVTunnel(tileGrid: Grid<Tile>, y1: number, y2: number, x: number): void {
        const min = Math.min(y1, y2)
        const max = Math.max(y1, y2)
        for(let y = min; y <= max; y++){
            const tile = tileGrid.getXY(x,y)
            tile.blockMove = false
            tile.blockSight = false
        }
    }

    
}

export { MapGenerator }