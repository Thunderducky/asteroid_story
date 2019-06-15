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
/*! no static exports found */
/***/ (function(module, exports) {

// We'll definitely be reusing this one
const makeRect = (x,y,width,height) => {
    return {
        x,y,width,height
    }
}
// We'll move this out into a different file
const CODE_TO_RECT_HASH = {}
const spaceCode = ' '.charCodeAt(0)
const atCode = '@'.charCodeAt(0)
const aCode = 'a'.charCodeAt(0)
const zCode = 'z'.charCodeAt(0)
const ACode = 'A'.charCodeAt(0)
const ZCode = 'Z'.charCodeAt(0)

// We will fill in the other characters as necessary
CODE_TO_RECT_HASH[spaceCode] = makeRect(0, 0, 10, 10)
CODE_TO_RECT_HASH[atCode] = makeRect(0, 10, 10, 10)
for(let i = ACode; i <= ZCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - ACode) * 10, 30, 10, 10)
}
for(let i = aCode; i <= zCode; i++){
    CODE_TO_RECT_HASH[i] = makeRect((i - aCode) * 10, 40, 10, 10)
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

loadImage('assets/out.png').then(image => {
    ctx.drawImage(image, 0, 500)
    drawSection(image, makeRect(0, 10, 10, 10), makeRect(20, 20, 10, 10), '#6688CC', '#222222')
    const myText = 'Something wicked this way comes  @   maybe it is me'
    for(var i = 0; i < myText.length; i++){
        const src = CODE_TO_RECT_HASH[myText.charCodeAt(i)]
        const dest = makeRect(20 + i * 10, 20, 10, 10)
        drawSection(image, src, dest, '#6688CC', '#222222')
    }

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
}

/***/ })

/******/ });