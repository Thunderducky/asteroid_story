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

class KeyboardMonitor {
    keyHash: Hash<KeyState>;
    constructor(){
        this.keyHash = {}
    }
    attach(element: any): any {
        // lets add event listeners
        element.addEventListener('keydown', (event: any): any => {
            const {key} = event
            if(!this.keyHash[key]){
                this.keyHash[key] = makeKeyState(key, true)
            }
            const keyState = this.keyHash[key]
            if(!keyState.isDown){
                keyState.halfSteps++
            }
            keyState.isDown = true
        })
        element.addEventListener('keyup', (event: any): any => {
            const {key} = event
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
        if(!this.keyHash[key]){
            this.keyHash[key] = makeKeyState(key)
        }
        return this.keyHash[key]
    }
    resetSteps(): void {
        const keys = Object.keys(this.keyHash)
        for(let i = 0; i < keys.length; i++){
            this.keyHash[keys[i]].halfSteps = 0
        }
    }
}


export { KeyboardMonitor }