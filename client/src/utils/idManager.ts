class IDManager {
    private lastId: number;
    constructor(){
        this.lastId = 0
    }
    /**
     * Get the next id
     */
    next(): number {
        return this.lastId++
    }
}

/**
 * The default ID_MANAGER
 */
const ID_MANAGER = new IDManager()
export {ID_MANAGER, IDManager}