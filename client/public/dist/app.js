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
/* harmony import */ var _mapGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapGenerator */ "./client/src/mapGenerator.ts");
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _idManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./idManager */ "./client/src/idManager.ts");
/* harmony import */ var _fov__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fov */ "./client/src/fov.ts");














// sizing
const TILE_WIDTH = 10;
const TILE_HEIGHT = 10;
// THESE ARE IN TILE SIZES
const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 50;
const MAP_WIDTH = 80;
const MAP_HEIGHT = 45;
const COLORS = {
    'black': '#000000',
    'dark_wall': '#000064',
    'dark_ground': '#323296',
    'light_wall': '#826E32',
    'light_ground': '#C8B432'
};
const player = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_12__["ID_MANAGER"].next(), 3, 4, '@', '#FFFFFF');
const npc = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_12__["ID_MANAGER"].next(), 3, 4, '@', '#BBAA00');
const entities = [player, npc];
const canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH * TILE_WIDTH;
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT;
const km = new _keyboardMonitor__WEBPACK_IMPORTED_MODULE_0__["KeyboardMonitor"]().attach(document);
const mm = new _mouseMonitor__WEBPACK_IMPORTED_MODULE_1__["MouseMonitor"]().attach(canvas);
const renderer = new _canvasRenderer__WEBPACK_IMPORTED_MODULE_7__["CanvasRenderer"];
const renderGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
renderGrid.setEach((cell, index, x, y) => {
    return _renderCell__WEBPACK_IMPORTED_MODULE_3__["RenderCell"].make(x, y, ' ', COLORS.black, COLORS.dark_ground);
});
const tileGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
tileGrid.setEach((cell, index, x, y) => {
    return new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, true);
});
const FOV_RADIUS = 10;
let fovRecompute = true;
const fovGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
// if we turn fov on it'll change it over to false
fovGrid.setEach(() => {
    return {
        visible: true
    };
});
/**
 * Return an integer between min and max inclusive
 * @param min
 * @param max
 */
const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const ROOM_MAX_SIZE = 10;
const ROOM_MIN_SIZE = 10;
const MAX_ROOMS = 30;
// GET READY FOR SOME MAP GENERATION!
const rooms = [];
// MapGenerator.createRoom(tileGrid, Rect.make(1,1,20,20))
for (let r = 0; r < MAX_ROOMS; r++) {
    const w = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
    const h = randint(ROOM_MIN_SIZE, ROOM_MAX_SIZE);
    const x = randint(0, MAP_WIDTH - w - 1);
    const y = randint(0, MAP_HEIGHT - h - 1);
    const newRoom = _shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].make(x, y, w, h);
    let intersects = false;
    for (let i = 0; i < rooms.length; i++) {
        if (_shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].intersects(newRoom, rooms[i])) {
            intersects = true;
            break;
        }
    }
    if (!intersects) {
        _mapGenerator__WEBPACK_IMPORTED_MODULE_10__["MapGenerator"].createRoom(tileGrid, newRoom);
        const center = _shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].center(newRoom);
        if (rooms.length === 0) {
            _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(player, center.x, center.y);
        }
        else {
            const lastCenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].center(rooms[rooms.length - 1]);
            if (randint(0, 1) === 1) {
                _mapGenerator__WEBPACK_IMPORTED_MODULE_10__["MapGenerator"].createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y);
                _mapGenerator__WEBPACK_IMPORTED_MODULE_10__["MapGenerator"].createVTunnel(tileGrid, lastCenter.y, center.y, center.x);
            }
            else {
                _mapGenerator__WEBPACK_IMPORTED_MODULE_10__["MapGenerator"].createVTunnel(tileGrid, lastCenter.y, center.y, lastCenter.x);
                _mapGenerator__WEBPACK_IMPORTED_MODULE_10__["MapGenerator"].createHTunnel(tileGrid, lastCenter.x, center.x, center.y);
            }
        }
        rooms.push(newRoom);
    }
}
// SET NPC LOCATION
{
    const center = _shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].center(rooms[rooms.length - 1]);
    _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(npc, center.x, center.y);
}
//
const renderToGrid = (tileGrid, fovGrid, entities, renderGrid) => {
    tileGrid.forEach((tile, index) => {
        const renderCell = renderGrid.getI(index);
        const fovCell = fovGrid.getI(index);
        renderCell.foreColor = COLORS.black;
        renderCell.character = ' ';
        if (!fovCell.visible) {
            if (tile.blockMove) {
                renderCell.backColor = COLORS.dark_wall;
            }
            else {
                renderCell.backColor = COLORS.dark_ground;
            }
        }
        else {
            if (tile.blockMove) {
                renderCell.backColor = COLORS.light_wall;
            }
            else {
                renderCell.backColor = COLORS.light_ground;
            }
        }
    });
    entities.forEach((entity) => {
        if (!renderGrid.inBoundsXY(entity.x, entity.y)) {
            return;
        }
        const rCell = renderGrid.getXY(entity.x, entity.y);
        rCell.foreColor = entity.color;
        rCell.character = entity.character;
    });
};
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
        if (km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(-1, 0) });
        }
        if (km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(1, 0) });
        }
        if (km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(0, -1) });
        }
        if (km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', { id: player.id, delta: _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(0, 1) });
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
            if (tileGrid.inBoundsXY(player.x + move.x, player.y + move.y)) {
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y);
                if (!tile.blockMove) {
                    mover.move(move.x, move.y);
                    if (mover.id === player.id) {
                        fovRecompute = true;
                    }
                }
            }
        });
        MoveProcessor.moves.length = 0;
        if (fovRecompute) {
            Object(_fov__WEBPACK_IMPORTED_MODULE_13__["calculateFOV"])(fovGrid, tileGrid, player, FOV_RADIUS);
        }
        // recompute fov here
        // we might move all of this into some offscreen 
        renderToGrid(tileGrid, fovGrid, entities, renderGrid);
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


/**
 * Responsible for taking a render grid and converting it to images
 * on the canvas
 */
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
    render(renderGrid) {
        if (this.ctx == null) {
            throw new Error('Cannot render a grid with a missing context');
        }
        // We have checked to ensure that it has been created
        const ctx = this.ctx;
        renderGrid.forEach((cell, index, x, y) => {
            const srcRect = _renderHelpers__WEBPACK_IMPORTED_MODULE_0__["CODE_TO_RECT_HASH"][Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["code"])(cell.character)];
            Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["drawSection"])(ctx, this.spritesheet, srcRect, _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].make(x * 10, y * 10, 10, 10), cell.foreColor, cell.backColor);
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
const calculateOctant = (fovGrid, tileGrid, startPoint, maxDistance, horizontalNotVertical, xDirection, yDirection) => {
    // Our shadows we will cast
    const shadowRanges = [];
    // our starting location is always visible
    fovGrid.getP(startPoint).visible = true;
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
            const tile = tileGrid.getP(traveller);
            const fovCell = fovGrid.getP(traveller);
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
        }
    }
};
const calculateFOV = (fovGrid, tileGrid, startPoint, maxDistance) => {
    // be default we are going to shadowCast
    // by default everything is not visible
    fovGrid.setEach(() => { return { visible: false }; });
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
        let x = 0, y = 0;
        for (let i = 0; i < this.cells.length; i++) {
            x = i % this.width;
            y = (i - x) / this.width;
            fn(this.cells[i], i, x, y);
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

/***/ "./client/src/mapGenerator.ts":
/*!************************************!*\
  !*** ./client/src/mapGenerator.ts ***!
  \************************************/
/*! exports provided: MapGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGenerator", function() { return MapGenerator; });
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");

/**
 * A collection of static methods for helping to manipulate maps
 */
class MapGenerator {
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
    sides,
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
        if (blockSight === undefined) {
            this.blockSight = blockMove;
        }
        else {
            this.blockSight = blockSight;
        }
    }
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZm92LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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SyxJQUFJLE1BQU0sQ0FBQyxJQUFJO1FBQzdELE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0FBR2xFLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sSUFBSSxHQUFHO0lBQ1QsSUFBSTtJQUNKLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtDQUNiO0FBRW1COzs7Ozs7Ozs7Ozs7O0FDdEVwQjtBQUFBO0FBQUEsZ0ZBQWdGO0FBRWhGOztHQUVHO0FBQ0gsTUFBTSxJQUFJO0lBWU47Ozs7T0FJRztJQUNILFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUFrQixFQUFFLFVBQW9CO1FBQ3RFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFHLFVBQVUsS0FBSyxTQUFTLEVBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7U0FDL0I7SUFFTCxDQUFDO0NBQ0o7QUFFYyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0gZnJvbSAnLi9rZXlib2FyZE1vbml0b3InXG5pbXBvcnQgeyBNb3VzZU1vbml0b3IgfSBmcm9tICcuL21vdXNlTW9uaXRvcidcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vYXNzZXRIZWxwZXInXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4vY2FudmFzUmVuZGVyZXInXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgUFVCU1VCIH0gZnJvbSAnLi9wdWJTdWIvcHViU3ViJ1xuaW1wb3J0IHsgTWFwR2VuZXJhdG9yIH0gZnJvbSAnLi9tYXBHZW5lcmF0b3InXG5pbXBvcnQgeyBSZWN0LCBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRF9NQU5BR0VSIH0gZnJvbSAnLi9pZE1hbmFnZXInXG5pbXBvcnQgeyBjYWxjdWxhdGVGT1YsIEZPVkNlbGwgfSBmcm9tICcuL2ZvdidcblxuLy8gc2l6aW5nXG5jb25zdCBUSUxFX1dJRFRIID0gMTBcbmNvbnN0IFRJTEVfSEVJR0hUID0gMTBcblxuLy8gVEhFU0UgQVJFIElOIFRJTEUgU0laRVNcbmNvbnN0IFNDUkVFTl9XSURUSCA9IDgwXG5jb25zdCBTQ1JFRU5fSEVJR0hUID0gNTBcbmNvbnN0IE1BUF9XSURUSCA9IDgwXG5jb25zdCBNQVBfSEVJR0hUID0gNDVcblxuXG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgICAnYmxhY2snOiAnIzAwMDAwMCcsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMDAwMDY0JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzMyMzI5NicsXG4gICAgJ2xpZ2h0X3dhbGwnOiAnIzgyNkUzMicsXG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzhCNDMyJ1xufVxuXG5jb25zdCBwbGF5ZXI6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCAnI0ZGRkZGRicpXG5jb25zdCBucGM6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCAnI0JCQUEwMCcpXG5cbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyXG5cbmNvbnN0IHJlbmRlckdyaWQgPSBuZXcgR3JpZDxJUmVuZGVyQ2VsbD4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxucmVuZGVyR3JpZC5zZXRFYWNoKChjZWxsOiBhbnksIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiBSZW5kZXJDZWxsLm1ha2UoeCx5LCcgJyxDT0xPUlMuYmxhY2ssQ09MT1JTLmRhcmtfZ3JvdW5kKVxufSlcblxuY29uc3QgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4gPSBuZXcgR3JpZDxUaWxlPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG50aWxlR3JpZC5zZXRFYWNoKChjZWxsOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgPT4ge1xuICAgIHJldHVybiBuZXcgVGlsZSh4LHksIHRydWUpXG59KVxuXG5jb25zdCBGT1ZfUkFESVVTID0gMTBcbmxldCBmb3ZSZWNvbXB1dGUgPSB0cnVlXG5jb25zdCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+ID0gbmV3IEdyaWQ8Rk9WQ2VsbD4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxuLy8gaWYgd2UgdHVybiBmb3Ygb24gaXQnbGwgY2hhbmdlIGl0IG92ZXIgdG8gZmFsc2VcbmZvdkdyaWQuc2V0RWFjaCgoKTogRk9WQ2VsbCA9PiB7IHJldHVybiB7XG4gICAgdmlzaWJsZTogdHJ1ZVxufX0pXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAqIEBwYXJhbSBtaW4gXG4gKiBAcGFyYW0gbWF4IFxuICovXG5jb25zdCByYW5kaW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuY29uc3QgUk9PTV9NQVhfU0laRSA9IDEwXG5jb25zdCBST09NX01JTl9TSVpFID0gMTBcbmNvbnN0IE1BWF9ST09NUyA9IDMwXG5cbi8vIEdFVCBSRUFEWSBGT1IgU09NRSBNQVAgR0VORVJBVElPTiFcbmNvbnN0IHJvb21zOiBJUmVjdFtdID0gW11cbi8vIE1hcEdlbmVyYXRvci5jcmVhdGVSb29tKHRpbGVHcmlkLCBSZWN0Lm1ha2UoMSwxLDIwLDIwKSlcbmZvcihsZXQgciA9IDA7IHIgPCBNQVhfUk9PTVM7IHIrKyl7XG4gICAgY29uc3QgdyA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICBjb25zdCBoID0gcmFuZGludChST09NX01JTl9TSVpFLCBST09NX01BWF9TSVpFKVxuICAgIGNvbnN0IHggPSByYW5kaW50KDAsIE1BUF9XSURUSCAtIHcgLSAxKVxuICAgIGNvbnN0IHkgPSByYW5kaW50KDAsIE1BUF9IRUlHSFQgIC0gaCAtIDEpXG5cbiAgICBjb25zdCBuZXdSb29tID0gUmVjdC5tYWtlKHgseSx3LGgpXG4gICAgbGV0IGludGVyc2VjdHMgPSBmYWxzZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKFJlY3QuaW50ZXJzZWN0cyhuZXdSb29tLCByb29tc1tpXSkpe1xuICAgICAgICAgICAgaW50ZXJzZWN0cyA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoIWludGVyc2VjdHMpe1xuICAgICAgICBNYXBHZW5lcmF0b3IuY3JlYXRlUm9vbSh0aWxlR3JpZCwgbmV3Um9vbSlcbiAgICAgICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIobmV3Um9vbSlcbiAgICAgICAgaWYocm9vbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIFBvaW50LnNldChwbGF5ZXIsIGNlbnRlci54LCBjZW50ZXIueSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1tyb29tcy5sZW5ndGggLTFdKVxuICAgICAgICAgICAgaWYocmFuZGludCgwLDEpID09PSAxKXtcbiAgICAgICAgICAgICAgICBNYXBHZW5lcmF0b3IuY3JlYXRlSFR1bm5lbCh0aWxlR3JpZCwgbGFzdENlbnRlci54LCBjZW50ZXIueCwgbGFzdENlbnRlci55KVxuICAgICAgICAgICAgICAgIE1hcEdlbmVyYXRvci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBjZW50ZXIueClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE1hcEdlbmVyYXRvci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBsYXN0Q2VudGVyLngpXG4gICAgICAgICAgICAgICAgTWFwR2VuZXJhdG9yLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGNlbnRlci55KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcm9vbXMucHVzaChuZXdSb29tKVxuICAgIH1cbn1cbi8vIFNFVCBOUEMgTE9DQVRJT05cbntcbiAgICBjb25zdCBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1tyb29tcy5sZW5ndGggLSAxXSlcbiAgICBQb2ludC5zZXQobnBjLCBjZW50ZXIueCwgY2VudGVyLnkpXG59XG5cbi8vXG5jb25zdCByZW5kZXJUb0dyaWQgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIGVudGl0aWVzOiBFbnRpdHlbXSwgcmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0aWxlOiBUaWxlLCBpbmRleCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJDZWxsID0gcmVuZGVyR3JpZC5nZXRJKGluZGV4KVxuICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRJKGluZGV4KVxuXG4gICAgICAgIHJlbmRlckNlbGwuZm9yZUNvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gJyAnXG4gICAgICAgIGlmKCFmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgaWYodGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfd2FsbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X3dhbGxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfZ3JvdW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBpZighcmVuZGVyR3JpZC5pbkJvdW5kc1hZKGVudGl0eS54LCBlbnRpdHkueSkpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgckNlbGw6IElSZW5kZXJDZWxsID0gcmVuZGVyR3JpZC5nZXRYWShlbnRpdHkueCwgZW50aXR5LnkpXG4gICAgICAgIHJDZWxsLmZvcmVDb2xvciA9IGVudGl0eS5jb2xvclxuICAgICAgICByQ2VsbC5jaGFyYWN0ZXIgPSBlbnRpdHkuY2hhcmFjdGVyXG4gICAgfSlcbn1cblxuLy8gY2xlYW4gdGhpcyB1cFxuY29uc3QgbW92ZXM6IGFueVtdID0gW11cbmNvbnN0IE1vdmVQcm9jZXNzb3IgPSB7XG4gICAgLy8gY3VycmVudGx5IGp1c3QgdGllZCB0byB0aGUgcGxheWVyXG4gICAgbW92ZXNcbn1cblxuUFVCU1VCLnN1YnNjcmliZSgnbW92ZScsIChtc2cpOiB2b2lkID0+e1xuICAgIE1vdmVQcm9jZXNzb3IubW92ZXMucHVzaChtc2cpXG59KSBcblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oKGltYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICByZW5kZXJlci5pbml0KGNhbnZhcywgaW1hZ2UpXG4gICAgLy8gTG9vcFxuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKClcblxuICAgICAgICAvLyBMb29rIGF0IHBsYXllciBpbnB1dFxuICAgICAgICAvLyBaIGxldHMgdXMgYmUgaW4gWk9PTSBNT0RFISEhIVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSB0aGlzIGludG8gYSBcIm1vdmVcIiB0eXBlIGFjdGlvblxuICAgICAgICAvLyB3ZSdsbCBqdXN0IGRvIHRoZSBtb3ZlIHNlY3Rpb25cbiAgICAgICAgXG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgtMSwgMCl9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDEsIDApfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAtMSl9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAxKX0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIG1vdmVzXG4gICAgICAgIC8vIGV2ZW50dWFsbHkgd2UnbGwgY29tcG9uZW50aXplIHRoaXMgYmV0dGVyXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMuZm9yRWFjaCgobXNnOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtc2cuZGVsdGFcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbXNnLmlkXG4gICAgICAgICAgICBjb25zdCBtb3ZlciA9IGVudGl0aWVzLmZpbmQoKGUpOiBib29sZWFuID0+IGUuaWQgPT0gaWQpXG4gICAgICAgICAgICBpZighbW92ZXIpe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGlsZUdyaWQuaW5Cb3VuZHNYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVyLm1vdmUobW92ZS54LCBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgICAgIGlmKG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm92UmVjb21wdXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmxlbmd0aCA9IDBcbiAgICAgICAgaWYoZm92UmVjb21wdXRlKXtcbiAgICAgICAgICAgIGNhbGN1bGF0ZUZPVihmb3ZHcmlkLCB0aWxlR3JpZCwgcGxheWVyLCBGT1ZfUkFESVVTKVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlY29tcHV0ZSBmb3YgaGVyZVxuXG4gICAgICAgIC8vIHdlIG1pZ2h0IG1vdmUgYWxsIG9mIHRoaXMgaW50byBzb21lIG9mZnNjcmVlbiBcbiAgICAgICAgcmVuZGVyVG9HcmlkKHRpbGVHcmlkLCBmb3ZHcmlkLCBlbnRpdGllcywgcmVuZGVyR3JpZClcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHJlbmRlckdyaWQpXG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgNTAwKVxuICAgICAgICBrbS5yZXNldFN0ZXBzKClcbiAgICAgICAgbW0ucmVzZXQoKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblxufSkuY2F0Y2goKGVycjogYW55KTogdm9pZCA9PiBjb25zb2xlLmxvZyhlcnIpKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZSIsImZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IGFueXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk6IGFueSA9PiByZXNvbHZlKGltZykpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpOiBhbnkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSAke3VybH1gKSkpXG4gICAgICAgIGltZy5zcmMgPSB1cmxcbiAgICB9KVxufVxuXG5leHBvcnQge2xvYWRJbWFnZX0iLCJpbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgZHJhd1NlY3Rpb24sIGNvZGUgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYSByZW5kZXIgZ3JpZCBhbmQgY29udmVydGluZyBpdCB0byBpbWFnZXNcbiAqIG9uIHRoZSBjYW52YXNcbiAqL1xuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCB1bmRlZmluZWQ7XG4gICAgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCk6IENhbnZhc1JlbmRlcmVye1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICAvLyB3ZSBhcmUganVzdCBmb3JjaW5nIHRoaXMgZm9yIG5vdywgd2Ugd2lsbCBjaGVjayBpZiBpdCdzIG51bGxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGlmKGN0eCA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgY29udGV4dCBmcm9tIGNhbnZhcycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8vIGV2ZW50dWFsbHkgd2UgbmVlZCB0byBwYXNzIGluIHRoZSBkaW1lbnNpb25zIHdlIGFyZSByZW5kZXJpbmcgdG8gYXMgd2VsbFxuICAgIC8vIGZvciBub3cgaXQncyBmaW5lXG4gICAgcmVuZGVyKHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgcmVuZGVyR3JpZC5mb3JFYWNoKChcbiAgICAgICAgICAgIGNlbGw6IElSZW5kZXJDZWxsLCBcbiAgICAgICAgICAgIGluZGV4OiBudW1iZXIsIFxuICAgICAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyY1JlY3Q6IElSZWN0ID0gQ09ERV9UT19SRUNUX0hBU0hbY29kZShjZWxsLmNoYXJhY3RlcildXG4gICAgICAgICAgICBkcmF3U2VjdGlvbihjdHgsIHRoaXMuc3ByaXRlc2hlZXQsIHNyY1JlY3QsIFJlY3QubWFrZSh4ICogMTAsIHkgKiAxMCwgMTAsIDEwKSwgY2VsbC5mb3JlQ29sb3IsIGNlbGwuYmFja0NvbG9yIClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSIsIi8qKlxuICogQSBnZW5lcmljIG9iamVjdCB0byByZXByZXNlbnQgZXZlcnl0aGluZyB0aGF0IGlzIG5vdCB0aGUgbWFwIGl0c2VsZlxuICogRm9yIHRoYXQsIHNlZSB0aGUgVGlsZSBjbGFzc1xuICovXG5jbGFzcyBFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHg6IG51bWJlcix5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBjb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGFuIGVudGl0eSwgY3VycmVudGx5IGRvZXNuJ3QgY2hlY2sgaWYgaXQgY2FuIG9yIG5vdCwganVzdCBkb2VzXG4gICAgICogQHBhcmFtIGR4IEFtb3VudCB0byBtb3ZlIGluIHRoZSB4IGRpcmVjdGlvbiAobGVmdCBpcyBuZWdhdGl2ZSwgcmlnaHQgaXMgcG9zaXRpdmUpXG4gICAgICogQHBhcmFtIGR5IEFtb3VudCB0byBtb3ZlIGluIHRoZSB5IGRpcmVjdGlvbiAodXAgaXMgbmVnYXRpdmUsIGRvd24gaXMgcG9zaXRpdmUpXG4gICAgICovXG4gICAgbW92ZShkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZHtcbiAgICAgICAgdGhpcy54ICs9IGR4XG4gICAgICAgIHRoaXMueSArPSBkeVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRW50aXR5IH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElQb2ludCwgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuaW50ZXJmYWNlIEZPVkNlbGwgIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFNoYWRvd1JhbmdlIHtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5jb25zdCBpc0JldHdlZW5JbmNsdXNpdmUgPSAoYTogbnVtYmVyLGI6IG51bWJlcix0OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBpZihiIDwgYSl7XG4gICAgICAgIHJldHVybiBiIDw9IHQgJiYgdCA8PSBhXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPD0gdCAmJiB0IDw9IGJcbiAgICB9XG59XG5cbmNvbnN0IGNhbGN1bGF0ZU9jdGFudCA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyLFxuICAgIGhvcml6b250YWxOb3RWZXJ0aWNhbDogYm9vbGVhbiwgeERpcmVjdGlvbjogbnVtYmVyLCB5RGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBcbiAgICAvLyBPdXIgc2hhZG93cyB3ZSB3aWxsIGNhc3RcbiAgICBjb25zdCBzaGFkb3dSYW5nZXM6IFNoYWRvd1JhbmdlW10gPSBbXVxuICAgIC8vIG91ciBzdGFydGluZyBsb2NhdGlvbiBpcyBhbHdheXMgdmlzaWJsZVxuICAgIGZvdkdyaWQuZ2V0UChzdGFydFBvaW50KS52aXNpYmxlID0gdHJ1ZVxuICAgIGZvcihsZXQgcm93ID0gMTsgcm93IDwgbWF4RGlzdGFuY2U7IHJvdysrKXtcbiAgICAgICAgY29uc3Qgcm93U2l6ZSA9IHJvdyArIDFcbiAgICAgICAgZm9yKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCByb3dTaXplOyBjb2x1bW4rKyl7XG4gICAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIG9jdGFudCwgdGhlIHRyYXZlbGxlciB3aWxsIG1vdmUgZGlmZmVyZW50bHlcbiAgICAgICAgICAgIGNvbnN0IHRyYXZlbGxlciA9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICAgICAgICAgIHRyYXZlbGxlci54ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHhEaXJlY3Rpb24gKiBjb2x1bW4gOiB4RGlyZWN0aW9uICogcm93XG4gICAgICAgICAgICB0cmF2ZWxsZXIueSArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB5RGlyZWN0aW9uICogcm93IDogeURpcmVjdGlvbiAqIGNvbHVtblxuXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgb3V0IG9mIGJvdW5kcywgc2tpcFxuICAgICAgICAgICAgaWYoIXRpbGVHcmlkLmluQm91bmRzWFkodHJhdmVsbGVyLngsIHRyYXZlbGxlci55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFAodHJhdmVsbGVyKVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbCA9IGZvdkdyaWQuZ2V0UCh0cmF2ZWxsZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29sdW1uL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IChjb2x1bW4gKyAxKS9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBtaWRkbGUgPSAoc3RhcnQgKyBlbmQpIC8gMlxuXG4gICAgICAgICAgICAvLyB0ZXN0IGZvciB2aXNpYmxpdHlcbiAgICAgICAgICAgIGxldCB2aXNpYmlsaXR5ID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZWRnZXMgYXJlIGNsZWFyIG9yIG5vdFxuICAgICAgICAgICAgbGV0IHN0YXJ0Q2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgbWlkZGxlQ2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgZW5kQ2xlYXIgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYnVpbHQgc29tZSBzaGFkb3cgcmFuZ2VzXG4gICAgICAgICAgICBpZihzaGFkb3dSYW5nZXMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgYW55IHNoYWRvd3MgY3Jvc3Mgb3VyIHRocmVlIHBvaW50c1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5mb3JFYWNoKCAoc3I6IFNoYWRvd1JhbmdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q2xlYXIgPSBzdGFydENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZUNsZWFyID0gbWlkZGxlQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBtaWRkbGUpXG4gICAgICAgICAgICAgICAgICAgIGVuZENsZWFyID0gZW5kQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBlbmQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB2aXNpYmlsaXR5IGJhc2VkIG9mZiBvZiBvdXIgc2FtcGxpbmdcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gbWlkZGxlQ2xlYXIgJiYgKHN0YXJ0Q2xlYXIgfHwgZW5kQ2xlYXIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdlIGJsb2NrIHNpZ2h0LCBjYWxjdWxhdGUgb3VyIHNoYWRvdyBlbmRzXG4gICAgICAgICAgICBpZih0aWxlLmJsb2NrU2lnaHQpe1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5wdXNoKHtzdGFydCwgZW5kfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm92Q2VsbC52aXNpYmxlID0gdmlzaWJpbGl0eVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjYWxjdWxhdGVGT1YgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIC8vIGJlIGRlZmF1bHQgd2UgYXJlIGdvaW5nIHRvIHNoYWRvd0Nhc3RcbiAgICAvLyBieSBkZWZhdWx0IGV2ZXJ5dGhpbmcgaXMgbm90IHZpc2libGVcbiAgICBmb3ZHcmlkLnNldEVhY2goKCk6IEZPVkNlbGwgPT4ge3JldHVybiB7IHZpc2libGU6IGZhbHNlfSB9KVxuICAgIC8vIE5OV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAtMSlcbiAgICAvLyBXTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIC0xKVxuICAgIC8vIFdTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgMSlcbiAgICAvLyBTU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgMSlcbiAgICAvLyBTU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAxKVxuICAgIC8vIEVTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAxKVxuICAgIC8vIEVORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAtMSlcbiAgICAvLyBOTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAtMSlcbn1cblxuZXhwb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsfSIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgU2V0RWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBhbnk7XG59XG5cbmludGVyZmFjZSBGb3JFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG59XG5cbi8vIFRPRE86IGdpdmUgZ3JpZHMgdGhlaXIgb3duIHggYW5kIHlzLCB0aGF0IHdheSB0aGV5IGNhbiBpbXBsZW1lbnQgYWxsIHRoZSBwb2ludCBhbmQgcmVjdCBzdHVmZlxuLyoqXG4gKiBHcmlkIHRvIHJlcHJlc2VudCAyZCBjb2xsZWN0aW9ucywgcGxlYXNlIGRvbid0IHJlc2l6ZSBpdCBhZnRlciBjcmVhdGluZyBpdFxuICovXG5jbGFzcyBHcmlkPFQ+IGltcGxlbWVudHMgSVJlY3Qge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgY2VsbHM6IFRbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCl7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgdXNlZCBmb3IgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGdyaWQsIG92ZXJ3cml0ZXMgcHJldmlvdXMgZW50cmllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBlbnRyeSwgZG9uJ3QgdXNlIHRoaXMgdW5sZXNzIGVudHJpZXMgYXJlIGluZGVwZW5kZW50IGZyb20gZWFjaCBvdGhlclxuICAgICAqIEBwYXJhbSBmbiB0aGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjZWxsIGl0c2VsZiBhcyB0aGUgZmlyc3QgcHJvcGVydHkgYW5kIFxuICAgICAqL1xuICAgIHNldEVhY2goZm46IFNldEVhY2hGbjxUPik6IEdyaWQ8VD57XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgeCA9IGkgJSB0aGlzLndpZHRoXG4gICAgICAgICAgICB5ID0gKGkgLSB4KS90aGlzLndpZHRoXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBzb21ldGhpbmcgZm9yIGVhY2ggbWVtYmVyIG9mIGEgY2VsbCwgZ29pbmcgcm93IGJ5IHJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZm4gR2V0IHBhc3NlZCB0aGUgY2VsbCwgaW5kZXgsIHggYW5kIHlcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuOiBGb3JFYWNoRm48VD4pOiB2b2lke1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB4IHggY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBwYXJhbSB5IHkgY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqL1xuICAgIGdldFhZKHg6IG51bWJlciwgeTogbnVtYmVyKTogVCAge1xuICAgICAgICBpZighdGhpcy5pbkJvdW5kc1hZKHgseSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib3VuZGFyeSBhY2Nlc3MgaXNzdWUnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3ggKyB5ICogdGhpcy53aWR0aF1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBnZXRYWS4gVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gcG9pbnQgY29udGFpbnMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbGwgeW91IHdhbnQgdG8gZ2V0XG4gICAgICovXG4gICAgZ2V0UChwb2ludDogSVBvaW50KTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFhZKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuXG4gICAgaW5Cb3VuZHNYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW57XG4gICAgICAgIGlmKHggPCAwIHx8IHggPj0gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjZWxsIGJhc2VkIG9mZiBvZiBhbiBpbmRleCwgdXN1YWxseSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBmb3JFYWNoIGxvb3Agb2YgYSBzaW1pbGFybHkgc2l6ZWQgZ3JpZFxuICAgICAqIE5PVEUgYmUgY2FyZWZ1bCB0aGF0IHRoZSBvdGhlciBncmlkIGhhcyB0aGUgc2FtZSBkaW1lbnNpb24gdW5sZXNzIHlvdSByZWFsbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZ1xuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgY2VsbHMsIG1vc3RseSB0byBiZSB1c2VkIHdpdGggZ3JpZHMgdGhhdCBhcmUgd29ya2luZyBhbG9uZ3NpZGUgYSBkaWZmZXJlbnQgZm9yRWFjaCBsb29wXG4gICAgICovXG4gICAgZ2V0SShpbmRleDogbnVtYmVyKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW2luZGV4XVxuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JpZCB9IiwiY2xhc3MgSURNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGxhc3RJZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGFzdElkID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5leHQgaWRcbiAgICAgKi9cbiAgICBuZXh0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZCsrXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IElEX01BTkFHRVJcbiAqL1xuY29uc3QgSURfTUFOQUdFUiA9IG5ldyBJRE1hbmFnZXIoKVxuZXhwb3J0IHtJRF9NQU5BR0VSLCBJRE1hbmFnZXJ9IiwiaW50ZXJmYWNlIEtleVN0YXRlIHsgXG4gICAga2V5OiBzdHJpbmc7XG4gICAgaXNEb3duOiBib29sZWFuO1xuICAgIGhhbGZTdGVwczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY29uc3QgbWFrZUtleVN0YXRlID0gKGtleTogc3RyaW5nLCBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaGFsZlN0ZXBzOiBudW1iZXIgPSAwKTogS2V5U3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBoYWxmU3RlcHNcbiAgICB9XG59XG5cbmNsYXNzIEtleWJvYXJkTW9uaXRvciB7XG4gICAga2V5SGFzaDogSGFzaDxLZXlTdGF0ZT47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlIYXNoID0ge31cbiAgICB9XG4gICAgLy8gQXR0YWNoIHRvIHRoZSBET00sIHVzdWFsbHkgdGhlIGRvY3VtZW50IGFzIGEgd2hvbGUsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgbW9yZSBzcGVjaWZpYyBpZiB5b3Ugd2FudFxuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBLZXlib2FyZE1vbml0b3Ige1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXksIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZigha2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoa2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0S2V5U3RhdGUoa2V5OiBzdHJpbmcpOiBLZXlTdGF0ZXtcbiAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlIYXNoW2tleV1cbiAgICB9XG4gICAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5SGFzaClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleXNbaV1dLmhhbGZTdGVwcyA9IDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBzdGF0aWMgbWV0aG9kcyBmb3IgaGVscGluZyB0byBtYW5pcHVsYXRlIG1hcHNcbiAqL1xuY2xhc3MgTWFwR2VuZXJhdG9yIHtcbiAgICAvLyBUT0RPOiBNYXliZSBjb21lIHVwIHdpdGggYSBiZXR0ZXIgbmFtZVxuICAgIC8qKlxuICAgICAqIFBsYWNlIGEgcm9vbSBpbnNpZGUgYSBncm91cCBvZiB0aWxlc1xuICAgICAqIEBwYXJhbSB0aWxlR3JpZCB0aGUgZ3JpZCBvZiB0aWxlcyB0byBhZmZlY3RcbiAgICAgKiBAcGFyYW0gcm9vbSB0aGUgcm9vbSBzZWN0aW9uIHRoYXQgd2Ugd2lsbCBvcGVuIHVwXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVJvb20odGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb206IElSZWN0KTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IEJvdW5kcyBjaGVjayBvciBzb21ldGhpbmcsIHJpZ2h0IG5vdyB0ZXJyaWJsZSB0aGluZ3MgY2FuIGhhcHBlblxuICAgICAgICBjb25zdCB7IGxlZnQscmlnaHQsdG9wLGJvdHRvbX0gPSBSZWN0LnNpZGVzKHJvb20pXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc3RvcCBvbmUgZWFybHkgYmVjYXVzZSBvZiBob3cgd2Ugd29yayB3aXRoIGEgZ3JpZFxuICAgICAgICAvLyB3ZSB3aWxsIGFsc28gaW5jbHVkZSBhIG1hcmdpbiBvZiBvbmUgb24gYWxsIHNpZGV4XG4gICAgICAgIGZvcihsZXQgeSA9IHRvcCArIDE7IHkgPCBib3R0b20gLSAxOyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gbGVmdCArIDE7IHggPCByaWdodCAtIDE7IHgrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgsIHkpXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSFR1bm5lbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeDE6IG51bWJlciwgeDI6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHN3YXAgdGhlbSBhcyBuZWNlc3NhcnlcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oeDEsIHgyKVxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh4MSwgeDIpXG4gICAgICAgIGZvcihsZXQgeCA9IG1pbjsgeCA8PSBtYXg7IHgrKyl7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVWVHVubmVsKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCB5MTogbnVtYmVyLCB5MjogbnVtYmVyLCB4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oeTEsIHkyKVxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh5MSwgeTIpXG4gICAgICAgIGZvcihsZXQgeSA9IG1pbjsgeSA8PSBtYXg7IHkrKyl7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgeyBNYXBHZW5lcmF0b3IgfSIsIi8vIExldCdzIGdvIGFoZWFkIGFuZCBjcmVhdGUgdGhlIFBvaW50IGludGVyZmFjZSBoZXJlLCB3ZSdsbCBleHBvcnQgaXQgZm9yIHVzZSBsYXRlciBpbiB0aGUgcHJvamVjdFxuXG5pbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG4vKipcbiAqIENsYXNzIHRvIGhlbHAgbW9uaXRvciB0aGluZ3MgdGhhdCBoYXZlIGhhcHBlbmVkIHRvIHRoZSBtb3VzZSBzaW5jZSBsYXN0IHRpbWUgdGhhdCB3ZSBsb29rZWRcbiAqL1xuXG5pbnRlcmZhY2UgSGFsZkNsaWNrIHtcbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIGlzRG93bjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTW91c2VNb25pdG9yIHtcbiAgICAvKipcbiAgICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlIG92ZXIgdGhlIGF0dGFjaGVkIGVsZW1udFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IHRpbWUgd2UgbG9va2VkXG4gICAgICovXG4gICAgaGFzTW92ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IGluc2lkZSB0aGUgY29udGFpbmVyIFxuICAgICAqL1xuICAgIGluQ29udGFpbmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogaXMgdGhlIG1vdXNlIGJ1dHRvbiBkb3duIChjdXJyZW50bHkgb25seSB0cmFja3MgbGVmdClcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZ1bGwgY2xpY2sgaXMgdXAgYW5kIGRvd24sIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVwcyBhbmQgZG93bnMsIHVzZWZ1bCBmb3IgZHJhZ3Mgb3Igb3RoZXIgdGhpbmdzIHRoYXQgbWlnaHQgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgKi9cbiAgICBoYWxmQ2xpY2tzOiBIYWxmQ2xpY2tbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmhhbGZDbGlja3MgPSBbXVxuICAgICAgICAvLyBUT0RPOiBBZGQgY2xpY2sgdHJhY2tpbmcsIGRlcGVuZHMgb24gaG93IHF1aWNrbHkgd2UgYXJlIHBvbGxpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50IHlvdSB3YW50IHRvIG1vbml0b3IgbW91c2UgcmVsYXRlZCBldmVudHMgdG9cbiAgICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgcGFydGljdWxhciBtb3VzZSBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBNb3VzZU1vbml0b3Ige1xuICAgICAgICAvLyBUT0RPOiBXZSdsbCByZWdpc3RlciBjbGljayBoaXN0b3J5IGluIHRoZSBmdXR1cmUsIGZvciBub3cgd2UgYXJlIGp1c3QgZG9pbmcgbW91c2Ugb3ZlciBhdCBwcmVzZW50XG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBQb2ludC5zZXQodGhpcy5wb3NpdGlvbiwgZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBlbnRlcnMgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgbW92ZXMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgZXhpdHMgdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcmFpc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogZmFsc2UgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHRoYXQgd2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBldmVudHMgc2luY2Ugb3VyIGxhc3QgcG9sbCBvZiBzdGF0ZSBhbmQgaXQgY2FuIGJlIHJlc2V0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZHtcbiAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBoYXZlbid0IG1vdmVkIGJlZm9yZVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBjbGlja3NcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLmxlbmd0aCA9IDBcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlTW9uaXRvciB9IiwibGV0IF9pZCA9IDBcbmNvbnN0IG5leHRJZCA9ICgpOiBudW1iZXIgPT4gX2lkKytcblxuLy8gVE9ETzogTWFrZSBtZXNzYWdlcyBlbnVtcz9cblxuLy8gVE9ETzogTWFrZSBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uXG50eXBlIFN1YnNjcmliZXJGdW5jdGlvbiA9IChtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpID0+IHZvaWRcblxuaW50ZXJmYWNlIFN1YnNjcmliZXJOb2RlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb247XG4gICAgcHJpb3JpdHk6IG51bWJlcjtcbiAgICBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG59XG5cblxuXG5jb25zdCBtYWtlU3ViTm9kZSA9IChzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCwgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsID0gbnVsbCk6IFN1YnNjcmliZXJOb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmV4dElkKCksXG4gICAgICAgIHN1YkZuLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbmV4dFxuICAgIH1cbn1cblxuLy8gVE9ETzogPz8gTWFrZSBpdCBzbyBhIHN1YnNjcmliZXIgbGlzdCBjb3VsZCBiZSBkZWFmZW5lZC9saXN0ZW4/XG5cbi8qKlxuICogQSBncm91cCBvZiBmdW5jdGlvbnMsIHNvcnRlZCBieSBwcmlvcml0eSwgd2hpY2ggd2lsbCBiZSBjYWxsZWQgc2VxdWVudGlhbGx5IHdoZW4gdGhlIGxpc3QgaXMgbm90aWZpZWQgb2YgYSBuZXcgbWVzc2FnZVxuICovXG5jbGFzcyBQcmlvcml0eVN1YnNjcmliZXJMaXN0IHtcbiAgICByb290OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgdGFpbDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbFxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBtZXNzYWdlcyB0aGF0IGdldCBzZW50IHRvIHRoaXMgbGlzdCB2aWEgdGhlIG5vdGlmeSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbWVzc2FnZSBvYmplY3Qgd2hlbmV2ZXIgdGhpcyBzdWJzY3JpYmVyIGxpc3QgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LCB0aGUgZWFybGllciBpdCB3aWxsIHJ1biwgaWYgaXQgaGFzIHRoZSBzYW1lIHByaW9yaXR5IHRoZSBvbmUgdGhhdCB3YXMgYWRkZWQgZmlyc3Qgd2lsbCBmaXJlIGZpcnN0XG4gICAgICovXG4gICAgc3Vic2NyaWJlKGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVye1xuICAgICAgICAvLyBDYXNlICMxIEVtcHR5IFN1YnNjcmliZXIgTGlzdFxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHkpXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnJvb3RcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgfSBcbiAgICAgICAgLy8gQ2FzZSAjMiBXZSBhbHJlYWR5IGhhdmUgc29tZSBzdWJzY3JpYmVyc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3QgLy8gd2Uga25vdyBpdCBzaG91bGQgYmUgYSBTdWJzY3JpYmVyIE5vZGUgYW5kIG5vdCBudWxsLCBiZWNhdXNlIHdlIGFyZSBoZXJlXG5cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSwgbmV3IHJvb3RcbiAgICAgICAgICAgIGlmKHByaW9yaXR5IDwgdHJhdmVsbGVyIS5wcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0aGlzLnJvb3QpXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vcm1hbCBjYXNlIHdlIGhhdmUgb3RoZXIgdGhpbmdzIHRvIHdvcnJ5IGFib3V0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgJiYgdHJhdmVsbGVyLm5leHQgJiYgdHJhdmVsbGVyLm5leHQucHJpb3JpdHkgPj0gcHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGVpdGhlciBmb3VuZCBhIG5vZGUgd2l0aCBsb3dlciBwcmlvcml0eSB0aGFuIHVzIG9yIHdlIGhhdmUgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgIHRyYXZlbGxlciEubmV4dCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdHJhdmVsbGVyIS5uZXh0KVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdHJhdmVsbGVycyB3YXMgdGhlIG9sZCB0YWlsXG4gICAgICAgICAgICAgICAgaWYodHJhdmVsbGVyID09PSB0aGlzLnRhaWwpe1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5leHQgb25lIGlzIHRoZSBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSB0cmF2ZWxsZXIhLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxsZXIhLm5leHQuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtb3N0IGltcG9yYW50IGluZm9ybWF0aW9uIGZvciB0aGUgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdG9waWMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHB1YnN1YiB0byByZW1pbmQgdGhlIHN1YnNjcmliZXIgb2YgdGhlIHNwZWNpZmljIHRvcGljIG9yIHN1YnRvcGljXG4gICAgICovXG4gICAgbm90aWZ5KG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290XG4gICAgICAgIHdoaWxlKHRyYXZlbGxlciAhPSBudWxsKXtcbiAgICAgICAgICAgIHRyYXZlbGxlci5zdWJGbihtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IiwiaW1wb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0gZnJvbSAnLi9wcmlvcml0eVN1YnNjcmliZXJMaXN0J1xuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBQdWJzdWIgaXMgYSB0b3BpYy1iYXNlZCBvYnNlcnZlciBwYXR0ZXJuIGltcGxlbWVudGF0aW9uIGRlc2lnbmVkIHRvIGF2b2lkIHRpZ2h0IGNvdXBsaW5nIG9mIGNvbXBvbmVudHNcbiAqL1xuY2xhc3MgUHViU3ViIHtcbiAgICB0b3BpY3M6IEhhc2g8UHJpb3JpdHlTdWJzY3JpYmVyTGlzdD47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50b3BpY3MgPSB7fVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhIG1lc3NhZ2UgdG8gYWxsIHN1YnNjcmliZXJzIHRvIGEgdG9waWNcbiAgICAgKiBAcGFyYW0gdG9waWMgVG9waWMgdG8gdXNlLCBpZiBub2JvZHkgaXMgc3Vic2NyaWJlZCB0byBpdCwgbm90aGluZyBoYXBwZW5zXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGFjdHVhbCBtZXNzYWdlIHRvIHNlbmQsIHRoaXMgY291bGQgYmUgYW55dGhpbmcsIGJ1dCBpdCdzIGEgc2luZ2xlIHRoaW5nXG4gICAgICovXG4gICAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXS5ub3RpZnkobWVzc2FnZSwgdG9waWMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgc3BlY2lmaWMgdG9waWMgd2l0aCBhIGdpdmVuIHByaW9yaXR5LCByZXR1cm5zIGFuIGlkIHRoYXQgeW91J2xsIG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gdG9waWMgdGhlIHNwZWNpZmljIHRvcGljIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSBmbiB0aGUgZnVuY3Rpb24gdG8gcmVjaWV2ZSB0aGUgc3BlY2lmaWMgbWVzc2FnZSBhbmQgdG9waWMgYmVpbmcgYnJvYWRjYXN0ZWQgdG9cbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgdGhlIHByaW9yaXR5IG9mIHRoZSBmdW5jdGlvbiB0byBzdWJzY3JpYmUgdG8sIGhpZ2hlciBudW1iZXJzIHJ1biBmaXJzdCwgdGhlIGRlZmF1bHQgaXMgemVybywgbmVnYXRpdmUgbnVtYmVycyBhcmUgYWxsb3dlZFxuICAgICAqL1xuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nLCBmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIGlmKCF0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdID0gbmV3IFByaW9yaXR5U3Vic2NyaWJlckxpc3QoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvcGljc1t0b3BpY10uc3Vic2NyaWJlKGZuLCBwcmlvcml0eSlcbiAgICB9XG59XG4vLyBPVVIgVU5JVkVSU0FMIERFRkFVTFQgUFVCU1VCXG5jb25zdCBQVUJTVUIgPSBuZXcgUHViU3ViKClcbmV4cG9ydCB7UFVCU1VCLCBQdWJTdWJ9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFJlbmRlciBDZWxsXG4gKi9cbmludGVyZmFjZSBJUmVuZGVyQ2VsbCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZzsgLy8gdGhpcyBzaG91bGQgb25seSBiZSBzdHJpbmcgb2YgbGVuZ3RoIDFcbiAgICBmb3JlQ29sb3I6IHN0cmluZztcbiAgICBiYWNrQ29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksIGNoYXJhY3RlciwgZm9yZUNvbG9yLCBiYWNrQ29sb3JcbiAgICB9XG59XG5cbmNvbnN0IFJlbmRlckNlbGwgPSB7XG4gICAgbWFrZVxufVxuXG5leHBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbH0iLCJpbXBvcnQge0lSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIEhhc2hTdHI8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5pbnRlcmZhY2UgSGFzaE51bTxUPiB7XG4gICAgW2tleTogbnVtYmVyXTogVDtcbn1cblxuY29uc3QgY29kZSA9IChjaGFyOiBzdHJpbmcpOiBudW1iZXIgPT4gY2hhci5jaGFyQ29kZUF0KDApXG5jb25zdCBDSEFSQUNURVJfSEVMUEVSOiBIYXNoU3RyPHN0cmluZz4gPSB7XG4gICAgVkVSVElDQUxfTElORTogJ+KUgicsXG4gICAgSE9SSVpPTlRBTF9MSU5FOiAn4pSAJyxcbiAgICBDUk9TU19MSU5FUzogJ+KUvCcsXG4gICAgVF9MRUZUOiAn4pSkJyxcbiAgICBUX1VQOiAn4pS0JyxcbiAgICBUX1JJR0hUOiAn4pScJyxcbiAgICBUX0RPV046ICfilKwnLFxuICAgIFRPUF9SSUdIVDogJ+KUlCcsXG4gICAgQk9UVE9NX1JJR0hUOiAn4pSMJyxcbiAgICBCT1RUT0xfTEVGVDogJ+KUkCcsXG4gICAgVE9QX0xFRlQ6ICfilJgnXG59XG5cbmNvbnN0IFRJTEVfV0lEVEggPSAxMCwgVElMRV9IRUlHSFQgPSAxMFxuXG5jb25zdCBDT0RFX1RPX1JFQ1RfSEFTSDogSGFzaE51bTxJUmVjdD4gPSB7fVxuY29uc3Qgc3BhY2VDb2RlID0gICBjb2RlKCcgJylcbmNvbnN0IGF0Q29kZSA9ICAgICAgY29kZSgnQCcpXG5jb25zdCBhQ29kZSA9ICAgICAgIGNvZGUoJ2EnKVxuY29uc3QgekNvZGUgPSAgICAgICBjb2RlKCd6JylcbmNvbnN0IEFDb2RlID0gICAgICAgY29kZSgnQScpXG5jb25zdCBaQ29kZSA9ICAgICAgIGNvZGUoJ1onKVxuXG5cbmNvbnN0IGN0cmhIZWxwZXIgPSAoY29kZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2NvZGVdID0gUmVjdC5tYWtlKHgseSwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5cbi8vIFdlIHdpbGwgZmlsbCBpbiB0aGUgb3RoZXIgY2hhcmFjdGVycyBhcyBuZWNlc3NhcnlcbkNPREVfVE9fUkVDVF9IQVNIW3NwYWNlQ29kZV0gPSBSZWN0Lm1ha2UoMCwgMCwgMTAsIDEwKVxuQ09ERV9UT19SRUNUX0hBU0hbYXRDb2RlXSA9IFJlY3QubWFrZSgwLCAxMCwgMTAsIDEwKVxuZm9yKGxldCBpID0gQUNvZGU7IGkgPD0gWkNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBBQ29kZSkgKiAxMCwgMzAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuZm9yKGxldCBpID0gYUNvZGU7IGkgPD0gekNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBhQ29kZSkgKiAxMCwgNDAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuLy8gZm9yIGJyZXZpdGllcyBzYWtlXG5jb25zdCBDSCA9IENIQVJBQ1RFUl9IRUxQRVJcbmN0cmhIZWxwZXIoY29kZShDSC5WRVJUSUNBTF9MSU5FKSwgMTQwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkhPUklaT05UQUxfTElORSksIDE1MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5DUk9TU19MSU5FUyksIDE2MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0xFRlQpLCAxNzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9VUCksIDE4MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1JJR0hUKSwgMTkwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfRE9XTiksIDIwMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfUklHSFQpLCAyMTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9NX1JJR0hUKSwgMjIwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTF9MRUZUKSwgMjMwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9MRUZUKSwgMjQwLDEwKVxuXG5cbmZ1bmN0aW9uIGRyYXdTZWN0aW9uKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0aWxlc2hlZXQ6IGFueSwgc3JjUmVjdDogSVJlY3QsIGRlc3RSZWN0OiBJUmVjdCwgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogdm9pZHtcbiAgICBjdHguY2xlYXJSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4LmRyYXdJbWFnZSh0aWxlc2hlZXQsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCwgZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcidcbiAgICBjdHguZmlsbFN0eWxlPWZvcmVDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgY3R4LmZpbGxTdHlsZT1iYWNrQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG59XG5cbmV4cG9ydCAgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgQ0hBUkFDVEVSX0hFTFBFUiwgY29kZSwgZHJhd1NlY3Rpb24gfSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciB3b3JraW5nIHdpdGggYSAyRCBQb2ludFxuICovXG5pbnRlcmZhY2UgSVBvaW50IHsgIFxuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IFBvaW50XG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4ge3gseX1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHBvaW50IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhZGRpbmcgYm90aCBvZiB0aGVtIHRvZ2V0aGVyLCBpZiB5b3Ugd2FudCB0byBhZGQgYSBwb2ludCBUTyBhbm90aGVyIHBvaW50LCB1c2UgYWRkVG9cbiAqIEBwYXJhbSBhIEZpcnN0IFBvaW50LCB1bm1vZGlmaWVkXG4gKiBAcGFyYW0gYiBTZWNvbmQgUG9pbnQsIHVubW9kaWZpZWRcbiAqL1xuY29uc3QgYWRkID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShhLnggKyBiLngsIGEueSArIGIueSlcbn1cblxuLyoqXG4gKiBBZGQgdGhlIHZhbHVlIG9mIFBvaW50IGEgdG8gUG9pbnQgYlxuICogQHBhcmFtIGEgVGhlIHBvaW50IHRoYXQgY2hhbmdlcywgd2lsbCBoYXZlIGIgYWRkZWQgdG8gaXRcbiAqIEBwYXJhbSBiIFRoZSBwb2ludCB3aG9zZSB2YWx1ZSBpcyBhZGRlZCB0byB0aGUgb3RoZXIsIGl0IGlzIHVubW9kaWZpZWQgaXRzZWxmXG4gKi9cbmNvbnN0IGFkZFRvID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICBhLnggKz0gYi54XG4gICAgYS55ICs9IGIueVxuICAgIHJldHVybiBhXG59XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZXMgb2YgYSBwb2ludCB3aXRoIHggYW5kIHkgdmFsdWVzLCByZXR1cm5zIHRoZSBub3cgbW9kaWZpZWQgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBwb2ludCB0byBiZSBtb2RpZmllZFxuICogQHBhcmFtIHggbmV3IHggdmFsdWVcbiAqIEBwYXJhbSB5IG5ldyB5IHZhbHVlXG4gKi9cbmNvbnN0IHNldCA9IChwb2ludDogSVBvaW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcG9pbnQueCA9IHhcbiAgICBwb2ludC55ID0geVxuICAgIHJldHVybiBwb2ludFxufVxuXG4vKipcbiAqIENvcHkgYSBwb2ludFxuICogQHBhcmFtIHBvaW50IFBvaW50IHRoYXQgd2lsbCBiZSBjb3BpZWRcbiAqL1xuY29uc3QgY29weSA9IChwb2ludDogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShwb2ludC54LCBwb2ludC55KVxufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgbWVhbnQgdG8gd29yayB3aXRoIHRoaW5ncyB0aGF0IGhhdmUgdGhlIElQb2ludCBpbnRlcmZhY2VcbiAqL1xuY29uc3QgUG9pbnQgPSB7XG4gICAgbWFrZSxcbiAgICBhZGQsXG4gICAgYWRkVG8sXG4gICAgc2V0LFxuICAgIGNvcHlcbn1cblxuZXhwb3J0IHtJUG9pbnQsIFBvaW50fSIsImltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9wb2ludCdcbmludGVyZmFjZSBJUmVjdCBleHRlbmRzIElQb2ludCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0U2lkZXMge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY3RhbmdsZVxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqIEBwYXJhbSB3aWR0aCBcbiAqIEBwYXJhbSBoZWlnaHQgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSB1bml0IHZhbHVlIG9mIHRoZSBzaWRlcyBvZiB0aGUgcmVjdGFuZ2xlLCBsZWZ0IGFuZCByaWdodCByZXR1cm4geCBjb29yZGluYXRlcywgdG9wIGFuZCBib3R0b20gaW5jbHVkZSB5IGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gcmVjdCByZWN0YW5nbGUgdXNlZFxuICovXG5jb25zdCBzaWRlcyA9IChyZWN0OiBJUmVjdCk6IElSZWN0U2lkZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIHBvaW50OiBOT1RFOiBUaGlzIGZpbmRzIHRoZSBJTlRFR0VSIGNlbnRlciwgY29vcmRpbmF0ZXMgYXJlIHRydW5jYXRlZFxuICogQHBhcmFtIHJlY3QgVGhlIHJlY3RhbmdsZSB3ZSBhcmUgZmluZGluZyB0aGUgY2VudGVyIG9mXG4gKi9cbmNvbnN0IGNlbnRlciA9IChyZWN0OiBJUmVjdCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIFBvaW50Lm1ha2UoTWF0aC5mbG9vcihyZWN0LnggKyByZWN0LndpZHRoLzIpLCBNYXRoLmZsb29yKHJlY3QueSArIHJlY3QuaGVpZ2h0LzIpKVxufVxuXG4vLyBPUFRJTUlaRTogRG9uJ3QgY2FsbCBzaWRlcywganVzdCB1c2UgdGhlIHJhdyBudW1iZXJzIGFuZCBhZGRpdGlvblxuY29uc3QgaW50ZXJzZWN0cyA9IChhOiBJUmVjdCwgYjogSVJlY3QpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBhU2lkZXMgPSBzaWRlcyhhKVxuICAgIGNvbnN0IGJTaWRlcyA9IHNpZGVzKGIpXG4gICAgcmV0dXJuIGFTaWRlcy5sZWZ0IDw9IGJTaWRlcy5yaWdodCAmJiBhU2lkZXMucmlnaHQgPj0gYlNpZGVzLmxlZnQgJiYgXG4gICAgICAgIGFTaWRlcy50b3AgPD0gYlNpZGVzLmJvdHRvbSAmJiBhU2lkZXMuYm90dG9tID49IGJTaWRlcy50b3BcblxuICAgICAgICBcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmlwdWxhdGUgcmVjdGFuZ2xlc1xuICovXG5jb25zdCBSZWN0ID0ge1xuICAgIG1ha2UsXG4gICAgc2lkZXMsXG4gICAgY2VudGVyLFxuICAgIGludGVyc2VjdHNcbn1cblxuZXhwb3J0IHtJUmVjdCwgUmVjdH1cbiIsIi8vIEkgZ3Vlc3MgZXZlcnl0aGluZyB3b3VsZCBuZWVkIGl0J3Mgb3duIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLi4uIGdyb3NzXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGxvY2F0aW9ucyBvbiB0aGUgYm9hcmQsIGV2ZW50dWFsbHkgd2Ugd2lsbCBwcm9iYWJseSBtb3ZlIHRoaXMgaW50byBpdHMgb3duIEVDUyBzeXN0ZW1cbiAqL1xuY2xhc3MgVGlsZSB7XG4gICAgLyoqXG4gICAgICogQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgYmxvY2tNb3ZlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERvZXMgdGhpcyB0aWxlIGJsb2NrIGxpbmUgb2Ygc2lnaHRcbiAgICAgKi9cbiAgICBibG9ja1NpZ2h0OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tNb3ZlIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tTaWdodCBvcHRpb25hbCwgd2lsbCBkZWZhdWx0IHRvIHdoYXRldmVyIGJsb2NrTW92ZSBpcyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgYmxvY2tNb3ZlOiBib29sZWFuLCBibG9ja1NpZ2h0PzogYm9vbGVhbiApe1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5ibG9ja01vdmUgPSBibG9ja01vdmVcbiAgICAgICAgaWYoYmxvY2tTaWdodCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrTW92ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tTaWdodFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgVGlsZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==