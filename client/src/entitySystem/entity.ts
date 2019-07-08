
/**
 * A generic object to represent everything that is not the map itself
 * For that, see the Tile class
 */
interface IComponent {
    owner: Entity;
}

class Entity {
    id: number;
    x: number;
    y: number;
    name: string;
    character: string;
    color: string;
    blocksMove: boolean;
    components: Map<string, IComponent>;
    constructor(id: number, name: string, x: number,y: number, character: string, color: string, blocksMove = true){
        this.id = id
        this.name = name
        this.x = x
        this.y = y
        this.character = character
        this.color = color
        this.blocksMove = blocksMove
        // allows us to potentially have multiple of a type, even if it has different names
        this.components = new Map<string, IComponent>()
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

    // Place this somewhere better in the future
    static getBlockingEntityAtLocation(entities: Entity[], x: number, y: number): Entity | null {
        for(let i = 0; i < entities.length; i++){
            if(entities[i].blocksMove && entities[i].x === x && entities[i].y === y){
                return entities[i]
            }
        }
        return null
    }
}

export { Entity, IComponent }