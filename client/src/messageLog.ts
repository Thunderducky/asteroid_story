import { IRenderCell } from './renderCell'
import { Grid } from './grid'
import { drawStringToGrid } from './renderHelpers'

class MessageLog {
    messages: string[];
    // for now just display the messages that you can
    constructor(){
        this.messages = []
    }
    addMessage(message: string): MessageLog{
        this.messages.push(message)
        return this
    }
    renderToGrid(renderGrid: Grid<IRenderCell>, offsetX: number = 1, offsetY: number = 1): void{
        // TODO: Fix this so we know where to put it
        drawStringToGrid(renderGrid, this.messages.join('\n'), offsetX, offsetY)
    }
}

export default MessageLog