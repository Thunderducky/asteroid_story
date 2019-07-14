import { Grid } from './grid'
import { IPoint, Point } from './shapes/point'
import { Tile } from './tile'

class PathNode<T> {
    cell: T;
    x: number;
    y: number;
    visited: boolean;
    distanceFromOrigin: number;
    estimatedDistanceToTarget: number;
    previous: PathNode<T> | null;
    constructor(cell: T, x: number, y: number){
        this.cell = cell
        this.x = x
        this.y = y
        this.visited = false
        this.distanceFromOrigin = Infinity
        this.estimatedDistanceToTarget = Infinity
        this.previous = null
    }
}

// Can refacto this to be more generic in the future, yay
class PathNodePriorityQueue<T> {
    nodes: PathNode<T>[];
    constructor(){
        this.nodes = []
    }
    enqueue(node: PathNode<T>): void{
        this.nodes.push(node)
        this.sort()
    }
    enqueueAll(nodes: PathNode<T>[]): void{
        nodes.forEach((n): void => {
            this.nodes.push(n)
        })
        this.sort()
    }
    dequeue(): PathNode<T> | undefined {
        return this.nodes.pop()
    }
    sort(): void{
        this.nodes.sort((a, b): number => {
            const aTotalCost = a.estimatedDistanceToTarget + a.distanceFromOrigin
            const bTotalCost = b.estimatedDistanceToTarget + b.distanceFromOrigin
            return (bTotalCost - aTotalCost)
        })
    }
}

const estimateDistance = (p1: IPoint, p2: IPoint): number => {
    return Point.manhattanDistance(p1, p2)
}

// We'll do this using A* pathfinding, in all 8 directions
// eventually we will input the Grid as well, but not yet
const processPathfindingGrid = function * (origin: IPoint, destination: IPoint, inputGrid: Grid<Tile>): any{
    if(!inputGrid.inBoundsXY(origin.x, origin.y) || !inputGrid.inBoundsXY(destination.x, destination.y)){
        // can't do it not in bounds
        throw new Error('Cannot find path, either origin or destination is not in bounds')
    }
    if(origin.x === destination.x && origin.y === destination.y){
        return []
    }
    // Right now, we are hoping that the two places are not one and the same
    // let's hope so

    // We're going to have to think about entities eventually if they all
    // crowd around each other

    const pathNodeGrid = new Grid<PathNode<Tile>>(inputGrid.width, inputGrid.height)
    pathNodeGrid.setEach((_cell, index, x, y): PathNode<Tile> => {
        const cell = inputGrid.getXY(x,y)
        return new PathNode<Tile>(cell, x, y)
    })
    yield pathNodeGrid // Things can use this generator if needed
    const queue = new PathNodePriorityQueue<Tile>()
    yield queue
    const backPath = []
    yield backPath

    const firstNode = pathNodeGrid.getP(origin)
    firstNode.distanceFromOrigin = 0
    firstNode.visited = true
    firstNode.estimatedDistanceToTarget = estimateDistance(origin, destination)
    queue.enqueue(firstNode)

    while(queue.nodes.length > 0){
        const pathNode = queue.dequeue() as PathNode<Tile>
        const neighbors = pathNodeGrid.getNeighborsXY(pathNode.x, pathNode.y).filter((n): boolean => !n.cell.blockMove)
        for(let i = 0; i < neighbors.length; i++){
            const n = neighbors[i]
            // lets calculate the actual distance
            const distance = Point.manhattanDistance(n, pathNode)
            if(pathNode.distanceFromOrigin + distance < n.distanceFromOrigin){
                n.distanceFromOrigin = pathNode.distanceFromOrigin + distance
                n.previous = pathNode
            }
            n.estimatedDistanceToTarget = estimateDistance(n, destination)
            if(n.estimatedDistanceToTarget === 0){
                // GOT EM!, figure out what to do from here, but probably return a route
                // from here' let's figure out our way back home
                // we could also keep track of previous ones, and easily backtrack that way
                n.visited = true
                // PREVIOUSLY, ON DRAGON BALL Z!
                let previous = n
                while(previous != null){
                    backPath.push(previous.cell)
                    previous = previous.previous
                    yield
                }
                return backPath
            }
            if(!n.visited){
                queue.enqueue(n)
            }
            n.visited = true
            yield
        }
    }
}

export { processPathfindingGrid}