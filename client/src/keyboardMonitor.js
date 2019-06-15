const makeKeyState = (key, isDown = false, halfSteps = 0) => {
    return {
        key,
        isDown,
        halfSteps
    }
}

class KeyboardMonitor {
    constructor(){
        this.keyHash = {}
    }
    attach(element){
        // lets add event listeners
        element.addEventListener('keydown', event => {
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
        element.addEventListener('keyup', event => {
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
    getKeyState(key){
        if(!this.keyHash[key]){
            this.keyHash[key] = makeKeyState(key)
        }
        return this.keyHash[key]
    }
    resetSteps(){
        const keys = Object.keys(this.keyHash)
        for(var i = 0; i < keys.length; i++){
            this.keyHash[keys[i]].halfSteps = 0
        }
    }
}

// test case
// eslint-disable-next-line no-unused-vars
// const km = new KeyboardMonitor().attach(document)
// setInterval(() => {
//     const {key, halfSteps, isDown } = km.getKeyState('q')
//     // eslint-disable-next-line no-console
//     console.log(`You have half-pressed '${key}' ${halfSteps} times, '${key}' is currently ${isDown ? 'pressed' : 'released'} `)

//     km.resetSteps()
// },1000)



export { KeyboardMonitor }