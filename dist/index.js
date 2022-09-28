/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
 * Copyright (c) 2022 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js"),__webpack_require__(/*! react-dom */ "react-dom")):0}(window,(function(e,t,r,n,o){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},,,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=r(2),u=r.n(c),s=r(3);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}(r);function r(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return m(h(e=t.call.apply(t,[this].concat(a))),"handleClick",(function(){e.props.onClick()})),m(h(e),"handleKeyDown",(function(t){32!==t.keyCode&&13!==t.keyCode||e.props.onClick()})),m(h(e),"handleDelete",(function(t,r){t.stopPropagation(),e.props.handleDeleteValue(r)})),m(h(e),"handleDeleteKeyboard",(function(t,r){32!==t.keyCode&&13!==t.keyCode||e.props.handleDeleteValue(r)})),m(h(e),"renderEmptyIcon",(function(){return o.a.createElement("span",{className:"rfipbtn__icon--empty"},e.props.noSelectedPlaceholder)})),e}return function(e,t,r){t&&p(e.prototype,t)}(r,[{key:"renderIcon",value:function(e){var t=this;return""===e||null==e?this.renderEmptyIcon():o.a.createElement("span",{className:"rfipbtn__icon",key:e},o.a.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),o.a.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map((function(t){return e.renderIcon(t)})):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=u()("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=u()(this.props.className);return o.a.createElement("div",f({className:r,ref:this.props.domRef},e),o.a.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),o.a.createElement("div",{className:t},o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}]),r}();m(g,"propTypes",{className:i.a.string.isRequired,isOpen:i.a.bool.isRequired,onClick:i.a.func.isRequired,domRef:i.a.object.isRequired,isMulti:i.a.bool.isRequired,value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.number,i.a.string]))]).isRequired,renderIcon:i.a.func.isRequired,handleDeleteValue:i.a.func.isRequired,noSelectedPlaceholder:i.a.string.isRequired});var b=g;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}(r);function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.apply(this,arguments)}return function(e,t,r){t&&P(e.prototype,t)}(r,[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipcategory"},o.a.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map((function(e,t){return o.a.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)}))),o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}]),r}();!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(C,"propTypes",{handleCategory:i.a.func.isRequired,value:i.a.number.isRequired,categories:i.a.arrayOf(i.a.string).isRequired});var S=C,R=function(e){return o.a.createElement("div",{className:"rfipsearch"},o.a.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};R.propTypes={handleSearch:i.a.func.isRequired,value:i.a.string.isRequired,placeholder:i.a.string.isRequired};var E=R;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}}function x(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),F(B(n=t.call(this,e)),"handleChangePage",(function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=n.props.currentPage,a=n.state.totalPage;null!==r?"next"===r?o+=1:o-=1:o=parseInt(e.target.value,10)-1,o<0&&(o=0),o>a-1&&(o=a-1),t=o+1,null===r&&Number.isNaN(o)&&(o=0,t=""),n.setState({viewPage:t}),n.props.handleChangePage(o)})),F(B(n),"handlePageKeyBoard",(function(e,t){13!==e.keyCode&&32!==e.keyCode||n.handleChangePage({},t)})),F(B(n),"handleChangeValue",(function(e){n.props.handleChangeValue(e)})),F(B(n),"handleValueKeyboard",(function(e,t){13!==e.keyCode&&32!==e.keyCode||n.handleChangeValue(t)})),n.state={viewPage:n.props.currentPage+1},n}return function(e,t,r){t&&M(e.prototype,t),r&&M(e,r)}(r,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?o.a.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},o.a.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?o.a.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},o.a.createElement("i",{className:"fipicon-angle-right"}))):null;return o.a.createElement("div",{className:"rfipicons__pager"},o.a.createElement("div",{className:"rfipicons__num"},o.a.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),o.a.createElement("span",{className:"rfipicons__sp"},"/"),o.a.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),o.a.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map((function(t,r){var n=u()("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return o.a.createElement("span",{className:n,key:t,title:e.state.titleView[r]},o.a.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))})):o.a.createElement("span",{className:"rfipicons__icon--error"},o.a.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return o.a.createElement("div",{className:"rfipicons"},this.renderPager(),o.a.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),o=r.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),a=r.getActiveIcons(n,o,e.currentSearch),i=a.activeIcons,c=a.activeTitles,u=e.currentPage,s=e.iconsPerPage,l={iconView:r.getCurrentViewIcons(i,s,u),titleView:r.getCurrentViewIcons(c,s,u),totalPage:Math.ceil(i.length/s)};return""!==t.viewPage&&(l.viewPage=e.currentPage+1),l}},{key:"getActiveIcons",value:function(e,t,r){var n=D(e),o=D(t);if(""===r||null===r)return{activeIcons:n,activeTitles:o};var a=[],i=[];return n.forEach((function(e,n){(function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var o=0,a=0;o<n;o++){for(var i=e.codePointAt(o);a<r;)if(t.codePointAt(a++)===i)continue e;return!1}return!0})(r,t[n])&&(a.includes(e)||a.push(e),i.includes(t[n])||i.push(t[n]))})),{activeIcons:a,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,o=function(e){return null===e?"null":"object"!==_(e)||Array.isArray(e)?Array.isArray(e)?"array":_(e):"object"}(r);if(Array.isArray(t)){if("object"!==o)throw new x(o,"object")}else if("array"!==o)throw new x(o,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return k(e);if(null!==t)return void 0!==e[t]?k(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return Object.keys(n).forEach((function(e){r=[].concat(k(r),k(n[e]))})),r}(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,o=(r+1)*t;return e.slice(n,o)}}]),r}();F(L,"propTypes",{categories:i.a.arrayOf(i.a.string),currentCategory:i.a.number,isMulti:i.a.bool.isRequired,icons:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.objectOf(i.a.arrayOf(i.a.string)),i.a.arrayOf(i.a.string)]),value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.number,i.a.string]))]).isRequired,currentSearch:i.a.string.isRequired,handleChangeValue:i.a.func.isRequired,currentPage:i.a.number.isRequired,iconsPerPage:i.a.number.isRequired,handleChangePage:i.a.func.isRequired,renderIcon:i.a.func.isRequired,noIconPlaceholder:i.a.string.isRequired}),F(L,"defaultProps",{categories:null,currentCategory:null,search:null});var H=L;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=G(e);if(t){var o=G(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),X(Y(n=t.call(this,e)),"handleCategory",(function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),n.props.handleChangeCategory(t),n.props.handleChangePage(0)})),X(Y(n),"handleSearch",(function(e){var t=e.target.value;n.props.handleChangeSearch(t)})),n.state={},n}return function(e,t,r){t&&$(e.prototype,t),r&&$(e,r)}(r,[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?o.a.createElement(E,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?o.a.createElement(S,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,o.a.createElement(H,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=function(e){return Array.isArray(e)?null:Object.keys(e)}(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),r}();X(J,"propTypes",{isMulti:i.a.bool.isRequired,value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.any)]).isRequired,currentCategory:i.a.number.isRequired,currentPage:i.a.number.isRequired,currentSearch:i.a.string.isRequired,icons:i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.object,i.a.arrayOf(i.a.string)]),showCategory:i.a.bool.isRequired,showSearch:i.a.bool.isRequired,iconsPerPage:i.a.number.isRequired,allCatPlaceholder:i.a.string.isRequired,searchPlaceholder:i.a.string.isRequired,noIconPlaceholder:i.a.string.isRequired,renderIcon:i.a.func.isRequired,handleChangeValue:i.a.func.isRequired,handleChangeCategory:i.a.func.isRequired,handleChangePage:i.a.func.isRequired,handleChangeSearch:i.a.func.isRequired}),X(J,"defaultProps",{search:null});var Q=J,Z=r(4);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=oe(e);if(t){var o=oe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===ee(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ae(ne(n=t.call(this,e)),"syncPortalPosition",(function(){n.resetPortalPosition(),n.fixWindowOverflow()})),ae(ne(n),"fixWindowOverflow",(function(){var e=n.props.domRef.current.offsetWidth,t=n.props.domRef.current.offsetHeight,r=window,o=r.innerWidth,a=r.pageYOffset,i=document.documentElement.clientHeight,c=N(n.props.domRef.current),u=c.left,s=c.top,l=N("self"===n.state.appendRoot?n.props.domRef.current:n.state.appendRoot),f=n.props.btnRef.current,p=n.props.domRef.current,d=N(f),h=getComputedStyle(f),y=(parseInt(h.borderTop,10)||0)+(parseInt(h.borderBottom,10)||0);if(u+e>o-20){var m=d.left+n.props.btnRef.current.offsetWidth-(e+l.left);m+l.left<0&&(m=10-l.left),p.style.left="".concat(m,"px")}t+s-a>i&&d.top-t>0&&("self"===n.state.appendRoot?p.style.top="-".concat(t-y,"px"):p.style.top="".concat(d.top+y-t,"px"))})),n.state={},n.debouncedSyncPortalPosition=function(e,t){var r;return function(){var n=this,o=arguments;clearTimeout(r),r=setTimeout((function(){return e.apply(n,o)}),t)}}(n.syncPortalPosition,250),n}return function(e,t,r){t&&te(e.prototype,t),r&&te(e,r)}(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=N(t),n=N(this.state.appendRoot),o=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+o,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=u()(this.props.className,this.state.portalClasses),t=o.a.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:Object(Z.createPortal)(t,this.state.appendRoot)}}],[{key:"getDerivedStateFromProps",value:function(e){var t=r.calculateAppendAndClass(e.appendRoot);return{appendRoot:t.appendRoot,portalClasses:t.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=u()({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),r}();ae(ie,"propTypes",{appendRoot:i.a.oneOfType([i.a.bool,i.a.string]),children:i.a.node.isRequired,domRef:i.a.object.isRequired,btnRef:i.a.object.isRequired,className:i.a.string.isRequired}),ae(ie,"defaultProps",{appendRoot:!1});var ce=ie;function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?le(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=[],ge=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=he(e);if(t){var o=he(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===ue(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return de(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ye(de(n=t.call(this,e)),"handleOuterClick",(function(e){var t=e.target;n.isClickWithin(t)||n.closeDropdown()})),ye(de(n),"handleEscapeKeyboard",(function(e){27===e.keyCode&&n.closeDropdown()})),ye(de(n),"isClickWithin",(function(e){return"fipicon-angle-left"===e.className||"fipicon-angle-right"===e.className||"rfipicons__label"===e.className||n.fipButtonRef.current.contains(e)||n.fipDropDownRef.current&&n.fipDropDownRef.current.contains(e)})),ye(de(n),"handleToggle",(function(){n.setState((function(e){return n.handleDropDown(!e.isOpen,!1)}))})),ye(de(n),"closeDropdown",(function(){n.handleDropDown(!1)})),ye(de(n),"handleDropDown",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o={isOpen:e};return o.elemClass=r.getDerivedClassName("rfip",n.props.theme,n.props.isMulti,e),o.btnClass=r.getDerivedClassName("rfipbtn",n.props.theme,n.props.isMulti,e),o.ddClass=r.getDerivedClassName("rfipdropdown",n.props.theme,n.props.isMulti,e),t&&n.setState(o),o})),ye(de(n),"handleChangeValue",(function(e){var t;n.props.isMulti?(t=se(n.state.value)).includes(e)?(t=t.filter((function(t){return t!==e}))).length||(t=me):t.push(e):t=e===n.state.value?"":e,n.setState({value:t,isOpen:!n.props.closeOnSelect}),n.props.onChange(t)})),ye(de(n),"handleDeleteValue",(function(e){var t;t=n.props.isMulti?n.state.value.filter((function(t){return t!==e})):r.getDerivedValue(t,n.props.isMulti),n.setState({value:t}),n.props.onChange(t)})),ye(de(n),"handleChangePage",(function(e){n.setState({currentPage:e})})),ye(de(n),"handleChangeCategory",(function(e){n.setState({currentCategory:e,currentPage:0})})),ye(de(n),"handleChangeSearch",(function(e){n.setState({currentSearch:e,currentPage:0})})),ye(de(n),"resetPortalStyle",(function(e){["maxHeight","paddingTop","paddingBottom"].forEach((function(t){e.style[t]=null}))})),ye(de(n),"handlePortalEnter",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t);var r=getComputedStyle(t);n.fipPortalComputedStyle={height:r.height,paddingTop:r.paddingTop,paddingBottom:r.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach((function(e){t.style[e]="0px"}))})),ye(de(n),"handlePortalEntering",(function(e){var t=e.childNodes[0];t.style.maxHeight=n.fipPortalComputedStyle.height,t.style.paddingTop=n.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=n.fipPortalComputedStyle.paddingBottom})),ye(de(n),"handlePortalEntered",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t),n.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()})),ye(de(n),"handlePortalExit",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t);var r=getComputedStyle(t).height;t.style.maxHeight=r})),ye(de(n),"handlePortalExiting",(function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"})),ye(de(n),"renderIcon",(function(e){if("function"==typeof n.props.renderFunc)return n.props.renderFunc(e);if("class"===n.props.renderUsing)return o.a.createElement("i",{className:e});var t=ye({},n.props.renderUsing,n.props.convertHex?function(e){return String.fromCodePoint(parseInt(e,10))}(e):e);return o.a.createElement("i",t)})),n.fipButtonRef=o.a.createRef(),n.fipDropDownRef=o.a.createRef(),n.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},n.fipPortalComputedStyle=null,n}return function(e,t,r){t&&fe(e.prototype,t),r&&fe(e,r)}(r,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach((function(t){document.addEventListener(t,e.handleOuterClick,!1)})),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach((function(t){document.removeEventListener(t,e.handleOuterClick,!1)})),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return o.a.createElement("div",{className:this.state.elemClass,ref:this.fipRef},o.a.createElement(b,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),o.a.createElement(s.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},o.a.createElement(ce,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},o.a.createElement(Q,e))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return n.elemClass=r.getDerivedClassName("rfip",e.theme,e.isMulti,t.isOpen),n.btnClass=r.getDerivedClassName("rfipbtn",e.theme,e.isMulti,t.isOpen),n.ddClass=r.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,t.isOpen),n.value=r.getDerivedValue(e.value,e.isMulti),e.showCategory||0===t.currentCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||""===t.currentSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return u()(e,"".concat(e,"--").concat(t),ye({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?se(e):me:"number"!=typeof e&&"string"!=typeof e&&(r=""),r}}]),r}();ye(ge,"propTypes",{icons:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.objectOf(i.a.arrayOf(i.a.string)),i.a.arrayOf(i.a.string)]),iconsPerPage:i.a.number,theme:i.a.string,onChange:i.a.func.isRequired,showCategory:i.a.bool,showSearch:i.a.bool,value:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.number,i.a.string]),isMulti:i.a.bool,renderUsing:i.a.string,convertHex:i.a.bool,renderFunc:i.a.func,appendTo:i.a.oneOfType([i.a.bool,i.a.string]),allCatPlaceholder:i.a.string,searchPlaceholder:i.a.string,noIconPlaceholder:i.a.string,noSelectedPlaceholder:i.a.string,closeOnSelect:i.a.bool}),ye(ge,"defaultProps",{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}),ye(ge,"displayName","FontIconPicker");var be=ge;t.default=be}]).default}));
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./blocks/accordion-item/src/attributes.js":
/*!*************************************************!*\
  !*** ./blocks/accordion-item/src/attributes.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  itemId: {
    type: "string"
  },
  title: {
    type: "string"
  },
  clickable: {
    type: "boolean",
    "default": false
  },
  inheritedAccordionType: {
    type: "string",
    "default": "accordion"
  },
  inheritedTagName: {
    type: "string",
    "default": "h3"
  },
  inheritedDisplayIcon: {
    type: "boolean",
    "default": true
  },
  inheritedTabIcon: {
    type: "string"
  },
  inheritedExpandedIcon: {
    type: "string"
  },
  faqSchema: {
    type: "boolean",
    "default": false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./blocks/accordion-item/src/edit.js":
/*!*******************************************!*\
  !*** ./blocks/accordion-item/src/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./blocks/accordion-item/src/inspector.js");
/**
 * WordPress dependencies
 */





function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected;
  var title = attributes.title,
      clickable = attributes.clickable,
      inheritedTagName = attributes.inheritedTagName,
      inheritedDisplayIcon = attributes.inheritedDisplayIcon,
      inheritedTabIcon = attributes.inheritedTabIcon,
      inheritedExpandedIcon = attributes.inheritedExpandedIcon;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, "eb-guten-block-main-parent-wrapper eb-accordion-item")
  });
  var accordionTitle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var handleSlidingOfAccordion = function handleSlidingOfAccordion() {
    var contentWrapper = accordionTitle.current.nextElementSibling;
    var tabIcon = accordionTitle.current.getAttribute("data-tab-icon").split(" ");
    var expandedIcon = accordionTitle.current.getAttribute("data-expanded-icon").split(" ");
    var iconWrapper = accordionTitle.current.children[0].children[0];

    if (contentWrapper.style.display === "block") {
      contentWrapper.style.display = "none";
      iconWrapper.removeAttribute("class");

      for (var i = 0; i < tabIcon.length; i++) {
        iconWrapper.classList.add(tabIcon[i]);
      }

      iconWrapper.classList.add("eb-accordion-icon");
    } else {
      contentWrapper.style.display = "block";
      contentWrapper.style.opacity = "1";
      iconWrapper.removeAttribute("class");

      for (var _i = 0; _i < expandedIcon.length; _i++) {
        iconWrapper.classList.add(expandedIcon[_i]);
      }

      iconWrapper.classList.add("eb-accordion-icon");
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-wrapper for_edit_page",
    "data-clickable": clickable
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-title-wrapper",
    onClick: handleSlidingOfAccordion,
    ref: accordionTitle,
    "data-tab-icon": inheritedDisplayIcon ? inheritedTabIcon : "",
    "data-expanded-icon": inheritedDisplayIcon ? inheritedExpandedIcon : ""
  }, inheritedDisplayIcon && /*#__PURE__*/React.createElement("span", {
    className: "eb-accordion-icon-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(inheritedTabIcon, " eb-accordion-icon")
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "eb-accordion-title",
    tagName: inheritedTagName,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Title", "essential-blocks"),
    onChange: function onChange(value) {
      return setAttributes({
        title: value
      });
    },
    value: title
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-content-wrapper",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-content"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    templateLock: false
  }))))));
}

/***/ }),

/***/ "./blocks/accordion-item/src/icon.js":
/*!*******************************************!*\
  !*** ./blocks/accordion-item/src/icon.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AdvTabs2 = function AdvTabs2() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 70 70",
    style: {
      enableBackground: "new 0 0 70 70"
    },
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    gradientUnits: "userSpaceOnUse",
    x1: -1.617,
    y1: 34.992,
    x2: 77.569,
    y2: 34.992
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "m23.7 18.4-.2-9s-.2-2.6-4.4-2.6H4.7c-.4 0-.7 0-1.1.1C1.4 7.3 0 9.1 0 11.4v46.8c0 2.9 2 5 5 5 16.7-.1 33.4 0 50.1 0h10.7c1.9 0 3.2-1 4-2.7l.3-.9V19.7c0-.7-.6-1.3-1.3-1.3H23.7zm43.7 39.8c0 1.7-.5 2.2-2.2 2.2H5c-1.2 0-2.2-1-2.2-2.2V11.6c0-1.2 1-2.2 2.2-2.2h13.8c1.5 0 2.1.5 2.1 2.1v7.7c0 1.5.4 1.9 1.9 1.9h43.3c.7 0 1.3.6 1.3 1.3v35.8z",
    style: {
      fill: "url(#a)"
    }
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    gradientUnits: "userSpaceOnUse",
    x1: -3.249,
    y1: 40.816,
    x2: 75.937,
    y2: 40.816
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M60.6 27.4H29.2c-1.4 0-1.8.4-1.8 1.8v23.3c0 1.4.4 1.8 1.8 1.8H60.5c1.1 0 1.6-.5 1.6-1.6V29c0-1.1-.5-1.6-1.5-1.6zM31.2 51.5c2.7-4.3 5.4-8.6 8.2-13 2.8 4.4 5.5 8.6 8.2 13H31.2zm23.7 0h-3.5c-.3 0-.6-.2-.8-.4-.8-1.1-1.5-2.3-2.2-3.5-.1-.2-.2-.5-.1-.6 1.1-1.8 2.3-3.6 3.5-5.5 2.1 3.3 4.2 6.6 6.3 10h-3.2zm4.4-3.4c-.3-.5-.6-.9-.8-1.3-1.8-2.8-3.5-5.6-5.3-8.4-.7-1.1-1.8-1.1-2.6 0-.1.2-.2.3-.3.5l-3.6 5.7c-.2-.3-.3-.5-.4-.7l-5.4-8.4c-.8-1.3-1.9-1.3-2.7 0-2.5 3.9-5 7.8-7.4 11.7-.1.2-.3.4-.5.7V30H59.4c-.1 6.1-.1 12-.1 18.1z",
    style: {
      fill: "url(#b)"
    }
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    gradientUnits: "userSpaceOnUse",
    x1: -0.37,
    y1: 28.723,
    x2: 67.358,
    y2: 28.723
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8.1 30.1h13.3c.5 0 .8-.6.8-1.3 0-.7-.3-1.2-.8-1.4H8.2c-.2 0-.4 0-.6.1-.6.2-.8 1.2-.5 2 .2.4.6.6 1 .6z",
    style: {
      fill: "url(#c)"
    }
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    gradientUnits: "userSpaceOnUse",
    x1: -0.369,
    y1: 36.451,
    x2: 67.355,
    y2: 36.451
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8.1 37.8H21.2c.2 0 .5-.1.7-.2.4-.3.5-.9.4-1.5-.1-.7-.5-1-1-1h-13c-.7 0-1.1.5-1.1 1.4-.2.8.2 1.3.9 1.3z",
    style: {
      fill: "url(#d)"
    }
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    gradientUnits: "userSpaceOnUse",
    x1: -0.369,
    y1: 44.827,
    x2: 67.356,
    y2: 44.827
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8.1 46.2h13c.7 0 1.1-.5 1.1-1.4 0-.8-.4-1.3-1.1-1.3h-13c-.7 0-1.1.5-1.1 1.3 0 .9.4 1.4 1.1 1.4z",
    style: {
      fill: "url(#e)"
    }
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "f",
    gradientUnits: "userSpaceOnUse",
    x1: -0.37,
    y1: 52.474,
    x2: 67.362,
    y2: 52.474
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M21.1 51.1c-1.4-.1-.3 0-1.7 0H7.9c-.5 0-.8.5-.9 1.2 0 .7.3 1.3.7 1.4.2.1.3.1.5.1h12.7c.2 0 .4 0 .6-.1.6-.3.8-1.4.4-2.1-.1-.3-.5-.5-.8-.5z",
    style: {
      fill: "url(#f)"
    }
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "g",
    gradientUnits: "userSpaceOnUse",
    x1: -1.617,
    y1: 13.942,
    x2: 77.569,
    y2: 13.942
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    style: {
      stopColor: "#1a6dff"
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    style: {
      stopColor: "#c822ff"
    }
  })), /*#__PURE__*/React.createElement("path", {
    d: "M11.8 15.3H16c.6 0 1-.1 1.3-.6.6-1-.1-2.1-1.3-2.1H7.5c-1 0-1.6.5-1.6 1.4 0 .8.6 1.3 1.6 1.3h4.3z",
    style: {
      fill: "url(#g)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvTabs2);

/***/ }),

/***/ "./blocks/accordion-item/src/index.js":
/*!********************************************!*\
  !*** ./blocks/accordion-item/src/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/accordion-item/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/accordion-item/src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./blocks/accordion-item/src/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./blocks/accordion-item/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./blocks/accordion-item/src/attributes.js");
/**
 * WordPress dependeincies
 */

/**
 * Internal dependencies
 */






var _EBAccordionControls = EBAccordionControls,
    ebConditionalRegisterBlockType = _EBAccordionControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/accordion-item/src/inspector.js":
/*!************************************************!*\
  !*** ./blocks/accordion-item/src/inspector.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var clickable = attributes.clickable;
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls " + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Open?", "essential-blocks"),
      checked: clickable,
      onChange: function onChange() {
        return setAttributes({
          clickable: !clickable
        });
      }
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./blocks/accordion-item/src/save.js":
/*!*******************************************!*\
  !*** ./blocks/accordion-item/src/save.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


var save = function save(_ref) {
  var attributes = _ref.attributes;
  var title = attributes.title,
      clickable = attributes.clickable,
      inheritedTagName = attributes.inheritedTagName,
      inheritedDisplayIcon = attributes.inheritedDisplayIcon,
      inheritedTabIcon = attributes.inheritedTabIcon;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-wrapper",
    "data-clickable": clickable
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-title-wrapper"
  }, inheritedDisplayIcon && /*#__PURE__*/React.createElement("span", {
    className: "eb-accordion-icon-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(inheritedTabIcon, " eb-accordion-icon")
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    className: "eb-accordion-title",
    tagName: inheritedTagName,
    value: title
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-content"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./blocks/accordion-toggle/src/attributes.js":
/*!***************************************************!*\
  !*** ./blocks/accordion-toggle/src/attributes.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./blocks/accordion-toggle/src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./blocks/accordion-toggle/src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./blocks/accordion-toggle/src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./blocks/accordion-toggle/src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./blocks/accordion-toggle/src/constants/rangeNames.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _window$EBAccordionCo = window.EBAccordionControls,
    generateDimensionsAttributes = _window$EBAccordionCo.generateDimensionsAttributes,
    generateTypographyAttributes = _window$EBAccordionCo.generateTypographyAttributes,
    generateBackgroundAttributes = _window$EBAccordionCo.generateBackgroundAttributes,
    generateBorderShadowAttributes = _window$EBAccordionCo.generateBorderShadowAttributes,
    generateResponsiveRangeAttributes = _window$EBAccordionCo.generateResponsiveRangeAttributes;

var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // accordion attributes starts
  accordionType: {
    type: "string",
    source: "attribute",
    selector: ".eb-accordion-container",
    attribute: "data-accordion-type",
    "default": "accordion"
  },
  displayIcon: {
    type: "boolean",
    "default": true
  },
  tabIcon: {
    type: "string"
  },
  expandedIcon: {
    type: "string"
  },
  transitionDuration: {
    type: "number",
    "default": 0.5
  },
  contentAlign: {
    type: "string",
    "default": "left"
  },
  titleAlignment: {
    type: "string",
    "default": "left"
  },
  titleColor: {
    type: "string"
  },
  contentColor: {
    type: "string"
  },
  iconColor: {
    type: "string"
  },
  iconPosition: {
    type: "string",
    "default": "right"
  },
  hoverTitleColor: {
    type: "string"
  },
  activeBgColor: {
    type: "string"
  },
  activeTitleColor: {
    type: "string"
  },
  tagName: {
    type: "string",
    "default": "h3"
  },
  accordionChildCount: {
    type: "number",
    "default": 3
  },
  faqSchema: {
    type: "boolean",
    "default": false
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rangeIconSize, {
  noUnits: true,
  defaultRange: 20
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.accGapRange, {
  noUnits: true,
  defaultRange: 15
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.WrpBgConst, {
  // defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
  defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)"
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.iconBgConst, {
  // defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
  defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
  noOverlay: true,
  noMainBgi: true
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.tabBgConst, _defineProperty({
  isBgDefaultGradient: true,
  noMainBgi: true,
  defaultFillColor: "#8672ff",
  // defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
  defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
  noOverlay: true
}, "noMainBgi", true))), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.conBgConst, _defineProperty({
  noMainBgi: true,
  // defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
  defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
  noOverlay: true
}, "noMainBgi", true))), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.WrpBdShadowConst)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.iconBdShadowConst)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.tabBdShadowConst)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.conBdShadowConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapPaddingConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.iconMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.iconPaddingConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tabMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.tabPaddingConst, {
  top: 15,
  bottom: 15,
  left: 20,
  right: 20,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.conMarginConst)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.conPaddingConst, {
  top: 10,
  bottom: 10,
  left: 15,
  right: 15 // isLinked: false,

}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./blocks/accordion-toggle/src/components/accordion-icon.js":
/*!******************************************************************!*\
  !*** ./blocks/accordion-toggle/src/components/accordion-icon.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AccordionIcon = function AccordionIcon(_ref) {
  var icon = _ref.icon;
  return /*#__PURE__*/React.createElement("span", {
    className: "eb-accordion-icon-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(icon, " eb-accordion-icon")
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionIcon);

/***/ }),

/***/ "./blocks/accordion-toggle/src/constants/backgroundsConstants.js":
/*!***********************************************************************!*\
  !*** ./blocks/accordion-toggle/src/constants/backgroundsConstants.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrpBgConst": function() { return /* binding */ WrpBgConst; },
/* harmony export */   "iconBgConst": function() { return /* binding */ iconBgConst; },
/* harmony export */   "tabBgConst": function() { return /* binding */ tabBgConst; },
/* harmony export */   "conBgConst": function() { return /* binding */ conBgConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var WrpBgConst = "WrpBg_";
var iconBgConst = "icnBg_";
var tabBgConst = "tabBg_";
var conBgConst = "conBg_";

/***/ }),

/***/ "./blocks/accordion-toggle/src/constants/borderShadowConstants.js":
/*!************************************************************************!*\
  !*** ./blocks/accordion-toggle/src/constants/borderShadowConstants.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrpBdShadowConst": function() { return /* binding */ WrpBdShadowConst; },
/* harmony export */   "iconBdShadowConst": function() { return /* binding */ iconBdShadowConst; },
/* harmony export */   "tabBdShadowConst": function() { return /* binding */ tabBdShadowConst; },
/* harmony export */   "conBdShadowConst": function() { return /* binding */ conBdShadowConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var WrpBdShadowConst = "wrpBdSd_";
var iconBdShadowConst = "icnBdSd_";
var tabBdShadowConst = "tabBdSd_";
var conBdShadowConst = "conBdSd_";

/***/ }),

/***/ "./blocks/accordion-toggle/src/constants/dimensionsConstants.js":
/*!**********************************************************************!*\
  !*** ./blocks/accordion-toggle/src/constants/dimensionsConstants.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapMarginConst": function() { return /* binding */ wrapMarginConst; },
/* harmony export */   "wrapPaddingConst": function() { return /* binding */ wrapPaddingConst; },
/* harmony export */   "iconMarginConst": function() { return /* binding */ iconMarginConst; },
/* harmony export */   "iconPaddingConst": function() { return /* binding */ iconPaddingConst; },
/* harmony export */   "tabMarginConst": function() { return /* binding */ tabMarginConst; },
/* harmony export */   "tabPaddingConst": function() { return /* binding */ tabPaddingConst; },
/* harmony export */   "conMarginConst": function() { return /* binding */ conMarginConst; },
/* harmony export */   "conPaddingConst": function() { return /* binding */ conPaddingConst; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var wrapMarginConst = "wrpMrg_";
var wrapPaddingConst = "wrpPad_";
var iconMarginConst = "icnMrg_";
var iconPaddingConst = "icnPad_";
var tabMarginConst = "tabMrg_";
var tabPaddingConst = "tabPad_";
var conMarginConst = "conMrg_";
var conPaddingConst = "conPad_";

/***/ }),

/***/ "./blocks/accordion-toggle/src/constants/index.js":
/*!********************************************************!*\
  !*** ./blocks/accordion-toggle/src/constants/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_TITLE_COLOR": function() { return /* binding */ DEFAULT_TITLE_COLOR; },
/* harmony export */   "DEFAULT_TITLE_SIZE": function() { return /* binding */ DEFAULT_TITLE_SIZE; },
/* harmony export */   "DEFAULT_TITLE_BACKGROUND": function() { return /* binding */ DEFAULT_TITLE_BACKGROUND; },
/* harmony export */   "DEFAULT_TITLE_ACTIVE_COLOR": function() { return /* binding */ DEFAULT_TITLE_ACTIVE_COLOR; },
/* harmony export */   "DEFAULT_CONTENT_COLOR": function() { return /* binding */ DEFAULT_CONTENT_COLOR; },
/* harmony export */   "DEFAULT_CONTENT_BACKGROUND": function() { return /* binding */ DEFAULT_CONTENT_BACKGROUND; },
/* harmony export */   "DEFAULT_CONTENT_BORDER_COLOR": function() { return /* binding */ DEFAULT_CONTENT_BORDER_COLOR; },
/* harmony export */   "DEFAULT_ICON_COLOR": function() { return /* binding */ DEFAULT_ICON_COLOR; },
/* harmony export */   "MAX_HEIGHT": function() { return /* binding */ MAX_HEIGHT; },
/* harmony export */   "ACCORDION_TYPES": function() { return /* binding */ ACCORDION_TYPES; },
/* harmony export */   "ACCORDION_STYLES": function() { return /* binding */ ACCORDION_STYLES; },
/* harmony export */   "BACKGROUND_TYPE": function() { return /* binding */ BACKGROUND_TYPE; },
/* harmony export */   "TITLE_BACKGROUND_TYPE": function() { return /* binding */ TITLE_BACKGROUND_TYPE; },
/* harmony export */   "BACKGROUND_CLIP": function() { return /* binding */ BACKGROUND_CLIP; },
/* harmony export */   "BUTTON_STYLES": function() { return /* binding */ BUTTON_STYLES; },
/* harmony export */   "BACKGROUND_SIZE": function() { return /* binding */ BACKGROUND_SIZE; },
/* harmony export */   "BACKGROUND_REPEAT": function() { return /* binding */ BACKGROUND_REPEAT; },
/* harmony export */   "BACKGROUND_ATTACHMENT": function() { return /* binding */ BACKGROUND_ATTACHMENT; },
/* harmony export */   "BORDER_STYLES": function() { return /* binding */ BORDER_STYLES; },
/* harmony export */   "HEADERS": function() { return /* binding */ HEADERS; },
/* harmony export */   "ICON_POSITIONS": function() { return /* binding */ ICON_POSITIONS; },
/* harmony export */   "TRANSITION_TYPES": function() { return /* binding */ TRANSITION_TYPES; },
/* harmony export */   "TITLE_ALIGNMENT": function() { return /* binding */ TITLE_ALIGNMENT; },
/* harmony export */   "CONTENT_ALIGN": function() { return /* binding */ CONTENT_ALIGN; },
/* harmony export */   "COLOR_TYPES": function() { return /* binding */ COLOR_TYPES; },
/* harmony export */   "TEXT_TRANSFORM": function() { return /* binding */ TEXT_TRANSFORM; },
/* harmony export */   "FONT_WEIGHTS": function() { return /* binding */ FONT_WEIGHTS; },
/* harmony export */   "TEXT_DECORATION": function() { return /* binding */ TEXT_DECORATION; },
/* harmony export */   "HEADING": function() { return /* binding */ HEADING; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
 // Default colors

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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Accordion", "essential-blocks"),
  value: "accordion"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle", "essential-blocks"),
  value: "toggle"
}];
var ACCORDION_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Material", "essential-blocks"),
  value: "material"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dark", "essential-blocks"),
  value: "dark"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Royal", "essential-blocks"),
  value: "royal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "essential-blocks"),
  value: "image"
}];
var TITLE_BACKGROUND_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}];
var BACKGROUND_CLIP = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Box", "essential-blocks"),
  value: "border-box"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding Box", "essential-blocks"),
  value: "padding-box"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content Box", "essential-blocks"),
  value: "content-box"
}];
var BUTTON_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Material", "essential-blocks"),
  value: "material"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ghost", "essential-blocks"),
  value: "ghost"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded", "essential-blocks"),
  value: "rounded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "essential-blocks"),
  value: "auto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "essential-blocks"),
  value: "cover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container", "essential-blocks"),
  value: "container"
}];
var BACKGROUND_REPEAT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No Repeat", "essential-blocks"),
  value: "no-repeat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat", "essential-blocks"),
  value: "repeat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat X", "essential-blocks"),
  value: "repeat-x"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat Y", "essential-blocks"),
  value: "repeat-y"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space", "essential-blocks"),
  value: "space"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Round", "essential-blocks"),
  value: "round"
}];
var BACKGROUND_ATTACHMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll", "essential-blocks"),
  value: "scroll"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed", "essential-blocks"),
  value: "fixed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Local", "essential-blocks"),
  value: "local"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
var HEADERS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H1", "essential-blocks"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H2", "essential-blocks"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H3", "essential-blocks"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H4", "essential-blocks"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H5", "essential-blocks"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H6", "essential-blocks"),
  value: "h6"
}];
var ICON_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
var TRANSITION_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Liner", "essential-blocks"),
  value: "linear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ease", "essential-blocks"),
  value: "ease"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ease In", "essential-blocks"),
  value: "ease-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ease Out", "essential-blocks"),
  value: "ease-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ease In Out", "essential-blocks"),
  value: "ease-in-out"
}];
var TITLE_ALIGNMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
var CONTENT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
var COLOR_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}];
var TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "essential-blocks"),
  value: "lowercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "essential-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "essential-blocks"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "essential-blocks"),
  value: "lighter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "essential-blocks"),
  value: "normal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "essential-blocks"),
  value: "bold"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "essential-blocks"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "essential-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "essential-blocks"),
  value: "line-through"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "essential-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline Oveline", "essential-blocks"),
  value: "underline overline"
}];
var HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H1", "essential-blocks"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H2", "essential-blocks"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H3", "essential-blocks"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H4", "essential-blocks"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H5", "essential-blocks"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H6", "essential-blocks"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("P", "essential-blocks"),
  value: "p"
}];

/***/ }),

/***/ "./blocks/accordion-toggle/src/constants/rangeNames.js":
/*!*************************************************************!*\
  !*** ./blocks/accordion-toggle/src/constants/rangeNames.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapperWidth": function() { return /* binding */ wrapperWidth; },
/* harmony export */   "rangeIconSize": function() { return /* binding */ rangeIconSize; },
/* harmony export */   "accGapRange": function() { return /* binding */ accGapRange; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var wrapperWidth = "wrpW_";
var rangeIconSize = "icnZ_";
var accGapRange = "acGp_";

/***/ }),

/***/ "./blocks/accordion-toggle/src/constants/typographyPrefixConstants.js":
/*!****************************************************************************!*\
  !*** ./blocks/accordion-toggle/src/constants/typographyPrefixConstants.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_title": function() { return /* binding */ typoPrefix_title; },
/* harmony export */   "typoPrefix_content": function() { return /* binding */ typoPrefix_content; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var typoPrefix_title = "typTl_";
var typoPrefix_content = "typCn_";

/***/ }),

/***/ "./blocks/accordion-toggle/src/deprecated.js":
/*!***************************************************!*\
  !*** ./blocks/accordion-toggle/src/deprecated.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_accordion_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion-icon */ "./blocks/accordion-toggle/src/components/accordion-icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./blocks/accordion-toggle/src/attributes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */


var _lodash = lodash,
    omit = _lodash.omit;
/**
 * Inteanal dependencies
 */



var deprecated = [{
  attributes: _objectSpread(_objectSpread({}, omit(_objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]), ["tabIcon", "expandedIcon"])), {}, {
    accordions: {
      type: "array",
      selector: ".eb-accordion-wrapper",
      source: "query",
      "default": [],
      query: {
        title: {
          type: "string",
          selector: ".eb-accordion-title",
          source: "html"
        },
        content: {
          type: "string",
          selector: ".eb-accordion-content",
          source: "html"
        },
        clickable: {
          type: "string",
          source: "attribute",
          attribute: "data-clickable"
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
    tabIcon: {
      type: "string",
      "default": "fas fa-angle-right"
    },
    expandedIcon: {
      type: "string",
      "default": "fas fa-angle-down"
    }
  }),
  supports: {
    align: ["wide", "full"]
  },
  migrate: function migrate(attributes) {
    var iBlocks = attributes.accordions.map(function (item) {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)("accordion-toggle/accordion-item", {
        title: item.title
      }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)("core/paragraph", {
        content: item.content
      })]);
    });
    return [omit(attributes, ["accordions"]), iBlocks];
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var blockId = attributes.blockId,
        classHook = attributes.classHook,
        accordionType = attributes.accordionType,
        displayIcon = attributes.displayIcon,
        accordions = attributes.accordions,
        tabIcon = attributes.tabIcon,
        expandedIcon = attributes.expandedIcon,
        tagName = attributes.tagName;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-container ".concat(blockId),
      "data-accordion-type": accordionType || "toggle",
      "data-tab-icon": displayIcon ? tabIcon : "",
      "data-expanded-icon": displayIcon ? expandedIcon : ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-inner"
    }, accordions.map(function (accordion, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-wrapper",
        "data-clickable": "".concat(accordion.clickable),
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-title-wrapper"
      }, displayIcon && /*#__PURE__*/React.createElement(_components_accordion_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: tabIcon
      }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: tagName,
        className: "eb-accordion-title",
        value: accordion.title
      })), /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-content-wrapper"
      }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "p",
        className: "eb-accordion-content",
        value: accordion.content
      })));
    })))));
  }
}, {
  attributes: _objectSpread(_objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    accordions: {
      type: "array",
      selector: ".eb-accordion-wrapper",
      source: "query",
      "default": [],
      query: {
        title: {
          type: "string",
          selector: ".eb-accordion-title",
          source: "html"
        },
        content: {
          type: "string",
          selector: ".eb-accordion-content",
          source: "html"
        },
        clickable: {
          type: "string",
          source: "attribute",
          attribute: "data-clickable"
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
    }
  }),
  supports: {
    align: ["wide", "full"]
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var blockId = attributes.blockId,
        accordionType = attributes.accordionType,
        displayIcon = attributes.displayIcon,
        accordions = attributes.accordions,
        tabIcon = attributes.tabIcon,
        expandedIcon = attributes.expandedIcon;
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-container ".concat(blockId),
      "data-accordion-type": accordionType || "toggle",
      "data-tab-icon": displayIcon ? tabIcon : "",
      "data-expanded-icon": displayIcon ? expandedIcon : ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "eb-accordion-inner"
    }, accordions.map(function (accordion, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-wrapper",
        "data-clickable": "".concat(accordion.clickable),
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-title-wrapper"
      }, displayIcon && /*#__PURE__*/React.createElement(_components_accordion_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: tabIcon
      }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "h3",
        className: "eb-accordion-title",
        value: accordion.title
      })), /*#__PURE__*/React.createElement("div", {
        className: "eb-accordion-content-wrapper"
      }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "p",
        className: "eb-accordion-content",
        value: accordion.content
      })));
    }))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/accordion-toggle/src/edit.js":
/*!*********************************************!*\
  !*** ./blocks/accordion-toggle/src/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./blocks/accordion-toggle/src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/rangeNames */ "./blocks/accordion-toggle/src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./blocks/accordion-toggle/src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./blocks/accordion-toggle/src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./blocks/accordion-toggle/src/constants/borderShadowConstants.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inspector */ "./blocks/accordion-toggle/src/inspector.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */






var ALLOWED_BLOCKS = ["accordion-item/accordion-item"];
var _window$EBAccordionCo = window.EBAccordionControls,
    softMinifyCssStrings = _window$EBAccordionCo.softMinifyCssStrings,
    generateBackgroundControlStyles = _window$EBAccordionCo.generateBackgroundControlStyles,
    generateDimensionsControlStyles = _window$EBAccordionCo.generateDimensionsControlStyles,
    generateTypographyStyles = _window$EBAccordionCo.generateTypographyStyles,
    generateBorderShadowStyles = _window$EBAccordionCo.generateBorderShadowStyles,
    generateResponsiveRangeStyles = _window$EBAccordionCo.generateResponsiveRangeStyles,
    duplicateBlockIdFix = _window$EBAccordionCo.duplicateBlockIdFix;





/**
 * Internal dependencies
 */





var Edit = function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected,
      clientId = props.clientId;
  var resOption = attributes.resOption,
      blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      classHook = attributes.classHook,
      accordionType = attributes.accordionType,
      displayIcon = attributes.displayIcon,
      transitionDuration = attributes.transitionDuration,
      tabIcon = attributes.tabIcon,
      expandedIcon = attributes.expandedIcon,
      _attributes$titleColo = attributes.titleColor,
      titleColor = _attributes$titleColo === void 0 ? "#fff" : _attributes$titleColo,
      _attributes$contentCo = attributes.contentColor,
      contentColor = _attributes$contentCo === void 0 ? "#555" : _attributes$contentCo,
      _attributes$contentAl = attributes.contentAlign,
      contentAlign = _attributes$contentAl === void 0 ? "left" : _attributes$contentAl,
      _attributes$iconColor = attributes.iconColor,
      iconColor = _attributes$iconColor === void 0 ? "#4a5059" : _attributes$iconColor,
      iconPosition = attributes.iconPosition,
      titleAlignment = attributes.titleAlignment,
      hoverTitleColor = attributes.hoverTitleColor,
      activeBgColor = attributes.activeBgColor,
      activeTitleColor = attributes.activeTitleColor,
      tagName = attributes.tagName,
      faqSchema = attributes.faqSchema,
      icnZ_Range = attributes.icnZ_Range,
      TABicnZ_Range = attributes.TABicnZ_Range,
      MOBicnZ_Range = attributes.MOBicnZ_Range,
      accordionChildCount = attributes.accordionChildCount; // this useEffect is for creating a unique blockId for each block's unique className

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-accordion";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    });
  }, []);
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(className, "eb-guten-block-main-parent-wrapper")
  });

  var addAccordion = function addAccordion() {
    var innerBlocks = _toConsumableArray((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getBlocks(clientId));

    var count = innerBlocks ? innerBlocks.length : 3;
    var newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)("accordion-toggle/accordion-item", {
      itemId: count + 1,
      inheritedAccordionType: accordionType,
      inheritedTagName: tagName,
      inheritedDisplayIcon: displayIcon,
      inheritedTabIcon: tabIcon,
      inheritedExpandedIcon: expandedIcon
    });
    innerBlocks.splice(innerBlocks.length, 0, newBlock);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)("core/block-editor").replaceInnerBlocks(clientId, innerBlocks).then(function () {
      setAttributes({
        accordionChildCount: count + 1
      });
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!tabIcon) {
      setAttributes({
        tabIcon: "fas fa-angle-right"
      });
    }

    if (!expandedIcon) {
      setAttributes({
        expandedIcon: "fas fa-angle-down"
      });
    }

    var parentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getBlocksByClientId(clientId)[0];
    var innerBlocks = parentBlocks === null || parentBlocks === void 0 ? void 0 : parentBlocks.innerBlocks;

    var _dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)("core/block-editor"),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    if (innerBlocks) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_13__.times)(innerBlocks.length, function (n) {
        updateBlockAttributes(innerBlocks[n].clientId, {
          inheritedAccordionType: accordionType,
          inheritedDisplayIcon: displayIcon,
          inheritedTabIcon: tabIcon,
          inheritedExpandedIcon: expandedIcon,
          inheritedTagName: tagName,
          faqSchema: faqSchema
        });
      });
    }
  }, []); // styles related to generateTypographyStyles start ⬇

  var _generateTypographySt = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_title,
    defaultFontSize: 18
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_6__.typoPrefix_content,
    defaultFontSize: 14
  }),
      contentTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      contentTypoStylesTab = _generateTypographySt2.typoStylesTab,
      contentTypoStylesMobile = _generateTypographySt2.typoStylesMobile; // styles related to generateTypographyStyles end
  // styles related to generateBackgroundControlStyles start ⬇


  var _generateBackgroundCo = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.WrpBgConst // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      wrpBackgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      wrpHoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      wrpBackgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      wrpHoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      wrpBackgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      wrpHoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      wrpOverlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
      wrpHoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
      wrpOverlayStylesTab = _generateBackgroundCo.overlayStylesTab,
      wrpHoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
      wrpOverlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
      wrpHoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
      wrpBgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
      wrpOvlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;

  var _generateBackgroundCo2 = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.iconBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      iconBackgroundStylesDesktop = _generateBackgroundCo2.backgroundStylesDesktop,
      iconHoverBackgroundStylesDesktop = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
      iconBgTransitionStyle = _generateBackgroundCo2.bgTransitionStyle;

  var _generateBackgroundCo3 = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.tabBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      tabBackgroundStylesDesktop = _generateBackgroundCo3.backgroundStylesDesktop,
      tabHoverBackgroundStylesDesktop = _generateBackgroundCo3.hoverBackgroundStylesDesktop,
      tabBgTransitionStyle = _generateBackgroundCo3.bgTransitionStyle;

  var _generateBackgroundCo4 = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.conBgConst,
    noOverlay: true,
    noMainBgi: true // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
      conBackgroundStylesDesktop = _generateBackgroundCo4.backgroundStylesDesktop,
      conHoverBackgroundStylesDesktop = _generateBackgroundCo4.hoverBackgroundStylesDesktop,
      conBgTransitionStyle = _generateBackgroundCo4.bgTransitionStyle; // styles related to generateBackgroundControlStyles end
  // styles related to generateDimensionsControlStyles start ⬇


  var _generateDimensionsCo = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.wrapMarginConst,
    styleFor: "margin"
  }),
      wrpMarginDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrpMarginTab = _generateDimensionsCo.dimensionStylesTab,
      wrpMarginMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.wrapPaddingConst,
    styleFor: "padding"
  }),
      wrpPaddingDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrpPaddingTab = _generateDimensionsCo2.dimensionStylesTab,
      wrpPaddingMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.iconMarginConst,
    styleFor: "margin"
  }),
      iconMarginDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      iconMarginTab = _generateDimensionsCo3.dimensionStylesTab,
      iconMarginMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.iconPaddingConst,
    styleFor: "padding"
  }),
      iconPaddingDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      iconPaddingTab = _generateDimensionsCo4.dimensionStylesTab,
      iconPaddingMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tabMarginConst,
    styleFor: "margin"
  }),
      tabMarginDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      tabMarginTab = _generateDimensionsCo5.dimensionStylesTab,
      tabMarginMobile = _generateDimensionsCo5.dimensionStylesMobile;

  var _generateDimensionsCo6 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.tabPaddingConst,
    styleFor: "padding"
  }),
      tabPaddingDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
      tabPaddingTab = _generateDimensionsCo6.dimensionStylesTab,
      tabPaddingMobile = _generateDimensionsCo6.dimensionStylesMobile;

  var _generateDimensionsCo7 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.conMarginConst,
    styleFor: "margin"
  }),
      conMarginDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
      conMarginTab = _generateDimensionsCo7.dimensionStylesTab,
      conMarginMobile = _generateDimensionsCo7.dimensionStylesMobile;

  var _generateDimensionsCo8 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.conPaddingConst,
    styleFor: "padding"
  }),
      conPaddingDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
      conPaddingTab = _generateDimensionsCo8.dimensionStylesTab,
      conPaddingMobile = _generateDimensionsCo8.dimensionStylesMobile; // styles related to generateDimensionsControlStyles end
  // styles related to generateBorderShadowStyles start ⬇


  var _generateBorderShadow = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.WrpBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      wrpBdShdStyesDesktop = _generateBorderShadow.styesDesktop,
      wrpBdShdStyesTab = _generateBorderShadow.styesTab,
      wrpBdShdStyesMobile = _generateBorderShadow.styesMobile,
      wrpBdShdStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      wrpBdShdStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      wrpBdShdStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
      wrpBdShdTransitionStyle = _generateBorderShadow.transitionStyle;

  var _generateBorderShadow2 = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.iconBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      iconBdShdStyesDesktop = _generateBorderShadow2.styesDesktop,
      iconBdShdStyesTab = _generateBorderShadow2.styesTab,
      iconBdShdStyesMobile = _generateBorderShadow2.styesMobile,
      iconBdShdStylesHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
      iconBdShdStylesHoverTab = _generateBorderShadow2.stylesHoverTab,
      iconBdShdStylesHoverMobile = _generateBorderShadow2.stylesHoverMobile,
      iconBdShdTransitionStyle = _generateBorderShadow2.transitionStyle;

  var _generateBorderShadow3 = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.tabBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      tabBdShdStyesDesktop = _generateBorderShadow3.styesDesktop,
      tabBdShdStyesTab = _generateBorderShadow3.styesTab,
      tabBdShdStyesMobile = _generateBorderShadow3.styesMobile,
      tabBdShdStylesHoverDesktop = _generateBorderShadow3.stylesHoverDesktop,
      tabBdShdStylesHoverTab = _generateBorderShadow3.stylesHoverTab,
      tabBdShdStylesHoverMobile = _generateBorderShadow3.stylesHoverMobile,
      tabBdShdTransitionStyle = _generateBorderShadow3.transitionStyle;

  var _generateBorderShadow4 = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.conBdShadowConst,
    attributes: attributes // noShadow: true,
    // noBorder: true,

  }),
      conBdShdStyesDesktop = _generateBorderShadow4.styesDesktop,
      conBdShdStyesTab = _generateBorderShadow4.styesTab,
      conBdShdStyesMobile = _generateBorderShadow4.styesMobile,
      conBdShdStylesHoverDesktop = _generateBorderShadow4.stylesHoverDesktop,
      conBdShdStylesHoverTab = _generateBorderShadow4.stylesHoverTab,
      conBdShdStylesHoverMobile = _generateBorderShadow4.stylesHoverMobile,
      conBdShdTransitionStyle = _generateBorderShadow4.transitionStyle; // styles related to generateBorderShadowStyles end


  var _generateResponsiveRa = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.rangeIconSize,
    customUnit: "px",
    property: "font-size",
    attributes: attributes
  }),
      iconSizeDesktop = _generateResponsiveRa.rangeStylesDesktop,
      iconSizeTab = _generateResponsiveRa.rangeStylesTab,
      iconSizeMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_7__.accGapRange,
    customUnit: "px",
    property: "padding-top",
    attributes: attributes
  }),
      accGapDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      accGapTab = _generateResponsiveRa2.rangeStylesTab,
      accGapMobile = _generateResponsiveRa2.rangeStylesMobile; // styles related to generateResponsiveRangeStyles end


  var wrapperStylesDesktop = "\n\n\t.eb-accordion-item.is-selected .eb-accordion-content-wrapper {\n\t\tmax-height:2000px;\n\t\topacity: 0;\n\t\toverflow: visible;\n\t}\n\t\n\t.eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content {\n\t\tborder:1px solid #aaa;\n\t}\n\t\n\t.eb-accordion-container.eb_accdn_loaded .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{\n\t\tvisibility:visible;\n\t\tposition:static;\n\t}\n\n\t.eb-accordion-container .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{\n\t\tvisibility:hidden;\n\t\tposition:absolute;\n\t}\n\n\t.".concat(blockId, ".eb-accordion-container .eb-accordion-inner{\n\t\tposition:relative;\n\t}\n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper h1,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper h2,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper h3,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper h4,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper h5,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper h6,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper p{\n\t\tmargin:0;\n\t\tpadding:0;\n\t}\n\t\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{\n\t\t").concat(accGapDesktop, "\n\t}\n\t\n\t\n\t.").concat(blockId, ".eb-accordion-container{\n\t\t").concat(wrpMarginDesktop, "\n\t\t").concat(wrpPaddingDesktop, "\n\t\t").concat(wrpBackgroundStylesDesktop, "\n\t\t").concat(wrpBdShdStyesDesktop, "\n\t\ttransition:").concat(wrpBgTransitionStyle, ", ").concat(wrpBdShdTransitionStyle, ";\n\t\toverflow:hidden;\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container:hover{\n\t\t").concat(wrpHoverBackgroundStylesDesktop, "\n\t\t").concat(wrpBdShdStylesHoverDesktop, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container:before{\n\t\t").concat(wrpOverlayStylesDesktop, "\n\t\ttransition:").concat(wrpOvlTransitionStyle, ";\n\t}\n\n\t.").concat(blockId, ".eb-accordion-container:hover:before{\n\t\t").concat(wrpHoverOverlayStylesDesktop, "\n\t}\n\n\n").concat(displayIcon ? "\n\t\t.".concat(blockId, ".eb-accordion-container .eb-accordion-icon-wrapper{\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\t").concat(iconMarginDesktop, "\n\t\t\t").concat(iconPaddingDesktop, "\n\t\t\t").concat(iconBackgroundStylesDesktop, "\n\t\t\t").concat(iconBdShdStyesDesktop, "\n\t\t\ttransition:").concat(iconBgTransitionStyle, ", ").concat(iconBdShdTransitionStyle, ";\n\t\t}\n\n\n\t\t.").concat(blockId, ".eb-accordion-container .eb-accordion-icon-wrapper:hover{\n\t\t\t").concat(iconHoverBackgroundStylesDesktop, "\n\t\t\t").concat(iconBdShdStylesHoverDesktop, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-accordion-container .eb-accordion-icon{\n\t\t\ttext-align:center;\n\t\t\tcolor: ").concat(iconColor, ";\n\t\t\t").concat(iconSizeDesktop, "\n\t\t\t").concat(icnZ_Range ? "width:".concat(icnZ_Range, "px;") : "", "\n\t\t}\n\t\t\n\t\t") : "", "\n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: ").concat(iconPosition === "right" && displayIcon ? "row-reverse" : "row", ";\n\t\t").concat(tabBackgroundStylesDesktop, "\n\t\t").concat(tabMarginDesktop, "\n\t\t").concat(tabPaddingDesktop, "\n\t\t").concat(tabBdShdStyesDesktop, "\n\t\ttransition:").concat(tabBgTransitionStyle, ", ").concat(tabBdShdTransitionStyle, ";\n\t}\n\n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper:hover{\n\t\t").concat(tabHoverBackgroundStylesDesktop, "\n\t\t").concat(tabBdShdStylesHoverDesktop, "\n\t} \n\t\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title{\n\t\ttext-align:").concat(titleAlignment || "left", ";\n\t\tflex:1;\n\t\tcolor:").concat(titleColor, ";\n\t\t").concat(titleTypoStylesDesktop, "\n\t}\n\n").concat(activeTitleColor ? "\n\t.".concat(blockId, ".eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) h3.eb-accordion-title,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper.expanded_tab h3.eb-accordion-title{\n\t\t").concat(activeTitleColor ? "color: ".concat(activeTitleColor, " !important;") : "", "\n\t}\n\t") : "", "\n\n").concat(activeBgColor ? "\n\t.".concat(blockId, ".eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper,\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-wrapper.expanded_tab .eb-accordion-title-wrapper{\n\t\t").concat(activeBgColor ? "background-color: ".concat(activeBgColor, " !important;") : "", "\n\t}\n\t") : "", "\n\t\n\t").concat(hoverTitleColor ? "\n\t\t\t.".concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper:hover .eb-accordion-title{\n\t\t\t\tcolor:").concat(hoverTitleColor, ";\n\t\t\t}\n\t\t\t") : "", "\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper{\n\t\toverflow: hidden !important;\n\t\ttransition: all ").concat(transitionDuration || 0, "s;\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content{\n\t\tcolor:").concat(contentColor, ";\n\t\ttext-align:").concat(contentAlign, ";\n\t\t").concat(conBackgroundStylesDesktop, "\n\t\t").concat(contentTypoStylesDesktop, "\n\t\t").concat(conMarginDesktop, "\n\t\t").concat(conPaddingDesktop, "\n\t\t").concat(conBdShdStyesDesktop, "\n\t\ttransition:").concat(conBdShdTransitionStyle, ", ").concat(conBgTransitionStyle, ";\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper:hover .eb-accordion-content{\n\t\t").concat(conHoverBackgroundStylesDesktop, "\n\t\t").concat(conBdShdStylesHoverDesktop, "\n\t}\n\n\t");
  var wrapperStylesTab = "\n\n\t.".concat(blockId, ".eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{\n\t\t").concat(accGapTab, "\n\t}\n\t\n\n\t.").concat(blockId, ".eb-accordion-container{\n\t\t").concat(wrpMarginTab, "\n\t\t").concat(wrpPaddingTab, "\n\t\t").concat(wrpBackgroundStylesTab, "\n\t\t").concat(wrpBdShdStyesTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container:hover{\n\t\t").concat(wrpHoverBackgroundStylesTab, "\n\t\t").concat(wrpBdShdStylesHoverTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container:before{\n\t\t").concat(wrpOverlayStylesTab, "\n\t}\n\n\t.").concat(blockId, ".eb-accordion-container:hover:before{\n\t\t").concat(wrpHoverOverlayStylesTab, "\n\t}\n\n\n\n").concat(displayIcon ? "\n\t\t.".concat(blockId, ".eb-accordion-container .eb-accordion-icon-wrapper{\n\t\t\t").concat(iconMarginTab, "\n\t\t\t").concat(iconPaddingTab, "\n\t\t\t").concat(iconBdShdStyesTab, "\n\t\t}\n\n\n\t\t.").concat(blockId, ".eb-accordion-container .eb-accordion-icon-wrapper:hover{\n\t\t\t").concat(iconBdShdStylesHoverTab, "\n\t\t}\n\t\t\n\t\t.").concat(blockId, ".eb-accordion-container .eb-accordion-icon{\n\t\t\t").concat(iconSizeTab, "\n\t\t\t").concat(TABicnZ_Range ? "width:".concat(TABicnZ_Range, "px;") : "", "\n\t\t}\n\t\t\n\t\t") : "", "\n\n\n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper {\n\t\t").concat(tabMarginTab, "\n\t\t").concat(tabPaddingTab, "\n\t\t").concat(tabBdShdStyesTab, "\n\t}\n\n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper:hover{\n\t\t").concat(tabBdShdStylesHoverTab, "\n\t} \n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title{\n\t\t").concat(titleTypoStylesTab, "\n\t}\n\n\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content{\n\t\t").concat(contentTypoStylesTab, "\n\t\t").concat(conMarginTab, "\n\t\t").concat(conPaddingTab, "\n\t\t").concat(conBdShdStyesTab, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper:hover .eb-accordion-content{\n\t\t").concat(conBdShdStylesHoverTab, "\n\t}\n\n\n\n\t");
  var wrapperStylesMobile = "\n\t\n\t.".concat(blockId, ".eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{\n\t\t").concat(accGapMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container{\n\t\t").concat(wrpMarginMobile, "\n\t\t").concat(wrpPaddingMobile, "\n\t\t").concat(wrpBackgroundStylesMobile, "\n\t\t").concat(wrpBdShdStyesMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container:hover{\n\t\t").concat(wrpHoverBackgroundStylesMobile, "\n\t\t").concat(wrpBdShdStylesHoverMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container:before{\n\t\t").concat(wrpOverlayStylesMobile, "\n\t}\n\n\t.").concat(blockId, ".eb-accordion-container:hover:before{\n\t\t").concat(wrpHoverOverlayStylesMobile, "\n\t}\n\n\n\n\t").concat(displayIcon ? "\n\t\t\t.".concat(blockId, ".eb-accordion-container .eb-accordion-icon-wrapper{\n\t\t\t\t").concat(iconMarginMobile, "\n\t\t\t\t").concat(iconPaddingMobile, "\n\t\t\t\t").concat(iconBdShdStyesMobile, "\n\t\t\t}\n\t\n\t\t\t.").concat(blockId, ".eb-accordion-container .eb-accordion-icon-wrapper:hover{\n\t\t\t\t").concat(iconBdShdStylesHoverMobile, "\n\t\t\t}\n\t\t\t\n\t\t\t.").concat(blockId, ".eb-accordion-container .eb-accordion-icon{\n\t\t\t\t").concat(iconSizeMobile, "\n\t\t\t\t").concat(MOBicnZ_Range ? "width:".concat(MOBicnZ_Range, "px;") : "", "\n\t\t\t}\n\t\t\t\n\t\t\t") : "", "\n\t\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper {\n\t\t").concat(tabMarginMobile, "\n\t\t").concat(tabPaddingMobile, "\n\t\t").concat(tabBdShdStyesMobile, "\n\t}\n\n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title-wrapper:hover{\n\t\t").concat(tabBdShdStylesHoverMobile, "\n\t} \n\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-title{\n\t\t").concat(titleTypoStylesMobile, "\n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content{\n\t\t").concat(contentTypoStylesMobile, "\n\t\t").concat(conMarginMobile, "\n\t\t").concat(conPaddingMobile, "\n\t\t").concat(conBdShdStyesMobile, " \n\t}\n\t\n\t.").concat(blockId, ".eb-accordion-container .eb-accordion-content-wrapper:hover .eb-accordion-content{\n\t\t").concat(conBdShdStylesHoverMobile, "\n\t}\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = softMinifyCssStrings("\t\t\n\t\t".concat(wrapperStylesDesktop, "\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesTab, "\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesMobile, "\n\t")); //
  // styling codes End here
  //
  // Set All Style in "blockMeta" Attribute

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);

  var insertAccodionItem = function insertAccodionItem(accordionChildCount) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_13__.times)(accordionChildCount, function (n) {
      return ["accordion-toggle/accordion-item", {
        itemId: n + 1
      }];
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
    addAccordion: addAccordion
  })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-accordion-container")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-inner"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: insertAccodionItem(accordionChildCount),
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-add-button"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "is-default",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Accordion Item", "essential-blocks"),
    icon: "plus-alt",
    onClick: addAccordion
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-accordion-add-button-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Accordion Item", "essential-blocks")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/accordion-toggle/src/example.js":
/*!************************************************!*\
  !*** ./blocks/accordion-toggle/src/example.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./blocks/accordion-toggle/src/icon.js":
/*!*********************************************!*\
  !*** ./blocks/accordion-toggle/src/icon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AccordionIcon = function AccordionIcon() {
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
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionIcon);

/***/ }),

/***/ "./blocks/accordion-toggle/src/index.js":
/*!**********************************************!*\
  !*** ./blocks/accordion-toggle/src/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/accordion-toggle/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/accordion-toggle/src/save.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example */ "./blocks/accordion-toggle/src/example.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./blocks/accordion-toggle/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./blocks/accordion-toggle/src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./blocks/accordion-toggle/src/icon.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./blocks/accordion-toggle/src/deprecated.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */








var _EBAccordionControls = EBAccordionControls,
    ebConditionalRegisterBlockType = _EBAccordionControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("accordion", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("toggle", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb essential", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./blocks/accordion-toggle/src/inspector.js":
/*!**************************************************!*\
  !*** ./blocks/accordion-toggle/src/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./blocks/accordion-toggle/src/constants/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./blocks/accordion-toggle/src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./blocks/accordion-toggle/src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/rangeNames */ "./blocks/accordion-toggle/src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./blocks/accordion-toggle/src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./blocks/accordion-toggle/src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./blocks/accordion-toggle/src/constants/borderShadowConstants.js");
/**
 * WordPress dependencies
 */




var _lodash = lodash,
    times = _lodash.times;

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var _window$EBAccordionCo = window.EBAccordionControls,
    iconList = _window$EBAccordionCo.faIcons,
    ColorControl = _window$EBAccordionCo.ColorControl,
    TypographyDropdown = _window$EBAccordionCo.TypographyDropdown,
    ResponsiveDimensionsControl = _window$EBAccordionCo.ResponsiveDimensionsControl,
    ResponsiveRangeController = _window$EBAccordionCo.ResponsiveRangeController,
    BorderShadowControl = _window$EBAccordionCo.BorderShadowControl,
    BackgroundControl = _window$EBAccordionCo.BackgroundControl,
    AdvancedControls = _window$EBAccordionCo.AdvancedControls;







var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var resOption = attributes.resOption,
      accordionType = attributes.accordionType,
      displayIcon = attributes.displayIcon,
      transitionDuration = attributes.transitionDuration,
      tabIcon = attributes.tabIcon,
      expandedIcon = attributes.expandedIcon,
      titleColor = attributes.titleColor,
      contentAlign = attributes.contentAlign,
      contentColor = attributes.contentColor,
      iconColor = attributes.iconColor,
      iconPosition = attributes.iconPosition,
      titleAlignment = attributes.titleAlignment,
      hoverTitleColor = attributes.hoverTitleColor,
      activeBgColor = attributes.activeBgColor,
      activeTitleColor = attributes.activeTitleColor,
      tagName = attributes.tagName,
      faqSchema = attributes.faqSchema;
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var parentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlocksByClientId(clientId)[0];
    var innerBlocks = parentBlocks === null || parentBlocks === void 0 ? void 0 : parentBlocks.innerBlocks;

    var _dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/block-editor"),
        updateBlockAttributes = _dispatch.updateBlockAttributes;

    if (innerBlocks) {
      times(innerBlocks.length, function (n) {
        updateBlockAttributes(innerBlocks[n].clientId, {
          inheritedAccordionType: accordionType,
          inheritedDisplayIcon: displayIcon,
          inheritedTabIcon: tabIcon,
          inheritedExpandedIcon: expandedIcon,
          inheritedTagName: tagName,
          faqSchema: faqSchema
        });
      });
    }
  }, [accordionType, displayIcon, tabIcon, expandedIcon, tagName, faqSchema]);
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Accordion Types", "essential-blocks"),
      id: "eb-accordion-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
      id: "eb-accordion-type-btgrp"
    }, _constants__WEBPACK_IMPORTED_MODULE_6__.ACCORDION_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        key: key // isLarge
        ,
        isSecondary: accordionType !== item.value,
        isPrimary: accordionType === item.value,
        onClick: function onClick() {
          return setAttributes({
            accordionType: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Level", "essential-blocks"),
      id: "eb-accordion-heading-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
      className: "eb-accordion-heading-alignment eb-html-tag-buttongroup"
    }, _constants__WEBPACK_IMPORTED_MODULE_6__.HEADING.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        key: key // isLarge
        ,
        isPrimary: tagName === item.value,
        isSecondary: tagName !== item.value,
        onClick: function onClick() {
          return setAttributes({
            tagName: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Speed", "essential-blocks"),
      value: transitionDuration,
      onChange: function onChange(transitionDuration) {
        return setAttributes({
          transitionDuration: transitionDuration
        });
      },
      min: 0,
      max: 5,
      step: 0.1,
      allowReset: true
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Accordions Gap", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.accGapRange,
      resRequiredProps: resRequiredProps,
      min: 1,
      max: 100,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable FAQ Schema", "essential-blocks"),
      checked: faqSchema,
      onChange: function onChange() {
        return setAttributes({
          faqSchema: !faqSchema
        });
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Icon", "essential-blocks"),
      checked: displayIcon,
      onChange: function onChange() {
        return setAttributes({
          displayIcon: !displayIcon
        });
      }
    }), displayIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tab Icon", "essential-blocks")
    }, /*#__PURE__*/React.createElement((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      icons: iconList,
      value: tabIcon,
      onChange: function onChange(tabIcon) {
        return setAttributes({
          tabIcon: tabIcon
        });
      },
      appendTo: "body"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expanded Icon", "essential-blocks")
    }, /*#__PURE__*/React.createElement((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      icons: iconList,
      value: expandedIcon,
      onChange: function onChange(expandedIcon) {
        return setAttributes({
          expandedIcon: expandedIcon
        });
      },
      appendTo: "body"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Position", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
      id: "eb-icon-pos-btgrp"
    }, _constants__WEBPACK_IMPORTED_MODULE_6__.ICON_POSITIONS.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        key: key // isLarge
        ,
        isSecondary: iconPosition !== item.value,
        isPrimary: iconPosition === item.value,
        onClick: function onClick() {
          return setAttributes({
            iconPosition: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      noUnits: true,
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_9__.rangeIconSize,
      resRequiredProps: resRequiredProps,
      min: 1,
      max: 200,
      step: 1
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Color", "essential-blocks"),
      color: iconColor,
      onChange: function onChange(iconColor) {
        return setAttributes({
          iconColor: iconColor
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.iconMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.iconPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.iconBgConst,
      resRequiredProps: resRequiredProps,
      noOverlay: true,
      noMainBgi: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.iconBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tab", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Align ", "essential-blocks"),
      id: "eb-accoridon-title-align"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.TITLE_ALIGNMENT.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        key: key,
        isSecondary: titleAlignment !== item.value,
        isPrimary: titleAlignment === item.value,
        onClick: function onClick() {
          return setAttributes({
            titleAlignment: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Title Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_title,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Color", "essential-blocks"),
      color: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title hover Color", "essential-blocks"),
      color: hoverTitleColor,
      onChange: function onChange(hoverTitleColor) {
        return setAttributes({
          hoverTitleColor: hoverTitleColor
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tabMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.tabPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.tabBgConst,
      resRequiredProps: resRequiredProps,
      noMainBgi: true,
      noOverlay: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expanded Tab Colors", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks"),
      color: activeBgColor,
      onChange: function onChange(activeBgColor) {
        return setAttributes({
          activeBgColor: activeBgColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Color", "essential-blocks"),
      color: activeTitleColor,
      onChange: function onChange(activeTitleColor) {
        return setAttributes({
          activeTitleColor: activeTitleColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.tabBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_6__.CONTENT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        key: key // isLarge
        ,
        isSecondary: contentAlign !== item.value,
        isPrimary: contentAlign === item.value,
        onClick: function onClick() {
          return setAttributes({
            contentAlign: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Content Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_content,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content Color", "essential-blocks"),
      color: contentColor,
      onChange: function onChange(contentColor) {
        return setAttributes({
          contentColor: contentColor
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.conMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.conPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.conBgConst,
      resRequiredProps: resRequiredProps,
      noOverlay: true,
      noMainBgi: true
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.conBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    })))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding", "essential-blocks") // initialOpen={true}

    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.wrapMarginConst,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_10__.wrapPaddingConst,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background ", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_11__.WrpBgConst,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_12__.WrpBdShadowConst,
      resRequiredProps: resRequiredProps // noShadow
      // noBorder

    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./blocks/accordion-toggle/src/save.js":
/*!*********************************************!*\
  !*** ./blocks/accordion-toggle/src/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      classHook = attributes.classHook,
      accordionType = attributes.accordionType,
      displayIcon = attributes.displayIcon,
      tabIcon = attributes.tabIcon,
      expandedIcon = attributes.expandedIcon;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-container ".concat(blockId),
    "data-accordion-type": accordionType || "toggle",
    "data-tab-icon": displayIcon ? tabIcon : "",
    "data-expanded-icon": displayIcon ? expandedIcon : ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-accordion-inner"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

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
    } catch (x) { /**/ }
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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

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
    bigint: createPrimitiveTypeChecker('bigint'),
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
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
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
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
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

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
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
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
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

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
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
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
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
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

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
    } // This is to force a repaint,
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
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_6__["default"].propTypes, {
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
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
}) : 0;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

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
    var child = react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_4__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

ReplaceTransition.propTypes =  true ? {
  in: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_2___default().Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modes": function() { return /* binding */ modes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED,
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

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.children, {
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
      case _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element.isRequired)])
} : 0;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNMOUNTED": function() { return /* binding */ UNMOUNTED; },
/* harmony export */   "EXITED": function() { return /* binding */ EXITED; },
/* harmony export */   "ENTERING": function() { return /* binding */ ENTERING; },
/* harmony export */   "ENTERED": function() { return /* binding */ ENTERED; },
/* harmony export */   "EXITING": function() { return /* binding */ EXITING; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

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

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_4__["default"].disabled) {
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
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_4__["default"].disabled) {
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
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
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
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__["default"];
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
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_6___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
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
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

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
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

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
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.timeoutsShape;
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
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
} : 0; // Name the function so it is clearer in the documentation

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


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
      children: firstRender ? (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getInitialChildMapping)(nextProps, handleExited) : (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

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
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

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
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

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
  childFactory: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSTransition": function() { return /* reexport safe */ _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ReplaceTransition": function() { return /* reexport safe */ _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "SwitchTransition": function() { return /* reexport safe */ _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "TransitionGroup": function() { return /* reexport safe */ _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Transition": function() { return /* reexport safe */ _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "config": function() { return /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");







/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildMapping": function() { return /* binding */ getChildMapping; },
/* harmony export */   "mergeChildMappings": function() { return /* binding */ mergeChildMappings; },
/* harmony export */   "getInitialChildMapping": function() { return /* binding */ getInitialChildMapping; },
/* harmony export */   "getNextChildMapping": function() { return /* binding */ getNextChildMapping; }
/* harmony export */ });
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
    return mapFn && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (c) {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
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
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutsShape": function() { return /* binding */ timeoutsShape; },
/* harmony export */   "classNamesShape": function() { return /* binding */ classNamesShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClass; }
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasClass; }
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClass; }
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./blocks/accordion-item/block.json":
/*!******************************************!*\
  !*** ./blocks/accordion-item/block.json ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"title":"Accordion Item","name":"accordion-toggle/accordion-item","apiVersion":2,"textdomain":"essential-blocks","supports":{"inserter":false,"reusable":false,"html":false,"anchor":true,"lock":false},"parent":["accordion-toggle/accordion-toggle"]}');

/***/ }),

/***/ "./blocks/accordion-toggle/block.json":
/*!********************************************!*\
  !*** ./blocks/accordion-toggle/block.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"accordion-toggle/accordion-toggle","title":"Accordion","category":"widgets","description":"Display your FAQs & improve user experience with Accordion/Toggle block","textdomain":"accordion-toggle","supports":{"align":["wide","full"]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_accordion_toggle_src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/accordion-toggle/src/index.js */ "./blocks/accordion-toggle/src/index.js");
/* harmony import */ var _blocks_accordion_item_src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/accordion-item/src/index.js */ "./blocks/accordion-item/src/index.js");


}();
/******/ })()
;
//# sourceMappingURL=index.js.map