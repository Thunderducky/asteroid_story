/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.ts":
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboardMonitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardMonitor */ "./client/src/keyboardMonitor.ts");
/* harmony import */ var _mouseMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouseMonitor */ "./client/src/mouseMonitor.ts");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./client/src/grid.ts");
/* harmony import */ var _renderCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderCell */ "./client/src/renderCell.ts");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile */ "./client/src/tile.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entity */ "./client/src/entity.ts");
/* harmony import */ var _assetHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assetHelper */ "./client/src/assetHelper.ts");
/* harmony import */ var _canvasRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvasRenderer */ "./client/src/canvasRenderer.ts");
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");
/* harmony import */ var _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pubSub/pubSub */ "./client/src/pubSub/pubSub.ts");
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _idManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./idManager */ "./client/src/idManager.ts");
/* harmony import */ var _fov__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fov */ "./client/src/fov.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");
/* harmony import */ var _gameSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gameSettings */ "./client/src/gameSettings.ts");
/* harmony import */ var _handleInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./handleInput */ "./client/src/handleInput.ts");
/* harmony import */ var _renderToGrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./renderToGrid */ "./client/src/renderToGrid.ts");
/* harmony import */ var _debugSettings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./debugSettings */ "./client/src/debugSettings.ts");
/* harmony import */ var _progressiveMapGeneration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progressiveMapGeneration */ "./client/src/progressiveMapGeneration.ts");




















const { TILE_WIDTH, TILE_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT, MAP_WIDTH, MAP_HEIGHT, CAMERA_WIDTH, CAMERA_HEIGHT, FOV_RADIUS } = _gameSettings__WEBPACK_IMPORTED_MODULE_15__["default"];
// INITIALIZE OUR SEED
const urlParams = new URLSearchParams(window.location.search);
const seedStr = urlParams.get('seed');
if (!seedStr) {
    const seed = _rngHelper__WEBPACK_IMPORTED_MODULE_13__["RANDOM"].seed(seedStr || undefined);
    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed;
    if (history.pushState) {
        window.history.pushState({ path: newurl }, '', newurl);
    }
    else {
        window.location.href = newurl;
    }
}
else {
    _rngHelper__WEBPACK_IMPORTED_MODULE_13__["RANDOM"].seed(seedStr);
}
const player = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', _colors__WEBPACK_IMPORTED_MODULE_14__["default"].player);
const npc = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', _colors__WEBPACK_IMPORTED_MODULE_14__["default"].npc);
const entities = [player, npc];
// Find our canvas and adjust it to our settings
const canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH * TILE_WIDTH;
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT;
// Initialize our input monitors
const km = new _keyboardMonitor__WEBPACK_IMPORTED_MODULE_0__["KeyboardMonitor"]().attach(document);
const mm = new _mouseMonitor__WEBPACK_IMPORTED_MODULE_1__["MouseMonitor"]().attach(canvas);
// Initialize our canvas renderer
const renderer = new _canvasRenderer__WEBPACK_IMPORTED_MODULE_7__["CanvasRenderer"]();
const cameraFrame = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].make(0, 0, CAMERA_WIDTH, CAMERA_HEIGHT); // CAMERA IS IN WORLD CELLS, NOT ABSOLUTE UNITS
// Initialize our Grids
const renderGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
renderGrid.setEach((cell, index, x, y) => {
    return _renderCell__WEBPACK_IMPORTED_MODULE_3__["RenderCell"].make(x, y, '', _colors__WEBPACK_IMPORTED_MODULE_14__["default"].black, _colors__WEBPACK_IMPORTED_MODULE_14__["default"].black);
});
// THESE ARE HERE BY DEFAULT, BUT WON'T BE SHOWN UNLESS ENABLED
const debugGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
debugGrid.setEach((cell, index, x, y) => {
    return _renderCell__WEBPACK_IMPORTED_MODULE_3__["RenderCell"].make(x, y, '', _colors__WEBPACK_IMPORTED_MODULE_14__["default"].black, _colors__WEBPACK_IMPORTED_MODULE_14__["default"].black);
});
let fovRecompute = !_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].DISABLE_FOV;
const fovGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
fovGrid.setEach(() => {
    return {
        visible: _debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].DISABLE_FOV
    };
});
const tileGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
tileGrid.setEach((cell, index, x, y) => {
    const t = new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, true);
    if (_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].DISABLE_FOV) {
        t.explored = true;
    }
    return t;
});
// this will also populate the rooms
const rooms = [];
//mapGenerator3(tileGrid, rooms)
//mapGenerator2(tileGrid, rooms)
// this is honestly just another part of genrating things, we just need to come up with some extra terminology for it/ ways to deal with it
// clean this up
const moves = [];
const MoveProcessor = {
    moves
};
_pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].subscribe('move', (msg) => {
    MoveProcessor.moves.push(msg);
});
_pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].subscribe('moved', (msg) => {
    if (msg.id === player.id && !_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].DISABLE_TRACKING) {
        cameraFrame.x = Math.floor(player.x - cameraFrame.width / 2);
        cameraFrame.y = Math.floor(player.y - cameraFrame.height / 2);
        fovGrid.x = cameraFrame.x;
        fovGrid.y = cameraFrame.y;
    }
});
_pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].subscribe('camera_move', (msg) => {
    cameraFrame.x += msg.delta.x;
    cameraFrame.y += msg.delta.y;
    fovGrid.x = cameraFrame.x;
    fovGrid.y = cameraFrame.y;
});
// TODO: MOVE THIS TO the Keyboard Monitor itself as a helper property
const newKeyPress = (q, enableZoom = true) => {
    const state = km.getKeyState(q);
    if (!enableZoom) {
        return state.isDown && state.halfSteps > 0;
    }
    else {
        return state.isDown && (state.halfSteps > 0 || km.getKeyState('z').isDown);
    }
};
const levelIterator = Object(_progressiveMapGeneration__WEBPACK_IMPORTED_MODULE_19__["progressiveMapGenerator"])(tileGrid, rooms, debugGrid);
levelIterator.next();
{
    if (rooms.length > 0) {
        const pcenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].center(rooms[0]);
        _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(player, pcenter.x, pcenter.y);
        const npcenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].center(rooms[rooms.length - 1]);
        _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(npc, npcenter.x, npcenter.y);
    }
    // center the camera and fov on the player
    if (!_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].DISABLE_TRACKING) {
        cameraFrame.x = Math.floor(player.x - cameraFrame.width / 2);
        cameraFrame.y = Math.floor(player.y - cameraFrame.height / 2);
        fovGrid.x = cameraFrame.x;
        fovGrid.y = cameraFrame.y;
    }
    else {
        // center everything
        cameraFrame.x = Math.floor(tileGrid.width / 2 - cameraFrame.width / 2);
        cameraFrame.y = Math.floor(tileGrid.height / 2 - cameraFrame.height / 2);
        fovGrid.x = cameraFrame.x;
        fovGrid.y = cameraFrame.y;
    }
}
Object(_assetHelper__WEBPACK_IMPORTED_MODULE_6__["loadImage"])('assets/out.png').then((image) => {
    renderer.init(canvas, image);
    if (!_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].STAGE_MAP_GENERATORS) {
        // JUST FULLY SEQUENCE THE GENERATOR
        while (levelIterator.next().done !== false) { }
    }
    // Loop
    const loop = () => {
        Object(_handleInput__WEBPACK_IMPORTED_MODULE_16__["handleInput"])(km, player);
        // extra
        if (newKeyPress('w')) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('camera_move', { delta: { x: 0, y: -1 } });
        }
        if (newKeyPress('a')) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('camera_move', { delta: { x: -1, y: 0 } });
        }
        if (newKeyPress('s')) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('camera_move', { delta: { x: 0, y: 1 } });
        }
        if (newKeyPress('d')) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('camera_move', { delta: { x: 1, y: 0 } });
        }
        if (_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].STAGE_MAP_GENERATORS) {
            // q lets us progress through the map generator phase
            if (newKeyPress('q')) {
                // yield the next level generating setting
                levelIterator.next();
            }
        }
        // process moves
        // eventually we'll componentize this better
        MoveProcessor.moves.forEach((msg) => {
            const move = msg.delta;
            const id = msg.id;
            const mover = entities.find((e) => e.id == id);
            if (!mover) {
                return;
            }
            if (tileGrid.inBoundsXY(mover.x + move.x, mover.y + move.y)) {
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y);
                if (!tile.blockMove || (_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].ENABLE_CLIPPING && mover.id === player.id)) {
                    mover.move(move.x, move.y);
                    if (mover.id === player.id) {
                        fovRecompute = true;
                    }
                    _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('moved', msg); // only publish move if the entity actually completed the move
                }
            }
        });
        MoveProcessor.moves.length = 0;
        if (fovRecompute && !_debugSettings__WEBPACK_IMPORTED_MODULE_18__["default"].DISABLE_FOV) {
            Object(_fov__WEBPACK_IMPORTED_MODULE_12__["calculateFOV"])(fovGrid, tileGrid, player, FOV_RADIUS);
        }
        // Convert to render format
        Object(_renderToGrid__WEBPACK_IMPORTED_MODULE_17__["renderToGrid"])(tileGrid, fovGrid, entities, renderGrid, cameraFrame, debugGrid);
        // actually render to canvas
        renderer.clear();
        renderer.render(renderGrid);
        km.resetSteps();
        mm.reset();
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
}).catch((err) => console.log(err)); //eslint-disable-line no-console


/***/ }),

/***/ "./client/src/assetHelper.ts":
/*!***********************************!*\
  !*** ./client/src/assetHelper.ts ***!
  \***********************************/
/*! exports provided: loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', () => resolve(img));
        img.addEventListener('error', () => reject(new Error(`Failed to load image from ${url}`)));
        img.src = url;
    });
}



/***/ }),

/***/ "./client/src/canvasRenderer.ts":
/*!**************************************!*\
  !*** ./client/src/canvasRenderer.ts ***!
  \**************************************/
/*! exports provided: CanvasRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderer", function() { return CanvasRenderer; });
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderHelpers */ "./client/src/renderHelpers.ts");
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _gameSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameSettings */ "./client/src/gameSettings.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");




/**
 * Responsible for taking a render grid and converting it to images
 * on the canvas
 */
const { TILE_WIDTH, TILE_HEIGHT } = _gameSettings__WEBPACK_IMPORTED_MODULE_2__["default"];
class CanvasRenderer {
    constructor() {
    }
    init(canvas, spritesheet) {
        this.canvas = canvas;
        // we are just forcing this for now, we will check if it's null
        const ctx = canvas.getContext('2d');
        if (ctx === null) {
            throw new Error('Could not get context from canvas');
        }
        this.ctx = ctx;
        this.spritesheet = spritesheet;
        return this;
    }
    // eventually we need to pass in the dimensions we are rendering to as well
    // for now it's fine
    render(renderGrid, background = _colors__WEBPACK_IMPORTED_MODULE_3__["default"].black) {
        if (this.ctx == null) {
            throw new Error('Cannot render a grid with a missing context');
        }
        const ctx = this.ctx;
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, renderGrid.width * TILE_WIDTH, renderGrid.height * TILE_HEIGHT);
        // let's try setting a background color as well
        // We have checked to ensure that it has been created
        const destRect = _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].make(0, 0, 0, 0);
        renderGrid.forEach((cell, index, x, y) => {
            _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].set(destRect, x * TILE_WIDTH, y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
            // todo, allow us to mark render cells as 'empty' rather than spaces, this might help speed up render time
            if (cell.character.length === 0) {
                if (cell.backColor !== background) {
                    // I actually don't know if this helps, but it seems like setting the fillStyle could involve more complications than just checking if it's the same
                    if (ctx.fillStyle !== cell.backColor) {
                        ctx.fillStyle = cell.backColor;
                    }
                    ctx.fillRect(destRect.x, destRect.y, destRect.width, destRect.height);
                }
            }
            else {
                const srcRect = _renderHelpers__WEBPACK_IMPORTED_MODULE_0__["CODE_TO_RECT_HASH"][Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["code"])(cell.character)];
                Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["drawSection"])(ctx, this.spritesheet, srcRect, destRect, cell.foreColor, cell.backColor);
            }
        });
    }
    clear() {
        if (this.canvas == null || this.ctx == null) {
            throw new Error('Cannot render a grid with a missing context');
        }
        // We have checked to ensure that it has been created
        const ctx = this.ctx;
        const canvas = this.canvas;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}



/***/ }),

/***/ "./client/src/colors.ts":
/*!******************************!*\
  !*** ./client/src/colors.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TODO: Reorganize this into materials
// We'll even include "BLANK"
// As opposed to empty space
const COLORS = {
    'dark_outside': '#002244',
    'light_outside': '#265380',
    'black': '#000000',
    'white': '#FFFFFF',
    'dark_wall': '#2d2824',
    'dark_ground': '#443c35',
    'light_wall': '#C8B432',
    'light_ground': '#C5CC89',
    'player': '#FFFFFF',
    'dark_door': '#550000',
    'light_door': '#FF2222',
    'npc': '#CC0000',
    'DEBUG': '#FF3333',
    metal: {
        darkWall: '#4A4A4A',
        darkGround: '#616161',
        lightWall: '#858585',
        lightGround: '#BFBFBF'
    }
};
// SOME GRAY TYPES
// #4A4A4A
// #616161
// #858585
// #BFBFBF
/* harmony default export */ __webpack_exports__["default"] = (COLORS);


/***/ }),

/***/ "./client/src/debugSettings.ts":
/*!*************************************!*\
  !*** ./client/src/debugSettings.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// ALL DEBUG SETTINGS SHOULD GO IN HERE, AND ALL DEBUG FLAGS SHOULD BE FALSE BY DEFAULT (i.e. production mode)
const DEBUG = {
    DISABLE_FOV: false,
    DISABLE_TRACKING: true,
    ENABLE_CLIPPING: true,
    DEBUG_DRAW: true,
    STAGE_MAP_GENERATORS: true,
};
/* harmony default export */ __webpack_exports__["default"] = (DEBUG);


/***/ }),

/***/ "./client/src/entity.ts":
/*!******************************!*\
  !*** ./client/src/entity.ts ***!
  \******************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/**
 * A generic object to represent everything that is not the map itself
 * For that, see the Tile class
 */
class Entity {
    constructor(id, x, y, character, color) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.character = character;
        this.color = color;
    }
    /**
     * Move an entity, currently doesn't check if it can or not, just does
     * @param dx Amount to move in the x direction (left is negative, right is positive)
     * @param dy Amount to move in the y direction (up is negative, down is positive)
     */
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}



/***/ }),

/***/ "./client/src/fov.ts":
/*!***************************!*\
  !*** ./client/src/fov.ts ***!
  \***************************/
/*! exports provided: calculateFOV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFOV", function() { return calculateFOV; });
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");

const isBetweenInclusive = (a, b, t) => {
    if (b < a) {
        return b <= t && t <= a;
    }
    else {
        return a <= t && t <= b;
    }
};
/**
 *
 * @param fovGrid
 * @param tileGrid
 * @param startPoint start point is in world coordinates
 * @param maxDistance
 * @param horizontalNotVertical
 * @param xDirection
 * @param yDirection
 */
const calculateOctant = (fovGrid, tileGrid, startPoint, maxDistance, horizontalNotVertical, xDirection, yDirection) => {
    // Our shadows we will cast
    const shadowRanges = [];
    // our starting location is always visible
    const screenStartPoint = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].copy(startPoint);
    screenStartPoint.x -= fovGrid.x;
    screenStartPoint.y -= fovGrid.y;
    fovGrid.getP(screenStartPoint).visible = true;
    // TODO: Determine if the FOV is in range
    for (let row = 1; row < maxDistance; row++) {
        const rowSize = row + 1;
        for (let column = 0; column < rowSize; column++) {
            // Depending on the octant, the traveller will move differently
            const traveller = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].copy(startPoint);
            traveller.x += horizontalNotVertical ? xDirection * column : xDirection * row;
            traveller.y += horizontalNotVertical ? yDirection * row : yDirection * column;
            // if we are out of bounds, skip
            if (!tileGrid.inBoundsXY(traveller.x, traveller.y)) {
                continue;
            }
            // factor in our tile check when we get the world cell
            let screenPoint = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].copy(traveller);
            screenPoint.x -= fovGrid.x;
            screenPoint.y -= fovGrid.y;
            const tile = tileGrid.getP(traveller);
            // OPTIMIZE: We are probably running to many times and could do this better
            if (!fovGrid.inBoundsXY(screenPoint.x, screenPoint.y)) {
                continue;
            }
            const fovCell = fovGrid.getP(screenPoint);
            const start = column / rowSize;
            const end = (column + 1) / rowSize;
            const middle = (start + end) / 2;
            // test for visiblity
            let visibility = true;
            // different edges are clear or not
            let startClear = true;
            let middleClear = true;
            let endClear = true;
            // If we have built some shadow ranges
            if (shadowRanges.length !== 0) {
                // determine if any shadows cross our three points
                shadowRanges.forEach((sr) => {
                    startClear = startClear && !isBetweenInclusive(sr.start, sr.end, start);
                    middleClear = middleClear && !isBetweenInclusive(sr.start, sr.end, middle);
                    endClear = endClear && !isBetweenInclusive(sr.start, sr.end, end);
                });
                // calculate visibility based off of our sampling
                visibility = middleClear && (startClear || endClear);
            }
            // if we block sight, calculate our shadow ends
            if (tile.blockSight) {
                shadowRanges.push({ start, end });
            }
            fovCell.visible = visibility;
            if (fovCell.visible) {
                tile.explored = true;
            }
        }
    }
};
const calculateFOV = (fovGrid, tileGrid, startPoint, maxDistance) => {
    // be default we are going to shadowCast
    // by default everything is not visible
    fovGrid.forEach((cell) => { cell.visible = false; });
    // NNW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, -1, -1);
    // WNW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, -1, -1);
    // WSW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, -1, 1);
    // SSW
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, -1, 1);
    // SSE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, 1, 1);
    // ESE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, 1, 1);
    // ENE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, false, 1, -1);
    // NNE
    calculateOctant(fovGrid, tileGrid, startPoint, maxDistance, true, 1, -1);
};



/***/ }),

/***/ "./client/src/gameSettings.ts":
/*!************************************!*\
  !*** ./client/src/gameSettings.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// ORIGINAL
// const SETTINGS = {
//     TILE_WIDTH: 10,     // pixels
//     TILE_HEIGHT: 10,    // pixels
//     MAP_WIDTH: 80,      // everything else is in tiles
//     MAP_HEIGHT: 45,
//     CAMERA_WIDTH: 100,
//     CAMERA_HEIGHT: 70,
//     SCREEN_WIDTH :100,
//     SCREEN_HEIGHT : 70,
//     FOV_RADIUS: 35
// }
const SETTINGS = {
    TILE_WIDTH: 5,
    TILE_HEIGHT: 5,
    MAP_WIDTH: 200,
    MAP_HEIGHT: 130,
    CAMERA_WIDTH: 210,
    CAMERA_HEIGHT: 140,
    SCREEN_WIDTH: 210,
    SCREEN_HEIGHT: 140,
    FOV_RADIUS: 35
};
/* harmony default export */ __webpack_exports__["default"] = (SETTINGS);


/***/ }),

/***/ "./client/src/grid.ts":
/*!****************************!*\
  !*** ./client/src/grid.ts ***!
  \****************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
// TODO: give grids their own x and ys, that way they can implement all the point and rect stuff
/**
 * Grid to represent 2d collections, please don't resize it after creating it
 */
class Grid {
    constructor(width, height, x = 0, y = 0) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.cells.length = width * height;
        this.x = x;
        this.y = y;
    }
    /**
     * Primarily used for initialization of the grid, overwrites previous entries based on the current entry, don't use this unless entries are independent from each other
     * @param fn this function takes the cell itself as the first property and
     */
    setEach(fn) {
        let x = 0, y = 0;
        for (let i = 0; i < this.cells.length; i++) {
            x = i % this.width;
            y = (i - x) / this.width;
            this.cells[i] = fn(this.cells[i], i, x, y);
        }
        return this;
    }
    /**
     * Do something for each member of a cell, going row by row from left to right
     * @param fn Get passed the cell, index, x and y
     */
    forEach(fn) {
        let i = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                fn(this.cells[i], i, x, y);
                i++;
            }
        }
    }
    /**
     * The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param x x coordinate of the grid
     * @param y y coordinate of the grid
     */
    getXY(x, y) {
        if (!this.inBoundsXY(x, y)) {
            throw new Error('boundary access issue');
        }
        return this.cells[x + y * this.width];
    }
    /**
     * Convenience method for getXY. The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param point contains the x and y coordinates of the cell you want to get
     */
    getP(point) {
        return this.getXY(point.x, point.y);
    }
    inBoundsXY(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        return true;
    }
    /**
     * Get the cell based off of an index, usually in conjunction with the forEach loop of a similarly sized grid
     * NOTE be careful that the other grid has the same dimension unless you really know what you're doing
     * @param index Index of the cells, mostly to be used with grids that are working alongside a different forEach loop
     */
    getI(index) {
        return this.cells[index];
    }
    getNeighborsXY(x, y) {
        const list = {
            up: null,
            down: null,
            left: null,
            right: null,
            neighbors: []
        };
        if (this.inBoundsXY(x, y - 1)) {
            list.up = this.getXY(x, y - 1);
            list.neighbors.push(list.up);
        }
        if (this.inBoundsXY(x, y + 1)) {
            list.down = this.getXY(x, y + 1);
            list.neighbors.push(list.down);
        }
        if (this.inBoundsXY(x - 1, y)) {
            list.left = this.getXY(x - 1, y);
            list.neighbors.push(list.left);
        }
        if (this.inBoundsXY(x + 1, y)) {
            list.right = this.getXY(x + 1, y);
            list.neighbors.push(list.right);
        }
        return list;
    }
}



/***/ }),

/***/ "./client/src/handleInput.ts":
/*!***********************************!*\
  !*** ./client/src/handleInput.ts ***!
  \***********************************/
/*! exports provided: handleInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInput", function() { return handleInput; });
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");
/* harmony import */ var _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub/pubSub */ "./client/src/pubSub/pubSub.ts");


const handleInput = (km, player) => {
    if (km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)) {
        _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_1__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(-1, 0) });
    }
    if (km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)) {
        _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_1__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(1, 0) });
    }
    if (km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)) {
        _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_1__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(0, -1) });
    }
    if (km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)) {
        _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_1__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(0, 1) });
    }
    // quick number generator
    if (!km.getKeyState('n').isDown && (km.getKeyState('n').halfSteps > 0)) {
        const seed = btoa(new Date().toString());
        const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed;
        window.location.href = newurl;
    }
};


/***/ }),

/***/ "./client/src/idManager.ts":
/*!*********************************!*\
  !*** ./client/src/idManager.ts ***!
  \*********************************/
/*! exports provided: ID_MANAGER, IDManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID_MANAGER", function() { return ID_MANAGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDManager", function() { return IDManager; });
class IDManager {
    constructor() {
        this.lastId = 0;
    }
    /**
     * Get the next id
     */
    next() {
        return this.lastId++;
    }
}
/**
 * The default ID_MANAGER
 */
const ID_MANAGER = new IDManager();



/***/ }),

/***/ "./client/src/keyboardMonitor.ts":
/*!***************************************!*\
  !*** ./client/src/keyboardMonitor.ts ***!
  \***************************************/
/*! exports provided: KeyboardMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardMonitor", function() { return KeyboardMonitor; });
const makeKeyState = (key, isDown = false, halfSteps = 0) => {
    return {
        key,
        isDown,
        halfSteps
    };
};
class KeyboardMonitor {
    constructor() {
        this.keyHash = {};
    }
    // Attach to the DOM, usually the document as a whole, but you can make it more specific if you want
    attach(element) {
        element.addEventListener('keydown', (event) => {
            const { key } = event;
            if (!this.keyHash[key]) {
                this.keyHash[key] = makeKeyState(key, true);
            }
            const keyState = this.keyHash[key];
            if (!keyState.isDown) {
                keyState.halfSteps++;
            }
            keyState.isDown = true;
        });
        element.addEventListener('keyup', (event) => {
            const { key } = event;
            if (!this.keyHash[key]) {
                this.keyHash[key] = makeKeyState(key);
            }
            const keyState = this.keyHash[key];
            if (keyState.isDown) {
                keyState.halfSteps++;
            }
            keyState.isDown = false;
        });
        return this;
    }
    getKeyState(key) {
        if (!this.keyHash[key]) {
            this.keyHash[key] = makeKeyState(key);
        }
        return this.keyHash[key];
    }
    resetSteps() {
        const keys = Object.keys(this.keyHash);
        for (let i = 0; i < keys.length; i++) {
            this.keyHash[keys[i]].halfSteps = 0;
        }
    }
}



/***/ }),

/***/ "./client/src/mouseMonitor.ts":
/*!************************************!*\
  !*** ./client/src/mouseMonitor.ts ***!
  \************************************/
/*! exports provided: MouseMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseMonitor", function() { return MouseMonitor; });
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");
// Let's go ahead and create the Point interface here, we'll export it for use later in the project

class MouseMonitor {
    constructor() {
        this.position = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(0, 0);
        this.hasMoved = false;
        this.inContainer = false;
        this.isDown = false;
        this.halfClicks = [];
        // TODO: Add click tracking, depends on how quickly we are polling
    }
    /**
     * Attach to the specific element you want to monitor mouse related events to
     * @param element the particular mouse event
     */
    attach(element) {
        // TODO: We'll register click history in the future, for now we are just doing mouse over at present
        const updatePosition = (e) => {
            const rect = e.target.getBoundingClientRect();
            _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(this.position, e.clientX - rect.left, e.clientY - rect.top);
        };
        // mouse enters canvas
        element.addEventListener('mouseenter', (e) => {
            updatePosition(e);
            this.inContainer = true;
            this.hasMoved = true;
        });
        // mouse moves within the canvas
        element.addEventListener('mousemove', (e) => {
            updatePosition(e);
            this.inContainer = true;
            this.hasMoved = true;
        });
        // mouse exits the canvas
        element.addEventListener('mouseleave', (e) => {
            updatePosition(e);
            this.inContainer = false;
            this.hasMoved = true;
        });
        // mouse button is pressed
        element.addEventListener('mousedown', (e) => {
            // only pay attention to the primary button
            if (e.button != 0) {
                return;
            }
            const rect = e.target.getBoundingClientRect();
            const position = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(e.clientX - rect.left, e.clientY - rect.top);
            this.halfClicks.push({ position, isDown: true });
        });
        // mouse button is raised
        element.addEventListener('mouseup', (e) => {
            // only pay attention to the primary button
            if (e.button != 0) {
                return;
            }
            const rect = e.target.getBoundingClientRect();
            const position = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(e.clientX - rect.left, e.clientY - rect.top);
            this.halfClicks.push({ position, isDown: false });
        });
        return this;
    }
    /**
     * this function is used to mark that we have processed all of the events since our last poll of state and it can be reset
     */
    reset() {
        // by default we haven't moved before
        this.hasMoved = false;
        // clear out the clicks
        this.halfClicks.length = 0;
    }
}



/***/ }),

/***/ "./client/src/progressiveMapGeneration.ts":
/*!************************************************!*\
  !*** ./client/src/progressiveMapGeneration.ts ***!
  \************************************************/
/*! exports provided: progressiveMapGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressiveMapGenerator", function() { return progressiveMapGenerator; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./client/src/tile.ts");
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _shapes_ellipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/ellipse */ "./client/src/shapes/ellipse.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");
/* harmony import */ var _debugSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debugSettings */ "./client/src/debugSettings.ts");
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");







const settings = {
    SECTION_COUNT: 10,
    MARGINS: 10
};
const placeAsteroidChunk = (tileGrid, ellipse) => {
    tileGrid.forEach((tile, index, x, y) => {
        if (_shapes_ellipse__WEBPACK_IMPORTED_MODULE_2__["Ellipse"].containsXY(ellipse, x, y)) {
            tile.blockMove = true;
            tile.blockSight = true;
            tile.contained = true;
        }
    });
};
function* progressiveMapGenerator(tileGrid, rooms, debugGrid) {
    const clearDebug = () => {
        if (_debugSettings__WEBPACK_IMPORTED_MODULE_5__["default"].DEBUG_DRAW) { // prevent this operation if we are not drawing
            debugGrid.forEach((dgc) => {
                dgc.backColor = _colors__WEBPACK_IMPORTED_MODULE_4__["default"].black;
            });
        }
    };
    tileGrid.forEach((t) => {
        t.blockMove = false;
        t.blockSight = false;
        t.contained = false;
        t.explored = true; // remove later
    });
    //yield
    // We'll move this into a 'generate asteroid' section
    const MARGINS = settings.MARGINS;
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height);
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2) / 2);
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7);
    const asteroidEllipses = [];
    for (let i = 0; i < settings.SECTION_COUNT; i++) {
        const xRadius = _rngHelper__WEBPACK_IMPORTED_MODULE_3__["RANDOM"].nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const yRadius = _rngHelper__WEBPACK_IMPORTED_MODULE_3__["RANDOM"].nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const bigRadius = Math.max(xRadius, yRadius);
        const x = _rngHelper__WEBPACK_IMPORTED_MODULE_3__["RANDOM"].nextInt(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius);
        const y = _rngHelper__WEBPACK_IMPORTED_MODULE_3__["RANDOM"].nextInt(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius);
        const ellipse = _shapes_ellipse__WEBPACK_IMPORTED_MODULE_2__["Ellipse"].make(x, y, xRadius, yRadius, _rngHelper__WEBPACK_IMPORTED_MODULE_3__["RANDOM"].next() * Math.PI * 2);
        asteroidEllipses.push(ellipse);
        placeAsteroidChunk(tileGrid, ellipse);
        if (_debugSettings__WEBPACK_IMPORTED_MODULE_5__["default"].DEBUG_DRAW) {
            clearDebug();
            // TODO: optimize this steup
            debugGrid.forEach((cell, index, x, y) => {
                if (_shapes_ellipse__WEBPACK_IMPORTED_MODULE_2__["Ellipse"].containsXY(ellipse, x, y)) {
                    cell.backColor = _colors__WEBPACK_IMPORTED_MODULE_4__["default"].DEBUG;
                }
            });
        }
    }
    const outlineCells = [];
    tileGrid.forEach((tile, index, x, y) => {
        // const tile = tileGrid.getXY(x,y)
        const neighbors = tileGrid.getNeighborsXY(x, y);
        if (tile.contained && neighbors.neighbors.some((t) => !t.contained)) {
            outlineCells.push(tile);
        }
    });
    const outlineEntryPoint = outlineCells[_rngHelper__WEBPACK_IMPORTED_MODULE_3__["RANDOM"].nextInt(0, outlineCells.length - 1)];
    // move toward center of the map, in a cardinal direction
    let directionToBurrow = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Down;
    {
        const distX = Math.floor(tileGrid.width / 2 - outlineEntryPoint.x); // distance from center
        const distY = Math.floor(tileGrid.height / 2 - outlineEntryPoint.y);
        // Let's go ahead and move it towards the center
        if (Math.abs(distX) > Math.abs(distY)) {
            // we are further away on the xAxis from the center, let's try moving that way
            if (distX > 0) {
                directionToBurrow = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Right;
            }
            else {
                directionToBurrow = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Left;
            }
        }
        else {
            // let's move vertically
            if (distY > 0) {
                directionToBurrow = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Down;
            }
            else {
                directionToBurrow = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Up;
            }
        }
    }
    // TODO: Methodize this better
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const tile = tileGrid.getXY(outlineEntryPoint.x - 5 + x, outlineEntryPoint.y - 5 + y);
            tile.contained = true;
            tile.material = _tile__WEBPACK_IMPORTED_MODULE_0__["TileMaterial"].Metal;
            if (x === 0 || x === 9 || y === 0 || y === 9) {
                // this is a bold outline
                tile.blockMove = true;
                tile.blockSight = true;
            }
            else {
                tile.blockMove = false;
                tile.blockSight = false;
            }
        }
    }
    // made a rectangle to push out to the rest of it
    const airlock = _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].make(outlineEntryPoint.x - 5, outlineEntryPoint.y - 5, 10, 10);
    rooms.push(airlock);
    const airlockCenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].center(airlock);
    class Burrower {
        constructor(generation, tileGrid, position, initialDirection) {
            this.generation = generation;
            this.maxGeneration = 10;
            this.stepIndex = 0;
            this.totalSteps = 40;
            this.stepSize = 1;
            this.tunnelWidth = 3;
            this.currentDirection = initialDirection;
            this.tileGrid = tileGrid;
            this.position = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].copy(position);
            // this.bounds = Rect.make(0,0,0,0)
        }
        // will return true if finished, otherwise returns false
        // TODO: BOUNDS CHECK ON STEPS
        step() {
            // we do not repeat final steps, we just politely remind people we are done
            if (this.stepIndex >= this.totalSteps) {
                return true;
            }
            // Heart of the function goes here
            const tile = this.tileGrid.getP(this.position);
            if (_debugSettings__WEBPACK_IMPORTED_MODULE_5__["default"].DEBUG_DRAW) {
                const d = debugGrid.getP(this.position);
                d.backColor = _colors__WEBPACK_IMPORTED_MODULE_4__["default"].DEBUG;
            }
            tile.blockMove = false;
            tile.blockSight = false;
            let crossDirection = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Down;
            const crossPosition = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].make(0, 0);
            if (this.currentDirection === _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Up || this.currentDirection === _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Down) {
                _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].set(crossPosition, Math.ceil(this.position.x - this.tunnelWidth / 2), this.position.y);
                crossDirection = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Right;
            }
            else {
                _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].set(crossPosition, this.position.x, Math.ceil(this.position.y - this.tunnelWidth / 2));
                crossDirection = _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Down;
            }
            for (let i = 0; i < this.tunnelWidth; i++) {
                const tile = this.tileGrid.getP(crossPosition);
                tile.blockMove = false;
                tile.blockSight = false;
                _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].move(crossPosition, crossDirection);
            }
            // our central point is currently tracked, spread out from this for now
            // which ways do we need to go
            // default to going to the left for now, but make that controllable
            // maybe we'll come up with a better idea later, but for now that's it
            _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].move(this.position, this.currentDirection);
            this.stepIndex += 1;
            return this.stepIndex >= this.totalSteps;
        }
        stepAll() {
            while (!this.step()) { }
            return this;
        }
    }
    // This will be used to continue from the original
    const burrower = new Burrower(0, tileGrid, airlockCenter, _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Down).stepAll();
    const burrower2 = new Burrower(1, tileGrid, burrower.position, _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Right);
    burrower2.tunnelWidth = 5;
    _shapes_point__WEBPACK_IMPORTED_MODULE_6__["Point"].move(burrower2.position, _shapes_point__WEBPACK_IMPORTED_MODULE_6__["GridDirection"].Right);
    burrower2.stepAll();
}



/***/ }),

/***/ "./client/src/pubSub/prioritySubscriberList.ts":
/*!*****************************************************!*\
  !*** ./client/src/pubSub/prioritySubscriberList.ts ***!
  \*****************************************************/
/*! exports provided: PrioritySubscriberList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrioritySubscriberList", function() { return PrioritySubscriberList; });
let _id = 0;
const nextId = () => _id++;
const makeSubNode = (subFn, priority = 0, next = null) => {
    return {
        id: nextId(),
        subFn,
        priority,
        next
    };
};
// TODO: ?? Make it so a subscriber list could be deafened/listen?
/**
 * A group of functions, sorted by priority, which will be called sequentially when the list is notified of a new message
 */
class PrioritySubscriberList {
    constructor() {
        this.root = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * Listen for messages that get sent to this list via the notify function
     * @param fn a function that will be called with the message object whenever this subscriber list is activated
     * @param priority The higher the priority, the earlier it will run, if it has the same priority the one that was added first will fire first
     */
    subscribe(fn, priority = 0) {
        // Case #1 Empty Subscriber List
        if (this.length === 0) {
            this.root = makeSubNode(fn, priority);
            this.tail = this.root;
            this.length++;
            return this.root.id;
        }
        // Case #2 We already have some subscribers
        else {
            let traveller = this.root; // we know it should be a Subscriber Node and not null, because we are here
            // Special case, new root
            if (priority < traveller.priority) {
                this.root = makeSubNode(fn, priority, this.root);
                this.length++;
                return this.root.id;
            }
            // Normal case we have other things to worry about
            else {
                while (traveller && traveller.next && traveller.next.priority >= priority) {
                    traveller = traveller.next;
                }
                // we have either found a node with lower priority than us or we have found the end of the line
                traveller.next = makeSubNode(fn, priority, traveller.next);
                // if travellers was the old tail
                if (traveller === this.tail) {
                    // it's next one is the new tail
                    this.tail = traveller.next;
                }
                this.length++;
                return traveller.next.id;
            }
        }
    }
    /**
     *
     * @param message the most imporant information for the listener
     * @param topic used in conjunction with pubsub to remind the subscriber of the specific topic or subtopic
     */
    notify(message, topic) {
        let traveller = this.root;
        while (traveller != null) {
            traveller.subFn(message, topic);
            traveller = traveller.next;
        }
    }
}



/***/ }),

/***/ "./client/src/pubSub/pubSub.ts":
/*!*************************************!*\
  !*** ./client/src/pubSub/pubSub.ts ***!
  \*************************************/
/*! exports provided: PUBSUB, PubSub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBSUB", function() { return PUBSUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubSub", function() { return PubSub; });
/* harmony import */ var _prioritySubscriberList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prioritySubscriberList */ "./client/src/pubSub/prioritySubscriberList.ts");

/**
 * Pubsub is a topic-based observer pattern implementation designed to avoid tight coupling of components
 */
class PubSub {
    constructor() {
        this.topics = {};
    }
    /**
     * Dispatch a message to all subscribers to a topic
     * @param topic Topic to use, if nobody is subscribed to it, nothing happens
     * @param message The actual message to send, this could be anything, but it's a single thing
     */
    publish(topic, message) {
        if (this.topics[topic]) {
            this.topics[topic].notify(message, topic);
        }
    }
    /**
     * Listen to a specific topic with a given priority, returns an id that you'll need to unsubscribe
     * @param topic the specific topic to subscribe to
     * @param fn the function to recieve the specific message and topic being broadcasted to
     * @param priority the priority of the function to subscribe to, higher numbers run first, the default is zero, negative numbers are allowed
     */
    subscribe(topic, fn, priority = 0) {
        if (!this.topics[topic]) {
            this.topics[topic] = new _prioritySubscriberList__WEBPACK_IMPORTED_MODULE_0__["PrioritySubscriberList"]();
        }
        return this.topics[topic].subscribe(fn, priority);
    }
}
// OUR UNIVERSAL DEFAULT PUBSUB
const PUBSUB = new PubSub();



/***/ }),

/***/ "./client/src/renderCell.ts":
/*!**********************************!*\
  !*** ./client/src/renderCell.ts ***!
  \**********************************/
/*! exports provided: RenderCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCell", function() { return RenderCell; });
const make = (x, y, character, foreColor, backColor) => {
    return {
        x, y, character, foreColor, backColor
    };
};
const RenderCell = {
    make
};



/***/ }),

/***/ "./client/src/renderHelpers.ts":
/*!*************************************!*\
  !*** ./client/src/renderHelpers.ts ***!
  \*************************************/
/*! exports provided: CODE_TO_RECT_HASH, CHARACTER_HELPER, code, drawSection, drawStringToGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_TO_RECT_HASH", function() { return CODE_TO_RECT_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER_HELPER", function() { return CHARACTER_HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSection", function() { return drawSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawStringToGrid", function() { return drawStringToGrid; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");


const code = (char) => char.charCodeAt(0);
const CHARACTER_HELPER = {
    VERTICAL_LINE: '│',
    HORIZONTAL_LINE: '─',
    CROSS_LINES: '┼',
    T_LEFT: '┤',
    T_UP: '┴',
    T_RIGHT: '├',
    T_DOWN: '┬',
    TOP_RIGHT: '└',
    BOTTOM_RIGHT: '┌',
    BOTTOL_LEFT: '┐',
    TOP_LEFT: '┘'
};
const TILE_WIDTH = 10, TILE_HEIGHT = 10;
const CODE_TO_RECT_HASH = {};
const spaceCode = code(' ');
const atCode = code('@');
const aCode = code('a');
const zCode = code('z');
const ACode = code('A');
const ZCode = code('Z');
const ctrhHelper = (code, x, y) => {
    CODE_TO_RECT_HASH[code] = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(x, y, TILE_WIDTH, TILE_HEIGHT);
};
// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(0, 0, 10, 10);
CODE_TO_RECT_HASH[atCode] = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(0, 10, 10, 10);
for (let i = ACode; i <= ZCode; i++) {
    CODE_TO_RECT_HASH[i] = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make((i - ACode) * 10, 30, TILE_WIDTH, TILE_HEIGHT);
}
for (let i = aCode; i <= zCode; i++) {
    CODE_TO_RECT_HASH[i] = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make((i - aCode) * 10, 40, TILE_WIDTH, TILE_HEIGHT);
}
// for brevities sake
const CH = CHARACTER_HELPER;
ctrhHelper(code(CH.VERTICAL_LINE), 140, 10);
ctrhHelper(code(CH.HORIZONTAL_LINE), 150, 10);
ctrhHelper(code(CH.CROSS_LINES), 160, 10);
ctrhHelper(code(CH.T_LEFT), 170, 10);
ctrhHelper(code(CH.T_UP), 180, 10);
ctrhHelper(code(CH.T_RIGHT), 190, 10);
ctrhHelper(code(CH.T_DOWN), 200, 10);
ctrhHelper(code(CH.TOP_RIGHT), 210, 10);
ctrhHelper(code(CH.BOTTOM_RIGHT), 220, 10);
ctrhHelper(code(CH.BOTTOL_LEFT), 230, 10);
ctrhHelper(code(CH.TOP_LEFT), 240, 10);
function drawSection(ctx, tilesheet, srcRect, destRect, foreColor, backColor) {
    ctx.clearRect(destRect.x, destRect.y, destRect.width, destRect.height);
    ctx.drawImage(tilesheet, srcRect.x, srcRect.y, srcRect.width, srcRect.height, destRect.x, destRect.y, destRect.width, destRect.height);
    ctx.globalCompositeOperation = 'xor';
    ctx.fillStyle = foreColor;
    ctx.fillRect(destRect.x, destRect.y, destRect.width, destRect.height);
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = backColor;
    ctx.fillRect(destRect.x, destRect.y, destRect.width, destRect.height);
    ctx.globalCompositeOperation = 'source-over';
}
const drawStringToGrid = (grid, message, x, y) => {
    let currentX = x;
    let currentY = y;
    for (let i = 0; i < message.length; i++) {
        const letter = message[i];
        if (grid.inBoundsXY(currentX, currentY) && letter != '\n') {
            const target = grid.getXY(currentX, currentY);
            target.character = letter;
            target.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].white;
            target.foreColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].black;
        }
        if (letter !== '\n') {
            currentX++;
        }
        else {
            currentY++;
            currentX = x;
        }
    }
};



/***/ }),

/***/ "./client/src/renderToGrid.ts":
/*!************************************!*\
  !*** ./client/src/renderToGrid.ts ***!
  \************************************/
/*! exports provided: renderToGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToGrid", function() { return renderToGrid; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./client/src/tile.ts");
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");
/* harmony import */ var _debugSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugSettings */ "./client/src/debugSettings.ts");




const renderToGrid = (tileGrid, fovGrid, entities, renderGrid, cameraFrame, debugGrid) => {
    // renderGrid is in SCREEN coordinates, and will have it's XY ignored for our purposes
    // tileGrid, entities and fovGrid are in WORLD coordinates and will have their XY and y ignored for now
    // camera and renderGrid both start at the topLeft in terms of aligning the two
    // I almost feel like we should tighten the coupling, but oh well, let's actually do it
    const screenP = _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].make(0, 0);
    const worldP = _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].make(0, 0);
    for (let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++) {
        for (let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++) {
            // this maps to the renderGrid and the cameras
            _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].set(screenP, relCameraX, relCameraY);
            // this maps to the tileGrid, fovGrid, and entities
            _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y);
            // Let's do some bounds checking
            // we know these poitns are always in cameras, so never need to check that
            // we are going to offload the case of checking if the renderGrid can fit the cameraSize for now
            // so for now just check if we are inside of the tileGrid, which currently should be the same dimensions as the fovGrid, though that is bound to change as we try and optimize things
            // soooooo, let's check if we are inside the tileGrid
            const renderCell = renderGrid.getP(screenP);
            const fovCell = fovGrid.getP(screenP);
            let isLit = fovCell.visible; // it's lit fam, well, some of the time
            let inBounds = tileGrid.inBoundsXY(worldP.x, worldP.y);
            // Determined our exploration state
            // This has better rules to be figured out
            renderCell.character = '';
            if (!inBounds) { // treat everything outside of the bounds as explored I suppose?
                if (isLit) {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].light_outside;
                }
                else {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].dark_outside;
                }
            }
            else {
                const tile = tileGrid.getXY(worldP.x, worldP.y);
                if (!tile.explored) {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].black;
                }
                else {
                    // TODO: ADD DOORS
                    const isWall = tile.blockMove && tile.blockSight;
                    const isGround = !isWall && tile.contained;
                    const isSpace = !isWall && !tile.contained;
                    if (tile.material === _tile__WEBPACK_IMPORTED_MODULE_0__["TileMaterial"].Metal) {
                        if (isSpace) {
                            if (isLit) {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].light_outside;
                            }
                            else {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].dark_outside;
                            }
                        }
                        else if (isGround) {
                            if (isLit) {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].metal.lightGround;
                            }
                            else {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].metal.darkGround;
                            }
                        }
                        else if (isWall) {
                            if (isLit) {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].metal.lightWall;
                            }
                            else {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].metal.darkWall;
                            }
                        }
                        else {
                        }
                    }
                    else {
                        if (isSpace) {
                            if (isLit) {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].light_outside;
                            }
                            else {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].dark_outside;
                            }
                        }
                        else if (isGround) {
                            if (isLit) {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].light_ground;
                            }
                            else {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].dark_ground;
                            }
                        }
                        else if (isWall) {
                            if (isLit) {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].light_wall;
                            }
                            else {
                                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].dark_wall;
                            }
                        }
                        else {
                        }
                    }
                }
            }
        }
    }
    entities.forEach((entity) => {
        _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].set(screenP, entity.x - cameraFrame.x, entity.y - cameraFrame.y);
        // if this is inside of the camera bounds
        if (cameraFrame.x <= entity.x && entity.x <= cameraFrame.x + cameraFrame.width - 1 &&
            cameraFrame.y <= entity.y && entity.y <= cameraFrame.y + cameraFrame.height - 1) {
            const rCell = renderGrid.getP(screenP);
            const fovCell = fovGrid.getP(screenP);
            if (fovCell.visible) {
                rCell.foreColor = entity.color;
                rCell.character = entity.character;
            }
        }
    });
    if (_debugSettings__WEBPACK_IMPORTED_MODULE_3__["default"].DEBUG_DRAW) {
        for (let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++) {
            for (let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++) {
                // this maps to the renderGrid and the cameras
                _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].set(screenP, relCameraX, relCameraY);
                // this maps to the tileGrid, fovGrid, and entities
                _shapes_point__WEBPACK_IMPORTED_MODULE_1__["Point"].set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y);
                const renderCell = renderGrid.getP(screenP);
                if (debugGrid.inBoundsXY(worldP.x, worldP.y)) {
                    const debugCell = debugGrid.getP(worldP);
                    if (debugCell.backColor != _colors__WEBPACK_IMPORTED_MODULE_2__["default"].black) {
                        renderCell.backColor = debugCell.backColor;
                        renderCell.character = debugCell.character;
                        renderCell.foreColor = debugCell.foreColor;
                    }
                }
            }
        }
    }
};


/***/ }),

/***/ "./client/src/rngHelper.ts":
/*!*********************************!*\
  !*** ./client/src/rngHelper.ts ***!
  \*********************************/
/*! exports provided: RANDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
// WARNING: HERE THERE BE DRAGONS, (or in this case, a lot of code I don'tunderstand)
// WE ONLY WANT ONE RNG GENERATOR BECAUSE WE ALWAYS WANT A SEED FOR IT
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
// Hashing function for taking simple string and creating better "true" seeds
// I HAVE NO IDEA WHAT THE MAGIC NUBMERS ARE FOR
function xmur3(str) {
    let h = 1779033703 ^ str.length; // bitwise or the string with this random thing
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    }
    return function () {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
// GENERATORS
function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = (a + b) | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    };
}
// ONE LINER CURRENTLY NOT IN USE
// const LCG= (s: any): Function=>(): any=>(2**31-1&(s=Math.imul(48271,s)))/2**31;
const RANDOM = {
    _generator: (() => { }),
    seed: function (seedStr = btoa(new Date().toString())) {
        const seed = xmur3(seedStr);
        this._generator = sfc32(seed(), seed(), seed(), seed());
        return seedStr;
    },
    next: function () {
        if (this._generator === null) {
            this.seed();
        }
        return this._generator();
    },
    nextInt(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
};



/***/ }),

/***/ "./client/src/shapes/ellipse.ts":
/*!**************************************!*\
  !*** ./client/src/shapes/ellipse.ts ***!
  \**************************************/
/*! exports provided: Ellipse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return Ellipse; });
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ "./client/src/shapes/rect.ts");

const make = (x, y, xRadius, yRadius, rotation = 0) => {
    return { x, y, xRadius, yRadius, rotation };
};
/**
 * Contains XY
 * @param ellipse
 * @param x
 * @param y
 */
const containsXY = (ellipse, x, y) => {
    const cos = Math.cos(ellipse.rotation), sin = Math.sin(ellipse.rotation);
    const dx = (x - ellipse.x), dy = (y - ellipse.y);
    const tdx = cos * dx + sin * dy, tdy = sin * dx - cos * dy;
    return ((tdx * tdx) / (ellipse.xRadius * ellipse.xRadius) + (tdy * tdy) / (ellipse.yRadius * ellipse.yRadius)) < 1;
};
/**
 * Does the ellipse contain the point
 * @param ellipse
 * @param point
 */
const containsPoint = (ellipse, point) => {
    return containsXY(ellipse, point.x, point.y);
};
// 
/**
 * Are enough corners inside the Rect to be considered inside
 * @param ellipse ellipse
 * @param rect rect to test if it's edges are inside the ellipse
 * @param threshold how many corners must be inside to count, defaults to 4
 */
const containsRectCorners = (ellipse, rect, threshold = 4) => {
    let cornersIn = 0;
    const corners = _rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].corners(rect);
    if (containsPoint(ellipse, corners.tr)) {
        cornersIn++;
    }
    if (containsPoint(ellipse, corners.tl)) {
        cornersIn++;
    }
    if (containsPoint(ellipse, corners.bl)) {
        cornersIn++;
    }
    if (containsPoint(ellipse, corners.br)) {
        cornersIn++;
    }
    return cornersIn >= threshold;
};
const Ellipse = {
    make,
    containsXY,
    containsPoint,
    containsRectCorners
};



/***/ }),

/***/ "./client/src/shapes/point.ts":
/*!************************************!*\
  !*** ./client/src/shapes/point.ts ***!
  \************************************/
/*! exports provided: Point, GridDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridDirection", function() { return GridDirection; });
/**
 * Helpful enum for directions in a grid,
 * Up: -y, Down: +y, Left: -x, Right: +x
 */
var GridDirection;
(function (GridDirection) {
    GridDirection[GridDirection["Up"] = 0] = "Up";
    GridDirection[GridDirection["Down"] = 1] = "Down";
    GridDirection[GridDirection["Left"] = 2] = "Left";
    GridDirection[GridDirection["Right"] = 3] = "Right";
})(GridDirection || (GridDirection = {}));
/**
 * Create a new Point
 * @param x
 * @param y
 */
const make = (x, y) => {
    return { x, y };
};
/**
 * Returns a new point that is the result of adding both of them together, if you want to add a point TO another point, use addTo
 * @param a First Point, unmodified
 * @param b Second Point, unmodified
 */
const add = (a, b) => {
    return make(a.x + b.x, a.y + b.y);
};
/**
 * A utitily to move in a direction, allows for variability in the direction without having to resort to modifying the x and y coorindates individually
 * @param point Point to be moved, will be the return value
 * @param direction, the Grid Direction you want to move in
 * @param distance, optional defaults to 1, how far you want the point to move
 */
const move = (point, direction, distance = 1) => {
    if (direction = GridDirection.Left) {
        point.x -= distance;
    }
    if (direction = GridDirection.Right) {
        point.x += distance;
    }
    if (direction = GridDirection.Up) {
        point.y -= distance;
    }
    if (direction = GridDirection.Down) {
        point.y += distance;
    }
    return point;
};
/**
 * Add the value of Point a to Point b
 * @param a The point that changes, will have b added to it
 * @param b The point whose value is added to the other, it is unmodified itself
 */
const addTo = (a, b) => {
    a.x += b.x;
    a.y += b.y;
    return a;
};
/**
 * Set the values of a point with x and y values, returns the now modified point
 * @param point point to be modified
 * @param x new x value
 * @param y new y value
 */
const set = (point, x, y) => {
    point.x = x;
    point.y = y;
    return point;
};
/**
 * Copy a point
 * @param point Point that will be copied
 */
const copy = (point) => {
    return make(point.x, point.y);
};
/**
 * A collection of functions meant to work with things that have the IPoint interface
 */
const Point = {
    make,
    move,
    add,
    addTo,
    set,
    copy
};



/***/ }),

/***/ "./client/src/shapes/rect.ts":
/*!***********************************!*\
  !*** ./client/src/shapes/rect.ts ***!
  \***********************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./client/src/shapes/point.ts");

/**
 * Create a rectangle
 * @param x
 * @param y
 * @param width
 * @param height
 */
const make = (x, y, width, height) => {
    return {
        x,
        y,
        width,
        height
    };
};
const set = (r, x, y, width, height) => {
    r.x = x;
    r.y = y;
    r.width = width;
    r.height = height;
    return r;
};
/**
 * Return the unit value of the sides of the rectangle, left and right return x coordinates, top and bottom include y coordinates
 * @param rect rectangle used
 */
const sides = (rect) => {
    return {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    };
};
const corners = (rect) => {
    return {
        tl: _point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(rect.x, rect.y),
        tr: _point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(rect.x + rect.width, rect.y),
        bl: _point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(rect.x, rect.y + rect.height),
        br: _point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(rect.x + rect.width, rect.y + rect.height),
    };
};
/**
 * Get the center point: NOTE: This finds the INTEGER center, coordinates are truncated
 * @param rect The rectangle we are finding the center of
 */
const center = (rect) => {
    return _point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(Math.floor(rect.x + rect.width / 2), Math.floor(rect.y + rect.height / 2));
};
// OPTIMIZE: Don't call sides, just use the raw numbers and addition
const intersects = (a, b) => {
    const aSides = sides(a);
    const bSides = sides(b);
    return aSides.left <= bSides.right && aSides.right >= bSides.left &&
        aSides.top <= bSides.bottom && aSides.bottom >= bSides.top;
};
/**
 * An object used to create and manipulate rectangles
 */
const Rect = {
    make,
    set,
    sides,
    corners,
    center,
    intersects
};



/***/ }),

/***/ "./client/src/tile.ts":
/*!****************************!*\
  !*** ./client/src/tile.ts ***!
  \****************************/
/*! exports provided: Tile, TileMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMaterial", function() { return TileMaterial; });
// I guess everything would need it's own serialization/deserialization... gross
/**
 * This class represents locations on the board, eventually we will probably move this into its own ECS system
 */
var TileMaterial;
(function (TileMaterial) {
    TileMaterial[TileMaterial["Asteroid"] = 0] = "Asteroid";
    TileMaterial[TileMaterial["Metal"] = 1] = "Metal";
})(TileMaterial || (TileMaterial = {}));
class Tile {
    /**
     * Create a new tile
     * @param blockMove Can the player/monsters/mobile entities move through/into this tile
     * @param blockSight optional, will default to whatever blockMove is
     */
    constructor(x, y, blockMove, blockSight) {
        this.x = x;
        this.y = y;
        this.blockMove = blockMove;
        this.explored = false;
        if (blockSight === undefined) {
            this.blockSight = blockMove;
        }
        else {
            this.blockSight = blockSight;
        }
        this.contained = true;
        this.material = TileMaterial.Asteroid;
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZGVidWdTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Zvdi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oYW5kbGVJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3Byb2dyZXNzaXZlTWFwR2VuZXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVyVG9HcmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9zaGFwZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9zaGFwZXMvcmVjdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDTjtBQUNoQjtBQUN5QjtBQUN6QjtBQUNJO0FBQ1E7QUFDUTtBQUNYO0FBQ0U7QUFDRztBQUNIO0FBQ0s7QUFDVDtBQUVQO0FBRVE7QUFDTTtBQUNFO0FBQ1Y7QUFDaUM7QUFFcEUsTUFBTSxFQUNGLFVBQVUsRUFDVixXQUFX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RSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDbkU7SUFDRCxJQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDM0cscURBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDcEU7SUFDRCxJQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDL0cscURBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO0tBQ25FO0lBQ0QseUJBQXlCO0lBQ3pCLElBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFDO1FBQ2xFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSTtRQUNsSCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNO0tBQ2hDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBQSxNQUFNLFNBQVM7SUFFWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ3hCLENBQUM7Q0FDSjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBSSxTQUFTLEVBQUU7QUFDSjs7Ozs7Ozs7Ozs7OztBQ1A5QjtBQUFBO0FBQUEsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFXLEVBQUUsU0FBa0IsS0FBSyxFQUFFLFlBQW9CLENBQUMsRUFBWSxFQUFFO0lBQzNGLE9BQU87UUFDSCxHQUFHO1FBQ0gsTUFBTTtRQUNOLFNBQVM7S0FDWjtBQUNMLENBQUM7QUFFRCxNQUFNLGVBQWU7SUFFakI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDckIsQ0FBQztJQUNELG9HQUFvRztJQUNwRyxNQUFNLENBQUMsT0FBWTtRQUNmLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQVEsRUFBRTtZQUNyRCxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsS0FBSztZQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUM5QztZQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2xDLElBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDO2dCQUNoQixRQUFRLENBQUMsU0FBUyxFQUFFO2FBQ3ZCO1lBQ0QsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJO1FBQzFCLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFVLEVBQVEsRUFBRTtZQUNuRCxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsS0FBSztZQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ3hDO1lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDbEMsSUFBRyxRQUFRLENBQUMsTUFBTSxFQUFDO2dCQUNmLFFBQVEsQ0FBQyxTQUFTLEVBQUU7YUFDdkI7WUFDRCxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDM0IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUNELFdBQVcsQ0FBQyxHQUFXO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQUNELFVBQVU7UUFDTixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztTQUN0QztJQUNMLENBQUM7Q0FDSjtBQUd5Qjs7Ozs7Ozs7Ozs7OztBQ2hFMUI7QUFBQTtBQUFBO0FBQUEsbUdBQW1HO0FBRXZEO0FBVzVDLE1BQU0sWUFBWTtJQXdCZDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDcEIsa0VBQWtFO0lBQ3RFLENBQUM7SUFDRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsT0FBWTtRQUNmLG9HQUFvRztRQUNwRyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQU0sRUFBUSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUU7WUFDN0MsbURBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3pFLENBQUM7UUFDRCxzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQU0sRUFBUSxFQUFFO1lBQ3BELGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUN4QixDQUFDLENBQUM7UUFDRixnQ0FBZ0M7UUFDaEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQU0sRUFBUSxFQUFFO1lBQ25ELGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUV4QixDQUFDLENBQUM7UUFDRix5QkFBeUI7UUFDekIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQU0sRUFBUSxFQUFFO1lBQ3BELGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUN4QixDQUFDLENBQUM7UUFDRiwwQkFBMEI7UUFDMUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQU0sRUFBUSxFQUFFO1lBQ25ELDJDQUEyQztZQUMzQyxJQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO2dCQUNiLE9BQU07YUFDVDtZQUNELE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUU7WUFDN0MsTUFBTSxRQUFRLEdBQUcsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEQsQ0FBQyxDQUFDO1FBQ0YseUJBQXlCO1FBQ3pCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFNLEVBQVEsRUFBRTtZQUNqRCwyQ0FBMkM7WUFDM0MsSUFBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztnQkFDYixPQUFNO2FBQ1Q7WUFDRCxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFO1lBQzdDLE1BQU0sUUFBUSxHQUFHLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3JELENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUs7UUFDRCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ3JCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQUVzQjs7Ozs7Ozs7Ozs7OztBQzVHdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBRUE7QUFDUztBQUNoQjtBQUNQO0FBQ007QUFDMEI7QUFFN0QsTUFBTSxRQUFRLEdBQUc7SUFDYixhQUFhLEVBQUMsRUFBRTtJQUNoQixPQUFPLEVBQUUsRUFBRTtDQUNkO0FBRUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFFBQW9CLEVBQUUsT0FBaUIsRUFBUSxFQUFFO0lBQ3pFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQVEsRUFBRTtRQUN2RSxJQUFHLHVEQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7U0FDeEI7SUFDTCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsUUFBUyxDQUFDLENBQUMsdUJBQXVCLENBQUMsUUFBb0IsRUFBRSxLQUFjLEVBQUUsU0FBNEI7SUFFakcsTUFBTSxVQUFVLEdBQUcsR0FBUyxFQUFFO1FBQzFCLElBQUcsc0RBQUssQ0FBQyxVQUFVLEVBQUMsRUFBRSwrQ0FBK0M7WUFDakUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBUSxFQUFFO2dCQUM1QixHQUFHLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsS0FBSztZQUNoQyxDQUFDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFRLEVBQUU7UUFDekIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQ25CLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSztRQUNwQixDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDbkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUMsZUFBZTtJQUNyQyxDQUFDLENBQUM7SUFDRixPQUFPO0lBRVAscURBQXFEO0lBQ3JELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPO0lBQ2hDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQy9ELE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxHQUFHLENBQUM7SUFDakYsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFO0lBQzNCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQzNDLE1BQU0sT0FBTyxHQUFHLGlEQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLDJCQUEyQixDQUFDO1FBQ3hGLE1BQU0sT0FBTyxHQUFHLGlEQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLDJCQUEyQixDQUFDO1FBQ3hGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUM1QyxNQUFNLENBQUMsR0FBRyxpREFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUNuRixNQUFNLENBQUMsR0FBRyxpREFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUNwRixNQUFNLE9BQU8sR0FBRyx1REFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUUsaURBQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlCLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDckMsSUFBRyxzREFBSyxDQUFDLFVBQVUsRUFBQztZQUNoQixVQUFVLEVBQUU7WUFDWiw0QkFBNEI7WUFDNUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWlCLEVBQUUsS0FBYSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQVEsRUFBRTtnQkFDL0UsSUFBRyx1REFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO29CQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsS0FBSztpQkFDaEM7WUFDTCxDQUFDLENBQUM7U0FDTDtLQUNKO0lBRUQsTUFBTSxZQUFZLEdBQVcsRUFBRTtJQUMvQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFRLEVBQUU7UUFDdkUsbUNBQW1DO1FBQ25DLE1BQU0sU0FBUyxHQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFPLEVBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQzlFLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaURBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEYseURBQXlEO0lBQ3pELElBQUksaUJBQWlCLEdBQWtCLDJEQUFhLENBQUMsSUFBSTtJQUN6RDtRQUNJLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUMsdUJBQXVCO1FBQ3hGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLGdEQUFnRDtRQUNoRCxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUNqQyw4RUFBOEU7WUFDOUUsSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFDO2dCQUNULGlCQUFpQixHQUFHLDJEQUFhLENBQUMsS0FBSzthQUMxQztpQkFBTTtnQkFDSCxpQkFBaUIsR0FBRywyREFBYSxDQUFDLElBQUk7YUFDekM7U0FDSjthQUFNO1lBQ0gsd0JBQXdCO1lBQ3hCLElBQUcsS0FBSyxHQUFHLENBQUMsRUFBQztnQkFDVCxpQkFBaUIsR0FBRywyREFBYSxDQUFDLElBQUk7YUFDekM7aUJBQU07Z0JBQ0gsaUJBQWlCLEdBQUcsMkRBQWEsQ0FBQyxFQUFFO2FBQ3ZDO1NBQ0o7S0FDSjtJQUVELDhCQUE4QjtJQUM5QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQ3ZCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxrREFBWSxDQUFDLEtBQUs7WUFDbEMsSUFBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUN4Qyx5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtnQkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJO2FBQ3pCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO2FBQzFCO1NBQ0o7S0FDSjtJQUVELGlEQUFpRDtJQUNqRCxNQUFNLE9BQU8sR0FBRyxpREFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztJQUNqRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUduQixNQUFNLGFBQWEsR0FBRyxpREFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDMUMsTUFBTSxRQUFRO1FBWVYsWUFBWSxVQUFrQixFQUFFLFFBQW9CLEVBQUUsUUFBZ0IsRUFBRSxnQkFBK0I7WUFDbkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjtZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtREFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEMsbUNBQW1DO1FBQ3ZDLENBQUM7UUFDRCx3REFBd0Q7UUFDeEQsOEJBQThCO1FBQzlCLElBQUk7WUFDQSwyRUFBMkU7WUFDM0UsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7Z0JBQ2pDLE9BQU8sSUFBSTthQUNkO1lBQ0Qsa0NBQWtDO1lBQ2xDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBRyxzREFBSyxDQUFDLFVBQVUsRUFBQztnQkFDaEIsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsS0FBSzthQUM3QjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUs7WUFDdkIsSUFBSSxjQUFjLEdBQUcsMkRBQWEsQ0FBQyxJQUFJO1lBQ3ZDLE1BQU0sYUFBYSxHQUFHLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDckMsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssMkRBQWEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLDJEQUFhLENBQUMsSUFBSSxFQUFDO2dCQUMxRixtREFBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxRixjQUFjLEdBQUcsMkRBQWEsQ0FBQyxLQUFLO2FBQ3ZDO2lCQUFNO2dCQUNILG1EQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLGNBQWMsR0FBRywyREFBYSxDQUFDLElBQUk7YUFDdEM7WUFDRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSztnQkFDdkIsbURBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQzthQUM1QztZQUVELHVFQUF1RTtZQUN2RSw4QkFBOEI7WUFDOUIsbUVBQW1FO1lBQ25FLHNFQUFzRTtZQUN0RSxtREFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVO1FBQzVDLENBQUM7UUFDRCxPQUFPO1lBQ0gsT0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxHQUFFO1lBQ3JCLE9BQU8sSUFBSTtRQUNmLENBQUM7S0FFSjtJQUVELGtEQUFrRDtJQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSwyREFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtJQUN2RixNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsMkRBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbkYsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQ3pCLG1EQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsMkRBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUN2QixDQUFDO0FBRWlDOzs7Ozs7Ozs7Ozs7O0FDM01sQztBQUFBO0FBQUEsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNYLE1BQU0sTUFBTSxHQUFHLEdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQWdCbEMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUF5QixFQUFFLFdBQW1CLENBQUMsRUFBRSxPQUE4QixJQUFJLEVBQWtCLEVBQUU7SUFDeEgsT0FBTztRQUNILEVBQUUsRUFBRSxNQUFNLEVBQUU7UUFDWixLQUFLO1FBQ0wsUUFBUTtRQUNSLElBQUk7S0FDUDtBQUNMLENBQUM7QUFFRCxrRUFBa0U7QUFFbEU7O0dBRUc7QUFDSCxNQUFNLHNCQUFzQjtJQUl4QjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEVBQXNCLEVBQUUsV0FBbUIsQ0FBQztRQUNsRCxnQ0FBZ0M7UUFDaEMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQ3RCO1FBQ0QsMkNBQTJDO2FBQ3RDO1lBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBQywyRUFBMkU7WUFFckcseUJBQXlCO1lBQ3pCLElBQUcsUUFBUSxHQUFHLFNBQVUsQ0FBQyxRQUFRLEVBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUN0QjtZQUNELGtEQUFrRDtpQkFDN0M7Z0JBQ0QsT0FBTSxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUM7b0JBQ3JFLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSTtpQkFDN0I7Z0JBQ0QsK0ZBQStGO2dCQUMvRixTQUFVLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRTVELGlDQUFpQztnQkFDakMsSUFBRyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksRUFBQztvQkFDdkIsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVUsQ0FBQyxJQUFJO2lCQUM5QjtnQkFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLE9BQU8sU0FBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxPQUFZLEVBQUUsS0FBYTtRQUM5QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN6QixPQUFNLFNBQVMsSUFBSSxJQUFJLEVBQUM7WUFDcEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQy9CLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSTtTQUM3QjtJQUNMLENBQUM7Q0FDSjtBQUVvRDs7Ozs7Ozs7Ozs7OztBQ2hHckQ7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFNckY7O0dBRUc7QUFDSCxNQUFNLE1BQU07SUFFUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNwQixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBWTtRQUMvQixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUM1QztJQUNMLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxLQUFhLEVBQUUsRUFBc0IsRUFBRSxXQUFtQixDQUFDO1FBQ2pFLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSw4RUFBc0IsRUFBRTtTQUNwRDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUFDRCwrQkFBK0I7QUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDSjs7Ozs7Ozs7Ozs7OztBQzVCdkI7QUFBQTtBQUFBLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUFpQixFQUFFLFNBQWlCLEVBQUUsU0FBaUIsRUFBZSxFQUFFO0lBQ3hHLE9BQU87UUFDSCxDQUFDLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztLQUN2QztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsR0FBRztJQUNmLElBQUk7Q0FDUDtBQUVnQzs7Ozs7Ozs7Ozs7OztBQ3JCakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUdiO0FBUzdCLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN6RCxNQUFNLGdCQUFnQixHQUFvQjtJQUN0QyxhQUFhLEVBQUUsR0FBRztJQUNsQixlQUFlLEVBQUUsR0FBRztJQUNwQixXQUFXLEVBQUUsR0FBRztJQUNoQixNQUFNLEVBQUUsR0FBRztJQUNYLElBQUksRUFBRSxHQUFHO0lBQ1QsT0FBTyxFQUFFLEdBQUc7SUFDWixNQUFNLEVBQUUsR0FBRztJQUNYLFNBQVMsRUFBRSxHQUFHO0lBQ2QsWUFBWSxFQUFFLEdBQUc7SUFDakIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsUUFBUSxFQUFFLEdBQUc7Q0FDaEI7QUFFRCxNQUFNLFVBQVUsR0FBRyxFQUFFLEVBQUUsV0FBVyxHQUFHLEVBQUU7QUFFdkMsTUFBTSxpQkFBaUIsR0FBbUIsRUFBRTtBQUM1QyxNQUFNLFNBQVMsR0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDN0IsTUFBTSxLQUFLLEdBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM3QixNQUFNLEtBQUssR0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFTLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDN0IsTUFBTSxLQUFLLEdBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUc3QixNQUFNLFVBQVUsR0FBRyxDQUFDLElBQVksRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFRLEVBQUU7SUFDNUQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsaURBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0FBQ3JFLENBQUM7QUFFRCxvREFBb0Q7QUFDcEQsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsaURBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ3RELGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLGlEQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNwRCxLQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDO0lBQy9CLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLGlEQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztDQUNsRjtBQUNELEtBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUM7SUFDL0IsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsaURBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO0NBQ2xGO0FBQ0QscUJBQXFCO0FBQ3JCLE1BQU0sRUFBRSxHQUFHLGdCQUFnQjtBQUMzQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxDQUFDO0FBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUM7QUFDNUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxDQUFDO0FBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUM7QUFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUNwQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxDQUFDO0FBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUM7QUFDdEMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsQ0FBQztBQUN6QyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxDQUFDO0FBQ3hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUM7QUFHckMsU0FBUyxXQUFXLENBQUMsR0FBNkIsRUFBRSxTQUFjLEVBQUUsT0FBYyxFQUFFLFFBQWUsRUFBRSxTQUFpQixFQUFFLFNBQWlCO0lBQ3JJLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN0RSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDdEksR0FBRyxDQUFDLHdCQUF3QixHQUFHLEtBQUs7SUFDcEMsR0FBRyxDQUFDLFNBQVMsR0FBQyxTQUFTO0lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUVwRSxHQUFHLENBQUMsd0JBQXdCLEdBQUcsa0JBQWtCO0lBQ2pELEdBQUcsQ0FBQyxTQUFTLEdBQUMsU0FBUztJQUN2QixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDcEUsR0FBRyxDQUFDLHdCQUF3QixHQUFHLGFBQWE7QUFDaEQsQ0FBQztBQUVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxJQUF1QixFQUFFLE9BQWUsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFRLEVBQUU7SUFDOUYsSUFBSSxRQUFRLEdBQUcsQ0FBQztJQUNoQixJQUFJLFFBQVEsR0FBRyxDQUFDO0lBQ2hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFDO1lBQ3JELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQztZQUM1QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU07WUFDekIsTUFBTSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLEtBQUs7WUFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLEtBQUs7U0FDbEM7UUFDRCxJQUFHLE1BQU0sS0FBSyxJQUFJLEVBQUM7WUFDZixRQUFRLEVBQUU7U0FDYjthQUFNO1lBQ0gsUUFBUSxFQUFFO1lBQ1YsUUFBUSxHQUFHLENBQUM7U0FDZjtLQUNKO0FBQ0wsQ0FBQztBQUVtRjs7Ozs7Ozs7Ozs7OztBQ2xHcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBSUw7QUFDVDtBQUVNO0FBRTVCLE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBb0IsRUFBRSxPQUFzQixFQUFFLFFBQWtCLEVBQUUsVUFBNkIsRUFBRSxXQUFrQixFQUFFLFNBQTRCLEVBQVEsRUFBRTtJQUNwTCxzRkFBc0Y7SUFDdEYsdUdBQXVHO0lBRXZHLCtFQUErRTtJQUMvRSx1RkFBdUY7SUFDdkYsTUFBTSxPQUFPLEdBQUcsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvQixNQUFNLE1BQU0sR0FBRyxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlCLEtBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDO1FBQ2xFLEtBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFDO1lBQ2pFLDhDQUE4QztZQUM5QyxtREFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUMxQyxtREFBbUQ7WUFDbkQsbURBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFdkUsZ0NBQWdDO1lBQ2hDLDBFQUEwRTtZQUMxRSxnR0FBZ0c7WUFDaEcscUxBQXFMO1lBQ3JMLHFEQUFxRDtZQUNyRCxNQUFNLFVBQVUsR0FBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM1QyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFDLHVDQUF1QztZQUNuRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUV0RCxtQ0FBbUM7WUFDbkMsMENBQTBDO1lBQzFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRTtZQUN6QixJQUFHLENBQUMsUUFBUSxFQUFDLEVBQUUsZ0VBQWdFO2dCQUMzRSxJQUFHLEtBQUssRUFBQztvQkFDTCxVQUFVLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsYUFBYTtpQkFDOUM7cUJBQU07b0JBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLFlBQVk7aUJBQzdDO2FBQ0o7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO29CQUNkLFVBQVUsQ0FBQyxTQUFTLEdBQUcsK0NBQU0sQ0FBQyxLQUFLO2lCQUN0QztxQkFBTTtvQkFDUCxrQkFBa0I7b0JBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVTtvQkFDaEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVM7b0JBQzFDLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7b0JBRTFDLElBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxrREFBWSxDQUFDLEtBQUssRUFBQzt3QkFDcEMsSUFBRyxPQUFPLEVBQUM7NEJBQ1AsSUFBRyxLQUFLLEVBQUM7Z0NBQ0wsVUFBVSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLGFBQWE7NkJBQzlDO2lDQUFNO2dDQUNILFVBQVUsQ0FBQyxTQUFTLEdBQUcsK0NBQU0sQ0FBQyxZQUFZOzZCQUM3Qzt5QkFDSjs2QkFBTSxJQUFHLFFBQVEsRUFBQzs0QkFDZixJQUFHLEtBQUssRUFBQztnQ0FDTCxVQUFVLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7NkJBQ2xEO2lDQUFNO2dDQUNILFVBQVUsQ0FBQyxTQUFTLEdBQUcsK0NBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVTs2QkFDakQ7eUJBQ0o7NkJBQU0sSUFBRyxNQUFNLEVBQUM7NEJBQ2IsSUFBRyxLQUFLLEVBQUM7Z0NBQ0wsVUFBVSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLEtBQUssQ0FBQyxTQUFTOzZCQUNoRDtpQ0FBTTtnQ0FDSCxVQUFVLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7NkJBQy9DO3lCQUNKOzZCQUFNO3lCQUVOO3FCQUNKO3lCQUFNO3dCQUNILElBQUcsT0FBTyxFQUFDOzRCQUNQLElBQUcsS0FBSyxFQUFDO2dDQUNMLFVBQVUsQ0FBQyxTQUFTLEdBQUcsK0NBQU0sQ0FBQyxhQUFhOzZCQUM5QztpQ0FBTTtnQ0FDSCxVQUFVLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsWUFBWTs2QkFDN0M7eUJBQ0o7NkJBQU0sSUFBRyxRQUFRLEVBQUM7NEJBQ2YsSUFBRyxLQUFLLEVBQUM7Z0NBQ0wsVUFBVSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLFlBQVk7NkJBQzdDO2lDQUFNO2dDQUNILFVBQVUsQ0FBQyxTQUFTLEdBQUcsK0NBQU0sQ0FBQyxXQUFXOzZCQUM1Qzt5QkFDSjs2QkFBTSxJQUFHLE1BQU0sRUFBQzs0QkFDYixJQUFHLEtBQUssRUFBQztnQ0FDTCxVQUFVLENBQUMsU0FBUyxHQUFHLCtDQUFNLENBQUMsVUFBVTs2QkFDM0M7aUNBQU07Z0NBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRywrQ0FBTSxDQUFDLFNBQVM7NkJBQzFDO3lCQUNKOzZCQUFNO3lCQUVOO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO0lBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQWMsRUFBUSxFQUFFO1FBQ3RDLG1EQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLHlDQUF5QztRQUN6QyxJQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQzdFLFdBQVcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDaEYsTUFBTSxLQUFLLEdBQWdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25ELE1BQU0sT0FBTyxHQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlDLElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztnQkFDZixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLO2dCQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO2FBQ3JDO1NBQ0o7SUFFTCxDQUFDLENBQUM7SUFFRixJQUFHLHNEQUFLLENBQUMsVUFBVSxFQUFDO1FBQ2hCLEtBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDO1lBQ2xFLEtBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFDO2dCQUNqRSw4Q0FBOEM7Z0JBQzlDLG1EQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO2dCQUMxQyxtREFBbUQ7Z0JBQ25ELG1EQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUd2RSxNQUFNLFVBQVUsR0FBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDNUMsSUFBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDO29CQUN4QyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBRyxTQUFTLENBQUMsU0FBUyxJQUFJLCtDQUFNLENBQUMsS0FBSyxFQUFDO3dCQUNuQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTO3dCQUMxQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTO3dCQUMxQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTO3FCQUM3QztpQkFDSjthQUNKO1NBQ0o7S0FDSjtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM1SUQ7QUFBQTtBQUFBLHFGQUFxRjtBQUVyRixzRUFBc0U7QUFDdEUsK0ZBQStGO0FBRS9GLDZFQUE2RTtBQUM3RSxnREFBZ0Q7QUFDaEQsU0FBUyxLQUFLLENBQUMsR0FBVztJQUN0QixJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBQywrQ0FBK0M7SUFDL0UsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7UUFDL0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO1FBQ2hELENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFO0tBQ3pCO0lBRUQsT0FBTztRQUNILENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQztRQUN2QyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLENBQUM7UUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQztBQUlELGFBQWE7QUFDYixTQUFTLEtBQUssQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLENBQU0sRUFBRSxDQUFNO0lBQ3pDLE9BQU87UUFDSCxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUMsQ0FBQyxNQUFLLENBQUMsQ0FBQztRQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFBQyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUViLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVTtJQUNqQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlDQUFpQztBQUNqQyxrRkFBa0Y7QUFFbEYsTUFBTSxNQUFNLEdBQUc7SUFDWCxVQUFVLEVBQUUsQ0FBQyxHQUFRLEVBQUUsR0FBRSxDQUFDLENBQWE7SUFDdkMsSUFBSSxFQUFFLFVBQVMsVUFBa0IsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2RCxPQUFPLE9BQU87SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRTtTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO0lBQzVCLENBQUM7SUFDRCxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQVc7UUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0lBQzFELENBQUM7Q0FDSjtBQUVnQjs7Ozs7Ozs7Ozs7OztBQzNEakI7QUFBQTtBQUFBO0FBQW9DO0FBV3BDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLFdBQW1CLENBQUMsRUFBWSxFQUFFO0lBQ3BHLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO0FBQzdDLENBQUM7QUFHRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBaUIsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFXLEVBQUU7SUFDcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN4RSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBRTFELE9BQU8sQ0FBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUUsR0FBRyxDQUFDO0FBQ3JILENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFpQixFQUFFLEtBQWEsRUFBVyxFQUFFO0lBQ2hFLE9BQU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELEdBQUc7QUFDSDs7Ozs7R0FLRztBQUNILE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFpQixFQUFFLElBQVcsRUFBRSxZQUFvQixDQUFDLEVBQVcsRUFBRTtJQUMzRixJQUFJLFNBQVMsR0FBRyxDQUFDO0lBQ2pCLE1BQU0sT0FBTyxHQUFHLDBDQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFDO1FBQUUsU0FBUyxFQUFFO0tBQUM7SUFDcEQsSUFBRyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBQztRQUFFLFNBQVMsRUFBRTtLQUFDO0lBQ3BELElBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUM7UUFBRSxTQUFTLEVBQUU7S0FBQztJQUNwRCxJQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFDO1FBQUUsU0FBUyxFQUFFO0tBQUM7SUFDcEQsT0FBTyxTQUFTLElBQUksU0FBUztBQUNqQyxDQUFDO0FBRUQsTUFBTSxPQUFPLEdBQUc7SUFDWixJQUFJO0lBQ0osVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFFMkI7Ozs7Ozs7Ozs7Ozs7QUN2RDVCO0FBQUE7QUFBQTtBQUFBOzs7R0FHRztBQUNILElBQUssYUFLSjtBQUxELFdBQUssYUFBYTtJQUNkLDZDQUFFO0lBQ0YsaURBQUk7SUFDSixpREFBSTtJQUNKLG1EQUFLO0FBQ1QsQ0FBQyxFQUxJLGFBQWEsS0FBYixhQUFhLFFBS2pCO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBVSxFQUFFO0lBQzFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO0FBQ2hCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUU7SUFDekMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLElBQUksR0FBRyxDQUFDLEtBQWEsRUFBRSxTQUF3QixFQUFFLFdBQW1CLENBQUMsRUFBVSxFQUFFO0lBQ25GLElBQUcsU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUM7UUFDOUIsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRO0tBQ3RCO0lBQ0QsSUFBRyxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBQztRQUMvQixLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVE7S0FDdEI7SUFDRCxJQUFHLFNBQVMsR0FBRyxhQUFhLENBQUMsRUFBRSxFQUFDO1FBQzVCLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUTtLQUN0QjtJQUNELElBQUcsU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUM7UUFDOUIsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRO0tBQ3RCO0lBQ0QsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUU7SUFDM0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDVixPQUFPLENBQUM7QUFDWixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUU7SUFDeEQsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ1gsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ1gsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLElBQUksR0FBRyxDQUFDLEtBQWEsRUFBVSxFQUFFO0lBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLEtBQUssR0FBRztJQUNWLElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILEtBQUs7SUFDTCxHQUFHO0lBQ0gsSUFBSTtDQUNQO0FBRW9DOzs7Ozs7Ozs7Ozs7O0FDdEdyQztBQUFBO0FBQUE7QUFBcUM7QUFvQnJDOzs7Ozs7R0FNRztBQUNILE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFTLEVBQUU7SUFDeEUsT0FBTztRQUNILENBQUM7UUFDRCxDQUFDO1FBQ0QsS0FBSztRQUNMLE1BQU07S0FDVDtBQUNMLENBQUM7QUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQVMsRUFBRTtJQUNqRixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDUCxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUs7SUFDZixDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDakIsT0FBTyxDQUFDO0FBQ1osQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBVyxFQUFjLEVBQUU7SUFDdEMsT0FBTztRQUNILElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNaLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzFCLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNO0tBQy9CO0FBQ0wsQ0FBQztBQUNELE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBVyxFQUFnQixFQUFFO0lBQzFDLE9BQU87UUFDSCxFQUFFLEVBQUUsNENBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsRUFBRSw0Q0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQyxFQUFFLEVBQUUsNENBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsRUFBRSxFQUFFLDRDQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDNUQ7QUFDTCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFXLEVBQVUsRUFBRTtJQUNuQyxPQUFPLDRDQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFFRCxvRUFBb0U7QUFDcEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFRLEVBQUUsQ0FBUSxFQUFXLEVBQUU7SUFDL0MsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUk7UUFDN0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUc7QUFHbEUsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxJQUFJLEdBQUc7SUFDVCxJQUFJO0lBQ0osR0FBRztJQUNILEtBQUs7SUFDTCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7Q0FDYjtBQUVtQjs7Ozs7Ozs7Ozs7OztBQy9GcEI7QUFBQTtBQUFBO0FBQUEsZ0ZBQWdGO0FBRWhGOztHQUVHO0FBQ0gsSUFBSyxZQUdKO0FBSEQsV0FBSyxZQUFZO0lBQ2IsdURBQVE7SUFDUixpREFBSztBQUNULENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUNELE1BQU0sSUFBSTtJQWlCTjs7OztPQUlHO0lBQ0gsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLFNBQWtCLEVBQUUsVUFBb0I7UUFDdEUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFHLFVBQVUsS0FBSyxTQUFTLEVBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7U0FDL0I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtJQUV6QyxDQUFDO0NBQ0o7QUFFNEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IGZyb20gJy4va2V5Ym9hcmRNb25pdG9yJ1xuaW1wb3J0IHsgTW91c2VNb25pdG9yIH0gZnJvbSAnLi9tb3VzZU1vbml0b3InXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuL2Fzc2V0SGVscGVyJ1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICcuL2NhbnZhc1JlbmRlcmVyJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IFBVQlNVQiB9IGZyb20gJy4vcHViU3ViL3B1YlN1YidcbmltcG9ydCB7IFJlY3QsIElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IElEX01BTkFHRVIgfSBmcm9tICcuL2lkTWFuYWdlcidcbmltcG9ydCB7IGNhbGN1bGF0ZUZPViwgRk9WQ2VsbCB9IGZyb20gJy4vZm92J1xuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi9ybmdIZWxwZXInXG5pbXBvcnQgeyBtYXBHZW5lcmF0b3IzIH0gZnJvbSAnLi9tYXBHZW5lcmF0aW9uJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcblxuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuaW1wb3J0IHsgaGFuZGxlSW5wdXQgfSBmcm9tICcuL2hhbmRsZUlucHV0J1xuaW1wb3J0IHsgcmVuZGVyVG9HcmlkIH0gZnJvbSAnLi9yZW5kZXJUb0dyaWQnXG5pbXBvcnQgREVCVUcgZnJvbSAnLi9kZWJ1Z1NldHRpbmdzJ1xuaW1wb3J0IHsgcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IgfSBmcm9tICcuL3Byb2dyZXNzaXZlTWFwR2VuZXJhdGlvbidcblxuY29uc3Qge1xuICAgIFRJTEVfV0lEVEgsXG4gICAgVElMRV9IRUlHSFQsXG4gICAgU0NSRUVOX1dJRFRILFxuICAgIFNDUkVFTl9IRUlHSFQsXG4gICAgTUFQX1dJRFRILFxuICAgIE1BUF9IRUlHSFQsXG4gICAgQ0FNRVJBX1dJRFRILFxuICAgIENBTUVSQV9IRUlHSFQsXG4gICAgRk9WX1JBRElVU1xufSA9IFNFVFRJTkdTXG5cblxuLy8gSU5JVElBTElaRSBPVVIgU0VFRFxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuY29uc3Qgc2VlZFN0ciA9IHVybFBhcmFtcy5nZXQoJ3NlZWQnKVxuaWYoIXNlZWRTdHIpe1xuICAgIGNvbnN0IHNlZWQgPSBSQU5ET00uc2VlZChzZWVkU3RyIHx8IHVuZGVmaW5lZClcbiAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICBpZiAoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOm5ld3VybH0sJycsbmV3dXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3dXJsXG4gICAgfVxuXG59IGVsc2Uge1xuICAgIFJBTkRPTS5zZWVkKHNlZWRTdHIpXG59XG5cbmNvbnN0IHBsYXllcjogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsIENPTE9SUy5wbGF5ZXIpXG5jb25zdCBucGM6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCBDT0xPUlMubnBjKVxuY29uc3QgZW50aXRpZXM6IEVudGl0eVtdID0gW3BsYXllcixucGNdXG5cbi8vIEZpbmQgb3VyIGNhbnZhcyBhbmQgYWRqdXN0IGl0IHRvIG91ciBzZXR0aW5nc1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSCAqIFRJTEVfV0lEVEhcbmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUICogVElMRV9IRUlHSFRcblxuLy8gSW5pdGlhbGl6ZSBvdXIgaW5wdXQgbW9uaXRvcnNcbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbi8vIEluaXRpYWxpemUgb3VyIGNhbnZhcyByZW5kZXJlclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoKVxuY29uc3QgY2FtZXJhRnJhbWUgPSBSZWN0Lm1ha2UoMCwwLCBDQU1FUkFfV0lEVEgsIENBTUVSQV9IRUlHSFQpIC8vIENBTUVSQSBJUyBJTiBXT1JMRCBDRUxMUywgTk9UIEFCU09MVVRFIFVOSVRTXG5cbi8vIEluaXRpYWxpemUgb3VyIEdyaWRzXG5jb25zdCByZW5kZXJHcmlkID0gbmV3IEdyaWQ8SVJlbmRlckNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJycsIENPTE9SUy5ibGFjaywgQ09MT1JTLmJsYWNrKVxufSlcblxuLy8gVEhFU0UgQVJFIEhFUkUgQlkgREVGQVVMVCwgQlVUIFdPTidUIEJFIFNIT1dOIFVOTEVTUyBFTkFCTEVEXG5jb25zdCBkZWJ1Z0dyaWQgPSBuZXcgR3JpZDxJUmVuZGVyQ2VsbD4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxuZGVidWdHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJycsIENPTE9SUy5ibGFjaywgQ09MT1JTLmJsYWNrKVxufSlcblxubGV0IGZvdlJlY29tcHV0ZSA9ICFERUJVRy5ESVNBQkxFX0ZPVlxuY29uc3QgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiA9IG5ldyBHcmlkPEZPVkNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5mb3ZHcmlkLnNldEVhY2goKCk6IEZPVkNlbGwgPT4geyByZXR1cm4ge1xuICAgIHZpc2libGU6IERFQlVHLkRJU0FCTEVfRk9WXG59fSlcblxuY29uc3QgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4gPSBuZXcgR3JpZDxUaWxlPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG50aWxlR3JpZC5zZXRFYWNoKChjZWxsOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgPT4ge1xuICAgIGNvbnN0IHQgPSBuZXcgVGlsZSh4LHksIHRydWUpXG4gICAgaWYoREVCVUcuRElTQUJMRV9GT1Ype1xuICAgICAgICB0LmV4cGxvcmVkID0gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gdFxufSlcblxuLy8gdGhpcyB3aWxsIGFsc28gcG9wdWxhdGUgdGhlIHJvb21zXG5jb25zdCByb29tczogSVJlY3RbXSA9IFtdXG4vL21hcEdlbmVyYXRvcjModGlsZUdyaWQsIHJvb21zKVxuLy9tYXBHZW5lcmF0b3IyKHRpbGVHcmlkLCByb29tcylcblxuLy8gdGhpcyBpcyBob25lc3RseSBqdXN0IGFub3RoZXIgcGFydCBvZiBnZW5yYXRpbmcgdGhpbmdzLCB3ZSBqdXN0IG5lZWQgdG8gY29tZSB1cCB3aXRoIHNvbWUgZXh0cmEgdGVybWlub2xvZ3kgZm9yIGl0LyB3YXlzIHRvIGRlYWwgd2l0aCBpdFxuXG5cbi8vIGNsZWFuIHRoaXMgdXBcbmNvbnN0IG1vdmVzOiBhbnlbXSA9IFtdXG5jb25zdCBNb3ZlUHJvY2Vzc29yID0ge1xuICAgIG1vdmVzXG59XG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmUnLCAobXNnKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2gobXNnKVxufSlcblxuUFVCU1VCLnN1YnNjcmliZSgnbW92ZWQnLCAobXNnKTogdm9pZCA9PntcbiAgICBpZihtc2cuaWQgPT09IHBsYXllci5pZCAmJiAhREVCVUcuRElTQUJMRV9UUkFDS0lORyl7XG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHBsYXllci54IC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG4gICAgfVxufSlcblxuUFVCU1VCLnN1YnNjcmliZSgnY2FtZXJhX21vdmUnLCAobXNnKTogdm9pZCA9PiB7XG4gICAgY2FtZXJhRnJhbWUueCArPSBtc2cuZGVsdGEueFxuICAgIGNhbWVyYUZyYW1lLnkgKz0gbXNnLmRlbHRhLnlcbiAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxufSlcblxuLy8gVE9ETzogTU9WRSBUSElTIFRPIHRoZSBLZXlib2FyZCBNb25pdG9yIGl0c2VsZiBhcyBhIGhlbHBlciBwcm9wZXJ0eVxuY29uc3QgbmV3S2V5UHJlc3MgPSAocTogc3RyaW5nLCBlbmFibGVab29tOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ga20uZ2V0S2V5U3RhdGUocSlcbiAgICBpZighZW5hYmxlWm9vbSl7XG4gICAgICAgIHJldHVybiBzdGF0ZS5pc0Rvd24gJiYgc3RhdGUuaGFsZlN0ZXBzID4gMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5pc0Rvd24gJiYgKHN0YXRlLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pXG4gICAgfVxufVxuXG5jb25zdCBsZXZlbEl0ZXJhdG9yID0gcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IodGlsZUdyaWQsIHJvb21zLCBkZWJ1Z0dyaWQpXG5sZXZlbEl0ZXJhdG9yLm5leHQoKVxue1xuICAgIGlmKHJvb21zLmxlbmd0aCA+IDApe1xuICAgICAgICBjb25zdCBwY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbMF0pXG4gICAgICAgIFBvaW50LnNldChwbGF5ZXIsIHBjZW50ZXIueCwgcGNlbnRlci55KVxuICAgICAgICBjb25zdCBucGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zW3Jvb21zLmxlbmd0aCAtIDFdKVxuICAgICAgICBQb2ludC5zZXQobnBjLCBucGNlbnRlci54LCBucGNlbnRlci55KVxuICAgIH1cblxuICAgIC8vIGNlbnRlciB0aGUgY2FtZXJhIGFuZCBmb3Ygb24gdGhlIHBsYXllclxuICAgIGlmKCFERUJVRy5ESVNBQkxFX1RSQUNLSU5HKXtcbiAgICAgICAgY2FtZXJhRnJhbWUueCA9IE1hdGguZmxvb3IocGxheWVyLnggLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcihwbGF5ZXIueSAtIGNhbWVyYUZyYW1lLmhlaWdodC8yKVxuICAgICAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjZW50ZXIgZXZlcnl0aGluZ1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcih0aWxlR3JpZC53aWR0aC8yIC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IodGlsZUdyaWQuaGVpZ2h0LzIgIC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH1cbn1cblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oKGltYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICByZW5kZXJlci5pbml0KGNhbnZhcywgaW1hZ2UpXG4gICAgaWYoIURFQlVHLlNUQUdFX01BUF9HRU5FUkFUT1JTKXtcbiAgICAgICAgLy8gSlVTVCBGVUxMWSBTRVFVRU5DRSBUSEUgR0VORVJBVE9SXG4gICAgICAgIHdoaWxlKGxldmVsSXRlcmF0b3IubmV4dCgpLmRvbmUgIT09IGZhbHNlKXt9XG4gICAgfVxuICAgIC8vIExvb3BcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBoYW5kbGVJbnB1dChrbSwgcGxheWVyKVxuXG4gICAgICAgIC8vIGV4dHJhXG4gICAgICAgIGlmKG5ld0tleVByZXNzKCd3Jykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogMCwgeTogLTF9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygnYScpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IC0xLCB5OiAwfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3MnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAwLCB5OiAxfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ2QnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAxLCB5OiAwfX0pXG4gICAgICAgIH1cblxuICAgICAgICBpZihERUJVRy5TVEFHRV9NQVBfR0VORVJBVE9SUyl7XG4gICAgICAgICAgICAvLyBxIGxldHMgdXMgcHJvZ3Jlc3MgdGhyb3VnaCB0aGUgbWFwIGdlbmVyYXRvciBwaGFzZVxuICAgICAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3EnKSl7XG4gICAgICAgICAgICAgICAgLy8geWllbGQgdGhlIG5leHQgbGV2ZWwgZ2VuZXJhdGluZyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgbGV2ZWxJdGVyYXRvci5uZXh0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2Nlc3MgbW92ZXNcbiAgICAgICAgLy8gZXZlbnR1YWxseSB3ZSdsbCBjb21wb25lbnRpemUgdGhpcyBiZXR0ZXJcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5mb3JFYWNoKChtc2c6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1zZy5kZWx0YVxuICAgICAgICAgICAgY29uc3QgaWQgPSBtc2cuaWRcbiAgICAgICAgICAgIGNvbnN0IG1vdmVyID0gZW50aXRpZXMuZmluZCgoZSk6IGJvb2xlYW4gPT4gZS5pZCA9PSBpZClcbiAgICAgICAgICAgIGlmKCFtb3Zlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKG1vdmVyLnggKyBtb3ZlLngsIG1vdmVyLnkgKyBtb3ZlLnkpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmJsb2NrTW92ZSB8fCAoREVCVUcuRU5BQkxFX0NMSVBQSU5HICYmIG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpKXtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXIubW92ZShtb3ZlLngsIG1vdmUueSlcbiAgICAgICAgICAgICAgICAgICAgaWYobW92ZXIuaWQgPT09IHBsYXllci5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3ZSZWNvbXB1dGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmVkJywgbXNnKSAvLyBvbmx5IHB1Ymxpc2ggbW92ZSBpZiB0aGUgZW50aXR5IGFjdHVhbGx5IGNvbXBsZXRlZCB0aGUgbW92ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5sZW5ndGggPSAwXG5cbiAgICAgICAgaWYoZm92UmVjb21wdXRlICYmICFERUJVRy5ESVNBQkxFX0ZPVil7XG4gICAgICAgICAgICBjYWxjdWxhdGVGT1YoZm92R3JpZCwgdGlsZUdyaWQsIHBsYXllciwgRk9WX1JBRElVUylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gcmVuZGVyIGZvcm1hdFxuICAgICAgICByZW5kZXJUb0dyaWQodGlsZUdyaWQsIGZvdkdyaWQsIGVudGl0aWVzLCByZW5kZXJHcmlkLCBjYW1lcmFGcmFtZSwgZGVidWdHcmlkKVxuICAgICAgICAvLyBhY3R1YWxseSByZW5kZXIgdG8gY2FudmFzXG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKClcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHJlbmRlckdyaWQpXG5cbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG5cbn0pLmNhdGNoKChlcnI6IGFueSk6IHZvaWQgPT4gY29uc29sZS5sb2coZXJyKSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiIsImZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IGFueXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk6IGFueSA9PiByZXNvbHZlKGltZykpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpOiBhbnkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSAke3VybH1gKSkpXG4gICAgICAgIGltZy5zcmMgPSB1cmxcbiAgICB9KVxufVxuXG5leHBvcnQge2xvYWRJbWFnZX0iLCJpbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgZHJhd1NlY3Rpb24sIGNvZGUgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnXG5pbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYSByZW5kZXIgZ3JpZCBhbmQgY29udmVydGluZyBpdCB0byBpbWFnZXNcbiAqIG9uIHRoZSBjYW52YXNcbiAqL1xuXG5jb25zdCB7VElMRV9XSURUSCwgVElMRV9IRUlHSFR9ID0gU0VUVElOR1NcblxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCB1bmRlZmluZWQ7XG4gICAgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCk6IENhbnZhc1JlbmRlcmVye1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICAvLyB3ZSBhcmUganVzdCBmb3JjaW5nIHRoaXMgZm9yIG5vdywgd2Ugd2lsbCBjaGVjayBpZiBpdCdzIG51bGxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGlmKGN0eCA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgY29udGV4dCBmcm9tIGNhbnZhcycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8vIGV2ZW50dWFsbHkgd2UgbmVlZCB0byBwYXNzIGluIHRoZSBkaW1lbnNpb25zIHdlIGFyZSByZW5kZXJpbmcgdG8gYXMgd2VsbFxuICAgIC8vIGZvciBub3cgaXQncyBmaW5lXG4gICAgcmVuZGVyKHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBiYWNrZ3JvdW5kOiBzdHJpbmcgPSBDT0xPUlMuYmxhY2spOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFJlY3QoMCwwLCByZW5kZXJHcmlkLndpZHRoICogVElMRV9XSURUSCwgcmVuZGVyR3JpZC5oZWlnaHQgKiBUSUxFX0hFSUdIVClcbiAgICAgICAgLy8gbGV0J3MgdHJ5IHNldHRpbmcgYSBiYWNrZ3JvdW5kIGNvbG9yIGFzIHdlbGxcbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgZGVzdFJlY3QgPSBSZWN0Lm1ha2UoMCwwLDAsMClcbiAgICAgICAgcmVuZGVyR3JpZC5mb3JFYWNoKChcbiAgICAgICAgICAgIGNlbGw6IElSZW5kZXJDZWxsLCBcbiAgICAgICAgICAgIGluZGV4OiBudW1iZXIsIFxuICAgICAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIFJlY3Quc2V0KGRlc3RSZWN0LCB4ICogVElMRV9XSURUSCwgeSAqIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbiAgICAgICAgICAgIC8vIHRvZG8sIGFsbG93IHVzIHRvIG1hcmsgcmVuZGVyIGNlbGxzIGFzICdlbXB0eScgcmF0aGVyIHRoYW4gc3BhY2VzLCB0aGlzIG1pZ2h0IGhlbHAgc3BlZWQgdXAgcmVuZGVyIHRpbWVcbiAgICAgICAgICAgIGlmKGNlbGwuY2hhcmFjdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgaWYoY2VsbC5iYWNrQ29sb3IgIT09IGJhY2tncm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAvLyBJIGFjdHVhbGx5IGRvbid0IGtub3cgaWYgdGhpcyBoZWxwcywgYnV0IGl0IHNlZW1zIGxpa2Ugc2V0dGluZyB0aGUgZmlsbFN0eWxlIGNvdWxkIGludm9sdmUgbW9yZSBjb21wbGljYXRpb25zIHRoYW4ganVzdCBjaGVja2luZyBpZiBpdCdzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmKGN0eC5maWxsU3R5bGUgIT09IGNlbGwuYmFja0NvbG9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZWxsLmJhY2tDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjUmVjdCA9IENPREVfVE9fUkVDVF9IQVNIW2NvZGUoY2VsbC5jaGFyYWN0ZXIpXVxuICAgICAgICAgICAgICAgIGRyYXdTZWN0aW9uKGN0eCwgdGhpcy5zcHJpdGVzaGVldCwgc3JjUmVjdCwgZGVzdFJlY3QsIGNlbGwuZm9yZUNvbG9yLCBjZWxsLmJhY2tDb2xvciApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IENhbnZhc1JlbmRlcmVyIH0iLCIvLyBUT0RPOiBSZW9yZ2FuaXplIHRoaXMgaW50byBtYXRlcmlhbHNcbi8vIFdlJ2xsIGV2ZW4gaW5jbHVkZSBcIkJMQU5LXCJcbi8vIEFzIG9wcG9zZWQgdG8gZW1wdHkgc3BhY2VcbmNvbnN0IENPTE9SUyA9IHtcbiAgICAnZGFya19vdXRzaWRlJzogJyMwMDIyNDQnLFxuICAgICdsaWdodF9vdXRzaWRlJzogJyMyNjUzODAnLFxuICAgICdibGFjayc6ICcjMDAwMDAwJyxcbiAgICAnd2hpdGUnOiAnI0ZGRkZGRicsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMmQyODI0JywgLy8nIzQ0M2MzNScsXG4gICAgJ2RhcmtfZ3JvdW5kJzogJyM0NDNjMzUnLCAvLycjNjY1NjQ3JyxcbiAgICAnbGlnaHRfd2FsbCc6ICcjQzhCNDMyJywgLy8gI0M1Q0M4OVxuICAgICdsaWdodF9ncm91bmQnOiAnI0M1Q0M4OScsXG4gICAgJ3BsYXllcic6ICcjRkZGRkZGJyxcbiAgICAnZGFya19kb29yJzonIzU1MDAwMCcsXG4gICAgJ2xpZ2h0X2Rvb3InOiAnI0ZGMjIyMicsXG4gICAgJ25wYyc6ICcjQ0MwMDAwJyxcbiAgICAnREVCVUcnOiAnI0ZGMzMzMycsXG4gICAgbWV0YWw6IHtcbiAgICAgICAgZGFya1dhbGw6ICcjNEE0QTRBJyxcbiAgICAgICAgZGFya0dyb3VuZDogJyM2MTYxNjEnLFxuICAgICAgICBsaWdodFdhbGw6ICcjODU4NTg1JyxcbiAgICAgICAgbGlnaHRHcm91bmQ6ICcjQkZCRkJGJ1xuICAgIH1cblxufVxuXG4vLyBTT01FIEdSQVkgVFlQRVNcbi8vICM0QTRBNEFcbi8vICM2MTYxNjFcbi8vICM4NTg1ODVcbi8vICNCRkJGQkZcblxuZXhwb3J0IGRlZmF1bHQgQ09MT1JTXG4iLCJpbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLy8gQUxMIERFQlVHIFNFVFRJTkdTIFNIT1VMRCBHTyBJTiBIRVJFLCBBTkQgQUxMIERFQlVHIEZMQUdTIFNIT1VMRCBCRSBGQUxTRSBCWSBERUZBVUxUIChpLmUuIHByb2R1Y3Rpb24gbW9kZSlcbmNvbnN0IERFQlVHOiBIYXNoPGJvb2xlYW4+ID0ge1xuICAgIERJU0FCTEVfRk9WOiBmYWxzZSwgICAgICAgICAgLy8gU0hPVyBFVkVSWVRISU5HLCBOTyBISURJTkcgU1RVRkYgQkVISU5EIEZPViwgRVZFUllUSElORyBBQ1RTIExJVFxuICAgIERJU0FCTEVfVFJBQ0tJTkc6IHRydWUsICAgICAvLyBDQU1FUkEgV0lMTCBPTkxZIFJFU1BPTkQgVE8gRElSRUNUIENPTlRST0wgQU5EIFdPTidUIFRSQUNLIENIQVJBQ1RFUlxuICAgIEVOQUJMRV9DTElQUElORzogdHJ1ZSxcbiAgICBERUJVR19EUkFXOiB0cnVlLFxuICAgIFNUQUdFX01BUF9HRU5FUkFUT1JTOiB0cnVlLCAvLyBXZSB3aWxsIG1hbnVhbGx5IHByb2dyZXNzIHRoZSBsZXZlbCBnZW5lcmF0b3Jcbn1cblxuZXhwb3J0IGRlZmF1bHQgREVCVUdcbiIsIi8qKlxuICogQSBnZW5lcmljIG9iamVjdCB0byByZXByZXNlbnQgZXZlcnl0aGluZyB0aGF0IGlzIG5vdCB0aGUgbWFwIGl0c2VsZlxuICogRm9yIHRoYXQsIHNlZSB0aGUgVGlsZSBjbGFzc1xuICovXG5jbGFzcyBFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHg6IG51bWJlcix5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBjb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGFuIGVudGl0eSwgY3VycmVudGx5IGRvZXNuJ3QgY2hlY2sgaWYgaXQgY2FuIG9yIG5vdCwganVzdCBkb2VzXG4gICAgICogQHBhcmFtIGR4IEFtb3VudCB0byBtb3ZlIGluIHRoZSB4IGRpcmVjdGlvbiAobGVmdCBpcyBuZWdhdGl2ZSwgcmlnaHQgaXMgcG9zaXRpdmUpXG4gICAgICogQHBhcmFtIGR5IEFtb3VudCB0byBtb3ZlIGluIHRoZSB5IGRpcmVjdGlvbiAodXAgaXMgbmVnYXRpdmUsIGRvd24gaXMgcG9zaXRpdmUpXG4gICAgICovXG4gICAgbW92ZShkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZHtcbiAgICAgICAgdGhpcy54ICs9IGR4XG4gICAgICAgIHRoaXMueSArPSBkeVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRW50aXR5IH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElQb2ludCwgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuaW50ZXJmYWNlIEZPVkNlbGwgIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFNoYWRvd1JhbmdlIHtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5jb25zdCBpc0JldHdlZW5JbmNsdXNpdmUgPSAoYTogbnVtYmVyLGI6IG51bWJlcix0OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBpZihiIDwgYSl7XG4gICAgICAgIHJldHVybiBiIDw9IHQgJiYgdCA8PSBhXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPD0gdCAmJiB0IDw9IGJcbiAgICB9XG59XG4vKipcbiAqIFxuICogQHBhcmFtIGZvdkdyaWQgXG4gKiBAcGFyYW0gdGlsZUdyaWQgXG4gKiBAcGFyYW0gc3RhcnRQb2ludCBzdGFydCBwb2ludCBpcyBpbiB3b3JsZCBjb29yZGluYXRlc1xuICogQHBhcmFtIG1heERpc3RhbmNlIFxuICogQHBhcmFtIGhvcml6b250YWxOb3RWZXJ0aWNhbCBcbiAqIEBwYXJhbSB4RGlyZWN0aW9uIFxuICogQHBhcmFtIHlEaXJlY3Rpb24gXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZU9jdGFudCA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyLFxuICAgIGhvcml6b250YWxOb3RWZXJ0aWNhbDogYm9vbGVhbiwgeERpcmVjdGlvbjogbnVtYmVyLCB5RGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBcbiAgICAvLyBPdXIgc2hhZG93cyB3ZSB3aWxsIGNhc3RcbiAgICBjb25zdCBzaGFkb3dSYW5nZXM6IFNoYWRvd1JhbmdlW10gPSBbXVxuICAgIC8vIG91ciBzdGFydGluZyBsb2NhdGlvbiBpcyBhbHdheXMgdmlzaWJsZVxuICAgIGNvbnN0IHNjcmVlblN0YXJ0UG9pbnQ9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICBzY3JlZW5TdGFydFBvaW50LnggLT0gZm92R3JpZC54XG4gICAgc2NyZWVuU3RhcnRQb2ludC55IC09IGZvdkdyaWQueVxuICAgIGZvdkdyaWQuZ2V0UChzY3JlZW5TdGFydFBvaW50KS52aXNpYmxlID0gdHJ1ZVxuICAgIC8vIFRPRE86IERldGVybWluZSBpZiB0aGUgRk9WIGlzIGluIHJhbmdlXG4gICAgZm9yKGxldCByb3cgPSAxOyByb3cgPCBtYXhEaXN0YW5jZTsgcm93Kyspe1xuICAgICAgICBjb25zdCByb3dTaXplID0gcm93ICsgMVxuICAgICAgICBmb3IobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHJvd1NpemU7IGNvbHVtbisrKXtcbiAgICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgb2N0YW50LCB0aGUgdHJhdmVsbGVyIHdpbGwgbW92ZSBkaWZmZXJlbnRseVxuICAgICAgICAgICAgY29uc3QgdHJhdmVsbGVyID0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgICAgICAgICAgdHJhdmVsbGVyLnggKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geERpcmVjdGlvbiAqIGNvbHVtbiA6IHhEaXJlY3Rpb24gKiByb3dcbiAgICAgICAgICAgIHRyYXZlbGxlci55ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHlEaXJlY3Rpb24gKiByb3cgOiB5RGlyZWN0aW9uICogY29sdW1uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBvdXQgb2YgYm91bmRzLCBza2lwXG4gICAgICAgICAgICBpZighdGlsZUdyaWQuaW5Cb3VuZHNYWSh0cmF2ZWxsZXIueCwgdHJhdmVsbGVyLnkpKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmYWN0b3IgaW4gb3VyIHRpbGUgY2hlY2sgd2hlbiB3ZSBnZXQgdGhlIHdvcmxkIGNlbGxcbiAgICAgICAgICAgIGxldCBzY3JlZW5Qb2ludCA9IFBvaW50LmNvcHkodHJhdmVsbGVyKVxuICAgICAgICAgICAgc2NyZWVuUG9pbnQueCAtPSBmb3ZHcmlkLnhcbiAgICAgICAgICAgIHNjcmVlblBvaW50LnkgLT0gZm92R3JpZC55XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0UCh0cmF2ZWxsZXIpXG4gICAgICAgICAgICAvLyBPUFRJTUlaRTogV2UgYXJlIHByb2JhYmx5IHJ1bm5pbmcgdG8gbWFueSB0aW1lcyBhbmQgY291bGQgZG8gdGhpcyBiZXR0ZXJcbiAgICAgICAgICAgIGlmKCFmb3ZHcmlkLmluQm91bmRzWFkoc2NyZWVuUG9pbnQueCwgc2NyZWVuUG9pbnQueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblBvaW50KVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGNvbHVtbi9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBlbmQgPSAoY29sdW1uICsgMSkvcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgbWlkZGxlID0gKHN0YXJ0ICsgZW5kKSAvIDJcblxuICAgICAgICAgICAgLy8gdGVzdCBmb3IgdmlzaWJsaXR5XG4gICAgICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHRydWVcblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGVkZ2VzIGFyZSBjbGVhciBvciBub3RcbiAgICAgICAgICAgIGxldCBzdGFydENsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IG1pZGRsZUNsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGVuZENsZWFyID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGJ1aWx0IHNvbWUgc2hhZG93IHJhbmdlc1xuICAgICAgICAgICAgaWYoc2hhZG93UmFuZ2VzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGFueSBzaGFkb3dzIGNyb3NzIG91ciB0aHJlZSBwb2ludHNcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMuZm9yRWFjaCggKHNyOiBTaGFkb3dSYW5nZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENsZWFyID0gc3RhcnRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICBtaWRkbGVDbGVhciA9IG1pZGRsZUNsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgbWlkZGxlKVxuICAgICAgICAgICAgICAgICAgICBlbmRDbGVhciA9IGVuZENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgZW5kKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdmlzaWJpbGl0eSBiYXNlZCBvZmYgb2Ygb3VyIHNhbXBsaW5nXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9IG1pZGRsZUNsZWFyICYmIChzdGFydENsZWFyIHx8IGVuZENsZWFyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3ZSBibG9jayBzaWdodCwgY2FsY3VsYXRlIG91ciBzaGFkb3cgZW5kc1xuICAgICAgICAgICAgaWYodGlsZS5ibG9ja1NpZ2h0KXtcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMucHVzaCh7c3RhcnQsIGVuZH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvdkNlbGwudmlzaWJsZSA9IHZpc2liaWxpdHlcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgdGlsZS5leHBsb3JlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2FsY3VsYXRlRk9WID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAvLyBiZSBkZWZhdWx0IHdlIGFyZSBnb2luZyB0byBzaGFkb3dDYXN0XG4gICAgLy8gYnkgZGVmYXVsdCBldmVyeXRoaW5nIGlzIG5vdCB2aXNpYmxlXG4gICAgZm92R3JpZC5mb3JFYWNoKChjZWxsKTogdm9pZCA9PiB7IGNlbGwudmlzaWJsZSA9IGZhbHNlIH0pXG4gICAgLy8gTk5XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIC0xKVxuICAgIC8vIFdOV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgLTEpXG4gICAgLy8gV1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAxKVxuICAgIC8vIFNTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAxKVxuICAgIC8vIFNTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIDEsIDEpXG4gICAgLy8gRVNFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIDEsIDEpXG4gICAgLy8gRU5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIDEsIC0xKVxuICAgIC8vIE5ORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIDEsIC0xKVxufVxuXG5leHBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGx9IiwiLy8gT1JJR0lOQUxcbi8vIGNvbnN0IFNFVFRJTkdTID0ge1xuLy8gICAgIFRJTEVfV0lEVEg6IDEwLCAgICAgLy8gcGl4ZWxzXG4vLyAgICAgVElMRV9IRUlHSFQ6IDEwLCAgICAvLyBwaXhlbHNcbi8vICAgICBNQVBfV0lEVEg6IDgwLCAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbiB0aWxlc1xuLy8gICAgIE1BUF9IRUlHSFQ6IDQ1LFxuLy8gICAgIENBTUVSQV9XSURUSDogMTAwLFxuLy8gICAgIENBTUVSQV9IRUlHSFQ6IDcwLFxuLy8gICAgIFNDUkVFTl9XSURUSCA6MTAwLFxuLy8gICAgIFNDUkVFTl9IRUlHSFQgOiA3MCxcbi8vICAgICBGT1ZfUkFESVVTOiAzNVxuLy8gfVxuXG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBUSUxFX1dJRFRIOiA1LCAgICAgLy8gcGl4ZWxzXG4gICAgVElMRV9IRUlHSFQ6IDUsICAgIC8vIHBpeGVsc1xuICAgIE1BUF9XSURUSDogMjAwLCAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbiB0aWxlc1xuICAgIE1BUF9IRUlHSFQ6IDEzMCxcbiAgICBDQU1FUkFfV0lEVEg6IDIxMCxcbiAgICBDQU1FUkFfSEVJR0hUOiAxNDAsXG4gICAgU0NSRUVOX1dJRFRIIDoyMTAsXG4gICAgU0NSRUVOX0hFSUdIVCA6IDE0MCxcbiAgICBGT1ZfUkFESVVTOiAzNVxufVxuXG5leHBvcnQgZGVmYXVsdCBTRVRUSU5HUyIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgU2V0RWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBhbnk7XG59XG5cbmludGVyZmFjZSBGb3JFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBOZWlnaGJvckxpc3Q8VD4ge1xuICAgIHVwOiBUIHwgbnVsbDtcbiAgICBsZWZ0OiBUIHwgbnVsbDtcbiAgICByaWdodDogVCB8IG51bGw7XG4gICAgZG93bjogVCB8IG51bGw7XG4gICAgbmVpZ2hib3JzOiBUW107XG59XG5cbi8vIFRPRE86IGdpdmUgZ3JpZHMgdGhlaXIgb3duIHggYW5kIHlzLCB0aGF0IHdheSB0aGV5IGNhbiBpbXBsZW1lbnQgYWxsIHRoZSBwb2ludCBhbmQgcmVjdCBzdHVmZlxuLyoqXG4gKiBHcmlkIHRvIHJlcHJlc2VudCAyZCBjb2xsZWN0aW9ucywgcGxlYXNlIGRvbid0IHJlc2l6ZSBpdCBhZnRlciBjcmVhdGluZyBpdFxuICovXG5jbGFzcyBHcmlkPFQ+IGltcGxlbWVudHMgSVJlY3Qge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgY2VsbHM6IFRbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCl7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgdXNlZCBmb3IgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGdyaWQsIG92ZXJ3cml0ZXMgcHJldmlvdXMgZW50cmllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBlbnRyeSwgZG9uJ3QgdXNlIHRoaXMgdW5sZXNzIGVudHJpZXMgYXJlIGluZGVwZW5kZW50IGZyb20gZWFjaCBvdGhlclxuICAgICAqIEBwYXJhbSBmbiB0aGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjZWxsIGl0c2VsZiBhcyB0aGUgZmlyc3QgcHJvcGVydHkgYW5kIFxuICAgICAqL1xuICAgIHNldEVhY2goZm46IFNldEVhY2hGbjxUPik6IEdyaWQ8VD57XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgeCA9IGkgJSB0aGlzLndpZHRoXG4gICAgICAgICAgICB5ID0gKGkgLSB4KS90aGlzLndpZHRoXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBzb21ldGhpbmcgZm9yIGVhY2ggbWVtYmVyIG9mIGEgY2VsbCwgZ29pbmcgcm93IGJ5IHJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZm4gR2V0IHBhc3NlZCB0aGUgY2VsbCwgaW5kZXgsIHggYW5kIHlcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuOiBGb3JFYWNoRm48VD4pOiB2b2lke1xuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKyl7XG4gICAgICAgICAgICAgICAgZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHggeCBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICogQHBhcmFtIHkgeSBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICovXG4gICAgZ2V0WFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUICB7XG4gICAgICAgIGlmKCF0aGlzLmluQm91bmRzWFkoeCx5KSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdW5kYXJ5IGFjY2VzcyBpc3N1ZScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbeCArIHkgKiB0aGlzLndpZHRoXVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGdldFhZLiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBwb2ludCBjb250YWlucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2VsbCB5b3Ugd2FudCB0byBnZXRcbiAgICAgKi9cbiAgICBnZXRQKHBvaW50OiBJUG9pbnQpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WFkocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG5cbiAgICBpbkJvdW5kc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbntcbiAgICAgICAgaWYoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNlbGwgYmFzZWQgb2ZmIG9mIGFuIGluZGV4LCB1c3VhbGx5IGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGZvckVhY2ggbG9vcCBvZiBhIHNpbWlsYXJseSBzaXplZCBncmlkXG4gICAgICogTk9URSBiZSBjYXJlZnVsIHRoYXQgdGhlIG90aGVyIGdyaWQgaGFzIHRoZSBzYW1lIGRpbWVuc2lvbiB1bmxlc3MgeW91IHJlYWxseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBjZWxscywgbW9zdGx5IHRvIGJlIHVzZWQgd2l0aCBncmlkcyB0aGF0IGFyZSB3b3JraW5nIGFsb25nc2lkZSBhIGRpZmZlcmVudCBmb3JFYWNoIGxvb3BcbiAgICAgKi9cbiAgICBnZXRJKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaW5kZXhdXG4gICAgfVxuXG4gICAgZ2V0TmVpZ2hib3JzWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBOZWlnaGJvckxpc3Q8VD4ge1xuICAgICAgICBjb25zdCBsaXN0OiBOZWlnaGJvckxpc3Q8VD4gPSB7XG4gICAgICAgICAgICB1cDogbnVsbCxcbiAgICAgICAgICAgIGRvd246IG51bGwsXG4gICAgICAgICAgICBsZWZ0OiBudWxsLFxuICAgICAgICAgICAgcmlnaHQ6IG51bGwsXG4gICAgICAgICAgICBuZWlnaGJvcnM6W11cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmluQm91bmRzWFkoeCx5IC0gMSkpe1xuICAgICAgICAgICAgbGlzdC51cCA9IHRoaXMuZ2V0WFkoeCwgeSAtIDEpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QudXApXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHgseSArIDEpKXtcbiAgICAgICAgICAgIGxpc3QuZG93biA9IHRoaXMuZ2V0WFkoeCwgeSArIDEpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QuZG93bilcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmluQm91bmRzWFkoeCAtIDEseSkpe1xuICAgICAgICAgICAgbGlzdC5sZWZ0ID0gdGhpcy5nZXRYWSh4IC0gMSwgeSlcbiAgICAgICAgICAgIGxpc3QubmVpZ2hib3JzLnB1c2gobGlzdC5sZWZ0KVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5Cb3VuZHNYWSh4ICsgMSx5KSl7XG4gICAgICAgICAgICBsaXN0LnJpZ2h0ID0gdGhpcy5nZXRYWSh4ICsgMSwgeSlcbiAgICAgICAgICAgIGxpc3QubmVpZ2hib3JzLnB1c2gobGlzdC5yaWdodClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQgfSIsImltcG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IGZyb20gJy4va2V5Ym9hcmRNb25pdG9yJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IFBVQlNVQiB9IGZyb20gJy4vcHViU3ViL3B1YlN1YidcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuXG5leHBvcnQgY29uc3QgaGFuZGxlSW5wdXQgPSAoa206IEtleWJvYXJkTW9uaXRvciwgcGxheWVyOiBFbnRpdHkpOiB2b2lkID0+IHtcbiAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgtMSwgMCl9KVxuICAgIH1cbiAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDEsIDApfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAtMSl9KVxuICAgIH1cbiAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAxKX0pXG4gICAgfVxuICAgIC8vIHF1aWNrIG51bWJlciBnZW5lcmF0b3JcbiAgICBpZigha20uZ2V0S2V5U3RhdGUoJ24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCduJykuaGFsZlN0ZXBzID4gMCkpe1xuICAgICAgICBjb25zdCBzZWVkID0gYnRvYShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpXG4gICAgICAgIGNvbnN0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/c2VlZD0nICsgc2VlZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cbn0iLCJjbGFzcyBJRE1hbmFnZXIge1xuICAgIHByaXZhdGUgbGFzdElkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sYXN0SWQgPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCBpZFxuICAgICAqL1xuICAgIG5leHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdElkKytcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSURfTUFOQUdFUlxuICovXG5jb25zdCBJRF9NQU5BR0VSID0gbmV3IElETWFuYWdlcigpXG5leHBvcnQge0lEX01BTkFHRVIsIElETWFuYWdlcn0iLCJpbnRlcmZhY2UgS2V5U3RhdGUgeyBcbiAgICBrZXk6IHN0cmluZztcbiAgICBpc0Rvd246IGJvb2xlYW47XG4gICAgaGFsZlN0ZXBzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG5jb25zdCBtYWtlS2V5U3RhdGUgPSAoa2V5OiBzdHJpbmcsIGlzRG93bjogYm9vbGVhbiA9IGZhbHNlLCBoYWxmU3RlcHM6IG51bWJlciA9IDApOiBLZXlTdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBpc0Rvd24sXG4gICAgICAgIGhhbGZTdGVwc1xuICAgIH1cbn1cblxuY2xhc3MgS2V5Ym9hcmRNb25pdG9yIHtcbiAgICBrZXlIYXNoOiBIYXNoPEtleVN0YXRlPjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmtleUhhc2ggPSB7fVxuICAgIH1cbiAgICAvLyBBdHRhY2ggdG8gdGhlIERPTSwgdXN1YWxseSB0aGUgZG9jdW1lbnQgYXMgYSB3aG9sZSwgYnV0IHlvdSBjYW4gbWFrZSBpdCBtb3JlIHNwZWNpZmljIGlmIHlvdSB3YW50XG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IEtleWJvYXJkTW9uaXRvciB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKCFrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZihrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBnZXRLZXlTdGF0ZShrZXk6IHN0cmluZyk6IEtleVN0YXRle1xuICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmtleUhhc2hba2V5XVxuICAgIH1cbiAgICByZXNldFN0ZXBzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5rZXlIYXNoKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5c1tpXV0uaGFsZlN0ZXBzID0gMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IiwiLy8gTGV0J3MgZ28gYWhlYWQgYW5kIGNyZWF0ZSB0aGUgUG9pbnQgaW50ZXJmYWNlIGhlcmUsIHdlJ2xsIGV4cG9ydCBpdCBmb3IgdXNlIGxhdGVyIGluIHRoZSBwcm9qZWN0XG5cbmltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbi8qKlxuICogQ2xhc3MgdG8gaGVscCBtb25pdG9yIHRoaW5ncyB0aGF0IGhhdmUgaGFwcGVuZWQgdG8gdGhlIG1vdXNlIHNpbmNlIGxhc3QgdGltZSB0aGF0IHdlIGxvb2tlZFxuICovXG5cbmludGVyZmFjZSBIYWxmQ2xpY2sge1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgaXNEb3duOiBib29sZWFuO1xufVxuXG5jbGFzcyBNb3VzZU1vbml0b3Ige1xuICAgIC8qKlxuICAgICAqIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW91c2Ugb3ZlciB0aGUgYXR0YWNoZWQgZWxlbW50XG4gICAgICovXG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbW91c2UgaGFzIG1vdmVkIHNpbmNlIGxhc3QgdGltZSB3ZSBsb29rZWRcbiAgICAgKi9cbiAgICBoYXNNb3ZlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiB0cnVlIGlmIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgaW5zaWRlIHRoZSBjb250YWluZXIgXG4gICAgICovXG4gICAgaW5Db250YWluZXI6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBpcyB0aGUgbW91c2UgYnV0dG9uIGRvd24gKGN1cnJlbnRseSBvbmx5IHRyYWNrcyBsZWZ0KVxuICAgICAqL1xuICAgIGlzRG93bjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIElmIGEgZnVsbCBjbGljayBpcyB1cCBhbmQgZG93biwgdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdXBzIGFuZCBkb3ducywgdXNlZnVsIGZvciBkcmFncyBvciBvdGhlciB0aGluZ3MgdGhhdCBtaWdodCBoYXZlIGhhcHBlbmVkIGluIHRoZSBtZWFudGltZVxuICAgICAqL1xuICAgIGhhbGZDbGlja3M6IEhhbGZDbGlja1tdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBQb2ludC5tYWtlKDAsMClcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcyA9IFtdXG4gICAgICAgIC8vIFRPRE86IEFkZCBjbGljayB0cmFja2luZywgZGVwZW5kcyBvbiBob3cgcXVpY2tseSB3ZSBhcmUgcG9sbGluZ1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggdG8gdGhlIHNwZWNpZmljIGVsZW1lbnQgeW91IHdhbnQgdG8gbW9uaXRvciBtb3VzZSByZWxhdGVkIGV2ZW50cyB0b1xuICAgICAqIEBwYXJhbSBlbGVtZW50IHRoZSBwYXJ0aWN1bGFyIG1vdXNlIGV2ZW50XG4gICAgICovXG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IE1vdXNlTW9uaXRvciB7XG4gICAgICAgIC8vIFRPRE86IFdlJ2xsIHJlZ2lzdGVyIGNsaWNrIGhpc3RvcnkgaW4gdGhlIGZ1dHVyZSwgZm9yIG5vdyB3ZSBhcmUganVzdCBkb2luZyBtb3VzZSBvdmVyIGF0IHByZXNlbnRcbiAgICAgICAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIFBvaW50LnNldCh0aGlzLnBvc2l0aW9uLCBlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICB9XG4gICAgICAgIC8vIG1vdXNlIGVudGVycyBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBtb3ZlcyB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcblxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBleGl0cyB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBwYXkgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICAgICAgaWYoZS5idXR0b24gIT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQubWFrZShlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLnB1c2goeyBwb3NpdGlvbiwgaXNEb3duOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGJ1dHRvbiBpcyByYWlzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBwYXkgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICAgICAgaWYoZS5idXR0b24gIT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQubWFrZShlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLnB1c2goeyBwb3NpdGlvbiwgaXNEb3duOiBmYWxzZSB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIG1hcmsgdGhhdCB3ZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIGV2ZW50cyBzaW5jZSBvdXIgbGFzdCBwb2xsIG9mIHN0YXRlIGFuZCBpdCBjYW4gYmUgcmVzZXRcbiAgICAgKi9cbiAgICByZXNldCgpOiB2b2lke1xuICAgICAgICAvLyBieSBkZWZhdWx0IHdlIGhhdmVuJ3QgbW92ZWQgYmVmb3JlXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICAvLyBjbGVhciBvdXQgdGhlIGNsaWNrc1xuICAgICAgICB0aGlzLmhhbGZDbGlja3MubGVuZ3RoID0gMFxuICAgIH1cbn1cblxuZXhwb3J0IHsgTW91c2VNb25pdG9yIH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSwgVGlsZU1hdGVyaWFsIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IGZyb20gJy4vc2hhcGVzL2VsbGlwc2UnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5pbXBvcnQgREVCVUcgZnJvbSAnLi9kZWJ1Z1NldHRpbmdzJ1xuaW1wb3J0IHsgUG9pbnQsIElQb2ludCwgR3JpZERpcmVjdGlvbiB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgICBTRUNUSU9OX0NPVU5UOjEwLFxuICAgIE1BUkdJTlM6IDEwXG59XG5cbmNvbnN0IHBsYWNlQXN0ZXJvaWRDaHVuayA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZWxsaXBzZTogSUVsbGlwc2UpOiB2b2lkID0+IHtcbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0aWxlOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBpZihFbGxpcHNlLmNvbnRhaW5zWFkoZWxsaXBzZSwgeCx5KSl7XG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuY29udGFpbmVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gKiBwcm9ncmVzc2l2ZU1hcEdlbmVyYXRvcih0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbXM6IElSZWN0W10sIGRlYnVnR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiBhbnl7XG5cbiAgICBjb25zdCBjbGVhckRlYnVnID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZihERUJVRy5ERUJVR19EUkFXKXsgLy8gcHJldmVudCB0aGlzIG9wZXJhdGlvbiBpZiB3ZSBhcmUgbm90IGRyYXdpbmdcbiAgICAgICAgICAgIGRlYnVnR3JpZC5mb3JFYWNoKChkZ2MpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBkZ2MuYmFja0NvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHRpbGVHcmlkLmZvckVhY2goKHQpOiB2b2lkID0+IHtcbiAgICAgICAgdC5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICB0LmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB0LmNvbnRhaW5lZCA9IGZhbHNlXG4gICAgICAgIHQuZXhwbG9yZWQgPSB0cnVlIC8vIHJlbW92ZSBsYXRlclxuICAgIH0pXG4gICAgLy95aWVsZFxuXG4gICAgLy8gV2UnbGwgbW92ZSB0aGlzIGludG8gYSAnZ2VuZXJhdGUgYXN0ZXJvaWQnIHNlY3Rpb25cbiAgICBjb25zdCBNQVJHSU5TID0gc2V0dGluZ3MuTUFSR0lOU1xuICAgIGNvbnN0IE1JTl9ESU1FTlNJT04gPSBNYXRoLm1pbih0aWxlR3JpZC53aWR0aCwgdGlsZUdyaWQuaGVpZ2h0KVxuICAgIGNvbnN0IE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUyA9IE1hdGguZmxvb3IoKE1JTl9ESU1FTlNJT04gLSBNQVJHSU5TICogMikvMilcbiAgICBjb25zdCBNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMgPSBNYXRoLmZsb29yKE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUyAqIDAuNylcbiAgICBjb25zdCBhc3Rlcm9pZEVsbGlwc2VzID0gW11cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MuU0VDVElPTl9DT1VOVDsgaSsrKXtcbiAgICAgICAgY29uc3QgeFJhZGl1cyA9IFJBTkRPTS5uZXh0SW50KE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUywgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTKVxuICAgICAgICBjb25zdCB5UmFkaXVzID0gUkFORE9NLm5leHRJbnQoTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTLCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMpXG4gICAgICAgIGNvbnN0IGJpZ1JhZGl1cyA9IE1hdGgubWF4KHhSYWRpdXMsIHlSYWRpdXMpXG4gICAgICAgIGNvbnN0IHggPSBSQU5ET00ubmV4dEludChNQVJHSU5TICsgYmlnUmFkaXVzLCB0aWxlR3JpZC53aWR0aCAtIE1BUkdJTlMgLSBiaWdSYWRpdXMpXG4gICAgICAgIGNvbnN0IHkgPSBSQU5ET00ubmV4dEludChNQVJHSU5TICsgYmlnUmFkaXVzLCB0aWxlR3JpZC5oZWlnaHQgLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBjb25zdCBlbGxpcHNlID0gRWxsaXBzZS5tYWtlKHgseSx4UmFkaXVzLHlSYWRpdXMsIFJBTkRPTS5uZXh0KCkgKiBNYXRoLlBJICogMilcbiAgICAgICAgYXN0ZXJvaWRFbGxpcHNlcy5wdXNoKGVsbGlwc2UpXG4gICAgICAgIHBsYWNlQXN0ZXJvaWRDaHVuayh0aWxlR3JpZCwgZWxsaXBzZSlcbiAgICAgICAgaWYoREVCVUcuREVCVUdfRFJBVyl7XG4gICAgICAgICAgICBjbGVhckRlYnVnKClcbiAgICAgICAgICAgIC8vIFRPRE86IG9wdGltaXplIHRoaXMgc3RldXBcbiAgICAgICAgICAgIGRlYnVnR3JpZC5mb3JFYWNoKChjZWxsOiBJUmVuZGVyQ2VsbCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZihFbGxpcHNlLmNvbnRhaW5zWFkoZWxsaXBzZSwgeCx5KSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuYmFja0NvbG9yID0gQ09MT1JTLkRFQlVHXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG91dGxpbmVDZWxsczogVGlsZVtdID0gW11cbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0aWxlOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAvLyBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICBjb25zdCBuZWlnaGJvcnM9IHRpbGVHcmlkLmdldE5laWdoYm9yc1hZKHgseSlcbiAgICAgICAgaWYodGlsZS5jb250YWluZWQgJiYgbmVpZ2hib3JzLm5laWdoYm9ycy5zb21lKCh0OiBUaWxlKTogYm9vbGVhbiA9PiAhdC5jb250YWluZWQpKXtcbiAgICAgICAgICAgIG91dGxpbmVDZWxscy5wdXNoKHRpbGUpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgb3V0bGluZUVudHJ5UG9pbnQgPSBvdXRsaW5lQ2VsbHNbUkFORE9NLm5leHRJbnQoMCwgb3V0bGluZUNlbGxzLmxlbmd0aCAtIDEpXVxuICAgIFxuICAgIC8vIG1vdmUgdG93YXJkIGNlbnRlciBvZiB0aGUgbWFwLCBpbiBhIGNhcmRpbmFsIGRpcmVjdGlvblxuICAgIGxldCBkaXJlY3Rpb25Ub0J1cnJvdzogR3JpZERpcmVjdGlvbiA9IEdyaWREaXJlY3Rpb24uRG93blxuICAgIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIgLSBvdXRsaW5lRW50cnlQb2ludC54KSAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlclxuICAgICAgICBjb25zdCBkaXN0WSA9IE1hdGguZmxvb3IodGlsZUdyaWQuaGVpZ2h0LzIgLSBvdXRsaW5lRW50cnlQb2ludC55KVxuICAgICAgICAvLyBMZXQncyBnbyBhaGVhZCBhbmQgbW92ZSBpdCB0b3dhcmRzIHRoZSBjZW50ZXJcbiAgICAgICAgaWYoTWF0aC5hYnMoZGlzdFgpID4gTWF0aC5hYnMoZGlzdFkpKXtcbiAgICAgICAgICAgIC8vIHdlIGFyZSBmdXJ0aGVyIGF3YXkgb24gdGhlIHhBeGlzIGZyb20gdGhlIGNlbnRlciwgbGV0J3MgdHJ5IG1vdmluZyB0aGF0IHdheVxuICAgICAgICAgICAgaWYoZGlzdFggPiAwKXtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25Ub0J1cnJvdyA9IEdyaWREaXJlY3Rpb24uUmlnaHRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uVG9CdXJyb3cgPSBHcmlkRGlyZWN0aW9uLkxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCdzIG1vdmUgdmVydGljYWxseVxuICAgICAgICAgICAgaWYoZGlzdFkgPiAwKXtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25Ub0J1cnJvdyA9IEdyaWREaXJlY3Rpb24uRG93blxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25Ub0J1cnJvdyA9IEdyaWREaXJlY3Rpb24uVXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IE1ldGhvZGl6ZSB0aGlzIGJldHRlclxuICAgIGZvcihsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKXtcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IDEwOyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKG91dGxpbmVFbnRyeVBvaW50LnggLSA1ICsgeCwgb3V0bGluZUVudHJ5UG9pbnQueSAtIDUgKyB5KVxuICAgICAgICAgICAgdGlsZS5jb250YWluZWQgPSB0cnVlXG4gICAgICAgICAgICB0aWxlLm1hdGVyaWFsID0gVGlsZU1hdGVyaWFsLk1ldGFsXG4gICAgICAgICAgICBpZih4ID09PSAwIHx8IHggPT09IDkgfHwgeSA9PT0gMCB8fCB5ID09PSA5KXtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgYm9sZCBvdXRsaW5lXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hZGUgYSByZWN0YW5nbGUgdG8gcHVzaCBvdXQgdG8gdGhlIHJlc3Qgb2YgaXRcbiAgICBjb25zdCBhaXJsb2NrID0gUmVjdC5tYWtlKG91dGxpbmVFbnRyeVBvaW50LnggLSA1LCBvdXRsaW5lRW50cnlQb2ludC55IC0gNSwxMCwxMClcbiAgICByb29tcy5wdXNoKGFpcmxvY2spXG4gICAgXG5cbiAgICBjb25zdCBhaXJsb2NrQ2VudGVyID0gUmVjdC5jZW50ZXIoYWlybG9jaylcbiAgICBjbGFzcyBCdXJyb3dlciB7XG4gICAgICAgIGdlbmVyYXRpb246IG51bWJlcjtcbiAgICAgICAgbWF4R2VuZXJhdGlvbjogbnVtYmVyO1xuICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiBHcmlkRGlyZWN0aW9uO1xuICAgICAgICB0dW5uZWxXaWR0aDogbnVtYmVyO1xuICAgICAgICBzdGVwU2l6ZTogbnVtYmVyO1xuICAgICAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgICAgICB0aWxlR3JpZDogR3JpZDxUaWxlPjtcbiAgICAgICAgLy8gYm91bmRzOiBJUmVjdDtcbiAgICAgICAgc3RlcEluZGV4OiBudW1iZXI7XG4gICAgICAgIHRvdGFsU3RlcHM6IG51bWJlcjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihnZW5lcmF0aW9uOiBudW1iZXIsIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBwb3NpdGlvbjogSVBvaW50LCBpbml0aWFsRGlyZWN0aW9uOiBHcmlkRGlyZWN0aW9uKXtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IGdlbmVyYXRpb25cbiAgICAgICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IDEwXG4gICAgICAgICAgICB0aGlzLnN0ZXBJbmRleCA9IDBcbiAgICAgICAgICAgIHRoaXMudG90YWxTdGVwcyA9IDQwXG4gICAgICAgICAgICB0aGlzLnN0ZXBTaXplID0gMVxuICAgICAgICAgICAgdGhpcy50dW5uZWxXaWR0aCA9IDNcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGluaXRpYWxEaXJlY3Rpb25cbiAgICAgICAgICAgIHRoaXMudGlsZUdyaWQgPSB0aWxlR3JpZFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50LmNvcHkocG9zaXRpb24pXG4gICAgICAgICAgICAvLyB0aGlzLmJvdW5kcyA9IFJlY3QubWFrZSgwLDAsMCwwKVxuICAgICAgICB9XG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHRydWUgaWYgZmluaXNoZWQsIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlXG4gICAgICAgIC8vIFRPRE86IEJPVU5EUyBDSEVDSyBPTiBTVEVQU1xuICAgICAgICBzdGVwKCk6IGJvb2xlYW57XG4gICAgICAgICAgICAvLyB3ZSBkbyBub3QgcmVwZWF0IGZpbmFsIHN0ZXBzLCB3ZSBqdXN0IHBvbGl0ZWx5IHJlbWluZCBwZW9wbGUgd2UgYXJlIGRvbmVcbiAgICAgICAgICAgIGlmKHRoaXMuc3RlcEluZGV4ID49IHRoaXMudG90YWxTdGVwcyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhlYXJ0IG9mIHRoZSBmdW5jdGlvbiBnb2VzIGhlcmVcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVHcmlkLmdldFAodGhpcy5wb3NpdGlvbilcbiAgICAgICAgICAgIGlmKERFQlVHLkRFQlVHX0RSQVcpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBkZWJ1Z0dyaWQuZ2V0UCh0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIGQuYmFja0NvbG9yID0gQ09MT1JTLkRFQlVHXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IGNyb3NzRGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5Eb3duXG4gICAgICAgICAgICBjb25zdCBjcm9zc1Bvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT09IEdyaWREaXJlY3Rpb24uVXAgfHwgdGhpcy5jdXJyZW50RGlyZWN0aW9uID09PSBHcmlkRGlyZWN0aW9uLkRvd24pe1xuICAgICAgICAgICAgICAgIFBvaW50LnNldChjcm9zc1Bvc2l0aW9uLCBNYXRoLmNlaWwodGhpcy5wb3NpdGlvbi54IC0gdGhpcy50dW5uZWxXaWR0aC8yKSwgdGhpcy5wb3NpdGlvbi55KVxuICAgICAgICAgICAgICAgIGNyb3NzRGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5SaWdodFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBQb2ludC5zZXQoY3Jvc3NQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbi54LCBNYXRoLmNlaWwodGhpcy5wb3NpdGlvbi55IC0gdGhpcy50dW5uZWxXaWR0aC8yKSlcbiAgICAgICAgICAgICAgICBjcm9zc0RpcmVjdGlvbiA9IEdyaWREaXJlY3Rpb24uRG93blxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudHVubmVsV2lkdGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMudGlsZUdyaWQuZ2V0UChjcm9zc1Bvc2l0aW9uKVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIFBvaW50Lm1vdmUoY3Jvc3NQb3NpdGlvbiwgY3Jvc3NEaXJlY3Rpb24pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG91ciBjZW50cmFsIHBvaW50IGlzIGN1cnJlbnRseSB0cmFja2VkLCBzcHJlYWQgb3V0IGZyb20gdGhpcyBmb3Igbm93XG4gICAgICAgICAgICAvLyB3aGljaCB3YXlzIGRvIHdlIG5lZWQgdG8gZ29cbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gZ29pbmcgdG8gdGhlIGxlZnQgZm9yIG5vdywgYnV0IG1ha2UgdGhhdCBjb250cm9sbGFibGVcbiAgICAgICAgICAgIC8vIG1heWJlIHdlJ2xsIGNvbWUgdXAgd2l0aCBhIGJldHRlciBpZGVhIGxhdGVyLCBidXQgZm9yIG5vdyB0aGF0J3MgaXRcbiAgICAgICAgICAgIFBvaW50Lm1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5jdXJyZW50RGlyZWN0aW9uKVxuICAgICAgICAgICAgdGhpcy5zdGVwSW5kZXggKz0gMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RlcEluZGV4ID49IHRoaXMudG90YWxTdGVwc1xuICAgICAgICB9XG4gICAgICAgIHN0ZXBBbGwoKTogQnVycm93ZXJ7XG4gICAgICAgICAgICB3aGlsZSghdGhpcy5zdGVwKCkpe31cbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIGZpcnN0IHRoaW5nIHRoYXQgd2UgYXJlIGdvaW5nIHRvIGRvIGlzIGhhdmUgaXQgYnVpbGQgc2NyaXB0c1xuICAgIH1cblxuICAgIC8vwqBUaGlzIHdpbGwgYmUgdXNlZCB0byBjb250aW51ZSBmcm9tIHRoZSBvcmlnaW5hbFxuICAgIGNvbnN0IGJ1cnJvd2VyID0gbmV3IEJ1cnJvd2VyKDAsIHRpbGVHcmlkLCBhaXJsb2NrQ2VudGVyLCBHcmlkRGlyZWN0aW9uLkRvd24pLnN0ZXBBbGwoKVxuICAgIGNvbnN0IGJ1cnJvd2VyMiA9IG5ldyBCdXJyb3dlcigxLCB0aWxlR3JpZCwgYnVycm93ZXIucG9zaXRpb24sIEdyaWREaXJlY3Rpb24uUmlnaHQpXG4gICAgYnVycm93ZXIyLnR1bm5lbFdpZHRoID0gNVxuICAgIFBvaW50Lm1vdmUoYnVycm93ZXIyLnBvc2l0aW9uLCBHcmlkRGlyZWN0aW9uLlJpZ2h0KVxuICAgIGJ1cnJvd2VyMi5zdGVwQWxsKClcbn1cblxuZXhwb3J0IHsgcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IgfSIsImxldCBfaWQgPSAwXG5jb25zdCBuZXh0SWQgPSAoKTogbnVtYmVyID0+IF9pZCsrXG5cbi8vIFRPRE86IE1ha2UgbWVzc2FnZXMgZW51bXM/XG5cbi8vIFRPRE86IE1ha2UgYW4gaW50ZXJmYWNlIGZvciB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxudHlwZSBTdWJzY3JpYmVyRnVuY3Rpb24gPSAobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKSA9PiB2b2lkXG5cbmludGVyZmFjZSBTdWJzY3JpYmVyTm9kZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uO1xuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xufVxuXG5cblxuY29uc3QgbWFrZVN1Yk5vZGUgPSAoc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDAsIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbCA9IG51bGwpOiBTdWJzY3JpYmVyTm9kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5leHRJZCgpLFxuICAgICAgICBzdWJGbixcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5leHRcbiAgICB9XG59XG5cbi8vIFRPRE86ID8/IE1ha2UgaXQgc28gYSBzdWJzY3JpYmVyIGxpc3QgY291bGQgYmUgZGVhZmVuZWQvbGlzdGVuP1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgZnVuY3Rpb25zLCBzb3J0ZWQgYnkgcHJpb3JpdHksIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseSB3aGVuIHRoZSBsaXN0IGlzIG5vdGlmaWVkIG9mIGEgbmV3IG1lc3NhZ2VcbiAqL1xuY2xhc3MgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCB7XG4gICAgcm9vdDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIHRhaWw6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGxcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGlzIGxpc3QgdmlhIHRoZSBub3RpZnkgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIG1lc3NhZ2Ugb2JqZWN0IHdoZW5ldmVyIHRoaXMgc3Vic2NyaWJlciBsaXN0IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgaGlnaGVyIHRoZSBwcmlvcml0eSwgdGhlIGVhcmxpZXIgaXQgd2lsbCBydW4sIGlmIGl0IGhhcyB0aGUgc2FtZSBwcmlvcml0eSB0aGUgb25lIHRoYXQgd2FzIGFkZGVkIGZpcnN0IHdpbGwgZmlyZSBmaXJzdFxuICAgICAqL1xuICAgIHN1YnNjcmliZShmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlcntcbiAgICAgICAgLy8gQ2FzZSAjMSBFbXB0eSBTdWJzY3JpYmVyIExpc3RcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5yb290XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UgIzIgV2UgYWxyZWFkeSBoYXZlIHNvbWUgc3Vic2NyaWJlcnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290IC8vIHdlIGtub3cgaXQgc2hvdWxkIGJlIGEgU3Vic2NyaWJlciBOb2RlIGFuZCBub3QgbnVsbCwgYmVjYXVzZSB3ZSBhcmUgaGVyZVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIG5ldyByb290XG4gICAgICAgICAgICBpZihwcmlvcml0eSA8IHRyYXZlbGxlciEucHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdGhpcy5yb290KVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWwgY2FzZSB3ZSBoYXZlIG90aGVyIHRoaW5ncyB0byB3b3JyeSBhYm91dFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUodHJhdmVsbGVyICYmIHRyYXZlbGxlci5uZXh0ICYmIHRyYXZlbGxlci5uZXh0LnByaW9yaXR5ID49IHByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBlaXRoZXIgZm91bmQgYSBub2RlIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiB1cyBvciB3ZSBoYXZlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICAgICB0cmF2ZWxsZXIhLm5leHQgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRyYXZlbGxlciEubmV4dClcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRyYXZlbGxlcnMgd2FzIHRoZSBvbGQgdGFpbFxuICAgICAgICAgICAgICAgIGlmKHRyYXZlbGxlciA9PT0gdGhpcy50YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBuZXh0IG9uZSBpcyB0aGUgbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdHJhdmVsbGVyIS5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsbGVyIS5uZXh0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbW9zdCBpbXBvcmFudCBpbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRvcGljIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBwdWJzdWIgdG8gcmVtaW5kIHRoZSBzdWJzY3JpYmVyIG9mIHRoZSBzcGVjaWZpYyB0b3BpYyBvciBzdWJ0b3BpY1xuICAgICAqL1xuICAgIG5vdGlmeShtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdFxuICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICB0cmF2ZWxsZXIuc3ViRm4obWVzc2FnZSwgdG9waWMpXG4gICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSIsImltcG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IGZyb20gJy4vcHJpb3JpdHlTdWJzY3JpYmVyTGlzdCdcblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogUHVic3ViIGlzIGEgdG9waWMtYmFzZWQgb2JzZXJ2ZXIgcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBkZXNpZ25lZCB0byBhdm9pZCB0aWdodCBjb3VwbGluZyBvZiBjb21wb25lbnRzXG4gKi9cbmNsYXNzIFB1YlN1YiB7XG4gICAgdG9waWNzOiBIYXNoPFByaW9yaXR5U3Vic2NyaWJlckxpc3Q+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9waWNzID0ge31cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBtZXNzYWdlIHRvIGFsbCBzdWJzY3JpYmVycyB0byBhIHRvcGljXG4gICAgICogQHBhcmFtIHRvcGljIFRvcGljIHRvIHVzZSwgaWYgbm9ib2R5IGlzIHN1YnNjcmliZWQgdG8gaXQsIG5vdGhpbmcgaGFwcGVuc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBhY3R1YWwgbWVzc2FnZSB0byBzZW5kLCB0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBidXQgaXQncyBhIHNpbmdsZSB0aGluZ1xuICAgICAqL1xuICAgIHB1Ymxpc2godG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10ubm90aWZ5KG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIHNwZWNpZmljIHRvcGljIHdpdGggYSBnaXZlbiBwcmlvcml0eSwgcmV0dXJucyBhbiBpZCB0aGF0IHlvdSdsbCBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHRvcGljIHRoZSBzcGVjaWZpYyB0b3BpYyB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gZm4gdGhlIGZ1bmN0aW9uIHRvIHJlY2lldmUgdGhlIHNwZWNpZmljIG1lc3NhZ2UgYW5kIHRvcGljIGJlaW5nIGJyb2FkY2FzdGVkIHRvXG4gICAgICogQHBhcmFtIHByaW9yaXR5IHRoZSBwcmlvcml0eSBvZiB0aGUgZnVuY3Rpb24gdG8gc3Vic2NyaWJlIHRvLCBoaWdoZXIgbnVtYmVycyBydW4gZmlyc3QsIHRoZSBkZWZhdWx0IGlzIHplcm8sIG5lZ2F0aXZlIG51bWJlcnMgYXJlIGFsbG93ZWRcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBpZighdGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXSA9IG5ldyBQcmlvcml0eVN1YnNjcmliZXJMaXN0KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b3BpY3NbdG9waWNdLnN1YnNjcmliZShmbiwgcHJpb3JpdHkpXG4gICAgfVxufVxuLy8gT1VSIFVOSVZFUlNBTCBERUZBVUxUIFBVQlNVQlxuY29uc3QgUFVCU1VCID0gbmV3IFB1YlN1YigpXG5leHBvcnQge1BVQlNVQiwgUHViU3VifSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXIgQ2VsbFxuICovXG5pbnRlcmZhY2UgSVJlbmRlckNlbGwge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7IC8vIHRoaXMgc2hvdWxkIG9ubHkgYmUgc3RyaW5nIG9mIGxlbmd0aCAxXG4gICAgZm9yZUNvbG9yOiBzdHJpbmc7XG4gICAgYmFja0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCx5LCBjaGFyYWN0ZXIsIGZvcmVDb2xvciwgYmFja0NvbG9yXG4gICAgfVxufVxuXG5jb25zdCBSZW5kZXJDZWxsID0ge1xuICAgIG1ha2Vcbn1cblxuZXhwb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGx9IiwiaW1wb3J0IHtJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuXG5pbnRlcmZhY2UgSGFzaFN0cjxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmludGVyZmFjZSBIYXNoTnVtPFQ+IHtcbiAgICBba2V5OiBudW1iZXJdOiBUO1xufVxuXG5jb25zdCBjb2RlID0gKGNoYXI6IHN0cmluZyk6IG51bWJlciA9PiBjaGFyLmNoYXJDb2RlQXQoMClcbmNvbnN0IENIQVJBQ1RFUl9IRUxQRVI6IEhhc2hTdHI8c3RyaW5nPiA9IHtcbiAgICBWRVJUSUNBTF9MSU5FOiAn4pSCJyxcbiAgICBIT1JJWk9OVEFMX0xJTkU6ICfilIAnLFxuICAgIENST1NTX0xJTkVTOiAn4pS8JyxcbiAgICBUX0xFRlQ6ICfilKQnLFxuICAgIFRfVVA6ICfilLQnLFxuICAgIFRfUklHSFQ6ICfilJwnLFxuICAgIFRfRE9XTjogJ+KUrCcsXG4gICAgVE9QX1JJR0hUOiAn4pSUJyxcbiAgICBCT1RUT01fUklHSFQ6ICfilIwnLFxuICAgIEJPVFRPTF9MRUZUOiAn4pSQJyxcbiAgICBUT1BfTEVGVDogJ+KUmCdcbn1cblxuY29uc3QgVElMRV9XSURUSCA9IDEwLCBUSUxFX0hFSUdIVCA9IDEwXG5cbmNvbnN0IENPREVfVE9fUkVDVF9IQVNIOiBIYXNoTnVtPElSZWN0PiA9IHt9XG5jb25zdCBzcGFjZUNvZGUgPSAgIGNvZGUoJyAnKVxuY29uc3QgYXRDb2RlID0gICAgICBjb2RlKCdAJylcbmNvbnN0IGFDb2RlID0gICAgICAgY29kZSgnYScpXG5jb25zdCB6Q29kZSA9ICAgICAgIGNvZGUoJ3onKVxuY29uc3QgQUNvZGUgPSAgICAgICBjb2RlKCdBJylcbmNvbnN0IFpDb2RlID0gICAgICAgY29kZSgnWicpXG5cblxuY29uc3QgY3RyaEhlbHBlciA9IChjb2RlOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbY29kZV0gPSBSZWN0Lm1ha2UoeCx5LCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cblxuLy8gV2Ugd2lsbCBmaWxsIGluIHRoZSBvdGhlciBjaGFyYWN0ZXJzIGFzIG5lY2Vzc2FyeVxuQ09ERV9UT19SRUNUX0hBU0hbc3BhY2VDb2RlXSA9IFJlY3QubWFrZSgwLCAwLCAxMCwgMTApXG5DT0RFX1RPX1JFQ1RfSEFTSFthdENvZGVdID0gUmVjdC5tYWtlKDAsIDEwLCAxMCwgMTApXG5mb3IobGV0IGkgPSBBQ29kZTsgaSA8PSBaQ29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIEFDb2RlKSAqIDEwLCAzMCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5mb3IobGV0IGkgPSBhQ29kZTsgaSA8PSB6Q29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIGFDb2RlKSAqIDEwLCA0MCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG4vLyBmb3IgYnJldml0aWVzIHNha2VcbmNvbnN0IENIID0gQ0hBUkFDVEVSX0hFTFBFUlxuY3RyaEhlbHBlcihjb2RlKENILlZFUlRJQ0FMX0xJTkUpLCAxNDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guSE9SSVpPTlRBTF9MSU5FKSwgMTUwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkNST1NTX0xJTkVTKSwgMTYwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfTEVGVCksIDE3MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1VQKSwgMTgwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfUklHSFQpLCAxOTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9ET1dOKSwgMjAwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9SSUdIVCksIDIxMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT01fUklHSFQpLCAyMjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9MX0xFRlQpLCAyMzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX0xFRlQpLCAyNDAsMTApXG5cblxuZnVuY3Rpb24gZHJhd1NlY3Rpb24oY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHRpbGVzaGVldDogYW55LCBzcmNSZWN0OiBJUmVjdCwgZGVzdFJlY3Q6IElSZWN0LCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiB2b2lke1xuICAgIGN0eC5jbGVhclJlY3QoZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZHJhd0ltYWdlKHRpbGVzaGVldCwgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qud2lkdGgsIHNyY1JlY3QuaGVpZ2h0LCBkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAneG9yJ1xuICAgIGN0eC5maWxsU3R5bGU9Zm9yZUNvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3ZlcidcbiAgICBjdHguZmlsbFN0eWxlPWJhY2tDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcidcbn1cblxuY29uc3QgZHJhd1N0cmluZ1RvR3JpZCA9IChncmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgbWVzc2FnZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGxldCBjdXJyZW50WCA9IHhcbiAgICBsZXQgY3VycmVudFkgPSB5XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBtZXNzYWdlW2ldXG4gICAgICAgIGlmKGdyaWQuaW5Cb3VuZHNYWShjdXJyZW50WCwgY3VycmVudFkpICYmIGxldHRlciAhPSAnXFxuJyl7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBncmlkLmdldFhZKGN1cnJlbnRYLGN1cnJlbnRZKVxuICAgICAgICAgICAgdGFyZ2V0LmNoYXJhY3RlciA9IGxldHRlclxuICAgICAgICAgICAgdGFyZ2V0LmJhY2tDb2xvciA9IENPTE9SUy53aGl0ZVxuICAgICAgICAgICAgdGFyZ2V0LmZvcmVDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICB9XG4gICAgICAgIGlmKGxldHRlciAhPT0gJ1xcbicpe1xuICAgICAgICAgICAgY3VycmVudFgrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFkrK1xuICAgICAgICAgICAgY3VycmVudFggPSB4XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCAgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgQ0hBUkFDVEVSX0hFTFBFUiwgY29kZSwgZHJhd1NlY3Rpb24sIGRyYXdTdHJpbmdUb0dyaWQgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlLCBUaWxlTWF0ZXJpYWwgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5pbXBvcnQgeyBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgREVCVUcgZnJvbSAnLi9kZWJ1Z1NldHRpbmdzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyVG9HcmlkID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCBlbnRpdGllczogRW50aXR5W10sIHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBjYW1lcmFGcmFtZTogSVJlY3QsIGRlYnVnR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICAvLyByZW5kZXJHcmlkIGlzIGluIFNDUkVFTiBjb29yZGluYXRlcywgYW5kIHdpbGwgaGF2ZSBpdCdzIFhZIGlnbm9yZWQgZm9yIG91ciBwdXJwb3Nlc1xuICAgIC8vIHRpbGVHcmlkLCBlbnRpdGllcyBhbmQgZm92R3JpZCBhcmUgaW4gV09STEQgY29vcmRpbmF0ZXMgYW5kIHdpbGwgaGF2ZSB0aGVpciBYWSBhbmQgeSBpZ25vcmVkIGZvciBub3dcblxuICAgIC8vIGNhbWVyYSBhbmQgcmVuZGVyR3JpZCBib3RoIHN0YXJ0IGF0IHRoZSB0b3BMZWZ0IGluIHRlcm1zIG9mIGFsaWduaW5nIHRoZSB0d29cbiAgICAvLyBJIGFsbW9zdCBmZWVsIGxpa2Ugd2Ugc2hvdWxkIHRpZ2h0ZW4gdGhlIGNvdXBsaW5nLCBidXQgb2ggd2VsbCwgbGV0J3MgYWN0dWFsbHkgZG8gaXRcbiAgICBjb25zdCBzY3JlZW5QID0gUG9pbnQubWFrZSgwLDApXG4gICAgY29uc3Qgd29ybGRQID0gUG9pbnQubWFrZSgwLDApXG4gICAgZm9yKGxldCByZWxDYW1lcmFZID0gMDsgcmVsQ2FtZXJhWSA8IGNhbWVyYUZyYW1lLmhlaWdodDsgcmVsQ2FtZXJhWSsrKXtcbiAgICAgICAgZm9yKGxldCByZWxDYW1lcmFYID0gMDsgcmVsQ2FtZXJhWCA8IGNhbWVyYUZyYW1lLndpZHRoOyByZWxDYW1lcmFYKyspe1xuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSByZW5kZXJHcmlkIGFuZCB0aGUgY2FtZXJhc1xuICAgICAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIHJlbENhbWVyYVgsIHJlbENhbWVyYVkpXG4gICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHRpbGVHcmlkLCBmb3ZHcmlkLCBhbmQgZW50aXRpZXNcbiAgICAgICAgICAgIFBvaW50LnNldCh3b3JsZFAsIHNjcmVlblAueCArIGNhbWVyYUZyYW1lLngsIHNjcmVlblAueSArIGNhbWVyYUZyYW1lLnkpXG5cbiAgICAgICAgICAgIC8vIExldCdzIGRvIHNvbWUgYm91bmRzIGNoZWNraW5nXG4gICAgICAgICAgICAvLyB3ZSBrbm93IHRoZXNlIHBvaXRucyBhcmUgYWx3YXlzIGluIGNhbWVyYXMsIHNvIG5ldmVyIG5lZWQgdG8gY2hlY2sgdGhhdFxuICAgICAgICAgICAgLy8gd2UgYXJlIGdvaW5nIHRvIG9mZmxvYWQgdGhlIGNhc2Ugb2YgY2hlY2tpbmcgaWYgdGhlIHJlbmRlckdyaWQgY2FuIGZpdCB0aGUgY2FtZXJhU2l6ZSBmb3Igbm93XG4gICAgICAgICAgICAvLyBzbyBmb3Igbm93IGp1c3QgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSBvZiB0aGUgdGlsZUdyaWQsIHdoaWNoIGN1cnJlbnRseSBzaG91bGQgYmUgdGhlIHNhbWUgZGltZW5zaW9ucyBhcyB0aGUgZm92R3JpZCwgdGhvdWdoIHRoYXQgaXMgYm91bmQgdG8gY2hhbmdlIGFzIHdlIHRyeSBhbmQgb3B0aW1pemUgdGhpbmdzXG4gICAgICAgICAgICAvLyBzb29vb29vLCBsZXQncyBjaGVjayBpZiB3ZSBhcmUgaW5zaWRlIHRoZSB0aWxlR3JpZFxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ2VsbCAgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGxldCBpc0xpdCA9IGZvdkNlbGwudmlzaWJsZSAvLyBpdCdzIGxpdCBmYW0sIHdlbGwsIHNvbWUgb2YgdGhlIHRpbWVcbiAgICAgICAgICAgIGxldCBpbkJvdW5kcyA9IHRpbGVHcmlkLmluQm91bmRzWFkod29ybGRQLngsIHdvcmxkUC55KVxuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmVkIG91ciBleHBsb3JhdGlvbiBzdGF0ZVxuICAgICAgICAgICAgLy8gVGhpcyBoYXMgYmV0dGVyIHJ1bGVzIHRvIGJlIGZpZ3VyZWQgb3V0XG4gICAgICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9ICcnXG4gICAgICAgICAgICBpZighaW5Cb3VuZHMpeyAvLyB0cmVhdCBldmVyeXRoaW5nIG91dHNpZGUgb2YgdGhlIGJvdW5kcyBhcyBleHBsb3JlZCBJIHN1cHBvc2U/XG4gICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9vdXRzaWRlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19vdXRzaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkod29ybGRQLngsIHdvcmxkUC55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmV4cGxvcmVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEFERCBET09SU1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1dhbGwgPSB0aWxlLmJsb2NrTW92ZSAmJiB0aWxlLmJsb2NrU2lnaHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91bmQgPSAhaXNXYWxsICYmIHRpbGUuY29udGFpbmVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU3BhY2UgPSAhaXNXYWxsICYmICF0aWxlLmNvbnRhaW5lZFxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbGUubWF0ZXJpYWwgPT09IFRpbGVNYXRlcmlhbC5NZXRhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NwYWNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X291dHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX291dHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNHcm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubWV0YWwubGlnaHRHcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5kYXJrR3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzV2FsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5saWdodFdhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5kYXJrV2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU3BhY2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc0dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9ncm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc1dhbGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eTogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgICAgIFBvaW50LnNldChzY3JlZW5QLCBlbnRpdHkueCAtIGNhbWVyYUZyYW1lLngsIGVudGl0eS55IC0gY2FtZXJhRnJhbWUueSlcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBpbnNpZGUgb2YgdGhlIGNhbWVyYSBib3VuZHNcbiAgICAgICAgaWYoY2FtZXJhRnJhbWUueCA8PSBlbnRpdHkueCAmJiBlbnRpdHkueCA8PSBjYW1lcmFGcmFtZS54ICsgY2FtZXJhRnJhbWUud2lkdGggLSAxICYmXG4gICAgICAgICAgICBjYW1lcmFGcmFtZS55IDw9IGVudGl0eS55ICYmIGVudGl0eS55IDw9IGNhbWVyYUZyYW1lLnkgKyBjYW1lcmFGcmFtZS5oZWlnaHQgLSAxKXtcbiAgICAgICAgICAgIGNvbnN0IHJDZWxsOiBJUmVuZGVyQ2VsbCA9IHJlbmRlckdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbDogRk9WQ2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgaWYoZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICByQ2VsbC5mb3JlQ29sb3IgPSBlbnRpdHkuY29sb3JcbiAgICAgICAgICAgICAgICByQ2VsbC5jaGFyYWN0ZXIgPSBlbnRpdHkuY2hhcmFjdGVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBpZihERUJVRy5ERUJVR19EUkFXKXtcbiAgICAgICAgZm9yKGxldCByZWxDYW1lcmFZID0gMDsgcmVsQ2FtZXJhWSA8IGNhbWVyYUZyYW1lLmhlaWdodDsgcmVsQ2FtZXJhWSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHJlbmRlckdyaWQgYW5kIHRoZSBjYW1lcmFzXG4gICAgICAgICAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIHJlbENhbWVyYVgsIHJlbENhbWVyYVkpXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICAgICAgUG9pbnQuc2V0KHdvcmxkUCwgc2NyZWVuUC54ICsgY2FtZXJhRnJhbWUueCwgc2NyZWVuUC55ICsgY2FtZXJhRnJhbWUueSlcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICAgICAgaWYoZGVidWdHcmlkLmluQm91bmRzWFkod29ybGRQLngsIHdvcmxkUC55KSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlYnVnQ2VsbCA9IGRlYnVnR3JpZC5nZXRQKHdvcmxkUClcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdDZWxsLmJhY2tDb2xvciAhPSBDT0xPUlMuYmxhY2spe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBkZWJ1Z0NlbGwuYmFja0NvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9IGRlYnVnQ2VsbC5jaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuZm9yZUNvbG9yID0gZGVidWdDZWxsLmZvcmVDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gV0FSTklORzogSEVSRSBUSEVSRSBCRSBEUkFHT05TLCAob3IgaW4gdGhpcyBjYXNlLCBhIGxvdCBvZiBjb2RlIEkgZG9uJ3R1bmRlcnN0YW5kKVxuXG4vLyBXRSBPTkxZIFdBTlQgT05FIFJORyBHRU5FUkFUT1IgQkVDQVVTRSBXRSBBTFdBWVMgV0FOVCBBIFNFRUQgRk9SIElUXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MjEyOTUvc2VlZGluZy10aGUtcmFuZG9tLW51bWJlci1nZW5lcmF0b3ItaW4tamF2YXNjcmlwdFxuXG4vLyBIYXNoaW5nIGZ1bmN0aW9uIGZvciB0YWtpbmcgc2ltcGxlIHN0cmluZyBhbmQgY3JlYXRpbmcgYmV0dGVyIFwidHJ1ZVwiIHNlZWRzXG4vLyBJIEhBVkUgTk8gSURFQSBXSEFUIFRIRSBNQUdJQyBOVUJNRVJTIEFSRSBGT1JcbmZ1bmN0aW9uIHhtdXIzKHN0cjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCBoID0gMTc3OTAzMzcwMyBeIHN0ci5sZW5ndGggLy8gYml0d2lzZSBvciB0aGUgc3RyaW5nIHdpdGggdGhpcyByYW5kb20gdGhpbmdcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gc3RyLmNoYXJDb2RlQXQoaSksIDM0MzI5MTgzNTMpXG4gICAgICAgIGggPSBoIDw8IDEzIHwgaCA+Pj4gMTlcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxNiwgMjI0NjgyMjUwNylcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTMsIDMyNjY0ODk5MDkpXG4gICAgICAgIHJldHVybiAoaCBePSBoID4+PiAxNikgPj4+IDBcbiAgICB9XG59XG5cbnR5cGUgSVJhbmRvbSA9KCkgPT4gbnVtYmVyO1xuXG4vLyBHRU5FUkFUT1JTXG5mdW5jdGlvbiBzZmMzMihhOiBhbnksIGI6IGFueSwgYzogYW55LCBkOiBhbnkpOiAoRnVuY3Rpb24pe1xuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGEgPj4+PSAwOyBiPj4+PSAwOyBjID4+Pj0gMDsgZCA+Pj49IDBcbiAgICAgICAgbGV0IHQgPSAoYSArIGIpIHwgMFxuICAgICAgICBhID0gYiBeIGIgPj4+IDlcbiAgICAgICAgYiA9IGMgKyAoYyA8PCAzKSB8IDBcbiAgICAgICAgYyA9IChjIDw8IDIxIHwgYyA+Pj4gMTEpXG4gICAgICAgIGQgPSBkICsgMSB8IDBcbiAgICAgICAgdCA9IHQgKyBkIHwgMFxuICAgICAgICBjID0gYyArIHQgfCAwXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHQgPj4+IDApIC8gNDI5NDk2NzI5NlxuICAgIH1cbn1cblxuLy8gT05FIExJTkVSIENVUlJFTlRMWSBOT1QgSU4gVVNFXG4vLyBjb25zdCBMQ0c9IChzOiBhbnkpOiBGdW5jdGlvbj0+KCk6IGFueT0+KDIqKjMxLTEmKHM9TWF0aC5pbXVsKDQ4MjcxLHMpKSkvMioqMzE7XG5cbmNvbnN0IFJBTkRPTSA9IHtcbiAgICBfZ2VuZXJhdG9yOiAoKCk6IGFueSA9PiB7fSkgYXMgRnVuY3Rpb24sXG4gICAgc2VlZDogZnVuY3Rpb24oc2VlZFN0cjogc3RyaW5nID0gYnRvYShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpICk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB4bXVyMyhzZWVkU3RyKVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3IgPSBzZmMzMihzZWVkKCksIHNlZWQoKSwgc2VlZCgpLCBzZWVkKCkpXG4gICAgICAgIHJldHVybiBzZWVkU3RyXG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpOiBhbnkge1xuICAgICAgICBpZih0aGlzLl9nZW5lcmF0b3IgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5zZWVkKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdG9yKClcbiAgICB9LFxuICAgIG5leHRJbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLm5leHQoKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgICB9XG59XG5cbmV4cG9ydCB7IFJBTkRPTSB9IiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9yZWN0J1xuXG4vKipcbiAqIFggYW5kIFkgYXJlIHRoZSBDRU5URVIgb2YgdGhlIGVsbGlwc2UgKHVubGlrZSB0aGUgdG9wIGxlZnQgZm9yIElSZWN0KVxuICovXG5pbnRlcmZhY2UgSUVsbGlwc2UgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHhSYWRpdXM6IG51bWJlcjtcbiAgICB5UmFkaXVzOiBudW1iZXI7XG4gICAgcm90YXRpb246IG51bWJlcjtcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgeFJhZGl1czogbnVtYmVyLCB5UmFkaXVzOiBudW1iZXIsIHJvdGF0aW9uOiBudW1iZXIgPSAwKTogSUVsbGlwc2UgPT4ge1xuICAgIHJldHVybiB7eCwgeSwgeFJhZGl1cywgeVJhZGl1cywgcm90YXRpb259XG59XG5cblxuLyoqXG4gKiBDb250YWlucyBYWVxuICogQHBhcmFtIGVsbGlwc2UgXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBjb250YWluc1hZID0gKGVsbGlwc2U6IElFbGxpcHNlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGVsbGlwc2Uucm90YXRpb24pLCBzaW4gPSBNYXRoLnNpbihlbGxpcHNlLnJvdGF0aW9uKVxuICAgIGNvbnN0IGR4ID0gKHggLSBlbGxpcHNlLngpLCBkeSA9ICh5IC0gZWxsaXBzZS55KVxuICAgIGNvbnN0IHRkeCA9IGNvcyAqIGR4ICsgc2luICogZHksIHRkeSA9IHNpbiAqIGR4IC0gY29zICogZHlcblxuICAgIHJldHVybiAoICh0ZHggKiB0ZHgpIC8gKGVsbGlwc2UueFJhZGl1cyogZWxsaXBzZS54UmFkaXVzKSArICh0ZHkgKiB0ZHkpLyhlbGxpcHNlLnlSYWRpdXMgKiBlbGxpcHNlLnlSYWRpdXMpICkgPCAxXG59XG4vKipcbiAqIERvZXMgdGhlIGVsbGlwc2UgY29udGFpbiB0aGUgcG9pbnRcbiAqIEBwYXJhbSBlbGxpcHNlIFxuICogQHBhcmFtIHBvaW50IFxuICovXG5jb25zdCBjb250YWluc1BvaW50ID0gKGVsbGlwc2U6IElFbGxpcHNlLCBwb2ludDogSVBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zWFkoZWxsaXBzZSwgcG9pbnQueCwgcG9pbnQueSlcbn1cblxuLy8gXG4vKipcbiAqIEFyZSBlbm91Z2ggY29ybmVycyBpbnNpZGUgdGhlIFJlY3QgdG8gYmUgY29uc2lkZXJlZCBpbnNpZGVcbiAqIEBwYXJhbSBlbGxpcHNlIGVsbGlwc2VcbiAqIEBwYXJhbSByZWN0IHJlY3QgdG8gdGVzdCBpZiBpdCdzIGVkZ2VzIGFyZSBpbnNpZGUgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB0aHJlc2hvbGQgaG93IG1hbnkgY29ybmVycyBtdXN0IGJlIGluc2lkZSB0byBjb3VudCwgZGVmYXVsdHMgdG8gNFxuICovXG5jb25zdCBjb250YWluc1JlY3RDb3JuZXJzID0gKGVsbGlwc2U6IElFbGxpcHNlLCByZWN0OiBJUmVjdCwgdGhyZXNob2xkOiBudW1iZXIgPSA0KTogYm9vbGVhbiA9PiB7XG4gICAgbGV0IGNvcm5lcnNJbiA9IDBcbiAgICBjb25zdCBjb3JuZXJzID0gUmVjdC5jb3JuZXJzKHJlY3QpXG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLnRyKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy50bCkpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMuYmwpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLmJyKSl7IGNvcm5lcnNJbisrfVxuICAgIHJldHVybiBjb3JuZXJzSW4gPj0gdGhyZXNob2xkXG59XG5cbmNvbnN0IEVsbGlwc2UgPSB7XG4gICAgbWFrZSxcbiAgICBjb250YWluc1hZLFxuICAgIGNvbnRhaW5zUG9pbnQsXG4gICAgY29udGFpbnNSZWN0Q29ybmVyc1xufVxuXG5leHBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmtpbmcgd2l0aCBhIDJEIFBvaW50XG4gKi9cbmludGVyZmFjZSBJUG9pbnQgeyAgXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIZWxwZnVsIGVudW0gZm9yIGRpcmVjdGlvbnMgaW4gYSBncmlkLFxuICogVXA6IC15LCBEb3duOiAreSwgTGVmdDogLXgsIFJpZ2h0OiAreFxuICovXG5lbnVtIEdyaWREaXJlY3Rpb24ge1xuICAgIFVwLFxuICAgIERvd24sXG4gICAgTGVmdCxcbiAgICBSaWdodFxufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb2ludFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIHt4LHl9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBwb2ludCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGJvdGggb2YgdGhlbSB0b2dldGhlciwgaWYgeW91IHdhbnQgdG8gYWRkIGEgcG9pbnQgVE8gYW5vdGhlciBwb2ludCwgdXNlIGFkZFRvXG4gKiBAcGFyYW0gYSBGaXJzdCBQb2ludCwgdW5tb2RpZmllZFxuICogQHBhcmFtIGIgU2Vjb25kIFBvaW50LCB1bm1vZGlmaWVkXG4gKi9cbmNvbnN0IGFkZCA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UoYS54ICsgYi54LCBhLnkgKyBiLnkpXG59XG5cbi8qKlxuICogQSB1dGl0aWx5IHRvIG1vdmUgaW4gYSBkaXJlY3Rpb24sIGFsbG93cyBmb3IgdmFyaWFiaWxpdHkgaW4gdGhlIGRpcmVjdGlvbiB3aXRob3V0IGhhdmluZyB0byByZXNvcnQgdG8gbW9kaWZ5aW5nIHRoZSB4IGFuZCB5IGNvb3JpbmRhdGVzIGluZGl2aWR1YWxseVxuICogQHBhcmFtIHBvaW50IFBvaW50IHRvIGJlIG1vdmVkLCB3aWxsIGJlIHRoZSByZXR1cm4gdmFsdWVcbiAqIEBwYXJhbSBkaXJlY3Rpb24sIHRoZSBHcmlkIERpcmVjdGlvbiB5b3Ugd2FudCB0byBtb3ZlIGluXG4gKiBAcGFyYW0gZGlzdGFuY2UsIG9wdGlvbmFsIGRlZmF1bHRzIHRvIDEsIGhvdyBmYXIgeW91IHdhbnQgdGhlIHBvaW50IHRvIG1vdmUgXG4gKi9cbmNvbnN0IG1vdmUgPSAocG9pbnQ6IElQb2ludCwgZGlyZWN0aW9uOiBHcmlkRGlyZWN0aW9uLCBkaXN0YW5jZTogbnVtYmVyID0gMSk6IElQb2ludCA9PiB7XG4gICAgaWYoZGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5MZWZ0KXtcbiAgICAgICAgcG9pbnQueCAtPSBkaXN0YW5jZVxuICAgIH1cbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLlJpZ2h0KXtcbiAgICAgICAgcG9pbnQueCArPSBkaXN0YW5jZVxuICAgIH1cbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLlVwKXtcbiAgICAgICAgcG9pbnQueSAtPSBkaXN0YW5jZVxuICAgIH1cbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLkRvd24pe1xuICAgICAgICBwb2ludC55ICs9IGRpc3RhbmNlXG4gICAgfVxuICAgIHJldHVybiBwb2ludFxufVxuXG4vKipcbiAqIEFkZCB0aGUgdmFsdWUgb2YgUG9pbnQgYSB0byBQb2ludCBiXG4gKiBAcGFyYW0gYSBUaGUgcG9pbnQgdGhhdCBjaGFuZ2VzLCB3aWxsIGhhdmUgYiBhZGRlZCB0byBpdFxuICogQHBhcmFtIGIgVGhlIHBvaW50IHdob3NlIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBvdGhlciwgaXQgaXMgdW5tb2RpZmllZCBpdHNlbGZcbiAqL1xuY29uc3QgYWRkVG8gPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIGEueCArPSBiLnhcbiAgICBhLnkgKz0gYi55XG4gICAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlcyBvZiBhIHBvaW50IHdpdGggeCBhbmQgeSB2YWx1ZXMsIHJldHVybnMgdGhlIG5vdyBtb2RpZmllZCBwb2ludFxuICogQHBhcmFtIHBvaW50IHBvaW50IHRvIGJlIG1vZGlmaWVkXG4gKiBAcGFyYW0geCBuZXcgeCB2YWx1ZVxuICogQHBhcmFtIHkgbmV3IHkgdmFsdWVcbiAqL1xuY29uc3Qgc2V0ID0gKHBvaW50OiBJUG9pbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICBwb2ludC54ID0geFxuICAgIHBvaW50LnkgPSB5XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQ29weSBhIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgUG9pbnQgdGhhdCB3aWxsIGJlIGNvcGllZFxuICovXG5jb25zdCBjb3B5ID0gKHBvaW50OiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBtZWFudCB0byB3b3JrIHdpdGggdGhpbmdzIHRoYXQgaGF2ZSB0aGUgSVBvaW50IGludGVyZmFjZVxuICovXG5jb25zdCBQb2ludCA9IHtcbiAgICBtYWtlLFxuICAgIG1vdmUsXG4gICAgYWRkLFxuICAgIGFkZFRvLFxuICAgIHNldCxcbiAgICBjb3B5XG59XG5cbmV4cG9ydCB7SVBvaW50LCBQb2ludCwgR3JpZERpcmVjdGlvbn0iLCJpbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vcG9pbnQnXG5pbnRlcmZhY2UgSVJlY3QgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdFNpZGVzIHtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0Q29ybmVycyB7XG4gICAgdGw6IElQb2ludDtcbiAgICB0cjogSVBvaW50O1xuICAgIGJsOiBJUG9pbnQ7XG4gICAgYnI6IElQb2ludDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWN0YW5nbGVcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKiBAcGFyYW0gd2lkdGggXG4gKiBAcGFyYW0gaGVpZ2h0IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgfVxufVxuXG5jb25zdCBzZXQgPSAocjogSVJlY3QsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByLnggPSB4XG4gICAgci55ID0geVxuICAgIHIud2lkdGggPSB3aWR0aFxuICAgIHIuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgcmV0dXJuIHJcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHVuaXQgdmFsdWUgb2YgdGhlIHNpZGVzIG9mIHRoZSByZWN0YW5nbGUsIGxlZnQgYW5kIHJpZ2h0IHJldHVybiB4IGNvb3JkaW5hdGVzLCB0b3AgYW5kIGJvdHRvbSBpbmNsdWRlIHkgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSByZWN0IHJlY3RhbmdsZSB1c2VkXG4gKi9cbmNvbnN0IHNpZGVzID0gKHJlY3Q6IElSZWN0KTogSVJlY3RTaWRlcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgICB0b3A6IHJlY3QueSxcbiAgICAgICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgICB9XG59XG5jb25zdCBjb3JuZXJzID0gKHJlY3Q6IElSZWN0KTogSVJlY3RDb3JuZXJzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0bDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSksXG4gICAgICAgIHRyOiBQb2ludC5tYWtlKHJlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSksXG4gICAgICAgIGJsOiBQb2ludC5tYWtlKHJlY3QueCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgICAgICBicjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkgKyByZWN0LmhlaWdodCksXG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIHBvaW50OiBOT1RFOiBUaGlzIGZpbmRzIHRoZSBJTlRFR0VSIGNlbnRlciwgY29vcmRpbmF0ZXMgYXJlIHRydW5jYXRlZFxuICogQHBhcmFtIHJlY3QgVGhlIHJlY3RhbmdsZSB3ZSBhcmUgZmluZGluZyB0aGUgY2VudGVyIG9mXG4gKi9cbmNvbnN0IGNlbnRlciA9IChyZWN0OiBJUmVjdCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIFBvaW50Lm1ha2UoTWF0aC5mbG9vcihyZWN0LnggKyByZWN0LndpZHRoLzIpLCBNYXRoLmZsb29yKHJlY3QueSArIHJlY3QuaGVpZ2h0LzIpKVxufVxuXG4vLyBPUFRJTUlaRTogRG9uJ3QgY2FsbCBzaWRlcywganVzdCB1c2UgdGhlIHJhdyBudW1iZXJzIGFuZCBhZGRpdGlvblxuY29uc3QgaW50ZXJzZWN0cyA9IChhOiBJUmVjdCwgYjogSVJlY3QpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBhU2lkZXMgPSBzaWRlcyhhKVxuICAgIGNvbnN0IGJTaWRlcyA9IHNpZGVzKGIpXG4gICAgcmV0dXJuIGFTaWRlcy5sZWZ0IDw9IGJTaWRlcy5yaWdodCAmJiBhU2lkZXMucmlnaHQgPj0gYlNpZGVzLmxlZnQgJiYgXG4gICAgICAgIGFTaWRlcy50b3AgPD0gYlNpZGVzLmJvdHRvbSAmJiBhU2lkZXMuYm90dG9tID49IGJTaWRlcy50b3BcblxuICAgICAgICBcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmlwdWxhdGUgcmVjdGFuZ2xlc1xuICovXG5jb25zdCBSZWN0ID0ge1xuICAgIG1ha2UsXG4gICAgc2V0LFxuICAgIHNpZGVzLFxuICAgIGNvcm5lcnMsXG4gICAgY2VudGVyLFxuICAgIGludGVyc2VjdHNcbn1cblxuZXhwb3J0IHtJUmVjdCwgUmVjdH1cbiIsIi8vIEkgZ3Vlc3MgZXZlcnl0aGluZyB3b3VsZCBuZWVkIGl0J3Mgb3duIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLi4uIGdyb3NzXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGxvY2F0aW9ucyBvbiB0aGUgYm9hcmQsIGV2ZW50dWFsbHkgd2Ugd2lsbCBwcm9iYWJseSBtb3ZlIHRoaXMgaW50byBpdHMgb3duIEVDUyBzeXN0ZW1cbiAqL1xuZW51bSBUaWxlTWF0ZXJpYWwge1xuICAgIEFzdGVyb2lkLFxuICAgIE1ldGFsXG59XG5jbGFzcyBUaWxlIHtcbiAgICAvKipcbiAgICAgKiBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBibG9ja01vdmU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRG9lcyB0aGlzIHRpbGUgYmxvY2sgbGluZSBvZiBzaWdodFxuICAgICAqL1xuICAgIGJsb2NrU2lnaHQ6IGJvb2xlYW47XG5cbiAgICBleHBsb3JlZDogYm9vbGVhbjtcblxuICAgIGNvbnRhaW5lZDogYm9vbGVhbjsgLy8gbW9kZWxzIGlmIHRoaXMgdGhpbmcgaGFzIGEgZmxvb3IgYW5kIGNlaWxpbmcsIChvciwgaW4gdW5pdmVyc2UsIHN0dWZmIHN1cnJvdW5kaW5nIGl0IG9uIHRoZSB6LWF4aXMpXG5cbiAgICBtYXRlcmlhbDogVGlsZU1hdGVyaWFsO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIHRoaXMuZXhwbG9yZWQgPSBmYWxzZVxuICAgICAgICBpZihibG9ja1NpZ2h0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tNb3ZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja1NpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZWQgPSB0cnVlXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBUaWxlTWF0ZXJpYWwuQXN0ZXJvaWRcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgeyBUaWxlLCBUaWxlTWF0ZXJpYWwgfSJdLCJzb3VyY2VSb290IjoiIn0=