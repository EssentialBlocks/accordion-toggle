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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./src/accordion-icon.js":
/*!*******************************!*\
  !*** ./src/accordion-icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AccordionIcon = function AccordionIcon(_ref) {
  var icon = _ref.icon,
      iconWrapperStyles = _ref.iconWrapperStyles,
      iconStyles = _ref.iconStyles;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "eb-accordion-icon-wrapper",
    style: iconWrapperStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
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
    default: "toggle"
  },
  accordions: {
    type: "array",
    selector: ".eb-accordion-wrapper",
    source: "query",
    default: [{
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
    default: ""
  },
  expandedTabs: {
    type: "array",
    default: []
  },
  displayIcon: {
    type: "boolean",
    default: true
  },
  tabIcon: {
    type: "string",
    default: "fas fa-angle-right"
  },
  expandedIcon: {
    type: "string",
    default: "fas fa-angle-down"
  },
  transitionDuration: {
    type: "number"
  },
  accordionStyle: {
    type: "string",
    default: "custom"
  },
  backgroundType: {
    type: "string",
    default: "fill"
  },
  containerBackground: {
    type: "string"
  },
  containerBorderType: {
    type: "string",
    default: "solid"
  },
  containerBorderSize: {
    type: "number"
  },
  containerBorderColor: {
    type: "string"
  },
  containerGradient: {
    type: "string",
    default: "linear-gradient(45deg, #c9d6ff, #e2e2e2)"
  },
  containerMarginTop: {
    type: "number",
    default: 0
  },
  containerMarginRight: {
    type: "number",
    default: 0
  },
  containerMarginBottom: {
    type: "number",
    default: 0
  },
  containerMarginLeft: {
    type: "number",
    default: 0
  },
  containerPaddingTop: {
    type: "number",
    default: 0
  },
  containerPaddingRight: {
    type: "number",
    default: 0
  },
  containerPaddingBottom: {
    type: "number",
    default: 0
  },
  containerPaddingLeft: {
    type: "number",
    default: 0
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
    default: "h5"
  },
  titleFontSize: {
    type: "number"
  },
  titleSizeUnit: {
    type: "string",
    default: "px"
  },
  titleColor: {
    type: "string"
  },
  titleBackgroundType: {
    type: "string",
    default: "fill"
  },
  titleBackgroundColor: {
    type: "string"
  },
  titleBackgroundGradient: {
    type: "string",
    default: "linear-gradient(45deg, #141e30, #243b55)"
  },
  tabBorderStyle: {
    type: "string",
    default: "solid"
  },
  tabBorderColor: {
    type: "string",
    default: "transparent"
  },
  tabBorderRadius: {
    type: "number"
  },
  contentAlign: {
    type: "string",
    default: "left"
  },
  contentColor: {
    type: "string"
  },
  contentFontSize: {
    type: "number"
  },
  contentMarginTop: {
    type: "number",
    default: 10
  },
  contentMarginRight: {
    type: "number",
    default: 10
  },
  contentMarginBottom: {
    type: "number",
    default: 10
  },
  contentMarginLeft: {
    type: "number",
    default: 10
  },
  contentPaddingTop: {
    type: "number",
    default: 0
  },
  contentPaddingRight: {
    type: "number",
    default: 0
  },
  contentPaddingBottom: {
    type: "number",
    default: 0
  },
  contentPaddingLeft: {
    type: "number",
    default: 0
  },
  contentBackgroundType: {
    type: "string",
    default: "fill"
  },
  contentBackgroundColor: {
    type: "string"
  },
  contentGradient: {
    type: "string",
    default: "linear-gradient(45deg, #ece9e6, #ffffff)"
  },
  displayContentBorder: {
    type: "boolean",
    default: false
  },
  contentBorderTop: {
    type: "number",
    default: 1
  },
  contentBorderRight: {
    type: "number",
    default: 1
  },
  contentBorderBottom: {
    type: "number",
    default: 1
  },
  contentBorderLeft: {
    type: "number",
    default: 1
  },
  contentBorderStyle: {
    type: "string",
    default: "solid"
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
    default: 0
  },
  iconPaddingRight: {
    type: "number",
    default: 0
  },
  iconPaddingBottom: {
    type: "number",
    default: 0
  },
  iconPaddingLeft: {
    type: "number",
    default: 0
  },
  iconMarginTop: {
    type: "number",
    default: 0
  },
  iconMarginRight: {
    type: "number",
    default: 0
  },
  iconMarginBottom: {
    type: "number",
    default: 0
  },
  iconMarginLeft: {
    type: "number",
    default: 0
  },
  iconBackgroundType: {
    type: "string",
    default: "fill"
  },
  iconBackgroundColor: {
    type: "string"
  },
  iconGradient: {
    type: "string",
    default: "linear-gradient(45deg, #8e9eab, #eef2f3)"
  },
  iconSpace: {
    type: "number",
    default: 0
  },
  iconBorderRadius: {
    type: "number",
    default: 0
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
    default: "right"
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
    default: "flex-start"
  },
  tabBorderColorType: {
    type: "string",
    default: "fill"
  },
  tabBorderGradient: {
    type: "string",
    default: "linear-gradient(45deg, #ff512f, #dd2476)"
  },
  tabBorderImageSlice: {
    type: "number",
    default: 0
  },
  tabBorderWidth: {
    type: "number"
  },
  isHover: {
    type: "boolean",
    default: false
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
    default: "auto"
  },
  containerBackgroundClip: {
    type: "string",
    default: "border-box"
  },
  containerBackgroundRepeat: {
    type: "string",
    default: "initial"
  },
  containerBackgroundPositionX: {
    type: "number",
    default: 0
  },
  containerBackgroundPositionY: {
    type: "number",
    default: 0
  },
  containerBackgoundAttachment: {
    type: "string",
    default: "initial"
  },
  tabMarginTop: {
    type: "number",
    default: 10
  },
  tabMarginRight: {
    type: "number",
    default: 0
  },
  tabMarginBottom: {
    type: "number",
    default: 0
  },
  tabMarginLeft: {
    type: "number",
    default: 0
  },
  tabPaddingTop: {
    type: "number",
    default: 0
  },
  tabPaddingRight: {
    type: "number",
    default: 0
  },
  tabPaddingBottom: {
    type: "number",
    default: 0
  },
  tabPaddingLeft: {
    type: "number",
    default: 0
  },
  containerBorderRadius: {
    type: "number"
  },
  linkedContainerMargin: {
    type: "boolean",
    default: false
  },
  linkedContainerPadding: {
    type: "boolean",
    default: false
  },
  linkedTabMargin: {
    type: "boolean",
    default: false
  },
  linkedContentMargin: {
    type: "boolean",
    default: false
  },
  linkedContentPadding: {
    type: "boolean",
    default: false
  },
  linkedContentBorder: {
    type: "boolean",
    default: false
  },
  linkedIconMargin: {
    type: "boolean",
    default: false
  },
  linkedIconPadding: {
    type: "boolean",
    default: false
  },
  buttonStyle: {
    type: "string",
    default: "custom"
  },
  containerMarginUnit: {
    type: "string",
    default: "px"
  },
  containerPaddingUnit: {
    type: "string",
    default: "px"
  },
  containerBorderUnit: {
    type: "string",
    default: "px"
  },
  containerRadiusUnit: {
    type: "string",
    default: "px"
  },
  tabMarginUnit: {
    type: "string",
    default: "px"
  },
  tabPaddingUnit: {
    type: "string",
    default: "px"
  },
  tabBorderUnit: {
    type: "string",
    default: "px"
  },
  tabRadiusUnit: {
    type: "string",
    default: "px"
  },
  contentMarginUnit: {
    type: "string",
    default: "px"
  },
  contentPaddingUnit: {
    type: "string",
    default: "px"
  },
  iconSizeUnit: {
    type: "string",
    default: "px"
  },
  iconMarginUnit: {
    type: "string",
    default: "px"
  },
  iconPaddingUnit: {
    type: "string",
    default: "px"
  },
  contentSizeUnit: {
    type: "string",
    default: "px"
  },
  titleFontFamily: {
    type: "string"
  },
  titleFontWeight: {
    type: "string",
    default: "normal"
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
    default: "px"
  },
  titleLineHeight: {
    type: "number"
  },
  titleLineHeightUnit: {
    type: "string",
    default: "px"
  },
  contentFontFamily: {
    type: "string"
  },
  contentFontWeight: {
    type: "string",
    default: "normal"
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
    default: "px"
  },
  contentLineHeight: {
    type: "number"
  },
  contentLineHeightUnit: {
    type: "string",
    default: "px"
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: className
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Accordion – hello from the editor!', 'create-block'));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-8.333%",
    x2: "50%",
    y2: "108.44%",
    id: "linearGradient-1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#6DC7FF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#E6ABFF",
    offset: "100%"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    id: "eb-icon-accordion"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M128,0 C91.9749264,0 59.4418701,14.8956537 36.1835498,38.8488312 L203.514459,38.8488312 L203.514459,119.749264 L0.277056277,119.749264 C0.103064935,122.478823 0,125.227221 0,128 C0,130.065732 0.0664935065,132.11484 0.164017316,134.15619 L203.514459,134.15619 L203.514459,215.056623 L34.1732294,215.056623 C57.5468052,240.239931 90.9309784,256 128,256 C198.692571,256 256,198.692571 256,128 C256,57.3074286 198.692571,0 128,0 Z",
    id: "Path",
    fill: "url(#linearGradient-1)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    id: "Path",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    points: "186.891082 74.2621645 171.979913 74.2621645 171.979913 59.3509957 160.797922 59.3509957 160.797922 74.2621645 145.886753 74.2621645 145.886753 85.4441558 160.797922 85.4441558 160.797922 100.355325 171.979913 100.355325 171.979913 85.4441558 186.891082 85.4441558"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    id: "Rectangle",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    x: "145.887",
    y: "169.015",
    width: "41.004",
    height: "11.183"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M128.155152,67.662684 L15.0929177,67.662684 C10.9747532,75.3537662 7.62015584,83.5147359 5.12775758,92.0436364 L128.155152,92.0436364 L128.155152,67.662684 Z",
    id: "Path",
    fill: "#E5E5E5"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _accordion_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-icon */ "./src/accordion-icon.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



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
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "backgroundSize", backgroundType === "image" ? containerBackgroundSize : undefined), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "backgroundPosition", containerImageURL ? "".concat(containerBackgroundPositionX, "% ").concat(containerBackgroundPositionY, "%") : undefined), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "backgroundAttachment", containerImageURL ? containerBackgoundAttachment : undefined), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "margin", containerMarginTop === 0 && containerMarginRight === 0 && containerMarginBottom === 0 && containerMarginLeft === 0 ? "auto" : "".concat(containerMarginTop).concat(containerMarginUnit, " ").concat(containerMarginRight).concat(containerMarginUnit, " ").concat(containerMarginBottom).concat(containerMarginUnit, " ").concat(containerMarginLeft).concat(containerMarginUnit)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "padding", "".concat(containerPaddingTop).concat(containerPaddingUnit, " ").concat(containerPaddingRight).concat(containerPaddingUnit, " ").concat(containerPaddingBottom).concat(containerPaddingUnit, " ").concat(containerPaddingLeft).concat(containerPaddingUnit)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "border", "".concat(containerBorderSize || 0).concat(containerBorderUnit, " ").concat(containerBorderType, " ").concat(containerBorderColor || "#000000")), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "borderRadius", "".concat(containerBorderRadius || 0).concat(containerRadiusUnit)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerStyle, "boxShadow", "".concat(containerHOffset || 0, "px ").concat(containerVOffset || 0, "px ").concat(containerShadowBlur || 0, "px ").concat(containerShadowSpread || 0, "px ").concat(containerShadowColor || "#dedede")), _containerStyle);
  var iconWrapperStyles = {
    display: displayIcon ? "flex" : "none",
    margin: "".concat(iconMarginTop).concat(iconMarginUnit, " ").concat(iconMarginRight).concat(iconMarginUnit, " ").concat(iconMarginBottom).concat(iconMarginUnit, " ").concat(iconMarginLeft).concat(iconMarginUnit),
    background: iconBackgroundType === "fill" && iconBackgroundColor,
    backgroundImage: iconBackgroundType === "gradient" && iconGradient,
    borderRadius: "".concat(iconBorderRadius || 0, "%"),
    boxShadow: "".concat(iconHOffset || 0, "px ").concat(iconVOffset || 0, "px ").concat(iconShadowBlur || 0, "px ").concat(iconShadowSpread || 0, "px ").concat(iconShadowColor || "#000000")
  };
  var iconStyles = {
    color: iconColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ICON_COLOR"],
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
      backgroundColor: backgroundType === "fill" ? titleBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_BACKGROUND"] : "transparent",
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
      color: titleColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_COLOR"],
      fontSize: "".concat(titleFontSize || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_SIZE"]).concat(titleSizeUnit),
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
      backgroundColor: contentBackgroundType === "fill" && contentBackgroundColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CONTENT_BACKGROUND"],
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
      color: contentColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CONTENT_COLOR"],
      transition: "all ".concat(transitionDuration || 500, "ms")
    }
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "eb-accordion-container",
    style: containerStyle,
    "data-id": id,
    "data-accordion-type": accordionType || "toggle",
    "data-transition-function": transitionFunction || "ease",
    "data-transition-duration": transitionDuration,
    "data-tab-icon": displayIcon ? tabIcon : "",
    "data-expanded-icon": displayIcon ? expandedIcon : "",
    "data-hover-color": hoverColor ? hoverColor : undefined,
    "data-active-color": activeColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_COLOR"],
    "data-title-color": titleColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_COLOR"],
    "data-active-title-color": activeTitleColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_ACTIVE_COLOR"],
    "data-icon-color": iconColor || titleColor || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TITLE_COLOR"],
    "data-original-color": backgroundType === "image" ? "transparent" : titleBackgroundType === "fill" ? titleBackgroundColor || "#ededed" : titleBackgroundType === "gradient" ? titleBackgroundGradient : "transparent",
    "data-background-image-url": containerImageURL ? containerImageURL : ""
  }, accordions.map(function (accordion, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "eb-accordion-wrapper ",
      key: index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "eb-accordion-title-wrapper",
      style: titleStyles.titleWrapper
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_accordion_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: tabIcon,
      iconWrapperStyles: iconWrapperStyles,
      iconStyles: iconStyles
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      tagName: titleLevel,
      className: "eb-accordion-title",
      style: titleStyles.title,
      value: accordion.title
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "eb-accordion-content-wrapper",
      style: contentStyles.contentWrapper
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      tagName: "p",
      className: "eb-accordion-content",
      style: contentStyles.content,
      value: accordion.content
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

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

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map