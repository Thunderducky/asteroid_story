import { PrioritySubscriberList, SubscriberFunction } from './prioritySubscriberList'

interface Hash<T> {
    [key: string]: T;
}

/**
 * Pubsub is a topic-based observer pattern implementation designed to avoid tight coupling of components
 */
class PubSub {
    topics: Hash<PrioritySubscriberList>;
    constructor(){
        this.topics = {}
    }
    /**
     * Dispatch a message to all subscribers to a topic
     * @param topic Topic to use, if nobody is subscribed to it, nothing happens
     * @param message The actual message to send, this could be anything, but it's a single thing
     */
    publish(topic: string, message: any): void {
        if(this.topics[topic]){
            this.topics[topic].notify(message, topic)
        }
    }
    /**
     * Listen to a specific topic with a given priority, returns an id that you'll need to unsubscribe
     * @param topic the specific topic to subscribe to
     * @param fn the function to recieve the specific message and topic being broadcasted to
     * @param priority the priority of the function to subscribe to, higher numbers run first, the default is zero, negative numbers are allowed
     */
    subscribe(topic: string, fn: SubscriberFunction, priority: number = 0): number {
        if(!this.topics[topic]){
            this.topics[topic] = new PrioritySubscriberList()
        }
        return this.topics[topic].subscribe(fn, priority)
    }
}
// OUR UNIVERSAL DEFAULT PUBSUB
const PUBSUB = new PubSub()
export {PUBSUB, PubSub}