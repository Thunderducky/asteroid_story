import {CODE_TO_RECT_HASH, code} from './renderHelpers'
import {KeyboardMonitor } from './keyboardMonitor'

const km = new KeyboardMonitor().attach(document)

// We'll definitely be reusing this one
const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// loadImage promise // We'll move this out somewhere else later, but this is an important platform layer part
function loadImage(url){
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject(new Error(`Failed to load image from ${url}`)))
        img.src = url
    })
}
// sizing
const TILE_WIDTH = 10
const TILE_HEIGHT = 10

// colors
const blueIsh = '#6688CC'
const blackIsh = '#222222'

const player = {
    x:30,
    y:40
}

loadImage('assets/out.png').then(image => {
    const loop = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillStyle = blackIsh
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // Process and render
        drawSection(image, makeRect(0, 10, TILE_WIDTH, TILE_HEIGHT), makeRect(20, 20, TILE_WIDTH, TILE_HEIGHT), '#6688CC', '#222222')
        const myText = 'Something wicked this way comes  @   maybe it is me'
        
        drawSection(image, CODE_TO_RECT_HASH[code('@')], makeRect(player.x, player.y, TILE_WIDTH, TILE_HEIGHT), blackIsh, blueIsh)

        if(km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.x -= 10
        }
        if(km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.x += 10
        }
        if(km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.y -= 10
        }
        if(km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.y += 10
        }
        for(var i = 0; i < myText.length; i++){
            const src = CODE_TO_RECT_HASH[myText.charCodeAt(i)]
            const dest = makeRect(20 + i * 10, 20, TILE_WIDTH, TILE_HEIGHT)
            drawSection(image, src, dest, blueIsh, blackIsh)
        }
        ctx.drawImage(image, 0, 500)
        km.resetSteps()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)



}).catch(err => console.log(err)) //eslint-disable-line no-console

// This would be good for a console renderer type thing in the platform later, especially with all the modifications that would happen eventually
function drawSection(tilesheet, srcRect, destRect, foreColor, backColor){
    ctx.clearRect(destRect.x, destRect.y, destRect.width, destRect.height)
    ctx.drawImage(tilesheet, srcRect.x, srcRect.y, srcRect.width, srcRect.height, destRect.x, destRect.y, destRect.width, destRect.height)
    ctx.globalCompositeOperation = 'xor'
    ctx.fillStyle=foreColor
    ctx.fillRect(destRect.x,destRect.y, destRect.width, destRect.height)

    ctx.globalCompositeOperation = 'destination-over'
    ctx.fillStyle=backColor
    ctx.fillRect(destRect.x,destRect.y, destRect.width, destRect.height)
    ctx.globalCompositeOperation = 'source-over'
}
// what keys has the player pressed since last time

// What Mouse Presses have happened since last time