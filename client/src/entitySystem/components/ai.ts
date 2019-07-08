import { Entity, IComponent } from '../entity'

class BasicMonster implements IComponent{
    owner: Entity
    constructor(owner: Entity){
        this.owner = owner
    }
    takeTurn(): void{
        console.log(`The ${this.owner.name} wonders when it will get to move`)
    }
}

export { BasicMonster }