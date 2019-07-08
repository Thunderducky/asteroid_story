/**
 * Interface for Render Cell
 */
interface IRenderCell {
    x: number;
    y: number;
    character: string; // this should only be string of length 1
    foreColor: string;
    backColor: string;
    transparent: boolean;
}

const make = (x: number, y: number, character: string, foreColor: string, backColor: string, transparent: boolean = false): IRenderCell => {
    return {
        x,y, character, foreColor, backColor, transparent
    }
}

const RenderCell = {
    make
}

export { IRenderCell, RenderCell}