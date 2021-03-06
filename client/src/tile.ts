// I guess everything would need it's own serialization/deserialization... gross

/**
 * This class represents locations on the board, eventually we will probably move this into its own ECS system
 */
enum TileMaterial {
    Asteroid,
    Metal,
    Space
}
class Tile {
    /**
     * Can the player/monsters/mobile entities move through/into this tile
     */
    x: number;
    y: number;
    blockMove: boolean;
    /**
     * Does this tile block line of sight
     */
    blockSight: boolean;

    explored: boolean;

    contained: boolean; // models if this thing has a floor and ceiling, (or, in universe, stuff surrounding it on the z-axis)

    // if the player is in a door, the door is open, otherwise it is closed

    material: TileMaterial;
    /**
     * Create a new tile
     * @param blockMove Can the player/monsters/mobile entities move through/into this tile
     * @param blockSight optional, will default to whatever blockMove is 
     */
    constructor(x: number, y: number, blockMove: boolean, blockSight?: boolean ){
        this.x = x
        this.y = y
        this.blockMove = blockMove
        this.explored = false
        if(blockSight === undefined){
            this.blockSight = blockMove
        } else {
            this.blockSight = blockSight
        }
        this.contained = true
        this.material = TileMaterial.Space        
    }
}

export { Tile, TileMaterial }