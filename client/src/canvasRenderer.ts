import { IRenderCell } from './renderCell'
import { Grid } from './grid'
import { CODE_TO_RECT_HASH, drawSection, code } from './renderHelpers'
import { IRect, Rect } from './shapes/rect'
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
    render(renderGrid: Grid<IRenderCell>): void {
        if(this.ctx == null){
            throw new Error('Cannot render a grid with a missing context')
        }
        // We have checked to ensure that it has been created
        const ctx = this.ctx as CanvasRenderingContext2D
        const destRect = Rect.make(0,0,0,0)
        renderGrid.forEach((
            cell: IRenderCell, 
            index: number, 
            x: number, y: number): void => {
            const srcRect: IRect = CODE_TO_RECT_HASH[code(cell.character)]
            Rect.set(destRect, x * 10, y * 10, 10, 10)
            if(cell.character === ' '){
                ctx.fillStyle = cell.backColor
                ctx.fillRect(destRect.x, destRect.y, destRect.width, destRect.height)
            } else {
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