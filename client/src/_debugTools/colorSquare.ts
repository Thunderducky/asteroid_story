import COLORS from '../_settings/colors'


class ColorSquare {
    parent: any;
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
        this.element.style.height = '60px'
    }


    activateMonitor(): void{
        this.element.style.backgroundColor = this.parent[this.keyName] as string;
        setInterval((): void => {
            this.parent[this.keyName] = this.element.style.backgroundColor
        }, 1)
    }
}

export { ColorSquare }