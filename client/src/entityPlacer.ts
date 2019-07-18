import { IRect } from './shapes/rect'
import { Entity } from './entitySystem/entity'
import { RANDOM } from './utils/rngHelper'
import { EntityMaker } from './entitySystem/entityMaker'

// TODO: PUT THIS IN A SETTINGS FILE

const MAX_ENEMIES = 5
const MAX_ITEMS = 2
const placeEntitiesInRoom = (room: IRect, entities: Entity[]): void => {
    // TODO: Reroll the positions
    const maxRoomEnemies = RANDOM.nextInt(0, MAX_ENEMIES)
    for(let i = 0; i < maxRoomEnemies; i++){
        // Dumb quick check, don't place if something is already there that blocks movment
        const randomX = RANDOM.nextInt(room.x + 1, room.x + room.width - 2)
        const randomY = RANDOM.nextInt(room.y + 1, room.y + room.height - 2)
        if(!entities.some((e: Entity): boolean => e.x === randomX && e.y === randomY)){
            // Roll for what kind we will put here
            if(RANDOM.next() < 0.2){ // TODO: Put this in settings
                const troll = EntityMaker.spaceTroll(randomX, randomY) //new Entity(ID_MANAGER.next(), 'space troll', randomX, randomY, 'T', COLORS.npc) // TODO: Move this name into gameText
                // TODO: Check if an entity is already placed there
                entities.push(troll)
            } else {
                const orc = EntityMaker.spaceOrc(randomX, randomY) //new Entity(ID_MANAGER.next(), 'space troll', randomX, randomY, 'T', COLORS.npc) // TODO: Move this name into gameText
                // TODO: Check if an entity is already placed there
                entities.push(orc)
            }
        }
    }
    const maxRoomItems = RANDOM.nextInt(0, MAX_ITEMS)
    for(let j = 0; j < maxRoomItems; j++){
        const randomX = RANDOM.nextInt(room.x + 1, room.x + room.width - 2)
        const randomY = RANDOM.nextInt(room.y + 1, room.y + room.height - 2)
        // Make sure we are not overlapping
        if(!entities.some((e: Entity): boolean => e.x === randomX && e.y === randomY)){
            // Roll for what kind we will put here
            // place a healing potion
            const healingPotion = EntityMaker.healingPotion(randomX, randomY)
            entities.push(healingPotion)
        }
    }
    

}

export { placeEntitiesInRoom }