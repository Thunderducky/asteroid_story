import { Grid } from './grid'
import { Tile, TileMaterial } from './tile'
import { IRenderCell } from './renderCell'
import { IRect, Rect } from './shapes/rect'
import { IEllipse, Ellipse } from './shapes/ellipse'
import { RANDOM } from './rngHelper'
import COLORS from './colors'
import DEBUG from './debugSettings'
import { Point, IPoint } from './shapes/point'

const log = (q: any): any => { console.log('\n', q); return q }
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

enum GRID_DIRECTION {
    UP,
    DOWN,
    LEFT,
    RIGHT
}



function * progressiveMapGenerator(tileGrid: Grid<Tile>, rooms: IRect[], debugGrid: Grid<IRenderCell>): any{

    const clearDebug = (): void => {
        if(DEBUG.DEBUG_DRAW){ // prevent this operation if we are not drawing
            debugGrid.forEach((dgc): void => {
                dgc.backColor = COLORS.black
            })
        }
    }

    // let's place some initial asteroid bumps
    // Let's progressively draw the sections

    //yield // give us a place to stop

    log('BEGIN MAP')
    tileGrid.forEach((t): void => {
        t.blockMove = false
        t.blockSight = false
        t.contained = false
        t.explored = true // remove later
    })
    //yield



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
        if(DEBUG.DEBUG_DRAW){
            clearDebug()
            // TODO: optimize this steup
            debugGrid.forEach((cell: IRenderCell, index: number, x: number, y: number): void => {
                if(Ellipse.containsXY(ellipse, x,y)){
                    cell.backColor = COLORS.DEBUG
                }
            })
        }
    }
    clearDebug()
    log('ASTEROID SHELL COMPLETE')
    //yield
    log('BEGIN ROOM PLACEMENT')
    log('PICK A SPOT ON THE EDGE')
    // HOW DO WE FIND EDGES
    // WE LOOK FOR SPACES WITH EDGES THAT TOUCH OUTSIDE SPACE

    const outlineCells: Tile[] = []
    tileGrid.forEach((tile: Tile, index: number, x: number, y: number): void => {
        // const tile = tileGrid.getXY(x,y)
        const neighbors= tileGrid.getNeighborsXY(x,y)
        if(tile.contained && neighbors.neighbors.some((t: Tile): boolean => !t.contained)){
            outlineCells.push(tile)
        }
    })
    // if(DEBUG.DEBUG_DRAW){
    //     outlineCells.forEach((oc: Tile): void => {
    //         const dcell = debugGrid.getXY(oc.x,oc.y)
    //         dcell.backColor = COLORS.DEBUG
    //     })
    // }
    
    log('ESTABLISH OUTLINE')
    //yield
    log('PICKING A SPOT OF THE OUTLINES TO BE OUR ENTRY POINT')
    // Little helper message here for me
    const drawDebugString = (message: string, x: number, y: number): void => {
        let currentX = x
        let currentY = y
        for(let i = 0; i < message.length; i++){
            const letter = message[i]
            if(debugGrid.inBoundsXY(currentX, currentY) && letter != '\n'){
                const target = debugGrid.getXY(currentX,currentY)
                target.character = letter
                target.backColor = '#FFFFFF'
                target.foreColor = '#000000'
            }
            if(letter !== '\n'){
                currentX++
            } else {
                currentY++
                currentX = x
            }
            
        }
    }
    const outlineEntryPoint = outlineCells[RANDOM.nextInt(0, outlineCells.length - 1)]
    if(DEBUG.DEBUG_DRAW){
        // let's draw a spot for the line to show up
        const dcell = debugGrid.getXY(outlineEntryPoint.x,outlineEntryPoint.y)
        dcell.backColor = '#FFFFFF'
        drawDebugString('Entry Point', outlineEntryPoint.x + 1, outlineEntryPoint.y - 1)
    }
    // This is where this will start
    // ALSO, TODO: automatically accomodate for the fact that we are not 
    console.log(outlineEntryPoint)

    // Let's also add this as the first room
    // let's build us a room to help us out, we'll even overwrite previous stuff?
    // eroded airlock by setting the block to be Random on the edges
    console.log('Determine direction to borrow')
    
    // move toward center of the map, in a cardinal direction
    let directionToBurrow: GRID_DIRECTION = GRID_DIRECTION.DOWN
    {
        const distX = Math.floor(tileGrid.width/2 - outlineEntryPoint.x) // distance from center
        const distY = Math.floor(tileGrid.height/2 - outlineEntryPoint.y)
        // Let's go ahead and move it towards the center
        if(Math.abs(distX) > Math.abs(distY)){
            // we are further away on the xAxis from the center, let's try moving that way
            if(distX > 0){
                directionToBurrow = GRID_DIRECTION.RIGHT
            } else {
                directionToBurrow = GRID_DIRECTION.LEFT
            }
        } else {
            // let's move vertically
            if(distY > 0){
                directionToBurrow = GRID_DIRECTION.DOWN
            } else {
                directionToBurrow = GRID_DIRECTION.UP
            }
        }
    }
    log('direction to burrow')
    log(directionToBurrow)

    
    // SIMPLE MAKE ROOM
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
    // // let's burrow in a fixed amount of random length into the asteroid
    const burrowLength = RANDOM.nextInt(10, 30)
    // const burrowWidth = 5
    const airlock = Rect.make(outlineEntryPoint.x - 5, outlineEntryPoint.y - 5,10,10)
    rooms.push(airlock)
    
    yield

    const movePoint = (point: IPoint, direction: GRID_DIRECTION, distance: number = 1): void => {
        if(direction == GRID_DIRECTION.LEFT){
            point.x -= distance
        }
        else if(direction == GRID_DIRECTION.RIGHT){
            point.x += distance
        }
        else if(direction == GRID_DIRECTION.UP){
            point.y -= distance
        }
        else if(direction == GRID_DIRECTION.DOWN){
            point.y += distance
        }
    }

    const airlockCenter = Rect.center(airlock)
    const burrowLocation = Point.copy(airlockCenter)
    for(let i = 0; i < burrowLength; i++){
        const tile = tileGrid.getP(burrowLocation)
        if(DEBUG.DEBUG_DRAW){
            const d = debugGrid.getP(burrowLocation)
            d.backColor = COLORS.DEBUG
        }
        tile.blockMove = false
        tile.blockSight = false
        movePoint(burrowLocation, directionToBurrow)
        
    }
    yield
    clearDebug()
    // Let's set a crawler, width and direction and starting point

    // build a major piece
    // build a small room around that section, this is an airlock, this is room 1
    // we could also use this process to pick multiple sections as airlocks
    // once we have that we'll try and place essential rooms into the asteroid


    log('DONE')
}

export { progressiveMapGenerator }