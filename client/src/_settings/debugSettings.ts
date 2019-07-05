interface Hash<T> {
    [key: string]: T;
}

// ALL DEBUG SETTINGS SHOULD GO IN HERE, AND ALL DEBUG FLAGS SHOULD BE FALSE BY DEFAULT (i.e. production mode)

// RELEASE DEBUG SETTINGS
const DEBUG: Hash<boolean> = {
    DISABLE_FOV: true,          // SHOW EVERYTHING, NO HIDING STUFF BEHIND FOV, EVERYTHING ACTS LIT
    DISABLE_TRACKING: true,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
    ENABLE_CLIPPING: true,
    DEBUG_DRAW: true,
    STAGE_MAP_GENERATORS: false, // We will manually progress the level generator,
    ALWAYS_SHOW_ENTITIES: true,
    SHOW_UNEXPLORED: true,
    SHOW_COLOR_BAR: false,
    SKIP_ENTITY_PLACEMENT: true,
}

//DEBUG SETTINGS
// const DEBUG: Hash<boolean> = {
//     DISABLE_FOV: false,          // SHOW EVERYTHING, NO HIDING STUFF BEHIND FOV, EVERYTHING ACTS LIT
//     DISABLE_TRACKING: true,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
//     ENABLE_CLIPPING: true,
//     DEBUG_DRAW: false,
//     STAGE_MAP_GENERATORS: false, // We will manually progress the level generator,
//     ALWAYS_SHOW_ENTITIES: true,
//     SHOW_UNEXPLORED: truez
// }

export default DEBUG
