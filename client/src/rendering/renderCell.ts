/**
 * Interface for Render Cell
 */
enum RenderOrder {
    Default = -1,
    Corpse,
    Item,
    Actor
}

interface IRenderCell {
    x: number;
    y: number;
    order: RenderOrder
    character: string; // this should only be string of length 1
    foreColor: string;
    backColor: string;
    transparent: boolean;
}



const make = (x: number, y: number, character: string, foreColor: string, backColor: string, transparent: boolean = false, order = RenderOrder.Default): IRenderCell => {
    return {
        x,y, character, foreColor, backColor, transparent, order
    }
}

const RenderCell = {
    make
}

export { IRenderCell, RenderCell, RenderOrder}