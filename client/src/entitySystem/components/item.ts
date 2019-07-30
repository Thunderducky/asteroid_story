import { Entity, IComponent } from '../entity'

class Item implements IComponent{
    owner: Entity;
    useFn: Function;
    constructor(owner: Entity, useFn?: Function){
        this.owner = owner
        this.useFn = useFn || (() => {})
    }
    use(user: Entity): boolean{
        return this.useFn(user)
    }
}

export { Item }