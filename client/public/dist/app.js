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
/* harmony import */ var _mapGenHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapGenHelper */ "./client/src/mapGenHelper.ts");
/* harmony import */ var _shapes_rect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shapes/rect */ "./client/src/shapes/rect.ts");
/* harmony import */ var _idManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./idManager */ "./client/src/idManager.ts");
/* harmony import */ var _fov__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fov */ "./client/src/fov.ts");
/* harmony import */ var _rngHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rngHelper */ "./client/src/rngHelper.ts");















// sizing
const TILE_WIDTH = 10;
const TILE_HEIGHT = 10;
// THESE ARE IN TILE SIZES
const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 50;
const MAP_WIDTH = 80;
const MAP_HEIGHT = 45;
// Let's look for query params with which to seed the generator
const urlParams = new URLSearchParams(window.location.search);
const seedStr = urlParams.get('seed');
if (!seedStr) {
    const seed = _rngHelper__WEBPACK_IMPORTED_MODULE_14__["RANDOM"].seed(seedStr || undefined);
    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed;
    if (history.pushState) {
        window.history.pushState({ path: newurl }, '', newurl);
    }
    else {
        window.location.href = newurl;
    }
}
else {
    _rngHelper__WEBPACK_IMPORTED_MODULE_14__["RANDOM"].seed(seedStr);
}
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
    return Math.floor(_rngHelper__WEBPACK_IMPORTED_MODULE_14__["RANDOM"].next() * (max - min + 1)) + min;
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
        _mapGenHelper__WEBPACK_IMPORTED_MODULE_10__["MapGenHelper"].createRoom(tileGrid, newRoom);
        const center = _shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].center(newRoom);
        if (rooms.length === 0) {
            _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(player, center.x, center.y);
        }
        else {
            const lastCenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_11__["Rect"].center(rooms[rooms.length - 1]);
            if (randint(0, 1) === 1) {
                _mapGenHelper__WEBPACK_IMPORTED_MODULE_10__["MapGenHelper"].createHTunnel(tileGrid, lastCenter.x, center.x, lastCenter.y);
                _mapGenHelper__WEBPACK_IMPORTED_MODULE_10__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, center.x);
            }
            else {
                _mapGenHelper__WEBPACK_IMPORTED_MODULE_10__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, lastCenter.x);
                _mapGenHelper__WEBPACK_IMPORTED_MODULE_10__["MapGenHelper"].createHTunnel(tileGrid, lastCenter.x, center.x, center.y);
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
                        _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('moved', msg); // only publish move if the entity actually completed the move
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZm92LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcm5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBRyxVQUFVLEtBQUssU0FBUyxFQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1NBQy9CO0lBRUwsQ0FBQztDQUNKO0FBRWMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IGZyb20gJy4va2V5Ym9hcmRNb25pdG9yJ1xuaW1wb3J0IHsgTW91c2VNb25pdG9yIH0gZnJvbSAnLi9tb3VzZU1vbml0b3InXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuL2Fzc2V0SGVscGVyJ1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICcuL2NhbnZhc1JlbmRlcmVyJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IFBVQlNVQiB9IGZyb20gJy4vcHViU3ViL3B1YlN1YidcbmltcG9ydCB7IE1hcEdlbkhlbHBlciB9IGZyb20gJy4vbWFwR2VuSGVscGVyJ1xuaW1wb3J0IHsgUmVjdCwgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSURfTUFOQUdFUiB9IGZyb20gJy4vaWRNYW5hZ2VyJ1xuaW1wb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcblxuXG4vLyBzaXppbmdcbmNvbnN0IFRJTEVfV0lEVEggPSAxMFxuY29uc3QgVElMRV9IRUlHSFQgPSAxMFxuXG4vLyBUSEVTRSBBUkUgSU4gVElMRSBTSVpFU1xuY29uc3QgU0NSRUVOX1dJRFRIID0gODBcbmNvbnN0IFNDUkVFTl9IRUlHSFQgPSA1MFxuY29uc3QgTUFQX1dJRFRIID0gODBcbmNvbnN0IE1BUF9IRUlHSFQgPSA0NVxuXG4vLyBMZXQncyBsb29rIGZvciBxdWVyeSBwYXJhbXMgd2l0aCB3aGljaCB0byBzZWVkIHRoZSBnZW5lcmF0b3JcbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcblxuY29uc3Qgc2VlZFN0ciA9IHVybFBhcmFtcy5nZXQoJ3NlZWQnKSBcbmlmKCFzZWVkU3RyKXtcbiAgICBjb25zdCBzZWVkID0gUkFORE9NLnNlZWQoc2VlZFN0ciB8fCB1bmRlZmluZWQpXG4gICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgaWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDpuZXd1cmx9LCcnLG5ld3VybClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cbiAgICBcbn0gZWxzZSB7XG4gICAgUkFORE9NLnNlZWQoc2VlZFN0cilcbn1cblxuXG5cblxuXG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgICAnYmxhY2snOiAnIzAwMDAwMCcsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMDAwMDY0JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzMyMzI5NicsXG4gICAgJ2xpZ2h0X3dhbGwnOiAnIzgyNkUzMicsXG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzhCNDMyJ1xufVxuXG5jb25zdCBwbGF5ZXI6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCAnI0ZGRkZGRicpXG5jb25zdCBucGM6IEVudGl0eSA9IG5ldyBFbnRpdHkoSURfTUFOQUdFUi5uZXh0KCksIDMsNCwgJ0AnLCAnI0JCQUEwMCcpXG5cbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyXG5cbmNvbnN0IHJlbmRlckdyaWQgPSBuZXcgR3JpZDxJUmVuZGVyQ2VsbD4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxucmVuZGVyR3JpZC5zZXRFYWNoKChjZWxsOiBhbnksIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiBSZW5kZXJDZWxsLm1ha2UoeCx5LCcgJyxDT0xPUlMuYmxhY2ssQ09MT1JTLmRhcmtfZ3JvdW5kKVxufSlcblxuY29uc3QgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4gPSBuZXcgR3JpZDxUaWxlPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG50aWxlR3JpZC5zZXRFYWNoKChjZWxsOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgPT4ge1xuICAgIHJldHVybiBuZXcgVGlsZSh4LHksIHRydWUpXG59KVxuXG5jb25zdCBGT1ZfUkFESVVTID0gMTBcbmxldCBmb3ZSZWNvbXB1dGUgPSB0cnVlXG5jb25zdCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+ID0gbmV3IEdyaWQ8Rk9WQ2VsbD4oTUFQX1dJRFRILCBNQVBfSEVJR0hUKVxuLy8gaWYgd2UgdHVybiBmb3Ygb24gaXQnbGwgY2hhbmdlIGl0IG92ZXIgdG8gZmFsc2VcbmZvdkdyaWQuc2V0RWFjaCgoKTogRk9WQ2VsbCA9PiB7IHJldHVybiB7XG4gICAgdmlzaWJsZTogdHJ1ZVxufX0pXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAqIEBwYXJhbSBtaW4gXG4gKiBAcGFyYW0gbWF4IFxuICovXG5jb25zdCByYW5kaW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoUkFORE9NLm5leHQoKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuXG5cbmNvbnN0IFJPT01fTUFYX1NJWkUgPSAxMFxuY29uc3QgUk9PTV9NSU5fU0laRSA9IDEwXG5jb25zdCBNQVhfUk9PTVMgPSAzMFxuXG4vLyBHRVQgUkVBRFkgRk9SIFNPTUUgTUFQIEdFTkVSQVRJT04hXG5jb25zdCByb29tczogSVJlY3RbXSA9IFtdXG4vLyBNYXBHZW5lcmF0b3IuY3JlYXRlUm9vbSh0aWxlR3JpZCwgUmVjdC5tYWtlKDEsMSwyMCwyMCkpXG5mb3IobGV0IHIgPSAwOyByIDwgTUFYX1JPT01TOyByKyspe1xuICAgIFxuICAgIGNvbnN0IHcgPSByYW5kaW50KFJPT01fTUlOX1NJWkUsIFJPT01fTUFYX1NJWkUpXG4gICAgY29uc3QgaCA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICBjb25zdCB4ID0gcmFuZGludCgwLCBNQVBfV0lEVEggLSB3IC0gMSlcbiAgICBjb25zdCB5ID0gcmFuZGludCgwLCBNQVBfSEVJR0hUICAtIGggLSAxKVxuXG4gICAgY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZSh4LHksdyxoKVxuICAgIGxldCBpbnRlcnNlY3RzID0gZmFsc2VcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm9vbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihSZWN0LmludGVyc2VjdHMobmV3Um9vbSwgcm9vbXNbaV0pKXtcbiAgICAgICAgICAgIGludGVyc2VjdHMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKCFpbnRlcnNlY3RzKXtcbiAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVJvb20odGlsZUdyaWQsIG5ld1Jvb20pXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IFJlY3QuY2VudGVyKG5ld1Jvb20pXG4gICAgICAgIGlmKHJvb21zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICBQb2ludC5zZXQocGxheWVyLCBjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbcm9vbXMubGVuZ3RoIC0xXSlcbiAgICAgICAgICAgIGlmKHJhbmRpbnQoMCwxKSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGxhc3RDZW50ZXIueSlcbiAgICAgICAgICAgICAgICBNYXBHZW5IZWxwZXIuY3JlYXRlVlR1bm5lbCh0aWxlR3JpZCwgbGFzdENlbnRlci55LCBjZW50ZXIueSwgY2VudGVyLngpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBNYXBHZW5IZWxwZXIuY3JlYXRlVlR1bm5lbCh0aWxlR3JpZCwgbGFzdENlbnRlci55LCBjZW50ZXIueSwgbGFzdENlbnRlci54KVxuICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBjZW50ZXIueSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICB9XG59XG4vLyBTRVQgTlBDIExPQ0FUSU9OXG57XG4gICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIocm9vbXNbcm9vbXMubGVuZ3RoIC0gMV0pXG4gICAgUG9pbnQuc2V0KG5wYywgY2VudGVyLngsIGNlbnRlci55KVxufVxuXG4vL1xuY29uc3QgcmVuZGVyVG9HcmlkID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCBlbnRpdGllczogRW50aXR5W10sIHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+KTogdm9pZCA9PiB7XG4gICAgdGlsZUdyaWQuZm9yRWFjaCgodGlsZTogVGlsZSwgaW5kZXgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyQ2VsbCA9IHJlbmRlckdyaWQuZ2V0SShpbmRleClcbiAgICAgICAgY29uc3QgZm92Q2VsbCA9IGZvdkdyaWQuZ2V0SShpbmRleClcblxuICAgICAgICByZW5kZXJDZWxsLmZvcmVDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9ICcgJ1xuICAgICAgICBpZighZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX3dhbGxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19ncm91bmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF93YWxsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2dyb3VuZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5OiBFbnRpdHkpOiB2b2lkID0+IHtcbiAgICAgICAgaWYoIXJlbmRlckdyaWQuaW5Cb3VuZHNYWShlbnRpdHkueCwgZW50aXR5LnkpKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJDZWxsOiBJUmVuZGVyQ2VsbCA9IHJlbmRlckdyaWQuZ2V0WFkoZW50aXR5LngsIGVudGl0eS55KVxuICAgICAgICByQ2VsbC5mb3JlQ29sb3IgPSBlbnRpdHkuY29sb3JcbiAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgIH0pXG59XG5cbi8vIGNsZWFuIHRoaXMgdXBcbmNvbnN0IG1vdmVzOiBhbnlbXSA9IFtdXG5jb25zdCBNb3ZlUHJvY2Vzc29yID0ge1xuICAgIC8vIGN1cnJlbnRseSBqdXN0IHRpZWQgdG8gdGhlIHBsYXllclxuICAgIG1vdmVzXG59XG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmUnLCAobXNnKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2gobXNnKVxufSkgXG5cbmxvYWRJbWFnZSgnYXNzZXRzL291dC5wbmcnKS50aGVuKChpbWFnZTogYW55KTogdm9pZCA9PiB7XG4gICAgcmVuZGVyZXIuaW5pdChjYW52YXMsIGltYWdlKVxuICAgIC8vIExvb3BcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICByZW5kZXJlci5jbGVhcigpXG5cbiAgICAgICAgLy8gTG9vayBhdCBwbGF5ZXIgaW5wdXRcbiAgICAgICAgLy8gWiBsZXRzIHVzIGJlIGluIFpPT00gTU9ERSEhISFcbiAgICAgICAgLy8gd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhpcyBpbnRvIGEgXCJtb3ZlXCIgdHlwZSBhY3Rpb25cbiAgICAgICAgLy8gd2UnbGwganVzdCBkbyB0aGUgbW92ZSBzZWN0aW9uXG4gICAgICAgIFxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvY2VzcyBtb3Zlc1xuICAgICAgICAvLyBldmVudHVhbGx5IHdlJ2xsIGNvbXBvbmVudGl6ZSB0aGlzIGJldHRlclxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmZvckVhY2goKG1zZzogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gbXNnLmRlbHRhXG4gICAgICAgICAgICBjb25zdCBpZCA9IG1zZy5pZFxuICAgICAgICAgICAgY29uc3QgbW92ZXIgPSBlbnRpdGllcy5maW5kKChlKTogYm9vbGVhbiA9PiBlLmlkID09IGlkKVxuICAgICAgICAgICAgaWYoIW1vdmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpbGVHcmlkLmluQm91bmRzWFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHBsYXllci54ICsgbW92ZS54LCBwbGF5ZXIueSArIG1vdmUueSlcbiAgICAgICAgICAgICAgICBpZighdGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgICAgICBtb3Zlci5tb3ZlKG1vdmUueCwgbW92ZS55KVxuICAgICAgICAgICAgICAgICAgICBpZihtb3Zlci5pZCA9PT0gcGxheWVyLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdlJlY29tcHV0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlZCcsIG1zZykgLy8gb25seSBwdWJsaXNoIG1vdmUgaWYgdGhlIGVudGl0eSBhY3R1YWxseSBjb21wbGV0ZWQgdGhlIG1vdmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5sZW5ndGggPSAwXG4gICAgICAgIGlmKGZvdlJlY29tcHV0ZSl7XG4gICAgICAgICAgICBjYWxjdWxhdGVGT1YoZm92R3JpZCwgdGlsZUdyaWQsIHBsYXllciwgRk9WX1JBRElVUylcbiAgICAgICAgfVxuICAgICAgICAvLyByZWNvbXB1dGUgZm92IGhlcmVcblxuICAgICAgICAvLyB3ZSBtaWdodCBtb3ZlIGFsbCBvZiB0aGlzIGludG8gc29tZSBvZmZzY3JlZW4gXG4gICAgICAgIHJlbmRlclRvR3JpZCh0aWxlR3JpZCwgZm92R3JpZCwgZW50aXRpZXMsIHJlbmRlckdyaWQpXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihyZW5kZXJHcmlkKVxuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDUwMClcbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG5cbn0pLmNhdGNoKChlcnI6IGFueSk6IHZvaWQgPT4gY29uc29sZS5sb2coZXJyKSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGUiLCJmdW5jdGlvbiBsb2FkSW1hZ2UodXJsOiBzdHJpbmcpOiBhbnl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpOiBhbnkgPT4gcmVzb2x2ZShpbWcpKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKTogYW55ID0+IHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIGltYWdlIGZyb20gJHt1cmx9YCkpKVxuICAgICAgICBpbWcuc3JjID0gdXJsXG4gICAgfSlcbn1cblxuZXhwb3J0IHtsb2FkSW1hZ2V9IiwiaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgQ09ERV9UT19SRUNUX0hBU0gsIGRyYXdTZWN0aW9uLCBjb2RlIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3IgdGFraW5nIGEgcmVuZGVyIGdyaWQgYW5kIGNvbnZlcnRpbmcgaXQgdG8gaW1hZ2VzXG4gKiBvbiB0aGUgY2FudmFzXG4gKi9cbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgdW5kZWZpbmVkO1xuICAgIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQpOiBDYW52YXNSZW5kZXJlcntcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgLy8gd2UgYXJlIGp1c3QgZm9yY2luZyB0aGlzIGZvciBub3csIHdlIHdpbGwgY2hlY2sgaWYgaXQncyBudWxsXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZihjdHggPT09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0IGNvbnRleHQgZnJvbSBjYW52YXMnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMuc3ByaXRlc2hlZXQgPSBzcHJpdGVzaGVldFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvLyBldmVudHVhbGx5IHdlIG5lZWQgdG8gcGFzcyBpbiB0aGUgZGltZW5zaW9ucyB3ZSBhcmUgcmVuZGVyaW5nIHRvIGFzIHdlbGxcbiAgICAvLyBmb3Igbm93IGl0J3MgZmluZVxuICAgIHJlbmRlcihyZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPik6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIHJlbmRlckdyaWQuZm9yRWFjaCgoXG4gICAgICAgICAgICBjZWxsOiBJUmVuZGVyQ2VsbCwgXG4gICAgICAgICAgICBpbmRleDogbnVtYmVyLCBcbiAgICAgICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmNSZWN0OiBJUmVjdCA9IENPREVfVE9fUkVDVF9IQVNIW2NvZGUoY2VsbC5jaGFyYWN0ZXIpXVxuICAgICAgICAgICAgZHJhd1NlY3Rpb24oY3R4LCB0aGlzLnNwcml0ZXNoZWV0LCBzcmNSZWN0LCBSZWN0Lm1ha2UoeCAqIDEwLCB5ICogMTAsIDEwLCAxMCksIGNlbGwuZm9yZUNvbG9yLCBjZWxsLmJhY2tDb2xvciApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IENhbnZhc1JlbmRlcmVyIH0iLCIvKipcbiAqIEEgZ2VuZXJpYyBvYmplY3QgdG8gcmVwcmVzZW50IGV2ZXJ5dGhpbmcgdGhhdCBpcyBub3QgdGhlIG1hcCBpdHNlbGZcbiAqIEZvciB0aGF0LCBzZWUgdGhlIFRpbGUgY2xhc3NcbiAqL1xuY2xhc3MgRW50aXR5IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB4OiBudW1iZXIseTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgY29sb3I6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhbiBlbnRpdHksIGN1cnJlbnRseSBkb2Vzbid0IGNoZWNrIGlmIGl0IGNhbiBvciBub3QsIGp1c3QgZG9lc1xuICAgICAqIEBwYXJhbSBkeCBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeCBkaXJlY3Rpb24gKGxlZnQgaXMgbmVnYXRpdmUsIHJpZ2h0IGlzIHBvc2l0aXZlKVxuICAgICAqIEBwYXJhbSBkeSBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeSBkaXJlY3Rpb24gKHVwIGlzIG5lZ2F0aXZlLCBkb3duIGlzIHBvc2l0aXZlKVxuICAgICAqL1xuICAgIG1vdmUoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHZvaWR7XG4gICAgICAgIHRoaXMueCArPSBkeFxuICAgICAgICB0aGlzLnkgKz0gZHlcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVudGl0eSB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUG9pbnQsIFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbmludGVyZmFjZSBGT1ZDZWxsICB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBTaGFkb3dSYW5nZSB7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbn1cblxuY29uc3QgaXNCZXR3ZWVuSW5jbHVzaXZlID0gKGE6IG51bWJlcixiOiBudW1iZXIsdDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgaWYoYiA8IGEpe1xuICAgICAgICByZXR1cm4gYiA8PSB0ICYmIHQgPD0gYVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhIDw9IHQgJiYgdCA8PSBiXG4gICAgfVxufVxuXG5jb25zdCBjYWxjdWxhdGVPY3RhbnQgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcixcbiAgICBob3Jpem9udGFsTm90VmVydGljYWw6IGJvb2xlYW4sIHhEaXJlY3Rpb246IG51bWJlciwgeURpcmVjdGlvbjogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgXG4gICAgLy8gT3VyIHNoYWRvd3Mgd2Ugd2lsbCBjYXN0XG4gICAgY29uc3Qgc2hhZG93UmFuZ2VzOiBTaGFkb3dSYW5nZVtdID0gW11cbiAgICAvLyBvdXIgc3RhcnRpbmcgbG9jYXRpb24gaXMgYWx3YXlzIHZpc2libGVcbiAgICBmb3ZHcmlkLmdldFAoc3RhcnRQb2ludCkudmlzaWJsZSA9IHRydWVcbiAgICBmb3IobGV0IHJvdyA9IDE7IHJvdyA8IG1heERpc3RhbmNlOyByb3crKyl7XG4gICAgICAgIGNvbnN0IHJvd1NpemUgPSByb3cgKyAxXG4gICAgICAgIGZvcihsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgcm93U2l6ZTsgY29sdW1uKyspe1xuICAgICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBvY3RhbnQsIHRoZSB0cmF2ZWxsZXIgd2lsbCBtb3ZlIGRpZmZlcmVudGx5XG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxsZXIgPSBQb2ludC5jb3B5KHN0YXJ0UG9pbnQpXG4gICAgICAgICAgICB0cmF2ZWxsZXIueCArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB4RGlyZWN0aW9uICogY29sdW1uIDogeERpcmVjdGlvbiAqIHJvd1xuICAgICAgICAgICAgdHJhdmVsbGVyLnkgKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geURpcmVjdGlvbiAqIHJvdyA6IHlEaXJlY3Rpb24gKiBjb2x1bW5cblxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG91dCBvZiBib3VuZHMsIHNraXBcbiAgICAgICAgICAgIGlmKCF0aWxlR3JpZC5pbkJvdW5kc1hZKHRyYXZlbGxlci54LCB0cmF2ZWxsZXIueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRQKHRyYXZlbGxlcilcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAodHJhdmVsbGVyKVxuXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGNvbHVtbi9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBlbmQgPSAoY29sdW1uICsgMSkvcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgbWlkZGxlID0gKHN0YXJ0ICsgZW5kKSAvIDJcblxuICAgICAgICAgICAgLy8gdGVzdCBmb3IgdmlzaWJsaXR5XG4gICAgICAgICAgICBsZXQgdmlzaWJpbGl0eSA9IHRydWVcblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGVkZ2VzIGFyZSBjbGVhciBvciBub3RcbiAgICAgICAgICAgIGxldCBzdGFydENsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IG1pZGRsZUNsZWFyID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGVuZENsZWFyID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGJ1aWx0IHNvbWUgc2hhZG93IHJhbmdlc1xuICAgICAgICAgICAgaWYoc2hhZG93UmFuZ2VzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGFueSBzaGFkb3dzIGNyb3NzIG91ciB0aHJlZSBwb2ludHNcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMuZm9yRWFjaCggKHNyOiBTaGFkb3dSYW5nZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENsZWFyID0gc3RhcnRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICBtaWRkbGVDbGVhciA9IG1pZGRsZUNsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgbWlkZGxlKVxuICAgICAgICAgICAgICAgICAgICBlbmRDbGVhciA9IGVuZENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgZW5kKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdmlzaWJpbGl0eSBiYXNlZCBvZmYgb2Ygb3VyIHNhbXBsaW5nXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9IG1pZGRsZUNsZWFyICYmIChzdGFydENsZWFyIHx8IGVuZENsZWFyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB3ZSBibG9jayBzaWdodCwgY2FsY3VsYXRlIG91ciBzaGFkb3cgZW5kc1xuICAgICAgICAgICAgaWYodGlsZS5ibG9ja1NpZ2h0KXtcbiAgICAgICAgICAgICAgICBzaGFkb3dSYW5nZXMucHVzaCh7c3RhcnQsIGVuZH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvdkNlbGwudmlzaWJsZSA9IHZpc2liaWxpdHlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2FsY3VsYXRlRk9WID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAvLyBiZSBkZWZhdWx0IHdlIGFyZSBnb2luZyB0byBzaGFkb3dDYXN0XG4gICAgLy8gYnkgZGVmYXVsdCBldmVyeXRoaW5nIGlzIG5vdCB2aXNpYmxlXG4gICAgZm92R3JpZC5zZXRFYWNoKCgpOiBGT1ZDZWxsID0+IHtyZXR1cm4geyB2aXNpYmxlOiBmYWxzZX0gfSlcbiAgICAvLyBOTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgLTEpXG4gICAgLy8gV05XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAtMSlcbiAgICAvLyBXU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIDEpXG4gICAgLy8gU1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIDEpXG4gICAgLy8gU1NFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgMSlcbiAgICAvLyBFU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgMSlcbiAgICAvLyBFTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgLTEpXG4gICAgLy8gTk5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgLTEpXG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZUZPViwgRk9WQ2VsbH0iLCJpbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIFNldEVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYW55O1xufVxuXG5pbnRlcmZhY2UgRm9yRWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xufVxuXG4vLyBUT0RPOiBnaXZlIGdyaWRzIHRoZWlyIG93biB4IGFuZCB5cywgdGhhdCB3YXkgdGhleSBjYW4gaW1wbGVtZW50IGFsbCB0aGUgcG9pbnQgYW5kIHJlY3Qgc3R1ZmZcbi8qKlxuICogR3JpZCB0byByZXByZXNlbnQgMmQgY29sbGVjdGlvbnMsIHBsZWFzZSBkb24ndCByZXNpemUgaXQgYWZ0ZXIgY3JlYXRpbmcgaXRcbiAqL1xuY2xhc3MgR3JpZDxUPiBpbXBsZW1lbnRzIElSZWN0IHtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHk6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGNlbGxzOiBUW107XG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApe1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuY2VsbHMubGVuZ3RoID0gd2lkdGggKiBoZWlnaHRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbWFyaWx5IHVzZWQgZm9yIGluaXRpYWxpemF0aW9uIG9mIHRoZSBncmlkLCBvdmVyd3JpdGVzIHByZXZpb3VzIGVudHJpZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZW50cnksIGRvbid0IHVzZSB0aGlzIHVubGVzcyBlbnRyaWVzIGFyZSBpbmRlcGVuZGVudCBmcm9tIGVhY2ggb3RoZXJcbiAgICAgKiBAcGFyYW0gZm4gdGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgY2VsbCBpdHNlbGYgYXMgdGhlIGZpcnN0IHByb3BlcnR5IGFuZCBcbiAgICAgKi9cbiAgICBzZXRFYWNoKGZuOiBTZXRFYWNoRm48VD4pOiBHcmlkPFQ+e1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gc29tZXRoaW5nIGZvciBlYWNoIG1lbWJlciBvZiBhIGNlbGwsIGdvaW5nIHJvdyBieSByb3cgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgICogQHBhcmFtIGZuIEdldCBwYXNzZWQgdGhlIGNlbGwsIGluZGV4LCB4IGFuZCB5XG4gICAgICovXG4gICAgZm9yRWFjaChmbjogRm9yRWFjaEZuPFQ+KTogdm9pZHtcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0geCB4IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAcGFyYW0geSB5IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKi9cbiAgICBnZXRYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQgIHtcbiAgICAgICAgaWYoIXRoaXMuaW5Cb3VuZHNYWSh4LHkpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm91bmRhcnkgYWNjZXNzIGlzc3VlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1t4ICsgeSAqIHRoaXMud2lkdGhdXG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ2V0WFkuIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHBvaW50IGNvbnRhaW5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSBjZWxsIHlvdSB3YW50IHRvIGdldFxuICAgICAqL1xuICAgIGdldFAocG9pbnQ6IElQb2ludCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRYWShwb2ludC54LCBwb2ludC55KVxuICAgIH1cblxuICAgIGluQm91bmRzWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFue1xuICAgICAgICBpZih4IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2VsbCBiYXNlZCBvZmYgb2YgYW4gaW5kZXgsIHVzdWFsbHkgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZm9yRWFjaCBsb29wIG9mIGEgc2ltaWxhcmx5IHNpemVkIGdyaWRcbiAgICAgKiBOT1RFIGJlIGNhcmVmdWwgdGhhdCB0aGUgb3RoZXIgZ3JpZCBoYXMgdGhlIHNhbWUgZGltZW5zaW9uIHVubGVzcyB5b3UgcmVhbGx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGNlbGxzLCBtb3N0bHkgdG8gYmUgdXNlZCB3aXRoIGdyaWRzIHRoYXQgYXJlIHdvcmtpbmcgYWxvbmdzaWRlIGEgZGlmZmVyZW50IGZvckVhY2ggbG9vcFxuICAgICAqL1xuICAgIGdldEkoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpbmRleF1cbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQgfSIsImNsYXNzIElETWFuYWdlciB7XG4gICAgcHJpdmF0ZSBsYXN0SWQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxhc3RJZCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZXh0IGlkXG4gICAgICovXG4gICAgbmV4dCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0SWQrK1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBJRF9NQU5BR0VSXG4gKi9cbmNvbnN0IElEX01BTkFHRVIgPSBuZXcgSURNYW5hZ2VyKClcbmV4cG9ydCB7SURfTUFOQUdFUiwgSURNYW5hZ2VyfSIsImludGVyZmFjZSBLZXlTdGF0ZSB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIGlzRG93bjogYm9vbGVhbjtcbiAgICBoYWxmU3RlcHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbmNvbnN0IG1ha2VLZXlTdGF0ZSA9IChrZXk6IHN0cmluZywgaXNEb3duOiBib29sZWFuID0gZmFsc2UsIGhhbGZTdGVwczogbnVtYmVyID0gMCk6IEtleVN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGlzRG93bixcbiAgICAgICAgaGFsZlN0ZXBzXG4gICAgfVxufVxuXG5jbGFzcyBLZXlib2FyZE1vbml0b3Ige1xuICAgIGtleUhhc2g6IEhhc2g8S2V5U3RhdGU+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMua2V5SGFzaCA9IHt9XG4gICAgfVxuICAgIC8vIEF0dGFjaCB0byB0aGUgRE9NLCB1c3VhbGx5IHRoZSBkb2N1bWVudCBhcyBhIHdob2xlLCBidXQgeW91IGNhbiBtYWtlIGl0IG1vcmUgc3BlY2lmaWMgaWYgeW91IHdhbnRcbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogS2V5Ym9hcmRNb25pdG9yIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoIWtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKGtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGdldEtleVN0YXRlKGtleTogc3RyaW5nKTogS2V5U3RhdGV7XG4gICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5SGFzaFtrZXldXG4gICAgfVxuICAgIHJlc2V0U3RlcHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleUhhc2gpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXlzW2ldXS5oYWxmU3RlcHMgPSAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3RhdGljIG1ldGhvZHMgZm9yIGhlbHBpbmcgdG8gbWFuaXB1bGF0ZSBtYXBzXG4gKi9cbmNsYXNzIE1hcEdlbkhlbHBlciB7XG4gICAgLy8gVE9ETzogTWF5YmUgY29tZSB1cCB3aXRoIGEgYmV0dGVyIG5hbWVcbiAgICAvKipcbiAgICAgKiBQbGFjZSBhIHJvb20gaW5zaWRlIGEgZ3JvdXAgb2YgdGlsZXNcbiAgICAgKiBAcGFyYW0gdGlsZUdyaWQgdGhlIGdyaWQgb2YgdGlsZXMgdG8gYWZmZWN0XG4gICAgICogQHBhcmFtIHJvb20gdGhlIHJvb20gc2VjdGlvbiB0aGF0IHdlIHdpbGwgb3BlbiB1cFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVSb29tKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tOiBJUmVjdCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBCb3VuZHMgY2hlY2sgb3Igc29tZXRoaW5nLCByaWdodCBub3cgdGVycmlibGUgdGhpbmdzIGNhbiBoYXBwZW5cbiAgICAgICAgY29uc3QgeyBsZWZ0LHJpZ2h0LHRvcCxib3R0b219ID0gUmVjdC5zaWRlcyhyb29tKVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHN0b3Agb25lIGVhcmx5IGJlY2F1c2Ugb2YgaG93IHdlIHdvcmsgd2l0aCBhIGdyaWRcbiAgICAgICAgLy8gd2Ugd2lsbCBhbHNvIGluY2x1ZGUgYSBtYXJnaW4gb2Ygb25lIG9uIGFsbCBzaWRleFxuICAgICAgICBmb3IobGV0IHkgPSB0b3AgKyAxOyB5IDwgYm90dG9tIC0gMTsgeSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IGxlZnQgKyAxOyB4IDwgcmlnaHQgLSAxOyB4Kyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LCB5KVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUhUdW5uZWwodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHgxOiBudW1iZXIsIHgyOiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBzd2FwIHRoZW0gYXMgbmVjZXNzYXJ5XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHgxLCB4MilcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoeDEsIHgyKVxuICAgICAgICBmb3IobGV0IHggPSBtaW47IHggPD0gbWF4OyB4Kyspe1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVlR1bm5lbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeTE6IG51bWJlciwgeTI6IG51bWJlciwgeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHkxLCB5MilcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoeTEsIHkyKVxuICAgICAgICBmb3IobGV0IHkgPSBtaW47IHkgPD0gbWF4OyB5Kyspe1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgseSlcbiAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IHsgTWFwR2VuSGVscGVyIH0iLCIvLyBMZXQncyBnbyBhaGVhZCBhbmQgY3JlYXRlIHRoZSBQb2ludCBpbnRlcmZhY2UgaGVyZSwgd2UnbGwgZXhwb3J0IGl0IGZvciB1c2UgbGF0ZXIgaW4gdGhlIHByb2plY3RcblxuaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuLyoqXG4gKiBDbGFzcyB0byBoZWxwIG1vbml0b3IgdGhpbmdzIHRoYXQgaGF2ZSBoYXBwZW5lZCB0byB0aGUgbW91c2Ugc2luY2UgbGFzdCB0aW1lIHRoYXQgd2UgbG9va2VkXG4gKi9cblxuaW50ZXJmYWNlIEhhbGZDbGljayB7XG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICBpc0Rvd246IGJvb2xlYW47XG59XG5cbmNsYXNzIE1vdXNlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvdmVyIHRoZSBhdHRhY2hlZCBlbGVtbnRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgbGFzdCB0aW1lIHdlIGxvb2tlZFxuICAgICAqL1xuICAgIGhhc01vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRydWUgaWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGNvbnRhaW5lciBcbiAgICAgKi9cbiAgICBpbkNvbnRhaW5lcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGlzIHRoZSBtb3VzZSBidXR0b24gZG93biAoY3VycmVudGx5IG9ubHkgdHJhY2tzIGxlZnQpXG4gICAgICovXG4gICAgaXNEb3duOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgYSBmdWxsIGNsaWNrIGlzIHVwIGFuZCBkb3duLCB0aGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1cHMgYW5kIGRvd25zLCB1c2VmdWwgZm9yIGRyYWdzIG9yIG90aGVyIHRoaW5ncyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICovXG4gICAgaGFsZkNsaWNrczogSGFsZkNsaWNrW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50Lm1ha2UoMCwwKVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzID0gW11cbiAgICAgICAgLy8gVE9ETzogQWRkIGNsaWNrIHRyYWNraW5nLCBkZXBlbmRzIG9uIGhvdyBxdWlja2x5IHdlIGFyZSBwb2xsaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yIG1vdXNlIHJlbGF0ZWQgZXZlbnRzIHRvXG4gICAgICogQHBhcmFtIGVsZW1lbnQgdGhlIHBhcnRpY3VsYXIgbW91c2UgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogTW91c2VNb25pdG9yIHtcbiAgICAgICAgLy8gVE9ETzogV2UnbGwgcmVnaXN0ZXIgY2xpY2sgaGlzdG9yeSBpbiB0aGUgZnV0dXJlLCBmb3Igbm93IHdlIGFyZSBqdXN0IGRvaW5nIG1vdXNlIG92ZXIgYXQgcHJlc2VudFxuICAgICAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgUG9pbnQuc2V0KHRoaXMucG9zaXRpb24sIGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZW50ZXJzIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIG1vdmVzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGV4aXRzIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHJhaXNlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IGZhbHNlIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayB0aGF0IHdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgZXZlbnRzIHNpbmNlIG91ciBsYXN0IHBvbGwgb2Ygc3RhdGUgYW5kIGl0IGNhbiBiZSByZXNldFxuICAgICAqL1xuICAgIHJlc2V0KCk6IHZvaWR7XG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgaGF2ZW4ndCBtb3ZlZCBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIC8vIGNsZWFyIG91dCB0aGUgY2xpY2tzXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcy5sZW5ndGggPSAwXG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZU1vbml0b3IgfSIsImxldCBfaWQgPSAwXG5jb25zdCBuZXh0SWQgPSAoKTogbnVtYmVyID0+IF9pZCsrXG5cbi8vIFRPRE86IE1ha2UgbWVzc2FnZXMgZW51bXM/XG5cbi8vIFRPRE86IE1ha2UgYW4gaW50ZXJmYWNlIGZvciB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxudHlwZSBTdWJzY3JpYmVyRnVuY3Rpb24gPSAobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKSA9PiB2b2lkXG5cbmludGVyZmFjZSBTdWJzY3JpYmVyTm9kZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uO1xuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xufVxuXG5cblxuY29uc3QgbWFrZVN1Yk5vZGUgPSAoc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDAsIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbCA9IG51bGwpOiBTdWJzY3JpYmVyTm9kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5leHRJZCgpLFxuICAgICAgICBzdWJGbixcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5leHRcbiAgICB9XG59XG5cbi8vIFRPRE86ID8/IE1ha2UgaXQgc28gYSBzdWJzY3JpYmVyIGxpc3QgY291bGQgYmUgZGVhZmVuZWQvbGlzdGVuP1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgZnVuY3Rpb25zLCBzb3J0ZWQgYnkgcHJpb3JpdHksIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseSB3aGVuIHRoZSBsaXN0IGlzIG5vdGlmaWVkIG9mIGEgbmV3IG1lc3NhZ2VcbiAqL1xuY2xhc3MgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCB7XG4gICAgcm9vdDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIHRhaWw6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGxcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGlzIGxpc3QgdmlhIHRoZSBub3RpZnkgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIG1lc3NhZ2Ugb2JqZWN0IHdoZW5ldmVyIHRoaXMgc3Vic2NyaWJlciBsaXN0IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgaGlnaGVyIHRoZSBwcmlvcml0eSwgdGhlIGVhcmxpZXIgaXQgd2lsbCBydW4sIGlmIGl0IGhhcyB0aGUgc2FtZSBwcmlvcml0eSB0aGUgb25lIHRoYXQgd2FzIGFkZGVkIGZpcnN0IHdpbGwgZmlyZSBmaXJzdFxuICAgICAqL1xuICAgIHN1YnNjcmliZShmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlcntcbiAgICAgICAgLy8gQ2FzZSAjMSBFbXB0eSBTdWJzY3JpYmVyIExpc3RcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5yb290XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UgIzIgV2UgYWxyZWFkeSBoYXZlIHNvbWUgc3Vic2NyaWJlcnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290IC8vIHdlIGtub3cgaXQgc2hvdWxkIGJlIGEgU3Vic2NyaWJlciBOb2RlIGFuZCBub3QgbnVsbCwgYmVjYXVzZSB3ZSBhcmUgaGVyZVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIG5ldyByb290XG4gICAgICAgICAgICBpZihwcmlvcml0eSA8IHRyYXZlbGxlciEucHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdGhpcy5yb290KVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWwgY2FzZSB3ZSBoYXZlIG90aGVyIHRoaW5ncyB0byB3b3JyeSBhYm91dFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUodHJhdmVsbGVyICYmIHRyYXZlbGxlci5uZXh0ICYmIHRyYXZlbGxlci5uZXh0LnByaW9yaXR5ID49IHByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBlaXRoZXIgZm91bmQgYSBub2RlIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiB1cyBvciB3ZSBoYXZlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICAgICB0cmF2ZWxsZXIhLm5leHQgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRyYXZlbGxlciEubmV4dClcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRyYXZlbGxlcnMgd2FzIHRoZSBvbGQgdGFpbFxuICAgICAgICAgICAgICAgIGlmKHRyYXZlbGxlciA9PT0gdGhpcy50YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBuZXh0IG9uZSBpcyB0aGUgbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdHJhdmVsbGVyIS5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsbGVyIS5uZXh0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbW9zdCBpbXBvcmFudCBpbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRvcGljIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBwdWJzdWIgdG8gcmVtaW5kIHRoZSBzdWJzY3JpYmVyIG9mIHRoZSBzcGVjaWZpYyB0b3BpYyBvciBzdWJ0b3BpY1xuICAgICAqL1xuICAgIG5vdGlmeShtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdFxuICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICB0cmF2ZWxsZXIuc3ViRm4obWVzc2FnZSwgdG9waWMpXG4gICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSIsImltcG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IGZyb20gJy4vcHJpb3JpdHlTdWJzY3JpYmVyTGlzdCdcblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogUHVic3ViIGlzIGEgdG9waWMtYmFzZWQgb2JzZXJ2ZXIgcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBkZXNpZ25lZCB0byBhdm9pZCB0aWdodCBjb3VwbGluZyBvZiBjb21wb25lbnRzXG4gKi9cbmNsYXNzIFB1YlN1YiB7XG4gICAgdG9waWNzOiBIYXNoPFByaW9yaXR5U3Vic2NyaWJlckxpc3Q+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9waWNzID0ge31cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBtZXNzYWdlIHRvIGFsbCBzdWJzY3JpYmVycyB0byBhIHRvcGljXG4gICAgICogQHBhcmFtIHRvcGljIFRvcGljIHRvIHVzZSwgaWYgbm9ib2R5IGlzIHN1YnNjcmliZWQgdG8gaXQsIG5vdGhpbmcgaGFwcGVuc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBhY3R1YWwgbWVzc2FnZSB0byBzZW5kLCB0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBidXQgaXQncyBhIHNpbmdsZSB0aGluZ1xuICAgICAqL1xuICAgIHB1Ymxpc2godG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10ubm90aWZ5KG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIHNwZWNpZmljIHRvcGljIHdpdGggYSBnaXZlbiBwcmlvcml0eSwgcmV0dXJucyBhbiBpZCB0aGF0IHlvdSdsbCBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHRvcGljIHRoZSBzcGVjaWZpYyB0b3BpYyB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gZm4gdGhlIGZ1bmN0aW9uIHRvIHJlY2lldmUgdGhlIHNwZWNpZmljIG1lc3NhZ2UgYW5kIHRvcGljIGJlaW5nIGJyb2FkY2FzdGVkIHRvXG4gICAgICogQHBhcmFtIHByaW9yaXR5IHRoZSBwcmlvcml0eSBvZiB0aGUgZnVuY3Rpb24gdG8gc3Vic2NyaWJlIHRvLCBoaWdoZXIgbnVtYmVycyBydW4gZmlyc3QsIHRoZSBkZWZhdWx0IGlzIHplcm8sIG5lZ2F0aXZlIG51bWJlcnMgYXJlIGFsbG93ZWRcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBpZighdGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXSA9IG5ldyBQcmlvcml0eVN1YnNjcmliZXJMaXN0KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b3BpY3NbdG9waWNdLnN1YnNjcmliZShmbiwgcHJpb3JpdHkpXG4gICAgfVxufVxuLy8gT1VSIFVOSVZFUlNBTCBERUZBVUxUIFBVQlNVQlxuY29uc3QgUFVCU1VCID0gbmV3IFB1YlN1YigpXG5leHBvcnQge1BVQlNVQiwgUHViU3VifSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXIgQ2VsbFxuICovXG5pbnRlcmZhY2UgSVJlbmRlckNlbGwge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7IC8vIHRoaXMgc2hvdWxkIG9ubHkgYmUgc3RyaW5nIG9mIGxlbmd0aCAxXG4gICAgZm9yZUNvbG9yOiBzdHJpbmc7XG4gICAgYmFja0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCx5LCBjaGFyYWN0ZXIsIGZvcmVDb2xvciwgYmFja0NvbG9yXG4gICAgfVxufVxuXG5jb25zdCBSZW5kZXJDZWxsID0ge1xuICAgIG1ha2Vcbn1cblxuZXhwb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGx9IiwiaW1wb3J0IHtJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBIYXNoU3RyPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuaW50ZXJmYWNlIEhhc2hOdW08VD4ge1xuICAgIFtrZXk6IG51bWJlcl06IFQ7XG59XG5cbmNvbnN0IGNvZGUgPSAoY2hhcjogc3RyaW5nKTogbnVtYmVyID0+IGNoYXIuY2hhckNvZGVBdCgwKVxuY29uc3QgQ0hBUkFDVEVSX0hFTFBFUjogSGFzaFN0cjxzdHJpbmc+ID0ge1xuICAgIFZFUlRJQ0FMX0xJTkU6ICfilIInLFxuICAgIEhPUklaT05UQUxfTElORTogJ+KUgCcsXG4gICAgQ1JPU1NfTElORVM6ICfilLwnLFxuICAgIFRfTEVGVDogJ+KUpCcsXG4gICAgVF9VUDogJ+KUtCcsXG4gICAgVF9SSUdIVDogJ+KUnCcsXG4gICAgVF9ET1dOOiAn4pSsJyxcbiAgICBUT1BfUklHSFQ6ICfilJQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ+KUjCcsXG4gICAgQk9UVE9MX0xFRlQ6ICfilJAnLFxuICAgIFRPUF9MRUZUOiAn4pSYJ1xufVxuXG5jb25zdCBUSUxFX1dJRFRIID0gMTAsIFRJTEVfSEVJR0hUID0gMTBcblxuY29uc3QgQ09ERV9UT19SRUNUX0hBU0g6IEhhc2hOdW08SVJlY3Q+ID0ge31cbmNvbnN0IHNwYWNlQ29kZSA9ICAgY29kZSgnICcpXG5jb25zdCBhdENvZGUgPSAgICAgIGNvZGUoJ0AnKVxuY29uc3QgYUNvZGUgPSAgICAgICBjb2RlKCdhJylcbmNvbnN0IHpDb2RlID0gICAgICAgY29kZSgneicpXG5jb25zdCBBQ29kZSA9ICAgICAgIGNvZGUoJ0EnKVxuY29uc3QgWkNvZGUgPSAgICAgICBjb2RlKCdaJylcblxuXG5jb25zdCBjdHJoSGVscGVyID0gKGNvZGU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlXSA9IFJlY3QubWFrZSh4LHksIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuXG4vLyBXZSB3aWxsIGZpbGwgaW4gdGhlIG90aGVyIGNoYXJhY3RlcnMgYXMgbmVjZXNzYXJ5XG5DT0RFX1RPX1JFQ1RfSEFTSFtzcGFjZUNvZGVdID0gUmVjdC5tYWtlKDAsIDAsIDEwLCAxMClcbkNPREVfVE9fUkVDVF9IQVNIW2F0Q29kZV0gPSBSZWN0Lm1ha2UoMCwgMTAsIDEwLCAxMClcbmZvcihsZXQgaSA9IEFDb2RlOyBpIDw9IFpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gQUNvZGUpICogMTAsIDMwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbmZvcihsZXQgaSA9IGFDb2RlOyBpIDw9IHpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gYUNvZGUpICogMTAsIDQwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbi8vIGZvciBicmV2aXRpZXMgc2FrZVxuY29uc3QgQ0ggPSBDSEFSQUNURVJfSEVMUEVSXG5jdHJoSGVscGVyKGNvZGUoQ0guVkVSVElDQUxfTElORSksIDE0MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5IT1JJWk9OVEFMX0xJTkUpLCAxNTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQ1JPU1NfTElORVMpLCAxNjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9MRUZUKSwgMTcwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfVVApLCAxODAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9SSUdIVCksIDE5MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0RPV04pLCAyMDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX1JJR0hUKSwgMjEwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTV9SSUdIVCksIDIyMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT0xfTEVGVCksIDIzMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfTEVGVCksIDI0MCwxMClcblxuXG5mdW5jdGlvbiBkcmF3U2VjdGlvbihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGlsZXNoZWV0OiBhbnksIHNyY1JlY3Q6IElSZWN0LCBkZXN0UmVjdDogSVJlY3QsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IHZvaWR7XG4gICAgY3R4LmNsZWFyUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNoZWV0LCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53aWR0aCwgc3JjUmVjdC5oZWlnaHQsIGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICd4b3InXG4gICAgY3R4LmZpbGxTdHlsZT1mb3JlQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJ1xuICAgIGN0eC5maWxsU3R5bGU9YmFja0NvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xufVxuXG5leHBvcnQgIHsgQ09ERV9UT19SRUNUX0hBU0gsIENIQVJBQ1RFUl9IRUxQRVIsIGNvZGUsIGRyYXdTZWN0aW9uIH0iLCIvLyBXQVJOSU5HOiBIRVJFIFRIRVJFIEJFIERSQUdPTlMsIChvciBpbiB0aGlzIGNhc2UsIGEgbG90IG9mIGNvZGUgSSBkb24ndHVuZGVyc3RhbmQpXG5cbi8vIFdFIE9OTFkgV0FOVCBPTkUgUk5HIEdFTkVSQVRPUiBCRUNBVVNFIFdFIEFMV0FZUyBXQU5UIEEgU0VFRCBGT1IgSVRcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUyMTI5NS9zZWVkaW5nLXRoZS1yYW5kb20tbnVtYmVyLWdlbmVyYXRvci1pbi1qYXZhc2NyaXB0XG5cbi8vIEhhc2hpbmcgZnVuY3Rpb24gZm9yIHRha2luZyBzaW1wbGUgc3RyaW5nIGFuZCBjcmVhdGluZyBiZXR0ZXIgXCJ0cnVlXCIgc2VlZHNcbi8vIEkgSEFWRSBOTyBJREVBIFdIQVQgVEhFIE1BR0lDIE5VQk1FUlMgQVJFIEZPUlxuZnVuY3Rpb24geG11cjMoc3RyOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IGggPSAxNzc5MDMzNzAzIF4gc3RyLmxlbmd0aCAvLyBiaXR3aXNlIG9yIHRoZSBzdHJpbmcgd2l0aCB0aGlzIHJhbmRvbSB0aGluZ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBzdHIuY2hhckNvZGVBdChpKSwgMzQzMjkxODM1MylcbiAgICAgICAgaCA9IGggPDwgMTMgfCBoID4+PiAxOVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIGggPj4+IDE2LCAyMjQ2ODIyNTA3KVxuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxMywgMzI2NjQ4OTkwOSlcbiAgICAgICAgcmV0dXJuIChoIF49IGggPj4+IDE2KSA+Pj4gMFxuICAgIH1cbn1cblxudHlwZSBJUmFuZG9tID0oKSA9PiBudW1iZXI7XG5cbi8vIEdFTkVSQVRPUlNcbmZ1bmN0aW9uIHNmYzMyKGE6IGFueSwgYjogYW55LCBjOiBhbnksIGQ6IGFueSk6IChGdW5jdGlvbil7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCk6IGFueXtcbiAgICAgICAgYSA+Pj49IDA7IGI+Pj49IDA7IGMgPj4+PSAwOyBkID4+Pj0gMFxuICAgICAgICBsZXQgdCA9IChhICsgYikgfCAwXG4gICAgICAgIGEgPSBiIF4gYiA+Pj4gOVxuICAgICAgICBiID0gYyArIChjIDw8IDMpIHwgMFxuICAgICAgICBjID0gKGMgPDwgMjEgfCBjID4+PiAxMSlcbiAgICAgICAgZCA9IGQgKyAxIHwgMFxuICAgICAgICB0ID0gdCArIGQgfCAwXG4gICAgICAgIGMgPSBjICsgdCB8IDBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAodCA+Pj4gMCkgLyA0Mjk0OTY3Mjk2XG4gICAgfVxufVxuXG4vLyBPTkUgTElORVIgQ1VSUkVOVExZIE5PVCBJTiBVU0Vcbi8vIGNvbnN0IExDRz0gKHM6IGFueSk6IEZ1bmN0aW9uPT4oKTogYW55PT4oMioqMzEtMSYocz1NYXRoLmltdWwoNDgyNzEscykpKS8yKiozMTtcblxuY29uc3QgUkFORE9NID0ge1xuICAgIF9nZW5lcmF0b3I6ICgoKTogYW55ID0+IHt9KSBhcyBGdW5jdGlvbixcbiAgICBzZWVkOiBmdW5jdGlvbihzZWVkU3RyOiBzdHJpbmcgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSkgKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2VlZCA9IHhtdXIzKHNlZWRTdHIpXG4gICAgICAgIHRoaXMuX2dlbmVyYXRvciA9IHNmYzMyKHNlZWQoKSwgc2VlZCgpLCBzZWVkKCksIHNlZWQoKSlcbiAgICAgICAgcmV0dXJuIHNlZWRTdHJcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKCk6IGFueSB7XG4gICAgICAgIGlmKHRoaXMuX2dlbmVyYXRvciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnNlZWQoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZW5lcmF0b3IoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUkFORE9NIH0iLCIvKipcbiAqIEludGVyZmFjZSBmb3Igd29ya2luZyB3aXRoIGEgMkQgUG9pbnRcbiAqL1xuaW50ZXJmYWNlIElQb2ludCB7ICBcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb2ludFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIHt4LHl9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBwb2ludCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGJvdGggb2YgdGhlbSB0b2dldGhlciwgaWYgeW91IHdhbnQgdG8gYWRkIGEgcG9pbnQgVE8gYW5vdGhlciBwb2ludCwgdXNlIGFkZFRvXG4gKiBAcGFyYW0gYSBGaXJzdCBQb2ludCwgdW5tb2RpZmllZFxuICogQHBhcmFtIGIgU2Vjb25kIFBvaW50LCB1bm1vZGlmaWVkXG4gKi9cbmNvbnN0IGFkZCA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UoYS54ICsgYi54LCBhLnkgKyBiLnkpXG59XG5cbi8qKlxuICogQWRkIHRoZSB2YWx1ZSBvZiBQb2ludCBhIHRvIFBvaW50IGJcbiAqIEBwYXJhbSBhIFRoZSBwb2ludCB0aGF0IGNoYW5nZXMsIHdpbGwgaGF2ZSBiIGFkZGVkIHRvIGl0XG4gKiBAcGFyYW0gYiBUaGUgcG9pbnQgd2hvc2UgdmFsdWUgaXMgYWRkZWQgdG8gdGhlIG90aGVyLCBpdCBpcyB1bm1vZGlmaWVkIGl0c2VsZlxuICovXG5jb25zdCBhZGRUbyA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgYS54ICs9IGIueFxuICAgIGEueSArPSBiLnlcbiAgICByZXR1cm4gYVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWVzIG9mIGEgcG9pbnQgd2l0aCB4IGFuZCB5IHZhbHVlcywgcmV0dXJucyB0aGUgbm93IG1vZGlmaWVkIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgcG9pbnQgdG8gYmUgbW9kaWZpZWRcbiAqIEBwYXJhbSB4IG5ldyB4IHZhbHVlXG4gKiBAcGFyYW0geSBuZXcgeSB2YWx1ZVxuICovXG5jb25zdCBzZXQgPSAocG9pbnQ6IElQb2ludCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHBvaW50LnggPSB4XG4gICAgcG9pbnQueSA9IHlcbiAgICByZXR1cm4gcG9pbnRcbn1cblxuLyoqXG4gKiBDb3B5IGEgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBQb2ludCB0aGF0IHdpbGwgYmUgY29waWVkXG4gKi9cbmNvbnN0IGNvcHkgPSAocG9pbnQ6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UocG9pbnQueCwgcG9pbnQueSlcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIG1lYW50IHRvIHdvcmsgd2l0aCB0aGluZ3MgdGhhdCBoYXZlIHRoZSBJUG9pbnQgaW50ZXJmYWNlXG4gKi9cbmNvbnN0IFBvaW50ID0ge1xuICAgIG1ha2UsXG4gICAgYWRkLFxuICAgIGFkZFRvLFxuICAgIHNldCxcbiAgICBjb3B5XG59XG5cbmV4cG9ydCB7SVBvaW50LCBQb2ludH0iLCJpbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vcG9pbnQnXG5pbnRlcmZhY2UgSVJlY3QgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdFNpZGVzIHtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWN0YW5nbGVcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKiBAcGFyYW0gd2lkdGggXG4gKiBAcGFyYW0gaGVpZ2h0IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgdW5pdCB2YWx1ZSBvZiB0aGUgc2lkZXMgb2YgdGhlIHJlY3RhbmdsZSwgbGVmdCBhbmQgcmlnaHQgcmV0dXJuIHggY29vcmRpbmF0ZXMsIHRvcCBhbmQgYm90dG9tIGluY2x1ZGUgeSBjb29yZGluYXRlc1xuICogQHBhcmFtIHJlY3QgcmVjdGFuZ2xlIHVzZWRcbiAqL1xuY29uc3Qgc2lkZXMgPSAocmVjdDogSVJlY3QpOiBJUmVjdFNpZGVzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LngsXG4gICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBwb2ludDogTk9URTogVGhpcyBmaW5kcyB0aGUgSU5URUdFUiBjZW50ZXIsIGNvb3JkaW5hdGVzIGFyZSB0cnVuY2F0ZWRcbiAqIEBwYXJhbSByZWN0IFRoZSByZWN0YW5nbGUgd2UgYXJlIGZpbmRpbmcgdGhlIGNlbnRlciBvZlxuICovXG5jb25zdCBjZW50ZXIgPSAocmVjdDogSVJlY3QpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBQb2ludC5tYWtlKE1hdGguZmxvb3IocmVjdC54ICsgcmVjdC53aWR0aC8yKSwgTWF0aC5mbG9vcihyZWN0LnkgKyByZWN0LmhlaWdodC8yKSlcbn1cblxuLy8gT1BUSU1JWkU6IERvbid0IGNhbGwgc2lkZXMsIGp1c3QgdXNlIHRoZSByYXcgbnVtYmVycyBhbmQgYWRkaXRpb25cbmNvbnN0IGludGVyc2VjdHMgPSAoYTogSVJlY3QsIGI6IElSZWN0KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgYVNpZGVzID0gc2lkZXMoYSlcbiAgICBjb25zdCBiU2lkZXMgPSBzaWRlcyhiKVxuICAgIHJldHVybiBhU2lkZXMubGVmdCA8PSBiU2lkZXMucmlnaHQgJiYgYVNpZGVzLnJpZ2h0ID49IGJTaWRlcy5sZWZ0ICYmIFxuICAgICAgICBhU2lkZXMudG9wIDw9IGJTaWRlcy5ib3R0b20gJiYgYVNpZGVzLmJvdHRvbSA+PSBiU2lkZXMudG9wXG5cbiAgICAgICAgXG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHJlY3RhbmdsZXNcbiAqL1xuY29uc3QgUmVjdCA9IHtcbiAgICBtYWtlLFxuICAgIHNpZGVzLFxuICAgIGNlbnRlcixcbiAgICBpbnRlcnNlY3RzXG59XG5cbmV4cG9ydCB7SVJlY3QsIFJlY3R9XG4iLCIvLyBJIGd1ZXNzIGV2ZXJ5dGhpbmcgd291bGQgbmVlZCBpdCdzIG93biBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi4uLiBncm9zc1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBsb2NhdGlvbnMgb24gdGhlIGJvYXJkLCBldmVudHVhbGx5IHdlIHdpbGwgcHJvYmFibHkgbW92ZSB0aGlzIGludG8gaXRzIG93biBFQ1Mgc3lzdGVtXG4gKi9cbmNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGJsb2NrTW92ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgdGlsZSBibG9jayBsaW5lIG9mIHNpZ2h0XG4gICAgICovXG4gICAgYmxvY2tTaWdodDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIGlmKGJsb2NrU2lnaHQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja01vdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrU2lnaHRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRpbGUgfSJdLCJzb3VyY2VSb290IjoiIn0=