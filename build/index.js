(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js ***!
  \************************************************************************/
/*! exports provided: SortableContainer, sortableContainer, SortableElement, sortableElement, SortableHandle, sortableHandle, arrayMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return arrayMove; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
















var Manager = function () {
  function Manager() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Manager);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "refs", {});
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  if (true) {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }

  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant__WEBPACK_IMPORTED_MODULE_13___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant__WEBPACK_IMPORTED_MODULE_13___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

  var _offsets = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1];

  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__["default"])(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableHandle, _React$Component);

    function WithSortableHandle() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableHandle);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableHandle).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, this.props));
      }
    }]);

    return WithSortableHandle;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }

      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;

      var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;

      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }

      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;

          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);

  return AutoScroller;
}();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf(['x', 'y', 'xy']),
  contentWindow: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any,
  disableAutoscroll: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  distance: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  getHelperDimensions: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  helperClass: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  helperContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, typeof HTMLElement === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(HTMLElement)]),
  hideSortableGhost: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  keyboardSortingTransitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  lockAxis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  lockOffset: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]))]),
  lockToContainerEdges: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  onSortEnd: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortMove: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortOver: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  pressDelay: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  pressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  keyCodes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    lift: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    drop: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    cancel: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    up: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    down: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number)
  }),
  shouldCancelStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  updateBeforeSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  useDragHandle: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  useWindowAsScrollContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableContainer, _React$Component);

    function WithSortableContainer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableContainer);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableContainer).call(this, props));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {});

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;

        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }

        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection,
              disabled = _node$sortableInfo.disabled;

          if (disabled) {
            return;
          }

          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }

          _this.manager.active = {
            collection: collection,
            index: index
          };

          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;

        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;

          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleEnd", function () {
        _this.touched = false;

        _this.cancel();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;

        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }

          _this.manager.active = null;
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();

          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);

                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });

                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);

                if (_isKeySorting) {
                  _this.initialOffset = getPosition(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }

                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });

                if (_isKeySorting) {
                  _this.helper.focus();
                }

                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }

                _this.minTranslate = {};
                _this.maxTranslate = {};

                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect,
                      containerTop = _ref.top,
                      containerLeft = _ref.left,
                      containerWidth = _ref.width,
                      containerHeight = _ref.height;

                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;

                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }

                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }

                _this.listenerNode = event.touches ? _node : _this.contentWindow;

                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }

                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });

                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }

                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };

              var _this$props3 = _this.props,
                  _axis = _this$props3.axis,
                  _getHelperDimensions = _this$props3.getHelperDimensions,
                  _helperClass = _this$props3.helperClass,
                  _hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  _onSortStart = _this$props3.onSortStart,
                  _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                  _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;

              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;

                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });

                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();

              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();

          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;

        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        _this.updateHelperPosition(event);

        _this.animateNodes();

        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
            collection = _this$manager.active.collection,
            isKeySorting = _this$manager.isKeySorting;

        var nodes = _this.manager.getOrderedRefs();

        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }

        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }

        _this.autoScroller.clear();

        _this.manager.active = null;
        _this.manager.isKeySorting = false;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }

        _this.touched = false;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;

        if (disableAutoscroll) {
          _this.autoScroller.clear();

          return;
        }

        if (isKeySorting) {
          var translate = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.translate);

          var scrollX = 0;
          var scrollY = 0;

          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }

          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }

          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }

        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;

        _this.animateNodes();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
            shouldCancelStart = _this$props5.shouldCancelStart,
            _this$props5$keyCodes = _this$props5.keyCodes,
            customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

        var keyCodes = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultKeyCodes, customKeyCodes);

        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;

          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
            index = _node$sortableInfo2.index,
            collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };

        _this.handlePress(event);
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();

        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;

        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }

        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };

        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);

        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });

      validateProps(props);
      _this.manager = new Manager();
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableContainer, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          manager: this.manager
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });

          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }

        if (!this.container) {
          return;
        }

        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
            lockAxis = _this$props6.lockAxis,
            lockOffset = _this$props6.lockOffset,
            lockToContainerEdges = _this$props6.lockToContainerEdges,
            transitionDuration = _this$props6.transitionDuration,
            _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
            keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset: lockOffset,
            width: this.width
          }),
              _getLockPixelOffsets2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }

        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
            transitionDuration = _this$props7.transitionDuration,
            hideSortableGhost = _this$props7.hideSortableGhost,
            onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
            windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;

            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }

          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }

          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }

            continue;
          }

          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }

          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;

                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);

                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;

                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;

              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }

          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (isKeySorting) {
          this.newIndex = prevIndex;
        }

        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;

        if (typeof getContainer !== 'function') {
          return Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps)));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;

        if (typeof helperContainer === 'function') {
          return helperContainer();
        }

        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }

        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);

    return WithSortableContainer;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", defaultProps), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "childContextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), _temp;
}

var propTypes$1 = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  collection: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableElement, _React$Component);

    function WithSortableElement() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableElement);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableElement).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }

          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }

        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
            collection = _this$props.collection,
            disabled = _this$props.disabled,
            index = _this$props.index;
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);

    return WithSortableElement;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "contextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes$1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", {
    collection: 0
  }), _temp;
}




/***/ }),

/***/ "./src/accordion-icon.js":
/*!*******************************!*\
  !*** ./src/accordion-icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AccordionIcon = function AccordionIcon(_ref) {
  var icon = _ref.icon,
      iconWrapperStyles = _ref.iconWrapperStyles,
      iconStyles = _ref.iconStyles;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "eb-accordion-icon-wrapper",
    style: iconWrapperStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(icon, " eb-accordion-icon"),
    style: iconStyles
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionIcon);

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  id: {
    type: "string"
  },
  accordionType: {
    type: "string",
    source: "attribute",
    selector: ".eb-accordion-container",
    attribute: "data-accordion-type",
    "default": "toggle"
  },
  accordions: {
    type: "array",
    selector: ".eb-accordion-wrapper",
    source: "query",
    "default": [{
      title: "Accordion Tab Title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      title: "Accordion Tab Title 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      title: "Accordion Tab Title 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }],
    query: {
      title: {
        type: "array",
        selector: ".eb-accordion-title",
        source: "children"
      },
      content: {
        type: "array",
        selector: ".eb-accordion-content",
        source: "children"
      }
    }
  },
  selectedTab: {
    type: "string",
    "default": ""
  },
  expandedTabs: {
    type: "array",
    "default": []
  },
  displayIcon: {
    type: "boolean",
    "default": true
  },
  tabIcon: {
    type: "string",
    "default": "fas fa-angle-right"
  },
  expandedIcon: {
    type: "string",
    "default": "fas fa-angle-down"
  },
  transitionDuration: {
    type: "number"
  },
  accordionStyle: {
    type: "string",
    "default": "custom"
  },
  backgroundType: {
    type: "string",
    "default": "fill"
  },
  containerBackground: {
    type: "string"
  },
  containerBorderType: {
    type: "string",
    "default": "solid"
  },
  containerBorderSize: {
    type: "number"
  },
  containerBorderColor: {
    type: "string"
  },
  containerGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #c9d6ff, #e2e2e2)"
  },
  containerMarginTop: {
    type: "number",
    "default": 0
  },
  containerMarginRight: {
    type: "number",
    "default": 0
  },
  containerMarginBottom: {
    type: "number",
    "default": 0
  },
  containerMarginLeft: {
    type: "number",
    "default": 0
  },
  containerPaddingTop: {
    type: "number",
    "default": 0
  },
  containerPaddingRight: {
    type: "number",
    "default": 0
  },
  containerPaddingBottom: {
    type: "number",
    "default": 0
  },
  containerPaddingLeft: {
    type: "number",
    "default": 0
  },
  containerHOffset: {
    type: "number"
  },
  containerVOffset: {
    type: "number"
  },
  containerShadowBlur: {
    type: "number"
  },
  containerShadowSpread: {
    type: "number"
  },
  containerShadowColor: {
    type: "string"
  },
  titleLevel: {
    type: "string",
    "default": "h5"
  },
  titleFontSize: {
    type: "number"
  },
  titleSizeUnit: {
    type: "string",
    "default": "px"
  },
  titleColor: {
    type: "string"
  },
  titleBackgroundType: {
    type: "string",
    "default": "fill"
  },
  titleBackgroundColor: {
    type: "string"
  },
  titleBackgroundGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #141e30, #243b55)"
  },
  tabBorderStyle: {
    type: "string",
    "default": "solid"
  },
  tabBorderColor: {
    type: "string",
    "default": "transparent"
  },
  tabBorderRadius: {
    type: "number"
  },
  contentAlign: {
    type: "string",
    "default": "left"
  },
  contentColor: {
    type: "string"
  },
  contentFontSize: {
    type: "number"
  },
  contentMarginTop: {
    type: "number",
    "default": 10
  },
  contentMarginRight: {
    type: "number",
    "default": 10
  },
  contentMarginBottom: {
    type: "number",
    "default": 10
  },
  contentMarginLeft: {
    type: "number",
    "default": 10
  },
  contentPaddingTop: {
    type: "number",
    "default": 0
  },
  contentPaddingRight: {
    type: "number",
    "default": 0
  },
  contentPaddingBottom: {
    type: "number",
    "default": 0
  },
  contentPaddingLeft: {
    type: "number",
    "default": 0
  },
  contentBackgroundType: {
    type: "string",
    "default": "fill"
  },
  contentBackgroundColor: {
    type: "string"
  },
  contentGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #ece9e6, #ffffff)"
  },
  displayContentBorder: {
    type: "boolean",
    "default": false
  },
  contentBorderTop: {
    type: "number",
    "default": 1
  },
  contentBorderRight: {
    type: "number",
    "default": 1
  },
  contentBorderBottom: {
    type: "number",
    "default": 1
  },
  contentBorderLeft: {
    type: "number",
    "default": 1
  },
  contentBorderStyle: {
    type: "string",
    "default": "solid"
  },
  contentBorderColor: {
    type: "string"
  },
  contentHOffset: {
    type: "number"
  },
  contentVOffset: {
    type: "number"
  },
  contentShadowBlur: {
    type: "number"
  },
  contentShadowSpread: {
    type: "number"
  },
  contentShadowColor: {
    type: "string"
  },
  iconColor: {
    type: "string"
  },
  iconSize: {
    type: "number"
  },
  iconPaddingTop: {
    type: "number",
    "default": 0
  },
  iconPaddingRight: {
    type: "number",
    "default": 0
  },
  iconPaddingBottom: {
    type: "number",
    "default": 0
  },
  iconPaddingLeft: {
    type: "number",
    "default": 0
  },
  iconMarginTop: {
    type: "number",
    "default": 0
  },
  iconMarginRight: {
    type: "number",
    "default": 0
  },
  iconMarginBottom: {
    type: "number",
    "default": 0
  },
  iconMarginLeft: {
    type: "number",
    "default": 0
  },
  iconBackgroundType: {
    type: "string",
    "default": "fill"
  },
  iconBackgroundColor: {
    type: "string"
  },
  iconGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #8e9eab, #eef2f3)"
  },
  iconSpace: {
    type: "number",
    "default": 0
  },
  iconBorderRadius: {
    type: "number",
    "default": 0
  },
  iconHOffset: {
    type: "number"
  },
  iconVOffset: {
    type: "number"
  },
  iconShadowBlur: {
    type: "number"
  },
  iconShadowSpread: {
    type: "number"
  },
  iconShadowColor: {
    type: "string"
  },
  iconPosition: {
    type: "string",
    "default": "right"
  },
  transitionFunction: {
    type: "string",
    source: "attribute",
    selector: ".eb-accordion-container",
    attribute: "data-transition-function"
  },
  tabHOffset: {
    type: "number"
  },
  tabVOffset: {
    type: "number"
  },
  tabShadowBlur: {
    type: "number"
  },
  tabShadowSpread: {
    type: "number"
  },
  tabShadowColor: {
    type: "string"
  },
  titleAlignment: {
    type: "string",
    "default": "flex-start"
  },
  tabBorderColorType: {
    type: "string",
    "default": "fill"
  },
  tabBorderGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #ff512f, #dd2476)"
  },
  tabBorderImageSlice: {
    type: "number",
    "default": 0
  },
  tabBorderWidth: {
    type: "number"
  },
  isHover: {
    type: "boolean",
    "default": false
  },
  hoverColor: {
    type: "string"
  },
  hoverIndex: {
    type: "number"
  },
  activeColor: {
    type: "string"
  },
  activeTitleColor: {
    type: "string"
  },
  containerImageID: {
    type: "string"
  },
  containerImageURL: {
    type: "string"
  },
  containerBackgroundSize: {
    type: "string",
    "default": "auto"
  },
  containerBackgroundClip: {
    type: "string",
    "default": "border-box"
  },
  containerBackgroundRepeat: {
    type: "string",
    "default": "initial"
  },
  containerBackgroundPositionX: {
    type: "number",
    "default": 0
  },
  containerBackgroundPositionY: {
    type: "number",
    "default": 0
  },
  containerBackgoundAttachment: {
    type: "string",
    "default": "initial"
  },
  tabMarginTop: {
    type: "number",
    "default": 10
  },
  tabMarginRight: {
    type: "number",
    "default": 0
  },
  tabMarginBottom: {
    type: "number",
    "default": 0
  },
  tabMarginLeft: {
    type: "number",
    "default": 0
  },
  tabPaddingTop: {
    type: "number",
    "default": 0
  },
  tabPaddingRight: {
    type: "number",
    "default": 0
  },
  tabPaddingBottom: {
    type: "number",
    "default": 0
  },
  tabPaddingLeft: {
    type: "number",
    "default": 0
  },
  containerBorderRadius: {
    type: "number"
  },
  linkedContainerMargin: {
    type: "boolean",
    "default": false
  },
  linkedContainerPadding: {
    type: "boolean",
    "default": false
  },
  linkedTabMargin: {
    type: "boolean",
    "default": false
  },
  linkedContentMargin: {
    type: "boolean",
    "default": false
  },
  linkedContentPadding: {
    type: "boolean",
    "default": false
  },
  linkedContentBorder: {
    type: "boolean",
    "default": false
  },
  linkedIconMargin: {
    type: "boolean",
    "default": false
  },
  linkedIconPadding: {
    type: "boolean",
    "default": false
  },
  buttonStyle: {
    type: "string",
    "default": "custom"
  },
  containerMarginUnit: {
    type: "string",
    "default": "px"
  },
  containerPaddingUnit: {
    type: "string",
    "default": "px"
  },
  containerBorderUnit: {
    type: "string",
    "default": "px"
  },
  containerRadiusUnit: {
    type: "string",
    "default": "px"
  },
  tabMarginUnit: {
    type: "string",
    "default": "px"
  },
  tabPaddingUnit: {
    type: "string",
    "default": "px"
  },
  tabBorderUnit: {
    type: "string",
    "default": "px"
  },
  tabRadiusUnit: {
    type: "string",
    "default": "px"
  },
  contentMarginUnit: {
    type: "string",
    "default": "px"
  },
  contentPaddingUnit: {
    type: "string",
    "default": "px"
  },
  iconSizeUnit: {
    type: "string",
    "default": "px"
  },
  iconMarginUnit: {
    type: "string",
    "default": "px"
  },
  iconPaddingUnit: {
    type: "string",
    "default": "px"
  },
  contentSizeUnit: {
    type: "string",
    "default": "px"
  },
  titleFontFamily: {
    type: "string"
  },
  titleFontWeight: {
    type: "string",
    "default": "normal"
  },
  titleTextTransform: {
    type: "string"
  },
  titleTextDecoration: {
    type: "string"
  },
  titleLetterSpacing: {
    type: "number"
  },
  titleLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  titleLineHeight: {
    type: "number"
  },
  titleLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  contentFontFamily: {
    type: "string"
  },
  contentFontWeight: {
    type: "string",
    "default": "normal"
  },
  contentTextTransform: {
    type: "string"
  },
  contentTextDecoration: {
    type: "string"
  },
  contentLetterSpacing: {
    type: "number"
  },
  contentLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  contentLineHeight: {
    type: "number"
  },
  contentLineHeightUnit: {
    type: "string",
    "default": "px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: DEFAULT_TITLE_COLOR, DEFAULT_TITLE_SIZE, DEFAULT_TITLE_BACKGROUND, DEFAULT_TITLE_ACTIVE_COLOR, DEFAULT_CONTENT_COLOR, DEFAULT_CONTENT_BACKGROUND, DEFAULT_CONTENT_BORDER_COLOR, DEFAULT_ICON_COLOR, MAX_HEIGHT, ACCORDION_TYPES, ACCORDION_STYLES, BACKGROUND_TYPE, TITLE_BACKGROUND_TYPE, BACKGROUND_CLIP, BUTTON_STYLES, BACKGROUND_SIZE, BACKGROUND_REPEAT, BACKGROUND_ATTACHMENT, BORDER_STYLES, HEADERS, ICON_POSITIONS, TRANSITION_TYPES, TITLE_ALIGNMENT, CONTENT_ALIGN, COLOR_TYPES, TEXT_TRANSFORM, FONT_WEIGHTS, TEXT_DECORATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TITLE_COLOR", function() { return DEFAULT_TITLE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TITLE_SIZE", function() { return DEFAULT_TITLE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TITLE_BACKGROUND", function() { return DEFAULT_TITLE_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TITLE_ACTIVE_COLOR", function() { return DEFAULT_TITLE_ACTIVE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTENT_COLOR", function() { return DEFAULT_CONTENT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTENT_BACKGROUND", function() { return DEFAULT_CONTENT_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTENT_BORDER_COLOR", function() { return DEFAULT_CONTENT_BORDER_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ICON_COLOR", function() { return DEFAULT_ICON_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_HEIGHT", function() { return MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCORDION_TYPES", function() { return ACCORDION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCORDION_STYLES", function() { return ACCORDION_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TYPE", function() { return BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_BACKGROUND_TYPE", function() { return TITLE_BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_CLIP", function() { return BACKGROUND_CLIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_STYLES", function() { return BUTTON_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZE", function() { return BACKGROUND_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_REPEAT", function() { return BACKGROUND_REPEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_ATTACHMENT", function() { return BACKGROUND_ATTACHMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_POSITIONS", function() { return ICON_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_TYPES", function() { return TRANSITION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_ALIGNMENT", function() { return TITLE_ALIGNMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ALIGN", function() { return CONTENT_ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_TYPES", function() { return COLOR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHTS", function() { return FONT_WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
var __ = wp.i18n.__; // Default colors

var DARK_GRAY = "#4a5059";
var LIGHT_GRAY = "#edf1f7";
var DEFAULT_TITLE_COLOR = DARK_GRAY;
var DEFAULT_TITLE_SIZE = "16";
var DEFAULT_TITLE_BACKGROUND = LIGHT_GRAY;
var DEFAULT_TITLE_ACTIVE_COLOR = "#ffffff";
var DEFAULT_CONTENT_COLOR = DARK_GRAY;
var DEFAULT_CONTENT_BACKGROUND = "transparent";
var DEFAULT_CONTENT_BORDER_COLOR = DARK_GRAY;
var DEFAULT_ICON_COLOR = DARK_GRAY;
var MAX_HEIGHT = 2000;
var ACCORDION_TYPES = [{
  label: __("Accordion"),
  value: "accordion"
}, {
  label: __("Toggle"),
  value: "toggle"
}];
var ACCORDION_STYLES = [{
  label: __("Material"),
  value: "material"
}, {
  label: __("Gradient"),
  value: "gradient"
}, {
  label: __("Dark"),
  value: "dark"
}, {
  label: __("Royal"),
  value: "royal"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_TYPE = [{
  label: __("Fill"),
  value: "fill"
}, {
  label: __("Gradient"),
  value: "gradient"
}, {
  label: __("Image"),
  value: "image"
}];
var TITLE_BACKGROUND_TYPE = [{
  label: __("Fill"),
  value: "fill"
}, {
  label: __("Gradient"),
  value: "gradient"
}];
var BACKGROUND_CLIP = [{
  label: __("Border Box"),
  value: "border-box"
}, {
  label: __("Padding Box"),
  value: "padding-box"
}, {
  label: __("Content Box"),
  value: "content-box"
}];
var BUTTON_STYLES = [{
  label: __("Material"),
  value: "material"
}, {
  label: __("Ghost"),
  value: "ghost"
}, {
  label: __("Rounded"),
  value: "rounded"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_SIZE = [{
  label: __("Auto"),
  value: "auto"
}, {
  label: __("Cover"),
  value: "cover"
}, {
  label: __("Container"),
  value: "container"
}];
var BACKGROUND_REPEAT = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("No Repeat"),
  value: "no-repeat"
}, {
  label: __("Repeat"),
  value: "repeat"
}, {
  label: __("Repeat X"),
  value: "repeat-x"
}, {
  label: __("Repeat Y"),
  value: "repeat-y"
}, {
  label: __("Space"),
  value: "space"
}, {
  label: __("Round"),
  value: "round"
}];
var BACKGROUND_ATTACHMENT = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Scroll"),
  value: "scroll"
}, {
  label: __("Fixed"),
  value: "fixed"
}, {
  label: __("Local"),
  value: "local"
}];
var BORDER_STYLES = [{
  label: __("Dashed"),
  value: "dashed"
}, {
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Dotted"),
  value: "dotted"
}, {
  label: __("Double"),
  value: "double"
}, {
  label: __("Groove"),
  value: "groove"
}, {
  label: __("Inset"),
  value: "inset"
}, {
  label: __("Outset"),
  value: "outset"
}, {
  label: __("Ridge"),
  value: "ridge"
}];
var HEADERS = [{
  label: __("H1"),
  value: "h1"
}, {
  label: __("H2"),
  value: "h2"
}, {
  label: __("H3"),
  value: "h3"
}, {
  label: __("H4"),
  value: "h4"
}, {
  label: __("H5"),
  value: "h5"
}, {
  label: __("H6"),
  value: "h6"
}];
var ICON_POSITIONS = [{
  label: __("Left"),
  value: "left"
}, {
  label: __("Right"),
  value: "right"
}];
var TRANSITION_TYPES = [{
  label: __("Liner"),
  value: "linear"
}, {
  label: __("Ease"),
  value: "ease"
}, {
  label: __("Ease In"),
  value: "ease-in"
}, {
  label: __("Ease Out"),
  value: "ease-out"
}, {
  label: __("Ease In Out"),
  value: "ease-in-out"
}];
var TITLE_ALIGNMENT = [{
  label: __("Left"),
  value: "flex-start"
}, {
  label: __("Center"),
  value: "center"
}, {
  label: __("Right"),
  value: "flex-end"
}];
var CONTENT_ALIGN = [{
  label: __("Left"),
  value: "left"
}, {
  label: __("Center"),
  value: "center"
}, {
  label: __("Right"),
  value: "right"
}];
var COLOR_TYPES = [{
  label: __("Fill"),
  value: "fill"
}, {
  label: __("Gradient"),
  value: "gradient"
}];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: __("Lighter"),
  value: "lighter"
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}, {
  label: __("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var _accordion_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-icon */ "./src/accordion-icon.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/uuid */ "./util/uuid.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/helper */ "./util/helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var RichText = wp.blockEditor.RichText;
var Button = wp.components.Button;
/**
 * Internal dependencies
 */


 // import Inspector from "./inspector";





var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "addAccordion", function () {
      var _this$props = _this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var counter = attributes.accordions.length + 1;
      var accordions = [].concat(_toConsumableArray(attributes.accordions), [{
        title: "Add Accordion Title ".concat(counter),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }]);
      setAttributes({
        accordions: accordions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteAccordion", function (position) {
      // Callback function for deleting accordion
      var _this$props2 = _this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;

      var accordions = _toConsumableArray(attributes.accordions);

      accordions.splice(position, 1);
      setAttributes({
        accordions: accordions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSortEnd", function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      // Callback function for sorting accordion
      var _this$props3 = _this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      setAttributes({
        accordions: Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["arrayMove"])(attributes.accordions, oldIndex, newIndex)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isExpanded", function (index) {
      // Return true if tab is expanded
      var _this$props$attribute = _this.props.attributes,
          accordionType = _this$props$attribute.accordionType,
          selectedTab = _this$props$attribute.selectedTab,
          expandedTabs = _this$props$attribute.expandedTabs;

      if (accordionType === "accordion") {
        return selectedTab === index;
      }

      if (accordionType === "toggle") {
        return expandedTabs.includes(index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerBackground", function () {
      var _this$props$attribute2 = _this.props.attributes,
          backgroundType = _this$props$attribute2.backgroundType,
          containerBackground = _this$props$attribute2.containerBackground,
          containerGradient = _this$props$attribute2.containerGradient,
          containerImageURL = _this$props$attribute2.containerImageURL;

      switch (backgroundType) {
        case "fill":
          return containerBackground;

        case "gradient":
          return containerGradient;

        case "image":
          return "url('".concat(containerImageURL, "')");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerBackgroundImage", function () {
      var _this$props$attribute3 = _this.props.attributes,
          backgroundType = _this$props$attribute3.backgroundType,
          containerGradient = _this$props$attribute3.containerGradient,
          containerImageURL = _this$props$attribute3.containerImageURL;
      return backgroundType === "gradient" ? containerGradient : backgroundType === "image" && containerImageURL ? "url('".concat(containerImageURL, "')") : "none";
    });

    _defineProperty(_assertThisInitialized(_this), "setHoverColor", function (index) {
      var _this$props$attribute4 = _this.props.attributes,
          hoverIndex = _this$props$attribute4.hoverIndex,
          hoverColor = _this$props$attribute4.hoverColor;

      if (hoverIndex === index && hoverColor) {
        return hoverColor;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setToggleActiveColor", function (index) {
      var _this$props$attribute5 = _this.props.attributes,
          expandedTabs = _this$props$attribute5.expandedTabs,
          activeColor = _this$props$attribute5.activeColor;

      if (expandedTabs.includes(index)) {
        return activeColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setAccordionActiveColor", function (index) {
      var _this$props$attribute6 = _this.props.attributes,
          selectedTab = _this$props$attribute6.selectedTab,
          activeColor = _this$props$attribute6.activeColor;

      if (selectedTab === index) {
        return activeColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTitleBackground", function (index) {
      var _this$props$attribute7 = _this.props.attributes,
          titleBackgroundType = _this$props$attribute7.titleBackgroundType,
          accordionType = _this$props$attribute7.accordionType,
          titleBackgroundColor = _this$props$attribute7.titleBackgroundColor;
      var activeColor;

      if (titleBackgroundType === "fill") {
        if (accordionType === "accordion") {
          activeColor = _this.setAccordionActiveColor(index);
        }

        if (accordionType === "toggle") {
          activeColor = _this.setToggleActiveColor(index);
        }

        var hoverColor = _this.setHoverColor(index); // Show hover, active or default background color


        return hoverColor || activeColor || titleBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_BACKGROUND"];
      }

      return "transparent";
    });

    _defineProperty(_assertThisInitialized(_this), "setToggleTitleColor", function (index) {
      var _this$props$attribute8 = _this.props.attributes,
          expandedTabs = _this$props$attribute8.expandedTabs,
          activeTitleColor = _this$props$attribute8.activeTitleColor;

      if (expandedTabs.includes(index)) {
        return activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setAccordionTitleColor", function (index) {
      var _this$props$attribute9 = _this.props.attributes,
          selectedTab = _this$props$attribute9.selectedTab,
          activeTitleColor = _this$props$attribute9.activeTitleColor;

      if (selectedTab === index) {
        return activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTitleColor", function (index) {
      var _this$props$attribute10 = _this.props.attributes,
          accordionType = _this$props$attribute10.accordionType,
          titleColor = _this$props$attribute10.titleColor;
      var activeTitleColor;

      if (accordionType === "accordion") {
        activeTitleColor = _this.setAccordionTitleColor(index);
      }

      if (accordionType === "toggle") {
        activeTitleColor = _this.setToggleTitleColor(index);
      } // Show active or default title color


      return activeTitleColor || titleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
    });

    _defineProperty(_assertThisInitialized(_this), "getTabIcon", function (index) {
      // Return icon based on tab hidden/expanded state
      var _this$props$attribute11 = _this.props.attributes,
          expandedIcon = _this$props$attribute11.expandedIcon,
          tabIcon = _this$props$attribute11.tabIcon;
      return _this.isExpanded(index) ? expandedIcon : tabIcon;
    });

    _defineProperty(_assertThisInitialized(_this), "setToggleType", function (index) {
      // If tab is already expanded, close it, otherwise open it
      var _this$props4 = _this.props,
          attributes = _this$props4.attributes,
          setAttributes = _this$props4.setAttributes;

      var expandedTabs = _toConsumableArray(attributes.expandedTabs);

      expandedTabs = expandedTabs.includes(index) ? expandedTabs.filter(function (titleIndex) {
        return titleIndex !== index;
      }) : [].concat(_toConsumableArray(expandedTabs), [index]);
      setAttributes({
        expandedTabs: expandedTabs
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setAccordionType", function (index) {
      // Save expanded tab name, remove when tab is hidden
      var _this$props5 = _this.props,
          attributes = _this$props5.attributes,
          setAttributes = _this$props5.setAttributes;
      var selectedTab = attributes.selectedTab === index ? undefined : index;
      setAttributes({
        selectedTab: selectedTab
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTitleClick", function (index) {
      // Expand / Hide title
      var accordionType = _this.props.attributes.accordionType;
      accordionType === "accordion" && _this.setAccordionType(index);
      accordionType === "toggle" && _this.setToggleType(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (newValue, index, key) {
      // onChange callback function for title and content
      var _this$props6 = _this.props,
          attributes = _this$props6.attributes,
          setAttributes = _this$props6.setAttributes;

      var accordions = _toConsumableArray(attributes.accordions);

      accordions[index][key] = newValue;
      setAttributes({
        accordions: accordions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getIconColor", function (index) {
      var _this$props$attribute12 = _this.props.attributes,
          accordionType = _this$props$attribute12.accordionType,
          iconColor = _this$props$attribute12.iconColor,
          titleColor = _this$props$attribute12.titleColor,
          selectedTab = _this$props$attribute12.selectedTab,
          expandedTabs = _this$props$attribute12.expandedTabs,
          activeTitleColor = _this$props$attribute12.activeTitleColor;
      var activeIconColor;

      if (accordionType === "accordion") {
        if (selectedTab === index) {
          activeIconColor = activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
        }
      } else {
        if (expandedTabs.includes(index)) {
          activeIconColor = activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
        }
      }

      return activeIconColor || iconColor || titleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"];
    });

    _defineProperty(_assertThisInitialized(_this), "onLevelChange", function (header, titleSizeUnit) {
      var titleLevel = header.value;
      var titleFontSize = Object(_util_helper__WEBPACK_IMPORTED_MODULE_4__["default"])(titleSizeUnit, titleLevel);

      _this.props.setAttributes({
        titleFontSize: titleFontSize,
        titleLevel: titleLevel
      });
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Generate unique id
      var id = Object(_util_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])().substr(0, 5);
      this.props.setAttributes({
        id: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props7 = this.props,
          isSelected = _this$props7.isSelected,
          attributes = _this$props7.attributes,
          setAttributes = _this$props7.setAttributes;
      var accordionType = attributes.accordionType,
          displayIcon = attributes.displayIcon,
          transitionDuration = attributes.transitionDuration,
          accordionStyle = attributes.accordionStyle,
          backgroundType = attributes.backgroundType,
          containerBackground = attributes.containerBackground,
          containerGradient = attributes.containerGradient,
          containerBorderSize = attributes.containerBorderSize,
          containerBorderType = attributes.containerBorderType,
          containerBorderColor = attributes.containerBorderColor,
          containerMarginTop = attributes.containerMarginTop,
          containerMarginRight = attributes.containerMarginRight,
          containerMarginBottom = attributes.containerMarginBottom,
          containerMarginLeft = attributes.containerMarginLeft,
          containerPaddingTop = attributes.containerPaddingTop,
          containerPaddingRight = attributes.containerPaddingRight,
          containerPaddingBottom = attributes.containerPaddingBottom,
          containerPaddingLeft = attributes.containerPaddingLeft,
          accordions = attributes.accordions,
          expandedTabs = attributes.expandedTabs,
          selectedTab = attributes.selectedTab,
          tabIcon = attributes.tabIcon,
          expandedIcon = attributes.expandedIcon,
          containerHOffset = attributes.containerHOffset,
          containerVOffset = attributes.containerVOffset,
          containerShadowSpread = attributes.containerShadowSpread,
          containerShadowBlur = attributes.containerShadowBlur,
          containerShadowColor = attributes.containerShadowColor,
          titleLevel = attributes.titleLevel,
          titleColor = attributes.titleColor,
          titleBackgroundType = attributes.titleBackgroundType,
          titleBackgroundColor = attributes.titleBackgroundColor,
          titleBackgroundGradient = attributes.titleBackgroundGradient,
          tabBorderStyle = attributes.tabBorderStyle,
          tabBorderColor = attributes.tabBorderColor,
          tabBorderRadius = attributes.tabBorderRadius,
          contentAlign = attributes.contentAlign,
          contentColor = attributes.contentColor,
          contentFontSize = attributes.contentFontSize,
          contentMarginTop = attributes.contentMarginTop,
          contentMarginRight = attributes.contentMarginRight,
          contentMarginBottom = attributes.contentMarginBottom,
          contentMarginLeft = attributes.contentMarginLeft,
          contentPaddingTop = attributes.contentPaddingTop,
          contentPaddingRight = attributes.contentPaddingRight,
          contentPaddingBottom = attributes.contentPaddingBottom,
          contentPaddingLeft = attributes.contentPaddingLeft,
          contentBackgroundType = attributes.contentBackgroundType,
          contentBackgroundColor = attributes.contentBackgroundColor,
          contentGradient = attributes.contentGradient,
          contentBorderStyle = attributes.contentBorderStyle,
          contentBorderColor = attributes.contentBorderColor,
          contentHOffset = attributes.contentHOffset,
          contentVOffset = attributes.contentVOffset,
          contentShadowColor = attributes.contentShadowColor,
          contentShadowBlur = attributes.contentShadowBlur,
          contentShadowSpread = attributes.contentShadowSpread,
          iconColor = attributes.iconColor,
          iconSize = attributes.iconSize,
          iconMarginTop = attributes.iconMarginTop,
          iconMarginRight = attributes.iconMarginRight,
          iconMarginBottom = attributes.iconMarginBottom,
          iconMarginLeft = attributes.iconMarginLeft,
          iconPaddingTop = attributes.iconPaddingTop,
          iconPaddingRight = attributes.iconPaddingRight,
          iconPaddingBottom = attributes.iconPaddingBottom,
          iconPaddingLeft = attributes.iconPaddingLeft,
          iconBackgroundType = attributes.iconBackgroundType,
          iconBackgroundColor = attributes.iconBackgroundColor,
          iconGradient = attributes.iconGradient,
          iconSpace = attributes.iconSpace,
          iconBorderRadius = attributes.iconBorderRadius,
          iconPosition = attributes.iconPosition,
          iconHOffset = attributes.iconHOffset,
          iconVOffset = attributes.iconVOffset,
          iconShadowBlur = attributes.iconShadowBlur,
          iconShadowSpread = attributes.iconShadowSpread,
          iconShadowColor = attributes.iconShadowColor,
          transitionFunction = attributes.transitionFunction,
          tabHOffset = attributes.tabHOffset,
          tabVOffset = attributes.tabVOffset,
          tabShadowBlur = attributes.tabShadowBlur,
          tabShadowSpread = attributes.tabShadowSpread,
          tabShadowColor = attributes.tabShadowColor,
          titleAlignment = attributes.titleAlignment,
          tabBorderColorType = attributes.tabBorderColorType,
          tabBorderGradient = attributes.tabBorderGradient,
          tabBorderImageSlice = attributes.tabBorderImageSlice,
          tabBorderWidth = attributes.tabBorderWidth,
          isHover = attributes.isHover,
          hoverColor = attributes.hoverColor,
          hoverIndex = attributes.hoverIndex,
          activeColor = attributes.activeColor,
          activeTitleColor = attributes.activeTitleColor,
          containerImageID = attributes.containerImageID,
          containerImageURL = attributes.containerImageURL,
          containerBackgroundSize = attributes.containerBackgroundSize,
          containerBackgroundClip = attributes.containerBackgroundClip,
          containerBackgroundRepeat = attributes.containerBackgroundRepeat,
          containerBackgroundPositionX = attributes.containerBackgroundPositionX,
          containerBackgroundPositionY = attributes.containerBackgroundPositionY,
          containerBackgoundAttachment = attributes.containerBackgoundAttachment,
          tabMarginTop = attributes.tabMarginTop,
          tabMarginRight = attributes.tabMarginRight,
          tabMarginBottom = attributes.tabMarginBottom,
          tabMarginLeft = attributes.tabMarginLeft,
          tabPaddingTop = attributes.tabPaddingTop,
          tabPaddingRight = attributes.tabPaddingRight,
          tabPaddingBottom = attributes.tabPaddingBottom,
          tabPaddingLeft = attributes.tabPaddingLeft,
          contentBorderTop = attributes.contentBorderTop,
          contentBorderRight = attributes.contentBorderRight,
          contentBorderBottom = attributes.contentBorderBottom,
          contentBorderLeft = attributes.contentBorderLeft,
          containerBorderRadius = attributes.containerBorderRadius,
          containerMarginUnit = attributes.containerMarginUnit,
          containerPaddingUnit = attributes.containerPaddingUnit,
          containerBorderUnit = attributes.containerBorderUnit,
          containerRadiusUnit = attributes.containerRadiusUnit,
          tabMarginUnit = attributes.tabMarginUnit,
          tabPaddingUnit = attributes.tabPaddingUnit,
          tabBorderUnit = attributes.tabBorderUnit,
          tabRadiusUnit = attributes.tabRadiusUnit,
          contentMarginUnit = attributes.contentMarginUnit,
          contentPaddingUnit = attributes.contentPaddingUnit,
          iconSizeUnit = attributes.iconSizeUnit,
          iconMarginUnit = attributes.iconMarginUnit,
          iconPaddingUnit = attributes.iconPaddingUnit,
          contentSizeUnit = attributes.contentSizeUnit,
          titleFontSize = attributes.titleFontSize,
          titleSizeUnit = attributes.titleSizeUnit,
          titleFontFamily = attributes.titleFontFamily,
          titleFontWeight = attributes.titleFontWeight,
          titleTextTransform = attributes.titleTextTransform,
          titleTextDecoration = attributes.titleTextDecoration,
          titleLetterSpacing = attributes.titleLetterSpacing,
          titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
          titleLineHeight = attributes.titleLineHeight,
          titleLineHeightUnit = attributes.titleLineHeightUnit,
          contentFontFamily = attributes.contentFontFamily,
          contentFontWeight = attributes.contentFontWeight,
          contentTextTransform = attributes.contentTextTransform,
          contentTextDecoration = attributes.contentTextDecoration,
          contentLetterSpacing = attributes.contentLetterSpacing,
          contentLetterSpacingUnit = attributes.contentLetterSpacingUnit,
          contentLineHeight = attributes.contentLineHeight,
          contentLineHeightUnit = attributes.contentLineHeightUnit;
      var containerStyle = {
        background: this.getContainerBackground(),
        backgroundImage: this.getContainerBackgroundImage(),
        backgroundRepeat: containerImageURL ? containerBackgroundRepeat : undefined,
        backgroundClip: backgroundType === "image" ? containerBackgroundClip : undefined,
        backgroundSize: backgroundType === "image" ? containerBackgroundSize : undefined,
        backgroundPosition: containerImageURL ? "".concat(containerBackgroundPositionX, "% ").concat(containerBackgroundPositionY, "%") : undefined,
        backgroundAttachment: containerImageURL ? containerBackgoundAttachment : undefined,
        margin: "".concat(containerMarginTop).concat(containerMarginUnit, " ").concat(containerMarginRight).concat(containerMarginUnit, " ").concat(containerMarginBottom).concat(containerMarginUnit, " ").concat(containerMarginLeft).concat(containerMarginUnit),
        padding: "".concat(containerPaddingTop).concat(containerPaddingUnit, " ").concat(containerPaddingRight).concat(containerPaddingUnit, " ").concat(containerPaddingBottom).concat(containerPaddingUnit, " ").concat(containerPaddingLeft).concat(containerPaddingUnit),
        border: "".concat(containerBorderSize || 0).concat(containerBorderUnit, " ").concat(containerBorderType, " ").concat(containerBorderColor || "#000000"),
        borderRadius: "".concat(containerBorderRadius || 0).concat(containerRadiusUnit),
        boxShadow: "".concat(containerHOffset || 0, "px ").concat(containerVOffset || 0, "px ").concat(containerShadowBlur || 0, "px ").concat(containerShadowSpread || 0, "px ").concat(containerShadowColor || "#dedede")
      };
      var iconWrapperStyles = {
        display: displayIcon ? "flex" : "none",
        margin: "".concat(iconMarginTop).concat(iconMarginUnit, " ").concat(iconMarginRight).concat(iconMarginUnit, " ").concat(iconMarginBottom).concat(iconMarginUnit, " ").concat(iconMarginLeft).concat(iconMarginUnit),
        background: iconBackgroundType === "fill" && iconBackgroundColor,
        backgroundImage: iconBackgroundType === "gradient" && iconGradient,
        borderRadius: "".concat(iconBorderRadius || 0, "%"),
        boxShadow: "".concat(iconHOffset || 0, "px ").concat(iconVOffset || 0, "px ").concat(iconShadowBlur || 0, "px ").concat(iconShadowSpread || 0, "px ").concat(iconShadowColor || "#000000")
      };
      var iconStyles = {
        color: iconColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ICON_COLOR"],
        fontSize: "".concat(iconSize || 14).concat(iconSizeUnit),
        padding: "".concat(iconPaddingTop).concat(iconPaddingUnit, " ").concat(iconPaddingRight).concat(iconPaddingUnit, " ").concat(iconPaddingBottom).concat(iconPaddingUnit, " ").concat(iconPaddingLeft).concat(iconPaddingUnit, " "),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      };
      var titleStyles = {
        titleWrapper: {
          flexDirection: iconPosition === "right" && displayIcon ? "row-reverse" : "row",
          justifyContent: iconPosition === "right" ? "space-between" : titleAlignment,
          backgroundImage: titleBackgroundType === "gradient" ? titleBackgroundGradient : titleBackgroundType === "fill" ? undefined : "transparent",
          borderWidth: "".concat(tabBorderWidth || 0).concat(tabBorderUnit),
          borderColor: tabBorderColorType === "fill" && tabBorderColor ? tabBorderColor : "transparent",
          borderRadius: "".concat(tabBorderRadius || 0).concat(tabRadiusUnit),
          borderStyle: tabBorderStyle || "unset",
          borderImage: tabBorderColorType === "gradient" && tabBorderGradient ? "".concat(tabBorderGradient, " ").concat(tabBorderImageSlice, "% stretch") : "none",
          boxShadow: "".concat(tabHOffset || 0, "px ").concat(tabVOffset || 0, "px ").concat(tabShadowBlur || 0, "px ").concat(tabShadowSpread || 0, "px ").concat(tabShadowColor || "#dbdbdb"),
          margin: "".concat(tabMarginTop || 0).concat(tabMarginUnit, " ").concat(tabMarginRight || 0).concat(tabMarginUnit, " ").concat(tabMarginBottom || 0).concat(tabMarginUnit, " ").concat(tabMarginLeft || 0).concat(tabMarginUnit),
          padding: "".concat(tabPaddingTop || 0).concat(tabPaddingUnit, " ").concat(tabPaddingRight || 0).concat(tabPaddingUnit || 0, " ").concat(tabPaddingBottom || 0).concat(tabPaddingUnit, " ").concat(tabPaddingLeft || 0).concat(tabPaddingUnit)
        },
        title: {
          color: titleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"],
          fontSize: "".concat(titleFontSize || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_SIZE"]).concat(titleSizeUnit),
          fontFamily: titleFontFamily,
          fontWeight: titleFontWeight,
          textTransform: titleTextTransform,
          textDecoration: titleTextDecoration,
          lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined,
          letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
          margin: 0
        }
      };
      var contentStyles = {
        contentWrapper: {
          textAlign: contentAlign,
          backgroundColor: contentBackgroundType === "fill" && contentBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTENT_BACKGROUND"],
          backgroundImage: contentBackgroundType === "gradient" ? contentGradient : "none",
          borderStyle: "".concat(contentBorderStyle),
          borderWidth: "".concat(contentBorderTop || 0, "px ").concat(contentBorderRight || 0, "px ").concat(contentBorderBottom || 0, "px ").concat(contentBorderLeft || 0, "px"),
          borderColor: contentBorderColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTENT_BORDER_COLOR"],
          boxShadow: "".concat(contentHOffset || 0, "px ").concat(contentVOffset || 0, "px ").concat(contentShadowBlur || 0, "px  ").concat(contentShadowSpread || 0, "px ").concat(contentShadowColor),
          transitionDuration: "".concat(transitionDuration || 500, "ms"),
          transitionProperty: "max-height,opacity,height",
          transitionTimingFunction: transitionFunction
        },
        content: {
          margin: "".concat(contentMarginTop || 0).concat(contentMarginUnit, " ").concat(contentMarginRight || 0).concat(contentMarginUnit, " ").concat(contentMarginBottom || 0).concat(contentMarginUnit, " ").concat(contentMarginLeft || 0).concat(contentMarginUnit),
          padding: "".concat(contentPaddingTop || 0).concat(contentPaddingUnit, " ").concat(contentPaddingRight || 0).concat(contentPaddingUnit, " ").concat(contentPaddingBottom || 0).concat(contentPaddingUnit, " ").concat(contentPaddingLeft || 0).concat(contentPaddingUnit),
          fontSize: "".concat(contentFontSize || 18).concat(contentSizeUnit),
          fontFamily: contentFontFamily,
          fontWeight: contentFontWeight,
          textTransform: contentTextTransform,
          textDecoration: contentTextDecoration,
          lineHeight: contentLineHeight ? "".concat(contentLineHeight).concat(contentLineHeightUnit) : undefined,
          letterSpacing: contentLetterSpacing ? "".concat(contentLetterSpacing).concat(contentLetterSpacingUnit) : undefined,
          color: contentColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTENT_COLOR"]
        }
      };
      return [
      /*#__PURE__*/
      // isSelected && (
      // 	<Inspector
      // 		{...this.props}
      // 		onDeleteAccordion={this.onDeleteAccordion}
      // 		onSortEnd={this.onSortEnd}
      // 		onLevelChange={this.onLevelChange}
      // 	/>
      // ),
      React.createElement("div", {
        className: "eb-accordion-container",
        style: containerStyle
      }, accordions.map(function (accordion, index) {
        return /*#__PURE__*/React.createElement("div", {
          className: "eb-accordion-wrapper",
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: "eb-accordion-title-wrapper",
          style: _objectSpread(_objectSpread({}, titleStyles.titleWrapper), {}, {
            backgroundColor: backgroundType === "fill" ? _this2.getTitleBackground(index) : "transparent"
          }),
          onClick: function onClick() {
            return _this2.onTitleClick(index);
          },
          onMouseEnter: function onMouseEnter() {
            return setAttributes({
              isHover: true,
              hoverIndex: index
            });
          },
          onMouseLeave: function onMouseLeave() {
            return setAttributes({
              isHover: false,
              hoverIndex: null
            });
          }
        }, /*#__PURE__*/React.createElement(_accordion_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          icon: _this2.getTabIcon(index),
          iconWrapperStyles: iconWrapperStyles,
          iconStyles: _objectSpread(_objectSpread({}, iconStyles), {}, {
            color: _this2.isExpanded(index) ? _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_ACTIVE_COLOR"] : _this2.getIconColor(index)
          })
        }), /*#__PURE__*/React.createElement(RichText, {
          tagName: titleLevel,
          className: "eb-accordion-title",
          allowedFormats: [],
          style: _objectSpread(_objectSpread({}, titleStyles.title), {}, {
            color: _this2.isExpanded(index) ? _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_ACTIVE_COLOR"] : _this2.getTitleColor(index)
          }),
          placeholder: "Add Title Here",
          value: accordion.title,
          onChange: function onChange(nextTitle) {
            return _this2.onChange(nextTitle, index, "title");
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "eb-accordion-content-wrapper",
          style: _objectSpread(_objectSpread({}, contentStyles.contentWrapper), {}, {
            maxHeight: _this2.isExpanded(index) ? _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_HEIGHT"] : 0,
            opacity: _this2.isExpanded(index) ? 1 : 0,
            overflow: _this2.isExpanded(index) ? "visible" : "hidden"
          })
        }, /*#__PURE__*/React.createElement(RichText, {
          tagName: "p",
          className: "eb-accordion-content",
          style: contentStyles.content,
          placeholder: "Add Content Here",
          allowedFormats: ["bold", "italic", "strikethrough"],
          value: accordion.content,
          onChange: function onChange(nextContent) {
            return _this2.onChange(nextContent, index, "content");
          }
        })));
      })), /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-add-button"
      }, /*#__PURE__*/React.createElement(Button, {
        className: "is-default",
        label: __("Add Accordion Item"),
        icon: "plus-alt",
        onClick: this.addAccordion
      }, /*#__PURE__*/React.createElement("span", {
        className: "eb-accordion-add-button-label"
      }, "Add Accordion Item")))];
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-8.333%",
    x2: "50%",
    y2: "108.44%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#6DC7FF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6ABFF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-2"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-icon-accordion"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128,0 C91.9749264,0 59.4418701,14.8956537 36.1835498,38.8488312 L203.514459,38.8488312 L203.514459,119.749264 L0.277056277,119.749264 C0.103064935,122.478823 0,125.227221 0,128 C0,130.065732 0.0664935065,132.11484 0.164017316,134.15619 L203.514459,134.15619 L203.514459,215.056623 L34.1732294,215.056623 C57.5468052,240.239931 90.9309784,256 128,256 C198.692571,256 256,198.692571 256,128 C256,57.3074286 198.692571,0 128,0 Z",
    id: "Path",
    fill: "url(#linearGradient-1)"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    points: "186.891082 74.2621645 171.979913 74.2621645 171.979913 59.3509957 160.797922 59.3509957 160.797922 74.2621645 145.886753 74.2621645 145.886753 85.4441558 160.797922 85.4441558 160.797922 100.355325 171.979913 100.355325 171.979913 85.4441558 186.891082 85.4441558"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    x: "145.887",
    y: "169.015",
    width: "41.004",
    height: "11.183"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128.155152,67.662684 L15.0929177,67.662684 C10.9747532,75.3537662 7.62015584,83.5147359 5.12775758,92.0436364 L128.155152,92.0436364 L128.155152,67.662684 Z",
    id: "Path",
    fill: "#E5E5E5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128.155152,162.415931 L4.68668398,162.415931 C7.05939394,170.933749 10.2887619,179.09361 14.2805887,186.796883 L128.155152,186.796883 L128.155152,162.415931 Z",
    id: "Path",
    fill: "#E5E5E5"
  }))));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("create-block/accordion", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Accordion", "create-block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Example block written with ESNext standard and JSX support – build step required.", "create-block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  supports: {
    // Removes support for an HTML mode.
    html: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accordion_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-icon */ "./src/accordion-icon.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */

/**
 * Inteanal dependencies
 */




var Save = function Save(_ref) {
  var _containerStyle;

  var attributes = _ref.attributes;
  var id = attributes.id,
      accordionType = attributes.accordionType,
      displayIcon = attributes.displayIcon,
      transitionDuration = attributes.transitionDuration,
      accordionStyle = attributes.accordionStyle,
      backgroundType = attributes.backgroundType,
      containerBackground = attributes.containerBackground,
      containerGradient = attributes.containerGradient,
      containerBorderSize = attributes.containerBorderSize,
      containerBorderType = attributes.containerBorderType,
      containerBorderColor = attributes.containerBorderColor,
      containerMarginTop = attributes.containerMarginTop,
      containerMarginRight = attributes.containerMarginRight,
      containerMarginBottom = attributes.containerMarginBottom,
      containerMarginLeft = attributes.containerMarginLeft,
      containerPaddingTop = attributes.containerPaddingTop,
      containerPaddingRight = attributes.containerPaddingRight,
      containerPaddingBottom = attributes.containerPaddingBottom,
      containerPaddingLeft = attributes.containerPaddingLeft,
      accordions = attributes.accordions,
      expandedTabs = attributes.expandedTabs,
      selectedTab = attributes.selectedTab,
      tabIcon = attributes.tabIcon,
      expandedIcon = attributes.expandedIcon,
      containerHOffset = attributes.containerHOffset,
      containerVOffset = attributes.containerVOffset,
      containerShadowSpread = attributes.containerShadowSpread,
      containerShadowBlur = attributes.containerShadowBlur,
      containerShadowColor = attributes.containerShadowColor,
      titleLevel = attributes.titleLevel,
      titleFontSize = attributes.titleFontSize,
      titleColor = attributes.titleColor,
      titleBackgroundType = attributes.titleBackgroundType,
      titleBackgroundColor = attributes.titleBackgroundColor,
      titleBackgroundGradient = attributes.titleBackgroundGradient,
      tabBorderStyle = attributes.tabBorderStyle,
      tabBorderColor = attributes.tabBorderColor,
      tabBorderRadius = attributes.tabBorderRadius,
      contentAlign = attributes.contentAlign,
      contentColor = attributes.contentColor,
      contentFontSize = attributes.contentFontSize,
      contentMarginTop = attributes.contentMarginTop,
      contentMarginRight = attributes.contentMarginRight,
      contentMarginBottom = attributes.contentMarginBottom,
      contentMarginLeft = attributes.contentMarginLeft,
      contentPaddingTop = attributes.contentPaddingTop,
      contentPaddingRight = attributes.contentPaddingRight,
      contentPaddingBottom = attributes.contentPaddingBottom,
      contentPaddingLeft = attributes.contentPaddingLeft,
      contentBackgroundType = attributes.contentBackgroundType,
      contentBackgroundColor = attributes.contentBackgroundColor,
      contentGradient = attributes.contentGradient,
      contentBorderStyle = attributes.contentBorderStyle,
      contentBorderColor = attributes.contentBorderColor,
      contentHOffset = attributes.contentHOffset,
      contentVOffset = attributes.contentVOffset,
      contentShadowColor = attributes.contentShadowColor,
      contentShadowBlur = attributes.contentShadowBlur,
      contentShadowSpread = attributes.contentShadowSpread,
      iconColor = attributes.iconColor,
      iconSize = attributes.iconSize,
      iconMarginTop = attributes.iconMarginTop,
      iconMarginRight = attributes.iconMarginRight,
      iconMarginBottom = attributes.iconMarginBottom,
      iconMarginLeft = attributes.iconMarginLeft,
      iconPaddingTop = attributes.iconPaddingTop,
      iconPaddingRight = attributes.iconPaddingRight,
      iconPaddingBottom = attributes.iconPaddingBottom,
      iconPaddingLeft = attributes.iconPaddingLeft,
      iconBackgroundType = attributes.iconBackgroundType,
      iconBackgroundColor = attributes.iconBackgroundColor,
      iconGradient = attributes.iconGradient,
      iconSpace = attributes.iconSpace,
      iconBorderRadius = attributes.iconBorderRadius,
      iconPosition = attributes.iconPosition,
      iconHOffset = attributes.iconHOffset,
      iconVOffset = attributes.iconVOffset,
      iconShadowBlur = attributes.iconShadowBlur,
      iconShadowSpread = attributes.iconShadowSpread,
      iconShadowColor = attributes.iconShadowColor,
      transitionFunction = attributes.transitionFunction,
      displayContainerBorder = attributes.displayContainerBorder,
      tabHOffset = attributes.tabHOffset,
      tabVOffset = attributes.tabVOffset,
      tabShadowBlur = attributes.tabShadowBlur,
      tabShadowSpread = attributes.tabShadowSpread,
      tabShadowColor = attributes.tabShadowColor,
      titleAlignment = attributes.titleAlignment,
      tabBorderColorType = attributes.tabBorderColorType,
      tabBorderGradient = attributes.tabBorderGradient,
      tabBorderImageSlice = attributes.tabBorderImageSlice,
      tabBorderWidth = attributes.tabBorderWidth,
      isHover = attributes.isHover,
      hoverColor = attributes.hoverColor,
      hoverIndex = attributes.hoverIndex,
      activeColor = attributes.activeColor,
      activeTitleColor = attributes.activeTitleColor,
      containerImageURL = attributes.containerImageURL,
      containerBackgroundSize = attributes.containerBackgroundSize,
      containerBackgroundClip = attributes.containerBackgroundClip,
      containerBackgroundRepeat = attributes.containerBackgroundRepeat,
      containerBackgroundPositionX = attributes.containerBackgroundPositionX,
      containerBackgroundPositionY = attributes.containerBackgroundPositionY,
      containerBackgoundAttachment = attributes.containerBackgoundAttachment,
      tabMarginTop = attributes.tabMarginTop,
      tabMarginRight = attributes.tabMarginRight,
      tabMarginBottom = attributes.tabMarginBottom,
      tabMarginLeft = attributes.tabMarginLeft,
      tabPaddingTop = attributes.tabPaddingTop,
      tabPaddingRight = attributes.tabPaddingRight,
      tabPaddingBottom = attributes.tabPaddingBottom,
      tabPaddingLeft = attributes.tabPaddingLeft,
      contentBorderTop = attributes.contentBorderTop,
      contentBorderRight = attributes.contentBorderRight,
      contentBorderBottom = attributes.contentBorderBottom,
      contentBorderLeft = attributes.contentBorderLeft,
      containerBorderRadius = attributes.containerBorderRadius,
      containerMarginUnit = attributes.containerMarginUnit,
      containerPaddingUnit = attributes.containerPaddingUnit,
      containerBorderUnit = attributes.containerBorderUnit,
      containerRadiusUnit = attributes.containerRadiusUnit,
      tabMarginUnit = attributes.tabMarginUnit,
      tabPaddingUnit = attributes.tabPaddingUnit,
      tabBorderUnit = attributes.tabBorderUnit,
      tabRadiusUnit = attributes.tabRadiusUnit,
      contentMarginUnit = attributes.contentMarginUnit,
      contentPaddingUnit = attributes.contentPaddingUnit,
      iconSizeUnit = attributes.iconSizeUnit,
      iconMarginUnit = attributes.iconMarginUnit,
      iconPaddingUnit = attributes.iconPaddingUnit,
      contentSizeUnit = attributes.contentSizeUnit,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleTextTransform = attributes.titleTextTransform,
      titleTextDecoration = attributes.titleTextDecoration,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      contentFontFamily = attributes.contentFontFamily,
      contentFontWeight = attributes.contentFontWeight,
      contentTextTransform = attributes.contentTextTransform,
      contentTextDecoration = attributes.contentTextDecoration,
      contentLetterSpacing = attributes.contentLetterSpacing,
      contentLetterSpacingUnit = attributes.contentLetterSpacingUnit,
      contentLineHeight = attributes.contentLineHeight,
      contentLineHeightUnit = attributes.contentLineHeightUnit;
  var containerStyle = (_containerStyle = {
    background: backgroundType === "fill" ? containerBackground : "transparent",
    backgroundImage: backgroundType === "gradient" ? containerGradient : "none",
    backgroundSize: backgroundType === "image" ? containerBackgroundSize : undefined,
    backgroundRepeat: containerImageURL ? containerBackgroundRepeat : undefined,
    backgroundClip: backgroundType === "image" ? containerBackgroundClip : undefined
  }, _defineProperty(_containerStyle, "backgroundSize", backgroundType === "image" ? containerBackgroundSize : undefined), _defineProperty(_containerStyle, "backgroundPosition", containerImageURL ? "".concat(containerBackgroundPositionX, "% ").concat(containerBackgroundPositionY, "%") : undefined), _defineProperty(_containerStyle, "backgroundAttachment", containerImageURL ? containerBackgoundAttachment : undefined), _defineProperty(_containerStyle, "margin", containerMarginTop === 0 && containerMarginRight === 0 && containerMarginBottom === 0 && containerMarginLeft === 0 ? "auto" : "".concat(containerMarginTop).concat(containerMarginUnit, " ").concat(containerMarginRight).concat(containerMarginUnit, " ").concat(containerMarginBottom).concat(containerMarginUnit, " ").concat(containerMarginLeft).concat(containerMarginUnit)), _defineProperty(_containerStyle, "padding", "".concat(containerPaddingTop).concat(containerPaddingUnit, " ").concat(containerPaddingRight).concat(containerPaddingUnit, " ").concat(containerPaddingBottom).concat(containerPaddingUnit, " ").concat(containerPaddingLeft).concat(containerPaddingUnit)), _defineProperty(_containerStyle, "border", "".concat(containerBorderSize || 0).concat(containerBorderUnit, " ").concat(containerBorderType, " ").concat(containerBorderColor || "#000000")), _defineProperty(_containerStyle, "borderRadius", "".concat(containerBorderRadius || 0).concat(containerRadiusUnit)), _defineProperty(_containerStyle, "boxShadow", "".concat(containerHOffset || 0, "px ").concat(containerVOffset || 0, "px ").concat(containerShadowBlur || 0, "px ").concat(containerShadowSpread || 0, "px ").concat(containerShadowColor || "#dedede")), _containerStyle);
  var iconWrapperStyles = {
    display: displayIcon ? "flex" : "none",
    margin: "".concat(iconMarginTop).concat(iconMarginUnit, " ").concat(iconMarginRight).concat(iconMarginUnit, " ").concat(iconMarginBottom).concat(iconMarginUnit, " ").concat(iconMarginLeft).concat(iconMarginUnit),
    background: iconBackgroundType === "fill" && iconBackgroundColor,
    backgroundImage: iconBackgroundType === "gradient" && iconGradient,
    borderRadius: "".concat(iconBorderRadius || 0, "%"),
    boxShadow: "".concat(iconHOffset || 0, "px ").concat(iconVOffset || 0, "px ").concat(iconShadowBlur || 0, "px ").concat(iconShadowSpread || 0, "px ").concat(iconShadowColor || "#000000")
  };
  var iconStyles = {
    color: iconColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ICON_COLOR"],
    fontSize: "".concat(iconSize || 14).concat(iconSizeUnit),
    padding: "".concat(iconPaddingTop).concat(iconPaddingUnit, " ").concat(iconPaddingRight).concat(iconPaddingUnit, " ").concat(iconPaddingBottom).concat(iconPaddingUnit, " ").concat(iconPaddingLeft).concat(iconPaddingUnit, " "),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };
  var titleStyles = {
    titleWrapper: {
      flexDirection: iconPosition === "right" && displayIcon ? "row-reverse" : "row",
      justifyContent: iconPosition === "right" ? "space-between" : titleAlignment,
      borderWidth: "".concat(tabBorderWidth || 0).concat(tabBorderUnit),
      backgroundColor: backgroundType === "fill" ? titleBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_BACKGROUND"] : "transparent",
      borderColor: tabBorderColorType === "fill" && tabBorderColor ? tabBorderColor : "transparent",
      backgroundImage: titleBackgroundType === "gradient" && titleBackgroundGradient ? titleBackgroundGradient : "transparent",
      borderRadius: "".concat(tabBorderRadius || 0).concat(tabRadiusUnit),
      borderStyle: tabBorderStyle || "unset",
      borderImage: tabBorderColorType === "gradient" && tabBorderGradient ? "".concat(tabBorderGradient, " ").concat(tabBorderImageSlice, "% stretch") : "none",
      boxShadow: "".concat(tabHOffset || 0, "px ").concat(tabVOffset || 0, "px ").concat(tabShadowBlur || 0, "px ").concat(tabShadowSpread || 0, "px ").concat(tabShadowColor || "#dbdbdb"),
      margin: "".concat(tabMarginTop || 0).concat(tabMarginUnit, " ").concat(tabMarginRight || 0).concat(tabMarginUnit, " ").concat(tabMarginBottom || 0).concat(tabMarginUnit, " ").concat(tabMarginLeft || 0).concat(tabMarginUnit),
      padding: "".concat(tabPaddingTop || 0).concat(tabPaddingUnit, " ").concat(tabPaddingRight || 0).concat(tabPaddingUnit || 0, " ").concat(tabPaddingBottom || 0).concat(tabPaddingUnit, " ").concat(tabPaddingLeft || 0).concat(tabPaddingUnit)
    },
    title: {
      color: titleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"],
      fontSize: "".concat(titleFontSize || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_SIZE"]).concat(titleSizeUnit),
      fontFamily: titleFontFamily,
      fontWeight: titleFontWeight,
      textTransform: titleTextTransform,
      textDecoration: titleTextDecoration,
      lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined,
      letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
      margin: 0
    }
  };
  var contentStyles = {
    contentWrapper: {
      textAlign: contentAlign,
      backgroundColor: contentBackgroundType === "fill" && contentBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTENT_BACKGROUND"],
      backgroundImage: contentBackgroundType === "gradient" ? contentGradient : "none",
      borderStyle: "".concat(contentBorderStyle),
      borderWidth: "".concat(contentBorderTop, "px ").concat(contentBorderRight, "px ").concat(contentBorderBottom, "px ").concat(contentBorderLeft, "px"),
      borderColor: "".concat(contentBorderColor) || "none",
      boxShadow: "".concat(contentHOffset || 0, "px ").concat(contentVOffset || 0, "px ").concat(contentShadowBlur || 0, "px  ").concat(contentShadowSpread || 0, "px ").concat(contentShadowColor),
      transitionDuration: "".concat(transitionDuration || 500, "ms"),
      transitionProperty: "height,overflow,opacity",
      maxHeight: 2000,
      overflow: "hidden"
    },
    content: {
      margin: "".concat(contentMarginTop || 0).concat(contentMarginUnit, " ").concat(contentMarginRight || 0).concat(contentMarginUnit, " ").concat(contentMarginBottom || 0).concat(contentMarginUnit, " ").concat(contentMarginLeft || 0).concat(contentMarginUnit),
      padding: "".concat(contentPaddingTop || 0).concat(contentPaddingUnit, " ").concat(contentPaddingRight || 0).concat(contentPaddingUnit, " ").concat(contentPaddingBottom || 0).concat(contentPaddingUnit, " ").concat(contentPaddingLeft || 0).concat(contentPaddingUnit),
      fontSize: "".concat(contentFontSize || 18).concat(contentSizeUnit),
      fontFamily: contentFontFamily,
      fontWeight: contentFontWeight,
      textTransform: contentTextTransform,
      textDecoration: contentTextDecoration,
      lineHeight: contentLineHeight ? "".concat(contentLineHeight).concat(contentLineHeightUnit) : undefined,
      letterSpacing: contentLetterSpacing ? "".concat(contentLetterSpacing).concat(contentLetterSpacingUnit) : undefined,
      color: contentColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTENT_COLOR"],
      transition: "all ".concat(transitionDuration || 500, "ms")
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-container",
    style: containerStyle,
    "data-id": id,
    "data-accordion-type": accordionType || "toggle",
    "data-transition-function": transitionFunction || "ease",
    "data-transition-duration": transitionDuration,
    "data-tab-icon": displayIcon ? tabIcon : "",
    "data-expanded-icon": displayIcon ? expandedIcon : "",
    "data-hover-color": hoverColor ? hoverColor : undefined,
    "data-active-color": activeColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"],
    "data-title-color": titleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"],
    "data-active-title-color": activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_ACTIVE_COLOR"],
    "data-icon-color": iconColor || titleColor || _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_TITLE_COLOR"],
    "data-original-color": backgroundType === "image" ? "transparent" : titleBackgroundType === "fill" ? titleBackgroundColor || "#ededed" : titleBackgroundType === "gradient" ? titleBackgroundGradient : "transparent",
    "data-background-image-url": containerImageURL ? containerImageURL : ""
  }, accordions.map(function (accordion, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-wrapper ",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-title-wrapper",
      style: titleStyles.titleWrapper
    }, /*#__PURE__*/React.createElement(_accordion_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      icon: tabIcon,
      iconWrapperStyles: iconWrapperStyles,
      iconStyles: iconStyles
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
      tagName: titleLevel,
      className: "eb-accordion-title",
      style: titleStyles.title,
      value: accordion.title
    })), /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-content-wrapper",
      style: contentStyles.contentWrapper
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"].Content, {
      tagName: "p",
      className: "eb-accordion-content",
      style: contentStyles.content,
      value: accordion.content
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/helper.js":
/*!************************!*\
  !*** ./util/helper.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return switchFontSizes; });
function switchFontSizes(unit, titleLevel) {
  if (unit === "em") {
    switch (titleLevel) {
      case "h1":
        return 2;

      case "h2":
        return 1.5;

      case "h3":
        return 1.3;

      case "h4":
        return 1;

      case "h5":
        return 0.8;

      case "h6":
        return 0.7;
    }
  } else {
    switch (titleLevel) {
      case "h1":
        return 32;

      case "h2":
        return 24;

      case "h3":
        return 20;

      case "h4":
        return 16;

      case "h5":
        return 12;

      case "h6":
        return 11;
    }
  }
}

/***/ }),

/***/ "./util/uuid.js":
/*!**********************!*\
  !*** ./util/uuid.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var uuid = function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (uuid);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map