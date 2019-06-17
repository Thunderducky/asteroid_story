/**
 * Interface for Render Cell
 */
interface IRenderCell {
    x: number;
    y: number;
    character: string; // this should only be string of length 1
    foreColor: string;
    backColor: string;
}

const make = (x: number, y: number, character: string, foreColor: string, backColor: string): IRenderCell => {
    return {
        x,y, character, foreColor, backColor
    }
}

const RenderCell = {
    make
}

export { IRenderCell, RenderCell}