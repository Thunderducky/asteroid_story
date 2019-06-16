import {CODE_TO_RECT_HASH, code} from './renderHelpers'
import {KeyboardMonitor } from './keyboardMonitor'
import { MouseMonitor } from './mouseMonitor'
import { Grid } from './grid'





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
const TILES_WIDE = 80
const TILES_HIGH = 60

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
    // we look at our grid tiles and then create a render grid based off of it?
    // might not be the worst idea ever :P
    const renderGrid = new Grid(TILES_WIDE, TILES_HIGH)
    // TODO: turn this into a type
    renderGrid.setEach((cell, index, x, y) => {
        return {
            x,
            y,
            character:' ', 
            foreColor:blueIsh, 
            backColor:blackIsh
        }
    })

    for(let i = 0; i < 5; i++){
        renderGrid.getXY(i ,10).character = 'X'
    }
    
    

    // Loop
    const loop = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height)

        // Look at player input
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

        // THIS TYPE MIGHT CHANGE SUBSTANTIALLY IN THE FUTURE

        // DRAW THE RENDER GRID
        renderGrid.forEach((cell, index, x, y) => {
            const { character, foreColor, backColor} = cell
            // TODO: WE WILL BE THRASHING THE GARBAGE COLLECTOR IF WE ARE CONSTANTLY MAKING RECTS LIKE THIS, FIX THAT
            drawSection(image, CODE_TO_RECT_HASH[code(character)], makeRect(x * TILE_WIDTH,y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT), foreColor, backColor)
        })
  
        drawSection(image, CODE_TO_RECT_HASH[code('@')], makeRect(player.x, player.y, TILE_WIDTH, TILE_HEIGHT), blackIsh, blueIsh)

        ctx.drawImage(image, 0, 500)
        km.resetSteps()
        mm.reset()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)



}).catch(err => console.log(err)) //eslint-disable-line no-console