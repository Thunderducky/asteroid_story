// We'll definitely be reusing this one
const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}
// We'll move this out into a different file
const CODE_TO_RECT_HASH = {}
const spaceCode = ' '.charCodeAt(0)
const atCode = '@'.charCodeAt(0)
const aCode = 'a'.charCodeAt(0)
const zCode = 'z'.charCodeAt(0)
const ACode = 'A'.charCodeAt(0)
const ZCode = 'Z'.charCodeAt(0)

// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = makeRect(0, 0, 10, 10)
CODE_TO_RECT_HASH[atCode] = makeRect(0, 10, 10, 10)
for(let i = ACode; i <= ZCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - ACode) * 10, 30, 10, 10)
}
for(let i = aCode; i <= zCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - aCode) * 10, 40, 10, 10)
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

loadImage('assets/out.png').then(image => {
    ctx.drawImage(image, 0, 500)
    drawSection(image, makeRect(0, 10, 10, 10), makeRect(20, 20, 10, 10), '#6688CC', '#222222')
    const myText = 'Something wicked this way comes  @   maybe it is me'
    for(var i = 0; i < myText.length; i++){
        const src = CODE_TO_RECT_HASH[myText.charCodeAt(i)]
        const dest = makeRect(20 + i * 10, 20, 10, 10)
        drawSection(image, src, dest, '#6688CC', '#222222')
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