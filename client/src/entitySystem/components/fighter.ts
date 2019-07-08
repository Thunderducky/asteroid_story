import { Entity, IComponent } from '../entity'

// We'll look at giving fighter a component interface when necessary
class Fighter implements IComponent {
    owner: Entity;
    hp: number;
    defense: number;
    power: number;
    constructor(owner: Entity, hp: number, defense: number, power: number){
        this.owner = owner
        this.hp = hp
        this.defense = defense
        this.power = power
    }

}

export { Fighter }