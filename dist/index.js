!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-awesome-button"]=t(require("react"),require("prop-types")):e["react-awesome-button"]=t(e.React,e.PropTypes)}(this,(function(e,t){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(o=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,s=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();t.serialize=function serialize(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";return Object.entries(e).map((function(e){var t=o(e,2);return t[0]+"="+t[1]})).join(t)},t.classToModules=function classToModules(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!t)return e.join(" ").trim();var n=[],o=e.length;for(;o--;)t[e[o]]&&n.push(t[e[o]]);return n},t.getClassName=function getClassName(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];if(t)return t[e]||e;return e};t.MediaLoader=function(){function MediaLoader(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MediaLoader),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return r(MediaLoader,[{key:"events",value:function events(){var e=this;this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!1)})),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function load(e){var t=this;return new Promise((function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))}))}},{key:"loadImage",value:function loadImage(e){var t=this,n=new Image,o=!1;n.onload=function(){o||t.pumpLoaded()},n.onerror=function(){o||t.pumpLoaded()},n.src=e,!1===o&&(n.width>0||n.height>0)&&(o=!0,this.pumpLoaded())}},{key:"loadVideo",value:function loadVideo(e){var t=this,n=document.createElement("video");n.addEventListener("loadeddata",(function(){t.pumpLoaded()})),n.addEventListener("error",(function(){t.pumpLoaded()})),n.setAttribute("src",e)}},{key:"pumpLoaded",value:function pumpLoaded(){this.loaded+=1,this.loaded===this.toLoad&&this.resolver(!0)}},{key:"startLoad",value:function startLoad(e){e.match(/\.(mp4|webm)/i)&&this.loadVideo(e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&this.loadImage(e)}},{key:"loadMultiple",value:function loadMultiple(e){var t=this;return this.loaded=0,this.toLoad=e.length,new Promise((function(n){t.resolver=n,e.forEach((function(e){t.startLoad(e)}))}))}}]),MediaLoader}()},function(e,t,n){e.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.tolerance,r=void 0===o?0:o,s=n.propertyName;return new Promise((function(n){if(e){var o=null,i=t.charAt(0).toUpperCase()+t.slice(1),a=0;void 0!==e.style["Webkit"+i]&&(o="webkit"+i+"End"),void 0!==e.style.OTransition&&(o="o"+t+"End"),void 0!==e.style[t]&&(o=t+"end"),e.clearCssEndEvent&&e.clearCssEndEvent(),e.clearCssEndEvent=function(){e.removeEventListener(o,c)},e.addEventListener(o,c)}else n(!1);function c(t){if((t.srcElement||t.target)===e){if(a>=r){if(s&&s!==t.propertyName)return;e.removeEventListener(o,c),n(t)}a+=1}}}))}function r(e){window&&window.requestAnimationFrame((function(){window.requestAnimationFrame(e)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.setCssEndEvent=o,t.beforeCssLayout=function(e){window&&window.requestAnimationFrame(e)},t.beforeNextCssLayout=r,t.beforeFutureCssLayout=function(e,t){!function e(t,n){window&&t&&Number.isInteger(t)&&t>0?window.requestAnimationFrame((function(){e(t-1,n)})):n()}(e+1,t)},t.onceNextCssLayout=function(){return new Promise((function(e){r(e)}))},t.onceTransitionEnd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){o(e,"transition",t).then(n)}))},t.onceAnimationEnd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){o(e,"animation",t).then(n)}))}}])},,,function(e,t,n){e.exports=n(7)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n(8));t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),s=_interopRequireDefault(n(0)),i=(_interopRequireDefault(n(1)),n(3)),a=n(2),l=n(9),c=_interopRequireDefault(n(10)),u=_interopRequireDefault(n(11)),d=_interopRequireDefault(n(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f="awssld",h=new a.MediaLoader,p=function(e){function AwesomeSlider(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AwesomeSlider);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AwesomeSlider.__proto__||Object.getPrototypeOf(AwesomeSlider)).call(this,e));return t.clickNext=function(){t.transitionRequest("next");var e=null===t.index?0:t.index+1;t.goTo({index:e,direction:!0})},t.clickPrev=function(){t.transitionRequest("prev"),t.goTo({index:t.index-1,direction:!1})},t.touchStart=function(e){if(!t.animating&&null!==t.index){var n=e.nativeEvent;t.touchStartPoint=n.touches[0].clientX}},t.touchMove=function(e){if(!t.animating&&t.touchStartPoint){var n=e.nativeEvent,o=n.touches[0].clientX-t.touchStartPoint,r=t[t.active],s=t[t.loader],i=!(o>0),a=Math.abs(o);!1!==t.touchEnabled?a>=10&&(!1===t.loading?t.goTo({index:i?t.index+1:t.index-1,direction:i,touch:!0}):!0===t.direction?(o+=10,Math.abs(o)>r.offsetWidth?o=-r.offsetWidth:o>0&&(o=0),r.style.transform="translate3d("+o+"px, 0, 0)",s.style.transform="translate3d(calc(100% + "+o+"px), 0, 0)"):(o-=10,Math.abs(o)>r.offsetWidth?o=r.offsetWidth:o<0&&(o=0),r.style.transform="translate3d("+o+"px, 0, 0)",s.style.transform="translate3d(calc(-100% + "+o+"px), 0, 0)")):a>20&&(t.touchEnabled=!0,t.touchStartPoint=n.touches[0].clientX)}},t.touchEnd=function(){!t.animating&&t.touchStartPoint&&t.loading&&(t.touchStartPoint=null,t.animating=!0,t.touchEnabled=!1,t.animateMobileEnd((function(){t.index=t.nextIndex,t.setState({index:t.index}),t.props.onTransitionEnd&&t.props.onTransitionEnd(o({},t.getInfo())),t.animating=!1,t.loading=!1,t.unchargeIndex()})))},t.bulletClick=function(e){var n=e.currentTarget,o=parseInt(n.getAttribute("data-index"),10);t.goTo({index:o,direction:!(t.index>o)},(function(){(0,i.onceNextCssLayout)().then((function(){n.classList.add(t.classNames.bulletsLoading)}))}))},t.rootElement=e.rootElement||f,t.boxA=null,t.boxB=null,t.loaded=[],t.active="boxA",t.loader="boxB",t.nextIndex=null,t.loading=!1,t.media=null,t.started=!1,t.touchEnabled=!1,t.setupStartup(e),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AwesomeSlider,e),r(AwesomeSlider,[{key:"componentDidMount",value:function componentDidMount(){var e=this;this.boxA.classList.add(this.classNames.active),this.props.startupScreen&&(this.buttons&&this.buttons.element.classList.add(this.classNames.controlsActive),!0===this.props.startup&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount(o({},this.getInfo())),this.buttons&&(0,i.onceNextCssLayout)().then((function(){e.buttons&&e.buttons.element.classList.remove(e.classNames.controlsHidden)}))}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.name===this.props.name)if(!0!==e.startup||!1!==this.started)if(e.selected===this.props.selected)this.refreshSlider();else{var t=this.getIndex(e.selected),n=!0===e.infinite&&0===t&&this.index===this.media.length-1||!(this.index>t);this.goTo({index:t,direction:n})}else this.startup();else this.resetSlider(e.selected)}},{key:"getRootClassName",value:function getRootClassName(){var e=this.props,t=e.animation,n=e.className,o=e.cssModule,r=e.disabled,s=e.fillParent,i=e.infinite,a=e.organicArrows;return(0,l.getRootClassName)({animation:t,className:n,cssModule:o,current:this.state.index,disabled:r,fillParent:s,infinite:i,organicArrows:a,rootElement:this.rootElement,total:this.media.length})}},{key:"setupStartup",value:function setupStartup(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.startupScreen){var t=this.getIndex(this.props.selected);this.index=null,this.state={index:this.index,boxA:{className:this.classNames.startUp,children:e.startupScreen},boxB:this.media[t]||null}}else this.started=!0,this.index=this.getIndex(this.props.selected),this.state={index:this.index,boxA:this.media[this.index]||null,boxB:null}}},{key:"getInfo",value:function getInfo(){return{slides:this.media.length,currentIndex:this.index,currentSlide:this[this.active],currentMedia:this.media[this.index],element:this.slider}}},{key:"getBar",value:function getBar(){if(!document)return{};var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function setupClassNames(e){this.classNames=(0,l.setupClassNames)(this.rootElement,e)}},{key:"getIndex",value:function getIndex(e){var t=0;return"number"==typeof e?e:("string"==typeof e&&this.media.forEach((function(n,o){n.slug===e&&(t=o)})),t)}},{key:"refreshSlider",value:function refreshSlider(){var e;if(!0!==this.loading&&!1!==this.props.startup&&null!==this.index){var t=this.index;this.setState((_defineProperty(e={index:t},this.active,this.media[this.getIndex(t)]),_defineProperty(e,this.loader,null),e))}}},{key:"startup",value:function startup(){var e=this;this.started=!0,setTimeout((function(){(0,i.onceNextCssLayout)().then((function(){e.goTo({index:e.props.selected,direction:!0,touch:!1})}))}),this.props.startupDelay||100)}},{key:"resetSlider",value:function resetSlider(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=n,this.setState((_defineProperty(e={index:n},this.active,this.media[this.getIndex(n)]),_defineProperty(e,this.loader,null),e),(function(){t.props.onResetSlider&&t.props.onResetSlider(o({},t.getInfo()))}))}},{key:"checkChildren",value:function checkChildren(e){e.children?e.children===this.props.children&&this.media||(this.media=(0,l.transformChildren)(e.children)):e.media&&e.media.length&&(this.media=e.media)}},{key:"startBarAnimation",value:function startBarAnimation(e){var t=this,n=e.active;return new Promise((function(e){t.bar=t.getBar(),n.appendChild(t.bar),(0,i.onceNextCssLayout)().then((function(){(0,i.onceNextCssLayout)().then((function(){t.bar.classList.add(t.classNames.barActive),e()}))}))}))}},{key:"endBarAnimation",value:function endBarAnimation(e){var t=this;this.bar&&(0,i.onceNextCssLayout)().then((function(){(0,i.onceTransitionEnd)(t.bar).then((function(){e()})),t.bar.classList.add(t.classNames.barEnd)}))}},{key:"loadContent",value:function loadContent(e,t){var n=this;return new Promise((function(r,s){if(n.props.onLoadStart||t.onLoadStart){var i=n.props.onLoadStart||t.onLoadStart;return n.startBarAnimation({active:e}),void i(o({next:function next(){n.endBarAnimation((function(){r(n.bar)}))},error:s},n.getInfo()))}if(t.url||t.preload){var a=t.url?[t.url]:t.preload||[];return!0===n.checkLoadedUrls(a)?void r(null):(n.startBarAnimation({active:e}),void h.loadMultiple(a).then((function(){n.pushLoaded(a),n.endBarAnimation((function(){r(n.bar)}))})))}r(null)}))}},{key:"pushLoaded",value:function pushLoaded(e){this.loaded=[].concat(_toConsumableArray(this.loaded),_toConsumableArray(e))}},{key:"checkLoadedUrls",value:function checkLoadedUrls(e){var t=this,n=!0;return e.forEach((function(e){t.loaded.includes(e)||(n=!1)})),n}},{key:"startAnimationMobile",value:function startAnimationMobile(){var e=this.direction,t=this[this.active],n=this[this.loader],r=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,s=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart(o({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex,nextMedia:this.media[this.nextIndex]}));var i=t.querySelector("."+this.classNames.content);i.classList.add(s),i.classList.add(this.classNames.contentExit);var a=n.querySelector("."+this.classNames.content);a.classList.add(r),a.classList.add(this.classNames.contentStatic)}},{key:"animateMobileEnd",value:function animateMobileEnd(e){var t=this,n=this.direction,o=this[this.active],r=this[this.loader],s=n?this.classNames.moveLeft:this.classNames.moveRight,a=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,l=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,c=r.querySelector("."+this.classNames.content),u=o.querySelector("."+this.classNames.content);c.classList.remove(this.classNames.contentStatic),r.classList.add(this.classNames.animatedMobile),o.classList.add(this.classNames.animatedMobile),(0,i.onceNextCssLayout)().then((function(){r.style.transform="translate3d(0, 0, 0)",o.style.transform="translate3d("+(t.direction?"-":"")+"100%, 0, 0)",(0,i.onceTransitionEnd)(o).then((function(){t.loading&&(r.classList.add(t.classNames.active),o.classList.remove(t.classNames.active),o.classList.remove(s),r.classList.remove(t.classNames.animatedMobile),o.classList.remove(t.classNames.animatedMobile),u.classList.remove(l),u.classList.remove(t.classNames.contentExit),c.classList.remove(a),t.buttons&&setTimeout((function(){t.buttons&&t.buttons.element.classList.remove(t.classNames.controlsActive)}),t.props.controlsReturnDelay),t.activeArrow&&(t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())}))}))}},{key:"runAnimation",value:function runAnimation(e){var t=this,n=e.active,o=e.media,r=e.contentExitMoveClass,s=e.contentEnterMoveClass,a=e.activeContentElement,l=e.loaderContentElement,c=e.loader,u=e.loaderPosition,d=e.exitPosition,f=e.callback,h=e.transitionDelay;this.loadContent(n,o).then((function(e){a.classList.add(r),a.classList.add(t.classNames.contentExit),l.classList.add(s),l.classList.add(t.classNames.contentStatic),setTimeout((function(){(0,i.onceNextCssLayout)().then((function(){n.classList.add(t.classNames.animated),c.classList.add(t.classNames.animated),l.classList.remove(t.classNames.contentStatic),n.classList.add(t.classNames.exit),c.classList.add(u),n.classList.add(d),(0,i.onceAnimationEnd)(n).then((function(){c.classList.add(t.classNames.active),c.classList.remove(u),c.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.active),n.classList.remove(d),n.classList.remove(t.classNames.exit),a.classList.remove(r),a.classList.remove(t.classNames.contentExit),l.classList.remove(s),e&&n.removeChild(e),t.buttons&&setTimeout((function(){t.buttons&&t.buttons.element.classList.remove(t.classNames.controlsActive)}),t.props.controlsReturnDelay),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA";var o=!t.activeArrow;t.activeArrow&&((0,i.onceTransitionEnd)(t.activeArrow,{tolerance:null===t.index?0:2}).then((function(){t.releaseTransition()})),t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),f({release:o})}))}))}),h)}))}},{key:"releaseTransition",value:function releaseTransition(){this.loading=!1,this.props.onTransitionEnd&&this.props.onTransitionEnd(o({},this.getInfo()))}},{key:"startAnimation",value:function startAnimation(e,t,n){var r=this.props.transitionDelay,s=this[this.active],i=this[this.loader],a=e?this.classNames.moveRight:this.classNames.moveLeft,l=e?this.classNames.moveLeft:this.classNames.moveRight,c=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,u=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,d=s.querySelector("."+this.classNames.content),f=i.querySelector("."+this.classNames.content);s.style.removeProperty("transform"),i.style.removeProperty("transform"),this.props.onTransitionStart&&this.props.onTransitionStart(o({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex,nextMedia:this.media[this.nextIndex]}));var h={active:s,media:t,contentExitMoveClass:u,contentEnterMoveClass:c,activeContentElement:d,loaderContentElement:f,loader:i,loaderPosition:a,exitPosition:l,callback:n,transitionDelay:r};this.runAnimation(h)}},{key:"goTo",value:function goTo(e){var t=this,n=e.index,r=e.direction,s=e.touch,i=void 0!==s&&s,a=this.getIndex(n);!0!==this.loading&&n!==this.index?(this.loading=!0,this.direction=r,!0!==i?this.activateArrows(r,(function(){t.chargeIndex(a,(function(e){t.renderedLoader=!0,t.startAnimation(r,e,(function(e){var n=e.release,o=void 0===n||n;t.index=t.nextIndex,t.setState({index:t.index},(function(){!0===o&&t.releaseTransition()}))}))}))})):this.chargeIndex(a,(function(){t.activateArrows(r),t.startAnimationMobile()}))):this.props.onTransitionReject&&this.props.onTransitionReject(o({},this.getInfo(),{forceTransition:function forceTransition(){t.goTo({index:n,direction:r,touch:i})}}))}},{key:"chargeIndex",value:function chargeIndex(e,t){this.nextIndex=e>this.media.length-1?0:e<0?this.media.length-1:e;var n={},r=this.media[this.nextIndex];n[this.loader]=o({loader:!0},r),this.setState(n,(function(){t(r)}))}},{key:"unchargeIndex",value:function unchargeIndex(){var e={};e[this.loader]=null,this.setState(e,(function(){}))}},{key:"activateArrows",value:function activateArrows(e,t){var n=e?"right":"left",o=(0,a.getClassName)(this.rootElement+"__controls__arrow-"+n,this.props.cssModule);if(this.buttons){var r=e?this.buttons.next:this.buttons.prev;this.activeArrow=r.querySelector("."+o)}this.activeArrow?(this.activeArrowClass=(0,a.getClassName)(this.rootElement+"__controls__arrow-"+n+"--active",this.props.cssModule),(0,i.onceTransitionEnd)(this.activeArrow,{tolerance:null===this.index?0:2}).then((function(){t&&t()})),this.buttons.element.classList.add(this.classNames.controlsActive),this.activeArrow.classList.add(this.activeArrowClass)):t&&t()}},{key:"transitionRequest",value:function transitionRequest(e){this.props.onTransitionRequest&&this.props.onTransitionRequest(o({eventName:e},this.getInfo()))}},{key:"renderBox",value:function renderBox(e){var t=this;return s.default.createElement("div",{ref:function ref(n){t["box"+e]=n},className:this.classNames.box,onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd},this.state["box"+e]&&s.default.createElement(d.default,{media:this.state["box"+e],className:this.classNames.content}))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.cssModule,o=t.organicArrows,r=t.bullets,i=t.style,a=t.customContent,l=t.buttons,d=t.buttonContentLeft,f=t.buttonContentRight,h=this.rootElement;return s.default.createElement("div",{ref:function ref(t){e.slider=t},className:this.getRootClassName(),style:i},s.default.createElement("div",{ref:function ref(t){e.wrapper=t},className:this.classNames.wrapper},s.default.createElement("div",{ref:function ref(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),l&&s.default.createElement(u.default,{rootElement:h,cssModule:n,onMount:function onMount(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:o,buttonContentLeft:d,buttonContentRight:f}),a),r&&s.default.createElement(c.default,{cssModule:n,rootElement:h,media:this.media,selected:this.state.index,onClick:function onClick(t){e.transitionRequest("bullet"),e.goTo(t)}}))}}]),AwesomeSlider}(s.default.Component);p.defaultProps={animation:null,bullets:!0,buttonContentLeft:null,buttonContentRight:null,buttons:!0,children:null,className:null,controlsReturnDelay:0,cssModule:null,customContent:null,onLoadStart:null,disabled:!1,fillParent:!1,infinite:!0,media:[],name:"awesome-slider",onFirstMount:null,onResetSlider:null,onStartupRelease:null,onTransitionEnd:null,onTransitionRequest:null,onTransitionStart:null,organicArrows:!0,rootElement:f,selected:0,startup:!0,startupDelay:0,startupScreen:null,style:{},transitionDelay:0},t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.getRootClassName=function getRootClassName(e){var t,n=e.rootElement,o=e.cssModule,s=e.disabled,i=e.organicArrows,a=e.className,l=e.total,c=e.current,u=e.infinite,d=e.animation,f=e.fillParent,h=[n];d&&h.push(n+"--"+d);!0===i&&h.push(n+"--organic-arrows");!0===s&&h.push(n+"--disabled");f&&h.push(n+"--fill-parent");!1===u&&(0===c&&h.push(n+"--first"),c===l-1&&h.push(n+"--last"));o&&o[n]&&(h=(0,r.classToModules)(h,o));a&&(t=h).push.apply(t,function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(a.split(" ")));return h.join(" ").trim().replace(/[\s]+/gi," ")},t.transformChildren=function transformChildren(e){var t=[];return(e.constructor===Array?e:[e]).forEach((function(e){var n=o({},e.props);e.props["data-src"]&&(n.url=e.props["data-src"]),e.props["data-slug"]&&(n.slug=e.props["data-slug"]),t.push(n)})),t},t.setupClassNames=function setupClassNames(e,t){return{boxA:(0,r.getClassName)(e+"__boxA",t),boxB:(0,r.getClassName)(e+"__boxB",t),box:(0,r.getClassName)(e+"__box",t),container:(0,r.getClassName)(e+"__container",t),wrapper:(0,r.getClassName)(e+"__wrapper",t),bar:(0,r.getClassName)(e+"__bar",t),barActive:(0,r.getClassName)(e+"__bar--active",t),barEnd:(0,r.getClassName)(e+"__bar--end",t),content:(0,r.getClassName)(e+"__content",t),contentStatic:(0,r.getClassName)(e+"__content--static",t),contentMoveLeft:(0,r.getClassName)(e+"__content--moveLeft",t),contentMoveRight:(0,r.getClassName)(e+"__content--moveRight",t),controlsHidden:(0,r.getClassName)(e+"__controls--hidden",t),controlsActive:(0,r.getClassName)(e+"__controls--active",t),animated:(0,r.getClassName)(e+"--animated",t),animatedMobile:(0,r.getClassName)(e+"--animated-mobile",t),contentExit:(0,r.getClassName)(e+"__content--exit",t),exit:(0,r.getClassName)(e+"--exit",t),active:(0,r.getClassName)(e+"--active",t),moveLeft:(0,r.getClassName)(e+"--moveLeft",t),moveRight:(0,r.getClassName)(e+"--moveRight",t),startUp:(0,r.getClassName)(e+"__startUp",t),bulletsLoading:(0,r.getClassName)(e+"__bullets--loading",t)}};var r=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(0)),s=(_interopRequireDefault(n(1)),n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function Bullets(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Bullets);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Bullets.__proto__||Object.getPrototypeOf(Bullets)).call(this,e));return t.bulletClick=function(e){var n=e.currentTarget;n.classList.add((0,s.getClassName)(t.rootElement+"__bullets--loading",t.props.cssModule));var o=parseInt(n.getAttribute("data-index"),10),r=!(t.props.selected>o);t.props.onClick({index:o,direction:r})},t.rootElement=e.rootElement,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Bullets,e),o(Bullets,[{key:"renderBullets",value:function renderBullets(){var e=this,t=this.props,n=t.cssModule,o=t.selected;return this.props.media.map((function(t,i){var a=i===o?(0,s.getClassName)(e.rootElement+"__bullets--active",n):null;return r.default.createElement("button",{key:"bullet-"+i,"data-index":i,onClick:e.bulletClick,className:a},i)}))}},{key:"render",value:function render(){var e=this.props,t=e.cssModule,n=e.rootElement;return r.default.createElement("nav",{className:(0,s.getClassName)(n+"__bullets",t)},this.renderBullets())}}]),Bullets}(r.default.Component);i.defaultProps={cssModule:null,selected:0},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(0)),s=(_interopRequireDefault(n(1)),n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function Buttons(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Buttons),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Buttons.__proto__||Object.getPrototypeOf(Buttons)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Buttons,e),o(Buttons,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function render(){var e=this,t=this.props,n=t.rootElement,o=t.cssModule,i=t.organicArrows,a=t.buttonContentLeft,l=t.buttonContentRight,c=t.onNext,u=t.onPrev;return r.default.createElement("div",{ref:function ref(t){e.controls=t,e.props.onMount({element:e.controls,next:e.next||null,prev:e.prev||null})},className:[(0,s.getClassName)(n+"__controls",o),(0,s.getClassName)(n+"__controls--hidden",o)].join(" ")},r.default.createElement("button",{ref:function ref(t){e.next=t},"aria-label":"next",className:(0,s.getClassName)(n+"__next",o),onClick:c},i?r.default.createElement("span",{className:(0,s.getClassName)(n+"__controls__arrow-right",o)}):l),r.default.createElement("button",{ref:function ref(t){e.prev=t},"aria-label":"previous",className:(0,s.getClassName)(n+"__prev",o),onClick:u},i?r.default.createElement("span",{className:(0,s.getClassName)(n+"__controls__arrow-left",o)}):a))}}]),Buttons}(r.default.Component);i.defaultProps={cssModule:null,organicArrows:!0,buttonContentLeft:null,buttonContentRight:null},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),s=_interopRequireDefault(n(0));_interopRequireDefault(n(1));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function Media(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Media);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=n=_possibleConstructorReturn(this,(e=Media.__proto__||Object.getPrototypeOf(Media)).call.apply(e,[this].concat(r))),n.state={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Media,e),r(Media,[{key:"render",value:function render(){var e=this.props,t=e.media,n=e.className,r=t.url,i=t.children,a=t.style,l=(t.loader,t["data-src"],t.className),c=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["url","children","style","loader","data-src","className"]),u=null;return r&&(u=r.match(/\.(mp4|webm)/)?s.default.createElement("video",{title:t.title,src:r,type:"video/mp4",controls:!0}):s.default.createElement("img",{alt:t.alt||t.title||null,src:r})),s.default.createElement("div",o({className:n,style:a||null},c),u,i&&s.default.createElement("div",{className:l},t.children))}}]),Media}(s.default.Component);t.default=i}])}));