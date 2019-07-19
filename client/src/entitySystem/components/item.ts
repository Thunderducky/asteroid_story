import { Entity, IComponent } from '../entity'

class Item implements IComponent{
    owner: Entity;
    constructor(owner: Entity){
        this.owner = owner
    }
}

export { Item }