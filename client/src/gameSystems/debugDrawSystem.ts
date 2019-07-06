import { PUBSUB } from '../pubSub/pubSub'
import { TOPICS } from '../pubSub/pubsubTopicList'
import { IRenderCell } from '../rendering/renderCell'
import { Grid } from '../grid'
import DEBUG from '../_settings/debugSettings'
import { ColorBar } from '../_debugTools/colorBar'

const DebugDrawSystem = {
    init: (): void => {
        PUBSUB.subscribe(TOPICS.DEBUG_DRAW_CELL, (msg: any): void => {
            PUBSUB.publish('SYSTEM_DEBUG_DRAW_REQUEST_FN', (gameData: any): void => {
                const debugGrid = gameData.debugGrid as Grid<IRenderCell>
                const cell = debugGrid.getXY(msg.x, msg.y)
                cell.backColor = msg.backColor || cell.backColor
                cell.foreColor = msg.foreColor || cell.foreColor
                cell.character = msg.character || cell.foreColor
                cell.transparent = msg.transparent && true
            })
        })

        // TODO: FIX THIS so that we just have one function
        PUBSUB.subscribe(TOPICS.DEBUG_DRAW_FN, (msg: any): void => {
            PUBSUB.publish('SYSTEM_DEBUG_DRAW_REQUEST_FN', (gameData: any): void => {
                const debugGrid = gameData.debugGrid as Grid<IRenderCell>
                msg.fn(debugGrid)
            })
        })

        if(DEBUG.SHOW_COLOR_BAR)
        {
            ColorBar.activate()
        }
    }
}

export { DebugDrawSystem}