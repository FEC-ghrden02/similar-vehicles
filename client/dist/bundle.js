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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/babel-preset-react/lib/index.js\\n    at createDescriptor (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-descriptors.js:178:11)\\n    at /Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-descriptors.js:109:50\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPresetDescriptors (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)\\n    at /Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-descriptors.js:58:104\\n    at cachedFunction (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/caching.js:62:27)\\n    at cachedFunction.next (<anonymous>)\\n    at evaluateSync (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/gensync/index.js:244:28)\\n    at sync (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/gensync/index.js:84:14)\\n    at presets (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-descriptors.js:29:84)\\n    at mergeChainOpts (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-chain.js:320:26)\\n    at /Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-chain.js:283:7\\n    at Generator.next (<anonymous>)\\n    at buildRootChain (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/config-chain.js:68:36)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/partial.js:95:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at loadFullConfig (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/config/full.js:57:46)\\n    at loadFullConfig.next (<anonymous>)\\n    at Function.transform (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/transform.js:25:45)\\n    at transform.next (<anonymous>)\\n    at evaluateSync (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/gensync/index.js:84:14)\\n    at Object.transform (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/@babel/core/lib/transform.js:36:54)\\n    at transpile (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/babel-loader/lib/index.js:46:20)\\n    at Object.module.exports (/Users/liz.anayaramos/Documents/similar_vehicles_fec/node_modules/babel-loader/lib/index.js:163:20)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);