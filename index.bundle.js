(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: #fffefe;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-areas: 'aside main';
    grid-template-rows: 1fr;
    grid-template-columns: 250px 1fr;
}

.invisible {
    background-color: #ececec;
    display: none;
    height: 100vh;
    padding: 20px;
    top: 20px;
}

.content-aside {
 margin: 65px 0;
 font-size: 14px;
 font-weight: 300;
}

.content-aside > h3 {
    font-size: 20px;
    margin-bottom: 15px;
}

.container-aside {
    margin-top: 30px;
    padding: 20px 10px;
}


#show-aside {
    margin: 20px;
}

#show-aside, #close-aside {
    background-color: transparent;
    transition: background-color 1s ease-out;
    cursor: pointer;
    border: none;
}

#show-aside:hover,
#close-aside:hover {
    background-color: #fcfafa;
}

.btn-aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 0;
    padding-left: 20px;
}

.main {
    width: 100vw;
    height: 100vh;
    background-color: #fffefe;
    box-sizing: border-box;
}

.width-main {
    width: calc(100vw - 400px);
    box-sizing: border-box;
    background-color: #fffefe;
}

.container {
    background-color: #fffefe;
    max-width: 500px;
    width: 100%;
    padding: 5px 40px;
    box-sizing: border-box;
    margin: 30px auto;
    border-radius: 3px;
    box-shadow: 2px 2px 2px 2px #fcfafa;
    display: flex;
    justify-content: space-between;
}

h3 {
    padding: 0;
    margin: 0;
    margin-right: 25px;
}


.list {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #fffefe;
    max-width: 500px;
    border-radius: 15px;
    box-shadow: 2px 3px 3px 3px #ddd;
    position: absolute;
    top: 20%;
}

.new-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 460px;
    padding: 0;
    margin-top: 20px;
}

p, h4 {
   margin: 0;
}

h4 {
    border-bottom: solid 2px green;
    width: fit-content;
    margin-bottom: 10px;
    margin-top: 20px;
}

p{
    line-height: 1.4rem;
}

ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    margin-right: 30px;
}

li {
    margin-right: 10px;
    padding: 10px;
    font-size: 14px;
    font-weight: 700;
    text-align: justify;
    list-style: none;
}

#notes {
    margin-top: 10px;
    border: none ;
    outline: none;
    background-color: #fcfafa;
    width: 240px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
}

.show-note {
    display: block;
    font-size: 14px;
}

.cont-btn {
    max-width: 800px;
    left: 20vw;
    margin: auto;
}

#show-button {
    border: none;
    background-color: transparent;
    color: #c40909;
    transition: color 500ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 30px;
    font-weight: 700;
    transform: translateX(-50%);
    left: 50%;
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
    transition: background-color 1s ease-out;
}

label {
    margin: 10px;
    display: block;
}

.button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    border: solid .8px #ececec;
}

#close {
    align-self: flex-end;
}

.min-container {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}

.content {
    background-color: #ececec;
    border-radius: 10px;
    padding: 10px;
    resize: vertical;
    overflow: auto;
}
.btn {
    padding: 10px 25px;
    border: none;
    background-color: #e76011;
    margin-left: 35px;
    color: #fcfafa;
    border-radius: 5px;
    font-size: 16px;
    box-shadow: 2px 2px 2px #b88263;
    cursor: pointer;
}

#show-label {
    margin-right: 5px;
    font-size: 18px;
}

#show-button:hover {
    color: #ff0000;
}

.inputs, select {
    display: block;
}

#priority,
#dueDate {
    border: solid .6px #fcfafa;
    box-shadow: 1px 1px 1px #ececec;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fcfafa;
    outline: solid .4px #ececec;
    padding: 3px;
    transition: background-color 1s ease-out;
    margin-right: 10px;
    margin-top: 25px;
}

#priority:hover {
    background-color: #fffefe;
}

.inputs {
    padding: 10px;
    width: max(400px, 100px);
    margin: 5px 0;
    border: none;
    outline: none;
    background-color: #fcfafa;
    border-radius: 5px;
}

.mybtns {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
}

.dialog {
    display: none;
    background-color: #fff;
    border: .5px solid #fcfafa;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 200px;
    position: fixed;
    padding: 20px;
    min-width: 100px;
    z-index: 9999;
    flex-direction: column;
    box-shadow: 2px 3px 2px 2px #ececec;
    border-radius: 10px;
}

#add-task {
    font-size: 14px;
    color: #c40909;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-right: 20px;
    padding: 10px;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background-color 1s ease-out;
}

#add-task:hover, 
#show-button:hover {
    background-color: #DDD;
    width: max-content;
}

.show-label {
    margin-right: 5px;
}
  

.additional {
    display: flex;
    align-items: center;
}

.hesNotes {
    display: none;
    flex-direction: column;
    background-color: #fffefe;
    padding: 10px;
    position: absolute;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #ececec;
    max-width: 250px;
}

.content-notes {
    display: block;
}

.status-element {
    text-align: center;
    margin-top: 25px;

}

.flex-div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.finish, .pro, .no-now{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}


.done {
    color: #0d8a0d;
    padding: 5px;
    background-color: #ececec;
}

.progress {
    color: #e7e711;
    padding: 5px;
    background-color: #ececec;
}

.no {
    color: #c40909;
    padding: 5px;
    background-color: #ececec;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background-color: #fffefe;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-areas: 'aside main';\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 250px 1fr;\r\n}\r\n\r\n.invisible {\r\n    background-color: #ececec;\r\n    display: none;\r\n    height: 100vh;\r\n    padding: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.content-aside {\r\n margin: 65px 0;\r\n font-size: 14px;\r\n font-weight: 300;\r\n}\r\n\r\n.content-aside > h3 {\r\n    font-size: 20px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.container-aside {\r\n    margin-top: 30px;\r\n    padding: 20px 10px;\r\n}\r\n\r\n\r\n#show-aside {\r\n    margin: 20px;\r\n}\r\n\r\n#show-aside, #close-aside {\r\n    background-color: transparent;\r\n    transition: background-color 1s ease-out;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n\r\n#show-aside:hover,\r\n#close-aside:hover {\r\n    background-color: #fcfafa;\r\n}\r\n\r\n.btn-aside {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 0;\r\n    padding-left: 20px;\r\n}\r\n\r\n.main {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #fffefe;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.width-main {\r\n    width: calc(100vw - 400px);\r\n    box-sizing: border-box;\r\n    background-color: #fffefe;\r\n}\r\n\r\n.container {\r\n    background-color: #fffefe;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    padding: 5px 40px;\r\n    box-sizing: border-box;\r\n    margin: 30px auto;\r\n    border-radius: 3px;\r\n    box-shadow: 2px 2px 2px 2px #fcfafa;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nh3 {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-right: 25px;\r\n}\r\n\r\n\r\n.list {\r\n    display: none;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n    background-color: #fffefe;\r\n    max-width: 500px;\r\n    border-radius: 15px;\r\n    box-shadow: 2px 3px 3px 3px #ddd;\r\n    position: absolute;\r\n    top: 20%;\r\n}\r\n\r\n.new-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 460px;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\np, h4 {\r\n   margin: 0;\r\n}\r\n\r\nh4 {\r\n    border-bottom: solid 2px green;\r\n    width: fit-content;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\np{\r\n    line-height: 1.4rem;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    align-items: center;\r\n    margin-right: 30px;\r\n}\r\n\r\nli {\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    text-align: justify;\r\n    list-style: none;\r\n}\r\n\r\n#notes {\r\n    margin-top: 10px;\r\n    border: none ;\r\n    outline: none;\r\n    background-color: #fcfafa;\r\n    width: 240px;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.show-note {\r\n    display: block;\r\n    font-size: 14px;\r\n}\r\n\r\n.cont-btn {\r\n    max-width: 800px;\r\n    left: 20vw;\r\n    margin: auto;\r\n}\r\n\r\n#show-button {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: #c40909;\r\n    transition: color 500ms ease-in-out;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 30px;\r\n    font-weight: 700;\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    padding: 10px;\r\n    transition: background-color 1s ease-out;\r\n}\r\n\r\nlabel {\r\n    margin: 10px;\r\n    display: block;\r\n}\r\n\r\n.button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    border: solid .8px #ececec;\r\n}\r\n\r\n#close {\r\n    align-self: flex-end;\r\n}\r\n\r\n.min-container {\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n}\r\n\r\n.content {\r\n    background-color: #ececec;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    resize: vertical;\r\n    overflow: auto;\r\n}\r\n.btn {\r\n    padding: 10px 25px;\r\n    border: none;\r\n    background-color: #e76011;\r\n    margin-left: 35px;\r\n    color: #fcfafa;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    box-shadow: 2px 2px 2px #b88263;\r\n    cursor: pointer;\r\n}\r\n\r\n#show-label {\r\n    margin-right: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n#show-button:hover {\r\n    color: #ff0000;\r\n}\r\n\r\n.inputs, select {\r\n    display: block;\r\n}\r\n\r\n#priority,\r\n#dueDate {\r\n    border: solid .6px #fcfafa;\r\n    box-shadow: 1px 1px 1px #ececec;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    background-color: #fcfafa;\r\n    outline: solid .4px #ececec;\r\n    padding: 3px;\r\n    transition: background-color 1s ease-out;\r\n    margin-right: 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n#priority:hover {\r\n    background-color: #fffefe;\r\n}\r\n\r\n.inputs {\r\n    padding: 10px;\r\n    width: max(400px, 100px);\r\n    margin: 5px 0;\r\n    border: none;\r\n    outline: none;\r\n    background-color: #fcfafa;\r\n    border-radius: 5px;\r\n}\r\n\r\n.mybtns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 25px;\r\n}\r\n\r\n.dialog {\r\n    display: none;\r\n    background-color: #fff;\r\n    border: .5px solid #fcfafa;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    min-height: 200px;\r\n    position: fixed;\r\n    padding: 20px;\r\n    min-width: 100px;\r\n    z-index: 9999;\r\n    flex-direction: column;\r\n    box-shadow: 2px 3px 2px 2px #ececec;\r\n    border-radius: 10px;\r\n}\r\n\r\n#add-task {\r\n    font-size: 14px;\r\n    color: #c40909;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    margin-right: 20px;\r\n    padding: 10px;\r\n    font-weight: 700;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    transition: background-color 1s ease-out;\r\n}\r\n\r\n#add-task:hover, \r\n#show-button:hover {\r\n    background-color: #DDD;\r\n    width: max-content;\r\n}\r\n\r\n.show-label {\r\n    margin-right: 5px;\r\n}\r\n  \r\n\r\n.additional {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.hesNotes {\r\n    display: none;\r\n    flex-direction: column;\r\n    background-color: #fffefe;\r\n    padding: 10px;\r\n    position: absolute;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px 2px #ececec;\r\n    max-width: 250px;\r\n}\r\n\r\n.content-notes {\r\n    display: block;\r\n}\r\n\r\n.status-element {\r\n    text-align: center;\r\n    margin-top: 25px;\r\n\r\n}\r\n\r\n.flex-div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.finish, .pro, .no-now{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.done {\r\n    color: #0d8a0d;\r\n    padding: 5px;\r\n    background-color: #ececec;\r\n}\r\n\r\n.progress {\r\n    color: #e7e711;\r\n    padding: 5px;\r\n    background-color: #ececec;\r\n}\r\n\r\n.no {\r\n    color: #c40909;\r\n    padding: 5px;\r\n    background-color: #ececec;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createComponents.js":
/*!*********************************!*\
  !*** ./src/createComponents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskLists)
/* harmony export */ });
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _icons_pencil_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/pencil.png */ "./src/icons/pencil.png");
/* harmony import */ var _icons_close_red_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/close-red.png */ "./src/icons/close-red.png");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_print_js__WEBPACK_IMPORTED_MODULE_4__);






function TaskLists() {
  const main = document.querySelector('.main');
  const Aside = document.querySelector('.invisible');

      const storedList = JSON.parse(localStorage.getItem('task'));
      storedList.forEach((newTask, index) => {
          const container = document.createElement('div');
          container.classList.add('container');
          main.appendChild(container);
  
          const minContainer = document.createElement('div');
          minContainer.classList.add('list');
          minContainer.id = index;
          minContainer.draggable = "true";
          container.appendChild(minContainer);
  
          const btnClose = document.createElement('button');
          btnClose.classList.add('button');
          btnClose.innerHTML = `<img src=${_icons_close_red_png__WEBPACK_IMPORTED_MODULE_3__} alt='Open menu'/>`;
          btnClose.style.cssText = `
            align-self: flex-end;
            border: none;
            margin: 0;
            padding: 0;`;
          btnClose.title = 'Fechar';
          minContainer.appendChild(btnClose);
  
          const ul = document.createElement('ul');
          minContainer.appendChild(ul);
  
          const newTitle = document.createElement('h5');
          newTitle.textContent = newTask.title;
          newTitle.classList.add('n-title');
          newTitle.style.fontSize = '18px';
          minContainer.appendChild(newTitle);
  
          const content = document.createElement('div');
          content.classList.add('content');
          minContainer.appendChild(content);
  
          const myTitle = document.createElement('h3');
          myTitle.textContent = newTask.title;
          myTitle.classList.add('title');
          container.appendChild(myTitle);
  
          const containerAside = document.createElement('div');
          containerAside.classList.add('container-aside');
          Aside.appendChild(containerAside);
  
          const showDetails = document.createElement('button');
          container.appendChild(showDetails);
          showDetails.innerHTML = `<img src=${_icons_dots_png__WEBPACK_IMPORTED_MODULE_0__} alt='Ver descricao'/>`;
          showDetails.classList.add('button');
          showDetails.style.cssText = `
            margin: 0;
            border: none;
            padding: 0;`;
          showDetails.title = 'Ver detalhes da tarefa.';
  
          showDetails.addEventListener('click', (e) => {
            e.preventDefault();
            minContainer.style.display = 'flex';
          });
  
          btnClose.addEventListener('click', (e) => {
            e.preventDefault();
            minContainer.style.display = 'none';
          });
          
          const titleDescription = document.createElement('h4');
          titleDescription.textContent = 'Descrição:';
          content.appendChild(titleDescription);
  
          const myDescription = document.createElement('p');
          content.appendChild(myDescription);
          myDescription.textContent = newTask.description;
          myDescription.classList.add('description');
          
          const priorityLevel = document.createElement('li');
          ul.appendChild(priorityLevel);
          priorityLevel.textContent = newTask.priority;
  
          const myDueDate = document.createElement('li');
          ul.appendChild(myDueDate);
          myDueDate.textContent = newTask.dueDate;
          myDueDate.title ='O prazo expira nesta data'
  
          const myStatus = document.createElement('li');
          ul.appendChild(myStatus);
          myStatus.textContent = newTask.status;
          myStatus.title='Estado da tarefa'
          
          if (newTask.status === 'Concluído!') {
            myStatus.classList.add('done');
          } else if (newTask.status === 'Em progresso...') {
            myStatus.classList.add('progress');
          } else {
            myStatus.classList.add('no');
          }
  
          const titleNote = document.createElement('h4');
          titleNote.textContent = 'Notas:';
          content.appendChild(titleNote);
  
          const myNotes = document.createElement('p');
          content.appendChild(myNotes);
          myNotes.textContent = newTask.noteText;
          myNotes.classList.add('newNote');
          
          const editButton = document.createElement('button');
          editButton.title = 'Editar a tarefa';
          editButton.innerHTML = `<img src=${_icons_pencil_png__WEBPACK_IMPORTED_MODULE_2__} alt='Remover a tarefa'/>`;
          editButton.style.cssText = `
            margin-right: 15px;
            background-color: transparent;
            border: solid .6px #fafafa;
            cursor: pointer;`;
           
          editButton.addEventListener('click', () => {
             const editForm = document.createElement('form');
            const titleInput = document.createElement('input');
            titleInput.value = newTask.title;
            editForm.appendChild(titleInput);
  
            const titleElement = container.querySelector('.title');
            titleElement.textContent = '';
            titleElement.appendChild(titleInput);
            
            const otherTitleInput = document.createElement('input');
            otherTitleInput.value = newTask.title;
            editForm.appendChild(otherTitleInput);
  
            const otherTitleElement = minContainer.querySelector('.n-title');
            otherTitleElement.textContent = '';
            otherTitleElement.appendChild(otherTitleInput);
  
            const descriptionTextarea = document.createElement('textarea');
            descriptionTextarea.value = newTask.description;
            editForm.appendChild(descriptionTextarea);
  
            const descriptionElement = minContainer.querySelector('.description');
            descriptionElement.textContent = '';
            descriptionElement.appendChild(descriptionTextarea);
  
            const noteTextarea = document.createElement('textarea');
            noteTextarea.value = newTask.noteText;
            editForm.appendChild(noteTextarea);
  
            const noteElement = minContainer.querySelector('.newNote');
            noteElement.textContent = '';
    noteElement.appendChild(noteTextarea);

     const saveButton = document.createElement('button');
            saveButton.textContent = 'Salvar';
            saveButton.style.cssText = `
              margin-right: 15px;
              background-color: #00FF00;
              padding: 10px;
              border-radius: 5px;
              color: #fff;
              box-shadow: 2px 2px 2px #ddd;
              border: solid .6px #fafafa;
              cursor: pointer;`;
              editForm.appendChild(saveButton);
            saveButton.title="Salvar a tarefa"
            newContainer.appendChild(saveButton);
            
             saveButton.addEventListener('click', (e) => {
               e.preventDefault();
                const newOtherTitle = otherTitleInput.value;
               newTask.title = newOtherTitle;
              otherTitleElement.textContent = newOtherTitle;
  
              const newTitle = titleInput.value;
              newTask.title = newTitle;
              titleElement.textContent = newOtherTitle;
              
              const newDescription = descriptionTextarea.value;
              newTask.description = newDescription;
              descriptionElement.textContent = newDescription;
              
              const newNotes = noteTextarea.value;
              newTask.noteText = newNotes;
              noteElement.textContent = newNotes;
  
              otherTitleInput.remove();
              titleInput.remove();
              descriptionTextarea.remove();
              noteTextarea.remove();
              saveButton.remove();
            
            });

          });
          
          const removeButton = document.createElement('button');
          removeButton.innerHTML = `<img src=${_icons_delete_png__WEBPACK_IMPORTED_MODULE_1__} alt='Remover a tarefa'/>`;
          removeButton.classList.add('button');
          removeButton.dataset.index = index;
          removeButton.title = 'Apagar a tarefa';
  
          removeButton.addEventListener('click', (e) => {
            const indexToRemove = e.target.dataset.index;
            _print_js__WEBPACK_IMPORTED_MODULE_4__.myList.splice(indexToRemove, 1);
            localStorage.setItem('task', JSON.stringify(_print_js__WEBPACK_IMPORTED_MODULE_4__.myList));
            e.target.closest('.container').remove();
          });
  
          const newContainer = document.createElement('div');
          newContainer.classList.add('new-container');
          minContainer.appendChild(newContainer);
          newContainer.appendChild(ul);
          newContainer.appendChild(editButton);
          newContainer.appendChild(removeButton);
          
      }); 
}


/***/ }),

/***/ "./src/createNewTask.js":
/*!******************************!*\
  !*** ./src/createNewTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewTask)
/* harmony export */ });
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_print_js__WEBPACK_IMPORTED_MODULE_0__);


function createdefaultTasck() {
    const myDefaultTask = {
            title: 'Minha Nova Tarefa o seu título',
        description: `Descrição da minha nova tarefa. É importante escrever uma 
            descrição clara aqui por que somos imperfeitos e por isso nos esquecemos 
            de tudo que pensávamos que íamos fazer muitas vezes. Por isso não minimize a 
            importância de uma descrição clara e coesa.`,
            priority: 'Prioridade 1',
            dueDate: '15/04/2024',
            status: 'Pendente',
        noteText: `Notas adicionais sobre a tarefa. Nas Notas é muito bom ser 
            claro do que se espera da tarefa. Uma boa nota é uma exelente arma 
            para a execução eficaz de tarefas.` 
        };
        _print_js__WEBPACK_IMPORTED_MODULE_0__.myList = [myDefaultTask];
        const taskTodo = JSON.stringify(_print_js__WEBPACK_IMPORTED_MODULE_0__.myList);
        localStorage.setItem('task', taskTodo);
}

function createNewTask(title, description, priority, dueDate, status, noteText) {
   
    const newTask = {
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate,
        status: status,
        noteText: noteText, 
    }

    
    const taskExists = _print_js__WEBPACK_IMPORTED_MODULE_0__.myList.some(task => task.title === newTask.title);

    if (taskExists) {
        console.log('A tarefa já existe');
    } else {
        const todo = new _print_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate, status, noteText);
        _print_js__WEBPACK_IMPORTED_MODULE_0__.myList.push(todo.task());

        const jsonList = JSON.stringify(_print_js__WEBPACK_IMPORTED_MODULE_0__.myList);
        localStorage.setItem('task', jsonList);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createdefaultTasck()
})

/***/ }),

/***/ "./src/displayButtons.js":
/*!*******************************!*\
  !*** ./src/displayButtons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayButton)
/* harmony export */ });
/* harmony import */ var _icons_plus_this_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/plus-this.png */ "./src/icons/plus-this.png");
/* harmony import */ var _icons_menu_red_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/menu-red.png */ "./src/icons/menu-red.png");
/* harmony import */ var _icons_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/menu.png */ "./src/icons/menu.png");
/* harmony import */ var _icons_close_red_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/close-red.png */ "./src/icons/close-red.png");
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");






function displayButton() {
  const main = document.querySelector('.main')
  const favDialog = document.querySelector('#dialog');
  const closeButton = document.querySelector('#close');
  closeButton.innerHTML = `<img src=${_icons_close_red_png__WEBPACK_IMPORTED_MODULE_3__} alt='Close button'/>`
  closeButton.style.cssText = `
  border: none;
  margin-bottom: 15px;
  padding: 0;`;
  closeButton.title='Fechar.'
  const closeNote = document.querySelector('.close-note');
  closeNote.innerHTML=`<img src=${_icons_close_red_png__WEBPACK_IMPORTED_MODULE_3__} alt='Close button'/>`
  closeNote.style.cssText = `
  border: none;
  margin: 0;
  margin-bottom: 5px;
  background-color: transparent;
  align-self: flex-end;
  padding: 0;
  cursor: pointer;
  width: min-content;`;
  closeNote.title='Fechar.'

  const showButton = document.querySelector('#show-button');
  const notesBtn = document.querySelector('#cont-notes');
  notesBtn.style.cssText = `
  border: none;`;
  notesBtn.title='Clique para outras opções.'
  notesBtn.innerHTML=`<img src=${_icons_dots_png__WEBPACK_IMPORTED_MODULE_4__} alt='Notes'/>`
  const noteDocument = document.querySelector('.hesNotes');
  const showAside = document.querySelector('#show-aside');
  showAside.title = 'Abrir';
  const Aside = document.querySelector('.invisible');
  const closeAside = document.querySelector('#close-aside');
  closeAside.title = 'Fechar';
  const ShowLabel = document.querySelector('.show-label');
  ShowLabel.innerHTML = `<img src=${_icons_plus_this_png__WEBPACK_IMPORTED_MODULE_0__} alt='Plus icon'/>`
  const addTask = document.querySelector('#add-task');

  addTask.addEventListener('click', (e) => {
    e.preventDefault()
    favDialog.style.display = 'flex';
  })

  let isMenuClosed = `<img src=${_icons_menu_red_png__WEBPACK_IMPORTED_MODULE_1__} alt='Open menu'/>`;
  let isMenuOpen = `<img src=${_icons_menu_png__WEBPACK_IMPORTED_MODULE_2__} alt='Open menu'/>`;
  closeAside.innerHTML=isMenuClosed
  showAside.innerHTML = isMenuOpen;
  showAside.addEventListener('click', (e) => {
    e.preventDefault();
    showAside.innerHTML = `
      <img src=${_icons_menu_png__WEBPACK_IMPORTED_MODULE_2__} alt='Close menu'/>`
    Aside.style.display = 'block';
    showAside.style.display = 'none';
    showButton.style.display = 'none';
  })

  closeAside.addEventListener('click', (e) => {
    e.preventDefault();
    Aside.style.display = 'none';
    showAside.style.display = 'block'
    showButton.style.display = 'block';
  })
   
  notesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    noteDocument.style.display = 'flex';
  });

  closeNote.addEventListener('click', (e) => {
    e.preventDefault();
    noteDocument.style.display = 'none';
  })

 closeButton.addEventListener('click', () => {
    favDialog.style.display= 'none';
 })
  
  showButton.addEventListener('click', () => {
    favDialog.style.display= 'flex';
  })

    return main;
}

/***/ }),

/***/ "./src/formData.js":
/*!*************************!*\
  !*** ./src/formData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHtmlFormData)
/* harmony export */ });
/* harmony import */ var _manipulationFormData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipulationFormData */ "./src/manipulationFormData.js");

 
function getHtmlFormData() {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const priority = document.querySelector('#priority').value;
  const dueDate = document.querySelector('#dueDate').value;
  const radioFinished = document.querySelector('#finished');
  const radioInProgress = document.querySelector('#progress');
  const radioCantStarted = document.querySelector('#no');
  const noteDocument = document.querySelector('#notes');
  const form = document.querySelector('form')
  const noteText = noteDocument.value;
    let showError = document.createElement('p');
    form.appendChild(showError)
    ;(0,_manipulationFormData__WEBPACK_IMPORTED_MODULE_0__["default"])(radioFinished,
    radioInProgress, radioCantStarted, title,
    description, priority, showError, dueDate, noteText)
  }


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayButtons.js */ "./src/displayButtons.js");
/* harmony import */ var _createComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createComponents.js */ "./src/createComponents.js");
/* harmony import */ var _formData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formData.js */ "./src/formData.js");







function App() {
  (0,_displayButtons_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const main = document.querySelector('.main')
    const add = document.querySelector('.btn');
  add.addEventListener('click', (e) => {
    e.preventDefault()
   ;(0,_formData_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_createComponents_js__WEBPACK_IMPORTED_MODULE_2__["default"])();  
  })
  ;(0,_createComponents_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
  return main;
 }
    
document.addEventListener('DOMContentLoaded', () => {
 document.body.appendChild(App()) 
 })


/***/ }),

/***/ "./src/manipulationFormData.js":
/*!*************************************!*\
  !*** ./src/manipulationFormData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ manipulationFormData)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");


function manipulationFormData(radioFinished,
    radioInProgress, radioCantStarted, title,
    description, priority, showError, dueDate, noteText) {
    let status = '';

     if (radioFinished.checked) {
      status = 'Concluido!';
    } else if (radioInProgress.checked) {
      status ='Em Progresso...'
    } else if (radioCantStarted.checked) {
      status = `Pendente`;
    }
   
   if (title === '' || !isNaN && description === '' ||
      !isNaN && priority === '' && dueDate === '' &&
      noteText === '' || !isNaN) {
      showError.textContent = 'Deve preencher todos os campos para guardar a tarefa!';
      showError.style.color = '#f00';
      setTimeout(() => {
        showError.textContent = '';
         showError.style.color = '';
      }, 3000) 
    } else if (title === '' || !isNaN) {
      showError.textContent = 'Deve preencher o campo titulo para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000);
      return
    } else if( description === '' ||
      !isNaN) {
      showError.textContent = 'Deve preencher o campo descricao para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000); 
      return
    } else if (priority === '') {
      showError.textContent = 'Deve selecionar a prioridade para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000);
      return
    } else if (dueDate === '') {
      showError.textContent = 'Voce nao escolheu a data de execucao';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000); 
      return
    } else if (noteText === '' || !isNaN) {
      showError.textContent = 'Deve adicionar uma nota para guardar a tarefa!';
      showError.style.color = '#f00';
      showError.style.backgroundColor = '#ececec';
      showError.style.padding = '5px';
      setTimeout(() => {
        showError.textContent = '';
        showError.style.color = '';
        showError.style.backgroundColor = '';
        showError.style.padding = '';
      }, 3000);
      return
      } else {
     (0,_createNewTask__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, priority, dueDate, status, noteText);
    }
  }

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((module) => {

function Todo(title, description, priority, dueDate, status, notes) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
    this.notes = notes
}

Todo.prototype.task = function () {
    return {
        title: this.title,
        description: this.description,
        priority: this.priority,
        dueDate: this.dueDate,
        status: this.status,
        notes: this.notes
    }
}

const myList = [];

module.exports = {
 Todo, myList
}

/***/ }),

/***/ "./src/icons/close-red.png":
/*!*********************************!*\
  !*** ./src/icons/close-red.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "909ee76b477bb8d2abe8.png";

/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcd23af4466f2b616551.png";

/***/ }),

/***/ "./src/icons/dots.png":
/*!****************************!*\
  !*** ./src/icons/dots.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "db667fdc3fb1e97eca77.png";

/***/ }),

/***/ "./src/icons/menu-red.png":
/*!********************************!*\
  !*** ./src/icons/menu-red.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "512eee93e6880517092b.png";

/***/ }),

/***/ "./src/icons/menu.png":
/*!****************************!*\
  !*** ./src/icons/menu.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "401298027ddc27ac8299.png";

/***/ }),

/***/ "./src/icons/pencil.png":
/*!******************************!*\
  !*** ./src/icons/pencil.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf5d9ac08ea809caa4e5.png";

/***/ }),

/***/ "./src/icons/plus-this.png":
/*!*********************************!*\
  !*** ./src/icons/plus-this.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d622ac9f8f3c121fc2a0.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxV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Ym9DO0FBQ0k7QUFDSTtBQUNFO0FBQ1Y7QUFDcEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQVMsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNENBQUksRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw4Q0FBVSxFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFFBQVE7QUFDUixLQUFLLDBEQUFhO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZUNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlCdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21hbmlwdWxhdGlvbkZvcm1EYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXNpZGUgbWFpbic7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xyXG59XHJcblxyXG4uaW52aXNpYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWFzaWRlIHtcclxuIG1hcmdpbjogNjVweCAwO1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmNvbnRlbnQtYXNpZGUgPiBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWFzaWRlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4jc2hvdy1hc2lkZSB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiNzaG93LWFzaWRlLCAjY2xvc2UtYXNpZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jc2hvdy1hc2lkZTpob3ZlcixcclxuI2Nsb3NlLWFzaWRlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XHJcbn1cclxuXHJcbi5idG4tYXNpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi53aWR0aC1tYWluIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDAwcHgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNmY2ZhZmE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggM3B4ICNkZGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxufVxyXG5cclxuLm5ldy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnAsIGg0IHtcclxuICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggZ3JlZW47XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxucHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI25vdGVzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmUgO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zaG93LW5vdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250LWJ0biB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbGVmdDogMjB2dztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3Nob3ctYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNjNDA5MDk7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAuOHB4ICNlY2VjZWM7XHJcbn1cclxuXHJcbiNjbG9zZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm1pbi1jb250YWluZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzYwMTE7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgIGNvbG9yOiAjZmNmYWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggI2I4ODI2MztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3Nob3ctbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNzaG93LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLmlucHV0cywgc2VsZWN0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jcHJpb3JpdHksXHJcbiNkdWVEYXRlIHtcclxuICAgIGJvcmRlcjogc29saWQgLjZweCAjZmNmYWZhO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2VjZWNlYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XHJcbiAgICBvdXRsaW5lOiBzb2xpZCAuNHB4ICNlY2VjZWM7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuI3ByaW9yaXR5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XHJcbn1cclxuXHJcbi5pbnB1dHMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiBtYXgoNDAwcHgsIDEwMHB4KTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm15YnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IC41cHggc29saWQgI2ZjZmFmYTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDJweCAycHggI2VjZWNlYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNhZGQtdGFzayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2M0MDkwOTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiNhZGQtdGFzazpob3ZlciwgXHJcbiNzaG93LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uc2hvdy1sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4gIFxyXG5cclxuLmFkZGl0aW9uYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXNOb3RlcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZWNlY2VjO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbm90ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdGF0dXMtZWxlbWVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuLmZsZXgtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maW5pc2gsIC5wcm8sIC5uby1ub3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uZG9uZSB7XHJcbiAgICBjb2xvcjogIzBkOGEwZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgICBjb2xvcjogI2U3ZTcxMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbn1cclxuXHJcbi5ubyB7XHJcbiAgICBjb2xvcjogI2M0MDkwOTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx5QkFB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ZCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXNpZGUgbWFpbic7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtYXNpZGUge1xcclxcbiBtYXJnaW46IDY1cHggMDtcXHJcXG4gZm9udC1zaXplOiAxNHB4O1xcclxcbiBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1hc2lkZSA+IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFzaWRlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jc2hvdy1hc2lkZSB7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctYXNpZGUsICNjbG9zZS1hc2lkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctYXNpZGU6aG92ZXIsXFxyXFxuI2Nsb3NlLWFzaWRlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hc2lkZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi53aWR0aC1tYWluIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MDBweCk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZmNmYWZhO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDNweCAjZGRkO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NjBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxucCwgaDQge1xcclxcbiAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggZ3JlZW47XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25vdGVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lIDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1ub3RlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtYnRuIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbGVmdDogMjB2dztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1idXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogI2M0MDkwOTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAuOHB4ICNlY2VjZWM7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubWluLWNvbnRhaW5lciB7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2MDExO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXHJcXG4gICAgY29sb3I6ICNmY2ZhZmE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjYjg4MjYzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dHMsIHNlbGVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHksXFxyXFxuI2R1ZURhdGUge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIC42cHggI2ZjZmFmYTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2VjZWNlYztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XFxyXFxuICAgIG91dGxpbmU6IHNvbGlkIC40cHggI2VjZWNlYztcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dHMge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogbWF4KDQwMHB4LCAxMDBweCk7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlidG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmNmYWZhO1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCAycHggMnB4ICNlY2VjZWM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICNjNDA5MDk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazpob3ZlciwgXFxyXFxuI3Nob3ctYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1sYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG4gIFxcclxcblxcclxcbi5hZGRpdGlvbmFsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlc05vdGVzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2VjZWNlYztcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtbm90ZXMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cy1lbGVtZW50IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaCwgLnBybywgLm5vLW5vd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZG9uZSB7XFxyXFxuICAgIGNvbG9yOiAjMGQ4YTBkO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmVzcyB7XFxyXFxuICAgIGNvbG9yOiAjZTdlNzExO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxufVxcclxcblxcclxcbi5ubyB7XFxyXFxuICAgIGNvbG9yOiAjYzQwOTA5O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRG90cyBmcm9tICcuL2ljb25zL2RvdHMucG5nJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICcuL2ljb25zL2RlbGV0ZS5wbmcnO1xyXG5pbXBvcnQgcGVuY2lsRWRpdCBmcm9tICcuL2ljb25zL3BlbmNpbC5wbmcnO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4vaWNvbnMvY2xvc2UtcmVkLnBuZyc7XHJcbmltcG9ydCB7IG15TGlzdCB9IGZyb20gJy4vcHJpbnQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza0xpc3RzKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gIGNvbnN0IEFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludmlzaWJsZScpO1xyXG5cclxuICAgICAgY29uc3Qgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2snKSk7XHJcbiAgICAgIHN0b3JlZExpc3QuZm9yRWFjaCgobmV3VGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIFxyXG4gICAgICAgICAgY29uc3QgbWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICBtaW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xyXG4gICAgICAgICAgbWluQ29udGFpbmVyLmlkID0gaW5kZXg7XHJcbiAgICAgICAgICBtaW5Db250YWluZXIuZHJhZ2dhYmxlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWluQ29udGFpbmVyKTtcclxuICBcclxuICAgICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICBidG5DbG9zZS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICAgIGJ0bkNsb3NlLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke0Nsb3NlSWNvbn0gYWx0PSdPcGVuIG1lbnUnLz5gO1xyXG4gICAgICAgICAgYnRuQ2xvc2Uuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO2A7XHJcbiAgICAgICAgICBidG5DbG9zZS50aXRsZSA9ICdGZWNoYXInO1xyXG4gICAgICAgICAgbWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNsb3NlKTtcclxuICBcclxuICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgIG1pbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IG5ld1Rhc2sudGl0bGU7XHJcbiAgICAgICAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKCduLXRpdGxlJyk7XHJcbiAgICAgICAgICBuZXdUaXRsZS5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcclxuICAgICAgICAgIG1pbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICAgICAgICAgIG1pbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICBcclxuICAgICAgICAgIGNvbnN0IG15VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgbXlUaXRsZS50ZXh0Q29udGVudCA9IG5ld1Rhc2sudGl0bGU7XHJcbiAgICAgICAgICBteVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobXlUaXRsZSk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBjb250YWluZXJBc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgY29udGFpbmVyQXNpZGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWFzaWRlJyk7XHJcbiAgICAgICAgICBBc2lkZS5hcHBlbmRDaGlsZChjb250YWluZXJBc2lkZSk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBzaG93RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dEZXRhaWxzKTtcclxuICAgICAgICAgIHNob3dEZXRhaWxzLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke0RvdHN9IGFsdD0nVmVyIGRlc2NyaWNhbycvPmA7XHJcbiAgICAgICAgICBzaG93RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICAgIHNob3dEZXRhaWxzLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO2A7XHJcbiAgICAgICAgICBzaG93RGV0YWlscy50aXRsZSA9ICdWZXIgZGV0YWxoZXMgZGEgdGFyZWZhLic7XHJcbiAgXHJcbiAgICAgICAgICBzaG93RGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtaW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB0aXRsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICAgIHRpdGxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3Jpw6fDo286JztcclxuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVEZXNjcmlwdGlvbik7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBteURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChteURlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIG15RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBuZXdUYXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgbXlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBwcmlvcml0eUxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWwpO1xyXG4gICAgICAgICAgcHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IG5ld1Rhc2sucHJpb3JpdHk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBteUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobXlEdWVEYXRlKTtcclxuICAgICAgICAgIG15RHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld1Rhc2suZHVlRGF0ZTtcclxuICAgICAgICAgIG15RHVlRGF0ZS50aXRsZSA9J08gcHJhem8gZXhwaXJhIG5lc3RhIGRhdGEnXHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBteVN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChteVN0YXR1cyk7XHJcbiAgICAgICAgICBteVN0YXR1cy50ZXh0Q29udGVudCA9IG5ld1Rhc2suc3RhdHVzO1xyXG4gICAgICAgICAgbXlTdGF0dXMudGl0bGU9J0VzdGFkbyBkYSB0YXJlZmEnXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChuZXdUYXNrLnN0YXR1cyA9PT0gJ0NvbmNsdcOtZG8hJykge1xyXG4gICAgICAgICAgICBteVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG5ld1Rhc2suc3RhdHVzID09PSAnRW0gcHJvZ3Jlc3NvLi4uJykge1xyXG4gICAgICAgICAgICBteVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcycpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgnbm8nKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGNvbnN0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgICB0aXRsZU5vdGUudGV4dENvbnRlbnQgPSAnTm90YXM6JztcclxuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVOb3RlKTtcclxuICBcclxuICAgICAgICAgIGNvbnN0IG15Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG15Tm90ZXMpO1xyXG4gICAgICAgICAgbXlOb3Rlcy50ZXh0Q29udGVudCA9IG5ld1Rhc2subm90ZVRleHQ7XHJcbiAgICAgICAgICBteU5vdGVzLmNsYXNzTGlzdC5hZGQoJ25ld05vdGUnKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgZWRpdEJ1dHRvbi50aXRsZSA9ICdFZGl0YXIgYSB0YXJlZmEnO1xyXG4gICAgICAgICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtwZW5jaWxFZGl0fSBhbHQ9J1JlbW92ZXIgYSB0YXJlZmEnLz5gO1xyXG4gICAgICAgICAgZWRpdEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIC42cHggI2ZhZmFmYTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO2A7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gbmV3VGFzay50aXRsZTtcclxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIG90aGVyVGl0bGVJbnB1dC52YWx1ZSA9IG5ld1Rhc2sudGl0bGU7XHJcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKG90aGVyVGl0bGVJbnB1dCk7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVGl0bGVFbGVtZW50ID0gbWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIG90aGVyVGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIG90aGVyVGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKG90aGVyVGl0bGVJbnB1dCk7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlID0gbmV3VGFzay5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IG1pbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRhcmVhKTtcclxuICBcclxuICAgICAgICAgICAgY29uc3Qgbm90ZVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgbm90ZVRleHRhcmVhLnZhbHVlID0gbmV3VGFzay5ub3RlVGV4dDtcclxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQobm90ZVRleHRhcmVhKTtcclxuICBcclxuICAgICAgICAgICAgY29uc3Qgbm90ZUVsZW1lbnQgPSBtaW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLm5ld05vdGUnKTtcclxuICAgICAgICAgICAgbm90ZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgIG5vdGVFbGVtZW50LmFwcGVuZENoaWxkKG5vdGVUZXh0YXJlYSk7XHJcblxyXG4gICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYWx2YXInO1xyXG4gICAgICAgICAgICBzYXZlQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEZGMDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggI2RkZDtcclxuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIC42cHggI2ZhZmFmYTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7YDtcclxuICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICAgICAgICAgICAgc2F2ZUJ1dHRvbi50aXRsZT1cIlNhbHZhciBhIHRhcmVmYVwiXHJcbiAgICAgICAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3T3RoZXJUaXRsZSA9IG90aGVyVGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgbmV3VGFzay50aXRsZSA9IG5ld090aGVyVGl0bGU7XHJcbiAgICAgICAgICAgICAgb3RoZXJUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdPdGhlclRpdGxlO1xyXG4gIFxyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICBuZXdUYXNrLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICAgICAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gbmV3T3RoZXJUaXRsZTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWU7XHJcbiAgICAgICAgICAgICAgbmV3VGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld05vdGVzID0gbm90ZVRleHRhcmVhLnZhbHVlO1xyXG4gICAgICAgICAgICAgIG5ld1Rhc2subm90ZVRleHQgPSBuZXdOb3RlcztcclxuICAgICAgICAgICAgICBub3RlRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld05vdGVzO1xyXG4gIFxyXG4gICAgICAgICAgICAgIG90aGVyVGl0bGVJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICB0aXRsZUlucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgbm90ZVRleHRhcmVhLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICByZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7RGVsZXRlfSBhbHQ9J1JlbW92ZXIgYSB0YXJlZmEnLz5gO1xyXG4gICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgcmVtb3ZlQnV0dG9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgIHJlbW92ZUJ1dHRvbi50aXRsZSA9ICdBcGFnYXIgYSB0YXJlZmEnO1xyXG4gIFxyXG4gICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIG15TGlzdC5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkobXlMaXN0KSk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICBuZXdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgbWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcik7XHJcbiAgICAgICAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgICAgICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gICAgICAgICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XHJcbiAgICAgICAgICBcclxuICAgICAgfSk7IFxyXG59XHJcbiIsImltcG9ydCB7IFRvZG8sIG15TGlzdCB9IGZyb20gJy4vcHJpbnQuanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlZGVmYXVsdFRhc2NrKCkge1xyXG4gICAgY29uc3QgbXlEZWZhdWx0VGFzayA9IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNaW5oYSBOb3ZhIFRhcmVmYSBvIHNldSB0w610dWxvJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYERlc2NyacOnw6NvIGRhIG1pbmhhIG5vdmEgdGFyZWZhLiDDiSBpbXBvcnRhbnRlIGVzY3JldmVyIHVtYSBcclxuICAgICAgICAgICAgZGVzY3Jpw6fDo28gY2xhcmEgYXF1aSBwb3IgcXVlIHNvbW9zIGltcGVyZmVpdG9zIGUgcG9yIGlzc28gbm9zIGVzcXVlY2Vtb3MgXHJcbiAgICAgICAgICAgIGRlIHR1ZG8gcXVlIHBlbnPDoXZhbW9zIHF1ZSDDrWFtb3MgZmF6ZXIgbXVpdGFzIHZlemVzLiBQb3IgaXNzbyBuw6NvIG1pbmltaXplIGEgXHJcbiAgICAgICAgICAgIGltcG9ydMOibmNpYSBkZSB1bWEgZGVzY3Jpw6fDo28gY2xhcmEgZSBjb2VzYS5gLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogJ1ByaW9yaWRhZGUgMScsXHJcbiAgICAgICAgICAgIGR1ZURhdGU6ICcxNS8wNC8yMDI0JyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnUGVuZGVudGUnLFxyXG4gICAgICAgIG5vdGVUZXh0OiBgTm90YXMgYWRpY2lvbmFpcyBzb2JyZSBhIHRhcmVmYS4gTmFzIE5vdGFzIMOpIG11aXRvIGJvbSBzZXIgXHJcbiAgICAgICAgICAgIGNsYXJvIGRvIHF1ZSBzZSBlc3BlcmEgZGEgdGFyZWZhLiBVbWEgYm9hIG5vdGEgw6kgdW1hIGV4ZWxlbnRlIGFybWEgXHJcbiAgICAgICAgICAgIHBhcmEgYSBleGVjdcOnw6NvIGVmaWNheiBkZSB0YXJlZmFzLmAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICBteUxpc3QgPSBbbXlEZWZhdWx0VGFza107XHJcbiAgICAgICAgY29uc3QgdGFza1RvZG8gPSBKU09OLnN0cmluZ2lmeShteUxpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgdGFza1RvZG8pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHN0YXR1cywgbm90ZVRleHQpIHtcclxuICAgXHJcbiAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXHJcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgbm90ZVRleHQ6IG5vdGVUZXh0LCBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tFeGlzdHMgPSBteUxpc3Quc29tZSh0YXNrID0+IHRhc2sudGl0bGUgPT09IG5ld1Rhc2sudGl0bGUpO1xyXG5cclxuICAgIGlmICh0YXNrRXhpc3RzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0EgdGFyZWZhIGrDoSBleGlzdGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHN0YXR1cywgbm90ZVRleHQpO1xyXG4gICAgICAgIG15TGlzdC5wdXNoKHRvZG8udGFzaygpKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbkxpc3QgPSBKU09OLnN0cmluZ2lmeShteUxpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywganNvbkxpc3QpO1xyXG4gICAgfVxyXG59XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVkZWZhdWx0VGFzY2soKVxyXG59KSIsImltcG9ydCBQbHVzVGhpcyBmcm9tICcuL2ljb25zL3BsdXMtdGhpcy5wbmcnO1xyXG5pbXBvcnQgbWVudUNsb3NlIGZyb20gJy4vaWNvbnMvbWVudS1yZWQucG5nJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9pY29ucy9tZW51LnBuZyc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi9pY29ucy9jbG9zZS1yZWQucG5nJztcclxuaW1wb3J0IERvdHMgZnJvbSAnLi9pY29ucy9kb3RzLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QnV0dG9uKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcbiAgY29uc3QgZmF2RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZycpO1xyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7Q2xvc2VJY29ufSBhbHQ9J0Nsb3NlIGJ1dHRvbicvPmBcclxuICBjbG9zZUJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7YDtcclxuICBjbG9zZUJ1dHRvbi50aXRsZT0nRmVjaGFyLidcclxuICBjb25zdCBjbG9zZU5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2Utbm90ZScpO1xyXG4gIGNsb3NlTm90ZS5pbm5lckhUTUw9YDxpbWcgc3JjPSR7Q2xvc2VJY29ufSBhbHQ9J0Nsb3NlIGJ1dHRvbicvPmBcclxuICBjbG9zZU5vdGUuc3R5bGUuY3NzVGV4dCA9IGBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7YDtcclxuICBjbG9zZU5vdGUudGl0bGU9J0ZlY2hhci4nXHJcblxyXG4gIGNvbnN0IHNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1idXR0b24nKTtcclxuICBjb25zdCBub3Rlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250LW5vdGVzJyk7XHJcbiAgbm90ZXNCdG4uc3R5bGUuY3NzVGV4dCA9IGBcclxuICBib3JkZXI6IG5vbmU7YDtcclxuICBub3Rlc0J0bi50aXRsZT0nQ2xpcXVlIHBhcmEgb3V0cmFzIG9ww6fDtWVzLidcclxuICBub3Rlc0J0bi5pbm5lckhUTUw9YDxpbWcgc3JjPSR7RG90c30gYWx0PSdOb3RlcycvPmBcclxuICBjb25zdCBub3RlRG9jdW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVzTm90ZXMnKTtcclxuICBjb25zdCBzaG93QXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1hc2lkZScpO1xyXG4gIHNob3dBc2lkZS50aXRsZSA9ICdBYnJpcic7XHJcbiAgY29uc3QgQXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW52aXNpYmxlJyk7XHJcbiAgY29uc3QgY2xvc2VBc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1hc2lkZScpO1xyXG4gIGNsb3NlQXNpZGUudGl0bGUgPSAnRmVjaGFyJztcclxuICBjb25zdCBTaG93TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1sYWJlbCcpO1xyXG4gIFNob3dMYWJlbC5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtQbHVzVGhpc30gYWx0PSdQbHVzIGljb24nLz5gXHJcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xyXG5cclxuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgZmF2RGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfSlcclxuXHJcbiAgbGV0IGlzTWVudUNsb3NlZCA9IGA8aW1nIHNyYz0ke21lbnVDbG9zZX0gYWx0PSdPcGVuIG1lbnUnLz5gO1xyXG4gIGxldCBpc01lbnVPcGVuID0gYDxpbWcgc3JjPSR7bWVudX0gYWx0PSdPcGVuIG1lbnUnLz5gO1xyXG4gIGNsb3NlQXNpZGUuaW5uZXJIVE1MPWlzTWVudUNsb3NlZFxyXG4gIHNob3dBc2lkZS5pbm5lckhUTUwgPSBpc01lbnVPcGVuO1xyXG4gIHNob3dBc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93QXNpZGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIHNyYz0ke21lbnV9IGFsdD0nQ2xvc2UgbWVudScvPmBcclxuICAgIEFzaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc2hvd0FzaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzaG93QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSlcclxuXHJcbiAgY2xvc2VBc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBBc2lkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc2hvd0FzaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBzaG93QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0pXHJcbiAgIFxyXG4gIG5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbm90ZURvY3VtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlTm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBub3RlRG9jdW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KVxyXG5cclxuIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZmF2RGlhbG9nLnN0eWxlLmRpc3BsYXk9ICdub25lJztcclxuIH0pXHJcbiAgXHJcbiAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGZhdkRpYWxvZy5zdHlsZS5kaXNwbGF5PSAnZmxleCc7XHJcbiAgfSlcclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxufSIsImltcG9ydCBtYW5pcHVsYXRpb25Gb3JtRGF0YSBmcm9tIFwiLi9tYW5pcHVsYXRpb25Gb3JtRGF0YVwiO1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEh0bWxGb3JtRGF0YSgpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZTtcclxuICBjb25zdCByYWRpb0ZpbmlzaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmlzaGVkJyk7XHJcbiAgY29uc3QgcmFkaW9JblByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2dyZXNzJyk7XHJcbiAgY29uc3QgcmFkaW9DYW50U3RhcnRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNubycpO1xyXG4gIGNvbnN0IG5vdGVEb2N1bWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcclxuICBjb25zdCBub3RlVGV4dCA9IG5vdGVEb2N1bWVudC52YWx1ZTtcclxuICAgIGxldCBzaG93RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNob3dFcnJvcilcclxuICAgIG1hbmlwdWxhdGlvbkZvcm1EYXRhKHJhZGlvRmluaXNoZWQsXHJcbiAgICByYWRpb0luUHJvZ3Jlc3MsIHJhZGlvQ2FudFN0YXJ0ZWQsIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzaG93RXJyb3IsIGR1ZURhdGUsIG5vdGVUZXh0KVxyXG4gIH1cclxuIiwiXG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBkaXNwbGF5QnV0dG9uIGZyb20gJy4vZGlzcGxheUJ1dHRvbnMuanMnO1xuaW1wb3J0IFRhc2tMaXN0cyBmcm9tICcuL2NyZWF0ZUNvbXBvbmVudHMuanMnO1xuaW1wb3J0IGdldEh0bWxGb3JtRGF0YSBmcm9tICcuL2Zvcm1EYXRhLmpzJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBkaXNwbGF5QnV0dG9uKCk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgIGdldEh0bWxGb3JtRGF0YSgpXG4gICAgVGFza0xpc3RzKCk7ICBcbiAgfSlcbiAgVGFza0xpc3RzKClcbiAgcmV0dXJuIG1haW47XG4gfVxuICAgIFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEFwcCgpKSBcbiB9KVxuIiwiaW1wb3J0IGNyZWF0ZU5ld1Rhc2sgZnJvbSBcIi4vY3JlYXRlTmV3VGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFuaXB1bGF0aW9uRm9ybURhdGEocmFkaW9GaW5pc2hlZCxcclxuICAgIHJhZGlvSW5Qcm9ncmVzcywgcmFkaW9DYW50U3RhcnRlZCwgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHNob3dFcnJvciwgZHVlRGF0ZSwgbm90ZVRleHQpIHtcclxuICAgIGxldCBzdGF0dXMgPSAnJztcclxuXHJcbiAgICAgaWYgKHJhZGlvRmluaXNoZWQuY2hlY2tlZCkge1xyXG4gICAgICBzdGF0dXMgPSAnQ29uY2x1aWRvISc7XHJcbiAgICB9IGVsc2UgaWYgKHJhZGlvSW5Qcm9ncmVzcy5jaGVja2VkKSB7XHJcbiAgICAgIHN0YXR1cyA9J0VtIFByb2dyZXNzby4uLidcclxuICAgIH0gZWxzZSBpZiAocmFkaW9DYW50U3RhcnRlZC5jaGVja2VkKSB7XHJcbiAgICAgIHN0YXR1cyA9IGBQZW5kZW50ZWA7XHJcbiAgICB9XHJcbiAgIFxyXG4gICBpZiAodGl0bGUgPT09ICcnIHx8ICFpc05hTiAmJiBkZXNjcmlwdGlvbiA9PT0gJycgfHxcclxuICAgICAgIWlzTmFOICYmIHByaW9yaXR5ID09PSAnJyAmJiBkdWVEYXRlID09PSAnJyAmJlxyXG4gICAgICBub3RlVGV4dCA9PT0gJycgfHwgIWlzTmFOKSB7XHJcbiAgICAgIHNob3dFcnJvci50ZXh0Q29udGVudCA9ICdEZXZlIHByZWVuY2hlciB0b2RvcyBvcyBjYW1wb3MgcGFyYSBndWFyZGFyIGEgdGFyZWZhISc7XHJcbiAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcjZjAwJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcnO1xyXG4gICAgICB9LCAzMDAwKSBcclxuICAgIH0gZWxzZSBpZiAodGl0bGUgPT09ICcnIHx8ICFpc05hTikge1xyXG4gICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnRGV2ZSBwcmVlbmNoZXIgbyBjYW1wbyB0aXR1bG8gcGFyYSBndWFyZGFyIGEgdGFyZWZhISc7XHJcbiAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcjZjAwJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlY2VjJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJyc7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH0gZWxzZSBpZiggZGVzY3JpcHRpb24gPT09ICcnIHx8XHJcbiAgICAgICFpc05hTikge1xyXG4gICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnRGV2ZSBwcmVlbmNoZXIgbyBjYW1wbyBkZXNjcmljYW8gcGFyYSBndWFyZGFyIGEgdGFyZWZhISc7XHJcbiAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcjZjAwJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlY2VjJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJyc7XHJcbiAgICAgIH0sIDMwMDApOyBcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnJykge1xyXG4gICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnRGV2ZSBzZWxlY2lvbmFyIGEgcHJpb3JpZGFkZSBwYXJhIGd1YXJkYXIgYSB0YXJlZmEhJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyNmMDAnO1xyXG4gICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2VjZWMnO1xyXG4gICAgICBzaG93RXJyb3Iuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93RXJyb3Iuc3R5bGUuY29sb3IgPSAnJztcclxuICAgICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnJztcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIGlmIChkdWVEYXRlID09PSAnJykge1xyXG4gICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnVm9jZSBuYW8gZXNjb2xoZXUgYSBkYXRhIGRlIGV4ZWN1Y2FvJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyNmMDAnO1xyXG4gICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2VjZWMnO1xyXG4gICAgICBzaG93RXJyb3Iuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBzaG93RXJyb3Iuc3R5bGUuY29sb3IgPSAnJztcclxuICAgICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnJztcclxuICAgICAgfSwgMzAwMCk7IFxyXG4gICAgICByZXR1cm5cclxuICAgIH0gZWxzZSBpZiAobm90ZVRleHQgPT09ICcnIHx8ICFpc05hTikge1xyXG4gICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnRGV2ZSBhZGljaW9uYXIgdW1hIG5vdGEgcGFyYSBndWFyZGFyIGEgdGFyZWZhISc7XHJcbiAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcjZjAwJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlY2VjJztcclxuICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJyc7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICBjcmVhdGVOZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHN0YXR1cywgbm90ZVRleHQpO1xyXG4gICAgfVxyXG4gIH0iLCJmdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHN0YXR1cywgbm90ZXMpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMubm90ZXMgPSBub3Rlc1xyXG59XHJcblxyXG5Ub2RvLnByb3RvdHlwZS50YXNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcclxuICAgICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGUsXHJcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICBub3RlczogdGhpcy5ub3Rlc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBteUxpc3QgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gVG9kbywgbXlMaXN0XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=