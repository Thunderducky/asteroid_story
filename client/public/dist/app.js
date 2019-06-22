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
Object(_mapGeneration__WEBPACK_IMPORTED_MODULE_14__["mapGenerator1"])(tileGrid, rooms);
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
    const playerIsOutside = !tileGrid.getP(player).contained;
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
                if (!tile.contained && playerIsOutside) {
                    // go ahead and draw everything as lit
                    if (tile.blockMove) {
                        renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].light_wall;
                    }
                    else {
                        renderCell.backColor = _colors__WEBPACK_IMPORTED_MODULE_15__["default"].dark_outside;
                    }
                }
                else if (tile.explored) {
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
    window.tileGrid = tileGrid;
    window.player = player;
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
    FOV_RADIUS: 20
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
                    // place one door, at 
                    // if that distance is far at all
                    if (Math.abs(lastCenter.x - center.x) > 1) {
                        console.log("BUILD A DOOR");
                        // let's build a door
                        if (lastCenter.x > center.x) {
                            // this tunnel is moving to the right, grab the right side of the last
                            // room and combine it with the last center y, add one to that
                            const door = tileGrid.getXY(lastRoom.x + lastRoom.width - 1, lastCenter.y);
                            console.log(door);
                            door.blockSight = true;
                        }
                        else {
                            // this tunnel is moving to the left
                            const door = tileGrid.getXY(lastRoom.x, lastCenter.y);
                            door.blockSight = true;
                        }
                    }
                    _mapGenHelper__WEBPACK_IMPORTED_MODULE_2__["MapGenHelper"].createVTunnel(tileGrid, lastCenter.y, center.y, center.x);
                    // create the h door and the v door
                    // let's take x put it there
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hc3NldEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NhbnZhc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZm92LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ2FtZVNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2lkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2tleWJvYXJkTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL21hcEdlbmVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9tb3VzZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9wdWJTdWIvcHJpb3JpdHlTdWJzY3JpYmVyTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3B1YlN1Yi9wdWJTdWIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9yZW5kZXJDZWxsLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3JuZ0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3NoYXBlcy9lbGxpcHNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvc2hhcGVzL3JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ047QUFDaEI7QUFDeUI7QUFDekI7QUFDSTtBQUNRO0FBQ1E7QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNLO0FBQ1Q7QUFDMEI7QUFDakM7QUFDN0IsK0NBQStDO0FBRVY7QUFDckMsU0FBUztBQUdULDBCQUEwQjtBQUMxQixNQUFNLEVBQ0YsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixVQUFVLEVBQ2IsR0FBRyxzREFBUTtBQUdaLCtEQUErRDtBQUMvRCxzQkFBc0I7QUFDdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDN0QsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDckMsSUFBRyxDQUFDLE9BQU8sRUFBQztJQUNSLE1BQU0sSUFBSSxHQUFHLGtEQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUM7SUFDOUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxJQUFJO0lBQ2xILElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxDQUFDO0tBQ3BEO1NBQU07UUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNO0tBQ2hDO0NBRUo7S0FBTTtJQUNILGtEQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztDQUN2QjtBQUlELE1BQU0sTUFBTSxHQUFXLElBQUksOENBQU0sQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQztBQUN6RSxNQUFNLEdBQUcsR0FBVyxJQUFJLDhDQUFNLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUM7QUFDdEUsTUFBTSxRQUFRLEdBQWEsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDO0FBR3ZDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQjtBQUNwRSxNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxVQUFVO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLFdBQVc7QUFFM0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxnRUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNqRCxNQUFNLEVBQUUsR0FBRyxJQUFJLDBEQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBRTVDLE1BQU0sUUFBUSxHQUFHLElBQUksOERBQWMsRUFBRTtBQUVyQyxNQUFNLFdBQVcsR0FBRyxrREFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsRUFBQywrQ0FBK0M7QUFDL0csTUFBTSxVQUFVLEdBQUcsSUFBSSwwQ0FBSSxDQUFjLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUMvRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFlLEVBQUU7SUFDL0UsT0FBTyxzREFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxnREFBTSxDQUFDLEtBQUssRUFBQyxnREFBTSxDQUFDLFdBQVcsQ0FBQztBQUNuRSxDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBZSxJQUFJLDBDQUFJLENBQU8sU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUNsRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFRLEVBQUU7SUFDdkUsT0FBTyxJQUFJLDBDQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUYsSUFBSSxZQUFZLEdBQUcsSUFBSTtBQUN2Qiw2Q0FBNkM7QUFDN0MsTUFBTSxPQUFPLEdBQWtCLElBQUksMENBQUksQ0FBVSxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7QUFDdkYsa0RBQWtEO0FBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBWSxFQUFFO0lBQUcsT0FBTztRQUNwQyxPQUFPLEVBQUUsS0FBSztLQUNqQjtBQUFBLENBQUMsQ0FBQztBQUdILG9DQUFvQztBQUNwQyxNQUFNLEtBQUssR0FBWSxFQUFFO0FBQ3pCLCtCQUErQjtBQUMvQixxRUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7QUFDOUIsZ0NBQWdDO0FBRWhDLDhDQUE4QztBQUU5Qyx1QkFBdUI7QUFDdkI7SUFDSSxNQUFNLE9BQU8sR0FBRyxrREFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsbURBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2QyxNQUFNLFFBQVEsR0FBRyxrREFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxtREFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXRDLDBDQUEwQztJQUMxQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztJQUMxRCxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7Q0FDNUI7QUFFRCx3RkFBd0Y7QUFDeEYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxRQUFvQixFQUFFLE9BQXNCLEVBQUUsUUFBa0IsRUFBRSxVQUE2QixFQUFRLEVBQUU7SUFDM0gsc0ZBQXNGO0lBQ3RGLHVHQUF1RztJQUV2RywrRUFBK0U7SUFDL0UsdUZBQXVGO0lBQ3ZGLE1BQU0sT0FBTyxHQUFHLG1EQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxNQUFNLEdBQUcsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5QixNQUFNLGVBQWUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUztJQUN4RCxLQUFJLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBQztRQUNsRSxLQUFJLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBQztZQUNqRSw4Q0FBOEM7WUFDOUMsbURBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7WUFDMUMsbURBQW1EO1lBQ25ELG1EQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRXZFLGdDQUFnQztZQUNoQywwRUFBMEU7WUFDMUUsZ0dBQWdHO1lBQ2hHLHFMQUFxTDtZQUNyTCxxREFBcUQ7WUFDckQsTUFBTSxVQUFVLEdBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDNUMsSUFBRyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUN2QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRTtnQkFDekIsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksZUFBZSxFQUFDO29CQUNsQyxzQ0FBc0M7b0JBQ3RDLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQzt3QkFDZCxVQUFVLENBQUMsU0FBUyxHQUFHLGdEQUFNLENBQUMsVUFBVTtxQkFDM0M7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRyxnREFBTSxDQUFDLFlBQVk7cUJBQzdDO2lCQUNKO3FCQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDbEIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUM7d0JBQ2hCLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQzs0QkFDZCxVQUFVLENBQUMsU0FBUyxHQUFHLGdEQUFNLENBQUMsU0FBUzt5QkFDMUM7NkJBQU0sSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFDLEVBQUUsY0FBYzs0QkFDdEMsVUFBVSxDQUFDLFNBQVMsR0FBRyxnREFBTSxDQUFDLFNBQVM7eUJBQzFDOzZCQUFNOzRCQUNILFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0RBQU0sQ0FBQyxXQUFXO3lCQUM1QztxQkFDSjt5QkFBTTt3QkFDSCxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7NEJBQ2QsVUFBVSxDQUFDLFNBQVMsR0FBRyxnREFBTSxDQUFDLFVBQVU7eUJBQzNDOzZCQUFNLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBQyxFQUFFLGNBQWM7NEJBQ3RDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0RBQU0sQ0FBQyxVQUFVO3lCQUMzQzs2QkFDSTs0QkFDRCxVQUFVLENBQUMsU0FBUyxHQUFHLGdEQUFNLENBQUMsWUFBWTt5QkFDN0M7cUJBQ0o7aUJBQ0o7cUJBQU07b0JBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRyxnREFBTSxDQUFDLEtBQUs7aUJBRXRDO2FBQ0o7aUJBQU07Z0JBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFO2dCQUN6QixVQUFVLENBQUMsU0FBUyxHQUFHLGdEQUFNLENBQUMsS0FBSztnQkFDbkMsVUFBVSxDQUFDLFNBQVMsR0FBRyxnREFBTSxDQUFDLEtBQUs7YUFDdEM7U0FDSjtLQUNKO0lBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQWMsRUFBUSxFQUFFO1FBQ3RDLG1EQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLHlDQUF5QztRQUN6QyxJQUFHLFdBQVcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQzdFLFdBQVcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDaEYsTUFBTSxLQUFLLEdBQWdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25ELE1BQU0sT0FBTyxHQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlDLElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztnQkFDZixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLO2dCQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO2FBQ3JDO1NBQ0o7SUFFTCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsZ0JBQWdCO0FBQ2hCLE1BQU0sS0FBSyxHQUFVLEVBQUU7QUFDdkIsTUFBTSxhQUFhLEdBQUc7SUFDbEIsb0NBQW9DO0lBQ3BDLEtBQUs7Q0FDUjtBQUVELHFEQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBUSxFQUFFO0lBQ25DLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRiw4REFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFRLEVBQUU7SUFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO0lBQzVCLE9BQU87SUFDUCxNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7UUFDcEIsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUVoQix1QkFBdUI7UUFDdkIsZ0NBQWdDO1FBQ2hDLHNEQUFzRDtRQUN0RCxpQ0FBaUM7UUFFakMsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQy9HLHFEQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ2pILHFEQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxtREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNuRTtRQUNELElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztZQUMzRyxxREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNwRTtRQUNELElBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztZQUMvRyxxREFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsbURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDbkU7UUFDRCx5QkFBeUI7UUFDekIsSUFBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDbEUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcs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O0FBQUEsZ0ZBQWdGO0FBRWhGOztHQUVHO0FBQ0gsTUFBTSxJQUFJO0lBZ0JOOzs7O09BSUc7SUFDSCxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsU0FBa0IsRUFBRSxVQUFvQjtRQUN0RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUcsVUFBVSxLQUFLLFNBQVMsRUFBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtTQUMvQjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtJQUV6QixDQUFDO0NBQ0o7QUFFYyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0gZnJvbSAnLi9rZXlib2FyZE1vbml0b3InXG5pbXBvcnQgeyBNb3VzZU1vbml0b3IgfSBmcm9tICcuL21vdXNlTW9uaXRvcidcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gJy4vYXNzZXRIZWxwZXInXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4vY2FudmFzUmVuZGVyZXInXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgUFVCU1VCIH0gZnJvbSAnLi9wdWJTdWIvcHViU3ViJ1xuaW1wb3J0IHsgUmVjdCwgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuaW1wb3J0IHsgSURfTUFOQUdFUiB9IGZyb20gJy4vaWRNYW5hZ2VyJ1xuaW1wb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsIH0gZnJvbSAnLi9mb3YnXG5pbXBvcnQgeyBSQU5ET00gfSBmcm9tICcuL3JuZ0hlbHBlcidcbmltcG9ydCB7IG1hcEdlbmVyYXRvcjEsIG1hcEdlbmVyYXRvcjIgfSBmcm9tICcuL21hcEdlbmVyYXRpb24nXG5pbXBvcnQgQ09MT1JTIGZyb20gJy4vY29sb3JzJ1xuLy9pbXBvcnQgeyBNYXBHZW5IZWxwZXIgfSBmcm9tICcuL21hcEdlbkhlbHBlcidcblxuaW1wb3J0IFNFVFRJTkdTIGZyb20gJy4vZ2FtZVNldHRpbmdzJ1xuLy8gc2l6aW5nXG5cblxuLy8gVEhFU0UgQVJFIElOIFRJTEUgU0laRVNcbmNvbnN0IHtcbiAgICBUSUxFX1dJRFRILFxuICAgIFRJTEVfSEVJR0hULFxuICAgIFNDUkVFTl9XSURUSCxcbiAgICBTQ1JFRU5fSEVJR0hULFxuICAgIE1BUF9XSURUSCxcbiAgICBNQVBfSEVJR0hULFxuICAgIENBTUVSQV9XSURUSCxcbiAgICBDQU1FUkFfSEVJR0hULFxuICAgIEZPVl9SQURJVVNcbn0gPSBTRVRUSU5HU1xuXG5cbi8vIExldCdzIGxvb2sgZm9yIHF1ZXJ5IHBhcmFtcyB3aXRoIHdoaWNoIHRvIHNlZWQgdGhlIGdlbmVyYXRvclxuLy8gSU5JVElBTElaRSBPVVIgU0VFRFxuY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuY29uc3Qgc2VlZFN0ciA9IHVybFBhcmFtcy5nZXQoJ3NlZWQnKSBcbmlmKCFzZWVkU3RyKXtcbiAgICBjb25zdCBzZWVkID0gUkFORE9NLnNlZWQoc2VlZFN0ciB8fCB1bmRlZmluZWQpXG4gICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgaWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aDpuZXd1cmx9LCcnLG5ld3VybClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgIH1cbiAgICBcbn0gZWxzZSB7XG4gICAgUkFORE9NLnNlZWQoc2VlZFN0cilcbn1cblxuXG5cbmNvbnN0IHBsYXllcjogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjRkZGRkZGJylcbmNvbnN0IG5wYzogRW50aXR5ID0gbmV3IEVudGl0eShJRF9NQU5BR0VSLm5leHQoKSwgMyw0LCAnQCcsICcjQ0MwMDAwJylcbmNvbnN0IGVudGl0aWVzOiBFbnRpdHlbXSA9IFtwbGF5ZXIsbnBjXVxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSBTQ1JFRU5fV0lEVEggKiBUSUxFX1dJRFRIXG5jYW52YXMuaGVpZ2h0ID0gU0NSRUVOX0hFSUdIVCAqIFRJTEVfSEVJR0hUXG5cbmNvbnN0IGttID0gbmV3IEtleWJvYXJkTW9uaXRvcigpLmF0dGFjaChkb2N1bWVudClcbmNvbnN0IG1tID0gbmV3IE1vdXNlTW9uaXRvcigpLmF0dGFjaChjYW52YXMpXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKClcblxuY29uc3QgY2FtZXJhRnJhbWUgPSBSZWN0Lm1ha2UoMCwwLCBDQU1FUkFfV0lEVEgsIENBTUVSQV9IRUlHSFQpIC8vIENBTUVSQSBJUyBJTiBXT1JMRCBDRUxMUywgTk9UIEFCU09MVVRFIFVOSVRTXG5jb25zdCByZW5kZXJHcmlkID0gbmV3IEdyaWQ8SVJlbmRlckNlbGw+KGNhbWVyYUZyYW1lLndpZHRoLCBjYW1lcmFGcmFtZS5oZWlnaHQpXG5yZW5kZXJHcmlkLnNldEVhY2goKGNlbGw6IGFueSwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUmVuZGVyQ2VsbCA9PiB7XG4gICAgcmV0dXJuIFJlbmRlckNlbGwubWFrZSh4LHksJyAnLENPTE9SUy5ibGFjayxDT0xPUlMuZGFya19ncm91bmQpXG59KVxuXG5jb25zdCB0aWxlR3JpZDogR3JpZDxUaWxlPiA9IG5ldyBHcmlkPFRpbGU+KE1BUF9XSURUSCwgTUFQX0hFSUdIVClcbnRpbGVHcmlkLnNldEVhY2goKGNlbGw6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogVGlsZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUaWxlKHgseSwgdHJ1ZSlcbn0pXG5cbmxldCBmb3ZSZWNvbXB1dGUgPSB0cnVlXG4vLyBUT0RPOiBUcmFuc2xhdGUgdGhpcyBmcm9tIHdvcmxkIHRvIHNjcmVlbj9cbmNvbnN0IGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4gPSBuZXcgR3JpZDxGT1ZDZWxsPihjYW1lcmFGcmFtZS53aWR0aCwgY2FtZXJhRnJhbWUuaGVpZ2h0KVxuLy8gaWYgd2UgdHVybiBmb3Ygb24gaXQnbGwgY2hhbmdlIGl0IG92ZXIgdG8gZmFsc2VcbmZvdkdyaWQuc2V0RWFjaCgoKTogRk9WQ2VsbCA9PiB7IHJldHVybiB7XG4gICAgdmlzaWJsZTogZmFsc2Vcbn19KVxuXG5cbi8vIHRoaXMgd2lsbCBhbHNvIHBvcHVsYXRlIHRoZSByb29tc1xuY29uc3Qgcm9vbXM6IElSZWN0W10gPSBbXVxuLy9nZW5lcmF0ZSB0aGUgcmVsZXZhbnQgdGVycmFpblxubWFwR2VuZXJhdG9yMSh0aWxlR3JpZCwgcm9vbXMpXG4vL21hcEdlbmVyYXRvcjIodGlsZUdyaWQsIHJvb21zKVxuXG4vLyBjb25zdCBjYW1lcmFGcmFtZSA9IFJlY3QubWFrZSgwLCAwLCAxMCwgMTApXG5cbi8vIFNFVCBFbnRpdHkgTG9jYXRpb25zXG57XG4gICAgY29uc3QgcGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zWzBdKVxuICAgIFBvaW50LnNldChwbGF5ZXIsIHBjZW50ZXIueCwgcGNlbnRlci55KSBcbiAgICBjb25zdCBucGNlbnRlciA9IFJlY3QuY2VudGVyKHJvb21zW3Jvb21zLmxlbmd0aCAtIDFdKVxuICAgIFBvaW50LnNldChucGMsIG5wY2VudGVyLngsIG5wY2VudGVyLnkpXG5cbiAgICAvLyBjZW50ZXIgdGhlIGNhbWVyYSBhbmQgZm92IG9uIHRoZSBwbGF5ZXJcbiAgICBjYW1lcmFGcmFtZS54ID0gTWF0aC5mbG9vcihwbGF5ZXIueCAtIGNhbWVyYUZyYW1lLndpZHRoLzIpXG4gICAgY2FtZXJhRnJhbWUueSA9IE1hdGguZmxvb3IocGxheWVyLnkgLSBjYW1lcmFGcmFtZS5oZWlnaHQvMilcbiAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgZm92R3JpZC55ID0gY2FtZXJhRnJhbWUueVxufVxuXG4vLyBXZSBuZWVkIHRvIG1vdmUgdGhpcyBpbnRvIGl0J3Mgb3duIHNlY3Rpb24sIGFuZCBwb3RlbnRpYWxseSBhbGxvdyBzdWJzdGl0dXRpbmcgaXQgb3V0XG5jb25zdCByZW5kZXJUb0dyaWQgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIGZvdkdyaWQ6IEdyaWQ8Rk9WQ2VsbD4sIGVudGl0aWVzOiBFbnRpdHlbXSwgcmVuZGVyR3JpZDogR3JpZDxJUmVuZGVyQ2VsbD4pOiB2b2lkID0+IHtcbiAgICAvLyByZW5kZXJHcmlkIGlzIGluIFNDUkVFTiBjb29yZGluYXRlcywgYW5kIHdpbGwgaGF2ZSBpdCdzIFhZIGlnbm9yZWQgZm9yIG91ciBwdXJwb3Nlc1xuICAgIC8vIHRpbGVHcmlkLCBlbnRpdGllcyBhbmQgZm92R3JpZCBhcmUgaW4gV09STEQgY29vcmRpbmF0ZXMgYW5kIHdpbGwgaGF2ZSB0aGVpciBYWSBhbmQgeSBpZ25vcmVkIGZvciBub3dcbiAgICBcbiAgICAvLyBjYW1lcmEgYW5kIHJlbmRlckdyaWQgYm90aCBzdGFydCBhdCB0aGUgdG9wTGVmdCBpbiB0ZXJtcyBvZiBhbGlnbmluZyB0aGUgdHdvXG4gICAgLy8gSSBhbG1vc3QgZmVlbCBsaWtlIHdlIHNob3VsZCB0aWdodGVuIHRoZSBjb3VwbGluZywgYnV0IG9oIHdlbGwsIGxldCdzIGFjdHVhbGx5IGRvIGl0XG4gICAgY29uc3Qgc2NyZWVuUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHdvcmxkUCA9IFBvaW50Lm1ha2UoMCwwKVxuICAgIGNvbnN0IHBsYXllcklzT3V0c2lkZSA9ICF0aWxlR3JpZC5nZXRQKHBsYXllcikuY29udGFpbmVkXG4gICAgZm9yKGxldCByZWxDYW1lcmFZID0gMDsgcmVsQ2FtZXJhWSA8IGNhbWVyYUZyYW1lLmhlaWdodDsgcmVsQ2FtZXJhWSsrKXtcbiAgICAgICAgZm9yKGxldCByZWxDYW1lcmFYID0gMDsgcmVsQ2FtZXJhWCA8IGNhbWVyYUZyYW1lLndpZHRoOyByZWxDYW1lcmFYKyspe1xuICAgICAgICAgICAgLy8gdGhpcyBtYXBzIHRvIHRoZSByZW5kZXJHcmlkIGFuZCB0aGUgY2FtZXJhc1xuICAgICAgICAgICAgUG9pbnQuc2V0KHNjcmVlblAsIHJlbENhbWVyYVgsIHJlbENhbWVyYVkpXG4gICAgICAgICAgICAvLyB0aGlzIG1hcHMgdG8gdGhlIHRpbGVHcmlkLCBmb3ZHcmlkLCBhbmQgZW50aXRpZXNcbiAgICAgICAgICAgIFBvaW50LnNldCh3b3JsZFAsIHNjcmVlblAueCArIGNhbWVyYUZyYW1lLngsIHNjcmVlblAueSArIGNhbWVyYUZyYW1lLnkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIExldCdzIGRvIHNvbWUgYm91bmRzIGNoZWNraW5nXG4gICAgICAgICAgICAvLyB3ZSBrbm93IHRoZXNlIHBvaXRucyBhcmUgYWx3YXlzIGluIGNhbWVyYXMsIHNvIG5ldmVyIG5lZWQgdG8gY2hlY2sgdGhhdFxuICAgICAgICAgICAgLy8gd2UgYXJlIGdvaW5nIHRvIG9mZmxvYWQgdGhlIGNhc2Ugb2YgY2hlY2tpbmcgaWYgdGhlIHJlbmRlckdyaWQgY2FuIGZpdCB0aGUgY2FtZXJhU2l6ZSBmb3Igbm93XG4gICAgICAgICAgICAvLyBzbyBmb3Igbm93IGp1c3QgY2hlY2sgaWYgd2UgYXJlIGluc2lkZSBvZiB0aGUgdGlsZUdyaWQsIHdoaWNoIGN1cnJlbnRseSBzaG91bGQgYmUgdGhlIHNhbWUgZGltZW5zaW9ucyBhcyB0aGUgZm92R3JpZCwgdGhvdWdoIHRoYXQgaXMgYm91bmQgdG8gY2hhbmdlIGFzIHdlIHRyeSBhbmQgb3B0aW1pemUgdGhpbmdzXG4gICAgICAgICAgICAvLyBzb29vb29vLCBsZXQncyBjaGVjayBpZiB3ZSBhcmUgaW5zaWRlIHRoZSB0aWxlR3JpZFxuICAgICAgICAgICAgY29uc3QgcmVuZGVyQ2VsbCAgPSByZW5kZXJHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgIGlmKHRpbGVHcmlkLmluQm91bmRzWFkod29ybGRQLngsIHdvcmxkUC55KSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFAod29ybGRQKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdkNlbGwgPSBmb3ZHcmlkLmdldFAoc2NyZWVuUClcbiAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmNoYXJhY3RlciA9ICcnXG4gICAgICAgICAgICAgICAgaWYoIXRpbGUuY29udGFpbmVkICYmIHBsYXllcklzT3V0c2lkZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdvIGFoZWFkIGFuZCBkcmF3IGV2ZXJ5dGhpbmcgYXMgbGl0XG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tNb3ZlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmxpZ2h0X3dhbGxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfb3V0c2lkZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGlsZS5leHBsb3JlZCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGUuYmxvY2tTaWdodCl7IC8vIGl0J3MgYSBkb29yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuZGFya19kb29yXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuYmFja0NvbG9yID0gQ09MT1JTLmRhcmtfZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlLmJsb2NrTW92ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfd2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGUuYmxvY2tTaWdodCl7IC8vIGl0J3MgYSBkb29yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMubGlnaHRfZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJDZWxsLmJhY2tDb2xvciA9IENPTE9SUy5ibGFja1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5jaGFyYWN0ZXIgPSAnJ1xuICAgICAgICAgICAgICAgIHJlbmRlckNlbGwuZm9yZUNvbG9yID0gQ09MT1JTLmJsYWNrXG4gICAgICAgICAgICAgICAgcmVuZGVyQ2VsbC5iYWNrQ29sb3IgPSBDT0xPUlMuYmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eTogRW50aXR5KTogdm9pZCA9PiB7XG4gICAgICAgIFBvaW50LnNldChzY3JlZW5QLCBlbnRpdHkueCAtIGNhbWVyYUZyYW1lLngsIGVudGl0eS55IC0gY2FtZXJhRnJhbWUueSlcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBpbnNpZGUgb2YgdGhlIGNhbWVyYSBib3VuZHNcbiAgICAgICAgaWYoY2FtZXJhRnJhbWUueCA8PSBlbnRpdHkueCAmJiBlbnRpdHkueCA8PSBjYW1lcmFGcmFtZS54ICsgY2FtZXJhRnJhbWUud2lkdGggLSAxICYmXG4gICAgICAgICAgICBjYW1lcmFGcmFtZS55IDw9IGVudGl0eS55ICYmIGVudGl0eS55IDw9IGNhbWVyYUZyYW1lLnkgKyBjYW1lcmFGcmFtZS5oZWlnaHQgLSAxKXtcbiAgICAgICAgICAgIGNvbnN0IHJDZWxsOiBJUmVuZGVyQ2VsbCA9IHJlbmRlckdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbDogRk9WQ2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5QKVxuICAgICAgICAgICAgaWYoZm92Q2VsbC52aXNpYmxlKXtcbiAgICAgICAgICAgICAgICByQ2VsbC5mb3JlQ29sb3IgPSBlbnRpdHkuY29sb3JcbiAgICAgICAgICAgICAgICByQ2VsbC5jaGFyYWN0ZXIgPSBlbnRpdHkuY2hhcmFjdGVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cblxuLy8gY2xlYW4gdGhpcyB1cFxuY29uc3QgbW92ZXM6IGFueVtdID0gW11cbmNvbnN0IE1vdmVQcm9jZXNzb3IgPSB7XG4gICAgLy8gY3VycmVudGx5IGp1c3QgdGllZCB0byB0aGUgcGxheWVyXG4gICAgbW92ZXNcbn1cblxuUFVCU1VCLnN1YnNjcmliZSgnbW92ZScsIChtc2cpOiB2b2lkID0+e1xuICAgIE1vdmVQcm9jZXNzb3IubW92ZXMucHVzaChtc2cpXG59KSBcblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oKGltYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICByZW5kZXJlci5pbml0KGNhbnZhcywgaW1hZ2UpXG4gICAgLy8gTG9vcFxuICAgIGNvbnN0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHJlbmRlcmVyLmNsZWFyKClcblxuICAgICAgICAvLyBMb29rIGF0IHBsYXllciBpbnB1dFxuICAgICAgICAvLyBaIGxldHMgdXMgYmUgaW4gWk9PTSBNT0RFISEhIVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSB0aGlzIGludG8gYSBcIm1vdmVcIiB0eXBlIGFjdGlvblxuICAgICAgICAvLyB3ZSdsbCBqdXN0IGRvIHRoZSBtb3ZlIHNlY3Rpb25cbiAgICAgICAgXG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0xlZnQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgtMSwgMCl9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1JpZ2h0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlJywge2lkOiBwbGF5ZXIuaWQsIGRlbHRhOiBQb2ludC5tYWtlKDEsIDApfSlcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93VXAnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAtMSl9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCdBcnJvd0Rvd24nKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBQVUJTVUIucHVibGlzaCgnbW92ZScsIHtpZDogcGxheWVyLmlkLCBkZWx0YTogUG9pbnQubWFrZSgwLCAxKX0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gcXVpY2sgbnVtYmVyIGdlbmVyYXRvclxuICAgICAgICBpZigha20uZ2V0S2V5U3RhdGUoJ24nKS5pc0Rvd24gJiYgKGttLmdldEtleVN0YXRlKCduJykuaGFsZlN0ZXBzID4gMCkpe1xuICAgICAgICAgICAgY29uc3Qgc2VlZCA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKVxuICAgICAgICAgICAgY29uc3QgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9zZWVkPScgKyBzZWVkXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld3VybFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvY2VzcyBtb3Zlc1xuICAgICAgICAvLyBldmVudHVhbGx5IHdlJ2xsIGNvbXBvbmVudGl6ZSB0aGlzIGJldHRlclxuICAgICAgICBNb3ZlUHJvY2Vzc29yLm1vdmVzLmZvckVhY2goKG1zZzogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gbXNnLmRlbHRhXG4gICAgICAgICAgICBjb25zdCBpZCA9IG1zZy5pZFxuICAgICAgICAgICAgY29uc3QgbW92ZXIgPSBlbnRpdGllcy5maW5kKChlKTogYm9vbGVhbiA9PiBlLmlkID09IGlkKVxuICAgICAgICAgICAgaWYoIW1vdmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpbGVHcmlkLmluQm91bmRzWFkocGxheWVyLnggKyBtb3ZlLngsIHBsYXllci55ICsgbW92ZS55KSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFhZKHBsYXllci54ICsgbW92ZS54LCBwbGF5ZXIueSArIG1vdmUueSlcbiAgICAgICAgICAgICAgICBpZighdGlsZS5ibG9ja01vdmUpe1xuICAgICAgICAgICAgICAgICAgICBtb3Zlci5tb3ZlKG1vdmUueCwgbW92ZS55KVxuICAgICAgICAgICAgICAgICAgICBpZihtb3Zlci5pZCA9PT0gcGxheWVyLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdlJlY29tcHV0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFBVQlNVQi5wdWJsaXNoKCdtb3ZlZCcsIG1zZykgLy8gb25seSBwdWJsaXNoIG1vdmUgaWYgdGhlIGVudGl0eSBhY3R1YWxseSBjb21wbGV0ZWQgdGhlIG1vdmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgTW92ZVByb2Nlc3Nvci5tb3Zlcy5sZW5ndGggPSAwXG4gICAgICAgIGlmKGZvdlJlY29tcHV0ZSl7XG4gICAgICAgICAgICBjYWxjdWxhdGVGT1YoZm92R3JpZCwgdGlsZUdyaWQsIHBsYXllciwgRk9WX1JBRElVUylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRldGVybWluZSBjYW1lcmEgcG9zaXRpb25cbiAgICAgICAgY2FtZXJhRnJhbWUueCA9IE1hdGguZmxvb3IocGxheWVyLnggLSBjYW1lcmFGcmFtZS53aWR0aC8yKVxuICAgICAgICBjYW1lcmFGcmFtZS55ID0gTWF0aC5mbG9vcihwbGF5ZXIueSAtIGNhbWVyYUZyYW1lLmhlaWdodC8yKVxuICAgICAgICBmb3ZHcmlkLnggPSBjYW1lcmFGcmFtZS54XG4gICAgICAgIGZvdkdyaWQueSA9IGNhbWVyYUZyYW1lLnlcblxuICAgICAgICAvLyB3ZSBtaWdodCBtb3ZlIGFsbCBvZiB0aGlzIGludG8gc29tZSBvZmZzY3JlZW4gXG4gICAgICAgIHJlbmRlclRvR3JpZCh0aWxlR3JpZCwgZm92R3JpZCwgZW50aXRpZXMsIHJlbmRlckdyaWQpXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihyZW5kZXJHcmlkKVxuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDUwMClcbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgd2luZG93LnRpbGVHcmlkID0gdGlsZUdyaWQ7XG4gICAgd2luZG93LnBsYXllciA9IHBsYXllcjtcblxufSkuY2F0Y2goKGVycjogYW55KTogdm9pZCA9PiBjb25zb2xlLmxvZyhlcnIpKSAvL2VzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZSIsImZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZyk6IGFueXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk6IGFueSA9PiByZXNvbHZlKGltZykpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpOiBhbnkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSAke3VybH1gKSkpXG4gICAgICAgIGltZy5zcmMgPSB1cmxcbiAgICB9KVxufVxuXG5leHBvcnQge2xvYWRJbWFnZX0iLCJpbXBvcnQgeyBJUmVuZGVyQ2VsbCB9IGZyb20gJy4vcmVuZGVyQ2VsbCdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgZHJhd1NlY3Rpb24sIGNvZGUgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnXG5pbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCBTRVRUSU5HUyBmcm9tICcuL2dhbWVTZXR0aW5ncydcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9jb2xvcnMnXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYSByZW5kZXIgZ3JpZCBhbmQgY29udmVydGluZyBpdCB0byBpbWFnZXNcbiAqIG9uIHRoZSBjYW52YXNcbiAqL1xuXG5jb25zdCB7VElMRV9XSURUSCwgVElMRV9IRUlHSFR9ID0gU0VUVElOR1NcblxuY2xhc3MgQ2FudmFzUmVuZGVyZXIge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCB1bmRlZmluZWQ7XG4gICAgc3ByaXRlc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBzcHJpdGVzaGVldDogSFRNTEltYWdlRWxlbWVudCk6IENhbnZhc1JlbmRlcmVye1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICAvLyB3ZSBhcmUganVzdCBmb3JjaW5nIHRoaXMgZm9yIG5vdywgd2Ugd2lsbCBjaGVjayBpZiBpdCdzIG51bGxcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzIS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGlmKGN0eCA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgY29udGV4dCBmcm9tIGNhbnZhcycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8vIGV2ZW50dWFsbHkgd2UgbmVlZCB0byBwYXNzIGluIHRoZSBkaW1lbnNpb25zIHdlIGFyZSByZW5kZXJpbmcgdG8gYXMgd2VsbFxuICAgIC8vIGZvciBub3cgaXQncyBmaW5lXG4gICAgcmVuZGVyKHJlbmRlckdyaWQ6IEdyaWQ8SVJlbmRlckNlbGw+LCBiYWNrZ3JvdW5kOiBzdHJpbmcgPSBDT0xPUlMuYmxhY2spOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5jdHggPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZW5kZXIgYSBncmlkIHdpdGggYSBtaXNzaW5nIGNvbnRleHQnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFJlY3QoMCwwLCByZW5kZXJHcmlkLndpZHRoICogVElMRV9XSURUSCwgcmVuZGVyR3JpZC5oZWlnaHQgKiBUSUxFX0hFSUdIVClcbiAgICAgICAgLy8gbGV0J3MgdHJ5IHNldHRpbmcgYSBiYWNrZ3JvdW5kIGNvbG9yIGFzIHdlbGxcbiAgICAgICAgLy8gV2UgaGF2ZSBjaGVja2VkIHRvIGVuc3VyZSB0aGF0IGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3QgZGVzdFJlY3QgPSBSZWN0Lm1ha2UoMCwwLDAsMClcbiAgICAgICAgcmVuZGVyR3JpZC5mb3JFYWNoKChcbiAgICAgICAgICAgIGNlbGw6IElSZW5kZXJDZWxsLCBcbiAgICAgICAgICAgIGluZGV4OiBudW1iZXIsIFxuICAgICAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIFJlY3Quc2V0KGRlc3RSZWN0LCB4ICogVElMRV9XSURUSCwgeSAqIFRJTEVfSEVJR0hULCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbiAgICAgICAgICAgIC8vIHRvZG8sIGFsbG93IHVzIHRvIG1hcmsgcmVuZGVyIGNlbGxzIGFzICdlbXB0eScgcmF0aGVyIHRoYW4gc3BhY2VzLCB0aGlzIG1pZ2h0IGhlbHAgc3BlZWQgdXAgcmVuZGVyIHRpbWVcbiAgICAgICAgICAgIGlmKGNlbGwuY2hhcmFjdGVyLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgaWYoY2VsbC5iYWNrQ29sb3IgIT09IGJhY2tncm91bmQpe1xuICAgICAgICAgICAgICAgICAgICAvLyBJIGFjdHVhbGx5IGRvbid0IGtub3cgaWYgdGhpcyBoZWxwcywgYnV0IGl0IHNlZW1zIGxpa2Ugc2V0dGluZyB0aGUgZmlsbFN0eWxlIGNvdWxkIGludm9sdmUgbW9yZSBjb21wbGljYXRpb25zIHRoYW4ganVzdCBjaGVja2luZyBpZiBpdCdzIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmKGN0eC5maWxsU3R5bGUgIT09IGNlbGwuYmFja0NvbG9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZWxsLmJhY2tDb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LCBkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjUmVjdCA9IENPREVfVE9fUkVDVF9IQVNIW2NvZGUoY2VsbC5jaGFyYWN0ZXIpXVxuICAgICAgICAgICAgICAgIGRyYXdTZWN0aW9uKGN0eCwgdGhpcy5zcHJpdGVzaGVldCwgc3JjUmVjdCwgZGVzdFJlY3QsIGNlbGwuZm9yZUNvbG9yLCBjZWxsLmJhY2tDb2xvciApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmNhbnZhcyA9PSBudWxsIHx8IHRoaXMuY3R4ID09IG51bGwpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVuZGVyIGEgZ3JpZCB3aXRoIGEgbWlzc2luZyBjb250ZXh0JylcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGNoZWNrZWQgdG8gZW5zdXJlIHRoYXQgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCB7IENhbnZhc1JlbmRlcmVyIH0iLCJjb25zdCBDT0xPUlMgPSB7XG4gICAgJ2Rhcmtfb3V0c2lkZSc6ICcjMTExJyxcbiAgICAnbGlnaHRfb3V0c2lkZSc6ICcjNDQ0NDQ0JyxcbiAgICAnYmxhY2snOiAnIzAwMDAwMCcsXG4gICAgJ2Rhcmtfd2FsbCc6ICcjMDAwMDY0JyxcbiAgICAnZGFya19ncm91bmQnOiAnIzMyMzI5NicsXG4gICAgJ2xpZ2h0X3dhbGwnOiAnIzgyNkUzMicsXG4gICAgJ2xpZ2h0X2dyb3VuZCc6ICcjQzhCNDMyJyxcbiAgICAncGxheWVyJzogJyNGRkZGRkYnLFxuICAgICdkYXJrX2Rvb3InOicjNTUwMDAwJyxcbiAgICAnbGlnaHRfZG9vcic6ICcjRkYyMjIyJyxcbiAgICAnbnBjJzogJyNDQzAwMDAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IENPTE9SUyIsIi8qKlxuICogQSBnZW5lcmljIG9iamVjdCB0byByZXByZXNlbnQgZXZlcnl0aGluZyB0aGF0IGlzIG5vdCB0aGUgbWFwIGl0c2VsZlxuICogRm9yIHRoYXQsIHNlZSB0aGUgVGlsZSBjbGFzc1xuICovXG5jbGFzcyBFbnRpdHkge1xuICAgIGlkOiBudW1iZXI7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHg6IG51bWJlcix5OiBudW1iZXIsIGNoYXJhY3Rlcjogc3RyaW5nLCBjb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGFuIGVudGl0eSwgY3VycmVudGx5IGRvZXNuJ3QgY2hlY2sgaWYgaXQgY2FuIG9yIG5vdCwganVzdCBkb2VzXG4gICAgICogQHBhcmFtIGR4IEFtb3VudCB0byBtb3ZlIGluIHRoZSB4IGRpcmVjdGlvbiAobGVmdCBpcyBuZWdhdGl2ZSwgcmlnaHQgaXMgcG9zaXRpdmUpXG4gICAgICogQHBhcmFtIGR5IEFtb3VudCB0byBtb3ZlIGluIHRoZSB5IGRpcmVjdGlvbiAodXAgaXMgbmVnYXRpdmUsIGRvd24gaXMgcG9zaXRpdmUpXG4gICAgICovXG4gICAgbW92ZShkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZHtcbiAgICAgICAgdGhpcy54ICs9IGR4XG4gICAgICAgIHRoaXMueSArPSBkeVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRW50aXR5IH0iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSdcbmltcG9ydCB7IElQb2ludCwgUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuaW50ZXJmYWNlIEZPVkNlbGwgIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFNoYWRvd1JhbmdlIHtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5jb25zdCBpc0JldHdlZW5JbmNsdXNpdmUgPSAoYTogbnVtYmVyLGI6IG51bWJlcix0OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBpZihiIDwgYSl7XG4gICAgICAgIHJldHVybiBiIDw9IHQgJiYgdCA8PSBhXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPD0gdCAmJiB0IDw9IGJcbiAgICB9XG59XG4vKipcbiAqIFxuICogQHBhcmFtIGZvdkdyaWQgXG4gKiBAcGFyYW0gdGlsZUdyaWQgXG4gKiBAcGFyYW0gc3RhcnRQb2ludCBzdGFydCBwb2ludCBpcyBpbiB3b3JsZCBjb29yZGluYXRlc1xuICogQHBhcmFtIG1heERpc3RhbmNlIFxuICogQHBhcmFtIGhvcml6b250YWxOb3RWZXJ0aWNhbCBcbiAqIEBwYXJhbSB4RGlyZWN0aW9uIFxuICogQHBhcmFtIHlEaXJlY3Rpb24gXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZU9jdGFudCA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyLFxuICAgIGhvcml6b250YWxOb3RWZXJ0aWNhbDogYm9vbGVhbiwgeERpcmVjdGlvbjogbnVtYmVyLCB5RGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBcbiAgICAvLyBPdXIgc2hhZG93cyB3ZSB3aWxsIGNhc3RcbiAgICBjb25zdCBzaGFkb3dSYW5nZXM6IFNoYWRvd1JhbmdlW10gPSBbXVxuICAgIC8vIG91ciBzdGFydGluZyBsb2NhdGlvbiBpcyBhbHdheXMgdmlzaWJsZVxuICAgIGNvbnN0IHNjcmVlblN0YXJ0UG9pbnQ9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICBzY3JlZW5TdGFydFBvaW50LnggLT0gZm92R3JpZC54XG4gICAgc2NyZWVuU3RhcnRQb2ludC55IC09IGZvdkdyaWQueVxuICAgIGZvdkdyaWQuZ2V0UChzY3JlZW5TdGFydFBvaW50KS52aXNpYmxlID0gdHJ1ZVxuICAgIGZvcihsZXQgcm93ID0gMTsgcm93IDwgbWF4RGlzdGFuY2U7IHJvdysrKXtcbiAgICAgICAgY29uc3Qgcm93U2l6ZSA9IHJvdyArIDFcbiAgICAgICAgZm9yKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCByb3dTaXplOyBjb2x1bW4rKyl7XG4gICAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIG9jdGFudCwgdGhlIHRyYXZlbGxlciB3aWxsIG1vdmUgZGlmZmVyZW50bHlcbiAgICAgICAgICAgIGNvbnN0IHRyYXZlbGxlciA9IFBvaW50LmNvcHkoc3RhcnRQb2ludClcbiAgICAgICAgICAgIHRyYXZlbGxlci54ICs9IGhvcml6b250YWxOb3RWZXJ0aWNhbCA/IHhEaXJlY3Rpb24gKiBjb2x1bW4gOiB4RGlyZWN0aW9uICogcm93XG4gICAgICAgICAgICB0cmF2ZWxsZXIueSArPSBob3Jpem9udGFsTm90VmVydGljYWwgPyB5RGlyZWN0aW9uICogcm93IDogeURpcmVjdGlvbiAqIGNvbHVtblxuXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgb3V0IG9mIGJvdW5kcywgc2tpcFxuICAgICAgICAgICAgaWYoIXRpbGVHcmlkLmluQm91bmRzWFkodHJhdmVsbGVyLngsIHRyYXZlbGxlci55KSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmFjdG9yIGluIG91ciB0aWxlIGNoZWNrIHdoZW4gd2UgZ2V0IHRoZSB3b3JsZCBjZWxsXG4gICAgICAgICAgICBsZXQgc2NyZWVuUG9pbnQgPSBQb2ludC5jb3B5KHRyYXZlbGxlcilcbiAgICAgICAgICAgIHNjcmVlblBvaW50LnggLT0gZm92R3JpZC54XG4gICAgICAgICAgICBzY3JlZW5Qb2ludC55IC09IGZvdkdyaWQueVxuICAgICAgICAgICAgY29uc3QgdGlsZSA9IHRpbGVHcmlkLmdldFAodHJhdmVsbGVyKVxuICAgICAgICAgICAgY29uc3QgZm92Q2VsbCA9IGZvdkdyaWQuZ2V0UChzY3JlZW5Qb2ludClcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBjb2x1bW4vcm93U2l6ZVxuICAgICAgICAgICAgY29uc3QgZW5kID0gKGNvbHVtbiArIDEpL3Jvd1NpemVcbiAgICAgICAgICAgIGNvbnN0IG1pZGRsZSA9IChzdGFydCArIGVuZCkgLyAyXG5cbiAgICAgICAgICAgIC8vIHRlc3QgZm9yIHZpc2libGl0eVxuICAgICAgICAgICAgbGV0IHZpc2liaWxpdHkgPSB0cnVlXG5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBlZGdlcyBhcmUgY2xlYXIgb3Igbm90XG4gICAgICAgICAgICBsZXQgc3RhcnRDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBtaWRkbGVDbGVhciA9IHRydWVcbiAgICAgICAgICAgIGxldCBlbmRDbGVhciA9IHRydWVcblxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBidWlsdCBzb21lIHNoYWRvdyByYW5nZXNcbiAgICAgICAgICAgIGlmKHNoYWRvd1Jhbmdlcy5sZW5ndGggIT09IDApe1xuICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiBhbnkgc2hhZG93cyBjcm9zcyBvdXIgdGhyZWUgcG9pbnRzXG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLmZvckVhY2goIChzcjogU2hhZG93UmFuZ2UpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDbGVhciA9IHN0YXJ0Q2xlYXIgJiYgIWlzQmV0d2VlbkluY2x1c2l2ZShzci5zdGFydCwgc3IuZW5kLCBzdGFydClcbiAgICAgICAgICAgICAgICAgICAgbWlkZGxlQ2xlYXIgPSBtaWRkbGVDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIG1pZGRsZSlcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2xlYXIgPSBlbmRDbGVhciAmJiAhaXNCZXR3ZWVuSW5jbHVzaXZlKHNyLnN0YXJ0LCBzci5lbmQsIGVuZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHZpc2liaWxpdHkgYmFzZWQgb2ZmIG9mIG91ciBzYW1wbGluZ1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSBtaWRkbGVDbGVhciAmJiAoc3RhcnRDbGVhciB8fCBlbmRDbGVhcilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgd2UgYmxvY2sgc2lnaHQsIGNhbGN1bGF0ZSBvdXIgc2hhZG93IGVuZHNcbiAgICAgICAgICAgIGlmKHRpbGUuYmxvY2tTaWdodCl7XG4gICAgICAgICAgICAgICAgc2hhZG93UmFuZ2VzLnB1c2goe3N0YXJ0LCBlbmR9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3ZDZWxsLnZpc2libGUgPSB2aXNpYmlsaXR5XG4gICAgICAgICAgICBpZihmb3ZDZWxsLnZpc2libGUpe1xuICAgICAgICAgICAgICAgIHRpbGUuZXhwbG9yZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNhbGN1bGF0ZUZPViA9IChmb3ZHcmlkOiBHcmlkPEZPVkNlbGw+LCB0aWxlR3JpZDogR3JpZDxUaWxlPiwgc3RhcnRQb2ludDogSVBvaW50LCBtYXhEaXN0YW5jZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgLy8gYmUgZGVmYXVsdCB3ZSBhcmUgZ29pbmcgdG8gc2hhZG93Q2FzdFxuICAgIC8vIGJ5IGRlZmF1bHQgZXZlcnl0aGluZyBpcyBub3QgdmlzaWJsZVxuICAgIGZvdkdyaWQuZm9yRWFjaCgoY2VsbCk6IHZvaWQgPT4geyBjZWxsLnZpc2libGUgPSBmYWxzZSB9KVxuICAgIC8vIE5OV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIHRydWUsIC0xLCAtMSlcbiAgICAvLyBXTldcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCBmYWxzZSwgLTEsIC0xKVxuICAgIC8vIFdTV1xuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAtMSwgMSlcbiAgICAvLyBTU1dcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAtMSwgMSlcbiAgICAvLyBTU0VcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAxKVxuICAgIC8vIEVTRVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAxKVxuICAgIC8vIEVORVxuICAgIGNhbGN1bGF0ZU9jdGFudChmb3ZHcmlkLCB0aWxlR3JpZCwgc3RhcnRQb2ludCwgbWF4RGlzdGFuY2UsIGZhbHNlLCAxLCAtMSlcbiAgICAvLyBOTkVcbiAgICBjYWxjdWxhdGVPY3RhbnQoZm92R3JpZCwgdGlsZUdyaWQsIHN0YXJ0UG9pbnQsIG1heERpc3RhbmNlLCB0cnVlLCAxLCAtMSlcbn1cblxuZXhwb3J0IHsgY2FsY3VsYXRlRk9WLCBGT1ZDZWxsfSIsImNvbnN0IFNFVFRJTkdTID0ge1xuICAgIFRJTEVfV0lEVEg6IDEwLCAgICAgLy8gcGl4ZWxzXG4gICAgVElMRV9IRUlHSFQ6IDEwLCAgICAvLyBwaXhlbHNcbiAgICBNQVBfV0lEVEg6IDgwLCAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZSBpcyBpbiB0aWxlc1xuICAgIE1BUF9IRUlHSFQ6IDQ1LFxuICAgIENBTUVSQV9XSURUSDogMTAwLFxuICAgIENBTUVSQV9IRUlHSFQ6IDcwLFxuICAgIFNDUkVFTl9XSURUSCA6MTAwLFxuICAgIFNDUkVFTl9IRUlHSFQgOiA3MCxcbiAgICBGT1ZfUkFESVVTOiAyMFxufVxuXG5leHBvcnQgZGVmYXVsdCBTRVRUSU5HUyIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuaW1wb3J0IHsgSVJlY3QgfSBmcm9tICcuL3NoYXBlcy9yZWN0J1xuXG5pbnRlcmZhY2UgU2V0RWFjaEZuPFQ+IHtcbiAgICAoY2VsbDogVCwgaW5kZXg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBhbnk7XG59XG5cbmludGVyZmFjZSBGb3JFYWNoRm48VD4ge1xuICAgIChjZWxsOiBULCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XG59XG5cbi8vIFRPRE86IGdpdmUgZ3JpZHMgdGhlaXIgb3duIHggYW5kIHlzLCB0aGF0IHdheSB0aGV5IGNhbiBpbXBsZW1lbnQgYWxsIHRoZSBwb2ludCBhbmQgcmVjdCBzdHVmZlxuLyoqXG4gKiBHcmlkIHRvIHJlcHJlc2VudCAyZCBjb2xsZWN0aW9ucywgcGxlYXNlIGRvbid0IHJlc2l6ZSBpdCBhZnRlciBjcmVhdGluZyBpdFxuICovXG5jbGFzcyBHcmlkPFQ+IGltcGxlbWVudHMgSVJlY3Qge1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb2Zmc2V0IGFuZCBzbyB3ZSBjYW4gdHJlYXQgaXQgbW9yZSBsaWtlIGEgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgeTogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgY2VsbHM6IFRbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCl7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmltYXJpbHkgdXNlZCBmb3IgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGdyaWQsIG92ZXJ3cml0ZXMgcHJldmlvdXMgZW50cmllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBlbnRyeSwgZG9uJ3QgdXNlIHRoaXMgdW5sZXNzIGVudHJpZXMgYXJlIGluZGVwZW5kZW50IGZyb20gZWFjaCBvdGhlclxuICAgICAqIEBwYXJhbSBmbiB0aGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjZWxsIGl0c2VsZiBhcyB0aGUgZmlyc3QgcHJvcGVydHkgYW5kIFxuICAgICAqL1xuICAgIHNldEVhY2goZm46IFNldEVhY2hGbjxUPik6IEdyaWQ8VD57XG4gICAgICAgIGxldCB4ID0gMCwgeSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgeCA9IGkgJSB0aGlzLndpZHRoXG4gICAgICAgICAgICB5ID0gKGkgLSB4KS90aGlzLndpZHRoXG4gICAgICAgICAgICB0aGlzLmNlbGxzW2ldID0gZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBzb21ldGhpbmcgZm9yIGVhY2ggbWVtYmVyIG9mIGEgY2VsbCwgZ29pbmcgcm93IGJ5IHJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZm4gR2V0IHBhc3NlZCB0aGUgY2VsbCwgaW5kZXgsIHggYW5kIHlcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuOiBGb3JFYWNoRm48VD4pOiB2b2lke1xuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5Kyspe1xuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKyl7XG4gICAgICAgICAgICAgICAgZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmlkIHN0YXJ0cyBhdCB0aGUgdG9wIGxlZnQsIHggaW5jcmVhc2UgdG8gdGhlIHJpZ2h0IGFuZCB5IGluY3JlYXNlcyBkb3duLCBzaWxlbnRseSBmYWlscyBpZiBvdXQgb2YgYm91bmRzIGFuZCBqdXN0IHJldHVybnMgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHggeCBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICogQHBhcmFtIHkgeSBjb29yZGluYXRlIG9mIHRoZSBncmlkXG4gICAgICovXG4gICAgZ2V0WFkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUICB7XG4gICAgICAgIGlmKCF0aGlzLmluQm91bmRzWFkoeCx5KSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdW5kYXJ5IGFjY2VzcyBpc3N1ZScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbeCArIHkgKiB0aGlzLndpZHRoXVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGdldFhZLiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSBwb2ludCBjb250YWlucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2VsbCB5b3Ugd2FudCB0byBnZXRcbiAgICAgKi9cbiAgICBnZXRQKHBvaW50OiBJUG9pbnQpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WFkocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG5cbiAgICBpbkJvdW5kc1hZKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbntcbiAgICAgICAgaWYoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNlbGwgYmFzZWQgb2ZmIG9mIGFuIGluZGV4LCB1c3VhbGx5IGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGZvckVhY2ggbG9vcCBvZiBhIHNpbWlsYXJseSBzaXplZCBncmlkXG4gICAgICogTk9URSBiZSBjYXJlZnVsIHRoYXQgdGhlIG90aGVyIGdyaWQgaGFzIHRoZSBzYW1lIGRpbWVuc2lvbiB1bmxlc3MgeW91IHJlYWxseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBjZWxscywgbW9zdGx5IHRvIGJlIHVzZWQgd2l0aCBncmlkcyB0aGF0IGFyZSB3b3JraW5nIGFsb25nc2lkZSBhIGRpZmZlcmVudCBmb3JFYWNoIGxvb3BcbiAgICAgKi9cbiAgICBnZXRJKGluZGV4OiBudW1iZXIpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHNbaW5kZXhdXG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkIH0iLCJjbGFzcyBJRE1hbmFnZXIge1xuICAgIHByaXZhdGUgbGFzdElkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sYXN0SWQgPSAwXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCBpZFxuICAgICAqL1xuICAgIG5leHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdElkKytcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSURfTUFOQUdFUlxuICovXG5jb25zdCBJRF9NQU5BR0VSID0gbmV3IElETWFuYWdlcigpXG5leHBvcnQge0lEX01BTkFHRVIsIElETWFuYWdlcn0iLCJpbnRlcmZhY2UgS2V5U3RhdGUgeyBcbiAgICBrZXk6IHN0cmluZztcbiAgICBpc0Rvd246IGJvb2xlYW47XG4gICAgaGFsZlN0ZXBzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBIYXNoPFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG5jb25zdCBtYWtlS2V5U3RhdGUgPSAoa2V5OiBzdHJpbmcsIGlzRG93bjogYm9vbGVhbiA9IGZhbHNlLCBoYWxmU3RlcHM6IG51bWJlciA9IDApOiBLZXlTdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5LFxuICAgICAgICBpc0Rvd24sXG4gICAgICAgIGhhbGZTdGVwc1xuICAgIH1cbn1cblxuY2xhc3MgS2V5Ym9hcmRNb25pdG9yIHtcbiAgICBrZXlIYXNoOiBIYXNoPEtleVN0YXRlPjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmtleUhhc2ggPSB7fVxuICAgIH1cbiAgICAvLyBBdHRhY2ggdG8gdGhlIERPTSwgdXN1YWxseSB0aGUgZG9jdW1lbnQgYXMgYSB3aG9sZSwgYnV0IHlvdSBjYW4gbWFrZSBpdCBtb3JlIHNwZWNpZmljIGlmIHlvdSB3YW50XG4gICAgYXR0YWNoKGVsZW1lbnQ6IGFueSk6IEtleWJvYXJkTW9uaXRvciB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKCFrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2tleX0gPSBldmVudFxuICAgICAgICAgICAgaWYoIXRoaXMua2V5SGFzaFtrZXldKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IHRoaXMua2V5SGFzaFtrZXldXG4gICAgICAgICAgICBpZihrZXlTdGF0ZS5pc0Rvd24pe1xuICAgICAgICAgICAgICAgIGtleVN0YXRlLmhhbGZTdGVwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdGF0ZS5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBnZXRLZXlTdGF0ZShrZXk6IHN0cmluZyk6IEtleVN0YXRle1xuICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmtleUhhc2hba2V5XVxuICAgIH1cbiAgICByZXNldFN0ZXBzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5rZXlIYXNoKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5c1tpXV0uaGFsZlN0ZXBzID0gMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IEtleWJvYXJkTW9uaXRvciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vc2hhcGVzL3JlY3QnXG5pbXBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IGZyb20gJy4vc2hhcGVzL2VsbGlwc2UnXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHN0YXRpYyBtZXRob2RzIGZvciBoZWxwaW5nIHRvIG1hbmlwdWxhdGUgbWFwc1xuICovXG5jbGFzcyBNYXBHZW5IZWxwZXIge1xuICAgIC8vIFRPRE86IE1heWJlIGNvbWUgdXAgd2l0aCBhIGJldHRlciBuYW1lXG4gICAgLyoqXG4gICAgICogUGxhY2UgYSByb29tIGluc2lkZSBhIGdyb3VwIG9mIHRpbGVzXG4gICAgICogQHBhcmFtIHRpbGVHcmlkIHRoZSBncmlkIG9mIHRpbGVzIHRvIGFmZmVjdFxuICAgICAqIEBwYXJhbSByb29tIHRoZSByb29tIHNlY3Rpb24gdGhhdCB3ZSB3aWxsIG9wZW4gdXBcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUm9vbSh0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbTogSVJlY3QpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogQm91bmRzIGNoZWNrIG9yIHNvbWV0aGluZywgcmlnaHQgbm93IHRlcnJpYmxlIHRoaW5ncyBjYW4gaGFwcGVuXG4gICAgICAgIGNvbnN0IHsgbGVmdCxyaWdodCx0b3AsYm90dG9tfSA9IFJlY3Quc2lkZXMocm9vbSlcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdG9wIG9uZSBlYXJseSBiZWNhdXNlIG9mIGhvdyB3ZSB3b3JrIHdpdGggYSBncmlkXG4gICAgICAgIC8vIHdlIHdpbGwgYWxzbyBpbmNsdWRlIGEgbWFyZ2luIG9mIG9uZSBvbiBhbGwgc2lkZXhcbiAgICAgICAgZm9yKGxldCB5ID0gdG9wICsgMTsgeSA8IGJvdHRvbSAtIDE7IHkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IHggPSBsZWZ0ICsgMTsgeCA8IHJpZ2h0IC0gMTsgeCsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGlsZUdyaWQuZ2V0WFkoeCwgeSlcbiAgICAgICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja1NpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVIVHVubmVsKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCB4MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gc3dhcCB0aGVtIGFzIG5lY2Vzc2FyeVxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih4MSwgeDIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHgxLCB4MilcbiAgICAgICAgZm9yKGxldCB4ID0gbWluOyB4IDw9IG1heDsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVZUdW5uZWwodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHkxOiBudW1iZXIsIHkyOiBudW1iZXIsIHg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih5MSwgeTIpXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHkxLCB5MilcbiAgICAgICAgZm9yKGxldCB5ID0gbWluOyB5IDw9IG1heDsgeSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aWxlR3JpZC5nZXRYWSh4LHkpXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aWxlLmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNhcnZlRWxsaXBzZSh0aWxlR3JpZDogR3JpZDxUaWxlPiwgZWxsaXBzZTogSUVsbGlwc2UpOiB2b2lkIHtcbiAgICAgICAgdGlsZUdyaWQuZm9yRWFjaCgodGlsZSwgaW5kZXgsIHgsIHkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmKEVsbGlwc2UuY29udGFpbnNYWShlbGxpcHNlLCB4LHkpKXsgXG4gICAgICAgICAgICAgICAgdGlsZS5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCB7IE1hcEdlbkhlbHBlciB9IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnXG5cbmltcG9ydCB7IElSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcbmltcG9ydCB7IFJBTkRPTSB9IGZyb20gJy4vcm5nSGVscGVyJ1xuaW1wb3J0IHsgTWFwR2VuSGVscGVyIH0gZnJvbSAnLi9tYXBHZW5IZWxwZXInXG5pbXBvcnQgeyBJRWxsaXBzZSwgRWxsaXBzZSB9IGZyb20gJy4vc2hhcGVzL2VsbGlwc2UnXG5cblxuY29uc3QgUk9PTV9NQVhfU0laRSA9IDEwXG5jb25zdCBST09NX01JTl9TSVpFID0gMTBcbmNvbnN0IE1BWF9ST09NUyA9IDMwXG5jb25zdCBNQVhfRUxMSVBTRV9SQURJVVMgPSBST09NX01BWF9TSVpFIC8gMlxuY29uc3QgTUlOX0VMTElQU0VfUkFESVVTID0gUk9PTV9NQVhfU0laRSAvIDRcblxuY29uc3QgQ0FWRV9FTExJUFNFUyA9IDBcblxuY29uc3QgcmFuZGludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKFJBTkRPTS5uZXh0KCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmNvbnN0IHJhbmRvbUVsbGlwc2UgPSAobWluWDogbnVtYmVyLCBtYXhYOiBudW1iZXIsIG1pblk6IG51bWJlciwgbWF4WTogbnVtYmVyKTogSUVsbGlwc2UgPT4ge1xuICAgIHJldHVybiBFbGxpcHNlLm1ha2UoXG4gICAgICAgIHJhbmRpbnQobWluWCwgbWF4WCksXG4gICAgICAgIHJhbmRpbnQobWluWSwgbWF4WSksXG4gICAgICAgIHJhbmRpbnQoTUlOX0VMTElQU0VfUkFESVVTLCBNQVhfRUxMSVBTRV9SQURJVVMpLFxuICAgICAgICByYW5kaW50KE1JTl9FTExJUFNFX1JBRElVUywgTUFYX0VMTElQU0VfUkFESVVTKSxcbiAgICAgICAgUkFORE9NLm5leHQoKSAqIE1hdGguUEkgKiAyIFxuICAgIClcbn1cblxuLyoqXG4gKiBQbGFjZSBhIGJ1bmNoIG9mIHJvb21zIG9wcG9ydHVuaXN0aWNhbGx5LCBhbmQgdGhlbiBjYXJ2ZSBvdXQgc29tZSBlbGxpcHNlcyByYW5kb21seVxuICogQHBhcmFtIHRpbGVHcmlkIHRpbGVHcmlkIHRvIGJlIHBvcHVsYXRlZFxuICogQHBhcmFtIHJvb21zIExpc3Qgb2Ygcm9vbXMgdG8gYmUgcG9wdWxhdGVkXG4gKi9cbmNvbnN0IG1hcEdlbmVyYXRvcjEgPSAodGlsZUdyaWQ6IEdyaWQ8VGlsZT4sIHJvb21zOiBJUmVjdFtdKTogdm9pZCA9PiB7XG4gICAgZm9yKGxldCByID0gMDsgciA8IE1BWF9ST09NUzsgcisrKXtcbiAgICBcbiAgICAgICAgY29uc3QgdyA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICAgICAgY29uc3QgaCA9IHJhbmRpbnQoUk9PTV9NSU5fU0laRSwgUk9PTV9NQVhfU0laRSlcbiAgICAgICAgY29uc3QgeCA9IHJhbmRpbnQoMCwgdGlsZUdyaWQud2lkdGggLSB3IC0gMSlcbiAgICAgICAgY29uc3QgeSA9IHJhbmRpbnQoMCwgdGlsZUdyaWQuaGVpZ2h0ICAtIGggLSAxKVxuICAgIFxuICAgICAgICBjb25zdCBuZXdSb29tID0gUmVjdC5tYWtlKHgseSx3LGgpXG4gICAgICAgIGxldCBpbnRlcnNlY3RzID0gZmFsc2VcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvb21zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKFJlY3QuaW50ZXJzZWN0cyhuZXdSb29tLCByb29tc1tpXSkpe1xuICAgICAgICAgICAgICAgIGludGVyc2VjdHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighaW50ZXJzZWN0cyl7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBSZWN0LmNlbnRlcihuZXdSb29tKVxuICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVJvb20odGlsZUdyaWQsIG5ld1Jvb20pXG4gICAgICAgICAgICBpZihyb29tcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Um9vbSA9IHJvb21zW3Jvb21zLmxlbmd0aCAtMV1cbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q2VudGVyID0gUmVjdC5jZW50ZXIobGFzdFJvb20pXG4gICAgICAgICAgICAgICAgaWYocmFuZGludCgwLDEpID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGxhc3RDZW50ZXIueSlcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxhY2Ugb25lIGRvb3IsIGF0IFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGF0IGRpc3RhbmNlIGlzIGZhciBhdCBhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMobGFzdENlbnRlci54IC0gY2VudGVyLngpID4gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJVSUxEIEEgRE9PUlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGJ1aWxkIGEgZG9vclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGFzdENlbnRlci54ID4gY2VudGVyLngpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdHVubmVsIGlzIG1vdmluZyB0byB0aGUgcmlnaHQsIGdyYWIgdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGxhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByb29tIGFuZCBjb21iaW5lIGl0IHdpdGggdGhlIGxhc3QgY2VudGVyIHksIGFkZCBvbmUgdG8gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvb3IgPSB0aWxlR3JpZC5nZXRYWShsYXN0Um9vbS54ICsgbGFzdFJvb20ud2lkdGggLSAxLCBsYXN0Q2VudGVyLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9vcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb29yLmJsb2NrU2lnaHQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdHVubmVsIGlzIG1vdmluZyB0byB0aGUgbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvb3IgPSB0aWxlR3JpZC5nZXRYWShsYXN0Um9vbS54LCBsYXN0Q2VudGVyLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9vci5ibG9ja1NpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBNYXBHZW5IZWxwZXIuY3JlYXRlVlR1bm5lbCh0aWxlR3JpZCwgbGFzdENlbnRlci55LCBjZW50ZXIueSwgY2VudGVyLngpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgaCBkb29yIGFuZCB0aGUgdiBkb29yXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIHRha2UgeCBwdXQgaXQgdGhlcmVcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZVZUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueSwgY2VudGVyLnksIGxhc3RDZW50ZXIueClcbiAgICAgICAgICAgICAgICAgICAgTWFwR2VuSGVscGVyLmNyZWF0ZUhUdW5uZWwodGlsZUdyaWQsIGxhc3RDZW50ZXIueCwgY2VudGVyLngsIGNlbnRlci55KVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb21zLnB1c2gobmV3Um9vbSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGUgPSAwOyBlIDwgQ0FWRV9FTExJUFNFUzsgZSsrKXtcbiAgICAgICAgTWFwR2VuSGVscGVyLmNhcnZlRWxsaXBzZSh0aWxlR3JpZCwgcmFuZG9tRWxsaXBzZShNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLndpZHRoIC0xIC0gTUFYX0VMTElQU0VfUkFESVVTLCBNQVhfRUxMSVBTRV9SQURJVVMsIHRpbGVHcmlkLmhlaWdodCAtIDEgLSBNQVhfRUxMSVBTRV9SQURJVVMpKVxuICAgIH1cbn1cblxuY29uc3QgcGxhY2VBc3Rlcm9pZENodW5rID0gKHRpbGVHcmlkOiBHcmlkPFRpbGU+LCBlbGxpcHNlOiBJRWxsaXBzZSk6IHZvaWQgPT4ge1xuICAgIHRpbGVHcmlkLmZvckVhY2goKHRpbGU6IFRpbGUsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIGlmKEVsbGlwc2UuY29udGFpbnNYWShlbGxpcHNlLCB4LHkpKXsgXG4gICAgICAgICAgICB0aWxlLmJsb2NrTW92ZSA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuYmxvY2tTaWdodCA9IHRydWVcbiAgICAgICAgICAgIHRpbGUuY29udGFpbmVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgbWFwR2VuZXJhdG9yMiA9ICh0aWxlR3JpZDogR3JpZDxUaWxlPiwgcm9vbXM6IElSZWN0W10pOiB2b2lkID0+IHtcbiAgICBjb25zdCBNQVJHSU5TID0gMTBcbiAgICBjb25zdCBNSU5fRElNRU5TSU9OID0gTWF0aC5taW4odGlsZUdyaWQud2lkdGgsIHRpbGVHcmlkLmhlaWdodClcbiAgICBjb25zdCBNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMgPSBNYXRoLmZsb29yKChNSU5fRElNRU5TSU9OIC0gTUFSR0lOUyAqIDIpLzIpXG4gICAgY29uc3QgTUlOX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTID0gTWF0aC5mbG9vcihNQVhfQVNURVJPSURfU0VDVElPTl9SQURJVVMgKiAwLjcpXG4gICAgXG4gICAgXG4gICAgY29uc3QgU0VDVElPTl9DT1VOVCA9IDEwXG4gICAgLy8gY29uc3QgbmV3Um9vbSA9IFJlY3QubWFrZShNYXRoLmZsb29yKHRpbGVHcmlkLndpZHRoLzIgLSAxMCksTWF0aC5mbG9vcih0aWxlR3JpZC5oZWlnaHQvMiAtIDEwKSwyMCwyMClcbiAgICAvLyBNYXBHZW5IZWxwZXIuY3JlYXRlUm9vbSh0aWxlR3JpZCwgbmV3Um9vbSlcbiAgICAvLyByb29tcy5wdXNoKG5ld1Jvb20pXG4gICAgLy8gZmlyc3QgdGhpbmdzIGZpcnN0LCBsZXRzIGxheWVyIHNvbWUgYmlnIGFzdGVyb2lkcyBvbiB0b3Agb2YgZWFjaCBvdGhlclxuICAgIHRpbGVHcmlkLmZvckVhY2goKHQ6IFRpbGUpOiB2b2lkID0+IHtcbiAgICAgICAgdC5ibG9ja01vdmUgPSBmYWxzZVxuICAgICAgICB0LmJsb2NrU2lnaHQgPSBmYWxzZVxuICAgIH0pXG4gICAgLy8gbm93IGxldCdzIGJ1aWxkIGFuIGFzdGVyb2lkIHdpdGhpbiB0aGUgYm91bmRzXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IFNFQ1RJT05fQ09VTlQ7IGkrKyl7XG4gICAgICAgIGNvbnN0IHhSYWRpdXMgPSByYW5kaW50KE1JTl9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUywgTUFYX0FTVEVST0lEX1NFQ1RJT05fUkFESVVTKVxuICAgICAgICBjb25zdCB5UmFkaXVzID0gcmFuZGludChNSU5fQVNURVJPSURfU0VDVElPTl9SQURJVVMsIE1BWF9BU1RFUk9JRF9TRUNUSU9OX1JBRElVUylcbiAgICAgICAgY29uc3QgYmlnUmFkaXVzID0gTWF0aC5tYXgoeFJhZGl1cywgeVJhZGl1cylcbiAgICAgICAgY29uc3QgeCA9IHJhbmRpbnQoTUFSR0lOUyArIGJpZ1JhZGl1cywgdGlsZUdyaWQud2lkdGggLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBjb25zdCB5ID0gcmFuZGludChNQVJHSU5TICsgYmlnUmFkaXVzLCB0aWxlR3JpZC5oZWlnaHQgLSBNQVJHSU5TIC0gYmlnUmFkaXVzKVxuICAgICAgICBwbGFjZUFzdGVyb2lkQ2h1bmsodGlsZUdyaWQsIEVsbGlwc2UubWFrZSh4LHkseFJhZGl1cyx5UmFkaXVzLCBSQU5ET00ubmV4dCgpICogTWF0aC5QSSAqIDIpKVxuICAgIH1cbiAgICAvLyBub3cgd2l0aGluIHRoaXMgZnJhbWV3b3JrIHJ1biB0aGUgbmV4dCBtYXAgZ2VuZXJhdG9yXG4gICAgbWFwR2VuZXJhdG9yMSh0aWxlR3JpZCwgcm9vbXMpXG4gICAgXG59XG5cbmV4cG9ydCB7IG1hcEdlbmVyYXRvcjEsIG1hcEdlbmVyYXRvcjIgfSIsIi8vIExldCdzIGdvIGFoZWFkIGFuZCBjcmVhdGUgdGhlIFBvaW50IGludGVyZmFjZSBoZXJlLCB3ZSdsbCBleHBvcnQgaXQgZm9yIHVzZSBsYXRlciBpbiB0aGUgcHJvamVjdFxuXG5pbXBvcnQge0lQb2ludCwgUG9pbnR9IGZyb20gJy4vc2hhcGVzL3BvaW50J1xuXG4vKipcbiAqIENsYXNzIHRvIGhlbHAgbW9uaXRvciB0aGluZ3MgdGhhdCBoYXZlIGhhcHBlbmVkIHRvIHRoZSBtb3VzZSBzaW5jZSBsYXN0IHRpbWUgdGhhdCB3ZSBsb29rZWRcbiAqL1xuXG5pbnRlcmZhY2UgSGFsZkNsaWNrIHtcbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIGlzRG93bjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTW91c2VNb25pdG9yIHtcbiAgICAvKipcbiAgICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIG1vdXNlIG92ZXIgdGhlIGF0dGFjaGVkIGVsZW1udFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBJUG9pbnQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIG1vdXNlIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IHRpbWUgd2UgbG9va2VkXG4gICAgICovXG4gICAgaGFzTW92ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IGluc2lkZSB0aGUgY29udGFpbmVyIFxuICAgICAqL1xuICAgIGluQ29udGFpbmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogaXMgdGhlIG1vdXNlIGJ1dHRvbiBkb3duIChjdXJyZW50bHkgb25seSB0cmFja3MgbGVmdClcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZ1bGwgY2xpY2sgaXMgdXAgYW5kIGRvd24sIHRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVwcyBhbmQgZG93bnMsIHVzZWZ1bCBmb3IgZHJhZ3Mgb3Igb3RoZXIgdGhpbmdzIHRoYXQgbWlnaHQgaGF2ZSBoYXBwZW5lZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgKi9cbiAgICBoYWxmQ2xpY2tzOiBIYWxmQ2xpY2tbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gUG9pbnQubWFrZSgwLDApXG4gICAgICAgIHRoaXMuaGFzTW92ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICAgICAgICB0aGlzLmhhbGZDbGlja3MgPSBbXVxuICAgICAgICAvLyBUT0RPOiBBZGQgY2xpY2sgdHJhY2tpbmcsIGRlcGVuZHMgb24gaG93IHF1aWNrbHkgd2UgYXJlIHBvbGxpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50IHlvdSB3YW50IHRvIG1vbml0b3IgbW91c2UgcmVsYXRlZCBldmVudHMgdG9cbiAgICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgcGFydGljdWxhciBtb3VzZSBldmVudFxuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50OiBhbnkpOiBNb3VzZU1vbml0b3Ige1xuICAgICAgICAvLyBUT0RPOiBXZSdsbCByZWdpc3RlciBjbGljayBoaXN0b3J5IGluIHRoZSBmdXR1cmUsIGZvciBub3cgd2UgYXJlIGp1c3QgZG9pbmcgbW91c2Ugb3ZlciBhdCBwcmVzZW50XG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBQb2ludC5zZXQodGhpcy5wb3NpdGlvbiwgZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBlbnRlcnMgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKGUpXG4gICAgICAgICAgICB0aGlzLmluQ29udGFpbmVyID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgbW92ZXMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG5cbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgZXhpdHMgdGhlIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcHJlc3NlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogdHJ1ZSB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtb3VzZSBidXR0b24gaXMgcmFpc2VkXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIC8vIG9ubHkgcGF5IGF0dGVudGlvbiB0byB0aGUgcHJpbWFyeSBidXR0b25cbiAgICAgICAgICAgIGlmKGUuYnV0dG9uICE9IDApe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50Lm1ha2UoZS5jbGllbnRYIC0gcmVjdC5sZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcClcbiAgICAgICAgICAgIHRoaXMuaGFsZkNsaWNrcy5wdXNoKHsgcG9zaXRpb24sIGlzRG93bjogZmFsc2UgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHRoYXQgd2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBldmVudHMgc2luY2Ugb3VyIGxhc3QgcG9sbCBvZiBzdGF0ZSBhbmQgaXQgY2FuIGJlIHJlc2V0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZHtcbiAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBoYXZlbid0IG1vdmVkIGJlZm9yZVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBjbGlja3NcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzLmxlbmd0aCA9IDBcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdXNlTW9uaXRvciB9IiwibGV0IF9pZCA9IDBcbmNvbnN0IG5leHRJZCA9ICgpOiBudW1iZXIgPT4gX2lkKytcblxuLy8gVE9ETzogTWFrZSBtZXNzYWdlcyBlbnVtcz9cblxuLy8gVE9ETzogTWFrZSBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzdWJzY3JpYmVyIGZ1bmN0aW9uXG50eXBlIFN1YnNjcmliZXJGdW5jdGlvbiA9IChtZXNzYWdlOiBhbnksIHRvcGljOiBzdHJpbmcpID0+IHZvaWRcblxuaW50ZXJmYWNlIFN1YnNjcmliZXJOb2RlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHN1YkZuOiBTdWJzY3JpYmVyRnVuY3Rpb247XG4gICAgcHJpb3JpdHk6IG51bWJlcjtcbiAgICBuZXh0OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG59XG5cblxuXG5jb25zdCBtYWtlU3ViTm9kZSA9IChzdWJGbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCwgbmV4dDogU3Vic2NyaWJlck5vZGUgfCBudWxsID0gbnVsbCk6IFN1YnNjcmliZXJOb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmV4dElkKCksXG4gICAgICAgIHN1YkZuLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbmV4dFxuICAgIH1cbn1cblxuLy8gVE9ETzogPz8gTWFrZSBpdCBzbyBhIHN1YnNjcmliZXIgbGlzdCBjb3VsZCBiZSBkZWFmZW5lZC9saXN0ZW4/XG5cbi8qKlxuICogQSBncm91cCBvZiBmdW5jdGlvbnMsIHNvcnRlZCBieSBwcmlvcml0eSwgd2hpY2ggd2lsbCBiZSBjYWxsZWQgc2VxdWVudGlhbGx5IHdoZW4gdGhlIGxpc3QgaXMgbm90aWZpZWQgb2YgYSBuZXcgbWVzc2FnZVxuICovXG5jbGFzcyBQcmlvcml0eVN1YnNjcmliZXJMaXN0IHtcbiAgICByb290OiBTdWJzY3JpYmVyTm9kZSB8IG51bGw7XG4gICAgdGFpbDogU3Vic2NyaWJlck5vZGUgfCBudWxsO1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGxcbiAgICAgICAgdGhpcy50YWlsID0gbnVsbFxuICAgICAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBtZXNzYWdlcyB0aGF0IGdldCBzZW50IHRvIHRoaXMgbGlzdCB2aWEgdGhlIG5vdGlmeSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBmbiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbWVzc2FnZSBvYmplY3Qgd2hlbmV2ZXIgdGhpcyBzdWJzY3JpYmVyIGxpc3QgaXMgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByaW9yaXR5IFRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LCB0aGUgZWFybGllciBpdCB3aWxsIHJ1biwgaWYgaXQgaGFzIHRoZSBzYW1lIHByaW9yaXR5IHRoZSBvbmUgdGhhdCB3YXMgYWRkZWQgZmlyc3Qgd2lsbCBmaXJlIGZpcnN0XG4gICAgICovXG4gICAgc3Vic2NyaWJlKGZuOiBTdWJzY3JpYmVyRnVuY3Rpb24sIHByaW9yaXR5OiBudW1iZXIgPSAwKTogbnVtYmVye1xuICAgICAgICAvLyBDYXNlICMxIEVtcHR5IFN1YnNjcmliZXIgTGlzdFxuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBtYWtlU3ViTm9kZShmbiwgcHJpb3JpdHkpXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnJvb3RcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgfSBcbiAgICAgICAgLy8gQ2FzZSAjMiBXZSBhbHJlYWR5IGhhdmUgc29tZSBzdWJzY3JpYmVyc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0cmF2ZWxsZXIgPSB0aGlzLnJvb3QgLy8gd2Uga25vdyBpdCBzaG91bGQgYmUgYSBTdWJzY3JpYmVyIE5vZGUgYW5kIG5vdCBudWxsLCBiZWNhdXNlIHdlIGFyZSBoZXJlXG5cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSwgbmV3IHJvb3RcbiAgICAgICAgICAgIGlmKHByaW9yaXR5IDwgdHJhdmVsbGVyIS5wcmlvcml0eSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gbWFrZVN1Yk5vZGUoZm4sIHByaW9yaXR5LCB0aGlzLnJvb3QpXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vcm1hbCBjYXNlIHdlIGhhdmUgb3RoZXIgdGhpbmdzIHRvIHdvcnJ5IGFib3V0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSh0cmF2ZWxsZXIgJiYgdHJhdmVsbGVyLm5leHQgJiYgdHJhdmVsbGVyLm5leHQucHJpb3JpdHkgPj0gcHJpb3JpdHkpe1xuICAgICAgICAgICAgICAgICAgICB0cmF2ZWxsZXIgPSB0cmF2ZWxsZXIubmV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGVpdGhlciBmb3VuZCBhIG5vZGUgd2l0aCBsb3dlciBwcmlvcml0eSB0aGFuIHVzIG9yIHdlIGhhdmUgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgIHRyYXZlbGxlciEubmV4dCA9IG1ha2VTdWJOb2RlKGZuLCBwcmlvcml0eSwgdHJhdmVsbGVyIS5uZXh0KVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdHJhdmVsbGVycyB3YXMgdGhlIG9sZCB0YWlsXG4gICAgICAgICAgICAgICAgaWYodHJhdmVsbGVyID09PSB0aGlzLnRhaWwpe1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5leHQgb25lIGlzIHRoZSBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSB0cmF2ZWxsZXIhLm5leHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGgrK1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmF2ZWxsZXIhLm5leHQuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtb3N0IGltcG9yYW50IGluZm9ybWF0aW9uIGZvciB0aGUgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdG9waWMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHB1YnN1YiB0byByZW1pbmQgdGhlIHN1YnNjcmliZXIgb2YgdGhlIHNwZWNpZmljIHRvcGljIG9yIHN1YnRvcGljXG4gICAgICovXG4gICAgbm90aWZ5KG1lc3NhZ2U6IGFueSwgdG9waWM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdHJhdmVsbGVyID0gdGhpcy5yb290XG4gICAgICAgIHdoaWxlKHRyYXZlbGxlciAhPSBudWxsKXtcbiAgICAgICAgICAgIHRyYXZlbGxlci5zdWJGbihtZXNzYWdlLCB0b3BpYylcbiAgICAgICAgICAgIHRyYXZlbGxlciA9IHRyYXZlbGxlci5uZXh0XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IFByaW9yaXR5U3Vic2NyaWJlckxpc3QsIFN1YnNjcmliZXJGdW5jdGlvbiB9IiwiaW1wb3J0IHsgUHJpb3JpdHlTdWJzY3JpYmVyTGlzdCwgU3Vic2NyaWJlckZ1bmN0aW9uIH0gZnJvbSAnLi9wcmlvcml0eVN1YnNjcmliZXJMaXN0J1xuXG5pbnRlcmZhY2UgSGFzaDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLyoqXG4gKiBQdWJzdWIgaXMgYSB0b3BpYy1iYXNlZCBvYnNlcnZlciBwYXR0ZXJuIGltcGxlbWVudGF0aW9uIGRlc2lnbmVkIHRvIGF2b2lkIHRpZ2h0IGNvdXBsaW5nIG9mIGNvbXBvbmVudHNcbiAqL1xuY2xhc3MgUHViU3ViIHtcbiAgICB0b3BpY3M6IEhhc2g8UHJpb3JpdHlTdWJzY3JpYmVyTGlzdD47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50b3BpY3MgPSB7fVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhIG1lc3NhZ2UgdG8gYWxsIHN1YnNjcmliZXJzIHRvIGEgdG9waWNcbiAgICAgKiBAcGFyYW0gdG9waWMgVG9waWMgdG8gdXNlLCBpZiBub2JvZHkgaXMgc3Vic2NyaWJlZCB0byBpdCwgbm90aGluZyBoYXBwZW5zXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGFjdHVhbCBtZXNzYWdlIHRvIHNlbmQsIHRoaXMgY291bGQgYmUgYW55dGhpbmcsIGJ1dCBpdCdzIGEgc2luZ2xlIHRoaW5nXG4gICAgICovXG4gICAgcHVibGlzaCh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy50b3BpY3NbdG9waWNdKXtcbiAgICAgICAgICAgIHRoaXMudG9waWNzW3RvcGljXS5ub3RpZnkobWVzc2FnZSwgdG9waWMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgc3BlY2lmaWMgdG9waWMgd2l0aCBhIGdpdmVuIHByaW9yaXR5LCByZXR1cm5zIGFuIGlkIHRoYXQgeW91J2xsIG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gdG9waWMgdGhlIHNwZWNpZmljIHRvcGljIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSBmbiB0aGUgZnVuY3Rpb24gdG8gcmVjaWV2ZSB0aGUgc3BlY2lmaWMgbWVzc2FnZSBhbmQgdG9waWMgYmVpbmcgYnJvYWRjYXN0ZWQgdG9cbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgdGhlIHByaW9yaXR5IG9mIHRoZSBmdW5jdGlvbiB0byBzdWJzY3JpYmUgdG8sIGhpZ2hlciBudW1iZXJzIHJ1biBmaXJzdCwgdGhlIGRlZmF1bHQgaXMgemVybywgbmVnYXRpdmUgbnVtYmVycyBhcmUgYWxsb3dlZFxuICAgICAqL1xuICAgIHN1YnNjcmliZSh0b3BpYzogc3RyaW5nLCBmbjogU3Vic2NyaWJlckZ1bmN0aW9uLCBwcmlvcml0eTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIGlmKCF0aGlzLnRvcGljc1t0b3BpY10pe1xuICAgICAgICAgICAgdGhpcy50b3BpY3NbdG9waWNdID0gbmV3IFByaW9yaXR5U3Vic2NyaWJlckxpc3QoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRvcGljc1t0b3BpY10uc3Vic2NyaWJlKGZuLCBwcmlvcml0eSlcbiAgICB9XG59XG4vLyBPVVIgVU5JVkVSU0FMIERFRkFVTFQgUFVCU1VCXG5jb25zdCBQVUJTVUIgPSBuZXcgUHViU3ViKClcbmV4cG9ydCB7UFVCU1VCLCBQdWJTdWJ9IiwiLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFJlbmRlciBDZWxsXG4gKi9cbmludGVyZmFjZSBJUmVuZGVyQ2VsbCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjaGFyYWN0ZXI6IHN0cmluZzsgLy8gdGhpcyBzaG91bGQgb25seSBiZSBzdHJpbmcgb2YgbGVuZ3RoIDFcbiAgICBmb3JlQ29sb3I6IHN0cmluZztcbiAgICBiYWNrQ29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcmFjdGVyOiBzdHJpbmcsIGZvcmVDb2xvcjogc3RyaW5nLCBiYWNrQ29sb3I6IHN0cmluZyk6IElSZW5kZXJDZWxsID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksIGNoYXJhY3RlciwgZm9yZUNvbG9yLCBiYWNrQ29sb3JcbiAgICB9XG59XG5cbmNvbnN0IFJlbmRlckNlbGwgPSB7XG4gICAgbWFrZVxufVxuXG5leHBvcnQgeyBJUmVuZGVyQ2VsbCwgUmVuZGVyQ2VsbH0iLCJpbXBvcnQge0lSZWN0LCBSZWN0IH0gZnJvbSAnLi9zaGFwZXMvcmVjdCdcblxuaW50ZXJmYWNlIEhhc2hTdHI8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5pbnRlcmZhY2UgSGFzaE51bTxUPiB7XG4gICAgW2tleTogbnVtYmVyXTogVDtcbn1cblxuY29uc3QgY29kZSA9IChjaGFyOiBzdHJpbmcpOiBudW1iZXIgPT4gY2hhci5jaGFyQ29kZUF0KDApXG5jb25zdCBDSEFSQUNURVJfSEVMUEVSOiBIYXNoU3RyPHN0cmluZz4gPSB7XG4gICAgVkVSVElDQUxfTElORTogJ+KUgicsXG4gICAgSE9SSVpPTlRBTF9MSU5FOiAn4pSAJyxcbiAgICBDUk9TU19MSU5FUzogJ+KUvCcsXG4gICAgVF9MRUZUOiAn4pSkJyxcbiAgICBUX1VQOiAn4pS0JyxcbiAgICBUX1JJR0hUOiAn4pScJyxcbiAgICBUX0RPV046ICfilKwnLFxuICAgIFRPUF9SSUdIVDogJ+KUlCcsXG4gICAgQk9UVE9NX1JJR0hUOiAn4pSMJyxcbiAgICBCT1RUT0xfTEVGVDogJ+KUkCcsXG4gICAgVE9QX0xFRlQ6ICfilJgnXG59XG5cbmNvbnN0IFRJTEVfV0lEVEggPSAxMCwgVElMRV9IRUlHSFQgPSAxMFxuXG5jb25zdCBDT0RFX1RPX1JFQ1RfSEFTSDogSGFzaE51bTxJUmVjdD4gPSB7fVxuY29uc3Qgc3BhY2VDb2RlID0gICBjb2RlKCcgJylcbmNvbnN0IGF0Q29kZSA9ICAgICAgY29kZSgnQCcpXG5jb25zdCBhQ29kZSA9ICAgICAgIGNvZGUoJ2EnKVxuY29uc3QgekNvZGUgPSAgICAgICBjb2RlKCd6JylcbmNvbnN0IEFDb2RlID0gICAgICAgY29kZSgnQScpXG5jb25zdCBaQ29kZSA9ICAgICAgIGNvZGUoJ1onKVxuXG5cbmNvbnN0IGN0cmhIZWxwZXIgPSAoY29kZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2NvZGVdID0gUmVjdC5tYWtlKHgseSwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5cbi8vIFdlIHdpbGwgZmlsbCBpbiB0aGUgb3RoZXIgY2hhcmFjdGVycyBhcyBuZWNlc3NhcnlcbkNPREVfVE9fUkVDVF9IQVNIW3NwYWNlQ29kZV0gPSBSZWN0Lm1ha2UoMCwgMCwgMTAsIDEwKVxuQ09ERV9UT19SRUNUX0hBU0hbYXRDb2RlXSA9IFJlY3QubWFrZSgwLCAxMCwgMTAsIDEwKVxuZm9yKGxldCBpID0gQUNvZGU7IGkgPD0gWkNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBBQ29kZSkgKiAxMCwgMzAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuZm9yKGxldCBpID0gYUNvZGU7IGkgPD0gekNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBSZWN0Lm1ha2UoKGkgLSBhQ29kZSkgKiAxMCwgNDAsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKVxufVxuLy8gZm9yIGJyZXZpdGllcyBzYWtlXG5jb25zdCBDSCA9IENIQVJBQ1RFUl9IRUxQRVJcbmN0cmhIZWxwZXIoY29kZShDSC5WRVJUSUNBTF9MSU5FKSwgMTQwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkhPUklaT05UQUxfTElORSksIDE1MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5DUk9TU19MSU5FUyksIDE2MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0xFRlQpLCAxNzAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9VUCksIDE4MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX1JJR0hUKSwgMTkwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfRE9XTiksIDIwMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfUklHSFQpLCAyMTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQk9UVE9NX1JJR0hUKSwgMjIwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTF9MRUZUKSwgMjMwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRPUF9MRUZUKSwgMjQwLDEwKVxuXG5cbmZ1bmN0aW9uIGRyYXdTZWN0aW9uKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0aWxlc2hlZXQ6IGFueSwgc3JjUmVjdDogSVJlY3QsIGRlc3RSZWN0OiBJUmVjdCwgZm9yZUNvbG9yOiBzdHJpbmcsIGJhY2tDb2xvcjogc3RyaW5nKTogdm9pZHtcbiAgICBjdHguY2xlYXJSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4LmRyYXdJbWFnZSh0aWxlc2hlZXQsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCwgZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcidcbiAgICBjdHguZmlsbFN0eWxlPWZvcmVDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgY3R4LmZpbGxTdHlsZT1iYWNrQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG59XG5cbmV4cG9ydCAgeyBDT0RFX1RPX1JFQ1RfSEFTSCwgQ0hBUkFDVEVSX0hFTFBFUiwgY29kZSwgZHJhd1NlY3Rpb24gfSIsIi8vIFdBUk5JTkc6IEhFUkUgVEhFUkUgQkUgRFJBR09OUywgKG9yIGluIHRoaXMgY2FzZSwgYSBsb3Qgb2YgY29kZSBJIGRvbid0dW5kZXJzdGFuZClcblxuLy8gV0UgT05MWSBXQU5UIE9ORSBSTkcgR0VORVJBVE9SIEJFQ0FVU0UgV0UgQUxXQVlTIFdBTlQgQSBTRUVEIEZPUiBJVFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTIxMjk1L3NlZWRpbmctdGhlLXJhbmRvbS1udW1iZXItZ2VuZXJhdG9yLWluLWphdmFzY3JpcHRcblxuLy8gSGFzaGluZyBmdW5jdGlvbiBmb3IgdGFraW5nIHNpbXBsZSBzdHJpbmcgYW5kIGNyZWF0aW5nIGJldHRlciBcInRydWVcIiBzZWVkc1xuLy8gSSBIQVZFIE5PIElERUEgV0hBVCBUSEUgTUFHSUMgTlVCTUVSUyBBUkUgRk9SXG5mdW5jdGlvbiB4bXVyMyhzdHI6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBsZXQgaCA9IDE3NzkwMzM3MDMgXiBzdHIubGVuZ3RoIC8vIGJpdHdpc2Ugb3IgdGhlIHN0cmluZyB3aXRoIHRoaXMgcmFuZG9tIHRoaW5nXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIHN0ci5jaGFyQ29kZUF0KGkpLCAzNDMyOTE4MzUzKVxuICAgICAgICBoID0gaCA8PCAxMyB8IGggPj4+IDE5XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCk6IGFueXtcbiAgICAgICAgaCA9IE1hdGguaW11bChoIF4gaCA+Pj4gMTYsIDIyNDY4MjI1MDcpXG4gICAgICAgIGggPSBNYXRoLmltdWwoaCBeIGggPj4+IDEzLCAzMjY2NDg5OTA5KVxuICAgICAgICByZXR1cm4gKGggXj0gaCA+Pj4gMTYpID4+PiAwXG4gICAgfVxufVxuXG50eXBlIElSYW5kb20gPSgpID0+IG51bWJlcjtcblxuLy8gR0VORVJBVE9SU1xuZnVuY3Rpb24gc2ZjMzIoYTogYW55LCBiOiBhbnksIGM6IGFueSwgZDogYW55KTogKEZ1bmN0aW9uKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oKTogYW55e1xuICAgICAgICBhID4+Pj0gMDsgYj4+Pj0gMDsgYyA+Pj49IDA7IGQgPj4+PSAwXG4gICAgICAgIGxldCB0ID0gKGEgKyBiKSB8IDBcbiAgICAgICAgYSA9IGIgXiBiID4+PiA5XG4gICAgICAgIGIgPSBjICsgKGMgPDwgMykgfCAwXG4gICAgICAgIGMgPSAoYyA8PCAyMSB8IGMgPj4+IDExKVxuICAgICAgICBkID0gZCArIDEgfCAwXG4gICAgICAgIHQgPSB0ICsgZCB8IDBcbiAgICAgICAgYyA9IGMgKyB0IHwgMFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuICh0ID4+PiAwKSAvIDQyOTQ5NjcyOTZcbiAgICB9XG59XG5cbi8vIE9ORSBMSU5FUiBDVVJSRU5UTFkgTk9UIElOIFVTRVxuLy8gY29uc3QgTENHPSAoczogYW55KTogRnVuY3Rpb249PigpOiBhbnk9PigyKiozMS0xJihzPU1hdGguaW11bCg0ODI3MSxzKSkpLzIqKjMxO1xuXG5jb25zdCBSQU5ET00gPSB7XG4gICAgX2dlbmVyYXRvcjogKCgpOiBhbnkgPT4ge30pIGFzIEZ1bmN0aW9uLFxuICAgIHNlZWQ6IGZ1bmN0aW9uKHNlZWRTdHI6IHN0cmluZyA9IGJ0b2EobmV3IERhdGUoKS50b1N0cmluZygpKSApOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzZWVkID0geG11cjMoc2VlZFN0cilcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gc2ZjMzIoc2VlZCgpLCBzZWVkKCksIHNlZWQoKSwgc2VlZCgpKVxuICAgICAgICByZXR1cm4gc2VlZFN0clxuICAgIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oKTogYW55IHtcbiAgICAgICAgaWYodGhpcy5fZ2VuZXJhdG9yID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuc2VlZCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRvcigpXG4gICAgfVxufVxuXG5leHBvcnQgeyBSQU5ET00gfSIsImltcG9ydCB7IElQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBJUmVjdCwgUmVjdCB9IGZyb20gJy4vcmVjdCdcblxuLyoqXG4gKiBYIGFuZCBZIGFyZSB0aGUgQ0VOVEVSIG9mIHRoZSBlbGxpcHNlICh1bmxpa2UgdGhlIHRvcCBsZWZ0IGZvciBJUmVjdClcbiAqL1xuaW50ZXJmYWNlIElFbGxpcHNlIGV4dGVuZHMgSVBvaW50IHtcbiAgICB4UmFkaXVzOiBudW1iZXI7XG4gICAgeVJhZGl1czogbnVtYmVyO1xuICAgIHJvdGF0aW9uOiBudW1iZXI7XG59XG5cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHhSYWRpdXM6IG51bWJlciwgeVJhZGl1czogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyID0gMCk6IElFbGxpcHNlID0+IHtcbiAgICByZXR1cm4ge3gsIHksIHhSYWRpdXMsIHlSYWRpdXMsIHJvdGF0aW9ufVxufVxuXG5cbi8qKlxuICogQ29udGFpbnMgWFlcbiAqIEBwYXJhbSBlbGxpcHNlIFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgY29udGFpbnNYWSA9IChlbGxpcHNlOiBJRWxsaXBzZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhlbGxpcHNlLnJvdGF0aW9uKSwgc2luID0gTWF0aC5zaW4oZWxsaXBzZS5yb3RhdGlvbilcbiAgICBjb25zdCBkeCA9ICh4IC0gZWxsaXBzZS54KSwgZHkgPSAoeSAtIGVsbGlwc2UueSlcbiAgICBjb25zdCB0ZHggPSBjb3MgKiBkeCArIHNpbiAqIGR5LCB0ZHkgPSBzaW4gKiBkeCAtIGNvcyAqIGR5XG5cbiAgICByZXR1cm4gKCAodGR4ICogdGR4KSAvIChlbGxpcHNlLnhSYWRpdXMqIGVsbGlwc2UueFJhZGl1cykgKyAodGR5ICogdGR5KS8oZWxsaXBzZS55UmFkaXVzICogZWxsaXBzZS55UmFkaXVzKSApIDwgMVxufVxuLyoqXG4gKiBEb2VzIHRoZSBlbGxpcHNlIGNvbnRhaW4gdGhlIHBvaW50XG4gKiBAcGFyYW0gZWxsaXBzZSBcbiAqIEBwYXJhbSBwb2ludCBcbiAqL1xuY29uc3QgY29udGFpbnNQb2ludCA9IChlbGxpcHNlOiBJRWxsaXBzZSwgcG9pbnQ6IElQb2ludCk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBjb250YWluc1hZKGVsbGlwc2UsIHBvaW50LngsIHBvaW50LnkpXG59XG5cbi8vIFxuLyoqXG4gKiBBcmUgZW5vdWdoIGNvcm5lcnMgaW5zaWRlIHRoZSBSZWN0IHRvIGJlIGNvbnNpZGVyZWQgaW5zaWRlXG4gKiBAcGFyYW0gZWxsaXBzZSBlbGxpcHNlXG4gKiBAcGFyYW0gcmVjdCByZWN0IHRvIHRlc3QgaWYgaXQncyBlZGdlcyBhcmUgaW5zaWRlIHRoZSBlbGxpcHNlXG4gKiBAcGFyYW0gdGhyZXNob2xkIGhvdyBtYW55IGNvcm5lcnMgbXVzdCBiZSBpbnNpZGUgdG8gY291bnQsIGRlZmF1bHRzIHRvIDRcbiAqL1xuY29uc3QgY29udGFpbnNSZWN0Q29ybmVycyA9IChlbGxpcHNlOiBJRWxsaXBzZSwgcmVjdDogSVJlY3QsIHRocmVzaG9sZDogbnVtYmVyID0gNCk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBjb3JuZXJzSW4gPSAwXG4gICAgY29uc3QgY29ybmVycyA9IFJlY3QuY29ybmVycyhyZWN0KVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy50cikpeyBjb3JuZXJzSW4rK31cbiAgICBpZihjb250YWluc1BvaW50KGVsbGlwc2UsIGNvcm5lcnMudGwpKXsgY29ybmVyc0luKyt9XG4gICAgaWYoY29udGFpbnNQb2ludChlbGxpcHNlLCBjb3JuZXJzLmJsKSl7IGNvcm5lcnNJbisrfVxuICAgIGlmKGNvbnRhaW5zUG9pbnQoZWxsaXBzZSwgY29ybmVycy5icikpeyBjb3JuZXJzSW4rK31cbiAgICByZXR1cm4gY29ybmVyc0luID49IHRocmVzaG9sZFxufVxuXG5jb25zdCBFbGxpcHNlID0ge1xuICAgIG1ha2UsXG4gICAgY29udGFpbnNYWSxcbiAgICBjb250YWluc1BvaW50LFxuICAgIGNvbnRhaW5zUmVjdENvcm5lcnNcbn1cblxuZXhwb3J0IHsgSUVsbGlwc2UsIEVsbGlwc2UgfSIsIi8qKlxuICogSW50ZXJmYWNlIGZvciB3b3JraW5nIHdpdGggYSAyRCBQb2ludFxuICovXG5pbnRlcmZhY2UgSVBvaW50IHsgIFxuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IFBvaW50XG4gKiBAcGFyYW0geCBcbiAqIEBwYXJhbSB5IFxuICovXG5jb25zdCBtYWtlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4ge3gseX1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHBvaW50IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhZGRpbmcgYm90aCBvZiB0aGVtIHRvZ2V0aGVyLCBpZiB5b3Ugd2FudCB0byBhZGQgYSBwb2ludCBUTyBhbm90aGVyIHBvaW50LCB1c2UgYWRkVG9cbiAqIEBwYXJhbSBhIEZpcnN0IFBvaW50LCB1bm1vZGlmaWVkXG4gKiBAcGFyYW0gYiBTZWNvbmQgUG9pbnQsIHVubW9kaWZpZWRcbiAqL1xuY29uc3QgYWRkID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShhLnggKyBiLngsIGEueSArIGIueSlcbn1cblxuLyoqXG4gKiBBZGQgdGhlIHZhbHVlIG9mIFBvaW50IGEgdG8gUG9pbnQgYlxuICogQHBhcmFtIGEgVGhlIHBvaW50IHRoYXQgY2hhbmdlcywgd2lsbCBoYXZlIGIgYWRkZWQgdG8gaXRcbiAqIEBwYXJhbSBiIFRoZSBwb2ludCB3aG9zZSB2YWx1ZSBpcyBhZGRlZCB0byB0aGUgb3RoZXIsIGl0IGlzIHVubW9kaWZpZWQgaXRzZWxmXG4gKi9cbmNvbnN0IGFkZFRvID0gKGE6IElQb2ludCwgYjogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICBhLnggKz0gYi54XG4gICAgYS55ICs9IGIueVxuICAgIHJldHVybiBhXG59XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZXMgb2YgYSBwb2ludCB3aXRoIHggYW5kIHkgdmFsdWVzLCByZXR1cm5zIHRoZSBub3cgbW9kaWZpZWQgcG9pbnRcbiAqIEBwYXJhbSBwb2ludCBwb2ludCB0byBiZSBtb2RpZmllZFxuICogQHBhcmFtIHggbmV3IHggdmFsdWVcbiAqIEBwYXJhbSB5IG5ldyB5IHZhbHVlXG4gKi9cbmNvbnN0IHNldCA9IChwb2ludDogSVBvaW50LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcG9pbnQueCA9IHhcbiAgICBwb2ludC55ID0geVxuICAgIHJldHVybiBwb2ludFxufVxuXG4vKipcbiAqIENvcHkgYSBwb2ludFxuICogQHBhcmFtIHBvaW50IFBvaW50IHRoYXQgd2lsbCBiZSBjb3BpZWRcbiAqL1xuY29uc3QgY29weSA9IChwb2ludDogSVBvaW50KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gbWFrZShwb2ludC54LCBwb2ludC55KVxufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgbWVhbnQgdG8gd29yayB3aXRoIHRoaW5ncyB0aGF0IGhhdmUgdGhlIElQb2ludCBpbnRlcmZhY2VcbiAqL1xuY29uc3QgUG9pbnQgPSB7XG4gICAgbWFrZSxcbiAgICBhZGQsXG4gICAgYWRkVG8sXG4gICAgc2V0LFxuICAgIGNvcHlcbn1cblxuZXhwb3J0IHtJUG9pbnQsIFBvaW50fSIsImltcG9ydCB7SVBvaW50LCBQb2ludH0gZnJvbSAnLi9wb2ludCdcbmludGVyZmFjZSBJUmVjdCBleHRlbmRzIElQb2ludCB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElSZWN0U2lkZXMge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICByaWdodDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlY3RDb3JuZXJzIHtcbiAgICB0bDogSVBvaW50O1xuICAgIHRyOiBJUG9pbnQ7XG4gICAgYmw6IElQb2ludDtcbiAgICBicjogSVBvaW50O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY3RhbmdsZVxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqIEBwYXJhbSB3aWR0aCBcbiAqIEBwYXJhbSBoZWlnaHQgXG4gKi9cbmNvbnN0IG1ha2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICB9XG59XG5cbmNvbnN0IHNldCA9IChyOiBJUmVjdCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogSVJlY3QgPT4ge1xuICAgIHIueCA9IHhcbiAgICByLnkgPSB5XG4gICAgci53aWR0aCA9IHdpZHRoXG4gICAgci5oZWlnaHQgPSBoZWlnaHRcbiAgICByZXR1cm4gclxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgdW5pdCB2YWx1ZSBvZiB0aGUgc2lkZXMgb2YgdGhlIHJlY3RhbmdsZSwgbGVmdCBhbmQgcmlnaHQgcmV0dXJuIHggY29vcmRpbmF0ZXMsIHRvcCBhbmQgYm90dG9tIGluY2x1ZGUgeSBjb29yZGluYXRlc1xuICogQHBhcmFtIHJlY3QgcmVjdGFuZ2xlIHVzZWRcbiAqL1xuY29uc3Qgc2lkZXMgPSAocmVjdDogSVJlY3QpOiBJUmVjdFNpZGVzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiByZWN0LngsXG4gICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICAgICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICAgIH1cbn1cbmNvbnN0IGNvcm5lcnMgPSAocmVjdDogSVJlY3QpOiBJUmVjdENvcm5lcnMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRsOiBQb2ludC5tYWtlKHJlY3QueCwgcmVjdC55KSxcbiAgICAgICAgdHI6IFBvaW50Lm1ha2UocmVjdC54ICsgcmVjdC53aWR0aCwgcmVjdC55KSxcbiAgICAgICAgYmw6IFBvaW50Lm1ha2UocmVjdC54LCByZWN0LnkgKyByZWN0LmhlaWdodCksXG4gICAgICAgIGJyOiBQb2ludC5tYWtlKHJlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSArIHJlY3QuaGVpZ2h0KSxcbiAgICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjZW50ZXIgcG9pbnQ6IE5PVEU6IFRoaXMgZmluZHMgdGhlIElOVEVHRVIgY2VudGVyLCBjb29yZGluYXRlcyBhcmUgdHJ1bmNhdGVkXG4gKiBAcGFyYW0gcmVjdCBUaGUgcmVjdGFuZ2xlIHdlIGFyZSBmaW5kaW5nIHRoZSBjZW50ZXIgb2ZcbiAqL1xuY29uc3QgY2VudGVyID0gKHJlY3Q6IElSZWN0KTogSVBvaW50ID0+IHtcbiAgICByZXR1cm4gUG9pbnQubWFrZShNYXRoLmZsb29yKHJlY3QueCArIHJlY3Qud2lkdGgvMiksIE1hdGguZmxvb3IocmVjdC55ICsgcmVjdC5oZWlnaHQvMikpXG59XG5cbi8vIE9QVElNSVpFOiBEb24ndCBjYWxsIHNpZGVzLCBqdXN0IHVzZSB0aGUgcmF3IG51bWJlcnMgYW5kIGFkZGl0aW9uXG5jb25zdCBpbnRlcnNlY3RzID0gKGE6IElSZWN0LCBiOiBJUmVjdCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGFTaWRlcyA9IHNpZGVzKGEpXG4gICAgY29uc3QgYlNpZGVzID0gc2lkZXMoYilcbiAgICByZXR1cm4gYVNpZGVzLmxlZnQgPD0gYlNpZGVzLnJpZ2h0ICYmIGFTaWRlcy5yaWdodCA+PSBiU2lkZXMubGVmdCAmJiBcbiAgICAgICAgYVNpZGVzLnRvcCA8PSBiU2lkZXMuYm90dG9tICYmIGFTaWRlcy5ib3R0b20gPj0gYlNpZGVzLnRvcFxuXG4gICAgICAgIFxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSBhbmQgbWFuaXB1bGF0ZSByZWN0YW5nbGVzXG4gKi9cbmNvbnN0IFJlY3QgPSB7XG4gICAgbWFrZSxcbiAgICBzZXQsXG4gICAgc2lkZXMsXG4gICAgY29ybmVycyxcbiAgICBjZW50ZXIsXG4gICAgaW50ZXJzZWN0c1xufVxuXG5leHBvcnQge0lSZWN0LCBSZWN0fVxuIiwiLy8gSSBndWVzcyBldmVyeXRoaW5nIHdvdWxkIG5lZWQgaXQncyBvd24gc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24uLi4gZ3Jvc3NcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgbG9jYXRpb25zIG9uIHRoZSBib2FyZCwgZXZlbnR1YWxseSB3ZSB3aWxsIHByb2JhYmx5IG1vdmUgdGhpcyBpbnRvIGl0cyBvd24gRUNTIHN5c3RlbVxuICovXG5jbGFzcyBUaWxlIHtcbiAgICAvKipcbiAgICAgKiBDYW4gdGhlIHBsYXllci9tb25zdGVycy9tb2JpbGUgZW50aXRpZXMgbW92ZSB0aHJvdWdoL2ludG8gdGhpcyB0aWxlXG4gICAgICovXG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBibG9ja01vdmU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRG9lcyB0aGlzIHRpbGUgYmxvY2sgbGluZSBvZiBzaWdodFxuICAgICAqL1xuICAgIGJsb2NrU2lnaHQ6IGJvb2xlYW47XG5cbiAgICBleHBsb3JlZDogYm9vbGVhbjtcblxuICAgIGNvbnRhaW5lZDogYm9vbGVhbjsgLy8gbW9kZWxzIGlmIHRoaXMgdGhpbmcgaGFzIGEgZmxvb3IgYW5kIGNlaWxpbmcsIChvciwgaW4gdW5pdmVyc2UsIHN0dWZmIHN1cnJvdW5kaW5nIGl0IG9uIHRoZSB6LWF4aXMpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgdGlsZVxuICAgICAqIEBwYXJhbSBibG9ja01vdmUgQ2FuIHRoZSBwbGF5ZXIvbW9uc3RlcnMvbW9iaWxlIGVudGl0aWVzIG1vdmUgdGhyb3VnaC9pbnRvIHRoaXMgdGlsZVxuICAgICAqIEBwYXJhbSBibG9ja1NpZ2h0IG9wdGlvbmFsLCB3aWxsIGRlZmF1bHQgdG8gd2hhdGV2ZXIgYmxvY2tNb3ZlIGlzIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBibG9ja01vdmU6IGJvb2xlYW4sIGJsb2NrU2lnaHQ/OiBib29sZWFuICl7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLmJsb2NrTW92ZSA9IGJsb2NrTW92ZVxuICAgICAgICB0aGlzLmV4cGxvcmVkID0gdHJ1ZVxuICAgICAgICBpZihibG9ja1NpZ2h0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5ibG9ja1NpZ2h0ID0gYmxvY2tNb3ZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrU2lnaHQgPSBibG9ja1NpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250YWluZWQgPSB0cnVlXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHsgVGlsZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==