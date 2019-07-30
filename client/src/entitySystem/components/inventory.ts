import { Entity, IComponent } from '../entity'
import { Item } from './item'

class Inventory implements IComponent{
    owner: Entity;
    capacity: number;
    items: Entity[];
    /**
     * Component that allows entities to 'carry' things
     * @param owner 
     * @param capacity 
     */
    constructor(owner: Entity, capacity: number){
        this.owner = owner
        this.capacity = capacity
        this.items = []

    }

    /**
     * Returns true if added and false if it didn't work
     * @param item the item to add to our inventory
     */
    addItem(item: Entity): boolean {
        if(this.items.length >= this.capacity){
            return false // can't full
        } else {
            this.items.push(item)
            return true
        }
       
    }
    removeItem(item: Entity): boolean {
        const itemIndex = this.items.indexOf(item)
        if(itemIndex >= 0){
            this.items.splice(itemIndex, 1)
            return true
        }
        return false
    }
}

export { Inventory }