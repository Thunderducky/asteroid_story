import {CODE_TO_RECT_HASH, code} from './renderHelpers'
import {KeyboardMonitor } from './keyboardMonitor'
import { MouseMonitor } from './mouseMonitor'





// We'll definitely be reusing this one
const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const km = new KeyboardMonitor().attach(document)
const mm = new MouseMonitor().attach(canvas)

// loadImage promise // We'll move this out somewhere else later, but this is an important platform layer part
function loadImage(url){
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject(new Error(`Failed to load image from ${url}`)))
        img.src = url
    })
}

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
    // Initialize
    // Let's create a grid to render
    // and a grid of tiles as well

    // Loop
    const loop = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillStyle = blackIsh
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // Process and render
        drawSection(image, makeRect(0, 10, TILE_WIDTH, TILE_HEIGHT), makeRect(20, 20, TILE_WIDTH, TILE_HEIGHT), '#6688CC', '#222222')
        const myText = 'Something wicked this way comes  @   maybe it is me'
        
        
        // Z lets us be in ZOOM MODE!!!!
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

        let bgc = blueIsh
        if(mm.inContainer){
            const xaligned = (player.x <= mm.position.x && mm.position.x <= player.x + 10)
            const yaligned = (player.y <= mm.position.y && mm.position.y <= player.y + 10)
            if(xaligned && yaligned){
                bgc = '#CC8888'

                // eslint-disable-next-line no-console
                console.log('intersect')
            } else if(xaligned){
                // eslint-disable-next-line no-console
                console.log('x aligned')
            } else if(yaligned){
                // eslint-disable-next-line no-console
                console.log('y aligned')
            }
        } else {
            bgc = blueIsh
        }
        
        // We're going to treat the grid as it's own entity components system, but we need manage these well, for the renders, we'll probably need to separate them
        // heck we might just treat it as it's own separate thing

        // TODO, make a grid of renderData that we can use to also mirror the input section
        // we might also include a gridCell system with components on them themselves, like render or fov or ai, etc
        // this would also let us swap out our render tech without to much trouble, even if it does mean we have an extra set of calls each turn, I think we can update it

        drawSection(image, CODE_TO_RECT_HASH[code('@')], makeRect(player.x, player.y, TILE_WIDTH, TILE_HEIGHT), blackIsh, bgc)
        for(let i = 0; i < myText.length; i++){
            const src = CODE_TO_RECT_HASH[myText.charCodeAt(i)]
            const dest = makeRect(20 + i * 10, 20, TILE_WIDTH, TILE_HEIGHT)
            drawSection(image, src, dest, blueIsh, blackIsh)
        }
        ctx.drawImage(image, 0, 500)
        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)



}).catch(err => console.log(err)) //eslint-disable-line no-console