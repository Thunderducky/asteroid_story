import { IRenderCell } from './rendering/renderCell'
import { Grid } from './grid'
import { drawStringToGrid } from './rendering/renderHelpers'
import { Point } from './shapes/point'
import COLORS from './_settings/colors'
import { measureText } from './utils/textHelper'


// we might turn this into a linked list so we can just page through it easier?
class MessageLog {
    messages: string[];
    pageSize: number;
    currentIndex: number;
    // for now just display the messages that you can
    constructor(){
        this.messages = []
        this.pageSize = 10
        this.currentIndex = 0
    }
    addMessage(message: string): MessageLog{
        this.messages.push(message)
        return this
    }
    renderToGrid(renderGrid: Grid<IRenderCell>, offsetX: number = 1, offsetY: number = 1): void{
        // TODO: 
        const lineOffset = Point.make(offsetX,offsetY)
        const messages = this.messages.map((m): any => m).reverse()
        messages.forEach((message, index: number): void => {
            const size = measureText(message)
            // TODO: Use actual specified colors
            drawStringToGrid(renderGrid, message, lineOffset.x, lineOffset.y, (index === 0) ? COLORS.palette.white : COLORS.palette.devilsGray)
            lineOffset.y += size.height
        })
        
    }
}

export { MessageLog }