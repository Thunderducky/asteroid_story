import { Entity} from './entity'
import { ID_MANAGER } from '../utils/idManager'
import COLORS from '../_settings/colors'
import { Fighter } from './components/fighter'
import { BasicMonster } from './components/ai'
const EntityMaker =  {
    player: (): Entity => {
        const player = new Entity(ID_MANAGER.next(), 'player', 0, 0, '@', COLORS.player)
        player.components.set('fighter', new Fighter(player, 30, 2, 5))
        return player
    },
    npc: (): Entity => {
        const npc = new Entity(ID_MANAGER.next(), 'npc', 0, 0, '@', COLORS.npc, false)
        return npc
    },
    // TODO: come up with a better name for this like rogue ai
    spaceTroll: (x: number, y: number): Entity => {
        const troll = new Entity(ID_MANAGER.next(), 'space troll', x, y, 'T', COLORS.npc, false)
        troll.components.set('ai', new BasicMonster(troll))
        troll.components.set('fighter', new Fighter(troll, 16, 1, 4))
        return troll
    },
    spaceOrc: (x: number, y: number): Entity => {
        const troll = new Entity(ID_MANAGER.next(), 'space orc', x, y, 'O', COLORS.npc, false)
        troll.components.set('ai', new BasicMonster(troll))
        troll.components.set('fighter', new Fighter(troll, 10, 0, 3))
        return troll
    }
}

export { EntityMaker}