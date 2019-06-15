import {CHARACTER_HELPER, CODE_TO_RECT_HASH} from './renderHelpers'

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
const code = char => char.charCodeAt(0)

loadImage('assets/out.png').then(image => {
    ctx.drawImage(image, 0, 500)
    drawSection(image, makeRect(0, 10, TILE_WIDTH, TILE_HEIGHT), makeRect(20, 20, TILE_WIDTH, TILE_HEIGHT), '#6688CC', '#222222')
    const myText = 'Something wicked this way comes  @   maybe it is me'
    
    drawSection(image, CODE_TO_RECT_HASH[code(CHARACTER_HELPER.VERTICAL_LINE)], makeRect(30, 40, TILE_WIDTH*2, TILE_HEIGHT*2), blackIsh, blueIsh)

    ctx.fillStyle = blackIsh
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i < myText.length; i++){
        const src = CODE_TO_RECT_HASH[myText.charCodeAt(i)]
        const dest = makeRect(20 + i * 10, 20, TILE_WIDTH, TILE_HEIGHT)
        drawSection(image, src, dest, blueIsh, blackIsh)
    }

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
}