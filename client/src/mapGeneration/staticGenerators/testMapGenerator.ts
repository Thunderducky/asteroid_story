// using this for reference: https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
import { Grid } from '../../grid'
import { Tile, TileMaterial } from '../../tile'
import { IRect, Rect } from '../../shapes/rect'

function * openSquareGenerator(tileGrid: Grid<Tile>, rooms: IRect[]): any {
    // clear to a bunch of explored walls
    tileGrid.forEach((t: Tile): void => {
        t.blockMove = true
        t.blockSight = true
        t.explored = true
        t.contained = true
        t.material = TileMaterial.Asteroid
    })

    const interior = Rect.make(1,1,tileGrid.width-2, tileGrid.height - 2)
    rooms.push(interior)
    tileGrid.forEach((t: Tile, index: number, x: number, y: number): void => {
        if(Rect.containsXY(interior, x,y)){
            // carve out an interior
            t.blockMove = false
            t.blockSight = false
        }
    })
}

// LETS TRY AND BUILD A DOOR TYPE

export { openSquareGenerator }
