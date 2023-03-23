/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./blocks/accordion-toggle/src/frontend.js ***!
  \*************************************************/
document.addEventListener("DOMContentLoaded", function (event) {
  var accordions = document.querySelectorAll(".eb-accordion-container > .eb-accordion-inner");

  // Return if there is no accoridion block
  if (!accordions) return;
  var _loop = function _loop() {
    var accordion = accordions[x].parentElement;
    var accordionWrapper = accordion.children[0].children;
    var titleNodes = [];
    Array.from(accordionWrapper).forEach(function (item) {
      titleNodes.push(item.querySelector(".eb-accordion-title-wrapper"));
    });
    var contentNodes = [];
    Array.from(accordionWrapper).forEach(function (item) {
      contentNodes.push(item.querySelector(".eb-accordion-content-wrapper"));
    });
    var hide = "eb-accordion-hidden";
    //  add a className after the domcontent has been loaded
    accordion.classList.add("eb_accdn_loaded");
    for (var i = 0; i < contentNodes.length; i++) {
      contentNodes[i].style.height = "0px";
    }
    var testEl = document.createElement("span");

    // Get all data attributes
    var accordionType = accordion.getAttribute("data-accordion-type");
    var tabIcon = accordion.getAttribute("data-tab-icon") || "_ _";
    var expandedIcon = accordion.getAttribute("data-expanded-icon") || "_ _";

    // Seperate fontawesome 5 prefix and postfix classes.
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

    //
    for (var _i = 0; _i < accordionWrapper.length; _i++) {
      var clickable = accordionWrapper[_i].getAttribute("data-clickable");
      if (clickable == "true") {
        contentNodes[_i].setAttribute("data-collapsed", "false");
        expandSection(contentNodes[_i]);
        changeIcon(contentNodes[_i].parentElement.querySelector(".eb-accordion-title-wrapper"));
      } else {
        contentNodes[_i].setAttribute("data-collapsed", "true");
        collapseSection(contentNodes[_i]);
        contentNodes[_i].parentElement.classList.add(hide);
      }
    }
    function changeAllExpandIcons(accordion) {
      var iconNodes = accordion.querySelectorAll(".eb-accordion-icon");
      // Replace expand icon with tab icon & change color
      for (var _i2 = 0; _i2 < iconNodes.length; _i2++) {
        if (iconNodes[_i2].classList.contains(faExpandPostfix)) {
          iconNodes[_i2].classList.remove(faExpandPrefix, faExpandPostfix);
          iconNodes[_i2].classList.add(faTabPrefix, faTabPostfix);
        }
      }
    }

    // Take action based on accordion type
    accordionType === "toggle" ? setToggleAction(titleNodes) : setAccordionAction(titleNodes);

    // Toggle action here
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
      var contentNode = this.nextElementSibling;
      var isCollapsed = contentNode.getAttribute("data-collapsed") === "true";

      // Change content.maxHeight to 0, remove active color if it's open
      if (isCollapsed) {
        expandSection(contentNode);
        contentNode.setAttribute("data-collapsed", "false");
        clickedTab.parentElement.classList.remove(hide);
      } else {
        collapseSection(contentNode);
        contentNode.setAttribute("data-collapsed", "true");
        clickedTab.parentElement.classList.add(hide);
      }
      // Change tab icon
      changeIcon(clickedTab);
    }

    // Accordion action here
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
      Array.from(accordionWrapper).forEach(function (item) {
        item.classList.add(hide);
      });
      var contentNode = this.nextElementSibling;
      var isCollapsed = contentNode.getAttribute("data-collapsed") === "true";
      hideAccordionContents(contentNodes, hide);
      changeAllExpandIcons(accordion);
      if (isCollapsed) {
        expandSection(contentNode);
        contentNode.setAttribute("data-collapsed", "false");
        clickedTab.parentElement.classList.remove(hide);
      } else {
        collapseSection(contentNode);
        contentNode.setAttribute("data-collapsed", "true");
        changeIcon(clickedTab);
        clickedTab.parentElement.classList.add(hide);
      }
      //Change tab icon
      changeIcon(clickedTab);
    }
  };
  for (var x = 0; x < accordions.length; x++) {
    _loop();
  }
});
function collapseSection(element) {
  var sectionHeight = element.scrollHeight;
  var elementTransition = element.style.transition;
  element.style.transition = "";
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + "px";
    element.style.transition = elementTransition;
    requestAnimationFrame(function () {
      element.style.height = 0 + "px";
    });
  });
  element.setAttribute("data-collapsed", "true");
}
function expandSection(element) {
  var sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + "px";
  element.addEventListener("transitionend", function (e) {
    element.removeEventListener("transitionend", arguments.callee);
    element.style.height = null;
  });
  element.setAttribute("data-collapsed", "false");
}
function hideAccordionContents(contentNodes, hide) {
  for (var i = 0; i < contentNodes.length; i++) {
    contentNodes[i].style.height = 0 + "px";
    contentNodes[i].setAttribute("data-collapsed", true);
  }
}
/******/ })()
;
//# sourceMappingURL=index.js.map