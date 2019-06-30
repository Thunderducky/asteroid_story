interface Hash<T> {
    [key: string]: T;
}

// ALL DEBUG SETTINGS SHOULD GO IN HERE, AND ALL DEBUG FLAGS SHOULD BE FALSE BY DEFAULT (i.e. production mode)

// RELEASE DEBUG SETTINGS
// const DEBUG: Hash<boolean> = {
//     DISABLE_FOV: false,          // SHOW EVERYTHING, NO HIDING STUFF BEHIND FOV, EVERYTHING ACTS LIT
//     DISABLE_TRACKING: false,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
//     ENABLE_CLIPPING: false,
//     DEBUG_DRAW: false,
//     STAGE_MAP_GENERATORS: false, // We will manually progress the level generator,
//     ALWAYS_SHOW_ENTITIES: false,
//     SHOW_UNEXPLORED: false
// }

// DEBUG SETTINGS
const DEBUG: Hash<boolean> = {
    DISABLE_FOV: false,          // SHOW EVERYTHING, NO HIDING STUFF BEHIND FOV, EVERYTHING ACTS LIT
    DISABLE_TRACKING: true,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
    ENABLE_CLIPPING: true,
    DEBUG_DRAW: false,
    STAGE_MAP_GENERATORS: false, // We will manually progress the level generator,
    ALWAYS_SHOW_ENTITIES: true,
    SHOW_UNEXPLORED: true
}

export default DEBUG
