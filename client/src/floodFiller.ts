import DEBUG from './_settings/debugSettings'
import { PUBSUB } from './pubSub/pubSub'
import { IRenderCell } from './rendering/renderCell'
import { Grid } from './grid'
import COLORS from './_settings/colors'
import { TOPICS } from './pubSub/pubsubTopicList';


// DEBUG HELPERS
const clearDebug = () => {
    if(DEBUG.DEBUG_DRAW){
        const clear = (debugGrid: Grid<IRenderCell>): void => {
            debugGrid.forEach(dc => {
                dc.transparent = true
                dc.character = ''
            })
        }
        PUBSUB.publish('debug_draw_fn', { fn: clear })
    }
}
const drawCell = (x: number,y: number) => {
    if(DEBUG.DEBUG_DRAW){
        PUBSUB.publish(TOPICS.DEBUG_DRAW_CELL, {x, y, transparent: false, backColor: COLORS.DEBUG, character: '!'})
    }
}
const drawVisited = (floodGrid: Grid<any>) => {
    // not efficient, but whatevs
    if(!DEBUG.DEBUG_DRAW){
        return
    }
    const draw = (debugGrid: Grid<IRenderCell>): void => {
        floodGrid.forEach((fgCell, index, x, y): void => {
            const dgCell = debugGrid.getXY(x, y)
            if(fgCell.visited && debugGrid.inBoundsXY(x,y)){
                dgCell.character = (fgCell.generation % 16).toString(16)
                dgCell.backColor = (fgCell.generation % 16 === 0) ? COLORS.DEBUG : COLORS.palette.white
                dgCell.transparent = false
            }
        })
    }
    PUBSUB.publish(TOPICS.DEBUG_DRAW_FN, {fn: draw})
}

// change this into a proper queue
function * processNetwork(grid: Grid<any>, evalFn:Function, startX: number, startY: number){
    
    const floodGrid = new Grid<any>(grid.width, grid.height);
    floodGrid.setEach((fgCell, index, x, y) => {
        const tgCell = grid.getXY(x,y)
        return { cell: tgCell, visited: false, generation: Infinity }
    })

    const nodes = [floodGrid.getXY(startX,startY)]
    nodes[0].visited = true
    nodes[0].generation = 0

    let index = 0

    clearDebug()
    // let's start with a simple bfs search
    while(index < nodes.length){
        clearDebug()
        drawVisited(floodGrid)

        let node = nodes[index++]
        node.visited = true
        
        drawCell(node.cell.x, node.cell.y)
        const neighbors = floodGrid.getNeighborsXY(node.cell.x, node.cell.y);
        neighbors.forEach(n => {
            n.generation = Math.min(node.generation + 1, n.generation)
            if(!n.visited && evalFn(n.cell)){
                n.visited = true
                nodes.push(n)
            }
        })
        console.log(nodes.length)
        yield
    }
}
//processNetwork(tileGrid, (c: Tile): boolean => !c.blockMove)

export { processNetwork}