import { IRenderCell } from './renderCell'
import { Grid } from './grid'
import { drawStringToGrid } from './renderHelpers'
import { IRect, Rect } from './shapes/rect'
import { Point } from './shapes/point'

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
        const messages = this.messages.map(m => m).reverse()
        messages.forEach((message, index) => {
            const size = measureText(message)
            // TODO: Use actual specified colors
            drawStringToGrid(renderGrid, message, lineOffset.x, lineOffset.y, (index === 0) ? '#FFFFFF' : '#666666')
            lineOffset.y += size.height
        })
        
    }
}

const measureText = (input: string): IRect => {
    // this rect is in tile units
    const container = Rect.make(0,0,0,0)
    const lines = input.split('\n')
    let maxWidth = 0
    container.height = lines.length
    lines.forEach(l => {
        if(l.length > maxWidth){
            maxWidth = l.length
        }
    })
    container.width = maxWidth
    return container
}

const wrapText = (input: string, maxWidth: number = 25): string => {
    // let's split everything up by existing lines already
    const firstLines = input.split('\n')
    const secondLines: string[] = []
    firstLines.forEach((fl: string): void => {
        const words = fl.split(' ')
        let newLine = ''
        words.forEach((w: string): void => {
            if(newLine.length + 1 + w.length <= maxWidth){
                newLine += ' ' + w
            } else {
                if(newLine.trim().length > 0){
                    secondLines.push(newLine.trim())
                }
                newLine = w
            }
        })
        if(newLine.trim().length > 0){
            secondLines.push(newLine.trim())
        }
        secondLines.push('\n')
        // we don't account for really big words currently
    })
    return secondLines.join('\n')
}

export { MessageLog, wrapText }