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
/* harmony import */ var _keyboardMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardMonitor */ "./client/src/keyboardMonitor.js");



const km = new _keyboardMonitor__WEBPACK_IMPORTED_MODULE_1__["KeyboardMonitor"]().attach(document)

// We'll definitely be reusing this one
const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// loadImage promise // We'll move this out somewhere else later, but this is an important platform layer part
function loadImage(url){
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject(new Error(`Failed to load image from ${url}`)))
        img.src = url
    })
}
// sizing
const TILE_WIDTH = 10
const TILE_HEIGHT = 10

// colors
const blueIsh = '#6688CC'
const blackIsh = '#222222'

const player = {
    x:30,
    y:40
}

loadImage('assets/out.png').then(image => {
    const loop = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillStyle = blackIsh
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // Process and render
        drawSection(image, makeRect(0, 10, TILE_WIDTH, TILE_HEIGHT), makeRect(20, 20, TILE_WIDTH, TILE_HEIGHT), '#6688CC', '#222222')
        const myText = 'Something wicked this way comes  @   maybe it is me'
        
        drawSection(image, _renderHelpers__WEBPACK_IMPORTED_MODULE_0__["CODE_TO_RECT_HASH"][Object(_renderHelpers__WEBPACK_IMPORTED_MODULE_0__["code"])('@')], makeRect(player.x, player.y, TILE_WIDTH, TILE_HEIGHT), blackIsh, blueIsh)

        if(km.getKeyState('ArrowLeft').isDown && (km.getKeyState('ArrowLeft').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.x -= 10
        }
        if(km.getKeyState('ArrowRight').isDown && (km.getKeyState('ArrowRight').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.x += 10
        }
        if(km.getKeyState('ArrowUp').isDown && (km.getKeyState('ArrowUp').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.y -= 10
        }
        if(km.getKeyState('ArrowDown').isDown && (km.getKeyState('ArrowDown').halfSteps > 0 || km.getKeyState('z').isDown)){
            player.y += 10
        }
        for(var i = 0; i < myText.length; i++){
            const src = _renderHelpers__WEBPACK_IMPORTED_MODULE_0__["CODE_TO_RECT_HASH"][myText.charCodeAt(i)]
            const dest = makeRect(20 + i * 10, 20, TILE_WIDTH, TILE_HEIGHT)
            drawSection(image, src, dest, blueIsh, blackIsh)
        }
        ctx.drawImage(image, 0, 500)
        km.resetSteps()
        window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)



}).catch(err => console.log(err)) //eslint-disable-line no-console

// This would be good for a console renderer type thing in the platform later, especially with all the modifications that would happen eventually
function drawSection(tilesheet, srcRect, destRect, foreColor, backColor){
    ctx.clearRect(destRect.x, destRect.y, destRect.width, destRect.height)
    ctx.drawImage(tilesheet, srcRect.x, srcRect.y, srcRect.width, srcRect.height, destRect.x, destRect.y, destRect.width, destRect.height)
    ctx.globalCompositeOperation = 'xor'
    ctx.fillStyle=foreColor
    ctx.fillRect(destRect.x,destRect.y, destRect.width, destRect.height)

    ctx.globalCompositeOperation = 'destination-over'
    ctx.fillStyle=backColor
    ctx.fillRect(destRect.x,destRect.y, destRect.width, destRect.height)
    ctx.globalCompositeOperation = 'source-over'
}
// what keys has the player pressed since last time

// What Mouse Presses have happened since last time

/***/ }),

/***/ "./client/src/keyboardMonitor.js":
/*!***************************************!*\
  !*** ./client/src/keyboardMonitor.js ***!
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
    }
}

class KeyboardMonitor {
    constructor(){
        this.keyHash = {}
    }
    attach(element){
        // lets add event listeners
        element.addEventListener('keydown', event => {
            const {key} = event
            if(!this.keyHash[key]){
                this.keyHash[key] = makeKeyState(key, true)
            }
            const keyState = this.keyHash[key]
            if(!keyState.isDown){
                keyState.halfSteps++
            }
            keyState.isDown = true
        })
        element.addEventListener('keyup', event => {
            const {key} = event
            if(!this.keyHash[key]){
                this.keyHash[key] = makeKeyState(key)
            }
            const keyState = this.keyHash[key]
            if(keyState.isDown){
                keyState.halfSteps++
            }
            keyState.isDown = false
        })
        return this
    }
    getKeyState(key){
        if(!this.keyHash[key]){
            this.keyHash[key] = makeKeyState(key)
        }
        return this.keyHash[key]
    }
    resetSteps(){
        const keys = Object.keys(this.keyHash)
        for(var i = 0; i < keys.length; i++){
            this.keyHash[keys[i]].halfSteps = 0
        }
    }
}

// test case
// eslint-disable-next-line no-unused-vars
// const km = new KeyboardMonitor().attach(document)
// setInterval(() => {
//     const {key, halfSteps, isDown } = km.getKeyState('q')
//     // eslint-disable-next-line no-console
//     console.log(`You have half-pressed '${key}' ${halfSteps} times, '${key}' is currently ${isDown ? 'pressed' : 'released'} `)

//     km.resetSteps()
// },1000)





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
const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}
const code = char => char.charCodeAt(0)
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
}

const TILE_WIDTH = 10, TILE_HEIGHT = 10

const CODE_TO_RECT_HASH = {}
const spaceCode =   code(' ')
const atCode =      code('@')
const aCode =       code('a')
const zCode =       code('z')
const ACode =       code('A')
const ZCode =       code('Z')


const ctrhHelper = (code, x, y) => {
    CODE_TO_RECT_HASH[code] = makeRect(x,y, TILE_WIDTH, TILE_HEIGHT)
}

// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = makeRect(0, 0, 10, 10)
CODE_TO_RECT_HASH[atCode] = makeRect(0, 10, 10, 10)
for(let i = ACode; i <= ZCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - ACode) * 10, 30, TILE_WIDTH, TILE_HEIGHT)
}
for(let i = aCode; i <= zCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - aCode) * 10, 40, TILE_WIDTH, TILE_HEIGHT)
}
// for brevities sake
const CH = CHARACTER_HELPER
ctrhHelper(code(CH.VERTICAL_LINE), 140,10)
ctrhHelper(code(CH.HORIZONTAL_LINE), 150,10)
ctrhHelper(code(CH.CROSS_LINES), 160,10)
ctrhHelper(code(CH.T_LEFT), 170,10)
ctrhHelper(code(CH.T_UP), 180,10)
ctrhHelper(code(CH.T_RIGHT), 190,10)
ctrhHelper(code(CH.T_DOWN), 200,10)
ctrhHelper(code(CH.TOP_RIGHT), 210,10)
ctrhHelper(code(CH.BOTTOM_RIGHT), 220,10)
ctrhHelper(code(CH.BOTTOL_LEFT), 230,10)
ctrhHelper(code(CH.TOP_LEFT), 240,10)






/***/ })

/******/ });