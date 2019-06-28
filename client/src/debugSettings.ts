interface Hash<T> {
    [key: string]: T;
}

// ALL DEBUG SETTINGS SHOULD GO IN HERE, AND ALL DEBUG FLAGS SHOULD BE FALSE BY DEFAULT (i.e. production mode)
const DEBUG: Hash<boolean> = {
    DISABLE_FOV: false,          // SHOW EVERYTHING, NO HIDING STUFF BEHIND FOV, EVERYTHING ACTS LIT
<<<<<<< HEAD
    DISABLE_TRACKING: false,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
    ENABLE_CLIPPING: false,
    DEBUG_DRAW: false,
    STAGE_MAP_GENERATORS: false, // We will manually progress the level generator
=======
    DISABLE_TRACKING: true,     // CAMERA WILL ONLY RESPOND TO DIRECT CONTROL AND WON'T TRACK CHARACTER
    ENABLE_CLIPPING: false,
    DEBUG_DRAW: true,
    STAGE_MAP_GENERATORS: true, // We will manually progress the level generator
>>>>>>> 0729402753126b9acb78b53bd05132b0121e10f4
}

export default DEBUG
