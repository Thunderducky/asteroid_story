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