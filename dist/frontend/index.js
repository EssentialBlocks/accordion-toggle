/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./blocks/accordion-toggle/src/frontend.js ***!
  \*************************************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function (event) {
  var accordions = document.querySelectorAll(".eb-accordion-container > .eb-accordion-inner"); // Return if there is no accoridion block

  if (!accordions) return;

  var _loop = function _loop(x) {
    var accordion = accordions[x].parentElement;
    var titleNodes = accordion.querySelectorAll(".eb-accordion-title-wrapper");
    var contentNodes = accordion.querySelectorAll(".eb-accordion-content-wrapper");
    var accordionWrapper = accordion.querySelectorAll(".eb-accordion-wrapper");
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
    } //


    for (var _i2 = 0; _i2 < accordionWrapper.length; _i2++) {
      var clickable = accordionWrapper[_i2].getAttribute("data-clickable");

      if (clickable == "true") {
        contentNodes[_i2].style.height = contentNodes[_i2].dataset.height;
        changeIcon(contentNodes[_i2].parentElement.querySelector(".eb-accordion-title-wrapper"));
      } else {
        contentNodes[_i2].parentElement.classList.add(hide);
      }
    }

    function changeAllExpandIcons(accordion) {
      var iconNodes = accordion.querySelectorAll(".eb-accordion-icon"); // Replace expand icon with tab icon & change color

      for (var _i3 = 0; _i3 < iconNodes.length; _i3++) {
        if (iconNodes[_i3].classList.contains(faExpandPostfix)) {
          iconNodes[_i3].classList.remove(faExpandPrefix, faExpandPostfix);

          iconNodes[_i3].classList.add(faTabPrefix, faTabPostfix);
        }
      }
    } // Hide all accordion content by default
    // hideContents(contentNodes, hide);
    // Take action based on accordion type


    accordionType === "toggle" ? setToggleAction(titleNodes) : setAccordionAction(titleNodes); // Toggle action here

    function setToggleAction(titleNodes) {
      for (var _i4 = 0; _i4 < titleNodes.length; _i4++) {
        var selectedTab = titleNodes[_i4];

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
      for (var _i5 = 0; _i5 < titleNodes.length; _i5++) {
        var selectedTab = titleNodes[_i5];

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

function querySelectorFrom(selector, elements) {
  var elementsArr = _toConsumableArray(elements);

  return _toConsumableArray(document.querySelectorAll(selector)).filter(function (elm) {
    return elementsArr.includes(elm);
  });
}
/******/ })()
;
//# sourceMappingURL=index.js.map