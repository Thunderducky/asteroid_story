import {IRect, Rect } from './shapes/rect'
import { Grid } from './grid'
import { IRenderCell } from './renderCell'
import COLORS from './colors'

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
    BOTTOM_LEFT: '┐',
    TOP_LEFT: '┘',

    LIGHT_DOTS: '░',
    MEDIUM_DOTS: '▒',
    HEAVY_DOTS: '▓',

    EMPTY_BOX: '☐',
    CHECK_BOX: '☑',

    OPEN_RADIO: '◯',
    CHECKED_RADIO: '◉'

}

const TILE_WIDTH = 10, TILE_HEIGHT = 10

const CODE_TO_RECT_HASH: HashNum<IRect> = {}
const spaceCode =   code(' ')
const atCode =      code('@')
const aCode =       code('a')
const zCode =       code('z')
const ACode =       code('A')
const ZCode =       code('Z')

const ctrhHelper = (code: number, x: number, y: number, width: number = TILE_WIDTH, height: number = TILE_HEIGHT): void => {
    CODE_TO_RECT_HASH[code] = Rect.make(x,y, width, height)
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
ctrhHelper(code(CH.BOTTOM_LEFT), 230,10)
ctrhHelper(code(CH.TOP_LEFT), 240,10)

// SOME PUNCTUATION HELPOERS
ctrhHelper(code('.'), 140,0)
ctrhHelper(code(','), 120,0)
ctrhHelper(code('!'), 10,0)
ctrhHelper(code('"'), 20,0)
ctrhHelper(code('#'), 30,0)

// SOME PUNCTUATION
ctrhHelper(code(CH.EMPTY_BOX),101, 20, 9)
ctrhHelper(code(CH.CHECK_BOX),110, 20)
ctrhHelper(code(CH.OPEN_RADIO),120, 20)
ctrhHelper(code(CH.CHECKED_RADIO),130, 20)


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

const drawStringToGrid = (grid: Grid<IRenderCell>, message: string, x: number, y: number, foreColor: string = COLORS.white, backColor: string = COLORS.black): void => {
    let currentX = x
    let currentY = y
    for(let i = 0; i < message.length; i++){
        const letter = message[i]
        if(grid.inBoundsXY(currentX, currentY) && letter != '\n'){
            const target = grid.getXY(currentX,currentY)
            target.character = letter
            target.backColor = backColor
            target.foreColor = foreColor
        }
        if(letter !== '\n'){
            currentX++
        } else {
            currentY++
            currentX = x
        }
    }
}

/**
 * Place a box on a render grid
 * @param grid 
 * @param box 
 * @param boxFill If we draw in the interior or not, defaults to true
 */
const drawBoxOnGrid = (grid: Grid<IRenderCell>, box: IRect, boxFill: boolean = true): void => {
    Rect.forEachIndex(box, (x,y, isEdge, isCorner): void => {
        const cell = grid.getXY(x,y)
        if(isCorner){
            // let's determine which corner
            if(x === box.x){
                // Leftside
                if(y === box.y){
                    // TOP
                    cell.character = CHARACTER_HELPER.BOTTOM_RIGHT
                } else {
                    // BOTTOM
                    cell.character = CHARACTER_HELPER.TOP_RIGHT
                }
            } else {
                // Right Side
                if(y === box.y){
                    // TOP
                    cell.character = CHARACTER_HELPER.BOTTOM_LEFT
                } else {
                    // BOTTOM
                    cell.character = CHARACTER_HELPER.TOP_LEFT
                }
            }
            cell.foreColor = COLORS.white
            cell.backColor = COLORS.black
        } else if(isEdge){
            if(y === box.y || y === box.y + box.height - 1){
                // TOP
                cell.character = CHARACTER_HELPER.HORIZONTAL_LINE
            } else {
                // BOTTOM
                cell.character = CHARACTER_HELPER.VERTICAL_LINE
            }
        } else if(boxFill){
            cell.character = ''
        }
        cell.backColor = COLORS.black
        cell.foreColor = COLORS.white
    })
}

export  { CODE_TO_RECT_HASH, CHARACTER_HELPER, code, drawSection, drawStringToGrid, drawBoxOnGrid }