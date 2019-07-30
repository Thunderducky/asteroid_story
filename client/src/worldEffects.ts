// In here we will put the different things that can happen because of items or other things, like healing or casting spells

// We need a generic way of storing information for effects later, or passing them in
// so for healing potions we need the user and the amount
// so in a sense what we need is a way to defer publishing an event, but what we want to to do is also make that debuggable
// So it'd be a deferred effect, and anything could trigger it

// I also want to rejigger a number of things, including how combat works, including damage systems so that gets handled responsibly
// we also need the concept of an 'interrupt' or 'wait' I guess

// Simple Item - Doesn't require targeting, either effects self or requires no other actions
// This Item would use it's targeting component? as part of it's entity?

// Healing Potion
// Lightening Scroll

// Targeted Item
// Fireball Scroll
// Confusion Scroll
// Can target fn
// includes things like range, which for use will mostly be distance

// Need to make a results hash so we can prioritize things properly