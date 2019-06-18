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
fovGrid.setEach(() => false);
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
const renderToGrid = (tileGrid, entities, renderGrid) => {
    tileGrid.forEach((tile, index) => {
        const renderCell = renderGrid.getI(index);
        renderCell.foreColor = COLORS.black;
        renderCell.character = ' ';
        if (tile.blockMove) {
            renderCell.backColor = COLORS.dark_wall;
        }
        else {
            renderCell.backColor = COLORS.dark_ground;
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
        // recompute fov here
        // we might move all of this into some offscreen 
        renderToGrid(tileGrid, entities, renderGrid);
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
 * A collection of functions meant to work with things that have the IPoint interface
 */
const Point = {
    make,
    add,
    addTo,
    set
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxn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QUssSUFBSSxNQUFNLENBQUMsSUFBSTtRQUM3RCxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRztBQUdsRSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLElBQUksR0FBRztJQUNULElBQUk7SUFDSixLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7Q0FDYjtBQUVtQjs7Ozs7Ozs7Ozs7OztBQ3RFcEI7QUFBQTtBQUFBLGdGQUFnRjtBQUVoRjs7R0FFRztBQUNILE1BQU0sSUFBSTtJQVlOOzs7O09BSUc7SUFDSCxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsU0FBa0IsRUFBRSxVQUFvQjtRQUN0RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBRyxVQUFVLEtBQUssU0FBUyxFQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1NBQy9CO0lBRUwsQ0FBQztDQUNKO0FBRWMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2FwcC50c1wiKTtcbiIsImltcG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IGZyb20gJy4va2V5Ym9hcmRNb25pdG9yJ1xuaW1wb3J0IHsgTW91c2VNb25pdG9yIH0gZnJvbSAnLi9tb3VzZU1vbml0b3InXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tICcuL2Fzc2V0SGVscGVyJ1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSBmcm9tICcuL2NhbnZhc1JlbmRlcmVyJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IFBVQlNVQiB9IGZyb20gJy4vcHViU3ViL3B1YlN1YidcbmltcG9ydCB7IE1hcEdlbmVyYXRvciB9IGZyb20gJy4vbWFwR2VuZXJhdG9yJ1xuaW1wb3J0IHsgUmVjdCwgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSURfTUFOQUdFUiB9IGZyb20gJy4vaWRNYW5hZ2VyJ1xuXG4vLyBzaXppbmdcbmNvbnN0IFRJTEVfV0lEVEggPSAxMFxuY29uc3QgVElMRV9IRUlHSFQgPSAxMFxuXG4vLyBUSEVTRSBBUkUgSU4gVElMRSBTSVpFU1xuY29uc3QgU0NSRUVOX1dJRFRIID0gODBcbmNvbnN0IFNDUkVFTl9IRUlHSFQgPSA1MFxuY29uc3QgTUFQX1dJRFRIID0gODBcbmNvbnN0IE1BUF9IRUlHSFQgPSA0NVxuXG5cblxuY29uc3QgQ09MT1JTID0ge1xuICAgICdibGFjayc6ICcjMDAwMDAwJyxcbiAgICAnZGFya193YWxsJzogJyMwMDAwNjQnLFxuICAgICdkYXJrX2dyb3VuZCc6ICcjMzIzMjk2JyxcbiAgICAnbGlnaHRfd2FsbCc6ICcjODI2RTMyJyxcbiAgICAnbGlnaHRfZ3JvdW5kJzogJyNDOEI0MzInXG59XG5cbmNvbnN0IHBsYXllcjogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjRkZGRkZGJylcbmNvbnN0IG5wYzogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjQkJBQTAwJylcblxuY29uc3QgZW50aXRpZXM6IEVudGl0eVtdID0gW3BsYXllcixucGNdXG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSCAqIFRJTEVfV0lEVEhcbmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUICogVElMRV9IRUlHSFRcblxuY29uc3Qga20gPSBuZXcgS2V5Ym9hcmRNb25pdG9yKCkuYXR0YWNoKGRvY3VtZW50KVxuY29uc3QgbW0gPSBuZXcgTW91c2VNb25pdG9yKCkuYXR0YWNoKGNhbnZhcylcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXJcblxuY29uc3QgcmVuZGVyR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJyAnLENPTE9SUy5ibGFjayxDT0xPUlMuZGFya19ncm91bmQpXG59KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUaWxlKHgseSwgdHJ1ZSlcbn0pXG5cbmNvbnN0IEZPVl9SQURJVVMgPSAxMFxubGV0IGZvdlJlY29tcHV0ZSA9IHRydWVcbmNvbnN0IGZvdkdyaWQ6IEdyaWQ8Ym9vbGVhbj4gPSBuZXcgR3JpZDxib29sZWFuPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG5mb3ZHcmlkLnNldEVhY2goKCk6IGJvb2xlYW4gPT4gZmFsc2UpXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAqIEBwYXJhbSBtaW4gXG4gKiBAcGFyYW0gbWF4IFxuICovXG5jb25zdCByYW5kaW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuY29uc3QgUk9PTV9NQVhfU0laRSA9IDEwXG5jb25zdCBST09NX01JTl9TSVpFID0gMTBcbmNvbnN0IE1BWF9ST09NUyA9IDMwXG5cbi8vIEdFVCBSRUFEWSBGT1IgU09NRSBNQVAgR0VORVJBVElPTiFcbmNvbnN0IHJvb21zOiBJUmVjdFtdID0gW11cbi8vIE1hcEdlbmVyYXRvci5jcmVhdGVSb29tKHRpbGVHcmlkLCBSZWN0Lm1ha2UoMSwxLDIwLDIwKSlcbmZvcihsZXQgciA9IDA7IHIgPCBNQVhfUk9PTVM7IHIrKyl7XG4gICAgY29uc3QgdyA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICBjb25zdCBoID0gcmFuZGludChST09NX01JTl9TSVpFLCBST09NX01BWF9TSVpFKVxuICAgIGNvbnN0IHggPSByYW5kaW50KDAsIE1BUF9XSURUSCAtIHcgLSAxKVxuICAgIGNvbnN0IHkgPSByYW5kaW50KDAsIE1BUF9IRUlHSFQgIC0gaCAtIDEpXG5cbiAgICBjb25zdCBuZXdSb29tID0gUmVjdC5tYWtlKHgseSx3LGgpXG4gICAgbGV0IGludGVyc2VjdHMgPSBmYWxzZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKFJlY3QuaW50ZXJzZWN0cyhuZXdSb29tLCByb29tc1tpXSkpe1xuICAgICAgICAgICAgaW50ZXJzZWN0cyA9IHRydWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoIWludGVyc2VjdHMpe1xuICAgICAgICBNYXBHZW5lcmF0b3IuY3JlYXRlUm9vbSh0aWxlR3JpZCwgbmV3Um9vbSlcbiAgICAgICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIobmV3Um9vbSlcbiAgICAgICAgaWYocm9vbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIFBvaW50LnNldChwbGF5ZXIsIGNlbnRlci54LCBjZW50ZXIueSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1tyb29tcy5sZW5ndGggLTFdKVxuICAgICAgICAgICAgaWYocmFuZGludCgwLDEpID09PSAxKXtcbiAgICAgICAgICAgICAgICBNYXBHZW5lcmF0b3IuY3JlYXRlSFR1bm5lbCh0aWxlR3JpZCwgbGFzdENlbnRlci54LCBjZW50ZXIueCwgbGFzdENlbnRlci55KVxuICAgICAgICAgICAgICAgIE1hcEdlbmVyYXRvci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBjZW50ZXIueClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE1hcEdlbmVyYXRvci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBsYXN0Q2VudGVyLngpXG4gICAgICAgICAgICAgICAgTWFwR2VuZXJhdG9yLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGNlbnRlci55KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcm9vbXMucHVzaChuZXdSb29tKVxuICAgIH1cbn1cbi8vIFNFVCBOUEMgTE9DQVRJT05cbntcbiAgICBjb25zdCBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1tyb29tcy5sZW5ndGggLSAxXSlcbiAgICBQb2ludC5zZXQobnBjLCBjZW50ZXIueCwgY2VudGVyLnkpXG59XG5cbi8vXG5jb25zdCByZW5kZXJUb0dyaWQgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGVudGl0aWVzOiBFbnRpdHlbXSwgcmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0aWxlOiBUaWxlLCBpbmRleCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJDZWxsID0gcmVuZGVyR3JpZC5nZXRJKGluZGV4KVxuICAgICAgICByZW5kZXJDZWxsLmZvcmVDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9ICcgJ1xuICAgICAgICBpZih0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX3dhbGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfZ3JvdW5kXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBpZighcmVuZGVyR3JpZC5pbkJvdW5kc1hZKGVudGl0eS54LCBlbnRpdHkueSkpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgckNlbGw6IElSZW5kZXJDZWxsID0gcmVuZGVyR3JpZC5nZXRYWShlbnRpdHkueCwgZW50aXR5LnkpXG4gICAgICAgIHJDZWxsLmZvcmVDb2xvciA9IGVudGl0eS5jb2xvclxuICAgICAgICByQ2VsbC5jaGFyYWN0ZXIgPSBlbnRpdHkuY2hhcmFjdGVyXG4gICAgfSlcbn1cblxuLy8gY2xlYW4gdGhpcyB1cFxuY29uc3QgbW92ZXM6IGFueVtdID0gW11cbmNvbnN0IE1vdmVQcm9jZXNzb3IgPSB7XG4gICAgLy8gY3VycmVudGx5IGp1c3QgdGllZCB0byB0aGUgcGxheWVyXG4gICAgbW92ZXNcbn1cblxuUFVCU1VCLnN1YnNjcmliZSgnbW92ZScsIChtc2cpOiB2b2lkID0+e1xuICAgIE1vdmVQcm9jZXNzb3IubW92ZXMucHVzaChtc2cpXG59KSBcblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oKGltYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICByZW5kZXJlci5pbml0KGNhbnZhcywgaW1hZ2UpXG4gICAgLy8gTG9vcFxuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKClcblxuICAgICAgICAvLyBMb29rIGF0IHBsYXllciBpbnB1dFxuICAgICAgICAvLyBaIGxldHMgdXMgYmUgaW4gWk9PTSBNT0RFISEhIVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSB0aGlzIGludG8gYSBcIm1vdmVcIiB0eXBlIGFjdGlvblxuICAgICAgICAvLyB3ZSdsbCBqdXN0IGRvIHRoZSBtb3ZlIHNlY3Rpb25cbiAgICAgICAgXG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgtMSwgMCl9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDEsIDApfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAtMSl9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAxKX0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIG1vdmVzXG4gICAgICAgIC8vIGV2ZW50dWFsbHkgd2UnbGwgY29tcG9uZW50aXplIHRoaXMgYmV0dGVyXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMuZm9yRWFjaCgobXNnOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtc2cuZGVsdGFcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbXNnLmlkXG4gICAgICAgICAgICBjb25zdCBtb3ZlciA9IGVudGl0aWVzLmZpbmQoKGUpOiBib29sZWFuID0+IGUuaWQgPT0gaWQpXG4gICAgICAgICAgICBpZighbW92ZXIpe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGlsZUdyaWQuaW5Cb3VuZHNYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVyLm1vdmUobW92ZS54LCBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgICAgIGlmKG1vdmVyLmlkID09PSBwbGF5ZXIuaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm92UmVjb21wdXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmxlbmd0aCA9IDBcblxuICAgICAgICAvLyByZWNvbXB1dGUgZm92IGhlcmVcblxuICAgICAgICAvLyB3ZSBtaWdodCBtb3ZlIGFsbCBvZiB0aGlzIGludG8gc29tZSBvZmZzY3JlZW4gXG4gICAgICAgIHJlbmRlclRvR3JpZCh0aWxlR3JpZCwgZW50aXRpZXMsIHJlbmRlckdyaWQpXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihyZW5kZXJHcmlkKVxuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDUwMClcbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG5cbn0pLmNhdGNoKChlcnI6IGFueSk6IHZvaWQgPT4gY29uc29sZS5sb2coZXJyKSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGUiLCJmdW5jdGlvbiBsb2FkSW1hZ2UodXJsOiBzdHJpbmcpOiBhbnl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpOiBhbnkgPT4gcmVzb2x2ZShpbWcpKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKTogYW55ID0+IHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIGltYWdlIGZyb20gJHt1cmx9YCkpKVxuICAgICAgICBpbWcuc3JjID0gdXJsXG4gICAgfSlcbn1cblxuZXhwb3J0IHtsb2FkSW1hZ2V9IiwiaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgQ09ERV9UT19SRUNUX0hBU0gsIGRyYXdTZWN0aW9uLCBjb2RlIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3IgdGFraW5nIGEgcmVuZGVyIGdyaWQgYW5kIGNvbnZlcnRpbmcgaXQgdG8gaW1hZ2VzXG4gKiBvbiB0aGUgY2FudmFzXG4gKi9cbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgdW5kZWZpbmVkO1xuICAgIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQpOiBDYW52YXNSZW5kZXJlcntcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgLy8gd2UgYXJlIGp1c3QgZm9yY2luZyB0aGlzIGZvciBub3csIHdlIHdpbGwgY2hlY2sgaWYgaXQncyBudWxsXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZihjdHggPT09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0IGNvbnRleHQgZnJvbSBjYW52YXMnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMuc3ByaXRlc2hlZXQgPSBzcHJpdGVzaGVldFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvLyBldmVudHVhbGx5IHdlIG5lZWQgdG8gcGFzcyBpbiB0aGUgZGltZW5zaW9ucyB3ZSBhcmUgcmVuZGVyaW5nIHRvIGFzIHdlbGxcbiAgICAvLyBmb3Igbm93IGl0J3MgZmluZVxuICAgIHJlbmRlcihyZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPik6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIHJlbmRlckdyaWQuZm9yRWFjaCgoXG4gICAgICAgICAgICBjZWxsOiBJUmVuZGVyQ2VsbCwgXG4gICAgICAgICAgICBpbmRleDogbnVtYmVyLCBcbiAgICAgICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmNSZWN0OiBJUmVjdCA9IENPREVfVE9fUkVDVF9IQVNIW2NvZGUoY2VsbC5jaGFyYWN0ZXIpXVxuICAgICAgICAgICAgZHJhd1NlY3Rpb24oY3R4LCB0aGlzLnNwcml0ZXNoZWV0LCBzcmNSZWN0LCBSZWN0Lm1ha2UoeCAqIDEwLCB5ICogMTAsIDEwLCAxMCksIGNlbGwuZm9yZUNvbG9yLCBjZWxsLmJhY2tDb2xvciApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IENhbnZhc1JlbmRlcmVyIH0iLCIvKipcbiAqIEEgZ2VuZXJpYyBvYmplY3QgdG8gcmVwcmVzZW50IGV2ZXJ5dGhpbmcgdGhhdCBpcyBub3QgdGhlIG1hcCBpdHNlbGZcbiAqIEZvciB0aGF0LCBzZWUgdGhlIFRpbGUgY2xhc3NcbiAqL1xuY2xhc3MgRW50aXR5IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB4OiBudW1iZXIseTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgY29sb3I6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhbiBlbnRpdHksIGN1cnJlbnRseSBkb2Vzbid0IGNoZWNrIGlmIGl0IGNhbiBvciBub3QsIGp1c3QgZG9lc1xuICAgICAqIEBwYXJhbSBkeCBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeCBkaXJlY3Rpb24gKGxlZnQgaXMgbmVnYXRpdmUsIHJpZ2h0IGlzIHBvc2l0aXZlKVxuICAgICAqIEBwYXJhbSBkeSBBbW91bnQgdG8gbW92ZSBpbiB0aGUgeSBkaXJlY3Rpb24gKHVwIGlzIG5lZ2F0aXZlLCBkb3duIGlzIHBvc2l0aXZlKVxuICAgICAqL1xuICAgIG1vdmUoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHZvaWR7XG4gICAgICAgIHRoaXMueCArPSBkeFxuICAgICAgICB0aGlzLnkgKz0gZHlcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVudGl0eSB9IiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBJUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBTZXRFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGFueTtcbn1cblxuaW50ZXJmYWNlIEZvckVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcbn1cblxuLy8gVE9ETzogZ2l2ZSBncmlkcyB0aGVpciBvd24geCBhbmQgeXMsIHRoYXQgd2F5IHRoZXkgY2FuIGltcGxlbWVudCBhbGwgdGhlIHBvaW50IGFuZCByZWN0IHN0dWZmXG4vKipcbiAqIEdyaWQgdG8gcmVwcmVzZW50IDJkIGNvbGxlY3Rpb25zLCBwbGVhc2UgZG9uJ3QgcmVzaXplIGl0IGFmdGVyIGNyZWF0aW5nIGl0XG4gKi9cbmNsYXNzIEdyaWQ8VD4gaW1wbGVtZW50cyBJUmVjdCB7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvZmZzZXQgYW5kIHNvIHdlIGNhbiB0cmVhdCBpdCBtb3JlIGxpa2UgYSByZWN0YW5nbGVcbiAgICAgKi9cbiAgICB5OiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBjZWxsczogVFtdO1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKXtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmNlbGxzLmxlbmd0aCA9IHdpZHRoICogaGVpZ2h0XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiBvZiB0aGUgZ3JpZCwgb3ZlcndyaXRlcyBwcmV2aW91cyBlbnRyaWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGVudHJ5LCBkb24ndCB1c2UgdGhpcyB1bmxlc3MgZW50cmllcyBhcmUgaW5kZXBlbmRlbnQgZnJvbSBlYWNoIG90aGVyXG4gICAgICogQHBhcmFtIGZuIHRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGNlbGwgaXRzZWxmIGFzIHRoZSBmaXJzdCBwcm9wZXJ0eSBhbmQgXG4gICAgICovXG4gICAgc2V0RWFjaChmbjogU2V0RWFjaEZuPFQ+KTogR3JpZDxUPntcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIHNvbWV0aGluZyBmb3IgZWFjaCBtZW1iZXIgb2YgYSBjZWxsLCBnb2luZyByb3cgYnkgcm93IGZyb20gbGVmdCB0byByaWdodFxuICAgICAqIEBwYXJhbSBmbiBHZXQgcGFzc2VkIHRoZSBjZWxsLCBpbmRleCwgeCBhbmQgeVxuICAgICAqL1xuICAgIGZvckVhY2goZm46IEZvckVhY2hGbjxUPik6IHZvaWR7XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgeCA9IGkgJSB0aGlzLndpZHRoXG4gICAgICAgICAgICB5ID0gKGkgLSB4KS90aGlzLndpZHRoXG4gICAgICAgICAgICBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHggeCBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICogQHBhcmFtIHkgeSBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICovXG4gICAgZ2V0WFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUICB7XG4gICAgICAgIGlmKCF0aGlzLmluQm91bmRzWFkoeCx5KSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdW5kYXJ5IGFjY2VzcyBpc3N1ZScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbeCArIHkgKiB0aGlzLndpZHRoXVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGdldFhZLiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBwb2ludCBjb250YWlucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2VsbCB5b3Ugd2FudCB0byBnZXRcbiAgICAgKi9cbiAgICBnZXRQKHBvaW50OiBJUG9pbnQpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WFkocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG5cbiAgICBpbkJvdW5kc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbntcbiAgICAgICAgaWYoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNlbGwgYmFzZWQgb2ZmIG9mIGFuIGluZGV4LCB1c3VhbGx5IGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGZvckVhY2ggbG9vcCBvZiBhIHNpbWlsYXJseSBzaXplZCBncmlkXG4gICAgICogTk9URSBiZSBjYXJlZnVsIHRoYXQgdGhlIG90aGVyIGdyaWQgaGFzIHRoZSBzYW1lIGRpbWVuc2lvbiB1bmxlc3MgeW91IHJlYWxseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBjZWxscywgbW9zdGx5IHRvIGJlIHVzZWQgd2l0aCBncmlkcyB0aGF0IGFyZSB3b3JraW5nIGFsb25nc2lkZSBhIGRpZmZlcmVudCBmb3JFYWNoIGxvb3BcbiAgICAgKi9cbiAgICBnZXRJKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaW5kZXhdXG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJjbGFzcyBJRE1hbmFnZXIge1xuICAgIHByaXZhdGUgbGFzdElkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sYXN0SWQgPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCBpZFxuICAgICAqL1xuICAgIG5leHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdElkKytcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSURfTUFOQUdFUlxuICovXG5jb25zdCBJRF9NQU5BR0VSID0gbmV3IElETWFuYWdlcigpXG5leHBvcnQge0lEX01BTkFHRVIsIElETWFuYWdlcn0iLCJpbnRlcmZhY2UgS2V5U3RhdGUgeyBcbiAgICBrZXk6IHN0cmluZztcbiAgICBpc0Rvd246IGJvb2xlYW47XG4gICAgaGFsZlN0ZXBzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG5jb25zdCBtYWtlS2V5U3RhdGUgPSAoa2V5OiBzdHJpbmcsIGlzRG93bjogYm9vbGVhbiA9IGZhbHNlLCBoYWxmU3RlcHM6IG51bWJlciA9IDApOiBLZXlTdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBpc0Rvd24sXG4gICAgICAgIGhhbGZTdGVwc1xuICAgIH1cbn1cblxuY2xhc3MgS2V5Ym9hcmRNb25pdG9yIHtcbiAgICBrZXlIYXNoOiBIYXNoPEtleVN0YXRlPjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmtleUhhc2ggPSB7fVxuICAgIH1cbiAgICAvLyBBdHRhY2ggdG8gdGhlIERPTSwgdXN1YWxseSB0aGUgZG9jdW1lbnQgYXMgYSB3aG9sZSwgYnV0IHlvdSBjYW4gbWFrZSBpdCBtb3JlIHNwZWNpZmljIGlmIHlvdSB3YW50XG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IEtleWJvYXJkTW9uaXRvciB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKCFrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZihrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBnZXRLZXlTdGF0ZShrZXk6IHN0cmluZyk6IEtleVN0YXRle1xuICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmtleUhhc2hba2V5XVxuICAgIH1cbiAgICByZXNldFN0ZXBzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5rZXlIYXNoKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5c1tpXV0uaGFsZlN0ZXBzID0gMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHN0YXRpYyBtZXRob2RzIGZvciBoZWxwaW5nIHRvIG1hbmlwdWxhdGUgbWFwc1xuICovXG5jbGFzcyBNYXBHZW5lcmF0b3Ige1xuICAgIC8vIFRPRE86IE1heWJlIGNvbWUgdXAgd2l0aCBhIGJldHRlciBuYW1lXG4gICAgLyoqXG4gICAgICogUGxhY2UgYSByb29tIGluc2lkZSBhIGdyb3VwIG9mIHRpbGVzXG4gICAgICogQHBhcmFtIHRpbGVHcmlkIHRoZSBncmlkIG9mIHRpbGVzIHRvIGFmZmVjdFxuICAgICAqIEBwYXJhbSByb29tIHRoZSByb29tIHNlY3Rpb24gdGhhdCB3ZSB3aWxsIG9wZW4gdXBcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUm9vbSh0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbTogSVJlY3QpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogQm91bmRzIGNoZWNrIG9yIHNvbWV0aGluZywgcmlnaHQgbm93IHRlcnJpYmxlIHRoaW5ncyBjYW4gaGFwcGVuXG4gICAgICAgIGNvbnN0IHsgbGVmdCxyaWdodCx0b3AsYm90dG9tfSA9IFJlY3Quc2lkZXMocm9vbSlcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdG9wIG9uZSBlYXJseSBiZWNhdXNlIG9mIGhvdyB3ZSB3b3JrIHdpdGggYSBncmlkXG4gICAgICAgIC8vIHdlIHdpbGwgYWxzbyBpbmNsdWRlIGEgbWFyZ2luIG9mIG9uZSBvbiBhbGwgc2lkZXhcbiAgICAgICAgZm9yKGxldCB5ID0gdG9wICsgMTsgeSA8IGJvdHRvbSAtIDE7IHkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHggPSBsZWZ0ICsgMTsgeCA8IHJpZ2h0IC0gMTsgeCsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCwgeSlcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVIVHVubmVsKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCB4MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gc3dhcCB0aGVtIGFzIG5lY2Vzc2FyeVxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih4MSwgeDIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHgxLCB4MilcbiAgICAgICAgZm9yKGxldCB4ID0gbWluOyB4IDw9IG1heDsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVZUdW5uZWwodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHkxOiBudW1iZXIsIHkyOiBudW1iZXIsIHg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih5MSwgeTIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHkxLCB5MilcbiAgICAgICAgZm9yKGxldCB5ID0gbWluOyB5IDw9IG1heDsgeSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCB7IE1hcEdlbmVyYXRvciB9IiwiLy8gTGV0J3MgZ28gYWhlYWQgYW5kIGNyZWF0ZSB0aGUgUG9pbnQgaW50ZXJmYWNlIGhlcmUsIHdlJ2xsIGV4cG9ydCBpdCBmb3IgdXNlIGxhdGVyIGluIHRoZSBwcm9qZWN0XG5cbmltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbi8qKlxuICogQ2xhc3MgdG8gaGVscCBtb25pdG9yIHRoaW5ncyB0aGF0IGhhdmUgaGFwcGVuZWQgdG8gdGhlIG1vdXNlIHNpbmNlIGxhc3QgdGltZSB0aGF0IHdlIGxvb2tlZFxuICovXG5cbmludGVyZmFjZSBIYWxmQ2xpY2sge1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgaXNEb3duOiBib29sZWFuO1xufVxuXG5jbGFzcyBNb3VzZU1vbml0b3Ige1xuICAgIC8qKlxuICAgICAqIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW91c2Ugb3ZlciB0aGUgYXR0YWNoZWQgZWxlbW50XG4gICAgICovXG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbW91c2UgaGFzIG1vdmVkIHNpbmNlIGxhc3QgdGltZSB3ZSBsb29rZWRcbiAgICAgKi9cbiAgICBoYXNNb3ZlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiB0cnVlIGlmIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgaW5zaWRlIHRoZSBjb250YWluZXIgXG4gICAgICovXG4gICAgaW5Db250YWluZXI6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBpcyB0aGUgbW91c2UgYnV0dG9uIGRvd24gKGN1cnJlbnRseSBvbmx5IHRyYWNrcyBsZWZ0KVxuICAgICAqL1xuICAgIGlzRG93bjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIElmIGEgZnVsbCBjbGljayBpcyB1cCBhbmQgZG93biwgdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdXBzIGFuZCBkb3ducywgdXNlZnVsIGZvciBkcmFncyBvciBvdGhlciB0aGluZ3MgdGhhdCBtaWdodCBoYXZlIGhhcHBlbmVkIGluIHRoZSBtZWFudGltZVxuICAgICAqL1xuICAgIGhhbGZDbGlja3M6IEhhbGZDbGlja1tdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBQb2ludC5tYWtlKDAsMClcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcyA9IFtdXG4gICAgICAgIC8vIFRPRE86IEFkZCBjbGljayB0cmFja2luZywgZGVwZW5kcyBvbiBob3cgcXVpY2tseSB3ZSBhcmUgcG9sbGluZ1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggdG8gdGhlIHNwZWNpZmljIGVsZW1lbnQgeW91IHdhbnQgdG8gbW9uaXRvciBtb3VzZSByZWxhdGVkIGV2ZW50cyB0b1xuICAgICAqIEBwYXJhbSBlbGVtZW50IHRoZSBwYXJ0aWN1bGFyIG1vdXNlIGV2ZW50XG4gICAgICovXG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IE1vdXNlTW9uaXRvciB7XG4gICAgICAgIC8vIFRPRE86IFdlJ2xsIHJlZ2lzdGVyIGNsaWNrIGhpc3RvcnkgaW4gdGhlIGZ1dHVyZSwgZm9yIG5vdyB3ZSBhcmUganVzdCBkb2luZyBtb3VzZSBvdmVyIGF0IHByZXNlbnRcbiAgICAgICAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIFBvaW50LnNldCh0aGlzLnBvc2l0aW9uLCBlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICB9XG4gICAgICAgIC8vIG1vdXNlIGVudGVycyBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBtb3ZlcyB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcblxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBleGl0cyB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBwYXkgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICAgICAgaWYoZS5idXR0b24gIT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQubWFrZShlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLnB1c2goeyBwb3NpdGlvbiwgaXNEb3duOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGJ1dHRvbiBpcyByYWlzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBwYXkgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICAgICAgaWYoZS5idXR0b24gIT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQubWFrZShlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLnB1c2goeyBwb3NpdGlvbiwgaXNEb3duOiBmYWxzZSB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIG1hcmsgdGhhdCB3ZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIGV2ZW50cyBzaW5jZSBvdXIgbGFzdCBwb2xsIG9mIHN0YXRlIGFuZCBpdCBjYW4gYmUgcmVzZXRcbiAgICAgKi9cbiAgICByZXNldCgpOiB2b2lke1xuICAgICAgICAvLyBieSBkZWZhdWx0IHdlIGhhdmVuJ3QgbW92ZWQgYmVmb3JlXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICAvLyBjbGVhciBvdXQgdGhlIGNsaWNrc1xuICAgICAgICB0aGlzLmhhbGZDbGlja3MubGVuZ3RoID0gMFxuICAgIH1cbn1cblxuZXhwb3J0IHsgTW91c2VNb25pdG9yIH0iLCJsZXQgX2lkID0gMFxuY29uc3QgbmV4dElkID0gKCk6IG51bWJlciA9PiBfaWQrK1xuXG4vLyBUT0RPOiBNYWtlIG1lc3NhZ2VzIGVudW1zP1xuXG4vLyBUT0RPOiBNYWtlIGFuIGludGVyZmFjZSBmb3IgdGhlIHN1YnNjcmliZXIgZnVuY3Rpb25cbnR5cGUgU3Vic2NyaWJlckZ1bmN0aW9uID0gKG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZykgPT4gdm9pZFxuXG5pbnRlcmZhY2UgU3Vic2NyaWJlck5vZGUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbjtcbiAgICBwcmlvcml0eTogbnVtYmVyO1xuICAgIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbn1cblxuXG5cbmNvbnN0IG1ha2VTdWJOb2RlID0gKHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwLCBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGwgPSBudWxsKTogU3Vic2NyaWJlck5vZGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBuZXh0SWQoKSxcbiAgICAgICAgc3ViRm4sXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBuZXh0XG4gICAgfVxufVxuXG4vLyBUT0RPOiA/PyBNYWtlIGl0IHNvIGEgc3Vic2NyaWJlciBsaXN0IGNvdWxkIGJlIGRlYWZlbmVkL2xpc3Rlbj9cblxuLyoqXG4gKiBBIGdyb3VwIG9mIGZ1bmN0aW9ucywgc29ydGVkIGJ5IHByaW9yaXR5LCB3aGljaCB3aWxsIGJlIGNhbGxlZCBzZXF1ZW50aWFsbHkgd2hlbiB0aGUgbGlzdCBpcyBub3RpZmllZCBvZiBhIG5ldyBtZXNzYWdlXG4gKi9cbmNsYXNzIFByaW9yaXR5U3Vic2NyaWJlckxpc3Qge1xuICAgIHJvb3Q6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICB0YWlsOiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgbGVuZ3RoOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbFxuICAgICAgICB0aGlzLnRhaWwgPSBudWxsXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIG1lc3NhZ2VzIHRoYXQgZ2V0IHNlbnQgdG8gdGhpcyBsaXN0IHZpYSB0aGUgbm90aWZ5IGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBtZXNzYWdlIG9iamVjdCB3aGVuZXZlciB0aGlzIHN1YnNjcmliZXIgbGlzdCBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIGhpZ2hlciB0aGUgcHJpb3JpdHksIHRoZSBlYXJsaWVyIGl0IHdpbGwgcnVuLCBpZiBpdCBoYXMgdGhlIHNhbWUgcHJpb3JpdHkgdGhlIG9uZSB0aGF0IHdhcyBhZGRlZCBmaXJzdCB3aWxsIGZpcmUgZmlyc3RcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXJ7XG4gICAgICAgIC8vIENhc2UgIzEgRW1wdHkgU3Vic2NyaWJlciBMaXN0XG4gICAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSlcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMucm9vdFxuICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5pZFxuICAgICAgICB9IFxuICAgICAgICAvLyBDYXNlICMyIFdlIGFscmVhZHkgaGF2ZSBzb21lIHN1YnNjcmliZXJzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdCAvLyB3ZSBrbm93IGl0IHNob3VsZCBiZSBhIFN1YnNjcmliZXIgTm9kZSBhbmQgbm90IG51bGwsIGJlY2F1c2Ugd2UgYXJlIGhlcmVcblxuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlLCBuZXcgcm9vdFxuICAgICAgICAgICAgaWYocHJpb3JpdHkgPCB0cmF2ZWxsZXIhLnByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRoaXMucm9vdClcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm9ybWFsIGNhc2Ugd2UgaGF2ZSBvdGhlciB0aGluZ3MgdG8gd29ycnkgYWJvdXRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlKHRyYXZlbGxlciAmJiB0cmF2ZWxsZXIubmV4dCAmJiB0cmF2ZWxsZXIubmV4dC5wcmlvcml0eSA+PSBwcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgZWl0aGVyIGZvdW5kIGEgbm9kZSB3aXRoIGxvd2VyIHByaW9yaXR5IHRoYW4gdXMgb3Igd2UgaGF2ZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAgICAgICAgICAgdHJhdmVsbGVyIS5uZXh0ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0cmF2ZWxsZXIhLm5leHQpXG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0cmF2ZWxsZXJzIHdhcyB0aGUgb2xkIHRhaWxcbiAgICAgICAgICAgICAgICBpZih0cmF2ZWxsZXIgPT09IHRoaXMudGFpbCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgbmV4dCBvbmUgaXMgdGhlIG5ldyB0YWlsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IHRyYXZlbGxlciEubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbGxlciEubmV4dC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1vc3QgaW1wb3JhbnQgaW5mb3JtYXRpb24gZm9yIHRoZSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB0b3BpYyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggcHVic3ViIHRvIHJlbWluZCB0aGUgc3Vic2NyaWJlciBvZiB0aGUgc3BlY2lmaWMgdG9waWMgb3Igc3VidG9waWNcbiAgICAgKi9cbiAgICBub3RpZnkobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3RcbiAgICAgICAgd2hpbGUodHJhdmVsbGVyICE9IG51bGwpe1xuICAgICAgICAgICAgdHJhdmVsbGVyLnN1YkZuKG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0iLCJpbXBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSBmcm9tICcuL3ByaW9yaXR5U3Vic2NyaWJlckxpc3QnXG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vKipcbiAqIFB1YnN1YiBpcyBhIHRvcGljLWJhc2VkIG9ic2VydmVyIHBhdHRlcm4gaW1wbGVtZW50YXRpb24gZGVzaWduZWQgdG8gYXZvaWQgdGlnaHQgY291cGxpbmcgb2YgY29tcG9uZW50c1xuICovXG5jbGFzcyBQdWJTdWIge1xuICAgIHRvcGljczogSGFzaDxQcmlvcml0eVN1YnNjcmliZXJMaXN0PjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnRvcGljcyA9IHt9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGEgbWVzc2FnZSB0byBhbGwgc3Vic2NyaWJlcnMgdG8gYSB0b3BpY1xuICAgICAqIEBwYXJhbSB0b3BpYyBUb3BpYyB0byB1c2UsIGlmIG5vYm9keSBpcyBzdWJzY3JpYmVkIHRvIGl0LCBub3RoaW5nIGhhcHBlbnNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgYWN0dWFsIG1lc3NhZ2UgdG8gc2VuZCwgdGhpcyBjb3VsZCBiZSBhbnl0aGluZywgYnV0IGl0J3MgYSBzaW5nbGUgdGhpbmdcbiAgICAgKi9cbiAgICBwdWJsaXNoKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdLm5vdGlmeShtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBzcGVjaWZpYyB0b3BpYyB3aXRoIGEgZ2l2ZW4gcHJpb3JpdHksIHJldHVybnMgYW4gaWQgdGhhdCB5b3UnbGwgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB0b3BpYyB0aGUgc3BlY2lmaWMgdG9waWMgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIGZuIHRoZSBmdW5jdGlvbiB0byByZWNpZXZlIHRoZSBzcGVjaWZpYyBtZXNzYWdlIGFuZCB0b3BpYyBiZWluZyBicm9hZGNhc3RlZCB0b1xuICAgICAqIEBwYXJhbSBwcmlvcml0eSB0aGUgcHJpb3JpdHkgb2YgdGhlIGZ1bmN0aW9uIHRvIHN1YnNjcmliZSB0bywgaGlnaGVyIG51bWJlcnMgcnVuIGZpcnN0LCB0aGUgZGVmYXVsdCBpcyB6ZXJvLCBuZWdhdGl2ZSBudW1iZXJzIGFyZSBhbGxvd2VkXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcsIGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgaWYoIXRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10gPSBuZXcgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9waWNzW3RvcGljXS5zdWJzY3JpYmUoZm4sIHByaW9yaXR5KVxuICAgIH1cbn1cbi8vIE9VUiBVTklWRVJTQUwgREVGQVVMVCBQVUJTVUJcbmNvbnN0IFBVQlNVQiA9IG5ldyBQdWJTdWIoKVxuZXhwb3J0IHtQVUJTVUIsIFB1YlN1Yn0iLCIvKipcbiAqIEludGVyZmFjZSBmb3IgUmVuZGVyIENlbGxcbiAqL1xuaW50ZXJmYWNlIElSZW5kZXJDZWxsIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nOyAvLyB0aGlzIHNob3VsZCBvbmx5IGJlIHN0cmluZyBvZiBsZW5ndGggMVxuICAgIGZvcmVDb2xvcjogc3RyaW5nO1xuICAgIGJhY2tDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgseSwgY2hhcmFjdGVyLCBmb3JlQ29sb3IsIGJhY2tDb2xvclxuICAgIH1cbn1cblxuY29uc3QgUmVuZGVyQ2VsbCA9IHtcbiAgICBtYWtlXG59XG5cbmV4cG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsfSIsImltcG9ydCB7SVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgSGFzaFN0cjxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmludGVyZmFjZSBIYXNoTnVtPFQ+IHtcbiAgICBba2V5OiBudW1iZXJdOiBUO1xufVxuXG5jb25zdCBjb2RlID0gKGNoYXI6IHN0cmluZyk6IG51bWJlciA9PiBjaGFyLmNoYXJDb2RlQXQoMClcbmNvbnN0IENIQVJBQ1RFUl9IRUxQRVI6IEhhc2hTdHI8c3RyaW5nPiA9IHtcbiAgICBWRVJUSUNBTF9MSU5FOiAn4pSCJyxcbiAgICBIT1JJWk9OVEFMX0xJTkU6ICfilIAnLFxuICAgIENST1NTX0xJTkVTOiAn4pS8JyxcbiAgICBUX0xFRlQ6ICfilKQnLFxuICAgIFRfVVA6ICfilLQnLFxuICAgIFRfUklHSFQ6ICfilJwnLFxuICAgIFRfRE9XTjogJ+KUrCcsXG4gICAgVE9QX1JJR0hUOiAn4pSUJyxcbiAgICBCT1RUT01fUklHSFQ6ICfilIwnLFxuICAgIEJPVFRPTF9MRUZUOiAn4pSQJyxcbiAgICBUT1BfTEVGVDogJ+KUmCdcbn1cblxuY29uc3QgVElMRV9XSURUSCA9IDEwLCBUSUxFX0hFSUdIVCA9IDEwXG5cbmNvbnN0IENPREVfVE9fUkVDVF9IQVNIOiBIYXNoTnVtPElSZWN0PiA9IHt9XG5jb25zdCBzcGFjZUNvZGUgPSAgIGNvZGUoJyAnKVxuY29uc3QgYXRDb2RlID0gICAgICBjb2RlKCdAJylcbmNvbnN0IGFDb2RlID0gICAgICAgY29kZSgnYScpXG5jb25zdCB6Q29kZSA9ICAgICAgIGNvZGUoJ3onKVxuY29uc3QgQUNvZGUgPSAgICAgICBjb2RlKCdBJylcbmNvbnN0IFpDb2RlID0gICAgICAgY29kZSgnWicpXG5cblxuY29uc3QgY3RyaEhlbHBlciA9IChjb2RlOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbY29kZV0gPSBSZWN0Lm1ha2UoeCx5LCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cblxuLy8gV2Ugd2lsbCBmaWxsIGluIHRoZSBvdGhlciBjaGFyYWN0ZXJzIGFzIG5lY2Vzc2FyeVxuQ09ERV9UT19SRUNUX0hBU0hbc3BhY2VDb2RlXSA9IFJlY3QubWFrZSgwLCAwLCAxMCwgMTApXG5DT0RFX1RPX1JFQ1RfSEFTSFthdENvZGVdID0gUmVjdC5tYWtlKDAsIDEwLCAxMCwgMTApXG5mb3IobGV0IGkgPSBBQ29kZTsgaSA8PSBaQ29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIEFDb2RlKSAqIDEwLCAzMCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5mb3IobGV0IGkgPSBhQ29kZTsgaSA8PSB6Q29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIGFDb2RlKSAqIDEwLCA0MCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG4vLyBmb3IgYnJldml0aWVzIHNha2VcbmNvbnN0IENIID0gQ0hBUkFDVEVSX0hFTFBFUlxuY3RyaEhlbHBlcihjb2RlKENILlZFUlRJQ0FMX0xJTkUpLCAxNDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guSE9SSVpPTlRBTF9MSU5FKSwgMTUwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkNST1NTX0xJTkVTKSwgMTYwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfTEVGVCksIDE3MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1VQKSwgMTgwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfUklHSFQpLCAxOTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9ET1dOKSwgMjAwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9SSUdIVCksIDIxMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT01fUklHSFQpLCAyMjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9MX0xFRlQpLCAyMzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX0xFRlQpLCAyNDAsMTApXG5cblxuZnVuY3Rpb24gZHJhd1NlY3Rpb24oY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHRpbGVzaGVldDogYW55LCBzcmNSZWN0OiBJUmVjdCwgZGVzdFJlY3Q6IElSZWN0LCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiB2b2lke1xuICAgIGN0eC5jbGVhclJlY3QoZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZHJhd0ltYWdlKHRpbGVzaGVldCwgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qud2lkdGgsIHNyY1JlY3QuaGVpZ2h0LCBkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAneG9yJ1xuICAgIGN0eC5maWxsU3R5bGU9Zm9yZUNvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3ZlcidcbiAgICBjdHguZmlsbFN0eWxlPWJhY2tDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcidcbn1cblxuZXhwb3J0ICB7IENPREVfVE9fUkVDVF9IQVNILCBDSEFSQUNURVJfSEVMUEVSLCBjb2RlLCBkcmF3U2VjdGlvbiB9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmtpbmcgd2l0aCBhIDJEIFBvaW50XG4gKi9cbmludGVyZmFjZSBJUG9pbnQgeyAgXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgUG9pbnRcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiB7eCx5fVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgcG9pbnQgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGFkZGluZyBib3RoIG9mIHRoZW0gdG9nZXRoZXIsIGlmIHlvdSB3YW50IHRvIGFkZCBhIHBvaW50IFRPIGFub3RoZXIgcG9pbnQsIHVzZSBhZGRUb1xuICogQHBhcmFtIGEgRmlyc3QgUG9pbnQsIHVubW9kaWZpZWRcbiAqIEBwYXJhbSBiIFNlY29uZCBQb2ludCwgdW5tb2RpZmllZFxuICovXG5jb25zdCBhZGQgPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKGEueCArIGIueCwgYS55ICsgYi55KVxufVxuXG4vKipcbiAqIEFkZCB0aGUgdmFsdWUgb2YgUG9pbnQgYSB0byBQb2ludCBiXG4gKiBAcGFyYW0gYSBUaGUgcG9pbnQgdGhhdCBjaGFuZ2VzLCB3aWxsIGhhdmUgYiBhZGRlZCB0byBpdFxuICogQHBhcmFtIGIgVGhlIHBvaW50IHdob3NlIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBvdGhlciwgaXQgaXMgdW5tb2RpZmllZCBpdHNlbGZcbiAqL1xuY29uc3QgYWRkVG8gPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIGEueCArPSBiLnhcbiAgICBhLnkgKz0gYi55XG4gICAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlcyBvZiBhIHBvaW50IHdpdGggeCBhbmQgeSB2YWx1ZXMsIHJldHVybnMgdGhlIG5vdyBtb2RpZmllZCBwb2ludFxuICogQHBhcmFtIHBvaW50IHBvaW50IHRvIGJlIG1vZGlmaWVkXG4gKiBAcGFyYW0geCBuZXcgeCB2YWx1ZVxuICogQHBhcmFtIHkgbmV3IHkgdmFsdWVcbiAqL1xuY29uc3Qgc2V0ID0gKHBvaW50OiBJUG9pbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICBwb2ludC54ID0geFxuICAgIHBvaW50LnkgPSB5XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBtZWFudCB0byB3b3JrIHdpdGggdGhpbmdzIHRoYXQgaGF2ZSB0aGUgSVBvaW50IGludGVyZmFjZVxuICovXG5jb25zdCBQb2ludCA9IHtcbiAgICBtYWtlLFxuICAgIGFkZCxcbiAgICBhZGRUbyxcbiAgICBzZXRcbn1cblxuZXhwb3J0IHtJUG9pbnQsIFBvaW50fSIsImltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9wb2ludCdcbmludGVyZmFjZSBJUmVjdCBleHRlbmRzIElQb2ludCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0U2lkZXMge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY3RhbmdsZVxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqIEBwYXJhbSB3aWR0aCBcbiAqIEBwYXJhbSBoZWlnaHQgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSB1bml0IHZhbHVlIG9mIHRoZSBzaWRlcyBvZiB0aGUgcmVjdGFuZ2xlLCBsZWZ0IGFuZCByaWdodCByZXR1cm4geCBjb29yZGluYXRlcywgdG9wIGFuZCBib3R0b20gaW5jbHVkZSB5IGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gcmVjdCByZWN0YW5nbGUgdXNlZFxuICovXG5jb25zdCBzaWRlcyA9IChyZWN0OiBJUmVjdCk6IElSZWN0U2lkZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIHBvaW50OiBOT1RFOiBUaGlzIGZpbmRzIHRoZSBJTlRFR0VSIGNlbnRlciwgY29vcmRpbmF0ZXMgYXJlIHRydW5jYXRlZFxuICogQHBhcmFtIHJlY3QgVGhlIHJlY3RhbmdsZSB3ZSBhcmUgZmluZGluZyB0aGUgY2VudGVyIG9mXG4gKi9cbmNvbnN0IGNlbnRlciA9IChyZWN0OiBJUmVjdCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIFBvaW50Lm1ha2UoTWF0aC5mbG9vcihyZWN0LnggKyByZWN0LndpZHRoLzIpLCBNYXRoLmZsb29yKHJlY3QueSArIHJlY3QuaGVpZ2h0LzIpKVxufVxuXG4vLyBPUFRJTUlaRTogRG9uJ3QgY2FsbCBzaWRlcywganVzdCB1c2UgdGhlIHJhdyBudW1iZXJzIGFuZCBhZGRpdGlvblxuY29uc3QgaW50ZXJzZWN0cyA9IChhOiBJUmVjdCwgYjogSVJlY3QpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBhU2lkZXMgPSBzaWRlcyhhKVxuICAgIGNvbnN0IGJTaWRlcyA9IHNpZGVzKGIpXG4gICAgcmV0dXJuIGFTaWRlcy5sZWZ0IDw9IGJTaWRlcy5yaWdodCAmJiBhU2lkZXMucmlnaHQgPj0gYlNpZGVzLmxlZnQgJiYgXG4gICAgICAgIGFTaWRlcy50b3AgPD0gYlNpZGVzLmJvdHRvbSAmJiBhU2lkZXMuYm90dG9tID49IGJTaWRlcy50b3BcblxuICAgICAgICBcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmlwdWxhdGUgcmVjdGFuZ2xlc1xuICovXG5jb25zdCBSZWN0ID0ge1xuICAgIG1ha2UsXG4gICAgc2lkZXMsXG4gICAgY2VudGVyLFxuICAgIGludGVyc2VjdHNcbn1cblxuZXhwb3J0IHtJUmVjdCwgUmVjdH1cbiIsIi8vIEkgZ3Vlc3MgZXZlcnl0aGluZyB3b3VsZCBuZWVkIGl0J3Mgb3duIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLi4uIGdyb3NzXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGxvY2F0aW9ucyBvbiB0aGUgYm9hcmQsIGV2ZW50dWFsbHkgd2Ugd2lsbCBwcm9iYWJseSBtb3ZlIHRoaXMgaW50byBpdHMgb3duIEVDUyBzeXN0ZW1cbiAqL1xuY2xhc3MgVGlsZSB7XG4gICAgLyoqXG4gICAgICogQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgYmxvY2tNb3ZlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERvZXMgdGhpcyB0aWxlIGJsb2NrIGxpbmUgb2Ygc2lnaHRcbiAgICAgKi9cbiAgICBibG9ja1NpZ2h0OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tNb3ZlIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tTaWdodCBvcHRpb25hbCwgd2lsbCBkZWZhdWx0IHRvIHdoYXRldmVyIGJsb2NrTW92ZSBpcyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgYmxvY2tNb3ZlOiBib29sZWFuLCBibG9ja1NpZ2h0PzogYm9vbGVhbiApe1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5ibG9ja01vdmUgPSBibG9ja01vdmVcbiAgICAgICAgaWYoYmxvY2tTaWdodCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrTW92ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tTaWdodFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgVGlsZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==