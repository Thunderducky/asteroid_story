import { renderToGrid } from '../rendering/renderToGrid'
import { Rect } from '../shapes/rect'
import { drawBoxOnGrid, drawStringToGrid } from '../rendering/renderHelpers'
import COLORS from '../_settings/colors'
import { PUBSUB } from '../pubSub/pubSub'
import { CanvasRenderer } from '../rendering/canvasRenderer'
import { IRenderCell } from '../rendering/renderCell'
import { Grid } from '../grid'

// Let's write a function that will draw a phrase, allowing us to color it a specific way if we like

// Phrase tree
// We're going to a left to right traversal across the tree if we need toz

const renderer = new CanvasRenderer()
const RenderSystem = {
    init: (image: any): void => {
        PUBSUB.publish('SYSTEM_RENDER_REQUEST_FN', (gameData: any): void => {
            renderer.init(gameData.canvas, image)
        })
        
    },
    clear: (): void => {
        PUBSUB.publish('SYSTEM_RENDER_REQUEST_FN', (gameData: any): void => {
            const renderGrid = gameData.renderGrid as Grid<IRenderCell>
            renderGrid.forEach((cell: IRenderCell): void => {
                cell.backColor = '#000000'
                cell.foreColor = '#000000'
                cell.character = ''
            })
        })
        renderer.clear()
    },
    renderToGrid: (): void => {
        const renderFn = (gameData: any): void => {
            const cameraSizer = Rect.copy(gameData.cameraFrame)
            cameraSizer.x = 0
            cameraSizer.y = 0
            renderToGrid(
                gameData.tileGrid, 
                gameData.fovGrid, 
                gameData.entityData.entities, 
                gameData.renderGrid.getSubgrid(cameraSizer), 
                gameData.cameraFrame, 
                gameData.debugGrid)
        
            const relativeBox = Rect.copy(gameData.messageLogFrame)
            relativeBox.x = 0
            relativeBox.y = 0
            // actually render to canvas
            const messageLogRenderGrid = gameData.renderGrid.getSubgrid(gameData.messageLogFrame)
            drawBoxOnGrid(messageLogRenderGrid, relativeBox)
            gameData.messageLog.renderToGrid(messageLogRenderGrid)
            drawStringToGrid(messageLogRenderGrid, 'message log', 2, 0, COLORS.palette.white, COLORS.palette.black)
            
        
            
        }
        PUBSUB.publish('SYSTEM_RENDER_REQUEST_FN', renderFn)
    },
    render: (): void => {
        PUBSUB.publish('SYSTEM_RENDER_REQUEST_FN', (gameData: any): void => {
            renderer.render(gameData.renderGrid)
        })
        
    }
}

export { RenderSystem }