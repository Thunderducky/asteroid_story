import { handleInput, newKeyPress } from '../gameInput/handleInput'
import { KeyboardMonitor } from '../gameInput/keyboardMonitor'
import { MouseMonitor } from '../gameInput/mouseMonitor'
import { PUBSUB } from '../pubSub/pubSub'

// GROSS but for now it's fine
const km = new KeyboardMonitor()
const mm = new MouseMonitor()
// At the very least handle keyboard and mouse
const InputSystem = {
    init: (): void => {
        PUBSUB.publish('SYSTEM_INPUT_REQUEST_FN', (gameData: any): void => {
            const canvas = gameData.canvas
            km.attach(document)
            mm.attach(canvas)
        })
    },
    handleInput: (): void => {
        PUBSUB.publish('SYSTEM_INPUT_REQUEST_FN', (gameData: any): void => {
            const player = gameData.entityData.player
            handleInput(km, player)
        })
    },
    newKeyPress: (key: string): boolean => {
        return newKeyPress(km, key)
    },
    reset: (): void => {
        km.resetSteps()
        mm.reset()
    }
}

export { InputSystem}