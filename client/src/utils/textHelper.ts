import { IRect, Rect } from '../shapes/rect'

interface Phrase {
    text: string;
    color: string;
}
interface PhraseBuilder {
    then(next: string, color: string): PhraseBuilder;
    done(): Phrase[];
}

const measureText = (input: string): IRect => {
    // this rect is in tile units
    const container = Rect.make(0,0,0,0)
    const lines = input.split('\n')
    let maxWidth = 0
    container.height = lines.length
    lines.forEach((l): void => {
        if(l.length > maxWidth){
            maxWidth = l.length
        }
    })
    container.width = maxWidth
    return container
}

// TODO FIX: NEWLINES

// We need to write some unit tests around this, in case it needs to change
const wrapText = (input: string, maxWidth: number = 25): string => {
    // let's split everything up by existing lines already
    const firstLines = input.split('\n')
    const secondLines: string[] = []
    firstLines.forEach((fl: string): void => {
        // if(fl.trim().length === 0){
        //     // let's just treat it like it's own line, and skip over it
        //     return
        // }
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


const makePhrases = (start: string, color: string): PhraseBuilder => {
    let phrases = [{ text: start, color}] as Phrase[]
    return {
        then: function(next: string, color: string): PhraseBuilder{
            phrases.push({text: next, color})
            return this
        },
        done: function(): Phrase[]{
            return phrases
        }
    }
}

const wrapPhrases = (input: Phrase[]): Phrase[] => {
    return input.map((m: Phrase): Phrase => {
        return makePhrases(wrapText(m.text), m.color).done()[0]
    })
}

export { wrapText, measureText,
    Phrase, makePhrases, wrapPhrases }