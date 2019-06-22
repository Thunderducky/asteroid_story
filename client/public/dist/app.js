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
















//import { MapGenHelper } from './mapGenHelper'

// sizing
// THESE ARE IN TILE SIZES
const { TILE_WIDTH, TILE_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT, MAP_WIDTH, MAP_HEIGHT, CAMERA_WIDTH, CAMERA_HEIGHT, FOV_RADIUS } = _gameSettings__WEBPACK_IMPORTED_MODULE_16__["default"];
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
const player = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', '#FFFFFF');
const npc = new _entity__WEBPACK_IMPORTED_MODULE_5__["Entity"](_idManager__WEBPACK_IMPORTED_MODULE_11__["ID_MANAGER"].next(), 3, 4, '@', '#CC0000');
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
    return new _tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](x, y, true);
});
let fovRecompute = true;
// TODO: Translate this from world to screen?
const fovGrid = new _grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](cameraFrame.width, cameraFrame.height);
// if we turn fov on it'll change it over to false
fovGrid.setEach(() => {
    return {
        visible: false
    };
});
// this will also populate the rooms
const rooms = [];
//generate the relevant terrain
Object(_mapGeneration__WEBPACK_IMPORTED_MODULE_14__["mapGenerator2"])(tileGrid, rooms);
//mapGenerator2(tileGrid, rooms)
// const cameraFrame = Rect.make(0, 0, 10, 10)
// SET Entity Locations
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
// We need to move this into it's own section, and potentially allow substituting it out
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
                const fovCell = fovGrid.getP(screenP);
                renderCell.character = '';
                if (tile.explored) {
                    if (!fovCell.visible) {
                        if (tile.blockMove) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].dark_wall;
                        }
                        else if (tile.blockSight) { // it's a door
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].dark_door;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].dark_ground;
                        }
                    }
                    else {
                        if (tile.blockMove) {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].light_wall;
                        }
                        else if (tile.blockSight) { // it's a door
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].light_door;
                        }
                        else {
                            renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].light_ground;
                        }
                    }
                }
                else {
                    renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].black;
                }
            }
            else {
                renderCell.character = '';
                renderCell.foreColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].black;
                renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].black;
            }
        }
    }
    entities.forEach((entity) => {
        _shapes_point__WEBPACK_IMPORTED_MODULE_8__["Point"].set(screenP, entity.x - cameraFrame.x, entity.y - cameraFrame.y);
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
        fovGrid.x = cameraFrame.x;
        fovGrid.y = cameraFrame.y;
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
const CAVE_ELLIPSES = 0;
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
        this.explored = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZm92LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ2FtZVNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbmVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9tb3VzZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wdWJTdWIvcHJpb3JpdHlTdWJzY3JpYmVyTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wdWJTdWIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJDZWxsLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JuZ0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3NoYXBlcy9lbGxpcHNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFDVztBQUNsQjtBQUM3QiwrQ0FBK0M7QUFFVjtBQUNyQyxTQUFTO0FBR1QsMEJBQTBCO0FBQzFCLE1BQU0sRUFDRixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDYixHQUFHLHNEQUFRO0FB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S0FBSztJQUNMLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtDQUNiO0FBRW1COzs7Ozs7Ozs7Ozs7O0FDL0ZwQjtBQUFBO0FBQUEsZ0ZBQWdGO0FBRWhGOztHQUVHO0FBQ0gsTUFBTSxJQUFJO0lBZ0JOOzs7O09BSUc7SUFDSCxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsU0FBa0IsRUFBRSxVQUFvQjtRQUN0RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUcsVUFBVSxLQUFLLFNBQVMsRUFBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtTQUMvQjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtJQUV6QixDQUFDO0NBQ0o7QUFFYyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0gZnJvbSAnLi9rZXlib2FyZE1vbml0b3InXG5pbXBvcnQgeyBNb3VzZU1vbml0b3IgfSBmcm9tICcuL21vdXNlTW9uaXRvcidcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vYXNzZXRIZWxwZXInXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4vY2FudmFzUmVuZGVyZXInXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgUFVCU1VCIH0gZnJvbSAnLi9wdWJTdWIvcHViU3ViJ1xuaW1wb3J0IHsgUmVjdCwgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSURfTUFOQUdFUiB9IGZyb20gJy4vaWRNYW5hZ2VyJ1xuaW1wb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCB7IG1hcEdlbmVyYXRvcjIgfSBmcm9tICcuL21hcEdlbmVyYXRpb24nXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuLy9pbXBvcnQgeyBNYXBHZW5IZWxwZXIgfSBmcm9tICcuL21hcEdlbkhlbHBlcidcblxuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuLy8gc2l6aW5nXG5cblxuLy8gVEhFU0UgQVJFIElOIFRJTEUgU0laRVNcbmNvbnN0IHtcbiAgICBUSUxFX1dJRFRILFxuICAgIFRJTEVfSEVJR0hULFxuICAgIFNDUkVFTl9XSURUSCxcbiAgICBTQ1JFRU5fSEVJR0hULFxuICAgIE1BUF9XSURUSCxcbiAgICBNQVBfSEVJR0hULFxuICAgIENBTUVSQV9XSURUSCxcbiAgICBDQU1FUkFfSEVJR0hULFxuICAgIEZPVl9SQURJVVNcbn0gPSBTRVRUSU5HU1xuXG5cbi8vIExldCdzIGxvb2sgZm9yIHF1ZXJ5IHBhcmFtcyB3aXRoIHdoaWNoIHRvIHNlZWQgdGhlIGdlbmVyYXRvclxuLy8gSU5JVElBTElaRSBPVVIgU0VFRFxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuY29uc3Qgc2VlZFN0ciA9IHVybFBhcmFtcy5nZXQoJ3NlZWQnKSBcbmlmKCFzZWVkU3RyKXtcbiAgICBjb25zdCBzZWVkID0gUkFORE9NLnNlZWQoc2VlZFN0ciB8fCB1bmRlZmluZWQpXG4gICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgaWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDpuZXd1cmx9LCcnLG5ld3VybClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cbiAgICBcbn0gZWxzZSB7XG4gICAgUkFORE9NLnNlZWQoc2VlZFN0cilcbn1cblxuXG5cbmNvbnN0IHBsYXllcjogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjRkZGRkZGJylcbmNvbnN0IG5wYzogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjQ0MwMDAwJylcbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKClcblxuY29uc3QgY2FtZXJhRnJhbWUgPSBSZWN0Lm1ha2UoMCwwLCBDQU1FUkFfV0lEVEgsIENBTUVSQV9IRUlHSFQpIC8vIENBTUVSQSBJUyBJTiBXT1JMRCBDRUxMUywgTk9UIEFCU09MVVRFIFVOSVRTXG5jb25zdCByZW5kZXJHcmlkID0gbmV3IEdyaWQ8SVJlbmRlckNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJyAnLENPTE9SUy5ibGFjayxDT0xPUlMuZGFya19ncm91bmQpXG59KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUaWxlKHgseSwgdHJ1ZSlcbn0pXG5cbmxldCBmb3ZSZWNvbXB1dGUgPSB0cnVlXG4vLyBUT0RPOiBUcmFuc2xhdGUgdGhpcyBmcm9tIHdvcmxkIHRvIHNjcmVlbj9cbmNvbnN0IGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4gPSBuZXcgR3JpZDxGT1ZDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxuLy8gaWYgd2UgdHVybiBmb3Ygb24gaXQnbGwgY2hhbmdlIGl0IG92ZXIgdG8gZmFsc2VcbmZvdkdyaWQuc2V0RWFjaCgoKTogRk9WQ2VsbCA9PiB7IHJldHVybiB7XG4gICAgdmlzaWJsZTogZmFsc2Vcbn19KVxuXG5cbi8vIHRoaXMgd2lsbCBhbHNvIHBvcHVsYXRlIHRoZSByb29tc1xuY29uc3Qgcm9vbXM6IElSZWN0W10gPSBbXVxuLy9nZW5lcmF0ZSB0aGUgcmVsZXZhbnQgdGVycmFpblxubWFwR2VuZXJhdG9yMih0aWxlR3JpZCwgcm9vbXMpXG4vL21hcEdlbmVyYXRvcjIodGlsZUdyaWQsIHJvb21zKVxuXG4vLyBjb25zdCBjYW1lcmFGcmFtZSA9IFJlY3QubWFrZSgwLCAwLCAxMCwgMTApXG5cbi8vIFNFVCBFbnRpdHkgTG9jYXRpb25zXG57XG4gICAgY29uc3QgcGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zWzBdKVxuICAgIFBvaW50LnNldChwbGF5ZXIsIHBjZW50ZXIueCwgcGNlbnRlci55KSBcbiAgICBjb25zdCBucGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zW3Jvb21zLmxlbmd0aCAtIDFdKVxuICAgIFBvaW50LnNldChucGMsIG5wY2VudGVyLngsIG5wY2VudGVyLnkpXG5cbiAgICAvLyBjZW50ZXIgdGhlIGNhbWVyYSBhbmQgZm92IG9uIHRoZSBwbGF5ZXJcbiAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxufVxuXG4vLyBXZSBuZWVkIHRvIG1vdmUgdGhpcyBpbnRvIGl0J3Mgb3duIHNlY3Rpb24sIGFuZCBwb3RlbnRpYWxseSBhbGxvdyBzdWJzdGl0dXRpbmcgaXQgb3V0XG5jb25zdCByZW5kZXJUb0dyaWQgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIGVudGl0aWVzOiBFbnRpdHlbXSwgcmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICAvLyByZW5kZXJHcmlkIGlzIGluIFNDUkVFTiBjb29yZGluYXRlcywgYW5kIHdpbGwgaGF2ZSBpdCdzIFhZIGlnbm9yZWQgZm9yIG91ciBwdXJwb3Nlc1xuICAgIC8vIHRpbGVHcmlkLCBlbnRpdGllcyBhbmQgZm92R3JpZCBhcmUgaW4gV09STEQgY29vcmRpbmF0ZXMgYW5kIHdpbGwgaGF2ZSB0aGVpciBYWSBhbmQgeSBpZ25vcmVkIGZvciBub3dcbiAgICBcbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGZvcihsZXQgcmVsQ2FtZXJhWSA9IDA7IHJlbENhbWVyYVkgPCBjYW1lcmFGcmFtZS5oZWlnaHQ7IHJlbENhbWVyYVkrKyl7XG4gICAgICAgIGZvcihsZXQgcmVsQ2FtZXJhWCA9IDA7IHJlbENhbWVyYVggPCBjYW1lcmFGcmFtZS53aWR0aDsgcmVsQ2FtZXJhWCsrKXtcbiAgICAgICAgICAgIC8vIHRoaXMgbWFwcyB0byB0aGUgcmVuZGVyR3JpZCBhbmQgdGhlIGNhbWVyYXNcbiAgICAgICAgICAgIFBvaW50LnNldChzY3JlZW5QLCByZWxDYW1lcmFYLCByZWxDYW1lcmFZKVxuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSB0aWxlR3JpZCwgZm92R3JpZCwgYW5kIGVudGl0aWVzXG4gICAgICAgICAgICBQb2ludC5zZXQod29ybGRQLCBzY3JlZW5QLnggKyBjYW1lcmFGcmFtZS54LCBzY3JlZW5QLnkgKyBjYW1lcmFGcmFtZS55KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBMZXQncyBkbyBzb21lIGJvdW5kcyBjaGVja2luZ1xuICAgICAgICAgICAgLy8gd2Uga25vdyB0aGVzZSBwb2l0bnMgYXJlIGFsd2F5cyBpbiBjYW1lcmFzLCBzbyBuZXZlciBuZWVkIHRvIGNoZWNrIHRoYXRcbiAgICAgICAgICAgIC8vIHdlIGFyZSBnb2luZyB0byBvZmZsb2FkIHRoZSBjYXNlIG9mIGNoZWNraW5nIGlmIHRoZSByZW5kZXJHcmlkIGNhbiBmaXQgdGhlIGNhbWVyYVNpemUgZm9yIG5vd1xuICAgICAgICAgICAgLy8gc28gZm9yIG5vdyBqdXN0IGNoZWNrIGlmIHdlIGFyZSBpbnNpZGUgb2YgdGhlIHRpbGVHcmlkLCB3aGljaCBjdXJyZW50bHkgc2hvdWxkIGJlIHRoZSBzYW1lIGRpbWVuc2lvbnMgYXMgdGhlIGZvdkdyaWQsIHRob3VnaCB0aGF0IGlzIGJvdW5kIHRvIGNoYW5nZSBhcyB3ZSB0cnkgYW5kIG9wdGltaXplIHRoaW5nc1xuICAgICAgICAgICAgLy8gc29vb29vbywgbGV0J3MgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSB0aGUgdGlsZUdyaWRcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckNlbGwgID0gcmVuZGVyR3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKHdvcmxkUC54LCB3b3JsZFAueSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRQKHdvcmxkUClcbiAgICAgICAgICAgICAgICBjb25zdCBmb3ZDZWxsID0gZm92R3JpZC5nZXRQKHNjcmVlblApXG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSAnJ1xuICAgICAgICAgICAgICAgIGlmKHRpbGUuZXhwbG9yZWQpe1xuICAgICAgICAgICAgICAgICAgICBpZighZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX3dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlLmJsb2NrU2lnaHQpeyAvLyBpdCdzIGEgZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5kYXJrX2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X3dhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlLmJsb2NrU2lnaHQpeyAvLyBpdCdzIGEgZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2Rvb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuY2hhcmFjdGVyID0gJydcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmZvcmVDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHk6IEVudGl0eSk6IHZvaWQgPT4ge1xuICAgICAgICBQb2ludC5zZXQoc2NyZWVuUCwgZW50aXR5LnggLSBjYW1lcmFGcmFtZS54LCBlbnRpdHkueSAtIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIG9mIHRoZSBjYW1lcmEgYm91bmRzXG4gICAgICAgIGlmKGNhbWVyYUZyYW1lLnggPD0gZW50aXR5LnggJiYgZW50aXR5LnggPD0gY2FtZXJhRnJhbWUueCArIGNhbWVyYUZyYW1lLndpZHRoIC0gMSAmJlxuICAgICAgICAgICAgY2FtZXJhRnJhbWUueSA8PSBlbnRpdHkueSAmJiBlbnRpdHkueSA8PSBjYW1lcmFGcmFtZS55ICsgY2FtZXJhRnJhbWUuaGVpZ2h0IC0gMSl7XG4gICAgICAgICAgICBjb25zdCByQ2VsbDogSVJlbmRlckNlbGwgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGw6IEZPVkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKGZvdkNlbGwudmlzaWJsZSl7XG4gICAgICAgICAgICAgICAgckNlbGwuZm9yZUNvbG9yID0gZW50aXR5LmNvbG9yXG4gICAgICAgICAgICAgICAgckNlbGwuY2hhcmFjdGVyID0gZW50aXR5LmNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5cbi8vIGNsZWFuIHRoaXMgdXBcbmNvbnN0IG1vdmVzOiBhbnlbXSA9IFtdXG5jb25zdCBNb3ZlUHJvY2Vzc29yID0ge1xuICAgIC8vIGN1cnJlbnRseSBqdXN0IHRpZWQgdG8gdGhlIHBsYXllclxuICAgIG1vdmVzXG59XG5cblBVQlNVQi5zdWJzY3JpYmUoJ21vdmUnLCAobXNnKTogdm9pZCA9PntcbiAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLnB1c2gobXNnKVxufSkgXG5cbmxvYWRJbWFnZSgnYXNzZXRzL291dC5wbmcnKS50aGVuKChpbWFnZTogYW55KTogdm9pZCA9PiB7XG4gICAgcmVuZGVyZXIuaW5pdChjYW52YXMsIGltYWdlKVxuICAgIC8vIExvb3BcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICByZW5kZXJlci5jbGVhcigpXG5cbiAgICAgICAgLy8gTG9vayBhdCBwbGF5ZXIgaW5wdXRcbiAgICAgICAgLy8gWiBsZXRzIHVzIGJlIGluIFpPT00gTU9ERSEhISFcbiAgICAgICAgLy8gd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhpcyBpbnRvIGEgXCJtb3ZlXCIgdHlwZSBhY3Rpb25cbiAgICAgICAgLy8gd2UnbGwganVzdCBkbyB0aGUgbW92ZSBzZWN0aW9uXG4gICAgICAgIFxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoLTEsIDApfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgxLCAwKX0pXG4gICAgICAgIH1cbiAgICAgICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgLTEpfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dEb3duJykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgUFVCU1VCLnB1Ymxpc2goJ21vdmUnLCB7aWQ6IHBsYXllci5pZCwgZGVsdGE6IFBvaW50Lm1ha2UoMCwgMSl9KVxuICAgICAgICB9XG4gICAgICAgIC8vIHF1aWNrIG51bWJlciBnZW5lcmF0b3JcbiAgICAgICAgaWYoIWttLmdldEtleVN0YXRlKCduJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnbicpLmhhbGZTdGVwcyA+IDApKXtcbiAgICAgICAgICAgIGNvbnN0IHNlZWQgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGNvbnN0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/c2VlZD0nICsgc2VlZFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXd1cmxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2Nlc3MgbW92ZXNcbiAgICAgICAgLy8gZXZlbnR1YWxseSB3ZSdsbCBjb21wb25lbnRpemUgdGhpcyBiZXR0ZXJcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5mb3JFYWNoKChtc2c6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1zZy5kZWx0YVxuICAgICAgICAgICAgY29uc3QgaWQgPSBtc2cuaWRcbiAgICAgICAgICAgIGNvbnN0IG1vdmVyID0gZW50aXRpZXMuZmluZCgoZSk6IGJvb2xlYW4gPT4gZS5pZCA9PSBpZClcbiAgICAgICAgICAgIGlmKCFtb3Zlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aWxlR3JpZC5pbkJvdW5kc1hZKHBsYXllci54ICsgbW92ZS54LCBwbGF5ZXIueSArIG1vdmUueSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWShwbGF5ZXIueCArIG1vdmUueCwgcGxheWVyLnkgKyBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgaWYoIXRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICAgICAgbW92ZXIubW92ZShtb3ZlLngsIG1vdmUueSlcbiAgICAgICAgICAgICAgICAgICAgaWYobW92ZXIuaWQgPT09IHBsYXllci5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3ZSZWNvbXB1dGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZWQnLCBtc2cpIC8vIG9ubHkgcHVibGlzaCBtb3ZlIGlmIHRoZSBlbnRpdHkgYWN0dWFsbHkgY29tcGxldGVkIHRoZSBtb3ZlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIE1vdmVQcm9jZXNzb3IubW92ZXMubGVuZ3RoID0gMFxuICAgICAgICBpZihmb3ZSZWNvbXB1dGUpe1xuICAgICAgICAgICAgY2FsY3VsYXRlRk9WKGZvdkdyaWQsIHRpbGVHcmlkLCBwbGF5ZXIsIEZPVl9SQURJVVMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXRlcm1pbmUgY2FtZXJhIHBvc2l0aW9uXG4gICAgICAgIGNhbWVyYUZyYW1lLnggPSBNYXRoLmZsb29yKHBsYXllci54IC0gY2FtZXJhRnJhbWUud2lkdGgvMilcbiAgICAgICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICAgICAgZm92R3JpZC54ID0gY2FtZXJhRnJhbWUueFxuICAgICAgICBmb3ZHcmlkLnkgPSBjYW1lcmFGcmFtZS55XG5cbiAgICAgICAgLy8gd2UgbWlnaHQgbW92ZSBhbGwgb2YgdGhpcyBpbnRvIHNvbWUgb2Zmc2NyZWVuIFxuICAgICAgICByZW5kZXJUb0dyaWQodGlsZUdyaWQsIGZvdkdyaWQsIGVudGl0aWVzLCByZW5kZXJHcmlkKVxuICAgICAgICByZW5kZXJlci5yZW5kZXIocmVuZGVyR3JpZClcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCA1MDApXG4gICAgICAgIGttLnJlc2V0U3RlcHMoKVxuICAgICAgICBtbS5yZXNldCgpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcbiAgICB9XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuXG59KS5jYXRjaCgoZXJyOiBhbnkpOiB2b2lkID0+IGNvbnNvbGUubG9nKGVycikpIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlIiwiZnVuY3Rpb24gbG9hZEltYWdlKHVybDogc3RyaW5nKTogYW55e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKTogYW55ID0+IHJlc29sdmUoaW1nKSlcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCk6IGFueSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tICR7dXJsfWApKSlcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuICAgIH0pXG59XG5cbmV4cG9ydCB7bG9hZEltYWdlfSIsImltcG9ydCB7IElSZW5kZXJDZWxsIH0gZnJvbSAnLi9yZW5kZXJDZWxsJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IENPREVfVE9fUkVDVF9IQVNILCBkcmF3U2VjdGlvbiwgY29kZSB9IGZyb20gJy4vcmVuZGVySGVscGVycydcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuaW1wb3J0IENPTE9SUyBmcm9tICcuL2NvbG9ycydcbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHRha2luZyBhIHJlbmRlciBncmlkIGFuZCBjb252ZXJ0aW5nIGl0IHRvIGltYWdlc1xuICogb24gdGhlIGNhbnZhc1xuICovXG5cbmNvbnN0IHtUSUxFX1dJRFRILCBUSUxFX0hFSUdIVH0gPSBTRVRUSU5HU1xuXG5jbGFzcyBDYW52YXNSZW5kZXJlciB7XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IHVuZGVmaW5lZDtcbiAgICBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHNwcml0ZXNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50KTogQ2FudmFzUmVuZGVyZXJ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIC8vIHdlIGFyZSBqdXN0IGZvcmNpbmcgdGhpcyBmb3Igbm93LCB3ZSB3aWxsIGNoZWNrIGlmIGl0J3MgbnVsbFxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMhLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaWYoY3R4ID09PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdldCBjb250ZXh0IGZyb20gY2FudmFzJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXRcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgLy8gZXZlbnR1YWxseSB3ZSBuZWVkIHRvIHBhc3MgaW4gdGhlIGRpbWVuc2lvbnMgd2UgYXJlIHJlbmRlcmluZyB0byBhcyB3ZWxsXG4gICAgLy8gZm9yIG5vdyBpdCdzIGZpbmVcbiAgICByZW5kZXIocmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4sIGJhY2tncm91bmQ6IHN0cmluZyA9IENPTE9SUy5ibGFjayk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmN0eCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBhIGdyaWQgd2l0aCBhIG1pc3NpbmcgY29udGV4dCcpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHggYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsIHJlbmRlckdyaWQud2lkdGggKiBUSUxFX1dJRFRILCByZW5kZXJHcmlkLmhlaWdodCAqIFRJTEVfSEVJR0hUKVxuICAgICAgICAvLyBsZXQncyB0cnkgc2V0dGluZyBhIGJhY2tncm91bmQgY29sb3IgYXMgd2VsbFxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBkZXN0UmVjdCA9IFJlY3QubWFrZSgwLDAsMCwwKVxuICAgICAgICByZW5kZXJHcmlkLmZvckVhY2goKFxuICAgICAgICAgICAgY2VsbDogSVJlbmRlckNlbGwsIFxuICAgICAgICAgICAgaW5kZXg6IG51bWJlciwgXG4gICAgICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgUmVjdC5zZXQoZGVzdFJlY3QsIHggKiBUSUxFX1dJRFRILCB5ICogVElMRV9IRUlHSFQsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxuICAgICAgICAgICAgLy8gdG9kbywgYWxsb3cgdXMgdG8gbWFyayByZW5kZXIgY2VsbHMgYXMgJ2VtcHR5JyByYXRoZXIgdGhhbiBzcGFjZXMsIHRoaXMgbWlnaHQgaGVscCBzcGVlZCB1cCByZW5kZXIgdGltZVxuICAgICAgICAgICAgaWYoY2VsbC5jaGFyYWN0ZXIubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICBpZihjZWxsLmJhY2tDb2xvciAhPT0gYmFja2dyb3VuZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIEkgYWN0dWFsbHkgZG9uJ3Qga25vdyBpZiB0aGlzIGhlbHBzLCBidXQgaXQgc2VlbXMgbGlrZSBzZXR0aW5nIHRoZSBmaWxsU3R5bGUgY291bGQgaW52b2x2ZSBtb3JlIGNvbXBsaWNhdGlvbnMgdGhhbiBqdXN0IGNoZWNraW5nIGlmIGl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgaWYoY3R4LmZpbGxTdHlsZSAhPT0gY2VsbC5iYWNrQ29sb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNlbGwuYmFja0NvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmNSZWN0ID0gQ09ERV9UT19SRUNUX0hBU0hbY29kZShjZWxsLmNoYXJhY3RlcildXG4gICAgICAgICAgICAgICAgZHJhd1NlY3Rpb24oY3R4LCB0aGlzLnNwcml0ZXNoZWV0LCBzcmNSZWN0LCBkZXN0UmVjdCwgY2VsbC5mb3JlQ29sb3IsIGNlbGwuYmFja0NvbG9yIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgY2hlY2tlZCB0byBlbnN1cmUgdGhhdCBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcyBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHsgQ2FudmFzUmVuZGVyZXIgfSIsImNvbnN0IENPTE9SUyA9IHtcbiAgICAnZGFya19vdXRzaWRlJzogJyMxMTEnLFxuICAgICdsaWdodF9vdXRzaWRlJzogJyM0NDQ0NDQnLFxuICAgICdibGFjayc6ICcjMDAwMDAwJyxcbiAgICAnZGFya193YWxsJzogJyMwMDAwNjQnLFxuICAgICdkYXJrX2dyb3VuZCc6ICcjMzIzMjk2JyxcbiAgICAnbGlnaHRfd2FsbCc6ICcjODI2RTMyJyxcbiAgICAnbGlnaHRfZ3JvdW5kJzogJyNDOEI0MzInLFxuICAgICdwbGF5ZXInOiAnI0ZGRkZGRicsXG4gICAgJ2RhcmtfZG9vcic6JyM1NTAwMDAnLFxuICAgICdsaWdodF9kb29yJzogJyNGRjIyMjInLFxuICAgICducGMnOiAnI0NDMDAwMCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ09MT1JTIiwiLyoqXG4gKiBBIGdlbmVyaWMgb2JqZWN0IHRvIHJlcHJlc2VudCBldmVyeXRoaW5nIHRoYXQgaXMgbm90IHRoZSBtYXAgaXRzZWxmXG4gKiBGb3IgdGhhdCwgc2VlIHRoZSBUaWxlIGNsYXNzXG4gKi9cbmNsYXNzIEVudGl0eSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGNoYXJhY3Rlcjogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgeDogbnVtYmVyLHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYW4gZW50aXR5LCBjdXJyZW50bHkgZG9lc24ndCBjaGVjayBpZiBpdCBjYW4gb3Igbm90LCBqdXN0IGRvZXNcbiAgICAgKiBAcGFyYW0gZHggQW1vdW50IHRvIG1vdmUgaW4gdGhlIHggZGlyZWN0aW9uIChsZWZ0IGlzIG5lZ2F0aXZlLCByaWdodCBpcyBwb3NpdGl2ZSlcbiAgICAgKiBAcGFyYW0gZHkgQW1vdW50IHRvIG1vdmUgaW4gdGhlIHkgZGlyZWN0aW9uICh1cCBpcyBuZWdhdGl2ZSwgZG93biBpcyBwb3NpdGl2ZSlcbiAgICAgKi9cbiAgICBtb3ZlKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lke1xuICAgICAgICB0aGlzLnggKz0gZHhcbiAgICAgICAgdGhpcy55ICs9IGR5XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbnRpdHkgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVBvaW50LCBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG5pbnRlcmZhY2UgRk9WQ2VsbCAge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgU2hhZG93UmFuZ2Uge1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzQmV0d2VlbkluY2x1c2l2ZSA9IChhOiBudW1iZXIsYjogbnVtYmVyLHQ6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGlmKGIgPCBhKXtcbiAgICAgICAgcmV0dXJuIGIgPD0gdCAmJiB0IDw9IGFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA8PSB0ICYmIHQgPD0gYlxuICAgIH1cbn1cbi8qKlxuICogXG4gKiBAcGFyYW0gZm92R3JpZCBcbiAqIEBwYXJhbSB0aWxlR3JpZCBcbiAqIEBwYXJhbSBzdGFydFBvaW50IHN0YXJ0IHBvaW50IGlzIGluIHdvcmxkIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0gbWF4RGlzdGFuY2UgXG4gKiBAcGFyYW0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsIFxuICogQHBhcmFtIHhEaXJlY3Rpb24gXG4gKiBAcGFyYW0geURpcmVjdGlvbiBcbiAqL1xuY29uc3QgY2FsY3VsYXRlT2N0YW50ID0gKGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBzdGFydFBvaW50OiBJUG9pbnQsIG1heERpc3RhbmNlOiBudW1iZXIsXG4gICAgaG9yaXpvbnRhbE5vdFZlcnRpY2FsOiBib29sZWFuLCB4RGlyZWN0aW9uOiBudW1iZXIsIHlEaXJlY3Rpb246IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIFxuICAgIC8vIE91ciBzaGFkb3dzIHdlIHdpbGwgY2FzdFxuICAgIGNvbnN0IHNoYWRvd1JhbmdlczogU2hhZG93UmFuZ2VbXSA9IFtdXG4gICAgLy8gb3VyIHN0YXJ0aW5nIGxvY2F0aW9uIGlzIGFsd2F5cyB2aXNpYmxlXG4gICAgY29uc3Qgc2NyZWVuU3RhcnRQb2ludD0gUG9pbnQuY29weShzdGFydFBvaW50KVxuICAgIHNjcmVlblN0YXJ0UG9pbnQueCAtPSBmb3ZHcmlkLnhcbiAgICBzY3JlZW5TdGFydFBvaW50LnkgLT0gZm92R3JpZC55XG4gICAgZm92R3JpZC5nZXRQKHNjcmVlblN0YXJ0UG9pbnQpLnZpc2libGUgPSB0cnVlXG4gICAgLy8gVE9ETzogRGV0ZXJtaW5lIGlmIHRoZSBGT1YgaXMgaW4gcmFuZ2VcbiAgICBmb3IobGV0IHJvdyA9IDE7IHJvdyA8IG1heERpc3RhbmNlOyByb3crKyl7XG4gICAgICAgIGNvbnN0IHJvd1NpemUgPSByb3cgKyAxXG4gICAgICAgIGZvcihsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgcm93U2l6ZTsgY29sdW1uKyspe1xuICAgICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBvY3RhbnQsIHRoZSB0cmF2ZWxsZXIgd2lsbCBtb3ZlIGRpZmZlcmVudGx5XG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxsZXIgPSBQb2ludC5jb3B5KHN0YXJ0UG9pbnQpXG4gICAgICAgICAgICB0cmF2ZWxsZXIueCArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB4RGlyZWN0aW9uICogY29sdW1uIDogeERpcmVjdGlvbiAqIHJvd1xuICAgICAgICAgICAgdHJhdmVsbGVyLnkgKz0gaG9yaXpvbnRhbE5vdFZlcnRpY2FsID8geURpcmVjdGlvbiAqIHJvdyA6IHlEaXJlY3Rpb24gKiBjb2x1bW5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG91dCBvZiBib3VuZHMsIHNraXBcbiAgICAgICAgICAgIGlmKCF0aWxlR3JpZC5pbkJvdW5kc1hZKHRyYXZlbGxlci54LCB0cmF2ZWxsZXIueSkpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZhY3RvciBpbiBvdXIgdGlsZSBjaGVjayB3aGVuIHdlIGdldCB0aGUgd29ybGQgY2VsbFxuICAgICAgICAgICAgbGV0IHNjcmVlblBvaW50ID0gUG9pbnQuY29weSh0cmF2ZWxsZXIpXG4gICAgICAgICAgICBzY3JlZW5Qb2ludC54IC09IGZvdkdyaWQueFxuICAgICAgICAgICAgc2NyZWVuUG9pbnQueSAtPSBmb3ZHcmlkLnlcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRQKHRyYXZlbGxlcilcbiAgICAgICAgICAgIC8vIE9QVElNSVpFOiBXZSBhcmUgcHJvYmFibHkgcnVubmluZyB0byBtYW55IHRpbWVzIGFuZCBjb3VsZCBkbyB0aGlzIGJldHRlclxuICAgICAgICAgICAgaWYoIWZvdkdyaWQuaW5Cb3VuZHNYWShzY3JlZW5Qb2ludC54LCBzY3JlZW5Qb2ludC55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUG9pbnQpXG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY29sdW1uL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IChjb2x1bW4gKyAxKS9yb3dTaXplXG4gICAgICAgICAgICBjb25zdCBtaWRkbGUgPSAoc3RhcnQgKyBlbmQpIC8gMlxuXG4gICAgICAgICAgICAvLyB0ZXN0IGZvciB2aXNpYmxpdHlcbiAgICAgICAgICAgIGxldCB2aXNpYmlsaXR5ID0gdHJ1ZVxuXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZWRnZXMgYXJlIGNsZWFyIG9yIG5vdFxuICAgICAgICAgICAgbGV0IHN0YXJ0Q2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgbWlkZGxlQ2xlYXIgPSB0cnVlXG4gICAgICAgICAgICBsZXQgZW5kQ2xlYXIgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYnVpbHQgc29tZSBzaGFkb3cgcmFuZ2VzXG4gICAgICAgICAgICBpZihzaGFkb3dSYW5nZXMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgYW55IHNoYWRvd3MgY3Jvc3Mgb3VyIHRocmVlIHBvaW50c1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5mb3JFYWNoKCAoc3I6IFNoYWRvd1JhbmdlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q2xlYXIgPSBzdGFydENsZWFyICYmICFpc0JldHdlZW5JbmNsdXNpdmUoc3Iuc3RhcnQsIHNyLmVuZCwgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIG1pZGRsZUNsZWFyID0gbWlkZGxlQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBtaWRkbGUpXG4gICAgICAgICAgICAgICAgICAgIGVuZENsZWFyID0gZW5kQ2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBlbmQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB2aXNpYmlsaXR5IGJhc2VkIG9mZiBvZiBvdXIgc2FtcGxpbmdcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gbWlkZGxlQ2xlYXIgJiYgKHN0YXJ0Q2xlYXIgfHwgZW5kQ2xlYXIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdlIGJsb2NrIHNpZ2h0LCBjYWxjdWxhdGUgb3VyIHNoYWRvdyBlbmRzXG4gICAgICAgICAgICBpZih0aWxlLmJsb2NrU2lnaHQpe1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jhbmdlcy5wdXNoKHtzdGFydCwgZW5kfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm92Q2VsbC52aXNpYmxlID0gdmlzaWJpbGl0eVxuICAgICAgICAgICAgaWYoZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICB0aWxlLmV4cGxvcmVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjYWxjdWxhdGVGT1YgPSAoZm92R3JpZDogR3JpZDxGT1ZDZWxsPiwgdGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHN0YXJ0UG9pbnQ6IElQb2ludCwgbWF4RGlzdGFuY2U6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIC8vIGJlIGRlZmF1bHQgd2UgYXJlIGdvaW5nIHRvIHNoYWRvd0Nhc3RcbiAgICAvLyBieSBkZWZhdWx0IGV2ZXJ5dGhpbmcgaXMgbm90IHZpc2libGVcbiAgICBmb3ZHcmlkLmZvckVhY2goKGNlbGwpOiB2b2lkID0+IHsgY2VsbC52aXNpYmxlID0gZmFsc2UgfSlcbiAgICAvLyBOTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgLTEpXG4gICAgLy8gV05XXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgZmFsc2UsIC0xLCAtMSlcbiAgICAvLyBXU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIDEpXG4gICAgLy8gU1NXXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgLTEsIDEpXG4gICAgLy8gU1NFXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgMSlcbiAgICAvLyBFU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgMSlcbiAgICAvLyBFTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgMSwgLTEpXG4gICAgLy8gTk5FXG4gICAgY2FsY3VsYXRlT2N0YW50KGZvdkdyaWQsIHRpbGVHcmlkLCBzdGFydFBvaW50LCBtYXhEaXN0YW5jZSwgdHJ1ZSwgMSwgLTEpXG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZUZPViwgRk9WQ2VsbH0iLCJjb25zdCBTRVRUSU5HUyA9IHtcbiAgICBUSUxFX1dJRFRIOiAxMCwgICAgIC8vIHBpeGVsc1xuICAgIFRJTEVfSEVJR0hUOiAxMCwgICAgLy8gcGl4ZWxzXG4gICAgTUFQX1dJRFRIOiA4MCwgICAgICAvLyBldmVyeXRoaW5nIGVsc2UgaXMgaW4gdGlsZXNcbiAgICBNQVBfSEVJR0hUOiA0NSxcbiAgICBDQU1FUkFfV0lEVEg6IDEwMCxcbiAgICBDQU1FUkFfSEVJR0hUOiA3MCxcbiAgICBTQ1JFRU5fV0lEVEggOjEwMCxcbiAgICBTQ1JFRU5fSEVJR0hUIDogNzAsXG4gICAgRk9WX1JBRElVUzogMzVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU0VUVElOR1MiLCJpbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcbmltcG9ydCB7IElSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIFNldEVhY2hGbjxUPiB7XG4gICAgKGNlbGw6IFQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYW55O1xufVxuXG5pbnRlcmZhY2UgRm9yRWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xufVxuXG4vLyBUT0RPOiBnaXZlIGdyaWRzIHRoZWlyIG93biB4IGFuZCB5cywgdGhhdCB3YXkgdGhleSBjYW4gaW1wbGVtZW50IGFsbCB0aGUgcG9pbnQgYW5kIHJlY3Qgc3R1ZmZcbi8qKlxuICogR3JpZCB0byByZXByZXNlbnQgMmQgY29sbGVjdGlvbnMsIHBsZWFzZSBkb24ndCByZXNpemUgaXQgYWZ0ZXIgY3JlYXRpbmcgaXRcbiAqL1xuY2xhc3MgR3JpZDxUPiBpbXBsZW1lbnRzIElSZWN0IHtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG9mZnNldCBhbmQgc28gd2UgY2FuIHRyZWF0IGl0IG1vcmUgbGlrZSBhIHJlY3RhbmdsZVxuICAgICAqL1xuICAgIHk6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGNlbGxzOiBUW107XG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApe1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuY2VsbHMubGVuZ3RoID0gd2lkdGggKiBoZWlnaHRcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbWFyaWx5IHVzZWQgZm9yIGluaXRpYWxpemF0aW9uIG9mIHRoZSBncmlkLCBvdmVyd3JpdGVzIHByZXZpb3VzIGVudHJpZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZW50cnksIGRvbid0IHVzZSB0aGlzIHVubGVzcyBlbnRyaWVzIGFyZSBpbmRlcGVuZGVudCBmcm9tIGVhY2ggb3RoZXJcbiAgICAgKiBAcGFyYW0gZm4gdGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgY2VsbCBpdHNlbGYgYXMgdGhlIGZpcnN0IHByb3BlcnR5IGFuZCBcbiAgICAgKi9cbiAgICBzZXRFYWNoKGZuOiBTZXRFYWNoRm48VD4pOiBHcmlkPFQ+e1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gc29tZXRoaW5nIGZvciBlYWNoIG1lbWJlciBvZiBhIGNlbGwsIGdvaW5nIHJvdyBieSByb3cgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgICogQHBhcmFtIGZuIEdldCBwYXNzZWQgdGhlIGNlbGwsIGluZGV4LCB4IGFuZCB5XG4gICAgICovXG4gICAgZm9yRWFjaChmbjogRm9yRWFjaEZuPFQ+KTogdm9pZHtcbiAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4Kyspe1xuICAgICAgICAgICAgICAgIGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB4IHggY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBwYXJhbSB5IHkgY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqL1xuICAgIGdldFhZKHg6IG51bWJlciwgeTogbnVtYmVyKTogVCAge1xuICAgICAgICBpZighdGhpcy5pbkJvdW5kc1hZKHgseSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib3VuZGFyeSBhY2Nlc3MgaXNzdWUnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3ggKyB5ICogdGhpcy53aWR0aF1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBnZXRYWS4gVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gcG9pbnQgY29udGFpbnMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbGwgeW91IHdhbnQgdG8gZ2V0XG4gICAgICovXG4gICAgZ2V0UChwb2ludDogSVBvaW50KTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFhZKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuXG4gICAgaW5Cb3VuZHNYWSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW57XG4gICAgICAgIGlmKHggPCAwIHx8IHggPj0gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMuaGVpZ2h0KXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjZWxsIGJhc2VkIG9mZiBvZiBhbiBpbmRleCwgdXN1YWxseSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBmb3JFYWNoIGxvb3Agb2YgYSBzaW1pbGFybHkgc2l6ZWQgZ3JpZFxuICAgICAqIE5PVEUgYmUgY2FyZWZ1bCB0aGF0IHRoZSBvdGhlciBncmlkIGhhcyB0aGUgc2FtZSBkaW1lbnNpb24gdW5sZXNzIHlvdSByZWFsbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZ1xuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgY2VsbHMsIG1vc3RseSB0byBiZSB1c2VkIHdpdGggZ3JpZHMgdGhhdCBhcmUgd29ya2luZyBhbG9uZ3NpZGUgYSBkaWZmZXJlbnQgZm9yRWFjaCBsb29wXG4gICAgICovXG4gICAgZ2V0SShpbmRleDogbnVtYmVyKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW2luZGV4XVxuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JpZCB9IiwiY2xhc3MgSURNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGxhc3RJZDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGFzdElkID0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5leHQgaWRcbiAgICAgKi9cbiAgICBuZXh0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJZCsrXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IElEX01BTkFHRVJcbiAqL1xuY29uc3QgSURfTUFOQUdFUiA9IG5ldyBJRE1hbmFnZXIoKVxuZXhwb3J0IHtJRF9NQU5BR0VSLCBJRE1hbmFnZXJ9IiwiaW50ZXJmYWNlIEtleVN0YXRlIHsgXG4gICAga2V5OiBzdHJpbmc7XG4gICAgaXNEb3duOiBib29sZWFuO1xuICAgIGhhbGZTdGVwczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY29uc3QgbWFrZUtleVN0YXRlID0gKGtleTogc3RyaW5nLCBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZSwgaGFsZlN0ZXBzOiBudW1iZXIgPSAwKTogS2V5U3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBoYWxmU3RlcHNcbiAgICB9XG59XG5cbmNsYXNzIEtleWJvYXJkTW9uaXRvciB7XG4gICAga2V5SGFzaDogSGFzaDxLZXlTdGF0ZT47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlIYXNoID0ge31cbiAgICB9XG4gICAgLy8gQXR0YWNoIHRvIHRoZSBET00sIHVzdWFsbHkgdGhlIGRvY3VtZW50IGFzIGEgd2hvbGUsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgbW9yZSBzcGVjaWZpYyBpZiB5b3Ugd2FudFxuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBLZXlib2FyZE1vbml0b3Ige1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXksIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZigha2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoa2V5U3RhdGUuaXNEb3duKXtcbiAgICAgICAgICAgICAgICBrZXlTdGF0ZS5oYWxmU3RlcHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3RhdGUuaXNEb3duID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0S2V5U3RhdGUoa2V5OiBzdHJpbmcpOiBLZXlTdGF0ZXtcbiAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5rZXlIYXNoW2tleV1cbiAgICB9XG4gICAgcmVzZXRTdGVwcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5SGFzaClcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleXNbaV1dLmhhbGZTdGVwcyA9IDBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBLZXlib2FyZE1vbml0b3IgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSBmcm9tICcuL3NoYXBlcy9lbGxpcHNlJ1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBzdGF0aWMgbWV0aG9kcyBmb3IgaGVscGluZyB0byBtYW5pcHVsYXRlIG1hcHNcbiAqL1xuY2xhc3MgTWFwR2VuSGVscGVyIHtcbiAgICAvLyBUT0RPOiBNYXliZSBjb21lIHVwIHdpdGggYSBiZXR0ZXIgbmFtZVxuICAgIC8qKlxuICAgICAqIFBsYWNlIGEgcm9vbSBpbnNpZGUgYSBncm91cCBvZiB0aWxlc1xuICAgICAqIEBwYXJhbSB0aWxlR3JpZCB0aGUgZ3JpZCBvZiB0aWxlcyB0byBhZmZlY3RcbiAgICAgKiBAcGFyYW0gcm9vbSB0aGUgcm9vbSBzZWN0aW9uIHRoYXQgd2Ugd2lsbCBvcGVuIHVwXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVJvb20odGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb206IElSZWN0KTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IEJvdW5kcyBjaGVjayBvciBzb21ldGhpbmcsIHJpZ2h0IG5vdyB0ZXJyaWJsZSB0aGluZ3MgY2FuIGhhcHBlblxuICAgICAgICBjb25zdCB7IGxlZnQscmlnaHQsdG9wLGJvdHRvbX0gPSBSZWN0LnNpZGVzKHJvb20pXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc3RvcCBvbmUgZWFybHkgYmVjYXVzZSBvZiBob3cgd2Ugd29yayB3aXRoIGEgZ3JpZFxuICAgICAgICAvLyB3ZSB3aWxsIGFsc28gaW5jbHVkZSBhIG1hcmdpbiBvZiBvbmUgb24gYWxsIHNpZGV4XG4gICAgICAgIGZvcihsZXQgeSA9IHRvcCArIDE7IHkgPCBib3R0b20gLSAxOyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gbGVmdCArIDE7IHggPCByaWdodCAtIDE7IHgrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHgsIHkpXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSFR1bm5lbCh0aWxlR3JpZDogR3JpZDxUaWxlPiwgeDE6IG51bWJlciwgeDI6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHN3YXAgdGhlbSBhcyBuZWNlc3NhcnlcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oeDEsIHgyKVxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh4MSwgeDIpXG4gICAgICAgIGZvcihsZXQgeCA9IG1pbjsgeCA8PSBtYXg7IHgrKyl7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVWVHVubmVsKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCB5MTogbnVtYmVyLCB5MjogbnVtYmVyLCB4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oeTEsIHkyKVxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heCh5MSwgeTIpXG4gICAgICAgIGZvcihsZXQgeSA9IG1pbjsgeSA8PSBtYXg7IHkrKyl7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCx5KVxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjYXJ2ZUVsbGlwc2UodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGVsbGlwc2U6IElFbGxpcHNlKTogdm9pZCB7XG4gICAgICAgIHRpbGVHcmlkLmZvckVhY2goKHRpbGUsIGluZGV4LCB4LCB5KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZihFbGxpcHNlLmNvbnRhaW5zWFkoZWxsaXBzZSwgeCx5KSl7IFxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgeyBNYXBHZW5IZWxwZXIgfSIsImltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJ1xuXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCB7IE1hcEdlbkhlbHBlciB9IGZyb20gJy4vbWFwR2VuSGVscGVyJ1xuaW1wb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSBmcm9tICcuL3NoYXBlcy9lbGxpcHNlJ1xuXG5cbmNvbnN0IFJPT01fTUFYX1NJWkUgPSAxMFxuY29uc3QgUk9PTV9NSU5fU0laRSA9IDEwXG5jb25zdCBNQVhfUk9PTVMgPSAzMFxuY29uc3QgTUFYX0VMTElQU0VfUkFESVVTID0gUk9PTV9NQVhfU0laRSAvIDJcbmNvbnN0IE1JTl9FTExJUFNFX1JBRElVUyA9IFJPT01fTUFYX1NJWkUgLyA0XG5cbmNvbnN0IENBVkVfRUxMSVBTRVMgPSAwXG5cbmNvbnN0IHJhbmRpbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihSQU5ET00ubmV4dCgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5jb25zdCByYW5kb21FbGxpcHNlID0gKG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IElFbGxpcHNlID0+IHtcbiAgICByZXR1cm4gRWxsaXBzZS5tYWtlKFxuICAgICAgICByYW5kaW50KG1pblgsIG1heFgpLFxuICAgICAgICByYW5kaW50KG1pblksIG1heFkpLFxuICAgICAgICByYW5kaW50KE1JTl9FTExJUFNFX1JBRElVUywgTUFYX0VMTElQU0VfUkFESVVTKSxcbiAgICAgICAgcmFuZGludChNSU5fRUxMSVBTRV9SQURJVVMsIE1BWF9FTExJUFNFX1JBRElVUyksXG4gICAgICAgIFJBTkRPTS5uZXh0KCkgKiBNYXRoLlBJICogMiBcbiAgICApXG59XG5cbi8qKlxuICogUGxhY2UgYSBidW5jaCBvZiByb29tcyBvcHBvcnR1bmlzdGljYWxseSwgYW5kIHRoZW4gY2FydmUgb3V0IHNvbWUgZWxsaXBzZXMgcmFuZG9tbHlcbiAqIEBwYXJhbSB0aWxlR3JpZCB0aWxlR3JpZCB0byBiZSBwb3B1bGF0ZWRcbiAqIEBwYXJhbSByb29tcyBMaXN0IG9mIHJvb21zIHRvIGJlIHBvcHVsYXRlZFxuICovXG5jb25zdCBtYXBHZW5lcmF0b3IxID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCByb29tczogSVJlY3RbXSk6IHZvaWQgPT4ge1xuICAgIGZvcihsZXQgciA9IDA7IHIgPCBNQVhfUk9PTVM7IHIrKyl7XG4gICAgXG4gICAgICAgIGNvbnN0IHcgPSByYW5kaW50KFJPT01fTUlOX1NJWkUsIFJPT01fTUFYX1NJWkUpXG4gICAgICAgIGNvbnN0IGggPSByYW5kaW50KFJPT01fTUlOX1NJWkUsIFJPT01fTUFYX1NJWkUpXG4gICAgICAgIGNvbnN0IHggPSByYW5kaW50KDAsIHRpbGVHcmlkLndpZHRoIC0gdyAtIDEpXG4gICAgICAgIGNvbnN0IHkgPSByYW5kaW50KDAsIHRpbGVHcmlkLmhlaWdodCAgLSBoIC0gMSlcbiAgICBcbiAgICAgICAgY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZSh4LHksdyxoKVxuICAgICAgICBsZXQgaW50ZXJzZWN0cyA9IGZhbHNlXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihSZWN0LmludGVyc2VjdHMobmV3Um9vbSwgcm9vbXNbaV0pKXtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWludGVyc2VjdHMpe1xuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gUmVjdC5jZW50ZXIobmV3Um9vbSlcbiAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVSb29tKHRpbGVHcmlkLCBuZXdSb29tKVxuICAgICAgICAgICAgaWYocm9vbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFJvb20gPSByb29tc1tyb29tcy5sZW5ndGggLTFdXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdENlbnRlciA9IFJlY3QuY2VudGVyKGxhc3RSb29tKVxuICAgICAgICAgICAgICAgIGlmKHJhbmRpbnQoMCwxKSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBsYXN0Q2VudGVyLnkpXG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBjZW50ZXIueClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVWVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLnksIGNlbnRlci55LCBsYXN0Q2VudGVyLngpXG4gICAgICAgICAgICAgICAgICAgIE1hcEdlbkhlbHBlci5jcmVhdGVIVHVubmVsKHRpbGVHcmlkLCBsYXN0Q2VudGVyLngsIGNlbnRlci54LCBjZW50ZXIueSlcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb29tcy5wdXNoKG5ld1Jvb20pXG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBlID0gMDsgZSA8IENBVkVfRUxMSVBTRVM7IGUrKyl7XG4gICAgICAgIE1hcEdlbkhlbHBlci5jYXJ2ZUVsbGlwc2UodGlsZUdyaWQsIHJhbmRvbUVsbGlwc2UoTUFYX0VMTElQU0VfUkFESVVTLCB0aWxlR3JpZC53aWR0aCAtMSAtIE1BWF9FTExJUFNFX1JBRElVUywgTUFYX0VMTElQU0VfUkFESVVTLCB0aWxlR3JpZC5oZWlnaHQgLSAxIC0gTUFYX0VMTElQU0VfUkFESVVTKSlcbiAgICB9XG59XG5cbmNvbnN0IHBsYWNlQXN0ZXJvaWRDaHVuayA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZWxsaXBzZTogSUVsbGlwc2UpOiB2b2lkID0+IHtcbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0aWxlOiBUaWxlLCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBpZihFbGxpcHNlLmNvbnRhaW5zWFkoZWxsaXBzZSwgeCx5KSl7IFxuICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSB0cnVlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSB0cnVlXG4gICAgICAgICAgICB0aWxlLmNvbnRhaW5lZCA9IHRydWVcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IG1hcEdlbmVyYXRvcjIgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb21zOiBJUmVjdFtdKTogdm9pZCA9PiB7XG4gICAgY29uc3QgTUFSR0lOUyA9IDEwXG4gICAgY29uc3QgTUlOX0RJTUVOU0lPTiA9IE1hdGgubWluKHRpbGVHcmlkLndpZHRoLCB0aWxlR3JpZC5oZWlnaHQpXG4gICAgY29uc3QgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTID0gTWF0aC5mbG9vcigoTUlOX0RJTUVOU0lPTiAtIE1BUkdJTlMgKiAyKS8yKVxuICAgIGNvbnN0IE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUyA9IE1hdGguZmxvb3IoTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTICogMC43KVxuICAgIFxuICAgIFxuICAgIGNvbnN0IFNFQ1RJT05fQ09VTlQgPSAxMFxuICAgIC8vIGNvbnN0IG5ld1Jvb20gPSBSZWN0Lm1ha2UoTWF0aC5mbG9vcih0aWxlR3JpZC53aWR0aC8yIC0gMTApLE1hdGguZmxvb3IodGlsZUdyaWQuaGVpZ2h0LzIgLSAxMCksMjAsMjApXG4gICAgLy8gTWFwR2VuSGVscGVyLmNyZWF0ZVJvb20odGlsZUdyaWQsIG5ld1Jvb20pXG4gICAgLy8gcm9vbXMucHVzaChuZXdSb29tKVxuICAgIC8vIGZpcnN0IHRoaW5ncyBmaXJzdCwgbGV0cyBsYXllciBzb21lIGJpZyBhc3Rlcm9pZHMgb24gdG9wIG9mIGVhY2ggb3RoZXJcbiAgICB0aWxlR3JpZC5mb3JFYWNoKCh0OiBUaWxlKTogdm9pZCA9PiB7XG4gICAgICAgIHQuYmxvY2tNb3ZlID0gZmFsc2VcbiAgICAgICAgdC5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICB9KVxuICAgIC8vIG5vdyBsZXQncyBidWlsZCBhbiBhc3Rlcm9pZCB3aXRoaW4gdGhlIGJvdW5kc1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBTRUNUSU9OX0NPVU5UOyBpKyspe1xuICAgICAgICBjb25zdCB4UmFkaXVzID0gcmFuZGludChNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMsIE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUylcbiAgICAgICAgY29uc3QgeVJhZGl1cyA9IHJhbmRpbnQoTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTLCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMpXG4gICAgICAgIGNvbnN0IGJpZ1JhZGl1cyA9IE1hdGgubWF4KHhSYWRpdXMsIHlSYWRpdXMpXG4gICAgICAgIGNvbnN0IHggPSByYW5kaW50KE1BUkdJTlMgKyBiaWdSYWRpdXMsIHRpbGVHcmlkLndpZHRoIC0gTUFSR0lOUyAtIGJpZ1JhZGl1cylcbiAgICAgICAgY29uc3QgeSA9IHJhbmRpbnQoTUFSR0lOUyArIGJpZ1JhZGl1cywgdGlsZUdyaWQuaGVpZ2h0IC0gTUFSR0lOUyAtIGJpZ1JhZGl1cylcbiAgICAgICAgcGxhY2VBc3Rlcm9pZENodW5rKHRpbGVHcmlkLCBFbGxpcHNlLm1ha2UoeCx5LHhSYWRpdXMseVJhZGl1cywgUkFORE9NLm5leHQoKSAqIE1hdGguUEkgKiAyKSlcbiAgICB9XG4gICAgLy8gbm93IHdpdGhpbiB0aGlzIGZyYW1ld29yayBydW4gdGhlIG5leHQgbWFwIGdlbmVyYXRvclxuICAgIG1hcEdlbmVyYXRvcjEodGlsZUdyaWQsIHJvb21zKVxuICAgIFxufVxuXG5leHBvcnQgeyBtYXBHZW5lcmF0b3IxLCBtYXBHZW5lcmF0b3IyIH0iLCIvLyBMZXQncyBnbyBhaGVhZCBhbmQgY3JlYXRlIHRoZSBQb2ludCBpbnRlcmZhY2UgaGVyZSwgd2UnbGwgZXhwb3J0IGl0IGZvciB1c2UgbGF0ZXIgaW4gdGhlIHByb2plY3RcblxuaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuLyoqXG4gKiBDbGFzcyB0byBoZWxwIG1vbml0b3IgdGhpbmdzIHRoYXQgaGF2ZSBoYXBwZW5lZCB0byB0aGUgbW91c2Ugc2luY2UgbGFzdCB0aW1lIHRoYXQgd2UgbG9va2VkXG4gKi9cblxuaW50ZXJmYWNlIEhhbGZDbGljayB7XG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICBpc0Rvd246IGJvb2xlYW47XG59XG5cbmNsYXNzIE1vdXNlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvdmVyIHRoZSBhdHRhY2hlZCBlbGVtbnRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgbGFzdCB0aW1lIHdlIGxvb2tlZFxuICAgICAqL1xuICAgIGhhc01vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRydWUgaWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGNvbnRhaW5lciBcbiAgICAgKi9cbiAgICBpbkNvbnRhaW5lcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGlzIHRoZSBtb3VzZSBidXR0b24gZG93biAoY3VycmVudGx5IG9ubHkgdHJhY2tzIGxlZnQpXG4gICAgICovXG4gICAgaXNEb3duOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgYSBmdWxsIGNsaWNrIGlzIHVwIGFuZCBkb3duLCB0aGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1cHMgYW5kIGRvd25zLCB1c2VmdWwgZm9yIGRyYWdzIG9yIG90aGVyIHRoaW5ncyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICovXG4gICAgaGFsZkNsaWNrczogSGFsZkNsaWNrW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50Lm1ha2UoMCwwKVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzID0gW11cbiAgICAgICAgLy8gVE9ETzogQWRkIGNsaWNrIHRyYWNraW5nLCBkZXBlbmRzIG9uIGhvdyBxdWlja2x5IHdlIGFyZSBwb2xsaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yIG1vdXNlIHJlbGF0ZWQgZXZlbnRzIHRvXG4gICAgICogQHBhcmFtIGVsZW1lbnQgdGhlIHBhcnRpY3VsYXIgbW91c2UgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogTW91c2VNb25pdG9yIHtcbiAgICAgICAgLy8gVE9ETzogV2UnbGwgcmVnaXN0ZXIgY2xpY2sgaGlzdG9yeSBpbiB0aGUgZnV0dXJlLCBmb3Igbm93IHdlIGFyZSBqdXN0IGRvaW5nIG1vdXNlIG92ZXIgYXQgcHJlc2VudFxuICAgICAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgUG9pbnQuc2V0KHRoaXMucG9zaXRpb24sIGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZW50ZXJzIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIG1vdmVzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGV4aXRzIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHJhaXNlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IGZhbHNlIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayB0aGF0IHdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgZXZlbnRzIHNpbmNlIG91ciBsYXN0IHBvbGwgb2Ygc3RhdGUgYW5kIGl0IGNhbiBiZSByZXNldFxuICAgICAqL1xuICAgIHJlc2V0KCk6IHZvaWR7XG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgaGF2ZW4ndCBtb3ZlZCBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIC8vIGNsZWFyIG91dCB0aGUgY2xpY2tzXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcy5sZW5ndGggPSAwXG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZU1vbml0b3IgfSIsImxldCBfaWQgPSAwXG5jb25zdCBuZXh0SWQgPSAoKTogbnVtYmVyID0+IF9pZCsrXG5cbi8vIFRPRE86IE1ha2UgbWVzc2FnZXMgZW51bXM/XG5cbi8vIFRPRE86IE1ha2UgYW4gaW50ZXJmYWNlIGZvciB0aGUgc3Vic2NyaWJlciBmdW5jdGlvblxudHlwZSBTdWJzY3JpYmVyRnVuY3Rpb24gPSAobWVzc2FnZTogYW55LCB0b3BpYzogc3RyaW5nKSA9PiB2b2lkXG5cbmludGVyZmFjZSBTdWJzY3JpYmVyTm9kZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uO1xuICAgIHByaW9yaXR5OiBudW1iZXI7XG4gICAgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xufVxuXG5cblxuY29uc3QgbWFrZVN1Yk5vZGUgPSAoc3ViRm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDAsIG5leHQ6IFN1YnNjcmliZXJOb2RlIHwgbnVsbCA9IG51bGwpOiBTdWJzY3JpYmVyTm9kZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5leHRJZCgpLFxuICAgICAgICBzdWJGbixcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIG5leHRcbiAgICB9XG59XG5cbi8vIFRPRE86ID8/IE1ha2UgaXQgc28gYSBzdWJzY3JpYmVyIGxpc3QgY291bGQgYmUgZGVhZmVuZWQvbGlzdGVuP1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgZnVuY3Rpb25zLCBzb3J0ZWQgYnkgcHJpb3JpdHksIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseSB3aGVuIHRoZSBsaXN0IGlzIG5vdGlmaWVkIG9mIGEgbmV3IG1lc3NhZ2VcbiAqL1xuY2xhc3MgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCB7XG4gICAgcm9vdDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIHRhaWw6IFN1YnNjcmliZXJOb2RlIHwgbnVsbDtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGxcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGlzIGxpc3QgdmlhIHRoZSBub3RpZnkgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIG1lc3NhZ2Ugb2JqZWN0IHdoZW5ldmVyIHRoaXMgc3Vic2NyaWJlciBsaXN0IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSBwcmlvcml0eSBUaGUgaGlnaGVyIHRoZSBwcmlvcml0eSwgdGhlIGVhcmxpZXIgaXQgd2lsbCBydW4sIGlmIGl0IGhhcyB0aGUgc2FtZSBwcmlvcml0eSB0aGUgb25lIHRoYXQgd2FzIGFkZGVkIGZpcnN0IHdpbGwgZmlyZSBmaXJzdFxuICAgICAqL1xuICAgIHN1YnNjcmliZShmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlcntcbiAgICAgICAgLy8gQ2FzZSAjMSBFbXB0eSBTdWJzY3JpYmVyIExpc3RcbiAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5yb290XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgIH0gXG4gICAgICAgIC8vIENhc2UgIzIgV2UgYWxyZWFkeSBoYXZlIHNvbWUgc3Vic2NyaWJlcnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290IC8vIHdlIGtub3cgaXQgc2hvdWxkIGJlIGEgU3Vic2NyaWJlciBOb2RlIGFuZCBub3QgbnVsbCwgYmVjYXVzZSB3ZSBhcmUgaGVyZVxuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIG5ldyByb290XG4gICAgICAgICAgICBpZihwcmlvcml0eSA8IHRyYXZlbGxlciEucHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdGhpcy5yb290KVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3JtYWwgY2FzZSB3ZSBoYXZlIG90aGVyIHRoaW5ncyB0byB3b3JyeSBhYm91dFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUodHJhdmVsbGVyICYmIHRyYXZlbGxlci5uZXh0ICYmIHRyYXZlbGxlci5uZXh0LnByaW9yaXR5ID49IHByaW9yaXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsbGVyID0gdHJhdmVsbGVyLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBlaXRoZXIgZm91bmQgYSBub2RlIHdpdGggbG93ZXIgcHJpb3JpdHkgdGhhbiB1cyBvciB3ZSBoYXZlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgICAgICAgICB0cmF2ZWxsZXIhLm5leHQgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHksIHRyYXZlbGxlciEubmV4dClcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRyYXZlbGxlcnMgd2FzIHRoZSBvbGQgdGFpbFxuICAgICAgICAgICAgICAgIGlmKHRyYXZlbGxlciA9PT0gdGhpcy50YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBuZXh0IG9uZSBpcyB0aGUgbmV3IHRhaWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdHJhdmVsbGVyIS5uZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhdmVsbGVyIS5uZXh0LmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbW9zdCBpbXBvcmFudCBpbmZvcm1hdGlvbiBmb3IgdGhlIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRvcGljIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBwdWJzdWIgdG8gcmVtaW5kIHRoZSBzdWJzY3JpYmVyIG9mIHRoZSBzcGVjaWZpYyB0b3BpYyBvciBzdWJ0b3BpY1xuICAgICAqL1xuICAgIG5vdGlmeShtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRyYXZlbGxlciA9IHRoaXMucm9vdFxuICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICB0cmF2ZWxsZXIuc3ViRm4obWVzc2FnZSwgdG9waWMpXG4gICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcmlvcml0eVN1YnNjcmliZXJMaXN0LCBTdWJzY3JpYmVyRnVuY3Rpb24gfSIsImltcG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IGZyb20gJy4vcHJpb3JpdHlTdWJzY3JpYmVyTGlzdCdcblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbi8qKlxuICogUHVic3ViIGlzIGEgdG9waWMtYmFzZWQgb2JzZXJ2ZXIgcGF0dGVybiBpbXBsZW1lbnRhdGlvbiBkZXNpZ25lZCB0byBhdm9pZCB0aWdodCBjb3VwbGluZyBvZiBjb21wb25lbnRzXG4gKi9cbmNsYXNzIFB1YlN1YiB7XG4gICAgdG9waWNzOiBIYXNoPFByaW9yaXR5U3Vic2NyaWJlckxpc3Q+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9waWNzID0ge31cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBtZXNzYWdlIHRvIGFsbCBzdWJzY3JpYmVycyB0byBhIHRvcGljXG4gICAgICogQHBhcmFtIHRvcGljIFRvcGljIHRvIHVzZSwgaWYgbm9ib2R5IGlzIHN1YnNjcmliZWQgdG8gaXQsIG5vdGhpbmcgaGFwcGVuc1xuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBhY3R1YWwgbWVzc2FnZSB0byBzZW5kLCB0aGlzIGNvdWxkIGJlIGFueXRoaW5nLCBidXQgaXQncyBhIHNpbmdsZSB0aGluZ1xuICAgICAqL1xuICAgIHB1Ymxpc2godG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMudG9waWNzW3RvcGljXSl7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1t0b3BpY10ubm90aWZ5KG1lc3NhZ2UsIHRvcGljKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIHNwZWNpZmljIHRvcGljIHdpdGggYSBnaXZlbiBwcmlvcml0eSwgcmV0dXJucyBhbiBpZCB0aGF0IHlvdSdsbCBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHRvcGljIHRoZSBzcGVjaWZpYyB0b3BpYyB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0gZm4gdGhlIGZ1bmN0aW9uIHRvIHJlY2lldmUgdGhlIHNwZWNpZmljIG1lc3NhZ2UgYW5kIHRvcGljIGJlaW5nIGJyb2FkY2FzdGVkIHRvXG4gICAgICogQHBhcmFtIHByaW9yaXR5IHRoZSBwcmlvcml0eSBvZiB0aGUgZnVuY3Rpb24gdG8gc3Vic2NyaWJlIHRvLCBoaWdoZXIgbnVtYmVycyBydW4gZmlyc3QsIHRoZSBkZWZhdWx0IGlzIHplcm8sIG5lZ2F0aXZlIG51bWJlcnMgYXJlIGFsbG93ZWRcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodG9waWM6IHN0cmluZywgZm46IFN1YnNjcmliZXJGdW5jdGlvbiwgcHJpb3JpdHk6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBpZighdGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXSA9IG5ldyBQcmlvcml0eVN1YnNjcmliZXJMaXN0KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b3BpY3NbdG9waWNdLnN1YnNjcmliZShmbiwgcHJpb3JpdHkpXG4gICAgfVxufVxuLy8gT1VSIFVOSVZFUlNBTCBERUZBVUxUIFBVQlNVQlxuY29uc3QgUFVCU1VCID0gbmV3IFB1YlN1YigpXG5leHBvcnQge1BVQlNVQiwgUHViU3VifSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXIgQ2VsbFxuICovXG5pbnRlcmZhY2UgSVJlbmRlckNlbGwge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY2hhcmFjdGVyOiBzdHJpbmc7IC8vIHRoaXMgc2hvdWxkIG9ubHkgYmUgc3RyaW5nIG9mIGxlbmd0aCAxXG4gICAgZm9yZUNvbG9yOiBzdHJpbmc7XG4gICAgYmFja0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBmb3JlQ29sb3I6IHN0cmluZywgYmFja0NvbG9yOiBzdHJpbmcpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCx5LCBjaGFyYWN0ZXIsIGZvcmVDb2xvciwgYmFja0NvbG9yXG4gICAgfVxufVxuXG5jb25zdCBSZW5kZXJDZWxsID0ge1xuICAgIG1ha2Vcbn1cblxuZXhwb3J0IHsgSVJlbmRlckNlbGwsIFJlbmRlckNlbGx9IiwiaW1wb3J0IHtJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5cbmludGVyZmFjZSBIYXNoU3RyPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuaW50ZXJmYWNlIEhhc2hOdW08VD4ge1xuICAgIFtrZXk6IG51bWJlcl06IFQ7XG59XG5cbmNvbnN0IGNvZGUgPSAoY2hhcjogc3RyaW5nKTogbnVtYmVyID0+IGNoYXIuY2hhckNvZGVBdCgwKVxuY29uc3QgQ0hBUkFDVEVSX0hFTFBFUjogSGFzaFN0cjxzdHJpbmc+ID0ge1xuICAgIFZFUlRJQ0FMX0xJTkU6ICfilIInLFxuICAgIEhPUklaT05UQUxfTElORTogJ+KUgCcsXG4gICAgQ1JPU1NfTElORVM6ICfilLwnLFxuICAgIFRfTEVGVDogJ+KUpCcsXG4gICAgVF9VUDogJ+KUtCcsXG4gICAgVF9SSUdIVDogJ+KUnCcsXG4gICAgVF9ET1dOOiAn4pSsJyxcbiAgICBUT1BfUklHSFQ6ICfilJQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ+KUjCcsXG4gICAgQk9UVE9MX0xFRlQ6ICfilJAnLFxuICAgIFRPUF9MRUZUOiAn4pSYJ1xufVxuXG5jb25zdCBUSUxFX1dJRFRIID0gMTAsIFRJTEVfSEVJR0hUID0gMTBcblxuY29uc3QgQ09ERV9UT19SRUNUX0hBU0g6IEhhc2hOdW08SVJlY3Q+ID0ge31cbmNvbnN0IHNwYWNlQ29kZSA9ICAgY29kZSgnICcpXG5jb25zdCBhdENvZGUgPSAgICAgIGNvZGUoJ0AnKVxuY29uc3QgYUNvZGUgPSAgICAgICBjb2RlKCdhJylcbmNvbnN0IHpDb2RlID0gICAgICAgY29kZSgneicpXG5jb25zdCBBQ29kZSA9ICAgICAgIGNvZGUoJ0EnKVxuY29uc3QgWkNvZGUgPSAgICAgICBjb2RlKCdaJylcblxuXG5jb25zdCBjdHJoSGVscGVyID0gKGNvZGU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlXSA9IFJlY3QubWFrZSh4LHksIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuXG4vLyBXZSB3aWxsIGZpbGwgaW4gdGhlIG90aGVyIGNoYXJhY3RlcnMgYXMgbmVjZXNzYXJ5XG5DT0RFX1RPX1JFQ1RfSEFTSFtzcGFjZUNvZGVdID0gUmVjdC5tYWtlKDAsIDAsIDEwLCAxMClcbkNPREVfVE9fUkVDVF9IQVNIW2F0Q29kZV0gPSBSZWN0Lm1ha2UoMCwgMTAsIDEwLCAxMClcbmZvcihsZXQgaSA9IEFDb2RlOyBpIDw9IFpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gQUNvZGUpICogMTAsIDMwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbmZvcihsZXQgaSA9IGFDb2RlOyBpIDw9IHpDb2RlOyBpKyspe1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2ldID0gUmVjdC5tYWtlKChpIC0gYUNvZGUpICogMTAsIDQwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbi8vIGZvciBicmV2aXRpZXMgc2FrZVxuY29uc3QgQ0ggPSBDSEFSQUNURVJfSEVMUEVSXG5jdHJoSGVscGVyKGNvZGUoQ0guVkVSVElDQUxfTElORSksIDE0MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5IT1JJWk9OVEFMX0xJTkUpLCAxNTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQ1JPU1NfTElORVMpLCAxNjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9MRUZUKSwgMTcwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfVVApLCAxODAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9SSUdIVCksIDE5MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0RPV04pLCAyMDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX1JJR0hUKSwgMjEwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTV9SSUdIVCksIDIyMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT0xfTEVGVCksIDIzMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfTEVGVCksIDI0MCwxMClcblxuXG5mdW5jdGlvbiBkcmF3U2VjdGlvbihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGlsZXNoZWV0OiBhbnksIHNyY1JlY3Q6IElSZWN0LCBkZXN0UmVjdDogSVJlY3QsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IHZvaWR7XG4gICAgY3R4LmNsZWFyUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNoZWV0LCBzcmNSZWN0LngsIHNyY1JlY3QueSwgc3JjUmVjdC53aWR0aCwgc3JjUmVjdC5oZWlnaHQsIGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICd4b3InXG4gICAgY3R4LmZpbGxTdHlsZT1mb3JlQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJ1xuICAgIGN0eC5maWxsU3R5bGU9YmFja0NvbG9yXG4gICAgY3R4LmZpbGxSZWN0KGRlc3RSZWN0LngsZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xufVxuXG5leHBvcnQgIHsgQ09ERV9UT19SRUNUX0hBU0gsIENIQVJBQ1RFUl9IRUxQRVIsIGNvZGUsIGRyYXdTZWN0aW9uIH0iLCIvLyBXQVJOSU5HOiBIRVJFIFRIRVJFIEJFIERSQUdPTlMsIChvciBpbiB0aGlzIGNhc2UsIGEgbG90IG9mIGNvZGUgSSBkb24ndHVuZGVyc3RhbmQpXG5cbi8vIFdFIE9OTFkgV0FOVCBPTkUgUk5HIEdFTkVSQVRPUiBCRUNBVVNFIFdFIEFMV0FZUyBXQU5UIEEgU0VFRCBGT1IgSVRcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUyMTI5NS9zZWVkaW5nLXRoZS1yYW5kb20tbnVtYmVyLWdlbmVyYXRvci1pbi1qYXZhc2NyaXB0XG5cbi8vIEhhc2hpbmcgZnVuY3Rpb24gZm9yIHRha2luZyBzaW1wbGUgc3RyaW5nIGFuZCBjcmVhdGluZyBiZXR0ZXIgXCJ0cnVlXCIgc2VlZHNcbi8vIEkgSEFWRSBOTyBJREVBIFdIQVQgVEhFIE1BR0lDIE5VQk1FUlMgQVJFIEZPUlxuZnVuY3Rpb24geG11cjMoc3RyOiBzdHJpbmcpOiBGdW5jdGlvbiB7XG4gICAgbGV0IGggPSAxNzc5MDMzNzAzIF4gc3RyLmxlbmd0aCAvLyBiaXR3aXNlIG9yIHRoZSBzdHJpbmcgd2l0aCB0aGlzIHJhbmRvbSB0aGluZ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBzdHIuY2hhckNvZGVBdChpKSwgMzQzMjkxODM1MylcbiAgICAgICAgaCA9IGggPDwgMTMgfCBoID4+PiAxOVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbigpOiBhbnl7XG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIGggPj4+IDE2LCAyMjQ2ODIyNTA3KVxuICAgICAgICBoID0gTWF0aC5pbXVsKGggXiBoID4+PiAxMywgMzI2NjQ4OTkwOSlcbiAgICAgICAgcmV0dXJuIChoIF49IGggPj4+IDE2KSA+Pj4gMFxuICAgIH1cbn1cblxudHlwZSBJUmFuZG9tID0oKSA9PiBudW1iZXI7XG5cbi8vIEdFTkVSQVRPUlNcbmZ1bmN0aW9uIHNmYzMyKGE6IGFueSwgYjogYW55LCBjOiBhbnksIGQ6IGFueSk6IChGdW5jdGlvbil7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCk6IGFueXtcbiAgICAgICAgYSA+Pj49IDA7IGI+Pj49IDA7IGMgPj4+PSAwOyBkID4+Pj0gMFxuICAgICAgICBsZXQgdCA9IChhICsgYikgfCAwXG4gICAgICAgIGEgPSBiIF4gYiA+Pj4gOVxuICAgICAgICBiID0gYyArIChjIDw8IDMpIHwgMFxuICAgICAgICBjID0gKGMgPDwgMjEgfCBjID4+PiAxMSlcbiAgICAgICAgZCA9IGQgKyAxIHwgMFxuICAgICAgICB0ID0gdCArIGQgfCAwXG4gICAgICAgIGMgPSBjICsgdCB8IDBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAodCA+Pj4gMCkgLyA0Mjk0OTY3Mjk2XG4gICAgfVxufVxuXG4vLyBPTkUgTElORVIgQ1VSUkVOVExZIE5PVCBJTiBVU0Vcbi8vIGNvbnN0IExDRz0gKHM6IGFueSk6IEZ1bmN0aW9uPT4oKTogYW55PT4oMioqMzEtMSYocz1NYXRoLmltdWwoNDgyNzEscykpKS8yKiozMTtcblxuY29uc3QgUkFORE9NID0ge1xuICAgIF9nZW5lcmF0b3I6ICgoKTogYW55ID0+IHt9KSBhcyBGdW5jdGlvbixcbiAgICBzZWVkOiBmdW5jdGlvbihzZWVkU3RyOiBzdHJpbmcgPSBidG9hKG5ldyBEYXRlKCkudG9TdHJpbmcoKSkgKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2VlZCA9IHhtdXIzKHNlZWRTdHIpXG4gICAgICAgIHRoaXMuX2dlbmVyYXRvciA9IHNmYzMyKHNlZWQoKSwgc2VlZCgpLCBzZWVkKCksIHNlZWQoKSlcbiAgICAgICAgcmV0dXJuIHNlZWRTdHJcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKCk6IGFueSB7XG4gICAgICAgIGlmKHRoaXMuX2dlbmVyYXRvciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnNlZWQoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZW5lcmF0b3IoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUkFORE9NIH0iLCJpbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgSVJlY3QsIFJlY3QgfSBmcm9tICcuL3JlY3QnXG5cbi8qKlxuICogWCBhbmQgWSBhcmUgdGhlIENFTlRFUiBvZiB0aGUgZWxsaXBzZSAodW5saWtlIHRoZSB0b3AgbGVmdCBmb3IgSVJlY3QpXG4gKi9cbmludGVyZmFjZSBJRWxsaXBzZSBleHRlbmRzIElQb2ludCB7XG4gICAgeFJhZGl1czogbnVtYmVyO1xuICAgIHlSYWRpdXM6IG51bWJlcjtcbiAgICByb3RhdGlvbjogbnVtYmVyO1xufVxuXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB4UmFkaXVzOiBudW1iZXIsIHlSYWRpdXM6IG51bWJlciwgcm90YXRpb246IG51bWJlciA9IDApOiBJRWxsaXBzZSA9PiB7XG4gICAgcmV0dXJuIHt4LCB5LCB4UmFkaXVzLCB5UmFkaXVzLCByb3RhdGlvbn1cbn1cblxuXG4vKipcbiAqIENvbnRhaW5zIFhZXG4gKiBAcGFyYW0gZWxsaXBzZSBcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKi9cbmNvbnN0IGNvbnRhaW5zWFkgPSAoZWxsaXBzZTogSUVsbGlwc2UsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoZWxsaXBzZS5yb3RhdGlvbiksIHNpbiA9IE1hdGguc2luKGVsbGlwc2Uucm90YXRpb24pXG4gICAgY29uc3QgZHggPSAoeCAtIGVsbGlwc2UueCksIGR5ID0gKHkgLSBlbGxpcHNlLnkpXG4gICAgY29uc3QgdGR4ID0gY29zICogZHggKyBzaW4gKiBkeSwgdGR5ID0gc2luICogZHggLSBjb3MgKiBkeVxuXG4gICAgcmV0dXJuICggKHRkeCAqIHRkeCkgLyAoZWxsaXBzZS54UmFkaXVzKiBlbGxpcHNlLnhSYWRpdXMpICsgKHRkeSAqIHRkeSkvKGVsbGlwc2UueVJhZGl1cyAqIGVsbGlwc2UueVJhZGl1cykgKSA8IDFcbn1cbi8qKlxuICogRG9lcyB0aGUgZWxsaXBzZSBjb250YWluIHRoZSBwb2ludFxuICogQHBhcmFtIGVsbGlwc2UgXG4gKiBAcGFyYW0gcG9pbnQgXG4gKi9cbmNvbnN0IGNvbnRhaW5zUG9pbnQgPSAoZWxsaXBzZTogSUVsbGlwc2UsIHBvaW50OiBJUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gY29udGFpbnNYWShlbGxpcHNlLCBwb2ludC54LCBwb2ludC55KVxufVxuXG4vLyBcbi8qKlxuICogQXJlIGVub3VnaCBjb3JuZXJzIGluc2lkZSB0aGUgUmVjdCB0byBiZSBjb25zaWRlcmVkIGluc2lkZVxuICogQHBhcmFtIGVsbGlwc2UgZWxsaXBzZVxuICogQHBhcmFtIHJlY3QgcmVjdCB0byB0ZXN0IGlmIGl0J3MgZWRnZXMgYXJlIGluc2lkZSB0aGUgZWxsaXBzZVxuICogQHBhcmFtIHRocmVzaG9sZCBob3cgbWFueSBjb3JuZXJzIG11c3QgYmUgaW5zaWRlIHRvIGNvdW50LCBkZWZhdWx0cyB0byA0XG4gKi9cbmNvbnN0IGNvbnRhaW5zUmVjdENvcm5lcnMgPSAoZWxsaXBzZTogSUVsbGlwc2UsIHJlY3Q6IElSZWN0LCB0aHJlc2hvbGQ6IG51bWJlciA9IDQpOiBib29sZWFuID0+IHtcbiAgICBsZXQgY29ybmVyc0luID0gMFxuICAgIGNvbnN0IGNvcm5lcnMgPSBSZWN0LmNvcm5lcnMocmVjdClcbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMudHIpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLnRsKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy5ibCkpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMuYnIpKXsgY29ybmVyc0luKyt9XG4gICAgcmV0dXJuIGNvcm5lcnNJbiA+PSB0aHJlc2hvbGRcbn1cblxuY29uc3QgRWxsaXBzZSA9IHtcbiAgICBtYWtlLFxuICAgIGNvbnRhaW5zWFksXG4gICAgY29udGFpbnNQb2ludCxcbiAgICBjb250YWluc1JlY3RDb3JuZXJzXG59XG5cbmV4cG9ydCB7IElFbGxpcHNlLCBFbGxpcHNlIH0iLCIvKipcbiAqIEludGVyZmFjZSBmb3Igd29ya2luZyB3aXRoIGEgMkQgUG9pbnRcbiAqL1xuaW50ZXJmYWNlIElQb2ludCB7ICBcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb2ludFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIHt4LHl9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBwb2ludCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGJvdGggb2YgdGhlbSB0b2dldGhlciwgaWYgeW91IHdhbnQgdG8gYWRkIGEgcG9pbnQgVE8gYW5vdGhlciBwb2ludCwgdXNlIGFkZFRvXG4gKiBAcGFyYW0gYSBGaXJzdCBQb2ludCwgdW5tb2RpZmllZFxuICogQHBhcmFtIGIgU2Vjb25kIFBvaW50LCB1bm1vZGlmaWVkXG4gKi9cbmNvbnN0IGFkZCA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UoYS54ICsgYi54LCBhLnkgKyBiLnkpXG59XG5cbi8qKlxuICogQWRkIHRoZSB2YWx1ZSBvZiBQb2ludCBhIHRvIFBvaW50IGJcbiAqIEBwYXJhbSBhIFRoZSBwb2ludCB0aGF0IGNoYW5nZXMsIHdpbGwgaGF2ZSBiIGFkZGVkIHRvIGl0XG4gKiBAcGFyYW0gYiBUaGUgcG9pbnQgd2hvc2UgdmFsdWUgaXMgYWRkZWQgdG8gdGhlIG90aGVyLCBpdCBpcyB1bm1vZGlmaWVkIGl0c2VsZlxuICovXG5jb25zdCBhZGRUbyA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgYS54ICs9IGIueFxuICAgIGEueSArPSBiLnlcbiAgICByZXR1cm4gYVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWVzIG9mIGEgcG9pbnQgd2l0aCB4IGFuZCB5IHZhbHVlcywgcmV0dXJucyB0aGUgbm93IG1vZGlmaWVkIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgcG9pbnQgdG8gYmUgbW9kaWZpZWRcbiAqIEBwYXJhbSB4IG5ldyB4IHZhbHVlXG4gKiBAcGFyYW0geSBuZXcgeSB2YWx1ZVxuICovXG5jb25zdCBzZXQgPSAocG9pbnQ6IElQb2ludCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHBvaW50LnggPSB4XG4gICAgcG9pbnQueSA9IHlcbiAgICByZXR1cm4gcG9pbnRcbn1cblxuLyoqXG4gKiBDb3B5IGEgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBQb2ludCB0aGF0IHdpbGwgYmUgY29waWVkXG4gKi9cbmNvbnN0IGNvcHkgPSAocG9pbnQ6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UocG9pbnQueCwgcG9pbnQueSlcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIG1lYW50IHRvIHdvcmsgd2l0aCB0aGluZ3MgdGhhdCBoYXZlIHRoZSBJUG9pbnQgaW50ZXJmYWNlXG4gKi9cbmNvbnN0IFBvaW50ID0ge1xuICAgIG1ha2UsXG4gICAgYWRkLFxuICAgIGFkZFRvLFxuICAgIHNldCxcbiAgICBjb3B5XG59XG5cbmV4cG9ydCB7SVBvaW50LCBQb2ludH0iLCJpbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vcG9pbnQnXG5pbnRlcmZhY2UgSVJlY3QgZXh0ZW5kcyBJUG9pbnQge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUmVjdFNpZGVzIHtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0Q29ybmVycyB7XG4gICAgdGw6IElQb2ludDtcbiAgICB0cjogSVBvaW50O1xuICAgIGJsOiBJUG9pbnQ7XG4gICAgYnI6IElQb2ludDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWN0YW5nbGVcbiAqIEBwYXJhbSB4IFxuICogQHBhcmFtIHkgXG4gKiBAcGFyYW0gd2lkdGggXG4gKiBAcGFyYW0gaGVpZ2h0IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgfVxufVxuXG5jb25zdCBzZXQgPSAocjogSVJlY3QsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IElSZWN0ID0+IHtcbiAgICByLnggPSB4XG4gICAgci55ID0geVxuICAgIHIud2lkdGggPSB3aWR0aFxuICAgIHIuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgcmV0dXJuIHJcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHVuaXQgdmFsdWUgb2YgdGhlIHNpZGVzIG9mIHRoZSByZWN0YW5nbGUsIGxlZnQgYW5kIHJpZ2h0IHJldHVybiB4IGNvb3JkaW5hdGVzLCB0b3AgYW5kIGJvdHRvbSBpbmNsdWRlIHkgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSByZWN0IHJlY3RhbmdsZSB1c2VkXG4gKi9cbmNvbnN0IHNpZGVzID0gKHJlY3Q6IElSZWN0KTogSVJlY3RTaWRlcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgICB0b3A6IHJlY3QueSxcbiAgICAgICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgICB9XG59XG5jb25zdCBjb3JuZXJzID0gKHJlY3Q6IElSZWN0KTogSVJlY3RDb3JuZXJzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0bDogUG9pbnQubWFrZShyZWN0LngsIHJlY3QueSksXG4gICAgICAgIHRyOiBQb2ludC5tYWtlKHJlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSksXG4gICAgICAgIGJsOiBQb2ludC5tYWtlKHJlY3QueCwgcmVjdC55ICsgcmVjdC5oZWlnaHQpLFxuICAgICAgICBicjogUG9pbnQubWFrZShyZWN0LnggKyByZWN0LndpZHRoLCByZWN0LnkgKyByZWN0LmhlaWdodCksXG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIHBvaW50OiBOT1RFOiBUaGlzIGZpbmRzIHRoZSBJTlRFR0VSIGNlbnRlciwgY29vcmRpbmF0ZXMgYXJlIHRydW5jYXRlZFxuICogQHBhcmFtIHJlY3QgVGhlIHJlY3RhbmdsZSB3ZSBhcmUgZmluZGluZyB0aGUgY2VudGVyIG9mXG4gKi9cbmNvbnN0IGNlbnRlciA9IChyZWN0OiBJUmVjdCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIFBvaW50Lm1ha2UoTWF0aC5mbG9vcihyZWN0LnggKyByZWN0LndpZHRoLzIpLCBNYXRoLmZsb29yKHJlY3QueSArIHJlY3QuaGVpZ2h0LzIpKVxufVxuXG4vLyBPUFRJTUlaRTogRG9uJ3QgY2FsbCBzaWRlcywganVzdCB1c2UgdGhlIHJhdyBudW1iZXJzIGFuZCBhZGRpdGlvblxuY29uc3QgaW50ZXJzZWN0cyA9IChhOiBJUmVjdCwgYjogSVJlY3QpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBhU2lkZXMgPSBzaWRlcyhhKVxuICAgIGNvbnN0IGJTaWRlcyA9IHNpZGVzKGIpXG4gICAgcmV0dXJuIGFTaWRlcy5sZWZ0IDw9IGJTaWRlcy5yaWdodCAmJiBhU2lkZXMucmlnaHQgPj0gYlNpZGVzLmxlZnQgJiYgXG4gICAgICAgIGFTaWRlcy50b3AgPD0gYlNpZGVzLmJvdHRvbSAmJiBhU2lkZXMuYm90dG9tID49IGJTaWRlcy50b3BcblxuICAgICAgICBcbn1cblxuLyoqXG4gKiBBbiBvYmplY3QgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmlwdWxhdGUgcmVjdGFuZ2xlc1xuICovXG5jb25zdCBSZWN0ID0ge1xuICAgIG1ha2UsXG4gICAgc2V0LFxuICAgIHNpZGVzLFxuICAgIGNvcm5lcnMsXG4gICAgY2VudGVyLFxuICAgIGludGVyc2VjdHNcbn1cblxuZXhwb3J0IHtJUmVjdCwgUmVjdH1cbiIsIi8vIEkgZ3Vlc3MgZXZlcnl0aGluZyB3b3VsZCBuZWVkIGl0J3Mgb3duIHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uLi4uIGdyb3NzXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGxvY2F0aW9ucyBvbiB0aGUgYm9hcmQsIGV2ZW50dWFsbHkgd2Ugd2lsbCBwcm9iYWJseSBtb3ZlIHRoaXMgaW50byBpdHMgb3duIEVDUyBzeXN0ZW1cbiAqL1xuY2xhc3MgVGlsZSB7XG4gICAgLyoqXG4gICAgICogQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqL1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgYmxvY2tNb3ZlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERvZXMgdGhpcyB0aWxlIGJsb2NrIGxpbmUgb2Ygc2lnaHRcbiAgICAgKi9cbiAgICBibG9ja1NpZ2h0OiBib29sZWFuO1xuXG4gICAgZXhwbG9yZWQ6IGJvb2xlYW47XG5cbiAgICBjb250YWluZWQ6IGJvb2xlYW47IC8vIG1vZGVscyBpZiB0aGlzIHRoaW5nIGhhcyBhIGZsb29yIGFuZCBjZWlsaW5nLCAob3IsIGluIHVuaXZlcnNlLCBzdHVmZiBzdXJyb3VuZGluZyBpdCBvbiB0aGUgei1heGlzKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tNb3ZlIENhbiB0aGUgcGxheWVyL21vbnN0ZXJzL21vYmlsZSBlbnRpdGllcyBtb3ZlIHRocm91Z2gvaW50byB0aGlzIHRpbGVcbiAgICAgKiBAcGFyYW0gYmxvY2tTaWdodCBvcHRpb25hbCwgd2lsbCBkZWZhdWx0IHRvIHdoYXRldmVyIGJsb2NrTW92ZSBpcyBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgYmxvY2tNb3ZlOiBib29sZWFuLCBibG9ja1NpZ2h0PzogYm9vbGVhbiApe1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy5ibG9ja01vdmUgPSBibG9ja01vdmVcbiAgICAgICAgdGhpcy5leHBsb3JlZCA9IHRydWVcbiAgICAgICAgaWYoYmxvY2tTaWdodCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTaWdodCA9IGJsb2NrTW92ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tTaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVkID0gdHJ1ZVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRpbGUgfSJdLCJzb3VyY2VSb290IjoiIn0=