import { Grid } from '../grid'

function * processNetwork(floodGrid: Grid<any>, evalFn: Function, startX: number, startY: number): any{

    const nodes = [floodGrid.getXY(startX,startY)]
    nodes[0].visited = true
    nodes[0].generation = 0

    let index = 0

    while(index < nodes.length){

        let node = nodes[index++]
        node.visited = true

        const neighbors = floodGrid.getNeighborsXY(node.cell.x, node.cell.y)
        neighbors.forEach((n): void => {
            n.generation = Math.min(node.generation + 1, n.generation)
            if(!n.visited && evalFn(n.cell)){
                n.visited = true
                nodes.push(n)
            }
        })
        //yield
    }
}

const generateFloodGrid = (originalGrid: Grid<any>): Grid<any> => {
    const newGrid = new Grid<any>(originalGrid.width, originalGrid.height)
    newGrid.setEach((ogCell, index, x, y): any => {
        const cell = originalGrid.getXY(x,y)
        return { cell, x,y, visited: false, generation: Infinity }
    })
    return newGrid
}

export { processNetwork, generateFloodGrid }
