import { IRect } from './shapes/rect'
import { Entity } from './entity'
import { ID_MANAGER } from './idManager'
import { RANDOM } from './rngHelper'

const MAX_ENTITIES = 5
const placeEntitiesInRoom = (room: IRect, entities: Entity[]): void => {
    // TODO: Reroll the positions
    const maxRoomEntities = RANDOM.nextInt(0, MAX_ENTITIES)
    for(let i = 0; i < maxRoomEntities; i++){
        // Dumb quick check, don't place if something is already there that blocks movment
        const randomX = RANDOM.nextInt(room.x + 1, room.x + room.width - 2)
        const randomY = RANDOM.nextInt(room.y + 1, room.y + room.height - 2)
        if(!entities.some((e: Entity): boolean => e.x === randomX && e.y === randomY)){
            const entity = new Entity(ID_MANAGER.next(), 'space troll', randomX, randomY, 'T', '#FF0000') // TODO: Move this name into gameText
            // TODO: Check if an entity is already placed there
            entities.push(entity)
        }
    }
    

}

export { placeEntitiesInRoom }