import { IRenderCell } from './renderCell'
import { Grid } from './grid'
import { CODE_TO_RECT_HASH, drawSection, code } from './renderHelpers'
import { Rect } from './shapes/rect'
import SETTINGS from './_settings/gameSettings'
import COLORS from './colors'

const {TILE_WIDTH, TILE_HEIGHT} = SETTINGS

/**
 * Responsible for taking a render grid and converting it to images
 * on the canvas
 */
class CanvasRenderer {
    canvas: HTMLCanvasElement | undefined;
    ctx: CanvasRenderingContext2D | undefined;
    spritesheet: HTMLImageElement | undefined;
    constructor(){
    }
    init(canvas: HTMLCanvasElement, spritesheet: HTMLImageElement): CanvasRenderer{
        this.canvas = canvas
        // we are just forcing this for now, we will check if it's null
        const ctx = canvas!.getContext('2d')
        if(ctx === null){
            throw new Error('Could not get context from canvas')
        }
        this.ctx = ctx
        this.spritesheet = spritesheet
        return this
    }
    // eventually we need to pass in the dimensions we are rendering to as well
    // for now it's fine
    render(renderGrid: Grid<IRenderCell>, background: string = COLORS.black): void {
        if(this.ctx == null){
            throw new Error('Cannot render a grid with a missing context')
        }
        const ctx = this.ctx as CanvasRenderingContext2D
        ctx.fillStyle = background
        ctx.fillRect(0,0, renderGrid.width * TILE_WIDTH, renderGrid.height * TILE_HEIGHT)
        // let's try setting a background color as well
        // We have checked to ensure that it has been created
        const destRect = Rect.make(0,0,0,0)
        renderGrid.forEach((
            cell: IRenderCell,
            index: number,
            x: number, y: number): void => {
            Rect.set(destRect, x * TILE_WIDTH, y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT)
            if(cell.character.length === 0){
                if(cell.backColor !== background){
                    // I actually don't know if this helps, but it seems like setting the fillStyle could involve more complications than just checking if it's the same
                    if(ctx.fillStyle !== cell.backColor){
                        ctx.fillStyle = cell.backColor
                    }
                    ctx.fillRect(destRect.x, destRect.y, destRect.width, destRect.height)
                }
            } else {
                const srcRect = CODE_TO_RECT_HASH[code(cell.character)]
                drawSection(ctx, this.spritesheet, srcRect, destRect, cell.foreColor, cell.backColor )
            }
        })
    }
    clear(): void {
        if(this.canvas == null || this.ctx == null){
            throw new Error('Cannot render a grid with a missing context')
        }
        // We have checked to ensure that it has been created
        const ctx = this.ctx as CanvasRenderingContext2D
        const canvas = this.canvas as HTMLCanvasElement
        ctx.clearRect(0,0, canvas.width, canvas.height)
    }

}

export { CanvasRenderer }
