import { KeyboardMonitor } from './keyboardMonitor'
import { Point } from './shapes/point'
import { PUBSUB } from './pubSub/pubSub'
import { Entity } from './entity'

export const handleInput = (km: KeyboardMonitor, player: Entity): void => {
    if(km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)){
        PUBSUB.publish('move', {id: player.id, delta: Point.make(-1, 0)})
    }
    if(km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)){
        PUBSUB.publish('move', {id: player.id, delta: Point.make(1, 0)})
    }
    if(km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)){
        PUBSUB.publish('move', {id: player.id, delta: Point.make(0, -1)})
    }
    if(km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)){
        PUBSUB.publish('move', {id: player.id, delta: Point.make(0, 1)})
    }
    // quick number generator
    if(!km.getKeyState('n').isDown && (km.getKeyState('n').halfSteps > 0)){
        const seed = btoa(new Date().toString())
        const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed
        window.location.href = newurl
    }
}

export const newKeyPress = (km: KeyboardMonitor, q: string, enableZoom: boolean = true): boolean => {
    const state = km.getKeyState(q)
    if(!enableZoom){
        return state.isDown && state.halfSteps > 0
    } else {
        return state.isDown && (state.halfSteps > 0 || km.getKeyState('z').isDown)
    }
}