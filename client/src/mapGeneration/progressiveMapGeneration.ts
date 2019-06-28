// THIS FILE IS VERY WIP
import { Grid } from '../grid'
import { Tile, TileMaterial } from '../tile'
import { IRenderCell } from '../renderCell'
import { IRect, Rect } from '../shapes/rect'
import { IEllipse, Ellipse } from '../shapes/ellipse'
import { RANDOM } from '../rngHelper'
import COLORS from '../colors'
import DEBUG from '../debugSettings'
import { Point, IPoint, GridDirection } from '../shapes/point'

const settings = {
    SECTION_COUNT:10,
    MARGINS: 10
}

const placeAsteroidChunk = (tileGrid: Grid<Tile>, ellipse: IEllipse): void => {
    tileGrid.forEach((tile: Tile, index: number, x: number, y: number): void => {
        if(Ellipse.containsXY(ellipse, x,y)){
            tile.blockMove = true
            tile.blockSight = true
            tile.contained = true
        }
    })
}

function * progressiveMapGenerator(tileGrid: Grid<Tile>, rooms: IRect[], debugGrid: Grid<IRenderCell>): any{
    tileGrid.forEach((t): void => {
        t.blockMove = false
        t.blockSight = false
        t.contained = false
        t.explored = true // remove later
    })

    // We'll move this into a 'generate asteroid' section
    const MARGINS = settings.MARGINS
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height)
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2)/2)
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7)
    const asteroidEllipses = []
    for(let i = 0; i < settings.SECTION_COUNT; i++){
        const xRadius = RANDOM.nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const yRadius = RANDOM.nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS)
        const bigRadius = Math.max(xRadius, yRadius)
        const x = RANDOM.nextInt(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius)
        const y = RANDOM.nextInt(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius)
        const ellipse = Ellipse.make(x,y,xRadius,yRadius, RANDOM.next() * Math.PI * 2)
        asteroidEllipses.push(ellipse)
        placeAsteroidChunk(tileGrid, ellipse)
    }

    const outlineCells: Tile[] = []
    tileGrid.forEach((tile: Tile, index: number, x: number, y: number): void => {
        // const tile = tileGrid.getXY(x,y)
        const neighbors= tileGrid.getNeighborsXY(x,y)
        if(tile.contained && neighbors.neighbors.some((t: Tile): boolean => !t.contained)){
            outlineCells.push(tile)
        }
    })

    const outlineEntryPoint = outlineCells[RANDOM.nextInt(0, outlineCells.length - 1)]
    
    // move toward center of the map, in a cardinal direction
    // let directionToBurrow: GridDirection = GridDirection.Down
    // {
    //     const distX = Math.floor(tileGrid.width/2 - outlineEntryPoint.x) // distance from center
    //     const distY = Math.floor(tileGrid.height/2 - outlineEntryPoint.y)
    //     // Let's go ahead and move it towards the center
    //     if(Math.abs(distX) > Math.abs(distY)){
    //         // we are further away on the xAxis from the center, let's try moving that way
    //         if(distX > 0){
    //             directionToBurrow = GridDirection.Right
    //         } else {
    //             directionToBurrow = GridDirection.Left
    //         }
    //     } else {
    //         // let's move vertically
    //         if(distY > 0){
    //             directionToBurrow = GridDirection.Down
    //         } else {
    //             directionToBurrow = GridDirection.Up
    //         }
    //     }
    // }

    // TODO: Methodize this better
    for(let y = 0; y < 10; y++){
        for(let x = 0; x < 10; x++){
            const tile = tileGrid.getXY(outlineEntryPoint.x - 5 + x, outlineEntryPoint.y - 5 + y)
            tile.contained = true
            tile.material = TileMaterial.Metal
            if(x === 0 || x === 9 || y === 0 || y === 9){
                // this is a bold outline
                tile.blockMove = true
                tile.blockSight = true
            } else {
                tile.blockMove = false
                tile.blockSight = false
            }
        }
    }

    // made a rectangle to push out to the rest of it
    const airlock = Rect.make(outlineEntryPoint.x - 5, outlineEntryPoint.y - 5,10,10)
    rooms.push(airlock)
    

    const airlockCenter = Rect.center(airlock)
    class Burrower {
        generation: number;
        maxGeneration: number;
        currentDirection: GridDirection;
        tunnelWidth: number;
        stepSize: number;
        position: IPoint;
        tileGrid: Grid<Tile>;
        // bounds: IRect;
        stepIndex: number;
        totalSteps: number;

        constructor(generation: number, tileGrid: Grid<Tile>, position: IPoint, initialDirection: GridDirection){
            this.generation = generation
            this.maxGeneration = 10
            this.stepIndex = 0
            this.totalSteps = 40
            this.stepSize = 1
            this.tunnelWidth = 3
            this.currentDirection = initialDirection
            this.tileGrid = tileGrid
            this.position = Point.copy(position)
            // this.bounds = Rect.make(0,0,0,0)
        }
        // will return true if finished, otherwise returns false
        // TODO: BOUNDS CHECK ON STEPS
        step(): boolean{
            // we do not repeat final steps, we just politely remind people we are done
            if(this.stepIndex >= this.totalSteps){
                return true
            }
            // Heart of the function goes here
            const tile = this.tileGrid.getP(this.position)
            if(DEBUG.DEBUG_DRAW){
                const d = debugGrid.getP(this.position)
                d.backColor = COLORS.DEBUG
            }
            tile.blockMove = false
            tile.blockSight = false
            let crossDirection = GridDirection.Down
            const crossPosition = Point.make(0,0)
            if(this.currentDirection === GridDirection.Up || this.currentDirection === GridDirection.Down){
                Point.set(crossPosition, Math.ceil(this.position.x - this.tunnelWidth/2), this.position.y)
                crossDirection = GridDirection.Right
            } else {
                Point.set(crossPosition, this.position.x, Math.ceil(this.position.y - this.tunnelWidth/2))
                crossDirection = GridDirection.Down
            }
            for(let i = 0; i < this.tunnelWidth; i++){
                const tile = this.tileGrid.getP(crossPosition)
                tile.blockMove = false
                tile.blockSight = false
                Point.move(crossPosition, crossDirection)
            }

            // our central point is currently tracked, spread out from this for now
            // which ways do we need to go
            // default to going to the left for now, but make that controllable
            // maybe we'll come up with a better idea later, but for now that's it
            Point.move(this.position, this.currentDirection)
            this.stepIndex += 1
            return this.stepIndex >= this.totalSteps
        }
        stepAll(): Burrower{
            while(!this.step()){}
            return this
        }
        // the first thing that we are going to do is have it build scripts
    }

    // This will be used to continue from the original
    const burrower = new Burrower(0, tileGrid, airlockCenter, GridDirection.Down).stepAll()
    const burrower2 = new Burrower(1, tileGrid, burrower.position, GridDirection.Right)
    burrower2.tunnelWidth = 5
    Point.move(burrower2.position, GridDirection.Right)
    burrower2.stepAll()
}

export { progressiveMapGenerator }