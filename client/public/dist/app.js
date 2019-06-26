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
    // TODO: Disable entities or placement, essentially stop us before we place all of that stuff
    // Let's make one big leaf at the beginning
    const root = new Leaf(0, 0, tileGrid.width - 1, tileGrid.height - 1);
    leafs.push(root);
    let hadSplit = true;
    while (hadSplit) {
        hadSplit = false;
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
    root.createRooms();
    leafs.forEach((l) => {
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
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZGVidWdTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Zvdi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oYW5kbGVJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3Byb2dyZXNzaXZlTWFwR2VuZXJhdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVyVG9HcmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFFUDtBQUVRO0FBQ007QUFDRTtBQUNWO0FBQ2lDO0FBRXBFLE1BQU0sRUFDRixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFD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QUFDLENBQUMsRUFBQyxDQUFDO0tBQ25FO0lBQ0QsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQzNHLHFEQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0tBQ3BFO0lBQ0QsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQy9HLHFEQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztLQUNuRTtJQUNELHlCQUF5QjtJQUN6QixJQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBQztRQUNsRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdB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QUMsQ0FBQztJQUN2QixPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJO1FBQzdELE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0FBR2xFLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sSUFBSSxHQUFHO0lBQ1QsSUFBSTtJQUNKLEdBQUc7SUFDSCxLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0NBQ2I7QUFFbUI7Ozs7Ozs7Ozs7Ozs7QUMvRnBCO0FBQUE7QUFBQTtBQUFBLGdGQUFnRjtBQUVoRjs7R0FFRztBQUNILElBQUssWUFHSjtBQUhELFdBQUssWUFBWTtJQUNiLHVEQUFRO0lBQ1IsaURBQUs7QUFDVCxDQUFDLEVBSEksWUFBWSxLQUFaLFlBQVksUUFHaEI7QUFDRCxNQUFNLElBQUk7SUFpQk47Ozs7T0FJRztJQUNILFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUFrQixFQUFFLFVBQW9CO1FBQ3RFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7UUFDckIsSUFBRyxVQUFVLEtBQUssU0FBUyxFQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7SUFFekMsQ0FBQztDQUNKO0FBRTRCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IE1vdXNlTW9uaXRvciB9IGZyb20gJy4vbW91c2VNb25pdG9yJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi9hc3NldEhlbHBlcidcbmltcG9ydCB7IENhbnZhc1JlbmRlcmVyIH0gZnJvbSAnLi9jYW52YXNSZW5kZXJlcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBSZWN0LCBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRF9NQU5BR0VSIH0gZnJvbSAnLi9pZE1hbmFnZXInXG5pbXBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IHsgbWFwR2VuZXJhdG9yMyB9IGZyb20gJy4vbWFwR2VuZXJhdGlvbidcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5cbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCB7IGhhbmRsZUlucHV0IH0gZnJvbSAnLi9oYW5kbGVJbnB1dCdcbmltcG9ydCB7IHJlbmRlclRvR3JpZCB9IGZyb20gJy4vcmVuZGVyVG9HcmlkJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcbmltcG9ydCB7IHByb2dyZXNzaXZlTWFwR2VuZXJhdG9yIH0gZnJvbSAnLi9wcm9ncmVzc2l2ZU1hcEdlbmVyYXRvcjInXG5cbmNvbnN0IHtcbiAgICBUSUxFX1dJRFRILFxuICAgIFRJTEVfSEVJR0hULFxuICAgIFNDUkVFTl9XSURUSCxcbiAgICBTQ1JFRU5fSEVJR0hULFxuICAgIE1BUF9XSURUSCxcbiAgICBNQVBfSEVJR0hULFxuICAgIENBTUVSQV9XSURUSCxcbiAgICBDQU1FUkFfSEVJR0hULFxuICAgIEZPVl9SQURJVVNcbn0gPSBTRVRUSU5HU1xuXG5cbi8vIElOSVRJQUxJWkUgT1VSIFNFRURcbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbmNvbnN0IHNlZWRTdHIgPSB1cmxQYXJhbXMuZ2V0KCdzZWVkJylcbmlmKCFzZWVkU3RyKXtcbiAgICBjb25zdCBzZWVkID0gUkFORE9NLnNlZWQoc2VlZFN0ciB8fCB1bmRlZmluZWQpXG4gICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgaWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDpuZXd1cmx9LCcnLG5ld3VybClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cblxufSBlbHNlIHtcbiAgICBSQU5ET00uc2VlZChzZWVkU3RyKVxufVxuXG5jb25zdCBwbGF5ZXI6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCBDT0xPUlMucGxheWVyKVxuY29uc3QgbnBjOiBFbnRpdHkgPSBuZXcgRW50aXR5KElEX01BTkFHRVIubmV4dCgpLCAzLDQsICdAJywgQ09MT1JTLm5wYylcbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG4vLyBGaW5kIG91ciBjYW52YXMgYW5kIGFkanVzdCBpdCB0byBvdXIgc2V0dGluZ3NcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbi8vIEluaXRpYWxpemUgb3VyIGlucHV0IG1vbml0b3JzXG5jb25zdCBrbSA9IG5ldyBLZXlib2FyZE1vbml0b3IoKS5hdHRhY2goZG9jdW1lbnQpXG5jb25zdCBtbSA9IG5ldyBNb3VzZU1vbml0b3IoKS5hdHRhY2goY2FudmFzKVxuXG4vLyBJbml0aWFsaXplIG91ciBjYW52YXMgcmVuZGVyZXJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKClcbmNvbnN0IGNhbWVyYUZyYW1lID0gUmVjdC5tYWtlKDAsMCwgQ0FNRVJBX1dJRFRILCBDQU1FUkFfSEVJR0hUKSAvLyBDQU1FUkEgSVMgSU4gV09STEQgQ0VMTFMsIE5PVCBBQlNPTFVURSBVTklUU1xuXG4vLyBJbml0aWFsaXplIG91ciBHcmlkc1xuY29uc3QgcmVuZGVyR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxucmVuZGVyR3JpZC5zZXRFYWNoKChjZWxsOiBhbnksIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiBSZW5kZXJDZWxsLm1ha2UoeCx5LCcnLCBDT0xPUlMuYmxhY2ssIENPTE9SUy5ibGFjaylcbn0pXG5cbi8vIFRIRVNFIEFSRSBIRVJFIEJZIERFRkFVTFQsIEJVVCBXT04nVCBCRSBTSE9XTiBVTkxFU1MgRU5BQkxFRFxuY29uc3QgZGVidWdHcmlkID0gbmV3IEdyaWQ8SVJlbmRlckNlbGw+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbmRlYnVnR3JpZC5zZXRFYWNoKChjZWxsOiBhbnksIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiBSZW5kZXJDZWxsLm1ha2UoeCx5LCcnLCBDT0xPUlMuYmxhY2ssIENPTE9SUy5ibGFjaylcbn0pXG5cbmxldCBmb3ZSZWNvbXB1dGUgPSAhREVCVUcuRElTQUJMRV9GT1ZcbmNvbnN0IGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4gPSBuZXcgR3JpZDxGT1ZDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxuZm92R3JpZC5zZXRFYWNoKCgpOiBGT1ZDZWxsID0+IHsgcmV0dXJuIHtcbiAgICB2aXNpYmxlOiBERUJVRy5ESVNBQkxFX0ZPVlxufX0pXG5cbmNvbnN0IHRpbGVHcmlkOiBHcmlkPFRpbGU+ID0gbmV3IEdyaWQ8VGlsZT4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxudGlsZUdyaWQuc2V0RWFjaCgoY2VsbDogVGlsZSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUaWxlID0+IHtcbiAgICBjb25zdCB0ID0gbmV3IFRpbGUoeCx5LCB0cnVlKVxuICAgIGlmKERFQlVHLkRJU0FCTEVfRk9WKXtcbiAgICAgICAgdC5leHBsb3JlZCA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIHRcbn0pXG5cbi8vIHRoaXMgd2lsbCBhbHNvIHBvcHVsYXRlIHRoZSByb29tc1xuY29uc3Qgcm9vbXM6IElSZWN0W10gPSBbXVxuLy9tYXBHZW5lcmF0b3IzKHRpbGVHcmlkLCByb29tcylcbi8vbWFwR2VuZXJhdG9yMih0aWxlR3JpZCwgcm9vbXMpXG5cbi8vIHRoaXMgaXMgaG9uZXN0bHkganVzdCBhbm90aGVyIHBhcnQgb2YgZ2VucmF0aW5nIHRoaW5ncywgd2UganVzdCBuZWVkIHRvIGNvbWUgdXAgd2l0aCBzb21lIGV4dHJhIHRlcm1pbm9sb2d5IGZvciBpdC8gd2F5cyB0byBkZWFsIHdpdGggaXRcblxuXG4vLyBjbGVhbiB0aGlzIHVwXG5jb25zdCBtb3ZlczogYW55W10gPSBbXVxuY29uc3QgTW92ZVByb2Nlc3NvciA9IHtcbiAgICBtb3Zlc1xufVxuXG5QVUJTVUIuc3Vic2NyaWJlKCdtb3ZlJywgKG1zZyk6IHZvaWQgPT57XG4gICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5wdXNoKG1zZylcbn0pXG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmVkJywgKG1zZyk6IHZvaWQgPT57XG4gICAgaWYobXNnLmlkID09PSBwbGF5ZXIuaWQgJiYgIURFQlVHLkRJU0FCTEVfVFJBQ0tJTkcpe1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH1cbn0pXG5cblBVQlNVQi5zdWJzY3JpYmUoJ2NhbWVyYV9tb3ZlJywgKG1zZyk6IHZvaWQgPT4ge1xuICAgIGNhbWVyYUZyYW1lLnggKz0gbXNnLmRlbHRhLnhcbiAgICBjYW1lcmFGcmFtZS55ICs9IG1zZy5kZWx0YS55XG4gICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbn0pXG5cbi8vIFRPRE86IE1PVkUgVEhJUyBUTyB0aGUgS2V5Ym9hcmQgTW9uaXRvciBpdHNlbGYgYXMgYSBoZWxwZXIgcHJvcGVydHlcbmNvbnN0IG5ld0tleVByZXNzID0gKHE6IHN0cmluZywgZW5hYmxlWm9vbTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGttLmdldEtleVN0YXRlKHEpXG4gICAgaWYoIWVuYWJsZVpvb20pe1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEb3duICYmIHN0YXRlLmhhbGZTdGVwcyA+IDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEb3duICYmIChzdGF0ZS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKVxuICAgIH1cbn1cblxuY29uc3QgbGV2ZWxJdGVyYXRvciA9IHByb2dyZXNzaXZlTWFwR2VuZXJhdG9yKHRpbGVHcmlkLCByb29tcywgZGVidWdHcmlkKVxubGV2ZWxJdGVyYXRvci5uZXh0KClcbntcbiAgICBpZihyb29tcy5sZW5ndGggPiAwKXtcbiAgICAgICAgY29uc3QgcGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zWzBdKVxuICAgICAgICBQb2ludC5zZXQocGxheWVyLCBwY2VudGVyLngsIHBjZW50ZXIueSlcbiAgICAgICAgY29uc3QgbnBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1tyb29tcy5sZW5ndGggLSAxXSlcbiAgICAgICAgUG9pbnQuc2V0KG5wYywgbnBjZW50ZXIueCwgbnBjZW50ZXIueSlcbiAgICB9XG5cbiAgICAvLyBjZW50ZXIgdGhlIGNhbWVyYSBhbmQgZm92IG9uIHRoZSBwbGF5ZXJcbiAgICBpZighREVCVUcuRElTQUJMRV9UUkFDS0lORyl7XG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHBsYXllci54IC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2VudGVyIGV2ZXJ5dGhpbmdcbiAgICAgICAgY2FtZXJhRnJhbWUueCA9IE1hdGguZmxvb3IodGlsZUdyaWQud2lkdGgvMiAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHRpbGVHcmlkLmhlaWdodC8yICAtIGNhbWVyYUZyYW1lLmhlaWdodC8yKVxuICAgICAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbiAgICB9XG59XG5cbmxvYWRJbWFnZSgnYXNzZXRzL291dC5wbmcnKS50aGVuKChpbWFnZTogYW55KTogdm9pZCA9PiB7XG4gICAgcmVuZGVyZXIuaW5pdChjYW52YXMsIGltYWdlKVxuICAgIGlmKCFERUJVRy5TVEFHRV9NQVBfR0VORVJBVE9SUyl7XG4gICAgICAgIC8vIEpVU1QgRlVMTFkgU0VRVUVOQ0UgVEhFIEdFTkVSQVRPUlxuICAgICAgICB3aGlsZShsZXZlbEl0ZXJhdG9yLm5leHQoKS5kb25lICE9PSBmYWxzZSl7fVxuICAgIH1cbiAgICAvLyBMb29wXG4gICAgY29uc3QgbG9vcCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgaGFuZGxlSW5wdXQoa20sIHBsYXllcilcblxuICAgICAgICAvLyBleHRyYVxuICAgICAgICBpZihuZXdLZXlQcmVzcygndycpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IDAsIHk6IC0xfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ2EnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAtMSwgeTogMH19KVxuICAgICAgICB9XG4gICAgICAgIGlmKG5ld0tleVByZXNzKCdzJykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogMCwgeTogMX19KVxuICAgICAgICB9XG4gICAgICAgIGlmKG5ld0tleVByZXNzKCdkJykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogMSwgeTogMH19KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoREVCVUcuU1RBR0VfTUFQX0dFTkVSQVRPUlMpe1xuICAgICAgICAgICAgLy8gcSBsZXRzIHVzIHByb2dyZXNzIHRocm91Z2ggdGhlIG1hcCBnZW5lcmF0b3IgcGhhc2VcbiAgICAgICAgICAgIGlmKG5ld0tleVByZXNzKCdxJykpe1xuICAgICAgICAgICAgICAgIC8vIHlpZWxkIHRoZSBuZXh0IGxldmVsIGdlbmVyYXRpbmcgc2V0dGluZ1xuICAgICAgICAgICAgICAgIGxldmVsSXRlcmF0b3IubmV4dCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIG1vdmVzXG4gICAgICAgIC8vIGV2ZW50dWFsbHkgd2UnbGwgY29tcG9uZW50aXplIHRoaXMgYmV0dGVyXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMuZm9yRWFjaCgobXNnOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtc2cuZGVsdGFcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbXNnLmlkXG4gICAgICAgICAgICBjb25zdCBtb3ZlciA9IGVudGl0aWVzLmZpbmQoKGUpOiBib29sZWFuID0+IGUuaWQgPT0gaWQpXG4gICAgICAgICAgICBpZighbW92ZXIpe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGlsZUdyaWQuaW5Cb3VuZHNYWShtb3Zlci54ICsgbW92ZS54LCBtb3Zlci55ICsgbW92ZS55KSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHBsYXllci54ICsgbW92ZS54LCBwbGF5ZXIueSArIG1vdmUueSlcbiAgICAgICAgICAgICAgICBpZighdGlsZS5ibG9ja01vdmUgfHwgKERFQlVHLkVOQUJMRV9DTElQUElORyAmJiBtb3Zlci5pZCA9PT0gcGxheWVyLmlkKSl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVyLm1vdmUobW92ZS54LCBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgICAgIGlmKG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm92UmVjb21wdXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlZCcsIG1zZykgLy8gb25seSBwdWJsaXNoIG1vdmUgaWYgdGhlIGVudGl0eSBhY3R1YWxseSBjb21wbGV0ZWQgdGhlIG1vdmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMubGVuZ3RoID0gMFxuXG4gICAgICAgIGlmKGZvdlJlY29tcHV0ZSAmJiAhREVCVUcuRElTQUJMRV9GT1Ype1xuICAgICAgICAgICAgY2FsY3VsYXRlRk9WKGZvdkdyaWQsIHRpbGVHcmlkLCBwbGF5ZXIsIEZPVl9SQURJVVMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb252ZXJ0IHRvIHJlbmRlciBmb3JtYXRcbiAgICAgICAgcmVuZGVyVG9HcmlkKHRpbGVHcmlkLCBmb3ZHcmlkLCBlbnRpdGllcywgcmVuZGVyR3JpZCwgY2FtZXJhRnJhbWUsIGRlYnVnR3JpZClcbiAgICAgICAgLy8gYWN0dWFsbHkgcmVuZGVyIHRvIGNhbnZhc1xuICAgICAgICByZW5kZXJlci5jbGVhcigpXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihyZW5kZXJHcmlkKVxuXG4gICAgICAgIGttLnJlc2V0U3RlcHMoKVxuICAgICAgICBtbS5yZXNldCgpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcbiAgICB9XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuXG59KS5jYXRjaCgoZXJyOiBhbnkpOiB2b2lkID0+IGNvbnNvbGUubG9nKGVycikpIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4iLCJmdW5jdGlvbiBsb2FkSW1hZ2UodXJsOiBzdHJpbmcpOiBhbnl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpOiBhbnkgPT4gcmVzb2x2ZShpbWcpKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKTogYW55ID0+IHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIGltYWdlIGZyb20gJHt1cmx9YCkpKVxuICAgICAgICBpbWcuc3JjID0gdXJsXG4gICAgfSlcbn1cblxuZXhwb3J0IHtsb2FkSW1hZ2V9IiwiaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgQ09ERV9UT19SRUNUX0hBU0gsIGRyYXdTZWN0aW9uLCBjb2RlIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJ1xuaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgU0VUVElOR1MgZnJvbSAnLi9nYW1lU2V0dGluZ3MnXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3IgdGFraW5nIGEgcmVuZGVyIGdyaWQgYW5kIGNvbnZlcnRpbmcgaXQgdG8gaW1hZ2VzXG4gKiBvbiB0aGUgY2FudmFzXG4gKi9cblxuY29uc3Qge1RJTEVfV0lEVEgsIFRJTEVfSEVJR0hUfSA9IFNFVFRJTkdTXG5cbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgdW5kZWZpbmVkO1xuICAgIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQpOiBDYW52YXNSZW5kZXJlcntcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgLy8gd2UgYXJlIGp1c3QgZm9yY2luZyB0aGlzIGZvciBub3csIHdlIHdpbGwgY2hlY2sgaWYgaXQncyBudWxsXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZihjdHggPT09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0IGNvbnRleHQgZnJvbSBjYW52YXMnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMuc3ByaXRlc2hlZXQgPSBzcHJpdGVzaGVldFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvLyBldmVudHVhbGx5IHdlIG5lZWQgdG8gcGFzcyBpbiB0aGUgZGltZW5zaW9ucyB3ZSBhcmUgcmVuZGVyaW5nIHRvIGFzIHdlbGxcbiAgICAvLyBmb3Igbm93IGl0J3MgZmluZVxuICAgIHJlbmRlcihyZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgYmFja2dyb3VuZDogc3RyaW5nID0gQ09MT1JTLmJsYWNrKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsMCwgcmVuZGVyR3JpZC53aWR0aCAqIFRJTEVfV0lEVEgsIHJlbmRlckdyaWQuaGVpZ2h0ICogVElMRV9IRUlHSFQpXG4gICAgICAgIC8vIGxldCdzIHRyeSBzZXR0aW5nIGEgYmFja2dyb3VuZCBjb2xvciBhcyB3ZWxsXG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGRlc3RSZWN0ID0gUmVjdC5tYWtlKDAsMCwwLDApXG4gICAgICAgIHJlbmRlckdyaWQuZm9yRWFjaCgoXG4gICAgICAgICAgICBjZWxsOiBJUmVuZGVyQ2VsbCwgXG4gICAgICAgICAgICBpbmRleDogbnVtYmVyLCBcbiAgICAgICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBSZWN0LnNldChkZXN0UmVjdCwgeCAqIFRJTEVfV0lEVEgsIHkgKiBUSUxFX0hFSUdIVCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG4gICAgICAgICAgICAvLyB0b2RvLCBhbGxvdyB1cyB0byBtYXJrIHJlbmRlciBjZWxscyBhcyAnZW1wdHknIHJhdGhlciB0aGFuIHNwYWNlcywgdGhpcyBtaWdodCBoZWxwIHNwZWVkIHVwIHJlbmRlciB0aW1lXG4gICAgICAgICAgICBpZihjZWxsLmNoYXJhY3Rlci5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIGlmKGNlbGwuYmFja0NvbG9yICE9PSBiYWNrZ3JvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBhY3R1YWxseSBkb24ndCBrbm93IGlmIHRoaXMgaGVscHMsIGJ1dCBpdCBzZWVtcyBsaWtlIHNldHRpbmcgdGhlIGZpbGxTdHlsZSBjb3VsZCBpbnZvbHZlIG1vcmUgY29tcGxpY2F0aW9ucyB0aGFuIGp1c3QgY2hlY2tpbmcgaWYgaXQncyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICBpZihjdHguZmlsbFN0eWxlICE9PSBjZWxsLmJhY2tDb2xvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY2VsbC5iYWNrQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyY1JlY3QgPSBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlKGNlbGwuY2hhcmFjdGVyKV1cbiAgICAgICAgICAgICAgICBkcmF3U2VjdGlvbihjdHgsIHRoaXMuc3ByaXRlc2hlZXQsIHNyY1JlY3QsIGRlc3RSZWN0LCBjZWxsLmZvcmVDb2xvciwgY2VsbC5iYWNrQ29sb3IgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jYW52YXMgPT0gbnVsbCB8fCB0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgeyBDYW52YXNSZW5kZXJlciB9IiwiLy8gVE9ETzogUmVvcmdhbml6ZSB0aGlzIGludG8gbWF0ZXJpYWxzXG4vLyBXZSdsbCBldmVuIGluY2x1ZGUgXCJCTEFOS1wiXG4vLyBBcyBvcHBvc2VkIHRvIGVtcHR5IHNwYWNlXG5jb25zdCBDT0xPUlMgPSB7XG4gICAgJ2Rhcmtfb3V0c2lkZSc6ICcjMDAyMjQ0JyxcbiAgICAnbGlnaHRfb3V0c2lkZSc6ICcjMjY1MzgwJyxcbiAgICAnYmxhY2snOiAnIzAwMDAwMCcsXG4gICAgJ3doaXRlJzogJyNGRkZGRkYnLFxuICAgICdkYXJrX3dhbGwnOiAnIzJkMjgyNCcsIC8vJyM0NDNjMzUnLFxuICAgICdkYXJrX2dyb3VuZCc6ICcjNDQzYzM1JywgLy8nIzY2NTY0NycsXG4gICAgJ2xpZ2h0X3dhbGwnOiAnI0M4QjQzMicsIC8vICNDNUNDODlcbiAgICAnbGlnaHRfZ3JvdW5kJzogJyNDNUNDODknLFxuICAgICdwbGF5ZXInOiAnI0ZGRkZGRicsXG4gICAgJ2RhcmtfZG9vcic6JyM1NTAwMDAnLFxuICAgICdsaWdodF9kb29yJzogJyNGRjIyMjInLFxuICAgICducGMnOiAnI0NDMDAwMCcsXG4gICAgJ0RFQlVHJzogJyNGRjMzMzMnLFxuICAgIG1ldGFsOiB7XG4gICAgICAgIGRhcmtXYWxsOiAnIzRBNEE0QScsXG4gICAgICAgIGRhcmtHcm91bmQ6ICcjNjE2MTYxJyxcbiAgICAgICAgbGlnaHRXYWxsOiAnIzg1ODU4NScsXG4gICAgICAgIGxpZ2h0R3JvdW5kOiAnI0JGQkZCRidcbiAgICB9XG5cbn1cblxuLy8gU09NRSBHUkFZIFRZUEVTXG4vLyAjNEE0QTRBXG4vLyAjNjE2MTYxXG4vLyAjODU4NTg1XG4vLyAjQkZCRkJGXG5cbmV4cG9ydCBkZWZhdWx0IENPTE9SU1xuIiwiaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8vIEFMTCBERUJVRyBTRVRUSU5HUyBTSE9VTEQgR08gSU4gSEVSRSwgQU5EIEFMTCBERUJVRyBGTEFHUyBTSE9VTEQgQkUgRkFMU0UgQlkgREVGQVVMVCAoaS5lLiBwcm9kdWN0aW9uIG1vZGUpXG5jb25zdCBERUJVRzogSGFzaDxib29sZWFuPiA9IHtcbiAgICBESVNBQkxFX0ZPVjogZmFsc2UsICAgICAgICAgIC8vIFNIT1cgRVZFUllUSElORywgTk8gSElESU5HIFNUVUZGIEJFSElORCBGT1YsIEVWRVJZVEhJTkcgQUNUUyBMSVRcbiAgICBESVNBQkxFX1RSQUNLSU5HOiB0cnVlLCAgICAgLy8gQ0FNRVJBIFdJTEwgT05MWSBSRVNQT05EIFRPIERJUkVDVCBDT05UUk9MIEFORCBXT04nVCBUUkFDSyBDSEFSQUNURVJcbiAgICBFTkFCTEVfQ0xJUFBJTkc6IHRydWUsXG4gICAgREVCVUdfRFJBVzogdHJ1ZSxcbiAgICBTVEFHRV9NQVBfR0VORVJBVE9SUzogdHJ1ZSwgLy8gV2Ugd2lsbCBtYW51YWxseSBwcm9ncmVzcyB0aGUgbGV2ZWwgZ2VuZXJhdG9yXG59XG5cbmV4cG9ydCBkZWZhdWx0IERFQlVHXG4iLCIvKipcbiAqIEEgZ2VuZXJpYyBvYmplY3QgdG8gcmVwcmVzZW50IGV2ZXJ5dGhpbmcgdGhhdCBpcyBub3QgdGhlIG1hcCBpdHNlbGZcbiAqIEZvciB0aGF0LCBzZWUgdGhlIFRpbGUgY2xhc3NcbiAqL1xuY2xhc3MgRW50aXR5IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB4OiBudW1iZXIseTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgY29sb3I6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhbiBlbnRpdHksIGN1cnJlbnRseSBkb2Vzbid0IGNoZWNrIGlmIGl0IGNhbiBvciBub3QsIGp1c3QgZG9lc1xuICAgICAqIEBwYXJhbSBkeCBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeCBkaXJlY3Rpb24gKGxlZnQgaXMgbmVnYXRpdmUsIHJpZ2h0IGlzIHBvc2l0aXZlKVxuICAgICAqIEBwYXJhbSBkeSBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeSBkaXJlY3Rpb24gKHVwIGlzIG5lZ2F0aXZlLCBkb3duIGlzIHBvc2l0aXZlKVxuICAgICAqL1xuICAgIG1vdmUoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHZvaWR7XG4gICAgICAgIHRoaXMueCArPSBkeFxuICAgICAgICB0aGlzLnkgKz0gZHlcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVudGl0eSB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUG9pbnQsIFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbmludGVyZmFjZSBGT1ZDZWxsICB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBTaGFkb3dSYW5nZSB7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbn1cblxuY29uc3QgaXNCZXR3ZWVuSW5jbHVzaXZlID0gKGE6IG51bWJlcixiOiBudW1iZXIsdDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgaWYoYiA8IGEpe1xuICAgICAgICByZXR1cm4gYiA8PSB0ICYmIHQgPD0gYVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhIDw9IHQgJiYgdCA8PSBiXG4gICAgfVxufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSBmb3ZHcmlkIFxuICogQHBhcmFtIHRpbGVHcmlkIFxuICogQHBhcmFtIHN0YXJ0UG9pbnQgc3RhcnQgcG9pbnQgaXMgaW4gd29ybGQgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSBtYXhEaXN0YW5jZSBcbiAqIEBwYXJhbSBob3Jpem9udGFsTm90VmVydGljYWwgXG4gKiBAcGFyYW0geERpcmVjdGlvbiBcbiAqIEBwYXJhbSB5RGlyZWN0aW9uIFxuICovXG5jb25zdCBjYWxjdWxhdGVPY3RhbnQgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcixcbiAgICBob3Jpem9udGFsTm90VmVydGljYWw6IGJvb2xlYW4sIHhEaXJlY3Rpb246IG51bWJlciwgeURpcmVjdGlvbjogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgXG4gICAgLy8gT3VyIHNoYWRvd3Mgd2Ugd2lsbCBjYXN0XG4gICAgY29uc3Qgc2hhZG93UmFuZ2VzOiBTaGFkb3dSYW5nZVtdID0gW11cbiAgICAvLyBvdXIgc3RhcnRpbmcgbG9jYXRpb24gaXMgYWx3YXlzIHZpc2libGVcbiAgICBjb25zdCBzY3JlZW5TdGFydFBvaW50PSBQb2ludC5jb3B5KHN0YXJ0UG9pbnQpXG4gICAgc2NyZWVuU3RhcnRQb2ludC54IC09IGZvdkdyaWQueFxuICAgIHNjcmVlblN0YXJ0UG9pbnQueSAtPSBmb3ZHcmlkLnlcbiAgICBmb3ZHcmlkLmdldFAoc2NyZWVuU3RhcnRQb2ludCkudmlzaWJsZSA9IHRydWVcbiAgICAvLyBUT0RPOiBEZXRlcm1pbmUgaWYgdGhlIEZPViBpcyBpbiByYW5nZVxuICAgIGZvcihsZXQgcm93ID0gMTsgcm93IDwgbWF4RGlzdGFuY2U7IHJvdysrKXtcbiAgICAgICAgY29uc3Qgcm93U2l6ZSA9IHJvdyArIDFcbiAgICAgICAgZm9yKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCByb3dTaXplOyBjb2x1bW4rKyl7XG4gICAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIG9jdGFudCwgdGhlIHRyYXZlbGxlciB3aWxsIG1vdmUgZGlmZmVyZW50bHlcbiAgICAgICAgICAgIGNvbnN0IHRyYXZlbGxlciA9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICAgICAgICAgIHRyYXZlbGxlci54ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHhEaXJlY3Rpb24gKiBjb2x1bW4gOiB4RGlyZWN0aW9uICogcm93XG4gICAgICAgICAgICB0cmF2ZWxsZXIueSArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB5RGlyZWN0aW9uICogcm93IDogeURpcmVjdGlvbiAqIGNvbHVtblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgb3V0IG9mIGJvdW5kcywgc2tpcFxuICAgICAgICAgICAgaWYoIXRpbGVHcmlkLmluQm91bmRzWFkodHJhdmVsbGVyLngsIHRyYXZlbGxlci55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmFjdG9yIGluIG91ciB0aWxlIGNoZWNrIHdoZW4gd2UgZ2V0IHRoZSB3b3JsZCBjZWxsXG4gICAgICAgICAgICBsZXQgc2NyZWVuUG9pbnQgPSBQb2ludC5jb3B5KHRyYXZlbGxlcilcbiAgICAgICAgICAgIHNjcmVlblBvaW50LnggLT0gZm92R3JpZC54XG4gICAgICAgICAgICBzY3JlZW5Qb2ludC55IC09IGZvdkdyaWQueVxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFAodHJhdmVsbGVyKVxuICAgICAgICAgICAgLy8gT1BUSU1JWkU6IFdlIGFyZSBwcm9iYWJseSBydW5uaW5nIHRvIG1hbnkgdGltZXMgYW5kIGNvdWxkIGRvIHRoaXMgYmV0dGVyXG4gICAgICAgICAgICBpZighZm92R3JpZC5pbkJvdW5kc1hZKHNjcmVlblBvaW50LngsIHNjcmVlblBvaW50LnkpKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5Qb2ludClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjb2x1bW4vcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgZW5kID0gKGNvbHVtbiArIDEpL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IG1pZGRsZSA9IChzdGFydCArIGVuZCkgLyAyXG5cbiAgICAgICAgICAgIC8vIHRlc3QgZm9yIHZpc2libGl0eVxuICAgICAgICAgICAgbGV0IHZpc2liaWxpdHkgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBlZGdlcyBhcmUgY2xlYXIgb3Igbm90XG4gICAgICAgICAgICBsZXQgc3RhcnRDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBtaWRkbGVDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBlbmRDbGVhciA9IHRydWVcblxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBidWlsdCBzb21lIHNoYWRvdyByYW5nZXNcbiAgICAgICAgICAgIGlmKHNoYWRvd1Jhbmdlcy5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiBhbnkgc2hhZG93cyBjcm9zcyBvdXIgdGhyZWUgcG9pbnRzXG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLmZvckVhY2goIChzcjogU2hhZG93UmFuZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDbGVhciA9IHN0YXJ0Q2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBzdGFydClcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlQ2xlYXIgPSBtaWRkbGVDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIG1pZGRsZSlcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2xlYXIgPSBlbmRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIGVuZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHZpc2liaWxpdHkgYmFzZWQgb2ZmIG9mIG91ciBzYW1wbGluZ1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSBtaWRkbGVDbGVhciAmJiAoc3RhcnRDbGVhciB8fCBlbmRDbGVhcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd2UgYmxvY2sgc2lnaHQsIGNhbGN1bGF0ZSBvdXIgc2hhZG93IGVuZHNcbiAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tTaWdodCl7XG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLnB1c2goe3N0YXJ0LCBlbmR9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3ZDZWxsLnZpc2libGUgPSB2aXNpYmlsaXR5XG4gICAgICAgICAgICBpZihmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgICAgIHRpbGUuZXhwbG9yZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNhbGN1bGF0ZUZPViA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgLy8gYmUgZGVmYXVsdCB3ZSBhcmUgZ29pbmcgdG8gc2hhZG93Q2FzdFxuICAgIC8vIGJ5IGRlZmF1bHQgZXZlcnl0aGluZyBpcyBub3QgdmlzaWJsZVxuICAgIGZvdkdyaWQuZm9yRWFjaCgoY2VsbCk6IHZvaWQgPT4geyBjZWxsLnZpc2libGUgPSBmYWxzZSB9KVxuICAgIC8vIE5OV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAtMSlcbiAgICAvLyBXTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIC0xKVxuICAgIC8vIFdTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgMSlcbiAgICAvLyBTU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgMSlcbiAgICAvLyBTU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAxKVxuICAgIC8vIEVTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAxKVxuICAgIC8vIEVORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAtMSlcbiAgICAvLyBOTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAtMSlcbn1cblxuZXhwb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsfSIsIi8vIE9SSUdJTkFMXG4vLyBjb25zdCBTRVRUSU5HUyA9IHtcbi8vICAgICBUSUxFX1dJRFRIOiAxMCwgICAgIC8vIHBpeGVsc1xuLy8gICAgIFRJTEVfSEVJR0hUOiAxMCwgICAgLy8gcGl4ZWxzXG4vLyAgICAgTUFQX1dJRFRIOiA4MCwgICAgICAvLyBldmVyeXRoaW5nIGVsc2UgaXMgaW4gdGlsZXNcbi8vICAgICBNQVBfSEVJR0hUOiA0NSxcbi8vICAgICBDQU1FUkFfV0lEVEg6IDEwMCxcbi8vICAgICBDQU1FUkFfSEVJR0hUOiA3MCxcbi8vICAgICBTQ1JFRU5fV0lEVEggOjEwMCxcbi8vICAgICBTQ1JFRU5fSEVJR0hUIDogNzAsXG4vLyAgICAgRk9WX1JBRElVUzogMzVcbi8vIH1cblxuY29uc3QgU0VUVElOR1MgPSB7XG4gICAgVElMRV9XSURUSDogNSwgICAgIC8vIHBpeGVsc1xuICAgIFRJTEVfSEVJR0hUOiA1LCAgICAvLyBwaXhlbHNcbiAgICBNQVBfV0lEVEg6IDIwMCwgICAgICAvLyBldmVyeXRoaW5nIGVsc2UgaXMgaW4gdGlsZXNcbiAgICBNQVBfSEVJR0hUOiAxMzAsXG4gICAgQ0FNRVJBX1dJRFRIOiAyMTAsXG4gICAgQ0FNRVJBX0hFSUdIVDogMTQwLFxuICAgIFNDUkVFTl9XSURUSCA6MjEwLFxuICAgIFNDUkVFTl9IRUlHSFQgOiAxNDAsXG4gICAgRk9WX1JBRElVUzogMzVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU0VUVElOR1MiLCJpbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIFNldEVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYW55O1xufVxuXG5pbnRlcmZhY2UgRm9yRWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTmVpZ2hib3JMaXN0PFQ+IHtcbiAgICB1cDogVCB8IG51bGw7XG4gICAgbGVmdDogVCB8IG51bGw7XG4gICAgcmlnaHQ6IFQgfCBudWxsO1xuICAgIGRvd246IFQgfCBudWxsO1xuICAgIG5laWdoYm9yczogVFtdO1xufVxuXG4vLyBUT0RPOiBnaXZlIGdyaWRzIHRoZWlyIG93biB4IGFuZCB5cywgdGhhdCB3YXkgdGhleSBjYW4gaW1wbGVtZW50IGFsbCB0aGUgcG9pbnQgYW5kIHJlY3Qgc3R1ZmZcbi8qKlxuICogR3JpZCB0byByZXByZXNlbnQgMmQgY29sbGVjdGlvbnMsIHBsZWFzZSBkb24ndCByZXNpemUgaXQgYWZ0ZXIgY3JlYXRpbmcgaXRcbiAqL1xuY2xhc3MgR3JpZDxUPiBpbXBsZW1lbnRzIElSZWN0IHtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHk6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGNlbGxzOiBUW107XG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApe1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuY2VsbHMubGVuZ3RoID0gd2lkdGggKiBoZWlnaHRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbWFyaWx5IHVzZWQgZm9yIGluaXRpYWxpemF0aW9uIG9mIHRoZSBncmlkLCBvdmVyd3JpdGVzIHByZXZpb3VzIGVudHJpZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZW50cnksIGRvbid0IHVzZSB0aGlzIHVubGVzcyBlbnRyaWVzIGFyZSBpbmRlcGVuZGVudCBmcm9tIGVhY2ggb3RoZXJcbiAgICAgKiBAcGFyYW0gZm4gdGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgY2VsbCBpdHNlbGYgYXMgdGhlIGZpcnN0IHByb3BlcnR5IGFuZCBcbiAgICAgKi9cbiAgICBzZXRFYWNoKGZuOiBTZXRFYWNoRm48VD4pOiBHcmlkPFQ+e1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gc29tZXRoaW5nIGZvciBlYWNoIG1lbWJlciBvZiBhIGNlbGwsIGdvaW5nIHJvdyBieSByb3cgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgICogQHBhcmFtIGZuIEdldCBwYXNzZWQgdGhlIGNlbGwsIGluZGV4LCB4IGFuZCB5XG4gICAgICovXG4gICAgZm9yRWFjaChmbjogRm9yRWFjaEZuPFQ+KTogdm9pZHtcbiAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4Kyspe1xuICAgICAgICAgICAgICAgIGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB4IHggY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBwYXJhbSB5IHkgY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqL1xuICAgIGdldFhZKHg6IG51bWJlciwgeTogbnVtYmVyKTogVCAge1xuICAgICAgICBpZighdGhpcy5pbkJvdW5kc1hZKHgseSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib3VuZGFyeSBhY2Nlc3MgaXNzdWUnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3ggKyB5ICogdGhpcy53aWR0aF1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBnZXRYWS4gVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gcG9pbnQgY29udGFpbnMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbGwgeW91IHdhbnQgdG8gZ2V0XG4gICAgICovXG4gICAgZ2V0UChwb2ludDogSVBvaW50KTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFhZKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuXG4gICAgaW5Cb3VuZHNYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW57XG4gICAgICAgIGlmKHggPCAwIHx8IHggPj0gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjZWxsIGJhc2VkIG9mZiBvZiBhbiBpbmRleCwgdXN1YWxseSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBmb3JFYWNoIGxvb3Agb2YgYSBzaW1pbGFybHkgc2l6ZWQgZ3JpZFxuICAgICAqIE5PVEUgYmUgY2FyZWZ1bCB0aGF0IHRoZSBvdGhlciBncmlkIGhhcyB0aGUgc2FtZSBkaW1lbnNpb24gdW5sZXNzIHlvdSByZWFsbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZ1xuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgY2VsbHMsIG1vc3RseSB0byBiZSB1c2VkIHdpdGggZ3JpZHMgdGhhdCBhcmUgd29ya2luZyBhbG9uZ3NpZGUgYSBkaWZmZXJlbnQgZm9yRWFjaCBsb29wXG4gICAgICovXG4gICAgZ2V0SShpbmRleDogbnVtYmVyKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW2luZGV4XVxuICAgIH1cblxuICAgIGdldE5laWdoYm9yc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogTmVpZ2hib3JMaXN0PFQ+IHtcbiAgICAgICAgY29uc3QgbGlzdDogTmVpZ2hib3JMaXN0PFQ+ID0ge1xuICAgICAgICAgICAgdXA6IG51bGwsXG4gICAgICAgICAgICBkb3duOiBudWxsLFxuICAgICAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JzOltdXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHgseSAtIDEpKXtcbiAgICAgICAgICAgIGxpc3QudXAgPSB0aGlzLmdldFhZKHgsIHkgLSAxKVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LnVwKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5Cb3VuZHNYWSh4LHkgKyAxKSl7XG4gICAgICAgICAgICBsaXN0LmRvd24gPSB0aGlzLmdldFhZKHgsIHkgKyAxKVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LmRvd24pXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHggLSAxLHkpKXtcbiAgICAgICAgICAgIGxpc3QubGVmdCA9IHRoaXMuZ2V0WFkoeCAtIDEsIHkpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QubGVmdClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmluQm91bmRzWFkoeCArIDEseSkpe1xuICAgICAgICAgICAgbGlzdC5yaWdodCA9IHRoaXMuZ2V0WFkoeCArIDEsIHkpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QucmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0ID0gKGttOiBLZXlib2FyZE1vbml0b3IsIHBsYXllcjogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgIH1cbiAgICAvLyBxdWljayBudW1iZXIgZ2VuZXJhdG9yXG4gICAgaWYoIWttLmdldEtleVN0YXRlKCduJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnbicpLmhhbGZTdGVwcyA+IDApKXtcbiAgICAgICAgY29uc3Qgc2VlZCA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKVxuICAgICAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICB9XG59IiwiY2xhc3MgSURNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGxhc3RJZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGFzdElkID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5leHQgaWRcbiAgICAgKi9cbiAgICBuZXh0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZCsrXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IElEX01BTkFHRVJcbiAqL1xuY29uc3QgSURfTUFOQUdFUiA9IG5ldyBJRE1hbmFnZXIoKVxuZXhwb3J0IHtJRF9NQU5BR0VSLCBJRE1hbmFnZXJ9IiwiaW50ZXJmYWNlIEtleVN0YXRlIHsgXG4gICAga2V5OiBzdHJpbmc7XG4gICAgaXNEb3duOiBib29sZWFuO1xuICAgIGhhbGZTdGVwczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY29uc3QgbWFrZUtleVN0YXRlID0gKGtleTogc3RyaW5nLCBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaGFsZlN0ZXBzOiBudW1iZXIgPSAwKTogS2V5U3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBoYWxmU3RlcHNcbiAgICB9XG59XG5cbmNsYXNzIEtleWJvYXJkTW9uaXRvciB7XG4gICAga2V5SGFzaDogSGFzaDxLZXlTdGF0ZT47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlIYXNoID0ge31cbiAgICB9XG4gICAgLy8gQXR0YWNoIHRvIHRoZSBET00sIHVzdWFsbHkgdGhlIGRvY3VtZW50IGFzIGEgd2hvbGUsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgbW9yZSBzcGVjaWZpYyBpZiB5b3Ugd2FudFxuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBLZXlib2FyZE1vbml0b3Ige1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXksIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZigha2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoa2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0S2V5U3RhdGUoa2V5OiBzdHJpbmcpOiBLZXlTdGF0ZXtcbiAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlIYXNoW2tleV1cbiAgICB9XG4gICAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5SGFzaClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleXNbaV1dLmhhbGZTdGVwcyA9IDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSIsIi8vIExldCdzIGdvIGFoZWFkIGFuZCBjcmVhdGUgdGhlIFBvaW50IGludGVyZmFjZSBoZXJlLCB3ZSdsbCBleHBvcnQgaXQgZm9yIHVzZSBsYXRlciBpbiB0aGUgcHJvamVjdFxuXG5pbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG4vKipcbiAqIENsYXNzIHRvIGhlbHAgbW9uaXRvciB0aGluZ3MgdGhhdCBoYXZlIGhhcHBlbmVkIHRvIHRoZSBtb3VzZSBzaW5jZSBsYXN0IHRpbWUgdGhhdCB3ZSBsb29rZWRcbiAqL1xuXG5pbnRlcmZhY2UgSGFsZkNsaWNrIHtcbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIGlzRG93bjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTW91c2VNb25pdG9yIHtcbiAgICAvKipcbiAgICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlIG92ZXIgdGhlIGF0dGFjaGVkIGVsZW1udFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IHRpbWUgd2UgbG9va2VkXG4gICAgICovXG4gICAgaGFzTW92ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IGluc2lkZSB0aGUgY29udGFpbmVyIFxuICAgICAqL1xuICAgIGluQ29udGFpbmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogaXMgdGhlIG1vdXNlIGJ1dHRvbiBkb3duIChjdXJyZW50bHkgb25seSB0cmFja3MgbGVmdClcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZ1bGwgY2xpY2sgaXMgdXAgYW5kIGRvd24sIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVwcyBhbmQgZG93bnMsIHVzZWZ1bCBmb3IgZHJhZ3Mgb3Igb3RoZXIgdGhpbmdzIHRoYXQgbWlnaHQgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgKi9cbiAgICBoYWxmQ2xpY2tzOiBIYWxmQ2xpY2tbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmhhbGZDbGlja3MgPSBbXVxuICAgICAgICAvLyBUT0RPOiBBZGQgY2xpY2sgdHJhY2tpbmcsIGRlcGVuZHMgb24gaG93IHF1aWNrbHkgd2UgYXJlIHBvbGxpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50IHlvdSB3YW50IHRvIG1vbml0b3IgbW91c2UgcmVsYXRlZCBldmVudHMgdG9cbiAgICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgcGFydGljdWxhciBtb3VzZSBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBNb3VzZU1vbml0b3Ige1xuICAgICAgICAvLyBUT0RPOiBXZSdsbCByZWdpc3RlciBjbGljayBoaXN0b3J5IGluIHRoZSBmdXR1cmUsIGZvciBub3cgd2UgYXJlIGp1c3QgZG9pbmcgbW91c2Ugb3ZlciBhdCBwcmVzZW50XG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBQb2ludC5zZXQodGhpcy5wb3NpdGlvbiwgZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBlbnRlcnMgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgbW92ZXMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgZXhpdHMgdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcmFpc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogZmFsc2UgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHRoYXQgd2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBldmVudHMgc2luY2Ugb3VyIGxhc3QgcG9sbCBvZiBzdGF0ZSBhbmQgaXQgY2FuIGJlIHJlc2V0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZHtcbiAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBoYXZlbid0IG1vdmVkIGJlZm9yZVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBjbGlja3NcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLmxlbmd0aCA9IDBcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlTW9uaXRvciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUsIFRpbGVNYXRlcmlhbCB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSBmcm9tICcuL3NoYXBlcy9lbGxpcHNlJ1xuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi9ybmdIZWxwZXInXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcbmltcG9ydCB7IFBvaW50LCBJUG9pbnQsIEdyaWREaXJlY3Rpb24gfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuY29uc3QgTUFYX0xFQUZfU0laRSA9IDEwMFxuY29uc3QgTUlOX0xFQUZfU0laRSA9IDEwXG5jbGFzcyBMZWFmIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbGVmdDogTGVhZiB8IG51bGw7XG4gICAgcmlnaHQ6IExlYWYgfCBudWxsO1xuICAgIHJvb206IElSZWN0IHwgbnVsbDtcbiAgICBoYWxsczogSVJlY3RbXSB8IG51bGw7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLHk6IG51bWJlcix3aWR0aDogbnVtYmVyLGhlaWdodDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmxlZnQgPSBudWxsXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsXG4gICAgICAgIHRoaXMucm9vbSA9IG51bGxcbiAgICAgICAgdGhpcy5oYWxscyA9IG51bGxcbiAgICB9XG5cbiAgICBoYXNTcGxpdCgpOiBib29sZWFue1xuICAgICAgICBpZih0aGlzLmxlZnQgIT0gbnVsbCB8fCB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBzcGxpdCwgY3V0IGl0IG91dCFcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICB9XG4gICAgc3BsaXQoKTogYm9vbGVhbntcbiAgICAgICAgaWYodGhpcy5oYXNTcGxpdCgpKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwbGl0SG9yaXpvbnRhbGx5OiBib29sZWFuID0gUkFORE9NLm5leHQoKSA8IDAuNVxuICAgICAgICBpZih0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQgJiYgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0ID4gMS4yNSl7XG4gICAgICAgICAgICBzcGxpdEhvcml6b250YWxseSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmhlaWdodCA+IHRoaXMud2lkdGggJiYgdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoID49IDEuMjUpe1xuICAgICAgICAgICAgc3BsaXRIb3Jpem9udGFsbHkgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXggPSAoc3BsaXRIb3Jpem9udGFsbHkgPyB0aGlzLmhlaWdodCA6IHRoaXMud2lkdGgpIC0gTUlOX0xFQUZfU0laRVxuICAgICAgICBpZihtYXggPD0gTUlOX0xFQUZfU0laRSl7XG4gICAgICAgICAgICAvLyB0byBzbW9sLCBkb24ndCBzcGxpdCBhbnkgbW9yZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIGEgc3BsaXQsIGNhbGN1bGF0ZWQgcmFuZG9tbHlcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBSQU5ET00ubmV4dEludChNSU5fTEVBRl9TSVpFLCBtYXgpXG5cbiAgICAgICAgaWYoc3BsaXRIb3Jpem9udGFsbHkpe1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbmV3IExlYWYodGhpcy54LHRoaXMueSwgdGhpcy53aWR0aCwgc3BsaXQpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0PSBuZXcgTGVhZih0aGlzLngsIHRoaXMueSArIHNwbGl0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHNwbGl0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbmV3IExlYWYodGhpcy54LHRoaXMueSwgc3BsaXQsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5yaWdodD0gbmV3IExlYWYodGhpcy54ICsgc3BsaXQsIHRoaXMueSwgdGhpcy53aWR0aCAtIHNwbGl0LCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNyZWF0ZVJvb21zKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmxlZnQgIT0gbnVsbCB8fCB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgaWYodGhpcy5sZWZ0ICE9IG51bGwgfHwgdGhpcy5yaWdodCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5sZWZ0IGFzIExlYWZcbiAgICAgICAgICAgICAgICBsZWZ0LmNyZWF0ZVJvb21zKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmlnaHQgIT0gbnVsbCB8fCB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5yaWdodCBhcyBMZWFmXG4gICAgICAgICAgICAgICAgcmlnaHQuY3JlYXRlUm9vbXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmxlZnQgIT0gbnVsbCAmJiB0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRSb29tID0gdGhpcy5sZWZ0LmdldFJvb20oKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Um9vbSA9IHRoaXMucmlnaHQuZ2V0Um9vbSgpXG4gICAgICAgICAgICAgICAgaWYobGVmdFJvb20gIT0gbnVsbCAmJiByaWdodFJvb20gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSGFsbChsZWZ0Um9vbSBhcyBJUmVjdCwgcmlnaHRSb29tIGFzIElSZWN0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgcm9vbVNpemUgPSBQb2ludC5tYWtlKFJBTkRPTS5uZXh0SW50KDMsIHRoaXMud2lkdGggLSAyKSwgUkFORE9NLm5leHRJbnQoMywgdGhpcy5oZWlnaHQgLSAyKSlcbiAgICAgICAgICAgIGNvbnN0IHJvb21Qb3MgPSBQb2ludC5tYWtlKFJBTkRPTS5uZXh0SW50KDEsIHRoaXMud2lkdGggLSByb29tU2l6ZS54IC0gMSksIFJBTkRPTS5uZXh0SW50KDEsIHRoaXMuaGVpZ2h0IC0gcm9vbVNpemUueSAtIDEpKVxuICAgICAgICAgICAgdGhpcy5yb29tID0gUmVjdC5tYWtlKHRoaXMueCArIHJvb21Qb3MueCwgdGhpcy55ICsgcm9vbVBvcy55LCByb29tU2l6ZS54LCByb29tU2l6ZS55KVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvb20oKTogSVJlY3QgfCBudWxsIHtcbiAgICAgICAgaWYodGhpcy5yb29tICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxSb29tOiBJUmVjdCB8IG51bGwgPSBudWxsXG4gICAgICAgICAgICBsZXQgclJvb206IElSZWN0IHwgbnVsbCA9IG51bGxcbiAgICAgICAgICAgIGlmKHRoaXMubGVmdCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsUm9vbSA9ICh0aGlzLmxlZnQgYXMgTGVhZikuZ2V0Um9vbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJpZ2h0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHJSb29tID0gKHRoaXMucmlnaHQgYXMgTGVhZikuZ2V0Um9vbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsUm9vbSA9PSBudWxsICYmIHJSb29tID09IG51bGwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9IGVsc2UgaWYoclJvb20gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxSb29tXG4gICAgICAgICAgICB9IGVsc2UgaWYobFJvb20gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJSb29tXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBSQU5ET00ubmV4dCgpID4gMC41ID8gbFJvb20gOiByUm9vbVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUhhbGwoc3RhcnQ6IElSZWN0LCBlbmQ6IElSZWN0KTogdm9pZHtcbiAgICAgICAgdGhpcy5oYWxscyA9IFtdXG4gICAgICAgIC8vIHBpY2sgYSByYW5kb20gcG9pbnQgaW5zaWRlIGJvdGggcm9vbXMgYW5kIGNvbm5lY3QgdGhlbVxuICAgICAgICBjb25zdCBzdGFydFAgPSBQb2ludC5tYWtlKFxuICAgICAgICAgICAgUkFORE9NLm5leHRJbnQoc3RhcnQueCArIDEsIHN0YXJ0LnggKyBzdGFydC53aWR0aCAtIDIpLFxuICAgICAgICAgICAgUkFORE9NLm5leHRJbnQoc3RhcnQueSArIDEsIHN0YXJ0LnkgKyBzdGFydC5oZWlnaHQgLSAyKVxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgZW5kUCA9IFBvaW50Lm1ha2UoXG4gICAgICAgICAgICBSQU5ET00ubmV4dEludChlbmQueCArIDEsIGVuZC54ICsgZW5kLndpZHRoIC0gMiksXG4gICAgICAgICAgICBSQU5ET00ubmV4dEludChlbmQueSArIDEsIGVuZC55ICsgZW5kLmhlaWdodCAtIDIpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgbGVmdFggPSBNYXRoLm1pbihzdGFydFAueCwgZW5kUC54KVxuICAgICAgICBjb25zdCByaWdodFggPSBNYXRoLm1heChzdGFydFAueCwgZW5kUC54KVxuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5taW4oc3RhcnRQLnksIGVuZFAueSlcbiAgICAgICAgY29uc3QgYm90dG9tWSA9IE1hdGgubWF4KHN0YXJ0UC55LCBlbmRQLnkpXG4gICAgICAgIGlmKFJBTkRPTS5uZXh0SW50KDAsMSkgPT09IDEpe1xuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBmaXJzdFxuICAgICAgICAgICAgdGhpcy5oYWxscy5wdXNoKFJlY3QubWFrZShsZWZ0WCwgc3RhcnRQLnksIHJpZ2h0WCAtIGxlZnRYLCAxKSlcbiAgICAgICAgICAgIHRoaXMuaGFsbHMucHVzaChSZWN0Lm1ha2UoZW5kUC54LCB0b3BZLCAxLCBib3R0b21ZIC0gdG9wWSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxzLnB1c2goUmVjdC5tYWtlKHN0YXJ0LngsIHRvcFksIDEsIGJvdHRvbVkgLSB0b3BZKSlcbiAgICAgICAgICAgIHRoaXMuaGFsbHMucHVzaChSZWN0Lm1ha2UobGVmdFgsIGVuZFAueSwgcmlnaHRYIC0gbGVmdFgsIDEpKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0LCBlbmQsIHRoaXMuaGFsbHMpXG4gICAgfVxufVxuY29uc3Qgcm9vbXMgPSBbXVxuY29uc3QgbGVhZnM6IExlYWZbXSA9IFtdXG5cbmZ1bmN0aW9uICogcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb21zOiBJUmVjdFtdLCBkZWJ1Z0dyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+KTogYW55e1xuICAgIC8vIENsZWFyIG91dCBhbGwgdGhlIHRpbGVzXG4gICAgY29uc3QgY2xlYXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHRpbGVHcmlkLmZvckVhY2goKHQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gdHJ1ZVxuICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgdC5jb250YWluZWQgPSB0cnVlXG4gICAgICAgICAgICB0LmV4cGxvcmVkID0gdHJ1ZSAvLyByZW1vdmUgbGF0ZXJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKVxuXG4gICAgLy8gVE9ETzogRGlzYWJsZSBlbnRpdGllcyBvciBwbGFjZW1lbnQsIGVzc2VudGlhbGx5IHN0b3AgdXMgYmVmb3JlIHdlIHBsYWNlIGFsbCBvZiB0aGF0IHN0dWZmXG4gICAgLy8gTGV0J3MgbWFrZSBvbmUgYmlnIGxlYWYgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGNvbnN0IHJvb3QgPSBuZXcgTGVhZigwLDAsIHRpbGVHcmlkLndpZHRoIC0gMSwgdGlsZUdyaWQuaGVpZ2h0IC0gMSlcbiAgICBsZWFmcy5wdXNoKHJvb3QpXG4gICAgbGV0IGhhZFNwbGl0ID0gdHJ1ZVxuICAgIHdoaWxlKGhhZFNwbGl0KXtcbiAgICAgICAgaGFkU3BsaXQgPSBmYWxzZVxuICAgICAgICBsZWFmcy5mb3JFYWNoKChsOiBMZWFmKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZighbC5oYXNTcGxpdCgpKXtcbiAgICAgICAgICAgICAgICBpZihsLndpZHRoID4gTUFYX0xFQUZfU0laRSB8fCBsLmhlaWdodCA+IE1BWF9MRUFGX1NJWkUgfHwgUkFORE9NLm5leHQoKSA+IDAuMjUpe1xuICAgICAgICAgICAgICAgICAgICBpZihsLnNwbGl0KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVhZnMucHVzaChsLmxlZnQgYXMgTGVhZilcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYWZzLnB1c2gobC5yaWdodCBhcyBMZWFmKVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFkU3BsaXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJvb3QuY3JlYXRlUm9vbXMoKVxuICAgIGxlYWZzLmZvckVhY2goKGw6IExlYWYpOiB2b2lkID0+IHtcbiAgICAgICAgLy8gZHJhdyBlYWNoIG9mIHRoZSBlZGdlc1xuICAgICAgICBpZihsLnJvb20gIT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCByb29tID0gbC5yb29tIGFzIElSZWN0XG4gICAgICAgICAgICBmb3IobGV0IHkgPSByb29tLnk7IHkgPCByb29tLnkgKyByb29tLmhlaWdodCAtIDE7IHkrKyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB4ID0gcm9vbS54OyB4IDwgcm9vbS54ICsgcm9vbS53aWR0aCAtIDE7IHgrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYobC5oYWxscyAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IGhhbGxzID0gbC5oYWxscyBhcyBJUmVjdFtdXG4gICAgICAgICAgICBoYWxscy5mb3JFYWNoKChyb29tOiBJUmVjdCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeSA9IHJvb20ueTsgeSA8IHJvb20ueSArIHJvb20uaGVpZ2h0OyB5Kyspe1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHggPSByb29tLng7IHggPCByb29tLnggKyByb29tLndpZHRoOyB4Kyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhoYWxscylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy95aWVsZFxuXG5cblxuICAgIC8vIE5leHQgcGFydGl0aW9uIHRoZSBzcGFjZVxuICAgIC8vIHVzaW5nIHRoaXMgZm9yIHJlZmVyZW5jZTogaHR0cHM6Ly9nYW1lZGV2ZWxvcG1lbnQudHV0c3BsdXMuY29tL3R1dG9yaWFscy9ob3ctdG8tdXNlLWJzcC10cmVlcy10by1nZW5lcmF0ZS1nYW1lLW1hcHMtLWdhbWVkZXYtMTIyNjhcbn1cblxuZXhwb3J0IHsgcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IgfVxuIiwibGV0IF9pZCA9IDBcbmNvbnN0IG5leHRJZCA9ICgpOiBudW1iZXIgPT4gX2lkKytcblxuLy8gVE9ETzogTWFrZSBtZXNzYWdlcyBlbnVtcz9cblxuLy8gVE9ETzogTWFrZSBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uXG50eXBlIFN1YnNjcmliZXJGdW5jdGlvbiA9IChtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpID0+IHZvaWRcblxuaW50ZXJmYWNlIFN1YnNjcmliZXJOb2RlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb247XG4gICAgcHJpb3JpdHk6IG51bWJlcjtcbiAgICBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG59XG5cblxuXG5jb25zdCBtYWtlU3ViTm9kZSA9IChzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCwgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsID0gbnVsbCk6IFN1YnNjcmliZXJOb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmV4dElkKCksXG4gICAgICAgIHN1YkZuLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbmV4dFxuICAgIH1cbn1cblxuLy8gVE9ETzogPz8gTWFrZSBpdCBzbyBhIHN1YnNjcmliZXIgbGlzdCBjb3VsZCBiZSBkZWFmZW5lZC9saXN0ZW4/XG5cbi8qKlxuICogQSBncm91cCBvZiBmdW5jdGlvbnMsIHNvcnRlZCBieSBwcmlvcml0eSwgd2hpY2ggd2lsbCBiZSBjYWxsZWQgc2VxdWVudGlhbGx5IHdoZW4gdGhlIGxpc3QgaXMgbm90aWZpZWQgb2YgYSBuZXcgbWVzc2FnZVxuICovXG5jbGFzcyBQcmlvcml0eVN1YnNjcmliZXJMaXN0IHtcbiAgICByb290OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgdGFpbDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbFxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBtZXNzYWdlcyB0aGF0IGdldCBzZW50IHRvIHRoaXMgbGlzdCB2aWEgdGhlIG5vdGlmeSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbWVzc2FnZSBvYmplY3Qgd2hlbmV2ZXIgdGhpcyBzdWJzY3JpYmVyIGxpc3QgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LCB0aGUgZWFybGllciBpdCB3aWxsIHJ1biwgaWYgaXQgaGFzIHRoZSBzYW1lIHByaW9yaXR5IHRoZSBvbmUgdGhhdCB3YXMgYWRkZWQgZmlyc3Qgd2lsbCBmaXJlIGZpcnN0XG4gICAgICovXG4gICAgc3Vic2NyaWJlKGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVye1xuICAgICAgICAvLyBDYXNlICMxIEVtcHR5IFN1YnNjcmliZXIgTGlzdFxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHkpXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnJvb3RcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgfSBcbiAgICAgICAgLy8gQ2FzZSAjMiBXZSBhbHJlYWR5IGhhdmUgc29tZSBzdWJzY3JpYmVyc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3QgLy8gd2Uga25vdyBpdCBzaG91bGQgYmUgYSBTdWJzY3JpYmVyIE5vZGUgYW5kIG5vdCBudWxsLCBiZWNhdXNlIHdlIGFyZSBoZXJlXG5cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSwgbmV3IHJvb3RcbiAgICAgICAgICAgIGlmKHByaW9yaXR5IDwgdHJhdmVsbGVyIS5wcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0aGlzLnJvb3QpXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vcm1hbCBjYXNlIHdlIGhhdmUgb3RoZXIgdGhpbmdzIHRvIHdvcnJ5IGFib3V0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgJiYgdHJhdmVsbGVyLm5leHQgJiYgdHJhdmVsbGVyLm5leHQucHJpb3JpdHkgPj0gcHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGVpdGhlciBmb3VuZCBhIG5vZGUgd2l0aCBsb3dlciBwcmlvcml0eSB0aGFuIHVzIG9yIHdlIGhhdmUgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgIHRyYXZlbGxlciEubmV4dCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdHJhdmVsbGVyIS5uZXh0KVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdHJhdmVsbGVycyB3YXMgdGhlIG9sZCB0YWlsXG4gICAgICAgICAgICAgICAgaWYodHJhdmVsbGVyID09PSB0aGlzLnRhaWwpe1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5leHQgb25lIGlzIHRoZSBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSB0cmF2ZWxsZXIhLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxsZXIhLm5leHQuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtb3N0IGltcG9yYW50IGluZm9ybWF0aW9uIGZvciB0aGUgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdG9waWMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHB1YnN1YiB0byByZW1pbmQgdGhlIHN1YnNjcmliZXIgb2YgdGhlIHNwZWNpZmljIHRvcGljIG9yIHN1YnRvcGljXG4gICAgICovXG4gICAgbm90aWZ5KG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290XG4gICAgICAgIHdoaWxlKHRyYXZlbGxlciAhPSBudWxsKXtcbiAgICAgICAgICAgIHRyYXZlbGxlci5zdWJGbihtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IiwiaW1wb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0gZnJvbSAnLi9wcmlvcml0eVN1YnNjcmliZXJMaXN0J1xuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBQdWJzdWIgaXMgYSB0b3BpYy1iYXNlZCBvYnNlcnZlciBwYXR0ZXJuIGltcGxlbWVudGF0aW9uIGRlc2lnbmVkIHRvIGF2b2lkIHRpZ2h0IGNvdXBsaW5nIG9mIGNvbXBvbmVudHNcbiAqL1xuY2xhc3MgUHViU3ViIHtcbiAgICB0b3BpY3M6IEhhc2g8UHJpb3JpdHlTdWJzY3JpYmVyTGlzdD47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50b3BpY3MgPSB7fVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhIG1lc3NhZ2UgdG8gYWxsIHN1YnNjcmliZXJzIHRvIGEgdG9waWNcbiAgICAgKiBAcGFyYW0gdG9waWMgVG9waWMgdG8gdXNlLCBpZiBub2JvZHkgaXMgc3Vic2NyaWJlZCB0byBpdCwgbm90aGluZyBoYXBwZW5zXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGFjdHVhbCBtZXNzYWdlIHRvIHNlbmQsIHRoaXMgY291bGQgYmUgYW55dGhpbmcsIGJ1dCBpdCdzIGEgc2luZ2xlIHRoaW5nXG4gICAgICovXG4gICAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXS5ub3RpZnkobWVzc2FnZSwgdG9waWMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgc3BlY2lmaWMgdG9waWMgd2l0aCBhIGdpdmVuIHByaW9yaXR5LCByZXR1cm5zIGFuIGlkIHRoYXQgeW91J2xsIG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gdG9waWMgdGhlIHNwZWNpZmljIHRvcGljIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSBmbiB0aGUgZnVuY3Rpb24gdG8gcmVjaWV2ZSB0aGUgc3BlY2lmaWMgbWVzc2FnZSBhbmQgdG9waWMgYmVpbmcgYnJvYWRjYXN0ZWQgdG9cbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgdGhlIHByaW9yaXR5IG9mIHRoZSBmdW5jdGlvbiB0byBzdWJzY3JpYmUgdG8sIGhpZ2hlciBudW1iZXJzIHJ1biBmaXJzdCwgdGhlIGRlZmF1bHQgaXMgemVybywgbmVnYXRpdmUgbnVtYmVycyBhcmUgYWxsb3dlZFxuICAgICAqL1xuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nLCBmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIGlmKCF0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdID0gbmV3IFByaW9yaXR5U3Vic2NyaWJlckxpc3QoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvcGljc1t0b3BpY10uc3Vic2NyaWJlKGZuLCBwcmlvcml0eSlcbiAgICB9XG59XG4vLyBPVVIgVU5JVkVSU0FMIERFRkFVTFQgUFVCU1VCXG5jb25zdCBQVUJTVUIgPSBuZXcgUHViU3ViKClcbmV4cG9ydCB7UFVCU1VCLCBQdWJTdWJ9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFJlbmRlciBDZWxsXG4gKi9cbmludGVyZmFjZSBJUmVuZGVyQ2VsbCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZzsgLy8gdGhpcyBzaG91bGQgb25seSBiZSBzdHJpbmcgb2YgbGVuZ3RoIDFcbiAgICBmb3JlQ29sb3I6IHN0cmluZztcbiAgICBiYWNrQ29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksIGNoYXJhY3RlciwgZm9yZUNvbG9yLCBiYWNrQ29sb3JcbiAgICB9XG59XG5cbmNvbnN0IFJlbmRlckNlbGwgPSB7XG4gICAgbWFrZVxufVxuXG5leHBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbH0iLCJpbXBvcnQge0lSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5cbmludGVyZmFjZSBIYXNoU3RyPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuaW50ZXJmYWNlIEhhc2hOdW08VD4ge1xuICAgIFtrZXk6IG51bWJlcl06IFQ7XG59XG5cbmNvbnN0IGNvZGUgPSAoY2hhcjogc3RyaW5nKTogbnVtYmVyID0+IGNoYXIuY2hhckNvZGVBdCgwKVxuY29uc3QgQ0hBUkFDVEVSX0hFTFBFUjogSGFzaFN0cjxzdHJpbmc+ID0ge1xuICAgIFZFUlRJQ0FMX0xJTkU6ICfilIInLFxuICAgIEhPUklaT05UQUxfTElORTogJ+KUgCcsXG4gICAgQ1JPU1NfTElORVM6ICfilLwnLFxuICAgIFRfTEVGVDogJ+KUpCcsXG4gICAgVF9VUDogJ+KUtCcsXG4gICAgVF9SSUdIVDogJ+KUnCcsXG4gICAgVF9ET1dOOiAn4pSsJyxcbiAgICBUT1BfUklHSFQ6ICfilJQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ+KUjCcsXG4gICAgQk9UVE9MX0xFRlQ6ICfilJAnLFxuICAgIFRPUF9MRUZUOiAn4pSYJ1xufVxuXG5jb25zdCBUSUxFX1dJRFRIID0gMTAsIFRJTEVfSEVJR0hUID0gMTBcblxuY29uc3QgQ09ERV9UT19SRUNUX0hBU0g6IEhhc2hOdW08SVJlY3Q+ID0ge31cbmNvbnN0IHNwYWNlQ29kZSA9ICAgY29kZSgnICcpXG5jb25zdCBhdENvZGUgPSAgICAgIGNvZGUoJ0AnKVxuY29uc3QgYUNvZGUgPSAgICAgICBjb2RlKCdhJylcbmNvbnN0IHpDb2RlID0gICAgICAgY29kZSgneicpXG5jb25zdCBBQ29kZSA9ICAgICAgIGNvZGUoJ0EnKVxuY29uc3QgWkNvZGUgPSAgICAgICBjb2RlKCdaJylcblxuXG5jb25zdCBjdHJoSGVscGVyID0gKGNvZGU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlXSA9IFJlY3QubWFrZSh4LHksIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuXG4vLyBXZSB3aWxsIGZpbGwgaW4gdGhlIG90aGVyIGNoYXJhY3RlcnMgYXMgbmVjZXNzYXJ5XG5DT0RFX1RPX1JFQ1RfSEFTSFtzcGFjZUNvZGVdID0gUmVjdC5tYWtlKDAsIDAsIDEwLCAxMClcbkNPREVfVE9fUkVDVF9IQVNIW2F0Q29kZV0gPSBSZWN0Lm1ha2UoMCwgMTAsIDEwLCAxMClcbmZvcihsZXQgaSA9IEFDb2RlOyBpIDw9IFpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gQUNvZGUpICogMTAsIDMwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbmZvcihsZXQgaSA9IGFDb2RlOyBpIDw9IHpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gYUNvZGUpICogMTAsIDQwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbi8vIGZvciBicmV2aXRpZXMgc2FrZVxuY29uc3QgQ0ggPSBDSEFSQUNURVJfSEVMUEVSXG5jdHJoSGVscGVyKGNvZGUoQ0guVkVSVElDQUxfTElORSksIDE0MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5IT1JJWk9OVEFMX0xJTkUpLCAxNTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQ1JPU1NfTElORVMpLCAxNjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9MRUZUKSwgMTcwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfVVApLCAxODAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9SSUdIVCksIDE5MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0RPV04pLCAyMDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX1JJR0hUKSwgMjEwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTV9SSUdIVCksIDIyMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT0xfTEVGVCksIDIzMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfTEVGVCksIDI0MCwxMClcblxuXG5mdW5jdGlvbiBkcmF3U2VjdGlvbihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGlsZXNoZWV0OiBhbnksIHNyY1JlY3Q6IElSZWN0LCBkZXN0UmVjdDogSVJlY3QsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IHZvaWR7XG4gICAgY3R4LmNsZWFyUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNoZWV0LCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53aWR0aCwgc3JjUmVjdC5oZWlnaHQsIGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICd4b3InXG4gICAgY3R4LmZpbGxTdHlsZT1mb3JlQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJ1xuICAgIGN0eC5maWxsU3R5bGU9YmFja0NvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xufVxuXG5jb25zdCBkcmF3U3RyaW5nVG9HcmlkID0gKGdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBtZXNzYWdlOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgbGV0IGN1cnJlbnRYID0geFxuICAgIGxldCBjdXJyZW50WSA9IHlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IG1lc3NhZ2VbaV1cbiAgICAgICAgaWYoZ3JpZC5pbkJvdW5kc1hZKGN1cnJlbnRYLCBjdXJyZW50WSkgJiYgbGV0dGVyICE9ICdcXG4nKXtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGdyaWQuZ2V0WFkoY3VycmVudFgsY3VycmVudFkpXG4gICAgICAgICAgICB0YXJnZXQuY2hhcmFjdGVyID0gbGV0dGVyXG4gICAgICAgICAgICB0YXJnZXQuYmFja0NvbG9yID0gQ09MT1JTLndoaXRlXG4gICAgICAgICAgICB0YXJnZXQuZm9yZUNvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgIH1cbiAgICAgICAgaWYobGV0dGVyICE9PSAnXFxuJyl7XG4gICAgICAgICAgICBjdXJyZW50WCsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50WSsrXG4gICAgICAgICAgICBjdXJyZW50WCA9IHhcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0ICB7IENPREVfVE9fUkVDVF9IQVNILCBDSEFSQUNURVJfSEVMUEVSLCBjb2RlLCBkcmF3U2VjdGlvbiwgZHJhd1N0cmluZ1RvR3JpZCB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUsIFRpbGVNYXRlcmlhbCB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCBERUJVRyBmcm9tICcuL2RlYnVnU2V0dGluZ3MnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb0dyaWQgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIGVudGl0aWVzOiBFbnRpdHlbXSwgcmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4sIGNhbWVyYUZyYW1lOiBJUmVjdCwgZGVidWdHcmlkOiBHcmlkPElSZW5kZXJDZWxsPik6IHZvaWQgPT4ge1xuICAgIC8vIHJlbmRlckdyaWQgaXMgaW4gU0NSRUVOIGNvb3JkaW5hdGVzLCBhbmQgd2lsbCBoYXZlIGl0J3MgWFkgaWdub3JlZCBmb3Igb3VyIHB1cnBvc2VzXG4gICAgLy8gdGlsZUdyaWQsIGVudGl0aWVzIGFuZCBmb3ZHcmlkIGFyZSBpbiBXT1JMRCBjb29yZGluYXRlcyBhbmQgd2lsbCBoYXZlIHRoZWlyIFhZIGFuZCB5IGlnbm9yZWQgZm9yIG5vd1xuXG4gICAgLy8gY2FtZXJhIGFuZCByZW5kZXJHcmlkIGJvdGggc3RhcnQgYXQgdGhlIHRvcExlZnQgaW4gdGVybXMgb2YgYWxpZ25pbmcgdGhlIHR3b1xuICAgIC8vIEkgYWxtb3N0IGZlZWwgbGlrZSB3ZSBzaG91bGQgdGlnaHRlbiB0aGUgY291cGxpbmcsIGJ1dCBvaCB3ZWxsLCBsZXQncyBhY3R1YWxseSBkbyBpdFxuICAgIGNvbnN0IHNjcmVlblAgPSBQb2ludC5tYWtlKDAsMClcbiAgICBjb25zdCB3b3JsZFAgPSBQb2ludC5tYWtlKDAsMClcbiAgICBmb3IobGV0IHJlbENhbWVyYVkgPSAwOyByZWxDYW1lcmFZIDwgY2FtZXJhRnJhbWUuaGVpZ2h0OyByZWxDYW1lcmFZKyspe1xuICAgICAgICBmb3IobGV0IHJlbENhbWVyYVggPSAwOyByZWxDYW1lcmFYIDwgY2FtZXJhRnJhbWUud2lkdGg7IHJlbENhbWVyYVgrKyl7XG4gICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHJlbmRlckdyaWQgYW5kIHRoZSBjYW1lcmFzXG4gICAgICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgcmVsQ2FtZXJhWCwgcmVsQ2FtZXJhWSlcbiAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgdGlsZUdyaWQsIGZvdkdyaWQsIGFuZCBlbnRpdGllc1xuICAgICAgICAgICAgUG9pbnQuc2V0KHdvcmxkUCwgc2NyZWVuUC54ICsgY2FtZXJhRnJhbWUueCwgc2NyZWVuUC55ICsgY2FtZXJhRnJhbWUueSlcblxuICAgICAgICAgICAgLy8gTGV0J3MgZG8gc29tZSBib3VuZHMgY2hlY2tpbmdcbiAgICAgICAgICAgIC8vIHdlIGtub3cgdGhlc2UgcG9pdG5zIGFyZSBhbHdheXMgaW4gY2FtZXJhcywgc28gbmV2ZXIgbmVlZCB0byBjaGVjayB0aGF0XG4gICAgICAgICAgICAvLyB3ZSBhcmUgZ29pbmcgdG8gb2ZmbG9hZCB0aGUgY2FzZSBvZiBjaGVja2luZyBpZiB0aGUgcmVuZGVyR3JpZCBjYW4gZml0IHRoZSBjYW1lcmFTaXplIGZvciBub3dcbiAgICAgICAgICAgIC8vIHNvIGZvciBub3cganVzdCBjaGVjayBpZiB3ZSBhcmUgaW5zaWRlIG9mIHRoZSB0aWxlR3JpZCwgd2hpY2ggY3VycmVudGx5IHNob3VsZCBiZSB0aGUgc2FtZSBkaW1lbnNpb25zIGFzIHRoZSBmb3ZHcmlkLCB0aG91Z2ggdGhhdCBpcyBib3VuZCB0byBjaGFuZ2UgYXMgd2UgdHJ5IGFuZCBvcHRpbWl6ZSB0aGluZ3NcbiAgICAgICAgICAgIC8vIHNvb29vb28sIGxldCdzIGNoZWNrIGlmIHdlIGFyZSBpbnNpZGUgdGhlIHRpbGVHcmlkXG4gICAgICAgICAgICBjb25zdCByZW5kZXJDZWxsICA9IHJlbmRlckdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgbGV0IGlzTGl0ID0gZm92Q2VsbC52aXNpYmxlIC8vIGl0J3MgbGl0IGZhbSwgd2VsbCwgc29tZSBvZiB0aGUgdGltZVxuICAgICAgICAgICAgbGV0IGluQm91bmRzID0gdGlsZUdyaWQuaW5Cb3VuZHNYWSh3b3JsZFAueCwgd29ybGRQLnkpXG5cbiAgICAgICAgICAgIC8vIERldGVybWluZWQgb3VyIGV4cGxvcmF0aW9uIHN0YXRlXG4gICAgICAgICAgICAvLyBUaGlzIGhhcyBiZXR0ZXIgcnVsZXMgdG8gYmUgZmlndXJlZCBvdXRcbiAgICAgICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gJydcbiAgICAgICAgICAgIGlmKCFpbkJvdW5kcyl7IC8vIHRyZWF0IGV2ZXJ5dGhpbmcgb3V0c2lkZSBvZiB0aGUgYm91bmRzIGFzIGV4cGxvcmVkIEkgc3VwcG9zZT9cbiAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X291dHNpZGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX291dHNpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh3b3JsZFAueCwgd29ybGRQLnkpXG4gICAgICAgICAgICAgICAgaWYoIXRpbGUuZXhwbG9yZWQpe1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQUREIERPT1JTXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzV2FsbCA9IHRpbGUuYmxvY2tNb3ZlICYmIHRpbGUuYmxvY2tTaWdodFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0dyb3VuZCA9ICFpc1dhbGwgJiYgdGlsZS5jb250YWluZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTcGFjZSA9ICFpc1dhbGwgJiYgIXRpbGUuY29udGFpbmVkXG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGlsZS5tYXRlcmlhbCA9PT0gVGlsZU1hdGVyaWFsLk1ldGFsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU3BhY2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc0dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5saWdodEdyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLm1ldGFsLmRhcmtHcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNXYWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLm1ldGFsLmxpZ2h0V2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLm1ldGFsLmRhcmtXYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTcGFjZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9vdXRzaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19vdXRzaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzR3JvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzV2FsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF93YWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya193YWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5OiBFbnRpdHkpOiB2b2lkID0+IHtcbiAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIGVudGl0eS54IC0gY2FtZXJhRnJhbWUueCwgZW50aXR5LnkgLSBjYW1lcmFGcmFtZS55KVxuICAgICAgICAvLyBpZiB0aGlzIGlzIGluc2lkZSBvZiB0aGUgY2FtZXJhIGJvdW5kc1xuICAgICAgICBpZihjYW1lcmFGcmFtZS54IDw9IGVudGl0eS54ICYmIGVudGl0eS54IDw9IGNhbWVyYUZyYW1lLnggKyBjYW1lcmFGcmFtZS53aWR0aCAtIDEgJiZcbiAgICAgICAgICAgIGNhbWVyYUZyYW1lLnkgPD0gZW50aXR5LnkgJiYgZW50aXR5LnkgPD0gY2FtZXJhRnJhbWUueSArIGNhbWVyYUZyYW1lLmhlaWdodCAtIDEpe1xuICAgICAgICAgICAgY29uc3QgckNlbGw6IElSZW5kZXJDZWxsID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsOiBGT1ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBpZihmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgICAgIHJDZWxsLmZvcmVDb2xvciA9IGVudGl0eS5jb2xvclxuICAgICAgICAgICAgICAgIHJDZWxsLmNoYXJhY3RlciA9IGVudGl0eS5jaGFyYWN0ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIGlmKERFQlVHLkRFQlVHX0RSQVcpe1xuICAgICAgICBmb3IobGV0IHJlbENhbWVyYVkgPSAwOyByZWxDYW1lcmFZIDwgY2FtZXJhRnJhbWUuaGVpZ2h0OyByZWxDYW1lcmFZKyspe1xuICAgICAgICAgICAgZm9yKGxldCByZWxDYW1lcmFYID0gMDsgcmVsQ2FtZXJhWCA8IGNhbWVyYUZyYW1lLndpZHRoOyByZWxDYW1lcmFYKyspe1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgcmVuZGVyR3JpZCBhbmQgdGhlIGNhbWVyYXNcbiAgICAgICAgICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgcmVsQ2FtZXJhWCwgcmVsQ2FtZXJhWSlcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHRpbGVHcmlkLCBmb3ZHcmlkLCBhbmQgZW50aXRpZXNcbiAgICAgICAgICAgICAgICBQb2ludC5zZXQod29ybGRQLCBzY3JlZW5QLnggKyBjYW1lcmFGcmFtZS54LCBzY3JlZW5QLnkgKyBjYW1lcmFGcmFtZS55KVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyQ2VsbCAgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgICAgICBpZihkZWJ1Z0dyaWQuaW5Cb3VuZHNYWSh3b3JsZFAueCwgd29ybGRQLnkpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVidWdDZWxsID0gZGVidWdHcmlkLmdldFAod29ybGRQKVxuICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0NlbGwuYmFja0NvbG9yICE9IENPTE9SUy5ibGFjayl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IGRlYnVnQ2VsbC5iYWNrQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gZGVidWdDZWxsLmNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5mb3JlQ29sb3IgPSBkZWJ1Z0NlbGwuZm9yZUNvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBXQVJOSU5HOiBIRVJFIFRIRVJFIEJFIERSQUdPTlMsIChvciBpbiB0aGlzIGNhc2UsIGEgbG90IG9mIGNvZGUgSSBkb24ndHVuZGVyc3RhbmQpXG5cbi8vIFdFIE9OTFkgV0FOVCBPTkUgUk5HIEdFTkVSQVRPUiBCRUNBVVNFIFdFIEFMV0FZUyBXQU5UIEEgU0VFRCBGT1IgSVRcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUyMTI5NS9zZWVkaW5nLXRoZS1yYW5kb20tbnVtYmVyLWdlbmVyYXRvci1pbi1qYXZhc2NyaXB0XG5cbi8vIEhhc2hpbmcgZnVuY3Rpb24gZm9yIHRha2luZyBzaW1wbGUgc3RyaW5nIGFuZCBjcmVhdGluZyBiZXR0ZXIgXCJ0cnVlXCIgc2VlZHNcbi8vIEkgSEFWRSBOTyBJREVBIFdIQVQgVEhFIE1BR0lDIE5VQk1FUlMgQVJFIEZPUlxuZnVuY3Rpb24geG11cjMoc3RyOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IGggPSAxNzc5MDMzNzAzIF4gc3RyLmxlbmd0aCAvLyBiaXR3aXNlIG9yIHRoZSBzdHJpbmcgd2l0aCB0aGlzIHJhbmRvbSB0aGluZ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBzdHIuY2hhckNvZGVBdChpKSwgMzQzMjkxODM1MylcbiAgICAgICAgaCA9IGggPDwgMTMgfCBoID4+PiAxOVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIGggPj4+IDE2LCAyMjQ2ODIyNTA3KVxuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxMywgMzI2NjQ4OTkwOSlcbiAgICAgICAgcmV0dXJuIChoIF49IGggPj4+IDE2KSA+Pj4gMFxuICAgIH1cbn1cblxudHlwZSBJUmFuZG9tID0oKSA9PiBudW1iZXI7XG5cbi8vIEdFTkVSQVRPUlNcbmZ1bmN0aW9uIHNmYzMyKGE6IGFueSwgYjogYW55LCBjOiBhbnksIGQ6IGFueSk6IChGdW5jdGlvbil7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCk6IGFueXtcbiAgICAgICAgYSA+Pj49IDA7IGI+Pj49IDA7IGMgPj4+PSAwOyBkID4+Pj0gMFxuICAgICAgICBsZXQgdCA9IChhICsgYikgfCAwXG4gICAgICAgIGEgPSBiIF4gYiA+Pj4gOVxuICAgICAgICBiID0gYyArIChjIDw8IDMpIHwgMFxuICAgICAgICBjID0gKGMgPDwgMjEgfCBjID4+PiAxMSlcbiAgICAgICAgZCA9IGQgKyAxIHwgMFxuICAgICAgICB0ID0gdCArIGQgfCAwXG4gICAgICAgIGMgPSBjICsgdCB8IDBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAodCA+Pj4gMCkgLyA0Mjk0OTY3Mjk2XG4gICAgfVxufVxuXG4vLyBPTkUgTElORVIgQ1VSUkVOVExZIE5PVCBJTiBVU0Vcbi8vIGNvbnN0IExDRz0gKHM6IGFueSk6IEZ1bmN0aW9uPT4oKTogYW55PT4oMioqMzEtMSYocz1NYXRoLmltdWwoNDgyNzEscykpKS8yKiozMTtcblxuY29uc3QgUkFORE9NID0ge1xuICAgIF9nZW5lcmF0b3I6ICgoKTogYW55ID0+IHt9KSBhcyBGdW5jdGlvbixcbiAgICBzZWVkOiBmdW5jdGlvbihzZWVkU3RyOiBzdHJpbmcgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSkgKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2VlZCA9IHhtdXIzKHNlZWRTdHIpXG4gICAgICAgIHRoaXMuX2dlbmVyYXRvciA9IHNmYzMyKHNlZWQoKSwgc2VlZCgpLCBzZWVkKCksIHNlZWQoKSlcbiAgICAgICAgcmV0dXJuIHNlZWRTdHJcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKCk6IGFueSB7XG4gICAgICAgIGlmKHRoaXMuX2dlbmVyYXRvciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnNlZWQoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZW5lcmF0b3IoKVxuICAgIH0sXG4gICAgbmV4dEludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMubmV4dCgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuICAgIH1cbn1cblxuZXhwb3J0IHsgUkFORE9NIH0iLCIvKipcbiAqIEludGVyZmFjZSBmb3Igd29ya2luZyB3aXRoIGEgMkQgUG9pbnRcbiAqL1xuaW50ZXJmYWNlIElQb2ludCB7ICBcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEhlbHBmdWwgZW51bSBmb3IgZGlyZWN0aW9ucyBpbiBhIGdyaWQsXG4gKiBVcDogLXksIERvd246ICt5LCBMZWZ0OiAteCwgUmlnaHQ6ICt4XG4gKi9cbmVudW0gR3JpZERpcmVjdGlvbiB7XG4gICAgVXAsXG4gICAgRG93bixcbiAgICBMZWZ0LFxuICAgIFJpZ2h0XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IFBvaW50XG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4ge3gseX1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHBvaW50IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhZGRpbmcgYm90aCBvZiB0aGVtIHRvZ2V0aGVyLCBpZiB5b3Ugd2FudCB0byBhZGQgYSBwb2ludCBUTyBhbm90aGVyIHBvaW50LCB1c2UgYWRkVG9cbiAqIEBwYXJhbSBhIEZpcnN0IFBvaW50LCB1bm1vZGlmaWVkXG4gKiBAcGFyYW0gYiBTZWNvbmQgUG9pbnQsIHVubW9kaWZpZWRcbiAqL1xuY29uc3QgYWRkID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShhLnggKyBiLngsIGEueSArIGIueSlcbn1cblxuLyoqXG4gKiBBIHV0aXRpbHkgdG8gbW92ZSBpbiBhIGRpcmVjdGlvbiwgYWxsb3dzIGZvciB2YXJpYWJpbGl0eSBpbiB0aGUgZGlyZWN0aW9uIHdpdGhvdXQgaGF2aW5nIHRvIHJlc29ydCB0byBtb2RpZnlpbmcgdGhlIHggYW5kIHkgY29vcmluZGF0ZXMgaW5kaXZpZHVhbGx5XG4gKiBAcGFyYW0gcG9pbnQgUG9pbnQgdG8gYmUgbW92ZWQsIHdpbGwgYmUgdGhlIHJldHVybiB2YWx1ZVxuICogQHBhcmFtIGRpcmVjdGlvbiwgdGhlIEdyaWQgRGlyZWN0aW9uIHlvdSB3YW50IHRvIG1vdmUgaW5cbiAqIEBwYXJhbSBkaXN0YW5jZSwgb3B0aW9uYWwgZGVmYXVsdHMgdG8gMSwgaG93IGZhciB5b3Ugd2FudCB0aGUgcG9pbnQgdG8gbW92ZSBcbiAqL1xuY29uc3QgbW92ZSA9IChwb2ludDogSVBvaW50LCBkaXJlY3Rpb246IEdyaWREaXJlY3Rpb24sIGRpc3RhbmNlOiBudW1iZXIgPSAxKTogSVBvaW50ID0+IHtcbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLkxlZnQpe1xuICAgICAgICBwb2ludC54IC09IGRpc3RhbmNlXG4gICAgfVxuICAgIGlmKGRpcmVjdGlvbiA9IEdyaWREaXJlY3Rpb24uUmlnaHQpe1xuICAgICAgICBwb2ludC54ICs9IGRpc3RhbmNlXG4gICAgfVxuICAgIGlmKGRpcmVjdGlvbiA9IEdyaWREaXJlY3Rpb24uVXApe1xuICAgICAgICBwb2ludC55IC09IGRpc3RhbmNlXG4gICAgfVxuICAgIGlmKGRpcmVjdGlvbiA9IEdyaWREaXJlY3Rpb24uRG93bil7XG4gICAgICAgIHBvaW50LnkgKz0gZGlzdGFuY2VcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQWRkIHRoZSB2YWx1ZSBvZiBQb2ludCBhIHRvIFBvaW50IGJcbiAqIEBwYXJhbSBhIFRoZSBwb2ludCB0aGF0IGNoYW5nZXMsIHdpbGwgaGF2ZSBiIGFkZGVkIHRvIGl0XG4gKiBAcGFyYW0gYiBUaGUgcG9pbnQgd2hvc2UgdmFsdWUgaXMgYWRkZWQgdG8gdGhlIG90aGVyLCBpdCBpcyB1bm1vZGlmaWVkIGl0c2VsZlxuICovXG5jb25zdCBhZGRUbyA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgYS54ICs9IGIueFxuICAgIGEueSArPSBiLnlcbiAgICByZXR1cm4gYVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWVzIG9mIGEgcG9pbnQgd2l0aCB4IGFuZCB5IHZhbHVlcywgcmV0dXJucyB0aGUgbm93IG1vZGlmaWVkIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgcG9pbnQgdG8gYmUgbW9kaWZpZWRcbiAqIEBwYXJhbSB4IG5ldyB4IHZhbHVlXG4gKiBAcGFyYW0geSBuZXcgeSB2YWx1ZVxuICovXG5jb25zdCBzZXQgPSAocG9pbnQ6IElQb2ludCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHBvaW50LnggPSB4XG4gICAgcG9pbnQueSA9IHlcbiAgICByZXR1cm4gcG9pbnRcbn1cblxuLyoqXG4gKiBDb3B5IGEgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBQb2ludCB0aGF0IHdpbGwgYmUgY29waWVkXG4gKi9cbmNvbnN0IGNvcHkgPSAocG9pbnQ6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UocG9pbnQueCwgcG9pbnQueSlcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIG1lYW50IHRvIHdvcmsgd2l0aCB0aGluZ3MgdGhhdCBoYXZlIHRoZSBJUG9pbnQgaW50ZXJmYWNlXG4gKi9cbmNvbnN0IFBvaW50ID0ge1xuICAgIG1ha2UsXG4gICAgbW92ZSxcbiAgICBhZGQsXG4gICAgYWRkVG8sXG4gICAgc2V0LFxuICAgIGNvcHlcbn1cblxuZXhwb3J0IHtJUG9pbnQsIFBvaW50LCBHcmlkRGlyZWN0aW9ufSIsImltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9wb2ludCdcbmludGVyZmFjZSBJUmVjdCBleHRlbmRzIElQb2ludCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0U2lkZXMge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RDb3JuZXJzIHtcbiAgICB0bDogSVBvaW50O1xuICAgIHRyOiBJUG9pbnQ7XG4gICAgYmw6IElQb2ludDtcbiAgICBicjogSVBvaW50O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY3RhbmdsZVxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqIEBwYXJhbSB3aWR0aCBcbiAqIEBwYXJhbSBoZWlnaHQgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9XG59XG5cbmNvbnN0IHNldCA9IChyOiBJUmVjdCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHIueCA9IHhcbiAgICByLnkgPSB5XG4gICAgci53aWR0aCA9IHdpZHRoXG4gICAgci5oZWlnaHQgPSBoZWlnaHRcbiAgICByZXR1cm4gclxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgdW5pdCB2YWx1ZSBvZiB0aGUgc2lkZXMgb2YgdGhlIHJlY3RhbmdsZSwgbGVmdCBhbmQgcmlnaHQgcmV0dXJuIHggY29vcmRpbmF0ZXMsIHRvcCBhbmQgYm90dG9tIGluY2x1ZGUgeSBjb29yZGluYXRlc1xuICogQHBhcmFtIHJlY3QgcmVjdGFuZ2xlIHVzZWRcbiAqL1xuY29uc3Qgc2lkZXMgPSAocmVjdDogSVJlY3QpOiBJUmVjdFNpZGVzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LngsXG4gICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH1cbn1cbmNvbnN0IGNvcm5lcnMgPSAocmVjdDogSVJlY3QpOiBJUmVjdENvcm5lcnMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRsOiBQb2ludC5tYWtlKHJlY3QueCwgcmVjdC55KSxcbiAgICAgICAgdHI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55KSxcbiAgICAgICAgYmw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkgKyByZWN0LmhlaWdodCksXG4gICAgICAgIGJyOiBQb2ludC5tYWtlKHJlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjZW50ZXIgcG9pbnQ6IE5PVEU6IFRoaXMgZmluZHMgdGhlIElOVEVHRVIgY2VudGVyLCBjb29yZGluYXRlcyBhcmUgdHJ1bmNhdGVkXG4gKiBAcGFyYW0gcmVjdCBUaGUgcmVjdGFuZ2xlIHdlIGFyZSBmaW5kaW5nIHRoZSBjZW50ZXIgb2ZcbiAqL1xuY29uc3QgY2VudGVyID0gKHJlY3Q6IElSZWN0KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gUG9pbnQubWFrZShNYXRoLmZsb29yKHJlY3QueCArIHJlY3Qud2lkdGgvMiksIE1hdGguZmxvb3IocmVjdC55ICsgcmVjdC5oZWlnaHQvMikpXG59XG5cbi8vIE9QVElNSVpFOiBEb24ndCBjYWxsIHNpZGVzLCBqdXN0IHVzZSB0aGUgcmF3IG51bWJlcnMgYW5kIGFkZGl0aW9uXG5jb25zdCBpbnRlcnNlY3RzID0gKGE6IElSZWN0LCBiOiBJUmVjdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGFTaWRlcyA9IHNpZGVzKGEpXG4gICAgY29uc3QgYlNpZGVzID0gc2lkZXMoYilcbiAgICByZXR1cm4gYVNpZGVzLmxlZnQgPD0gYlNpZGVzLnJpZ2h0ICYmIGFTaWRlcy5yaWdodCA+PSBiU2lkZXMubGVmdCAmJiBcbiAgICAgICAgYVNpZGVzLnRvcCA8PSBiU2lkZXMuYm90dG9tICYmIGFTaWRlcy5ib3R0b20gPj0gYlNpZGVzLnRvcFxuXG4gICAgICAgIFxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSBhbmQgbWFuaXB1bGF0ZSByZWN0YW5nbGVzXG4gKi9cbmNvbnN0IFJlY3QgPSB7XG4gICAgbWFrZSxcbiAgICBzZXQsXG4gICAgc2lkZXMsXG4gICAgY29ybmVycyxcbiAgICBjZW50ZXIsXG4gICAgaW50ZXJzZWN0c1xufVxuXG5leHBvcnQge0lSZWN0LCBSZWN0fVxuIiwiLy8gSSBndWVzcyBldmVyeXRoaW5nIHdvdWxkIG5lZWQgaXQncyBvd24gc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uLi4gZ3Jvc3NcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgbG9jYXRpb25zIG9uIHRoZSBib2FyZCwgZXZlbnR1YWxseSB3ZSB3aWxsIHByb2JhYmx5IG1vdmUgdGhpcyBpbnRvIGl0cyBvd24gRUNTIHN5c3RlbVxuICovXG5lbnVtIFRpbGVNYXRlcmlhbCB7XG4gICAgQXN0ZXJvaWQsXG4gICAgTWV0YWxcbn1cbmNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGJsb2NrTW92ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgdGlsZSBibG9jayBsaW5lIG9mIHNpZ2h0XG4gICAgICovXG4gICAgYmxvY2tTaWdodDogYm9vbGVhbjtcblxuICAgIGV4cGxvcmVkOiBib29sZWFuO1xuXG4gICAgY29udGFpbmVkOiBib29sZWFuOyAvLyBtb2RlbHMgaWYgdGhpcyB0aGluZyBoYXMgYSBmbG9vciBhbmQgY2VpbGluZywgKG9yLCBpbiB1bml2ZXJzZSwgc3R1ZmYgc3Vycm91bmRpbmcgaXQgb24gdGhlIHotYXhpcylcblxuICAgIG1hdGVyaWFsOiBUaWxlTWF0ZXJpYWw7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tNb3ZlIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tTaWdodCBvcHRpb25hbCwgd2lsbCBkZWZhdWx0IHRvIHdoYXRldmVyIGJsb2NrTW92ZSBpcyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgYmxvY2tNb3ZlOiBib29sZWFuLCBibG9ja1NpZ2h0PzogYm9vbGVhbiApe1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5ibG9ja01vdmUgPSBibG9ja01vdmVcbiAgICAgICAgdGhpcy5leHBsb3JlZCA9IGZhbHNlXG4gICAgICAgIGlmKGJsb2NrU2lnaHQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja01vdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrU2lnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lZCA9IHRydWVcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IFRpbGVNYXRlcmlhbC5Bc3Rlcm9pZFxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRpbGUsIFRpbGVNYXRlcmlhbCB9Il0sInNvdXJjZVJvb3QiOiIifQ==