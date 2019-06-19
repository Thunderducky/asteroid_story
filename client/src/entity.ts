/**
 * A generic object to represent everything that is not the map itself
 * For that, see the Tile class
 */
class Entity {
    id: number;
    x: number;
    y: number;
    character: string;
    color: string;
    constructor(id: number, x: number,y: number, character: string, color: string){
        this.id = id
        this.x = x
        this.y = y
        this.character = character
        this.color = color
    }

    /**
     * Move an entity, currently doesn't check if it can or not, just does
     * @param dx Amount to move in the x direction (left is negative, right is positive)
     * @param dy Amount to move in the y direction (up is negative, down is positive)
     */
    move(dx: number, dy: number): void{
        this.x += dx
        this.y += dy
    }
}

export { Entity }