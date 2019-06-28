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
/* harmony import */ var _progressiveMapGenerator2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progressiveMapGenerator2 */ "./client/src/progressiveMapGenerator2.ts");




















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
        visible: false // I don't necessarily want visibility turned on by default
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
const levelIterator = Object(_progressiveMapGenerator2__WEBPACK_IMPORTED_MODULE_19__["progressiveMapGenerator"])(tileGrid, rooms, debugGrid);
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
    DISABLE_FOV: true,
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

/***/ "./client/src/progressiveMapGenerator2.ts":
/*!************************************************!*\
  !*** ./client/src/progressiveMapGenerator2.ts ***!
  \************************************************/
/*! exports provided: progressiveMapGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressiveMapGenerator", function() { return progressiveMapGenerator; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");



const MAX_LEAF_SIZE = 100;
const MIN_LEAF_SIZE = 10;
class Leaf {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.left = null;
        this.right = null;
        this.room = null;
        this.halls = null;
    }
    hasSplit() {
        if (this.left != null || this.right != null) {
            // we've already split, cut it out!
            return true;
        }
        return false;
    }
    split() {
        if (this.hasSplit()) {
            return false;
        }
        let splitHorizontally = _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() < 0.5;
        if (this.width > this.height && this.width / this.height > 1.25) {
            splitHorizontally = false;
        }
        else if (this.height > this.width && this.height / this.width >= 1.25) {
            splitHorizontally = true;
        }
        const max = (splitHorizontally ? this.height : this.width) - MIN_LEAF_SIZE;
        if (max <= MIN_LEAF_SIZE) {
            // to smol, don't split any more
            return false;
        }
        // find a split, calculated randomly
        const split = _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(MIN_LEAF_SIZE, max);
        if (splitHorizontally) {
            this.left = new Leaf(this.x, this.y, this.width, split);
            this.right = new Leaf(this.x, this.y + split, this.width, this.height - split);
        }
        else {
            this.left = new Leaf(this.x, this.y, split, this.height);
            this.right = new Leaf(this.x + split, this.y, this.width - split, this.height);
        }
        return true;
    }
    createRooms() {
        if (this.left != null || this.right != null) {
            if (this.left != null || this.right != null) {
                const left = this.left;
                left.createRooms();
            }
            if (this.right != null || this.right != null) {
                const right = this.right;
                right.createRooms();
            }
            if (this.left != null && this.right != null) {
                const leftRoom = this.left.getRoom();
                const rightRoom = this.right.getRoom();
                if (leftRoom != null && rightRoom != null) {
                    this.createHall(leftRoom, rightRoom);
                }
            }
        }
        else {
            const roomSize = _shapes_point__WEBPACK_IMPORTED_MODULE_2__["Point"].make(_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(3, this.width - 2), _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(3, this.height - 2));
            const roomPos = _shapes_point__WEBPACK_IMPORTED_MODULE_2__["Point"].make(_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(1, this.width - roomSize.x - 1), _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(1, this.height - roomSize.y - 1));
            this.room = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(this.x + roomPos.x, this.y + roomPos.y, roomSize.x, roomSize.y);
        }
    }
    getRoom() {
        if (this.room != null) {
            return this.room;
        }
        else {
            let lRoom = null;
            let rRoom = null;
            if (this.left != null) {
                lRoom = this.left.getRoom();
            }
            if (this.right != null) {
                rRoom = this.right.getRoom();
            }
            if (lRoom == null && rRoom == null) {
                return null;
            }
            else if (rRoom == null) {
                return lRoom;
            }
            else if (lRoom == null) {
                return rRoom;
            }
            else {
                return _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() > 0.5 ? lRoom : rRoom;
            }
        }
    }
    createHall(start, end) {
        this.halls = [];
        // pick a random point inside both rooms and connect them
        const startP = _shapes_point__WEBPACK_IMPORTED_MODULE_2__["Point"].make(_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(start.x + 1, start.x + start.width - 2), _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(start.y + 1, start.y + start.height - 2));
        const endP = _shapes_point__WEBPACK_IMPORTED_MODULE_2__["Point"].make(_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(end.x + 1, end.x + end.width - 2), _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(end.y + 1, end.y + end.height - 2));
        const leftX = Math.min(startP.x, endP.x);
        const rightX = Math.max(startP.x, endP.x);
        const topY = Math.min(startP.y, endP.y);
        const bottomY = Math.max(startP.y, endP.y);
        if (_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(0, 1) === 1) {
            // horizontal first
            this.halls.push(_shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(leftX, startP.y, rightX - leftX, 1));
            this.halls.push(_shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(endP.x, topY, 1, bottomY - topY));
        }
        else {
            this.halls.push(_shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(start.x, topY, 1, bottomY - topY));
            this.halls.push(_shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(leftX, endP.y, rightX - leftX, 1));
        }
        console.log(start, end, this.halls);
    }
}
const rooms = [];
const leafs = [];
function* progressiveMapGenerator(tileGrid, rooms, debugGrid) {
    // Clear out all the tiles
    const clear = () => {
        tileGrid.forEach((t) => {
            t.blockMove = true;
            t.blockSight = true;
            t.contained = true;
            t.explored = true; // remove later
        });
    };
    clear();
    // const outlineRect = (rect: IRect): void => {
    //     for(let y = rect.y; y < rect.y + rect.height; y++){
    //         for(let x = rect.x; x < rect.x + rect.width; x++){
    //             if(y === rect.y || x === rect.x || x === rect.x + rect.width - 1 || y === rect.y + rect.height - 1){
    //                 const t = tileGrid.getXY(x,y)
    //                 t.blockMove = false
    //                 t.blockSight = false
    //             }
    //         }
    //     }
    // }
    // const outlineLeaves = (): void => {
    //     leafs.forEach((l): void => {
    //         outlineRect(l)
    //     })
    // }
    // TODO: Disable entities or placement, essentially stop us before we place all of that stuff
    // Let's make one big leaf at the beginning
    const root = new Leaf(0, 0, tileGrid.width - 1, tileGrid.height - 1);
    leafs.push(root);
    let hadSplit = true;
    while (hadSplit) {
        hadSplit = false;
        // outlineLeaves()
        // yield
        leafs.forEach((l) => {
            if (!l.hasSplit()) {
                if (l.width > MAX_LEAF_SIZE || l.height > MAX_LEAF_SIZE || _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() > 0.25) {
                    if (l.split()) {
                        leafs.push(l.left);
                        leafs.push(l.right);
                        hadSplit = true;
                    }
                }
            }
        });
    }
    // 
    clear();
    root.createRooms();
    for (let i = leafs.length - 1; i >= 0; i--) {
        const l = leafs[i];
        // leafs.forEach((l: Leaf): void => {
        // draw each of the edges
        if (l.room != null) {
            const room = l.room;
            for (let y = room.y; y < room.y + room.height - 1; y++) {
                for (let x = room.x; x < room.x + room.width - 1; x++) {
                    const t = tileGrid.getXY(x, y);
                    t.blockMove = false;
                    t.blockSight = false;
                }
            }
        }
        if (l.halls != null) {
            const halls = l.halls;
            halls.forEach((room) => {
                for (let y = room.y; y < room.y + room.height; y++) {
                    for (let x = room.x; x < room.x + room.width; x++) {
                        const t = tileGrid.getXY(x, y);
                        t.blockMove = false;
                        t.blockSight = false;
                    }
                }
            });
            //console.log(halls)
        }
        // })
    }
    //yield
    // Next partition the space
    // using this for reference: https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZGVidWdTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Zvdi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oYW5kbGVJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3Byb2dyZXNzaXZlTWFwR2VuZXJhdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVyVG9HcmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFFUDtBQUVRO0FBQ007QUFDRTtBQUNWO0FBQ2lDO0FBRXBFLE1BQU0sRUFDRixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFD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Q0FBQyxDQUFDLEVBQUMsQ0FBQztLQUNuRTtJQUNELElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztRQUMzRyxxREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztLQUNwRTtJQUNELElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztRQUMvRyxxREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDbkU7SUFDRCx5QkFBeUI7SUFDekIsSUFBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUM7UUFDbEUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxH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RyxDQUFDO1FBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztRQUNyQixJQUFHLFVBQVUsS0FBSyxTQUFTLEVBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7U0FDL0I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtJQUV6QyxDQUFDO0NBQ0o7QUFFNEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IGZyb20gJy4va2V5Ym9hcmRNb25pdG9yJ1xuaW1wb3J0IHsgTW91c2VNb25pdG9yIH0gZnJvbSAnLi9tb3VzZU1vbml0b3InXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuL2Fzc2V0SGVscGVyJ1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICcuL2NhbnZhc1JlbmRlcmVyJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IFBVQlNVQiB9IGZyb20gJy4vcHViU3ViL3B1YlN1YidcbmltcG9ydCB7IFJlY3QsIElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IElEX01BTkFHRVIgfSBmcm9tICcuL2lkTWFuYWdlcidcbmltcG9ydCB7IGNhbGN1bGF0ZUZPViwgRk9WQ2VsbCB9IGZyb20gJy4vZm92J1xuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi9ybmdIZWxwZXInXG5pbXBvcnQgeyBtYXBHZW5lcmF0b3IzIH0gZnJvbSAnLi9tYXBHZW5lcmF0aW9uJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcblxuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuaW1wb3J0IHsgaGFuZGxlSW5wdXQgfSBmcm9tICcuL2hhbmRsZUlucHV0J1xuaW1wb3J0IHsgcmVuZGVyVG9HcmlkIH0gZnJvbSAnLi9yZW5kZXJUb0dyaWQnXG5pbXBvcnQgREVCVUcgZnJvbSAnLi9kZWJ1Z1NldHRpbmdzJ1xuaW1wb3J0IHsgcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IgfSBmcm9tICcuL3Byb2dyZXNzaXZlTWFwR2VuZXJhdG9yMidcblxuY29uc3Qge1xuICAgIFRJTEVfV0lEVEgsXG4gICAgVElMRV9IRUlHSFQsXG4gICAgU0NSRUVOX1dJRFRILFxuICAgIFNDUkVFTl9IRUlHSFQsXG4gICAgTUFQX1dJRFRILFxuICAgIE1BUF9IRUlHSFQsXG4gICAgQ0FNRVJBX1dJRFRILFxuICAgIENBTUVSQV9IRUlHSFQsXG4gICAgRk9WX1JBRElVU1xufSA9IFNFVFRJTkdTXG5cblxuLy8gSU5JVElBTElaRSBPVVIgU0VFRFxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuY29uc3Qgc2VlZFN0ciA9IHVybFBhcmFtcy5nZXQoJ3NlZWQnKVxuaWYoIXNlZWRTdHIpe1xuICAgIGNvbnN0IHNlZWQgPSBSQU5ET00uc2VlZChzZWVkU3RyIHx8IHVuZGVmaW5lZClcbiAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICBpZiAoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOm5ld3VybH0sJycsbmV3dXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3dXJsXG4gICAgfVxuXG59IGVsc2Uge1xuICAgIFJBTkRPTS5zZWVkKHNlZWRTdHIpXG59XG5cbmNvbnN0IHBsYXllcjogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsIENPTE9SUy5wbGF5ZXIpXG5jb25zdCBucGM6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCBDT0xPUlMubnBjKVxuY29uc3QgZW50aXRpZXM6IEVudGl0eVtdID0gW3BsYXllcixucGNdXG5cbi8vIEZpbmQgb3VyIGNhbnZhcyBhbmQgYWRqdXN0IGl0IHRvIG91ciBzZXR0aW5nc1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSCAqIFRJTEVfV0lEVEhcbmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUICogVElMRV9IRUlHSFRcblxuLy8gSW5pdGlhbGl6ZSBvdXIgaW5wdXQgbW9uaXRvcnNcbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbi8vIEluaXRpYWxpemUgb3VyIGNhbnZhcyByZW5kZXJlclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXIoKVxuY29uc3QgY2FtZXJhRnJhbWUgPSBSZWN0Lm1ha2UoMCwwLCBDQU1FUkFfV0lEVEgsIENBTUVSQV9IRUlHSFQpIC8vIENBTUVSQSBJUyBJTiBXT1JMRCBDRUxMUywgTk9UIEFCU09MVVRFIFVOSVRTXG5cbi8vIEluaXRpYWxpemUgb3VyIEdyaWRzXG5jb25zdCByZW5kZXJHcmlkID0gbmV3IEdyaWQ8SVJlbmRlckNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJycsIENPTE9SUy5ibGFjaywgQ09MT1JTLmJsYWNrKVxufSlcblxuLy8gVEhFU0UgQVJFIEhFUkUgQlkgREVGQVVMVCwgQlVUIFdPTidUIEJFIFNIT1dOIFVOTEVTUyBFTkFCTEVEXG5jb25zdCBkZWJ1Z0dyaWQgPSBuZXcgR3JpZDxJUmVuZGVyQ2VsbD4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxuZGVidWdHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJycsIENPTE9SUy5ibGFjaywgQ09MT1JTLmJsYWNrKVxufSlcblxubGV0IGZvdlJlY29tcHV0ZSA9ICFERUJVRy5ESVNBQkxFX0ZPVlxuY29uc3QgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiA9IG5ldyBHcmlkPEZPVkNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5mb3ZHcmlkLnNldEVhY2goKCk6IEZPVkNlbGwgPT4geyByZXR1cm4ge1xuICAgIHZpc2libGU6IGZhbHNlIC8vIEkgZG9uJ3QgbmVjZXNzYXJpbHkgd2FudCB2aXNpYmlsaXR5IHR1cm5lZCBvbiBieSBkZWZhdWx0XG59fSlcblxuY29uc3QgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4gPSBuZXcgR3JpZDxUaWxlPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG50aWxlR3JpZC5zZXRFYWNoKChjZWxsOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgPT4ge1xuICAgIGNvbnN0IHQgPSBuZXcgVGlsZSh4LHksIHRydWUpXG4gICAgaWYoREVCVUcuRElTQUJMRV9GT1Ype1xuICAgICAgICB0LmV4cGxvcmVkID0gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gdFxufSlcblxuLy8gdGhpcyB3aWxsIGFsc28gcG9wdWxhdGUgdGhlIHJvb21zXG5jb25zdCByb29tczogSVJlY3RbXSA9IFtdXG4vL21hcEdlbmVyYXRvcjModGlsZUdyaWQsIHJvb21zKVxuLy9tYXBHZW5lcmF0b3IyKHRpbGVHcmlkLCByb29tcylcblxuLy8gdGhpcyBpcyBob25lc3RseSBqdXN0IGFub3RoZXIgcGFydCBvZiBnZW5yYXRpbmcgdGhpbmdzLCB3ZSBqdXN0IG5lZWQgdG8gY29tZSB1cCB3aXRoIHNvbWUgZXh0cmEgdGVybWlub2xvZ3kgZm9yIGl0LyB3YXlzIHRvIGRlYWwgd2l0aCBpdFxuXG5cbi8vIGNsZWFuIHRoaXMgdXBcbmNvbnN0IG1vdmVzOiBhbnlbXSA9IFtdXG5jb25zdCBNb3ZlUHJvY2Vzc29yID0ge1xuICAgIG1vdmVzXG59XG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmUnLCAobXNnKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2gobXNnKVxufSlcblxuUFVCU1VCLnN1YnNjcmliZSgnbW92ZWQnLCAobXNnKTogdm9pZCA9PntcbiAgICBpZihtc2cuaWQgPT09IHBsYXllci5pZCAmJiAhREVCVUcuRElTQUJMRV9UUkFDS0lORyl7XG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHBsYXllci54IC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG4gICAgfVxufSlcblxuUFVCU1VCLnN1YnNjcmliZSgnY2FtZXJhX21vdmUnLCAobXNnKTogdm9pZCA9PiB7XG4gICAgY2FtZXJhRnJhbWUueCArPSBtc2cuZGVsdGEueFxuICAgIGNhbWVyYUZyYW1lLnkgKz0gbXNnLmRlbHRhLnlcbiAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxufSlcblxuLy8gVE9ETzogTU9WRSBUSElTIFRPIHRoZSBLZXlib2FyZCBNb25pdG9yIGl0c2VsZiBhcyBhIGhlbHBlciBwcm9wZXJ0eVxuY29uc3QgbmV3S2V5UHJlc3MgPSAocTogc3RyaW5nLCBlbmFibGVab29tOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ga20uZ2V0S2V5U3RhdGUocSlcbiAgICBpZighZW5hYmxlWm9vbSl7XG4gICAgICAgIHJldHVybiBzdGF0ZS5pc0Rvd24gJiYgc3RhdGUuaGFsZlN0ZXBzID4gMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5pc0Rvd24gJiYgKHN0YXRlLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pXG4gICAgfVxufVxuXG5jb25zdCBsZXZlbEl0ZXJhdG9yID0gcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IodGlsZUdyaWQsIHJvb21zLCBkZWJ1Z0dyaWQpXG5sZXZlbEl0ZXJhdG9yLm5leHQoKVxue1xuICAgIGlmKHJvb21zLmxlbmd0aCA+IDApe1xuICAgICAgICBjb25zdCBwY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbMF0pXG4gICAgICAgIFBvaW50LnNldChwbGF5ZXIsIHBjZW50ZXIueCwgcGNlbnRlci55KVxuICAgICAgICBjb25zdCBucGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zW3Jvb21zLmxlbmd0aCAtIDFdKVxuICAgICAgICBQb2ludC5zZXQobnBjLCBucGNlbnRlci54LCBucGNlbnRlci55KVxuICAgIH1cblxuICAgIC8vIGNlbnRlciB0aGUgY2FtZXJhIGFuZCBmb3Ygb24gdGhlIHBsYXllclxuICAgIGlmKCFERUJVRy5ESVNBQkxFX1RSQUNLSU5HKXtcbiAgICAgICAgY2FtZXJhRnJhbWUueCA9IE1hdGguZmxvb3IocGxheWVyLnggLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcihwbGF5ZXIueSAtIGNhbWVyYUZyYW1lLmhlaWdodC8yKVxuICAgICAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjZW50ZXIgZXZlcnl0aGluZ1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcih0aWxlR3JpZC53aWR0aC8yIC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IodGlsZUdyaWQuaGVpZ2h0LzIgIC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH1cbn1cblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oKGltYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICByZW5kZXJlci5pbml0KGNhbnZhcywgaW1hZ2UpXG4gICAgaWYoIURFQlVHLlNUQUdFX01BUF9HRU5FUkFUT1JTKXtcbiAgICAgICAgLy8gSlVTVCBGVUxMWSBTRVFVRU5DRSBUSEUgR0VORVJBVE9SXG4gICAgICAgIHdoaWxlKGxldmVsSXRlcmF0b3IubmV4dCgpLmRvbmUgIT09IGZhbHNlKXt9XG4gICAgfVxuICAgIC8vIExvb3BcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBoYW5kbGVJbnB1dChrbSwgcGxheWVyKVxuXG4gICAgICAgIC8vIGV4dHJhXG4gICAgICAgIGlmKG5ld0tleVByZXNzKCd3Jykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogMCwgeTogLTF9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygnYScpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IC0xLCB5OiAwfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3MnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAwLCB5OiAxfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ2QnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAxLCB5OiAwfX0pXG4gICAgICAgIH1cblxuICAgICAgICBpZihERUJVRy5TVEFHRV9NQVBfR0VORVJBVE9SUyl7XG4gICAgICAgICAgICAvLyBxIGxldHMgdXMgcHJvZ3Jlc3MgdGhyb3VnaCB0aGUgbWFwIGdlbmVyYXRvciBwaGFzZVxuICAgICAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3EnKSl7XG4gICAgICAgICAgICAgICAgLy8geWllbGQgdGhlIG5leHQgbGV2ZWwgZ2VuZXJhdGluZyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgbGV2ZWxJdGVyYXRvci5uZXh0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2Nlc3MgbW92ZXNcbiAgICAgICAgLy8gZXZlbnR1YWxseSB3ZSdsbCBjb21wb25lbnRpemUgdGhpcyBiZXR0ZXJcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5mb3JFYWNoKChtc2c6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1zZy5kZWx0YVxuICAgICAgICAgICAgY29uc3QgaWQgPSBtc2cuaWRcbiAgICAgICAgICAgIGNvbnN0IG1vdmVyID0gZW50aXRpZXMuZmluZCgoZSk6IGJvb2xlYW4gPT4gZS5pZCA9PSBpZClcbiAgICAgICAgICAgIGlmKCFtb3Zlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKG1vdmVyLnggKyBtb3ZlLngsIG1vdmVyLnkgKyBtb3ZlLnkpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmJsb2NrTW92ZSB8fCAoREVCVUcuRU5BQkxFX0NMSVBQSU5HICYmIG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpKXtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXIubW92ZShtb3ZlLngsIG1vdmUueSlcbiAgICAgICAgICAgICAgICAgICAgaWYobW92ZXIuaWQgPT09IHBsYXllci5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3ZSZWNvbXB1dGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmVkJywgbXNnKSAvLyBvbmx5IHB1Ymxpc2ggbW92ZSBpZiB0aGUgZW50aXR5IGFjdHVhbGx5IGNvbXBsZXRlZCB0aGUgbW92ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5sZW5ndGggPSAwXG5cbiAgICAgICAgaWYoZm92UmVjb21wdXRlICYmICFERUJVRy5ESVNBQkxFX0ZPVil7XG4gICAgICAgICAgICBjYWxjdWxhdGVGT1YoZm92R3JpZCwgdGlsZUdyaWQsIHBsYXllciwgRk9WX1JBRElVUylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gcmVuZGVyIGZvcm1hdFxuICAgICAgICByZW5kZXJUb0dyaWQodGlsZUdyaWQsIGZvdkdyaWQsIGVudGl0aWVzLCByZW5kZXJHcmlkLCBjYW1lcmFGcmFtZSwgZGVidWdHcmlkKVxuICAgICAgICAvLyBhY3R1YWxseSByZW5kZXIgdG8gY2FudmFzXG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKClcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHJlbmRlckdyaWQpXG5cbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG5cbn0pLmNhdGNoKChlcnI6IGFueSk6IHZvaWQgPT4gY29uc29sZS5sb2coZXJyKSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiIsImZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IGFueXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk6IGFueSA9PiByZXNvbHZlKGltZykpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpOiBhbnkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSAke3VybH1gKSkpXG4gICAgICAgIGltZy5zcmMgPSB1cmxcbiAgICB9KVxufVxuXG5leHBvcnQge2xvYWRJbWFnZX0iLCJpbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgZHJhd1NlY3Rpb24sIGNvZGUgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnXG5pbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYSByZW5kZXIgZ3JpZCBhbmQgY29udmVydGluZyBpdCB0byBpbWFnZXNcbiAqIG9uIHRoZSBjYW52YXNcbiAqL1xuXG5jb25zdCB7VElMRV9XSURUSCwgVElMRV9IRUlHSFR9ID0gU0VUVElOR1NcblxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCB1bmRlZmluZWQ7XG4gICAgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCk6IENhbnZhc1JlbmRlcmVye1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICAvLyB3ZSBhcmUganVzdCBmb3JjaW5nIHRoaXMgZm9yIG5vdywgd2Ugd2lsbCBjaGVjayBpZiBpdCdzIG51bGxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGlmKGN0eCA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgY29udGV4dCBmcm9tIGNhbnZhcycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8vIGV2ZW50dWFsbHkgd2UgbmVlZCB0byBwYXNzIGluIHRoZSBkaW1lbnNpb25zIHdlIGFyZSByZW5kZXJpbmcgdG8gYXMgd2VsbFxuICAgIC8vIGZvciBub3cgaXQncyBmaW5lXG4gICAgcmVuZGVyKHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBiYWNrZ3JvdW5kOiBzdHJpbmcgPSBDT0xPUlMuYmxhY2spOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFJlY3QoMCwwLCByZW5kZXJHcmlkLndpZHRoICogVElMRV9XSURUSCwgcmVuZGVyR3JpZC5oZWlnaHQgKiBUSUxFX0hFSUdIVClcbiAgICAgICAgLy8gbGV0J3MgdHJ5IHNldHRpbmcgYSBiYWNrZ3JvdW5kIGNvbG9yIGFzIHdlbGxcbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgZGVzdFJlY3QgPSBSZWN0Lm1ha2UoMCwwLDAsMClcbiAgICAgICAgcmVuZGVyR3JpZC5mb3JFYWNoKChcbiAgICAgICAgICAgIGNlbGw6IElSZW5kZXJDZWxsLCBcbiAgICAgICAgICAgIGluZGV4OiBudW1iZXIsIFxuICAgICAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIFJlY3Quc2V0KGRlc3RSZWN0LCB4ICogVElMRV9XSURUSCwgeSAqIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbiAgICAgICAgICAgIC8vIHRvZG8sIGFsbG93IHVzIHRvIG1hcmsgcmVuZGVyIGNlbGxzIGFzICdlbXB0eScgcmF0aGVyIHRoYW4gc3BhY2VzLCB0aGlzIG1pZ2h0IGhlbHAgc3BlZWQgdXAgcmVuZGVyIHRpbWVcbiAgICAgICAgICAgIGlmKGNlbGwuY2hhcmFjdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgaWYoY2VsbC5iYWNrQ29sb3IgIT09IGJhY2tncm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAvLyBJIGFjdHVhbGx5IGRvbid0IGtub3cgaWYgdGhpcyBoZWxwcywgYnV0IGl0IHNlZW1zIGxpa2Ugc2V0dGluZyB0aGUgZmlsbFN0eWxlIGNvdWxkIGludm9sdmUgbW9yZSBjb21wbGljYXRpb25zIHRoYW4ganVzdCBjaGVja2luZyBpZiBpdCdzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmKGN0eC5maWxsU3R5bGUgIT09IGNlbGwuYmFja0NvbG9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZWxsLmJhY2tDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjUmVjdCA9IENPREVfVE9fUkVDVF9IQVNIW2NvZGUoY2VsbC5jaGFyYWN0ZXIpXVxuICAgICAgICAgICAgICAgIGRyYXdTZWN0aW9uKGN0eCwgdGhpcy5zcHJpdGVzaGVldCwgc3JjUmVjdCwgZGVzdFJlY3QsIGNlbGwuZm9yZUNvbG9yLCBjZWxsLmJhY2tDb2xvciApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IENhbnZhc1JlbmRlcmVyIH0iLCIvLyBUT0RPOiBSZW9yZ2FuaXplIHRoaXMgaW50byBtYXRlcmlhbHNcbi8vIFdlJ2xsIGV2ZW4gaW5jbHVkZSBcIkJMQU5LXCJcbi8vIEFzIG9wcG9zZWQgdG8gZW1wdHkgc3BhY2VcbmNvbnN0IENPTE9SUyA9IHtcbiAgICAnZGFya19vdXRzaWRlJzogJyMwMDIyNDQnLFxuICAgICdsaWdodF9vdXRzaWRlJzogJyMyNjUzODAnLFxuICAgICdibGFjayc6ICcjMDAwMDAwJyxcbiAgICAnd2hpdGUnOiAnI0ZGRkZGRicsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMmQyODI0JywgLy8nIzQ0M2MzNScsXG4gICAgJ2RhcmtfZ3JvdW5kJzogJyM0NDNjMzUnLCAvLycjNjY1NjQ3JyxcbiAgICAnbGlnaHRfd2FsbCc6ICcjQzhCNDMyJywgLy8gI0M1Q0M4OVxuICAgICdsaWdodF9ncm91bmQnOiAnI0M1Q0M4OScsXG4gICAgJ3BsYXllcic6ICcjRkZGRkZGJyxcbiAgICAnZGFya19kb29yJzonIzU1MDAwMCcsXG4gICAgJ2xpZ2h0X2Rvb3InOiAnI0ZGMjIyMicsXG4gICAgJ25wYyc6ICcjQ0MwMDAwJyxcbiAgICAnREVCVUcnOiAnI0ZGMzMzMycsXG4gICAgbWV0YWw6IHtcbiAgICAgICAgZGFya1dhbGw6ICcjNEE0QTRBJyxcbiAgICAgICAgZGFya0dyb3VuZDogJyM2MTYxNjEnLFxuICAgICAgICBsaWdodFdhbGw6ICcjODU4NTg1JyxcbiAgICAgICAgbGlnaHRHcm91bmQ6ICcjQkZCRkJGJ1xuICAgIH1cblxufVxuXG4vLyBTT01FIEdSQVkgVFlQRVNcbi8vICM0QTRBNEFcbi8vICM2MTYxNjFcbi8vICM4NTg1ODVcbi8vICNCRkJGQkZcblxuZXhwb3J0IGRlZmF1bHQgQ09MT1JTXG4iLCJpbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLy8gQUxMIERFQlVHIFNFVFRJTkdTIFNIT1VMRCBHTyBJTiBIRVJFLCBBTkQgQUxMIERFQlVHIEZMQUdTIFNIT1VMRCBCRSBGQUxTRSBCWSBERUZBVUxUIChpLmUuIHByb2R1Y3Rpb24gbW9kZSlcbmNvbnN0IERFQlVHOiBIYXNoPGJvb2xlYW4+ID0ge1xuICAgIERJU0FCTEVfRk9WOiB0cnVlLCAgICAgICAgICAvLyBTSE9XIEVWRVJZVEhJTkcsIE5PIEhJRElORyBTVFVGRiBCRUhJTkQgRk9WLCBFVkVSWVRISU5HIEFDVFMgTElUXG4gICAgRElTQUJMRV9UUkFDS0lORzogdHJ1ZSwgICAgIC8vIENBTUVSQSBXSUxMIE9OTFkgUkVTUE9ORCBUTyBESVJFQ1QgQ09OVFJPTCBBTkQgV09OJ1QgVFJBQ0sgQ0hBUkFDVEVSXG4gICAgRU5BQkxFX0NMSVBQSU5HOiB0cnVlLFxuICAgIERFQlVHX0RSQVc6IHRydWUsXG4gICAgU1RBR0VfTUFQX0dFTkVSQVRPUlM6IHRydWUsIC8vIFdlIHdpbGwgbWFudWFsbHkgcHJvZ3Jlc3MgdGhlIGxldmVsIGdlbmVyYXRvclxufVxuXG5leHBvcnQgZGVmYXVsdCBERUJVR1xuIiwiLyoqXG4gKiBBIGdlbmVyaWMgb2JqZWN0IHRvIHJlcHJlc2VudCBldmVyeXRoaW5nIHRoYXQgaXMgbm90IHRoZSBtYXAgaXRzZWxmXG4gKiBGb3IgdGhhdCwgc2VlIHRoZSBUaWxlIGNsYXNzXG4gKi9cbmNsYXNzIEVudGl0eSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgeDogbnVtYmVyLHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYW4gZW50aXR5LCBjdXJyZW50bHkgZG9lc24ndCBjaGVjayBpZiBpdCBjYW4gb3Igbm90LCBqdXN0IGRvZXNcbiAgICAgKiBAcGFyYW0gZHggQW1vdW50IHRvIG1vdmUgaW4gdGhlIHggZGlyZWN0aW9uIChsZWZ0IGlzIG5lZ2F0aXZlLCByaWdodCBpcyBwb3NpdGl2ZSlcbiAgICAgKiBAcGFyYW0gZHkgQW1vdW50IHRvIG1vdmUgaW4gdGhlIHkgZGlyZWN0aW9uICh1cCBpcyBuZWdhdGl2ZSwgZG93biBpcyBwb3NpdGl2ZSlcbiAgICAgKi9cbiAgICBtb3ZlKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lke1xuICAgICAgICB0aGlzLnggKz0gZHhcbiAgICAgICAgdGhpcy55ICs9IGR5XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbnRpdHkgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVBvaW50LCBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG5pbnRlcmZhY2UgRk9WQ2VsbCAge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgU2hhZG93UmFuZ2Uge1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzQmV0d2VlbkluY2x1c2l2ZSA9IChhOiBudW1iZXIsYjogbnVtYmVyLHQ6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGlmKGIgPCBhKXtcbiAgICAgICAgcmV0dXJuIGIgPD0gdCAmJiB0IDw9IGFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA8PSB0ICYmIHQgPD0gYlxuICAgIH1cbn1cbi8qKlxuICogXG4gKiBAcGFyYW0gZm92R3JpZCBcbiAqIEBwYXJhbSB0aWxlR3JpZCBcbiAqIEBwYXJhbSBzdGFydFBvaW50IHN0YXJ0IHBvaW50IGlzIGluIHdvcmxkIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gbWF4RGlzdGFuY2UgXG4gKiBAcGFyYW0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsIFxuICogQHBhcmFtIHhEaXJlY3Rpb24gXG4gKiBAcGFyYW0geURpcmVjdGlvbiBcbiAqL1xuY29uc3QgY2FsY3VsYXRlT2N0YW50ID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIsXG4gICAgaG9yaXpvbnRhbE5vdFZlcnRpY2FsOiBib29sZWFuLCB4RGlyZWN0aW9uOiBudW1iZXIsIHlEaXJlY3Rpb246IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIFxuICAgIC8vIE91ciBzaGFkb3dzIHdlIHdpbGwgY2FzdFxuICAgIGNvbnN0IHNoYWRvd1JhbmdlczogU2hhZG93UmFuZ2VbXSA9IFtdXG4gICAgLy8gb3VyIHN0YXJ0aW5nIGxvY2F0aW9uIGlzIGFsd2F5cyB2aXNpYmxlXG4gICAgY29uc3Qgc2NyZWVuU3RhcnRQb2ludD0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgIHNjcmVlblN0YXJ0UG9pbnQueCAtPSBmb3ZHcmlkLnhcbiAgICBzY3JlZW5TdGFydFBvaW50LnkgLT0gZm92R3JpZC55XG4gICAgZm92R3JpZC5nZXRQKHNjcmVlblN0YXJ0UG9pbnQpLnZpc2libGUgPSB0cnVlXG4gICAgLy8gVE9ETzogRGV0ZXJtaW5lIGlmIHRoZSBGT1YgaXMgaW4gcmFuZ2VcbiAgICBmb3IobGV0IHJvdyA9IDE7IHJvdyA8IG1heERpc3RhbmNlOyByb3crKyl7XG4gICAgICAgIGNvbnN0IHJvd1NpemUgPSByb3cgKyAxXG4gICAgICAgIGZvcihsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgcm93U2l6ZTsgY29sdW1uKyspe1xuICAgICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBvY3RhbnQsIHRoZSB0cmF2ZWxsZXIgd2lsbCBtb3ZlIGRpZmZlcmVudGx5XG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxsZXIgPSBQb2ludC5jb3B5KHN0YXJ0UG9pbnQpXG4gICAgICAgICAgICB0cmF2ZWxsZXIueCArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB4RGlyZWN0aW9uICogY29sdW1uIDogeERpcmVjdGlvbiAqIHJvd1xuICAgICAgICAgICAgdHJhdmVsbGVyLnkgKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geURpcmVjdGlvbiAqIHJvdyA6IHlEaXJlY3Rpb24gKiBjb2x1bW5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG91dCBvZiBib3VuZHMsIHNraXBcbiAgICAgICAgICAgIGlmKCF0aWxlR3JpZC5pbkJvdW5kc1hZKHRyYXZlbGxlci54LCB0cmF2ZWxsZXIueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZhY3RvciBpbiBvdXIgdGlsZSBjaGVjayB3aGVuIHdlIGdldCB0aGUgd29ybGQgY2VsbFxuICAgICAgICAgICAgbGV0IHNjcmVlblBvaW50ID0gUG9pbnQuY29weSh0cmF2ZWxsZXIpXG4gICAgICAgICAgICBzY3JlZW5Qb2ludC54IC09IGZvdkdyaWQueFxuICAgICAgICAgICAgc2NyZWVuUG9pbnQueSAtPSBmb3ZHcmlkLnlcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRQKHRyYXZlbGxlcilcbiAgICAgICAgICAgIC8vIE9QVElNSVpFOiBXZSBhcmUgcHJvYmFibHkgcnVubmluZyB0byBtYW55IHRpbWVzIGFuZCBjb3VsZCBkbyB0aGlzIGJldHRlclxuICAgICAgICAgICAgaWYoIWZvdkdyaWQuaW5Cb3VuZHNYWShzY3JlZW5Qb2ludC54LCBzY3JlZW5Qb2ludC55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUG9pbnQpXG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29sdW1uL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IChjb2x1bW4gKyAxKS9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBtaWRkbGUgPSAoc3RhcnQgKyBlbmQpIC8gMlxuXG4gICAgICAgICAgICAvLyB0ZXN0IGZvciB2aXNpYmxpdHlcbiAgICAgICAgICAgIGxldCB2aXNpYmlsaXR5ID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZWRnZXMgYXJlIGNsZWFyIG9yIG5vdFxuICAgICAgICAgICAgbGV0IHN0YXJ0Q2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgbWlkZGxlQ2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgZW5kQ2xlYXIgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYnVpbHQgc29tZSBzaGFkb3cgcmFuZ2VzXG4gICAgICAgICAgICBpZihzaGFkb3dSYW5nZXMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgYW55IHNoYWRvd3MgY3Jvc3Mgb3VyIHRocmVlIHBvaW50c1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5mb3JFYWNoKCAoc3I6IFNoYWRvd1JhbmdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q2xlYXIgPSBzdGFydENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZUNsZWFyID0gbWlkZGxlQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBtaWRkbGUpXG4gICAgICAgICAgICAgICAgICAgIGVuZENsZWFyID0gZW5kQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBlbmQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB2aXNpYmlsaXR5IGJhc2VkIG9mZiBvZiBvdXIgc2FtcGxpbmdcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gbWlkZGxlQ2xlYXIgJiYgKHN0YXJ0Q2xlYXIgfHwgZW5kQ2xlYXIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdlIGJsb2NrIHNpZ2h0LCBjYWxjdWxhdGUgb3VyIHNoYWRvdyBlbmRzXG4gICAgICAgICAgICBpZih0aWxlLmJsb2NrU2lnaHQpe1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5wdXNoKHtzdGFydCwgZW5kfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm92Q2VsbC52aXNpYmxlID0gdmlzaWJpbGl0eVxuICAgICAgICAgICAgaWYoZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICB0aWxlLmV4cGxvcmVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjYWxjdWxhdGVGT1YgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIC8vIGJlIGRlZmF1bHQgd2UgYXJlIGdvaW5nIHRvIHNoYWRvd0Nhc3RcbiAgICAvLyBieSBkZWZhdWx0IGV2ZXJ5dGhpbmcgaXMgbm90IHZpc2libGVcbiAgICBmb3ZHcmlkLmZvckVhY2goKGNlbGwpOiB2b2lkID0+IHsgY2VsbC52aXNpYmxlID0gZmFsc2UgfSlcbiAgICAvLyBOTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgLTEpXG4gICAgLy8gV05XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAtMSlcbiAgICAvLyBXU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIDEpXG4gICAgLy8gU1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIDEpXG4gICAgLy8gU1NFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgMSlcbiAgICAvLyBFU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgMSlcbiAgICAvLyBFTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgLTEpXG4gICAgLy8gTk5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgLTEpXG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZUZPViwgRk9WQ2VsbH0iLCIvLyBPUklHSU5BTFxuLy8gY29uc3QgU0VUVElOR1MgPSB7XG4vLyAgICAgVElMRV9XSURUSDogMTAsICAgICAvLyBwaXhlbHNcbi8vICAgICBUSUxFX0hFSUdIVDogMTAsICAgIC8vIHBpeGVsc1xuLy8gICAgIE1BUF9XSURUSDogODAsICAgICAgLy8gZXZlcnl0aGluZyBlbHNlIGlzIGluIHRpbGVzXG4vLyAgICAgTUFQX0hFSUdIVDogNDUsXG4vLyAgICAgQ0FNRVJBX1dJRFRIOiAxMDAsXG4vLyAgICAgQ0FNRVJBX0hFSUdIVDogNzAsXG4vLyAgICAgU0NSRUVOX1dJRFRIIDoxMDAsXG4vLyAgICAgU0NSRUVOX0hFSUdIVCA6IDcwLFxuLy8gICAgIEZPVl9SQURJVVM6IDM1XG4vLyB9XG5cbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIFRJTEVfV0lEVEg6IDUsICAgICAvLyBwaXhlbHNcbiAgICBUSUxFX0hFSUdIVDogNSwgICAgLy8gcGl4ZWxzXG4gICAgTUFQX1dJRFRIOiAyMDAsICAgICAgLy8gZXZlcnl0aGluZyBlbHNlIGlzIGluIHRpbGVzXG4gICAgTUFQX0hFSUdIVDogMTMwLFxuICAgIENBTUVSQV9XSURUSDogMjEwLFxuICAgIENBTUVSQV9IRUlHSFQ6IDE0MCxcbiAgICBTQ1JFRU5fV0lEVEggOjIxMCxcbiAgICBTQ1JFRU5fSEVJR0hUIDogMTQwLFxuICAgIEZPVl9SQURJVVM6IDM1XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNFVFRJTkdTIiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBTZXRFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGFueTtcbn1cblxuaW50ZXJmYWNlIEZvckVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIE5laWdoYm9yTGlzdDxUPiB7XG4gICAgdXA6IFQgfCBudWxsO1xuICAgIGxlZnQ6IFQgfCBudWxsO1xuICAgIHJpZ2h0OiBUIHwgbnVsbDtcbiAgICBkb3duOiBUIHwgbnVsbDtcbiAgICBuZWlnaGJvcnM6IFRbXTtcbn1cblxuLy8gVE9ETzogZ2l2ZSBncmlkcyB0aGVpciBvd24geCBhbmQgeXMsIHRoYXQgd2F5IHRoZXkgY2FuIGltcGxlbWVudCBhbGwgdGhlIHBvaW50IGFuZCByZWN0IHN0dWZmXG4vKipcbiAqIEdyaWQgdG8gcmVwcmVzZW50IDJkIGNvbGxlY3Rpb25zLCBwbGVhc2UgZG9uJ3QgcmVzaXplIGl0IGFmdGVyIGNyZWF0aW5nIGl0XG4gKi9cbmNsYXNzIEdyaWQ8VD4gaW1wbGVtZW50cyBJUmVjdCB7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB5OiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBjZWxsczogVFtdO1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKXtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmNlbGxzLmxlbmd0aCA9IHdpZHRoICogaGVpZ2h0XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiBvZiB0aGUgZ3JpZCwgb3ZlcndyaXRlcyBwcmV2aW91cyBlbnRyaWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGVudHJ5LCBkb24ndCB1c2UgdGhpcyB1bmxlc3MgZW50cmllcyBhcmUgaW5kZXBlbmRlbnQgZnJvbSBlYWNoIG90aGVyXG4gICAgICogQHBhcmFtIGZuIHRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGNlbGwgaXRzZWxmIGFzIHRoZSBmaXJzdCBwcm9wZXJ0eSBhbmQgXG4gICAgICovXG4gICAgc2V0RWFjaChmbjogU2V0RWFjaEZuPFQ+KTogR3JpZDxUPntcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIHNvbWV0aGluZyBmb3IgZWFjaCBtZW1iZXIgb2YgYSBjZWxsLCBnb2luZyByb3cgYnkgcm93IGZyb20gbGVmdCB0byByaWdodFxuICAgICAqIEBwYXJhbSBmbiBHZXQgcGFzc2VkIHRoZSBjZWxsLCBpbmRleCwgeCBhbmQgeVxuICAgICAqL1xuICAgIGZvckVhY2goZm46IEZvckVhY2hGbjxUPik6IHZvaWR7XG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKXtcbiAgICAgICAgICAgICAgICBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0geCB4IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAcGFyYW0geSB5IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKi9cbiAgICBnZXRYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQgIHtcbiAgICAgICAgaWYoIXRoaXMuaW5Cb3VuZHNYWSh4LHkpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm91bmRhcnkgYWNjZXNzIGlzc3VlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1t4ICsgeSAqIHRoaXMud2lkdGhdXG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ2V0WFkuIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHBvaW50IGNvbnRhaW5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSBjZWxsIHlvdSB3YW50IHRvIGdldFxuICAgICAqL1xuICAgIGdldFAocG9pbnQ6IElQb2ludCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRYWShwb2ludC54LCBwb2ludC55KVxuICAgIH1cblxuICAgIGluQm91bmRzWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFue1xuICAgICAgICBpZih4IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2VsbCBiYXNlZCBvZmYgb2YgYW4gaW5kZXgsIHVzdWFsbHkgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZm9yRWFjaCBsb29wIG9mIGEgc2ltaWxhcmx5IHNpemVkIGdyaWRcbiAgICAgKiBOT1RFIGJlIGNhcmVmdWwgdGhhdCB0aGUgb3RoZXIgZ3JpZCBoYXMgdGhlIHNhbWUgZGltZW5zaW9uIHVubGVzcyB5b3UgcmVhbGx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGNlbGxzLCBtb3N0bHkgdG8gYmUgdXNlZCB3aXRoIGdyaWRzIHRoYXQgYXJlIHdvcmtpbmcgYWxvbmdzaWRlIGEgZGlmZmVyZW50IGZvckVhY2ggbG9vcFxuICAgICAqL1xuICAgIGdldEkoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpbmRleF1cbiAgICB9XG5cbiAgICBnZXROZWlnaGJvcnNYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IE5laWdoYm9yTGlzdDxUPiB7XG4gICAgICAgIGNvbnN0IGxpc3Q6IE5laWdoYm9yTGlzdDxUPiA9IHtcbiAgICAgICAgICAgIHVwOiBudWxsLFxuICAgICAgICAgICAgZG93bjogbnVsbCxcbiAgICAgICAgICAgIGxlZnQ6IG51bGwsXG4gICAgICAgICAgICByaWdodDogbnVsbCxcbiAgICAgICAgICAgIG5laWdoYm9yczpbXVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5Cb3VuZHNYWSh4LHkgLSAxKSl7XG4gICAgICAgICAgICBsaXN0LnVwID0gdGhpcy5nZXRYWSh4LCB5IC0gMSlcbiAgICAgICAgICAgIGxpc3QubmVpZ2hib3JzLnB1c2gobGlzdC51cClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmluQm91bmRzWFkoeCx5ICsgMSkpe1xuICAgICAgICAgICAgbGlzdC5kb3duID0gdGhpcy5nZXRYWSh4LCB5ICsgMSlcbiAgICAgICAgICAgIGxpc3QubmVpZ2hib3JzLnB1c2gobGlzdC5kb3duKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5Cb3VuZHNYWSh4IC0gMSx5KSl7XG4gICAgICAgICAgICBsaXN0LmxlZnQgPSB0aGlzLmdldFhZKHggLSAxLCB5KVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LmxlZnQpXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHggKyAxLHkpKXtcbiAgICAgICAgICAgIGxpc3QucmlnaHQgPSB0aGlzLmdldFhZKHggKyAxLCB5KVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LnJpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JpZCB9IiwiaW1wb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0gZnJvbSAnLi9rZXlib2FyZE1vbml0b3InXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgUFVCU1VCIH0gZnJvbSAnLi9wdWJTdWIvcHViU3ViJ1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVJbnB1dCA9IChrbTogS2V5Ym9hcmRNb25pdG9yLCBwbGF5ZXI6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKC0xLCAwKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMSwgMCl9KVxuICAgIH1cbiAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDAsIC0xKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDAsIDEpfSlcbiAgICB9XG4gICAgLy8gcXVpY2sgbnVtYmVyIGdlbmVyYXRvclxuICAgIGlmKCFrbS5nZXRLZXlTdGF0ZSgnbicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ24nKS5oYWxmU3RlcHMgPiAwKSl7XG4gICAgICAgIGNvbnN0IHNlZWQgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3dXJsXG4gICAgfVxufSIsImNsYXNzIElETWFuYWdlciB7XG4gICAgcHJpdmF0ZSBsYXN0SWQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxhc3RJZCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZXh0IGlkXG4gICAgICovXG4gICAgbmV4dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0SWQrK1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBJRF9NQU5BR0VSXG4gKi9cbmNvbnN0IElEX01BTkFHRVIgPSBuZXcgSURNYW5hZ2VyKClcbmV4cG9ydCB7SURfTUFOQUdFUiwgSURNYW5hZ2VyfSIsImludGVyZmFjZSBLZXlTdGF0ZSB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIGlzRG93bjogYm9vbGVhbjtcbiAgICBoYWxmU3RlcHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbmNvbnN0IG1ha2VLZXlTdGF0ZSA9IChrZXk6IHN0cmluZywgaXNEb3duOiBib29sZWFuID0gZmFsc2UsIGhhbGZTdGVwczogbnVtYmVyID0gMCk6IEtleVN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGlzRG93bixcbiAgICAgICAgaGFsZlN0ZXBzXG4gICAgfVxufVxuXG5jbGFzcyBLZXlib2FyZE1vbml0b3Ige1xuICAgIGtleUhhc2g6IEhhc2g8S2V5U3RhdGU+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMua2V5SGFzaCA9IHt9XG4gICAgfVxuICAgIC8vIEF0dGFjaCB0byB0aGUgRE9NLCB1c3VhbGx5IHRoZSBkb2N1bWVudCBhcyBhIHdob2xlLCBidXQgeW91IGNhbiBtYWtlIGl0IG1vcmUgc3BlY2lmaWMgaWYgeW91IHdhbnRcbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogS2V5Ym9hcmRNb25pdG9yIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoIWtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKGtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGdldEtleVN0YXRlKGtleTogc3RyaW5nKTogS2V5U3RhdGV7XG4gICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5SGFzaFtrZXldXG4gICAgfVxuICAgIHJlc2V0U3RlcHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleUhhc2gpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXlzW2ldXS5oYWxmU3RlcHMgPSAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0iLCIvLyBMZXQncyBnbyBhaGVhZCBhbmQgY3JlYXRlIHRoZSBQb2ludCBpbnRlcmZhY2UgaGVyZSwgd2UnbGwgZXhwb3J0IGl0IGZvciB1c2UgbGF0ZXIgaW4gdGhlIHByb2plY3RcblxuaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuLyoqXG4gKiBDbGFzcyB0byBoZWxwIG1vbml0b3IgdGhpbmdzIHRoYXQgaGF2ZSBoYXBwZW5lZCB0byB0aGUgbW91c2Ugc2luY2UgbGFzdCB0aW1lIHRoYXQgd2UgbG9va2VkXG4gKi9cblxuaW50ZXJmYWNlIEhhbGZDbGljayB7XG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICBpc0Rvd246IGJvb2xlYW47XG59XG5cbmNsYXNzIE1vdXNlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvdmVyIHRoZSBhdHRhY2hlZCBlbGVtbnRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgbGFzdCB0aW1lIHdlIGxvb2tlZFxuICAgICAqL1xuICAgIGhhc01vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRydWUgaWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGNvbnRhaW5lciBcbiAgICAgKi9cbiAgICBpbkNvbnRhaW5lcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGlzIHRoZSBtb3VzZSBidXR0b24gZG93biAoY3VycmVudGx5IG9ubHkgdHJhY2tzIGxlZnQpXG4gICAgICovXG4gICAgaXNEb3duOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgYSBmdWxsIGNsaWNrIGlzIHVwIGFuZCBkb3duLCB0aGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1cHMgYW5kIGRvd25zLCB1c2VmdWwgZm9yIGRyYWdzIG9yIG90aGVyIHRoaW5ncyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICovXG4gICAgaGFsZkNsaWNrczogSGFsZkNsaWNrW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50Lm1ha2UoMCwwKVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzID0gW11cbiAgICAgICAgLy8gVE9ETzogQWRkIGNsaWNrIHRyYWNraW5nLCBkZXBlbmRzIG9uIGhvdyBxdWlja2x5IHdlIGFyZSBwb2xsaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yIG1vdXNlIHJlbGF0ZWQgZXZlbnRzIHRvXG4gICAgICogQHBhcmFtIGVsZW1lbnQgdGhlIHBhcnRpY3VsYXIgbW91c2UgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogTW91c2VNb25pdG9yIHtcbiAgICAgICAgLy8gVE9ETzogV2UnbGwgcmVnaXN0ZXIgY2xpY2sgaGlzdG9yeSBpbiB0aGUgZnV0dXJlLCBmb3Igbm93IHdlIGFyZSBqdXN0IGRvaW5nIG1vdXNlIG92ZXIgYXQgcHJlc2VudFxuICAgICAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgUG9pbnQuc2V0KHRoaXMucG9zaXRpb24sIGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZW50ZXJzIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIG1vdmVzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGV4aXRzIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHJhaXNlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IGZhbHNlIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayB0aGF0IHdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgZXZlbnRzIHNpbmNlIG91ciBsYXN0IHBvbGwgb2Ygc3RhdGUgYW5kIGl0IGNhbiBiZSByZXNldFxuICAgICAqL1xuICAgIHJlc2V0KCk6IHZvaWR7XG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgaGF2ZW4ndCBtb3ZlZCBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIC8vIGNsZWFyIG91dCB0aGUgY2xpY2tzXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcy5sZW5ndGggPSAwXG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZU1vbml0b3IgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlLCBUaWxlTWF0ZXJpYWwgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IElFbGxpcHNlLCBFbGxpcHNlIH0gZnJvbSAnLi9zaGFwZXMvZWxsaXBzZSdcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbmltcG9ydCBERUJVRyBmcm9tICcuL2RlYnVnU2V0dGluZ3MnXG5pbXBvcnQgeyBQb2ludCwgSVBvaW50LCBHcmlkRGlyZWN0aW9uIH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbmNvbnN0IE1BWF9MRUFGX1NJWkUgPSAxMDBcbmNvbnN0IE1JTl9MRUFGX1NJWkUgPSAxMFxuY2xhc3MgTGVhZiBpbXBsZW1lbnRzIElSZWN0IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbGVmdDogTGVhZiB8IG51bGw7XG4gICAgcmlnaHQ6IExlYWYgfCBudWxsO1xuICAgIHJvb206IElSZWN0IHwgbnVsbDtcbiAgICBoYWxsczogSVJlY3RbXSB8IG51bGw7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLHk6IG51bWJlcix3aWR0aDogbnVtYmVyLGhlaWdodDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmxlZnQgPSBudWxsXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsXG4gICAgICAgIHRoaXMucm9vbSA9IG51bGxcbiAgICAgICAgdGhpcy5oYWxscyA9IG51bGxcbiAgICB9XG5cbiAgICBoYXNTcGxpdCgpOiBib29sZWFue1xuICAgICAgICBpZih0aGlzLmxlZnQgIT0gbnVsbCB8fCB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBzcGxpdCwgY3V0IGl0IG91dCFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICB9XG4gICAgc3BsaXQoKTogYm9vbGVhbntcbiAgICAgICAgaWYodGhpcy5oYXNTcGxpdCgpKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwbGl0SG9yaXpvbnRhbGx5OiBib29sZWFuID0gUkFORE9NLm5leHQoKSA8IDAuNVxuICAgICAgICBpZih0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQgJiYgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0ID4gMS4yNSl7XG4gICAgICAgICAgICBzcGxpdEhvcml6b250YWxseSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmhlaWdodCA+IHRoaXMud2lkdGggJiYgdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoID49IDEuMjUpe1xuICAgICAgICAgICAgc3BsaXRIb3Jpem9udGFsbHkgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXggPSAoc3BsaXRIb3Jpem9udGFsbHkgPyB0aGlzLmhlaWdodCA6IHRoaXMud2lkdGgpIC0gTUlOX0xFQUZfU0laRVxuICAgICAgICBpZihtYXggPD0gTUlOX0xFQUZfU0laRSl7XG4gICAgICAgICAgICAvLyB0byBzbW9sLCBkb24ndCBzcGxpdCBhbnkgbW9yZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIGEgc3BsaXQsIGNhbGN1bGF0ZWQgcmFuZG9tbHlcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBSQU5ET00ubmV4dEludChNSU5fTEVBRl9TSVpFLCBtYXgpXG5cbiAgICAgICAgaWYoc3BsaXRIb3Jpem9udGFsbHkpe1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbmV3IExlYWYodGhpcy54LHRoaXMueSwgdGhpcy53aWR0aCwgc3BsaXQpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0PSBuZXcgTGVhZih0aGlzLngsIHRoaXMueSArIHNwbGl0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHNwbGl0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbmV3IExlYWYodGhpcy54LHRoaXMueSwgc3BsaXQsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5yaWdodD0gbmV3IExlYWYodGhpcy54ICsgc3BsaXQsIHRoaXMueSwgdGhpcy53aWR0aCAtIHNwbGl0LCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNyZWF0ZVJvb21zKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmxlZnQgIT0gbnVsbCB8fCB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgaWYodGhpcy5sZWZ0ICE9IG51bGwgfHwgdGhpcy5yaWdodCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5sZWZ0IGFzIExlYWZcbiAgICAgICAgICAgICAgICBsZWZ0LmNyZWF0ZVJvb21zKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmlnaHQgIT0gbnVsbCB8fCB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5yaWdodCBhcyBMZWFmXG4gICAgICAgICAgICAgICAgcmlnaHQuY3JlYXRlUm9vbXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmxlZnQgIT0gbnVsbCAmJiB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRSb29tID0gdGhpcy5sZWZ0LmdldFJvb20oKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Um9vbSA9IHRoaXMucmlnaHQuZ2V0Um9vbSgpXG4gICAgICAgICAgICAgICAgaWYobGVmdFJvb20gIT0gbnVsbCAmJiByaWdodFJvb20gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSGFsbChsZWZ0Um9vbSBhcyBJUmVjdCwgcmlnaHRSb29tIGFzIElSZWN0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgcm9vbVNpemUgPSBQb2ludC5tYWtlKFJBTkRPTS5uZXh0SW50KDMsIHRoaXMud2lkdGggLSAyKSwgUkFORE9NLm5leHRJbnQoMywgdGhpcy5oZWlnaHQgLSAyKSlcbiAgICAgICAgICAgIGNvbnN0IHJvb21Qb3MgPSBQb2ludC5tYWtlKFJBTkRPTS5uZXh0SW50KDEsIHRoaXMud2lkdGggLSByb29tU2l6ZS54IC0gMSksIFJBTkRPTS5uZXh0SW50KDEsIHRoaXMuaGVpZ2h0IC0gcm9vbVNpemUueSAtIDEpKVxuICAgICAgICAgICAgdGhpcy5yb29tID0gUmVjdC5tYWtlKHRoaXMueCArIHJvb21Qb3MueCwgdGhpcy55ICsgcm9vbVBvcy55LCByb29tU2l6ZS54LCByb29tU2l6ZS55KVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvb20oKTogSVJlY3QgfCBudWxsIHtcbiAgICAgICAgaWYodGhpcy5yb29tICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxSb29tOiBJUmVjdCB8IG51bGwgPSBudWxsXG4gICAgICAgICAgICBsZXQgclJvb206IElSZWN0IHwgbnVsbCA9IG51bGxcbiAgICAgICAgICAgIGlmKHRoaXMubGVmdCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsUm9vbSA9ICh0aGlzLmxlZnQgYXMgTGVhZikuZ2V0Um9vbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHJSb29tID0gKHRoaXMucmlnaHQgYXMgTGVhZikuZ2V0Um9vbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsUm9vbSA9PSBudWxsICYmIHJSb29tID09IG51bGwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9IGVsc2UgaWYoclJvb20gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxSb29tXG4gICAgICAgICAgICB9IGVsc2UgaWYobFJvb20gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJSb29tXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBSQU5ET00ubmV4dCgpID4gMC41ID8gbFJvb20gOiByUm9vbVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUhhbGwoc3RhcnQ6IElSZWN0LCBlbmQ6IElSZWN0KTogdm9pZHtcbiAgICAgICAgdGhpcy5oYWxscyA9IFtdXG4gICAgICAgIC8vIHBpY2sgYSByYW5kb20gcG9pbnQgaW5zaWRlIGJvdGggcm9vbXMgYW5kIGNvbm5lY3QgdGhlbVxuICAgICAgICBjb25zdCBzdGFydFAgPSBQb2ludC5tYWtlKFxuICAgICAgICAgICAgUkFORE9NLm5leHRJbnQoc3RhcnQueCArIDEsIHN0YXJ0LnggKyBzdGFydC53aWR0aCAtIDIpLFxuICAgICAgICAgICAgUkFORE9NLm5leHRJbnQoc3RhcnQueSArIDEsIHN0YXJ0LnkgKyBzdGFydC5oZWlnaHQgLSAyKVxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgZW5kUCA9IFBvaW50Lm1ha2UoXG4gICAgICAgICAgICBSQU5ET00ubmV4dEludChlbmQueCArIDEsIGVuZC54ICsgZW5kLndpZHRoIC0gMiksXG4gICAgICAgICAgICBSQU5ET00ubmV4dEludChlbmQueSArIDEsIGVuZC55ICsgZW5kLmhlaWdodCAtIDIpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgbGVmdFggPSBNYXRoLm1pbihzdGFydFAueCwgZW5kUC54KVxuICAgICAgICBjb25zdCByaWdodFggPSBNYXRoLm1heChzdGFydFAueCwgZW5kUC54KVxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5taW4oc3RhcnRQLnksIGVuZFAueSlcbiAgICAgICAgY29uc3QgYm90dG9tWSA9IE1hdGgubWF4KHN0YXJ0UC55LCBlbmRQLnkpXG4gICAgICAgIGlmKFJBTkRPTS5uZXh0SW50KDAsMSkgPT09IDEpe1xuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBmaXJzdFxuICAgICAgICAgICAgdGhpcy5oYWxscy5wdXNoKFJlY3QubWFrZShsZWZ0WCwgc3RhcnRQLnksIHJpZ2h0WCAtIGxlZnRYLCAxKSlcbiAgICAgICAgICAgIHRoaXMuaGFsbHMucHVzaChSZWN0Lm1ha2UoZW5kUC54LCB0b3BZLCAxLCBib3R0b21ZIC0gdG9wWSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxzLnB1c2goUmVjdC5tYWtlKHN0YXJ0LngsIHRvcFksIDEsIGJvdHRvbVkgLSB0b3BZKSlcbiAgICAgICAgICAgIHRoaXMuaGFsbHMucHVzaChSZWN0Lm1ha2UobGVmdFgsIGVuZFAueSwgcmlnaHRYIC0gbGVmdFgsIDEpKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0LCBlbmQsIHRoaXMuaGFsbHMpXG4gICAgfVxufVxuY29uc3Qgcm9vbXMgPSBbXVxuY29uc3QgbGVhZnM6IExlYWZbXSA9IFtdXG5cbmZ1bmN0aW9uICogcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb21zOiBJUmVjdFtdLCBkZWJ1Z0dyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+KTogYW55e1xuICAgIC8vIENsZWFyIG91dCBhbGwgdGhlIHRpbGVzXG4gICAgY29uc3QgY2xlYXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHRpbGVHcmlkLmZvckVhY2goKHQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gdHJ1ZVxuICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgdC5jb250YWluZWQgPSB0cnVlXG4gICAgICAgICAgICB0LmV4cGxvcmVkID0gdHJ1ZSAvLyByZW1vdmUgbGF0ZXJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKVxuXG4gICAgLy8gY29uc3Qgb3V0bGluZVJlY3QgPSAocmVjdDogSVJlY3QpOiB2b2lkID0+IHtcbiAgICAvLyAgICAgZm9yKGxldCB5ID0gcmVjdC55OyB5IDwgcmVjdC55ICsgcmVjdC5oZWlnaHQ7IHkrKyl7XG4gICAgLy8gICAgICAgICBmb3IobGV0IHggPSByZWN0Lng7IHggPCByZWN0LnggKyByZWN0LndpZHRoOyB4Kyspe1xuICAgIC8vICAgICAgICAgICAgIGlmKHkgPT09IHJlY3QueSB8fCB4ID09PSByZWN0LnggfHwgeCA9PT0gcmVjdC54ICsgcmVjdC53aWR0aCAtIDEgfHwgeSA9PT0gcmVjdC55ICsgcmVjdC5oZWlnaHQgLSAxKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAvLyAgICAgICAgICAgICAgICAgdC5ibG9ja01vdmUgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICB0LmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvLyBjb25zdCBvdXRsaW5lTGVhdmVzID0gKCk6IHZvaWQgPT4ge1xuICAgIC8vICAgICBsZWFmcy5mb3JFYWNoKChsKTogdm9pZCA9PiB7XG4gICAgLy8gICAgICAgICBvdXRsaW5lUmVjdChsKVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICAvLyBUT0RPOiBEaXNhYmxlIGVudGl0aWVzIG9yIHBsYWNlbWVudCwgZXNzZW50aWFsbHkgc3RvcCB1cyBiZWZvcmUgd2UgcGxhY2UgYWxsIG9mIHRoYXQgc3R1ZmZcbiAgICAvLyBMZXQncyBtYWtlIG9uZSBiaWcgbGVhZiBhdCB0aGUgYmVnaW5uaW5nXG4gICAgY29uc3Qgcm9vdCA9IG5ldyBMZWFmKDAsMCwgdGlsZUdyaWQud2lkdGggLSAxLCB0aWxlR3JpZC5oZWlnaHQgLSAxKVxuICAgIGxlYWZzLnB1c2gocm9vdClcbiAgICBsZXQgaGFkU3BsaXQgPSB0cnVlXG4gICAgXG4gICAgd2hpbGUoaGFkU3BsaXQpe1xuICAgICAgICBoYWRTcGxpdCA9IGZhbHNlXG4gICAgICAgIC8vIG91dGxpbmVMZWF2ZXMoKVxuICAgICAgICAvLyB5aWVsZFxuICAgICAgICBsZWFmcy5mb3JFYWNoKChsOiBMZWFmKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZighbC5oYXNTcGxpdCgpKXtcbiAgICAgICAgICAgICAgICBpZihsLndpZHRoID4gTUFYX0xFQUZfU0laRSB8fCBsLmhlaWdodCA+IE1BWF9MRUFGX1NJWkUgfHwgUkFORE9NLm5leHQoKSA+IDAuMjUpe1xuICAgICAgICAgICAgICAgICAgICBpZihsLnNwbGl0KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVhZnMucHVzaChsLmxlZnQgYXMgTGVhZilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYWZzLnB1c2gobC5yaWdodCBhcyBMZWFmKVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFkU3BsaXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIFxuICAgIGNsZWFyKClcbiAgICByb290LmNyZWF0ZVJvb21zKClcbiAgICBmb3IobGV0IGkgPSBsZWFmcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKXtcbiAgICAgICAgY29uc3QgbCA9IGxlYWZzW2ldXG4gICAgICAgIC8vIGxlYWZzLmZvckVhY2goKGw6IExlYWYpOiB2b2lkID0+IHtcbiAgICAgICAgLy8gZHJhdyBlYWNoIG9mIHRoZSBlZGdlc1xuICAgICAgICBpZihsLnJvb20gIT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCByb29tID0gbC5yb29tIGFzIElSZWN0XG4gICAgICAgICAgICBmb3IobGV0IHkgPSByb29tLnk7IHkgPCByb29tLnkgKyByb29tLmhlaWdodCAtIDE7IHkrKyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB4ID0gcm9vbS54OyB4IDwgcm9vbS54ICsgcm9vbS53aWR0aCAtIDE7IHgrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYobC5oYWxscyAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IGhhbGxzID0gbC5oYWxscyBhcyBJUmVjdFtdXG4gICAgICAgICAgICBoYWxscy5mb3JFYWNoKChyb29tOiBJUmVjdCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeSA9IHJvb20ueTsgeSA8IHJvb20ueSArIHJvb20uaGVpZ2h0OyB5Kyspe1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHggPSByb29tLng7IHggPCByb29tLnggKyByb29tLndpZHRoOyB4Kyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhoYWxscylcbiAgICAgICAgfVxuICAgICAgICAvLyB9KVxuICAgIH1cbiAgICAvL3lpZWxkXG5cblxuXG4gICAgLy8gTmV4dCBwYXJ0aXRpb24gdGhlIHNwYWNlXG4gICAgLy8gdXNpbmcgdGhpcyBmb3IgcmVmZXJlbmNlOiBodHRwczovL2dhbWVkZXZlbG9wbWVudC50dXRzcGx1cy5jb20vdHV0b3JpYWxzL2hvdy10by11c2UtYnNwLXRyZWVzLXRvLWdlbmVyYXRlLWdhbWUtbWFwcy0tZ2FtZWRldi0xMjI2OFxufVxuXG5leHBvcnQgeyBwcm9ncmVzc2l2ZU1hcEdlbmVyYXRvciB9XG4iLCJsZXQgX2lkID0gMFxuY29uc3QgbmV4dElkID0gKCk6IG51bWJlciA9PiBfaWQrK1xuXG4vLyBUT0RPOiBNYWtlIG1lc3NhZ2VzIGVudW1zP1xuXG4vLyBUT0RPOiBNYWtlIGFuIGludGVyZmFjZSBmb3IgdGhlIHN1YnNjcmliZXIgZnVuY3Rpb25cbnR5cGUgU3Vic2NyaWJlckZ1bmN0aW9uID0gKG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZykgPT4gdm9pZFxuXG5pbnRlcmZhY2UgU3Vic2NyaWJlck5vZGUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbjtcbiAgICBwcmlvcml0eTogbnVtYmVyO1xuICAgIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbn1cblxuXG5cbmNvbnN0IG1ha2VTdWJOb2RlID0gKHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwLCBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGwgPSBudWxsKTogU3Vic2NyaWJlck5vZGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBuZXh0SWQoKSxcbiAgICAgICAgc3ViRm4sXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBuZXh0XG4gICAgfVxufVxuXG4vLyBUT0RPOiA/PyBNYWtlIGl0IHNvIGEgc3Vic2NyaWJlciBsaXN0IGNvdWxkIGJlIGRlYWZlbmVkL2xpc3Rlbj9cblxuLyoqXG4gKiBBIGdyb3VwIG9mIGZ1bmN0aW9ucywgc29ydGVkIGJ5IHByaW9yaXR5LCB3aGljaCB3aWxsIGJlIGNhbGxlZCBzZXF1ZW50aWFsbHkgd2hlbiB0aGUgbGlzdCBpcyBub3RpZmllZCBvZiBhIG5ldyBtZXNzYWdlXG4gKi9cbmNsYXNzIFByaW9yaXR5U3Vic2NyaWJlckxpc3Qge1xuICAgIHJvb3Q6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICB0YWlsOiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgbGVuZ3RoOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbFxuICAgICAgICB0aGlzLnRhaWwgPSBudWxsXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIG1lc3NhZ2VzIHRoYXQgZ2V0IHNlbnQgdG8gdGhpcyBsaXN0IHZpYSB0aGUgbm90aWZ5IGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBtZXNzYWdlIG9iamVjdCB3aGVuZXZlciB0aGlzIHN1YnNjcmliZXIgbGlzdCBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIGhpZ2hlciB0aGUgcHJpb3JpdHksIHRoZSBlYXJsaWVyIGl0IHdpbGwgcnVuLCBpZiBpdCBoYXMgdGhlIHNhbWUgcHJpb3JpdHkgdGhlIG9uZSB0aGF0IHdhcyBhZGRlZCBmaXJzdCB3aWxsIGZpcmUgZmlyc3RcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXJ7XG4gICAgICAgIC8vIENhc2UgIzEgRW1wdHkgU3Vic2NyaWJlciBMaXN0XG4gICAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSlcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMucm9vdFxuICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5pZFxuICAgICAgICB9IFxuICAgICAgICAvLyBDYXNlICMyIFdlIGFscmVhZHkgaGF2ZSBzb21lIHN1YnNjcmliZXJzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdCAvLyB3ZSBrbm93IGl0IHNob3VsZCBiZSBhIFN1YnNjcmliZXIgTm9kZSBhbmQgbm90IG51bGwsIGJlY2F1c2Ugd2UgYXJlIGhlcmVcblxuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlLCBuZXcgcm9vdFxuICAgICAgICAgICAgaWYocHJpb3JpdHkgPCB0cmF2ZWxsZXIhLnByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRoaXMucm9vdClcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm9ybWFsIGNhc2Ugd2UgaGF2ZSBvdGhlciB0aGluZ3MgdG8gd29ycnkgYWJvdXRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlKHRyYXZlbGxlciAmJiB0cmF2ZWxsZXIubmV4dCAmJiB0cmF2ZWxsZXIubmV4dC5wcmlvcml0eSA+PSBwcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgZWl0aGVyIGZvdW5kIGEgbm9kZSB3aXRoIGxvd2VyIHByaW9yaXR5IHRoYW4gdXMgb3Igd2UgaGF2ZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAgICAgICAgICAgdHJhdmVsbGVyIS5uZXh0ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0cmF2ZWxsZXIhLm5leHQpXG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0cmF2ZWxsZXJzIHdhcyB0aGUgb2xkIHRhaWxcbiAgICAgICAgICAgICAgICBpZih0cmF2ZWxsZXIgPT09IHRoaXMudGFpbCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgbmV4dCBvbmUgaXMgdGhlIG5ldyB0YWlsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IHRyYXZlbGxlciEubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbGxlciEubmV4dC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1vc3QgaW1wb3JhbnQgaW5mb3JtYXRpb24gZm9yIHRoZSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB0b3BpYyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggcHVic3ViIHRvIHJlbWluZCB0aGUgc3Vic2NyaWJlciBvZiB0aGUgc3BlY2lmaWMgdG9waWMgb3Igc3VidG9waWNcbiAgICAgKi9cbiAgICBub3RpZnkobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3RcbiAgICAgICAgd2hpbGUodHJhdmVsbGVyICE9IG51bGwpe1xuICAgICAgICAgICAgdHJhdmVsbGVyLnN1YkZuKG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0iLCJpbXBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSBmcm9tICcuL3ByaW9yaXR5U3Vic2NyaWJlckxpc3QnXG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vKipcbiAqIFB1YnN1YiBpcyBhIHRvcGljLWJhc2VkIG9ic2VydmVyIHBhdHRlcm4gaW1wbGVtZW50YXRpb24gZGVzaWduZWQgdG8gYXZvaWQgdGlnaHQgY291cGxpbmcgb2YgY29tcG9uZW50c1xuICovXG5jbGFzcyBQdWJTdWIge1xuICAgIHRvcGljczogSGFzaDxQcmlvcml0eVN1YnNjcmliZXJMaXN0PjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnRvcGljcyA9IHt9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGEgbWVzc2FnZSB0byBhbGwgc3Vic2NyaWJlcnMgdG8gYSB0b3BpY1xuICAgICAqIEBwYXJhbSB0b3BpYyBUb3BpYyB0byB1c2UsIGlmIG5vYm9keSBpcyBzdWJzY3JpYmVkIHRvIGl0LCBub3RoaW5nIGhhcHBlbnNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgYWN0dWFsIG1lc3NhZ2UgdG8gc2VuZCwgdGhpcyBjb3VsZCBiZSBhbnl0aGluZywgYnV0IGl0J3MgYSBzaW5nbGUgdGhpbmdcbiAgICAgKi9cbiAgICBwdWJsaXNoKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdLm5vdGlmeShtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBzcGVjaWZpYyB0b3BpYyB3aXRoIGEgZ2l2ZW4gcHJpb3JpdHksIHJldHVybnMgYW4gaWQgdGhhdCB5b3UnbGwgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB0b3BpYyB0aGUgc3BlY2lmaWMgdG9waWMgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIGZuIHRoZSBmdW5jdGlvbiB0byByZWNpZXZlIHRoZSBzcGVjaWZpYyBtZXNzYWdlIGFuZCB0b3BpYyBiZWluZyBicm9hZGNhc3RlZCB0b1xuICAgICAqIEBwYXJhbSBwcmlvcml0eSB0aGUgcHJpb3JpdHkgb2YgdGhlIGZ1bmN0aW9uIHRvIHN1YnNjcmliZSB0bywgaGlnaGVyIG51bWJlcnMgcnVuIGZpcnN0LCB0aGUgZGVmYXVsdCBpcyB6ZXJvLCBuZWdhdGl2ZSBudW1iZXJzIGFyZSBhbGxvd2VkXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcsIGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgaWYoIXRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10gPSBuZXcgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9waWNzW3RvcGljXS5zdWJzY3JpYmUoZm4sIHByaW9yaXR5KVxuICAgIH1cbn1cbi8vIE9VUiBVTklWRVJTQUwgREVGQVVMVCBQVUJTVUJcbmNvbnN0IFBVQlNVQiA9IG5ldyBQdWJTdWIoKVxuZXhwb3J0IHtQVUJTVUIsIFB1YlN1Yn0iLCIvKipcbiAqIEludGVyZmFjZSBmb3IgUmVuZGVyIENlbGxcbiAqL1xuaW50ZXJmYWNlIElSZW5kZXJDZWxsIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nOyAvLyB0aGlzIHNob3VsZCBvbmx5IGJlIHN0cmluZyBvZiBsZW5ndGggMVxuICAgIGZvcmVDb2xvcjogc3RyaW5nO1xuICAgIGJhY2tDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgseSwgY2hhcmFjdGVyLCBmb3JlQ29sb3IsIGJhY2tDb2xvclxuICAgIH1cbn1cblxuY29uc3QgUmVuZGVyQ2VsbCA9IHtcbiAgICBtYWtlXG59XG5cbmV4cG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsfSIsImltcG9ydCB7SVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcblxuaW50ZXJmYWNlIEhhc2hTdHI8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5pbnRlcmZhY2UgSGFzaE51bTxUPiB7XG4gICAgW2tleTogbnVtYmVyXTogVDtcbn1cblxuY29uc3QgY29kZSA9IChjaGFyOiBzdHJpbmcpOiBudW1iZXIgPT4gY2hhci5jaGFyQ29kZUF0KDApXG5jb25zdCBDSEFSQUNURVJfSEVMUEVSOiBIYXNoU3RyPHN0cmluZz4gPSB7XG4gICAgVkVSVElDQUxfTElORTogJ+KUgicsXG4gICAgSE9SSVpPTlRBTF9MSU5FOiAn4pSAJyxcbiAgICBDUk9TU19MSU5FUzogJ+KUvCcsXG4gICAgVF9MRUZUOiAn4pSkJyxcbiAgICBUX1VQOiAn4pS0JyxcbiAgICBUX1JJR0hUOiAn4pScJyxcbiAgICBUX0RPV046ICfilKwnLFxuICAgIFRPUF9SSUdIVDogJ+KUlCcsXG4gICAgQk9UVE9NX1JJR0hUOiAn4pSMJyxcbiAgICBCT1RUT0xfTEVGVDogJ+KUkCcsXG4gICAgVE9QX0xFRlQ6ICfilJgnXG59XG5cbmNvbnN0IFRJTEVfV0lEVEggPSAxMCwgVElMRV9IRUlHSFQgPSAxMFxuXG5jb25zdCBDT0RFX1RPX1JFQ1RfSEFTSDogSGFzaE51bTxJUmVjdD4gPSB7fVxuY29uc3Qgc3BhY2VDb2RlID0gICBjb2RlKCcgJylcbmNvbnN0IGF0Q29kZSA9ICAgICAgY29kZSgnQCcpXG5jb25zdCBhQ29kZSA9ICAgICAgIGNvZGUoJ2EnKVxuY29uc3QgekNvZGUgPSAgICAgICBjb2RlKCd6JylcbmNvbnN0IEFDb2RlID0gICAgICAgY29kZSgnQScpXG5jb25zdCBaQ29kZSA9ICAgICAgIGNvZGUoJ1onKVxuXG5cbmNvbnN0IGN0cmhIZWxwZXIgPSAoY29kZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2NvZGVdID0gUmVjdC5tYWtlKHgseSwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5cbi8vIFdlIHdpbGwgZmlsbCBpbiB0aGUgb3RoZXIgY2hhcmFjdGVycyBhcyBuZWNlc3NhcnlcbkNPREVfVE9fUkVDVF9IQVNIW3NwYWNlQ29kZV0gPSBSZWN0Lm1ha2UoMCwgMCwgMTAsIDEwKVxuQ09ERV9UT19SRUNUX0hBU0hbYXRDb2RlXSA9IFJlY3QubWFrZSgwLCAxMCwgMTAsIDEwKVxuZm9yKGxldCBpID0gQUNvZGU7IGkgPD0gWkNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBBQ29kZSkgKiAxMCwgMzAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuZm9yKGxldCBpID0gYUNvZGU7IGkgPD0gekNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBhQ29kZSkgKiAxMCwgNDAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuLy8gZm9yIGJyZXZpdGllcyBzYWtlXG5jb25zdCBDSCA9IENIQVJBQ1RFUl9IRUxQRVJcbmN0cmhIZWxwZXIoY29kZShDSC5WRVJUSUNBTF9MSU5FKSwgMTQwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkhPUklaT05UQUxfTElORSksIDE1MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5DUk9TU19MSU5FUyksIDE2MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0xFRlQpLCAxNzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9VUCksIDE4MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1JJR0hUKSwgMTkwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfRE9XTiksIDIwMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfUklHSFQpLCAyMTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9NX1JJR0hUKSwgMjIwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTF9MRUZUKSwgMjMwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9MRUZUKSwgMjQwLDEwKVxuXG5cbmZ1bmN0aW9uIGRyYXdTZWN0aW9uKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0aWxlc2hlZXQ6IGFueSwgc3JjUmVjdDogSVJlY3QsIGRlc3RSZWN0OiBJUmVjdCwgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogdm9pZHtcbiAgICBjdHguY2xlYXJSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4LmRyYXdJbWFnZSh0aWxlc2hlZXQsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCwgZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcidcbiAgICBjdHguZmlsbFN0eWxlPWZvcmVDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgY3R4LmZpbGxTdHlsZT1iYWNrQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG59XG5cbmNvbnN0IGRyYXdTdHJpbmdUb0dyaWQgPSAoZ3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4sIG1lc3NhZ2U6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBsZXQgY3VycmVudFggPSB4XG4gICAgbGV0IGN1cnJlbnRZID0geVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbGV0dGVyID0gbWVzc2FnZVtpXVxuICAgICAgICBpZihncmlkLmluQm91bmRzWFkoY3VycmVudFgsIGN1cnJlbnRZKSAmJiBsZXR0ZXIgIT0gJ1xcbicpe1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ3JpZC5nZXRYWShjdXJyZW50WCxjdXJyZW50WSlcbiAgICAgICAgICAgIHRhcmdldC5jaGFyYWN0ZXIgPSBsZXR0ZXJcbiAgICAgICAgICAgIHRhcmdldC5iYWNrQ29sb3IgPSBDT0xPUlMud2hpdGVcbiAgICAgICAgICAgIHRhcmdldC5mb3JlQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgfVxuICAgICAgICBpZihsZXR0ZXIgIT09ICdcXG4nKXtcbiAgICAgICAgICAgIGN1cnJlbnRYKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRZKytcbiAgICAgICAgICAgIGN1cnJlbnRYID0geFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgIHsgQ09ERV9UT19SRUNUX0hBU0gsIENIQVJBQ1RFUl9IRUxQRVIsIGNvZGUsIGRyYXdTZWN0aW9uLCBkcmF3U3RyaW5nVG9HcmlkIH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSwgVGlsZU1hdGVyaWFsIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRk9WQ2VsbCB9IGZyb20gJy4vZm92J1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvR3JpZCA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgZW50aXRpZXM6IEVudGl0eVtdLCByZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgY2FtZXJhRnJhbWU6IElSZWN0LCBkZWJ1Z0dyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+KTogdm9pZCA9PiB7XG4gICAgLy8gcmVuZGVyR3JpZCBpcyBpbiBTQ1JFRU4gY29vcmRpbmF0ZXMsIGFuZCB3aWxsIGhhdmUgaXQncyBYWSBpZ25vcmVkIGZvciBvdXIgcHVycG9zZXNcbiAgICAvLyB0aWxlR3JpZCwgZW50aXRpZXMgYW5kIGZvdkdyaWQgYXJlIGluIFdPUkxEIGNvb3JkaW5hdGVzIGFuZCB3aWxsIGhhdmUgdGhlaXIgWFkgYW5kIHkgaWdub3JlZCBmb3Igbm93XG5cbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgcmVuZGVyR3JpZCBhbmQgdGhlIGNhbWVyYXNcbiAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICBQb2ludC5zZXQod29ybGRQLCBzY3JlZW5QLnggKyBjYW1lcmFGcmFtZS54LCBzY3JlZW5QLnkgKyBjYW1lcmFGcmFtZS55KVxuXG4gICAgICAgICAgICAvLyBMZXQncyBkbyBzb21lIGJvdW5kcyBjaGVja2luZ1xuICAgICAgICAgICAgLy8gd2Uga25vdyB0aGVzZSBwb2l0bnMgYXJlIGFsd2F5cyBpbiBjYW1lcmFzLCBzbyBuZXZlciBuZWVkIHRvIGNoZWNrIHRoYXRcbiAgICAgICAgICAgIC8vIHdlIGFyZSBnb2luZyB0byBvZmZsb2FkIHRoZSBjYXNlIG9mIGNoZWNraW5nIGlmIHRoZSByZW5kZXJHcmlkIGNhbiBmaXQgdGhlIGNhbWVyYVNpemUgZm9yIG5vd1xuICAgICAgICAgICAgLy8gc28gZm9yIG5vdyBqdXN0IGNoZWNrIGlmIHdlIGFyZSBpbnNpZGUgb2YgdGhlIHRpbGVHcmlkLCB3aGljaCBjdXJyZW50bHkgc2hvdWxkIGJlIHRoZSBzYW1lIGRpbWVuc2lvbnMgYXMgdGhlIGZvdkdyaWQsIHRob3VnaCB0aGF0IGlzIGJvdW5kIHRvIGNoYW5nZSBhcyB3ZSB0cnkgYW5kIG9wdGltaXplIHRoaW5nc1xuICAgICAgICAgICAgLy8gc29vb29vbywgbGV0J3MgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSB0aGUgdGlsZUdyaWRcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBsZXQgaXNMaXQgPSBmb3ZDZWxsLnZpc2libGUgLy8gaXQncyBsaXQgZmFtLCB3ZWxsLCBzb21lIG9mIHRoZSB0aW1lXG4gICAgICAgICAgICBsZXQgaW5Cb3VuZHMgPSB0aWxlR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSlcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lZCBvdXIgZXhwbG9yYXRpb24gc3RhdGVcbiAgICAgICAgICAgIC8vIFRoaXMgaGFzIGJldHRlciBydWxlcyB0byBiZSBmaWd1cmVkIG91dFxuICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSAnJ1xuICAgICAgICAgICAgaWYoIWluQm91bmRzKXsgLy8gdHJlYXQgZXZlcnl0aGluZyBvdXRzaWRlIG9mIHRoZSBib3VuZHMgYXMgZXhwbG9yZWQgSSBzdXBwb3NlP1xuICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHdvcmxkUC54LCB3b3JsZFAueSlcbiAgICAgICAgICAgICAgICBpZighdGlsZS5leHBsb3JlZCl7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBREQgRE9PUlNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNXYWxsID0gdGlsZS5ibG9ja01vdmUgJiYgdGlsZS5ibG9ja1NpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzR3JvdW5kID0gIWlzV2FsbCAmJiB0aWxlLmNvbnRhaW5lZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NwYWNlID0gIWlzV2FsbCAmJiAhdGlsZS5jb250YWluZWRcblxuICAgICAgICAgICAgICAgICAgICBpZih0aWxlLm1hdGVyaWFsID09PSBUaWxlTWF0ZXJpYWwuTWV0YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTcGFjZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9vdXRzaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19vdXRzaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzR3JvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLm1ldGFsLmxpZ2h0R3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubWV0YWwuZGFya0dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc1dhbGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubWV0YWwubGlnaHRXYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubWV0YWwuZGFya1dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NwYWNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X291dHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX291dHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNHcm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19ncm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNXYWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X3dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX3dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgZW50aXR5LnggLSBjYW1lcmFGcmFtZS54LCBlbnRpdHkueSAtIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIG9mIHRoZSBjYW1lcmEgYm91bmRzXG4gICAgICAgIGlmKGNhbWVyYUZyYW1lLnggPD0gZW50aXR5LnggJiYgZW50aXR5LnggPD0gY2FtZXJhRnJhbWUueCArIGNhbWVyYUZyYW1lLndpZHRoIC0gMSAmJlxuICAgICAgICAgICAgY2FtZXJhRnJhbWUueSA8PSBlbnRpdHkueSAmJiBlbnRpdHkueSA8PSBjYW1lcmFGcmFtZS55ICsgY2FtZXJhRnJhbWUuaGVpZ2h0IC0gMSl7XG4gICAgICAgICAgICBjb25zdCByQ2VsbDogSVJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGw6IEZPVkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgICAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgaWYoREVCVUcuREVCVUdfRFJBVyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHJlbENhbWVyYVggPSAwOyByZWxDYW1lcmFYIDwgY2FtZXJhRnJhbWUud2lkdGg7IHJlbENhbWVyYVgrKyl7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSByZW5kZXJHcmlkIGFuZCB0aGUgY2FtZXJhc1xuICAgICAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgdGlsZUdyaWQsIGZvdkdyaWQsIGFuZCBlbnRpdGllc1xuICAgICAgICAgICAgICAgIFBvaW50LnNldCh3b3JsZFAsIHNjcmVlblAueCArIGNhbWVyYUZyYW1lLngsIHNjcmVlblAueSArIGNhbWVyYUZyYW1lLnkpXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJDZWxsICA9IHJlbmRlckdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgICAgIGlmKGRlYnVnR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWJ1Z0NlbGwgPSBkZWJ1Z0dyaWQuZ2V0UCh3b3JsZFApXG4gICAgICAgICAgICAgICAgICAgIGlmKGRlYnVnQ2VsbC5iYWNrQ29sb3IgIT0gQ09MT1JTLmJsYWNrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gZGVidWdDZWxsLmJhY2tDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSBkZWJ1Z0NlbGwuY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmZvcmVDb2xvciA9IGRlYnVnQ2VsbC5mb3JlQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFdBUk5JTkc6IEhFUkUgVEhFUkUgQkUgRFJBR09OUywgKG9yIGluIHRoaXMgY2FzZSwgYSBsb3Qgb2YgY29kZSBJIGRvbid0dW5kZXJzdGFuZClcblxuLy8gV0UgT05MWSBXQU5UIE9ORSBSTkcgR0VORVJBVE9SIEJFQ0FVU0UgV0UgQUxXQVlTIFdBTlQgQSBTRUVEIEZPUiBJVFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTIxMjk1L3NlZWRpbmctdGhlLXJhbmRvbS1udW1iZXItZ2VuZXJhdG9yLWluLWphdmFzY3JpcHRcblxuLy8gSGFzaGluZyBmdW5jdGlvbiBmb3IgdGFraW5nIHNpbXBsZSBzdHJpbmcgYW5kIGNyZWF0aW5nIGJldHRlciBcInRydWVcIiBzZWVkc1xuLy8gSSBIQVZFIE5PIElERUEgV0hBVCBUSEUgTUFHSUMgTlVCTUVSUyBBUkUgRk9SXG5mdW5jdGlvbiB4bXVyMyhzdHI6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgaCA9IDE3NzkwMzM3MDMgXiBzdHIubGVuZ3RoIC8vIGJpdHdpc2Ugb3IgdGhlIHN0cmluZyB3aXRoIHRoaXMgcmFuZG9tIHRoaW5nXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIHN0ci5jaGFyQ29kZUF0KGkpLCAzNDMyOTE4MzUzKVxuICAgICAgICBoID0gaCA8PCAxMyB8IGggPj4+IDE5XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCk6IGFueXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTYsIDIyNDY4MjI1MDcpXG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIGggPj4+IDEzLCAzMjY2NDg5OTA5KVxuICAgICAgICByZXR1cm4gKGggXj0gaCA+Pj4gMTYpID4+PiAwXG4gICAgfVxufVxuXG50eXBlIElSYW5kb20gPSgpID0+IG51bWJlcjtcblxuLy8gR0VORVJBVE9SU1xuZnVuY3Rpb24gc2ZjMzIoYTogYW55LCBiOiBhbnksIGM6IGFueSwgZDogYW55KTogKEZ1bmN0aW9uKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBhID4+Pj0gMDsgYj4+Pj0gMDsgYyA+Pj49IDA7IGQgPj4+PSAwXG4gICAgICAgIGxldCB0ID0gKGEgKyBiKSB8IDBcbiAgICAgICAgYSA9IGIgXiBiID4+PiA5XG4gICAgICAgIGIgPSBjICsgKGMgPDwgMykgfCAwXG4gICAgICAgIGMgPSAoYyA8PCAyMSB8IGMgPj4+IDExKVxuICAgICAgICBkID0gZCArIDEgfCAwXG4gICAgICAgIHQgPSB0ICsgZCB8IDBcbiAgICAgICAgYyA9IGMgKyB0IHwgMFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICh0ID4+PiAwKSAvIDQyOTQ5NjcyOTZcbiAgICB9XG59XG5cbi8vIE9ORSBMSU5FUiBDVVJSRU5UTFkgTk9UIElOIFVTRVxuLy8gY29uc3QgTENHPSAoczogYW55KTogRnVuY3Rpb249PigpOiBhbnk9PigyKiozMS0xJihzPU1hdGguaW11bCg0ODI3MSxzKSkpLzIqKjMxO1xuXG5jb25zdCBSQU5ET00gPSB7XG4gICAgX2dlbmVyYXRvcjogKCgpOiBhbnkgPT4ge30pIGFzIEZ1bmN0aW9uLFxuICAgIHNlZWQ6IGZ1bmN0aW9uKHNlZWRTdHI6IHN0cmluZyA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKSApOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzZWVkID0geG11cjMoc2VlZFN0cilcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gc2ZjMzIoc2VlZCgpLCBzZWVkKCksIHNlZWQoKSwgc2VlZCgpKVxuICAgICAgICByZXR1cm4gc2VlZFN0clxuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oKTogYW55IHtcbiAgICAgICAgaWYodGhpcy5fZ2VuZXJhdG9yID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuc2VlZCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRvcigpXG4gICAgfSxcbiAgICBuZXh0SW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5uZXh0KCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gICAgfVxufVxuXG5leHBvcnQgeyBSQU5ET00gfSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciB3b3JraW5nIHdpdGggYSAyRCBQb2ludFxuICovXG5pbnRlcmZhY2UgSVBvaW50IHsgIFxuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogSGVscGZ1bCBlbnVtIGZvciBkaXJlY3Rpb25zIGluIGEgZ3JpZCxcbiAqIFVwOiAteSwgRG93bjogK3ksIExlZnQ6IC14LCBSaWdodDogK3hcbiAqL1xuZW51bSBHcmlkRGlyZWN0aW9uIHtcbiAgICBVcCxcbiAgICBEb3duLFxuICAgIExlZnQsXG4gICAgUmlnaHRcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgUG9pbnRcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiB7eCx5fVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgcG9pbnQgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGFkZGluZyBib3RoIG9mIHRoZW0gdG9nZXRoZXIsIGlmIHlvdSB3YW50IHRvIGFkZCBhIHBvaW50IFRPIGFub3RoZXIgcG9pbnQsIHVzZSBhZGRUb1xuICogQHBhcmFtIGEgRmlyc3QgUG9pbnQsIHVubW9kaWZpZWRcbiAqIEBwYXJhbSBiIFNlY29uZCBQb2ludCwgdW5tb2RpZmllZFxuICovXG5jb25zdCBhZGQgPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKGEueCArIGIueCwgYS55ICsgYi55KVxufVxuXG4vKipcbiAqIEEgdXRpdGlseSB0byBtb3ZlIGluIGEgZGlyZWN0aW9uLCBhbGxvd3MgZm9yIHZhcmlhYmlsaXR5IGluIHRoZSBkaXJlY3Rpb24gd2l0aG91dCBoYXZpbmcgdG8gcmVzb3J0IHRvIG1vZGlmeWluZyB0aGUgeCBhbmQgeSBjb29yaW5kYXRlcyBpbmRpdmlkdWFsbHlcbiAqIEBwYXJhbSBwb2ludCBQb2ludCB0byBiZSBtb3ZlZCwgd2lsbCBiZSB0aGUgcmV0dXJuIHZhbHVlXG4gKiBAcGFyYW0gZGlyZWN0aW9uLCB0aGUgR3JpZCBEaXJlY3Rpb24geW91IHdhbnQgdG8gbW92ZSBpblxuICogQHBhcmFtIGRpc3RhbmNlLCBvcHRpb25hbCBkZWZhdWx0cyB0byAxLCBob3cgZmFyIHlvdSB3YW50IHRoZSBwb2ludCB0byBtb3ZlIFxuICovXG5jb25zdCBtb3ZlID0gKHBvaW50OiBJUG9pbnQsIGRpcmVjdGlvbjogR3JpZERpcmVjdGlvbiwgZGlzdGFuY2U6IG51bWJlciA9IDEpOiBJUG9pbnQgPT4ge1xuICAgIGlmKGRpcmVjdGlvbiA9IEdyaWREaXJlY3Rpb24uTGVmdCl7XG4gICAgICAgIHBvaW50LnggLT0gZGlzdGFuY2VcbiAgICB9XG4gICAgaWYoZGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5SaWdodCl7XG4gICAgICAgIHBvaW50LnggKz0gZGlzdGFuY2VcbiAgICB9XG4gICAgaWYoZGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5VcCl7XG4gICAgICAgIHBvaW50LnkgLT0gZGlzdGFuY2VcbiAgICB9XG4gICAgaWYoZGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5Eb3duKXtcbiAgICAgICAgcG9pbnQueSArPSBkaXN0YW5jZVxuICAgIH1cbiAgICByZXR1cm4gcG9pbnRcbn1cblxuLyoqXG4gKiBBZGQgdGhlIHZhbHVlIG9mIFBvaW50IGEgdG8gUG9pbnQgYlxuICogQHBhcmFtIGEgVGhlIHBvaW50IHRoYXQgY2hhbmdlcywgd2lsbCBoYXZlIGIgYWRkZWQgdG8gaXRcbiAqIEBwYXJhbSBiIFRoZSBwb2ludCB3aG9zZSB2YWx1ZSBpcyBhZGRlZCB0byB0aGUgb3RoZXIsIGl0IGlzIHVubW9kaWZpZWQgaXRzZWxmXG4gKi9cbmNvbnN0IGFkZFRvID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICBhLnggKz0gYi54XG4gICAgYS55ICs9IGIueVxuICAgIHJldHVybiBhXG59XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZXMgb2YgYSBwb2ludCB3aXRoIHggYW5kIHkgdmFsdWVzLCByZXR1cm5zIHRoZSBub3cgbW9kaWZpZWQgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBwb2ludCB0byBiZSBtb2RpZmllZFxuICogQHBhcmFtIHggbmV3IHggdmFsdWVcbiAqIEBwYXJhbSB5IG5ldyB5IHZhbHVlXG4gKi9cbmNvbnN0IHNldCA9IChwb2ludDogSVBvaW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcG9pbnQueCA9IHhcbiAgICBwb2ludC55ID0geVxuICAgIHJldHVybiBwb2ludFxufVxuXG4vKipcbiAqIENvcHkgYSBwb2ludFxuICogQHBhcmFtIHBvaW50IFBvaW50IHRoYXQgd2lsbCBiZSBjb3BpZWRcbiAqL1xuY29uc3QgY29weSA9IChwb2ludDogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShwb2ludC54LCBwb2ludC55KVxufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgbWVhbnQgdG8gd29yayB3aXRoIHRoaW5ncyB0aGF0IGhhdmUgdGhlIElQb2ludCBpbnRlcmZhY2VcbiAqL1xuY29uc3QgUG9pbnQgPSB7XG4gICAgbWFrZSxcbiAgICBtb3ZlLFxuICAgIGFkZCxcbiAgICBhZGRUbyxcbiAgICBzZXQsXG4gICAgY29weVxufVxuXG5leHBvcnQge0lQb2ludCwgUG9pbnQsIEdyaWREaXJlY3Rpb259IiwiaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3BvaW50J1xuaW50ZXJmYWNlIElSZWN0IGV4dGVuZHMgSVBvaW50IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RTaWRlcyB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdENvcm5lcnMge1xuICAgIHRsOiBJUG9pbnQ7XG4gICAgdHI6IElQb2ludDtcbiAgICBibDogSVBvaW50O1xuICAgIGJyOiBJUG9pbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICogQHBhcmFtIHdpZHRoIFxuICogQHBhcmFtIGhlaWdodCBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH1cbn1cblxuY29uc3Qgc2V0ID0gKHI6IElSZWN0LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgci54ID0geFxuICAgIHIueSA9IHlcbiAgICByLndpZHRoID0gd2lkdGhcbiAgICByLmhlaWdodCA9IGhlaWdodFxuICAgIHJldHVybiByXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSB1bml0IHZhbHVlIG9mIHRoZSBzaWRlcyBvZiB0aGUgcmVjdGFuZ2xlLCBsZWZ0IGFuZCByaWdodCByZXR1cm4geCBjb29yZGluYXRlcywgdG9wIGFuZCBib3R0b20gaW5jbHVkZSB5IGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gcmVjdCByZWN0YW5nbGUgdXNlZFxuICovXG5jb25zdCBzaWRlcyA9IChyZWN0OiBJUmVjdCk6IElSZWN0U2lkZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfVxufVxuY29uc3QgY29ybmVycyA9IChyZWN0OiBJUmVjdCk6IElSZWN0Q29ybmVycyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkpLFxuICAgICAgICB0cjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkpLFxuICAgICAgICBibDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICAgICAgYnI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBwb2ludDogTk9URTogVGhpcyBmaW5kcyB0aGUgSU5URUdFUiBjZW50ZXIsIGNvb3JkaW5hdGVzIGFyZSB0cnVuY2F0ZWRcbiAqIEBwYXJhbSByZWN0IFRoZSByZWN0YW5nbGUgd2UgYXJlIGZpbmRpbmcgdGhlIGNlbnRlciBvZlxuICovXG5jb25zdCBjZW50ZXIgPSAocmVjdDogSVJlY3QpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBQb2ludC5tYWtlKE1hdGguZmxvb3IocmVjdC54ICsgcmVjdC53aWR0aC8yKSwgTWF0aC5mbG9vcihyZWN0LnkgKyByZWN0LmhlaWdodC8yKSlcbn1cblxuLy8gT1BUSU1JWkU6IERvbid0IGNhbGwgc2lkZXMsIGp1c3QgdXNlIHRoZSByYXcgbnVtYmVycyBhbmQgYWRkaXRpb25cbmNvbnN0IGludGVyc2VjdHMgPSAoYTogSVJlY3QsIGI6IElSZWN0KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgYVNpZGVzID0gc2lkZXMoYSlcbiAgICBjb25zdCBiU2lkZXMgPSBzaWRlcyhiKVxuICAgIHJldHVybiBhU2lkZXMubGVmdCA8PSBiU2lkZXMucmlnaHQgJiYgYVNpZGVzLnJpZ2h0ID49IGJTaWRlcy5sZWZ0ICYmIFxuICAgICAgICBhU2lkZXMudG9wIDw9IGJTaWRlcy5ib3R0b20gJiYgYVNpZGVzLmJvdHRvbSA+PSBiU2lkZXMudG9wXG5cbiAgICAgICAgXG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHJlY3RhbmdsZXNcbiAqL1xuY29uc3QgUmVjdCA9IHtcbiAgICBtYWtlLFxuICAgIHNldCxcbiAgICBzaWRlcyxcbiAgICBjb3JuZXJzLFxuICAgIGNlbnRlcixcbiAgICBpbnRlcnNlY3RzXG59XG5cbmV4cG9ydCB7SVJlY3QsIFJlY3R9XG4iLCIvLyBJIGd1ZXNzIGV2ZXJ5dGhpbmcgd291bGQgbmVlZCBpdCdzIG93biBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi4uLiBncm9zc1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBsb2NhdGlvbnMgb24gdGhlIGJvYXJkLCBldmVudHVhbGx5IHdlIHdpbGwgcHJvYmFibHkgbW92ZSB0aGlzIGludG8gaXRzIG93biBFQ1Mgc3lzdGVtXG4gKi9cbmVudW0gVGlsZU1hdGVyaWFsIHtcbiAgICBBc3Rlcm9pZCxcbiAgICBNZXRhbFxufVxuY2xhc3MgVGlsZSB7XG4gICAgLyoqXG4gICAgICogQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgYmxvY2tNb3ZlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERvZXMgdGhpcyB0aWxlIGJsb2NrIGxpbmUgb2Ygc2lnaHRcbiAgICAgKi9cbiAgICBibG9ja1NpZ2h0OiBib29sZWFuO1xuXG4gICAgZXhwbG9yZWQ6IGJvb2xlYW47XG5cbiAgICBjb250YWluZWQ6IGJvb2xlYW47IC8vIG1vZGVscyBpZiB0aGlzIHRoaW5nIGhhcyBhIGZsb29yIGFuZCBjZWlsaW5nLCAob3IsIGluIHVuaXZlcnNlLCBzdHVmZiBzdXJyb3VuZGluZyBpdCBvbiB0aGUgei1heGlzKVxuXG4gICAgbWF0ZXJpYWw6IFRpbGVNYXRlcmlhbDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgdGlsZVxuICAgICAqIEBwYXJhbSBibG9ja01vdmUgQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqIEBwYXJhbSBibG9ja1NpZ2h0IG9wdGlvbmFsLCB3aWxsIGRlZmF1bHQgdG8gd2hhdGV2ZXIgYmxvY2tNb3ZlIGlzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBibG9ja01vdmU6IGJvb2xlYW4sIGJsb2NrU2lnaHQ/OiBib29sZWFuICl7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmJsb2NrTW92ZSA9IGJsb2NrTW92ZVxuICAgICAgICB0aGlzLmV4cGxvcmVkID0gZmFsc2VcbiAgICAgICAgaWYoYmxvY2tTaWdodCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrTW92ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tTaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVkID0gdHJ1ZVxuICAgICAgICB0aGlzLm1hdGVyaWFsID0gVGlsZU1hdGVyaWFsLkFzdGVyb2lkXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgVGlsZSwgVGlsZU1hdGVyaWFsIH0iXSwic291cmNlUm9vdCI6IiJ9