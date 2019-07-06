import { PUBSUB } from '../pubSub/pubSub'
import { calculateFOV, FOVCell } from '../fov'
import SETTINGS from '../_settings/gameSettings'
import DEBUG from '../_settings/debugSettings'
import { Grid } from '../grid'


// TODO: Improve this
const FovSystem = {
    init: (): void => {
        PUBSUB.subscribe('camera_moved', (cameraFrame): void => {
            PUBSUB.publish('SYSTEM_FOV_REQUEST_FN', (gameData: any): void => {
                const fovGrid = gameData.fov.grid as Grid<FOVCell>
                fovGrid.x = cameraFrame.x
                fovGrid.y = cameraFrame.y
            })
        })
        PUBSUB.subscribe('fov_recompute', (): void => {
            PUBSUB.publish('SYSTEM_FOV_REQUEST_FN', (gameData: any): void => {
                const fov = gameData.fov
                fov.recompute = true
            })
        })

    },
    calculateFOV: (): void => {
        if(!DEBUG.DISABLE_FOV){
            PUBSUB.publish('SYSTEM_FOV_REQUEST_FN', (gameData: any): void => {
                const entity = gameData.entityData.player
                if(gameData.fov.recompute){
                    calculateFOV(gameData.fov.grid, gameData.tileGrid, entity, SETTINGS.FOV_RADIUS)
                    gameData.fov.recompute = false
                }
            })
        }
    }
}

export { FovSystem }