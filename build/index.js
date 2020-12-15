(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/image-avatar/style.scss":
/*!**************************************!*\
  !*** ./util/image-avatar/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
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

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
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

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
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

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/accordion-icon.js":
/*!*******************************!*\
  !*** ./src/accordion-icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AccordionIcon = function AccordionIcon(_ref) {
  var icon = _ref.icon,
      iconWrapperStyles = _ref.iconWrapperStyles,
      iconStyles = _ref.iconStyles;
  return /*#__PURE__*/React.createElement("span", {
    className: "eb-accordion-icon-wrapper",
    style: iconWrapperStyles
  }, /*#__PURE__*/React.createElement("span", {
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
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/uuid */ "./util/uuid.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/helper */ "./util/helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
        return activeColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setAccordionActiveColor", function (index) {
      var _this$props$attribute6 = _this.props.attributes,
          selectedTab = _this$props$attribute6.selectedTab,
          activeColor = _this$props$attribute6.activeColor;

      if (selectedTab === index) {
        return activeColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
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


        return hoverColor || activeColor || titleBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_BACKGROUND"];
      }

      return "transparent";
    });

    _defineProperty(_assertThisInitialized(_this), "setToggleTitleColor", function (index) {
      var _this$props$attribute8 = _this.props.attributes,
          expandedTabs = _this$props$attribute8.expandedTabs,
          activeTitleColor = _this$props$attribute8.activeTitleColor;

      if (expandedTabs.includes(index)) {
        return activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setAccordionTitleColor", function (index) {
      var _this$props$attribute9 = _this.props.attributes,
          selectedTab = _this$props$attribute9.selectedTab,
          activeTitleColor = _this$props$attribute9.activeTitleColor;

      if (selectedTab === index) {
        return activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
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


      return activeTitleColor || titleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
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
          activeIconColor = activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
        }
      } else {
        if (expandedTabs.includes(index)) {
          activeIconColor = activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
        }
      }

      return activeIconColor || iconColor || titleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"];
    });

    _defineProperty(_assertThisInitialized(_this), "onLevelChange", function (header, titleSizeUnit) {
      var titleLevel = header.value;
      var titleFontSize = Object(_util_helper__WEBPACK_IMPORTED_MODULE_5__["default"])(titleSizeUnit, titleLevel);

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
      var id = Object(_util_uuid__WEBPACK_IMPORTED_MODULE_4__["default"])().substr(0, 5);
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
        color: iconColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ICON_COLOR"],
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
          color: titleColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_COLOR"],
          fontSize: "".concat(titleFontSize || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_SIZE"]).concat(titleSizeUnit),
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
          backgroundColor: contentBackgroundType === "fill" && contentBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONTENT_BACKGROUND"],
          backgroundImage: contentBackgroundType === "gradient" ? contentGradient : "none",
          borderStyle: "".concat(contentBorderStyle),
          borderWidth: "".concat(contentBorderTop || 0, "px ").concat(contentBorderRight || 0, "px ").concat(contentBorderBottom || 0, "px ").concat(contentBorderLeft || 0, "px"),
          borderColor: contentBorderColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONTENT_BORDER_COLOR"],
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
          color: contentColor || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONTENT_COLOR"]
        }
      };
      return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
        onDeleteAccordion: this.onDeleteAccordion,
        onSortEnd: this.onSortEnd,
        onLevelChange: this.onLevelChange
      })), /*#__PURE__*/React.createElement("div", {
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
            color: _this2.isExpanded(index) ? _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_ACTIVE_COLOR"] : _this2.getIconColor(index)
          })
        }), /*#__PURE__*/React.createElement(RichText, {
          tagName: titleLevel,
          className: "eb-accordion-title",
          allowedFormats: [],
          style: _objectSpread(_objectSpread({}, titleStyles.title), {}, {
            color: _this2.isExpanded(index) ? _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_TITLE_ACTIVE_COLOR"] : _this2.getTitleColor(index)
          }),
          placeholder: "Add Title Here",
          value: accordion.title,
          onChange: function onChange(nextTitle) {
            return _this2.onChange(nextTitle, index, "title");
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "eb-accordion-content-wrapper",
          style: _objectSpread(_objectSpread({}, contentStyles.contentWrapper), {}, {
            maxHeight: _this2.isExpanded(index) ? _constants__WEBPACK_IMPORTED_MODULE_3__["MAX_HEIGHT"] : 0,
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

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {
    accordions: [{
      title: "Accordion Tab Title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      title: "Accordion Tab Title 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }],
    displayIcon: true,
    tabIcon: "fas fa-angle-right"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

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
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example */ "./src/example.js");








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("block/accordion", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Accordion", "block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("", "block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("accordion", "essential-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("toggle", "essential-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("essential", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_faIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/faIcons */ "./util/faIcons.js");
/* harmony import */ var _sortable_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortable-accordion */ "./src/sortable-accordion.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/image-avatar/ImageAvater */ "./util/image-avatar/ImageAvater.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_color_control_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/color-control/index */ "./util/color-control/index.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dropdown = _wp$components.Dropdown;
/**
 * Internal dependencies
 */












var Inspector = function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      onDeleteAccordion = props.onDeleteAccordion,
      onSortEnd = props.onSortEnd,
      onLevelChange = props.onLevelChange;
  var accordionType = attributes.accordionType,
      displayIcon = attributes.displayIcon,
      transitionDuration = attributes.transitionDuration,
      accordionStyle = attributes.accordionStyle,
      backgroundType = attributes.backgroundType,
      containerBorderSize = attributes.containerBorderSize,
      containerBorderType = attributes.containerBorderType,
      containerBorderColor = attributes.containerBorderColor,
      containerGradient = attributes.containerGradient,
      containerMarginTop = attributes.containerMarginTop,
      containerMarginRight = attributes.containerMarginRight,
      containerMarginBottom = attributes.containerMarginBottom,
      containerMarginLeft = attributes.containerMarginLeft,
      containerPaddingTop = attributes.containerPaddingTop,
      containerPaddingRight = attributes.containerPaddingRight,
      containerPaddingBottom = attributes.containerPaddingBottom,
      containerPaddingLeft = attributes.containerPaddingLeft,
      accordions = attributes.accordions,
      tabIcon = attributes.tabIcon,
      expandedIcon = attributes.expandedIcon,
      containerBackground = attributes.containerBackground,
      containerHOffset = attributes.containerHOffset,
      containerVOffset = attributes.containerVOffset,
      containerShadowBlur = attributes.containerShadowBlur,
      containerShadowSpread = attributes.containerShadowSpread,
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
      hoverColor = attributes.hoverColor,
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
  var TITLE_SIZE_MIN = 1;
  var TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;
  var TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
  var TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
  var TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
  var TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
  var TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
  var CONTENT_SIZE_MAX = contentSizeUnit === "em" ? 10 : 100;
  var CONTENT_SIZE_STEP = contentSizeUnit === "em" ? 0.1 : 1;
  var CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;
  var CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;
  var CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;
  var CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;
  return /*#__PURE__*/React.createElement(InspectorControls, {
    keys: "controls"
  }, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Accordion Types"),
    id: "eb-accordion-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-accordion-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_0__["ACCORDION_TYPES"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: accordionType !== item.value,
      isPrimary: accordionType === item.value,
      onClick: function onClick() {
        return setAttributes({
          accordionType: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-accordion-sortable",
    label: __("Accordion List")
  }, /*#__PURE__*/React.createElement(_sortable_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    accordions: accordions,
    onDeleteAccordion: onDeleteAccordion,
    onSortEnd: onSortEnd
  })), /*#__PURE__*/React.createElement(TextControl, {
    label: __("Toggle Speed"),
    type: "number",
    value: transitionDuration || 500,
    onChange: function onChange(newValue) {
      return setAttributes({
        transitionDuration: parseInt(newValue, 10)
      });
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Transition Function"),
    value: transitionFunction,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["TRANSITION_TYPES"],
    onChange: function onChange(newValue) {
      return setAttributes({
        transitionFunction: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Display Icon"),
    checked: displayIcon,
    onChange: function onChange() {
      return setAttributes({
        displayIcon: !displayIcon
      });
    }
  })), displayIcon && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Icon Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Tab Icon")
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_2__["default"],
    value: tabIcon,
    onChange: function onChange(tabIcon) {
      return setAttributes({
        tabIcon: tabIcon
      });
    },
    appendTo: "body"
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Expanded Icon")
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_2__["default"],
    value: expandedIcon,
    onChange: function onChange(expandedIcon) {
      return setAttributes({
        expandedIcon: expandedIcon
      });
    },
    appendTo: "body"
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("General"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type"),
    id: "eb-accordion-background-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-accordion-background-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: backgroundType !== item.value,
      isPrimary: backgroundType === item.value,
      onClick: function onClick() {
        return setAttributes({
          backgroundType: item.value
        });
      }
    }, item.label);
  }))), backgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Background"),
    color: containerBackground,
    onChange: function onChange(containerBackground) {
      return setAttributes({
        containerBackground: containerBackground
      });
    }
  }), backgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Gradient Colors"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colorOne: "#c9d6ff",
    colorTwo: "#e2e2e2",
    onChange: function onChange(newValue) {
      return setAttributes({
        containerGradient: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Image Slice"),
    value: tabBorderImageSlice,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabBorderImageSlice: newValue
      });
    },
    min: 0,
    max: 50
  })), backgroundType === "image" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Image Settings")
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        containerImageURL: media.url,
        containerImageID: media.id
      });
    },
    allowedTypes: ["image"],
    value: containerImageID,
    render: function render(_ref) {
      var open = _ref.open;
      return !containerImageURL && /*#__PURE__*/React.createElement(Button, {
        className: "eb-accordion-upload-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  })), containerImageURL && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image"),
    id: "eb-accordion-bg-image"
  }, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_5__["default"], {
    imageUrl: containerImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        containerImageURL: null
      });
    }
  })), backgroundType === "image" && containerImageURL && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Size"),
    value: containerBackgroundSize,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_SIZE"],
    onChange: function onChange(newSize) {
      return setAttributes({
        containerBackgroundSize: newSize
      });
    }
  }), backgroundType === "image" && containerImageURL && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Clip"),
    value: containerBackgroundClip,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_CLIP"],
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBackgroundClip: newValue
      });
    }
  }), backgroundType === "image" && containerImageURL && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Repeat"),
    value: containerBackgroundRepeat,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_REPEAT"],
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBackgroundRepeat: newValue
      });
    }
  }), backgroundType === "image" && containerImageURL && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Background Position X"),
    value: containerBackgroundPositionX,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBackgroundPositionX: newValue
      });
    },
    min: 0,
    max: 100
  }), backgroundType === "image" && containerImageURL && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Background Position Y"),
    value: containerBackgroundPositionY,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBackgroundPositionY: newValue
      });
    },
    min: 0,
    max: 100
  }), backgroundType === "image" && containerImageURL && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Attachment"),
    value: containerBackgoundAttachment,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND_ATTACHMENT"],
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBackgoundAttachment: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Container Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: containerMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(containerMarginUnit) {
      return setAttributes({
        containerMarginUnit: containerMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Margin"),
    top: containerMarginTop,
    right: containerMarginRight,
    bottom: containerMarginBottom,
    left: containerMarginLeft,
    onChange: function onChange(_ref2) {
      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes({
        containerMarginTop: top,
        containerMarginRight: right,
        containerMarginBottom: bottom,
        containerMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: containerPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(containerPaddingUnit) {
      return setAttributes({
        containerPaddingUnit: containerPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Padding"),
    top: containerPaddingTop,
    right: containerPaddingRight,
    bottom: containerPaddingBottom,
    left: containerPaddingLeft,
    onChange: function onChange(_ref3) {
      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes({
        containerPaddingTop: top,
        containerPaddingRight: right,
        containerPaddingBottom: bottom,
        containerPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Container Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Type"),
    value: containerBorderType,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BORDER_STYLES"],
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBorderType: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Border Color"),
    color: containerBorderColor,
    onChange: function onChange(containerBorderColor) {
      return setAttributes({
        containerBorderColor: containerBorderColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: containerBorderUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }],
    onClick: function onClick(containerBorderUnit) {
      return setAttributes({
        containerBorderUnit: containerBorderUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Size"),
    value: containerBorderSize,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBorderSize: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: containerRadiusUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(containerRadiusUnit) {
      return setAttributes({
        containerRadiusUnit: containerRadiusUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: containerBorderRadius,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerBorderRadius: newValue
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Container Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Shadow Color"),
    color: containerShadowColor,
    onChange: function onChange(containerShadowColor) {
      return setAttributes({
        containerShadowColor: containerShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: containerHOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerHOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    allowReset: true,
    value: containerVOffset,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerVOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Blur"),
    value: containerShadowBlur,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerShadowBlur: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Spread"),
    value: containerShadowSpread,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        containerShadowSpread: newValue
      });
    },
    min: 0,
    max: 10
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Typography"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Title"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: __("Font Family"),
        value: titleFontFamily,
        onChange: function onChange(titleFontFamily) {
          return setAttributes({
            titleFontFamily: titleFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: titleSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleSizeUnit) {
          return setAttributes({
            titleSizeUnit: titleSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: titleFontSize,
        onChange: function onChange(titleFontSize) {
          return setAttributes({
            titleFontSize: titleFontSize
          });
        },
        step: TITLE_SIZE_STEP,
        min: 0,
        max: TITLE_SIZE_MAX
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: titleFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["FONT_WEIGHTS"],
        onChange: function onChange(titleFontWeight) {
          return setAttributes({
            titleFontWeight: titleFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: titleTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_TRANSFORM"],
        onChange: function onChange(titleTextTransform) {
          return setAttributes({
            titleTextTransform: titleTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: titleTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_DECORATION"],
        onChange: function onChange(titleTextDecoration) {
          return setAttributes({
            titleTextDecoration: titleTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: titleLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLetterSpacingUnit) {
          return setAttributes({
            titleLetterSpacingUnit: titleLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: titleLetterSpacing,
        onChange: function onChange(titleLetterSpacing) {
          return setAttributes({
            titleLetterSpacing: titleLetterSpacing
          });
        },
        min: 0,
        max: TITLE_SPACING_MAX,
        step: TITLE_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: titleLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLineHeightUnit) {
          return setAttributes({
            titleLineHeightUnit: titleLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: titleLineHeight,
        onChange: function onChange(titleLineHeight) {
          return setAttributes({
            titleLineHeight: titleLineHeight
          });
        },
        min: 0,
        max: TITLE_LINE_HEIGHT_MAX,
        step: TITLE_LINE_HEIGHT_STEP
      }));
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Content"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref5) {
      var isOpen = _ref5.isOpen,
          onToggle = _ref5.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: __("Font Family"),
        value: contentFontFamily,
        onChange: function onChange(contentFontFamily) {
          return setAttributes({
            contentFontFamily: contentFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: contentSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentSizeUnit) {
          return setAttributes({
            contentSizeUnit: contentSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: contentFontSize,
        onChange: function onChange(contentFontSize) {
          return setAttributes({
            contentFontSize: contentFontSize
          });
        },
        step: CONTENT_SIZE_STEP,
        min: 0,
        max: CONTENT_SIZE_MAX
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: contentFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["FONT_WEIGHTS"],
        onChange: function onChange(contentFontWeight) {
          return setAttributes({
            contentFontWeight: contentFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: contentTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_TRANSFORM"],
        onChange: function onChange(contentTextTransform) {
          return setAttributes({
            contentTextTransform: contentTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: contentTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_0__["TEXT_DECORATION"],
        onChange: function onChange(contentTextDecoration) {
          return setAttributes({
            contentTextDecoration: contentTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: contentLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentLetterSpacingUnit) {
          return setAttributes({
            contentLetterSpacingUnit: contentLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: contentLetterSpacing,
        onChange: function onChange(contentLetterSpacing) {
          return setAttributes({
            contentLetterSpacing: contentLetterSpacing
          });
        },
        min: 0,
        max: CONTENT_SPACING_MAX,
        step: CONTENT_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: contentLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentLineHeightUnit) {
          return setAttributes({
            contentLineHeightUnit: contentLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: contentLineHeight,
        onChange: function onChange(contentLineHeight) {
          return setAttributes({
            contentLineHeight: contentLineHeight
          });
        },
        min: 0,
        max: CONTENT_LINE_HEIGHT_MAX,
        step: CONTENT_LINE_HEIGHT_STEP
      }));
    }
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Tab Style"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Title Level"),
    id: "eb-accoridon-title-level"
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["HEADERS"].map(function (header) {
    return /*#__PURE__*/React.createElement(Button, {
      isSecondary: titleLevel !== header.value,
      isPrimary: titleLevel === header.value,
      onClick: function onClick() {
        return onLevelChange(header, titleSizeUnit);
      }
    }, header.label);
  }))), iconPosition === "left" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Title Align "),
    id: "eb-accoridon-title-align"
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_ALIGNMENT"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isSecondary: titleAlignment !== item.value,
      isPrimary: titleAlignment === item.value,
      onClick: function onClick() {
        return setAttributes({
          titleAlignment: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Title Background Type"),
    id: "eb-accordion-title-bg-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-accordion-title-bg-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_BACKGROUND_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: titleBackgroundType !== item.value,
      isPrimary: titleBackgroundType === item.value,
      onClick: function onClick() {
        return setAttributes({
          titleBackgroundType: item.value
        });
      }
    }, item.label);
  }))), titleBackgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Background Color"),
    color: titleBackgroundColor,
    onChange: function onChange(titleBackgroundColor) {
      return setAttributes({
        titleBackgroundColor: titleBackgroundColor
      });
    }
  }), titleBackgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Gradient Colors"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colorOne: "#141e30",
    colorTwo: "#243b55",
    angle: 45,
    onChange: function onChange(newGradient) {
      return setAttributes({
        titleBackgroundGradient: newGradient
      });
    }
  })), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Title Color"),
    color: titleColor,
    onChange: function onChange(titleColor) {
      return setAttributes({
        titleColor: titleColor
      });
    }
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Tab Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: tabMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(tabMarginUnit) {
      return setAttributes({
        tabMarginUnit: tabMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Margin"),
    top: tabMarginTop,
    right: tabMarginRight,
    bottom: tabMarginBottom,
    left: tabMarginLeft,
    onChange: function onChange(_ref6) {
      var top = _ref6.top,
          right = _ref6.right,
          bottom = _ref6.bottom,
          left = _ref6.left;
      return setAttributes({
        tabMarginTop: top,
        tabMarginRight: right,
        tabMarginBottom: bottom,
        tabMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: tabPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(tabPaddingUnit) {
      return setAttributes({
        tabPaddingUnit: tabPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Padding"),
    top: tabPaddingTop,
    right: tabPaddingRight,
    bottom: tabPaddingBottom,
    left: tabPaddingLeft,
    onChange: function onChange(_ref7) {
      var top = _ref7.top,
          right = _ref7.right,
          bottom = _ref7.bottom,
          left = _ref7.left;
      return setAttributes({
        tabPaddingTop: top,
        tabPaddingRight: right,
        tabPaddingBottom: bottom,
        tabPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Tab Border Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Tab Border Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["COLOR_TYPES"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isSecondary: tabBorderColorType !== item.value,
      isPrimary: tabBorderColorType === item.value,
      onClick: function onClick() {
        return setAttributes({
          tabBorderColorType: item.value
        });
      }
    }, item.label);
  }))), tabBorderColorType === "fill" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Border Color"),
    color: tabBorderColor,
    onChange: function onChange(tabBorderColor) {
      return setAttributes({
        tabBorderColor: tabBorderColor
      });
    }
  }), tabBorderColorType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Border Gradient"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colorOne: "#ff512f",
    colorTwo: "#dd2476",
    angle: 45,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabBorderGradient: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Tab Border Image Slice"),
    value: tabBorderImageSlice,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabBorderImageSlice: newValue
      });
    },
    min: 0,
    max: 50
  })), tabBorderColorType === "fill" && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: tabBorderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_0__["BORDER_STYLES"],
    onChange: function onChange(newStyle) {
      return setAttributes({
        tabBorderStyle: newStyle
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: tabBorderUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }],
    onClick: function onClick(tabBorderUnit) {
      return setAttributes({
        tabBorderUnit: tabBorderUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Tab Border Width"),
    value: tabBorderWidth,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabBorderWidth: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: tabRadiusUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(tabRadiusUnit) {
      return setAttributes({
        tabRadiusUnit: tabRadiusUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Tab Border Radius"),
    value: tabBorderRadius,
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        tabBorderRadius: newSize
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Tab Shadow Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Shadow Color"),
    color: tabShadowColor,
    onChange: function onChange(tabShadowColor) {
      return setAttributes({
        tabShadowColor: tabShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: tabHOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabHOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: tabVOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabVOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Blur"),
    value: tabShadowBlur,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabShadowBlur: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Spread"),
    value: tabShadowSpread,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        tabShadowSpread: newValue
      });
    },
    min: 0,
    max: 10
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Active Colors"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Background Color"),
    color: activeColor,
    onChange: function onChange(activeColor) {
      return setAttributes({
        activeColor: activeColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Text Color"),
    color: activeTitleColor,
    onChange: function onChange(activeTitleColor) {
      return setAttributes({
        activeTitleColor: activeTitleColor
      });
    }
  })), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Hover Color"),
    color: hoverColor,
    onChange: function onChange(hoverColor) {
      return setAttributes({
        hoverColor: hoverColor
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Content Style"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Align")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["CONTENT_ALIGN"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: contentAlign !== item.value,
      isPrimary: contentAlign === item.value,
      onClick: function onClick() {
        return setAttributes({
          contentAlign: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_BACKGROUND_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: contentBackgroundType !== item.value,
      isPrimary: contentBackgroundType === item.value,
      onClick: function onClick() {
        return setAttributes({
          contentBackgroundType: item.value
        });
      }
    }, item.label);
  }))), contentBackgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Background Color"),
    color: contentBackgroundColor,
    onChange: function onChange(contentBackgroundColor) {
      return setAttributes({
        contentBackgroundColor: contentBackgroundColor
      });
    }
  }), contentBackgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Gradient Colors"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colorOne: "#ece9e6",
    colorTwo: "#ffffff",
    angle: 45,
    onChange: function onChange(newValue) {
      return setAttributes({
        contentGradient: newValue
      });
    }
  })), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Content Text Color"),
    color: contentColor,
    onChange: function onChange(contentColor) {
      return setAttributes({
        contentColor: contentColor
      });
    }
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Content Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: contentMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(contentMarginUnit) {
      return setAttributes({
        contentMarginUnit: contentMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Margin"),
    top: contentMarginTop,
    right: contentMarginRight,
    bottom: contentMarginBottom,
    left: contentMarginLeft,
    onChange: function onChange(_ref8) {
      var top = _ref8.top,
          right = _ref8.right,
          bottom = _ref8.bottom,
          left = _ref8.left;
      return setAttributes({
        contentMarginTop: top,
        contentMarginRight: right,
        contentMarginBottom: bottom,
        contentMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: contentPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(contentPaddingUnit) {
      return setAttributes({
        contentPaddingUnit: contentPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Padding"),
    top: contentPaddingTop,
    right: contentPaddingRight,
    bottom: contentPaddingBottom,
    left: contentPaddingLeft,
    onChange: function onChange(_ref9) {
      var top = _ref9.top,
          right = _ref9.right,
          bottom = _ref9.bottom,
          left = _ref9.left;
      return setAttributes({
        contentPaddingTop: top,
        contentPaddingRight: right,
        contentPaddingBottom: bottom,
        contentPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Content Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Border Color"),
    color: contentBorderColor,
    onChange: function onChange(contentBorderColor) {
      return setAttributes({
        contentBorderColor: contentBorderColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Border Width"),
    top: contentBorderTop,
    right: contentBorderRight,
    bottom: contentBorderBottom,
    left: contentBorderLeft,
    onChange: function onChange(_ref10) {
      var top = _ref10.top,
          right = _ref10.right,
          bottom = _ref10.bottom,
          left = _ref10.left;
      return setAttributes({
        contentBorderTop: top,
        contentBorderRight: right,
        contentBorderBottom: bottom,
        contentBorderLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Content Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Shadow Color"),
    color: contentShadowColor,
    onChange: function onChange(contentShadowColor) {
      return setAttributes({
        contentShadowColor: contentShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: contentHOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        contentHOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: contentVOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        contentVOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Blur"),
    value: contentShadowBlur,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        contentShadowBlur: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Spread"),
    value: contentShadowSpread,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        contentShadowSpread: newValue
      });
    },
    min: 0,
    max: 10
  }))), displayIcon && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Icon Style"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Icon Position")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["ICON_POSITIONS"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: iconPosition !== item.value,
      isPrimary: iconPosition === item.value,
      onClick: function onClick() {
        return setAttributes({
          iconPosition: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: iconSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(iconSizeUnit) {
      return setAttributes({
        iconSizeUnit: iconSizeUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Icon Size"),
    value: iconSize,
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        iconSize: newSize
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Icon Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_0__["TITLE_BACKGROUND_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: iconBackgroundType !== item.value,
      isPrimary: iconBackgroundType === item.value,
      onClick: function onClick() {
        return setAttributes({
          iconBackgroundType: item.value
        });
      }
    }, item.label);
  }))), iconBackgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Icon Background Color"),
    color: iconBackgroundColor,
    onChange: function onChange(iconBackgroundColor) {
      return setAttributes({
        iconBackgroundColor: iconBackgroundColor
      });
    }
  }), iconBackgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Icon Gradient Colors"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    colorOne: "#8e9eab",
    colorTwo: "#eef2f3",
    angle: 45,
    onChange: function onChange(newGradient) {
      return setAttributes({
        iconGradient: newGradient
      });
    }
  })), /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Icon Background Color"),
    color: iconColor,
    onChange: function onChange(iconColor) {
      return setAttributes({
        iconColor: iconColor
      });
    }
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Icon Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: iconMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(iconMarginUnit) {
      return setAttributes({
        iconMarginUnit: iconMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Margin"),
    top: iconMarginTop,
    right: iconMarginRight,
    bottom: iconMarginBottom,
    left: iconMarginLeft,
    onChange: function onChange(_ref11) {
      var top = _ref11.top,
          right = _ref11.right,
          bottom = _ref11.bottom,
          left = _ref11.left;
      return setAttributes({
        iconMarginTop: top,
        iconMarginRight: right,
        iconMarginBottom: bottom,
        iconMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: iconPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(iconPaddingUnit) {
      return setAttributes({
        iconPaddingUnit: iconPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Padding"),
    top: iconPaddingTop,
    right: iconPaddingRight,
    bottom: iconPaddingBottom,
    left: iconPaddingLeft,
    onChange: function onChange(_ref12) {
      var top = _ref12.top,
          right = _ref12.right,
          bottom = _ref12.bottom,
          left = _ref12.left;
      return setAttributes({
        iconPaddingTop: top,
        iconPaddingRight: right,
        iconPaddingBottom: bottom,
        iconPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Icon Background Radius"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Icon Background Radius"),
    value: iconBorderRadius,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        iconBorderRadius: newValue
      });
    },
    min: 0,
    max: 50
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Icon Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Shadow Color"),
    color: iconShadowColor,
    onChange: function onChange(iconShadowColor) {
      return setAttributes({
        iconShadowColor: iconShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: iconHOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        iconHOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: iconVOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        iconVOffset: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Blur"),
    value: iconShadowBlur,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        iconShadowBlur: newValue
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Spread"),
    value: iconShadowSpread,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        iconShadowSpread: newValue
      });
    },
    min: 0,
    max: 10
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

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

/***/ "./src/sortable-accordion.js":
/*!***********************************!*\
  !*** ./src/sortable-accordion.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");


var DragHandle = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableHandle"])(function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa fa-ellipsis-v drag-handle"
  });
});

var TrashIcon = function TrashIcon(_ref) {
  var position = _ref.position,
      onDeleteAccordion = _ref.onDeleteAccordion;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa fa-trash eb-accordion-sortable-trash",
    onClick: function onClick() {
      return onDeleteAccordion(position);
    }
  });
};

var SortableItem = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableElement"])(function (_ref2) {
  var accordion = _ref2.accordion,
      position = _ref2.position,
      onDeleteAccordion = _ref2.onDeleteAccordion;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "drag-helper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "eb-accordion-sortable-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DragHandle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "eb-accordion-sortable-title"
  }, accordion.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrashIcon, {
    position: position,
    onDeleteAccordion: onDeleteAccordion
  })));
});
var SortableList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableContainer"])(function (_ref3) {
  var accordions = _ref3.accordions,
      onDeleteAccordion = _ref3.onDeleteAccordion;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, accordions.map(function (accordion, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortableItem, {
      key: "item-".concat(index),
      index: index,
      position: index,
      accordion: accordion,
      onDeleteAccordion: onDeleteAccordion
    });
  }));
});

var SortableAccordions = function SortableAccordions(_ref4) {
  var accordions = _ref4.accordions,
      onDeleteAccordion = _ref4.onDeleteAccordion,
      onSortEnd = _ref4.onSortEnd;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortableList, {
    accordions: accordions,
    onDeleteAccordion: onDeleteAccordion,
    onSortEnd: onSortEnd,
    useDragHandle: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SortableAccordions);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 32,
          width: 32,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      }))));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/faIcons.js":
/*!*************************!*\
  !*** ./util/faIcons.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var faIcons = ["fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fas fa-address-book", "far fa-address-book", "fas fa-address-card", "far fa-address-card", "fas fa-adjust", "fab fa-adn", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fab fa-amazon", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fab fa-amilia", "fas fa-anchor", "fab fa-android", "fab fa-angellist", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fas fa-archive", "fas fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "far fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fab fa-asymmetrik", "fas fa-at", "fab fa-audible", "fas fa-audio-description", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fab fa-bandcamp", "fas fa-barcode", "fas fa-bars", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fab fa-behance", "fab fa-behance-square", "fas fa-bell", "far fa-bell", "fas fa-bell-slash", "far fa-bell-slash", "fas fa-bicycle", "fab fa-bimobject", "fas fa-binoculars", "fas fa-birthday-cake", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fas fa-blind", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-book", "fas fa-bookmark", "far fa-bookmark", "fas fa-braille", "fas fa-briefcase", "fab fa-btc", "fas fa-bug", "fas fa-building", "far fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fab fa-buromobelexperte", "fas fa-bus", "fab fa-buysellads", "fas fa-calculator", "fas fa-calendar", "far fa-calendar", "fas fa-calendar-alt", "far fa-calendar-alt", "fas fa-calendar-check", "far fa-calendar-check", "fas fa-calendar-minus", "far fa-calendar-minus", "fas fa-calendar-plus", "far fa-calendar-plus", "fas fa-calendar-times", "far fa-calendar-times", "fas fa-camera", "fas fa-camera-retro", "fas fa-car", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "far fa-caret-square-down", "fas fa-caret-square-left", "far fa-caret-square-left", "fas fa-caret-square-right", "far fa-caret-square-right", "fas fa-caret-square-up", "far fa-caret-square-up", "fas fa-caret-up", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fas fa-certificate", "fas fa-chart-area", "fas fa-chart-bar", "far fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "far fa-check-circle", "fas fa-check-square", "far fa-check-square", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fab fa-chrome", "fas fa-circle", "far fa-circle", "fas fa-circle-notch", "fas fa-clipboard", "far fa-clipboard", "fas fa-clock", "far fa-clock", "fas fa-clone", "far fa-clone", "fas fa-closed-captioning", "far fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-upload-alt", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fas fa-code", "fas fa-code-branch", "fab fa-codepen", "fab fa-codiepie", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-columns", "fas fa-comment", "far fa-comment", "fas fa-comment-alt", "far fa-comment-alt", "fas fa-comments", "far fa-comments", "fas fa-compass", "far fa-compass", "fas fa-compress", "fab fa-connectdevelop", "fab fa-contao", "fas fa-copy", "far fa-copy", "fas fa-copyright", "far fa-copyright", "fab fa-cpanel", "fab fa-creative-commons", "fas fa-credit-card", "far fa-credit-card", "fas fa-crop", "fas fa-crosshairs", "fab fa-css3", "fab fa-css3-alt", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-dashcube", "fas fa-database", "fas fa-deaf", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fas fa-desktop", "fab fa-deviantart", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fas fa-dollar-sign", "fas fa-dot-circle", "far fa-dot-circle", "fas fa-download", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-edge", "fas fa-edit", "far fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fab fa-ember", "fab fa-empire", "fas fa-envelope", "far fa-envelope", "fas fa-envelope-open", "far fa-envelope-open", "fas fa-envelope-square", "fab fa-envira", "fas fa-eraser", "fab fa-erlang", "fab fa-etsy", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fab fa-expeditedssl", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "far fa-eye-slash", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "far fa-file", "fas fa-file-alt", "far fa-file-alt", "fas fa-file-archive", "far fa-file-archive", "fas fa-file-audio", "far fa-file-audio", "fas fa-file-code", "far fa-file-code", "fas fa-file-excel", "far fa-file-excel", "fas fa-file-image", "far fa-file-image", "fas fa-file-pdf", "far fa-file-pdf", "fas fa-file-powerpoint", "far fa-file-powerpoint", "fas fa-file-video", "far fa-file-video", "fas fa-file-word", "far fa-file-word", "fas fa-film", "fas fa-filter", "fas fa-fire", "fas fa-fire-extinguisher", "fab fa-firefox", "fab fa-first-order", "fab fa-firstdraft", "fas fa-flag", "far fa-flag", "fas fa-flag-checkered", "fas fa-flask", "fab fa-flickr", "fab fa-fly", "fas fa-folder", "far fa-folder", "fas fa-folder-open", "far fa-folder-open", "fas fa-font", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fas fa-forward", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fas fa-frown", "far fa-frown", "fas fa-futbol", "far fa-futbol", "fas fa-gamepad", "fas fa-gavel", "fas fa-gem", "far fa-gem", "fas fa-genderless", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fas fa-gift", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fas fa-glass-martini", "fab fa-glide", "fab fa-glide-g", "fas fa-globe", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fas fa-graduation-cap", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fas fa-h-square", "fab fa-hacker-news", "fab fa-hacker-news-square", "fas fa-hand-lizard", "far fa-hand-lizard", "fas fa-hand-paper", "far fa-hand-paper", "fas fa-hand-peace", "far fa-hand-peace", "fas fa-hand-point-down", "far fa-hand-point-down", "fas fa-hand-point-left", "far fa-hand-point-left", "fas fa-hand-point-right", "far fa-hand-point-right", "fas fa-hand-point-up", "far fa-hand-point-up", "fas fa-hand-pointer", "far fa-hand-pointer", "fas fa-hand-rock", "far fa-hand-rock", "fas fa-hand-scissors", "far fa-hand-scissors", "fas fa-hand-spock", "far fa-hand-spock", "fas fa-handshake", "far fa-handshake", "fas fa-hashtag", "fas fa-hdd", "far fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-heart", "far fa-heart", "fas fa-heartbeat", "fab fa-hire-a-helper", "fas fa-history", "fas fa-home", "fab fa-hooli", "fas fa-hospital", "far fa-hospital", "fab fa-hotjar", "fas fa-hourglass", "far fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fas fa-i-cursor", "fas fa-id-badge", "far fa-id-badge", "fas fa-id-card", "far fa-id-card", "fas fa-image", "far fa-image", "fas fa-images", "far fa-images", "fab fa-imdb", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-info", "fas fa-info-circle", "fab fa-instagram", "fab fa-internet-explorer", "fab fa-ioxhost", "fas fa-italic", "fab fa-itunes", "fab fa-itunes-note", "fab fa-jenkins", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fas fa-key", "fas fa-keyboard", "far fa-keyboard", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fas fa-language", "fas fa-laptop", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fas fa-leaf", "fab fa-leanpub", "fas fa-lemon", "far fa-lemon", "fab fa-less", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "far fa-life-ring", "fas fa-lightbulb", "far fa-lightbulb", "fab fa-line", "fas fa-link", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "far fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fab fa-lyft", "fab fa-magento", "fas fa-magic", "fas fa-magnet", "fas fa-male", "fas fa-map", "far fa-map", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fas fa-medkit", "fab fa-medrt", "fab fa-meetup", "fas fa-meh", "far fa-meh", "fas fa-mercury", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-slash", "fab fa-microsoft", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "far fa-minus-square", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fas fa-mobile", "fas fa-mobile-alt", "fab fa-modx", "fab fa-monero", "fas fa-money-bill-alt", "far fa-money-bill-alt", "fas fa-moon", "far fa-moon", "fas fa-motorcycle", "fas fa-mouse-pointer", "fas fa-music", "fab fa-napster", "fas fa-neuter", "fas fa-newspaper", "far fa-newspaper", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fas fa-object-group", "far fa-object-group", "fas fa-object-ungroup", "far fa-object-ungroup", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fas fa-outdent", "fab fa-page4", "fab fa-pagelines", "fas fa-paint-brush", "fab fa-palfed", "fas fa-paper-plane", "far fa-paper-plane", "fas fa-paperclip", "fas fa-paragraph", "fas fa-paste", "fab fa-patreon", "fas fa-pause", "fas fa-pause-circle", "far fa-pause-circle", "fas fa-paw", "fab fa-paypal", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-percent", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fas fa-phone", "fas fa-phone-square", "fas fa-phone-volume", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fas fa-plane", "fas fa-play", "fas fa-play-circle", "far fa-play-circle", "fab fa-playstation", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "far fa-plus-square", "fas fa-podcast", "fas fa-pound-sign", "fas fa-power-off", "fas fa-print", "fab fa-product-hunt", "fab fa-pushed", "fas fa-puzzle-piece", "fab fa-python", "fab fa-qq", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "far fa-question-circle", "fab fa-quora", "fas fa-quote-left", "fas fa-quote-right", "fas fa-random", "fab fa-ravelry", "fab fa-react", "fab fa-rebel", "fas fa-recycle", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "far fa-registered", "fab fa-rendact", "fab fa-renren", "fas fa-reply", "fas fa-reply-all", "fab fa-replyd", "fab fa-resolving", "fas fa-retweet", "fas fa-road", "fas fa-rocket", "fab fa-rocketchat", "fab fa-rockrms", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-rupee-sign", "fab fa-safari", "fab fa-sass", "fas fa-save", "far fa-save", "fab fa-schlix", "fab fa-scribd", "fas fa-search", "fas fa-search-minus", "fas fa-search-plus", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fas fa-server", "fab fa-servicestack", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "far fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fab fa-shirtsinbulk", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fab fa-simplybuilt", "fab fa-sistrix", "fas fa-sitemap", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fas fa-sliders-h", "fab fa-slideshare", "fas fa-smile", "far fa-smile", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fas fa-snowflake", "far fa-snowflake", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fab fa-soundcloud", "fas fa-space-shuttle", "fab fa-speakap", "fas fa-spinner", "fab fa-spotify", "fas fa-square", "far fa-square", "fab fa-stack-exchange", "fab fa-stack-overflow", "fas fa-star", "far fa-star", "fas fa-star-half", "far fa-star-half", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fab fa-sticker-mule", "fas fa-sticky-note", "far fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "far fa-stop-circle", "fab fa-strava", "fas fa-street-view", "fas fa-strikethrough", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-sun", "far fa-sun", "fab fa-superpowers", "fas fa-superscript", "fab fa-supple", "fas fa-sync", "fas fa-sync-alt", "fas fa-table", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tasks", "fas fa-taxi", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fab fa-themeisle", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "far fa-thumbs-down", "fas fa-thumbs-up", "far fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "far fa-times-circle", "fas fa-tint", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-trademark", "fas fa-train", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "far fa-trash-alt", "fas fa-tree", "fab fa-trello", "fab fa-tripadvisor", "fas fa-trophy", "fas fa-truck", "fas fa-tty", "fab fa-tumblr", "fab fa-tumblr-square", "fas fa-tv", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-uikit", "fas fa-umbrella", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fab fa-uniregistry", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fab fa-untappd", "fas fa-upload", "fab fa-usb", "fas fa-user", "far fa-user", "fas fa-user-circle", "far fa-user-circle", "fas fa-user-md", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-times", "fas fa-users", "fab fa-ussunnah", "fas fa-utensil-spoon", "fas fa-utensils", "fab fa-vaadin", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fas fa-video", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fas fa-volume-down", "fas fa-volume-off", "fas fa-volume-up", "fab fa-vuejs", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fas fa-wheelchair", "fab fa-whmcs", "fas fa-wifi", "fab fa-wikipedia-w", "fas fa-window-close", "far fa-window-close", "fas fa-window-maximize", "far fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "far fa-window-restore", "fab fa-windows", "fas fa-won-sign", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fas fa-wrench", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yelp", "fas fa-yen-sign", "fab fa-yoast", "fab fa-youtube"];
/* harmony default export */ __webpack_exports__["default"] = (faIcons);

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var PanelColorSettings = wp.blockEditor.PanelColorSettings;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
/**
 * Internal dependencies
 */






var GradientColorControl = /*#__PURE__*/function (_Component) {
  _inherits(GradientColorControl, _Component);

  var _super = _createSuper(GradientColorControl);

  function GradientColorControl() {
    var _this;

    _classCallCheck(this, GradientColorControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      gradientType: "linear",
      colorOne: _this.props.colorOne || "transparent",
      colorOnePosition: 0,
      colorTwo: _this.props.colorTwo || "transparent",
      colorTwoPosition: 100,
      angle: _this.props.angle || 0,
      radialShape: "ellipse",
      radialX: 50,
      radialY: 50
    });

    _defineProperty(_assertThisInitialized(_this), "getColorString", function () {
      var _this$state = _this.state,
          colorOne = _this$state.colorOne,
          colorOnePosition = _this$state.colorOnePosition,
          colorTwo = _this$state.colorTwo,
          colorTwoPosition = _this$state.colorTwoPosition;
      return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
    });

    _defineProperty(_assertThisInitialized(_this), "getRadialGradient", function () {
      var _this$state2 = _this.state,
          radialShape = _this$state2.radialShape,
          radialX = _this$state2.radialX,
          radialY = _this$state2.radialY;
      return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(_this.getColorString(), ")");
    });

    _defineProperty(_assertThisInitialized(_this), "getLinearGradient", function () {
      return "linear-gradient(".concat(_this.state.angle, "deg, ").concat(_this.getColorString(), ")");
    });

    _defineProperty(_assertThisInitialized(_this), "generateString", function () {
      // Send linear or radial gradiant string to parent
      _this.props.onChange(_this.state.gradientType === "linear" ? _this.getLinearGradient() : _this.getRadialGradient());
    });

    _defineProperty(_assertThisInitialized(_this), "onGradientChange", function (attributeName, value) {
      _this.setState(_defineProperty({}, attributeName, value), function () {
        return _this.generateString();
      });
    });

    return _this;
  }

  _createClass(GradientColorControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          gradientType = _this$state3.gradientType,
          colorOne = _this$state3.colorOne,
          colorOnePosition = _this$state3.colorOnePosition,
          colorTwo = _this$state3.colorTwo,
          colorTwoPosition = _this$state3.colorTwoPosition,
          angle = _this$state3.angle,
          radialShape = _this$state3.radialShape,
          radialX = _this$state3.radialX,
          radialY = _this$state3.radialY;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
        label: __("Gradient Type")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_2__["GRADIENT_TYPE"].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
          isSmall: true,
          isPrimary: gradientType === item.value,
          isSecondary: gradientType !== item.value,
          onClick: function onClick() {
            return _this2.onGradientChange("gradientType", item.value);
          }
        }, item.label);
      }))), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
        label: __("Radial Type")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_2__["RADIAL_TYPES"].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
          isSmall: true,
          isPrimary: radialShape === item.value,
          isSecondary: radialShape !== item.value,
          onClick: function onClick() {
            return _this2.onGradientChange("radialShape", item.value);
          }
        }, item.label);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: __("First Color"),
        color: colorOne,
        onChange: function onChange(newColor) {
          return _this2.onGradientChange("colorOne", newColor);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: __("Second Color"),
        color: colorTwo,
        onChange: function onChange(newColor) {
          return _this2.onGradientChange("colorTwo", newColor);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: __("First Color Position"),
        value: colorOnePosition,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("colorOnePosition", newValue);
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: __("Second Color Position"),
        value: colorTwoPosition,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("colorTwoPosition", newValue);
        },
        min: 0,
        max: 100
      }), gradientType === "linear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: __("Angle"),
        value: angle,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("angle", newValue);
        },
        min: 0,
        max: 360
      }), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: __("Center X position"),
        value: radialX,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("radialX", newValue);
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: __("Center Y position"),
        value: radialY,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("radialY", newValue);
        },
        min: 0,
        max: 100
      })));
    }
  }]);

  return GradientColorControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

GradientColorControl.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  colorOne: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  colorTwo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

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

/***/ "./util/image-avatar/ImageAvater.js":
/*!******************************************!*\
  !*** ./util/image-avatar/ImageAvater.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/image-avatar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


var Button = wp.components.Button;

var ImageAvater = function ImageAvater(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  }, /*#__PURE__*/React.createElement(Button, {
    className: "button",
    onClick: function onClick() {
      return onDeleteImage();
    }
  }, "Delete"));
};

ImageAvater.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onDeleteImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageAvater);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

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