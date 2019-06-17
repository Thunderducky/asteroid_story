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
    'dark_ground': '#323296'
};
const player = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](3, 4, '@', '#FFFFFF');
const npc = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](3, 4, '@', '#FFFF00');
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
    return new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, false);
});
tileGrid.getXY(30, 22).blockMove = true;
tileGrid.getXY(30, 22).blockSight = true;
tileGrid.getXY(31, 22).blockMove = true;
tileGrid.getXY(31, 22).blockSight = true;
tileGrid.getXY(32, 22).blockMove = true;
tileGrid.getXY(32, 22).blockSight = true;
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
_pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].subscribe('move', (delta) => {
    MoveProcessor.moves.push(delta);
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
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(-1, 0));
        }
        if (km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(1, 0));
        }
        if (km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(0, -1));
        }
        if (km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)) {
            _pubSub_pubSub__WEBPACK_IMPORTED_MODULE_9__["PUBSUB"].publish('move', _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(0, 1));
        }
        // process moves
        MoveProcessor.moves.forEach((move) => {
            if (tileGrid.inBoundsXY(player.x + move.x, player.y + move.y)) {
                const tile = tileGrid.getXY(player.x + move.x, player.y + move.y);
                if (!tile.blockMove) {
                    player.move(move.x, move.y);
                }
            }
        });
        MoveProcessor.moves.length = 0;
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
    constructor(x, y, character, color) {
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
// TODO: FIGURE OUT HOW TO CREATE A GENERIC TYPE FOR THIS, CAUSE TYPES WOULD PROBABLY BE GOOD FOR THIS
/**
 * Grid to represent 2d collections, please don't resize it after creating it
 */
class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.cells.length = width * height;
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
    // TODO: structure this
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
     * @param y
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
 * An object used to create and manipulate rectangles
 */
const Rect = {
    make
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21vdXNlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wcmlvcml0eVN1YnNjcmliZXJMaXN0LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcHViU3ViL3B1YlN1Yi50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JlbmRlckNlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7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QUVjIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IE1vdXNlTW9uaXRvciB9IGZyb20gJy4vbW91c2VNb25pdG9yJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSAnLi9hc3NldEhlbHBlcidcbmltcG9ydCB7IENhbnZhc1JlbmRlcmVyIH0gZnJvbSAnLi9jYW52YXNSZW5kZXJlcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5pbXBvcnQgeyBQVUJTVUIgfSBmcm9tICcuL3B1YlN1Yi9wdWJTdWInXG5cbi8vIHNpemluZ1xuY29uc3QgVElMRV9XSURUSCA9IDEwXG5jb25zdCBUSUxFX0hFSUdIVCA9IDEwXG5cbi8vIFRIRVNFIEFSRSBJTiBUSUxFIFNJWkVTXG5jb25zdCBTQ1JFRU5fV0lEVEggPSA4MFxuY29uc3QgU0NSRUVOX0hFSUdIVCA9IDUwXG5jb25zdCBNQVBfV0lEVEggPSA4MFxuY29uc3QgTUFQX0hFSUdIVCA9IDQ1XG5cbmNvbnN0IENPTE9SUyA9IHtcbiAgICAnYmxhY2snOiAnIzAwMDAwMCcsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMDAwMDY0JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzMyMzI5Nidcbn1cblxuY29uc3QgcGxheWVyOiBFbnRpdHkgPSBuZXcgRW50aXR5KDMsNCwgJ0AnLCAnI0ZGRkZGRicpXG5jb25zdCBucGM6IEVudGl0eSA9IG5ldyBFbnRpdHkoMyw0LCAnQCcsICcjRkZGRjAwJylcblxuY29uc3QgZW50aXRpZXM6IEVudGl0eVtdID0gW3BsYXllcixucGNdXG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbmNhbnZhcy53aWR0aCA9IFNDUkVFTl9XSURUSCAqIFRJTEVfV0lEVEhcbmNhbnZhcy5oZWlnaHQgPSBTQ1JFRU5fSEVJR0hUICogVElMRV9IRUlHSFRcblxuY29uc3Qga20gPSBuZXcgS2V5Ym9hcmRNb25pdG9yKCkuYXR0YWNoKGRvY3VtZW50KVxuY29uc3QgbW0gPSBuZXcgTW91c2VNb25pdG9yKCkuYXR0YWNoKGNhbnZhcylcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2FudmFzUmVuZGVyZXJcblxuY29uc3QgcmVuZGVyR3JpZCA9IG5ldyBHcmlkPElSZW5kZXJDZWxsPihNQVBfV0lEVEgsIE1BUF9IRUlHSFQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJyAnLENPTE9SUy5ibGFjayxDT0xPUlMuZGFya19ncm91bmQpXG59KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUaWxlKHgseSwgZmFsc2UpXG59KVxuXG50aWxlR3JpZC5nZXRYWSgzMCwyMikuYmxvY2tNb3ZlID0gdHJ1ZVxudGlsZUdyaWQuZ2V0WFkoMzAsMjIpLmJsb2NrU2lnaHQgPSB0cnVlXG50aWxlR3JpZC5nZXRYWSgzMSwyMikuYmxvY2tNb3ZlID0gdHJ1ZVxudGlsZUdyaWQuZ2V0WFkoMzEsMjIpLmJsb2NrU2lnaHQgPSB0cnVlXG50aWxlR3JpZC5nZXRYWSgzMiwyMikuYmxvY2tNb3ZlID0gdHJ1ZVxudGlsZUdyaWQuZ2V0WFkoMzIsMjIpLmJsb2NrU2lnaHQgPSB0cnVlXG5cbmNvbnN0IHJlbmRlclRvR3JpZCA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZW50aXRpZXM6IEVudGl0eVtdLCByZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPik6IHZvaWQgPT4ge1xuICAgIHRpbGVHcmlkLmZvckVhY2goKHRpbGU6IFRpbGUsIGluZGV4KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldEkoaW5kZXgpXG4gICAgICAgIHJlbmRlckNlbGwuZm9yZUNvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gJyAnXG4gICAgICAgIGlmKHRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfd2FsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19ncm91bmRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eTogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgICAgIGlmKCFyZW5kZXJHcmlkLmluQm91bmRzWFkoZW50aXR5LngsIGVudGl0eS55KSl7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByQ2VsbDogSVJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldFhZKGVudGl0eS54LCBlbnRpdHkueSlcbiAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgIHJDZWxsLmNoYXJhY3RlciA9IGVudGl0eS5jaGFyYWN0ZXJcbiAgICB9KVxufVxuXG4vLyBjbGVhbiB0aGlzIHVwXG5jb25zdCBtb3ZlczogYW55W10gPSBbXVxuY29uc3QgTW92ZVByb2Nlc3NvciA9IHtcbiAgICAvLyBjdXJyZW50bHkganVzdCB0aWVkIHRvIHRoZSBwbGF5ZXJcbiAgICBtb3Zlc1xufVxuXG5QVUJTVUIuc3Vic2NyaWJlKCdtb3ZlJywgKGRlbHRhKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2goZGVsdGEpXG59KSBcblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oKGltYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICByZW5kZXJlci5pbml0KGNhbnZhcywgaW1hZ2UpXG4gICAgLy8gTG9vcFxuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKClcblxuICAgICAgICAvLyBMb29rIGF0IHBsYXllciBpbnB1dFxuICAgICAgICAvLyBaIGxldHMgdXMgYmUgaW4gWk9PTSBNT0RFISEhIVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSB0aGlzIGludG8gYSBcIm1vdmVcIiB0eXBlIGFjdGlvblxuICAgICAgICAvLyB3ZSdsbCBqdXN0IGRvIHRoZSBtb3ZlIHNlY3Rpb25cblxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCBQb2ludC5tYWtlKC0xLCAwKSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIFBvaW50Lm1ha2UoMSwgMCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCBQb2ludC5tYWtlKDAsIC0xKSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCBQb2ludC5tYWtlKDAsIDEpKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvY2VzcyBtb3Zlc1xuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmZvckVhY2goKG1vdmU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYodGlsZUdyaWQuaW5Cb3VuZHNYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KVxuICAgICAgICAgICAgICAgIGlmKCF0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlKG1vdmUueCwgbW92ZS55KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5sZW5ndGggPSAwXG5cbiAgICAgICAgLy8gd2UgbWlnaHQgbW92ZSBhbGwgb2YgdGhpcyBpbnRvIHNvbWUgb2Zmc2NyZWVuIFxuICAgICAgICByZW5kZXJUb0dyaWQodGlsZUdyaWQsIGVudGl0aWVzLCByZW5kZXJHcmlkKVxuICAgICAgICByZW5kZXJlci5yZW5kZXIocmVuZGVyR3JpZClcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCA1MDApXG4gICAgICAgIGttLnJlc2V0U3RlcHMoKVxuICAgICAgICBtbS5yZXNldCgpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcbiAgICB9XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuXG59KS5jYXRjaCgoZXJyOiBhbnkpOiB2b2lkID0+IGNvbnNvbGUubG9nKGVycikpIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlIiwiZnVuY3Rpb24gbG9hZEltYWdlKHVybDogc3RyaW5nKTogYW55e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKTogYW55ID0+IHJlc29sdmUoaW1nKSlcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCk6IGFueSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tICR7dXJsfWApKSlcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuICAgIH0pXG59XG5cbmV4cG9ydCB7bG9hZEltYWdlfSIsImltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IENPREVfVE9fUkVDVF9IQVNILCBkcmF3U2VjdGlvbiwgY29kZSB9IGZyb20gJy4vcmVuZGVySGVscGVycydcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHRha2luZyBhIHJlbmRlciBncmlkIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGltYWdlc1xuICogb24gdGhlIGNhbnZhc1xuICovXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IHVuZGVmaW5lZDtcbiAgICBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50KTogQ2FudmFzUmVuZGVyZXJ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIC8vIHdlIGFyZSBqdXN0IGZvcmNpbmcgdGhpcyBmb3Igbm93LCB3ZSB3aWxsIGNoZWNrIGlmIGl0J3MgbnVsbFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMhLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaWYoY3R4ID09PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCBjb250ZXh0IGZyb20gY2FudmFzJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8gZXZlbnR1YWxseSB3ZSBuZWVkIHRvIHBhc3MgaW4gdGhlIGRpbWVuc2lvbnMgd2UgYXJlIHJlbmRlcmluZyB0byBhcyB3ZWxsXG4gICAgLy8gZm9yIG5vdyBpdCdzIGZpbmVcbiAgICByZW5kZXIocmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICByZW5kZXJHcmlkLmZvckVhY2goKFxuICAgICAgICAgICAgY2VsbDogSVJlbmRlckNlbGwsIFxuICAgICAgICAgICAgaW5kZXg6IG51bWJlciwgXG4gICAgICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjUmVjdDogSVJlY3QgPSBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlKGNlbGwuY2hhcmFjdGVyKV1cbiAgICAgICAgICAgIGRyYXdTZWN0aW9uKGN0eCwgdGhpcy5zcHJpdGVzaGVldCwgc3JjUmVjdCwgUmVjdC5tYWtlKHggKiAxMCwgeSAqIDEwLCAxMCwgMTApLCBjZWxsLmZvcmVDb2xvciwgY2VsbC5iYWNrQ29sb3IgKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jYW52YXMgPT0gbnVsbCB8fCB0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgeyBDYW52YXNSZW5kZXJlciB9IiwiLyoqXG4gKiBBIGdlbmVyaWMgb2JqZWN0IHRvIHJlcHJlc2VudCBldmVyeXRoaW5nIHRoYXQgaXMgbm90IHRoZSBtYXAgaXRzZWxmXG4gKiBGb3IgdGhhdCwgc2VlIHRoZSBUaWxlIGNsYXNzXG4gKi9cbmNsYXNzIEVudGl0eSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlcix5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBjb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYW4gZW50aXR5LCBjdXJyZW50bHkgZG9lc24ndCBjaGVjayBpZiBpdCBjYW4gb3Igbm90LCBqdXN0IGRvZXNcbiAgICAgKiBAcGFyYW0gZHggQW1vdW50IHRvIG1vdmUgaW4gdGhlIHggZGlyZWN0aW9uIChsZWZ0IGlzIG5lZ2F0aXZlLCByaWdodCBpcyBwb3NpdGl2ZSlcbiAgICAgKiBAcGFyYW0gZHkgQW1vdW50IHRvIG1vdmUgaW4gdGhlIHkgZGlyZWN0aW9uICh1cCBpcyBuZWdhdGl2ZSwgZG93biBpcyBwb3NpdGl2ZSlcbiAgICAgKi9cbiAgICBtb3ZlKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lke1xuICAgICAgICB0aGlzLnggKz0gZHhcbiAgICAgICAgdGhpcy55ICs9IGR5XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbnRpdHkgfSIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG5pbnRlcmZhY2UgU2V0RWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBhbnk7XG59XG5cbmludGVyZmFjZSBGb3JFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG59XG5cbi8vIFRPRE86IEZJR1VSRSBPVVQgSE9XIFRPIENSRUFURSBBIEdFTkVSSUMgVFlQRSBGT1IgVEhJUywgQ0FVU0UgVFlQRVMgV09VTEQgUFJPQkFCTFkgQkUgR09PRCBGT1IgVEhJU1xuXG4vKipcbiAqIEdyaWQgdG8gcmVwcmVzZW50IDJkIGNvbGxlY3Rpb25zLCBwbGVhc2UgZG9uJ3QgcmVzaXplIGl0IGFmdGVyIGNyZWF0aW5nIGl0XG4gKi9cbmNsYXNzIEdyaWQ8VD4ge1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgY2VsbHM6IFRbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiBvZiB0aGUgZ3JpZCwgb3ZlcndyaXRlcyBwcmV2aW91cyBlbnRyaWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGVudHJ5LCBkb24ndCB1c2UgdGhpcyB1bmxlc3MgZW50cmllcyBhcmUgaW5kZXBlbmRlbnQgZnJvbSBlYWNoIG90aGVyXG4gICAgICogQHBhcmFtIGZuIHRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGNlbGwgaXRzZWxmIGFzIHRoZSBmaXJzdCBwcm9wZXJ0eSBhbmQgXG4gICAgICovXG4gICAgc2V0RWFjaChmbjogU2V0RWFjaEZuPFQ+KTogR3JpZDxUPntcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBmbih0aGlzLmNlbGxzW2ldLCBpLCB4ICwgeSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIFRPRE86IHN0cnVjdHVyZSB0aGlzXG4gICAgLyoqXG4gICAgICogRG8gc29tZXRoaW5nIGZvciBlYWNoIG1lbWJlciBvZiBhIGNlbGwsIGdvaW5nIHJvdyBieSByb3cgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgICogQHBhcmFtIGZuIEdldCBwYXNzZWQgdGhlIGNlbGwsIGluZGV4LCB4IGFuZCB5XG4gICAgICovXG4gICAgZm9yRWFjaChmbjogRm9yRWFjaEZuPFQ+KTogdm9pZHtcbiAgICAgICAgbGV0IHggPSAwLCB5ID0gMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB4ID0gaSAlIHRoaXMud2lkdGhcbiAgICAgICAgICAgIHkgPSAoaSAtIHgpL3RoaXMud2lkdGhcbiAgICAgICAgICAgIGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0geCB4IGNvb3JkaW5hdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKi9cbiAgICBnZXRYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFQgIHtcbiAgICAgICAgaWYoIXRoaXMuaW5Cb3VuZHNYWSh4LHkpKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm91bmRhcnkgYWNjZXNzIGlzc3VlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1t4ICsgeSAqIHRoaXMud2lkdGhdXG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgZ2V0WFkuIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHBvaW50IGNvbnRhaW5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSBjZWxsIHlvdSB3YW50IHRvIGdldFxuICAgICAqL1xuICAgIGdldFAocG9pbnQ6IElQb2ludCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRYWShwb2ludC54LCBwb2ludC55KVxuICAgIH1cblxuICAgIGluQm91bmRzWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFue1xuICAgICAgICBpZih4IDwgMCB8fCB4ID49IHRoaXMud2lkdGggfHwgeSA8IDAgfHwgeSA+PSB0aGlzLmhlaWdodCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2VsbCBiYXNlZCBvZmYgb2YgYW4gaW5kZXgsIHVzdWFsbHkgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZm9yRWFjaCBsb29wIG9mIGEgc2ltaWxhcmx5IHNpemVkIGdyaWRcbiAgICAgKiBOT1RFIGJlIGNhcmVmdWwgdGhhdCB0aGUgb3RoZXIgZ3JpZCBoYXMgdGhlIHNhbWUgZGltZW5zaW9uIHVubGVzcyB5b3UgcmVhbGx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGNlbGxzLCBtb3N0bHkgdG8gYmUgdXNlZCB3aXRoIGdyaWRzIHRoYXQgYXJlIHdvcmtpbmcgYWxvbmdzaWRlIGEgZGlmZmVyZW50IGZvckVhY2ggbG9vcFxuICAgICAqL1xuICAgIGdldEkoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5jZWxsc1tpbmRleF1cbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQgfSIsImludGVyZmFjZSBLZXlTdGF0ZSB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIGlzRG93bjogYm9vbGVhbjtcbiAgICBoYWxmU3RlcHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbmNvbnN0IG1ha2VLZXlTdGF0ZSA9IChrZXk6IHN0cmluZywgaXNEb3duOiBib29sZWFuID0gZmFsc2UsIGhhbGZTdGVwczogbnVtYmVyID0gMCk6IEtleVN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGlzRG93bixcbiAgICAgICAgaGFsZlN0ZXBzXG4gICAgfVxufVxuXG5jbGFzcyBLZXlib2FyZE1vbml0b3Ige1xuICAgIGtleUhhc2g6IEhhc2g8S2V5U3RhdGU+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMua2V5SGFzaCA9IHt9XG4gICAgfVxuICAgIC8vIEF0dGFjaCB0byB0aGUgRE9NLCB1c3VhbGx5IHRoZSBkb2N1bWVudCBhcyBhIHdob2xlLCBidXQgeW91IGNhbiBtYWtlIGl0IG1vcmUgc3BlY2lmaWMgaWYgeW91IHdhbnRcbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogS2V5Ym9hcmRNb25pdG9yIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoIWtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKGtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGdldEtleVN0YXRlKGtleTogc3RyaW5nKTogS2V5U3RhdGV7XG4gICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5SGFzaFtrZXldXG4gICAgfVxuICAgIHJlc2V0U3RlcHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleUhhc2gpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXlzW2ldXS5oYWxmU3RlcHMgPSAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0iLCIvLyBMZXQncyBnbyBhaGVhZCBhbmQgY3JlYXRlIHRoZSBQb2ludCBpbnRlcmZhY2UgaGVyZSwgd2UnbGwgZXhwb3J0IGl0IGZvciB1c2UgbGF0ZXIgaW4gdGhlIHByb2plY3RcblxuaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuLyoqXG4gKiBDbGFzcyB0byBoZWxwIG1vbml0b3IgdGhpbmdzIHRoYXQgaGF2ZSBoYXBwZW5lZCB0byB0aGUgbW91c2Ugc2luY2UgbGFzdCB0aW1lIHRoYXQgd2UgbG9va2VkXG4gKi9cblxuaW50ZXJmYWNlIEhhbGZDbGljayB7XG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICBpc0Rvd246IGJvb2xlYW47XG59XG5cbmNsYXNzIE1vdXNlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvdmVyIHRoZSBhdHRhY2hlZCBlbGVtbnRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgbGFzdCB0aW1lIHdlIGxvb2tlZFxuICAgICAqL1xuICAgIGhhc01vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRydWUgaWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGNvbnRhaW5lciBcbiAgICAgKi9cbiAgICBpbkNvbnRhaW5lcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGlzIHRoZSBtb3VzZSBidXR0b24gZG93biAoY3VycmVudGx5IG9ubHkgdHJhY2tzIGxlZnQpXG4gICAgICovXG4gICAgaXNEb3duOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgYSBmdWxsIGNsaWNrIGlzIHVwIGFuZCBkb3duLCB0aGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1cHMgYW5kIGRvd25zLCB1c2VmdWwgZm9yIGRyYWdzIG9yIG90aGVyIHRoaW5ncyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICovXG4gICAgaGFsZkNsaWNrczogSGFsZkNsaWNrW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50Lm1ha2UoMCwwKVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzID0gW11cbiAgICAgICAgLy8gVE9ETzogQWRkIGNsaWNrIHRyYWNraW5nLCBkZXBlbmRzIG9uIGhvdyBxdWlja2x5IHdlIGFyZSBwb2xsaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yIG1vdXNlIHJlbGF0ZWQgZXZlbnRzIHRvXG4gICAgICogQHBhcmFtIGVsZW1lbnQgdGhlIHBhcnRpY3VsYXIgbW91c2UgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogTW91c2VNb25pdG9yIHtcbiAgICAgICAgLy8gVE9ETzogV2UnbGwgcmVnaXN0ZXIgY2xpY2sgaGlzdG9yeSBpbiB0aGUgZnV0dXJlLCBmb3Igbm93IHdlIGFyZSBqdXN0IGRvaW5nIG1vdXNlIG92ZXIgYXQgcHJlc2VudFxuICAgICAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgUG9pbnQuc2V0KHRoaXMucG9zaXRpb24sIGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZW50ZXJzIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIG1vdmVzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGV4aXRzIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHJhaXNlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IGZhbHNlIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayB0aGF0IHdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgZXZlbnRzIHNpbmNlIG91ciBsYXN0IHBvbGwgb2Ygc3RhdGUgYW5kIGl0IGNhbiBiZSByZXNldFxuICAgICAqL1xuICAgIHJlc2V0KCk6IHZvaWR7XG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgaGF2ZW4ndCBtb3ZlZCBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIC8vIGNsZWFyIG91dCB0aGUgY2xpY2tzXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcy5sZW5ndGggPSAwXG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZU1vbml0b3IgfSIsImxldCBfaWQgPSAwXG5jb25zdCBuZXh0SWQgPSAoKTogbnVtYmVyID0+IF9pZCsrXG5cbi8vIFRPRE86IE1ha2UgbWVzc2FnZXMgZW51bXM/XG5cbi8vIFRPRE86IE1ha2UgYW4gaW50ZXJmYWNlIGZvciB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxudHlwZSBTdWJzY3JpYmVyRnVuY3Rpb24gPSAobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKSA9PiB2b2lkXG5cbmludGVyZmFjZSBTdWJzY3JpYmVyTm9kZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uO1xuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xufVxuXG5cblxuY29uc3QgbWFrZVN1Yk5vZGUgPSAoc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDAsIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbCA9IG51bGwpOiBTdWJzY3JpYmVyTm9kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5leHRJZCgpLFxuICAgICAgICBzdWJGbixcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5leHRcbiAgICB9XG59XG5cbi8vIFRPRE86ID8/IE1ha2UgaXQgc28gYSBzdWJzY3JpYmVyIGxpc3QgY291bGQgYmUgZGVhZmVuZWQvbGlzdGVuP1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgZnVuY3Rpb25zLCBzb3J0ZWQgYnkgcHJpb3JpdHksIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseSB3aGVuIHRoZSBsaXN0IGlzIG5vdGlmaWVkIG9mIGEgbmV3IG1lc3NhZ2VcbiAqL1xuY2xhc3MgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCB7XG4gICAgcm9vdDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIHRhaWw6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGxcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGlzIGxpc3QgdmlhIHRoZSBub3RpZnkgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIG1lc3NhZ2Ugb2JqZWN0IHdoZW5ldmVyIHRoaXMgc3Vic2NyaWJlciBsaXN0IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgaGlnaGVyIHRoZSBwcmlvcml0eSwgdGhlIGVhcmxpZXIgaXQgd2lsbCBydW4sIGlmIGl0IGhhcyB0aGUgc2FtZSBwcmlvcml0eSB0aGUgb25lIHRoYXQgd2FzIGFkZGVkIGZpcnN0IHdpbGwgZmlyZSBmaXJzdFxuICAgICAqL1xuICAgIHN1YnNjcmliZShmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlcntcbiAgICAgICAgLy8gQ2FzZSAjMSBFbXB0eSBTdWJzY3JpYmVyIExpc3RcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5yb290XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UgIzIgV2UgYWxyZWFkeSBoYXZlIHNvbWUgc3Vic2NyaWJlcnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290IC8vIHdlIGtub3cgaXQgc2hvdWxkIGJlIGEgU3Vic2NyaWJlciBOb2RlIGFuZCBub3QgbnVsbCwgYmVjYXVzZSB3ZSBhcmUgaGVyZVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIG5ldyByb290XG4gICAgICAgICAgICBpZihwcmlvcml0eSA8IHRyYXZlbGxlciEucHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdGhpcy5yb290KVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWwgY2FzZSB3ZSBoYXZlIG90aGVyIHRoaW5ncyB0byB3b3JyeSBhYm91dFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUodHJhdmVsbGVyICYmIHRyYXZlbGxlci5uZXh0ICYmIHRyYXZlbGxlci5uZXh0LnByaW9yaXR5ID49IHByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBlaXRoZXIgZm91bmQgYSBub2RlIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiB1cyBvciB3ZSBoYXZlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICAgICB0cmF2ZWxsZXIhLm5leHQgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRyYXZlbGxlciEubmV4dClcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRyYXZlbGxlcnMgd2FzIHRoZSBvbGQgdGFpbFxuICAgICAgICAgICAgICAgIGlmKHRyYXZlbGxlciA9PT0gdGhpcy50YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBuZXh0IG9uZSBpcyB0aGUgbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdHJhdmVsbGVyIS5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsbGVyIS5uZXh0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbW9zdCBpbXBvcmFudCBpbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRvcGljIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBwdWJzdWIgdG8gcmVtaW5kIHRoZSBzdWJzY3JpYmVyIG9mIHRoZSBzcGVjaWZpYyB0b3BpYyBvciBzdWJ0b3BpY1xuICAgICAqL1xuICAgIG5vdGlmeShtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdFxuICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICB0cmF2ZWxsZXIuc3ViRm4obWVzc2FnZSwgdG9waWMpXG4gICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSIsImltcG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IGZyb20gJy4vcHJpb3JpdHlTdWJzY3JpYmVyTGlzdCdcblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogUHVic3ViIGlzIGEgdG9waWMtYmFzZWQgb2JzZXJ2ZXIgcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBkZXNpZ25lZCB0byBhdm9pZCB0aWdodCBjb3VwbGluZyBvZiBjb21wb25lbnRzXG4gKi9cbmNsYXNzIFB1YlN1YiB7XG4gICAgdG9waWNzOiBIYXNoPFByaW9yaXR5U3Vic2NyaWJlckxpc3Q+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9waWNzID0ge31cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBtZXNzYWdlIHRvIGFsbCBzdWJzY3JpYmVycyB0byBhIHRvcGljXG4gICAgICogQHBhcmFtIHRvcGljIFRvcGljIHRvIHVzZSwgaWYgbm9ib2R5IGlzIHN1YnNjcmliZWQgdG8gaXQsIG5vdGhpbmcgaGFwcGVuc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBhY3R1YWwgbWVzc2FnZSB0byBzZW5kLCB0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBidXQgaXQncyBhIHNpbmdsZSB0aGluZ1xuICAgICAqL1xuICAgIHB1Ymxpc2godG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10ubm90aWZ5KG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIHNwZWNpZmljIHRvcGljIHdpdGggYSBnaXZlbiBwcmlvcml0eSwgcmV0dXJucyBhbiBpZCB0aGF0IHlvdSdsbCBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHRvcGljIHRoZSBzcGVjaWZpYyB0b3BpYyB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gZm4gdGhlIGZ1bmN0aW9uIHRvIHJlY2lldmUgdGhlIHNwZWNpZmljIG1lc3NhZ2UgYW5kIHRvcGljIGJlaW5nIGJyb2FkY2FzdGVkIHRvXG4gICAgICogQHBhcmFtIHByaW9yaXR5IHRoZSBwcmlvcml0eSBvZiB0aGUgZnVuY3Rpb24gdG8gc3Vic2NyaWJlIHRvLCBoaWdoZXIgbnVtYmVycyBydW4gZmlyc3QsIHRoZSBkZWZhdWx0IGlzIHplcm8sIG5lZ2F0aXZlIG51bWJlcnMgYXJlIGFsbG93ZWRcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBpZighdGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXSA9IG5ldyBQcmlvcml0eVN1YnNjcmliZXJMaXN0KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b3BpY3NbdG9waWNdLnN1YnNjcmliZShmbiwgcHJpb3JpdHkpXG4gICAgfVxufVxuLy8gT1VSIFVOSVZFUlNBTCBERUZBVUxUIFBVQlNVQlxuY29uc3QgUFVCU1VCID0gbmV3IFB1YlN1YigpXG5leHBvcnQge1BVQlNVQiwgUHViU3VifSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXIgQ2VsbFxuICovXG5pbnRlcmZhY2UgSVJlbmRlckNlbGwge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7IC8vIHRoaXMgc2hvdWxkIG9ubHkgYmUgc3RyaW5nIG9mIGxlbmd0aCAxXG4gICAgZm9yZUNvbG9yOiBzdHJpbmc7XG4gICAgYmFja0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCx5LCBjaGFyYWN0ZXIsIGZvcmVDb2xvciwgYmFja0NvbG9yXG4gICAgfVxufVxuXG5jb25zdCBSZW5kZXJDZWxsID0ge1xuICAgIG1ha2Vcbn1cblxuZXhwb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGx9IiwiaW1wb3J0IHtJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBIYXNoU3RyPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuaW50ZXJmYWNlIEhhc2hOdW08VD4ge1xuICAgIFtrZXk6IG51bWJlcl06IFQ7XG59XG5cbmNvbnN0IGNvZGUgPSAoY2hhcjogc3RyaW5nKTogbnVtYmVyID0+IGNoYXIuY2hhckNvZGVBdCgwKVxuY29uc3QgQ0hBUkFDVEVSX0hFTFBFUjogSGFzaFN0cjxzdHJpbmc+ID0ge1xuICAgIFZFUlRJQ0FMX0xJTkU6ICfilIInLFxuICAgIEhPUklaT05UQUxfTElORTogJ+KUgCcsXG4gICAgQ1JPU1NfTElORVM6ICfilLwnLFxuICAgIFRfTEVGVDogJ+KUpCcsXG4gICAgVF9VUDogJ+KUtCcsXG4gICAgVF9SSUdIVDogJ+KUnCcsXG4gICAgVF9ET1dOOiAn4pSsJyxcbiAgICBUT1BfUklHSFQ6ICfilJQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ+KUjCcsXG4gICAgQk9UVE9MX0xFRlQ6ICfilJAnLFxuICAgIFRPUF9MRUZUOiAn4pSYJ1xufVxuXG5jb25zdCBUSUxFX1dJRFRIID0gMTAsIFRJTEVfSEVJR0hUID0gMTBcblxuY29uc3QgQ09ERV9UT19SRUNUX0hBU0g6IEhhc2hOdW08SVJlY3Q+ID0ge31cbmNvbnN0IHNwYWNlQ29kZSA9ICAgY29kZSgnICcpXG5jb25zdCBhdENvZGUgPSAgICAgIGNvZGUoJ0AnKVxuY29uc3QgYUNvZGUgPSAgICAgICBjb2RlKCdhJylcbmNvbnN0IHpDb2RlID0gICAgICAgY29kZSgneicpXG5jb25zdCBBQ29kZSA9ICAgICAgIGNvZGUoJ0EnKVxuY29uc3QgWkNvZGUgPSAgICAgICBjb2RlKCdaJylcblxuXG5jb25zdCBjdHJoSGVscGVyID0gKGNvZGU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlXSA9IFJlY3QubWFrZSh4LHksIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuXG4vLyBXZSB3aWxsIGZpbGwgaW4gdGhlIG90aGVyIGNoYXJhY3RlcnMgYXMgbmVjZXNzYXJ5XG5DT0RFX1RPX1JFQ1RfSEFTSFtzcGFjZUNvZGVdID0gUmVjdC5tYWtlKDAsIDAsIDEwLCAxMClcbkNPREVfVE9fUkVDVF9IQVNIW2F0Q29kZV0gPSBSZWN0Lm1ha2UoMCwgMTAsIDEwLCAxMClcbmZvcihsZXQgaSA9IEFDb2RlOyBpIDw9IFpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gQUNvZGUpICogMTAsIDMwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbmZvcihsZXQgaSA9IGFDb2RlOyBpIDw9IHpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gYUNvZGUpICogMTAsIDQwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbi8vIGZvciBicmV2aXRpZXMgc2FrZVxuY29uc3QgQ0ggPSBDSEFSQUNURVJfSEVMUEVSXG5jdHJoSGVscGVyKGNvZGUoQ0guVkVSVElDQUxfTElORSksIDE0MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5IT1JJWk9OVEFMX0xJTkUpLCAxNTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQ1JPU1NfTElORVMpLCAxNjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9MRUZUKSwgMTcwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfVVApLCAxODAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9SSUdIVCksIDE5MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0RPV04pLCAyMDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX1JJR0hUKSwgMjEwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTV9SSUdIVCksIDIyMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT0xfTEVGVCksIDIzMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfTEVGVCksIDI0MCwxMClcblxuXG5mdW5jdGlvbiBkcmF3U2VjdGlvbihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGlsZXNoZWV0OiBhbnksIHNyY1JlY3Q6IElSZWN0LCBkZXN0UmVjdDogSVJlY3QsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IHZvaWR7XG4gICAgY3R4LmNsZWFyUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNoZWV0LCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53aWR0aCwgc3JjUmVjdC5oZWlnaHQsIGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICd4b3InXG4gICAgY3R4LmZpbGxTdHlsZT1mb3JlQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJ1xuICAgIGN0eC5maWxsU3R5bGU9YmFja0NvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xufVxuXG5leHBvcnQgIHsgQ09ERV9UT19SRUNUX0hBU0gsIENIQVJBQ1RFUl9IRUxQRVIsIGNvZGUsIGRyYXdTZWN0aW9uIH0iLCIvKipcbiAqIEludGVyZmFjZSBmb3Igd29ya2luZyB3aXRoIGEgMkQgUG9pbnRcbiAqL1xuaW50ZXJmYWNlIElQb2ludCB7ICBcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb2ludFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIHt4LHl9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBwb2ludCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGJvdGggb2YgdGhlbSB0b2dldGhlciwgaWYgeW91IHdhbnQgdG8gYWRkIGEgcG9pbnQgVE8gYW5vdGhlciBwb2ludCwgdXNlIGFkZFRvXG4gKiBAcGFyYW0gYSBGaXJzdCBQb2ludCwgdW5tb2RpZmllZFxuICogQHBhcmFtIGIgU2Vjb25kIFBvaW50LCB1bm1vZGlmaWVkXG4gKi9cbmNvbnN0IGFkZCA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UoYS54ICsgYi54LCBhLnkgKyBiLnkpXG59XG5cbi8qKlxuICogQWRkIHRoZSB2YWx1ZSBvZiBQb2ludCBhIHRvIFBvaW50IGJcbiAqIEBwYXJhbSBhIFRoZSBwb2ludCB0aGF0IGNoYW5nZXMsIHdpbGwgaGF2ZSBiIGFkZGVkIHRvIGl0XG4gKiBAcGFyYW0gYiBUaGUgcG9pbnQgd2hvc2UgdmFsdWUgaXMgYWRkZWQgdG8gdGhlIG90aGVyLCBpdCBpcyB1bm1vZGlmaWVkIGl0c2VsZlxuICovXG5jb25zdCBhZGRUbyA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgYS54ICs9IGIueFxuICAgIGEueSArPSBiLnlcbiAgICByZXR1cm4gYVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWVzIG9mIGEgcG9pbnQgd2l0aCB4IGFuZCB5IHZhbHVlcywgcmV0dXJucyB0aGUgbm93IG1vZGlmaWVkIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgcG9pbnQgdG8gYmUgbW9kaWZpZWRcbiAqIEBwYXJhbSB4IG5ldyB4IHZhbHVlXG4gKiBAcGFyYW0geSBuZXcgeSB2YWx1ZVxuICovXG5jb25zdCBzZXQgPSAocG9pbnQ6IElQb2ludCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHBvaW50LnggPSB4XG4gICAgcG9pbnQueSA9IHlcbiAgICByZXR1cm4gcG9pbnRcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIG1lYW50IHRvIHdvcmsgd2l0aCB0aGluZ3MgdGhhdCBoYXZlIHRoZSBJUG9pbnQgaW50ZXJmYWNlXG4gKi9cbmNvbnN0IFBvaW50ID0ge1xuICAgIG1ha2UsXG4gICAgYWRkLFxuICAgIGFkZFRvLFxuICAgIHNldFxufVxuXG5leHBvcnQge0lQb2ludCwgUG9pbnR9IiwiaW1wb3J0IHtJUG9pbnR9IGZyb20gJy4vcG9pbnQnXG5pbnRlcmZhY2UgSVJlY3QgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICogQHBhcmFtIHdpZHRoIFxuICogQHBhcmFtIGhlaWdodCBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH1cbn1cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHJlY3RhbmdsZXNcbiAqL1xuY29uc3QgUmVjdCA9IHtcbiAgICBtYWtlXG59XG5cbmV4cG9ydCB7SVJlY3QsIFJlY3R9XG4iLCIvLyBJIGd1ZXNzIGV2ZXJ5dGhpbmcgd291bGQgbmVlZCBpdCdzIG93biBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi4uLiBncm9zc1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBsb2NhdGlvbnMgb24gdGhlIGJvYXJkLCBldmVudHVhbGx5IHdlIHdpbGwgcHJvYmFibHkgbW92ZSB0aGlzIGludG8gaXRzIG93biBFQ1Mgc3lzdGVtXG4gKi9cbmNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGJsb2NrTW92ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgdGlsZSBibG9jayBsaW5lIG9mIHNpZ2h0XG4gICAgICovXG4gICAgYmxvY2tTaWdodDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIGlmKGJsb2NrU2lnaHQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja01vdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrU2lnaHRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRpbGUgfSJdLCJzb3VyY2VSb290IjoiIn0=