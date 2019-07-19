import { Entity} from './entity'
import { ID_MANAGER } from '../utils/idManager'
import COLORS from '../_settings/colors'
import { Fighter } from './components/fighter'
import { BasicMonster } from './components/ai'
import { RenderOrder } from '../rendering/renderCell'
import { Inventory } from './components/inventory'
import { Item } from './components/item'
const EntityMaker =  {
    // ACTORS
    player: (): Entity => {
        const player = new Entity(ID_MANAGER.next(), 'player', 0, 0, '@', COLORS.player, true)
        player.renderOrder = RenderOrder.Actor
        player.components.set('fighter', new Fighter(player, 30, 2, 5))
        player.components.set('inventory', new Inventory(player, 26))
        return player
    },
    npc: (): Entity => {
        const npc = new Entity(ID_MANAGER.next(), 'npc', 0, 0, '@', COLORS.npc, false)
        return npc
    },
    // TODO: come up with a better name for this like rogue ai
    spaceTroll: (x: number, y: number): Entity => {
        const troll = new Entity(ID_MANAGER.next(), 'space troll', x, y, 'T', COLORS.npc, true)
        troll.components.set('ai', new BasicMonster(troll))
        troll.renderOrder = RenderOrder.Actor
        troll.components.set('fighter', new Fighter(troll, 16, 1, 4))
        return troll
    },
    spaceOrc: (x: number, y: number): Entity => {
        const orc = new Entity(ID_MANAGER.next(), 'space orc', x, y, 'O', COLORS.npc, true)
        orc.components.set('ai', new BasicMonster(orc))
        orc.renderOrder = RenderOrder.Actor
        orc.components.set('fighter', new Fighter(orc, 10, 0, 3))
        return orc
    },

    healingPotion: (x: number, y: number): Entity => {
        const potion = new Entity(ID_MANAGER.next(), 'Healing Potion', x, y, '!', '#880088', false)
        potion.components.set('item', new Item(potion))
        return potion
    }

    // ITEMS

}

export { EntityMaker}
