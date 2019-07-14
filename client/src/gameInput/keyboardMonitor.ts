interface KeyState { 
    key: string;
    isDown: boolean;
    halfSteps: number;
}

interface Hash<T> {
    [key: string]: T;
}

const makeKeyState = (key: string, isDown: boolean = false, halfSteps: number = 0): KeyState => {
    return {
        key,
        isDown,
        halfSteps
    }
}
const preventDefaultList: string[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
class KeyboardMonitor {
    keyHash: Hash<KeyState>;
    constructor(){
        this.keyHash = {}
    }
    // Attach to the DOM, usually the document as a whole, but you can make it more specific if you want
    attach(element: any): KeyboardMonitor {
        element.addEventListener('keydown', (event: any): void => {
            const key = event.key.toLowerCase()
            if(preventDefaultList.indexOf(key) > -1){
                event.preventDefault()
            }
            if(!this.keyHash[key]){
                this.keyHash[key] = makeKeyState(key, true)
            }
            const keyState = this.keyHash[key]
            if(!keyState.isDown){
                keyState.halfSteps++
            }
            keyState.isDown = true
        })
        element.addEventListener('keyup', (event: any): void => {
            const key = event.key.toLowerCase()
            if(!this.keyHash[key]){
                this.keyHash[key] = makeKeyState(key)
            }
            const keyState = this.keyHash[key]
            if(keyState.isDown){
                keyState.halfSteps++
            }
            keyState.isDown = false
        })
        return this
    }
    getKeyState(key: string): KeyState{
        const lowerKey = key.toLowerCase()
        if(!this.keyHash[lowerKey]){
            this.keyHash[lowerKey] = makeKeyState(lowerKey)
        }
        return this.keyHash[lowerKey]
    }
    resetSteps(): void {
        const keys = Object.keys(this.keyHash)
        for(let i = 0; i < keys.length; i++){
            this.keyHash[keys[i]].halfSteps = 0
        }
    }
}

export { KeyboardMonitor}