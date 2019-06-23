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
/* harmony import */ var _mapGeneration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mapGeneration */ "./client/src/mapGeneration.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./colors */ "./client/src/colors.ts");
/* harmony import */ var _gameSettings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gameSettings */ "./client/src/gameSettings.ts");
/* harmony import */ var _handleInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./handleInput */ "./client/src/handleInput.ts");
/* harmony import */ var _renderToGrid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./renderToGrid */ "./client/src/renderToGrid.ts");
/* harmony import */ var _debugSettings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./debugSettings */ "./client/src/debugSettings.ts");




















const { TILE_WIDTH, TILE_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT, MAP_WIDTH, MAP_HEIGHT, CAMERA_WIDTH, CAMERA_HEIGHT, FOV_RADIUS } = _gameSettings__WEBPACK_IMPORTED_MODULE_16__["default"];
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
const player = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', _colors__WEBPACK_IMPORTED_MODULE_15__["default"].player);
const npc = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', _colors__WEBPACK_IMPORTED_MODULE_15__["default"].npc);
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
    return _renderCell__WEBPACK_IMPORTED_MODULE_3__["RenderCell"].make(x, y, '', _colors__WEBPACK_IMPORTED_MODULE_15__["default"].black, _colors__WEBPACK_IMPORTED_MODULE_15__["default"].black);
});
let fovRecompute = !_debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].DISABLE_FOV;
const fovGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
fovGrid.setEach(() => {
    return {
        visible: _debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].DISABLE_FOV
    };
});
const tileGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
tileGrid.setEach((cell, index, x, y) => {
    const t = new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, true);
    if (_debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].DISABLE_FOV) {
        t.explored = true;
    }
    return t;
});
// this will also populate the rooms
const rooms = [];
Object(_mapGeneration__WEBPACK_IMPORTED_MODULE_14__["mapGenerator3"])(tileGrid, rooms);
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
    if (!_debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].DISABLE_TRACKING) {
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
    if (msg.id === player.id && !_debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].DISABLE_TRACKING) {
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
Object(_assetHelper__WEBPACK_IMPORTED_MODULE_6__["loadImage"])('assets/out.png').then((image) => {
    renderer.init(canvas, image);
    // Loop
    const loop = () => {
        Object(_handleInput__WEBPACK_IMPORTED_MODULE_17__["handleInput"])(km, player);
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
                if (!tile.blockMove || (_debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].ENABLE_CLIPPING && mover.id === player.id)) {
                    mover.move(move.x, move.y);
                    if (mover.id === player.id) {
                        fovRecompute = true;
                    }
                    _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('moved', msg); // only publish move if the entity actually completed the move
                }
            }
        });
        MoveProcessor.moves.length = 0;
        if (fovRecompute && !_debugSettings__WEBPACK_IMPORTED_MODULE_19__["default"].DISABLE_FOV) {
            Object(_fov__WEBPACK_IMPORTED_MODULE_12__["calculateFOV"])(fovGrid, tileGrid, player, FOV_RADIUS);
        }
        // Convert to render format
        Object(_renderToGrid__WEBPACK_IMPORTED_MODULE_18__["renderToGrid"])(tileGrid, fovGrid, entities, renderGrid, cameraFrame);
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
    'npc': '#CC0000'
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
    ENABLE_CLIPPING: true
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

/***/ "./client/src/mapGenHelper.ts":
/*!************************************!*\
  !*** ./client/src/mapGenHelper.ts ***!
  \************************************/
/*! exports provided: MapGenHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGenHelper", function() { return MapGenHelper; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _shapes_ellipse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/ellipse */ "./client/src/shapes/ellipse.ts");


/**
 * A collection of static methods for helping to manipulate maps
 */
class MapGenHelper {
    // TODO: Maybe come up with a better name
    /**
     * Place a room inside a group of tiles
     * @param tileGrid the grid of tiles to affect
     * @param room the room section that we will open up
     */
    static createRoom(tileGrid, room) {
        // TODO: Bounds check or something, right now terrible things can happen
        const { left, right, top, bottom } = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].sides(room);
        // we need to stop one early because of how we work with a grid
        // we will also include a margin of one on all sidex
        for (let y = top + 1; y < bottom - 1; y++) {
            for (let x = left + 1; x < right - 1; x++) {
                const tile = tileGrid.getXY(x, y);
                tile.blockMove = false;
                tile.blockSight = false;
            }
        }
    }
    static createHTunnel(tileGrid, x1, x2, y) {
        // swap them as necessary
        const min = Math.min(x1, x2);
        const max = Math.max(x1, x2);
        for (let x = min; x <= max; x++) {
            const tile = tileGrid.getXY(x, y);
            tile.blockMove = false;
            tile.blockSight = false;
        }
    }
    static createHWall(tileGrid, x1, x2, y) {
        // swap them as necessary
        const min = Math.min(x1, x2);
        const max = Math.max(x1, x2);
        for (let x = min; x <= max; x++) {
            const tile = tileGrid.getXY(x, y);
            tile.blockMove = true;
            tile.blockSight = true;
        }
    }
    static createVTunnel(tileGrid, y1, y2, x) {
        const min = Math.min(y1, y2);
        const max = Math.max(y1, y2);
        for (let y = min; y <= max; y++) {
            const tile = tileGrid.getXY(x, y);
            tile.blockMove = false;
            tile.blockSight = false;
        }
    }
    static createVWall(tileGrid, y1, y2, x) {
        const min = Math.min(y1, y2);
        const max = Math.max(y1, y2);
        for (let y = min; y <= max; y++) {
            const tile = tileGrid.getXY(x, y);
            tile.blockMove = true;
            tile.blockSight = true;
        }
    }
    static carveEllipse(tileGrid, ellipse) {
        tileGrid.forEach((tile, index, x, y) => {
            if (_shapes_ellipse__WEBPACK_IMPORTED_MODULE_1__["Ellipse"].containsXY(ellipse, x, y)) {
                tile.blockMove = false;
                tile.blockSight = false;
            }
        });
    }
}



/***/ }),

/***/ "./client/src/mapGeneration.ts":
/*!*************************************!*\
  !*** ./client/src/mapGeneration.ts ***!
  \*************************************/
/*! exports provided: mapGenerator1, mapGenerator2, mapGenerator3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGenerator1", function() { return mapGenerator1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGenerator2", function() { return mapGenerator2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGenerator3", function() { return mapGenerator3; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");
/* harmony import */ var _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapGenHelper */ "./client/src/mapGenHelper.ts");
/* harmony import */ var _shapes_ellipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes/ellipse */ "./client/src/shapes/ellipse.ts");




const ROOM_MAX_SIZE = 16;
const ROOM_MIN_SIZE = 10;
const MAX_ROOMS = 40;
const MAX_ELLIPSE_RADIUS = ROOM_MAX_SIZE;
const MIN_ELLIPSE_RADIUS = ROOM_MAX_SIZE / 4;
const CAVE_ELLIPSES = 30;
const randint = (min, max) => {
    return Math.floor(_rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() * (max - min + 1)) + min;
};
const randomEllipse = (minX, maxX, minY, maxY) => {
    return _shapes_ellipse__WEBPACK_IMPORTED_MODULE_3__["Ellipse"].make(randint(minX, maxX), randint(minY, maxY), randint(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS), randint(MIN_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS), _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() * Math.PI * 2);
};
/**
 * Place a bunch of rooms opportunistically, and then carve out some ellipses randomly
 * @param tileGrid tileGrid to be populated
 * @param rooms List of rooms to be populated
 */
const mapGenerator1 = (tileGrid, rooms) => {
    for (let r = 0; r < MAX_ROOMS; r++) {
        const w = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const h = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const x = randint(0, tileGrid.width - w - 1);
        const y = randint(0, tileGrid.height - h - 1);
        const newRoom = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(x, y, w, h);
        let intersects = false;
        for (let i = 0; i < rooms.length; i++) {
            if (_shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].intersects(newRoom, rooms[i])) {
                intersects = true;
                break;
            }
        }
        if (!intersects) {
            const center = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].center(newRoom);
            _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createRoom(tileGrid, newRoom);
            if (rooms.length > 0) {
                const lastRoom = rooms[rooms.length - 1];
                const lastCenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].center(lastRoom);
                if (randint(0, 1) === 1) {
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y);
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, center.x);
                }
                else {
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, lastCenter.x);
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createHTunnel(tileGrid, lastCenter.x, center.x, center.y);
                }
            }
            rooms.push(newRoom);
        }
    }
    for (let e = 0; e < CAVE_ELLIPSES; e++) {
        _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].carveEllipse(tileGrid, randomEllipse(MAX_ELLIPSE_RADIUS, tileGrid.width - 1 - MAX_ELLIPSE_RADIUS, MAX_ELLIPSE_RADIUS, tileGrid.height - 1 - MAX_ELLIPSE_RADIUS));
    }
};
const placeAsteroidChunk = (tileGrid, ellipse) => {
    tileGrid.forEach((tile, index, x, y) => {
        if (_shapes_ellipse__WEBPACK_IMPORTED_MODULE_3__["Ellipse"].containsXY(ellipse, x, y)) {
            tile.blockMove = true;
            tile.blockSight = true;
            tile.contained = true;
        }
    });
};
const mapGenerator2 = (tileGrid, rooms) => {
    const MARGINS = 10;
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height);
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2) / 2);
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7);
    const SECTION_COUNT = 10;
    // const newRoom = Rect.make(Math.floor(tileGrid.width/2 - 10),Math.floor(tileGrid.height/2 - 10),20,20)
    // MapGenHelper.createRoom(tileGrid, newRoom)
    // rooms.push(newRoom)
    // first things first, lets layer some big asteroids on top of each other
    tileGrid.forEach((t) => {
        t.blockMove = false;
        t.blockSight = false;
    });
    // now let's build an asteroid within the bounds
    for (let i = 0; i < SECTION_COUNT; i++) {
        const xRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const yRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const bigRadius = Math.max(xRadius, yRadius);
        const x = randint(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius);
        const y = randint(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius);
        placeAsteroidChunk(tileGrid, _shapes_ellipse__WEBPACK_IMPORTED_MODULE_3__["Ellipse"].make(x, y, xRadius, yRadius, _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() * Math.PI * 2));
    }
    // now within this framework run the next map generator
    mapGenerator1(tileGrid, rooms);
};
// todo, allow us to watch this in real time, and even toggle next
const mapGenerator3 = (tileGrid, rooms) => {
    tileGrid.forEach((t) => {
        t.blockMove = false;
        t.blockSight = false;
        t.contained = false;
        t.explored = true; // remove later
    });
    const MARGINS = 10;
    const MIN_DIMENSION = Math.min(tileGrid.width, tileGrid.height);
    const MAX_ASTEROID_SECTION_RADIUS = Math.floor((MIN_DIMENSION - MARGINS * 2) / 2);
    const MIN_ASTEROID_SECTION_RADIUS = Math.floor(MAX_ASTEROID_SECTION_RADIUS * 0.7);
    const SECTION_COUNT = 10;
    const asteroidEllipses = [];
    for (let i = 0; i < SECTION_COUNT; i++) {
        const xRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const yRadius = randint(MIN_ASTEROID_SECTION_RADIUS, MAX_ASTEROID_SECTION_RADIUS);
        const bigRadius = Math.max(xRadius, yRadius);
        const x = randint(MARGINS + bigRadius, tileGrid.width - MARGINS - bigRadius);
        const y = randint(MARGINS + bigRadius, tileGrid.height - MARGINS - bigRadius);
        const ellipse = _shapes_ellipse__WEBPACK_IMPORTED_MODULE_3__["Ellipse"].make(x, y, xRadius, yRadius, _rngHelper__WEBPACK_IMPORTED_MODULE_1__["RANDOM"].next() * Math.PI * 2);
        asteroidEllipses.push(ellipse);
        placeAsteroidChunk(tileGrid, ellipse);
    }
    // we are building a square that contains all of the ellipses
    let leftX = Math.floor(tileGrid.width / 2), rightX = Math.floor(tileGrid.width / 2);
    let topY = Math.floor(tileGrid.width / 2), bottomY = Math.floor(tileGrid.width / 2);
    // we need to be able to draw this debug container
    asteroidEllipses.forEach((ellipse) => {
        const maxRadius = Math.max(ellipse.xRadius, ellipse.yRadius);
        leftX = Math.min(leftX, ellipse.x - maxRadius);
        topY = Math.min(topY, ellipse.y - maxRadius);
        rightX = Math.max(rightX, ellipse.x + maxRadius - 1);
        bottomY = Math.max(bottomY, ellipse.y + maxRadius - 1);
    });
    const boundingRect = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(leftX, topY, rightX - leftX, bottomY - topY);
    console.log(boundingRect);
    // MapGenHelper.createHWall(tileGrid, leftX, rightX, topY)
    // MapGenHelper.createVWall(tileGrid, topY, bottomY, leftX)
    // MapGenHelper.createHWall(tileGrid, leftX, rightX, bottomY)
    // MapGenHelper.createVWall(tileGrid, topY, bottomY, rightX)
    // within this, let's build rooms and stuff
    for (let r = 0; r < MAX_ROOMS; r++) {
        const w = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const h = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
        const x = randint(leftX, rightX - w - 1);
        const y = randint(topY, bottomY - h - 1);
        const newRoom = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].make(x, y, w, h);
        let intersects = false;
        for (let i = 0; i < rooms.length; i++) {
            if (_shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].intersects(newRoom, rooms[i])) {
                intersects = true;
                break;
            }
        }
        if (!intersects) {
            const center = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].center(newRoom);
            _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createRoom(tileGrid, newRoom);
            if (rooms.length > 0) {
                const lastRoom = rooms[rooms.length - 1];
                const lastCenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].center(lastRoom);
                if (randint(0, 1) === 1) {
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y);
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, center.x);
                }
                else {
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, lastCenter.x);
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createHTunnel(tileGrid, lastCenter.x, center.x, center.y);
                }
            }
            rooms.push(newRoom);
        }
    }
    // Now let's place some more ellipses
    for (let e = 0; e < CAVE_ELLIPSES; e++) {
        const ellipse = randomEllipse(Math.floor(leftX + MAX_ELLIPSE_RADIUS / 2), Math.floor(rightX - MAX_ELLIPSE_RADIUS / 2), Math.floor(topY + MAX_ELLIPSE_RADIUS / 2), Math.floor(bottomY - MAX_ELLIPSE_RADIUS / 2));
        _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].carveEllipse(tileGrid, ellipse);
    }
    // let's place some initial asteroid bumps
};



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


const renderToGrid = (tileGrid, fovGrid, entities, renderGrid, cameraFrame) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZGVidWdTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2Zvdi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9oYW5kbGVJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbmVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9tb3VzZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wdWJTdWIvcHJpb3JpdHlTdWJzY3JpYmVyTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wdWJTdWIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJDZWxsLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlclRvR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JuZ0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3NoYXBlcy9lbGxpcHNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFDVztBQUNsQjtBQUVRO0FBQ007QUFDRTtBQUNWO0FBRW5DLE1BQU0sRUFDRixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDYixHQUFHLHNEQUFRO0FBRVosc0JBQXNCO0FBQ3RCLE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQzdELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ3JDLElBQUcsQ0FBQyxPQUFPLEVBQUM7SUFDUixNQUFNLElBQUksR0FBRyxrREFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO0lBQzlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSTtJQUNsSCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQztLQUNwRDtTQUFNO1FBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTTtLQUNoQztDQUVKO0tBQU07SUFDSCxrREFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Q0FDdkI7QUFFRCxNQUFNLE1BQU0sR0FBVyxJQUFJLDhDQUFNLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnREFBTSxDQUFDLE1BQU0sQ0FBQztBQUM3RSxNQUFNLEdBQUcsR0FBVyxJQUFJLDhDQUFNLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnREFBTSxDQUFDLEdBQUcsQ0FBQztBQUN2RSxNQUFNLFFBQVEsR0FBYSxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUM7QUFFdkMsZ0RBQWdEO0FBQ2hELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQjtBQUNwRSxNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxVQUFVO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLFdBQVc7QUFFM0MsZ0NBQWdDO0FBQ2hDLE1BQU0sRUFBRSxHQUFHLElBQUksZ0VBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDakQsTUFBTSxFQUFFLEdBQUcsSUFBSSwwREFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUU1QyxpQ0FBaUM7QUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSw4REFBYyxFQUFFO0FBQ3JDLE1BQU0sV0FBVyxHQUFHLGtEQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxFQUFDLCtDQUErQztBQUUvRyx1QkFBdUI7QUFDdkIsTUFBTSxVQUFVLEdBQUcsSUFBSSwwQ0FBSSxDQUFjLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUMvRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFlLEVBQUU7SUFDL0UsT0FBTyxzREFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxnREFBTSxDQUFDLEtBQUssRUFBRSxnREFBTSxDQUFDLEtBQUssQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFFRixJQUFJLFlBQVksR0FBRyxDQUFDLHVEQUFLLENBQUMsV0FBVztBQUNyQyxNQUFNLE9BQU8sR0FBa0IsSUFBSSwwQ0FBSSxDQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUN2RixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQVksRUFBRTtJQUFHLE9BQU87UUFDcEMsT0FBTyxFQUFFLHVEQUFLLENBQUMsV0FBVztLQUM3QjtBQUFBLENBQUMsQ0FBQztBQUVILE1BQU0sUUFBUSxHQUFlLElBQUksMENBQUksQ0FBTyxTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQ2xFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQVEsRUFBRTtJQUN2RSxNQUFNLENBQUMsR0FBRyxJQUFJLDBDQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDN0IsSUFBRyx1REFBSyxDQUFDLFdBQVcsRUFBQztRQUNqQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUk7S0FDcEI7SUFDRCxPQUFPLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixvQ0FBb0M7QUFDcEMsTUFBTSxLQUFLLEdBQVksRUFBRTtBQUN6QixxRUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7QUFDOUIsZ0NBQWdDO0FBRWhDLDJJQUEySTtBQUMzSTtJQUNJLElBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDaEIsTUFBTSxPQUFPLEdBQUcsa0RBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLG1EQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsa0RBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckQsbURBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUVELDBDQUEwQztJQUMxQyxJQUFHLENBQUMsdURBQUssQ0FBQyxnQkFBZ0IsRUFBQztRQUN2QixXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7S0FDNUI7U0FBTTtRQUNILG9CQUFvQjtRQUNwQixXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDbEUsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztLQUM1QjtDQUNKO0FBRUQsZ0JBQWdCO0FBQ2hCLE1BQU0sS0FBSyxHQUFVLEVBQUU7QUFDdkIsTUFBTSxhQUFhLEdBQUc7SUFDbEIsS0FBSztDQUNSO0FBRUQscURBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFRLEVBQUU7SUFDbkMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVGLHFEQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBUSxFQUFFO0lBQ3BDLElBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsdURBQUssQ0FBQyxnQkFBZ0IsRUFBQztRQUMvQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7S0FDNUI7QUFDTCxDQUFDLENBQUM7QUFFRixxREFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQVEsRUFBRTtJQUMxQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixXQUFXLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsc0VBQXNFO0FBQ3RFLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBUyxFQUFFLGFBQXNCLElBQUksRUFBVyxFQUFFO0lBQ25FLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUcsQ0FBQyxVQUFVLEVBQUM7UUFDWCxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDO0tBQzdDO1NBQU07UUFDSCxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUM3RTtBQUNMLENBQUM7QUFHRCw4REFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFRLEVBQUU7SUFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO0lBQzVCLE9BQU87SUFDUCxNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7UUFFcEIsaUVBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO1FBRXZCLFFBQVE7UUFDUixJQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBQztZQUNoQixxREFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBQztZQUNoQixxREFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBQztZQUNoQixxREFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDaEIscURBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQztTQUN2RDtRQUVELGdCQUFnQjtRQUNoQiw0Q0FBNEM7UUFDNUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQVEsRUFBRTtZQUMzQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSztZQUN0QixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNqQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN2RCxJQUFHLENBQUMsS0FBSyxFQUFDO2dCQUNOLE9BQU07YUFDVDtZQUNELElBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ3ZELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakUsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyx1REFBSyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQztvQkFDcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUcsS0FBSyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFDO3dCQUN0QixZQUFZLEdBQUcsSUFBSTtxQkFDdEI7b0JBQ0QscURBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFDLDhEQUE4RDtpQkFDOUY7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUNGLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFFOUIsSUFBRyxZQUFZLElBQUksQ0FBQyx1REFBSyxDQUFDLFdBQVcsRUFBQztZQUNsQywwREFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQztTQUN0RDtRQUVELDJCQUEyQjtRQUMzQixtRUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7UUFDbEUsNEJBQTRCO1FBQzVCLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDaEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFM0IsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUNmLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDVixNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO0FBRXRDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLGdDQUFnQzs7Ozs7Ozs7Ozs7OztBQ3JOL0U7QUFBQTtBQUFBLFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDMUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQWlCLEVBQUUsTUFBZ0IsRUFBUSxFQUFFO1FBQzdELE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3ZCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0YsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHO0lBQ2pCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFaUI7Ozs7Ozs7Ozs7Ozs7QUNQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNFO0FBQ2xDO0FBQ0M7QUFDUjtBQUM3Qjs7O0dBR0c7QUFFSCxNQUFNLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxHQUFHLHFEQUFRO0FBRTFDLE1BQU0sY0FBYztJQUloQjtJQUNBLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBeUIsRUFBRSxXQUE2QjtRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsK0RBQStEO1FBQy9ELE1BQU0sR0FBRyxHQUFHLE1BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUcsR0FBRyxLQUFLLElBQUksRUFBQztZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUNELDJFQUEyRTtJQUMzRSxvQkFBb0I7SUFDcEIsTUFBTSxDQUFDLFVBQTZCLEVBQUUsYUFBcUIsK0NBQU0sQ0FBQyxLQUFLO1FBQ25FLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQztTQUNqRTtRQUNELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUErQjtRQUNoRCxHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVU7UUFDMUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQ2pGLCtDQUErQztRQUMvQyxxREFBcUQ7UUFDckQsTUFBTSxRQUFRLEdBQUcsaURBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FDZixJQUFpQixFQUNqQixLQUFhLEVBQ2IsQ0FBUyxFQUFFLENBQVMsRUFBUSxFQUFFO1lBQzlCLGlEQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztZQUM1RSwwR0FBMEc7WUFDMUcsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7Z0JBQzNCLElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUM7b0JBQzdCLG9KQUFvSjtvQkFDcEosSUFBRyxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUM7d0JBQ2hDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7cUJBQ2pDO29CQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDeEU7YUFDSjtpQkFBTTtnQkFDSCxNQUFNLE9BQU8sR0FBRyxnRUFBaUIsQ0FBQywyREFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsa0VBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRTthQUN6RjtRQUNMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxLQUFLO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBQztZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDO1NBQ2pFO1FBQ0QscURBQXFEO1FBQ3JELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUErQjtRQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBMkI7UUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNuRCxDQUFDO0NBRUo7QUFFd0I7Ozs7Ozs7Ozs7Ozs7QUMxRXpCO0FBQUEsTUFBTSxNQUFNLEdBQUc7SUFDWCxjQUFjLEVBQUUsU0FBUztJQUN6QixlQUFlLEVBQUUsU0FBUztJQUMxQixPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsU0FBUztJQUN0QixhQUFhLEVBQUUsU0FBUztJQUN4QixZQUFZLEVBQUUsU0FBUztJQUN2QixjQUFjLEVBQUUsU0FBUztJQUN6QixRQUFRLEVBQUUsU0FBUztJQUNuQixXQUFXLEVBQUMsU0FBUztJQUNyQixZQUFZLEVBQUUsU0FBUztJQUN2QixLQUFLLEVBQUUsU0FBUztDQUNuQjtBQUVjLHFFQUFNOzs7Ozs7Ozs7Ozs7O0FDVnJCO0FBQUEsOEdBQThHO0FBQzlHLE1BQU0sS0FBSyxHQUFrQjtJQUN6QixXQUFXLEVBQUUsS0FBSztJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxJQUFJO0NBQ3hCO0FBRWMsb0VBQUs7Ozs7Ozs7Ozs7Ozs7QUNYcEI7QUFBQTtBQUFBOzs7R0FHRztBQUNILE1BQU0sTUFBTTtJQU1SLFlBQVksRUFBVSxFQUFFLENBQVMsRUFBQyxDQUFTLEVBQUUsU0FBaUIsRUFBRSxLQUFhO1FBQ3pFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsRUFBVSxFQUFFLEVBQVU7UUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO0lBQ2hCLENBQUM7Q0FDSjtBQUVnQjs7Ozs7Ozs7Ozs7OztBQzNCakI7QUFBQTtBQUFBO0FBQThDO0FBVTlDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFTLEVBQUMsQ0FBUyxFQUFDLENBQVMsRUFBVyxFQUFFO0lBQ2xFLElBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQztRQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUMxQjtTQUFNO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQzFCO0FBQ0wsQ0FBQztBQUNEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sZUFBZSxHQUFHLENBQUMsT0FBc0IsRUFBRSxRQUFvQixFQUFFLFVBQWtCLEVBQUUsV0FBbUIsRUFDMUcscUJBQThCLEVBQUUsVUFBa0IsRUFBRSxVQUFrQixFQUFRLEVBQUU7SUFFaEYsMkJBQTJCO0lBQzNCLE1BQU0sWUFBWSxHQUFrQixFQUFFO0lBQ3RDLDBDQUEwQztJQUMxQyxNQUFNLGdCQUFnQixHQUFFLG1EQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5QyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7SUFDL0IsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSTtJQUM3Qyx5Q0FBeUM7SUFDekMsS0FBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBQztRQUN0QyxNQUFNLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN2QixLQUFJLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDO1lBQzNDLCtEQUErRDtZQUMvRCxNQUFNLFNBQVMsR0FBRyxtREFBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsU0FBUyxDQUFDLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUc7WUFDN0UsU0FBUyxDQUFDLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQU07WUFFN0UsZ0NBQWdDO1lBQ2hDLElBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUM5QyxTQUFRO2FBQ1g7WUFFRCxzREFBc0Q7WUFDdEQsSUFBSSxXQUFXLEdBQUcsbURBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLFdBQVcsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7WUFDMUIsV0FBVyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQztZQUMxQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyQywyRUFBMkU7WUFDM0UsSUFBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ2pELFNBQVE7YUFDWDtZQUNELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBRXpDLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBQyxPQUFPO1lBQzVCLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLE9BQU87WUFDaEMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUVoQyxxQkFBcUI7WUFDckIsSUFBSSxVQUFVLEdBQUcsSUFBSTtZQUVyQixtQ0FBbUM7WUFDbkMsSUFBSSxVQUFVLEdBQUcsSUFBSTtZQUNyQixJQUFJLFdBQVcsR0FBRyxJQUFJO1lBQ3RCLElBQUksUUFBUSxHQUFHLElBQUk7WUFFbkIsc0NBQXNDO1lBQ3RDLElBQUcsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7Z0JBQ3pCLGtEQUFrRDtnQkFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEVBQWUsRUFBUSxFQUFFO29CQUM1QyxVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztvQkFDdkUsV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7b0JBQzFFLFFBQVEsR0FBRyxRQUFRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNyRSxDQUFDLENBQUM7Z0JBRUYsaURBQWlEO2dCQUNqRCxVQUFVLEdBQUcsV0FBVyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQzthQUN2RDtZQUVELCtDQUErQztZQUMvQyxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUM7Z0JBQ2YsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUNsQztZQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVTtZQUM1QixJQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUM7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO2FBQ3ZCO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLE9BQXNCLEVBQUUsUUFBb0IsRUFBRSxVQUFrQixFQUFFLFdBQW1CLEVBQVEsRUFBRTtJQUNqSCx3Q0FBd0M7SUFDeEMsdUNBQXVDO0lBQ3ZDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN6RCxNQUFNO0lBQ04sZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsTUFBTTtJQUNOLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE1BQU07SUFDTixlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsTUFBTTtJQUNOLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RSxNQUFNO0lBQ04sZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxNQUFNO0lBQ04sZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RSxNQUFNO0lBQ04sZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLE1BQU07SUFDTixlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQUU4Qjs7Ozs7Ozs7Ozs7OztBQzVIL0I7QUFBQSxXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMseURBQXlEO0FBQ3pELHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixNQUFNLFFBQVEsR0FBRztJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsV0FBVyxFQUFFLENBQUM7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLFVBQVUsRUFBRSxHQUFHO0lBQ2YsWUFBWSxFQUFFLEdBQUc7SUFDakIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsYUFBYSxFQUFHLEdBQUc7SUFDbkIsVUFBVSxFQUFFLEVBQUU7Q0FDakI7QUFFYyx1RUFBUTs7Ozs7Ozs7Ozs7OztBQ2R2QjtBQUFBO0FBQUEsZ0dBQWdHO0FBQ2hHOztHQUVHO0FBQ0gsTUFBTSxJQUFJO0lBWU4sWUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNO1FBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPLENBQUMsRUFBZ0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN0QyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxFQUFnQjtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ1QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUM7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUU7YUFDTjtTQUNKO0lBRUwsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFDRDs7O09BR0c7SUFDSCxJQUFJLENBQUMsS0FBYTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQixJQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNyRCxPQUFPLEtBQUs7U0FDZjtRQUNELE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLEtBQWE7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQUVjOzs7Ozs7Ozs7Ozs7O0FDcEdmO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0U7QUFHakMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFtQixFQUFFLE1BQWMsRUFBUSxFQUFFO0lBQ3JFLElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztRQUMvRyxxREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztLQUNwRTtJQUNELElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztRQUNqSCxxREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDbkU7SUFDRCxJQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDM0cscURBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDcEU7SUFDRCxJQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDL0cscURBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO0tBQ25FO0lBQ0QseUJBQXlCO0lBQ3pCLElBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFDO1FBQ2xFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElB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RXpCLENBQUM7Q0FDSjtBQUVjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IE1vdXNlTW9uaXRvciB9IGZyb20gJy4vbW91c2VNb25pdG9yJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi9hc3NldEhlbHBlcidcbmltcG9ydCB7IENhbnZhc1JlbmRlcmVyIH0gZnJvbSAnLi9jYW52YXNSZW5kZXJlcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBSZWN0LCBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRF9NQU5BR0VSIH0gZnJvbSAnLi9pZE1hbmFnZXInXG5pbXBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IHsgbWFwR2VuZXJhdG9yMyB9IGZyb20gJy4vbWFwR2VuZXJhdGlvbidcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG5cbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCB7IGhhbmRsZUlucHV0IH0gZnJvbSAnLi9oYW5kbGVJbnB1dCdcbmltcG9ydCB7IHJlbmRlclRvR3JpZCB9IGZyb20gJy4vcmVuZGVyVG9HcmlkJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4vZGVidWdTZXR0aW5ncydcblxuY29uc3Qge1xuICAgIFRJTEVfV0lEVEgsXG4gICAgVElMRV9IRUlHSFQsXG4gICAgU0NSRUVOX1dJRFRILFxuICAgIFNDUkVFTl9IRUlHSFQsXG4gICAgTUFQX1dJRFRILFxuICAgIE1BUF9IRUlHSFQsXG4gICAgQ0FNRVJBX1dJRFRILFxuICAgIENBTUVSQV9IRUlHSFQsXG4gICAgRk9WX1JBRElVU1xufSA9IFNFVFRJTkdTXG5cbi8vIElOSVRJQUxJWkUgT1VSIFNFRURcbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbmNvbnN0IHNlZWRTdHIgPSB1cmxQYXJhbXMuZ2V0KCdzZWVkJylcbmlmKCFzZWVkU3RyKXtcbiAgICBjb25zdCBzZWVkID0gUkFORE9NLnNlZWQoc2VlZFN0ciB8fCB1bmRlZmluZWQpXG4gICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgaWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDpuZXd1cmx9LCcnLG5ld3VybClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cblxufSBlbHNlIHtcbiAgICBSQU5ET00uc2VlZChzZWVkU3RyKVxufVxuXG5jb25zdCBwbGF5ZXI6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCBDT0xPUlMucGxheWVyKVxuY29uc3QgbnBjOiBFbnRpdHkgPSBuZXcgRW50aXR5KElEX01BTkFHRVIubmV4dCgpLCAzLDQsICdAJywgQ09MT1JTLm5wYylcbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG4vLyBGaW5kIG91ciBjYW52YXMgYW5kIGFkanVzdCBpdCB0byBvdXIgc2V0dGluZ3NcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbi8vIEluaXRpYWxpemUgb3VyIGlucHV0IG1vbml0b3JzXG5jb25zdCBrbSA9IG5ldyBLZXlib2FyZE1vbml0b3IoKS5hdHRhY2goZG9jdW1lbnQpXG5jb25zdCBtbSA9IG5ldyBNb3VzZU1vbml0b3IoKS5hdHRhY2goY2FudmFzKVxuXG4vLyBJbml0aWFsaXplIG91ciBjYW52YXMgcmVuZGVyZXJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKClcbmNvbnN0IGNhbWVyYUZyYW1lID0gUmVjdC5tYWtlKDAsMCwgQ0FNRVJBX1dJRFRILCBDQU1FUkFfSEVJR0hUKSAvLyBDQU1FUkEgSVMgSU4gV09STEQgQ0VMTFMsIE5PVCBBQlNPTFVURSBVTklUU1xuXG4vLyBJbml0aWFsaXplIG91ciBHcmlkc1xuY29uc3QgcmVuZGVyR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxucmVuZGVyR3JpZC5zZXRFYWNoKChjZWxsOiBhbnksIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiBSZW5kZXJDZWxsLm1ha2UoeCx5LCcnLCBDT0xPUlMuYmxhY2ssIENPTE9SUy5ibGFjaylcbn0pXG5cbmxldCBmb3ZSZWNvbXB1dGUgPSAhREVCVUcuRElTQUJMRV9GT1ZcbmNvbnN0IGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4gPSBuZXcgR3JpZDxGT1ZDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxuZm92R3JpZC5zZXRFYWNoKCgpOiBGT1ZDZWxsID0+IHsgcmV0dXJuIHtcbiAgICB2aXNpYmxlOiBERUJVRy5ESVNBQkxFX0ZPVlxufX0pXG5cbmNvbnN0IHRpbGVHcmlkOiBHcmlkPFRpbGU+ID0gbmV3IEdyaWQ8VGlsZT4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxudGlsZUdyaWQuc2V0RWFjaCgoY2VsbDogVGlsZSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUaWxlID0+IHtcbiAgICBjb25zdCB0ID0gbmV3IFRpbGUoeCx5LCB0cnVlKVxuICAgIGlmKERFQlVHLkRJU0FCTEVfRk9WKXtcbiAgICAgICAgdC5leHBsb3JlZCA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIHRcbn0pXG5cbi8vIHRoaXMgd2lsbCBhbHNvIHBvcHVsYXRlIHRoZSByb29tc1xuY29uc3Qgcm9vbXM6IElSZWN0W10gPSBbXVxubWFwR2VuZXJhdG9yMyh0aWxlR3JpZCwgcm9vbXMpXG4vL21hcEdlbmVyYXRvcjIodGlsZUdyaWQsIHJvb21zKVxuXG4vLyB0aGlzIGlzIGhvbmVzdGx5IGp1c3QgYW5vdGhlciBwYXJ0IG9mIGdlbnJhdGluZyB0aGluZ3MsIHdlIGp1c3QgbmVlZCB0byBjb21lIHVwIHdpdGggc29tZSBleHRyYSB0ZXJtaW5vbG9neSBmb3IgaXQvIHdheXMgdG8gZGVhbCB3aXRoIGl0XG57XG4gICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgIGNvbnN0IHBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1swXSlcbiAgICAgICAgUG9pbnQuc2V0KHBsYXllciwgcGNlbnRlci54LCBwY2VudGVyLnkpXG4gICAgICAgIGNvbnN0IG5wY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbcm9vbXMubGVuZ3RoIC0gMV0pXG4gICAgICAgIFBvaW50LnNldChucGMsIG5wY2VudGVyLngsIG5wY2VudGVyLnkpXG4gICAgfVxuXG4gICAgLy8gY2VudGVyIHRoZSBjYW1lcmEgYW5kIGZvdiBvbiB0aGUgcGxheWVyXG4gICAgaWYoIURFQlVHLkRJU0FCTEVfVFJBQ0tJTkcpe1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNlbnRlciBldmVyeXRoaW5nXG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIgLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcih0aWxlR3JpZC5oZWlnaHQvMiAgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG4gICAgfVxufVxuXG4vLyBjbGVhbiB0aGlzIHVwXG5jb25zdCBtb3ZlczogYW55W10gPSBbXVxuY29uc3QgTW92ZVByb2Nlc3NvciA9IHtcbiAgICBtb3Zlc1xufVxuXG5QVUJTVUIuc3Vic2NyaWJlKCdtb3ZlJywgKG1zZyk6IHZvaWQgPT57XG4gICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5wdXNoKG1zZylcbn0pXG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmVkJywgKG1zZyk6IHZvaWQgPT57XG4gICAgaWYobXNnLmlkID09PSBwbGF5ZXIuaWQgJiYgIURFQlVHLkRJU0FCTEVfVFJBQ0tJTkcpe1xuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuICAgIH1cbn0pXG5cblBVQlNVQi5zdWJzY3JpYmUoJ2NhbWVyYV9tb3ZlJywgKG1zZyk6IHZvaWQgPT4ge1xuICAgIGNhbWVyYUZyYW1lLnggKz0gbXNnLmRlbHRhLnhcbiAgICBjYW1lcmFGcmFtZS55ICs9IG1zZy5kZWx0YS55XG4gICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcbn0pXG5cbi8vIFRPRE86IE1PVkUgVEhJUyBUTyB0aGUgS2V5Ym9hcmQgTW9uaXRvciBpdHNlbGYgYXMgYSBoZWxwZXIgcHJvcGVydHlcbmNvbnN0IG5ld0tleVByZXNzID0gKHE6IHN0cmluZywgZW5hYmxlWm9vbTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGttLmdldEtleVN0YXRlKHEpXG4gICAgaWYoIWVuYWJsZVpvb20pe1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEb3duICYmIHN0YXRlLmhhbGZTdGVwcyA+IDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGUuaXNEb3duICYmIChzdGF0ZS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKVxuICAgIH1cbn1cblxuXG5sb2FkSW1hZ2UoJ2Fzc2V0cy9vdXQucG5nJykudGhlbigoaW1hZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIHJlbmRlcmVyLmluaXQoY2FudmFzLCBpbWFnZSlcbiAgICAvLyBMb29wXG4gICAgY29uc3QgbG9vcCA9ICgpOiB2b2lkID0+IHtcblxuICAgICAgICBoYW5kbGVJbnB1dChrbSwgcGxheWVyKVxuXG4gICAgICAgIC8vIGV4dHJhXG4gICAgICAgIGlmKG5ld0tleVByZXNzKCd3Jykpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ2NhbWVyYV9tb3ZlJywge2RlbHRhOiB7eDogMCwgeTogLTF9fSlcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdLZXlQcmVzcygnYScpKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdjYW1lcmFfbW92ZScsIHtkZWx0YToge3g6IC0xLCB5OiAwfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ3MnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAwLCB5OiAxfX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYobmV3S2V5UHJlc3MoJ2QnKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnY2FtZXJhX21vdmUnLCB7ZGVsdGE6IHt4OiAxLCB5OiAwfX0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIG1vdmVzXG4gICAgICAgIC8vIGV2ZW50dWFsbHkgd2UnbGwgY29tcG9uZW50aXplIHRoaXMgYmV0dGVyXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMuZm9yRWFjaCgobXNnOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtc2cuZGVsdGFcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbXNnLmlkXG4gICAgICAgICAgICBjb25zdCBtb3ZlciA9IGVudGl0aWVzLmZpbmQoKGUpOiBib29sZWFuID0+IGUuaWQgPT0gaWQpXG4gICAgICAgICAgICBpZighbW92ZXIpe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGlsZUdyaWQuaW5Cb3VuZHNYWShtb3Zlci54ICsgbW92ZS54LCBtb3Zlci55ICsgbW92ZS55KSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHBsYXllci54ICsgbW92ZS54LCBwbGF5ZXIueSArIG1vdmUueSlcbiAgICAgICAgICAgICAgICBpZighdGlsZS5ibG9ja01vdmUgfHwgKERFQlVHLkVOQUJMRV9DTElQUElORyAmJiBtb3Zlci5pZCA9PT0gcGxheWVyLmlkKSl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVyLm1vdmUobW92ZS54LCBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgICAgIGlmKG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm92UmVjb21wdXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlZCcsIG1zZykgLy8gb25seSBwdWJsaXNoIG1vdmUgaWYgdGhlIGVudGl0eSBhY3R1YWxseSBjb21wbGV0ZWQgdGhlIG1vdmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMubGVuZ3RoID0gMFxuXG4gICAgICAgIGlmKGZvdlJlY29tcHV0ZSAmJiAhREVCVUcuRElTQUJMRV9GT1Ype1xuICAgICAgICAgICAgY2FsY3VsYXRlRk9WKGZvdkdyaWQsIHRpbGVHcmlkLCBwbGF5ZXIsIEZPVl9SQURJVVMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb252ZXJ0IHRvIHJlbmRlciBmb3JtYXRcbiAgICAgICAgcmVuZGVyVG9HcmlkKHRpbGVHcmlkLCBmb3ZHcmlkLCBlbnRpdGllcywgcmVuZGVyR3JpZCwgY2FtZXJhRnJhbWUpXG4gICAgICAgIC8vIGFjdHVhbGx5IHJlbmRlciB0byBjYW52YXNcbiAgICAgICAgcmVuZGVyZXIuY2xlYXIoKVxuICAgICAgICByZW5kZXJlci5yZW5kZXIocmVuZGVyR3JpZClcblxuICAgICAgICBrbS5yZXNldFN0ZXBzKClcbiAgICAgICAgbW0ucmVzZXQoKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblxufSkuY2F0Y2goKGVycjogYW55KTogdm9pZCA9PiBjb25zb2xlLmxvZyhlcnIpKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuIiwiZnVuY3Rpb24gbG9hZEltYWdlKHVybDogc3RyaW5nKTogYW55e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKTogYW55ID0+IHJlc29sdmUoaW1nKSlcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCk6IGFueSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tICR7dXJsfWApKSlcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuICAgIH0pXG59XG5cbmV4cG9ydCB7bG9hZEltYWdlfSIsImltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IENPREVfVE9fUkVDVF9IQVNILCBkcmF3U2VjdGlvbiwgY29kZSB9IGZyb20gJy4vcmVuZGVySGVscGVycydcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHRha2luZyBhIHJlbmRlciBncmlkIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGltYWdlc1xuICogb24gdGhlIGNhbnZhc1xuICovXG5cbmNvbnN0IHtUSUxFX1dJRFRILCBUSUxFX0hFSUdIVH0gPSBTRVRUSU5HU1xuXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IHVuZGVmaW5lZDtcbiAgICBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50KTogQ2FudmFzUmVuZGVyZXJ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIC8vIHdlIGFyZSBqdXN0IGZvcmNpbmcgdGhpcyBmb3Igbm93LCB3ZSB3aWxsIGNoZWNrIGlmIGl0J3MgbnVsbFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMhLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaWYoY3R4ID09PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCBjb250ZXh0IGZyb20gY2FudmFzJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8gZXZlbnR1YWxseSB3ZSBuZWVkIHRvIHBhc3MgaW4gdGhlIGRpbWVuc2lvbnMgd2UgYXJlIHJlbmRlcmluZyB0byBhcyB3ZWxsXG4gICAgLy8gZm9yIG5vdyBpdCdzIGZpbmVcbiAgICByZW5kZXIocmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4sIGJhY2tncm91bmQ6IHN0cmluZyA9IENPTE9SUy5ibGFjayk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsIHJlbmRlckdyaWQud2lkdGggKiBUSUxFX1dJRFRILCByZW5kZXJHcmlkLmhlaWdodCAqIFRJTEVfSEVJR0hUKVxuICAgICAgICAvLyBsZXQncyB0cnkgc2V0dGluZyBhIGJhY2tncm91bmQgY29sb3IgYXMgd2VsbFxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBkZXN0UmVjdCA9IFJlY3QubWFrZSgwLDAsMCwwKVxuICAgICAgICByZW5kZXJHcmlkLmZvckVhY2goKFxuICAgICAgICAgICAgY2VsbDogSVJlbmRlckNlbGwsIFxuICAgICAgICAgICAgaW5kZXg6IG51bWJlciwgXG4gICAgICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgUmVjdC5zZXQoZGVzdFJlY3QsIHggKiBUSUxFX1dJRFRILCB5ICogVElMRV9IRUlHSFQsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxuICAgICAgICAgICAgLy8gdG9kbywgYWxsb3cgdXMgdG8gbWFyayByZW5kZXIgY2VsbHMgYXMgJ2VtcHR5JyByYXRoZXIgdGhhbiBzcGFjZXMsIHRoaXMgbWlnaHQgaGVscCBzcGVlZCB1cCByZW5kZXIgdGltZVxuICAgICAgICAgICAgaWYoY2VsbC5jaGFyYWN0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICBpZihjZWxsLmJhY2tDb2xvciAhPT0gYmFja2dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgYWN0dWFsbHkgZG9uJ3Qga25vdyBpZiB0aGlzIGhlbHBzLCBidXQgaXQgc2VlbXMgbGlrZSBzZXR0aW5nIHRoZSBmaWxsU3R5bGUgY291bGQgaW52b2x2ZSBtb3JlIGNvbXBsaWNhdGlvbnMgdGhhbiBqdXN0IGNoZWNraW5nIGlmIGl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgaWYoY3R4LmZpbGxTdHlsZSAhPT0gY2VsbC5iYWNrQ29sb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNlbGwuYmFja0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNSZWN0ID0gQ09ERV9UT19SRUNUX0hBU0hbY29kZShjZWxsLmNoYXJhY3RlcildXG4gICAgICAgICAgICAgICAgZHJhd1NlY3Rpb24oY3R4LCB0aGlzLnNwcml0ZXNoZWV0LCBzcmNSZWN0LCBkZXN0UmVjdCwgY2VsbC5mb3JlQ29sb3IsIGNlbGwuYmFja0NvbG9yIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSIsImNvbnN0IENPTE9SUyA9IHtcbiAgICAnZGFya19vdXRzaWRlJzogJyMwMDIyNDQnLFxuICAgICdsaWdodF9vdXRzaWRlJzogJyMyNjUzODAnLFxuICAgICdibGFjayc6ICcjMmQyODI0JyxcbiAgICAnZGFya193YWxsJzogJyMyZDI4MjQnLCAvLycjNDQzYzM1JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzQ0M2MzNScsIC8vJyM2NjU2NDcnLFxuICAgICdsaWdodF93YWxsJzogJyNDOEI0MzInLCAvLyAjQzVDQzg5XG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzVDQzg5JyxcbiAgICAncGxheWVyJzogJyNGRkZGRkYnLFxuICAgICdkYXJrX2Rvb3InOicjNTUwMDAwJyxcbiAgICAnbGlnaHRfZG9vcic6ICcjRkYyMjIyJyxcbiAgICAnbnBjJzogJyNDQzAwMDAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IENPTE9SU1xuIiwiaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8vIEFMTCBERUJVRyBTRVRUSU5HUyBTSE9VTEQgR08gSU4gSEVSRSwgQU5EIEFMTCBERUJVRyBGTEFHUyBTSE9VTEQgQkUgRkFMU0UgQlkgREVGQVVMVCAoaS5lLiBwcm9kdWN0aW9uIG1vZGUpXG5jb25zdCBERUJVRzogSGFzaDxib29sZWFuPiA9IHtcbiAgICBESVNBQkxFX0ZPVjogZmFsc2UsICAgICAgICAgIC8vIFNIT1cgRVZFUllUSElORywgTk8gSElESU5HIFNUVUZGIEJFSElORCBGT1YsIEVWRVJZVEhJTkcgQUNUUyBMSVRcbiAgICBESVNBQkxFX1RSQUNLSU5HOiB0cnVlLCAgICAgLy8gQ0FNRVJBIFdJTEwgT05MWSBSRVNQT05EIFRPIERJUkVDVCBDT05UUk9MIEFORCBXT04nVCBUUkFDSyBDSEFSQUNURVJcbiAgICBFTkFCTEVfQ0xJUFBJTkc6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgREVCVUdcbiIsIi8qKlxuICogQSBnZW5lcmljIG9iamVjdCB0byByZXByZXNlbnQgZXZlcnl0aGluZyB0aGF0IGlzIG5vdCB0aGUgbWFwIGl0c2VsZlxuICogRm9yIHRoYXQsIHNlZSB0aGUgVGlsZSBjbGFzc1xuICovXG5jbGFzcyBFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHg6IG51bWJlcix5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBjb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGFuIGVudGl0eSwgY3VycmVudGx5IGRvZXNuJ3QgY2hlY2sgaWYgaXQgY2FuIG9yIG5vdCwganVzdCBkb2VzXG4gICAgICogQHBhcmFtIGR4IEFtb3VudCB0byBtb3ZlIGluIHRoZSB4IGRpcmVjdGlvbiAobGVmdCBpcyBuZWdhdGl2ZSwgcmlnaHQgaXMgcG9zaXRpdmUpXG4gICAgICogQHBhcmFtIGR5IEFtb3VudCB0byBtb3ZlIGluIHRoZSB5IGRpcmVjdGlvbiAodXAgaXMgbmVnYXRpdmUsIGRvd24gaXMgcG9zaXRpdmUpXG4gICAgICovXG4gICAgbW92ZShkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZHtcbiAgICAgICAgdGhpcy54ICs9IGR4XG4gICAgICAgIHRoaXMueSArPSBkeVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRW50aXR5IH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElQb2ludCwgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuaW50ZXJmYWNlIEZPVkNlbGwgIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFNoYWRvd1JhbmdlIHtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5jb25zdCBpc0JldHdlZW5JbmNsdXNpdmUgPSAoYTogbnVtYmVyLGI6IG51bWJlcix0OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBpZihiIDwgYSl7XG4gICAgICAgIHJldHVybiBiIDw9IHQgJiYgdCA8PSBhXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPD0gdCAmJiB0IDw9IGJcbiAgICB9XG59XG4vKipcbiAqIFxuICogQHBhcmFtIGZvdkdyaWQgXG4gKiBAcGFyYW0gdGlsZUdyaWQgXG4gKiBAcGFyYW0gc3RhcnRQb2ludCBzdGFydCBwb2ludCBpcyBpbiB3b3JsZCBjb29yZGluYXRlc1xuICogQHBhcmFtIG1heERpc3RhbmNlIFxuICogQHBhcmFtIGhvcml6b250YWxOb3RWZXJ0aWNhbCBcbiAqIEBwYXJhbSB4RGlyZWN0aW9uIFxuICogQHBhcmFtIHlEaXJlY3Rpb24gXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZU9jdGFudCA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyLFxuICAgIGhvcml6b250YWxOb3RWZXJ0aWNhbDogYm9vbGVhbiwgeERpcmVjdGlvbjogbnVtYmVyLCB5RGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBcbiAgICAvLyBPdXIgc2hhZG93cyB3ZSB3aWxsIGNhc3RcbiAgICBjb25zdCBzaGFkb3dSYW5nZXM6IFNoYWRvd1JhbmdlW10gPSBbXVxuICAgIC8vIG91ciBzdGFydGluZyBsb2NhdGlvbiBpcyBhbHdheXMgdmlzaWJsZVxuICAgIGNvbnN0IHNjcmVlblN0YXJ0UG9pbnQ9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICBzY3JlZW5TdGFydFBvaW50LnggLT0gZm92R3JpZC54XG4gICAgc2NyZWVuU3RhcnRQb2ludC55IC09IGZvdkdyaWQueVxuICAgIGZvdkdyaWQuZ2V0UChzY3JlZW5TdGFydFBvaW50KS52aXNpYmxlID0gdHJ1ZVxuICAgIC8vIFRPRE86IERldGVybWluZSBpZiB0aGUgRk9WIGlzIGluIHJhbmdlXG4gICAgZm9yKGxldCByb3cgPSAxOyByb3cgPCBtYXhEaXN0YW5jZTsgcm93Kyspe1xuICAgICAgICBjb25zdCByb3dTaXplID0gcm93ICsgMVxuICAgICAgICBmb3IobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHJvd1NpemU7IGNvbHVtbisrKXtcbiAgICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgb2N0YW50LCB0aGUgdHJhdmVsbGVyIHdpbGwgbW92ZSBkaWZmZXJlbnRseVxuICAgICAgICAgICAgY29uc3QgdHJhdmVsbGVyID0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgICAgICAgICAgdHJhdmVsbGVyLnggKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geERpcmVjdGlvbiAqIGNvbHVtbiA6IHhEaXJlY3Rpb24gKiByb3dcbiAgICAgICAgICAgIHRyYXZlbGxlci55ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHlEaXJlY3Rpb24gKiByb3cgOiB5RGlyZWN0aW9uICogY29sdW1uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBvdXQgb2YgYm91bmRzLCBza2lwXG4gICAgICAgICAgICBpZighdGlsZUdyaWQuaW5Cb3VuZHNYWSh0cmF2ZWxsZXIueCwgdHJhdmVsbGVyLnkpKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmYWN0b3IgaW4gb3VyIHRpbGUgY2hlY2sgd2hlbiB3ZSBnZXQgdGhlIHdvcmxkIGNlbGxcbiAgICAgICAgICAgIGxldCBzY3JlZW5Qb2ludCA9IFBvaW50LmNvcHkodHJhdmVsbGVyKVxuICAgICAgICAgICAgc2NyZWVuUG9pbnQueCAtPSBmb3ZHcmlkLnhcbiAgICAgICAgICAgIHNjcmVlblBvaW50LnkgLT0gZm92R3JpZC55XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0UCh0cmF2ZWxsZXIpXG4gICAgICAgICAgICAvLyBPUFRJTUlaRTogV2UgYXJlIHByb2JhYmx5IHJ1bm5pbmcgdG8gbWFueSB0aW1lcyBhbmQgY291bGQgZG8gdGhpcyBiZXR0ZXJcbiAgICAgICAgICAgIGlmKCFmb3ZHcmlkLmluQm91bmRzWFkoc2NyZWVuUG9pbnQueCwgc2NyZWVuUG9pbnQueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblBvaW50KVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGNvbHVtbi9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBlbmQgPSAoY29sdW1uICsgMSkvcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgbWlkZGxlID0gKHN0YXJ0ICsgZW5kKSAvIDJcblxuICAgICAgICAgICAgLy8gdGVzdCBmb3IgdmlzaWJsaXR5XG4gICAgICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHRydWVcblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGVkZ2VzIGFyZSBjbGVhciBvciBub3RcbiAgICAgICAgICAgIGxldCBzdGFydENsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IG1pZGRsZUNsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGVuZENsZWFyID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGJ1aWx0IHNvbWUgc2hhZG93IHJhbmdlc1xuICAgICAgICAgICAgaWYoc2hhZG93UmFuZ2VzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGFueSBzaGFkb3dzIGNyb3NzIG91ciB0aHJlZSBwb2ludHNcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMuZm9yRWFjaCggKHNyOiBTaGFkb3dSYW5nZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENsZWFyID0gc3RhcnRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICBtaWRkbGVDbGVhciA9IG1pZGRsZUNsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgbWlkZGxlKVxuICAgICAgICAgICAgICAgICAgICBlbmRDbGVhciA9IGVuZENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgZW5kKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdmlzaWJpbGl0eSBiYXNlZCBvZmYgb2Ygb3VyIHNhbXBsaW5nXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9IG1pZGRsZUNsZWFyICYmIChzdGFydENsZWFyIHx8IGVuZENsZWFyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3ZSBibG9jayBzaWdodCwgY2FsY3VsYXRlIG91ciBzaGFkb3cgZW5kc1xuICAgICAgICAgICAgaWYodGlsZS5ibG9ja1NpZ2h0KXtcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMucHVzaCh7c3RhcnQsIGVuZH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvdkNlbGwudmlzaWJsZSA9IHZpc2liaWxpdHlcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgdGlsZS5leHBsb3JlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2FsY3VsYXRlRk9WID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAvLyBiZSBkZWZhdWx0IHdlIGFyZSBnb2luZyB0byBzaGFkb3dDYXN0XG4gICAgLy8gYnkgZGVmYXVsdCBldmVyeXRoaW5nIGlzIG5vdCB2aXNpYmxlXG4gICAgZm92R3JpZC5mb3JFYWNoKChjZWxsKTogdm9pZCA9PiB7IGNlbGwudmlzaWJsZSA9IGZhbHNlIH0pXG4gICAgLy8gTk5XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIC0xKVxuICAgIC8vIFdOV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgLTEpXG4gICAgLy8gV1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAxKVxuICAgIC8vIFNTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAxKVxuICAgIC8vIFNTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIDEsIDEpXG4gICAgLy8gRVNFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIDEsIDEpXG4gICAgLy8gRU5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIDEsIC0xKVxuICAgIC8vIE5ORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIDEsIC0xKVxufVxuXG5leHBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGx9IiwiLy8gT1JJR0lOQUxcbi8vIGNvbnN0IFNFVFRJTkdTID0ge1xuLy8gICAgIFRJTEVfV0lEVEg6IDEwLCAgICAgLy8gcGl4ZWxzXG4vLyAgICAgVElMRV9IRUlHSFQ6IDEwLCAgICAvLyBwaXhlbHNcbi8vICAgICBNQVBfV0lEVEg6IDgwLCAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbiB0aWxlc1xuLy8gICAgIE1BUF9IRUlHSFQ6IDQ1LFxuLy8gICAgIENBTUVSQV9XSURUSDogMTAwLFxuLy8gICAgIENBTUVSQV9IRUlHSFQ6IDcwLFxuLy8gICAgIFNDUkVFTl9XSURUSCA6MTAwLFxuLy8gICAgIFNDUkVFTl9IRUlHSFQgOiA3MCxcbi8vICAgICBGT1ZfUkFESVVTOiAzNVxuLy8gfVxuXG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBUSUxFX1dJRFRIOiA1LCAgICAgLy8gcGl4ZWxzXG4gICAgVElMRV9IRUlHSFQ6IDUsICAgIC8vIHBpeGVsc1xuICAgIE1BUF9XSURUSDogMjAwLCAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbiB0aWxlc1xuICAgIE1BUF9IRUlHSFQ6IDEzMCxcbiAgICBDQU1FUkFfV0lEVEg6IDIxMCxcbiAgICBDQU1FUkFfSEVJR0hUOiAxNDAsXG4gICAgU0NSRUVOX1dJRFRIIDoyMTAsXG4gICAgU0NSRUVOX0hFSUdIVCA6IDE0MCxcbiAgICBGT1ZfUkFESVVTOiAzNVxufVxuXG5leHBvcnQgZGVmYXVsdCBTRVRUSU5HUyIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgU2V0RWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBhbnk7XG59XG5cbmludGVyZmFjZSBGb3JFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG59XG5cbi8vIFRPRE86IGdpdmUgZ3JpZHMgdGhlaXIgb3duIHggYW5kIHlzLCB0aGF0IHdheSB0aGV5IGNhbiBpbXBsZW1lbnQgYWxsIHRoZSBwb2ludCBhbmQgcmVjdCBzdHVmZlxuLyoqXG4gKiBHcmlkIHRvIHJlcHJlc2VudCAyZCBjb2xsZWN0aW9ucywgcGxlYXNlIGRvbid0IHJlc2l6ZSBpdCBhZnRlciBjcmVhdGluZyBpdFxuICovXG5jbGFzcyBHcmlkPFQ+IGltcGxlbWVudHMgSVJlY3Qge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgY2VsbHM6IFRbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCl7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgdXNlZCBmb3IgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGdyaWQsIG92ZXJ3cml0ZXMgcHJldmlvdXMgZW50cmllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBlbnRyeSwgZG9uJ3QgdXNlIHRoaXMgdW5sZXNzIGVudHJpZXMgYXJlIGluZGVwZW5kZW50IGZyb20gZWFjaCBvdGhlclxuICAgICAqIEBwYXJhbSBmbiB0aGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjZWxsIGl0c2VsZiBhcyB0aGUgZmlyc3QgcHJvcGVydHkgYW5kIFxuICAgICAqL1xuICAgIHNldEVhY2goZm46IFNldEVhY2hGbjxUPik6IEdyaWQ8VD57XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgeCA9IGkgJSB0aGlzLndpZHRoXG4gICAgICAgICAgICB5ID0gKGkgLSB4KS90aGlzLndpZHRoXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBzb21ldGhpbmcgZm9yIGVhY2ggbWVtYmVyIG9mIGEgY2VsbCwgZ29pbmcgcm93IGJ5IHJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZm4gR2V0IHBhc3NlZCB0aGUgY2VsbCwgaW5kZXgsIHggYW5kIHlcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuOiBGb3JFYWNoRm48VD4pOiB2b2lke1xuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKyl7XG4gICAgICAgICAgICAgICAgZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHggeCBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICogQHBhcmFtIHkgeSBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICovXG4gICAgZ2V0WFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUICB7XG4gICAgICAgIGlmKCF0aGlzLmluQm91bmRzWFkoeCx5KSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdW5kYXJ5IGFjY2VzcyBpc3N1ZScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbeCArIHkgKiB0aGlzLndpZHRoXVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGdldFhZLiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBwb2ludCBjb250YWlucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2VsbCB5b3Ugd2FudCB0byBnZXRcbiAgICAgKi9cbiAgICBnZXRQKHBvaW50OiBJUG9pbnQpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WFkocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG5cbiAgICBpbkJvdW5kc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbntcbiAgICAgICAgaWYoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNlbGwgYmFzZWQgb2ZmIG9mIGFuIGluZGV4LCB1c3VhbGx5IGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGZvckVhY2ggbG9vcCBvZiBhIHNpbWlsYXJseSBzaXplZCBncmlkXG4gICAgICogTk9URSBiZSBjYXJlZnVsIHRoYXQgdGhlIG90aGVyIGdyaWQgaGFzIHRoZSBzYW1lIGRpbWVuc2lvbiB1bmxlc3MgeW91IHJlYWxseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBjZWxscywgbW9zdGx5IHRvIGJlIHVzZWQgd2l0aCBncmlkcyB0aGF0IGFyZSB3b3JraW5nIGFsb25nc2lkZSBhIGRpZmZlcmVudCBmb3JFYWNoIGxvb3BcbiAgICAgKi9cbiAgICBnZXRJKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaW5kZXhdXG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0ID0gKGttOiBLZXlib2FyZE1vbml0b3IsIHBsYXllcjogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93TGVmdCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICB9XG4gICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgIH1cbiAgICAvLyBxdWljayBudW1iZXIgZ2VuZXJhdG9yXG4gICAgaWYoIWttLmdldEtleVN0YXRlKCduJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnbicpLmhhbGZTdGVwcyA+IDApKXtcbiAgICAgICAgY29uc3Qgc2VlZCA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKVxuICAgICAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICB9XG59IiwiY2xhc3MgSURNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGxhc3RJZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGFzdElkID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5leHQgaWRcbiAgICAgKi9cbiAgICBuZXh0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZCsrXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IElEX01BTkFHRVJcbiAqL1xuY29uc3QgSURfTUFOQUdFUiA9IG5ldyBJRE1hbmFnZXIoKVxuZXhwb3J0IHtJRF9NQU5BR0VSLCBJRE1hbmFnZXJ9IiwiaW50ZXJmYWNlIEtleVN0YXRlIHsgXG4gICAga2V5OiBzdHJpbmc7XG4gICAgaXNEb3duOiBib29sZWFuO1xuICAgIGhhbGZTdGVwczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY29uc3QgbWFrZUtleVN0YXRlID0gKGtleTogc3RyaW5nLCBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaGFsZlN0ZXBzOiBudW1iZXIgPSAwKTogS2V5U3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBoYWxmU3RlcHNcbiAgICB9XG59XG5cbmNsYXNzIEtleWJvYXJkTW9uaXRvciB7XG4gICAga2V5SGFzaDogSGFzaDxLZXlTdGF0ZT47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlIYXNoID0ge31cbiAgICB9XG4gICAgLy8gQXR0YWNoIHRvIHRoZSBET00sIHVzdWFsbHkgdGhlIGRvY3VtZW50IGFzIGEgd2hvbGUsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgbW9yZSBzcGVjaWZpYyBpZiB5b3Ugd2FudFxuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBLZXlib2FyZE1vbml0b3Ige1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXksIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZigha2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoa2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0S2V5U3RhdGUoa2V5OiBzdHJpbmcpOiBLZXlTdGF0ZXtcbiAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlIYXNoW2tleV1cbiAgICB9XG4gICAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5SGFzaClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleXNbaV1dLmhhbGZTdGVwcyA9IDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSBmcm9tICcuL3NoYXBlcy9lbGxpcHNlJ1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBzdGF0aWMgbWV0aG9kcyBmb3IgaGVscGluZyB0byBtYW5pcHVsYXRlIG1hcHNcbiAqL1xuY2xhc3MgTWFwR2VuSGVscGVyIHtcbiAgICAvLyBUT0RPOiBNYXliZSBjb21lIHVwIHdpdGggYSBiZXR0ZXIgbmFtZVxuICAgIC8qKlxuICAgICAqIFBsYWNlIGEgcm9vbSBpbnNpZGUgYSBncm91cCBvZiB0aWxlc1xuICAgICAqIEBwYXJhbSB0aWxlR3JpZCB0aGUgZ3JpZCBvZiB0aWxlcyB0byBhZmZlY3RcbiAgICAgKiBAcGFyYW0gcm9vbSB0aGUgcm9vbSBzZWN0aW9uIHRoYXQgd2Ugd2lsbCBvcGVuIHVwXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVJvb20odGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb206IElSZWN0KTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IEJvdW5kcyBjaGVjayBvciBzb21ldGhpbmcsIHJpZ2h0IG5vdyB0ZXJyaWJsZSB0aGluZ3MgY2FuIGhhcHBlblxuICAgICAgICBjb25zdCB7IGxlZnQscmlnaHQsdG9wLGJvdHRvbX0gPSBSZWN0LnNpZGVzKHJvb20pXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc3RvcCBvbmUgZWFybHkgYmVjYXVzZSBvZiBob3cgd2Ugd29yayB3aXRoIGEgZ3JpZFxuICAgICAgICAvLyB3ZSB3aWxsIGFsc28gaW5jbHVkZSBhIG1hcmdpbiBvZiBvbmUgb24gYWxsIHNpZGV4XG4gICAgICAgIGZvcihsZXQgeSA9IHRvcCArIDE7IHkgPCBib3R0b20gLSAxOyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gbGVmdCArIDE7IHggPCByaWdodCAtIDE7IHgrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgsIHkpXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSFR1bm5lbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeDE6IG51bWJlciwgeDI6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHN3YXAgdGhlbSBhcyBuZWNlc3NhcnlcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oeDEsIHgyKVxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh4MSwgeDIpXG4gICAgICAgIGZvcihsZXQgeCA9IG1pbjsgeCA8PSBtYXg7IHgrKyl7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVIV2FsbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeDE6IG51bWJlciwgeDI6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHN3YXAgdGhlbSBhcyBuZWNlc3NhcnlcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oeDEsIHgyKVxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh4MSwgeDIpXG4gICAgICAgIGZvcihsZXQgeCA9IG1pbjsgeCA8PSBtYXg7IHgrKyl7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSB0cnVlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVlR1bm5lbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeTE6IG51bWJlciwgeTI6IG51bWJlciwgeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHkxLCB5MilcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoeTEsIHkyKVxuICAgICAgICBmb3IobGV0IHkgPSBtaW47IHkgPD0gbWF4OyB5Kyspe1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVldhbGwodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHkxOiBudW1iZXIsIHkyOiBudW1iZXIsIHg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih5MSwgeTIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHkxLCB5MilcbiAgICAgICAgZm9yKGxldCB5ID0gbWluOyB5IDw9IG1heDsgeSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjYXJ2ZUVsbGlwc2UodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGVsbGlwc2U6IElFbGxpcHNlKTogdm9pZCB7XG4gICAgICAgIHRpbGVHcmlkLmZvckVhY2goKHRpbGUsIGluZGV4LCB4LCB5KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZihFbGxpcHNlLmNvbnRhaW5zWFkoZWxsaXBzZSwgeCx5KSl7XG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHsgTWFwR2VuSGVscGVyIH1cbiIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCB7IE1hcEdlbkhlbHBlciB9IGZyb20gJy4vbWFwR2VuSGVscGVyJ1xuaW1wb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSBmcm9tICcuL3NoYXBlcy9lbGxpcHNlJ1xuXG5cbmNvbnN0IFJPT01fTUFYX1NJWkUgPSAxNlxuY29uc3QgUk9PTV9NSU5fU0laRSA9IDEwXG5jb25zdCBNQVhfUk9PTVMgPSA0MFxuY29uc3QgTUFYX0VMTElQU0VfUkFESVVTID0gUk9PTV9NQVhfU0laRVxuY29uc3QgTUlOX0VMTElQU0VfUkFESVVTID0gUk9PTV9NQVhfU0laRSAvIDRcblxuY29uc3QgQ0FWRV9FTExJUFNFUyA9IDMwXG5cbmNvbnN0IHJhbmRpbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihSQU5ET00ubmV4dCgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5jb25zdCByYW5kb21FbGxpcHNlID0gKG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IElFbGxpcHNlID0+IHtcbiAgICByZXR1cm4gRWxsaXBzZS5tYWtlKFxuICAgICAgICByYW5kaW50KG1pblgsIG1heFgpLFxuICAgICAgICByYW5kaW50KG1pblksIG1heFkpLFxuICAgICAgICByYW5kaW50KE1JTl9FTExJUFNFX1JBRElVUywgTUFYX0VMTElQU0VfUkFESVVTKSxcbiAgICAgICAgcmFuZGludChNSU5fRUxMSVBTRV9SQURJVVMsIE1BWF9FTExJUFNFX1JBRElVUyksXG4gICAgICAgIFJBTkRPTS5uZXh0KCkgKiBNYXRoLlBJICogMlxuICAgIClcbn1cblxuLyoqXG4gKiBQbGFjZSBhIGJ1bmNoIG9mIHJvb21zIG9wcG9ydHVuaXN0aWNhbGx5LCBhbmQgdGhlbiBjYXJ2ZSBvdXQgc29tZSBlbGxpcHNlcyByYW5kb21seVxuICogQHBhcmFtIHRpbGVHcmlkIHRpbGVHcmlkIHRvIGJlIHBvcHVsYXRlZFxuICogQHBhcmFtIHJvb21zIExpc3Qgb2Ygcm9vbXMgdG8gYmUgcG9wdWxhdGVkXG4gKi9cbmNvbnN0IG1hcEdlbmVyYXRvcjEgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb21zOiBJUmVjdFtdKTogdm9pZCA9PiB7XG4gICAgZm9yKGxldCByID0gMDsgciA8IE1BWF9ST09NUzsgcisrKXtcblxuICAgICAgICBjb25zdCB3ID0gcmFuZGludChST09NX01JTl9TSVpFLCBST09NX01BWF9TSVpFKVxuICAgICAgICBjb25zdCBoID0gcmFuZGludChST09NX01JTl9TSVpFLCBST09NX01BWF9TSVpFKVxuICAgICAgICBjb25zdCB4ID0gcmFuZGludCgwLCB0aWxlR3JpZC53aWR0aCAtIHcgLSAxKVxuICAgICAgICBjb25zdCB5ID0gcmFuZGludCgwLCB0aWxlR3JpZC5oZWlnaHQgIC0gaCAtIDEpXG5cbiAgICAgICAgY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZSh4LHksdyxoKVxuICAgICAgICBsZXQgaW50ZXJzZWN0cyA9IGZhbHNlXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihSZWN0LmludGVyc2VjdHMobmV3Um9vbSwgcm9vbXNbaV0pKXtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWludGVyc2VjdHMpe1xuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIobmV3Um9vbSlcbiAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVSb29tKHRpbGVHcmlkLCBuZXdSb29tKVxuICAgICAgICAgICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFJvb20gPSByb29tc1tyb29tcy5sZW5ndGggLTFdXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENlbnRlciA9IFJlY3QuY2VudGVyKGxhc3RSb29tKVxuICAgICAgICAgICAgICAgIGlmKHJhbmRpbnQoMCwxKSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBsYXN0Q2VudGVyLnkpXG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBjZW50ZXIueClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBsYXN0Q2VudGVyLngpXG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBjZW50ZXIueSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGUgPSAwOyBlIDwgQ0FWRV9FTExJUFNFUzsgZSsrKXtcbiAgICAgICAgTWFwR2VuSGVscGVyLmNhcnZlRWxsaXBzZSh0aWxlR3JpZCwgcmFuZG9tRWxsaXBzZShNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLndpZHRoIC0xIC0gTUFYX0VMTElQU0VfUkFESVVTLCBNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLmhlaWdodCAtIDEgLSBNQVhfRUxMSVBTRV9SQURJVVMpKVxuICAgIH1cbn1cblxuY29uc3QgcGxhY2VBc3Rlcm9pZENodW5rID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBlbGxpcHNlOiBJRWxsaXBzZSk6IHZvaWQgPT4ge1xuICAgIHRpbGVHcmlkLmZvckVhY2goKHRpbGU6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIGlmKEVsbGlwc2UuY29udGFpbnNYWShlbGxpcHNlLCB4LHkpKXtcbiAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gdHJ1ZVxuICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgdGlsZS5jb250YWluZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBtYXBHZW5lcmF0b3IyID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tczogSVJlY3RbXSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IE1BUkdJTlMgPSAxMFxuICAgIGNvbnN0IE1JTl9ESU1FTlNJT04gPSBNYXRoLm1pbih0aWxlR3JpZC53aWR0aCwgdGlsZUdyaWQuaGVpZ2h0KVxuICAgIGNvbnN0IE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUyA9IE1hdGguZmxvb3IoKE1JTl9ESU1FTlNJT04gLSBNQVJHSU5TICogMikvMilcbiAgICBjb25zdCBNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMgPSBNYXRoLmZsb29yKE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUyAqIDAuNylcbiAgICBjb25zdCBTRUNUSU9OX0NPVU5UID0gMTBcbiAgICAvLyBjb25zdCBuZXdSb29tID0gUmVjdC5tYWtlKE1hdGguZmxvb3IodGlsZUdyaWQud2lkdGgvMiAtIDEwKSxNYXRoLmZsb29yKHRpbGVHcmlkLmhlaWdodC8yIC0gMTApLDIwLDIwKVxuICAgIC8vIE1hcEdlbkhlbHBlci5jcmVhdGVSb29tKHRpbGVHcmlkLCBuZXdSb29tKVxuICAgIC8vIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICAvLyBmaXJzdCB0aGluZ3MgZmlyc3QsIGxldHMgbGF5ZXIgc29tZSBiaWcgYXN0ZXJvaWRzIG9uIHRvcCBvZiBlYWNoIG90aGVyXG4gICAgdGlsZUdyaWQuZm9yRWFjaCgodDogVGlsZSk6IHZvaWQgPT4ge1xuICAgICAgICB0LmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgIHQuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgfSlcbiAgICAvLyBub3cgbGV0J3MgYnVpbGQgYW4gYXN0ZXJvaWQgd2l0aGluIHRoZSBib3VuZHNcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgU0VDVElPTl9DT1VOVDsgaSsrKXtcbiAgICAgICAgY29uc3QgeFJhZGl1cyA9IHJhbmRpbnQoTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTLCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMpXG4gICAgICAgIGNvbnN0IHlSYWRpdXMgPSByYW5kaW50KE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUywgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTKVxuICAgICAgICBjb25zdCBiaWdSYWRpdXMgPSBNYXRoLm1heCh4UmFkaXVzLCB5UmFkaXVzKVxuICAgICAgICBjb25zdCB4ID0gcmFuZGludChNQVJHSU5TICsgYmlnUmFkaXVzLCB0aWxlR3JpZC53aWR0aCAtIE1BUkdJTlMgLSBiaWdSYWRpdXMpXG4gICAgICAgIGNvbnN0IHkgPSByYW5kaW50KE1BUkdJTlMgKyBiaWdSYWRpdXMsIHRpbGVHcmlkLmhlaWdodCAtIE1BUkdJTlMgLSBiaWdSYWRpdXMpXG4gICAgICAgIHBsYWNlQXN0ZXJvaWRDaHVuayh0aWxlR3JpZCwgRWxsaXBzZS5tYWtlKHgseSx4UmFkaXVzLHlSYWRpdXMsIFJBTkRPTS5uZXh0KCkgKiBNYXRoLlBJICogMikpXG4gICAgfVxuICAgIC8vIG5vdyB3aXRoaW4gdGhpcyBmcmFtZXdvcmsgcnVuIHRoZSBuZXh0IG1hcCBnZW5lcmF0b3JcbiAgICBtYXBHZW5lcmF0b3IxKHRpbGVHcmlkLCByb29tcylcblxufVxuLy8gdG9kbywgYWxsb3cgdXMgdG8gd2F0Y2ggdGhpcyBpbiByZWFsIHRpbWUsIGFuZCBldmVuIHRvZ2dsZSBuZXh0XG5jb25zdCBtYXBHZW5lcmF0b3IzID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tczogSVJlY3RbXSk6IHZvaWQgPT4ge1xuICAgIHRpbGVHcmlkLmZvckVhY2goKHQpOiB2b2lkID0+IHtcbiAgICAgICAgdC5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICB0LmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB0LmNvbnRhaW5lZCA9IGZhbHNlXG4gICAgICAgIHQuZXhwbG9yZWQgPSB0cnVlIC8vIHJlbW92ZSBsYXRlclxuICAgIH0pXG5cbiAgICBjb25zdCBNQVJHSU5TID0gMTBcbiAgICBjb25zdCBNSU5fRElNRU5TSU9OID0gTWF0aC5taW4odGlsZUdyaWQud2lkdGgsIHRpbGVHcmlkLmhlaWdodClcbiAgICBjb25zdCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMgPSBNYXRoLmZsb29yKChNSU5fRElNRU5TSU9OIC0gTUFSR0lOUyAqIDIpLzIpXG4gICAgY29uc3QgTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTID0gTWF0aC5mbG9vcihNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMgKiAwLjcpXG4gICAgY29uc3QgU0VDVElPTl9DT1VOVCA9IDEwXG5cbiAgICBjb25zdCBhc3Rlcm9pZEVsbGlwc2VzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IFNFQ1RJT05fQ09VTlQ7IGkrKyl7XG4gICAgICAgIGNvbnN0IHhSYWRpdXMgPSByYW5kaW50KE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUywgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTKVxuICAgICAgICBjb25zdCB5UmFkaXVzID0gcmFuZGludChNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMsIE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUylcbiAgICAgICAgY29uc3QgYmlnUmFkaXVzID0gTWF0aC5tYXgoeFJhZGl1cywgeVJhZGl1cylcbiAgICAgICAgY29uc3QgeCA9IHJhbmRpbnQoTUFSR0lOUyArIGJpZ1JhZGl1cywgdGlsZUdyaWQud2lkdGggLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBjb25zdCB5ID0gcmFuZGludChNQVJHSU5TICsgYmlnUmFkaXVzLCB0aWxlR3JpZC5oZWlnaHQgLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBjb25zdCBlbGxpcHNlID0gRWxsaXBzZS5tYWtlKHgseSx4UmFkaXVzLHlSYWRpdXMsIFJBTkRPTS5uZXh0KCkgKiBNYXRoLlBJICogMilcbiAgICAgICAgYXN0ZXJvaWRFbGxpcHNlcy5wdXNoKGVsbGlwc2UpXG4gICAgICAgIHBsYWNlQXN0ZXJvaWRDaHVuayh0aWxlR3JpZCwgZWxsaXBzZSlcbiAgICB9XG4gICAgLy8gd2UgYXJlIGJ1aWxkaW5nIGEgc3F1YXJlIHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBlbGxpcHNlc1xuICAgIGxldCBsZWZ0WCA9IE1hdGguZmxvb3IodGlsZUdyaWQud2lkdGgvMiksIHJpZ2h0WCA9IE1hdGguZmxvb3IodGlsZUdyaWQud2lkdGgvMilcbiAgICBsZXQgdG9wWSA9IE1hdGguZmxvb3IodGlsZUdyaWQud2lkdGgvMiksIGJvdHRvbVkgPSBNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZHJhdyB0aGlzIGRlYnVnIGNvbnRhaW5lclxuICAgIGFzdGVyb2lkRWxsaXBzZXMuZm9yRWFjaCgoZWxsaXBzZTogSUVsbGlwc2UpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IG1heFJhZGl1cyA9IE1hdGgubWF4KGVsbGlwc2UueFJhZGl1cywgZWxsaXBzZS55UmFkaXVzKTtcbiAgICAgIGxlZnRYID0gTWF0aC5taW4obGVmdFgsIGVsbGlwc2UueCAtIG1heFJhZGl1cylcbiAgICAgIHRvcFkgPSBNYXRoLm1pbih0b3BZLCBlbGxpcHNlLnkgLSBtYXhSYWRpdXMpXG4gICAgICByaWdodFggPSBNYXRoLm1heChyaWdodFgsIGVsbGlwc2UueCArIG1heFJhZGl1cyAtIDEgKVxuICAgICAgYm90dG9tWSA9IE1hdGgubWF4KGJvdHRvbVksIGVsbGlwc2UueSArIG1heFJhZGl1cyAtIDEpXG4gICAgfSlcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBSZWN0Lm1ha2UobGVmdFgsIHRvcFksIHJpZ2h0WCAtIGxlZnRYLCBib3R0b21ZIC0gdG9wWSk7XG4gICAgY29uc29sZS5sb2coYm91bmRpbmdSZWN0KTtcbiAgICAvLyBNYXBHZW5IZWxwZXIuY3JlYXRlSFdhbGwodGlsZUdyaWQsIGxlZnRYLCByaWdodFgsIHRvcFkpXG4gICAgLy8gTWFwR2VuSGVscGVyLmNyZWF0ZVZXYWxsKHRpbGVHcmlkLCB0b3BZLCBib3R0b21ZLCBsZWZ0WClcbiAgICAvLyBNYXBHZW5IZWxwZXIuY3JlYXRlSFdhbGwodGlsZUdyaWQsIGxlZnRYLCByaWdodFgsIGJvdHRvbVkpXG4gICAgLy8gTWFwR2VuSGVscGVyLmNyZWF0ZVZXYWxsKHRpbGVHcmlkLCB0b3BZLCBib3R0b21ZLCByaWdodFgpXG4gICAgLy8gd2l0aGluIHRoaXMsIGxldCdzIGJ1aWxkIHJvb21zIGFuZCBzdHVmZlxuXG4gICAgZm9yKGxldCByID0gMDsgciA8IE1BWF9ST09NUzsgcisrKXtcblxuICAgICAgICBjb25zdCB3ID0gcmFuZGludChST09NX01JTl9TSVpFLCBST09NX01BWF9TSVpFKVxuICAgICAgICBjb25zdCBoID0gcmFuZGludChST09NX01JTl9TSVpFLCBST09NX01BWF9TSVpFKVxuICAgICAgICBjb25zdCB4ID0gcmFuZGludChsZWZ0WCwgcmlnaHRYIC0gdyAtIDEpXG4gICAgICAgIGNvbnN0IHkgPSByYW5kaW50KHRvcFksIGJvdHRvbVkgIC0gaCAtIDEpXG5cbiAgICAgICAgY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZSh4LHksdyxoKVxuICAgICAgICBsZXQgaW50ZXJzZWN0cyA9IGZhbHNlXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihSZWN0LmludGVyc2VjdHMobmV3Um9vbSwgcm9vbXNbaV0pKXtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWludGVyc2VjdHMpe1xuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIobmV3Um9vbSlcbiAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVSb29tKHRpbGVHcmlkLCBuZXdSb29tKVxuICAgICAgICAgICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFJvb20gPSByb29tc1tyb29tcy5sZW5ndGggLTFdXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENlbnRlciA9IFJlY3QuY2VudGVyKGxhc3RSb29tKVxuICAgICAgICAgICAgICAgIGlmKHJhbmRpbnQoMCwxKSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBsYXN0Q2VudGVyLnkpXG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBjZW50ZXIueClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBsYXN0Q2VudGVyLngpXG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBjZW50ZXIueSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBOb3cgbGV0J3MgcGxhY2Ugc29tZSBtb3JlIGVsbGlwc2VzXG5cbiAgICBmb3IobGV0IGUgPSAwOyBlIDwgQ0FWRV9FTExJUFNFUzsgZSsrKXtcbiAgICAgICAgY29uc3QgZWxsaXBzZSA9IHJhbmRvbUVsbGlwc2UoTWF0aC5mbG9vcihsZWZ0WCArIE1BWF9FTExJUFNFX1JBRElVUy8yKSwgTWF0aC5mbG9vcihyaWdodFggLSBNQVhfRUxMSVBTRV9SQURJVVMvMiksIE1hdGguZmxvb3IodG9wWSArIE1BWF9FTExJUFNFX1JBRElVUy8yKSwgTWF0aC5mbG9vcihib3R0b21ZIC0gTUFYX0VMTElQU0VfUkFESVVTLzIpKVxuICAgICAgICBNYXBHZW5IZWxwZXIuY2FydmVFbGxpcHNlKHRpbGVHcmlkLCBlbGxpcHNlIClcbiAgICB9XG5cbiAgICAvLyBsZXQncyBwbGFjZSBzb21lIGluaXRpYWwgYXN0ZXJvaWQgYnVtcHNcbn1cblxuZXhwb3J0IHsgbWFwR2VuZXJhdG9yMSwgbWFwR2VuZXJhdG9yMiwgbWFwR2VuZXJhdG9yMyB9XG4iLCIvLyBMZXQncyBnbyBhaGVhZCBhbmQgY3JlYXRlIHRoZSBQb2ludCBpbnRlcmZhY2UgaGVyZSwgd2UnbGwgZXhwb3J0IGl0IGZvciB1c2UgbGF0ZXIgaW4gdGhlIHByb2plY3RcblxuaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuLyoqXG4gKiBDbGFzcyB0byBoZWxwIG1vbml0b3IgdGhpbmdzIHRoYXQgaGF2ZSBoYXBwZW5lZCB0byB0aGUgbW91c2Ugc2luY2UgbGFzdCB0aW1lIHRoYXQgd2UgbG9va2VkXG4gKi9cblxuaW50ZXJmYWNlIEhhbGZDbGljayB7XG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICBpc0Rvd246IGJvb2xlYW47XG59XG5cbmNsYXNzIE1vdXNlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvdmVyIHRoZSBhdHRhY2hlZCBlbGVtbnRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgbGFzdCB0aW1lIHdlIGxvb2tlZFxuICAgICAqL1xuICAgIGhhc01vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRydWUgaWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGNvbnRhaW5lciBcbiAgICAgKi9cbiAgICBpbkNvbnRhaW5lcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGlzIHRoZSBtb3VzZSBidXR0b24gZG93biAoY3VycmVudGx5IG9ubHkgdHJhY2tzIGxlZnQpXG4gICAgICovXG4gICAgaXNEb3duOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgYSBmdWxsIGNsaWNrIGlzIHVwIGFuZCBkb3duLCB0aGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1cHMgYW5kIGRvd25zLCB1c2VmdWwgZm9yIGRyYWdzIG9yIG90aGVyIHRoaW5ncyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICovXG4gICAgaGFsZkNsaWNrczogSGFsZkNsaWNrW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50Lm1ha2UoMCwwKVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzID0gW11cbiAgICAgICAgLy8gVE9ETzogQWRkIGNsaWNrIHRyYWNraW5nLCBkZXBlbmRzIG9uIGhvdyBxdWlja2x5IHdlIGFyZSBwb2xsaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yIG1vdXNlIHJlbGF0ZWQgZXZlbnRzIHRvXG4gICAgICogQHBhcmFtIGVsZW1lbnQgdGhlIHBhcnRpY3VsYXIgbW91c2UgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogTW91c2VNb25pdG9yIHtcbiAgICAgICAgLy8gVE9ETzogV2UnbGwgcmVnaXN0ZXIgY2xpY2sgaGlzdG9yeSBpbiB0aGUgZnV0dXJlLCBmb3Igbm93IHdlIGFyZSBqdXN0IGRvaW5nIG1vdXNlIG92ZXIgYXQgcHJlc2VudFxuICAgICAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgUG9pbnQuc2V0KHRoaXMucG9zaXRpb24sIGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZW50ZXJzIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIG1vdmVzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGV4aXRzIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHJhaXNlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IGZhbHNlIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayB0aGF0IHdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgZXZlbnRzIHNpbmNlIG91ciBsYXN0IHBvbGwgb2Ygc3RhdGUgYW5kIGl0IGNhbiBiZSByZXNldFxuICAgICAqL1xuICAgIHJlc2V0KCk6IHZvaWR7XG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgaGF2ZW4ndCBtb3ZlZCBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIC8vIGNsZWFyIG91dCB0aGUgY2xpY2tzXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcy5sZW5ndGggPSAwXG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZU1vbml0b3IgfSIsImxldCBfaWQgPSAwXG5jb25zdCBuZXh0SWQgPSAoKTogbnVtYmVyID0+IF9pZCsrXG5cbi8vIFRPRE86IE1ha2UgbWVzc2FnZXMgZW51bXM/XG5cbi8vIFRPRE86IE1ha2UgYW4gaW50ZXJmYWNlIGZvciB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxudHlwZSBTdWJzY3JpYmVyRnVuY3Rpb24gPSAobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKSA9PiB2b2lkXG5cbmludGVyZmFjZSBTdWJzY3JpYmVyTm9kZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uO1xuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xufVxuXG5cblxuY29uc3QgbWFrZVN1Yk5vZGUgPSAoc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDAsIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbCA9IG51bGwpOiBTdWJzY3JpYmVyTm9kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5leHRJZCgpLFxuICAgICAgICBzdWJGbixcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5leHRcbiAgICB9XG59XG5cbi8vIFRPRE86ID8/IE1ha2UgaXQgc28gYSBzdWJzY3JpYmVyIGxpc3QgY291bGQgYmUgZGVhZmVuZWQvbGlzdGVuP1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgZnVuY3Rpb25zLCBzb3J0ZWQgYnkgcHJpb3JpdHksIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseSB3aGVuIHRoZSBsaXN0IGlzIG5vdGlmaWVkIG9mIGEgbmV3IG1lc3NhZ2VcbiAqL1xuY2xhc3MgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCB7XG4gICAgcm9vdDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIHRhaWw6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGxcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGlzIGxpc3QgdmlhIHRoZSBub3RpZnkgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIG1lc3NhZ2Ugb2JqZWN0IHdoZW5ldmVyIHRoaXMgc3Vic2NyaWJlciBsaXN0IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgaGlnaGVyIHRoZSBwcmlvcml0eSwgdGhlIGVhcmxpZXIgaXQgd2lsbCBydW4sIGlmIGl0IGhhcyB0aGUgc2FtZSBwcmlvcml0eSB0aGUgb25lIHRoYXQgd2FzIGFkZGVkIGZpcnN0IHdpbGwgZmlyZSBmaXJzdFxuICAgICAqL1xuICAgIHN1YnNjcmliZShmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlcntcbiAgICAgICAgLy8gQ2FzZSAjMSBFbXB0eSBTdWJzY3JpYmVyIExpc3RcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5yb290XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UgIzIgV2UgYWxyZWFkeSBoYXZlIHNvbWUgc3Vic2NyaWJlcnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290IC8vIHdlIGtub3cgaXQgc2hvdWxkIGJlIGEgU3Vic2NyaWJlciBOb2RlIGFuZCBub3QgbnVsbCwgYmVjYXVzZSB3ZSBhcmUgaGVyZVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIG5ldyByb290XG4gICAgICAgICAgICBpZihwcmlvcml0eSA8IHRyYXZlbGxlciEucHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdGhpcy5yb290KVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWwgY2FzZSB3ZSBoYXZlIG90aGVyIHRoaW5ncyB0byB3b3JyeSBhYm91dFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUodHJhdmVsbGVyICYmIHRyYXZlbGxlci5uZXh0ICYmIHRyYXZlbGxlci5uZXh0LnByaW9yaXR5ID49IHByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBlaXRoZXIgZm91bmQgYSBub2RlIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiB1cyBvciB3ZSBoYXZlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICAgICB0cmF2ZWxsZXIhLm5leHQgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRyYXZlbGxlciEubmV4dClcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRyYXZlbGxlcnMgd2FzIHRoZSBvbGQgdGFpbFxuICAgICAgICAgICAgICAgIGlmKHRyYXZlbGxlciA9PT0gdGhpcy50YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBuZXh0IG9uZSBpcyB0aGUgbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdHJhdmVsbGVyIS5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsbGVyIS5uZXh0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbW9zdCBpbXBvcmFudCBpbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRvcGljIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBwdWJzdWIgdG8gcmVtaW5kIHRoZSBzdWJzY3JpYmVyIG9mIHRoZSBzcGVjaWZpYyB0b3BpYyBvciBzdWJ0b3BpY1xuICAgICAqL1xuICAgIG5vdGlmeShtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdFxuICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICB0cmF2ZWxsZXIuc3ViRm4obWVzc2FnZSwgdG9waWMpXG4gICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSIsImltcG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IGZyb20gJy4vcHJpb3JpdHlTdWJzY3JpYmVyTGlzdCdcblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogUHVic3ViIGlzIGEgdG9waWMtYmFzZWQgb2JzZXJ2ZXIgcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBkZXNpZ25lZCB0byBhdm9pZCB0aWdodCBjb3VwbGluZyBvZiBjb21wb25lbnRzXG4gKi9cbmNsYXNzIFB1YlN1YiB7XG4gICAgdG9waWNzOiBIYXNoPFByaW9yaXR5U3Vic2NyaWJlckxpc3Q+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9waWNzID0ge31cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBtZXNzYWdlIHRvIGFsbCBzdWJzY3JpYmVycyB0byBhIHRvcGljXG4gICAgICogQHBhcmFtIHRvcGljIFRvcGljIHRvIHVzZSwgaWYgbm9ib2R5IGlzIHN1YnNjcmliZWQgdG8gaXQsIG5vdGhpbmcgaGFwcGVuc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBhY3R1YWwgbWVzc2FnZSB0byBzZW5kLCB0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBidXQgaXQncyBhIHNpbmdsZSB0aGluZ1xuICAgICAqL1xuICAgIHB1Ymxpc2godG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10ubm90aWZ5KG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIHNwZWNpZmljIHRvcGljIHdpdGggYSBnaXZlbiBwcmlvcml0eSwgcmV0dXJucyBhbiBpZCB0aGF0IHlvdSdsbCBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHRvcGljIHRoZSBzcGVjaWZpYyB0b3BpYyB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gZm4gdGhlIGZ1bmN0aW9uIHRvIHJlY2lldmUgdGhlIHNwZWNpZmljIG1lc3NhZ2UgYW5kIHRvcGljIGJlaW5nIGJyb2FkY2FzdGVkIHRvXG4gICAgICogQHBhcmFtIHByaW9yaXR5IHRoZSBwcmlvcml0eSBvZiB0aGUgZnVuY3Rpb24gdG8gc3Vic2NyaWJlIHRvLCBoaWdoZXIgbnVtYmVycyBydW4gZmlyc3QsIHRoZSBkZWZhdWx0IGlzIHplcm8sIG5lZ2F0aXZlIG51bWJlcnMgYXJlIGFsbG93ZWRcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBpZighdGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXSA9IG5ldyBQcmlvcml0eVN1YnNjcmliZXJMaXN0KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b3BpY3NbdG9waWNdLnN1YnNjcmliZShmbiwgcHJpb3JpdHkpXG4gICAgfVxufVxuLy8gT1VSIFVOSVZFUlNBTCBERUZBVUxUIFBVQlNVQlxuY29uc3QgUFVCU1VCID0gbmV3IFB1YlN1YigpXG5leHBvcnQge1BVQlNVQiwgUHViU3VifSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXIgQ2VsbFxuICovXG5pbnRlcmZhY2UgSVJlbmRlckNlbGwge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7IC8vIHRoaXMgc2hvdWxkIG9ubHkgYmUgc3RyaW5nIG9mIGxlbmd0aCAxXG4gICAgZm9yZUNvbG9yOiBzdHJpbmc7XG4gICAgYmFja0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCx5LCBjaGFyYWN0ZXIsIGZvcmVDb2xvciwgYmFja0NvbG9yXG4gICAgfVxufVxuXG5jb25zdCBSZW5kZXJDZWxsID0ge1xuICAgIG1ha2Vcbn1cblxuZXhwb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGx9IiwiaW1wb3J0IHtJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBIYXNoU3RyPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuaW50ZXJmYWNlIEhhc2hOdW08VD4ge1xuICAgIFtrZXk6IG51bWJlcl06IFQ7XG59XG5cbmNvbnN0IGNvZGUgPSAoY2hhcjogc3RyaW5nKTogbnVtYmVyID0+IGNoYXIuY2hhckNvZGVBdCgwKVxuY29uc3QgQ0hBUkFDVEVSX0hFTFBFUjogSGFzaFN0cjxzdHJpbmc+ID0ge1xuICAgIFZFUlRJQ0FMX0xJTkU6ICfilIInLFxuICAgIEhPUklaT05UQUxfTElORTogJ+KUgCcsXG4gICAgQ1JPU1NfTElORVM6ICfilLwnLFxuICAgIFRfTEVGVDogJ+KUpCcsXG4gICAgVF9VUDogJ+KUtCcsXG4gICAgVF9SSUdIVDogJ+KUnCcsXG4gICAgVF9ET1dOOiAn4pSsJyxcbiAgICBUT1BfUklHSFQ6ICfilJQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ+KUjCcsXG4gICAgQk9UVE9MX0xFRlQ6ICfilJAnLFxuICAgIFRPUF9MRUZUOiAn4pSYJ1xufVxuXG5jb25zdCBUSUxFX1dJRFRIID0gMTAsIFRJTEVfSEVJR0hUID0gMTBcblxuY29uc3QgQ09ERV9UT19SRUNUX0hBU0g6IEhhc2hOdW08SVJlY3Q+ID0ge31cbmNvbnN0IHNwYWNlQ29kZSA9ICAgY29kZSgnICcpXG5jb25zdCBhdENvZGUgPSAgICAgIGNvZGUoJ0AnKVxuY29uc3QgYUNvZGUgPSAgICAgICBjb2RlKCdhJylcbmNvbnN0IHpDb2RlID0gICAgICAgY29kZSgneicpXG5jb25zdCBBQ29kZSA9ICAgICAgIGNvZGUoJ0EnKVxuY29uc3QgWkNvZGUgPSAgICAgICBjb2RlKCdaJylcblxuXG5jb25zdCBjdHJoSGVscGVyID0gKGNvZGU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlXSA9IFJlY3QubWFrZSh4LHksIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuXG4vLyBXZSB3aWxsIGZpbGwgaW4gdGhlIG90aGVyIGNoYXJhY3RlcnMgYXMgbmVjZXNzYXJ5XG5DT0RFX1RPX1JFQ1RfSEFTSFtzcGFjZUNvZGVdID0gUmVjdC5tYWtlKDAsIDAsIDEwLCAxMClcbkNPREVfVE9fUkVDVF9IQVNIW2F0Q29kZV0gPSBSZWN0Lm1ha2UoMCwgMTAsIDEwLCAxMClcbmZvcihsZXQgaSA9IEFDb2RlOyBpIDw9IFpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gQUNvZGUpICogMTAsIDMwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbmZvcihsZXQgaSA9IGFDb2RlOyBpIDw9IHpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gYUNvZGUpICogMTAsIDQwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbi8vIGZvciBicmV2aXRpZXMgc2FrZVxuY29uc3QgQ0ggPSBDSEFSQUNURVJfSEVMUEVSXG5jdHJoSGVscGVyKGNvZGUoQ0guVkVSVElDQUxfTElORSksIDE0MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5IT1JJWk9OVEFMX0xJTkUpLCAxNTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQ1JPU1NfTElORVMpLCAxNjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9MRUZUKSwgMTcwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfVVApLCAxODAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9SSUdIVCksIDE5MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0RPV04pLCAyMDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX1JJR0hUKSwgMjEwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTV9SSUdIVCksIDIyMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT0xfTEVGVCksIDIzMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfTEVGVCksIDI0MCwxMClcblxuXG5mdW5jdGlvbiBkcmF3U2VjdGlvbihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGlsZXNoZWV0OiBhbnksIHNyY1JlY3Q6IElSZWN0LCBkZXN0UmVjdDogSVJlY3QsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IHZvaWR7XG4gICAgY3R4LmNsZWFyUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNoZWV0LCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53aWR0aCwgc3JjUmVjdC5oZWlnaHQsIGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICd4b3InXG4gICAgY3R4LmZpbGxTdHlsZT1mb3JlQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJ1xuICAgIGN0eC5maWxsU3R5bGU9YmFja0NvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xufVxuXG5leHBvcnQgIHsgQ09ERV9UT19SRUNUX0hBU0gsIENIQVJBQ1RFUl9IRUxQRVIsIGNvZGUsIGRyYXdTZWN0aW9uIH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvR3JpZCA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgZW50aXRpZXM6IEVudGl0eVtdLCByZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgY2FtZXJhRnJhbWU6IElSZWN0KTogdm9pZCA9PiB7XG4gICAgLy8gcmVuZGVyR3JpZCBpcyBpbiBTQ1JFRU4gY29vcmRpbmF0ZXMsIGFuZCB3aWxsIGhhdmUgaXQncyBYWSBpZ25vcmVkIGZvciBvdXIgcHVycG9zZXNcbiAgICAvLyB0aWxlR3JpZCwgZW50aXRpZXMgYW5kIGZvdkdyaWQgYXJlIGluIFdPUkxEIGNvb3JkaW5hdGVzIGFuZCB3aWxsIGhhdmUgdGhlaXIgWFkgYW5kIHkgaWdub3JlZCBmb3Igbm93XG5cbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgcmVuZGVyR3JpZCBhbmQgdGhlIGNhbWVyYXNcbiAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICBQb2ludC5zZXQod29ybGRQLCBzY3JlZW5QLnggKyBjYW1lcmFGcmFtZS54LCBzY3JlZW5QLnkgKyBjYW1lcmFGcmFtZS55KVxuXG4gICAgICAgICAgICAvLyBMZXQncyBkbyBzb21lIGJvdW5kcyBjaGVja2luZ1xuICAgICAgICAgICAgLy8gd2Uga25vdyB0aGVzZSBwb2l0bnMgYXJlIGFsd2F5cyBpbiBjYW1lcmFzLCBzbyBuZXZlciBuZWVkIHRvIGNoZWNrIHRoYXRcbiAgICAgICAgICAgIC8vIHdlIGFyZSBnb2luZyB0byBvZmZsb2FkIHRoZSBjYXNlIG9mIGNoZWNraW5nIGlmIHRoZSByZW5kZXJHcmlkIGNhbiBmaXQgdGhlIGNhbWVyYVNpemUgZm9yIG5vd1xuICAgICAgICAgICAgLy8gc28gZm9yIG5vdyBqdXN0IGNoZWNrIGlmIHdlIGFyZSBpbnNpZGUgb2YgdGhlIHRpbGVHcmlkLCB3aGljaCBjdXJyZW50bHkgc2hvdWxkIGJlIHRoZSBzYW1lIGRpbWVuc2lvbnMgYXMgdGhlIGZvdkdyaWQsIHRob3VnaCB0aGF0IGlzIGJvdW5kIHRvIGNoYW5nZSBhcyB3ZSB0cnkgYW5kIG9wdGltaXplIHRoaW5nc1xuICAgICAgICAgICAgLy8gc29vb29vbywgbGV0J3MgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSB0aGUgdGlsZUdyaWRcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBsZXQgaXNMaXQgPSBmb3ZDZWxsLnZpc2libGUgLy8gaXQncyBsaXQgZmFtLCB3ZWxsLCBzb21lIG9mIHRoZSB0aW1lXG4gICAgICAgICAgICBsZXQgaW5Cb3VuZHMgPSB0aWxlR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSlcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lZCBvdXIgZXhwbG9yYXRpb24gc3RhdGVcbiAgICAgICAgICAgIC8vIFRoaXMgaGFzIGJldHRlciBydWxlcyB0byBiZSBmaWd1cmVkIG91dFxuICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSAnJ1xuICAgICAgICAgICAgaWYoIWluQm91bmRzKXsgLy8gdHJlYXQgZXZlcnl0aGluZyBvdXRzaWRlIG9mIHRoZSBib3VuZHMgYXMgZXhwbG9yZWQgSSBzdXBwb3NlP1xuICAgICAgICAgICAgICBpZihpc0xpdCl7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkod29ybGRQLngsIHdvcmxkUC55KVxuICAgICAgICAgICAgICBpZighdGlsZS5leHBsb3JlZCl7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2s7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQUREIERPT1JTXG4gICAgICAgICAgICAgICAgY29uc3QgaXNXYWxsID0gdGlsZS5ibG9ja01vdmUgJiYgdGlsZS5ibG9ja1NpZ2h0XG4gICAgICAgICAgICAgICAgY29uc3QgaXNHcm91bmQgPSAhaXNXYWxsICYmIHRpbGUuY29udGFpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTcGFjZSA9ICFpc1dhbGwgJiYgIXRpbGUuY29udGFpbmVkXG5cbiAgICAgICAgICAgICAgICBpZihpc1NwYWNlKXtcbiAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19vdXRzaWRlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzR3JvdW5kKXtcbiAgICAgICAgICAgICAgICAgIGlmKGlzTGl0KXtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfZ3JvdW5kXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc1dhbGwpe1xuICAgICAgICAgICAgICAgICAgaWYoaXNMaXQpe1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF93YWxsXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX3dhbGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgZW50aXR5LnggLSBjYW1lcmFGcmFtZS54LCBlbnRpdHkueSAtIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIG9mIHRoZSBjYW1lcmEgYm91bmRzXG4gICAgICAgIGlmKGNhbWVyYUZyYW1lLnggPD0gZW50aXR5LnggJiYgZW50aXR5LnggPD0gY2FtZXJhRnJhbWUueCArIGNhbWVyYUZyYW1lLndpZHRoIC0gMSAmJlxuICAgICAgICAgICAgY2FtZXJhRnJhbWUueSA8PSBlbnRpdHkueSAmJiBlbnRpdHkueSA8PSBjYW1lcmFGcmFtZS55ICsgY2FtZXJhRnJhbWUuaGVpZ2h0IC0gMSl7XG4gICAgICAgICAgICBjb25zdCByQ2VsbDogSVJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGw6IEZPVkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgICAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KVxufVxuIiwiLy8gV0FSTklORzogSEVSRSBUSEVSRSBCRSBEUkFHT05TLCAob3IgaW4gdGhpcyBjYXNlLCBhIGxvdCBvZiBjb2RlIEkgZG9uJ3R1bmRlcnN0YW5kKVxuXG4vLyBXRSBPTkxZIFdBTlQgT05FIFJORyBHRU5FUkFUT1IgQkVDQVVTRSBXRSBBTFdBWVMgV0FOVCBBIFNFRUQgRk9SIElUXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MjEyOTUvc2VlZGluZy10aGUtcmFuZG9tLW51bWJlci1nZW5lcmF0b3ItaW4tamF2YXNjcmlwdFxuXG4vLyBIYXNoaW5nIGZ1bmN0aW9uIGZvciB0YWtpbmcgc2ltcGxlIHN0cmluZyBhbmQgY3JlYXRpbmcgYmV0dGVyIFwidHJ1ZVwiIHNlZWRzXG4vLyBJIEhBVkUgTk8gSURFQSBXSEFUIFRIRSBNQUdJQyBOVUJNRVJTIEFSRSBGT1JcbmZ1bmN0aW9uIHhtdXIzKHN0cjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCBoID0gMTc3OTAzMzcwMyBeIHN0ci5sZW5ndGggLy8gYml0d2lzZSBvciB0aGUgc3RyaW5nIHdpdGggdGhpcyByYW5kb20gdGhpbmdcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gc3RyLmNoYXJDb2RlQXQoaSksIDM0MzI5MTgzNTMpXG4gICAgICAgIGggPSBoIDw8IDEzIHwgaCA+Pj4gMTlcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxNiwgMjI0NjgyMjUwNylcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTMsIDMyNjY0ODk5MDkpXG4gICAgICAgIHJldHVybiAoaCBePSBoID4+PiAxNikgPj4+IDBcbiAgICB9XG59XG5cbnR5cGUgSVJhbmRvbSA9KCkgPT4gbnVtYmVyO1xuXG4vLyBHRU5FUkFUT1JTXG5mdW5jdGlvbiBzZmMzMihhOiBhbnksIGI6IGFueSwgYzogYW55LCBkOiBhbnkpOiAoRnVuY3Rpb24pe1xuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGEgPj4+PSAwOyBiPj4+PSAwOyBjID4+Pj0gMDsgZCA+Pj49IDBcbiAgICAgICAgbGV0IHQgPSAoYSArIGIpIHwgMFxuICAgICAgICBhID0gYiBeIGIgPj4+IDlcbiAgICAgICAgYiA9IGMgKyAoYyA8PCAzKSB8IDBcbiAgICAgICAgYyA9IChjIDw8IDIxIHwgYyA+Pj4gMTEpXG4gICAgICAgIGQgPSBkICsgMSB8IDBcbiAgICAgICAgdCA9IHQgKyBkIHwgMFxuICAgICAgICBjID0gYyArIHQgfCAwXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHQgPj4+IDApIC8gNDI5NDk2NzI5NlxuICAgIH1cbn1cblxuLy8gT05FIExJTkVSIENVUlJFTlRMWSBOT1QgSU4gVVNFXG4vLyBjb25zdCBMQ0c9IChzOiBhbnkpOiBGdW5jdGlvbj0+KCk6IGFueT0+KDIqKjMxLTEmKHM9TWF0aC5pbXVsKDQ4MjcxLHMpKSkvMioqMzE7XG5cbmNvbnN0IFJBTkRPTSA9IHtcbiAgICBfZ2VuZXJhdG9yOiAoKCk6IGFueSA9PiB7fSkgYXMgRnVuY3Rpb24sXG4gICAgc2VlZDogZnVuY3Rpb24oc2VlZFN0cjogc3RyaW5nID0gYnRvYShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpICk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB4bXVyMyhzZWVkU3RyKVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3IgPSBzZmMzMihzZWVkKCksIHNlZWQoKSwgc2VlZCgpLCBzZWVkKCkpXG4gICAgICAgIHJldHVybiBzZWVkU3RyXG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpOiBhbnkge1xuICAgICAgICBpZih0aGlzLl9nZW5lcmF0b3IgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5zZWVkKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdG9yKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFJBTkRPTSB9IiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9yZWN0J1xuXG4vKipcbiAqIFggYW5kIFkgYXJlIHRoZSBDRU5URVIgb2YgdGhlIGVsbGlwc2UgKHVubGlrZSB0aGUgdG9wIGxlZnQgZm9yIElSZWN0KVxuICovXG5pbnRlcmZhY2UgSUVsbGlwc2UgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHhSYWRpdXM6IG51bWJlcjtcbiAgICB5UmFkaXVzOiBudW1iZXI7XG4gICAgcm90YXRpb246IG51bWJlcjtcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgeFJhZGl1czogbnVtYmVyLCB5UmFkaXVzOiBudW1iZXIsIHJvdGF0aW9uOiBudW1iZXIgPSAwKTogSUVsbGlwc2UgPT4ge1xuICAgIHJldHVybiB7eCwgeSwgeFJhZGl1cywgeVJhZGl1cywgcm90YXRpb259XG59XG5cblxuLyoqXG4gKiBDb250YWlucyBYWVxuICogQHBhcmFtIGVsbGlwc2UgXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBjb250YWluc1hZID0gKGVsbGlwc2U6IElFbGxpcHNlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGVsbGlwc2Uucm90YXRpb24pLCBzaW4gPSBNYXRoLnNpbihlbGxpcHNlLnJvdGF0aW9uKVxuICAgIGNvbnN0IGR4ID0gKHggLSBlbGxpcHNlLngpLCBkeSA9ICh5IC0gZWxsaXBzZS55KVxuICAgIGNvbnN0IHRkeCA9IGNvcyAqIGR4ICsgc2luICogZHksIHRkeSA9IHNpbiAqIGR4IC0gY29zICogZHlcblxuICAgIHJldHVybiAoICh0ZHggKiB0ZHgpIC8gKGVsbGlwc2UueFJhZGl1cyogZWxsaXBzZS54UmFkaXVzKSArICh0ZHkgKiB0ZHkpLyhlbGxpcHNlLnlSYWRpdXMgKiBlbGxpcHNlLnlSYWRpdXMpICkgPCAxXG59XG4vKipcbiAqIERvZXMgdGhlIGVsbGlwc2UgY29udGFpbiB0aGUgcG9pbnRcbiAqIEBwYXJhbSBlbGxpcHNlIFxuICogQHBhcmFtIHBvaW50IFxuICovXG5jb25zdCBjb250YWluc1BvaW50ID0gKGVsbGlwc2U6IElFbGxpcHNlLCBwb2ludDogSVBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zWFkoZWxsaXBzZSwgcG9pbnQueCwgcG9pbnQueSlcbn1cblxuLy8gXG4vKipcbiAqIEFyZSBlbm91Z2ggY29ybmVycyBpbnNpZGUgdGhlIFJlY3QgdG8gYmUgY29uc2lkZXJlZCBpbnNpZGVcbiAqIEBwYXJhbSBlbGxpcHNlIGVsbGlwc2VcbiAqIEBwYXJhbSByZWN0IHJlY3QgdG8gdGVzdCBpZiBpdCdzIGVkZ2VzIGFyZSBpbnNpZGUgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB0aHJlc2hvbGQgaG93IG1hbnkgY29ybmVycyBtdXN0IGJlIGluc2lkZSB0byBjb3VudCwgZGVmYXVsdHMgdG8gNFxuICovXG5jb25zdCBjb250YWluc1JlY3RDb3JuZXJzID0gKGVsbGlwc2U6IElFbGxpcHNlLCByZWN0OiBJUmVjdCwgdGhyZXNob2xkOiBudW1iZXIgPSA0KTogYm9vbGVhbiA9PiB7XG4gICAgbGV0IGNvcm5lcnNJbiA9IDBcbiAgICBjb25zdCBjb3JuZXJzID0gUmVjdC5jb3JuZXJzKHJlY3QpXG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLnRyKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy50bCkpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMuYmwpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLmJyKSl7IGNvcm5lcnNJbisrfVxuICAgIHJldHVybiBjb3JuZXJzSW4gPj0gdGhyZXNob2xkXG59XG5cbmNvbnN0IEVsbGlwc2UgPSB7XG4gICAgbWFrZSxcbiAgICBjb250YWluc1hZLFxuICAgIGNvbnRhaW5zUG9pbnQsXG4gICAgY29udGFpbnNSZWN0Q29ybmVyc1xufVxuXG5leHBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmtpbmcgd2l0aCBhIDJEIFBvaW50XG4gKi9cbmludGVyZmFjZSBJUG9pbnQgeyAgXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgUG9pbnRcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiB7eCx5fVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgcG9pbnQgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGFkZGluZyBib3RoIG9mIHRoZW0gdG9nZXRoZXIsIGlmIHlvdSB3YW50IHRvIGFkZCBhIHBvaW50IFRPIGFub3RoZXIgcG9pbnQsIHVzZSBhZGRUb1xuICogQHBhcmFtIGEgRmlyc3QgUG9pbnQsIHVubW9kaWZpZWRcbiAqIEBwYXJhbSBiIFNlY29uZCBQb2ludCwgdW5tb2RpZmllZFxuICovXG5jb25zdCBhZGQgPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKGEueCArIGIueCwgYS55ICsgYi55KVxufVxuXG4vKipcbiAqIEFkZCB0aGUgdmFsdWUgb2YgUG9pbnQgYSB0byBQb2ludCBiXG4gKiBAcGFyYW0gYSBUaGUgcG9pbnQgdGhhdCBjaGFuZ2VzLCB3aWxsIGhhdmUgYiBhZGRlZCB0byBpdFxuICogQHBhcmFtIGIgVGhlIHBvaW50IHdob3NlIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBvdGhlciwgaXQgaXMgdW5tb2RpZmllZCBpdHNlbGZcbiAqL1xuY29uc3QgYWRkVG8gPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIGEueCArPSBiLnhcbiAgICBhLnkgKz0gYi55XG4gICAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlcyBvZiBhIHBvaW50IHdpdGggeCBhbmQgeSB2YWx1ZXMsIHJldHVybnMgdGhlIG5vdyBtb2RpZmllZCBwb2ludFxuICogQHBhcmFtIHBvaW50IHBvaW50IHRvIGJlIG1vZGlmaWVkXG4gKiBAcGFyYW0geCBuZXcgeCB2YWx1ZVxuICogQHBhcmFtIHkgbmV3IHkgdmFsdWVcbiAqL1xuY29uc3Qgc2V0ID0gKHBvaW50OiBJUG9pbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICBwb2ludC54ID0geFxuICAgIHBvaW50LnkgPSB5XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQ29weSBhIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgUG9pbnQgdGhhdCB3aWxsIGJlIGNvcGllZFxuICovXG5jb25zdCBjb3B5ID0gKHBvaW50OiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBtZWFudCB0byB3b3JrIHdpdGggdGhpbmdzIHRoYXQgaGF2ZSB0aGUgSVBvaW50IGludGVyZmFjZVxuICovXG5jb25zdCBQb2ludCA9IHtcbiAgICBtYWtlLFxuICAgIGFkZCxcbiAgICBhZGRUbyxcbiAgICBzZXQsXG4gICAgY29weVxufVxuXG5leHBvcnQge0lQb2ludCwgUG9pbnR9IiwiaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3BvaW50J1xuaW50ZXJmYWNlIElSZWN0IGV4dGVuZHMgSVBvaW50IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RTaWRlcyB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdENvcm5lcnMge1xuICAgIHRsOiBJUG9pbnQ7XG4gICAgdHI6IElQb2ludDtcbiAgICBibDogSVBvaW50O1xuICAgIGJyOiBJUG9pbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICogQHBhcmFtIHdpZHRoIFxuICogQHBhcmFtIGhlaWdodCBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH1cbn1cblxuY29uc3Qgc2V0ID0gKHI6IElSZWN0LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgci54ID0geFxuICAgIHIueSA9IHlcbiAgICByLndpZHRoID0gd2lkdGhcbiAgICByLmhlaWdodCA9IGhlaWdodFxuICAgIHJldHVybiByXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSB1bml0IHZhbHVlIG9mIHRoZSBzaWRlcyBvZiB0aGUgcmVjdGFuZ2xlLCBsZWZ0IGFuZCByaWdodCByZXR1cm4geCBjb29yZGluYXRlcywgdG9wIGFuZCBib3R0b20gaW5jbHVkZSB5IGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gcmVjdCByZWN0YW5nbGUgdXNlZFxuICovXG5jb25zdCBzaWRlcyA9IChyZWN0OiBJUmVjdCk6IElSZWN0U2lkZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfVxufVxuY29uc3QgY29ybmVycyA9IChyZWN0OiBJUmVjdCk6IElSZWN0Q29ybmVycyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkpLFxuICAgICAgICB0cjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkpLFxuICAgICAgICBibDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICAgICAgYnI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBwb2ludDogTk9URTogVGhpcyBmaW5kcyB0aGUgSU5URUdFUiBjZW50ZXIsIGNvb3JkaW5hdGVzIGFyZSB0cnVuY2F0ZWRcbiAqIEBwYXJhbSByZWN0IFRoZSByZWN0YW5nbGUgd2UgYXJlIGZpbmRpbmcgdGhlIGNlbnRlciBvZlxuICovXG5jb25zdCBjZW50ZXIgPSAocmVjdDogSVJlY3QpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBQb2ludC5tYWtlKE1hdGguZmxvb3IocmVjdC54ICsgcmVjdC53aWR0aC8yKSwgTWF0aC5mbG9vcihyZWN0LnkgKyByZWN0LmhlaWdodC8yKSlcbn1cblxuLy8gT1BUSU1JWkU6IERvbid0IGNhbGwgc2lkZXMsIGp1c3QgdXNlIHRoZSByYXcgbnVtYmVycyBhbmQgYWRkaXRpb25cbmNvbnN0IGludGVyc2VjdHMgPSAoYTogSVJlY3QsIGI6IElSZWN0KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgYVNpZGVzID0gc2lkZXMoYSlcbiAgICBjb25zdCBiU2lkZXMgPSBzaWRlcyhiKVxuICAgIHJldHVybiBhU2lkZXMubGVmdCA8PSBiU2lkZXMucmlnaHQgJiYgYVNpZGVzLnJpZ2h0ID49IGJTaWRlcy5sZWZ0ICYmIFxuICAgICAgICBhU2lkZXMudG9wIDw9IGJTaWRlcy5ib3R0b20gJiYgYVNpZGVzLmJvdHRvbSA+PSBiU2lkZXMudG9wXG5cbiAgICAgICAgXG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHJlY3RhbmdsZXNcbiAqL1xuY29uc3QgUmVjdCA9IHtcbiAgICBtYWtlLFxuICAgIHNldCxcbiAgICBzaWRlcyxcbiAgICBjb3JuZXJzLFxuICAgIGNlbnRlcixcbiAgICBpbnRlcnNlY3RzXG59XG5cbmV4cG9ydCB7SVJlY3QsIFJlY3R9XG4iLCIvLyBJIGd1ZXNzIGV2ZXJ5dGhpbmcgd291bGQgbmVlZCBpdCdzIG93biBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi4uLiBncm9zc1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBsb2NhdGlvbnMgb24gdGhlIGJvYXJkLCBldmVudHVhbGx5IHdlIHdpbGwgcHJvYmFibHkgbW92ZSB0aGlzIGludG8gaXRzIG93biBFQ1Mgc3lzdGVtXG4gKi9cbmNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGJsb2NrTW92ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgdGlsZSBibG9jayBsaW5lIG9mIHNpZ2h0XG4gICAgICovXG4gICAgYmxvY2tTaWdodDogYm9vbGVhbjtcblxuICAgIGV4cGxvcmVkOiBib29sZWFuO1xuXG4gICAgY29udGFpbmVkOiBib29sZWFuOyAvLyBtb2RlbHMgaWYgdGhpcyB0aGluZyBoYXMgYSBmbG9vciBhbmQgY2VpbGluZywgKG9yLCBpbiB1bml2ZXJzZSwgc3R1ZmYgc3Vycm91bmRpbmcgaXQgb24gdGhlIHotYXhpcylcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIHRoaXMuZXhwbG9yZWQgPSBmYWxzZVxuICAgICAgICBpZihibG9ja1NpZ2h0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tNb3ZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja1NpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZWQgPSB0cnVlXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgVGlsZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==