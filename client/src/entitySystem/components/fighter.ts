import { Entity, IComponent } from '../entity'

// We'll look at giving fighter a component interface when necessary
class Fighter implements IComponent {
    owner: Entity;
    hp: number;
    defense: number;
    power: number;
    hpMax: number;
    constructor(owner: Entity, hp: number, defense: number, power: number){
        this.owner = owner
        this.hp = hp
        this.hpMax = hp
        this.defense = defense
        this.power = power
    }

    takeDamage(amount: number): number{
        this.hp -= amount
        return amount
    }
    attack(target: Fighter): number{
        const damage = this.power - target.defense
        if(damage > 0){
            target.takeDamage(damage)
            // publish message about attack
        } else {
            // publish message about attack but with no damage
        }
        return damage // the actual amount of damage taken
    }

}

export { Fighter }