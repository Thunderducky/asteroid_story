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
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");

const MAX_LEAF_SIZE = 20;
const MIN_LEAF_SIZE = 6;
class Leaf {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.left = null;
        this.right = null;
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
        let splitHorizontally = _rngHelper__WEBPACK_IMPORTED_MODULE_0__["RANDOM"].next() < 0.5;
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
        const split = _rngHelper__WEBPACK_IMPORTED_MODULE_0__["RANDOM"].nextInt(MIN_LEAF_SIZE, max);
        if (splitHorizontally) {
            this.left = new Leaf(this.x, this.y, this.width, split);
            this.right = new Leaf(this.x, this.y + split, this.width, this.height - split);
        }
        else {
            this.left = new Leaf(this.x, this.y, this.width, split);
            this.right = new Leaf(this.x + split, this.y, this.width - split, this.height);
        }
        return true;
    }
}
const leafs = [];
function* progressiveMapGenerator(tileGrid, rooms, debugGrid) {
    // Clear out all the tiles
    const clear = () => {
        tileGrid.forEach((t) => {
            t.blockMove = false;
            t.blockSight = false;
            t.contained = false;
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
        leafs.forEach(l => {
            if (!l.hasSplit()) {
                if (l.width > MAX_LEAF_SIZE || l.height > MAX_LEAF_SIZE || _rngHelper__WEBPACK_IMPORTED_MODULE_0__["RANDOM"].next() > 0.25) {
                    if (l.split()) {
                        leafs.push(l.left);
                        leafs.push(l.right);
                        hadSplit = true;
                    }
                }
            }
        });
        // draw out each of these boys in walls
        clear();
        leafs.forEach(l => {
            // draw each of the edges
            for (let x = l.x; x < l.x + l.width - 1; x++) {
                // draw our two bars
                const t = tileGrid.getXY(x, l.y);
                t.blockMove = true;
                t.blockSight = true;
            }
            for (let x = l.x; x < l.x + l.width; x++) {
                // draw our two bars
                const t = tileGrid.getXY(x, l.y + l.height - 1);
                t.blockMove = true;
                t.blockSight = true;
            }
            // verticals
            for (let y = l.y; y < l.y + l.height - 1; y++) {
                // draw our two bars
                const t = tileGrid.getXY(l.x, y);
                t.blockMove = true;
                t.blockSight = true;
            }
            for (let y = l.y; y < l.y + l.height - 1; y++) {
                // draw our two bars
                const t = tileGrid.getXY(l.x + l.width - 1, y);
                t.blockMove = true;
                t.blockSight = true;
            }
        });
        yield;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZGVidWdTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Zvdi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oYW5kbGVJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3Byb2dyZXNzaXZlTWFwR2VuZXJhdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVyVG9HcmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFFUDtBQUVRO0FBQ007QUFDRTtBQUNWO0FBQ2lDO0FBRXBFLE1BQU0sRUFDRixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFD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QUFDLENBQUMsRUFBQyxDQUFDO0tBQ25FO0lBQ0QsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQzNHLHFEQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0tBQ3BFO0lBQ0QsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1FBQy9HLHFEQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztLQUNuRTtJQUNELHlCQUF5QjtJQUN6QixJQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBQztRQUNsRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdB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VSxLQUFLLFNBQVMsRUFBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtTQUMvQjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO0lBRXpDLENBQUM7Q0FDSjtBQUU0QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0gZnJvbSAnLi9rZXlib2FyZE1vbml0b3InXG5pbXBvcnQgeyBNb3VzZU1vbml0b3IgfSBmcm9tICcuL21vdXNlTW9uaXRvcidcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vYXNzZXRIZWxwZXInXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4vY2FudmFzUmVuZGVyZXInXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgUFVCU1VCIH0gZnJvbSAnLi9wdWJTdWIvcHViU3ViJ1xuaW1wb3J0IHsgUmVjdCwgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSURfTUFOQUdFUiB9IGZyb20gJy4vaWRNYW5hZ2VyJ1xuaW1wb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCB7IG1hcEdlbmVyYXRvcjMgfSBmcm9tICcuL21hcEdlbmVyYXRpb24nXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuXG5pbXBvcnQgU0VUVElOR1MgZnJvbSAnLi9nYW1lU2V0dGluZ3MnXG5pbXBvcnQgeyBoYW5kbGVJbnB1dCB9IGZyb20gJy4vaGFuZGxlSW5wdXQnXG5pbXBvcnQgeyByZW5kZXJUb0dyaWQgfSBmcm9tICcuL3JlbmRlclRvR3JpZCdcbmltcG9ydCBERUJVRyBmcm9tICcuL2RlYnVnU2V0dGluZ3MnXG5pbXBvcnQgeyBwcm9ncmVzc2l2ZU1hcEdlbmVyYXRvciB9IGZyb20gJy4vcHJvZ3Jlc3NpdmVNYXBHZW5lcmF0b3IyJ1xuXG5jb25zdCB7XG4gICAgVElMRV9XSURUSCxcbiAgICBUSUxFX0hFSUdIVCxcbiAgICBTQ1JFRU5fV0lEVEgsXG4gICAgU0NSRUVOX0hFSUdIVCxcbiAgICBNQVBfV0lEVEgsXG4gICAgTUFQX0hFSUdIVCxcbiAgICBDQU1FUkFfV0lEVEgsXG4gICAgQ0FNRVJBX0hFSUdIVCxcbiAgICBGT1ZfUkFESVVTXG59ID0gU0VUVElOR1NcblxuXG4vLyBJTklUSUFMSVpFIE9VUiBTRUVEXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5jb25zdCBzZWVkU3RyID0gdXJsUGFyYW1zLmdldCgnc2VlZCcpXG5pZighc2VlZFN0cil7XG4gICAgY29uc3Qgc2VlZCA9IFJBTkRPTS5zZWVkKHNlZWRTdHIgfHwgdW5kZWZpbmVkKVxuICAgIGNvbnN0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/c2VlZD0nICsgc2VlZFxuICAgIGlmIChoaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe3BhdGg6bmV3dXJsfSwnJyxuZXd1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICB9XG5cbn0gZWxzZSB7XG4gICAgUkFORE9NLnNlZWQoc2VlZFN0cilcbn1cblxuY29uc3QgcGxheWVyOiBFbnRpdHkgPSBuZXcgRW50aXR5KElEX01BTkFHRVIubmV4dCgpLCAzLDQsICdAJywgQ09MT1JTLnBsYXllcilcbmNvbnN0IG5wYzogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsIENPTE9SUy5ucGMpXG5jb25zdCBlbnRpdGllczogRW50aXR5W10gPSBbcGxheWVyLG5wY11cblxuLy8gRmluZCBvdXIgY2FudmFzIGFuZCBhZGp1c3QgaXQgdG8gb3VyIHNldHRpbmdzXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxuY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIICogVElMRV9XSURUSFxuY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQgKiBUSUxFX0hFSUdIVFxuXG4vLyBJbml0aWFsaXplIG91ciBpbnB1dCBtb25pdG9yc1xuY29uc3Qga20gPSBuZXcgS2V5Ym9hcmRNb25pdG9yKCkuYXR0YWNoKGRvY3VtZW50KVxuY29uc3QgbW0gPSBuZXcgTW91c2VNb25pdG9yKCkuYXR0YWNoKGNhbnZhcylcblxuLy8gSW5pdGlhbGl6ZSBvdXIgY2FudmFzIHJlbmRlcmVyXG5jb25zdCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcigpXG5jb25zdCBjYW1lcmFGcmFtZSA9IFJlY3QubWFrZSgwLDAsIENBTUVSQV9XSURUSCwgQ0FNRVJBX0hFSUdIVCkgLy8gQ0FNRVJBIElTIElOIFdPUkxEIENFTExTLCBOT1QgQUJTT0xVVEUgVU5JVFNcblxuLy8gSW5pdGlhbGl6ZSBvdXIgR3JpZHNcbmNvbnN0IHJlbmRlckdyaWQgPSBuZXcgR3JpZDxJUmVuZGVyQ2VsbD4oY2FtZXJhRnJhbWUud2lkdGgsIGNhbWVyYUZyYW1lLmhlaWdodClcbnJlbmRlckdyaWQuc2V0RWFjaCgoY2VsbDogYW55LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4gUmVuZGVyQ2VsbC5tYWtlKHgseSwnJywgQ09MT1JTLmJsYWNrLCBDT0xPUlMuYmxhY2spXG59KVxuXG4vLyBUSEVTRSBBUkUgSEVSRSBCWSBERUZBVUxULCBCVVQgV09OJ1QgQkUgU0hPV04gVU5MRVNTIEVOQUJMRURcbmNvbnN0IGRlYnVnR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG5kZWJ1Z0dyaWQuc2V0RWFjaCgoY2VsbDogYW55LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4gUmVuZGVyQ2VsbC5tYWtlKHgseSwnJywgQ09MT1JTLmJsYWNrLCBDT0xPUlMuYmxhY2spXG59KVxuXG5sZXQgZm92UmVjb21wdXRlID0gIURFQlVHLkRJU0FCTEVfRk9WXG5jb25zdCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+ID0gbmV3IEdyaWQ8Rk9WQ2VsbD4oY2FtZXJhRnJhbWUud2lkdGgsIGNhbWVyYUZyYW1lLmhlaWdodClcbmZvdkdyaWQuc2V0RWFjaCgoKTogRk9WQ2VsbCA9PiB7IHJldHVybiB7XG4gICAgdmlzaWJsZTogREVCVUcuRElTQUJMRV9GT1Zcbn19KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgY29uc3QgdCA9IG5ldyBUaWxlKHgseSwgdHJ1ZSlcbiAgICBpZihERUJVRy5ESVNBQkxFX0ZPVil7XG4gICAgICAgIHQuZXhwbG9yZWQgPSB0cnVlXG4gICAgfVxuICAgIHJldHVybiB0XG59KVxuXG4vLyB0aGlzIHdpbGwgYWxzbyBwb3B1bGF0ZSB0aGUgcm9vbXNcbmNvbnN0IHJvb21zOiBJUmVjdFtdID0gW11cbi8vbWFwR2VuZXJhdG9yMyh0aWxlR3JpZCwgcm9vbXMpXG4vL21hcEdlbmVyYXRvcjIodGlsZUdyaWQsIHJvb21zKVxuXG4vLyB0aGlzIGlzIGhvbmVzdGx5IGp1c3QgYW5vdGhlciBwYXJ0IG9mIGdlbnJhdGluZyB0aGluZ3MsIHdlIGp1c3QgbmVlZCB0byBjb21lIHVwIHdpdGggc29tZSBleHRyYSB0ZXJtaW5vbG9neSBmb3IgaXQvIHdheXMgdG8gZGVhbCB3aXRoIGl0XG5cblxuLy8gY2xlYW4gdGhpcyB1cFxuY29uc3QgbW92ZXM6IGFueVtdID0gW11cbmNvbnN0IE1vdmVQcm9jZXNzb3IgPSB7XG4gICAgbW92ZXNcbn1cblxuUFVCU1VCLnN1YnNjcmliZSgnbW92ZScsIChtc2cpOiB2b2lkID0+e1xuICAgIE1vdmVQcm9jZXNzb3IubW92ZXMucHVzaChtc2cpXG59KVxuXG5QVUJTVUIuc3Vic2NyaWJlKCdtb3ZlZCcsIChtc2cpOiB2b2lkID0+e1xuICAgIGlmKG1zZy5pZCA9PT0gcGxheWVyLmlkICYmICFERUJVRy5ESVNBQkxFX1RSQUNLSU5HKXtcbiAgICAgICAgY2FtZXJhRnJhbWUueCA9IE1hdGguZmxvb3IocGxheWVyLnggLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcihwbGF5ZXIueSAtIGNhbWVyYUZyYW1lLmhlaWdodC8yKVxuICAgICAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbiAgICB9XG59KVxuXG5QVUJTVUIuc3Vic2NyaWJlKCdjYW1lcmFfbW92ZScsIChtc2cpOiB2b2lkID0+IHtcbiAgICBjYW1lcmFGcmFtZS54ICs9IG1zZy5kZWx0YS54XG4gICAgY2FtZXJhRnJhbWUueSArPSBtc2cuZGVsdGEueVxuICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG59KVxuXG4vLyBUT0RPOiBNT1ZFIFRISVMgVE8gdGhlIEtleWJvYXJkIE1vbml0b3IgaXRzZWxmIGFzIGEgaGVscGVyIHByb3BlcnR5XG5jb25zdCBuZXdLZXlQcmVzcyA9IChxOiBzdHJpbmcsIGVuYWJsZVpvb206IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBrbS5nZXRLZXlTdGF0ZShxKVxuICAgIGlmKCFlbmFibGVab29tKXtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmlzRG93biAmJiBzdGF0ZS5oYWxmU3RlcHMgPiAwXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmlzRG93biAmJiAoc3RhdGUuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bilcbiAgICB9XG59XG5cbmNvbnN0IGxldmVsSXRlcmF0b3IgPSBwcm9ncmVzc2l2ZU1hcEdlbmVyYXRvcih0aWxlR3JpZCwgcm9vbXMsIGRlYnVnR3JpZClcbmxldmVsSXRlcmF0b3IubmV4dCgpXG57XG4gICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgIGNvbnN0IHBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1swXSlcbiAgICAgICAgUG9pbnQuc2V0KHBsYXllciwgcGNlbnRlci54LCBwY2VudGVyLnkpXG4gICAgICAgIGNvbnN0IG5wY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbcm9vbXMubGVuZ3RoIC0gMV0pXG4gICAgICAgIFBvaW50LnNldChucGMsIG5wY2VudGVyLngsIG5wY2VudGVyLnkpXG4gICAgfVxuXG4gICAgLy8gY2VudGVyIHRoZSBjYW1lcmEgYW5kIGZvdiBvbiB0aGUgcGxheWVyXG4gICAgaWYoIURFQlVHLkRJU0FCTEVfVFJBQ0tJTkcpe1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNlbnRlciBldmVyeXRoaW5nXG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIgLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcih0aWxlR3JpZC5oZWlnaHQvMiAgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG4gICAgfVxufVxuXG5sb2FkSW1hZ2UoJ2Fzc2V0cy9vdXQucG5nJykudGhlbigoaW1hZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIHJlbmRlcmVyLmluaXQoY2FudmFzLCBpbWFnZSlcbiAgICBpZighREVCVUcuU1RBR0VfTUFQX0dFTkVSQVRPUlMpe1xuICAgICAgICAvLyBKVVNUIEZVTExZIFNFUVVFTkNFIFRIRSBHRU5FUkFUT1JcbiAgICAgICAgd2hpbGUobGV2ZWxJdGVyYXRvci5uZXh0KCkuZG9uZSAhPT0gZmFsc2Upe31cbiAgICB9XG4gICAgLy8gTG9vcFxuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGhhbmRsZUlucHV0KGttLCBwbGF5ZXIpXG5cbiAgICAgICAgLy8gZXh0cmFcbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3cnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAwLCB5OiAtMX19KVxuICAgICAgICB9XG4gICAgICAgIGlmKG5ld0tleVByZXNzKCdhJykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogLTEsIHk6IDB9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygncycpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IDAsIHk6IDF9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygnZCcpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IDEsIHk6IDB9fSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKERFQlVHLlNUQUdFX01BUF9HRU5FUkFUT1JTKXtcbiAgICAgICAgICAgIC8vIHEgbGV0cyB1cyBwcm9ncmVzcyB0aHJvdWdoIHRoZSBtYXAgZ2VuZXJhdG9yIHBoYXNlXG4gICAgICAgICAgICBpZihuZXdLZXlQcmVzcygncScpKXtcbiAgICAgICAgICAgICAgICAvLyB5aWVsZCB0aGUgbmV4dCBsZXZlbCBnZW5lcmF0aW5nIHNldHRpbmdcbiAgICAgICAgICAgICAgICBsZXZlbEl0ZXJhdG9yLm5leHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvY2VzcyBtb3Zlc1xuICAgICAgICAvLyBldmVudHVhbGx5IHdlJ2xsIGNvbXBvbmVudGl6ZSB0aGlzIGJldHRlclxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmZvckVhY2goKG1zZzogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gbXNnLmRlbHRhXG4gICAgICAgICAgICBjb25zdCBpZCA9IG1zZy5pZFxuICAgICAgICAgICAgY29uc3QgbW92ZXIgPSBlbnRpdGllcy5maW5kKChlKTogYm9vbGVhbiA9PiBlLmlkID09IGlkKVxuICAgICAgICAgICAgaWYoIW1vdmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpbGVHcmlkLmluQm91bmRzWFkobW92ZXIueCArIG1vdmUueCwgbW92ZXIueSArIG1vdmUueSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgaWYoIXRpbGUuYmxvY2tNb3ZlIHx8IChERUJVRy5FTkFCTEVfQ0xJUFBJTkcgJiYgbW92ZXIuaWQgPT09IHBsYXllci5pZCkpe1xuICAgICAgICAgICAgICAgICAgICBtb3Zlci5tb3ZlKG1vdmUueCwgbW92ZS55KVxuICAgICAgICAgICAgICAgICAgICBpZihtb3Zlci5pZCA9PT0gcGxheWVyLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdlJlY29tcHV0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZWQnLCBtc2cpIC8vIG9ubHkgcHVibGlzaCBtb3ZlIGlmIHRoZSBlbnRpdHkgYWN0dWFsbHkgY29tcGxldGVkIHRoZSBtb3ZlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmxlbmd0aCA9IDBcblxuICAgICAgICBpZihmb3ZSZWNvbXB1dGUgJiYgIURFQlVHLkRJU0FCTEVfRk9WKXtcbiAgICAgICAgICAgIGNhbGN1bGF0ZUZPVihmb3ZHcmlkLCB0aWxlR3JpZCwgcGxheWVyLCBGT1ZfUkFESVVTKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCB0byByZW5kZXIgZm9ybWF0XG4gICAgICAgIHJlbmRlclRvR3JpZCh0aWxlR3JpZCwgZm92R3JpZCwgZW50aXRpZXMsIHJlbmRlckdyaWQsIGNhbWVyYUZyYW1lLCBkZWJ1Z0dyaWQpXG4gICAgICAgIC8vIGFjdHVhbGx5IHJlbmRlciB0byBjYW52YXNcbiAgICAgICAgcmVuZGVyZXIuY2xlYXIoKVxuICAgICAgICByZW5kZXJlci5yZW5kZXIocmVuZGVyR3JpZClcblxuICAgICAgICBrbS5yZXNldFN0ZXBzKClcbiAgICAgICAgbW0ucmVzZXQoKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblxufSkuY2F0Y2goKGVycjogYW55KTogdm9pZCA9PiBjb25zb2xlLmxvZyhlcnIpKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuIiwiZnVuY3Rpb24gbG9hZEltYWdlKHVybDogc3RyaW5nKTogYW55e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKTogYW55ID0+IHJlc29sdmUoaW1nKSlcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCk6IGFueSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tICR7dXJsfWApKSlcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuICAgIH0pXG59XG5cbmV4cG9ydCB7bG9hZEltYWdlfSIsImltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IENPREVfVE9fUkVDVF9IQVNILCBkcmF3U2VjdGlvbiwgY29kZSB9IGZyb20gJy4vcmVuZGVySGVscGVycydcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHRha2luZyBhIHJlbmRlciBncmlkIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGltYWdlc1xuICogb24gdGhlIGNhbnZhc1xuICovXG5cbmNvbnN0IHtUSUxFX1dJRFRILCBUSUxFX0hFSUdIVH0gPSBTRVRUSU5HU1xuXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IHVuZGVmaW5lZDtcbiAgICBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50KTogQ2FudmFzUmVuZGVyZXJ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIC8vIHdlIGFyZSBqdXN0IGZvcmNpbmcgdGhpcyBmb3Igbm93LCB3ZSB3aWxsIGNoZWNrIGlmIGl0J3MgbnVsbFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMhLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaWYoY3R4ID09PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCBjb250ZXh0IGZyb20gY2FudmFzJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8gZXZlbnR1YWxseSB3ZSBuZWVkIHRvIHBhc3MgaW4gdGhlIGRpbWVuc2lvbnMgd2UgYXJlIHJlbmRlcmluZyB0byBhcyB3ZWxsXG4gICAgLy8gZm9yIG5vdyBpdCdzIGZpbmVcbiAgICByZW5kZXIocmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4sIGJhY2tncm91bmQ6IHN0cmluZyA9IENPTE9SUy5ibGFjayk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsIHJlbmRlckdyaWQud2lkdGggKiBUSUxFX1dJRFRILCByZW5kZXJHcmlkLmhlaWdodCAqIFRJTEVfSEVJR0hUKVxuICAgICAgICAvLyBsZXQncyB0cnkgc2V0dGluZyBhIGJhY2tncm91bmQgY29sb3IgYXMgd2VsbFxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBkZXN0UmVjdCA9IFJlY3QubWFrZSgwLDAsMCwwKVxuICAgICAgICByZW5kZXJHcmlkLmZvckVhY2goKFxuICAgICAgICAgICAgY2VsbDogSVJlbmRlckNlbGwsIFxuICAgICAgICAgICAgaW5kZXg6IG51bWJlciwgXG4gICAgICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgUmVjdC5zZXQoZGVzdFJlY3QsIHggKiBUSUxFX1dJRFRILCB5ICogVElMRV9IRUlHSFQsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxuICAgICAgICAgICAgLy8gdG9kbywgYWxsb3cgdXMgdG8gbWFyayByZW5kZXIgY2VsbHMgYXMgJ2VtcHR5JyByYXRoZXIgdGhhbiBzcGFjZXMsIHRoaXMgbWlnaHQgaGVscCBzcGVlZCB1cCByZW5kZXIgdGltZVxuICAgICAgICAgICAgaWYoY2VsbC5jaGFyYWN0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICBpZihjZWxsLmJhY2tDb2xvciAhPT0gYmFja2dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgYWN0dWFsbHkgZG9uJ3Qga25vdyBpZiB0aGlzIGhlbHBzLCBidXQgaXQgc2VlbXMgbGlrZSBzZXR0aW5nIHRoZSBmaWxsU3R5bGUgY291bGQgaW52b2x2ZSBtb3JlIGNvbXBsaWNhdGlvbnMgdGhhbiBqdXN0IGNoZWNraW5nIGlmIGl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgaWYoY3R4LmZpbGxTdHlsZSAhPT0gY2VsbC5iYWNrQ29sb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNlbGwuYmFja0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNSZWN0ID0gQ09ERV9UT19SRUNUX0hBU0hbY29kZShjZWxsLmNoYXJhY3RlcildXG4gICAgICAgICAgICAgICAgZHJhd1NlY3Rpb24oY3R4LCB0aGlzLnNwcml0ZXNoZWV0LCBzcmNSZWN0LCBkZXN0UmVjdCwgY2VsbC5mb3JlQ29sb3IsIGNlbGwuYmFja0NvbG9yIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSIsIi8vIFRPRE86IFJlb3JnYW5pemUgdGhpcyBpbnRvIG1hdGVyaWFsc1xuLy8gV2UnbGwgZXZlbiBpbmNsdWRlIFwiQkxBTktcIlxuLy8gQXMgb3Bwb3NlZCB0byBlbXB0eSBzcGFjZVxuY29uc3QgQ09MT1JTID0ge1xuICAgICdkYXJrX291dHNpZGUnOiAnIzAwMjI0NCcsXG4gICAgJ2xpZ2h0X291dHNpZGUnOiAnIzI2NTM4MCcsXG4gICAgJ2JsYWNrJzogJyMwMDAwMDAnLFxuICAgICd3aGl0ZSc6ICcjRkZGRkZGJyxcbiAgICAnZGFya193YWxsJzogJyMyZDI4MjQnLCAvLycjNDQzYzM1JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzQ0M2MzNScsIC8vJyM2NjU2NDcnLFxuICAgICdsaWdodF93YWxsJzogJyNDOEI0MzInLCAvLyAjQzVDQzg5XG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzVDQzg5JyxcbiAgICAncGxheWVyJzogJyNGRkZGRkYnLFxuICAgICdkYXJrX2Rvb3InOicjNTUwMDAwJyxcbiAgICAnbGlnaHRfZG9vcic6ICcjRkYyMjIyJyxcbiAgICAnbnBjJzogJyNDQzAwMDAnLFxuICAgICdERUJVRyc6ICcjRkYzMzMzJyxcbiAgICBtZXRhbDoge1xuICAgICAgICBkYXJrV2FsbDogJyM0QTRBNEEnLFxuICAgICAgICBkYXJrR3JvdW5kOiAnIzYxNjE2MScsXG4gICAgICAgIGxpZ2h0V2FsbDogJyM4NTg1ODUnLFxuICAgICAgICBsaWdodEdyb3VuZDogJyNCRkJGQkYnXG4gICAgfVxuXG59XG5cbi8vIFNPTUUgR1JBWSBUWVBFU1xuLy8gIzRBNEE0QVxuLy8gIzYxNjE2MVxuLy8gIzg1ODU4NVxuLy8gI0JGQkZCRlxuXG5leHBvcnQgZGVmYXVsdCBDT0xPUlNcbiIsImludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vLyBBTEwgREVCVUcgU0VUVElOR1MgU0hPVUxEIEdPIElOIEhFUkUsIEFORCBBTEwgREVCVUcgRkxBR1MgU0hPVUxEIEJFIEZBTFNFIEJZIERFRkFVTFQgKGkuZS4gcHJvZHVjdGlvbiBtb2RlKVxuY29uc3QgREVCVUc6IEhhc2g8Ym9vbGVhbj4gPSB7XG4gICAgRElTQUJMRV9GT1Y6IHRydWUsICAgICAgICAgIC8vIFNIT1cgRVZFUllUSElORywgTk8gSElESU5HIFNUVUZGIEJFSElORCBGT1YsIEVWRVJZVEhJTkcgQUNUUyBMSVRcbiAgICBESVNBQkxFX1RSQUNLSU5HOiB0cnVlLCAgICAgLy8gQ0FNRVJBIFdJTEwgT05MWSBSRVNQT05EIFRPIERJUkVDVCBDT05UUk9MIEFORCBXT04nVCBUUkFDSyBDSEFSQUNURVJcbiAgICBFTkFCTEVfQ0xJUFBJTkc6IHRydWUsXG4gICAgREVCVUdfRFJBVzogdHJ1ZSxcbiAgICBTVEFHRV9NQVBfR0VORVJBVE9SUzogdHJ1ZSwgLy8gV2Ugd2lsbCBtYW51YWxseSBwcm9ncmVzcyB0aGUgbGV2ZWwgZ2VuZXJhdG9yXG59XG5cbmV4cG9ydCBkZWZhdWx0IERFQlVHXG4iLCIvKipcbiAqIEEgZ2VuZXJpYyBvYmplY3QgdG8gcmVwcmVzZW50IGV2ZXJ5dGhpbmcgdGhhdCBpcyBub3QgdGhlIG1hcCBpdHNlbGZcbiAqIEZvciB0aGF0LCBzZWUgdGhlIFRpbGUgY2xhc3NcbiAqL1xuY2xhc3MgRW50aXR5IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB4OiBudW1iZXIseTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgY29sb3I6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhbiBlbnRpdHksIGN1cnJlbnRseSBkb2Vzbid0IGNoZWNrIGlmIGl0IGNhbiBvciBub3QsIGp1c3QgZG9lc1xuICAgICAqIEBwYXJhbSBkeCBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeCBkaXJlY3Rpb24gKGxlZnQgaXMgbmVnYXRpdmUsIHJpZ2h0IGlzIHBvc2l0aXZlKVxuICAgICAqIEBwYXJhbSBkeSBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeSBkaXJlY3Rpb24gKHVwIGlzIG5lZ2F0aXZlLCBkb3duIGlzIHBvc2l0aXZlKVxuICAgICAqL1xuICAgIG1vdmUoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHZvaWR7XG4gICAgICAgIHRoaXMueCArPSBkeFxuICAgICAgICB0aGlzLnkgKz0gZHlcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVudGl0eSB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUG9pbnQsIFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbmludGVyZmFjZSBGT1ZDZWxsICB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBTaGFkb3dSYW5nZSB7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbn1cblxuY29uc3QgaXNCZXR3ZWVuSW5jbHVzaXZlID0gKGE6IG51bWJlcixiOiBudW1iZXIsdDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgaWYoYiA8IGEpe1xuICAgICAgICByZXR1cm4gYiA8PSB0ICYmIHQgPD0gYVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhIDw9IHQgJiYgdCA8PSBiXG4gICAgfVxufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSBmb3ZHcmlkIFxuICogQHBhcmFtIHRpbGVHcmlkIFxuICogQHBhcmFtIHN0YXJ0UG9pbnQgc3RhcnQgcG9pbnQgaXMgaW4gd29ybGQgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSBtYXhEaXN0YW5jZSBcbiAqIEBwYXJhbSBob3Jpem9udGFsTm90VmVydGljYWwgXG4gKiBAcGFyYW0geERpcmVjdGlvbiBcbiAqIEBwYXJhbSB5RGlyZWN0aW9uIFxuICovXG5jb25zdCBjYWxjdWxhdGVPY3RhbnQgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcixcbiAgICBob3Jpem9udGFsTm90VmVydGljYWw6IGJvb2xlYW4sIHhEaXJlY3Rpb246IG51bWJlciwgeURpcmVjdGlvbjogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgXG4gICAgLy8gT3VyIHNoYWRvd3Mgd2Ugd2lsbCBjYXN0XG4gICAgY29uc3Qgc2hhZG93UmFuZ2VzOiBTaGFkb3dSYW5nZVtdID0gW11cbiAgICAvLyBvdXIgc3RhcnRpbmcgbG9jYXRpb24gaXMgYWx3YXlzIHZpc2libGVcbiAgICBjb25zdCBzY3JlZW5TdGFydFBvaW50PSBQb2ludC5jb3B5KHN0YXJ0UG9pbnQpXG4gICAgc2NyZWVuU3RhcnRQb2ludC54IC09IGZvdkdyaWQueFxuICAgIHNjcmVlblN0YXJ0UG9pbnQueSAtPSBmb3ZHcmlkLnlcbiAgICBmb3ZHcmlkLmdldFAoc2NyZWVuU3RhcnRQb2ludCkudmlzaWJsZSA9IHRydWVcbiAgICAvLyBUT0RPOiBEZXRlcm1pbmUgaWYgdGhlIEZPViBpcyBpbiByYW5nZVxuICAgIGZvcihsZXQgcm93ID0gMTsgcm93IDwgbWF4RGlzdGFuY2U7IHJvdysrKXtcbiAgICAgICAgY29uc3Qgcm93U2l6ZSA9IHJvdyArIDFcbiAgICAgICAgZm9yKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCByb3dTaXplOyBjb2x1bW4rKyl7XG4gICAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIG9jdGFudCwgdGhlIHRyYXZlbGxlciB3aWxsIG1vdmUgZGlmZmVyZW50bHlcbiAgICAgICAgICAgIGNvbnN0IHRyYXZlbGxlciA9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICAgICAgICAgIHRyYXZlbGxlci54ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHhEaXJlY3Rpb24gKiBjb2x1bW4gOiB4RGlyZWN0aW9uICogcm93XG4gICAgICAgICAgICB0cmF2ZWxsZXIueSArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB5RGlyZWN0aW9uICogcm93IDogeURpcmVjdGlvbiAqIGNvbHVtblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgb3V0IG9mIGJvdW5kcywgc2tpcFxuICAgICAgICAgICAgaWYoIXRpbGVHcmlkLmluQm91bmRzWFkodHJhdmVsbGVyLngsIHRyYXZlbGxlci55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmFjdG9yIGluIG91ciB0aWxlIGNoZWNrIHdoZW4gd2UgZ2V0IHRoZSB3b3JsZCBjZWxsXG4gICAgICAgICAgICBsZXQgc2NyZWVuUG9pbnQgPSBQb2ludC5jb3B5KHRyYXZlbGxlcilcbiAgICAgICAgICAgIHNjcmVlblBvaW50LnggLT0gZm92R3JpZC54XG4gICAgICAgICAgICBzY3JlZW5Qb2ludC55IC09IGZvdkdyaWQueVxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFAodHJhdmVsbGVyKVxuICAgICAgICAgICAgLy8gT1BUSU1JWkU6IFdlIGFyZSBwcm9iYWJseSBydW5uaW5nIHRvIG1hbnkgdGltZXMgYW5kIGNvdWxkIGRvIHRoaXMgYmV0dGVyXG4gICAgICAgICAgICBpZighZm92R3JpZC5pbkJvdW5kc1hZKHNjcmVlblBvaW50LngsIHNjcmVlblBvaW50LnkpKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5Qb2ludClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjb2x1bW4vcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgZW5kID0gKGNvbHVtbiArIDEpL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IG1pZGRsZSA9IChzdGFydCArIGVuZCkgLyAyXG5cbiAgICAgICAgICAgIC8vIHRlc3QgZm9yIHZpc2libGl0eVxuICAgICAgICAgICAgbGV0IHZpc2liaWxpdHkgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBlZGdlcyBhcmUgY2xlYXIgb3Igbm90XG4gICAgICAgICAgICBsZXQgc3RhcnRDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBtaWRkbGVDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBlbmRDbGVhciA9IHRydWVcblxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBidWlsdCBzb21lIHNoYWRvdyByYW5nZXNcbiAgICAgICAgICAgIGlmKHNoYWRvd1Jhbmdlcy5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiBhbnkgc2hhZG93cyBjcm9zcyBvdXIgdGhyZWUgcG9pbnRzXG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLmZvckVhY2goIChzcjogU2hhZG93UmFuZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDbGVhciA9IHN0YXJ0Q2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBzdGFydClcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlQ2xlYXIgPSBtaWRkbGVDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIG1pZGRsZSlcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2xlYXIgPSBlbmRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIGVuZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHZpc2liaWxpdHkgYmFzZWQgb2ZmIG9mIG91ciBzYW1wbGluZ1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSBtaWRkbGVDbGVhciAmJiAoc3RhcnRDbGVhciB8fCBlbmRDbGVhcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd2UgYmxvY2sgc2lnaHQsIGNhbGN1bGF0ZSBvdXIgc2hhZG93IGVuZHNcbiAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tTaWdodCl7XG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLnB1c2goe3N0YXJ0LCBlbmR9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3ZDZWxsLnZpc2libGUgPSB2aXNpYmlsaXR5XG4gICAgICAgICAgICBpZihmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgICAgIHRpbGUuZXhwbG9yZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNhbGN1bGF0ZUZPViA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgLy8gYmUgZGVmYXVsdCB3ZSBhcmUgZ29pbmcgdG8gc2hhZG93Q2FzdFxuICAgIC8vIGJ5IGRlZmF1bHQgZXZlcnl0aGluZyBpcyBub3QgdmlzaWJsZVxuICAgIGZvdkdyaWQuZm9yRWFjaCgoY2VsbCk6IHZvaWQgPT4geyBjZWxsLnZpc2libGUgPSBmYWxzZSB9KVxuICAgIC8vIE5OV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAtMSlcbiAgICAvLyBXTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIC0xKVxuICAgIC8vIFdTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgMSlcbiAgICAvLyBTU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgMSlcbiAgICAvLyBTU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAxKVxuICAgIC8vIEVTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAxKVxuICAgIC8vIEVORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAtMSlcbiAgICAvLyBOTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAtMSlcbn1cblxuZXhwb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsfSIsIi8vIE9SSUdJTkFMXG4vLyBjb25zdCBTRVRUSU5HUyA9IHtcbi8vICAgICBUSUxFX1dJRFRIOiAxMCwgICAgIC8vIHBpeGVsc1xuLy8gICAgIFRJTEVfSEVJR0hUOiAxMCwgICAgLy8gcGl4ZWxzXG4vLyAgICAgTUFQX1dJRFRIOiA4MCwgICAgICAvLyBldmVyeXRoaW5nIGVsc2UgaXMgaW4gdGlsZXNcbi8vICAgICBNQVBfSEVJR0hUOiA0NSxcbi8vICAgICBDQU1FUkFfV0lEVEg6IDEwMCxcbi8vICAgICBDQU1FUkFfSEVJR0hUOiA3MCxcbi8vICAgICBTQ1JFRU5fV0lEVEggOjEwMCxcbi8vICAgICBTQ1JFRU5fSEVJR0hUIDogNzAsXG4vLyAgICAgRk9WX1JBRElVUzogMzVcbi8vIH1cblxuY29uc3QgU0VUVElOR1MgPSB7XG4gICAgVElMRV9XSURUSDogNSwgICAgIC8vIHBpeGVsc1xuICAgIFRJTEVfSEVJR0hUOiA1LCAgICAvLyBwaXhlbHNcbiAgICBNQVBfV0lEVEg6IDIwMCwgICAgICAvLyBldmVyeXRoaW5nIGVsc2UgaXMgaW4gdGlsZXNcbiAgICBNQVBfSEVJR0hUOiAxMzAsXG4gICAgQ0FNRVJBX1dJRFRIOiAyMTAsXG4gICAgQ0FNRVJBX0hFSUdIVDogMTQwLFxuICAgIFNDUkVFTl9XSURUSCA6MjEwLFxuICAgIFNDUkVFTl9IRUlHSFQgOiAxNDAsXG4gICAgRk9WX1JBRElVUzogMzVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU0VUVElOR1MiLCJpbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIFNldEVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYW55O1xufVxuXG5pbnRlcmZhY2UgRm9yRWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTmVpZ2hib3JMaXN0PFQ+IHtcbiAgICB1cDogVCB8IG51bGw7XG4gICAgbGVmdDogVCB8IG51bGw7XG4gICAgcmlnaHQ6IFQgfCBudWxsO1xuICAgIGRvd246IFQgfCBudWxsO1xuICAgIG5laWdoYm9yczogVFtdO1xufVxuXG4vLyBUT0RPOiBnaXZlIGdyaWRzIHRoZWlyIG93biB4IGFuZCB5cywgdGhhdCB3YXkgdGhleSBjYW4gaW1wbGVtZW50IGFsbCB0aGUgcG9pbnQgYW5kIHJlY3Qgc3R1ZmZcbi8qKlxuICogR3JpZCB0byByZXByZXNlbnQgMmQgY29sbGVjdGlvbnMsIHBsZWFzZSBkb24ndCByZXNpemUgaXQgYWZ0ZXIgY3JlYXRpbmcgaXRcbiAqL1xuY2xhc3MgR3JpZDxUPiBpbXBsZW1lbnRzIElSZWN0IHtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHk6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGNlbGxzOiBUW107XG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApe1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuY2VsbHMubGVuZ3RoID0gd2lkdGggKiBoZWlnaHRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbWFyaWx5IHVzZWQgZm9yIGluaXRpYWxpemF0aW9uIG9mIHRoZSBncmlkLCBvdmVyd3JpdGVzIHByZXZpb3VzIGVudHJpZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZW50cnksIGRvbid0IHVzZSB0aGlzIHVubGVzcyBlbnRyaWVzIGFyZSBpbmRlcGVuZGVudCBmcm9tIGVhY2ggb3RoZXJcbiAgICAgKiBAcGFyYW0gZm4gdGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgY2VsbCBpdHNlbGYgYXMgdGhlIGZpcnN0IHByb3BlcnR5IGFuZCBcbiAgICAgKi9cbiAgICBzZXRFYWNoKGZuOiBTZXRFYWNoRm48VD4pOiBHcmlkPFQ+e1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gc29tZXRoaW5nIGZvciBlYWNoIG1lbWJlciBvZiBhIGNlbGwsIGdvaW5nIHJvdyBieSByb3cgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgICogQHBhcmFtIGZuIEdldCBwYXNzZWQgdGhlIGNlbGwsIGluZGV4LCB4IGFuZCB5XG4gICAgICovXG4gICAgZm9yRWFjaChmbjogRm9yRWFjaEZuPFQ+KTogdm9pZHtcbiAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4Kyspe1xuICAgICAgICAgICAgICAgIGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB4IHggY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBwYXJhbSB5IHkgY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqL1xuICAgIGdldFhZKHg6IG51bWJlciwgeTogbnVtYmVyKTogVCAge1xuICAgICAgICBpZighdGhpcy5pbkJvdW5kc1hZKHgseSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib3VuZGFyeSBhY2Nlc3MgaXNzdWUnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3ggKyB5ICogdGhpcy53aWR0aF1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBnZXRYWS4gVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gcG9pbnQgY29udGFpbnMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbGwgeW91IHdhbnQgdG8gZ2V0XG4gICAgICovXG4gICAgZ2V0UChwb2ludDogSVBvaW50KTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFhZKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuXG4gICAgaW5Cb3VuZHNYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW57XG4gICAgICAgIGlmKHggPCAwIHx8IHggPj0gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjZWxsIGJhc2VkIG9mZiBvZiBhbiBpbmRleCwgdXN1YWxseSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBmb3JFYWNoIGxvb3Agb2YgYSBzaW1pbGFybHkgc2l6ZWQgZ3JpZFxuICAgICAqIE5PVEUgYmUgY2FyZWZ1bCB0aGF0IHRoZSBvdGhlciBncmlkIGhhcyB0aGUgc2FtZSBkaW1lbnNpb24gdW5sZXNzIHlvdSByZWFsbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZ1xuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgY2VsbHMsIG1vc3RseSB0byBiZSB1c2VkIHdpdGggZ3JpZHMgdGhhdCBhcmUgd29ya2luZyBhbG9uZ3NpZGUgYSBkaWZmZXJlbnQgZm9yRWFjaCBsb29wXG4gICAgICovXG4gICAgZ2V0SShpbmRleDogbnVtYmVyKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW2luZGV4XVxuICAgIH1cblxuICAgIGdldE5laWdoYm9yc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogTmVpZ2hib3JMaXN0PFQ+IHtcbiAgICAgICAgY29uc3QgbGlzdDogTmVpZ2hib3JMaXN0PFQ+ID0ge1xuICAgICAgICAgICAgdXA6IG51bGwsXG4gICAgICAgICAgICBkb3duOiBudWxsLFxuICAgICAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JzOltdXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHgseSAtIDEpKXtcbiAgICAgICAgICAgIGxpc3QudXAgPSB0aGlzLmdldFhZKHgsIHkgLSAxKVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LnVwKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5Cb3VuZHNYWSh4LHkgKyAxKSl7XG4gICAgICAgICAgICBsaXN0LmRvd24gPSB0aGlzLmdldFhZKHgsIHkgKyAxKVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LmRvd24pXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHggLSAxLHkpKXtcbiAgICAgICAgICAgIGxpc3QubGVmdCA9IHRoaXMuZ2V0WFkoeCAtIDEsIHkpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QubGVmdClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmluQm91bmRzWFkoeCArIDEseSkpe1xuICAgICAgICAgICAgbGlzdC5yaWdodCA9IHRoaXMuZ2V0WFkoeCArIDEsIHkpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QucmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0ID0gKGttOiBLZXlib2FyZE1vbml0b3IsIHBsYXllcjogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgIH1cbiAgICAvLyBxdWljayBudW1iZXIgZ2VuZXJhdG9yXG4gICAgaWYoIWttLmdldEtleVN0YXRlKCduJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnbicpLmhhbGZTdGVwcyA+IDApKXtcbiAgICAgICAgY29uc3Qgc2VlZCA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKVxuICAgICAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICB9XG59IiwiY2xhc3MgSURNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGxhc3RJZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGFzdElkID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5leHQgaWRcbiAgICAgKi9cbiAgICBuZXh0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZCsrXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IElEX01BTkFHRVJcbiAqL1xuY29uc3QgSURfTUFOQUdFUiA9IG5ldyBJRE1hbmFnZXIoKVxuZXhwb3J0IHtJRF9NQU5BR0VSLCBJRE1hbmFnZXJ9IiwiaW50ZXJmYWNlIEtleVN0YXRlIHsgXG4gICAga2V5OiBzdHJpbmc7XG4gICAgaXNEb3duOiBib29sZWFuO1xuICAgIGhhbGZTdGVwczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY29uc3QgbWFrZUtleVN0YXRlID0gKGtleTogc3RyaW5nLCBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaGFsZlN0ZXBzOiBudW1iZXIgPSAwKTogS2V5U3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBoYWxmU3RlcHNcbiAgICB9XG59XG5cbmNsYXNzIEtleWJvYXJkTW9uaXRvciB7XG4gICAga2V5SGFzaDogSGFzaDxLZXlTdGF0ZT47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlIYXNoID0ge31cbiAgICB9XG4gICAgLy8gQXR0YWNoIHRvIHRoZSBET00sIHVzdWFsbHkgdGhlIGRvY3VtZW50IGFzIGEgd2hvbGUsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgbW9yZSBzcGVjaWZpYyBpZiB5b3Ugd2FudFxuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBLZXlib2FyZE1vbml0b3Ige1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXksIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZigha2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoa2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0S2V5U3RhdGUoa2V5OiBzdHJpbmcpOiBLZXlTdGF0ZXtcbiAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlIYXNoW2tleV1cbiAgICB9XG4gICAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5SGFzaClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleXNbaV1dLmhhbGZTdGVwcyA9IDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSIsIi8vIExldCdzIGdvIGFoZWFkIGFuZCBjcmVhdGUgdGhlIFBvaW50IGludGVyZmFjZSBoZXJlLCB3ZSdsbCBleHBvcnQgaXQgZm9yIHVzZSBsYXRlciBpbiB0aGUgcHJvamVjdFxuXG5pbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG4vKipcbiAqIENsYXNzIHRvIGhlbHAgbW9uaXRvciB0aGluZ3MgdGhhdCBoYXZlIGhhcHBlbmVkIHRvIHRoZSBtb3VzZSBzaW5jZSBsYXN0IHRpbWUgdGhhdCB3ZSBsb29rZWRcbiAqL1xuXG5pbnRlcmZhY2UgSGFsZkNsaWNrIHtcbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIGlzRG93bjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTW91c2VNb25pdG9yIHtcbiAgICAvKipcbiAgICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlIG92ZXIgdGhlIGF0dGFjaGVkIGVsZW1udFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IHRpbWUgd2UgbG9va2VkXG4gICAgICovXG4gICAgaGFzTW92ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IGluc2lkZSB0aGUgY29udGFpbmVyIFxuICAgICAqL1xuICAgIGluQ29udGFpbmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogaXMgdGhlIG1vdXNlIGJ1dHRvbiBkb3duIChjdXJyZW50bHkgb25seSB0cmFja3MgbGVmdClcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZ1bGwgY2xpY2sgaXMgdXAgYW5kIGRvd24sIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVwcyBhbmQgZG93bnMsIHVzZWZ1bCBmb3IgZHJhZ3Mgb3Igb3RoZXIgdGhpbmdzIHRoYXQgbWlnaHQgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgKi9cbiAgICBoYWxmQ2xpY2tzOiBIYWxmQ2xpY2tbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmhhbGZDbGlja3MgPSBbXVxuICAgICAgICAvLyBUT0RPOiBBZGQgY2xpY2sgdHJhY2tpbmcsIGRlcGVuZHMgb24gaG93IHF1aWNrbHkgd2UgYXJlIHBvbGxpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50IHlvdSB3YW50IHRvIG1vbml0b3IgbW91c2UgcmVsYXRlZCBldmVudHMgdG9cbiAgICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgcGFydGljdWxhciBtb3VzZSBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBNb3VzZU1vbml0b3Ige1xuICAgICAgICAvLyBUT0RPOiBXZSdsbCByZWdpc3RlciBjbGljayBoaXN0b3J5IGluIHRoZSBmdXR1cmUsIGZvciBub3cgd2UgYXJlIGp1c3QgZG9pbmcgbW91c2Ugb3ZlciBhdCBwcmVzZW50XG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBQb2ludC5zZXQodGhpcy5wb3NpdGlvbiwgZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBlbnRlcnMgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgbW92ZXMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgZXhpdHMgdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcmFpc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogZmFsc2UgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHRoYXQgd2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBldmVudHMgc2luY2Ugb3VyIGxhc3QgcG9sbCBvZiBzdGF0ZSBhbmQgaXQgY2FuIGJlIHJlc2V0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZHtcbiAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBoYXZlbid0IG1vdmVkIGJlZm9yZVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBjbGlja3NcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLmxlbmd0aCA9IDBcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlTW9uaXRvciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUsIFRpbGVNYXRlcmlhbCB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSBmcm9tICcuL3NoYXBlcy9lbGxpcHNlJ1xuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi9ybmdIZWxwZXInXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcbmltcG9ydCB7IFBvaW50LCBJUG9pbnQsIEdyaWREaXJlY3Rpb24gfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuY29uc3QgTUFYX0xFQUZfU0laRSA9IDIwXG5jb25zdCBNSU5fTEVBRl9TSVpFID0gNlxuY2xhc3MgTGVhZiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGxlZnQ6IExlYWYgfCBudWxsO1xuICAgIHJpZ2h0OiBMZWFmIHwgbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcih4LHksd2lkdGgsaGVpZ2h0KXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmxlZnQgPSBudWxsXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsXG4gICAgfVxuXG4gICAgaGFzU3BsaXQoKTogYm9vbGVhbntcbiAgICAgICAgaWYodGhpcy5sZWZ0ICE9IG51bGwgfHwgdGhpcy5yaWdodCAhPSBudWxsKXtcbiAgICAgICAgICAgIC8vIHdlJ3ZlIGFscmVhZHkgc3BsaXQsIGN1dCBpdCBvdXQhXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgfVxuICAgIHNwbGl0KCk6IGJvb2xlYW57XG4gICAgICAgIGlmKHRoaXMuaGFzU3BsaXQoKSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGxpdEhvcml6b250YWxseTogYm9vbCA9IFJBTkRPTS5uZXh0KCkgPCAwLjVcbiAgICAgICAgaWYodGhpcy53aWR0aCA+IHRoaXMuaGVpZ2h0ICYmIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCA+IDEuMjUpe1xuICAgICAgICAgICAgc3BsaXRIb3Jpem9udGFsbHkgPSBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYodGhpcy5oZWlnaHQgPiB0aGlzLndpZHRoICYmIHRoaXMuaGVpZ2h0IC8gdGhpcy53aWR0aCA+PSAxLjI1KXtcbiAgICAgICAgICAgIHNwbGl0SG9yaXpvbnRhbGx5ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4ID0gKHNwbGl0SG9yaXpvbnRhbGx5ID8gdGhpcy5oZWlnaHQgOiB0aGlzLndpZHRoKSAtIE1JTl9MRUFGX1NJWkVcbiAgICAgICAgaWYobWF4IDw9IE1JTl9MRUFGX1NJWkUpe1xuICAgICAgICAgICAgLy8gdG8gc21vbCwgZG9uJ3Qgc3BsaXQgYW55IG1vcmVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBhIHNwbGl0LCBjYWxjdWxhdGVkIHJhbmRvbWx5XG4gICAgICAgIGNvbnN0IHNwbGl0ID0gUkFORE9NLm5leHRJbnQoTUlOX0xFQUZfU0laRSwgbWF4KVxuXG4gICAgICAgIGlmKHNwbGl0SG9yaXpvbnRhbGx5KXtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IG5ldyBMZWFmKHRoaXMueCx0aGlzLnksIHRoaXMud2lkdGgsIHNwbGl0KVxuICAgICAgICAgICAgdGhpcy5yaWdodD0gbmV3IExlYWYodGhpcy54LCB0aGlzLnkgKyBzcGxpdCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSBzcGxpdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IG5ldyBMZWFmKHRoaXMueCx0aGlzLnksIHRoaXMud2lkdGgsIHNwbGl0KVxuICAgICAgICAgICAgdGhpcy5yaWdodD0gbmV3IExlYWYodGhpcy54ICsgc3BsaXQsIHRoaXMueSwgdGhpcy53aWR0aCAtIHNwbGl0LCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbmNvbnN0IGxlYWZzOiBMZWFmW10gPSBbXVxuZnVuY3Rpb24gKiBwcm9ncmVzc2l2ZU1hcEdlbmVyYXRvcih0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbXM6IElSZWN0W10sIGRlYnVnR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiBhbnl7XG4gICAgLy8gQ2xlYXIgb3V0IGFsbCB0aGUgdGlsZXNcbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgdGlsZUdyaWQuZm9yRWFjaCgodCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdC5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIHQuY29udGFpbmVkID0gZmFsc2VcbiAgICAgICAgICAgIHQuZXhwbG9yZWQgPSB0cnVlIC8vIHJlbW92ZSBsYXRlclxuICAgICAgICB9KVxuICAgIH1cbiAgICBjbGVhcigpXG5cbiAgICAvLyBUT0RPOiBEaXNhYmxlIGVudGl0aWVzIG9yIHBsYWNlbWVudCwgZXNzZW50aWFsbHkgc3RvcCB1cyBiZWZvcmUgd2UgcGxhY2UgYWxsIG9mIHRoYXQgc3R1ZmZcbiAgICAvLyBMZXQncyBtYWtlIG9uZSBiaWcgbGVhZiBhdCB0aGUgYmVnaW5uaW5nXG4gICAgY29uc3Qgcm9vdCA9IG5ldyBMZWFmKDAsMCwgdGlsZUdyaWQud2lkdGggLSAxLCB0aWxlR3JpZC5oZWlnaHQgLSAxKVxuICAgIGxlYWZzLnB1c2gocm9vdClcbiAgICBsZXQgaGFkU3BsaXQgPSB0cnVlXG4gICAgd2hpbGUoaGFkU3BsaXQpe1xuICAgICAgICBoYWRTcGxpdCA9IGZhbHNlXG4gICAgICAgIGxlYWZzLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgICBpZighbC5oYXNTcGxpdCgpKXtcbiAgICAgICAgICAgICAgICBpZihsLndpZHRoID4gTUFYX0xFQUZfU0laRSB8fCBsLmhlaWdodCA+IE1BWF9MRUFGX1NJWkUgfHwgUkFORE9NLm5leHQoKSA+IDAuMjUpe1xuICAgICAgICAgICAgICAgICAgICBpZihsLnNwbGl0KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVhZnMucHVzaChsLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWFmcy5wdXNoKGwucmlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBoYWRTcGxpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGRyYXcgb3V0IGVhY2ggb2YgdGhlc2UgYm95cyBpbiB3YWxsc1xuICAgICAgICBjbGVhcigpXG4gICAgICAgIGxlYWZzLmZvckVhY2gobCA9PiB7XG4gICAgICAgICAgICAvLyBkcmF3IGVhY2ggb2YgdGhlIGVkZ2VzXG4gICAgICAgICAgICBmb3IobGV0IHggPSBsLng7IHg8IGwueCArIGwud2lkdGggLSAxOyB4Kyspe1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgb3VyIHR3byBiYXJzXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHRpbGVHcmlkLmdldFhZKHgsIGwueSlcbiAgICAgICAgICAgICAgICB0LmJsb2NrTW92ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB0LmJsb2NrU2lnaHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IHggPSBsLng7IHg8IGwueCArIGwud2lkdGg7IHgrKyl7XG4gICAgICAgICAgICAgICAgLy8gZHJhdyBvdXIgdHdvIGJhcnNcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gdGlsZUdyaWQuZ2V0WFkoeCwgbC55ICsgbC5oZWlnaHQgLTEpXG4gICAgICAgICAgICAgICAgdC5ibG9ja01vdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbHNcbiAgICAgICAgICAgIGZvcihsZXQgeSA9IGwueTsgeSA8IGwueSArIGwuaGVpZ2h0IC0gMTsgeSsrKXtcbiAgICAgICAgICAgICAgICAvLyBkcmF3IG91ciB0d28gYmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSB0aWxlR3JpZC5nZXRYWShsLngsIHkpXG4gICAgICAgICAgICAgICAgdC5ibG9ja01vdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdC5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCB5ID0gbC55OyB5IDwgbC55ICsgbC5oZWlnaHQgLSAxOyB5Kyspe1xuICAgICAgICAgICAgICAgIC8vIGRyYXcgb3VyIHR3byBiYXJzXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHRpbGVHcmlkLmdldFhZKGwueCArIGwud2lkdGggLSAxLCB5KVxuICAgICAgICAgICAgICAgIHQuYmxvY2tNb3ZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHQuYmxvY2tTaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgeWllbGRcbiAgICB9XG5cbiAgICAvLyBOZXh0IHBhcnRpdGlvbiB0aGUgc3BhY2VcbiAgICAvLyB1c2luZyB0aGlzIGZvciByZWZlcmVuY2U6IGh0dHBzOi8vZ2FtZWRldmVsb3BtZW50LnR1dHNwbHVzLmNvbS90dXRvcmlhbHMvaG93LXRvLXVzZS1ic3AtdHJlZXMtdG8tZ2VuZXJhdGUtZ2FtZS1tYXBzLS1nYW1lZGV2LTEyMjY4XG59XG5cbmV4cG9ydCB7IHByb2dyZXNzaXZlTWFwR2VuZXJhdG9yIH1cbiIsImxldCBfaWQgPSAwXG5jb25zdCBuZXh0SWQgPSAoKTogbnVtYmVyID0+IF9pZCsrXG5cbi8vIFRPRE86IE1ha2UgbWVzc2FnZXMgZW51bXM/XG5cbi8vIFRPRE86IE1ha2UgYW4gaW50ZXJmYWNlIGZvciB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxudHlwZSBTdWJzY3JpYmVyRnVuY3Rpb24gPSAobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKSA9PiB2b2lkXG5cbmludGVyZmFjZSBTdWJzY3JpYmVyTm9kZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uO1xuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xufVxuXG5cblxuY29uc3QgbWFrZVN1Yk5vZGUgPSAoc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDAsIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbCA9IG51bGwpOiBTdWJzY3JpYmVyTm9kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5leHRJZCgpLFxuICAgICAgICBzdWJGbixcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5leHRcbiAgICB9XG59XG5cbi8vIFRPRE86ID8/IE1ha2UgaXQgc28gYSBzdWJzY3JpYmVyIGxpc3QgY291bGQgYmUgZGVhZmVuZWQvbGlzdGVuP1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgZnVuY3Rpb25zLCBzb3J0ZWQgYnkgcHJpb3JpdHksIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseSB3aGVuIHRoZSBsaXN0IGlzIG5vdGlmaWVkIG9mIGEgbmV3IG1lc3NhZ2VcbiAqL1xuY2xhc3MgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCB7XG4gICAgcm9vdDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIHRhaWw6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGxcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGlzIGxpc3QgdmlhIHRoZSBub3RpZnkgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIG1lc3NhZ2Ugb2JqZWN0IHdoZW5ldmVyIHRoaXMgc3Vic2NyaWJlciBsaXN0IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgaGlnaGVyIHRoZSBwcmlvcml0eSwgdGhlIGVhcmxpZXIgaXQgd2lsbCBydW4sIGlmIGl0IGhhcyB0aGUgc2FtZSBwcmlvcml0eSB0aGUgb25lIHRoYXQgd2FzIGFkZGVkIGZpcnN0IHdpbGwgZmlyZSBmaXJzdFxuICAgICAqL1xuICAgIHN1YnNjcmliZShmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlcntcbiAgICAgICAgLy8gQ2FzZSAjMSBFbXB0eSBTdWJzY3JpYmVyIExpc3RcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5yb290XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UgIzIgV2UgYWxyZWFkeSBoYXZlIHNvbWUgc3Vic2NyaWJlcnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290IC8vIHdlIGtub3cgaXQgc2hvdWxkIGJlIGEgU3Vic2NyaWJlciBOb2RlIGFuZCBub3QgbnVsbCwgYmVjYXVzZSB3ZSBhcmUgaGVyZVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIG5ldyByb290XG4gICAgICAgICAgICBpZihwcmlvcml0eSA8IHRyYXZlbGxlciEucHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdGhpcy5yb290KVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWwgY2FzZSB3ZSBoYXZlIG90aGVyIHRoaW5ncyB0byB3b3JyeSBhYm91dFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUodHJhdmVsbGVyICYmIHRyYXZlbGxlci5uZXh0ICYmIHRyYXZlbGxlci5uZXh0LnByaW9yaXR5ID49IHByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBlaXRoZXIgZm91bmQgYSBub2RlIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiB1cyBvciB3ZSBoYXZlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICAgICB0cmF2ZWxsZXIhLm5leHQgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRyYXZlbGxlciEubmV4dClcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRyYXZlbGxlcnMgd2FzIHRoZSBvbGQgdGFpbFxuICAgICAgICAgICAgICAgIGlmKHRyYXZlbGxlciA9PT0gdGhpcy50YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBuZXh0IG9uZSBpcyB0aGUgbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdHJhdmVsbGVyIS5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsbGVyIS5uZXh0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbW9zdCBpbXBvcmFudCBpbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRvcGljIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBwdWJzdWIgdG8gcmVtaW5kIHRoZSBzdWJzY3JpYmVyIG9mIHRoZSBzcGVjaWZpYyB0b3BpYyBvciBzdWJ0b3BpY1xuICAgICAqL1xuICAgIG5vdGlmeShtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdFxuICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICB0cmF2ZWxsZXIuc3ViRm4obWVzc2FnZSwgdG9waWMpXG4gICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSIsImltcG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IGZyb20gJy4vcHJpb3JpdHlTdWJzY3JpYmVyTGlzdCdcblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogUHVic3ViIGlzIGEgdG9waWMtYmFzZWQgb2JzZXJ2ZXIgcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBkZXNpZ25lZCB0byBhdm9pZCB0aWdodCBjb3VwbGluZyBvZiBjb21wb25lbnRzXG4gKi9cbmNsYXNzIFB1YlN1YiB7XG4gICAgdG9waWNzOiBIYXNoPFByaW9yaXR5U3Vic2NyaWJlckxpc3Q+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9waWNzID0ge31cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBtZXNzYWdlIHRvIGFsbCBzdWJzY3JpYmVycyB0byBhIHRvcGljXG4gICAgICogQHBhcmFtIHRvcGljIFRvcGljIHRvIHVzZSwgaWYgbm9ib2R5IGlzIHN1YnNjcmliZWQgdG8gaXQsIG5vdGhpbmcgaGFwcGVuc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBhY3R1YWwgbWVzc2FnZSB0byBzZW5kLCB0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBidXQgaXQncyBhIHNpbmdsZSB0aGluZ1xuICAgICAqL1xuICAgIHB1Ymxpc2godG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10ubm90aWZ5KG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIHNwZWNpZmljIHRvcGljIHdpdGggYSBnaXZlbiBwcmlvcml0eSwgcmV0dXJucyBhbiBpZCB0aGF0IHlvdSdsbCBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHRvcGljIHRoZSBzcGVjaWZpYyB0b3BpYyB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gZm4gdGhlIGZ1bmN0aW9uIHRvIHJlY2lldmUgdGhlIHNwZWNpZmljIG1lc3NhZ2UgYW5kIHRvcGljIGJlaW5nIGJyb2FkY2FzdGVkIHRvXG4gICAgICogQHBhcmFtIHByaW9yaXR5IHRoZSBwcmlvcml0eSBvZiB0aGUgZnVuY3Rpb24gdG8gc3Vic2NyaWJlIHRvLCBoaWdoZXIgbnVtYmVycyBydW4gZmlyc3QsIHRoZSBkZWZhdWx0IGlzIHplcm8sIG5lZ2F0aXZlIG51bWJlcnMgYXJlIGFsbG93ZWRcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBpZighdGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXSA9IG5ldyBQcmlvcml0eVN1YnNjcmliZXJMaXN0KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b3BpY3NbdG9waWNdLnN1YnNjcmliZShmbiwgcHJpb3JpdHkpXG4gICAgfVxufVxuLy8gT1VSIFVOSVZFUlNBTCBERUZBVUxUIFBVQlNVQlxuY29uc3QgUFVCU1VCID0gbmV3IFB1YlN1YigpXG5leHBvcnQge1BVQlNVQiwgUHViU3VifSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXIgQ2VsbFxuICovXG5pbnRlcmZhY2UgSVJlbmRlckNlbGwge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7IC8vIHRoaXMgc2hvdWxkIG9ubHkgYmUgc3RyaW5nIG9mIGxlbmd0aCAxXG4gICAgZm9yZUNvbG9yOiBzdHJpbmc7XG4gICAgYmFja0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCx5LCBjaGFyYWN0ZXIsIGZvcmVDb2xvciwgYmFja0NvbG9yXG4gICAgfVxufVxuXG5jb25zdCBSZW5kZXJDZWxsID0ge1xuICAgIG1ha2Vcbn1cblxuZXhwb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGx9IiwiaW1wb3J0IHtJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuXG5pbnRlcmZhY2UgSGFzaFN0cjxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmludGVyZmFjZSBIYXNoTnVtPFQ+IHtcbiAgICBba2V5OiBudW1iZXJdOiBUO1xufVxuXG5jb25zdCBjb2RlID0gKGNoYXI6IHN0cmluZyk6IG51bWJlciA9PiBjaGFyLmNoYXJDb2RlQXQoMClcbmNvbnN0IENIQVJBQ1RFUl9IRUxQRVI6IEhhc2hTdHI8c3RyaW5nPiA9IHtcbiAgICBWRVJUSUNBTF9MSU5FOiAn4pSCJyxcbiAgICBIT1JJWk9OVEFMX0xJTkU6ICfilIAnLFxuICAgIENST1NTX0xJTkVTOiAn4pS8JyxcbiAgICBUX0xFRlQ6ICfilKQnLFxuICAgIFRfVVA6ICfilLQnLFxuICAgIFRfUklHSFQ6ICfilJwnLFxuICAgIFRfRE9XTjogJ+KUrCcsXG4gICAgVE9QX1JJR0hUOiAn4pSUJyxcbiAgICBCT1RUT01fUklHSFQ6ICfilIwnLFxuICAgIEJPVFRPTF9MRUZUOiAn4pSQJyxcbiAgICBUT1BfTEVGVDogJ+KUmCdcbn1cblxuY29uc3QgVElMRV9XSURUSCA9IDEwLCBUSUxFX0hFSUdIVCA9IDEwXG5cbmNvbnN0IENPREVfVE9fUkVDVF9IQVNIOiBIYXNoTnVtPElSZWN0PiA9IHt9XG5jb25zdCBzcGFjZUNvZGUgPSAgIGNvZGUoJyAnKVxuY29uc3QgYXRDb2RlID0gICAgICBjb2RlKCdAJylcbmNvbnN0IGFDb2RlID0gICAgICAgY29kZSgnYScpXG5jb25zdCB6Q29kZSA9ICAgICAgIGNvZGUoJ3onKVxuY29uc3QgQUNvZGUgPSAgICAgICBjb2RlKCdBJylcbmNvbnN0IFpDb2RlID0gICAgICAgY29kZSgnWicpXG5cblxuY29uc3QgY3RyaEhlbHBlciA9IChjb2RlOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbY29kZV0gPSBSZWN0Lm1ha2UoeCx5LCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cblxuLy8gV2Ugd2lsbCBmaWxsIGluIHRoZSBvdGhlciBjaGFyYWN0ZXJzIGFzIG5lY2Vzc2FyeVxuQ09ERV9UT19SRUNUX0hBU0hbc3BhY2VDb2RlXSA9IFJlY3QubWFrZSgwLCAwLCAxMCwgMTApXG5DT0RFX1RPX1JFQ1RfSEFTSFthdENvZGVdID0gUmVjdC5tYWtlKDAsIDEwLCAxMCwgMTApXG5mb3IobGV0IGkgPSBBQ29kZTsgaSA8PSBaQ29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIEFDb2RlKSAqIDEwLCAzMCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5mb3IobGV0IGkgPSBhQ29kZTsgaSA8PSB6Q29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIGFDb2RlKSAqIDEwLCA0MCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG4vLyBmb3IgYnJldml0aWVzIHNha2VcbmNvbnN0IENIID0gQ0hBUkFDVEVSX0hFTFBFUlxuY3RyaEhlbHBlcihjb2RlKENILlZFUlRJQ0FMX0xJTkUpLCAxNDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guSE9SSVpPTlRBTF9MSU5FKSwgMTUwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkNST1NTX0xJTkVTKSwgMTYwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfTEVGVCksIDE3MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1VQKSwgMTgwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfUklHSFQpLCAxOTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9ET1dOKSwgMjAwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9SSUdIVCksIDIxMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT01fUklHSFQpLCAyMjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9MX0xFRlQpLCAyMzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX0xFRlQpLCAyNDAsMTApXG5cblxuZnVuY3Rpb24gZHJhd1NlY3Rpb24oY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHRpbGVzaGVldDogYW55LCBzcmNSZWN0OiBJUmVjdCwgZGVzdFJlY3Q6IElSZWN0LCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiB2b2lke1xuICAgIGN0eC5jbGVhclJlY3QoZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZHJhd0ltYWdlKHRpbGVzaGVldCwgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qud2lkdGgsIHNyY1JlY3QuaGVpZ2h0LCBkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAneG9yJ1xuICAgIGN0eC5maWxsU3R5bGU9Zm9yZUNvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3ZlcidcbiAgICBjdHguZmlsbFN0eWxlPWJhY2tDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcidcbn1cblxuY29uc3QgZHJhd1N0cmluZ1RvR3JpZCA9IChncmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgbWVzc2FnZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGxldCBjdXJyZW50WCA9IHhcbiAgICBsZXQgY3VycmVudFkgPSB5XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsZXR0ZXIgPSBtZXNzYWdlW2ldXG4gICAgICAgIGlmKGdyaWQuaW5Cb3VuZHNYWShjdXJyZW50WCwgY3VycmVudFkpICYmIGxldHRlciAhPSAnXFxuJyl7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBncmlkLmdldFhZKGN1cnJlbnRYLGN1cnJlbnRZKVxuICAgICAgICAgICAgdGFyZ2V0LmNoYXJhY3RlciA9IGxldHRlclxuICAgICAgICAgICAgdGFyZ2V0LmJhY2tDb2xvciA9IENPTE9SUy53aGl0ZVxuICAgICAgICAgICAgdGFyZ2V0LmZvcmVDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICB9XG4gICAgICAgIGlmKGxldHRlciAhPT0gJ1xcbicpe1xuICAgICAgICAgICAgY3VycmVudFgrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFkrK1xuICAgICAgICAgICAgY3VycmVudFggPSB4XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCAgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgQ0hBUkFDVEVSX0hFTFBFUiwgY29kZSwgZHJhd1NlY3Rpb24sIGRyYXdTdHJpbmdUb0dyaWQgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlLCBUaWxlTWF0ZXJpYWwgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5pbXBvcnQgeyBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgREVCVUcgZnJvbSAnLi9kZWJ1Z1NldHRpbmdzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyVG9HcmlkID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCBlbnRpdGllczogRW50aXR5W10sIHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBjYW1lcmFGcmFtZTogSVJlY3QsIGRlYnVnR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICAvLyByZW5kZXJHcmlkIGlzIGluIFNDUkVFTiBjb29yZGluYXRlcywgYW5kIHdpbGwgaGF2ZSBpdCdzIFhZIGlnbm9yZWQgZm9yIG91ciBwdXJwb3Nlc1xuICAgIC8vIHRpbGVHcmlkLCBlbnRpdGllcyBhbmQgZm92R3JpZCBhcmUgaW4gV09STEQgY29vcmRpbmF0ZXMgYW5kIHdpbGwgaGF2ZSB0aGVpciBYWSBhbmQgeSBpZ25vcmVkIGZvciBub3dcblxuICAgIC8vIGNhbWVyYSBhbmQgcmVuZGVyR3JpZCBib3RoIHN0YXJ0IGF0IHRoZSB0b3BMZWZ0IGluIHRlcm1zIG9mIGFsaWduaW5nIHRoZSB0d29cbiAgICAvLyBJIGFsbW9zdCBmZWVsIGxpa2Ugd2Ugc2hvdWxkIHRpZ2h0ZW4gdGhlIGNvdXBsaW5nLCBidXQgb2ggd2VsbCwgbGV0J3MgYWN0dWFsbHkgZG8gaXRcbiAgICBjb25zdCBzY3JlZW5QID0gUG9pbnQubWFrZSgwLDApXG4gICAgY29uc3Qgd29ybGRQID0gUG9pbnQubWFrZSgwLDApXG4gICAgZm9yKGxldCByZWxDYW1lcmFZID0gMDsgcmVsQ2FtZXJhWSA8IGNhbWVyYUZyYW1lLmhlaWdodDsgcmVsQ2FtZXJhWSsrKXtcbiAgICAgICAgZm9yKGxldCByZWxDYW1lcmFYID0gMDsgcmVsQ2FtZXJhWCA8IGNhbWVyYUZyYW1lLndpZHRoOyByZWxDYW1lcmFYKyspe1xuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSByZW5kZXJHcmlkIGFuZCB0aGUgY2FtZXJhc1xuICAgICAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIHJlbENhbWVyYVgsIHJlbENhbWVyYVkpXG4gICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHRpbGVHcmlkLCBmb3ZHcmlkLCBhbmQgZW50aXRpZXNcbiAgICAgICAgICAgIFBvaW50LnNldCh3b3JsZFAsIHNjcmVlblAueCArIGNhbWVyYUZyYW1lLngsIHNjcmVlblAueSArIGNhbWVyYUZyYW1lLnkpXG5cbiAgICAgICAgICAgIC8vIExldCdzIGRvIHNvbWUgYm91bmRzIGNoZWNraW5nXG4gICAgICAgICAgICAvLyB3ZSBrbm93IHRoZXNlIHBvaXRucyBhcmUgYWx3YXlzIGluIGNhbWVyYXMsIHNvIG5ldmVyIG5lZWQgdG8gY2hlY2sgdGhhdFxuICAgICAgICAgICAgLy8gd2UgYXJlIGdvaW5nIHRvIG9mZmxvYWQgdGhlIGNhc2Ugb2YgY2hlY2tpbmcgaWYgdGhlIHJlbmRlckdyaWQgY2FuIGZpdCB0aGUgY2FtZXJhU2l6ZSBmb3Igbm93XG4gICAgICAgICAgICAvLyBzbyBmb3Igbm93IGp1c3QgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSBvZiB0aGUgdGlsZUdyaWQsIHdoaWNoIGN1cnJlbnRseSBzaG91bGQgYmUgdGhlIHNhbWUgZGltZW5zaW9ucyBhcyB0aGUgZm92R3JpZCwgdGhvdWdoIHRoYXQgaXMgYm91bmQgdG8gY2hhbmdlIGFzIHdlIHRyeSBhbmQgb3B0aW1pemUgdGhpbmdzXG4gICAgICAgICAgICAvLyBzb29vb29vLCBsZXQncyBjaGVjayBpZiB3ZSBhcmUgaW5zaWRlIHRoZSB0aWxlR3JpZFxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ2VsbCAgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGxldCBpc0xpdCA9IGZvdkNlbGwudmlzaWJsZSAvLyBpdCdzIGxpdCBmYW0sIHdlbGwsIHNvbWUgb2YgdGhlIHRpbWVcbiAgICAgICAgICAgIGxldCBpbkJvdW5kcyA9IHRpbGVHcmlkLmluQm91bmRzWFkod29ybGRQLngsIHdvcmxkUC55KVxuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmVkIG91ciBleHBsb3JhdGlvbiBzdGF0ZVxuICAgICAgICAgICAgLy8gVGhpcyBoYXMgYmV0dGVyIHJ1bGVzIHRvIGJlIGZpZ3VyZWQgb3V0XG4gICAgICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9ICcnXG4gICAgICAgICAgICBpZighaW5Cb3VuZHMpeyAvLyB0cmVhdCBldmVyeXRoaW5nIG91dHNpZGUgb2YgdGhlIGJvdW5kcyBhcyBleHBsb3JlZCBJIHN1cHBvc2U/XG4gICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9vdXRzaWRlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19vdXRzaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkod29ybGRQLngsIHdvcmxkUC55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmV4cGxvcmVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEFERCBET09SU1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1dhbGwgPSB0aWxlLmJsb2NrTW92ZSAmJiB0aWxlLmJsb2NrU2lnaHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91bmQgPSAhaXNXYWxsICYmIHRpbGUuY29udGFpbmVkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU3BhY2UgPSAhaXNXYWxsICYmICF0aWxlLmNvbnRhaW5lZFxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbGUubWF0ZXJpYWwgPT09IFRpbGVNYXRlcmlhbC5NZXRhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NwYWNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X291dHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX291dHNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNHcm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubWV0YWwubGlnaHRHcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5kYXJrR3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzV2FsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5saWdodFdhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5tZXRhbC5kYXJrV2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU3BhY2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc0dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9ncm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc1dhbGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eTogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgICAgIFBvaW50LnNldChzY3JlZW5QLCBlbnRpdHkueCAtIGNhbWVyYUZyYW1lLngsIGVudGl0eS55IC0gY2FtZXJhRnJhbWUueSlcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBpbnNpZGUgb2YgdGhlIGNhbWVyYSBib3VuZHNcbiAgICAgICAgaWYoY2FtZXJhRnJhbWUueCA8PSBlbnRpdHkueCAmJiBlbnRpdHkueCA8PSBjYW1lcmFGcmFtZS54ICsgY2FtZXJhRnJhbWUud2lkdGggLSAxICYmXG4gICAgICAgICAgICBjYW1lcmFGcmFtZS55IDw9IGVudGl0eS55ICYmIGVudGl0eS55IDw9IGNhbWVyYUZyYW1lLnkgKyBjYW1lcmFGcmFtZS5oZWlnaHQgLSAxKXtcbiAgICAgICAgICAgIGNvbnN0IHJDZWxsOiBJUmVuZGVyQ2VsbCA9IHJlbmRlckdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbDogRk9WQ2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgaWYoZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICByQ2VsbC5mb3JlQ29sb3IgPSBlbnRpdHkuY29sb3JcbiAgICAgICAgICAgICAgICByQ2VsbC5jaGFyYWN0ZXIgPSBlbnRpdHkuY2hhcmFjdGVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBpZihERUJVRy5ERUJVR19EUkFXKXtcbiAgICAgICAgZm9yKGxldCByZWxDYW1lcmFZID0gMDsgcmVsQ2FtZXJhWSA8IGNhbWVyYUZyYW1lLmhlaWdodDsgcmVsQ2FtZXJhWSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHJlbmRlckdyaWQgYW5kIHRoZSBjYW1lcmFzXG4gICAgICAgICAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIHJlbENhbWVyYVgsIHJlbENhbWVyYVkpXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICAgICAgUG9pbnQuc2V0KHdvcmxkUCwgc2NyZWVuUC54ICsgY2FtZXJhRnJhbWUueCwgc2NyZWVuUC55ICsgY2FtZXJhRnJhbWUueSlcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICAgICAgaWYoZGVidWdHcmlkLmluQm91bmRzWFkod29ybGRQLngsIHdvcmxkUC55KSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlYnVnQ2VsbCA9IGRlYnVnR3JpZC5nZXRQKHdvcmxkUClcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdDZWxsLmJhY2tDb2xvciAhPSBDT0xPUlMuYmxhY2spe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBkZWJ1Z0NlbGwuYmFja0NvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9IGRlYnVnQ2VsbC5jaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuZm9yZUNvbG9yID0gZGVidWdDZWxsLmZvcmVDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gV0FSTklORzogSEVSRSBUSEVSRSBCRSBEUkFHT05TLCAob3IgaW4gdGhpcyBjYXNlLCBhIGxvdCBvZiBjb2RlIEkgZG9uJ3R1bmRlcnN0YW5kKVxuXG4vLyBXRSBPTkxZIFdBTlQgT05FIFJORyBHRU5FUkFUT1IgQkVDQVVTRSBXRSBBTFdBWVMgV0FOVCBBIFNFRUQgRk9SIElUXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MjEyOTUvc2VlZGluZy10aGUtcmFuZG9tLW51bWJlci1nZW5lcmF0b3ItaW4tamF2YXNjcmlwdFxuXG4vLyBIYXNoaW5nIGZ1bmN0aW9uIGZvciB0YWtpbmcgc2ltcGxlIHN0cmluZyBhbmQgY3JlYXRpbmcgYmV0dGVyIFwidHJ1ZVwiIHNlZWRzXG4vLyBJIEhBVkUgTk8gSURFQSBXSEFUIFRIRSBNQUdJQyBOVUJNRVJTIEFSRSBGT1JcbmZ1bmN0aW9uIHhtdXIzKHN0cjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCBoID0gMTc3OTAzMzcwMyBeIHN0ci5sZW5ndGggLy8gYml0d2lzZSBvciB0aGUgc3RyaW5nIHdpdGggdGhpcyByYW5kb20gdGhpbmdcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gc3RyLmNoYXJDb2RlQXQoaSksIDM0MzI5MTgzNTMpXG4gICAgICAgIGggPSBoIDw8IDEzIHwgaCA+Pj4gMTlcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxNiwgMjI0NjgyMjUwNylcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTMsIDMyNjY0ODk5MDkpXG4gICAgICAgIHJldHVybiAoaCBePSBoID4+PiAxNikgPj4+IDBcbiAgICB9XG59XG5cbnR5cGUgSVJhbmRvbSA9KCkgPT4gbnVtYmVyO1xuXG4vLyBHRU5FUkFUT1JTXG5mdW5jdGlvbiBzZmMzMihhOiBhbnksIGI6IGFueSwgYzogYW55LCBkOiBhbnkpOiAoRnVuY3Rpb24pe1xuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGEgPj4+PSAwOyBiPj4+PSAwOyBjID4+Pj0gMDsgZCA+Pj49IDBcbiAgICAgICAgbGV0IHQgPSAoYSArIGIpIHwgMFxuICAgICAgICBhID0gYiBeIGIgPj4+IDlcbiAgICAgICAgYiA9IGMgKyAoYyA8PCAzKSB8IDBcbiAgICAgICAgYyA9IChjIDw8IDIxIHwgYyA+Pj4gMTEpXG4gICAgICAgIGQgPSBkICsgMSB8IDBcbiAgICAgICAgdCA9IHQgKyBkIHwgMFxuICAgICAgICBjID0gYyArIHQgfCAwXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHQgPj4+IDApIC8gNDI5NDk2NzI5NlxuICAgIH1cbn1cblxuLy8gT05FIExJTkVSIENVUlJFTlRMWSBOT1QgSU4gVVNFXG4vLyBjb25zdCBMQ0c9IChzOiBhbnkpOiBGdW5jdGlvbj0+KCk6IGFueT0+KDIqKjMxLTEmKHM9TWF0aC5pbXVsKDQ4MjcxLHMpKSkvMioqMzE7XG5cbmNvbnN0IFJBTkRPTSA9IHtcbiAgICBfZ2VuZXJhdG9yOiAoKCk6IGFueSA9PiB7fSkgYXMgRnVuY3Rpb24sXG4gICAgc2VlZDogZnVuY3Rpb24oc2VlZFN0cjogc3RyaW5nID0gYnRvYShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpICk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB4bXVyMyhzZWVkU3RyKVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3IgPSBzZmMzMihzZWVkKCksIHNlZWQoKSwgc2VlZCgpLCBzZWVkKCkpXG4gICAgICAgIHJldHVybiBzZWVkU3RyXG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpOiBhbnkge1xuICAgICAgICBpZih0aGlzLl9nZW5lcmF0b3IgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5zZWVkKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdG9yKClcbiAgICB9LFxuICAgIG5leHRJbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLm5leHQoKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgICB9XG59XG5cbmV4cG9ydCB7IFJBTkRPTSB9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmtpbmcgd2l0aCBhIDJEIFBvaW50XG4gKi9cbmludGVyZmFjZSBJUG9pbnQgeyAgXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIZWxwZnVsIGVudW0gZm9yIGRpcmVjdGlvbnMgaW4gYSBncmlkLFxuICogVXA6IC15LCBEb3duOiAreSwgTGVmdDogLXgsIFJpZ2h0OiAreFxuICovXG5lbnVtIEdyaWREaXJlY3Rpb24ge1xuICAgIFVwLFxuICAgIERvd24sXG4gICAgTGVmdCxcbiAgICBSaWdodFxufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb2ludFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIHt4LHl9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBwb2ludCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGJvdGggb2YgdGhlbSB0b2dldGhlciwgaWYgeW91IHdhbnQgdG8gYWRkIGEgcG9pbnQgVE8gYW5vdGhlciBwb2ludCwgdXNlIGFkZFRvXG4gKiBAcGFyYW0gYSBGaXJzdCBQb2ludCwgdW5tb2RpZmllZFxuICogQHBhcmFtIGIgU2Vjb25kIFBvaW50LCB1bm1vZGlmaWVkXG4gKi9cbmNvbnN0IGFkZCA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UoYS54ICsgYi54LCBhLnkgKyBiLnkpXG59XG5cbi8qKlxuICogQSB1dGl0aWx5IHRvIG1vdmUgaW4gYSBkaXJlY3Rpb24sIGFsbG93cyBmb3IgdmFyaWFiaWxpdHkgaW4gdGhlIGRpcmVjdGlvbiB3aXRob3V0IGhhdmluZyB0byByZXNvcnQgdG8gbW9kaWZ5aW5nIHRoZSB4IGFuZCB5IGNvb3JpbmRhdGVzIGluZGl2aWR1YWxseVxuICogQHBhcmFtIHBvaW50IFBvaW50IHRvIGJlIG1vdmVkLCB3aWxsIGJlIHRoZSByZXR1cm4gdmFsdWVcbiAqIEBwYXJhbSBkaXJlY3Rpb24sIHRoZSBHcmlkIERpcmVjdGlvbiB5b3Ugd2FudCB0byBtb3ZlIGluXG4gKiBAcGFyYW0gZGlzdGFuY2UsIG9wdGlvbmFsIGRlZmF1bHRzIHRvIDEsIGhvdyBmYXIgeW91IHdhbnQgdGhlIHBvaW50IHRvIG1vdmUgXG4gKi9cbmNvbnN0IG1vdmUgPSAocG9pbnQ6IElQb2ludCwgZGlyZWN0aW9uOiBHcmlkRGlyZWN0aW9uLCBkaXN0YW5jZTogbnVtYmVyID0gMSk6IElQb2ludCA9PiB7XG4gICAgaWYoZGlyZWN0aW9uID0gR3JpZERpcmVjdGlvbi5MZWZ0KXtcbiAgICAgICAgcG9pbnQueCAtPSBkaXN0YW5jZVxuICAgIH1cbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLlJpZ2h0KXtcbiAgICAgICAgcG9pbnQueCArPSBkaXN0YW5jZVxuICAgIH1cbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLlVwKXtcbiAgICAgICAgcG9pbnQueSAtPSBkaXN0YW5jZVxuICAgIH1cbiAgICBpZihkaXJlY3Rpb24gPSBHcmlkRGlyZWN0aW9uLkRvd24pe1xuICAgICAgICBwb2ludC55ICs9IGRpc3RhbmNlXG4gICAgfVxuICAgIHJldHVybiBwb2ludFxufVxuXG4vKipcbiAqIEFkZCB0aGUgdmFsdWUgb2YgUG9pbnQgYSB0byBQb2ludCBiXG4gKiBAcGFyYW0gYSBUaGUgcG9pbnQgdGhhdCBjaGFuZ2VzLCB3aWxsIGhhdmUgYiBhZGRlZCB0byBpdFxuICogQHBhcmFtIGIgVGhlIHBvaW50IHdob3NlIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBvdGhlciwgaXQgaXMgdW5tb2RpZmllZCBpdHNlbGZcbiAqL1xuY29uc3QgYWRkVG8gPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIGEueCArPSBiLnhcbiAgICBhLnkgKz0gYi55XG4gICAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlcyBvZiBhIHBvaW50IHdpdGggeCBhbmQgeSB2YWx1ZXMsIHJldHVybnMgdGhlIG5vdyBtb2RpZmllZCBwb2ludFxuICogQHBhcmFtIHBvaW50IHBvaW50IHRvIGJlIG1vZGlmaWVkXG4gKiBAcGFyYW0geCBuZXcgeCB2YWx1ZVxuICogQHBhcmFtIHkgbmV3IHkgdmFsdWVcbiAqL1xuY29uc3Qgc2V0ID0gKHBvaW50OiBJUG9pbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICBwb2ludC54ID0geFxuICAgIHBvaW50LnkgPSB5XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQ29weSBhIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgUG9pbnQgdGhhdCB3aWxsIGJlIGNvcGllZFxuICovXG5jb25zdCBjb3B5ID0gKHBvaW50OiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBtZWFudCB0byB3b3JrIHdpdGggdGhpbmdzIHRoYXQgaGF2ZSB0aGUgSVBvaW50IGludGVyZmFjZVxuICovXG5jb25zdCBQb2ludCA9IHtcbiAgICBtYWtlLFxuICAgIG1vdmUsXG4gICAgYWRkLFxuICAgIGFkZFRvLFxuICAgIHNldCxcbiAgICBjb3B5XG59XG5cbmV4cG9ydCB7SVBvaW50LCBQb2ludCwgR3JpZERpcmVjdGlvbn0iLCJpbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vcG9pbnQnXG5pbnRlcmZhY2UgSVJlY3QgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdFNpZGVzIHtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0Q29ybmVycyB7XG4gICAgdGw6IElQb2ludDtcbiAgICB0cjogSVBvaW50O1xuICAgIGJsOiBJUG9pbnQ7XG4gICAgYnI6IElQb2ludDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWN0YW5nbGVcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKiBAcGFyYW0gd2lkdGggXG4gKiBAcGFyYW0gaGVpZ2h0IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgfVxufVxuXG5jb25zdCBzZXQgPSAocjogSVJlY3QsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByLnggPSB4XG4gICAgci55ID0geVxuICAgIHIud2lkdGggPSB3aWR0aFxuICAgIHIuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgcmV0dXJuIHJcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHVuaXQgdmFsdWUgb2YgdGhlIHNpZGVzIG9mIHRoZSByZWN0YW5nbGUsIGxlZnQgYW5kIHJpZ2h0IHJldHVybiB4IGNvb3JkaW5hdGVzLCB0b3AgYW5kIGJvdHRvbSBpbmNsdWRlIHkgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSByZWN0IHJlY3RhbmdsZSB1c2VkXG4gKi9cbmNvbnN0IHNpZGVzID0gKHJlY3Q6IElSZWN0KTogSVJlY3RTaWRlcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgICB0b3A6IHJlY3QueSxcbiAgICAgICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgICB9XG59XG5jb25zdCBjb3JuZXJzID0gKHJlY3Q6IElSZWN0KTogSVJlY3RDb3JuZXJzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0bDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSksXG4gICAgICAgIHRyOiBQb2ludC5tYWtlKHJlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSksXG4gICAgICAgIGJsOiBQb2ludC5tYWtlKHJlY3QueCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgICAgICBicjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkgKyByZWN0LmhlaWdodCksXG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIHBvaW50OiBOT1RFOiBUaGlzIGZpbmRzIHRoZSBJTlRFR0VSIGNlbnRlciwgY29vcmRpbmF0ZXMgYXJlIHRydW5jYXRlZFxuICogQHBhcmFtIHJlY3QgVGhlIHJlY3RhbmdsZSB3ZSBhcmUgZmluZGluZyB0aGUgY2VudGVyIG9mXG4gKi9cbmNvbnN0IGNlbnRlciA9IChyZWN0OiBJUmVjdCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIFBvaW50Lm1ha2UoTWF0aC5mbG9vcihyZWN0LnggKyByZWN0LndpZHRoLzIpLCBNYXRoLmZsb29yKHJlY3QueSArIHJlY3QuaGVpZ2h0LzIpKVxufVxuXG4vLyBPUFRJTUlaRTogRG9uJ3QgY2FsbCBzaWRlcywganVzdCB1c2UgdGhlIHJhdyBudW1iZXJzIGFuZCBhZGRpdGlvblxuY29uc3QgaW50ZXJzZWN0cyA9IChhOiBJUmVjdCwgYjogSVJlY3QpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBhU2lkZXMgPSBzaWRlcyhhKVxuICAgIGNvbnN0IGJTaWRlcyA9IHNpZGVzKGIpXG4gICAgcmV0dXJuIGFTaWRlcy5sZWZ0IDw9IGJTaWRlcy5yaWdodCAmJiBhU2lkZXMucmlnaHQgPj0gYlNpZGVzLmxlZnQgJiYgXG4gICAgICAgIGFTaWRlcy50b3AgPD0gYlNpZGVzLmJvdHRvbSAmJiBhU2lkZXMuYm90dG9tID49IGJTaWRlcy50b3BcblxuICAgICAgICBcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmlwdWxhdGUgcmVjdGFuZ2xlc1xuICovXG5jb25zdCBSZWN0ID0ge1xuICAgIG1ha2UsXG4gICAgc2V0LFxuICAgIHNpZGVzLFxuICAgIGNvcm5lcnMsXG4gICAgY2VudGVyLFxuICAgIGludGVyc2VjdHNcbn1cblxuZXhwb3J0IHtJUmVjdCwgUmVjdH1cbiIsIi8vIEkgZ3Vlc3MgZXZlcnl0aGluZyB3b3VsZCBuZWVkIGl0J3Mgb3duIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLi4uIGdyb3NzXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGxvY2F0aW9ucyBvbiB0aGUgYm9hcmQsIGV2ZW50dWFsbHkgd2Ugd2lsbCBwcm9iYWJseSBtb3ZlIHRoaXMgaW50byBpdHMgb3duIEVDUyBzeXN0ZW1cbiAqL1xuZW51bSBUaWxlTWF0ZXJpYWwge1xuICAgIEFzdGVyb2lkLFxuICAgIE1ldGFsXG59XG5jbGFzcyBUaWxlIHtcbiAgICAvKipcbiAgICAgKiBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBibG9ja01vdmU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRG9lcyB0aGlzIHRpbGUgYmxvY2sgbGluZSBvZiBzaWdodFxuICAgICAqL1xuICAgIGJsb2NrU2lnaHQ6IGJvb2xlYW47XG5cbiAgICBleHBsb3JlZDogYm9vbGVhbjtcblxuICAgIGNvbnRhaW5lZDogYm9vbGVhbjsgLy8gbW9kZWxzIGlmIHRoaXMgdGhpbmcgaGFzIGEgZmxvb3IgYW5kIGNlaWxpbmcsIChvciwgaW4gdW5pdmVyc2UsIHN0dWZmIHN1cnJvdW5kaW5nIGl0IG9uIHRoZSB6LWF4aXMpXG5cbiAgICBtYXRlcmlhbDogVGlsZU1hdGVyaWFsO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIHRoaXMuZXhwbG9yZWQgPSBmYWxzZVxuICAgICAgICBpZihibG9ja1NpZ2h0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tNb3ZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja1NpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZWQgPSB0cnVlXG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBUaWxlTWF0ZXJpYWwuQXN0ZXJvaWRcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgeyBUaWxlLCBUaWxlTWF0ZXJpYWwgfSJdLCJzb3VyY2VSb290IjoiIn0=