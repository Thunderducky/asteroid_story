// Let's build a color and label for each one of these elements I suppose
// We'll hardcode the first one to make sure it work I guess
// first things first, let's traverse the whole colors list
import COLORS from '../_settings/colors'
import {ColorSquare} from './colorSquare'

const ColorBar = {
    squares: [] as ColorSquare[],
    activate(): void{
        console.log('colors bar')
        // Let's object traverse colors
        
        const visitObject = (obj: any, path:string[] = []): void => {
            for(let prop in obj){
                console.log(prop, path)
                const val = obj[prop] as any
                if(typeof val === 'string'){
                    // we have found an endpoint, construct a ColorSquare for it
                    const a = new ColorSquare(this.squares.length)
                    a.parent = obj;
                    a.keyName = prop;
                    a.activateMonitor()
                    a.element.textContent = path.map(p => p).reverse().concat([a.keyName, val]).join(' ');
                    this.squares.push(a);

                } else {
                    visitObject(val, [prop, ...path])
                }
            }
        }

        visitObject(COLORS)

        const div = document.createElement('div');
        div.style.display = 'flex'
        div.style.flexWrap = 'wrap'
        div.style.position = 'fixed'
        div.style.bottom = '5px'
        this.squares.forEach((f): void => {
            div.appendChild(f.element)
        })
        document.body.appendChild(div);
        // this.element.style.position = 'fixed'
        // this.element.style.bottom = '5px'
        // this.element.style.left = 5 + left * 55 + 'px'
        // this.element.style.backgroundColor = 'black'
        // document.body.appendChild(this.element)

    }
}

export {ColorBar}