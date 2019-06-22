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















//import { MapGenHelper } from './mapGenHelper'
// sizing
const TILE_WIDTH = 10;
const TILE_HEIGHT = 10;
// THESE ARE IN TILE SIZES
const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 50;
const MAP_WIDTH = 80;
const MAP_HEIGHT = 45;
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
const COLORS = {
    'outside': '#000000',
    'black': '#000000',
    'dark_wall': '#000064',
    'dark_ground': '#323296',
    'light_wall': '#826E32',
    'light_ground': '#C8B432'
};
const player = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', '#FFFFFF');
const npc = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', '#CC0000');
const entities = [player, npc];
const canvas = document.querySelector('canvas');
canvas.width = SCREEN_WIDTH * TILE_WIDTH;
canvas.height = SCREEN_HEIGHT * TILE_HEIGHT;
const km = new _keyboardMonitor__WEBPACK_IMPORTED_MODULE_0__["KeyboardMonitor"]().attach(document);
const mm = new _mouseMonitor__WEBPACK_IMPORTED_MODULE_1__["MouseMonitor"]().attach(canvas);
const renderer = new _canvasRenderer__WEBPACK_IMPORTED_MODULE_7__["CanvasRenderer"]();
const cameraFrame = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].make(0, 0, 80, 45); // CAMERA IS IN WORLD CELLS, NOT ABSOLUTE UNITS
const renderGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
renderGrid.setEach((cell, index, x, y) => {
    return _renderCell__WEBPACK_IMPORTED_MODULE_3__["RenderCell"].make(x, y, ' ', COLORS.black, COLORS.dark_ground);
});
const tileGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
tileGrid.setEach((cell, index, x, y) => {
    return new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, true);
});
const FOV_RADIUS = 10;
let fovRecompute = true;
// TODO: Translate this from world to screen?
const fovGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](MAP_WIDTH, MAP_HEIGHT);
// if we turn fov on it'll change it over to false
fovGrid.setEach(() => {
    return {
        visible: false,
        explored: false
    };
});
// this will also populate the rooms
const rooms = [];
//generate the relevant terrain
Object(_mapGeneration__WEBPACK_IMPORTED_MODULE_14__["mapGenerator1"])(tileGrid, rooms);
// const cameraFrame = Rect.make(0, 0, 10, 10)
// SET Entity Locations
{
    const pcenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].center(rooms[0]);
    _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(player, pcenter.x, pcenter.y);
    const npcenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_10__["Rect"].center(rooms[rooms.length - 1]);
    _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(npc, npcenter.x, npcenter.y);
}
const renderToGrid = (tileGrid, fovGrid, entities, renderGrid) => {
    // renderGrid is in SCREEN coordinates, and will have it's XY ignored for our purposes
    // tileGrid, entities and fovGrid are in WORLD coordinates and will have their XY and y ignored for now
    // camera and renderGrid both start at the topLeft in terms of aligning the two
    // I almost feel like we should tighten the coupling, but oh well, let's actually do it
    const screenP = _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(0, 0);
    const worldP = _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].make(0, 0);
    for (let relCameraY = 0; relCameraY < cameraFrame.height; relCameraY++) {
        for (let relCameraX = 0; relCameraX < cameraFrame.width; relCameraX++) {
            // this maps to the renderGrid and the cameras
            _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(screenP, relCameraX, relCameraY);
            // this maps to the tileGrid, fovGrid, and entities
            _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(worldP, screenP.x + cameraFrame.x, screenP.y + cameraFrame.y);
            // Let's do some bounds checking
            // we know these poitns are always in cameras, so never need to check that
            // we are going to offload the case of checking if the renderGrid can fit the cameraSize for now
            // so for now just check if we are inside of the tileGrid, which currently should be the same dimensions as the fovGrid, though that is bound to change as we try and optimize things
            // soooooo, let's check if we are inside the tileGrid
            const renderCell = renderGrid.getP(screenP);
            if (tileGrid.inBoundsXY(worldP.x, worldP.y)) {
                const tile = tileGrid.getP(worldP);
                const fovCell = fovGrid.getP(worldP);
                renderCell.character = '';
                if (fovCell.explored) {
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
                }
                else {
                    renderCell.backColor = COLORS.black;
                }
            }
            else {
                renderCell.character = '';
                renderCell.foreColor = COLORS.black;
                renderCell.backColor = COLORS.black;
            }
        }
    }
    entities.forEach((entity) => {
        _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(screenP, entity.x - cameraFrame.x, entity.y - cameraFrame.y);
        // if this is inside of the camera bounds
        if (cameraFrame.x <= entity.x && entity.x <= cameraFrame.x + cameraFrame.width - 1 &&
            cameraFrame.y <= entity.y && entity.y <= cameraFrame.y + cameraFrame.height - 1) {
            const rCell = renderGrid.getP(screenP);
            const fovCell = fovGrid.getP(entity);
            if (fovCell.visible) {
                rCell.foreColor = entity.color;
                rCell.character = entity.character;
            }
        }
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
        // quick number generator
        if (!km.getKeyState('n').isDown && (km.getKeyState('n').halfSteps > 0)) {
            const seed = btoa(new Date().toString());
            const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?seed=' + seed;
            window.location.href = newurl;
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
            Object(_fov__WEBPACK_IMPORTED_MODULE_12__["calculateFOV"])(fovGrid, tileGrid, player, FOV_RADIUS);
        }
        // determine camera position
        cameraFrame.x = Math.floor(player.x - cameraFrame.width / 2);
        cameraFrame.y = Math.floor(player.y - cameraFrame.height / 2);
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
    render(renderGrid, background = '#000000') {
        if (this.ctx == null) {
            throw new Error('Cannot render a grid with a missing context');
        }
        const ctx = this.ctx;
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, renderGrid.width * 10, renderGrid.height * 10);
        // let's try setting a background color as well
        // We have checked to ensure that it has been created
        const destRect = _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].make(0, 0, 0, 0);
        renderGrid.forEach((cell, index, x, y) => {
            _shapes_rect__WEBPACK_IMPORTED_MODULE_1__["Rect"].set(destRect, x * 10, y * 10, 10, 10);
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
            if (fovCell.visible) {
                fovCell.explored = true;
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
/*! exports provided: mapGenerator1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGenerator1", function() { return mapGenerator1; });
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
                const lastCenter = _shapes_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"].center(rooms[rooms.length - 1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZm92LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbmVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9tb3VzZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wdWJTdWIvcHJpb3JpdHlTdWJzY3JpYmVyTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wdWJTdWIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJDZWxsLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JuZ0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3NoYXBlcy9lbGxpcHNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFB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O1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7U0FDL0I7SUFFTCxDQUFDO0NBQ0o7QUFFYyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0gZnJvbSAnLi9rZXlib2FyZE1vbml0b3InXG5pbXBvcnQgeyBNb3VzZU1vbml0b3IgfSBmcm9tICcuL21vdXNlTW9uaXRvcidcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vYXNzZXRIZWxwZXInXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4vY2FudmFzUmVuZGVyZXInXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgUFVCU1VCIH0gZnJvbSAnLi9wdWJTdWIvcHViU3ViJ1xuaW1wb3J0IHsgUmVjdCwgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSURfTUFOQUdFUiB9IGZyb20gJy4vaWRNYW5hZ2VyJ1xuaW1wb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCB7IG1hcEdlbmVyYXRvcjEgfSBmcm9tICcuL21hcEdlbmVyYXRpb24nXG4vL2ltcG9ydCB7IE1hcEdlbkhlbHBlciB9IGZyb20gJy4vbWFwR2VuSGVscGVyJ1xuXG5cbi8vIHNpemluZ1xuY29uc3QgVElMRV9XSURUSCA9IDEwXG5jb25zdCBUSUxFX0hFSUdIVCA9IDEwXG5cbi8vIFRIRVNFIEFSRSBJTiBUSUxFIFNJWkVTXG5jb25zdCBTQ1JFRU5fV0lEVEggPSA4MFxuY29uc3QgU0NSRUVOX0hFSUdIVCA9IDUwXG5jb25zdCBNQVBfV0lEVEggPSA4MFxuY29uc3QgTUFQX0hFSUdIVCA9IDQ1XG5cbi8vIExldCdzIGxvb2sgZm9yIHF1ZXJ5IHBhcmFtcyB3aXRoIHdoaWNoIHRvIHNlZWQgdGhlIGdlbmVyYXRvclxuLy8gSU5JVElBTElaRSBPVVIgU0VFRFxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuY29uc3Qgc2VlZFN0ciA9IHVybFBhcmFtcy5nZXQoJ3NlZWQnKSBcbmlmKCFzZWVkU3RyKXtcbiAgICBjb25zdCBzZWVkID0gUkFORE9NLnNlZWQoc2VlZFN0ciB8fCB1bmRlZmluZWQpXG4gICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgaWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDpuZXd1cmx9LCcnLG5ld3VybClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cbiAgICBcbn0gZWxzZSB7XG4gICAgUkFORE9NLnNlZWQoc2VlZFN0cilcbn1cblxuY29uc3QgQ09MT1JTID0ge1xuICAgICdvdXRzaWRlJzogJyMwMDAwMDAnLFxuICAgICdibGFjayc6ICcjMDAwMDAwJyxcbiAgICAnZGFya193YWxsJzogJyMwMDAwNjQnLFxuICAgICdkYXJrX2dyb3VuZCc6ICcjMzIzMjk2JyxcbiAgICAnbGlnaHRfd2FsbCc6ICcjODI2RTMyJyxcbiAgICAnbGlnaHRfZ3JvdW5kJzogJyNDOEI0MzInXG59XG5cbmNvbnN0IHBsYXllcjogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjRkZGRkZGJylcbmNvbnN0IG5wYzogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjQ0MwMDAwJylcbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKClcblxuY29uc3QgY2FtZXJhRnJhbWUgPSBSZWN0Lm1ha2UoMCwwLCA4MCwgNDUpIC8vIENBTUVSQSBJUyBJTiBXT1JMRCBDRUxMUywgTk9UIEFCU09MVVRFIFVOSVRTXG5jb25zdCByZW5kZXJHcmlkID0gbmV3IEdyaWQ8SVJlbmRlckNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJyAnLENPTE9SUy5ibGFjayxDT0xPUlMuZGFya19ncm91bmQpXG59KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUaWxlKHgseSwgdHJ1ZSlcbn0pXG5cbmNvbnN0IEZPVl9SQURJVVMgPSAxMFxubGV0IGZvdlJlY29tcHV0ZSA9IHRydWVcbi8vIFRPRE86IFRyYW5zbGF0ZSB0aGlzIGZyb20gd29ybGQgdG8gc2NyZWVuP1xuY29uc3QgZm92R3JpZDogR3JpZDxGT1ZDZWxsPiA9IG5ldyBHcmlkPEZPVkNlbGw+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbi8vIGlmIHdlIHR1cm4gZm92IG9uIGl0J2xsIGNoYW5nZSBpdCBvdmVyIHRvIGZhbHNlXG5mb3ZHcmlkLnNldEVhY2goKCk6IEZPVkNlbGwgPT4geyByZXR1cm4ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGV4cGxvcmVkOiBmYWxzZVxufX0pXG5cblxuLy8gdGhpcyB3aWxsIGFsc28gcG9wdWxhdGUgdGhlIHJvb21zXG5jb25zdCByb29tczogSVJlY3RbXSA9IFtdXG4vL2dlbmVyYXRlIHRoZSByZWxldmFudCB0ZXJyYWluXG5tYXBHZW5lcmF0b3IxKHRpbGVHcmlkLCByb29tcylcblxuLy8gY29uc3QgY2FtZXJhRnJhbWUgPSBSZWN0Lm1ha2UoMCwgMCwgMTAsIDEwKVxuXG4vLyBTRVQgRW50aXR5IExvY2F0aW9uc1xue1xuICAgIGNvbnN0IHBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1swXSlcbiAgICBQb2ludC5zZXQocGxheWVyLCBwY2VudGVyLngsIHBjZW50ZXIueSkgXG4gICAgY29uc3QgbnBjZW50ZXIgPSBSZWN0LmNlbnRlcihyb29tc1tyb29tcy5sZW5ndGggLSAxXSlcbiAgICBQb2ludC5zZXQobnBjLCBucGNlbnRlci54LCBucGNlbnRlci55KVxufVxuXG5jb25zdCByZW5kZXJUb0dyaWQgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIGVudGl0aWVzOiBFbnRpdHlbXSwgcmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICAvLyByZW5kZXJHcmlkIGlzIGluIFNDUkVFTiBjb29yZGluYXRlcywgYW5kIHdpbGwgaGF2ZSBpdCdzIFhZIGlnbm9yZWQgZm9yIG91ciBwdXJwb3Nlc1xuICAgIC8vIHRpbGVHcmlkLCBlbnRpdGllcyBhbmQgZm92R3JpZCBhcmUgaW4gV09STEQgY29vcmRpbmF0ZXMgYW5kIHdpbGwgaGF2ZSB0aGVpciBYWSBhbmQgeSBpZ25vcmVkIGZvciBub3dcbiAgICBcbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuXG4gICAgZm9yKGxldCByZWxDYW1lcmFZID0gMDsgcmVsQ2FtZXJhWSA8IGNhbWVyYUZyYW1lLmhlaWdodDsgcmVsQ2FtZXJhWSsrKXtcbiAgICAgICAgZm9yKGxldCByZWxDYW1lcmFYID0gMDsgcmVsQ2FtZXJhWCA8IGNhbWVyYUZyYW1lLndpZHRoOyByZWxDYW1lcmFYKyspe1xuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSByZW5kZXJHcmlkIGFuZCB0aGUgY2FtZXJhc1xuICAgICAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIHJlbENhbWVyYVgsIHJlbENhbWVyYVkpXG4gICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHRpbGVHcmlkLCBmb3ZHcmlkLCBhbmQgZW50aXRpZXNcbiAgICAgICAgICAgIFBvaW50LnNldCh3b3JsZFAsIHNjcmVlblAueCArIGNhbWVyYUZyYW1lLngsIHNjcmVlblAueSArIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIExldCdzIGRvIHNvbWUgYm91bmRzIGNoZWNraW5nXG4gICAgICAgICAgICAvLyB3ZSBrbm93IHRoZXNlIHBvaXRucyBhcmUgYWx3YXlzIGluIGNhbWVyYXMsIHNvIG5ldmVyIG5lZWQgdG8gY2hlY2sgdGhhdFxuICAgICAgICAgICAgLy8gd2UgYXJlIGdvaW5nIHRvIG9mZmxvYWQgdGhlIGNhc2Ugb2YgY2hlY2tpbmcgaWYgdGhlIHJlbmRlckdyaWQgY2FuIGZpdCB0aGUgY2FtZXJhU2l6ZSBmb3Igbm93XG4gICAgICAgICAgICAvLyBzbyBmb3Igbm93IGp1c3QgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSBvZiB0aGUgdGlsZUdyaWQsIHdoaWNoIGN1cnJlbnRseSBzaG91bGQgYmUgdGhlIHNhbWUgZGltZW5zaW9ucyBhcyB0aGUgZm92R3JpZCwgdGhvdWdoIHRoYXQgaXMgYm91bmQgdG8gY2hhbmdlIGFzIHdlIHRyeSBhbmQgb3B0aW1pemUgdGhpbmdzXG4gICAgICAgICAgICAvLyBzb29vb29vLCBsZXQncyBjaGVjayBpZiB3ZSBhcmUgaW5zaWRlIHRoZSB0aWxlR3JpZFxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ2VsbCAgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKHRpbGVHcmlkLmluQm91bmRzWFkod29ybGRQLngsIHdvcmxkUC55KSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFAod29ybGRQKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAod29ybGRQKVxuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gJydcbiAgICAgICAgICAgICAgICBpZihmb3ZDZWxsLmV4cGxvcmVkKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya193YWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5saWdodF9ncm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9ICcnXG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5mb3JlQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5OiBFbnRpdHkpOiB2b2lkID0+IHtcbiAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIGVudGl0eS54IC0gY2FtZXJhRnJhbWUueCwgZW50aXR5LnkgLSBjYW1lcmFGcmFtZS55KVxuICAgICAgICAvLyBpZiB0aGlzIGlzIGluc2lkZSBvZiB0aGUgY2FtZXJhIGJvdW5kc1xuICAgICAgICBpZihjYW1lcmFGcmFtZS54IDw9IGVudGl0eS54ICYmIGVudGl0eS54IDw9IGNhbWVyYUZyYW1lLnggKyBjYW1lcmFGcmFtZS53aWR0aCAtIDEgJiZcbiAgICAgICAgICAgIGNhbWVyYUZyYW1lLnkgPD0gZW50aXR5LnkgJiYgZW50aXR5LnkgPD0gY2FtZXJhRnJhbWUueSArIGNhbWVyYUZyYW1lLmhlaWdodCAtIDEpe1xuICAgICAgICAgICAgY29uc3QgckNlbGw6IElSZW5kZXJDZWxsID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsOiBGT1ZDZWxsID0gZm92R3JpZC5nZXRQKGVudGl0eSlcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgICAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5cbi8vIGNsZWFuIHRoaXMgdXBcbmNvbnN0IG1vdmVzOiBhbnlbXSA9IFtdXG5jb25zdCBNb3ZlUHJvY2Vzc29yID0ge1xuICAgIC8vIGN1cnJlbnRseSBqdXN0IHRpZWQgdG8gdGhlIHBsYXllclxuICAgIG1vdmVzXG59XG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmUnLCAobXNnKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2gobXNnKVxufSkgXG5cbmxvYWRJbWFnZSgnYXNzZXRzL291dC5wbmcnKS50aGVuKChpbWFnZTogYW55KTogdm9pZCA9PiB7XG4gICAgcmVuZGVyZXIuaW5pdChjYW52YXMsIGltYWdlKVxuICAgIC8vIExvb3BcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICByZW5kZXJlci5jbGVhcigpXG5cbiAgICAgICAgLy8gTG9vayBhdCBwbGF5ZXIgaW5wdXRcbiAgICAgICAgLy8gWiBsZXRzIHVzIGJlIGluIFpPT00gTU9ERSEhISFcbiAgICAgICAgLy8gd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhpcyBpbnRvIGEgXCJtb3ZlXCIgdHlwZSBhY3Rpb25cbiAgICAgICAgLy8gd2UnbGwganVzdCBkbyB0aGUgbW92ZSBzZWN0aW9uXG4gICAgICAgIFxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgICAgICB9XG4gICAgICAgIC8vIHF1aWNrIG51bWJlciBnZW5lcmF0b3JcbiAgICAgICAgaWYoIWttLmdldEtleVN0YXRlKCduJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnbicpLmhhbGZTdGVwcyA+IDApKXtcbiAgICAgICAgICAgIGNvbnN0IHNlZWQgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/c2VlZD0nICsgc2VlZFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2Nlc3MgbW92ZXNcbiAgICAgICAgLy8gZXZlbnR1YWxseSB3ZSdsbCBjb21wb25lbnRpemUgdGhpcyBiZXR0ZXJcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5mb3JFYWNoKChtc2c6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1zZy5kZWx0YVxuICAgICAgICAgICAgY29uc3QgaWQgPSBtc2cuaWRcbiAgICAgICAgICAgIGNvbnN0IG1vdmVyID0gZW50aXRpZXMuZmluZCgoZSk6IGJvb2xlYW4gPT4gZS5pZCA9PSBpZClcbiAgICAgICAgICAgIGlmKCFtb3Zlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKHBsYXllci54ICsgbW92ZS54LCBwbGF5ZXIueSArIG1vdmUueSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgaWYoIXRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXIubW92ZShtb3ZlLngsIG1vdmUueSlcbiAgICAgICAgICAgICAgICAgICAgaWYobW92ZXIuaWQgPT09IHBsYXllci5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3ZSZWNvbXB1dGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZWQnLCBtc2cpIC8vIG9ubHkgcHVibGlzaCBtb3ZlIGlmIHRoZSBlbnRpdHkgYWN0dWFsbHkgY29tcGxldGVkIHRoZSBtb3ZlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMubGVuZ3RoID0gMFxuICAgICAgICBpZihmb3ZSZWNvbXB1dGUpe1xuICAgICAgICAgICAgY2FsY3VsYXRlRk9WKGZvdkdyaWQsIHRpbGVHcmlkLCBwbGF5ZXIsIEZPVl9SQURJVVMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXRlcm1pbmUgY2FtZXJhIHBvc2l0aW9uXG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHBsYXllci54IC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcblxuICAgICAgICAvLyB3ZSBtaWdodCBtb3ZlIGFsbCBvZiB0aGlzIGludG8gc29tZSBvZmZzY3JlZW4gXG4gICAgICAgIHJlbmRlclRvR3JpZCh0aWxlR3JpZCwgZm92R3JpZCwgZW50aXRpZXMsIHJlbmRlckdyaWQpXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihyZW5kZXJHcmlkKVxuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDUwMClcbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG5cbn0pLmNhdGNoKChlcnI6IGFueSk6IHZvaWQgPT4gY29uc29sZS5sb2coZXJyKSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGUiLCJmdW5jdGlvbiBsb2FkSW1hZ2UodXJsOiBzdHJpbmcpOiBhbnl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpOiBhbnkgPT4gcmVzb2x2ZShpbWcpKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKTogYW55ID0+IHJlamVjdChuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIGltYWdlIGZyb20gJHt1cmx9YCkpKVxuICAgICAgICBpbWcuc3JjID0gdXJsXG4gICAgfSlcbn1cblxuZXhwb3J0IHtsb2FkSW1hZ2V9IiwiaW1wb3J0IHsgSVJlbmRlckNlbGwgfSBmcm9tICcuL3JlbmRlckNlbGwnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgQ09ERV9UT19SRUNUX0hBU0gsIGRyYXdTZWN0aW9uLCBjb2RlIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3IgdGFraW5nIGEgcmVuZGVyIGdyaWQgYW5kIGNvbnZlcnRpbmcgaXQgdG8gaW1hZ2VzXG4gKiBvbiB0aGUgY2FudmFzXG4gKi9cbmNsYXNzIENhbnZhc1JlbmRlcmVyIHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgdW5kZWZpbmVkO1xuICAgIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGluaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQpOiBDYW52YXNSZW5kZXJlcntcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgLy8gd2UgYXJlIGp1c3QgZm9yY2luZyB0aGlzIGZvciBub3csIHdlIHdpbGwgY2hlY2sgaWYgaXQncyBudWxsXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcyEuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZihjdHggPT09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2V0IGNvbnRleHQgZnJvbSBjYW52YXMnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMuc3ByaXRlc2hlZXQgPSBzcHJpdGVzaGVldFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvLyBldmVudHVhbGx5IHdlIG5lZWQgdG8gcGFzcyBpbiB0aGUgZGltZW5zaW9ucyB3ZSBhcmUgcmVuZGVyaW5nIHRvIGFzIHdlbGxcbiAgICAvLyBmb3Igbm93IGl0J3MgZmluZVxuICAgIHJlbmRlcihyZW5kZXJHcmlkOiBHcmlkPElSZW5kZXJDZWxsPiwgYmFja2dyb3VuZDogc3RyaW5nID0gJyMwMDAwMDAnKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsMCwgcmVuZGVyR3JpZC53aWR0aCAqIDEwLCByZW5kZXJHcmlkLmhlaWdodCAqIDEwKVxuICAgICAgICAvLyBsZXQncyB0cnkgc2V0dGluZyBhIGJhY2tncm91bmQgY29sb3IgYXMgd2VsbFxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBkZXN0UmVjdCA9IFJlY3QubWFrZSgwLDAsMCwwKVxuICAgICAgICByZW5kZXJHcmlkLmZvckVhY2goKFxuICAgICAgICAgICAgY2VsbDogSVJlbmRlckNlbGwsIFxuICAgICAgICAgICAgaW5kZXg6IG51bWJlciwgXG4gICAgICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgUmVjdC5zZXQoZGVzdFJlY3QsIHggKiAxMCwgeSAqIDEwLCAxMCwgMTApXG4gICAgICAgICAgICAvLyB0b2RvLCBhbGxvdyB1cyB0byBtYXJrIHJlbmRlciBjZWxscyBhcyAnZW1wdHknIHJhdGhlciB0aGFuIHNwYWNlcywgdGhpcyBtaWdodCBoZWxwIHNwZWVkIHVwIHJlbmRlciB0aW1lXG4gICAgICAgICAgICBpZihjZWxsLmNoYXJhY3Rlci5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIGlmKGNlbGwuYmFja0NvbG9yICE9PSBiYWNrZ3JvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBhY3R1YWxseSBkb24ndCBrbm93IGlmIHRoaXMgaGVscHMsIGJ1dCBpdCBzZWVtcyBsaWtlIHNldHRpbmcgdGhlIGZpbGxTdHlsZSBjb3VsZCBpbnZvbHZlIG1vcmUgY29tcGxpY2F0aW9ucyB0aGFuIGp1c3QgY2hlY2tpbmcgaWYgaXQncyB0aGUgc2FtZVxuICAgICAgICAgICAgICAgICAgICBpZihjdHguZmlsbFN0eWxlICE9PSBjZWxsLmJhY2tDb2xvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY2VsbC5iYWNrQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyY1JlY3QgPSBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlKGNlbGwuY2hhcmFjdGVyKV1cbiAgICAgICAgICAgICAgICBkcmF3U2VjdGlvbihjdHgsIHRoaXMuc3ByaXRlc2hlZXQsIHNyY1JlY3QsIGRlc3RSZWN0LCBjZWxsLmZvcmVDb2xvciwgY2VsbC5iYWNrQ29sb3IgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jYW52YXMgPT0gbnVsbCB8fCB0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgeyBDYW52YXNSZW5kZXJlciB9IiwiLyoqXG4gKiBBIGdlbmVyaWMgb2JqZWN0IHRvIHJlcHJlc2VudCBldmVyeXRoaW5nIHRoYXQgaXMgbm90IHRoZSBtYXAgaXRzZWxmXG4gKiBGb3IgdGhhdCwgc2VlIHRoZSBUaWxlIGNsYXNzXG4gKi9cbmNsYXNzIEVudGl0eSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgeDogbnVtYmVyLHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYW4gZW50aXR5LCBjdXJyZW50bHkgZG9lc24ndCBjaGVjayBpZiBpdCBjYW4gb3Igbm90LCBqdXN0IGRvZXNcbiAgICAgKiBAcGFyYW0gZHggQW1vdW50IHRvIG1vdmUgaW4gdGhlIHggZGlyZWN0aW9uIChsZWZ0IGlzIG5lZ2F0aXZlLCByaWdodCBpcyBwb3NpdGl2ZSlcbiAgICAgKiBAcGFyYW0gZHkgQW1vdW50IHRvIG1vdmUgaW4gdGhlIHkgZGlyZWN0aW9uICh1cCBpcyBuZWdhdGl2ZSwgZG93biBpcyBwb3NpdGl2ZSlcbiAgICAgKi9cbiAgICBtb3ZlKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lke1xuICAgICAgICB0aGlzLnggKz0gZHhcbiAgICAgICAgdGhpcy55ICs9IGR5XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbnRpdHkgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVBvaW50LCBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG5pbnRlcmZhY2UgRk9WQ2VsbCAge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgZXhwbG9yZWQ6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgU2hhZG93UmFuZ2Uge1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzQmV0d2VlbkluY2x1c2l2ZSA9IChhOiBudW1iZXIsYjogbnVtYmVyLHQ6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGlmKGIgPCBhKXtcbiAgICAgICAgcmV0dXJuIGIgPD0gdCAmJiB0IDw9IGFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA8PSB0ICYmIHQgPD0gYlxuICAgIH1cbn1cblxuY29uc3QgY2FsY3VsYXRlT2N0YW50ID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIsXG4gICAgaG9yaXpvbnRhbE5vdFZlcnRpY2FsOiBib29sZWFuLCB4RGlyZWN0aW9uOiBudW1iZXIsIHlEaXJlY3Rpb246IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIFxuICAgIC8vIE91ciBzaGFkb3dzIHdlIHdpbGwgY2FzdFxuICAgIGNvbnN0IHNoYWRvd1JhbmdlczogU2hhZG93UmFuZ2VbXSA9IFtdXG4gICAgLy8gb3VyIHN0YXJ0aW5nIGxvY2F0aW9uIGlzIGFsd2F5cyB2aXNpYmxlXG4gICAgZm92R3JpZC5nZXRQKHN0YXJ0UG9pbnQpLnZpc2libGUgPSB0cnVlXG4gICAgZm9yKGxldCByb3cgPSAxOyByb3cgPCBtYXhEaXN0YW5jZTsgcm93Kyspe1xuICAgICAgICBjb25zdCByb3dTaXplID0gcm93ICsgMVxuICAgICAgICBmb3IobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHJvd1NpemU7IGNvbHVtbisrKXtcbiAgICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgb2N0YW50LCB0aGUgdHJhdmVsbGVyIHdpbGwgbW92ZSBkaWZmZXJlbnRseVxuICAgICAgICAgICAgY29uc3QgdHJhdmVsbGVyID0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgICAgICAgICAgdHJhdmVsbGVyLnggKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geERpcmVjdGlvbiAqIGNvbHVtbiA6IHhEaXJlY3Rpb24gKiByb3dcbiAgICAgICAgICAgIHRyYXZlbGxlci55ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHlEaXJlY3Rpb24gKiByb3cgOiB5RGlyZWN0aW9uICogY29sdW1uXG5cbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBvdXQgb2YgYm91bmRzLCBza2lwXG4gICAgICAgICAgICBpZighdGlsZUdyaWQuaW5Cb3VuZHNYWSh0cmF2ZWxsZXIueCwgdHJhdmVsbGVyLnkpKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0UCh0cmF2ZWxsZXIpXG4gICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHRyYXZlbGxlcilcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjb2x1bW4vcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgZW5kID0gKGNvbHVtbiArIDEpL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IG1pZGRsZSA9IChzdGFydCArIGVuZCkgLyAyXG5cbiAgICAgICAgICAgIC8vIHRlc3QgZm9yIHZpc2libGl0eVxuICAgICAgICAgICAgbGV0IHZpc2liaWxpdHkgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBlZGdlcyBhcmUgY2xlYXIgb3Igbm90XG4gICAgICAgICAgICBsZXQgc3RhcnRDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBtaWRkbGVDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBlbmRDbGVhciA9IHRydWVcblxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBidWlsdCBzb21lIHNoYWRvdyByYW5nZXNcbiAgICAgICAgICAgIGlmKHNoYWRvd1Jhbmdlcy5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiBhbnkgc2hhZG93cyBjcm9zcyBvdXIgdGhyZWUgcG9pbnRzXG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLmZvckVhY2goIChzcjogU2hhZG93UmFuZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDbGVhciA9IHN0YXJ0Q2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBzdGFydClcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlQ2xlYXIgPSBtaWRkbGVDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIG1pZGRsZSlcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2xlYXIgPSBlbmRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIGVuZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHZpc2liaWxpdHkgYmFzZWQgb2ZmIG9mIG91ciBzYW1wbGluZ1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSBtaWRkbGVDbGVhciAmJiAoc3RhcnRDbGVhciB8fCBlbmRDbGVhcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd2UgYmxvY2sgc2lnaHQsIGNhbGN1bGF0ZSBvdXIgc2hhZG93IGVuZHNcbiAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tTaWdodCl7XG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLnB1c2goe3N0YXJ0LCBlbmR9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3ZDZWxsLnZpc2libGUgPSB2aXNpYmlsaXR5XG4gICAgICAgICAgICBpZihmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgICAgIGZvdkNlbGwuZXhwbG9yZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNhbGN1bGF0ZUZPViA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgLy8gYmUgZGVmYXVsdCB3ZSBhcmUgZ29pbmcgdG8gc2hhZG93Q2FzdFxuICAgIC8vIGJ5IGRlZmF1bHQgZXZlcnl0aGluZyBpcyBub3QgdmlzaWJsZVxuICAgIGZvdkdyaWQuZm9yRWFjaCgoY2VsbCk6IHZvaWQgPT4geyBjZWxsLnZpc2libGUgPSBmYWxzZSB9KVxuICAgIC8vIE5OV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAtMSlcbiAgICAvLyBXTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIC0xKVxuICAgIC8vIFdTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgMSlcbiAgICAvLyBTU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgMSlcbiAgICAvLyBTU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAxKVxuICAgIC8vIEVTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAxKVxuICAgIC8vIEVORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAtMSlcbiAgICAvLyBOTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAtMSlcbn1cblxuZXhwb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsfSIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgU2V0RWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBhbnk7XG59XG5cbmludGVyZmFjZSBGb3JFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG59XG5cbi8vIFRPRE86IGdpdmUgZ3JpZHMgdGhlaXIgb3duIHggYW5kIHlzLCB0aGF0IHdheSB0aGV5IGNhbiBpbXBsZW1lbnQgYWxsIHRoZSBwb2ludCBhbmQgcmVjdCBzdHVmZlxuLyoqXG4gKiBHcmlkIHRvIHJlcHJlc2VudCAyZCBjb2xsZWN0aW9ucywgcGxlYXNlIGRvbid0IHJlc2l6ZSBpdCBhZnRlciBjcmVhdGluZyBpdFxuICovXG5jbGFzcyBHcmlkPFQ+IGltcGxlbWVudHMgSVJlY3Qge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgY2VsbHM6IFRbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCl7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgdXNlZCBmb3IgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGdyaWQsIG92ZXJ3cml0ZXMgcHJldmlvdXMgZW50cmllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBlbnRyeSwgZG9uJ3QgdXNlIHRoaXMgdW5sZXNzIGVudHJpZXMgYXJlIGluZGVwZW5kZW50IGZyb20gZWFjaCBvdGhlclxuICAgICAqIEBwYXJhbSBmbiB0aGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjZWxsIGl0c2VsZiBhcyB0aGUgZmlyc3QgcHJvcGVydHkgYW5kIFxuICAgICAqL1xuICAgIHNldEVhY2goZm46IFNldEVhY2hGbjxUPik6IEdyaWQ8VD57XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgeCA9IGkgJSB0aGlzLndpZHRoXG4gICAgICAgICAgICB5ID0gKGkgLSB4KS90aGlzLndpZHRoXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBzb21ldGhpbmcgZm9yIGVhY2ggbWVtYmVyIG9mIGEgY2VsbCwgZ29pbmcgcm93IGJ5IHJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZm4gR2V0IHBhc3NlZCB0aGUgY2VsbCwgaW5kZXgsIHggYW5kIHlcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuOiBGb3JFYWNoRm48VD4pOiB2b2lke1xuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKyl7XG4gICAgICAgICAgICAgICAgZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHggeCBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICogQHBhcmFtIHkgeSBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICovXG4gICAgZ2V0WFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUICB7XG4gICAgICAgIGlmKCF0aGlzLmluQm91bmRzWFkoeCx5KSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdW5kYXJ5IGFjY2VzcyBpc3N1ZScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbeCArIHkgKiB0aGlzLndpZHRoXVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGdldFhZLiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBwb2ludCBjb250YWlucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2VsbCB5b3Ugd2FudCB0byBnZXRcbiAgICAgKi9cbiAgICBnZXRQKHBvaW50OiBJUG9pbnQpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WFkocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG5cbiAgICBpbkJvdW5kc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbntcbiAgICAgICAgaWYoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNlbGwgYmFzZWQgb2ZmIG9mIGFuIGluZGV4LCB1c3VhbGx5IGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGZvckVhY2ggbG9vcCBvZiBhIHNpbWlsYXJseSBzaXplZCBncmlkXG4gICAgICogTk9URSBiZSBjYXJlZnVsIHRoYXQgdGhlIG90aGVyIGdyaWQgaGFzIHRoZSBzYW1lIGRpbWVuc2lvbiB1bmxlc3MgeW91IHJlYWxseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBjZWxscywgbW9zdGx5IHRvIGJlIHVzZWQgd2l0aCBncmlkcyB0aGF0IGFyZSB3b3JraW5nIGFsb25nc2lkZSBhIGRpZmZlcmVudCBmb3JFYWNoIGxvb3BcbiAgICAgKi9cbiAgICBnZXRJKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaW5kZXhdXG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJjbGFzcyBJRE1hbmFnZXIge1xuICAgIHByaXZhdGUgbGFzdElkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sYXN0SWQgPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCBpZFxuICAgICAqL1xuICAgIG5leHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdElkKytcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSURfTUFOQUdFUlxuICovXG5jb25zdCBJRF9NQU5BR0VSID0gbmV3IElETWFuYWdlcigpXG5leHBvcnQge0lEX01BTkFHRVIsIElETWFuYWdlcn0iLCJpbnRlcmZhY2UgS2V5U3RhdGUgeyBcbiAgICBrZXk6IHN0cmluZztcbiAgICBpc0Rvd246IGJvb2xlYW47XG4gICAgaGFsZlN0ZXBzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG5jb25zdCBtYWtlS2V5U3RhdGUgPSAoa2V5OiBzdHJpbmcsIGlzRG93bjogYm9vbGVhbiA9IGZhbHNlLCBoYWxmU3RlcHM6IG51bWJlciA9IDApOiBLZXlTdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBpc0Rvd24sXG4gICAgICAgIGhhbGZTdGVwc1xuICAgIH1cbn1cblxuY2xhc3MgS2V5Ym9hcmRNb25pdG9yIHtcbiAgICBrZXlIYXNoOiBIYXNoPEtleVN0YXRlPjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmtleUhhc2ggPSB7fVxuICAgIH1cbiAgICAvLyBBdHRhY2ggdG8gdGhlIERPTSwgdXN1YWxseSB0aGUgZG9jdW1lbnQgYXMgYSB3aG9sZSwgYnV0IHlvdSBjYW4gbWFrZSBpdCBtb3JlIHNwZWNpZmljIGlmIHlvdSB3YW50XG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IEtleWJvYXJkTW9uaXRvciB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKCFrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZihrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBnZXRLZXlTdGF0ZShrZXk6IHN0cmluZyk6IEtleVN0YXRle1xuICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmtleUhhc2hba2V5XVxuICAgIH1cbiAgICByZXNldFN0ZXBzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5rZXlIYXNoKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5c1tpXV0uaGFsZlN0ZXBzID0gMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IGZyb20gJy4vc2hhcGVzL2VsbGlwc2UnXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHN0YXRpYyBtZXRob2RzIGZvciBoZWxwaW5nIHRvIG1hbmlwdWxhdGUgbWFwc1xuICovXG5jbGFzcyBNYXBHZW5IZWxwZXIge1xuICAgIC8vIFRPRE86IE1heWJlIGNvbWUgdXAgd2l0aCBhIGJldHRlciBuYW1lXG4gICAgLyoqXG4gICAgICogUGxhY2UgYSByb29tIGluc2lkZSBhIGdyb3VwIG9mIHRpbGVzXG4gICAgICogQHBhcmFtIHRpbGVHcmlkIHRoZSBncmlkIG9mIHRpbGVzIHRvIGFmZmVjdFxuICAgICAqIEBwYXJhbSByb29tIHRoZSByb29tIHNlY3Rpb24gdGhhdCB3ZSB3aWxsIG9wZW4gdXBcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUm9vbSh0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbTogSVJlY3QpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogQm91bmRzIGNoZWNrIG9yIHNvbWV0aGluZywgcmlnaHQgbm93IHRlcnJpYmxlIHRoaW5ncyBjYW4gaGFwcGVuXG4gICAgICAgIGNvbnN0IHsgbGVmdCxyaWdodCx0b3AsYm90dG9tfSA9IFJlY3Quc2lkZXMocm9vbSlcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdG9wIG9uZSBlYXJseSBiZWNhdXNlIG9mIGhvdyB3ZSB3b3JrIHdpdGggYSBncmlkXG4gICAgICAgIC8vIHdlIHdpbGwgYWxzbyBpbmNsdWRlIGEgbWFyZ2luIG9mIG9uZSBvbiBhbGwgc2lkZXhcbiAgICAgICAgZm9yKGxldCB5ID0gdG9wICsgMTsgeSA8IGJvdHRvbSAtIDE7IHkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHggPSBsZWZ0ICsgMTsgeCA8IHJpZ2h0IC0gMTsgeCsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCwgeSlcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVIVHVubmVsKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCB4MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gc3dhcCB0aGVtIGFzIG5lY2Vzc2FyeVxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih4MSwgeDIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHgxLCB4MilcbiAgICAgICAgZm9yKGxldCB4ID0gbWluOyB4IDw9IG1heDsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVZUdW5uZWwodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHkxOiBudW1iZXIsIHkyOiBudW1iZXIsIHg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih5MSwgeTIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHkxLCB5MilcbiAgICAgICAgZm9yKGxldCB5ID0gbWluOyB5IDw9IG1heDsgeSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNhcnZlRWxsaXBzZSh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZWxsaXBzZTogSUVsbGlwc2UpOiB2b2lkIHtcbiAgICAgICAgdGlsZUdyaWQuZm9yRWFjaCgodGlsZSwgaW5kZXgsIHgsIHkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmKEVsbGlwc2UuY29udGFpbnNYWShlbGxpcHNlLCB4LHkpKXsgXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCB7IE1hcEdlbkhlbHBlciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5cbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IHsgTWFwR2VuSGVscGVyIH0gZnJvbSAnLi9tYXBHZW5IZWxwZXInXG5pbXBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IGZyb20gJy4vc2hhcGVzL2VsbGlwc2UnXG5cblxuY29uc3QgUk9PTV9NQVhfU0laRSA9IDEwXG5jb25zdCBST09NX01JTl9TSVpFID0gMTBcbmNvbnN0IE1BWF9ST09NUyA9IDMwXG5jb25zdCBNQVhfRUxMSVBTRV9SQURJVVMgPSBST09NX01BWF9TSVpFIC8gMlxuY29uc3QgTUlOX0VMTElQU0VfUkFESVVTID0gUk9PTV9NQVhfU0laRSAvIDRcblxuY29uc3QgQ0FWRV9FTExJUFNFUyA9IDEwXG5cbmNvbnN0IHJhbmRpbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihSQU5ET00ubmV4dCgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5jb25zdCByYW5kb21FbGxpcHNlID0gKG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IElFbGxpcHNlID0+IHtcbiAgICByZXR1cm4gRWxsaXBzZS5tYWtlKFxuICAgICAgICByYW5kaW50KG1pblgsIG1heFgpLFxuICAgICAgICByYW5kaW50KG1pblksIG1heFkpLFxuICAgICAgICByYW5kaW50KE1JTl9FTExJUFNFX1JBRElVUywgTUFYX0VMTElQU0VfUkFESVVTKSxcbiAgICAgICAgcmFuZGludChNSU5fRUxMSVBTRV9SQURJVVMsIE1BWF9FTExJUFNFX1JBRElVUyksXG4gICAgICAgIFJBTkRPTS5uZXh0KCkgKiBNYXRoLlBJICogMiBcbiAgICApXG59XG5cbi8qKlxuICogUGxhY2UgYSBidW5jaCBvZiByb29tcyBvcHBvcnR1bmlzdGljYWxseSwgYW5kIHRoZW4gY2FydmUgb3V0IHNvbWUgZWxsaXBzZXMgcmFuZG9tbHlcbiAqIEBwYXJhbSB0aWxlR3JpZCB0aWxlR3JpZCB0byBiZSBwb3B1bGF0ZWRcbiAqIEBwYXJhbSByb29tcyBMaXN0IG9mIHJvb21zIHRvIGJlIHBvcHVsYXRlZFxuICovXG5jb25zdCBtYXBHZW5lcmF0b3IxID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tczogSVJlY3RbXSk6IHZvaWQgPT4ge1xuICAgIGZvcihsZXQgciA9IDA7IHIgPCBNQVhfUk9PTVM7IHIrKyl7XG4gICAgXG4gICAgICAgIGNvbnN0IHcgPSByYW5kaW50KFJPT01fTUlOX1NJWkUsIFJPT01fTUFYX1NJWkUpXG4gICAgICAgIGNvbnN0IGggPSByYW5kaW50KFJPT01fTUlOX1NJWkUsIFJPT01fTUFYX1NJWkUpXG4gICAgICAgIGNvbnN0IHggPSByYW5kaW50KDAsIHRpbGVHcmlkLndpZHRoIC0gdyAtIDEpXG4gICAgICAgIGNvbnN0IHkgPSByYW5kaW50KDAsIHRpbGVHcmlkLmhlaWdodCAgLSBoIC0gMSlcbiAgICBcbiAgICAgICAgY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZSh4LHksdyxoKVxuICAgICAgICBsZXQgaW50ZXJzZWN0cyA9IGZhbHNlXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihSZWN0LmludGVyc2VjdHMobmV3Um9vbSwgcm9vbXNbaV0pKXtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWludGVyc2VjdHMpe1xuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIobmV3Um9vbSlcbiAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVSb29tKHRpbGVHcmlkLCBuZXdSb29tKVxuICAgICAgICAgICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zW3Jvb21zLmxlbmd0aCAtMV0pXG4gICAgICAgICAgICAgICAgaWYocmFuZGludCgwLDEpID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGxhc3RDZW50ZXIueSlcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVZUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueSwgY2VudGVyLnksIGNlbnRlci54KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVZUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueSwgY2VudGVyLnksIGxhc3RDZW50ZXIueClcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGNlbnRlci55KVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGUgPSAwOyBlIDwgQ0FWRV9FTExJUFNFUzsgZSsrKXtcbiAgICAgICAgTWFwR2VuSGVscGVyLmNhcnZlRWxsaXBzZSh0aWxlR3JpZCwgcmFuZG9tRWxsaXBzZShNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLndpZHRoIC0xIC0gTUFYX0VMTElQU0VfUkFESVVTLCBNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLmhlaWdodCAtIDEgLSBNQVhfRUxMSVBTRV9SQURJVVMpKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgbWFwR2VuZXJhdG9yMSB9IiwiLy8gTGV0J3MgZ28gYWhlYWQgYW5kIGNyZWF0ZSB0aGUgUG9pbnQgaW50ZXJmYWNlIGhlcmUsIHdlJ2xsIGV4cG9ydCBpdCBmb3IgdXNlIGxhdGVyIGluIHRoZSBwcm9qZWN0XG5cbmltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9zaGFwZXMvcG9pbnQnXG5cbi8qKlxuICogQ2xhc3MgdG8gaGVscCBtb25pdG9yIHRoaW5ncyB0aGF0IGhhdmUgaGFwcGVuZWQgdG8gdGhlIG1vdXNlIHNpbmNlIGxhc3QgdGltZSB0aGF0IHdlIGxvb2tlZFxuICovXG5cbmludGVyZmFjZSBIYWxmQ2xpY2sge1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgaXNEb3duOiBib29sZWFuO1xufVxuXG5jbGFzcyBNb3VzZU1vbml0b3Ige1xuICAgIC8qKlxuICAgICAqIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW91c2Ugb3ZlciB0aGUgYXR0YWNoZWQgZWxlbW50XG4gICAgICovXG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbW91c2UgaGFzIG1vdmVkIHNpbmNlIGxhc3QgdGltZSB3ZSBsb29rZWRcbiAgICAgKi9cbiAgICBoYXNNb3ZlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiB0cnVlIGlmIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgaW5zaWRlIHRoZSBjb250YWluZXIgXG4gICAgICovXG4gICAgaW5Db250YWluZXI6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBpcyB0aGUgbW91c2UgYnV0dG9uIGRvd24gKGN1cnJlbnRseSBvbmx5IHRyYWNrcyBsZWZ0KVxuICAgICAqL1xuICAgIGlzRG93bjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIElmIGEgZnVsbCBjbGljayBpcyB1cCBhbmQgZG93biwgdGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgdXBzIGFuZCBkb3ducywgdXNlZnVsIGZvciBkcmFncyBvciBvdGhlciB0aGluZ3MgdGhhdCBtaWdodCBoYXZlIGhhcHBlbmVkIGluIHRoZSBtZWFudGltZVxuICAgICAqL1xuICAgIGhhbGZDbGlja3M6IEhhbGZDbGlja1tdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBQb2ludC5tYWtlKDAsMClcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcyA9IFtdXG4gICAgICAgIC8vIFRPRE86IEFkZCBjbGljayB0cmFja2luZywgZGVwZW5kcyBvbiBob3cgcXVpY2tseSB3ZSBhcmUgcG9sbGluZ1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggdG8gdGhlIHNwZWNpZmljIGVsZW1lbnQgeW91IHdhbnQgdG8gbW9uaXRvciBtb3VzZSByZWxhdGVkIGV2ZW50cyB0b1xuICAgICAqIEBwYXJhbSBlbGVtZW50IHRoZSBwYXJ0aWN1bGFyIG1vdXNlIGV2ZW50XG4gICAgICovXG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IE1vdXNlTW9uaXRvciB7XG4gICAgICAgIC8vIFRPRE86IFdlJ2xsIHJlZ2lzdGVyIGNsaWNrIGhpc3RvcnkgaW4gdGhlIGZ1dHVyZSwgZm9yIG5vdyB3ZSBhcmUganVzdCBkb2luZyBtb3VzZSBvdmVyIGF0IHByZXNlbnRcbiAgICAgICAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIFBvaW50LnNldCh0aGlzLnBvc2l0aW9uLCBlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICB9XG4gICAgICAgIC8vIG1vdXNlIGVudGVycyBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBtb3ZlcyB3aXRoaW4gdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcblxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBleGl0cyB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBwYXkgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICAgICAgaWYoZS5idXR0b24gIT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQubWFrZShlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLnB1c2goeyBwb3NpdGlvbiwgaXNEb3duOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGJ1dHRvbiBpcyByYWlzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBwYXkgYXR0ZW50aW9uIHRvIHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgICAgICAgaWYoZS5idXR0b24gIT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQubWFrZShlLmNsaWVudFggLSByZWN0LmxlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLnB1c2goeyBwb3NpdGlvbiwgaXNEb3duOiBmYWxzZSB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIG1hcmsgdGhhdCB3ZSBoYXZlIHByb2Nlc3NlZCBhbGwgb2YgdGhlIGV2ZW50cyBzaW5jZSBvdXIgbGFzdCBwb2xsIG9mIHN0YXRlIGFuZCBpdCBjYW4gYmUgcmVzZXRcbiAgICAgKi9cbiAgICByZXNldCgpOiB2b2lke1xuICAgICAgICAvLyBieSBkZWZhdWx0IHdlIGhhdmVuJ3QgbW92ZWQgYmVmb3JlXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICAvLyBjbGVhciBvdXQgdGhlIGNsaWNrc1xuICAgICAgICB0aGlzLmhhbGZDbGlja3MubGVuZ3RoID0gMFxuICAgIH1cbn1cblxuZXhwb3J0IHsgTW91c2VNb25pdG9yIH0iLCJsZXQgX2lkID0gMFxuY29uc3QgbmV4dElkID0gKCk6IG51bWJlciA9PiBfaWQrK1xuXG4vLyBUT0RPOiBNYWtlIG1lc3NhZ2VzIGVudW1zP1xuXG4vLyBUT0RPOiBNYWtlIGFuIGludGVyZmFjZSBmb3IgdGhlIHN1YnNjcmliZXIgZnVuY3Rpb25cbnR5cGUgU3Vic2NyaWJlckZ1bmN0aW9uID0gKG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZykgPT4gdm9pZFxuXG5pbnRlcmZhY2UgU3Vic2NyaWJlck5vZGUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbjtcbiAgICBwcmlvcml0eTogbnVtYmVyO1xuICAgIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbn1cblxuXG5cbmNvbnN0IG1ha2VTdWJOb2RlID0gKHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwLCBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGwgPSBudWxsKTogU3Vic2NyaWJlck5vZGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBuZXh0SWQoKSxcbiAgICAgICAgc3ViRm4sXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBuZXh0XG4gICAgfVxufVxuXG4vLyBUT0RPOiA/PyBNYWtlIGl0IHNvIGEgc3Vic2NyaWJlciBsaXN0IGNvdWxkIGJlIGRlYWZlbmVkL2xpc3Rlbj9cblxuLyoqXG4gKiBBIGdyb3VwIG9mIGZ1bmN0aW9ucywgc29ydGVkIGJ5IHByaW9yaXR5LCB3aGljaCB3aWxsIGJlIGNhbGxlZCBzZXF1ZW50aWFsbHkgd2hlbiB0aGUgbGlzdCBpcyBub3RpZmllZCBvZiBhIG5ldyBtZXNzYWdlXG4gKi9cbmNsYXNzIFByaW9yaXR5U3Vic2NyaWJlckxpc3Qge1xuICAgIHJvb3Q6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICB0YWlsOiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgbGVuZ3RoOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbFxuICAgICAgICB0aGlzLnRhaWwgPSBudWxsXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIG1lc3NhZ2VzIHRoYXQgZ2V0IHNlbnQgdG8gdGhpcyBsaXN0IHZpYSB0aGUgbm90aWZ5IGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBtZXNzYWdlIG9iamVjdCB3aGVuZXZlciB0aGlzIHN1YnNjcmliZXIgbGlzdCBpcyBhY3RpdmF0ZWRcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgVGhlIGhpZ2hlciB0aGUgcHJpb3JpdHksIHRoZSBlYXJsaWVyIGl0IHdpbGwgcnVuLCBpZiBpdCBoYXMgdGhlIHNhbWUgcHJpb3JpdHkgdGhlIG9uZSB0aGF0IHdhcyBhZGRlZCBmaXJzdCB3aWxsIGZpcmUgZmlyc3RcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUoZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXJ7XG4gICAgICAgIC8vIENhc2UgIzEgRW1wdHkgU3Vic2NyaWJlciBMaXN0XG4gICAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSlcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMucm9vdFxuICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5pZFxuICAgICAgICB9IFxuICAgICAgICAvLyBDYXNlICMyIFdlIGFscmVhZHkgaGF2ZSBzb21lIHN1YnNjcmliZXJzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdCAvLyB3ZSBrbm93IGl0IHNob3VsZCBiZSBhIFN1YnNjcmliZXIgTm9kZSBhbmQgbm90IG51bGwsIGJlY2F1c2Ugd2UgYXJlIGhlcmVcblxuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlLCBuZXcgcm9vdFxuICAgICAgICAgICAgaWYocHJpb3JpdHkgPCB0cmF2ZWxsZXIhLnByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRoaXMucm9vdClcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm9ybWFsIGNhc2Ugd2UgaGF2ZSBvdGhlciB0aGluZ3MgdG8gd29ycnkgYWJvdXRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlKHRyYXZlbGxlciAmJiB0cmF2ZWxsZXIubmV4dCAmJiB0cmF2ZWxsZXIubmV4dC5wcmlvcml0eSA+PSBwcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgZWl0aGVyIGZvdW5kIGEgbm9kZSB3aXRoIGxvd2VyIHByaW9yaXR5IHRoYW4gdXMgb3Igd2UgaGF2ZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAgICAgICAgICAgdHJhdmVsbGVyIS5uZXh0ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0cmF2ZWxsZXIhLm5leHQpXG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0cmF2ZWxsZXJzIHdhcyB0aGUgb2xkIHRhaWxcbiAgICAgICAgICAgICAgICBpZih0cmF2ZWxsZXIgPT09IHRoaXMudGFpbCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgbmV4dCBvbmUgaXMgdGhlIG5ldyB0YWlsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IHRyYXZlbGxlciEubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlbGxlciEubmV4dC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1vc3QgaW1wb3JhbnQgaW5mb3JtYXRpb24gZm9yIHRoZSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB0b3BpYyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggcHVic3ViIHRvIHJlbWluZCB0aGUgc3Vic2NyaWJlciBvZiB0aGUgc3BlY2lmaWMgdG9waWMgb3Igc3VidG9waWNcbiAgICAgKi9cbiAgICBub3RpZnkobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3RcbiAgICAgICAgd2hpbGUodHJhdmVsbGVyICE9IG51bGwpe1xuICAgICAgICAgICAgdHJhdmVsbGVyLnN1YkZuKG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0iLCJpbXBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSBmcm9tICcuL3ByaW9yaXR5U3Vic2NyaWJlckxpc3QnXG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG4vKipcbiAqIFB1YnN1YiBpcyBhIHRvcGljLWJhc2VkIG9ic2VydmVyIHBhdHRlcm4gaW1wbGVtZW50YXRpb24gZGVzaWduZWQgdG8gYXZvaWQgdGlnaHQgY291cGxpbmcgb2YgY29tcG9uZW50c1xuICovXG5jbGFzcyBQdWJTdWIge1xuICAgIHRvcGljczogSGFzaDxQcmlvcml0eVN1YnNjcmliZXJMaXN0PjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnRvcGljcyA9IHt9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGEgbWVzc2FnZSB0byBhbGwgc3Vic2NyaWJlcnMgdG8gYSB0b3BpY1xuICAgICAqIEBwYXJhbSB0b3BpYyBUb3BpYyB0byB1c2UsIGlmIG5vYm9keSBpcyBzdWJzY3JpYmVkIHRvIGl0LCBub3RoaW5nIGhhcHBlbnNcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgYWN0dWFsIG1lc3NhZ2UgdG8gc2VuZCwgdGhpcyBjb3VsZCBiZSBhbnl0aGluZywgYnV0IGl0J3MgYSBzaW5nbGUgdGhpbmdcbiAgICAgKi9cbiAgICBwdWJsaXNoKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdLm5vdGlmeShtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBzcGVjaWZpYyB0b3BpYyB3aXRoIGEgZ2l2ZW4gcHJpb3JpdHksIHJldHVybnMgYW4gaWQgdGhhdCB5b3UnbGwgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB0b3BpYyB0aGUgc3BlY2lmaWMgdG9waWMgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIGZuIHRoZSBmdW5jdGlvbiB0byByZWNpZXZlIHRoZSBzcGVjaWZpYyBtZXNzYWdlIGFuZCB0b3BpYyBiZWluZyBicm9hZGNhc3RlZCB0b1xuICAgICAqIEBwYXJhbSBwcmlvcml0eSB0aGUgcHJpb3JpdHkgb2YgdGhlIGZ1bmN0aW9uIHRvIHN1YnNjcmliZSB0bywgaGlnaGVyIG51bWJlcnMgcnVuIGZpcnN0LCB0aGUgZGVmYXVsdCBpcyB6ZXJvLCBuZWdhdGl2ZSBudW1iZXJzIGFyZSBhbGxvd2VkXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcsIGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgaWYoIXRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10gPSBuZXcgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9waWNzW3RvcGljXS5zdWJzY3JpYmUoZm4sIHByaW9yaXR5KVxuICAgIH1cbn1cbi8vIE9VUiBVTklWRVJTQUwgREVGQVVMVCBQVUJTVUJcbmNvbnN0IFBVQlNVQiA9IG5ldyBQdWJTdWIoKVxuZXhwb3J0IHtQVUJTVUIsIFB1YlN1Yn0iLCIvKipcbiAqIEludGVyZmFjZSBmb3IgUmVuZGVyIENlbGxcbiAqL1xuaW50ZXJmYWNlIElSZW5kZXJDZWxsIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nOyAvLyB0aGlzIHNob3VsZCBvbmx5IGJlIHN0cmluZyBvZiBsZW5ndGggMVxuICAgIGZvcmVDb2xvcjogc3RyaW5nO1xuICAgIGJhY2tDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBjaGFyYWN0ZXI6IHN0cmluZywgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogSVJlbmRlckNlbGwgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgseSwgY2hhcmFjdGVyLCBmb3JlQ29sb3IsIGJhY2tDb2xvclxuICAgIH1cbn1cblxuY29uc3QgUmVuZGVyQ2VsbCA9IHtcbiAgICBtYWtlXG59XG5cbmV4cG9ydCB7IElSZW5kZXJDZWxsLCBSZW5kZXJDZWxsfSIsImltcG9ydCB7SVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgSGFzaFN0cjxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmludGVyZmFjZSBIYXNoTnVtPFQ+IHtcbiAgICBba2V5OiBudW1iZXJdOiBUO1xufVxuXG5jb25zdCBjb2RlID0gKGNoYXI6IHN0cmluZyk6IG51bWJlciA9PiBjaGFyLmNoYXJDb2RlQXQoMClcbmNvbnN0IENIQVJBQ1RFUl9IRUxQRVI6IEhhc2hTdHI8c3RyaW5nPiA9IHtcbiAgICBWRVJUSUNBTF9MSU5FOiAn4pSCJyxcbiAgICBIT1JJWk9OVEFMX0xJTkU6ICfilIAnLFxuICAgIENST1NTX0xJTkVTOiAn4pS8JyxcbiAgICBUX0xFRlQ6ICfilKQnLFxuICAgIFRfVVA6ICfilLQnLFxuICAgIFRfUklHSFQ6ICfilJwnLFxuICAgIFRfRE9XTjogJ+KUrCcsXG4gICAgVE9QX1JJR0hUOiAn4pSUJyxcbiAgICBCT1RUT01fUklHSFQ6ICfilIwnLFxuICAgIEJPVFRPTF9MRUZUOiAn4pSQJyxcbiAgICBUT1BfTEVGVDogJ+KUmCdcbn1cblxuY29uc3QgVElMRV9XSURUSCA9IDEwLCBUSUxFX0hFSUdIVCA9IDEwXG5cbmNvbnN0IENPREVfVE9fUkVDVF9IQVNIOiBIYXNoTnVtPElSZWN0PiA9IHt9XG5jb25zdCBzcGFjZUNvZGUgPSAgIGNvZGUoJyAnKVxuY29uc3QgYXRDb2RlID0gICAgICBjb2RlKCdAJylcbmNvbnN0IGFDb2RlID0gICAgICAgY29kZSgnYScpXG5jb25zdCB6Q29kZSA9ICAgICAgIGNvZGUoJ3onKVxuY29uc3QgQUNvZGUgPSAgICAgICBjb2RlKCdBJylcbmNvbnN0IFpDb2RlID0gICAgICAgY29kZSgnWicpXG5cblxuY29uc3QgY3RyaEhlbHBlciA9IChjb2RlOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbY29kZV0gPSBSZWN0Lm1ha2UoeCx5LCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cblxuLy8gV2Ugd2lsbCBmaWxsIGluIHRoZSBvdGhlciBjaGFyYWN0ZXJzIGFzIG5lY2Vzc2FyeVxuQ09ERV9UT19SRUNUX0hBU0hbc3BhY2VDb2RlXSA9IFJlY3QubWFrZSgwLCAwLCAxMCwgMTApXG5DT0RFX1RPX1JFQ1RfSEFTSFthdENvZGVdID0gUmVjdC5tYWtlKDAsIDEwLCAxMCwgMTApXG5mb3IobGV0IGkgPSBBQ29kZTsgaSA8PSBaQ29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIEFDb2RlKSAqIDEwLCAzMCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5mb3IobGV0IGkgPSBhQ29kZTsgaSA8PSB6Q29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IFJlY3QubWFrZSgoaSAtIGFDb2RlKSAqIDEwLCA0MCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG4vLyBmb3IgYnJldml0aWVzIHNha2VcbmNvbnN0IENIID0gQ0hBUkFDVEVSX0hFTFBFUlxuY3RyaEhlbHBlcihjb2RlKENILlZFUlRJQ0FMX0xJTkUpLCAxNDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guSE9SSVpPTlRBTF9MSU5FKSwgMTUwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkNST1NTX0xJTkVTKSwgMTYwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfTEVGVCksIDE3MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1VQKSwgMTgwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfUklHSFQpLCAxOTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9ET1dOKSwgMjAwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9SSUdIVCksIDIxMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT01fUklHSFQpLCAyMjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9MX0xFRlQpLCAyMzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX0xFRlQpLCAyNDAsMTApXG5cblxuZnVuY3Rpb24gZHJhd1NlY3Rpb24oY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHRpbGVzaGVldDogYW55LCBzcmNSZWN0OiBJUmVjdCwgZGVzdFJlY3Q6IElSZWN0LCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiB2b2lke1xuICAgIGN0eC5jbGVhclJlY3QoZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZHJhd0ltYWdlKHRpbGVzaGVldCwgc3JjUmVjdC54LCBzcmNSZWN0LnksIHNyY1JlY3Qud2lkdGgsIHNyY1JlY3QuaGVpZ2h0LCBkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAneG9yJ1xuICAgIGN0eC5maWxsU3R5bGU9Zm9yZUNvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3ZlcidcbiAgICBjdHguZmlsbFN0eWxlPWJhY2tDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcidcbn1cblxuZXhwb3J0ICB7IENPREVfVE9fUkVDVF9IQVNILCBDSEFSQUNURVJfSEVMUEVSLCBjb2RlLCBkcmF3U2VjdGlvbiB9IiwiLy8gV0FSTklORzogSEVSRSBUSEVSRSBCRSBEUkFHT05TLCAob3IgaW4gdGhpcyBjYXNlLCBhIGxvdCBvZiBjb2RlIEkgZG9uJ3R1bmRlcnN0YW5kKVxuXG4vLyBXRSBPTkxZIFdBTlQgT05FIFJORyBHRU5FUkFUT1IgQkVDQVVTRSBXRSBBTFdBWVMgV0FOVCBBIFNFRUQgRk9SIElUXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MjEyOTUvc2VlZGluZy10aGUtcmFuZG9tLW51bWJlci1nZW5lcmF0b3ItaW4tamF2YXNjcmlwdFxuXG4vLyBIYXNoaW5nIGZ1bmN0aW9uIGZvciB0YWtpbmcgc2ltcGxlIHN0cmluZyBhbmQgY3JlYXRpbmcgYmV0dGVyIFwidHJ1ZVwiIHNlZWRzXG4vLyBJIEhBVkUgTk8gSURFQSBXSEFUIFRIRSBNQUdJQyBOVUJNRVJTIEFSRSBGT1JcbmZ1bmN0aW9uIHhtdXIzKHN0cjogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGxldCBoID0gMTc3OTAzMzcwMyBeIHN0ci5sZW5ndGggLy8gYml0d2lzZSBvciB0aGUgc3RyaW5nIHdpdGggdGhpcyByYW5kb20gdGhpbmdcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gc3RyLmNoYXJDb2RlQXQoaSksIDM0MzI5MTgzNTMpXG4gICAgICAgIGggPSBoIDw8IDEzIHwgaCA+Pj4gMTlcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxNiwgMjI0NjgyMjUwNylcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTMsIDMyNjY0ODk5MDkpXG4gICAgICAgIHJldHVybiAoaCBePSBoID4+PiAxNikgPj4+IDBcbiAgICB9XG59XG5cbnR5cGUgSVJhbmRvbSA9KCkgPT4gbnVtYmVyO1xuXG4vLyBHRU5FUkFUT1JTXG5mdW5jdGlvbiBzZmMzMihhOiBhbnksIGI6IGFueSwgYzogYW55LCBkOiBhbnkpOiAoRnVuY3Rpb24pe1xuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGEgPj4+PSAwOyBiPj4+PSAwOyBjID4+Pj0gMDsgZCA+Pj49IDBcbiAgICAgICAgbGV0IHQgPSAoYSArIGIpIHwgMFxuICAgICAgICBhID0gYiBeIGIgPj4+IDlcbiAgICAgICAgYiA9IGMgKyAoYyA8PCAzKSB8IDBcbiAgICAgICAgYyA9IChjIDw8IDIxIHwgYyA+Pj4gMTEpXG4gICAgICAgIGQgPSBkICsgMSB8IDBcbiAgICAgICAgdCA9IHQgKyBkIHwgMFxuICAgICAgICBjID0gYyArIHQgfCAwXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHQgPj4+IDApIC8gNDI5NDk2NzI5NlxuICAgIH1cbn1cblxuLy8gT05FIExJTkVSIENVUlJFTlRMWSBOT1QgSU4gVVNFXG4vLyBjb25zdCBMQ0c9IChzOiBhbnkpOiBGdW5jdGlvbj0+KCk6IGFueT0+KDIqKjMxLTEmKHM9TWF0aC5pbXVsKDQ4MjcxLHMpKSkvMioqMzE7XG5cbmNvbnN0IFJBTkRPTSA9IHtcbiAgICBfZ2VuZXJhdG9yOiAoKCk6IGFueSA9PiB7fSkgYXMgRnVuY3Rpb24sXG4gICAgc2VlZDogZnVuY3Rpb24oc2VlZFN0cjogc3RyaW5nID0gYnRvYShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpICk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB4bXVyMyhzZWVkU3RyKVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3IgPSBzZmMzMihzZWVkKCksIHNlZWQoKSwgc2VlZCgpLCBzZWVkKCkpXG4gICAgICAgIHJldHVybiBzZWVkU3RyXG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpOiBhbnkge1xuICAgICAgICBpZih0aGlzLl9nZW5lcmF0b3IgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5zZWVkKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdG9yKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFJBTkRPTSB9IiwiaW1wb3J0IHsgSVBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9yZWN0J1xuXG4vKipcbiAqIFggYW5kIFkgYXJlIHRoZSBDRU5URVIgb2YgdGhlIGVsbGlwc2UgKHVubGlrZSB0aGUgdG9wIGxlZnQgZm9yIElSZWN0KVxuICovXG5pbnRlcmZhY2UgSUVsbGlwc2UgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHhSYWRpdXM6IG51bWJlcjtcbiAgICB5UmFkaXVzOiBudW1iZXI7XG4gICAgcm90YXRpb246IG51bWJlcjtcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgeFJhZGl1czogbnVtYmVyLCB5UmFkaXVzOiBudW1iZXIsIHJvdGF0aW9uOiBudW1iZXIgPSAwKTogSUVsbGlwc2UgPT4ge1xuICAgIHJldHVybiB7eCwgeSwgeFJhZGl1cywgeVJhZGl1cywgcm90YXRpb259XG59XG5cblxuLyoqXG4gKiBDb250YWlucyBYWVxuICogQHBhcmFtIGVsbGlwc2UgXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBjb250YWluc1hZID0gKGVsbGlwc2U6IElFbGxpcHNlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGVsbGlwc2Uucm90YXRpb24pLCBzaW4gPSBNYXRoLnNpbihlbGxpcHNlLnJvdGF0aW9uKVxuICAgIGNvbnN0IGR4ID0gKHggLSBlbGxpcHNlLngpLCBkeSA9ICh5IC0gZWxsaXBzZS55KVxuICAgIGNvbnN0IHRkeCA9IGNvcyAqIGR4ICsgc2luICogZHksIHRkeSA9IHNpbiAqIGR4IC0gY29zICogZHlcblxuICAgIHJldHVybiAoICh0ZHggKiB0ZHgpIC8gKGVsbGlwc2UueFJhZGl1cyogZWxsaXBzZS54UmFkaXVzKSArICh0ZHkgKiB0ZHkpLyhlbGxpcHNlLnlSYWRpdXMgKiBlbGxpcHNlLnlSYWRpdXMpICkgPCAxXG59XG4vKipcbiAqIERvZXMgdGhlIGVsbGlwc2UgY29udGFpbiB0aGUgcG9pbnRcbiAqIEBwYXJhbSBlbGxpcHNlIFxuICogQHBhcmFtIHBvaW50IFxuICovXG5jb25zdCBjb250YWluc1BvaW50ID0gKGVsbGlwc2U6IElFbGxpcHNlLCBwb2ludDogSVBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zWFkoZWxsaXBzZSwgcG9pbnQueCwgcG9pbnQueSlcbn1cblxuLy8gXG4vKipcbiAqIEFyZSBlbm91Z2ggY29ybmVycyBpbnNpZGUgdGhlIFJlY3QgdG8gYmUgY29uc2lkZXJlZCBpbnNpZGVcbiAqIEBwYXJhbSBlbGxpcHNlIGVsbGlwc2VcbiAqIEBwYXJhbSByZWN0IHJlY3QgdG8gdGVzdCBpZiBpdCdzIGVkZ2VzIGFyZSBpbnNpZGUgdGhlIGVsbGlwc2VcbiAqIEBwYXJhbSB0aHJlc2hvbGQgaG93IG1hbnkgY29ybmVycyBtdXN0IGJlIGluc2lkZSB0byBjb3VudCwgZGVmYXVsdHMgdG8gNFxuICovXG5jb25zdCBjb250YWluc1JlY3RDb3JuZXJzID0gKGVsbGlwc2U6IElFbGxpcHNlLCByZWN0OiBJUmVjdCwgdGhyZXNob2xkOiBudW1iZXIgPSA0KTogYm9vbGVhbiA9PiB7XG4gICAgbGV0IGNvcm5lcnNJbiA9IDBcbiAgICBjb25zdCBjb3JuZXJzID0gUmVjdC5jb3JuZXJzKHJlY3QpXG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLnRyKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy50bCkpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMuYmwpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLmJyKSl7IGNvcm5lcnNJbisrfVxuICAgIHJldHVybiBjb3JuZXJzSW4gPj0gdGhyZXNob2xkXG59XG5cbmNvbnN0IEVsbGlwc2UgPSB7XG4gICAgbWFrZSxcbiAgICBjb250YWluc1hZLFxuICAgIGNvbnRhaW5zUG9pbnQsXG4gICAgY29udGFpbnNSZWN0Q29ybmVyc1xufVxuXG5leHBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmtpbmcgd2l0aCBhIDJEIFBvaW50XG4gKi9cbmludGVyZmFjZSBJUG9pbnQgeyAgXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgUG9pbnRcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiB7eCx5fVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgcG9pbnQgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGFkZGluZyBib3RoIG9mIHRoZW0gdG9nZXRoZXIsIGlmIHlvdSB3YW50IHRvIGFkZCBhIHBvaW50IFRPIGFub3RoZXIgcG9pbnQsIHVzZSBhZGRUb1xuICogQHBhcmFtIGEgRmlyc3QgUG9pbnQsIHVubW9kaWZpZWRcbiAqIEBwYXJhbSBiIFNlY29uZCBQb2ludCwgdW5tb2RpZmllZFxuICovXG5jb25zdCBhZGQgPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKGEueCArIGIueCwgYS55ICsgYi55KVxufVxuXG4vKipcbiAqIEFkZCB0aGUgdmFsdWUgb2YgUG9pbnQgYSB0byBQb2ludCBiXG4gKiBAcGFyYW0gYSBUaGUgcG9pbnQgdGhhdCBjaGFuZ2VzLCB3aWxsIGhhdmUgYiBhZGRlZCB0byBpdFxuICogQHBhcmFtIGIgVGhlIHBvaW50IHdob3NlIHZhbHVlIGlzIGFkZGVkIHRvIHRoZSBvdGhlciwgaXQgaXMgdW5tb2RpZmllZCBpdHNlbGZcbiAqL1xuY29uc3QgYWRkVG8gPSAoYTogSVBvaW50LCBiOiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIGEueCArPSBiLnhcbiAgICBhLnkgKz0gYi55XG4gICAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlcyBvZiBhIHBvaW50IHdpdGggeCBhbmQgeSB2YWx1ZXMsIHJldHVybnMgdGhlIG5vdyBtb2RpZmllZCBwb2ludFxuICogQHBhcmFtIHBvaW50IHBvaW50IHRvIGJlIG1vZGlmaWVkXG4gKiBAcGFyYW0geCBuZXcgeCB2YWx1ZVxuICogQHBhcmFtIHkgbmV3IHkgdmFsdWVcbiAqL1xuY29uc3Qgc2V0ID0gKHBvaW50OiBJUG9pbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICBwb2ludC54ID0geFxuICAgIHBvaW50LnkgPSB5XG4gICAgcmV0dXJuIHBvaW50XG59XG5cbi8qKlxuICogQ29weSBhIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgUG9pbnQgdGhhdCB3aWxsIGJlIGNvcGllZFxuICovXG5jb25zdCBjb3B5ID0gKHBvaW50OiBJUG9pbnQpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBtYWtlKHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBtZWFudCB0byB3b3JrIHdpdGggdGhpbmdzIHRoYXQgaGF2ZSB0aGUgSVBvaW50IGludGVyZmFjZVxuICovXG5jb25zdCBQb2ludCA9IHtcbiAgICBtYWtlLFxuICAgIGFkZCxcbiAgICBhZGRUbyxcbiAgICBzZXQsXG4gICAgY29weVxufVxuXG5leHBvcnQge0lQb2ludCwgUG9pbnR9IiwiaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3BvaW50J1xuaW50ZXJmYWNlIElSZWN0IGV4dGVuZHMgSVBvaW50IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RTaWRlcyB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdENvcm5lcnMge1xuICAgIHRsOiBJUG9pbnQ7XG4gICAgdHI6IElQb2ludDtcbiAgICBibDogSVBvaW50O1xuICAgIGJyOiBJUG9pbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICogQHBhcmFtIHdpZHRoIFxuICogQHBhcmFtIGhlaWdodCBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgIH1cbn1cblxuY29uc3Qgc2V0ID0gKHI6IElSZWN0LCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBJUmVjdCA9PiB7XG4gICAgci54ID0geFxuICAgIHIueSA9IHlcbiAgICByLndpZHRoID0gd2lkdGhcbiAgICByLmhlaWdodCA9IGhlaWdodFxuICAgIHJldHVybiByXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSB1bml0IHZhbHVlIG9mIHRoZSBzaWRlcyBvZiB0aGUgcmVjdGFuZ2xlLCBsZWZ0IGFuZCByaWdodCByZXR1cm4geCBjb29yZGluYXRlcywgdG9wIGFuZCBib3R0b20gaW5jbHVkZSB5IGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gcmVjdCByZWN0YW5nbGUgdXNlZFxuICovXG5jb25zdCBzaWRlcyA9IChyZWN0OiBJUmVjdCk6IElSZWN0U2lkZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHJlY3QueCxcbiAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgICAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gICAgfVxufVxuY29uc3QgY29ybmVycyA9IChyZWN0OiBJUmVjdCk6IElSZWN0Q29ybmVycyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkpLFxuICAgICAgICB0cjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkpLFxuICAgICAgICBibDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICAgICAgYnI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBwb2ludDogTk9URTogVGhpcyBmaW5kcyB0aGUgSU5URUdFUiBjZW50ZXIsIGNvb3JkaW5hdGVzIGFyZSB0cnVuY2F0ZWRcbiAqIEBwYXJhbSByZWN0IFRoZSByZWN0YW5nbGUgd2UgYXJlIGZpbmRpbmcgdGhlIGNlbnRlciBvZlxuICovXG5jb25zdCBjZW50ZXIgPSAocmVjdDogSVJlY3QpOiBJUG9pbnQgPT4ge1xuICAgIHJldHVybiBQb2ludC5tYWtlKE1hdGguZmxvb3IocmVjdC54ICsgcmVjdC53aWR0aC8yKSwgTWF0aC5mbG9vcihyZWN0LnkgKyByZWN0LmhlaWdodC8yKSlcbn1cblxuLy8gT1BUSU1JWkU6IERvbid0IGNhbGwgc2lkZXMsIGp1c3QgdXNlIHRoZSByYXcgbnVtYmVycyBhbmQgYWRkaXRpb25cbmNvbnN0IGludGVyc2VjdHMgPSAoYTogSVJlY3QsIGI6IElSZWN0KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgYVNpZGVzID0gc2lkZXMoYSlcbiAgICBjb25zdCBiU2lkZXMgPSBzaWRlcyhiKVxuICAgIHJldHVybiBhU2lkZXMubGVmdCA8PSBiU2lkZXMucmlnaHQgJiYgYVNpZGVzLnJpZ2h0ID49IGJTaWRlcy5sZWZ0ICYmIFxuICAgICAgICBhU2lkZXMudG9wIDw9IGJTaWRlcy5ib3R0b20gJiYgYVNpZGVzLmJvdHRvbSA+PSBiU2lkZXMudG9wXG5cbiAgICAgICAgXG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHJlY3RhbmdsZXNcbiAqL1xuY29uc3QgUmVjdCA9IHtcbiAgICBtYWtlLFxuICAgIHNldCxcbiAgICBzaWRlcyxcbiAgICBjb3JuZXJzLFxuICAgIGNlbnRlcixcbiAgICBpbnRlcnNlY3RzXG59XG5cbmV4cG9ydCB7SVJlY3QsIFJlY3R9XG4iLCIvLyBJIGd1ZXNzIGV2ZXJ5dGhpbmcgd291bGQgbmVlZCBpdCdzIG93biBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbi4uLiBncm9zc1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBsb2NhdGlvbnMgb24gdGhlIGJvYXJkLCBldmVudHVhbGx5IHdlIHdpbGwgcHJvYmFibHkgbW92ZSB0aGlzIGludG8gaXRzIG93biBFQ1Mgc3lzdGVtXG4gKi9cbmNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKi9cbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGJsb2NrTW92ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgdGlsZSBibG9jayBsaW5lIG9mIHNpZ2h0XG4gICAgICovXG4gICAgYmxvY2tTaWdodDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrTW92ZSBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICogQHBhcmFtIGJsb2NrU2lnaHQgb3B0aW9uYWwsIHdpbGwgZGVmYXVsdCB0byB3aGF0ZXZlciBibG9ja01vdmUgaXMgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrTW92ZTogYm9vbGVhbiwgYmxvY2tTaWdodD86IGJvb2xlYW4gKXtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuYmxvY2tNb3ZlID0gYmxvY2tNb3ZlXG4gICAgICAgIGlmKGJsb2NrU2lnaHQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja01vdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrU2lnaHRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRpbGUgfSJdLCJzb3VyY2VSb290IjoiIn0=