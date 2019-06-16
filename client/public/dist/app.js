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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderHelpers */ "./client/src/renderHelpers.js");
/* harmony import */ var _keyboardMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardMonitor */ "./client/src/keyboardMonitor.ts");
/* harmony import */ var _mouseMonitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouseMonitor */ "./client/src/mouseMonitor.ts");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ "./client/src/grid.ts");




// We'll definitely be reusing this one
var makeRect = function (x, y, width, height) {
    return {
        x: x, y: y, width: width, height: height
    };
};
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var km = new _keyboardMonitor__WEBPACK_IMPORTED_MODULE_1__["KeyboardMonitor"]().attach(document);
var mm = new _mouseMonitor__WEBPACK_IMPORTED_MODULE_2__["MouseMonitor"]().attach(canvas);
// loadImage promise // We'll move this out somewhere else later, but this is an important platform layer part
function loadImage(url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.addEventListener('load', function () { return resolve(img); });
        img.addEventListener('error', function () { return reject(new Error("Failed to load image from " + url)); });
        img.src = url;
    });
}
function drawSection(tilesheet, srcRect, destRect, foreColor, backColor) {
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
// sizing
var TILE_WIDTH = 10;
var TILE_HEIGHT = 10;
var TILES_WIDE = 80;
var TILES_HIGH = 60;
// colors
var blueIsh = '#6688CC';
var blackIsh = '#222222';
var player = {
    x: 30,
    y: 40
};
loadImage('assets/out.png').then(function (image) {
    // Initialize
    // Let's create a grid to render
    // and a grid of tiles as well
    // we look at our grid tiles and then create a render grid based off of it?
    // might not be the worst idea ever :P
    var renderGrid = new _grid__WEBPACK_IMPORTED_MODULE_3__["Grid"](TILES_WIDE, TILES_HIGH);
    // TODO: turn this into a type
    renderGrid.setEach(function (cell, index, x, y) {
        return {
            x: x,
            y: y,
            character: ' ',
            foreColor: blueIsh,
            backColor: blackIsh
        };
    });
    for (var i = 0; i < 5; i++) {
        renderGrid.getXY(i, 10).character = 'X';
    }
    // Loop
    var loop = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Look at player input
        // Z lets us be in ZOOM MODE!!!!
        if (km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)) {
            player.x -= 10;
        }
        if (km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)) {
            player.x += 10;
        }
        if (km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)) {
            player.y -= 10;
        }
        if (km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)) {
            player.y += 10;
        }
        // THIS TYPE MIGHT CHANGE SUBSTANTIALLY IN THE FUTURE
        // DRAW THE RENDER GRID
        renderGrid.forEach(function (cell, index, x, y) {
            var character = cell.character, foreColor = cell.foreColor, backColor = cell.backColor;
            // TODO: WE WILL BE THRASHING THE GARBAGE COLLECTOR IF WE ARE CONSTANTLY MAKING RECTS LIKE THIS, FIX THAT
            drawSection(image, _renderHelpers__WEBPACK_IMPORTED_MODULE_0__["CODE_TO_RECT_HASH"][Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["code"])(character)], makeRect(x * TILE_WIDTH, y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT), foreColor, backColor);
        });
        drawSection(image, _renderHelpers__WEBPACK_IMPORTED_MODULE_0__["CODE_TO_RECT_HASH"][Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["code"])('@')], makeRect(player.x, player.y, TILE_WIDTH, TILE_HEIGHT), blackIsh, blueIsh);
        ctx.drawImage(image, 0, 500);
        km.resetSteps();
        mm.reset();
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
}).catch(function (err) { return console.log(err); }); //eslint-disable-line no-console


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
var Grid = /** @class */ (function () {
    function Grid(width, height) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.cells.length = width * height;
    }
    /**
     * Primarily used for initialization of the grid, overwrites previous entries based on the current entry, don't use this unless entries are independent from each other
     * @param fn this function takes the cell itself as the first property and
     */
    Grid.prototype.setEach = function (fn) {
        var x = 0, y = 0;
        for (var i = 0; i < this.cells.length; i++) {
            x = i % this.width;
            y = (i - x) / this.width;
            this.cells[i] = fn(this.cells[i], i, x, y);
        }
    };
    // TODO: structure this
    /**
     * Do something for each member of a cell, going row by row from left to right
     * @param fn Get passed the cell, index, x and y
     */
    Grid.prototype.forEach = function (fn) {
        var x = 0, y = 0;
        for (var i = 0; i < this.cells.length; i++) {
            x = i % this.width;
            y = (i - x) / this.width;
            fn(this.cells[i], i, x, y);
        }
    };
    /**
     * The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param x x coordinate of the grid
     * @param y
     */
    Grid.prototype.getXY = function (x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return undefined;
        }
        return this.cells[x + y * this.width];
    };
    /**
     * Convenience method for getXY. The grid starts at the top left, x increase to the right and y increases down, silently fails if out of bounds and just returns undefined
     * @param point contains the x and y coordinates of the cell you want to get
     */
    Grid.prototype.getP = function (point) {
        return this.getXY(point.x, point.y);
    };
    return Grid;
}());



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
var makeKeyState = function (key, isDown, halfSteps) {
    if (isDown === void 0) { isDown = false; }
    if (halfSteps === void 0) { halfSteps = 0; }
    return {
        key: key,
        isDown: isDown,
        halfSteps: halfSteps
    };
};
var KeyboardMonitor = /** @class */ (function () {
    function KeyboardMonitor() {
        this.keyHash = {};
    }
    // Attach to the DOM, usually the document as a whole, but you can make it more specific if you want
    KeyboardMonitor.prototype.attach = function (element) {
        var _this = this;
        element.addEventListener('keydown', function (event) {
            var key = event.key;
            if (!_this.keyHash[key]) {
                _this.keyHash[key] = makeKeyState(key, true);
            }
            var keyState = _this.keyHash[key];
            if (!keyState.isDown) {
                keyState.halfSteps++;
            }
            keyState.isDown = true;
        });
        element.addEventListener('keyup', function (event) {
            var key = event.key;
            if (!_this.keyHash[key]) {
                _this.keyHash[key] = makeKeyState(key);
            }
            var keyState = _this.keyHash[key];
            if (keyState.isDown) {
                keyState.halfSteps++;
            }
            keyState.isDown = false;
        });
        return this;
    };
    KeyboardMonitor.prototype.getKeyState = function (key) {
        if (!this.keyHash[key]) {
            this.keyHash[key] = makeKeyState(key);
        }
        return this.keyHash[key];
    };
    KeyboardMonitor.prototype.resetSteps = function () {
        var keys = Object.keys(this.keyHash);
        for (var i = 0; i < keys.length; i++) {
            this.keyHash[keys[i]].halfSteps = 0;
        }
    };
    return KeyboardMonitor;
}());



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

var MouseMonitor = /** @class */ (function () {
    function MouseMonitor() {
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
    MouseMonitor.prototype.attach = function (element) {
        var _this = this;
        // TODO: We'll register click history in the future, for now we are just doing mouse over at present
        var updatePosition = function (e) {
            var rect = e.target.getBoundingClientRect();
            _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].set(_this.position, e.clientX - rect.left, e.clientY - rect.top);
        };
        // mouse enters canvas
        element.addEventListener('mouseenter', function (e) {
            updatePosition(e);
            _this.inContainer = true;
            _this.hasMoved = true;
        });
        // mouse moves within the canvas
        element.addEventListener('mousemove', function (e) {
            updatePosition(e);
            _this.inContainer = true;
            _this.hasMoved = true;
        });
        // mouse exits the canvas
        element.addEventListener('mouseleave', function (e) {
            updatePosition(e);
            _this.inContainer = false;
            _this.hasMoved = true;
        });
        // mouse button is pressed
        element.addEventListener('mousedown', function (e) {
            // only pay attention to the primary button
            if (e.button != 0) {
                return;
            }
            var rect = e.target.getBoundingClientRect();
            var position = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(e.clientX - rect.left, e.clientY - rect.top);
            _this.halfClicks.push({ position: position, isDown: true });
        });
        // mouse button is raised
        element.addEventListener('mouseup', function (e) {
            // only pay attention to the primary button
            if (e.button != 0) {
                return;
            }
            var rect = e.target.getBoundingClientRect();
            var position = _shapes_point__WEBPACK_IMPORTED_MODULE_0__["Point"].make(e.clientX - rect.left, e.clientY - rect.top);
            _this.halfClicks.push({ position: position, isDown: false });
        });
        return this;
    };
    /**
     * this function is used to mark that we have processed all of the events since our last poll of state and it can be reset
     */
    MouseMonitor.prototype.reset = function () {
        // by default we haven't moved before
        this.hasMoved = false;
        // clear out the clicks
        this.halfClicks.length = 0;
    };
    return MouseMonitor;
}());



/***/ }),

/***/ "./client/src/renderHelpers.js":
/*!*************************************!*\
  !*** ./client/src/renderHelpers.js ***!
  \*************************************/
/*! exports provided: CODE_TO_RECT_HASH, CHARACTER_HELPER, code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_TO_RECT_HASH", function() { return CODE_TO_RECT_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER_HELPER", function() { return CHARACTER_HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
var makeRect = function (x, y, width, height) {
    return {
        x: x, y: y, width: width, height: height
    };
};
var code = function (char) { return char.charCodeAt(0); };
var CHARACTER_HELPER = {
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
var TILE_WIDTH = 10, TILE_HEIGHT = 10;
var CODE_TO_RECT_HASH = {};
var spaceCode = code(' ');
var atCode = code('@');
var aCode = code('a');
var zCode = code('z');
var ACode = code('A');
var ZCode = code('Z');
var ctrhHelper = function (code, x, y) {
    CODE_TO_RECT_HASH[code] = makeRect(x, y, TILE_WIDTH, TILE_HEIGHT);
};
// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = makeRect(0, 0, 10, 10);
CODE_TO_RECT_HASH[atCode] = makeRect(0, 10, 10, 10);
for (var i = ACode; i <= ZCode; i++) {
    CODE_TO_RECT_HASH[i] = makeRect((i - ACode) * 10, 30, TILE_WIDTH, TILE_HEIGHT);
}
for (var i = aCode; i <= zCode; i++) {
    CODE_TO_RECT_HASH[i] = makeRect((i - aCode) * 10, 40, TILE_WIDTH, TILE_HEIGHT);
}
// for brevities sake
var CH = CHARACTER_HELPER;
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
var make = function (x, y) {
    return { x: x, y: y };
};
/**
 * Returns a new point that is the result of adding both of them together, if you want to add a point TO another point, use addTo
 * @param a First Point, unmodified
 * @param b Second Point, unmodified
 */
var add = function (a, b) {
    return make(a.x + b.x, a.y + b.y);
};
/**
 * Add the value of Point a to Point b
 * @param a The point that changes, will have b added to it
 * @param b The point whose value is added to the other, it is unmodified itself
 */
var addTo = function (a, b) {
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
var set = function (point, x, y) {
    point.x = x;
    point.y = y;
    return point;
};
/**
 * A collection of functions meant to work with things that have the IPoint interface
 */
var Point = {
    make: make,
    add: add,
    addTo: addTo,
    set: set
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9ncmlkLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMva2V5Ym9hcmRNb25pdG9yLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvbW91c2VNb25pdG9yLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3NoYXBlcy9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUQ7QUFDTDtBQUNMO0FBQ2hCO0FBTTdCLHVDQUF1QztBQUN2QyxJQUFNLFFBQVEsR0FBRyxVQUFDLENBQUMs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QztJQUNYLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNYLE9BQU8sS0FBSztBQUNoQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxJQUFNLEtBQUssR0FBRztJQUNWLElBQUk7SUFDSixHQUFHO0lBQ0gsS0FBSztJQUNMLEdBQUc7Q0FDTjtBQUVxQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHtDT0RFX1RPX1JFQ1RfSEFTSCwgY29kZX0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJ1xuaW1wb3J0IHtLZXlib2FyZE1vbml0b3IgfSBmcm9tICcuL2tleWJvYXJkTW9uaXRvcidcbmltcG9ydCB7IE1vdXNlTW9uaXRvciB9IGZyb20gJy4vbW91c2VNb25pdG9yJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCdcblxuXG5cblxuXG4vLyBXZSdsbCBkZWZpbml0ZWx5IGJlIHJldXNpbmcgdGhpcyBvbmVcbmNvbnN0IG1ha2VSZWN0ID0gKHgseSx3aWR0aCxoZWlnaHQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksd2lkdGgsaGVpZ2h0XG4gICAgfVxufVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuY29uc3Qga20gPSBuZXcgS2V5Ym9hcmRNb25pdG9yKCkuYXR0YWNoKGRvY3VtZW50KVxuY29uc3QgbW0gPSBuZXcgTW91c2VNb25pdG9yKCkuYXR0YWNoKGNhbnZhcylcblxuLy8gbG9hZEltYWdlIHByb21pc2UgLy8gV2UnbGwgbW92ZSB0aGlzIG91dCBzb21ld2hlcmUgZWxzZSBsYXRlciwgYnV0IHRoaXMgaXMgYW4gaW1wb3J0YW50IHBsYXRmb3JtIGxheWVyIHBhcnRcbmZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gcmVzb2x2ZShpbWcpKVxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tICR7dXJsfWApKSlcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXdTZWN0aW9uKHRpbGVzaGVldCwgc3JjUmVjdCwgZGVzdFJlY3QsIGZvcmVDb2xvciwgYmFja0NvbG9yKXtcbiAgICBjdHguY2xlYXJSZWN0KGRlc3RSZWN0LngsIGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG4gICAgY3R4LmRyYXdJbWFnZSh0aWxlc2hlZXQsIHNyY1JlY3QueCwgc3JjUmVjdC55LCBzcmNSZWN0LndpZHRoLCBzcmNSZWN0LmhlaWdodCwgZGVzdFJlY3QueCwgZGVzdFJlY3QueSwgZGVzdFJlY3Qud2lkdGgsIGRlc3RSZWN0LmhlaWdodClcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3hvcidcbiAgICBjdHguZmlsbFN0eWxlPWZvcmVDb2xvclxuICAgIGN0eC5maWxsUmVjdChkZXN0UmVjdC54LGRlc3RSZWN0LnksIGRlc3RSZWN0LndpZHRoLCBkZXN0UmVjdC5oZWlnaHQpXG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInXG4gICAgY3R4LmZpbGxTdHlsZT1iYWNrQ29sb3JcbiAgICBjdHguZmlsbFJlY3QoZGVzdFJlY3QueCxkZXN0UmVjdC55LCBkZXN0UmVjdC53aWR0aCwgZGVzdFJlY3QuaGVpZ2h0KVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG59XG5cbi8vIHNpemluZ1xuY29uc3QgVElMRV9XSURUSCA9IDEwXG5jb25zdCBUSUxFX0hFSUdIVCA9IDEwXG5jb25zdCBUSUxFU19XSURFID0gODBcbmNvbnN0IFRJTEVTX0hJR0ggPSA2MFxuXG4vLyBjb2xvcnNcbmNvbnN0IGJsdWVJc2ggPSAnIzY2ODhDQydcbmNvbnN0IGJsYWNrSXNoID0gJyMyMjIyMjInXG5cbmNvbnN0IHBsYXllciA9IHtcbiAgICB4OjMwLFxuICAgIHk6NDBcbn1cblxubG9hZEltYWdlKCdhc3NldHMvb3V0LnBuZycpLnRoZW4oaW1hZ2UgPT4ge1xuICAgIC8vIEluaXRpYWxpemVcbiAgICAvLyBMZXQncyBjcmVhdGUgYSBncmlkIHRvIHJlbmRlclxuICAgIC8vIGFuZCBhIGdyaWQgb2YgdGlsZXMgYXMgd2VsbFxuICAgIC8vIHdlIGxvb2sgYXQgb3VyIGdyaWQgdGlsZXMgYW5kIHRoZW4gY3JlYXRlIGEgcmVuZGVyIGdyaWQgYmFzZWQgb2ZmIG9mIGl0P1xuICAgIC8vIG1pZ2h0IG5vdCBiZSB0aGUgd29yc3QgaWRlYSBldmVyIDpQXG4gICAgY29uc3QgcmVuZGVyR3JpZCA9IG5ldyBHcmlkKFRJTEVTX1dJREUsIFRJTEVTX0hJR0gpXG4gICAgLy8gVE9ETzogdHVybiB0aGlzIGludG8gYSB0eXBlXG4gICAgcmVuZGVyR3JpZC5zZXRFYWNoKChjZWxsLCBpbmRleCwgeCwgeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBjaGFyYWN0ZXI6JyAnLCBcbiAgICAgICAgICAgIGZvcmVDb2xvcjpibHVlSXNoLCBcbiAgICAgICAgICAgIGJhY2tDb2xvcjpibGFja0lzaFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xuICAgICAgICByZW5kZXJHcmlkLmdldFhZKGkgLDEwKS5jaGFyYWN0ZXIgPSAnWCdcbiAgICB9XG4gICAgXG4gICAgXG5cbiAgICAvLyBMb29wXG4gICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgICAgICAvLyBMb29rIGF0IHBsYXllciBpbnB1dFxuICAgICAgICAvLyBaIGxldHMgdXMgYmUgaW4gWk9PTSBNT0RFISEhIVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dMZWZ0JykuaGFsZlN0ZXBzID4gMCB8fCBrbS5nZXRLZXlTdGF0ZSgneicpLmlzRG93bikpe1xuICAgICAgICAgICAgcGxheWVyLnggLT0gMTBcbiAgICAgICAgfVxuICAgICAgICBpZihrbS5nZXRLZXlTdGF0ZSgnQXJyb3dSaWdodCcpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93UmlnaHQnKS5oYWxmU3RlcHMgPiAwIHx8IGttLmdldEtleVN0YXRlKCd6JykuaXNEb3duKSl7XG4gICAgICAgICAgICBwbGF5ZXIueCArPSAxMFxuICAgICAgICB9XG4gICAgICAgIGlmKGttLmdldEtleVN0YXRlKCdBcnJvd1VwJykuaXNEb3duICYmIChrbS5nZXRLZXlTdGF0ZSgnQXJyb3dVcCcpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgICAgIHBsYXllci55IC09IDEwXG4gICAgICAgIH1cbiAgICAgICAgaWYoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmlzRG93biAmJiAoa20uZ2V0S2V5U3RhdGUoJ0Fycm93RG93bicpLmhhbGZTdGVwcyA+IDAgfHwga20uZ2V0S2V5U3RhdGUoJ3onKS5pc0Rvd24pKXtcbiAgICAgICAgICAgIHBsYXllci55ICs9IDEwXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUSElTIFRZUEUgTUlHSFQgQ0hBTkdFIFNVQlNUQU5USUFMTFkgSU4gVEhFIEZVVFVSRVxuXG4gICAgICAgIC8vIERSQVcgVEhFIFJFTkRFUiBHUklEXG4gICAgICAgIHJlbmRlckdyaWQuZm9yRWFjaCgoY2VsbCwgaW5kZXgsIHgsIHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hhcmFjdGVyLCBmb3JlQ29sb3IsIGJhY2tDb2xvcn0gPSBjZWxsXG4gICAgICAgICAgICAvLyBUT0RPOiBXRSBXSUxMIEJFIFRIUkFTSElORyBUSEUgR0FSQkFHRSBDT0xMRUNUT1IgSUYgV0UgQVJFIENPTlNUQU5UTFkgTUFLSU5HIFJFQ1RTIExJS0UgVEhJUywgRklYIFRIQVRcbiAgICAgICAgICAgIGRyYXdTZWN0aW9uKGltYWdlLCBDT0RFX1RPX1JFQ1RfSEFTSFtjb2RlKGNoYXJhY3RlcildLCBtYWtlUmVjdCh4ICogVElMRV9XSURUSCx5ICogVElMRV9IRUlHSFQsIFRJTEVfV0lEVEgsIFRJTEVfSEVJR0hUKSwgZm9yZUNvbG9yLCBiYWNrQ29sb3IpXG4gICAgICAgIH0pXG4gIFxuICAgICAgICBkcmF3U2VjdGlvbihpbWFnZSwgQ09ERV9UT19SRUNUX0hBU0hbY29kZSgnQCcpXSwgbWFrZVJlY3QocGxheWVyLngsIHBsYXllci55LCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVCksIGJsYWNrSXNoLCBibHVlSXNoKVxuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDUwMClcbiAgICAgICAga20ucmVzZXRTdGVwcygpXG4gICAgICAgIG1tLnJlc2V0KClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG5cblxuXG59KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSkgLy9lc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGUiLCJpbXBvcnQgeyBJUG9pbnQgfSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuaW50ZXJmYWNlIFNldEVhY2hGbiB7XG4gICAgKGNlbGw/OiBhbnksIGluZGV4PzogbnVtYmVyLCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogYW55O1xufVxuXG5pbnRlcmZhY2UgRm9yRWFjaEZuIHtcbiAgICAoY2VsbD86IGFueSwgaW5kZXg/OiBudW1iZXIsIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiB2b2lkO1xufVxuXG4vLyBUT0RPOiBGSUdVUkUgT1VUIEhPVyBUTyBDUkVBVEUgQSBHRU5FUklDIFRZUEUgRk9SIFRISVMsIENBVVNFIFRZUEVTIFdPVUxEIFBST0JBQkxZIEJFIEdPT0QgRk9SIFRISVNcblxuLyoqXG4gKiBHcmlkIHRvIHJlcHJlc2VudCAyZCBjb2xsZWN0aW9ucywgcGxlYXNlIGRvbid0IHJlc2l6ZSBpdCBhZnRlciBjcmVhdGluZyBpdFxuICovXG5jbGFzcyBHcmlkIHtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGNlbGxzOiBhbnlbXTtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNlbGxzID0gW11cbiAgICAgICAgdGhpcy5jZWxscy5sZW5ndGggPSB3aWR0aCAqIGhlaWdodFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSB1c2VkIGZvciBpbml0aWFsaXphdGlvbiBvZiB0aGUgZ3JpZCwgb3ZlcndyaXRlcyBwcmV2aW91cyBlbnRyaWVzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGVudHJ5LCBkb24ndCB1c2UgdGhpcyB1bmxlc3MgZW50cmllcyBhcmUgaW5kZXBlbmRlbnQgZnJvbSBlYWNoIG90aGVyXG4gICAgICogQHBhcmFtIGZuIHRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGNlbGwgaXRzZWxmIGFzIHRoZSBmaXJzdCBwcm9wZXJ0eSBhbmQgXG4gICAgICovXG4gICAgc2V0RWFjaChmbjogU2V0RWFjaEZuKTogYW55e1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgdGhpcy5jZWxsc1tpXSA9IGZuKHRoaXMuY2VsbHNbaV0sIGksIHggLCB5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogc3RydWN0dXJlIHRoaXNcbiAgICAvKipcbiAgICAgKiBEbyBzb21ldGhpbmcgZm9yIGVhY2ggbWVtYmVyIG9mIGEgY2VsbCwgZ29pbmcgcm93IGJ5IHJvdyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZm4gR2V0IHBhc3NlZCB0aGUgY2VsbCwgaW5kZXgsIHggYW5kIHlcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuOiBGb3JFYWNoRm4pOiB2b2lke1xuICAgICAgICBsZXQgeCA9IDAsIHkgPSAwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHggPSBpICUgdGhpcy53aWR0aFxuICAgICAgICAgICAgeSA9IChpIC0geCkvdGhpcy53aWR0aFxuICAgICAgICAgICAgZm4odGhpcy5jZWxsc1tpXSwgaSwgeCAsIHkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzdGFydHMgYXQgdGhlIHRvcCBsZWZ0LCB4IGluY3JlYXNlIHRvIHRoZSByaWdodCBhbmQgeSBpbmNyZWFzZXMgZG93biwgc2lsZW50bHkgZmFpbHMgaWYgb3V0IG9mIGJvdW5kcyBhbmQganVzdCByZXR1cm5zIHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB4IHggY29vcmRpbmF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqL1xuICAgIGdldFhZKHg6IG51bWJlciwgeTogbnVtYmVyKTogYW55IHtcbiAgICAgICAgaWYoeCA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPCAwIHx8IHkgPj0gdGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNlbGxzW3ggKyB5ICogdGhpcy53aWR0aF1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBnZXRYWS4gVGhlIGdyaWQgc3RhcnRzIGF0IHRoZSB0b3AgbGVmdCwgeCBpbmNyZWFzZSB0byB0aGUgcmlnaHQgYW5kIHkgaW5jcmVhc2VzIGRvd24sIHNpbGVudGx5IGZhaWxzIGlmIG91dCBvZiBib3VuZHMgYW5kIGp1c3QgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0gcG9pbnQgY29udGFpbnMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbGwgeW91IHdhbnQgdG8gZ2V0XG4gICAgICovXG4gICAgZ2V0UChwb2ludDogSVBvaW50KTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WFkocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQgfSIsImludGVyZmFjZSBLZXlTdGF0ZSB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIGlzRG93bjogYm9vbGVhbjtcbiAgICBoYWxmU3RlcHM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEhhc2g8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbmNvbnN0IG1ha2VLZXlTdGF0ZSA9IChrZXk6IHN0cmluZywgaXNEb3duOiBib29sZWFuID0gZmFsc2UsIGhhbGZTdGVwczogbnVtYmVyID0gMCk6IEtleVN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXksXG4gICAgICAgIGlzRG93bixcbiAgICAgICAgaGFsZlN0ZXBzXG4gICAgfVxufVxuXG5jbGFzcyBLZXlib2FyZE1vbml0b3Ige1xuICAgIGtleUhhc2g6IEhhc2g8S2V5U3RhdGU+O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMua2V5SGFzaCA9IHt9XG4gICAgfVxuICAgIC8vIEF0dGFjaCB0byB0aGUgRE9NLCB1c3VhbGx5IHRoZSBkb2N1bWVudCBhcyBhIHdob2xlLCBidXQgeW91IGNhbiBtYWtlIGl0IG1vcmUgc3BlY2lmaWMgaWYgeW91IHdhbnRcbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogS2V5Ym9hcmRNb25pdG9yIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIYXNoW2tleV0gPSBtYWtlS2V5U3RhdGUoa2V5LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0aGlzLmtleUhhc2hba2V5XVxuICAgICAgICAgICAgaWYoIWtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50XG4gICAgICAgICAgICBpZighdGhpcy5rZXlIYXNoW2tleV0pe1xuICAgICAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXldID0gbWFrZUtleVN0YXRlKGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXRlID0gdGhpcy5rZXlIYXNoW2tleV1cbiAgICAgICAgICAgIGlmKGtleVN0YXRlLmlzRG93bil7XG4gICAgICAgICAgICAgICAga2V5U3RhdGUuaGFsZlN0ZXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0YXRlLmlzRG93biA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGdldEtleVN0YXRlKGtleTogc3RyaW5nKTogS2V5U3RhdGV7XG4gICAgICAgIGlmKCF0aGlzLmtleUhhc2hba2V5XSl7XG4gICAgICAgICAgICB0aGlzLmtleUhhc2hba2V5XSA9IG1ha2VLZXlTdGF0ZShrZXkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5SGFzaFtrZXldXG4gICAgfVxuICAgIHJlc2V0U3RlcHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleUhhc2gpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMua2V5SGFzaFtrZXlzW2ldXS5oYWxmU3RlcHMgPSAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHsgS2V5Ym9hcmRNb25pdG9yIH0iLCIvLyBMZXQncyBnbyBhaGVhZCBhbmQgY3JlYXRlIHRoZSBQb2ludCBpbnRlcmZhY2UgaGVyZSwgd2UnbGwgZXhwb3J0IGl0IGZvciB1c2UgbGF0ZXIgaW4gdGhlIHByb2plY3RcblxuaW1wb3J0IHtJUG9pbnQsIFBvaW50fSBmcm9tICcuL3NoYXBlcy9wb2ludCdcblxuLyoqXG4gKiBDbGFzcyB0byBoZWxwIG1vbml0b3IgdGhpbmdzIHRoYXQgaGF2ZSBoYXBwZW5lZCB0byB0aGUgbW91c2Ugc2luY2UgbGFzdCB0aW1lIHRoYXQgd2UgbG9va2VkXG4gKi9cblxuaW50ZXJmYWNlIEhhbGZDbGljayB7XG4gICAgcG9zaXRpb246IElQb2ludDtcbiAgICBpc0Rvd246IGJvb2xlYW47XG59XG5cbmNsYXNzIE1vdXNlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvdmVyIHRoZSBhdHRhY2hlZCBlbGVtbnRcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogSVBvaW50O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3VzZSBoYXMgbW92ZWQgc2luY2UgbGFzdCB0aW1lIHdlIGxvb2tlZFxuICAgICAqL1xuICAgIGhhc01vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRydWUgaWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBpbnNpZGUgdGhlIGNvbnRhaW5lciBcbiAgICAgKi9cbiAgICBpbkNvbnRhaW5lcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIGlzIHRoZSBtb3VzZSBidXR0b24gZG93biAoY3VycmVudGx5IG9ubHkgdHJhY2tzIGxlZnQpXG4gICAgICovXG4gICAgaXNEb3duOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgYSBmdWxsIGNsaWNrIGlzIHVwIGFuZCBkb3duLCB0aGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1cHMgYW5kIGRvd25zLCB1c2VmdWwgZm9yIGRyYWdzIG9yIG90aGVyIHRoaW5ncyB0aGF0IG1pZ2h0IGhhdmUgaGFwcGVuZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICovXG4gICAgaGFsZkNsaWNrczogSGFsZkNsaWNrW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50Lm1ha2UoMCwwKVxuICAgICAgICB0aGlzLmhhc01vdmVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICAgICAgdGhpcy5oYWxmQ2xpY2tzID0gW11cbiAgICAgICAgLy8gVE9ETzogQWRkIGNsaWNrIHRyYWNraW5nLCBkZXBlbmRzIG9uIGhvdyBxdWlja2x5IHdlIGFyZSBwb2xsaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudCB5b3Ugd2FudCB0byBtb25pdG9yIG1vdXNlIHJlbGF0ZWQgZXZlbnRzIHRvXG4gICAgICogQHBhcmFtIGVsZW1lbnQgdGhlIHBhcnRpY3VsYXIgbW91c2UgZXZlbnRcbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudDogYW55KTogTW91c2VNb25pdG9yIHtcbiAgICAgICAgLy8gVE9ETzogV2UnbGwgcmVnaXN0ZXIgY2xpY2sgaGlzdG9yeSBpbiB0aGUgZnV0dXJlLCBmb3Igbm93IHdlIGFyZSBqdXN0IGRvaW5nIG1vdXNlIG92ZXIgYXQgcHJlc2VudFxuICAgICAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgUG9pbnQuc2V0KHRoaXMucG9zaXRpb24sIGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZW50ZXJzIGNhbnZhc1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbihlKVxuICAgICAgICAgICAgdGhpcy5pbkNvbnRhaW5lciA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIG1vdmVzIHdpdGhpbiB0aGUgY2FudmFzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmhhc01vdmVkID0gdHJ1ZVxuXG4gICAgICAgIH0pXG4gICAgICAgIC8vIG1vdXNlIGV4aXRzIHRoZSBjYW52YXNcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb24oZSlcbiAgICAgICAgICAgIHRoaXMuaW5Db250YWluZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbW91c2UgYnV0dG9uIGlzIHJhaXNlZFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IHBheSBhdHRlbnRpb24gdG8gdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICAgICAgICBpZihlLmJ1dHRvbiAhPSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5tYWtlKGUuY2xpZW50WCAtIHJlY3QubGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3ApXG4gICAgICAgICAgICB0aGlzLmhhbGZDbGlja3MucHVzaCh7IHBvc2l0aW9uLCBpc0Rvd246IGZhbHNlIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gbWFyayB0aGF0IHdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgZXZlbnRzIHNpbmNlIG91ciBsYXN0IHBvbGwgb2Ygc3RhdGUgYW5kIGl0IGNhbiBiZSByZXNldFxuICAgICAqL1xuICAgIHJlc2V0KCk6IHZvaWR7XG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgaGF2ZW4ndCBtb3ZlZCBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlXG4gICAgICAgIC8vIGNsZWFyIG91dCB0aGUgY2xpY2tzXG4gICAgICAgIHRoaXMuaGFsZkNsaWNrcy5sZW5ndGggPSAwXG4gICAgfVxufVxuXG5leHBvcnQgeyBNb3VzZU1vbml0b3IgfSIsImNvbnN0IG1ha2VSZWN0ID0gKHgseSx3aWR0aCxoZWlnaHQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LHksd2lkdGgsaGVpZ2h0XG4gICAgfVxufVxuY29uc3QgY29kZSA9IGNoYXIgPT4gY2hhci5jaGFyQ29kZUF0KDApXG5jb25zdCBDSEFSQUNURVJfSEVMUEVSID0ge1xuICAgIFZFUlRJQ0FMX0xJTkU6ICfilIInLFxuICAgIEhPUklaT05UQUxfTElORTogJ+KUgCcsXG4gICAgQ1JPU1NfTElORVM6ICfilLwnLFxuICAgIFRfTEVGVDogJ+KUpCcsXG4gICAgVF9VUDogJ+KUtCcsXG4gICAgVF9SSUdIVDogJ+KUnCcsXG4gICAgVF9ET1dOOiAn4pSsJyxcbiAgICBUT1BfUklHSFQ6ICfilJQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ+KUjCcsXG4gICAgQk9UVE9MX0xFRlQ6ICfilJAnLFxuICAgIFRPUF9MRUZUOiAn4pSYJ1xufVxuXG5jb25zdCBUSUxFX1dJRFRIID0gMTAsIFRJTEVfSEVJR0hUID0gMTBcblxuY29uc3QgQ09ERV9UT19SRUNUX0hBU0ggPSB7fVxuY29uc3Qgc3BhY2VDb2RlID0gICBjb2RlKCcgJylcbmNvbnN0IGF0Q29kZSA9ICAgICAgY29kZSgnQCcpXG5jb25zdCBhQ29kZSA9ICAgICAgIGNvZGUoJ2EnKVxuY29uc3QgekNvZGUgPSAgICAgICBjb2RlKCd6JylcbmNvbnN0IEFDb2RlID0gICAgICAgY29kZSgnQScpXG5jb25zdCBaQ29kZSA9ICAgICAgIGNvZGUoJ1onKVxuXG5cbmNvbnN0IGN0cmhIZWxwZXIgPSAoY29kZSwgeCwgeSkgPT4ge1xuICAgIENPREVfVE9fUkVDVF9IQVNIW2NvZGVdID0gbWFrZVJlY3QoeCx5LCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cblxuLy8gV2Ugd2lsbCBmaWxsIGluIHRoZSBvdGhlciBjaGFyYWN0ZXJzIGFzIG5lY2Vzc2FyeVxuQ09ERV9UT19SRUNUX0hBU0hbc3BhY2VDb2RlXSA9IG1ha2VSZWN0KDAsIDAsIDEwLCAxMClcbkNPREVfVE9fUkVDVF9IQVNIW2F0Q29kZV0gPSBtYWtlUmVjdCgwLCAxMCwgMTAsIDEwKVxuZm9yKGxldCBpID0gQUNvZGU7IGkgPD0gWkNvZGU7IGkrKyl7XG4gICAgQ09ERV9UT19SRUNUX0hBU0hbaV0gPSBtYWtlUmVjdCgoaSAtIEFDb2RlKSAqIDEwLCAzMCwgVElMRV9XSURUSCwgVElMRV9IRUlHSFQpXG59XG5mb3IobGV0IGkgPSBhQ29kZTsgaSA8PSB6Q29kZTsgaSsrKXtcbiAgICBDT0RFX1RPX1JFQ1RfSEFTSFtpXSA9IG1ha2VSZWN0KChpIC0gYUNvZGUpICogMTAsIDQwLCBUSUxFX1dJRFRILCBUSUxFX0hFSUdIVClcbn1cbi8vIGZvciBicmV2aXRpZXMgc2FrZVxuY29uc3QgQ0ggPSBDSEFSQUNURVJfSEVMUEVSXG5jdHJoSGVscGVyKGNvZGUoQ0guVkVSVElDQUxfTElORSksIDE0MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5IT1JJWk9OVEFMX0xJTkUpLCAxNTAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guQ1JPU1NfTElORVMpLCAxNjAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9MRUZUKSwgMTcwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILlRfVVApLCAxODAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVF9SSUdIVCksIDE5MCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UX0RPV04pLCAyMDAsMTApXG5jdHJoSGVscGVyKGNvZGUoQ0guVE9QX1JJR0hUKSwgMjEwLDEwKVxuY3RyaEhlbHBlcihjb2RlKENILkJPVFRPTV9SSUdIVCksIDIyMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5CT1RUT0xfTEVGVCksIDIzMCwxMClcbmN0cmhIZWxwZXIoY29kZShDSC5UT1BfTEVGVCksIDI0MCwxMClcblxuXG5cblxuZXhwb3J0ICB7IENPREVfVE9fUkVDVF9IQVNILCBDSEFSQUNURVJfSEVMUEVSLCBjb2RlIH0iLCIvKipcbiAqIEludGVyZmFjZSBmb3Igd29ya2luZyB3aXRoIGEgMkQgUG9pbnRcbiAqL1xuaW50ZXJmYWNlIElQb2ludCB7ICBcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBQb2ludFxuICogQHBhcmFtIHggXG4gKiBAcGFyYW0geSBcbiAqL1xuY29uc3QgbWFrZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIHt4LHl9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBwb2ludCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYWRkaW5nIGJvdGggb2YgdGhlbSB0b2dldGhlciwgaWYgeW91IHdhbnQgdG8gYWRkIGEgcG9pbnQgVE8gYW5vdGhlciBwb2ludCwgdXNlIGFkZFRvXG4gKiBAcGFyYW0gYSBGaXJzdCBQb2ludCwgdW5tb2RpZmllZFxuICogQHBhcmFtIGIgU2Vjb25kIFBvaW50LCB1bm1vZGlmaWVkXG4gKi9cbmNvbnN0IGFkZCA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgcmV0dXJuIG1ha2UoYS54ICsgYi54LCBhLnkgKyBiLnkpXG59XG5cbi8qKlxuICogQWRkIHRoZSB2YWx1ZSBvZiBQb2ludCBhIHRvIFBvaW50IGJcbiAqIEBwYXJhbSBhIFRoZSBwb2ludCB0aGF0IGNoYW5nZXMsIHdpbGwgaGF2ZSBiIGFkZGVkIHRvIGl0XG4gKiBAcGFyYW0gYiBUaGUgcG9pbnQgd2hvc2UgdmFsdWUgaXMgYWRkZWQgdG8gdGhlIG90aGVyLCBpdCBpcyB1bm1vZGlmaWVkIGl0c2VsZlxuICovXG5jb25zdCBhZGRUbyA9IChhOiBJUG9pbnQsIGI6IElQb2ludCk6IElQb2ludCA9PiB7XG4gICAgYS54ICs9IGIueFxuICAgIGEueSArPSBiLnlcbiAgICByZXR1cm4gYVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWVzIG9mIGEgcG9pbnQgd2l0aCB4IGFuZCB5IHZhbHVlcywgcmV0dXJucyB0aGUgbm93IG1vZGlmaWVkIHBvaW50XG4gKiBAcGFyYW0gcG9pbnQgcG9pbnQgdG8gYmUgbW9kaWZpZWRcbiAqIEBwYXJhbSB4IG5ldyB4IHZhbHVlXG4gKiBAcGFyYW0geSBuZXcgeSB2YWx1ZVxuICovXG5jb25zdCBzZXQgPSAocG9pbnQ6IElQb2ludCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBJUG9pbnQgPT4ge1xuICAgIHBvaW50LnggPSB4XG4gICAgcG9pbnQueSA9IHlcbiAgICByZXR1cm4gcG9pbnRcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIG1lYW50IHRvIHdvcmsgd2l0aCB0aGluZ3MgdGhhdCBoYXZlIHRoZSBJUG9pbnQgaW50ZXJmYWNlXG4gKi9cbmNvbnN0IFBvaW50ID0ge1xuICAgIG1ha2UsXG4gICAgYWRkLFxuICAgIGFkZFRvLFxuICAgIHNldFxufVxuXG5leHBvcnQge0lQb2ludCwgUG9pbnR9Il0sInNvdXJjZVJvb3QiOiIifQ==