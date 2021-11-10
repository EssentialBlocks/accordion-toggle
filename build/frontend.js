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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function (event) {
  var accordions = document.querySelectorAll(".eb-accordion-container"); // Return if there is no accoridion block

  if (!accordions) return;

  var _loop = function _loop(x) {
    var accordion = accordions[x];
    var titleNodes = accordion.querySelectorAll(".eb-accordion-title-wrapper");
    var contentNodes = accordion.querySelectorAll(".eb-accordion-content-wrapper");
    var hide = "eb-accordion-hidden"; //  add a className after the domcontent has been loaded

    accordion.classList.add("eb_accdn_loaded"); // Add data-height, transition timing function, height css attribute to all content

    for (var i = 0; i < contentNodes.length; i++) {
      contentNodes[i].dataset.height = contentNodes[i].clientHeight + "px";
    }

    for (var _i = 0; _i < contentNodes.length; _i++) {
      contentNodes[_i].style.height = "0px";
    }

    var testEl = document.createElement("span"); // Get all data attributes

    var accordionType = accordion.getAttribute("data-accordion-type");
    var tabIcon = accordion.getAttribute("data-tab-icon") || "_ _";
    var expandedIcon = accordion.getAttribute("data-expanded-icon") || "_ _"; // Seperate fontawesome 5 prefix and postfix classes.

    var faTabPrefix = tabIcon.split(" ")[0];
    var faTabPostfix = tabIcon.split(" ")[1];
    var faExpandPrefix = expandedIcon.split(" ")[0];
    var faExpandPostfix = expandedIcon.split(" ")[1];

    function changeIcon(clickedTab) {
      // Replace tab icon with expanded or vice versa
      var iconNode = clickedTab.querySelector(".eb-accordion-icon") || testEl;
      var isExpanded = iconNode.classList.contains(faExpandPostfix);

      if (isExpanded) {
        iconNode.classList.remove(faExpandPrefix, faExpandPostfix);
        iconNode.classList.add(faTabPrefix, faTabPostfix);
      } else {
        iconNode.classList.remove(faTabPrefix, faTabPostfix);
        iconNode.classList.add(faExpandPrefix, faExpandPostfix);
      }
    }

    function changeAllExpandIcons(accordion) {
      var iconNodes = accordion.querySelectorAll(".eb-accordion-icon"); // Replace expand icon with tab icon & change color

      for (var _i2 = 0; _i2 < iconNodes.length; _i2++) {
        if (iconNodes[_i2].classList.contains(faExpandPostfix)) {
          iconNodes[_i2].classList.remove(faExpandPrefix, faExpandPostfix);

          iconNodes[_i2].classList.add(faTabPrefix, faTabPostfix);
        }
      }
    } // Hide all accordion content by default


    hideContents(contentNodes, hide); // Take action based on accordion type

    accordionType === "toggle" ? setToggleAction(titleNodes) : setAccordionAction(titleNodes); // Toggle action here

    function setToggleAction(titleNodes) {
      for (var _i3 = 0; _i3 < titleNodes.length; _i3++) {
        var selectedTab = titleNodes[_i3];

        (function (selectedTab) {
          selectedTab.addEventListener("click", onToggleTabClick);
        })(selectedTab);
      }
    }

    function onToggleTabClick() {
      var clickedTab = this;
      var contentNode = clickedTab.nextElementSibling;
      var contentHeight = contentNode.getAttribute("data-height");
      var alreadyOpen = !contentNode.parentElement.classList.contains(hide); // Change content height to 0, remove active color if it's open

      if (alreadyOpen) {
        contentNode.style.height = "0px";
      } else {
        contentNode.style.height = contentHeight;
      }

      contentNode.parentElement.classList.toggle(hide); // Change tab icon

      changeIcon(clickedTab);
    } // Accordion action here


    function setAccordionAction(titleNodes) {
      for (var _i4 = 0; _i4 < titleNodes.length; _i4++) {
        var selectedTab = titleNodes[_i4];

        (function (selectedTab) {
          selectedTab.addEventListener("click", onAccordionTabClick);
        })(selectedTab);
      }
    }

    function onAccordionTabClick() {
      var clickedTab = this;
      var contentNode = this.nextElementSibling;
      var contentHeight = contentNode.getAttribute("data-height");
      var alreadyOpen = !contentNode.parentElement.classList.contains(hide); // Hide all contents, change expand icon to tab icon then
      // toggle clicked accordion
      // If accordion was already open, hide it

      hideAccordionContents(contentNodes, hide);
      changeAllExpandIcons(accordion);
      contentNode.parentElement.classList.toggle(hide);

      if (alreadyOpen) {
        // Hide content and change background color, icon
        contentNode.parentElement.classList.add(hide);
        contentNode.style.height = "0px";
        changeIcon(clickedTab);
      } else {
        contentNode.style.height = contentHeight;
      } //Change tab icon


      changeIcon(clickedTab);
    }
  };

  for (var x = 0; x < accordions.length; x++) {
    _loop(x);
  }
});

function hideContents(contentNodes, hide) {
  for (var i = 0; i < contentNodes.length; i++) {
    contentNodes[i].parentElement.classList.add(hide);
  }
}

function hideAccordionContents(contentNodes, hide) {
  for (var i = 0; i < contentNodes.length; i++) {
    contentNodes[i].parentElement.classList.add(hide);
    contentNodes[i].style.height = "0px";
  }
}

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map