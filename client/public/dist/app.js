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
/* harmony import */ var _handleINput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./handleINput */ "./client/src/handleINput.ts");
/* harmony import */ var _renderToGrid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./renderToGrid */ "./client/src/renderToGrid.ts");
















//import { MapGenHelper } from './mapGenHelper'



// sizing
// THESE ARE IN TILE SIZES
const { TILE_WIDTH, TILE_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT, MAP_WIDTH, MAP_HEIGHT, CAMERA_WIDTH, CAMERA_HEIGHT, FOV_RADIUS } = _gameSettings__WEBPACK_IMPORTED_MODULE_16__["default"];
const ENABLE_FOV = false;
// Let's look for query params with which to seed the generator
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
const canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH * TILE_WIDTH;
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT;
const km = new _keyboardMonitor__WEBPACK_IMPORTED_MODULE_0__["KeyboardMonitor"]().attach(document);
const mm = new _mouseMonitor__WEBPACK_IMPORTED_MODULE_1__["MouseMonitor"]().attach(canvas);
const renderer = new _canvasRenderer__WEBPACK_IMPORTED_MODULE_7__["CanvasRenderer"]();
const cameraFrame = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].make(0, 0, CAMERA_WIDTH, CAMERA_HEIGHT); // CAMERA IS IN WORLD CELLS, NOT ABSOLUTE UNITS
const renderGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
renderGrid.setEach((cell, index, x, y) => {
    return _renderCell__WEBPACK_IMPORTED_MODULE_3__["RenderCell"].make(x, y, ' ', _colors__WEBPACK_IMPORTED_MODULE_15__["default"].black, _colors__WEBPACK_IMPORTED_MODULE_15__["default"].dark_ground);
});
const tileGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
tileGrid.setEach((cell, index, x, y) => {
    const t = new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, true);
    if (!ENABLE_FOV) {
        t.explored = true;
    }
    return t;
});
let fovRecompute = ENABLE_FOV;
// TODO: Translate this from world to screen?
const fovGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
// if we turn fov on it'll change it over to false
fovGrid.setEach(() => {
    return {
        visible: !ENABLE_FOV
    };
});
// this will also populate the rooms
const rooms = [];
//generate the relevant terrain
Object(_mapGeneration__WEBPACK_IMPORTED_MODULE_14__["mapGenerator1"])(tileGrid, rooms);
//mapGenerator2(tileGrid, rooms)
{
    const pcenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].center(rooms[0]);
    _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(player, pcenter.x, pcenter.y);
    const npcenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].center(rooms[rooms.length - 1]);
    _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(npc, npcenter.x, npcenter.y);
    // center the camera and fov on the player
    cameraFrame.x = Math.floor(player.x - cameraFrame.width / 2);
    cameraFrame.y = Math.floor(player.y - cameraFrame.height / 2);
    fovGrid.x = cameraFrame.x;
    fovGrid.y = cameraFrame.y;
}
// clean this up
const moves = [];
const MoveProcessor = {
    // currently just tied to the player
    moves
};
_pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].subscribe('move', (msg) => {
    MoveProcessor.moves.push(msg);
});
Object(_assetHelper__WEBPACK_IMPORTED_MODULE_6__["loadImage"])('assets/out.png').then((image) => {
    renderer.init(canvas, image);
    // Loop
    const loop = () => {
        renderer.clear();
        // Look at player input
        // Z lets us be in ZOOM MODE!!!!
        // we need to translate this into a "move" type action
        // we'll just do the move section
        Object(_handleINput__WEBPACK_IMPORTED_MODULE_17__["handleInput"])(km, player);
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
                if (!tile.blockMove) {
                    mover.move(move.x, move.y);
                    if (mover.id === player.id) {
                        fovRecompute = true;
                    }
                    _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('moved', msg); // only publish move if the entity actually completed the move
                }
            }
        });
        MoveProcessor.moves.length = 0;
        // determine camera position
        cameraFrame.x = Math.floor(player.x - cameraFrame.width / 2);
        cameraFrame.y = Math.floor(player.y - cameraFrame.height / 2);
        fovGrid.x = cameraFrame.x;
        fovGrid.y = cameraFrame.y;
        if (fovRecompute && ENABLE_FOV) {
            Object(_fov__WEBPACK_IMPORTED_MODULE_12__["calculateFOV"])(fovGrid, tileGrid, player, FOV_RADIUS);
        }
        // we might move all of this into some offscreen 
        Object(_renderToGrid__WEBPACK_IMPORTED_MODULE_18__["renderToGrid"])(tileGrid, fovGrid, entities, renderGrid, cameraFrame);
        renderer.render(renderGrid);
        // ctx.drawImage(image, 0, 500)
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
    'dark_outside': '#111',
    'light_outside': '#444444',
    'black': '#000000',
    'dark_wall': '#000064',
    'dark_ground': '#323296',
    'light_wall': '#826E32',
    'light_ground': '#C8B432',
    'player': '#FFFFFF',
    'dark_door': '#550000',
    'light_door': '#FF2222',
    'npc': '#CC0000'
};
/* harmony default export */ __webpack_exports__["default"] = (COLORS);


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
const SETTINGS = {
    TILE_WIDTH: 10,
    TILE_HEIGHT: 10,
    MAP_WIDTH: 80,
    MAP_HEIGHT: 45,
    CAMERA_WIDTH: 100,
    CAMERA_HEIGHT: 70,
    SCREEN_WIDTH: 100,
    SCREEN_HEIGHT: 70,
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

/***/ "./client/src/handleINput.ts":
/*!***********************************!*\
  !*** ./client/src/handleINput.ts ***!
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
    static createVTunnel(tileGrid, y1, y2, x) {
        const min = Math.min(y1, y2);
        const max = Math.max(y1, y2);
        for (let y = min; y <= max; y++) {
            const tile = tileGrid.getXY(x, y);
            tile.blockMove = false;
            tile.blockSight = false;
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
/*! exports provided: mapGenerator1, mapGenerator2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGenerator1", function() { return mapGenerator1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGenerator2", function() { return mapGenerator2; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");
/* harmony import */ var _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapGenHelper */ "./client/src/mapGenHelper.ts");
/* harmony import */ var _shapes_ellipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes/ellipse */ "./client/src/shapes/ellipse.ts");




const ROOM_MAX_SIZE = 10;
const ROOM_MIN_SIZE = 10;
const MAX_ROOMS = 30;
const MAX_ELLIPSE_RADIUS = ROOM_MAX_SIZE / 2;
const MIN_ELLIPSE_RADIUS = ROOM_MAX_SIZE / 4;
const CAVE_ELLIPSES = 10;
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
            if (tileGrid.inBoundsXY(worldP.x, worldP.y)) {
                const tile = tileGrid.getP(worldP);
                const fovCell = fovGrid.getP(screenP);
                renderCell.character = '';
                if (tile.explored) {
                    if (!fovCell.visible) {
                        if (tile.blockMove) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_wall;
                        }
                        else if (tile.blockSight) { // it's a door
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_door;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].dark_ground;
                        }
                    }
                    else {
                        if (tile.blockMove) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_wall;
                        }
                        else if (tile.blockSight) { // it's a door
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_door;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].light_ground;
                        }
                    }
                }
                else {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].black;
                }
            }
            else {
                renderCell.character = '';
                renderCell.foreColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].black;
                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_1__["default"].black;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZm92LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ2FtZVNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2hhbmRsZUlOcHV0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvaWRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMva2V5Ym9hcmRNb25pdG9yLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvbWFwR2VuSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvbWFwR2VuZXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVyVG9HcmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9zaGFwZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9zaGFwZXMvcmVjdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3RpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFDVztBQUNsQjtBQUM3QiwrQ0FBK0M7QUFFVjtBQUNNO0FBQ0U7QUFDN0MsU0FBUztBQUdULDBCQUEwQjtBQUMxQixNQUFNLEVBQ0Ys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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IE1vdXNlTW9uaXRvciB9IGZyb20gJy4vbW91c2VNb25pdG9yJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi9hc3NldEhlbHBlcidcbmltcG9ydCB7IENhbnZhc1JlbmRlcmVyIH0gZnJvbSAnLi9jYW52YXNSZW5kZXJlcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5pbXBvcnQgeyBSZWN0LCBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRF9NQU5BR0VSIH0gZnJvbSAnLi9pZE1hbmFnZXInXG5pbXBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IHsgbWFwR2VuZXJhdG9yMSB9IGZyb20gJy4vbWFwR2VuZXJhdGlvbidcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG4vL2ltcG9ydCB7IE1hcEdlbkhlbHBlciB9IGZyb20gJy4vbWFwR2VuSGVscGVyJ1xuXG5pbXBvcnQgU0VUVElOR1MgZnJvbSAnLi9nYW1lU2V0dGluZ3MnXG5pbXBvcnQgeyBoYW5kbGVJbnB1dCB9IGZyb20gJy4vaGFuZGxlSU5wdXQnXG5pbXBvcnQgeyByZW5kZXJUb0dyaWQgfSBmcm9tICcuL3JlbmRlclRvR3JpZCdcbi8vIHNpemluZ1xuXG5cbi8vIFRIRVNFIEFSRSBJTiBUSUxFIFNJWkVTXG5jb25zdCB7XG4gICAgVElMRV9XSURUSCxcbiAgICBUSUxFX0hFSUdIVCxcbiAgICBTQ1JFRU5fV0lEVEgsXG4gICAgU0NSRUVOX0hFSUdIVCxcbiAgICBNQVBfV0lEVEgsXG4gICAgTUFQX0hFSUdIVCxcbiAgICBDQU1FUkFfV0lEVEgsXG4gICAgQ0FNRVJBX0hFSUdIVCxcbiAgICBGT1ZfUkFESVVTXG59ID0gU0VUVElOR1NcblxuY29uc3QgRU5BQkxFX0ZPViA9IGZhbHNlXG5cblxuLy8gTGV0J3MgbG9vayBmb3IgcXVlcnkgcGFyYW1zIHdpdGggd2hpY2ggdG8gc2VlZCB0aGUgZ2VuZXJhdG9yXG4vLyBJTklUSUFMSVpFIE9VUiBTRUVEXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5jb25zdCBzZWVkU3RyID0gdXJsUGFyYW1zLmdldCgnc2VlZCcpIFxuaWYoIXNlZWRTdHIpe1xuICAgIGNvbnN0IHNlZWQgPSBSQU5ET00uc2VlZChzZWVkU3RyIHx8IHVuZGVmaW5lZClcbiAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3NlZWQ9JyArIHNlZWRcbiAgICBpZiAoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOm5ld3VybH0sJycsbmV3dXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3dXJsXG4gICAgfVxuICAgIFxufSBlbHNlIHtcbiAgICBSQU5ET00uc2VlZChzZWVkU3RyKVxufVxuXG5jb25zdCBwbGF5ZXI6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCBDT0xPUlMucGxheWVyKVxuY29uc3QgbnBjOiBFbnRpdHkgPSBuZXcgRW50aXR5KElEX01BTkFHRVIubmV4dCgpLCAzLDQsICdAJywgQ09MT1JTLm5wYylcbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKClcbmNvbnN0IGNhbWVyYUZyYW1lID0gUmVjdC5tYWtlKDAsMCwgQ0FNRVJBX1dJRFRILCBDQU1FUkFfSEVJR0hUKSAvLyBDQU1FUkEgSVMgSU4gV09STEQgQ0VMTFMsIE5PVCBBQlNPTFVURSBVTklUU1xuY29uc3QgcmVuZGVyR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxucmVuZGVyR3JpZC5zZXRFYWNoKChjZWxsOiBhbnksIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiBSZW5kZXJDZWxsLm1ha2UoeCx5LCcgJyxDT0xPUlMuYmxhY2ssQ09MT1JTLmRhcmtfZ3JvdW5kKVxufSlcblxuY29uc3QgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4gPSBuZXcgR3JpZDxUaWxlPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG50aWxlR3JpZC5zZXRFYWNoKChjZWxsOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgPT4ge1xuICAgIGNvbnN0IHQgPSBuZXcgVGlsZSh4LHksIHRydWUpXG4gICAgaWYoIUVOQUJMRV9GT1Ype1xuICAgICAgICB0LmV4cGxvcmVkID0gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gdFxufSlcblxubGV0IGZvdlJlY29tcHV0ZSA9IEVOQUJMRV9GT1Zcbi8vIFRPRE86IFRyYW5zbGF0ZSB0aGlzIGZyb20gd29ybGQgdG8gc2NyZWVuP1xuY29uc3QgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiA9IG5ldyBHcmlkPEZPVkNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG4vLyBpZiB3ZSB0dXJuIGZvdiBvbiBpdCdsbCBjaGFuZ2UgaXQgb3ZlciB0byBmYWxzZVxuZm92R3JpZC5zZXRFYWNoKCgpOiBGT1ZDZWxsID0+IHsgcmV0dXJuIHtcbiAgICB2aXNpYmxlOiAhRU5BQkxFX0ZPVlxufX0pXG5cblxuLy8gdGhpcyB3aWxsIGFsc28gcG9wdWxhdGUgdGhlIHJvb21zXG5jb25zdCByb29tczogSVJlY3RbXSA9IFtdXG4vL2dlbmVyYXRlIHRoZSByZWxldmFudCB0ZXJyYWluXG5tYXBHZW5lcmF0b3IxKHRpbGVHcmlkLCByb29tcylcbi8vbWFwR2VuZXJhdG9yMih0aWxlR3JpZCwgcm9vbXMpXG5cbntcbiAgICBjb25zdCBwY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbMF0pXG4gICAgUG9pbnQuc2V0KHBsYXllciwgcGNlbnRlci54LCBwY2VudGVyLnkpIFxuICAgIGNvbnN0IG5wY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbcm9vbXMubGVuZ3RoIC0gMV0pXG4gICAgUG9pbnQuc2V0KG5wYywgbnBjZW50ZXIueCwgbnBjZW50ZXIueSlcblxuICAgIC8vIGNlbnRlciB0aGUgY2FtZXJhIGFuZCBmb3Ygb24gdGhlIHBsYXllclxuICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHBsYXllci54IC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcihwbGF5ZXIueSAtIGNhbWVyYUZyYW1lLmhlaWdodC8yKVxuICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG59XG5cbi8vIGNsZWFuIHRoaXMgdXBcbmNvbnN0IG1vdmVzOiBhbnlbXSA9IFtdXG5jb25zdCBNb3ZlUHJvY2Vzc29yID0ge1xuICAgIC8vIGN1cnJlbnRseSBqdXN0IHRpZWQgdG8gdGhlIHBsYXllclxuICAgIG1vdmVzXG59XG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmUnLCAobXNnKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2gobXNnKVxufSkgXG5cbmxvYWRJbWFnZSgnYXNzZXRzL291dC5wbmcnKS50aGVuKChpbWFnZTogYW55KTogdm9pZCA9PiB7XG4gICAgcmVuZGVyZXIuaW5pdChjYW52YXMsIGltYWdlKVxuICAgIC8vIExvb3BcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICByZW5kZXJlci5jbGVhcigpXG5cbiAgICAgICAgLy8gTG9vayBhdCBwbGF5ZXIgaW5wdXRcbiAgICAgICAgLy8gWiBsZXRzIHVzIGJlIGluIFpPT00gTU9ERSEhISFcbiAgICAgICAgLy8gd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhpcyBpbnRvIGEgXCJtb3ZlXCIgdHlwZSBhY3Rpb25cbiAgICAgICAgLy8gd2UnbGwganVzdCBkbyB0aGUgbW92ZSBzZWN0aW9uXG4gICAgICAgIFxuICAgICAgICBoYW5kbGVJbnB1dChrbSwgcGxheWVyKVxuXG4gICAgICAgIC8vIHByb2Nlc3MgbW92ZXNcbiAgICAgICAgLy8gZXZlbnR1YWxseSB3ZSdsbCBjb21wb25lbnRpemUgdGhpcyBiZXR0ZXJcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5mb3JFYWNoKChtc2c6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1zZy5kZWx0YVxuICAgICAgICAgICAgY29uc3QgaWQgPSBtc2cuaWRcbiAgICAgICAgICAgIGNvbnN0IG1vdmVyID0gZW50aXRpZXMuZmluZCgoZSk6IGJvb2xlYW4gPT4gZS5pZCA9PSBpZClcbiAgICAgICAgICAgIGlmKCFtb3Zlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKG1vdmVyLnggKyBtb3ZlLngsIG1vdmVyLnkgKyBtb3ZlLnkpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVyLm1vdmUobW92ZS54LCBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgICAgIGlmKG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm92UmVjb21wdXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlZCcsIG1zZykgLy8gb25seSBwdWJsaXNoIG1vdmUgaWYgdGhlIGVudGl0eSBhY3R1YWxseSBjb21wbGV0ZWQgdGhlIG1vdmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMubGVuZ3RoID0gMFxuICAgICAgICBcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGNhbWVyYSBwb3NpdGlvblxuICAgICAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgICAgIGNhbWVyYUZyYW1lLnkgPSBNYXRoLmZsb29yKHBsYXllci55IC0gY2FtZXJhRnJhbWUuaGVpZ2h0LzIpXG4gICAgICAgIGZvdkdyaWQueCA9IGNhbWVyYUZyYW1lLnhcbiAgICAgICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxuXG4gICAgICAgIGlmKGZvdlJlY29tcHV0ZSAmJiBFTkFCTEVfRk9WKXtcbiAgICAgICAgICAgIGNhbGN1bGF0ZUZPVihmb3ZHcmlkLCB0aWxlR3JpZCwgcGxheWVyLCBGT1ZfUkFESVVTKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgbWlnaHQgbW92ZSBhbGwgb2YgdGhpcyBpbnRvIHNvbWUgb2Zmc2NyZWVuIFxuICAgICAgICByZW5kZXJUb0dyaWQodGlsZUdyaWQsIGZvdkdyaWQsIGVudGl0aWVzLCByZW5kZXJHcmlkLCBjYW1lcmFGcmFtZSlcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHJlbmRlckdyaWQpXG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgNTAwKVxuICAgICAgICBrbS5yZXNldFN0ZXBzKClcbiAgICAgICAgbW0ucmVzZXQoKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblxufSkuY2F0Y2goKGVycjogYW55KTogdm9pZCA9PiBjb25zb2xlLmxvZyhlcnIpKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZSIsImZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IGFueXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk6IGFueSA9PiByZXNvbHZlKGltZykpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpOiBhbnkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSAke3VybH1gKSkpXG4gICAgICAgIGltZy5zcmMgPSB1cmxcbiAgICB9KVxufVxuXG5leHBvcnQge2xvYWRJbWFnZX0iLCJpbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgZHJhd1NlY3Rpb24sIGNvZGUgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnXG5pbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYSByZW5kZXIgZ3JpZCBhbmQgY29udmVydGluZyBpdCB0byBpbWFnZXNcbiAqIG9uIHRoZSBjYW52YXNcbiAqL1xuXG5jb25zdCB7VElMRV9XSURUSCwgVElMRV9IRUlHSFR9ID0gU0VUVElOR1NcblxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCB1bmRlZmluZWQ7XG4gICAgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCk6IENhbnZhc1JlbmRlcmVye1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICAvLyB3ZSBhcmUganVzdCBmb3JjaW5nIHRoaXMgZm9yIG5vdywgd2Ugd2lsbCBjaGVjayBpZiBpdCdzIG51bGxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGlmKGN0eCA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgY29udGV4dCBmcm9tIGNhbnZhcycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8vIGV2ZW50dWFsbHkgd2UgbmVlZCB0byBwYXNzIGluIHRoZSBkaW1lbnNpb25zIHdlIGFyZSByZW5kZXJpbmcgdG8gYXMgd2VsbFxuICAgIC8vIGZvciBub3cgaXQncyBmaW5lXG4gICAgcmVuZGVyKHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBiYWNrZ3JvdW5kOiBzdHJpbmcgPSBDT0xPUlMuYmxhY2spOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFJlY3QoMCwwLCByZW5kZXJHcmlkLndpZHRoICogVElMRV9XSURUSCwgcmVuZGVyR3JpZC5oZWlnaHQgKiBUSUxFX0hFSUdIVClcbiAgICAgICAgLy8gbGV0J3MgdHJ5IHNldHRpbmcgYSBiYWNrZ3JvdW5kIGNvbG9yIGFzIHdlbGxcbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgZGVzdFJlY3QgPSBSZWN0Lm1ha2UoMCwwLDAsMClcbiAgICAgICAgcmVuZGVyR3JpZC5mb3JFYWNoKChcbiAgICAgICAgICAgIGNlbGw6IElSZW5kZXJDZWxsLCBcbiAgICAgICAgICAgIGluZGV4OiBudW1iZXIsIFxuICAgICAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIFJlY3Quc2V0KGRlc3RSZWN0LCB4ICogVElMRV9XSURUSCwgeSAqIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbiAgICAgICAgICAgIC8vIHRvZG8sIGFsbG93IHVzIHRvIG1hcmsgcmVuZGVyIGNlbGxzIGFzICdlbXB0eScgcmF0aGVyIHRoYW4gc3BhY2VzLCB0aGlzIG1pZ2h0IGhlbHAgc3BlZWQgdXAgcmVuZGVyIHRpbWVcbiAgICAgICAgICAgIGlmKGNlbGwuY2hhcmFjdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgaWYoY2VsbC5iYWNrQ29sb3IgIT09IGJhY2tncm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAvLyBJIGFjdHVhbGx5IGRvbid0IGtub3cgaWYgdGhpcyBoZWxwcywgYnV0IGl0IHNlZW1zIGxpa2Ugc2V0dGluZyB0aGUgZmlsbFN0eWxlIGNvdWxkIGludm9sdmUgbW9yZSBjb21wbGljYXRpb25zIHRoYW4ganVzdCBjaGVja2luZyBpZiBpdCdzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmKGN0eC5maWxsU3R5bGUgIT09IGNlbGwuYmFja0NvbG9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZWxsLmJhY2tDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjUmVjdCA9IENPREVfVE9fUkVDVF9IQVNIW2NvZGUoY2VsbC5jaGFyYWN0ZXIpXVxuICAgICAgICAgICAgICAgIGRyYXdTZWN0aW9uKGN0eCwgdGhpcy5zcHJpdGVzaGVldCwgc3JjUmVjdCwgZGVzdFJlY3QsIGNlbGwuZm9yZUNvbG9yLCBjZWxsLmJhY2tDb2xvciApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IENhbnZhc1JlbmRlcmVyIH0iLCJjb25zdCBDT0xPUlMgPSB7XG4gICAgJ2Rhcmtfb3V0c2lkZSc6ICcjMTExJyxcbiAgICAnbGlnaHRfb3V0c2lkZSc6ICcjNDQ0NDQ0JyxcbiAgICAnYmxhY2snOiAnIzAwMDAwMCcsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMDAwMDY0JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzMyMzI5NicsXG4gICAgJ2xpZ2h0X3dhbGwnOiAnIzgyNkUzMicsXG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzhCNDMyJyxcbiAgICAncGxheWVyJzogJyNGRkZGRkYnLFxuICAgICdkYXJrX2Rvb3InOicjNTUwMDAwJyxcbiAgICAnbGlnaHRfZG9vcic6ICcjRkYyMjIyJyxcbiAgICAnbnBjJzogJyNDQzAwMDAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IENPTE9SUyIsIi8qKlxuICogQSBnZW5lcmljIG9iamVjdCB0byByZXByZXNlbnQgZXZlcnl0aGluZyB0aGF0IGlzIG5vdCB0aGUgbWFwIGl0c2VsZlxuICogRm9yIHRoYXQsIHNlZSB0aGUgVGlsZSBjbGFzc1xuICovXG5jbGFzcyBFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHg6IG51bWJlcix5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBjb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGFuIGVudGl0eSwgY3VycmVudGx5IGRvZXNuJ3QgY2hlY2sgaWYgaXQgY2FuIG9yIG5vdCwganVzdCBkb2VzXG4gICAgICogQHBhcmFtIGR4IEFtb3VudCB0byBtb3ZlIGluIHRoZSB4IGRpcmVjdGlvbiAobGVmdCBpcyBuZWdhdGl2ZSwgcmlnaHQgaXMgcG9zaXRpdmUpXG4gICAgICogQHBhcmFtIGR5IEFtb3VudCB0byBtb3ZlIGluIHRoZSB5IGRpcmVjdGlvbiAodXAgaXMgbmVnYXRpdmUsIGRvd24gaXMgcG9zaXRpdmUpXG4gICAgICovXG4gICAgbW92ZShkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZHtcbiAgICAgICAgdGhpcy54ICs9IGR4XG4gICAgICAgIHRoaXMueSArPSBkeVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRW50aXR5IH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElQb2ludCwgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuaW50ZXJmYWNlIEZPVkNlbGwgIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFNoYWRvd1JhbmdlIHtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5jb25zdCBpc0JldHdlZW5JbmNsdXNpdmUgPSAoYTogbnVtYmVyLGI6IG51bWJlcix0OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBpZihiIDwgYSl7XG4gICAgICAgIHJldHVybiBiIDw9IHQgJiYgdCA8PSBhXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPD0gdCAmJiB0IDw9IGJcbiAgICB9XG59XG4vKipcbiAqIFxuICogQHBhcmFtIGZvdkdyaWQgXG4gKiBAcGFyYW0gdGlsZUdyaWQgXG4gKiBAcGFyYW0gc3RhcnRQb2ludCBzdGFydCBwb2ludCBpcyBpbiB3b3JsZCBjb29yZGluYXRlc1xuICogQHBhcmFtIG1heERpc3RhbmNlIFxuICogQHBhcmFtIGhvcml6b250YWxOb3RWZXJ0aWNhbCBcbiAqIEBwYXJhbSB4RGlyZWN0aW9uIFxuICogQHBhcmFtIHlEaXJlY3Rpb24gXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZU9jdGFudCA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyLFxuICAgIGhvcml6b250YWxOb3RWZXJ0aWNhbDogYm9vbGVhbiwgeERpcmVjdGlvbjogbnVtYmVyLCB5RGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBcbiAgICAvLyBPdXIgc2hhZG93cyB3ZSB3aWxsIGNhc3RcbiAgICBjb25zdCBzaGFkb3dSYW5nZXM6IFNoYWRvd1JhbmdlW10gPSBbXVxuICAgIC8vIG91ciBzdGFydGluZyBsb2NhdGlvbiBpcyBhbHdheXMgdmlzaWJsZVxuICAgIGNvbnN0IHNjcmVlblN0YXJ0UG9pbnQ9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICBzY3JlZW5TdGFydFBvaW50LnggLT0gZm92R3JpZC54XG4gICAgc2NyZWVuU3RhcnRQb2ludC55IC09IGZvdkdyaWQueVxuICAgIGZvdkdyaWQuZ2V0UChzY3JlZW5TdGFydFBvaW50KS52aXNpYmxlID0gdHJ1ZVxuICAgIC8vIFRPRE86IERldGVybWluZSBpZiB0aGUgRk9WIGlzIGluIHJhbmdlXG4gICAgZm9yKGxldCByb3cgPSAxOyByb3cgPCBtYXhEaXN0YW5jZTsgcm93Kyspe1xuICAgICAgICBjb25zdCByb3dTaXplID0gcm93ICsgMVxuICAgICAgICBmb3IobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHJvd1NpemU7IGNvbHVtbisrKXtcbiAgICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgb2N0YW50LCB0aGUgdHJhdmVsbGVyIHdpbGwgbW92ZSBkaWZmZXJlbnRseVxuICAgICAgICAgICAgY29uc3QgdHJhdmVsbGVyID0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgICAgICAgICAgdHJhdmVsbGVyLnggKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geERpcmVjdGlvbiAqIGNvbHVtbiA6IHhEaXJlY3Rpb24gKiByb3dcbiAgICAgICAgICAgIHRyYXZlbGxlci55ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHlEaXJlY3Rpb24gKiByb3cgOiB5RGlyZWN0aW9uICogY29sdW1uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBvdXQgb2YgYm91bmRzLCBza2lwXG4gICAgICAgICAgICBpZighdGlsZUdyaWQuaW5Cb3VuZHNYWSh0cmF2ZWxsZXIueCwgdHJhdmVsbGVyLnkpKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmYWN0b3IgaW4gb3VyIHRpbGUgY2hlY2sgd2hlbiB3ZSBnZXQgdGhlIHdvcmxkIGNlbGxcbiAgICAgICAgICAgIGxldCBzY3JlZW5Qb2ludCA9IFBvaW50LmNvcHkodHJhdmVsbGVyKVxuICAgICAgICAgICAgc2NyZWVuUG9pbnQueCAtPSBmb3ZHcmlkLnhcbiAgICAgICAgICAgIHNjcmVlblBvaW50LnkgLT0gZm92R3JpZC55XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0UCh0cmF2ZWxsZXIpXG4gICAgICAgICAgICAvLyBPUFRJTUlaRTogV2UgYXJlIHByb2JhYmx5IHJ1bm5pbmcgdG8gbWFueSB0aW1lcyBhbmQgY291bGQgZG8gdGhpcyBiZXR0ZXJcbiAgICAgICAgICAgIGlmKCFmb3ZHcmlkLmluQm91bmRzWFkoc2NyZWVuUG9pbnQueCwgc2NyZWVuUG9pbnQueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblBvaW50KVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGNvbHVtbi9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBlbmQgPSAoY29sdW1uICsgMSkvcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgbWlkZGxlID0gKHN0YXJ0ICsgZW5kKSAvIDJcblxuICAgICAgICAgICAgLy8gdGVzdCBmb3IgdmlzaWJsaXR5XG4gICAgICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHRydWVcblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGVkZ2VzIGFyZSBjbGVhciBvciBub3RcbiAgICAgICAgICAgIGxldCBzdGFydENsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IG1pZGRsZUNsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGVuZENsZWFyID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGJ1aWx0IHNvbWUgc2hhZG93IHJhbmdlc1xuICAgICAgICAgICAgaWYoc2hhZG93UmFuZ2VzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGFueSBzaGFkb3dzIGNyb3NzIG91ciB0aHJlZSBwb2ludHNcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMuZm9yRWFjaCggKHNyOiBTaGFkb3dSYW5nZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENsZWFyID0gc3RhcnRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICBtaWRkbGVDbGVhciA9IG1pZGRsZUNsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgbWlkZGxlKVxuICAgICAgICAgICAgICAgICAgICBlbmRDbGVhciA9IGVuZENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgZW5kKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdmlzaWJpbGl0eSBiYXNlZCBvZmYgb2Ygb3VyIHNhbXBsaW5nXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9IG1pZGRsZUNsZWFyICYmIChzdGFydENsZWFyIHx8IGVuZENsZWFyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3ZSBibG9jayBzaWdodCwgY2FsY3VsYXRlIG91ciBzaGFkb3cgZW5kc1xuICAgICAgICAgICAgaWYodGlsZS5ibG9ja1NpZ2h0KXtcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMucHVzaCh7c3RhcnQsIGVuZH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvdkNlbGwudmlzaWJsZSA9IHZpc2liaWxpdHlcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgdGlsZS5leHBsb3JlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2FsY3VsYXRlRk9WID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAvLyBiZSBkZWZhdWx0IHdlIGFyZSBnb2luZyB0byBzaGFkb3dDYXN0XG4gICAgLy8gYnkgZGVmYXVsdCBldmVyeXRoaW5nIGlzIG5vdCB2aXNpYmxlXG4gICAgZm92R3JpZC5mb3JFYWNoKChjZWxsKTogdm9pZCA9PiB7IGNlbGwudmlzaWJsZSA9IGZhbHNlIH0pXG4gICAgLy8gTk5XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIC0xKVxuICAgIC8vIFdOV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgLTEpXG4gICAgLy8gV1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAxKVxuICAgIC8vIFNTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAxKVxuICAgIC8vIFNTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIDEsIDEpXG4gICAgLy8gRVNFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIDEsIDEpXG4gICAgLy8gRU5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIDEsIC0xKVxuICAgIC8vIE5ORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIDEsIC0xKVxufVxuXG5leHBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGx9IiwiY29uc3QgU0VUVElOR1MgPSB7XG4gICAgVElMRV9XSURUSDogMTAsICAgICAvLyBwaXhlbHNcbiAgICBUSUxFX0hFSUdIVDogMTAsICAgIC8vIHBpeGVsc1xuICAgIE1BUF9XSURUSDogODAsICAgICAgLy8gZXZlcnl0aGluZyBlbHNlIGlzIGluIHRpbGVzXG4gICAgTUFQX0hFSUdIVDogNDUsXG4gICAgQ0FNRVJBX1dJRFRIOiAxMDAsXG4gICAgQ0FNRVJBX0hFSUdIVDogNzAsXG4gICAgU0NSRUVOX1dJRFRIIDoxMDAsXG4gICAgU0NSRUVOX0hFSUdIVCA6IDcwLFxuICAgIEZPVl9SQURJVVM6IDM1XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNFVFRJTkdTIiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBTZXRFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGFueTtcbn1cblxuaW50ZXJmYWNlIEZvckVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcbn1cblxuLy8gVE9ETzogZ2l2ZSBncmlkcyB0aGVpciBvd24geCBhbmQgeXMsIHRoYXQgd2F5IHRoZXkgY2FuIGltcGxlbWVudCBhbGwgdGhlIHBvaW50IGFuZCByZWN0IHN0dWZmXG4vKipcbiAqIEdyaWQgdG8gcmVwcmVzZW50IDJkIGNvbGxlY3Rpb25zLCBwbGVhc2UgZG9uJ3QgcmVzaXplIGl0IGFmdGVyIGNyZWF0aW5nIGl0XG4gKi9cbmNsYXNzIEdyaWQ8VD4gaW1wbGVtZW50cyBJUmVjdCB7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB5OiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBjZWxsczogVFtdO1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKXtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmNlbGxzLmxlbmd0aCA9IHdpZHRoICogaGVpZ2h0XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiBvZiB0aGUgZ3JpZCwgb3ZlcndyaXRlcyBwcmV2aW91cyBlbnRyaWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGVudHJ5LCBkb24ndCB1c2UgdGhpcyB1bmxlc3MgZW50cmllcyBhcmUgaW5kZXBlbmRlbnQgZnJvbSBlYWNoIG90aGVyXG4gICAgICogQHBhcmFtIGZuIHRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGNlbGwgaXRzZWxmIGFzIHRoZSBmaXJzdCBwcm9wZXJ0eSBhbmQgXG4gICAgICovXG4gICAgc2V0RWFjaChmbjogU2V0RWFjaEZuPFQ+KTogR3JpZDxUPntcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIHNvbWV0aGluZyBmb3IgZWFjaCBtZW1iZXIgb2YgYSBjZWxsLCBnb2luZyByb3cgYnkgcm93IGZyb20gbGVmdCB0byByaWdodFxuICAgICAqIEBwYXJhbSBmbiBHZXQgcGFzc2VkIHRoZSBjZWxsLCBpbmRleCwgeCBhbmQgeVxuICAgICAqL1xuICAgIGZvckVhY2goZm46IEZvckVhY2hGbjxUPik6IHZvaWR7XG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKXtcbiAgICAgICAgICAgICAgICBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0geCB4IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAcGFyYW0geSB5IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKi9cbiAgICBnZXRYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQgIHtcbiAgICAgICAgaWYoIXRoaXMuaW5Cb3VuZHNYWSh4LHkpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm91bmRhcnkgYWNjZXNzIGlzc3VlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1t4ICsgeSAqIHRoaXMud2lkdGhdXG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ2V0WFkuIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHBvaW50IGNvbnRhaW5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSBjZWxsIHlvdSB3YW50IHRvIGdldFxuICAgICAqL1xuICAgIGdldFAocG9pbnQ6IElQb2ludCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRYWShwb2ludC54LCBwb2ludC55KVxuICAgIH1cblxuICAgIGluQm91bmRzWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFue1xuICAgICAgICBpZih4IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2VsbCBiYXNlZCBvZmYgb2YgYW4gaW5kZXgsIHVzdWFsbHkgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZm9yRWFjaCBsb29wIG9mIGEgc2ltaWxhcmx5IHNpemVkIGdyaWRcbiAgICAgKiBOT1RFIGJlIGNhcmVmdWwgdGhhdCB0aGUgb3RoZXIgZ3JpZCBoYXMgdGhlIHNhbWUgZGltZW5zaW9uIHVubGVzcyB5b3UgcmVhbGx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGNlbGxzLCBtb3N0bHkgdG8gYmUgdXNlZCB3aXRoIGdyaWRzIHRoYXQgYXJlIHdvcmtpbmcgYWxvbmdzaWRlIGEgZGlmZmVyZW50IGZvckVhY2ggbG9vcFxuICAgICAqL1xuICAgIGdldEkoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpbmRleF1cbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQgfSIsImltcG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IGZyb20gJy4va2V5Ym9hcmRNb25pdG9yJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IFBVQlNVQiB9IGZyb20gJy4vcHViU3ViL3B1YlN1YidcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuXG5leHBvcnQgY29uc3QgaGFuZGxlSW5wdXQgPSAoa206IEtleWJvYXJkTW9uaXRvciwgcGxheWVyOiBFbnRpdHkpOnZvaWQgPT4ge1xuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKC0xLCAwKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMSwgMCl9KVxuICAgIH1cbiAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDAsIC0xKX0pXG4gICAgfVxuICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDAsIDEpfSlcbiAgICB9XG4gICAgLy8gcXVpY2sgbnVtYmVyIGdlbmVyYXRvclxuICAgIGlmKCFrbS5nZXRLZXlTdGF0ZSgnbicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ24nKS5oYWxmU3RlcHMgPiAwKSl7XG4gICAgICAgIGNvbnN0IHNlZWQgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3dXJsXG4gICAgfVxufSIsImNsYXNzIElETWFuYWdlciB7XG4gICAgcHJpdmF0ZSBsYXN0SWQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxhc3RJZCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZXh0IGlkXG4gICAgICovXG4gICAgbmV4dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0SWQrK1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBJRF9NQU5BR0VSXG4gKi9cbmNvbnN0IElEX01BTkFHRVIgPSBuZXcgSURNYW5hZ2VyKClcbmV4cG9ydCB7SURfTUFOQUdFUiwgSURNYW5hZ2VyfSIsImludGVyZmFjZSBLZXlTdGF0ZSB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIGlzRG93bjogYm9vbGVhbjtcbiAgICBoYWxmU3RlcHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbmNvbnN0IG1ha2VLZXlTdGF0ZSA9IChrZXk6IHN0cmluZywgaXNEb3duOiBib29sZWFuID0gZmFsc2UsIGhhbGZTdGVwczogbnVtYmVyID0gMCk6IEtleVN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGlzRG93bixcbiAgICAgICAgaGFsZlN0ZXBzXG4gICAgfVxufVxuXG5jbGFzcyBLZXlib2FyZE1vbml0b3Ige1xuICAgIGtleUhhc2g6IEhhc2g8S2V5U3RhdGU+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMua2V5SGFzaCA9IHt9XG4gICAgfVxuICAgIC8vIEF0dGFjaCB0byB0aGUgRE9NLCB1c3VhbGx5IHRoZSBkb2N1bWVudCBhcyBhIHdob2xlLCBidXQgeW91IGNhbiBtYWtlIGl0IG1vcmUgc3BlY2lmaWMgaWYgeW91IHdhbnRcbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogS2V5Ym9hcmRNb25pdG9yIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoIWtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKGtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGdldEtleVN0YXRlKGtleTogc3RyaW5nKTogS2V5U3RhdGV7XG4gICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5SGFzaFtrZXldXG4gICAgfVxuICAgIHJlc2V0U3RlcHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleUhhc2gpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXlzW2ldXS5oYWxmU3RlcHMgPSAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IElFbGxpcHNlLCBFbGxpcHNlIH0gZnJvbSAnLi9zaGFwZXMvZWxsaXBzZSdcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3RhdGljIG1ldGhvZHMgZm9yIGhlbHBpbmcgdG8gbWFuaXB1bGF0ZSBtYXBzXG4gKi9cbmNsYXNzIE1hcEdlbkhlbHBlciB7XG4gICAgLy8gVE9ETzogTWF5YmUgY29tZSB1cCB3aXRoIGEgYmV0dGVyIG5hbWVcbiAgICAvKipcbiAgICAgKiBQbGFjZSBhIHJvb20gaW5zaWRlIGEgZ3JvdXAgb2YgdGlsZXNcbiAgICAgKiBAcGFyYW0gdGlsZUdyaWQgdGhlIGdyaWQgb2YgdGlsZXMgdG8gYWZmZWN0XG4gICAgICogQHBhcmFtIHJvb20gdGhlIHJvb20gc2VjdGlvbiB0aGF0IHdlIHdpbGwgb3BlbiB1cFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVSb29tKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tOiBJUmVjdCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBCb3VuZHMgY2hlY2sgb3Igc29tZXRoaW5nLCByaWdodCBub3cgdGVycmlibGUgdGhpbmdzIGNhbiBoYXBwZW5cbiAgICAgICAgY29uc3QgeyBsZWZ0LHJpZ2h0LHRvcCxib3R0b219ID0gUmVjdC5zaWRlcyhyb29tKVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHN0b3Agb25lIGVhcmx5IGJlY2F1c2Ugb2YgaG93IHdlIHdvcmsgd2l0aCBhIGdyaWRcbiAgICAgICAgLy8gd2Ugd2lsbCBhbHNvIGluY2x1ZGUgYSBtYXJnaW4gb2Ygb25lIG9uIGFsbCBzaWRleFxuICAgICAgICBmb3IobGV0IHkgPSB0b3AgKyAxOyB5IDwgYm90dG9tIC0gMTsgeSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IGxlZnQgKyAxOyB4IDwgcmlnaHQgLSAxOyB4Kyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LCB5KVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUhUdW5uZWwodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHgxOiBudW1iZXIsIHgyOiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBzd2FwIHRoZW0gYXMgbmVjZXNzYXJ5XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHgxLCB4MilcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoeDEsIHgyKVxuICAgICAgICBmb3IobGV0IHggPSBtaW47IHggPD0gbWF4OyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVlR1bm5lbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeTE6IG51bWJlciwgeTI6IG51bWJlciwgeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHkxLCB5MilcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoeTEsIHkyKVxuICAgICAgICBmb3IobGV0IHkgPSBtaW47IHkgPD0gbWF4OyB5Kyspe1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2FydmVFbGxpcHNlKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBlbGxpcHNlOiBJRWxsaXBzZSk6IHZvaWQge1xuICAgICAgICB0aWxlR3JpZC5mb3JFYWNoKCh0aWxlLCBpbmRleCwgeCwgeSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYoRWxsaXBzZS5jb250YWluc1hZKGVsbGlwc2UsIHgseSkpeyBcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IHsgTWFwR2VuSGVscGVyIH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcblxuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgUkFORE9NIH0gZnJvbSAnLi9ybmdIZWxwZXInXG5pbXBvcnQgeyBNYXBHZW5IZWxwZXIgfSBmcm9tICcuL21hcEdlbkhlbHBlcidcbmltcG9ydCB7IElFbGxpcHNlLCBFbGxpcHNlIH0gZnJvbSAnLi9zaGFwZXMvZWxsaXBzZSdcblxuXG5jb25zdCBST09NX01BWF9TSVpFID0gMTBcbmNvbnN0IFJPT01fTUlOX1NJWkUgPSAxMFxuY29uc3QgTUFYX1JPT01TID0gMzBcbmNvbnN0IE1BWF9FTExJUFNFX1JBRElVUyA9IFJPT01fTUFYX1NJWkUgLyAyXG5jb25zdCBNSU5fRUxMSVBTRV9SQURJVVMgPSBST09NX01BWF9TSVpFIC8gNFxuXG5jb25zdCBDQVZFX0VMTElQU0VTID0gMTBcblxuY29uc3QgcmFuZGludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKFJBTkRPTS5uZXh0KCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmNvbnN0IHJhbmRvbUVsbGlwc2UgPSAobWluWDogbnVtYmVyLCBtYXhYOiBudW1iZXIsIG1pblk6IG51bWJlciwgbWF4WTogbnVtYmVyKTogSUVsbGlwc2UgPT4ge1xuICAgIHJldHVybiBFbGxpcHNlLm1ha2UoXG4gICAgICAgIHJhbmRpbnQobWluWCwgbWF4WCksXG4gICAgICAgIHJhbmRpbnQobWluWSwgbWF4WSksXG4gICAgICAgIHJhbmRpbnQoTUlOX0VMTElQU0VfUkFESVVTLCBNQVhfRUxMSVBTRV9SQURJVVMpLFxuICAgICAgICByYW5kaW50KE1JTl9FTExJUFNFX1JBRElVUywgTUFYX0VMTElQU0VfUkFESVVTKSxcbiAgICAgICAgUkFORE9NLm5leHQoKSAqIE1hdGguUEkgKiAyIFxuICAgIClcbn1cblxuLyoqXG4gKiBQbGFjZSBhIGJ1bmNoIG9mIHJvb21zIG9wcG9ydHVuaXN0aWNhbGx5LCBhbmQgdGhlbiBjYXJ2ZSBvdXQgc29tZSBlbGxpcHNlcyByYW5kb21seVxuICogQHBhcmFtIHRpbGVHcmlkIHRpbGVHcmlkIHRvIGJlIHBvcHVsYXRlZFxuICogQHBhcmFtIHJvb21zIExpc3Qgb2Ygcm9vbXMgdG8gYmUgcG9wdWxhdGVkXG4gKi9cbmNvbnN0IG1hcEdlbmVyYXRvcjEgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb21zOiBJUmVjdFtdKTogdm9pZCA9PiB7XG4gICAgZm9yKGxldCByID0gMDsgciA8IE1BWF9ST09NUzsgcisrKXtcbiAgICBcbiAgICAgICAgY29uc3QgdyA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICAgICAgY29uc3QgaCA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICAgICAgY29uc3QgeCA9IHJhbmRpbnQoMCwgdGlsZUdyaWQud2lkdGggLSB3IC0gMSlcbiAgICAgICAgY29uc3QgeSA9IHJhbmRpbnQoMCwgdGlsZUdyaWQuaGVpZ2h0ICAtIGggLSAxKVxuICAgIFxuICAgICAgICBjb25zdCBuZXdSb29tID0gUmVjdC5tYWtlKHgseSx3LGgpXG4gICAgICAgIGxldCBpbnRlcnNlY3RzID0gZmFsc2VcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvb21zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKFJlY3QuaW50ZXJzZWN0cyhuZXdSb29tLCByb29tc1tpXSkpe1xuICAgICAgICAgICAgICAgIGludGVyc2VjdHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighaW50ZXJzZWN0cyl7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBSZWN0LmNlbnRlcihuZXdSb29tKVxuICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVJvb20odGlsZUdyaWQsIG5ld1Jvb20pXG4gICAgICAgICAgICBpZihyb29tcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Um9vbSA9IHJvb21zW3Jvb21zLmxlbmd0aCAtMV1cbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q2VudGVyID0gUmVjdC5jZW50ZXIobGFzdFJvb20pXG4gICAgICAgICAgICAgICAgaWYocmFuZGludCgwLDEpID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGxhc3RDZW50ZXIueSlcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVZUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueSwgY2VudGVyLnksIGNlbnRlci54KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVZUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueSwgY2VudGVyLnksIGxhc3RDZW50ZXIueClcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGNlbnRlci55KVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGUgPSAwOyBlIDwgQ0FWRV9FTExJUFNFUzsgZSsrKXtcbiAgICAgICAgTWFwR2VuSGVscGVyLmNhcnZlRWxsaXBzZSh0aWxlR3JpZCwgcmFuZG9tRWxsaXBzZShNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLndpZHRoIC0xIC0gTUFYX0VMTElQU0VfUkFESVVTLCBNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLmhlaWdodCAtIDEgLSBNQVhfRUxMSVBTRV9SQURJVVMpKVxuICAgIH1cbn1cblxuY29uc3QgcGxhY2VBc3Rlcm9pZENodW5rID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBlbGxpcHNlOiBJRWxsaXBzZSk6IHZvaWQgPT4ge1xuICAgIHRpbGVHcmlkLmZvckVhY2goKHRpbGU6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIGlmKEVsbGlwc2UuY29udGFpbnNYWShlbGxpcHNlLCB4LHkpKXsgXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuY29udGFpbmVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgbWFwR2VuZXJhdG9yMiA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbXM6IElSZWN0W10pOiB2b2lkID0+IHtcbiAgICBjb25zdCBNQVJHSU5TID0gMTBcbiAgICBjb25zdCBNSU5fRElNRU5TSU9OID0gTWF0aC5taW4odGlsZUdyaWQud2lkdGgsIHRpbGVHcmlkLmhlaWdodClcbiAgICBjb25zdCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMgPSBNYXRoLmZsb29yKChNSU5fRElNRU5TSU9OIC0gTUFSR0lOUyAqIDIpLzIpXG4gICAgY29uc3QgTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTID0gTWF0aC5mbG9vcihNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMgKiAwLjcpXG4gICAgXG4gICAgXG4gICAgY29uc3QgU0VDVElPTl9DT1VOVCA9IDEwXG4gICAgLy8gY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZShNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIgLSAxMCksTWF0aC5mbG9vcih0aWxlR3JpZC5oZWlnaHQvMiAtIDEwKSwyMCwyMClcbiAgICAvLyBNYXBHZW5IZWxwZXIuY3JlYXRlUm9vbSh0aWxlR3JpZCwgbmV3Um9vbSlcbiAgICAvLyByb29tcy5wdXNoKG5ld1Jvb20pXG4gICAgLy8gZmlyc3QgdGhpbmdzIGZpcnN0LCBsZXRzIGxheWVyIHNvbWUgYmlnIGFzdGVyb2lkcyBvbiB0b3Agb2YgZWFjaCBvdGhlclxuICAgIHRpbGVHcmlkLmZvckVhY2goKHQ6IFRpbGUpOiB2b2lkID0+IHtcbiAgICAgICAgdC5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICB0LmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgIH0pXG4gICAgLy8gbm93IGxldCdzIGJ1aWxkIGFuIGFzdGVyb2lkIHdpdGhpbiB0aGUgYm91bmRzXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IFNFQ1RJT05fQ09VTlQ7IGkrKyl7XG4gICAgICAgIGNvbnN0IHhSYWRpdXMgPSByYW5kaW50KE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUywgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTKVxuICAgICAgICBjb25zdCB5UmFkaXVzID0gcmFuZGludChNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMsIE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUylcbiAgICAgICAgY29uc3QgYmlnUmFkaXVzID0gTWF0aC5tYXgoeFJhZGl1cywgeVJhZGl1cylcbiAgICAgICAgY29uc3QgeCA9IHJhbmRpbnQoTUFSR0lOUyArIGJpZ1JhZGl1cywgdGlsZUdyaWQud2lkdGggLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBjb25zdCB5ID0gcmFuZGludChNQVJHSU5TICsgYmlnUmFkaXVzLCB0aWxlR3JpZC5oZWlnaHQgLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBwbGFjZUFzdGVyb2lkQ2h1bmsodGlsZUdyaWQsIEVsbGlwc2UubWFrZSh4LHkseFJhZGl1cyx5UmFkaXVzLCBSQU5ET00ubmV4dCgpICogTWF0aC5QSSAqIDIpKVxuICAgIH1cbiAgICAvLyBub3cgd2l0aGluIHRoaXMgZnJhbWV3b3JrIHJ1biB0aGUgbmV4dCBtYXAgZ2VuZXJhdG9yXG4gICAgbWFwR2VuZXJhdG9yMSh0aWxlR3JpZCwgcm9vbXMpXG4gICAgXG59XG5cbmV4cG9ydCB7IG1hcEdlbmVyYXRvcjEsIG1hcEdlbmVyYXRvcjIgfSIsIi8vIExldCdzIGdvIGFoZWFkIGFuZCBjcmVhdGUgdGhlIFBvaW50IGludGVyZmFjZSBoZXJlLCB3ZSdsbCBleHBvcnQgaXQgZm9yIHVzZSBsYXRlciBpbiB0aGUgcHJvamVjdFxuXG5pbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG4vKipcbiAqIENsYXNzIHRvIGhlbHAgbW9uaXRvciB0aGluZ3MgdGhhdCBoYXZlIGhhcHBlbmVkIHRvIHRoZSBtb3VzZSBzaW5jZSBsYXN0IHRpbWUgdGhhdCB3ZSBsb29rZWRcbiAqL1xuXG5pbnRlcmZhY2UgSGFsZkNsaWNrIHtcbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIGlzRG93bjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTW91c2VNb25pdG9yIHtcbiAgICAvKipcbiAgICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlIG92ZXIgdGhlIGF0dGFjaGVkIGVsZW1udFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IHRpbWUgd2UgbG9va2VkXG4gICAgICovXG4gICAgaGFzTW92ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IGluc2lkZSB0aGUgY29udGFpbmVyIFxuICAgICAqL1xuICAgIGluQ29udGFpbmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogaXMgdGhlIG1vdXNlIGJ1dHRvbiBkb3duIChjdXJyZW50bHkgb25seSB0cmFja3MgbGVmdClcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZ1bGwgY2xpY2sgaXMgdXAgYW5kIGRvd24sIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVwcyBhbmQgZG93bnMsIHVzZWZ1bCBmb3IgZHJhZ3Mgb3Igb3RoZXIgdGhpbmdzIHRoYXQgbWlnaHQgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgKi9cbiAgICBoYWxmQ2xpY2tzOiBIYWxmQ2xpY2tbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmhhbGZDbGlja3MgPSBbXVxuICAgICAgICAvLyBUT0RPOiBBZGQgY2xpY2sgdHJhY2tpbmcsIGRlcGVuZHMgb24gaG93IHF1aWNrbHkgd2UgYXJlIHBvbGxpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50IHlvdSB3YW50IHRvIG1vbml0b3IgbW91c2UgcmVsYXRlZCBldmVudHMgdG9cbiAgICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgcGFydGljdWxhciBtb3VzZSBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBNb3VzZU1vbml0b3Ige1xuICAgICAgICAvLyBUT0RPOiBXZSdsbCByZWdpc3RlciBjbGljayBoaXN0b3J5IGluIHRoZSBmdXR1cmUsIGZvciBub3cgd2UgYXJlIGp1c3QgZG9pbmcgbW91c2Ugb3ZlciBhdCBwcmVzZW50XG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBQb2ludC5zZXQodGhpcy5wb3NpdGlvbiwgZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBlbnRlcnMgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgbW92ZXMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgZXhpdHMgdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcmFpc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogZmFsc2UgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHRoYXQgd2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBldmVudHMgc2luY2Ugb3VyIGxhc3QgcG9sbCBvZiBzdGF0ZSBhbmQgaXQgY2FuIGJlIHJlc2V0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZHtcbiAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBoYXZlbid0IG1vdmVkIGJlZm9yZVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBjbGlja3NcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLmxlbmd0aCA9IDBcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlTW9uaXRvciB9IiwibGV0IF9pZCA9IDBcbmNvbnN0IG5leHRJZCA9ICgpOiBudW1iZXIgPT4gX2lkKytcblxuLy8gVE9ETzogTWFrZSBtZXNzYWdlcyBlbnVtcz9cblxuLy8gVE9ETzogTWFrZSBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uXG50eXBlIFN1YnNjcmliZXJGdW5jdGlvbiA9IChtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpID0+IHZvaWRcblxuaW50ZXJmYWNlIFN1YnNjcmliZXJOb2RlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb247XG4gICAgcHJpb3JpdHk6IG51bWJlcjtcbiAgICBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG59XG5cblxuXG5jb25zdCBtYWtlU3ViTm9kZSA9IChzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCwgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsID0gbnVsbCk6IFN1YnNjcmliZXJOb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmV4dElkKCksXG4gICAgICAgIHN1YkZuLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbmV4dFxuICAgIH1cbn1cblxuLy8gVE9ETzogPz8gTWFrZSBpdCBzbyBhIHN1YnNjcmliZXIgbGlzdCBjb3VsZCBiZSBkZWFmZW5lZC9saXN0ZW4/XG5cbi8qKlxuICogQSBncm91cCBvZiBmdW5jdGlvbnMsIHNvcnRlZCBieSBwcmlvcml0eSwgd2hpY2ggd2lsbCBiZSBjYWxsZWQgc2VxdWVudGlhbGx5IHdoZW4gdGhlIGxpc3QgaXMgbm90aWZpZWQgb2YgYSBuZXcgbWVzc2FnZVxuICovXG5jbGFzcyBQcmlvcml0eVN1YnNjcmliZXJMaXN0IHtcbiAgICByb290OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgdGFpbDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbFxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBtZXNzYWdlcyB0aGF0IGdldCBzZW50IHRvIHRoaXMgbGlzdCB2aWEgdGhlIG5vdGlmeSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbWVzc2FnZSBvYmplY3Qgd2hlbmV2ZXIgdGhpcyBzdWJzY3JpYmVyIGxpc3QgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LCB0aGUgZWFybGllciBpdCB3aWxsIHJ1biwgaWYgaXQgaGFzIHRoZSBzYW1lIHByaW9yaXR5IHRoZSBvbmUgdGhhdCB3YXMgYWRkZWQgZmlyc3Qgd2lsbCBmaXJlIGZpcnN0XG4gICAgICovXG4gICAgc3Vic2NyaWJlKGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVye1xuICAgICAgICAvLyBDYXNlICMxIEVtcHR5IFN1YnNjcmliZXIgTGlzdFxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHkpXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnJvb3RcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgfSBcbiAgICAgICAgLy8gQ2FzZSAjMiBXZSBhbHJlYWR5IGhhdmUgc29tZSBzdWJzY3JpYmVyc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3QgLy8gd2Uga25vdyBpdCBzaG91bGQgYmUgYSBTdWJzY3JpYmVyIE5vZGUgYW5kIG5vdCBudWxsLCBiZWNhdXNlIHdlIGFyZSBoZXJlXG5cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSwgbmV3IHJvb3RcbiAgICAgICAgICAgIGlmKHByaW9yaXR5IDwgdHJhdmVsbGVyIS5wcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0aGlzLnJvb3QpXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vcm1hbCBjYXNlIHdlIGhhdmUgb3RoZXIgdGhpbmdzIHRvIHdvcnJ5IGFib3V0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgJiYgdHJhdmVsbGVyLm5leHQgJiYgdHJhdmVsbGVyLm5leHQucHJpb3JpdHkgPj0gcHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGVpdGhlciBmb3VuZCBhIG5vZGUgd2l0aCBsb3dlciBwcmlvcml0eSB0aGFuIHVzIG9yIHdlIGhhdmUgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgIHRyYXZlbGxlciEubmV4dCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdHJhdmVsbGVyIS5uZXh0KVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdHJhdmVsbGVycyB3YXMgdGhlIG9sZCB0YWlsXG4gICAgICAgICAgICAgICAgaWYodHJhdmVsbGVyID09PSB0aGlzLnRhaWwpe1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5leHQgb25lIGlzIHRoZSBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSB0cmF2ZWxsZXIhLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxsZXIhLm5leHQuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtb3N0IGltcG9yYW50IGluZm9ybWF0aW9uIGZvciB0aGUgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdG9waWMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHB1YnN1YiB0byByZW1pbmQgdGhlIHN1YnNjcmliZXIgb2YgdGhlIHNwZWNpZmljIHRvcGljIG9yIHN1YnRvcGljXG4gICAgICovXG4gICAgbm90aWZ5KG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290XG4gICAgICAgIHdoaWxlKHRyYXZlbGxlciAhPSBudWxsKXtcbiAgICAgICAgICAgIHRyYXZlbGxlci5zdWJGbihtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IiwiaW1wb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0gZnJvbSAnLi9wcmlvcml0eVN1YnNjcmliZXJMaXN0J1xuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBQdWJzdWIgaXMgYSB0b3BpYy1iYXNlZCBvYnNlcnZlciBwYXR0ZXJuIGltcGxlbWVudGF0aW9uIGRlc2lnbmVkIHRvIGF2b2lkIHRpZ2h0IGNvdXBsaW5nIG9mIGNvbXBvbmVudHNcbiAqL1xuY2xhc3MgUHViU3ViIHtcbiAgICB0b3BpY3M6IEhhc2g8UHJpb3JpdHlTdWJzY3JpYmVyTGlzdD47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50b3BpY3MgPSB7fVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhIG1lc3NhZ2UgdG8gYWxsIHN1YnNjcmliZXJzIHRvIGEgdG9waWNcbiAgICAgKiBAcGFyYW0gdG9waWMgVG9waWMgdG8gdXNlLCBpZiBub2JvZHkgaXMgc3Vic2NyaWJlZCB0byBpdCwgbm90aGluZyBoYXBwZW5zXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGFjdHVhbCBtZXNzYWdlIHRvIHNlbmQsIHRoaXMgY291bGQgYmUgYW55dGhpbmcsIGJ1dCBpdCdzIGEgc2luZ2xlIHRoaW5nXG4gICAgICovXG4gICAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXS5ub3RpZnkobWVzc2FnZSwgdG9waWMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgc3BlY2lmaWMgdG9waWMgd2l0aCBhIGdpdmVuIHByaW9yaXR5LCByZXR1cm5zIGFuIGlkIHRoYXQgeW91J2xsIG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gdG9waWMgdGhlIHNwZWNpZmljIHRvcGljIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSBmbiB0aGUgZnVuY3Rpb24gdG8gcmVjaWV2ZSB0aGUgc3BlY2lmaWMgbWVzc2FnZSBhbmQgdG9waWMgYmVpbmcgYnJvYWRjYXN0ZWQgdG9cbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgdGhlIHByaW9yaXR5IG9mIHRoZSBmdW5jdGlvbiB0byBzdWJzY3JpYmUgdG8sIGhpZ2hlciBudW1iZXJzIHJ1biBmaXJzdCwgdGhlIGRlZmF1bHQgaXMgemVybywgbmVnYXRpdmUgbnVtYmVycyBhcmUgYWxsb3dlZFxuICAgICAqL1xuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nLCBmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIGlmKCF0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdID0gbmV3IFByaW9yaXR5U3Vic2NyaWJlckxpc3QoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvcGljc1t0b3BpY10uc3Vic2NyaWJlKGZuLCBwcmlvcml0eSlcbiAgICB9XG59XG4vLyBPVVIgVU5JVkVSU0FMIERFRkFVTFQgUFVCU1VCXG5jb25zdCBQVUJTVUIgPSBuZXcgUHViU3ViKClcbmV4cG9ydCB7UFVCU1VCLCBQdWJTdWJ9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFJlbmRlciBDZWxsXG4gKi9cbmludGVyZmFjZSBJUmVuZGVyQ2VsbCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZzsgLy8gdGhpcyBzaG91bGQgb25seSBiZSBzdHJpbmcgb2YgbGVuZ3RoIDFcbiAgICBmb3JlQ29sb3I6IHN0cmluZztcbiAgICBiYWNrQ29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksIGNoYXJhY3RlciwgZm9yZUNvbG9yLCBiYWNrQ29sb3JcbiAgICB9XG59XG5cbmNvbnN0IFJlbmRlckNlbGwgPSB7XG4gICAgbWFrZVxufVxuXG5leHBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbH0iLCJpbXBvcnQge0lSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIEhhc2hTdHI8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5pbnRlcmZhY2UgSGFzaE51bTxUPiB7XG4gICAgW2tleTogbnVtYmVyXTogVDtcbn1cblxuY29uc3QgY29kZSA9IChjaGFyOiBzdHJpbmcpOiBudW1iZXIgPT4gY2hhci5jaGFyQ29kZUF0KDApXG5jb25zdCBDSEFSQUNURVJfSEVMUEVSOiBIYXNoU3RyPHN0cmluZz4gPSB7XG4gICAgVkVSVElDQUxfTElORTogJ+KUgicsXG4gICAgSE9SSVpPTlRBTF9MSU5FOiAn4pSAJyxcbiAgICBDUk9TU19MSU5FUzogJ+KUvCcsXG4gICAgVF9MRUZUOiAn4pSkJyxcbiAgICBUX1VQOiAn4pS0JyxcbiAgICBUX1JJR0hUOiAn4pScJyxcbiAgICBUX0RPV046ICfilKwnLFxuICAgIFRPUF9SSUdIVDogJ+KUlCcsXG4gICAgQk9UVE9NX1JJR0hUOiAn4pSMJyxcbiAgICBCT1RUT0xfTEVGVDogJ+KUkCcsXG4gICAgVE9QX0xFRlQ6ICfilJgnXG59XG5cbmNvbnN0IFRJTEVfV0lEVEggPSAxMCwgVElMRV9IRUlHSFQgPSAxMFxuXG5jb25zdCBDT0RFX1RPX1JFQ1RfSEFTSDogSGFzaE51bTxJUmVjdD4gPSB7fVxuY29uc3Qgc3BhY2VDb2RlID0gICBjb2RlKCcgJylcbmNvbnN0IGF0Q29kZSA9ICAgICAgY29kZSgnQCcpXG5jb25zdCBhQ29kZSA9ICAgICAgIGNvZGUoJ2EnKVxuY29uc3QgekNvZGUgPSAgICAgICBjb2RlKCd6JylcbmNvbnN0IEFDb2RlID0gICAgICAgY29kZSgnQScpXG5jb25zdCBaQ29kZSA9ICAgICAgIGNvZGUoJ1onKVxuXG5cbmNvbnN0IGN0cmhIZWxwZXIgPSAoY29kZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2NvZGVdID0gUmVjdC5tYWtlKHgseSwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5cbi8vIFdlIHdpbGwgZmlsbCBpbiB0aGUgb3RoZXIgY2hhcmFjdGVycyBhcyBuZWNlc3NhcnlcbkNPREVfVE9fUkVDVF9IQVNIW3NwYWNlQ29kZV0gPSBSZWN0Lm1ha2UoMCwgMCwgMTAsIDEwKVxuQ09ERV9UT19SRUNUX0hBU0hbYXRDb2RlXSA9IFJlY3QubWFrZSgwLCAxMCwgMTAsIDEwKVxuZm9yKGxldCBpID0gQUNvZGU7IGkgPD0gWkNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBBQ29kZSkgKiAxMCwgMzAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuZm9yKGxldCBpID0gYUNvZGU7IGkgPD0gekNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBhQ29kZSkgKiAxMCwgNDAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuLy8gZm9yIGJyZXZpdGllcyBzYWtlXG5jb25zdCBDSCA9IENIQVJBQ1RFUl9IRUxQRVJcbmN0cmhIZWxwZXIoY29kZShDSC5WRVJUSUNBTF9MSU5FKSwgMTQwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkhPUklaT05UQUxfTElORSksIDE1MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5DUk9TU19MSU5FUyksIDE2MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0xFRlQpLCAxNzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9VUCksIDE4MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1JJR0hUKSwgMTkwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfRE9XTiksIDIwMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfUklHSFQpLCAyMTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9NX1JJR0hUKSwgMjIwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTF9MRUZUKSwgMjMwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9MRUZUKSwgMjQwLDEwKVxuXG5cbmZ1bmN0aW9uIGRyYXdTZWN0aW9uKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0aWxlc2hlZXQ6IGFueSwgc3JjUmVjdDogSVJlY3QsIGRlc3RSZWN0OiBJUmVjdCwgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogdm9pZHtcbiAgICBjdHguY2xlYXJSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4LmRyYXdJbWFnZSh0aWxlc2hlZXQsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCwgZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcidcbiAgICBjdHguZmlsbFN0eWxlPWZvcmVDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgY3R4LmZpbGxTdHlsZT1iYWNrQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG59XG5cbmV4cG9ydCAgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgQ0hBUkFDVEVSX0hFTFBFUiwgY29kZSwgZHJhd1NlY3Rpb24gfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRk9WQ2VsbCB9IGZyb20gJy4vZm92J1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5leHBvcnQgY29uc3QgcmVuZGVyVG9HcmlkID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCBlbnRpdGllczogRW50aXR5W10sIHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBjYW1lcmFGcmFtZTogSVJlY3QpOiB2b2lkID0+IHtcbiAgICAvLyByZW5kZXJHcmlkIGlzIGluIFNDUkVFTiBjb29yZGluYXRlcywgYW5kIHdpbGwgaGF2ZSBpdCdzIFhZIGlnbm9yZWQgZm9yIG91ciBwdXJwb3Nlc1xuICAgIC8vIHRpbGVHcmlkLCBlbnRpdGllcyBhbmQgZm92R3JpZCBhcmUgaW4gV09STEQgY29vcmRpbmF0ZXMgYW5kIHdpbGwgaGF2ZSB0aGVpciBYWSBhbmQgeSBpZ25vcmVkIGZvciBub3dcbiAgICBcbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgcmVuZGVyR3JpZCBhbmQgdGhlIGNhbWVyYXNcbiAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICBQb2ludC5zZXQod29ybGRQLCBzY3JlZW5QLnggKyBjYW1lcmFGcmFtZS54LCBzY3JlZW5QLnkgKyBjYW1lcmFGcmFtZS55KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBMZXQncyBkbyBzb21lIGJvdW5kcyBjaGVja2luZ1xuICAgICAgICAgICAgLy8gd2Uga25vdyB0aGVzZSBwb2l0bnMgYXJlIGFsd2F5cyBpbiBjYW1lcmFzLCBzbyBuZXZlciBuZWVkIHRvIGNoZWNrIHRoYXRcbiAgICAgICAgICAgIC8vIHdlIGFyZSBnb2luZyB0byBvZmZsb2FkIHRoZSBjYXNlIG9mIGNoZWNraW5nIGlmIHRoZSByZW5kZXJHcmlkIGNhbiBmaXQgdGhlIGNhbWVyYVNpemUgZm9yIG5vd1xuICAgICAgICAgICAgLy8gc28gZm9yIG5vdyBqdXN0IGNoZWNrIGlmIHdlIGFyZSBpbnNpZGUgb2YgdGhlIHRpbGVHcmlkLCB3aGljaCBjdXJyZW50bHkgc2hvdWxkIGJlIHRoZSBzYW1lIGRpbWVuc2lvbnMgYXMgdGhlIGZvdkdyaWQsIHRob3VnaCB0aGF0IGlzIGJvdW5kIHRvIGNoYW5nZSBhcyB3ZSB0cnkgYW5kIG9wdGltaXplIHRoaW5nc1xuICAgICAgICAgICAgLy8gc29vb29vbywgbGV0J3MgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSB0aGUgdGlsZUdyaWRcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRQKHdvcmxkUClcbiAgICAgICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSAnJ1xuICAgICAgICAgICAgICAgIGlmKHRpbGUuZXhwbG9yZWQpe1xuICAgICAgICAgICAgICAgICAgICBpZighZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX3dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlLmJsb2NrU2lnaHQpeyAvLyBpdCdzIGEgZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X3dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlLmJsb2NrU2lnaHQpeyAvLyBpdCdzIGEgZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2Rvb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gJydcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmZvcmVDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgZW50aXR5LnggLSBjYW1lcmFGcmFtZS54LCBlbnRpdHkueSAtIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIG9mIHRoZSBjYW1lcmEgYm91bmRzXG4gICAgICAgIGlmKGNhbWVyYUZyYW1lLnggPD0gZW50aXR5LnggJiYgZW50aXR5LnggPD0gY2FtZXJhRnJhbWUueCArIGNhbWVyYUZyYW1lLndpZHRoIC0gMSAmJlxuICAgICAgICAgICAgY2FtZXJhRnJhbWUueSA8PSBlbnRpdHkueSAmJiBlbnRpdHkueSA8PSBjYW1lcmFGcmFtZS55ICsgY2FtZXJhRnJhbWUuaGVpZ2h0IC0gMSl7XG4gICAgICAgICAgICBjb25zdCByQ2VsbDogSVJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGw6IEZPVkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgICAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59IiwiLy8gV0FSTklORzogSEVSRSBUSEVSRSBCRSBEUkFHT05TLCAob3IgaW4gdGhpcyBjYXNlLCBhIGxvdCBvZiBjb2RlIEkgZG9uJ3R1bmRlcnN0YW5kKVxuXG4vLyBXRSBPTkxZIFdBTlQgT05FIFJORyBHRU5FUkFUT1IgQkVDQVVTRSBXRSBBTFdBWVMgV0FOVCBBIFNFRUQgRk9SIElUXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MjEyOTUvc2VlZGluZy10aGUtcmFuZG9tLW51bWJlci1nZW5lcmF0b3ItaW4tamF2YXNjcmlwdFxuXG4vLyBIYXNoaW5nIGZ1bmN0aW9uIGZvciB0YWtpbmcgc2ltcGxlIHN0cmluZyBhbmQgY3JlYXRpbmcgYmV0dGVyIFwidHJ1ZVwiIHNlZWRzXG4vLyBJIEhBVkUgTk8gSURFQSBXSEFUIFRIRSBNQUdJQyBOVUJNRVJTIEFSRSBGT1JcbmZ1bmN0aW9uIHhtdXIzKHN0cjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCBoID0gMTc3OTAzMzcwMyBeIHN0ci5sZW5ndGggLy8gYml0d2lzZSBvciB0aGUgc3RyaW5nIHdpdGggdGhpcyByYW5kb20gdGhpbmdcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gc3RyLmNoYXJDb2RlQXQoaSksIDM0MzI5MTgzNTMpXG4gICAgICAgIGggPSBoIDw8IDEzIHwgaCA+Pj4gMTlcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxNiwgMjI0NjgyMjUwNylcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTMsIDMyNjY0ODk5MDkpXG4gICAgICAgIHJldHVybiAoaCBePSBoID4+PiAxNikgPj4+IDBcbiAgICB9XG59XG5cbnR5cGUgSVJhbmRvbSA9KCkgPT4gbnVtYmVyO1xuXG4vLyBHRU5FUkFUT1JTXG5mdW5jdGlvbiBzZmMzMihhOiBhbnksIGI6IGFueSwgYzogYW55LCBkOiBhbnkpOiAoRnVuY3Rpb24pe1xuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGEgPj4+PSAwOyBiPj4+PSAwOyBjID4+Pj0gMDsgZCA+Pj49IDBcbiAgICAgICAgbGV0IHQgPSAoYSArIGIpIHwgMFxuICAgICAgICBhID0gYiBeIGIgPj4+IDlcbiAgICAgICAgYiA9IGMgKyAoYyA8PCAzKSB8IDBcbiAgICAgICAgYyA9IChjIDw8IDIxIHwgYyA+Pj4gMTEpXG4gICAgICAgIGQgPSBkICsgMSB8IDBcbiAgICAgICAgdCA9IHQgKyBkIHwgMFxuICAgICAgICBjID0gYyArIHQgfCAwXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHQgPj4+IDApIC8gNDI5NDk2NzI5NlxuICAgIH1cbn1cblxuLy8gT05FIExJTkVSIENVUlJFTlRMWSBOT1QgSU4gVVNFXG4vLyBjb25zdCBMQ0c9IChzOiBhbnkpOiBGdW5jdGlvbj0+KCk6IGFueT0+KDIqKjMxLTEmKHM9TWF0aC5pbXVsKDQ4MjcxLHMpKSkvMioqMzE7XG5cbmNvbnN0IFJBTkRPTSA9IHtcbiAgICBfZ2VuZXJhdG9yOiAoKCk6IGFueSA9PiB7fSkgYXMgRnVuY3Rpb24sXG4gICAgc2VlZDogZnVuY3Rpb24oc2VlZFN0cjogc3RyaW5nID0gYnRvYShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpICk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB4bXVyMyhzZWVkU3RyKVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3IgPSBzZmMzMihzZWVkKCksIHNlZWQoKSwgc2VlZCgpLCBzZWVkKCkpXG4gICAgICAgIHJldHVybiBzZWVkU3RyXG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpOiBhbnkge1xuICAgICAgICBpZih0aGlzLl9nZW5lcmF0b3IgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5zZWVkKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdG9yKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFJBTkRPTSB9IiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9yZWN0J1xuXG4vKipcbiAqIFggYW5kIFkgYXJlIHRoZSBDRU5URVIgb2YgdGhlIGVsbGlwc2UgKHVubGlrZSB0aGUgdG9wIGxlZnQgZm9yIElSZWN0KVxuICovXG5pbnRlcmZhY2UgSUVsbGlwc2UgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHhSYWRpdXM6IG51bWJlcjtcbiAgICB5UmFkaXVzOiBudW1iZXI7XG4gICAgcm90YXRpb246IG51bWJlcjtcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgeFJhZGl1czogbnVtYmVyLCB5UmFkaXVzOiBudW1iZXIsIHJvdGF0aW9uOiBudW1iZXIgPSAwKTogSUVsbGlwc2UgPT4ge1xuICAgIHJldHVybiB7eCwgeSwgeFJhZGl1cywgeVJhZGl1cywgcm90YXRpb259XG59XG5cblxuLyoqXG4gKiBDb250YWlucyBYWVxuICogQHBhcmFtIGVsbGlwc2UgXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBjb250YWluc1hZID0gKGVsbGlwc2U6IElFbGxpcHNlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGVsbGlwc2Uucm90YXRpb24pLCBzaW4gPSBNYXRoLnNpbihlbGxpcHNlLnJvdGF0aW9uKVxuICAgIGNvbnN0IGR4ID0gKHggLSBlbGxpcHNlLngpLCBkeSA9ICh5IC0gZWxsaXBzZS55KVxuICAgIGNvbnN0IHRkeCA9IGNvcyAqIGR4ICsgc2luICogZHksIHRkeSA9IHNpbiAqIGR4IC0gY29zICogZHlcblxuICAgIHJldHVybiAoICh0ZHggKiB0ZHgpIC8gKGVsbGlwc2UueFJhZGl1cyogZWxsaXBzZS54UmFkaXVzKSArICh0ZHkgKiB0ZHkpLyhlbGxpcHNlLnlSYWRpdXMgKiBlbGxpcHNlLnlSYWRpdXMpICkgPCAxXG59XG4vKipcbiAqIERvZXMgdGhlIGVsbGlwc2UgY29udGFpbiB0aGUgcG9pbnRcbiAqIEBwYXJhbSBlbGxpcHNlIFxuICogQHBhcmFtIHBvaW50IFxuICovXG5jb25zdCBjb250YWluc1BvaW50ID0gKGVsbGlwc2U6IElFbGxpcHNlLCBwb2ludDogSVBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zWFkoZWxsaXBzZSwgcG9pbnQueCwgcG9pbnQueSlcbn1cblxuLy8gXG4vKipcbiAqIEFyZSBlbm91Z2ggY29ybmVycyBpbnNpZGUgdGhlIFJlY3QgdG8gYmUgY29uc2lkZXJlZCBpbnNpZGVcbiAqIEBwYXJhbSBlbGxpcHNlIGVsbGlwc2VcbiAqIEBwYXJhbSByZWN0IHJlY3QgdG8gdGVzdCBpZiBpdCdzIGVkZ2VzIGFyZSBpbnNpZGUgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB0aHJlc2hvbGQgaG93IG1hbnkgY29ybmVycyBtdXN0IGJlIGluc2lkZSB0byBjb3VudCwgZGVmYXVsdHMgdG8gNFxuICovXG5jb25zdCBjb250YWluc1JlY3RDb3JuZXJzID0gKGVsbGlwc2U6IElFbGxpcHNlLCByZWN0OiBJUmVjdCwgdGhyZXNob2xkOiBudW1iZXIgPSA0KTogYm9vbGVhbiA9PiB7XG4gICAgbGV0IGNvcm5lcnNJbiA9IDBcbiAgICBjb25zdCBjb3JuZXJzID0gUmVjdC5jb3JuZXJzKHJlY3QpXG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLnRyKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy50bCkpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMuYmwpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLmJyKSl7IGNvcm5lcnNJbisrfVxuICAgIHJldHVybiBjb3JuZXJzSW4gPj0gdGhyZXNob2xkXG59XG5cbmNvbnN0IEVsbGlwc2UgPSB7XG4gICAgbWFrZSxcbiAgICBjb250YWluc1hZLFxuICAgIGNvbnRhaW5zUG9pbnQsXG4gICAgY29udGFpbnNSZWN0Q29ybmVyc1xufVxuXG5leHBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmtpbmcgd2l0aCBhIDJEIFBvaW50XG4gKi9cbmludGVyZmFjZSBJUG9pbnQgeyAgXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgUG9pbnRcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiB7eCx5fVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgcG9pbnQgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGFkZGluZyBib3RoIG9mIHRoZW0gdG9nZXRoZXIsIGlmIHlvdSB3YW50IHRvIGFkZCBhIHBvaW50IFRPIGFub3RoZXIgcG9pbnQsIHVzZSBhZGRUb1xuICogQHBhcmFtIGEgRmlyc3QgUG9pbnQsIHVubW9kaWZpZWRcbiAqIEBwYXJhbSBiIFNlY29uZCBQb2ludCwgdW5tb2RpZmllZFxuICovXG5jb25zdCBhZGQgPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKGEueCArIGIueCwgYS55ICsgYi55KVxufVxuXG4vKipcbiAqIEFkZCB0aGUgdmFsdWUgb2YgUG9pbnQgYSB0byBQb2ludCBiXG4gKiBAcGFyYW0gYSBUaGUgcG9pbnQgdGhhdCBjaGFuZ2VzLCB3aWxsIGhhdmUgYiBhZGRlZCB0byBpdFxuICogQHBhcmFtIGIgVGhlIHBvaW50IHdob3NlIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBvdGhlciwgaXQgaXMgdW5tb2RpZmllZCBpdHNlbGZcbiAqL1xuY29uc3QgYWRkVG8gPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIGEueCArPSBiLnhcbiAgICBhLnkgKz0gYi55XG4gICAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlcyBvZiBhIHBvaW50IHdpdGggeCBhbmQgeSB2YWx1ZXMsIHJldHVybnMgdGhlIG5vdyBtb2RpZmllZCBwb2ludFxuICogQHBhcmFtIHBvaW50IHBvaW50IHRvIGJlIG1vZGlmaWVkXG4gKiBAcGFyYW0geCBuZXcgeCB2YWx1ZVxuICogQHBhcmFtIHkgbmV3IHkgdmFsdWVcbiAqL1xuY29uc3Qgc2V0ID0gKHBvaW50OiBJUG9pbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICBwb2ludC54ID0geFxuICAgIHBvaW50LnkgPSB5XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQ29weSBhIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgUG9pbnQgdGhhdCB3aWxsIGJlIGNvcGllZFxuICovXG5jb25zdCBjb3B5ID0gKHBvaW50OiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBtZWFudCB0byB3b3JrIHdpdGggdGhpbmdzIHRoYXQgaGF2ZSB0aGUgSVBvaW50IGludGVyZmFjZVxuICovXG5jb25zdCBQb2ludCA9IHtcbiAgICBtYWtlLFxuICAgIGFkZCxcbiAgICBhZGRUbyxcbiAgICBzZXQsXG4gICAgY29weVxufVxuXG5leHBvcnQge0lQb2ludCwgUG9pbnR9IiwiaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3BvaW50J1xuaW50ZXJmYWNlIElSZWN0IGV4dGVuZHMgSVBvaW50IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RTaWRlcyB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdENvcm5lcnMge1xuICAgIHRsOiBJUG9pbnQ7XG4gICAgdHI6IElQb2ludDtcbiAgICBibDogSVBvaW50O1xuICAgIGJyOiBJUG9pbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICogQHBhcmFtIHdpZHRoIFxuICogQHBhcmFtIGhlaWdodCBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH1cbn1cblxuY29uc3Qgc2V0ID0gKHI6IElSZWN0LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgci54ID0geFxuICAgIHIueSA9IHlcbiAgICByLndpZHRoID0gd2lkdGhcbiAgICByLmhlaWdodCA9IGhlaWdodFxuICAgIHJldHVybiByXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSB1bml0IHZhbHVlIG9mIHRoZSBzaWRlcyBvZiB0aGUgcmVjdGFuZ2xlLCBsZWZ0IGFuZCByaWdodCByZXR1cm4geCBjb29yZGluYXRlcywgdG9wIGFuZCBib3R0b20gaW5jbHVkZSB5IGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gcmVjdCByZWN0YW5nbGUgdXNlZFxuICovXG5jb25zdCBzaWRlcyA9IChyZWN0OiBJUmVjdCk6IElSZWN0U2lkZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfVxufVxuY29uc3QgY29ybmVycyA9IChyZWN0OiBJUmVjdCk6IElSZWN0Q29ybmVycyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkpLFxuICAgICAgICB0cjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkpLFxuICAgICAgICBibDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICAgICAgYnI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBwb2ludDogTk9URTogVGhpcyBmaW5kcyB0aGUgSU5URUdFUiBjZW50ZXIsIGNvb3JkaW5hdGVzIGFyZSB0cnVuY2F0ZWRcbiAqIEBwYXJhbSByZWN0IFRoZSByZWN0YW5nbGUgd2UgYXJlIGZpbmRpbmcgdGhlIGNlbnRlciBvZlxuICovXG5jb25zdCBjZW50ZXIgPSAocmVjdDogSVJlY3QpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBQb2ludC5tYWtlKE1hdGguZmxvb3IocmVjdC54ICsgcmVjdC53aWR0aC8yKSwgTWF0aC5mbG9vcihyZWN0LnkgKyByZWN0LmhlaWdodC8yKSlcbn1cblxuLy8gT1BUSU1JWkU6IERvbid0IGNhbGwgc2lkZXMsIGp1c3QgdXNlIHRoZSByYXcgbnVtYmVycyBhbmQgYWRkaXRpb25cbmNvbnN0IGludGVyc2VjdHMgPSAoYTogSVJlY3QsIGI6IElSZWN0KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgYVNpZGVzID0gc2lkZXMoYSlcbiAgICBjb25zdCBiU2lkZXMgPSBzaWRlcyhiKVxuICAgIHJldHVybiBhU2lkZXMubGVmdCA8PSBiU2lkZXMucmlnaHQgJiYgYVNpZGVzLnJpZ2h0ID49IGJTaWRlcy5sZWZ0ICYmIFxuICAgICAgICBhU2lkZXMudG9wIDw9IGJTaWRlcy5ib3R0b20gJiYgYVNpZGVzLmJvdHRvbSA+PSBiU2lkZXMudG9wXG5cbiAgICAgICAgXG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHJlY3RhbmdsZXNcbiAqL1xuY29uc3QgUmVjdCA9IHtcbiAgICBtYWtlLFxuICAgIHNldCxcbiAgICBzaWRlcyxcbiAgICBjb3JuZXJzLFxuICAgIGNlbnRlcixcbiAgICBpbnRlcnNlY3RzXG59XG5cbmV4cG9ydCB7SVJlY3QsIFJlY3R9XG4iLCIvLyBJIGd1ZXNzIGV2ZXJ5dGhpbmcgd291bGQgbmVlZCBpdCdzIG93biBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi4uLiBncm9zc1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBsb2NhdGlvbnMgb24gdGhlIGJvYXJkLCBldmVudHVhbGx5IHdlIHdpbGwgcHJvYmFibHkgbW92ZSB0aGlzIGludG8gaXRzIG93biBFQ1Mgc3lzdGVtXG4gKi9cbmNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGJsb2NrTW92ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgdGlsZSBibG9jayBsaW5lIG9mIHNpZ2h0XG4gICAgICovXG4gICAgYmxvY2tTaWdodDogYm9vbGVhbjtcblxuICAgIGV4cGxvcmVkOiBib29sZWFuO1xuXG4gICAgY29udGFpbmVkOiBib29sZWFuOyAvLyBtb2RlbHMgaWYgdGhpcyB0aGluZyBoYXMgYSBmbG9vciBhbmQgY2VpbGluZywgKG9yLCBpbiB1bml2ZXJzZSwgc3R1ZmYgc3Vycm91bmRpbmcgaXQgb24gdGhlIHotYXhpcylcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIHRoaXMuZXhwbG9yZWQgPSBmYWxzZVxuICAgICAgICBpZihibG9ja1NpZ2h0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tNb3ZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja1NpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZWQgPSB0cnVlXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgVGlsZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==