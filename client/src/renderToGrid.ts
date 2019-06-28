import { Grid } from './grid'
import { Tile, TileMaterial } from './tile'
import { FOVCell } from './fov'
import { Entity } from './entity'
import { IRenderCell } from './renderCell'
import { Point } from './shapes/point'
import COLORS from './colors'
import { IRect } from './shapes/rect'
import DEBUG from './_settings/debugSettings'

export const renderToGrid = (tileGrid: Grid<Tile>, fovGrid: Grid<FOVCell>, entities: Entity[], renderGrid: Grid<IRenderCell>, cameraFrame: IRect, debugGrid: Grid<IRenderCell>): void => {
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
            const fovCell = fovGrid.getP(screenP)
            let isLit = fovCell.visible // it's lit fam, well, some of the time
            let inBounds = tileGrid.inBoundsXY(worldP.x, worldP.y)

            // Determined our exploration state
            // This has better rules to be figured out
            renderCell.character = ''
            if(!inBounds){ // treat everything outside of the bounds as explored I suppose?
                if(isLit){
                    renderCell.backColor = COLORS.light_outside
                } else {
                    renderCell.backColor = COLORS.dark_outside
                }
            } else {
                const tile = tileGrid.getXY(worldP.x, worldP.y)
                if(!tile.explored){
                    renderCell.backColor = COLORS.dark_outside
                } else {
                // TODO: ADD DOORS
                    const isWall = tile.blockMove && tile.blockSight
                    const isGround = !isWall && tile.contained
                    const isSpace = !isWall && !tile.contained

                    if(tile.material === TileMaterial.Metal){
                        if(isSpace){
                            if(isLit){
                                renderCell.backColor = COLORS.light_outside
                            } else {
                                renderCell.backColor = COLORS.dark_outside
                            }
                        } else if(isGround){
                            if(isLit){
                                renderCell.backColor = COLORS.metal.lightGround
                            } else {
                                renderCell.backColor = COLORS.metal.darkGround
                            }
                        } else if(isWall){
                            if(isLit){
                                renderCell.backColor = COLORS.metal.lightWall
                            } else {
                                renderCell.backColor = COLORS.metal.darkWall
                            }
                        } else {

                        }
                    } else {
                        if(isSpace){
                            if(isLit){
                                renderCell.backColor = COLORS.light_outside
                            } else {
                                renderCell.backColor = COLORS.dark_outside
                            }
                        } else if(isGround){
                            if(isLit){
                                renderCell.backColor = COLORS.light_ground
                            } else {
                                renderCell.backColor = COLORS.dark_ground
                            }
                        } else if(isWall){
                            if(isLit){
                                renderCell.backColor = COLORS.light_wall
                            } else {
                                renderCell.backColor = COLORS.dark_wall
                            }
                        } else {

                        }
                    }
                }
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

    if(DEBUG.DEBUG_DRAW){
        for(let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++){
            for(let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++){
                // this maps to the renderGrid and the cameras
                Point.set(screenP, relCameraX, relCameraY)
                // this maps to the tileGrid, fovGrid, and entities
                Point.set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y)


                const renderCell  = renderGrid.getP(screenP)
                if(debugGrid.inBoundsXY(worldP.x, worldP.y)){
                    const debugCell = debugGrid.getP(worldP)
                    if(debugCell.backColor != COLORS.black){
                        renderCell.backColor = debugCell.backColor
                        renderCell.character = debugCell.character
                        renderCell.foreColor = debugCell.foreColor
                    }
                }
            }
        }
    }
}
