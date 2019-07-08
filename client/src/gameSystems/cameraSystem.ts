import { PUBSUB } from '../pubSub/pubSub'
import { Entity } from '../entity'
import DEBUG from '../_settings/debugSettings'
import { IRect } from '../shapes/rect'

const CameraSystem = {
    // Always track
    init: (): void => {
        // track the player as they move
        
        PUBSUB.publish('SYSTEM_CAMERA_REQUEST_FN', (gameData: any): void => {
            const target = gameData.entityData.player as Entity
            const cameraFrame = gameData.cameraFrame as IRect
            if(!DEBUG.DISABLE_TRACKING){
                cameraFrame.x = Math.floor(target.x - cameraFrame.width / 2)
                cameraFrame.y = Math.floor(target.y - cameraFrame.height / 2)
            } else {
                cameraFrame.x = Math.floor(gameData.tileGrid.width/2 - cameraFrame.width / 2)
                cameraFrame.y = Math.floor(gameData.tileGrid.height/2 - cameraFrame.height / 2)
            }
            PUBSUB.publish('camera_moved', cameraFrame)
        })

        PUBSUB.subscribe('moved', (msg): void => {  
            PUBSUB.publish('SYSTEM_CAMERA_REQUEST_FN', (gameData: any): void => {
                const target = gameData.entityData.player as Entity
                if(msg.id === target.id && !DEBUG.DISABLE_TRACKING){
                    const cameraFrame = gameData.cameraFrame
                    cameraFrame.x = Math.floor(target.x - cameraFrame.width / 2)
                    cameraFrame.y = Math.floor(target.y - cameraFrame.height / 2)
                    PUBSUB.publish('camera_moved', cameraFrame)
                }
            })
            
        })
    }
}

export { CameraSystem }