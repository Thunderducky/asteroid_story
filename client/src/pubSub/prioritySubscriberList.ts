let _id = 0
const nextId = (): number => _id++

// TODO: Make messages enums?

// TODO: Make an interface for the subscriber function
type SubscriberFunction = (message: any, topic: string) => void

interface SubscriberNode {
    id: number;
    subFn: SubscriberFunction;
    priority: number;
    next: SubscriberNode | null;
}



const makeSubNode = (subFn: SubscriberFunction, priority: number = 0, next: SubscriberNode | null = null): SubscriberNode => {
    return {
        id: nextId(),
        subFn,
        priority,
        next
    }
}

// TODO: ?? Make it so a subscriber list could be deafened/listen?

/**
 * A group of functions, sorted by priority, which will be called sequentially when the list is notified of a new message
 */
class PrioritySubscriberList {
    root: SubscriberNode | null;
    tail: SubscriberNode | null;
    length: number;
    constructor(){
        this.root = null
        this.tail = null
        this.length = 0
    }
    /**
     * Listen for messages that get sent to this list via the notify function
     * @param fn a function that will be called with the message object whenever this subscriber list is activated
     * @param priority The higher the priority, the earlier it will run, if it has the same priority the one that was added first will fire first
     */
    subscribe(fn: SubscriberFunction, priority: number = 0): number{
        // Case #1 Empty Subscriber List
        if(this.length === 0){
            this.root = makeSubNode(fn, priority)
            this.tail = this.root
            this.length++
            return this.root.id
        } 
        // Case #2 We already have some subscribers
        else {
            let traveller = this.root // we know it should be a Subscriber Node and not null, because we are here

            // Special case, new root
            if(priority < traveller!.priority){
                this.root = makeSubNode(fn, priority, this.root)
                this.length++
                return this.root.id
            }
            // Normal case we have other things to worry about
            else {
                while(traveller && traveller.next && traveller.next.priority >= priority){
                    traveller = traveller.next
                }
                // we have either found a node with lower priority than us or we have found the end of the line
                traveller!.next = makeSubNode(fn, priority, traveller!.next)

                // if travellers was the old tail
                if(traveller === this.tail){
                    // it's next one is the new tail
                    this.tail = traveller!.next
                }
                this.length++
                return traveller!.next.id
            }
        }
    }

    /**
     * 
     * @param message the most imporant information for the listener
     * @param topic used in conjunction with pubsub to remind the subscriber of the specific topic or subtopic
     */
    notify(message: any, topic: string): void {
        let traveller = this.root
        while(traveller != null){
            traveller.subFn(message, topic)
            traveller = traveller.next
        }
    }
}

export { PrioritySubscriberList, SubscriberFunction }