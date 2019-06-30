// TODO: Add color support to strings
// we're basically reintroducing the concept of spans
// that we can give colors to

/**
 * Internal help for text
 * @param text 
 */
const t = (text: string): object => { return { text } }
const TEXT = {
    AIRLOCK_TO_SPACE: t('You enter the void of space'),
    SPACE_RETURN_AIRLOCK: t('You return to the safety of the airlock'),
    DEAD_CIVILIAN: t('you find the civilian, cold to the touch, another casualty of the Belt'),
    LEAVE_DEAD_CIVILIAN: t('You leave the lifeless asteroid behind')
}
export default TEXT