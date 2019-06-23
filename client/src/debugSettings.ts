interface Hash<T> {
    [key: string]: T;
}

// ALL DEBUG SETTINGS SHOULD GO IN HERE, AND ALL DEBUG FLAGS SHOULD BE FALSE BY DEFAULT (i.e. production mode)
const DEBUG: Hash<boolean> = {
    DISABLE_FOV: false,          // SHOW EVERYTHING, NO HIDING STUFF BEHIND FOV, EVERYTHING ACTS LIT
    DISABLE_TRACKING: true,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
    ENABLE_CLIPPING: true,
    DEBUG_DRAW: true,
    STAGE_MAP_GENERATORS: true, // We will manually progress the level generator
}

export default DEBUG
