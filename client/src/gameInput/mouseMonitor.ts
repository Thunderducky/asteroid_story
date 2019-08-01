// Let's go ahead and create the Point interface here, we'll export it for use later in the project

import {IPoint, Point} from '../shapes/point'

/**
 * Class to help monitor things that have happened to the mouse since last time that we looked
 */

interface HalfClick {
    position: IPoint;
    isDown: boolean;
}

class MouseMonitor {
    /**
     * the position of the mouse over the attached elemnt
     */
    position: IPoint;
    /**
     * Whether or not the mouse has moved since last time we looked
     */
    hasMoved: boolean;
    /**
     * true if the mouse is currently inside the container 
     */
    inContainer: boolean;

    /**
     * is the mouse button down (currently only tracks left)
     */
    isDown: boolean;

    /**
     * If a full click is up and down, this is a collection of ups and downs, useful for drags or other things that might have happened in the meantime
     */
    halfClicks: HalfClick[];
    
    constructor(){
        this.position = Point.make(0,0)
        this.hasMoved = false
        this.inContainer = false
        this.isDown = false
        this.halfClicks = []
        // TODO: Add click tracking, depends on how quickly we are polling
    }
    /**
     * Attach to the specific element you want to monitor mouse related events to
     * @param element the particular mouse event
     */
    attach(element: any): MouseMonitor {
        // TODO: We'll register click history in the future, for now we are just doing mouse over at present
        const updatePosition = (e: any): void => {
            const rect = e.target.getBoundingClientRect()
            Point.set(this.position, e.clientX - rect.left, e.clientY - rect.top)
        }
        // mouse enters canvas
        element.addEventListener('mouseenter', (e: any): void => {
            updatePosition(e)
            this.inContainer = true
            this.hasMoved = true
        })
        // mouse moves within the canvas
        element.addEventListener('mousemove', (e: any): void => {
            updatePosition(e)
            this.inContainer = true
            this.hasMoved = true

        })
        // mouse exits the canvas
        element.addEventListener('mouseleave', (e: any): void => {
            updatePosition(e)
            this.inContainer = false
            this.hasMoved = true
        })
        // mouse button is pressed
        element.addEventListener('mousedown', (e: any): void => {
            // only pay attention to the primary button
            if(e.button != 0){
                return
            }
            const rect = e.target.getBoundingClientRect()
            const position = Point.make(e.clientX - rect.left, e.clientY - rect.top)
            this.halfClicks.push({ position, isDown: true })
            this.isDown = true
        })
        // mouse button is raised
        element.addEventListener('mouseup', (e: any): void => {
            // only pay attention to the primary button
            if(e.button != 0){
                return
            }
            const rect = e.target.getBoundingClientRect()
            const position = Point.make(e.clientX - rect.left, e.clientY - rect.top)
            this.halfClicks.push({ position, isDown: false })
            this.isDown = false
        })

        return this
    }

    /**
     * this function is used to mark that we have processed all of the events since our last poll of state and it can be reset
     */
    reset(): void{
        // by default we haven't moved before
        this.hasMoved = false
        // clear out the clicks
        this.halfClicks.length = 0
    }
}

export { MouseMonitor }