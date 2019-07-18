import { KeyboardMonitor } from './keyboardMonitor'
import { Point, IPoint } from '../shapes/point'
import { PUBSUB } from '../pubSub/pubSub'
import { Entity } from '../entitySystem/entity'

// Let's work on some stuff here
// We are supporting 8 way move for now, we might alter that later

// TODO: Add the ability to customize controls
const UP_KEYS = ['w', 'arrowup', '8']
const LEFT_KEYS = ['a', 'arrowleft', '4']
const DOWN_KEYS = ['s', 'arrowdown', '2']
const RIGHT_KEYS = ['d', 'arrowright', '6']
const UP_LEFT_KEYS = ['q', '7']
const UP_RIGHT_KEYS = ['e', '9']
const DOWN_LEFT_KEYS = ['z', '1']
const DOWN_RIGHT_KEYS = ['c', '3']
// const WAIT_KEY = 'x'
const ZOOM_KEY = 'shift'

const MOVE_KEYS = [...UP_KEYS, ...LEFT_KEYS, ...RIGHT_KEYS, ... DOWN_KEYS, ...UP_LEFT_KEYS, ...UP_RIGHT_KEYS, ...DOWN_LEFT_KEYS, ...DOWN_RIGHT_KEYS]
const VERTICAL_KEYS = [...UP_KEYS, ...DOWN_KEYS]
const HORIZONTAL_KEYS = [...LEFT_KEYS, ...RIGHT_KEYS]
const CROSS_KEYS = [...UP_LEFT_KEYS, ...UP_RIGHT_KEYS, ...DOWN_LEFT_KEYS, ...DOWN_RIGHT_KEYS]

const moveKeyMap = new Map<string, IPoint>()
UP_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(0, -1))
})
LEFT_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(-1, 0))
})
DOWN_KEYS.forEach((key): void=> {
    moveKeyMap.set(key, Point.make(0, 1))
})
RIGHT_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(1, 0))
})

UP_LEFT_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(-1, -1))
})
UP_RIGHT_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(1, -1))
})
DOWN_LEFT_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(-1, 1))
})
DOWN_RIGHT_KEYS.forEach((key): void => {
    moveKeyMap.set(key, Point.make(1, 1))
})



// shift is down
export const newKeyPress = (km: KeyboardMonitor, q: string, enableZoom: boolean = true): boolean => {
    const state = km.getKeyState(q)
    if(!enableZoom){
        return state.isDown && state.halfSteps > 0
    } else {
        return state.isDown && (state.halfSteps > 0 || km.getKeyState(ZOOM_KEY).isDown)
    }
}


// A little helper for movement
const getOffset = (km: KeyboardMonitor, arr: string[]): IPoint => {
    const offset = Point.make(0,0,)
    for(let i = 0; i < arr.length; i++){
        const a = arr[i]
        if(km.getKeyState(a).isDown){
            const point = moveKeyMap.get(a) as IPoint
            Point.addTo(offset, point)
            break
        }
    }
    return offset
}

export const handleInput = (km: KeyboardMonitor, player: Entity): void => {
    for(let i = 0; i < MOVE_KEYS.length; i++){
        const key = MOVE_KEYS[i]
        if(newKeyPress(km, key, true)){
            if(CROSS_KEYS.includes(key)){
                PUBSUB.publish('player_wants_to_move', { id: player.id, delta: moveKeyMap.get(key) })
                break
            } else if(HORIZONTAL_KEYS.includes(key)){
                // check if Vertical key down
                const delta = moveKeyMap.get(key) as IPoint
                const final = Point.add(delta, getOffset(km, VERTICAL_KEYS))
                PUBSUB.publish('player_wants_to_move', { id: player.id, delta: final })
                break
            } else if(VERTICAL_KEYS.includes(key)){
                // check if Horizontal key down
                const delta = moveKeyMap.get(key) as IPoint
                const final = Point.add(delta, getOffset(km, HORIZONTAL_KEYS))
                PUBSUB.publish('player_wants_to_move', { id: player.id, delta: final })
                break
            }
        }
    }


    // quick number generator
    if(!km.getKeyState('n').isDown && (km.getKeyState('n').halfSteps > 0)){
        const seed = btoa(new Date().toString())
        const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed
        window.location.href = newurl
    }
}

