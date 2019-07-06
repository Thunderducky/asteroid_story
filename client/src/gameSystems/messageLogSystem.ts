import { MessageLog, wrapText } from '../messageLog'
import { PUBSUB } from '../pubSub/pubSub'
import { TOPICS } from '../pubSub/pubsubTopicList'

// TODO: Move into game data eventually

const MessageLogSystem = {
    init: (messageLog: MessageLog): void => {
        PUBSUB.subscribe(TOPICS.MESSAGE_LOG, (msg): void => {
            messageLog.addMessage(wrapText(msg.text))
        })
    }
}
export { MessageLogSystem}