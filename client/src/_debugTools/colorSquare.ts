import COLORS from '../_settings/colors'

class ColorSquare {
    parent: object;
    keyName: string;
    colorsRoot: object
    element: HTMLDivElement;
    constructor(left: number = 0){
        this.colorsRoot = COLORS
        this.parent = {} // eventually we will set this with some of the other things
        this.keyName = ''
        this.element = document.createElement('div')
        this.element.classList.add('colorSquare')
        this.element.style.width = '100px'
        this.element.style.height = '100px'
        // this.element.style.position = 'fixed'
        // this.element.style.bottom = '5px'
        // this.element.style.left = 5 + left * 55 + 'px'
        // this.element.style.backgroundColor = 'black'
        // document.body.appendChild(this.element)
    }


    activateMonitor(): void{
        // continiously monitor and update the color to whatever I've picked
        this.element.style.backgroundColor = this.parent[this.keyName];
        setInterval((): void => {
            this.parent[this.keyName] = this.element.style.backgroundColor
        }, 1)
    }
}

export { ColorSquare }