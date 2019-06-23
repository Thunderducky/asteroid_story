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
const COLORS = {
    'dark_outside': '#002244',
    'light_outside': '#265380',
    'black': '#2d2824',
    'dark_wall': '#2d2824',
    'dark_ground': '#443c35',
    'light_wall': '#C8B432',
    'light_ground': '#C5CC89',
    'player': '#FFFFFF',
    'dark_door': '#550000',
    'light_door': '#FF2222',
    'npc': '#CC0000',
    'DEBUG': '#FF3333'
};
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
/* harmony import */ var _shapes_ellipse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/ellipse */ "./client/src/shapes/ellipse.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");
/* harmony import */ var _debugSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugSettings */ "./client/src/debugSettings.ts");




const log = (q) => { console.log('\n', q); return q; };
const settings = {
    SECTION_COUNT: 10,
    MARGINS: 10
};
const placeAsteroidChunk = (tileGrid, ellipse) => {
    tileGrid.forEach((tile, index, x, y) => {
        if (_shapes_ellipse__WEBPACK_IMPORTED_MODULE_0__["Ellipse"].containsXY(ellipse, x, y)) {
            tile.blockMove = true;
            tile.blockSight = true;
            tile.contained = true;
        }
    });
};
function* progressiveMapGenerator(tileGrid, rooms, debugGrid) {
    const clearDebug = () => {
        if (_debugSettings__WEBPACK_IMPORTED_MODULE_3__["default"].DEBUG_DRAW) { // prevent this operation if we are not drawing
            debugGrid.forEach((dgc) => {
                dgc.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].black;
            });
        }
    };
    // let's place some initial asteroid bumps
    // Let's progressively draw the sections
    //yield // give us a place to stop
    log("BEGIN MAP");
    tileGrid.forEach((t) => {
        t.blockMove = false;
        t.blockSight = false;
        t.contained = false;
        t.explored = true; // remove later
    });
    //yield
    const MARGINS = settings.MARGINS;
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height);
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2) / 2);
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7);
    const asteroidEllipses = [];
    for (let i = 0; i < settings.SECTION_COUNT; i++) {
        const xRadius = _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const yRadius = _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const bigRadius = Math.max(xRadius, yRadius);
        const x = _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius);
        const y = _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius);
        const ellipse = _shapes_ellipse__WEBPACK_IMPORTED_MODULE_0__["Ellipse"].make(x, y, xRadius, yRadius, _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() * Math.PI * 2);
        asteroidEllipses.push(ellipse);
        placeAsteroidChunk(tileGrid, ellipse);
        if (_debugSettings__WEBPACK_IMPORTED_MODULE_3__["default"].DEBUG_DRAW) {
            clearDebug();
            // TODO: optimize this steup
            debugGrid.forEach((cell, index, x, y) => {
                if (_shapes_ellipse__WEBPACK_IMPORTED_MODULE_0__["Ellipse"].containsXY(ellipse, x, y)) {
                    cell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].DEBUG;
                }
            });
        }
        //yield
    }
    clearDebug();
    log("ASTEROID SHELL COMPLETE");
    //yield
    log("BEGIN ROOM PLACEMENT");
    log("PICK A SPOT ON THE EDGE");
    // HOW DO WE FIND EDGES
    // WE LOOK FOR SPACES WITH EDGES THAT TOUCH OUTSIDE SPACE
    const outlineCells = [];
    tileGrid.forEach((tile, index, x, y) => {
        // const tile = tileGrid.getXY(x,y)
        const neighbors = tileGrid.getNeighborsXY(x, y);
        if (tile.contained && neighbors.neighbors.some((t) => !t.contained)) {
            outlineCells.push(tile);
        }
    });
    if (_debugSettings__WEBPACK_IMPORTED_MODULE_3__["default"].DEBUG_DRAW) {
        outlineCells.forEach((oc) => {
            const dcell = debugGrid.getXY(oc.x, oc.y);
            dcell.backColor = _colors__WEBPACK_IMPORTED_MODULE_2__["default"].DEBUG;
        });
    }
    log("ESTABLISH OUTLINE");
    //yield
    log("PICKING A SPOT OF THE OUTLINES TO BE OUR ENTRY POINT");
    // Little helper message here for me
    const drawDebugString = (message, x, y) => {
        let currentX = x;
        let currentY = y;
        for (let i = 0; i < message.length; i++) {
            const letter = message[i];
            if (debugGrid.inBoundsXY(currentX, currentY) && letter != '\n') {
                const target = debugGrid.getXY(currentX, currentY);
                target.character = letter;
                target.backColor = '#FFFFFF';
                target.foreColor = '#000000';
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
    const outlineEntryPoint = outlineCells[_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].nextInt(0, outlineCells.length - 1)];
    if (_debugSettings__WEBPACK_IMPORTED_MODULE_3__["default"].DEBUG_DRAW) {
        // let's draw a spot for the line to show up
        const dcell = debugGrid.getXY(outlineEntryPoint.x, outlineEntryPoint.y);
        dcell.backColor = '#FFFFFF';
        drawDebugString('Entry Point', outlineEntryPoint.x + 1, outlineEntryPoint.y - 1);
    }
    // This is where this will start
    // ALSO, TODO: automatically accomodate for the fact that we are not 
    console.log(outlineEntryPoint);
    // build a major piece
    // build a small room around that section, this is an airlock, this is room 1
    // we could also use this process to pick multiple sections as airlocks
    // once we have that we'll try and place essential rooms into the asteroid
    log("DONE");
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
/*! exports provided: CODE_TO_RECT_HASH, CHARACTER_HELPER, code, drawSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_TO_RECT_HASH", function() { return CODE_TO_RECT_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER_HELPER", function() { return CHARACTER_HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSection", function() { return drawSection; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");

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
/* harmony import */ var _shapes_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/point */ "./client/src/shapes/point.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");
/* harmony import */ var _debugSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debugSettings */ "./client/src/debugSettings.ts");



const renderToGrid = (tileGrid, fovGrid, entities, renderGrid, cameraFrame, debugGrid) => {
    // renderGrid is in SCREEN coordinates, and will have it's XY ignored for our purposes
    // tileGrid, entities and fovGrid are in WORLD coordinates and will have their XY and y ignored for now
    // camera and renderGrid both start at the topLeft in terms of aligning the two
    // I almost feel like we should tighten the coupling, but oh well, let's actually do it
    const screenP = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(0, 0);
    const worldP = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(0, 0);
    for (let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++) {
        for (let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++) {
            // this maps to the renderGrid and the cameras
            _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(screenP, relCameraX, relCameraY);
            // this maps to the tileGrid, fovGrid, and entities
            _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y);
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
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_outside;
                }
                else {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_outside;
                }
            }
            else {
                const tile = tileGrid.getXY(worldP.x, worldP.y);
                if (!tile.explored) {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].black;
                }
                else {
                    // TODO: ADD DOORS
                    const isWall = tile.blockMove && tile.blockSight;
                    const isGround = !isWall && tile.contained;
                    const isSpace = !isWall && !tile.contained;
                    if (isSpace) {
                        if (isLit) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_outside;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_outside;
                        }
                    }
                    else if (isGround) {
                        if (isLit) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_ground;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_ground;
                        }
                    }
                    else if (isWall) {
                        if (isLit) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_wall;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_wall;
                        }
                    }
                    else {
                    }
                }
            }
        }
    }
    entities.forEach((entity) => {
        _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(screenP, entity.x - cameraFrame.x, entity.y - cameraFrame.y);
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
    if (_debugSettings__WEBPACK_IMPORTED_MODULE_2__["default"].DEBUG_DRAW) {
        for (let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++) {
            for (let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++) {
                // this maps to the renderGrid and the cameras
                _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(screenP, relCameraX, relCameraY);
                // this maps to the tileGrid, fovGrid, and entities
                _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y);
                const renderCell = renderGrid.getP(screenP);
                if (debugGrid.inBoundsXY(worldP.x, worldP.y)) {
                    const debugCell = debugGrid.getP(worldP);
                    if (debugCell.backColor != _colors__WEBPACK_IMPORTED_MODULE_1__["default"].black) {
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
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
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
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
// I guess everything would need it's own serialization/deserialization... gross
/**
 * This class represents locations on the board, eventually we will probably move this into its own ECS system
 */
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
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZGVidWdTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Zvdi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oYW5kbGVJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3Byb2dyZXNzaXZlTWFwR2VuZXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVyVG9HcmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9zaGFwZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9zaGFwZXMvcmVjdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDTjtBQUNoQjtBQUN5QjtBQUN6QjtBQUNJO0FBQ1E7QUFDUTtBQUNYO0FBQ0U7QUFDRztBQUNIO0FBQ0s7QUFDVDtBQUVQO0FBRVE7QUFDTTtBQUNFO0FBQ1Y7QUFDa0M7QUFFckUsTUFBTSxFQUNGLFVBQVUsRUFDVixXQUFX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VSxHQUFHLENBQUMsQ0FBUSxFQUFFLENBQVEsRUFBVyxFQUFFO0lBQy9DLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QixPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJO1FBQzdELE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0FBR2xFLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sSUFBSSxHQUFHO0lBQ1QsSUFBSTtJQUNKLEdBQUc7SUFDSCxLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0NBQ2I7QUFFbUI7Ozs7Ozs7Ozs7Ozs7QUMvRnBCO0FBQUE7QUFBQSxnRkFBZ0Y7QUFFaEY7O0dBRUc7QUFDSCxNQUFNLElBQUk7SUFnQk47Ozs7T0FJRztJQUNILFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUFrQixFQUFFLFVBQW9CO1FBQ3RFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7UUFDckIsSUFBRyxVQUFVLEtBQUssU0FBUyxFQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO0lBRXpCLENBQUM7Q0FDSjtBQUVjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IE1vdXNlTW9uaXRvciB9IGZyb20gJy4vbW91c2VNb25pdG9yJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi9hc3NldEhlbHBlcidcbmltcG9ydCB7IENhbnZhc1JlbmRlcmVyIH0gZnJvbSAnLi9jYW52YXNSZW5kZXJlcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBSZWN0LCBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRF9NQU5BR0VSIH0gZnJvbSAnLi9pZE1hbmFnZXInXG5pbXBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IHsgbWFwR2VuZXJhdG9yMyB9IGZyb20gJy4vbWFwR2VuZXJhdGlvbidcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5cbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCB7IGhhbmRsZUlucHV0IH0gZnJvbSAnLi9oYW5kbGVJbnB1dCdcbmltcG9ydCB7IHJlbmRlclRvR3JpZCB9IGZyb20gJy4vcmVuZGVyVG9HcmlkJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcbmltcG9ydCB7IHByb2dyZXNzaXZlTWFwR2VuZXJhdG9yIH0gZnJvbSAnLi9wcm9ncmVzc2l2ZU1hcEdlbmVyYXRpb24nO1xuXG5jb25zdCB7XG4gICAgVElMRV9XSURUSCxcbiAgICBUSUxFX0hFSUdIVCxcbiAgICBTQ1JFRU5fV0lEVEgsXG4gICAgU0NSRUVOX0hFSUdIVCxcbiAgICBNQVBfV0lEVEgsXG4gICAgTUFQX0hFSUdIVCxcbiAgICBDQU1FUkFfV0lEVEgsXG4gICAgQ0FNRVJBX0hFSUdIVCxcbiAgICBGT1ZfUkFESVVTXG59ID0gU0VUVElOR1NcblxuXG4vLyBJTklUSUFMSVpFIE9VUiBTRUVEXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5jb25zdCBzZWVkU3RyID0gdXJsUGFyYW1zLmdldCgnc2VlZCcpXG5pZighc2VlZFN0cil7XG4gICAgY29uc3Qgc2VlZCA9IFJBTkRPTS5zZWVkKHNlZWRTdHIgfHwgdW5kZWZpbmVkKVxuICAgIGNvbnN0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/c2VlZD0nICsgc2VlZFxuICAgIGlmIChoaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe3BhdGg6bmV3dXJsfSwnJyxuZXd1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICB9XG5cbn0gZWxzZSB7XG4gICAgUkFORE9NLnNlZWQoc2VlZFN0cilcbn1cblxuY29uc3QgcGxheWVyOiBFbnRpdHkgPSBuZXcgRW50aXR5KElEX01BTkFHRVIubmV4dCgpLCAzLDQsICdAJywgQ09MT1JTLnBsYXllcilcbmNvbnN0IG5wYzogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsIENPTE9SUy5ucGMpXG5jb25zdCBlbnRpdGllczogRW50aXR5W10gPSBbcGxheWVyLG5wY11cblxuLy8gRmluZCBvdXIgY2FudmFzIGFuZCBhZGp1c3QgaXQgdG8gb3VyIHNldHRpbmdzXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxuY2FudmFzLndpZHRoID0gU0NSRUVOX1dJRFRIICogVElMRV9XSURUSFxuY2FudmFzLmhlaWdodCA9IFNDUkVFTl9IRUlHSFQgKiBUSUxFX0hFSUdIVFxuXG4vLyBJbml0aWFsaXplIG91ciBpbnB1dCBtb25pdG9yc1xuY29uc3Qga20gPSBuZXcgS2V5Ym9hcmRNb25pdG9yKCkuYXR0YWNoKGRvY3VtZW50KVxuY29uc3QgbW0gPSBuZXcgTW91c2VNb25pdG9yKCkuYXR0YWNoKGNhbnZhcylcblxuLy8gSW5pdGlhbGl6ZSBvdXIgY2FudmFzIHJlbmRlcmVyXG5jb25zdCByZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcigpXG5jb25zdCBjYW1lcmFGcmFtZSA9IFJlY3QubWFrZSgwLDAsIENBTUVSQV9XSURUSCwgQ0FNRVJBX0hFSUdIVCkgLy8gQ0FNRVJBIElTIElOIFdPUkxEIENFTExTLCBOT1QgQUJTT0xVVEUgVU5JVFNcblxuLy8gSW5pdGlhbGl6ZSBvdXIgR3JpZHNcbmNvbnN0IHJlbmRlckdyaWQgPSBuZXcgR3JpZDxJUmVuZGVyQ2VsbD4oY2FtZXJhRnJhbWUud2lkdGgsIGNhbWVyYUZyYW1lLmhlaWdodClcbnJlbmRlckdyaWQuc2V0RWFjaCgoY2VsbDogYW55LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4gUmVuZGVyQ2VsbC5tYWtlKHgseSwnJywgQ09MT1JTLmJsYWNrLCBDT0xPUlMuYmxhY2spXG59KVxuXG4vLyBUSEVTRSBBUkUgSEVSRSBCWSBERUZBVUxULCBCVVQgV09OJ1QgQkUgU0hPV04gVU5MRVNTIEVOQUJMRURcbmNvbnN0IGRlYnVnR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG5kZWJ1Z0dyaWQuc2V0RWFjaCgoY2VsbDogYW55LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4gUmVuZGVyQ2VsbC5tYWtlKHgseSwnJywgQ09MT1JTLmJsYWNrLCBDT0xPUlMuYmxhY2spXG59KVxuXG5sZXQgZm92UmVjb21wdXRlID0gIURFQlVHLkRJU0FCTEVfRk9WXG5jb25zdCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+ID0gbmV3IEdyaWQ8Rk9WQ2VsbD4oY2FtZXJhRnJhbWUud2lkdGgsIGNhbWVyYUZyYW1lLmhlaWdodClcbmZvdkdyaWQuc2V0RWFjaCgoKTogRk9WQ2VsbCA9PiB7IHJldHVybiB7XG4gICAgdmlzaWJsZTogREVCVUcuRElTQUJMRV9GT1Zcbn19KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgY29uc3QgdCA9IG5ldyBUaWxlKHgseSwgdHJ1ZSlcbiAgICBpZihERUJVRy5ESVNBQkxFX0ZPVil7XG4gICAgICAgIHQuZXhwbG9yZWQgPSB0cnVlXG4gICAgfVxuICAgIHJldHVybiB0XG59KVxuXG4vLyB0aGlzIHdpbGwgYWxzbyBwb3B1bGF0ZSB0aGUgcm9vbXNcbmNvbnN0IHJvb21zOiBJUmVjdFtdID0gW11cbi8vbWFwR2VuZXJhdG9yMyh0aWxlR3JpZCwgcm9vbXMpXG4vL21hcEdlbmVyYXRvcjIodGlsZUdyaWQsIHJvb21zKVxuXG4vLyB0aGlzIGlzIGhvbmVzdGx5IGp1c3QgYW5vdGhlciBwYXJ0IG9mIGdlbnJhdGluZyB0aGluZ3MsIHdlIGp1c3QgbmVlZCB0byBjb21lIHVwIHdpdGggc29tZSBleHRyYSB0ZXJtaW5vbG9neSBmb3IgaXQvIHdheXMgdG8gZGVhbCB3aXRoIGl0XG57XG4gICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgIGNvbnN0IHBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1swXSlcbiAgICAgICAgUG9pbnQuc2V0KHBsYXllciwgcGNlbnRlci54LCBwY2VudGVyLnkpXG4gICAgICAgIGNvbnN0IG5wY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbcm9vbXMubGVuZ3RoIC0gMV0pXG4gICAgICAgIFBvaW50LnNldChucGMsIG5wY2VudGVyLngsIG5wY2VudGVyLnkpXG4gICAgfVxuXG4gICAgLy8gY2VudGVyIHRoZSBjYW1lcmEgYW5kIGZvdiBvbiB0aGUgcGxheWVyXG4gICAgaWYoIURFQlVHLkRJU0FCTEVfVFJBQ0tJTkcpe1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNlbnRlciBldmVyeXRoaW5nXG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIgLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcih0aWxlR3JpZC5oZWlnaHQvMiAgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG4gICAgfVxufVxuXG4vLyBjbGVhbiB0aGlzIHVwXG5jb25zdCBtb3ZlczogYW55W10gPSBbXVxuY29uc3QgTW92ZVByb2Nlc3NvciA9IHtcbiAgICBtb3Zlc1xufVxuXG5QVUJTVUIuc3Vic2NyaWJlKCdtb3ZlJywgKG1zZyk6IHZvaWQgPT57XG4gICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5wdXNoKG1zZylcbn0pXG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmVkJywgKG1zZyk6IHZvaWQgPT57XG4gICAgaWYobXNnLmlkID09PSBwbGF5ZXIuaWQgJiYgIURFQlVHLkRJU0FCTEVfVFJBQ0tJTkcpe1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH1cbn0pXG5cblBVQlNVQi5zdWJzY3JpYmUoJ2NhbWVyYV9tb3ZlJywgKG1zZyk6IHZvaWQgPT4ge1xuICAgIGNhbWVyYUZyYW1lLnggKz0gbXNnLmRlbHRhLnhcbiAgICBjYW1lcmFGcmFtZS55ICs9IG1zZy5kZWx0YS55XG4gICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbn0pXG5cbi8vIFRPRE86IE1PVkUgVEhJUyBUTyB0aGUgS2V5Ym9hcmQgTW9uaXRvciBpdHNlbGYgYXMgYSBoZWxwZXIgcHJvcGVydHlcbmNvbnN0IG5ld0tleVByZXNzID0gKHE6IHN0cmluZywgZW5hYmxlWm9vbTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGttLmdldEtleVN0YXRlKHEpXG4gICAgaWYoIWVuYWJsZVpvb20pe1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEb3duICYmIHN0YXRlLmhhbGZTdGVwcyA+IDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEb3duICYmIChzdGF0ZS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKVxuICAgIH1cbn1cblxuY29uc3QgbGV2ZWxJdGVyYXRvciA9IHByb2dyZXNzaXZlTWFwR2VuZXJhdG9yKHRpbGVHcmlkLCByb29tcywgZGVidWdHcmlkKVxuXG5sb2FkSW1hZ2UoJ2Fzc2V0cy9vdXQucG5nJykudGhlbigoaW1hZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIHJlbmRlcmVyLmluaXQoY2FudmFzLCBpbWFnZSlcbiAgICBpZighREVCVUcuU1RBR0VfTUFQX0dFTkVSQVRPUlMpe1xuICAgICAgICAvLyBKVVNUIEZVTExZIFNFUVVFTkNFIFRIRSBHRU5FUkFUT1JcbiAgICAgICAgd2hpbGUobGV2ZWxJdGVyYXRvci5uZXh0KCkuZG9uZSAhPT0gZmFsc2Upe31cbiAgICB9XG4gICAgLy8gTG9vcFxuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGhhbmRsZUlucHV0KGttLCBwbGF5ZXIpXG5cbiAgICAgICAgLy8gZXh0cmFcbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3cnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAwLCB5OiAtMX19KVxuICAgICAgICB9XG4gICAgICAgIGlmKG5ld0tleVByZXNzKCdhJykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogLTEsIHk6IDB9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygncycpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IDAsIHk6IDF9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygnZCcpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IDEsIHk6IDB9fSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKERFQlVHLlNUQUdFX01BUF9HRU5FUkFUT1JTKXtcbiAgICAgICAgICAgIC8vIHEgbGV0cyB1cyBwcm9ncmVzcyB0aHJvdWdoIHRoZSBtYXAgZ2VuZXJhdG9yIHBoYXNlXG4gICAgICAgICAgICBpZihuZXdLZXlQcmVzcygncScpKXtcbiAgICAgICAgICAgICAgICAvLyB5aWVsZCB0aGUgbmV4dCBsZXZlbCBnZW5lcmF0aW5nIHNldHRpbmdcbiAgICAgICAgICAgICAgICBsZXZlbEl0ZXJhdG9yLm5leHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvY2VzcyBtb3Zlc1xuICAgICAgICAvLyBldmVudHVhbGx5IHdlJ2xsIGNvbXBvbmVudGl6ZSB0aGlzIGJldHRlclxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmZvckVhY2goKG1zZzogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gbXNnLmRlbHRhXG4gICAgICAgICAgICBjb25zdCBpZCA9IG1zZy5pZFxuICAgICAgICAgICAgY29uc3QgbW92ZXIgPSBlbnRpdGllcy5maW5kKChlKTogYm9vbGVhbiA9PiBlLmlkID09IGlkKVxuICAgICAgICAgICAgaWYoIW1vdmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpbGVHcmlkLmluQm91bmRzWFkobW92ZXIueCArIG1vdmUueCwgbW92ZXIueSArIG1vdmUueSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgaWYoIXRpbGUuYmxvY2tNb3ZlIHx8IChERUJVRy5FTkFCTEVfQ0xJUFBJTkcgJiYgbW92ZXIuaWQgPT09IHBsYXllci5pZCkpe1xuICAgICAgICAgICAgICAgICAgICBtb3Zlci5tb3ZlKG1vdmUueCwgbW92ZS55KVxuICAgICAgICAgICAgICAgICAgICBpZihtb3Zlci5pZCA9PT0gcGxheWVyLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdlJlY29tcHV0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZWQnLCBtc2cpIC8vIG9ubHkgcHVibGlzaCBtb3ZlIGlmIHRoZSBlbnRpdHkgYWN0dWFsbHkgY29tcGxldGVkIHRoZSBtb3ZlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmxlbmd0aCA9IDBcblxuICAgICAgICBpZihmb3ZSZWNvbXB1dGUgJiYgIURFQlVHLkRJU0FCTEVfRk9WKXtcbiAgICAgICAgICAgIGNhbGN1bGF0ZUZPVihmb3ZHcmlkLCB0aWxlR3JpZCwgcGxheWVyLCBGT1ZfUkFESVVTKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCB0byByZW5kZXIgZm9ybWF0XG4gICAgICAgIHJlbmRlclRvR3JpZCh0aWxlR3JpZCwgZm92R3JpZCwgZW50aXRpZXMsIHJlbmRlckdyaWQsIGNhbWVyYUZyYW1lLCBkZWJ1Z0dyaWQpXG4gICAgICAgIC8vIGFjdHVhbGx5IHJlbmRlciB0byBjYW52YXNcbiAgICAgICAgcmVuZGVyZXIuY2xlYXIoKVxuICAgICAgICByZW5kZXJlci5yZW5kZXIocmVuZGVyR3JpZClcblxuICAgICAgICBrbS5yZXNldFN0ZXBzKClcbiAgICAgICAgbW0ucmVzZXQoKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblxufSkuY2F0Y2goKGVycjogYW55KTogdm9pZCA9PiBjb25zb2xlLmxvZyhlcnIpKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuIiwiZnVuY3Rpb24gbG9hZEltYWdlKHVybDogc3RyaW5nKTogYW55e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKTogYW55ID0+IHJlc29sdmUoaW1nKSlcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCk6IGFueSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tICR7dXJsfWApKSlcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuICAgIH0pXG59XG5cbmV4cG9ydCB7bG9hZEltYWdlfSIsImltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IENPREVfVE9fUkVDVF9IQVNILCBkcmF3U2VjdGlvbiwgY29kZSB9IGZyb20gJy4vcmVuZGVySGVscGVycydcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHRha2luZyBhIHJlbmRlciBncmlkIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGltYWdlc1xuICogb24gdGhlIGNhbnZhc1xuICovXG5cbmNvbnN0IHtUSUxFX1dJRFRILCBUSUxFX0hFSUdIVH0gPSBTRVRUSU5HU1xuXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IHVuZGVmaW5lZDtcbiAgICBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50KTogQ2FudmFzUmVuZGVyZXJ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIC8vIHdlIGFyZSBqdXN0IGZvcmNpbmcgdGhpcyBmb3Igbm93LCB3ZSB3aWxsIGNoZWNrIGlmIGl0J3MgbnVsbFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMhLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaWYoY3R4ID09PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCBjb250ZXh0IGZyb20gY2FudmFzJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8gZXZlbnR1YWxseSB3ZSBuZWVkIHRvIHBhc3MgaW4gdGhlIGRpbWVuc2lvbnMgd2UgYXJlIHJlbmRlcmluZyB0byBhcyB3ZWxsXG4gICAgLy8gZm9yIG5vdyBpdCdzIGZpbmVcbiAgICByZW5kZXIocmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4sIGJhY2tncm91bmQ6IHN0cmluZyA9IENPTE9SUy5ibGFjayk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsIHJlbmRlckdyaWQud2lkdGggKiBUSUxFX1dJRFRILCByZW5kZXJHcmlkLmhlaWdodCAqIFRJTEVfSEVJR0hUKVxuICAgICAgICAvLyBsZXQncyB0cnkgc2V0dGluZyBhIGJhY2tncm91bmQgY29sb3IgYXMgd2VsbFxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBkZXN0UmVjdCA9IFJlY3QubWFrZSgwLDAsMCwwKVxuICAgICAgICByZW5kZXJHcmlkLmZvckVhY2goKFxuICAgICAgICAgICAgY2VsbDogSVJlbmRlckNlbGwsIFxuICAgICAgICAgICAgaW5kZXg6IG51bWJlciwgXG4gICAgICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgUmVjdC5zZXQoZGVzdFJlY3QsIHggKiBUSUxFX1dJRFRILCB5ICogVElMRV9IRUlHSFQsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxuICAgICAgICAgICAgLy8gdG9kbywgYWxsb3cgdXMgdG8gbWFyayByZW5kZXIgY2VsbHMgYXMgJ2VtcHR5JyByYXRoZXIgdGhhbiBzcGFjZXMsIHRoaXMgbWlnaHQgaGVscCBzcGVlZCB1cCByZW5kZXIgdGltZVxuICAgICAgICAgICAgaWYoY2VsbC5jaGFyYWN0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICBpZihjZWxsLmJhY2tDb2xvciAhPT0gYmFja2dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgYWN0dWFsbHkgZG9uJ3Qga25vdyBpZiB0aGlzIGhlbHBzLCBidXQgaXQgc2VlbXMgbGlrZSBzZXR0aW5nIHRoZSBmaWxsU3R5bGUgY291bGQgaW52b2x2ZSBtb3JlIGNvbXBsaWNhdGlvbnMgdGhhbiBqdXN0IGNoZWNraW5nIGlmIGl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgaWYoY3R4LmZpbGxTdHlsZSAhPT0gY2VsbC5iYWNrQ29sb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNlbGwuYmFja0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNSZWN0ID0gQ09ERV9UT19SRUNUX0hBU0hbY29kZShjZWxsLmNoYXJhY3RlcildXG4gICAgICAgICAgICAgICAgZHJhd1NlY3Rpb24oY3R4LCB0aGlzLnNwcml0ZXNoZWV0LCBzcmNSZWN0LCBkZXN0UmVjdCwgY2VsbC5mb3JlQ29sb3IsIGNlbGwuYmFja0NvbG9yIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSIsImNvbnN0IENPTE9SUyA9IHtcbiAgICAnZGFya19vdXRzaWRlJzogJyMwMDIyNDQnLFxuICAgICdsaWdodF9vdXRzaWRlJzogJyMyNjUzODAnLFxuICAgICdibGFjayc6ICcjMmQyODI0JyxcbiAgICAnZGFya193YWxsJzogJyMyZDI4MjQnLCAvLycjNDQzYzM1JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzQ0M2MzNScsIC8vJyM2NjU2NDcnLFxuICAgICdsaWdodF93YWxsJzogJyNDOEI0MzInLCAvLyAjQzVDQzg5XG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzVDQzg5JyxcbiAgICAncGxheWVyJzogJyNGRkZGRkYnLFxuICAgICdkYXJrX2Rvb3InOicjNTUwMDAwJyxcbiAgICAnbGlnaHRfZG9vcic6ICcjRkYyMjIyJyxcbiAgICAnbnBjJzogJyNDQzAwMDAnLFxuICAgICdERUJVRyc6ICcjRkYzMzMzJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDT0xPUlNcbiIsImludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vLyBBTEwgREVCVUcgU0VUVElOR1MgU0hPVUxEIEdPIElOIEhFUkUsIEFORCBBTEwgREVCVUcgRkxBR1MgU0hPVUxEIEJFIEZBTFNFIEJZIERFRkFVTFQgKGkuZS4gcHJvZHVjdGlvbiBtb2RlKVxuY29uc3QgREVCVUc6IEhhc2g8Ym9vbGVhbj4gPSB7XG4gICAgRElTQUJMRV9GT1Y6IGZhbHNlLCAgICAgICAgICAvLyBTSE9XIEVWRVJZVEhJTkcsIE5PIEhJRElORyBTVFVGRiBCRUhJTkQgRk9WLCBFVkVSWVRISU5HIEFDVFMgTElUXG4gICAgRElTQUJMRV9UUkFDS0lORzogdHJ1ZSwgICAgIC8vIENBTUVSQSBXSUxMIE9OTFkgUkVTUE9ORCBUTyBESVJFQ1QgQ09OVFJPTCBBTkQgV09OJ1QgVFJBQ0sgQ0hBUkFDVEVSXG4gICAgRU5BQkxFX0NMSVBQSU5HOiB0cnVlLFxuICAgIERFQlVHX0RSQVc6IHRydWUsXG4gICAgU1RBR0VfTUFQX0dFTkVSQVRPUlM6IHRydWUsIC8vIFdlIHdpbGwgbWFudWFsbHkgcHJvZ3Jlc3MgdGhlIGxldmVsIGdlbmVyYXRvclxufVxuXG5leHBvcnQgZGVmYXVsdCBERUJVR1xuIiwiLyoqXG4gKiBBIGdlbmVyaWMgb2JqZWN0IHRvIHJlcHJlc2VudCBldmVyeXRoaW5nIHRoYXQgaXMgbm90IHRoZSBtYXAgaXRzZWxmXG4gKiBGb3IgdGhhdCwgc2VlIHRoZSBUaWxlIGNsYXNzXG4gKi9cbmNsYXNzIEVudGl0eSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgeDogbnVtYmVyLHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYW4gZW50aXR5LCBjdXJyZW50bHkgZG9lc24ndCBjaGVjayBpZiBpdCBjYW4gb3Igbm90LCBqdXN0IGRvZXNcbiAgICAgKiBAcGFyYW0gZHggQW1vdW50IHRvIG1vdmUgaW4gdGhlIHggZGlyZWN0aW9uIChsZWZ0IGlzIG5lZ2F0aXZlLCByaWdodCBpcyBwb3NpdGl2ZSlcbiAgICAgKiBAcGFyYW0gZHkgQW1vdW50IHRvIG1vdmUgaW4gdGhlIHkgZGlyZWN0aW9uICh1cCBpcyBuZWdhdGl2ZSwgZG93biBpcyBwb3NpdGl2ZSlcbiAgICAgKi9cbiAgICBtb3ZlKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lke1xuICAgICAgICB0aGlzLnggKz0gZHhcbiAgICAgICAgdGhpcy55ICs9IGR5XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbnRpdHkgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVBvaW50LCBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG5pbnRlcmZhY2UgRk9WQ2VsbCAge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgU2hhZG93UmFuZ2Uge1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzQmV0d2VlbkluY2x1c2l2ZSA9IChhOiBudW1iZXIsYjogbnVtYmVyLHQ6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGlmKGIgPCBhKXtcbiAgICAgICAgcmV0dXJuIGIgPD0gdCAmJiB0IDw9IGFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA8PSB0ICYmIHQgPD0gYlxuICAgIH1cbn1cbi8qKlxuICogXG4gKiBAcGFyYW0gZm92R3JpZCBcbiAqIEBwYXJhbSB0aWxlR3JpZCBcbiAqIEBwYXJhbSBzdGFydFBvaW50IHN0YXJ0IHBvaW50IGlzIGluIHdvcmxkIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gbWF4RGlzdGFuY2UgXG4gKiBAcGFyYW0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsIFxuICogQHBhcmFtIHhEaXJlY3Rpb24gXG4gKiBAcGFyYW0geURpcmVjdGlvbiBcbiAqL1xuY29uc3QgY2FsY3VsYXRlT2N0YW50ID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIsXG4gICAgaG9yaXpvbnRhbE5vdFZlcnRpY2FsOiBib29sZWFuLCB4RGlyZWN0aW9uOiBudW1iZXIsIHlEaXJlY3Rpb246IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIFxuICAgIC8vIE91ciBzaGFkb3dzIHdlIHdpbGwgY2FzdFxuICAgIGNvbnN0IHNoYWRvd1JhbmdlczogU2hhZG93UmFuZ2VbXSA9IFtdXG4gICAgLy8gb3VyIHN0YXJ0aW5nIGxvY2F0aW9uIGlzIGFsd2F5cyB2aXNpYmxlXG4gICAgY29uc3Qgc2NyZWVuU3RhcnRQb2ludD0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgIHNjcmVlblN0YXJ0UG9pbnQueCAtPSBmb3ZHcmlkLnhcbiAgICBzY3JlZW5TdGFydFBvaW50LnkgLT0gZm92R3JpZC55XG4gICAgZm92R3JpZC5nZXRQKHNjcmVlblN0YXJ0UG9pbnQpLnZpc2libGUgPSB0cnVlXG4gICAgLy8gVE9ETzogRGV0ZXJtaW5lIGlmIHRoZSBGT1YgaXMgaW4gcmFuZ2VcbiAgICBmb3IobGV0IHJvdyA9IDE7IHJvdyA8IG1heERpc3RhbmNlOyByb3crKyl7XG4gICAgICAgIGNvbnN0IHJvd1NpemUgPSByb3cgKyAxXG4gICAgICAgIGZvcihsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgcm93U2l6ZTsgY29sdW1uKyspe1xuICAgICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBvY3RhbnQsIHRoZSB0cmF2ZWxsZXIgd2lsbCBtb3ZlIGRpZmZlcmVudGx5XG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxsZXIgPSBQb2ludC5jb3B5KHN0YXJ0UG9pbnQpXG4gICAgICAgICAgICB0cmF2ZWxsZXIueCArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB4RGlyZWN0aW9uICogY29sdW1uIDogeERpcmVjdGlvbiAqIHJvd1xuICAgICAgICAgICAgdHJhdmVsbGVyLnkgKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geURpcmVjdGlvbiAqIHJvdyA6IHlEaXJlY3Rpb24gKiBjb2x1bW5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG91dCBvZiBib3VuZHMsIHNraXBcbiAgICAgICAgICAgIGlmKCF0aWxlR3JpZC5pbkJvdW5kc1hZKHRyYXZlbGxlci54LCB0cmF2ZWxsZXIueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZhY3RvciBpbiBvdXIgdGlsZSBjaGVjayB3aGVuIHdlIGdldCB0aGUgd29ybGQgY2VsbFxuICAgICAgICAgICAgbGV0IHNjcmVlblBvaW50ID0gUG9pbnQuY29weSh0cmF2ZWxsZXIpXG4gICAgICAgICAgICBzY3JlZW5Qb2ludC54IC09IGZvdkdyaWQueFxuICAgICAgICAgICAgc2NyZWVuUG9pbnQueSAtPSBmb3ZHcmlkLnlcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRQKHRyYXZlbGxlcilcbiAgICAgICAgICAgIC8vIE9QVElNSVpFOiBXZSBhcmUgcHJvYmFibHkgcnVubmluZyB0byBtYW55IHRpbWVzIGFuZCBjb3VsZCBkbyB0aGlzIGJldHRlclxuICAgICAgICAgICAgaWYoIWZvdkdyaWQuaW5Cb3VuZHNYWShzY3JlZW5Qb2ludC54LCBzY3JlZW5Qb2ludC55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUG9pbnQpXG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29sdW1uL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IChjb2x1bW4gKyAxKS9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBtaWRkbGUgPSAoc3RhcnQgKyBlbmQpIC8gMlxuXG4gICAgICAgICAgICAvLyB0ZXN0IGZvciB2aXNpYmxpdHlcbiAgICAgICAgICAgIGxldCB2aXNpYmlsaXR5ID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZWRnZXMgYXJlIGNsZWFyIG9yIG5vdFxuICAgICAgICAgICAgbGV0IHN0YXJ0Q2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgbWlkZGxlQ2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgZW5kQ2xlYXIgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYnVpbHQgc29tZSBzaGFkb3cgcmFuZ2VzXG4gICAgICAgICAgICBpZihzaGFkb3dSYW5nZXMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgYW55IHNoYWRvd3MgY3Jvc3Mgb3VyIHRocmVlIHBvaW50c1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5mb3JFYWNoKCAoc3I6IFNoYWRvd1JhbmdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q2xlYXIgPSBzdGFydENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZUNsZWFyID0gbWlkZGxlQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBtaWRkbGUpXG4gICAgICAgICAgICAgICAgICAgIGVuZENsZWFyID0gZW5kQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBlbmQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB2aXNpYmlsaXR5IGJhc2VkIG9mZiBvZiBvdXIgc2FtcGxpbmdcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gbWlkZGxlQ2xlYXIgJiYgKHN0YXJ0Q2xlYXIgfHwgZW5kQ2xlYXIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdlIGJsb2NrIHNpZ2h0LCBjYWxjdWxhdGUgb3VyIHNoYWRvdyBlbmRzXG4gICAgICAgICAgICBpZih0aWxlLmJsb2NrU2lnaHQpe1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5wdXNoKHtzdGFydCwgZW5kfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm92Q2VsbC52aXNpYmxlID0gdmlzaWJpbGl0eVxuICAgICAgICAgICAgaWYoZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICB0aWxlLmV4cGxvcmVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjYWxjdWxhdGVGT1YgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIC8vIGJlIGRlZmF1bHQgd2UgYXJlIGdvaW5nIHRvIHNoYWRvd0Nhc3RcbiAgICAvLyBieSBkZWZhdWx0IGV2ZXJ5dGhpbmcgaXMgbm90IHZpc2libGVcbiAgICBmb3ZHcmlkLmZvckVhY2goKGNlbGwpOiB2b2lkID0+IHsgY2VsbC52aXNpYmxlID0gZmFsc2UgfSlcbiAgICAvLyBOTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgLTEpXG4gICAgLy8gV05XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAtMSlcbiAgICAvLyBXU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIDEpXG4gICAgLy8gU1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIDEpXG4gICAgLy8gU1NFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgMSlcbiAgICAvLyBFU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgMSlcbiAgICAvLyBFTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgLTEpXG4gICAgLy8gTk5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgLTEpXG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZUZPViwgRk9WQ2VsbH0iLCIvLyBPUklHSU5BTFxuLy8gY29uc3QgU0VUVElOR1MgPSB7XG4vLyAgICAgVElMRV9XSURUSDogMTAsICAgICAvLyBwaXhlbHNcbi8vICAgICBUSUxFX0hFSUdIVDogMTAsICAgIC8vIHBpeGVsc1xuLy8gICAgIE1BUF9XSURUSDogODAsICAgICAgLy8gZXZlcnl0aGluZyBlbHNlIGlzIGluIHRpbGVzXG4vLyAgICAgTUFQX0hFSUdIVDogNDUsXG4vLyAgICAgQ0FNRVJBX1dJRFRIOiAxMDAsXG4vLyAgICAgQ0FNRVJBX0hFSUdIVDogNzAsXG4vLyAgICAgU0NSRUVOX1dJRFRIIDoxMDAsXG4vLyAgICAgU0NSRUVOX0hFSUdIVCA6IDcwLFxuLy8gICAgIEZPVl9SQURJVVM6IDM1XG4vLyB9XG5cbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIFRJTEVfV0lEVEg6IDUsICAgICAvLyBwaXhlbHNcbiAgICBUSUxFX0hFSUdIVDogNSwgICAgLy8gcGl4ZWxzXG4gICAgTUFQX1dJRFRIOiAyMDAsICAgICAgLy8gZXZlcnl0aGluZyBlbHNlIGlzIGluIHRpbGVzXG4gICAgTUFQX0hFSUdIVDogMTMwLFxuICAgIENBTUVSQV9XSURUSDogMjEwLFxuICAgIENBTUVSQV9IRUlHSFQ6IDE0MCxcbiAgICBTQ1JFRU5fV0lEVEggOjIxMCxcbiAgICBTQ1JFRU5fSEVJR0hUIDogMTQwLFxuICAgIEZPVl9SQURJVVM6IDM1XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNFVFRJTkdTIiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBTZXRFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGFueTtcbn1cblxuaW50ZXJmYWNlIEZvckVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIE5laWdoYm9yTGlzdDxUPiB7XG4gICAgdXA6IFQgfCBudWxsO1xuICAgIGxlZnQ6IFQgfCBudWxsO1xuICAgIHJpZ2h0OiBUIHwgbnVsbDtcbiAgICBkb3duOiBUIHwgbnVsbDtcbiAgICBuZWlnaGJvcnM6IFRbXTtcbn1cblxuLy8gVE9ETzogZ2l2ZSBncmlkcyB0aGVpciBvd24geCBhbmQgeXMsIHRoYXQgd2F5IHRoZXkgY2FuIGltcGxlbWVudCBhbGwgdGhlIHBvaW50IGFuZCByZWN0IHN0dWZmXG4vKipcbiAqIEdyaWQgdG8gcmVwcmVzZW50IDJkIGNvbGxlY3Rpb25zLCBwbGVhc2UgZG9uJ3QgcmVzaXplIGl0IGFmdGVyIGNyZWF0aW5nIGl0XG4gKi9cbmNsYXNzIEdyaWQ8VD4gaW1wbGVtZW50cyBJUmVjdCB7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB5OiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBjZWxsczogVFtdO1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKXtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmNlbGxzLmxlbmd0aCA9IHdpZHRoICogaGVpZ2h0XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiBvZiB0aGUgZ3JpZCwgb3ZlcndyaXRlcyBwcmV2aW91cyBlbnRyaWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGVudHJ5LCBkb24ndCB1c2UgdGhpcyB1bmxlc3MgZW50cmllcyBhcmUgaW5kZXBlbmRlbnQgZnJvbSBlYWNoIG90aGVyXG4gICAgICogQHBhcmFtIGZuIHRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGNlbGwgaXRzZWxmIGFzIHRoZSBmaXJzdCBwcm9wZXJ0eSBhbmQgXG4gICAgICovXG4gICAgc2V0RWFjaChmbjogU2V0RWFjaEZuPFQ+KTogR3JpZDxUPntcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIHNvbWV0aGluZyBmb3IgZWFjaCBtZW1iZXIgb2YgYSBjZWxsLCBnb2luZyByb3cgYnkgcm93IGZyb20gbGVmdCB0byByaWdodFxuICAgICAqIEBwYXJhbSBmbiBHZXQgcGFzc2VkIHRoZSBjZWxsLCBpbmRleCwgeCBhbmQgeVxuICAgICAqL1xuICAgIGZvckVhY2goZm46IEZvckVhY2hGbjxUPik6IHZvaWR7XG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKXtcbiAgICAgICAgICAgICAgICBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0geCB4IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAcGFyYW0geSB5IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKi9cbiAgICBnZXRYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQgIHtcbiAgICAgICAgaWYoIXRoaXMuaW5Cb3VuZHNYWSh4LHkpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm91bmRhcnkgYWNjZXNzIGlzc3VlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1t4ICsgeSAqIHRoaXMud2lkdGhdXG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ2V0WFkuIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHBvaW50IGNvbnRhaW5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSBjZWxsIHlvdSB3YW50IHRvIGdldFxuICAgICAqL1xuICAgIGdldFAocG9pbnQ6IElQb2ludCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRYWShwb2ludC54LCBwb2ludC55KVxuICAgIH1cblxuICAgIGluQm91bmRzWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFue1xuICAgICAgICBpZih4IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2VsbCBiYXNlZCBvZmYgb2YgYW4gaW5kZXgsIHVzdWFsbHkgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZm9yRWFjaCBsb29wIG9mIGEgc2ltaWxhcmx5IHNpemVkIGdyaWRcbiAgICAgKiBOT1RFIGJlIGNhcmVmdWwgdGhhdCB0aGUgb3RoZXIgZ3JpZCBoYXMgdGhlIHNhbWUgZGltZW5zaW9uIHVubGVzcyB5b3UgcmVhbGx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGNlbGxzLCBtb3N0bHkgdG8gYmUgdXNlZCB3aXRoIGdyaWRzIHRoYXQgYXJlIHdvcmtpbmcgYWxvbmdzaWRlIGEgZGlmZmVyZW50IGZvckVhY2ggbG9vcFxuICAgICAqL1xuICAgIGdldEkoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpbmRleF1cbiAgICB9XG5cbiAgICBnZXROZWlnaGJvcnNYWSh4Om51bWJlciwgeTogbnVtYmVyKTogTmVpZ2hib3JMaXN0PFQ+IHtcbiAgICAgICAgY29uc3QgbGlzdDogTmVpZ2hib3JMaXN0PFQ+ID0ge1xuICAgICAgICAgICAgdXA6IG51bGwsXG4gICAgICAgICAgICBkb3duOiBudWxsLFxuICAgICAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JzOltdXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHgseSAtIDEpKXtcbiAgICAgICAgICAgIGxpc3QudXAgPSB0aGlzLmdldFhZKHgsIHkgLSAxKVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LnVwKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaW5Cb3VuZHNYWSh4LHkgKyAxKSl7XG4gICAgICAgICAgICBsaXN0LmRvd24gPSB0aGlzLmdldFhZKHgsIHkgKyAxKVxuICAgICAgICAgICAgbGlzdC5uZWlnaGJvcnMucHVzaChsaXN0LmRvd24pXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pbkJvdW5kc1hZKHggLSAxLHkpKXtcbiAgICAgICAgICAgIGxpc3QubGVmdCA9IHRoaXMuZ2V0WFkoeCAtIDEsIHkpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QubGVmdClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmluQm91bmRzWFkoeCArIDEseSkpe1xuICAgICAgICAgICAgbGlzdC5yaWdodCA9IHRoaXMuZ2V0WFkoeCArIDEsIHkpXG4gICAgICAgICAgICBsaXN0Lm5laWdoYm9ycy5wdXNoKGxpc3QucmlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0ID0gKGttOiBLZXlib2FyZE1vbml0b3IsIHBsYXllcjogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgIH1cbiAgICAvLyBxdWljayBudW1iZXIgZ2VuZXJhdG9yXG4gICAgaWYoIWttLmdldEtleVN0YXRlKCduJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnbicpLmhhbGZTdGVwcyA+IDApKXtcbiAgICAgICAgY29uc3Qgc2VlZCA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKVxuICAgICAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICB9XG59IiwiY2xhc3MgSURNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGxhc3RJZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGFzdElkID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5leHQgaWRcbiAgICAgKi9cbiAgICBuZXh0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZCsrXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IElEX01BTkFHRVJcbiAqL1xuY29uc3QgSURfTUFOQUdFUiA9IG5ldyBJRE1hbmFnZXIoKVxuZXhwb3J0IHtJRF9NQU5BR0VSLCBJRE1hbmFnZXJ9IiwiaW50ZXJmYWNlIEtleVN0YXRlIHsgXG4gICAga2V5OiBzdHJpbmc7XG4gICAgaXNEb3duOiBib29sZWFuO1xuICAgIGhhbGZTdGVwczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY29uc3QgbWFrZUtleVN0YXRlID0gKGtleTogc3RyaW5nLCBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaGFsZlN0ZXBzOiBudW1iZXIgPSAwKTogS2V5U3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBoYWxmU3RlcHNcbiAgICB9XG59XG5cbmNsYXNzIEtleWJvYXJkTW9uaXRvciB7XG4gICAga2V5SGFzaDogSGFzaDxLZXlTdGF0ZT47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlIYXNoID0ge31cbiAgICB9XG4gICAgLy8gQXR0YWNoIHRvIHRoZSBET00sIHVzdWFsbHkgdGhlIGRvY3VtZW50IGFzIGEgd2hvbGUsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgbW9yZSBzcGVjaWZpYyBpZiB5b3Ugd2FudFxuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBLZXlib2FyZE1vbml0b3Ige1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXksIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZigha2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoa2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0S2V5U3RhdGUoa2V5OiBzdHJpbmcpOiBLZXlTdGF0ZXtcbiAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlIYXNoW2tleV1cbiAgICB9XG4gICAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5SGFzaClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleXNbaV1dLmhhbGZTdGVwcyA9IDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSIsIi8vIExldCdzIGdvIGFoZWFkIGFuZCBjcmVhdGUgdGhlIFBvaW50IGludGVyZmFjZSBoZXJlLCB3ZSdsbCBleHBvcnQgaXQgZm9yIHVzZSBsYXRlciBpbiB0aGUgcHJvamVjdFxuXG5pbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG4vKipcbiAqIENsYXNzIHRvIGhlbHAgbW9uaXRvciB0aGluZ3MgdGhhdCBoYXZlIGhhcHBlbmVkIHRvIHRoZSBtb3VzZSBzaW5jZSBsYXN0IHRpbWUgdGhhdCB3ZSBsb29rZWRcbiAqL1xuXG5pbnRlcmZhY2UgSGFsZkNsaWNrIHtcbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIGlzRG93bjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTW91c2VNb25pdG9yIHtcbiAgICAvKipcbiAgICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlIG92ZXIgdGhlIGF0dGFjaGVkIGVsZW1udFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IHRpbWUgd2UgbG9va2VkXG4gICAgICovXG4gICAgaGFzTW92ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IGluc2lkZSB0aGUgY29udGFpbmVyIFxuICAgICAqL1xuICAgIGluQ29udGFpbmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogaXMgdGhlIG1vdXNlIGJ1dHRvbiBkb3duIChjdXJyZW50bHkgb25seSB0cmFja3MgbGVmdClcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZ1bGwgY2xpY2sgaXMgdXAgYW5kIGRvd24sIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVwcyBhbmQgZG93bnMsIHVzZWZ1bCBmb3IgZHJhZ3Mgb3Igb3RoZXIgdGhpbmdzIHRoYXQgbWlnaHQgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgKi9cbiAgICBoYWxmQ2xpY2tzOiBIYWxmQ2xpY2tbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmhhbGZDbGlja3MgPSBbXVxuICAgICAgICAvLyBUT0RPOiBBZGQgY2xpY2sgdHJhY2tpbmcsIGRlcGVuZHMgb24gaG93IHF1aWNrbHkgd2UgYXJlIHBvbGxpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50IHlvdSB3YW50IHRvIG1vbml0b3IgbW91c2UgcmVsYXRlZCBldmVudHMgdG9cbiAgICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgcGFydGljdWxhciBtb3VzZSBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBNb3VzZU1vbml0b3Ige1xuICAgICAgICAvLyBUT0RPOiBXZSdsbCByZWdpc3RlciBjbGljayBoaXN0b3J5IGluIHRoZSBmdXR1cmUsIGZvciBub3cgd2UgYXJlIGp1c3QgZG9pbmcgbW91c2Ugb3ZlciBhdCBwcmVzZW50XG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBQb2ludC5zZXQodGhpcy5wb3NpdGlvbiwgZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBlbnRlcnMgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgbW92ZXMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgZXhpdHMgdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcmFpc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogZmFsc2UgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHRoYXQgd2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBldmVudHMgc2luY2Ugb3VyIGxhc3QgcG9sbCBvZiBzdGF0ZSBhbmQgaXQgY2FuIGJlIHJlc2V0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZHtcbiAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBoYXZlbid0IG1vdmVkIGJlZm9yZVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBjbGlja3NcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLmxlbmd0aCA9IDBcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlTW9uaXRvciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IElFbGxpcHNlLCBFbGxpcHNlIH0gZnJvbSAnLi9zaGFwZXMvZWxsaXBzZSdcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJztcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncyc7XG5cbmNvbnN0IGxvZyA9IChxOmFueSk6IGFueSA9PiB7IGNvbnNvbGUubG9nKCdcXG4nLCBxKTsgcmV0dXJuIHEgfVxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgU0VDVElPTl9DT1VOVDoxMCxcbiAgICBNQVJHSU5TOiAxMFxufVxuXG5jb25zdCBwbGFjZUFzdGVyb2lkQ2h1bmsgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGVsbGlwc2U6IElFbGxpcHNlKTogdm9pZCA9PiB7XG4gICAgdGlsZUdyaWQuZm9yRWFjaCgodGlsZTogVGlsZSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgaWYoRWxsaXBzZS5jb250YWluc1hZKGVsbGlwc2UsIHgseSkpe1xuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSB0cnVlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSB0cnVlXG4gICAgICAgICAgICB0aWxlLmNvbnRhaW5lZCA9IHRydWVcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5mdW5jdGlvbiAqIHByb2dyZXNzaXZlTWFwR2VuZXJhdG9yKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tczogSVJlY3RbXSwgZGVidWdHcmlkOiBHcmlkPElSZW5kZXJDZWxsPik6IGFueXtcblxuICAgIGNvbnN0IGNsZWFyRGVidWcgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGlmKERFQlVHLkRFQlVHX0RSQVcpeyAvLyBwcmV2ZW50IHRoaXMgb3BlcmF0aW9uIGlmIHdlIGFyZSBub3QgZHJhd2luZ1xuICAgICAgICAgICAgZGVidWdHcmlkLmZvckVhY2goKGRnYyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGRnYy5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZXQncyBwbGFjZSBzb21lIGluaXRpYWwgYXN0ZXJvaWQgYnVtcHNcbiAgICAvLyBMZXQncyBwcm9ncmVzc2l2ZWx5IGRyYXcgdGhlIHNlY3Rpb25zXG5cbiAgICAvL3lpZWxkIC8vIGdpdmUgdXMgYSBwbGFjZSB0byBzdG9wXG5cbiAgICBsb2coXCJCRUdJTiBNQVBcIilcbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0KTogdm9pZCA9PiB7XG4gICAgICAgIHQuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgdC5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgdC5jb250YWluZWQgPSBmYWxzZVxuICAgICAgICB0LmV4cGxvcmVkID0gdHJ1ZSAvLyByZW1vdmUgbGF0ZXJcbiAgICB9KVxuICAgIC8veWllbGRcblxuICAgIGNvbnN0IE1BUkdJTlMgPSBzZXR0aW5ncy5NQVJHSU5TXG4gICAgY29uc3QgTUlOX0RJTUVOU0lPTiA9IE1hdGgubWluKHRpbGVHcmlkLndpZHRoLCB0aWxlR3JpZC5oZWlnaHQpXG4gICAgY29uc3QgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTID0gTWF0aC5mbG9vcigoTUlOX0RJTUVOU0lPTiAtIE1BUkdJTlMgKiAyKS8yKVxuICAgIGNvbnN0IE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUyA9IE1hdGguZmxvb3IoTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTICogMC43KVxuICAgIGNvbnN0IGFzdGVyb2lkRWxsaXBzZXMgPSBbXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5TRUNUSU9OX0NPVU5UOyBpKyspe1xuICAgICAgICBjb25zdCB4UmFkaXVzID0gUkFORE9NLm5leHRJbnQoTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTLCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMpXG4gICAgICAgIGNvbnN0IHlSYWRpdXMgPSBSQU5ET00ubmV4dEludChNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMsIE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUylcbiAgICAgICAgY29uc3QgYmlnUmFkaXVzID0gTWF0aC5tYXgoeFJhZGl1cywgeVJhZGl1cylcbiAgICAgICAgY29uc3QgeCA9IFJBTkRPTS5uZXh0SW50KE1BUkdJTlMgKyBiaWdSYWRpdXMsIHRpbGVHcmlkLndpZHRoIC0gTUFSR0lOUyAtIGJpZ1JhZGl1cylcbiAgICAgICAgY29uc3QgeSA9IFJBTkRPTS5uZXh0SW50KE1BUkdJTlMgKyBiaWdSYWRpdXMsIHRpbGVHcmlkLmhlaWdodCAtIE1BUkdJTlMgLSBiaWdSYWRpdXMpXG4gICAgICAgIGNvbnN0IGVsbGlwc2UgPSBFbGxpcHNlLm1ha2UoeCx5LHhSYWRpdXMseVJhZGl1cywgUkFORE9NLm5leHQoKSAqIE1hdGguUEkgKiAyKVxuICAgICAgICBhc3Rlcm9pZEVsbGlwc2VzLnB1c2goZWxsaXBzZSlcbiAgICAgICAgcGxhY2VBc3Rlcm9pZENodW5rKHRpbGVHcmlkLCBlbGxpcHNlKVxuICAgICAgICBpZihERUJVRy5ERUJVR19EUkFXKXtcbiAgICAgICAgICAgIGNsZWFyRGVidWcoKVxuICAgICAgICAgICAgLy8gVE9ETzogb3B0aW1pemUgdGhpcyBzdGV1cFxuICAgICAgICAgICAgZGVidWdHcmlkLmZvckVhY2goKGNlbGw6IElSZW5kZXJDZWxsLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKEVsbGlwc2UuY29udGFpbnNYWShlbGxpcHNlLCB4LHkpKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuREVCVUdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8veWllbGRcbiAgICB9XG4gICAgY2xlYXJEZWJ1ZygpXG4gICAgbG9nKFwiQVNURVJPSUQgU0hFTEwgQ09NUExFVEVcIilcbiAgICAvL3lpZWxkXG4gICAgbG9nKFwiQkVHSU4gUk9PTSBQTEFDRU1FTlRcIilcbiAgICBsb2coXCJQSUNLIEEgU1BPVCBPTiBUSEUgRURHRVwiKVxuICAgIC8vIEhPVyBETyBXRSBGSU5EIEVER0VTXG4gICAgLy8gV0UgTE9PSyBGT1IgU1BBQ0VTIFdJVEggRURHRVMgVEhBVCBUT1VDSCBPVVRTSURFIFNQQUNFXG5cbiAgICBjb25zdCBvdXRsaW5lQ2VsbHM6IFRpbGVbXSA9IFtdXG4gICAgdGlsZUdyaWQuZm9yRWFjaCgodGlsZTogVGlsZSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgLy8gY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgY29uc3QgbmVpZ2hib3JzPSB0aWxlR3JpZC5nZXROZWlnaGJvcnNYWSh4LHkpXG4gICAgICAgIGlmKHRpbGUuY29udGFpbmVkICYmIG5laWdoYm9ycy5uZWlnaGJvcnMuc29tZSgodDogVGlsZSk6IGJvb2xlYW4gPT4gIXQuY29udGFpbmVkKSl7XG4gICAgICAgICAgICBvdXRsaW5lQ2VsbHMucHVzaCh0aWxlKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBpZihERUJVRy5ERUJVR19EUkFXKXtcbiAgICAgICAgb3V0bGluZUNlbGxzLmZvckVhY2goKG9jOiBUaWxlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkY2VsbCA9IGRlYnVnR3JpZC5nZXRYWShvYy54LG9jLnkpXG4gICAgICAgICAgICBkY2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuREVCVUdcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgbG9nKFwiRVNUQUJMSVNIIE9VVExJTkVcIilcbiAgICAvL3lpZWxkXG4gICAgbG9nKFwiUElDS0lORyBBIFNQT1QgT0YgVEhFIE9VVExJTkVTIFRPIEJFIE9VUiBFTlRSWSBQT0lOVFwiKVxuICAgIC8vIExpdHRsZSBoZWxwZXIgbWVzc2FnZSBoZXJlIGZvciBtZVxuICAgIGNvbnN0IGRyYXdEZWJ1Z1N0cmluZyA9IChtZXNzYWdlOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50WCA9IHhcbiAgICAgICAgbGV0IGN1cnJlbnRZID0geVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBtZXNzYWdlW2ldXG4gICAgICAgICAgICBpZihkZWJ1Z0dyaWQuaW5Cb3VuZHNYWShjdXJyZW50WCwgY3VycmVudFkpICYmIGxldHRlciAhPSAnXFxuJyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZGVidWdHcmlkLmdldFhZKGN1cnJlbnRYLGN1cnJlbnRZKVxuICAgICAgICAgICAgICAgIHRhcmdldC5jaGFyYWN0ZXIgPSBsZXR0ZXJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYmFja0NvbG9yID0gJyNGRkZGRkYnXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvcmVDb2xvciA9ICcjMDAwMDAwJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGV0dGVyICE9PSAnXFxuJyl7XG4gICAgICAgICAgICAgICAgY3VycmVudFgrK1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50WSsrXG4gICAgICAgICAgICAgICAgY3VycmVudFggPSB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdXRsaW5lRW50cnlQb2ludCA9IG91dGxpbmVDZWxsc1tSQU5ET00ubmV4dEludCgwLCBvdXRsaW5lQ2VsbHMubGVuZ3RoIC0gMSldXG4gICAgaWYoREVCVUcuREVCVUdfRFJBVyl7XG4gICAgICAgIC8vIGxldCdzIGRyYXcgYSBzcG90IGZvciB0aGUgbGluZSB0byBzaG93IHVwXG4gICAgICAgIGNvbnN0IGRjZWxsID0gZGVidWdHcmlkLmdldFhZKG91dGxpbmVFbnRyeVBvaW50Lngsb3V0bGluZUVudHJ5UG9pbnQueSlcbiAgICAgICAgZGNlbGwuYmFja0NvbG9yID0gJyNGRkZGRkYnXG4gICAgICAgIGRyYXdEZWJ1Z1N0cmluZygnRW50cnkgUG9pbnQnLCBvdXRsaW5lRW50cnlQb2ludC54ICsgMSwgb3V0bGluZUVudHJ5UG9pbnQueSAtIDEpXG4gICAgfVxuICAgIC8vIFRoaXMgaXMgd2hlcmUgdGhpcyB3aWxsIHN0YXJ0XG4gICAgLy8gQUxTTywgVE9ETzogYXV0b21hdGljYWxseSBhY2NvbW9kYXRlIGZvciB0aGUgZmFjdCB0aGF0IHdlIGFyZSBub3QgXG4gICAgY29uc29sZS5sb2cob3V0bGluZUVudHJ5UG9pbnQpXG4gICAgXG4gICAgLy8gYnVpbGQgYSBtYWpvciBwaWVjZVxuICAgIC8vIGJ1aWxkIGEgc21hbGwgcm9vbSBhcm91bmQgdGhhdCBzZWN0aW9uLCB0aGlzIGlzIGFuIGFpcmxvY2ssIHRoaXMgaXMgcm9vbSAxXG4gICAgLy8gd2UgY291bGQgYWxzbyB1c2UgdGhpcyBwcm9jZXNzIHRvIHBpY2sgbXVsdGlwbGUgc2VjdGlvbnMgYXMgYWlybG9ja3NcbiAgICAvLyBvbmNlIHdlIGhhdmUgdGhhdCB3ZSdsbCB0cnkgYW5kIHBsYWNlIGVzc2VudGlhbCByb29tcyBpbnRvIHRoZSBhc3Rlcm9pZFxuICAgIFxuXG4gICAgbG9nKFwiRE9ORVwiKVxufVxuXG5leHBvcnQgeyBwcm9ncmVzc2l2ZU1hcEdlbmVyYXRvciB9IiwibGV0IF9pZCA9IDBcbmNvbnN0IG5leHRJZCA9ICgpOiBudW1iZXIgPT4gX2lkKytcblxuLy8gVE9ETzogTWFrZSBtZXNzYWdlcyBlbnVtcz9cblxuLy8gVE9ETzogTWFrZSBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uXG50eXBlIFN1YnNjcmliZXJGdW5jdGlvbiA9IChtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpID0+IHZvaWRcblxuaW50ZXJmYWNlIFN1YnNjcmliZXJOb2RlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb247XG4gICAgcHJpb3JpdHk6IG51bWJlcjtcbiAgICBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG59XG5cblxuXG5jb25zdCBtYWtlU3ViTm9kZSA9IChzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCwgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsID0gbnVsbCk6IFN1YnNjcmliZXJOb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmV4dElkKCksXG4gICAgICAgIHN1YkZuLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbmV4dFxuICAgIH1cbn1cblxuLy8gVE9ETzogPz8gTWFrZSBpdCBzbyBhIHN1YnNjcmliZXIgbGlzdCBjb3VsZCBiZSBkZWFmZW5lZC9saXN0ZW4/XG5cbi8qKlxuICogQSBncm91cCBvZiBmdW5jdGlvbnMsIHNvcnRlZCBieSBwcmlvcml0eSwgd2hpY2ggd2lsbCBiZSBjYWxsZWQgc2VxdWVudGlhbGx5IHdoZW4gdGhlIGxpc3QgaXMgbm90aWZpZWQgb2YgYSBuZXcgbWVzc2FnZVxuICovXG5jbGFzcyBQcmlvcml0eVN1YnNjcmliZXJMaXN0IHtcbiAgICByb290OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgdGFpbDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbFxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBtZXNzYWdlcyB0aGF0IGdldCBzZW50IHRvIHRoaXMgbGlzdCB2aWEgdGhlIG5vdGlmeSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbWVzc2FnZSBvYmplY3Qgd2hlbmV2ZXIgdGhpcyBzdWJzY3JpYmVyIGxpc3QgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LCB0aGUgZWFybGllciBpdCB3aWxsIHJ1biwgaWYgaXQgaGFzIHRoZSBzYW1lIHByaW9yaXR5IHRoZSBvbmUgdGhhdCB3YXMgYWRkZWQgZmlyc3Qgd2lsbCBmaXJlIGZpcnN0XG4gICAgICovXG4gICAgc3Vic2NyaWJlKGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVye1xuICAgICAgICAvLyBDYXNlICMxIEVtcHR5IFN1YnNjcmliZXIgTGlzdFxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHkpXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnJvb3RcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgfSBcbiAgICAgICAgLy8gQ2FzZSAjMiBXZSBhbHJlYWR5IGhhdmUgc29tZSBzdWJzY3JpYmVyc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3QgLy8gd2Uga25vdyBpdCBzaG91bGQgYmUgYSBTdWJzY3JpYmVyIE5vZGUgYW5kIG5vdCBudWxsLCBiZWNhdXNlIHdlIGFyZSBoZXJlXG5cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSwgbmV3IHJvb3RcbiAgICAgICAgICAgIGlmKHByaW9yaXR5IDwgdHJhdmVsbGVyIS5wcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0aGlzLnJvb3QpXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vcm1hbCBjYXNlIHdlIGhhdmUgb3RoZXIgdGhpbmdzIHRvIHdvcnJ5IGFib3V0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgJiYgdHJhdmVsbGVyLm5leHQgJiYgdHJhdmVsbGVyLm5leHQucHJpb3JpdHkgPj0gcHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGVpdGhlciBmb3VuZCBhIG5vZGUgd2l0aCBsb3dlciBwcmlvcml0eSB0aGFuIHVzIG9yIHdlIGhhdmUgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgIHRyYXZlbGxlciEubmV4dCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdHJhdmVsbGVyIS5uZXh0KVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdHJhdmVsbGVycyB3YXMgdGhlIG9sZCB0YWlsXG4gICAgICAgICAgICAgICAgaWYodHJhdmVsbGVyID09PSB0aGlzLnRhaWwpe1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5leHQgb25lIGlzIHRoZSBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSB0cmF2ZWxsZXIhLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxsZXIhLm5leHQuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtb3N0IGltcG9yYW50IGluZm9ybWF0aW9uIGZvciB0aGUgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdG9waWMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHB1YnN1YiB0byByZW1pbmQgdGhlIHN1YnNjcmliZXIgb2YgdGhlIHNwZWNpZmljIHRvcGljIG9yIHN1YnRvcGljXG4gICAgICovXG4gICAgbm90aWZ5KG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290XG4gICAgICAgIHdoaWxlKHRyYXZlbGxlciAhPSBudWxsKXtcbiAgICAgICAgICAgIHRyYXZlbGxlci5zdWJGbihtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IiwiaW1wb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0gZnJvbSAnLi9wcmlvcml0eVN1YnNjcmliZXJMaXN0J1xuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBQdWJzdWIgaXMgYSB0b3BpYy1iYXNlZCBvYnNlcnZlciBwYXR0ZXJuIGltcGxlbWVudGF0aW9uIGRlc2lnbmVkIHRvIGF2b2lkIHRpZ2h0IGNvdXBsaW5nIG9mIGNvbXBvbmVudHNcbiAqL1xuY2xhc3MgUHViU3ViIHtcbiAgICB0b3BpY3M6IEhhc2g8UHJpb3JpdHlTdWJzY3JpYmVyTGlzdD47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50b3BpY3MgPSB7fVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhIG1lc3NhZ2UgdG8gYWxsIHN1YnNjcmliZXJzIHRvIGEgdG9waWNcbiAgICAgKiBAcGFyYW0gdG9waWMgVG9waWMgdG8gdXNlLCBpZiBub2JvZHkgaXMgc3Vic2NyaWJlZCB0byBpdCwgbm90aGluZyBoYXBwZW5zXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGFjdHVhbCBtZXNzYWdlIHRvIHNlbmQsIHRoaXMgY291bGQgYmUgYW55dGhpbmcsIGJ1dCBpdCdzIGEgc2luZ2xlIHRoaW5nXG4gICAgICovXG4gICAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXS5ub3RpZnkobWVzc2FnZSwgdG9waWMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgc3BlY2lmaWMgdG9waWMgd2l0aCBhIGdpdmVuIHByaW9yaXR5LCByZXR1cm5zIGFuIGlkIHRoYXQgeW91J2xsIG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gdG9waWMgdGhlIHNwZWNpZmljIHRvcGljIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSBmbiB0aGUgZnVuY3Rpb24gdG8gcmVjaWV2ZSB0aGUgc3BlY2lmaWMgbWVzc2FnZSBhbmQgdG9waWMgYmVpbmcgYnJvYWRjYXN0ZWQgdG9cbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgdGhlIHByaW9yaXR5IG9mIHRoZSBmdW5jdGlvbiB0byBzdWJzY3JpYmUgdG8sIGhpZ2hlciBudW1iZXJzIHJ1biBmaXJzdCwgdGhlIGRlZmF1bHQgaXMgemVybywgbmVnYXRpdmUgbnVtYmVycyBhcmUgYWxsb3dlZFxuICAgICAqL1xuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nLCBmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIGlmKCF0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdID0gbmV3IFByaW9yaXR5U3Vic2NyaWJlckxpc3QoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvcGljc1t0b3BpY10uc3Vic2NyaWJlKGZuLCBwcmlvcml0eSlcbiAgICB9XG59XG4vLyBPVVIgVU5JVkVSU0FMIERFRkFVTFQgUFVCU1VCXG5jb25zdCBQVUJTVUIgPSBuZXcgUHViU3ViKClcbmV4cG9ydCB7UFVCU1VCLCBQdWJTdWJ9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFJlbmRlciBDZWxsXG4gKi9cbmludGVyZmFjZSBJUmVuZGVyQ2VsbCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZzsgLy8gdGhpcyBzaG91bGQgb25seSBiZSBzdHJpbmcgb2YgbGVuZ3RoIDFcbiAgICBmb3JlQ29sb3I6IHN0cmluZztcbiAgICBiYWNrQ29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksIGNoYXJhY3RlciwgZm9yZUNvbG9yLCBiYWNrQ29sb3JcbiAgICB9XG59XG5cbmNvbnN0IFJlbmRlckNlbGwgPSB7XG4gICAgbWFrZVxufVxuXG5leHBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbH0iLCJpbXBvcnQge0lSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIEhhc2hTdHI8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5pbnRlcmZhY2UgSGFzaE51bTxUPiB7XG4gICAgW2tleTogbnVtYmVyXTogVDtcbn1cblxuY29uc3QgY29kZSA9IChjaGFyOiBzdHJpbmcpOiBudW1iZXIgPT4gY2hhci5jaGFyQ29kZUF0KDApXG5jb25zdCBDSEFSQUNURVJfSEVMUEVSOiBIYXNoU3RyPHN0cmluZz4gPSB7XG4gICAgVkVSVElDQUxfTElORTogJ+KUgicsXG4gICAgSE9SSVpPTlRBTF9MSU5FOiAn4pSAJyxcbiAgICBDUk9TU19MSU5FUzogJ+KUvCcsXG4gICAgVF9MRUZUOiAn4pSkJyxcbiAgICBUX1VQOiAn4pS0JyxcbiAgICBUX1JJR0hUOiAn4pScJyxcbiAgICBUX0RPV046ICfilKwnLFxuICAgIFRPUF9SSUdIVDogJ+KUlCcsXG4gICAgQk9UVE9NX1JJR0hUOiAn4pSMJyxcbiAgICBCT1RUT0xfTEVGVDogJ+KUkCcsXG4gICAgVE9QX0xFRlQ6ICfilJgnXG59XG5cbmNvbnN0IFRJTEVfV0lEVEggPSAxMCwgVElMRV9IRUlHSFQgPSAxMFxuXG5jb25zdCBDT0RFX1RPX1JFQ1RfSEFTSDogSGFzaE51bTxJUmVjdD4gPSB7fVxuY29uc3Qgc3BhY2VDb2RlID0gICBjb2RlKCcgJylcbmNvbnN0IGF0Q29kZSA9ICAgICAgY29kZSgnQCcpXG5jb25zdCBhQ29kZSA9ICAgICAgIGNvZGUoJ2EnKVxuY29uc3QgekNvZGUgPSAgICAgICBjb2RlKCd6JylcbmNvbnN0IEFDb2RlID0gICAgICAgY29kZSgnQScpXG5jb25zdCBaQ29kZSA9ICAgICAgIGNvZGUoJ1onKVxuXG5cbmNvbnN0IGN0cmhIZWxwZXIgPSAoY29kZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2NvZGVdID0gUmVjdC5tYWtlKHgseSwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5cbi8vIFdlIHdpbGwgZmlsbCBpbiB0aGUgb3RoZXIgY2hhcmFjdGVycyBhcyBuZWNlc3NhcnlcbkNPREVfVE9fUkVDVF9IQVNIW3NwYWNlQ29kZV0gPSBSZWN0Lm1ha2UoMCwgMCwgMTAsIDEwKVxuQ09ERV9UT19SRUNUX0hBU0hbYXRDb2RlXSA9IFJlY3QubWFrZSgwLCAxMCwgMTAsIDEwKVxuZm9yKGxldCBpID0gQUNvZGU7IGkgPD0gWkNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBBQ29kZSkgKiAxMCwgMzAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuZm9yKGxldCBpID0gYUNvZGU7IGkgPD0gekNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBhQ29kZSkgKiAxMCwgNDAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuLy8gZm9yIGJyZXZpdGllcyBzYWtlXG5jb25zdCBDSCA9IENIQVJBQ1RFUl9IRUxQRVJcbmN0cmhIZWxwZXIoY29kZShDSC5WRVJUSUNBTF9MSU5FKSwgMTQwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkhPUklaT05UQUxfTElORSksIDE1MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5DUk9TU19MSU5FUyksIDE2MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0xFRlQpLCAxNzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9VUCksIDE4MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1JJR0hUKSwgMTkwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfRE9XTiksIDIwMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfUklHSFQpLCAyMTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9NX1JJR0hUKSwgMjIwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTF9MRUZUKSwgMjMwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9MRUZUKSwgMjQwLDEwKVxuXG5cbmZ1bmN0aW9uIGRyYXdTZWN0aW9uKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0aWxlc2hlZXQ6IGFueSwgc3JjUmVjdDogSVJlY3QsIGRlc3RSZWN0OiBJUmVjdCwgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogdm9pZHtcbiAgICBjdHguY2xlYXJSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4LmRyYXdJbWFnZSh0aWxlc2hlZXQsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCwgZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcidcbiAgICBjdHguZmlsbFN0eWxlPWZvcmVDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgY3R4LmZpbGxTdHlsZT1iYWNrQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG59XG5cbmV4cG9ydCAgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgQ0hBUkFDVEVSX0hFTFBFUiwgY29kZSwgZHJhd1NlY3Rpb24gfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRk9WQ2VsbCB9IGZyb20gJy4vZm92J1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvR3JpZCA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgZW50aXRpZXM6IEVudGl0eVtdLCByZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgY2FtZXJhRnJhbWU6IElSZWN0LCBkZWJ1Z0dyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+KTogdm9pZCA9PiB7XG4gICAgLy8gcmVuZGVyR3JpZCBpcyBpbiBTQ1JFRU4gY29vcmRpbmF0ZXMsIGFuZCB3aWxsIGhhdmUgaXQncyBYWSBpZ25vcmVkIGZvciBvdXIgcHVycG9zZXNcbiAgICAvLyB0aWxlR3JpZCwgZW50aXRpZXMgYW5kIGZvdkdyaWQgYXJlIGluIFdPUkxEIGNvb3JkaW5hdGVzIGFuZCB3aWxsIGhhdmUgdGhlaXIgWFkgYW5kIHkgaWdub3JlZCBmb3Igbm93XG5cbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgcmVuZGVyR3JpZCBhbmQgdGhlIGNhbWVyYXNcbiAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICBQb2ludC5zZXQod29ybGRQLCBzY3JlZW5QLnggKyBjYW1lcmFGcmFtZS54LCBzY3JlZW5QLnkgKyBjYW1lcmFGcmFtZS55KVxuXG4gICAgICAgICAgICAvLyBMZXQncyBkbyBzb21lIGJvdW5kcyBjaGVja2luZ1xuICAgICAgICAgICAgLy8gd2Uga25vdyB0aGVzZSBwb2l0bnMgYXJlIGFsd2F5cyBpbiBjYW1lcmFzLCBzbyBuZXZlciBuZWVkIHRvIGNoZWNrIHRoYXRcbiAgICAgICAgICAgIC8vIHdlIGFyZSBnb2luZyB0byBvZmZsb2FkIHRoZSBjYXNlIG9mIGNoZWNraW5nIGlmIHRoZSByZW5kZXJHcmlkIGNhbiBmaXQgdGhlIGNhbWVyYVNpemUgZm9yIG5vd1xuICAgICAgICAgICAgLy8gc28gZm9yIG5vdyBqdXN0IGNoZWNrIGlmIHdlIGFyZSBpbnNpZGUgb2YgdGhlIHRpbGVHcmlkLCB3aGljaCBjdXJyZW50bHkgc2hvdWxkIGJlIHRoZSBzYW1lIGRpbWVuc2lvbnMgYXMgdGhlIGZvdkdyaWQsIHRob3VnaCB0aGF0IGlzIGJvdW5kIHRvIGNoYW5nZSBhcyB3ZSB0cnkgYW5kIG9wdGltaXplIHRoaW5nc1xuICAgICAgICAgICAgLy8gc29vb29vbywgbGV0J3MgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSB0aGUgdGlsZUdyaWRcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBsZXQgaXNMaXQgPSBmb3ZDZWxsLnZpc2libGUgLy8gaXQncyBsaXQgZmFtLCB3ZWxsLCBzb21lIG9mIHRoZSB0aW1lXG4gICAgICAgICAgICBsZXQgaW5Cb3VuZHMgPSB0aWxlR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSlcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lZCBvdXIgZXhwbG9yYXRpb24gc3RhdGVcbiAgICAgICAgICAgIC8vIFRoaXMgaGFzIGJldHRlciBydWxlcyB0byBiZSBmaWd1cmVkIG91dFxuICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSAnJ1xuICAgICAgICAgICAgaWYoIWluQm91bmRzKXsgLy8gdHJlYXQgZXZlcnl0aGluZyBvdXRzaWRlIG9mIHRoZSBib3VuZHMgYXMgZXhwbG9yZWQgSSBzdXBwb3NlP1xuICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHdvcmxkUC54LCB3b3JsZFAueSlcbiAgICAgICAgICAgICAgICBpZighdGlsZS5leHBsb3JlZCl7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBREQgRE9PUlNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNXYWxsID0gdGlsZS5ibG9ja01vdmUgJiYgdGlsZS5ibG9ja1NpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzR3JvdW5kID0gIWlzV2FsbCAmJiB0aWxlLmNvbnRhaW5lZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NwYWNlID0gIWlzV2FsbCAmJiAhdGlsZS5jb250YWluZWRcblxuICAgICAgICAgICAgICAgICAgICBpZihpc1NwYWNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9vdXRzaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNHcm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoaXNXYWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF93YWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgZW50aXR5LnggLSBjYW1lcmFGcmFtZS54LCBlbnRpdHkueSAtIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIG9mIHRoZSBjYW1lcmEgYm91bmRzXG4gICAgICAgIGlmKGNhbWVyYUZyYW1lLnggPD0gZW50aXR5LnggJiYgZW50aXR5LnggPD0gY2FtZXJhRnJhbWUueCArIGNhbWVyYUZyYW1lLndpZHRoIC0gMSAmJlxuICAgICAgICAgICAgY2FtZXJhRnJhbWUueSA8PSBlbnRpdHkueSAmJiBlbnRpdHkueSA8PSBjYW1lcmFGcmFtZS55ICsgY2FtZXJhRnJhbWUuaGVpZ2h0IC0gMSl7XG4gICAgICAgICAgICBjb25zdCByQ2VsbDogSVJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGw6IEZPVkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgICAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgaWYoREVCVUcuREVCVUdfRFJBVyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHJlbENhbWVyYVggPSAwOyByZWxDYW1lcmFYIDwgY2FtZXJhRnJhbWUud2lkdGg7IHJlbENhbWVyYVgrKyl7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSByZW5kZXJHcmlkIGFuZCB0aGUgY2FtZXJhc1xuICAgICAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgdGlsZUdyaWQsIGZvdkdyaWQsIGFuZCBlbnRpdGllc1xuICAgICAgICAgICAgICAgIFBvaW50LnNldCh3b3JsZFAsIHNjcmVlblAueCArIGNhbWVyYUZyYW1lLngsIHNjcmVlblAueSArIGNhbWVyYUZyYW1lLnkpXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJDZWxsICA9IHJlbmRlckdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgICAgIGlmKGRlYnVnR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWJ1Z0NlbGwgPSBkZWJ1Z0dyaWQuZ2V0UCh3b3JsZFApXG4gICAgICAgICAgICAgICAgICAgIGlmKGRlYnVnQ2VsbC5iYWNrQ29sb3IgIT0gQ09MT1JTLmJsYWNrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gZGVidWdDZWxsLmJhY2tDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSBkZWJ1Z0NlbGwuY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmZvcmVDb2xvciA9IGRlYnVnQ2VsbC5mb3JlQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFdBUk5JTkc6IEhFUkUgVEhFUkUgQkUgRFJBR09OUywgKG9yIGluIHRoaXMgY2FzZSwgYSBsb3Qgb2YgY29kZSBJIGRvbid0dW5kZXJzdGFuZClcblxuLy8gV0UgT05MWSBXQU5UIE9ORSBSTkcgR0VORVJBVE9SIEJFQ0FVU0UgV0UgQUxXQVlTIFdBTlQgQSBTRUVEIEZPUiBJVFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTIxMjk1L3NlZWRpbmctdGhlLXJhbmRvbS1udW1iZXItZ2VuZXJhdG9yLWluLWphdmFzY3JpcHRcblxuLy8gSGFzaGluZyBmdW5jdGlvbiBmb3IgdGFraW5nIHNpbXBsZSBzdHJpbmcgYW5kIGNyZWF0aW5nIGJldHRlciBcInRydWVcIiBzZWVkc1xuLy8gSSBIQVZFIE5PIElERUEgV0hBVCBUSEUgTUFHSUMgTlVCTUVSUyBBUkUgRk9SXG5mdW5jdGlvbiB4bXVyMyhzdHI6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgaCA9IDE3NzkwMzM3MDMgXiBzdHIubGVuZ3RoIC8vIGJpdHdpc2Ugb3IgdGhlIHN0cmluZyB3aXRoIHRoaXMgcmFuZG9tIHRoaW5nXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIHN0ci5jaGFyQ29kZUF0KGkpLCAzNDMyOTE4MzUzKVxuICAgICAgICBoID0gaCA8PCAxMyB8IGggPj4+IDE5XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCk6IGFueXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTYsIDIyNDY4MjI1MDcpXG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIGggPj4+IDEzLCAzMjY2NDg5OTA5KVxuICAgICAgICByZXR1cm4gKGggXj0gaCA+Pj4gMTYpID4+PiAwXG4gICAgfVxufVxuXG50eXBlIElSYW5kb20gPSgpID0+IG51bWJlcjtcblxuLy8gR0VORVJBVE9SU1xuZnVuY3Rpb24gc2ZjMzIoYTogYW55LCBiOiBhbnksIGM6IGFueSwgZDogYW55KTogKEZ1bmN0aW9uKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBhID4+Pj0gMDsgYj4+Pj0gMDsgYyA+Pj49IDA7IGQgPj4+PSAwXG4gICAgICAgIGxldCB0ID0gKGEgKyBiKSB8IDBcbiAgICAgICAgYSA9IGIgXiBiID4+PiA5XG4gICAgICAgIGIgPSBjICsgKGMgPDwgMykgfCAwXG4gICAgICAgIGMgPSAoYyA8PCAyMSB8IGMgPj4+IDExKVxuICAgICAgICBkID0gZCArIDEgfCAwXG4gICAgICAgIHQgPSB0ICsgZCB8IDBcbiAgICAgICAgYyA9IGMgKyB0IHwgMFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICh0ID4+PiAwKSAvIDQyOTQ5NjcyOTZcbiAgICB9XG59XG5cbi8vIE9ORSBMSU5FUiBDVVJSRU5UTFkgTk9UIElOIFVTRVxuLy8gY29uc3QgTENHPSAoczogYW55KTogRnVuY3Rpb249PigpOiBhbnk9PigyKiozMS0xJihzPU1hdGguaW11bCg0ODI3MSxzKSkpLzIqKjMxO1xuXG5jb25zdCBSQU5ET00gPSB7XG4gICAgX2dlbmVyYXRvcjogKCgpOiBhbnkgPT4ge30pIGFzIEZ1bmN0aW9uLFxuICAgIHNlZWQ6IGZ1bmN0aW9uKHNlZWRTdHI6IHN0cmluZyA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKSApOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzZWVkID0geG11cjMoc2VlZFN0cilcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gc2ZjMzIoc2VlZCgpLCBzZWVkKCksIHNlZWQoKSwgc2VlZCgpKVxuICAgICAgICByZXR1cm4gc2VlZFN0clxuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oKTogYW55IHtcbiAgICAgICAgaWYodGhpcy5fZ2VuZXJhdG9yID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuc2VlZCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRvcigpXG4gICAgfSxcbiAgICBuZXh0SW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5uZXh0KCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gICAgfVxufVxuXG5leHBvcnQgeyBSQU5ET00gfSIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vcmVjdCdcblxuLyoqXG4gKiBYIGFuZCBZIGFyZSB0aGUgQ0VOVEVSIG9mIHRoZSBlbGxpcHNlICh1bmxpa2UgdGhlIHRvcCBsZWZ0IGZvciBJUmVjdClcbiAqL1xuaW50ZXJmYWNlIElFbGxpcHNlIGV4dGVuZHMgSVBvaW50IHtcbiAgICB4UmFkaXVzOiBudW1iZXI7XG4gICAgeVJhZGl1czogbnVtYmVyO1xuICAgIHJvdGF0aW9uOiBudW1iZXI7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHhSYWRpdXM6IG51bWJlciwgeVJhZGl1czogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyID0gMCk6IElFbGxpcHNlID0+IHtcbiAgICByZXR1cm4ge3gsIHksIHhSYWRpdXMsIHlSYWRpdXMsIHJvdGF0aW9ufVxufVxuXG5cbi8qKlxuICogQ29udGFpbnMgWFlcbiAqIEBwYXJhbSBlbGxpcHNlIFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgY29udGFpbnNYWSA9IChlbGxpcHNlOiBJRWxsaXBzZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhlbGxpcHNlLnJvdGF0aW9uKSwgc2luID0gTWF0aC5zaW4oZWxsaXBzZS5yb3RhdGlvbilcbiAgICBjb25zdCBkeCA9ICh4IC0gZWxsaXBzZS54KSwgZHkgPSAoeSAtIGVsbGlwc2UueSlcbiAgICBjb25zdCB0ZHggPSBjb3MgKiBkeCArIHNpbiAqIGR5LCB0ZHkgPSBzaW4gKiBkeCAtIGNvcyAqIGR5XG5cbiAgICByZXR1cm4gKCAodGR4ICogdGR4KSAvIChlbGxpcHNlLnhSYWRpdXMqIGVsbGlwc2UueFJhZGl1cykgKyAodGR5ICogdGR5KS8oZWxsaXBzZS55UmFkaXVzICogZWxsaXBzZS55UmFkaXVzKSApIDwgMVxufVxuLyoqXG4gKiBEb2VzIHRoZSBlbGxpcHNlIGNvbnRhaW4gdGhlIHBvaW50XG4gKiBAcGFyYW0gZWxsaXBzZSBcbiAqIEBwYXJhbSBwb2ludCBcbiAqL1xuY29uc3QgY29udGFpbnNQb2ludCA9IChlbGxpcHNlOiBJRWxsaXBzZSwgcG9pbnQ6IElQb2ludCk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBjb250YWluc1hZKGVsbGlwc2UsIHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8vIFxuLyoqXG4gKiBBcmUgZW5vdWdoIGNvcm5lcnMgaW5zaWRlIHRoZSBSZWN0IHRvIGJlIGNvbnNpZGVyZWQgaW5zaWRlXG4gKiBAcGFyYW0gZWxsaXBzZSBlbGxpcHNlXG4gKiBAcGFyYW0gcmVjdCByZWN0IHRvIHRlc3QgaWYgaXQncyBlZGdlcyBhcmUgaW5zaWRlIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0gdGhyZXNob2xkIGhvdyBtYW55IGNvcm5lcnMgbXVzdCBiZSBpbnNpZGUgdG8gY291bnQsIGRlZmF1bHRzIHRvIDRcbiAqL1xuY29uc3QgY29udGFpbnNSZWN0Q29ybmVycyA9IChlbGxpcHNlOiBJRWxsaXBzZSwgcmVjdDogSVJlY3QsIHRocmVzaG9sZDogbnVtYmVyID0gNCk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBjb3JuZXJzSW4gPSAwXG4gICAgY29uc3QgY29ybmVycyA9IFJlY3QuY29ybmVycyhyZWN0KVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy50cikpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMudGwpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLmJsKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy5icikpeyBjb3JuZXJzSW4rK31cbiAgICByZXR1cm4gY29ybmVyc0luID49IHRocmVzaG9sZFxufVxuXG5jb25zdCBFbGxpcHNlID0ge1xuICAgIG1ha2UsXG4gICAgY29udGFpbnNYWSxcbiAgICBjb250YWluc1BvaW50LFxuICAgIGNvbnRhaW5zUmVjdENvcm5lcnNcbn1cblxuZXhwb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciB3b3JraW5nIHdpdGggYSAyRCBQb2ludFxuICovXG5pbnRlcmZhY2UgSVBvaW50IHsgIFxuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IFBvaW50XG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4ge3gseX1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHBvaW50IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhZGRpbmcgYm90aCBvZiB0aGVtIHRvZ2V0aGVyLCBpZiB5b3Ugd2FudCB0byBhZGQgYSBwb2ludCBUTyBhbm90aGVyIHBvaW50LCB1c2UgYWRkVG9cbiAqIEBwYXJhbSBhIEZpcnN0IFBvaW50LCB1bm1vZGlmaWVkXG4gKiBAcGFyYW0gYiBTZWNvbmQgUG9pbnQsIHVubW9kaWZpZWRcbiAqL1xuY29uc3QgYWRkID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShhLnggKyBiLngsIGEueSArIGIueSlcbn1cblxuLyoqXG4gKiBBZGQgdGhlIHZhbHVlIG9mIFBvaW50IGEgdG8gUG9pbnQgYlxuICogQHBhcmFtIGEgVGhlIHBvaW50IHRoYXQgY2hhbmdlcywgd2lsbCBoYXZlIGIgYWRkZWQgdG8gaXRcbiAqIEBwYXJhbSBiIFRoZSBwb2ludCB3aG9zZSB2YWx1ZSBpcyBhZGRlZCB0byB0aGUgb3RoZXIsIGl0IGlzIHVubW9kaWZpZWQgaXRzZWxmXG4gKi9cbmNvbnN0IGFkZFRvID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICBhLnggKz0gYi54XG4gICAgYS55ICs9IGIueVxuICAgIHJldHVybiBhXG59XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZXMgb2YgYSBwb2ludCB3aXRoIHggYW5kIHkgdmFsdWVzLCByZXR1cm5zIHRoZSBub3cgbW9kaWZpZWQgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBwb2ludCB0byBiZSBtb2RpZmllZFxuICogQHBhcmFtIHggbmV3IHggdmFsdWVcbiAqIEBwYXJhbSB5IG5ldyB5IHZhbHVlXG4gKi9cbmNvbnN0IHNldCA9IChwb2ludDogSVBvaW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcG9pbnQueCA9IHhcbiAgICBwb2ludC55ID0geVxuICAgIHJldHVybiBwb2ludFxufVxuXG4vKipcbiAqIENvcHkgYSBwb2ludFxuICogQHBhcmFtIHBvaW50IFBvaW50IHRoYXQgd2lsbCBiZSBjb3BpZWRcbiAqL1xuY29uc3QgY29weSA9IChwb2ludDogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShwb2ludC54LCBwb2ludC55KVxufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgbWVhbnQgdG8gd29yayB3aXRoIHRoaW5ncyB0aGF0IGhhdmUgdGhlIElQb2ludCBpbnRlcmZhY2VcbiAqL1xuY29uc3QgUG9pbnQgPSB7XG4gICAgbWFrZSxcbiAgICBhZGQsXG4gICAgYWRkVG8sXG4gICAgc2V0LFxuICAgIGNvcHlcbn1cblxuZXhwb3J0IHtJUG9pbnQsIFBvaW50fSIsImltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9wb2ludCdcbmludGVyZmFjZSBJUmVjdCBleHRlbmRzIElQb2ludCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0U2lkZXMge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RDb3JuZXJzIHtcbiAgICB0bDogSVBvaW50O1xuICAgIHRyOiBJUG9pbnQ7XG4gICAgYmw6IElQb2ludDtcbiAgICBicjogSVBvaW50O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY3RhbmdsZVxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqIEBwYXJhbSB3aWR0aCBcbiAqIEBwYXJhbSBoZWlnaHQgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9XG59XG5cbmNvbnN0IHNldCA9IChyOiBJUmVjdCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHIueCA9IHhcbiAgICByLnkgPSB5XG4gICAgci53aWR0aCA9IHdpZHRoXG4gICAgci5oZWlnaHQgPSBoZWlnaHRcbiAgICByZXR1cm4gclxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgdW5pdCB2YWx1ZSBvZiB0aGUgc2lkZXMgb2YgdGhlIHJlY3RhbmdsZSwgbGVmdCBhbmQgcmlnaHQgcmV0dXJuIHggY29vcmRpbmF0ZXMsIHRvcCBhbmQgYm90dG9tIGluY2x1ZGUgeSBjb29yZGluYXRlc1xuICogQHBhcmFtIHJlY3QgcmVjdGFuZ2xlIHVzZWRcbiAqL1xuY29uc3Qgc2lkZXMgPSAocmVjdDogSVJlY3QpOiBJUmVjdFNpZGVzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LngsXG4gICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH1cbn1cbmNvbnN0IGNvcm5lcnMgPSAocmVjdDogSVJlY3QpOiBJUmVjdENvcm5lcnMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRsOiBQb2ludC5tYWtlKHJlY3QueCwgcmVjdC55KSxcbiAgICAgICAgdHI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55KSxcbiAgICAgICAgYmw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkgKyByZWN0LmhlaWdodCksXG4gICAgICAgIGJyOiBQb2ludC5tYWtlKHJlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjZW50ZXIgcG9pbnQ6IE5PVEU6IFRoaXMgZmluZHMgdGhlIElOVEVHRVIgY2VudGVyLCBjb29yZGluYXRlcyBhcmUgdHJ1bmNhdGVkXG4gKiBAcGFyYW0gcmVjdCBUaGUgcmVjdGFuZ2xlIHdlIGFyZSBmaW5kaW5nIHRoZSBjZW50ZXIgb2ZcbiAqL1xuY29uc3QgY2VudGVyID0gKHJlY3Q6IElSZWN0KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gUG9pbnQubWFrZShNYXRoLmZsb29yKHJlY3QueCArIHJlY3Qud2lkdGgvMiksIE1hdGguZmxvb3IocmVjdC55ICsgcmVjdC5oZWlnaHQvMikpXG59XG5cbi8vIE9QVElNSVpFOiBEb24ndCBjYWxsIHNpZGVzLCBqdXN0IHVzZSB0aGUgcmF3IG51bWJlcnMgYW5kIGFkZGl0aW9uXG5jb25zdCBpbnRlcnNlY3RzID0gKGE6IElSZWN0LCBiOiBJUmVjdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGFTaWRlcyA9IHNpZGVzKGEpXG4gICAgY29uc3QgYlNpZGVzID0gc2lkZXMoYilcbiAgICByZXR1cm4gYVNpZGVzLmxlZnQgPD0gYlNpZGVzLnJpZ2h0ICYmIGFTaWRlcy5yaWdodCA+PSBiU2lkZXMubGVmdCAmJiBcbiAgICAgICAgYVNpZGVzLnRvcCA8PSBiU2lkZXMuYm90dG9tICYmIGFTaWRlcy5ib3R0b20gPj0gYlNpZGVzLnRvcFxuXG4gICAgICAgIFxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSBhbmQgbWFuaXB1bGF0ZSByZWN0YW5nbGVzXG4gKi9cbmNvbnN0IFJlY3QgPSB7XG4gICAgbWFrZSxcbiAgICBzZXQsXG4gICAgc2lkZXMsXG4gICAgY29ybmVycyxcbiAgICBjZW50ZXIsXG4gICAgaW50ZXJzZWN0c1xufVxuXG5leHBvcnQge0lSZWN0LCBSZWN0fVxuIiwiLy8gSSBndWVzcyBldmVyeXRoaW5nIHdvdWxkIG5lZWQgaXQncyBvd24gc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uLi4gZ3Jvc3NcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgbG9jYXRpb25zIG9uIHRoZSBib2FyZCwgZXZlbnR1YWxseSB3ZSB3aWxsIHByb2JhYmx5IG1vdmUgdGhpcyBpbnRvIGl0cyBvd24gRUNTIHN5c3RlbVxuICovXG5jbGFzcyBUaWxlIHtcbiAgICAvKipcbiAgICAgKiBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBibG9ja01vdmU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRG9lcyB0aGlzIHRpbGUgYmxvY2sgbGluZSBvZiBzaWdodFxuICAgICAqL1xuICAgIGJsb2NrU2lnaHQ6IGJvb2xlYW47XG5cbiAgICBleHBsb3JlZDogYm9vbGVhbjtcblxuICAgIGNvbnRhaW5lZDogYm9vbGVhbjsgLy8gbW9kZWxzIGlmIHRoaXMgdGhpbmcgaGFzIGEgZmxvb3IgYW5kIGNlaWxpbmcsIChvciwgaW4gdW5pdmVyc2UsIHN0dWZmIHN1cnJvdW5kaW5nIGl0IG9uIHRoZSB6LWF4aXMpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgdGlsZVxuICAgICAqIEBwYXJhbSBibG9ja01vdmUgQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqIEBwYXJhbSBibG9ja1NpZ2h0IG9wdGlvbmFsLCB3aWxsIGRlZmF1bHQgdG8gd2hhdGV2ZXIgYmxvY2tNb3ZlIGlzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBibG9ja01vdmU6IGJvb2xlYW4sIGJsb2NrU2lnaHQ/OiBib29sZWFuICl7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmJsb2NrTW92ZSA9IGJsb2NrTW92ZVxuICAgICAgICB0aGlzLmV4cGxvcmVkID0gZmFsc2VcbiAgICAgICAgaWYoYmxvY2tTaWdodCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrTW92ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tTaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVkID0gdHJ1ZVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRpbGUgfSJdLCJzb3VyY2VSb290IjoiIn0=