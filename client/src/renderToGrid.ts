import { Grid } from './grid'
import { Tile } from './tile'
import { FOVCell } from './fov'
import { Entity } from './entity'
import { IRenderCell } from './renderCell'
import { Point } from './shapes/point'
import COLORS from './colors'
import { IRect } from './shapes/rect'

export const renderToGrid = (tileGrid: Grid<Tile>, fovGrid: Grid<FOVCell>, entities: Entity[], renderGrid: Grid<IRenderCell>, cameraFrame: IRect): void => {
    // renderGrid is in SCREEN coordinates, and will have it's XY ignored for our purposes
    // tileGrid, entities and fovGrid are in WORLD coordinates and will have their XY and y ignored for now
    
    // camera and renderGrid both start at the topLeft in terms of aligning the two
    // I almost feel like we should tighten the coupling, but oh well, let's actually do it
    const screenP = Point.make(0,0)
    const worldP = Point.make(0,0)
    for(let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++){
        for(let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++){
            // this maps to the renderGrid and the cameras
            Point.set(screenP, relCameraX, relCameraY)
            // this maps to the tileGrid, fovGrid, and entities
            Point.set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y)
            
            // Let's do some bounds checking
            // we know these poitns are always in cameras, so never need to check that
            // we are going to offload the case of checking if the renderGrid can fit the cameraSize for now
            // so for now just check if we are inside of the tileGrid, which currently should be the same dimensions as the fovGrid, though that is bound to change as we try and optimize things
            // soooooo, let's check if we are inside the tileGrid
            const renderCell  = renderGrid.getP(screenP)
            if(tileGrid.inBoundsXY(worldP.x, worldP.y)){
                const tile = tileGrid.getP(worldP)
                const fovCell = fovGrid.getP(screenP)
                renderCell.character = ''
                if(tile.explored){
                    if(!fovCell.visible){
                        if(tile.blockMove){
                            renderCell.backColor = COLORS.dark_wall
                        } else if(tile.blockSight){ // it's a door
                            renderCell.backColor = COLORS.dark_door
                        } else {
                            renderCell.backColor = COLORS.dark_ground
                        }
                    } else {
                        if(tile.blockMove){
                            renderCell.backColor = COLORS.light_wall
                        } else if(tile.blockSight){ // it's a door
                            renderCell.backColor = COLORS.light_door
                        }
                        else {
                            renderCell.backColor = COLORS.light_ground
                        }
                    }
                } else {
                    renderCell.backColor = COLORS.black
                
                }
            } else {
                renderCell.character = ''
                renderCell.foreColor = COLORS.black
                renderCell.backColor = COLORS.black
            }
        }
    }

    entities.forEach((entity: Entity): void => {
        Point.set(screenP, entity.x - cameraFrame.x, entity.y - cameraFrame.y)
        // if this is inside of the camera bounds
        if(cameraFrame.x <= entity.x && entity.x <= cameraFrame.x + cameraFrame.width - 1 &&
            cameraFrame.y <= entity.y && entity.y <= cameraFrame.y + cameraFrame.height - 1){
            const rCell: IRenderCell = renderGrid.getP(screenP)
            const fovCell: FOVCell = fovGrid.getP(screenP)
            if(fovCell.visible){
                rCell.foreColor = entity.color
                rCell.character = entity.character
            }
        }
        
    })
}