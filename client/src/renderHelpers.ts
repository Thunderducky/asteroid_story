import {IRect, Rect } from './shapes/rect'

interface HashStr<T> {
    [key: string]: T;
}
interface HashNum<T> {
    [key: number]: T;
}

const code = (char: string): number => char.charCodeAt(0)
const CHARACTER_HELPER: HashStr<string> = {
    VERTICAL_LINE: '│',
    HORIZONTAL_LINE: '─',
    CROSS_LINES: '┼',
    T_LEFT: '┤',
    T_UP: '┴',
    T_RIGHT: '├',
    T_DOWN: '┬',
    TOP_RIGHT: '└',
    BOTTOM_RIGHT: '┌',
    BOTTOL_LEFT: '┐',
    TOP_LEFT: '┘'
}

const TILE_WIDTH = 10, TILE_HEIGHT = 10

const CODE_TO_RECT_HASH: HashNum<IRect> = {}
const spaceCode =   code(' ')
const atCode =      code('@')
const aCode =       code('a')
const zCode =       code('z')
const ACode =       code('A')
const ZCode =       code('Z')


const ctrhHelper = (code: number, x: number, y: number): void => {
    CODE_TO_RECT_HASH[code] = Rect.make(x,y, TILE_WIDTH, TILE_HEIGHT)
}

// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = Rect.make(0, 0, 10, 10)
CODE_TO_RECT_HASH[atCode] = Rect.make(0, 10, 10, 10)
for(let i = ACode; i <= ZCode; i++){
    CODE_TO_RECT_HASH[i] = Rect.make((i - ACode) * 10, 30, TILE_WIDTH, TILE_HEIGHT)
}
for(let i = aCode; i <= zCode; i++){
    CODE_TO_RECT_HASH[i] = Rect.make((i - aCode) * 10, 40, TILE_WIDTH, TILE_HEIGHT)
}
// for brevities sake
const CH = CHARACTER_HELPER
ctrhHelper(code(CH.VERTICAL_LINE), 140,10)
ctrhHelper(code(CH.HORIZONTAL_LINE), 150,10)
ctrhHelper(code(CH.CROSS_LINES), 160,10)
ctrhHelper(code(CH.T_LEFT), 170,10)
ctrhHelper(code(CH.T_UP), 180,10)
ctrhHelper(code(CH.T_RIGHT), 190,10)
ctrhHelper(code(CH.T_DOWN), 200,10)
ctrhHelper(code(CH.TOP_RIGHT), 210,10)
ctrhHelper(code(CH.BOTTOM_RIGHT), 220,10)
ctrhHelper(code(CH.BOTTOL_LEFT), 230,10)
ctrhHelper(code(CH.TOP_LEFT), 240,10)


function drawSection(ctx: CanvasRenderingContext2D, tilesheet: any, srcRect: IRect, destRect: IRect, foreColor: string, backColor: string): void{
    ctx.clearRect(destRect.x, destRect.y, destRect.width, destRect.height)
    ctx.drawImage(tilesheet, srcRect.x, srcRect.y, srcRect.width, srcRect.height, destRect.x, destRect.y, destRect.width, destRect.height)
    ctx.globalCompositeOperation = 'xor'
    ctx.fillStyle=foreColor
    ctx.fillRect(destRect.x,destRect.y, destRect.width, destRect.height)

    ctx.globalCompositeOperation = 'destination-over'
    ctx.fillStyle=backColor
    ctx.fillRect(destRect.x,destRect.y, destRect.width, destRect.height)
    ctx.globalCompositeOperation = 'source-over'
}

export  { CODE_TO_RECT_HASH, CHARACTER_HELPER, code, drawSection }