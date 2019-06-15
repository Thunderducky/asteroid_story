const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}

const CHARACTER_HELPER = {
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
const code = char => char.charCodeAt(0)
const TILE_WIDTH = 10, TILE_HEIGHT = 10

const CODE_TO_RECT_HASH = {}
const spaceCode =   code(' ')
const atCode =      code('@')
const aCode =       code('a')
const zCode =       code('z')
const ACode =       code('A')
const ZCode =       code('Z')


const ctrhHelper = (code, x, y) => {
    CODE_TO_RECT_HASH[code] = makeRect(x,y, TILE_WIDTH, TILE_HEIGHT);
}

// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = makeRect(0, 0, 10, 10)
CODE_TO_RECT_HASH[atCode] = makeRect(0, 10, 10, 10)
for(let i = ACode; i <= ZCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - ACode) * 10, 30, TILE_WIDTH, TILE_HEIGHT)
}
for(let i = aCode; i <= zCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - aCode) * 10, 40, TILE_WIDTH, TILE_HEIGHT)
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




export  { CODE_TO_RECT_HASH, CHARACTER_HELPER }