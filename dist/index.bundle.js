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
    background-color: #fff;
    max-width: 400px;
    padding: 10px;
    box-sizing: border-box;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #fcfafa;
    display: flex;
    justify-content: space-between;
}

h3 {
    padding: 0;
    margin: 0;
}


.list {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #fffefe;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px #ececec;
    position: absolute;
    left: 30px;

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

.note {
    display: none;
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
    transform: translateX(-50%);
    left: 50%;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    transition: background-color 1s ease-out;
}

label {
    margin: 10px;
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
    width: max(700px, 320px);
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

.favDialog::backdrop {
   
}

#add-task {
    font-size: 16px;
    color: #c40909;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-right: 20px;
    padding: 10px;
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
}

.show-myNotes {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fffefe;
    position: absolute;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #ececec;

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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background-color: #fffefe;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-areas: 'aside main';\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 250px 1fr;\r\n}\r\n\r\n.invisible {\r\n    background-color: #ececec;\r\n    display: none;\r\n    height: 100vh;\r\n    padding: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.container-aside {\r\n    margin-top: 30px;\r\n    padding: 20px 10px;\r\n}\r\n\r\n\r\n#show-aside {\r\n    margin: 20px;\r\n}\r\n\r\n#show-aside, #close-aside {\r\n    background-color: transparent;\r\n    transition: background-color 1s ease-out;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n\r\n#show-aside:hover,\r\n#close-aside:hover {\r\n    background-color: #fcfafa;\r\n}\r\n\r\n.btn-aside {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 0;\r\n    padding-left: 20px;\r\n}\r\n\r\n.main {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #fffefe;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.width-main {\r\n    width: calc(100vw - 400px);\r\n    box-sizing: border-box;\r\n    background-color: #fffefe;\r\n}\r\n\r\n.container {\r\n    background-color: #fff;\r\n    max-width: 400px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    margin: 30px auto;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px 2px #fcfafa;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nh3 {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.list {\r\n    display: none;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n    background-color: #fffefe;\r\n    max-width: 400px;\r\n    border-radius: 15px;\r\n    box-shadow: 2px 2px 2px 2px #ececec;\r\n    position: absolute;\r\n    left: 30px;\r\n\r\n}\r\n\r\n.new-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    max-width: 460px;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\np, h4 {\r\n   margin: 0;\r\n}\r\n\r\nh4 {\r\n    border-bottom: solid 2px green;\r\n    width: fit-content;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\np{\r\n    line-height: 1.4rem;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    align-items: center;\r\n    margin-right: 30px;\r\n}\r\n\r\nli {\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    text-align: justify;\r\n    list-style: none;\r\n}\r\n\r\n.note {\r\n    display: none;\r\n}\r\n\r\n.show-note {\r\n    display: block;\r\n    font-size: 14px;\r\n}\r\n\r\n.cont-btn {\r\n    max-width: 800px;\r\n    left: 20vw;\r\n    margin: auto;\r\n}\r\n\r\n#show-button {\r\n    border: none;\r\n    background-color: transparent;\r\n    color: #c40909;\r\n    transition: color 500ms ease-in-out;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 30px;\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    transition: background-color 1s ease-out;\r\n}\r\n\r\nlabel {\r\n    margin: 10px;\r\n}\r\n\r\n.button {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    border: solid .8px #ececec;\r\n}\r\n\r\n#close {\r\n    align-self: flex-end;\r\n}\r\n\r\n.min-container {\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n}\r\n\r\n.content {\r\n    background-color: #ececec;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    resize: vertical;\r\n    overflow: auto;\r\n}\r\n.btn {\r\n    padding: 10px 25px;\r\n    border: none;\r\n    background-color: #e76011;\r\n    margin-left: 35px;\r\n    color: #fcfafa;\r\n    border-radius: 5px;\r\n    font-size: 16px;\r\n    box-shadow: 2px 2px 2px #b88263;\r\n    cursor: pointer;\r\n}\r\n\r\n#show-label {\r\n    margin-right: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n#show-button:hover {\r\n    color: #ff0000;\r\n}\r\n\r\n.inputs, select {\r\n    display: block;\r\n}\r\n\r\n#priority,\r\n#dueDate {\r\n    border: solid .6px #fcfafa;\r\n    box-shadow: 1px 1px 1px #ececec;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    background-color: #fcfafa;\r\n    outline: solid .4px #ececec;\r\n    padding: 3px;\r\n    transition: background-color 1s ease-out;\r\n    margin-right: 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n#priority:hover {\r\n    background-color: #fffefe;\r\n}\r\n\r\n.inputs {\r\n    padding: 10px;\r\n    width: max(700px, 320px);\r\n    margin: 5px 0;\r\n    border: none;\r\n    outline: none;\r\n    background-color: #fcfafa;\r\n    border-radius: 5px;\r\n}\r\n\r\n.mybtns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 25px;\r\n}\r\n\r\n.favDialog::backdrop {\r\n   \r\n}\r\n\r\n#add-task {\r\n    font-size: 16px;\r\n    color: #c40909;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    margin-right: 20px;\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    transition: background-color 1s ease-out;\r\n}\r\n\r\n#add-task:hover, \r\n#show-button:hover {\r\n    background-color: #DDD;\r\n    width: max-content;\r\n}\r\n\r\n.show-label {\r\n    margin-right: 5px;\r\n}\r\n  \r\n\r\n.additional {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.hesNotes {\r\n    display: none;\r\n}\r\n\r\n.show-myNotes {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    background-color: #fffefe;\r\n    position: absolute;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px 2px #ececec;\r\n\r\n}\r\n\r\n.status-element {\r\n    text-align: center;\r\n    margin-top: 25px;\r\n\r\n}\r\n\r\n.flex-div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.finish, .pro, .no-now{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.done {\r\n    color: #0d8a0d;\r\n    padding: 5px;\r\n    background-color: #ececec;\r\n}\r\n\r\n.progress {\r\n    color: #e7e711;\r\n    padding: 5px;\r\n    background-color: #ececec;\r\n}\r\n\r\n.no {\r\n    color: #c40909;\r\n    padding: 5px;\r\n    background-color: #ececec;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_print_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_menu_red_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/menu-red.png */ "./src/icons/menu-red.png");
/* harmony import */ var _icons_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/menu.png */ "./src/icons/menu.png");
/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/dots.png */ "./src/icons/dots.png");
/* harmony import */ var _icons_note_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/note.png */ "./src/icons/note.png");
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/delete.png */ "./src/icons/delete.png");
/* harmony import */ var _icons_seenotes_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/seenotes.png */ "./src/icons/seenotes.png");
/* harmony import */ var _icons_close_red_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/close-red.png */ "./src/icons/close-red.png");
/* harmony import */ var _icons_plus_this_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/plus-this.png */ "./src/icons/plus-this.png");













function addDefaultTaskIfListEmpty() {
    if (_print_js__WEBPACK_IMPORTED_MODULE_0__.myList.length === 0) {
      const todo = new _print_js__WEBPACK_IMPORTED_MODULE_0__.Todo("Tarefa padrão",
        "Esta é uma tarefa padrão que pode ser removida pelo usuário",
        "Prioridade 6", "2024-04-09", "Não iniciado", "Estas são as notas incluídas na tarefa adicionada pelo usuário.");
        _print_js__WEBPACK_IMPORTED_MODULE_0__.myList.push(todo.todoList());
        const jsonList = JSON.stringify(_print_js__WEBPACK_IMPORTED_MODULE_0__.myList);
        localStorage.setItem('todoList', jsonList);
    }
}

function App() {
  const add = document.querySelector('.btn');
  const main = document.querySelector('.main')
  const favDialog = document.querySelector('#favDialog');
  const closeButton = document.querySelector('#close');
  closeButton.innerHTML=`<img src=${_icons_close_red_png__WEBPACK_IMPORTED_MODULE_8__} alt='Close button'/>`
  const showButton = document.querySelector('#show-button');
  const notesBtn = document.querySelector('#cont-notes');
  notesBtn.innerHTML=`<img src=${_icons_dots_png__WEBPACK_IMPORTED_MODULE_4__} alt='Notes'/>`
  const noteDocument = document.querySelector('.hesNotes');
  const showAside = document.querySelector('#show-aside');
  const Aside = document.querySelector('.invisible');
  const closeAside = document.querySelector('#close-aside');
  const ShowLabel = document.querySelector('.show-label');
  ShowLabel.innerHTML = `<img src=${_icons_plus_this_png__WEBPACK_IMPORTED_MODULE_9__} alt='Plus icon'/>`
  const addTask = document.querySelector('#add-task');

  addTask.addEventListener('click', (e) => {
    e.preventDefault()
    favDialog.style.display = 'block';
  })

  let isMenuClosed = `<img src=${_icons_menu_red_png__WEBPACK_IMPORTED_MODULE_2__} alt='Open menu'/>`;
  let isMenuOpen = `<img src=${_icons_menu_png__WEBPACK_IMPORTED_MODULE_3__} alt='Open menu'/>`;
  closeAside.innerHTML=isMenuClosed
  showAside.innerHTML = isMenuOpen;
  showAside.addEventListener('click', (e) => {
    e.preventDefault();
    showAside.innerHTML = `
      <img src=${_icons_menu_png__WEBPACK_IMPORTED_MODULE_3__} alt='Close menu'/>`
    Aside.style.display = 'block';
    showAside.style.display='none'
  })

  closeAside.addEventListener('click', (e) => {
    e.preventDefault();
    Aside.style.display = 'none';
    showAside.style.display ='block'
  })
  addDefaultTaskIfListEmpty()
   
  notesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    noteDocument.classList.toggle('show-myNotes');
  })

  showButton.addEventListener('click', () => {
    favDialog.style.display= 'block';
  })

  closeButton.addEventListener('click', () => {
    favDialog.style.display= 'none';
  })

  function getLists() {
      const storedList = JSON.parse(localStorage.getItem('todoList'));
    if (storedList) {
         const existingTask = _print_js__WEBPACK_IMPORTED_MODULE_0__.myList.find(task => task.title === title);
    if (existingTask) {
        alert("Essa tarefa já existe!");
        return;
    }
        storedList.map((todo, index) => {
          const container = document.createElement('div');
          main.appendChild(container)
          container.classList.add('container');

          const minContainer = document.createElement('div');
          minContainer.classList.add('list');
          minContainer.id = index;
          main.appendChild(minContainer);

          const btnClose = document.createElement('button');
          btnClose.classList.add('button');
          btnClose.innerHTML = `<img src=${_icons_close_red_png__WEBPACK_IMPORTED_MODULE_8__} alt='Open menu'/>`;
          btnClose.style.cssText = `
          align-self: flex-end;
          border: none;
          margin: 0;
          padding: 0;`;
          minContainer.appendChild(btnClose)

          const ul = document.createElement('ul');
          minContainer.appendChild(ul)
          const content = document.createElement('div');
          content.classList.add('content');
          minContainer.appendChild(content);

          const myTitle = document.createElement('h3');
          myTitle.textContent = todo.title;
          container.appendChild(myTitle);

          const containerAside = document.createElement('div');
          containerAside.classList.add('container-aside');
          const newTitle = document.createElement('h4');
          newTitle.textContent = todo.title;
          containerAside.appendChild(newTitle);
          Aside.appendChild(containerAside)

          const showDetails = document.createElement('button');
          container.appendChild(showDetails);
          showDetails.innerHTML = `<img src=${_icons_dots_png__WEBPACK_IMPORTED_MODULE_4__} alt='Ver descricao'/>`;
          showDetails.classList.add('button');
          showDetails.style.cssText = `
          margin: 0;
          border: none;
          padding: 0;`

          showDetails.addEventListener('click', (e) => {
            e.preventDefault();
            minContainer.style.display = 'flex';
          })

          btnClose.addEventListener('click', (e) => {
            e.preventDefault();
             minContainer.style.display = 'none'
          })
          
          const titleDescription = document.createElement('h4');
          titleDescription.textContent = 'Descrição:';
          content.appendChild(titleDescription)
          const myDescription = document.createElement('p')
           content.appendChild(myDescription)
          myDescription.textContent = todo.description;
          
          const priorityLevel = document.createElement('li')
           ul.appendChild(priorityLevel)
          priorityLevel.textContent = todo.priority;

          const myDueDate = document.createElement('li');
           ul.appendChild(myDueDate)
          myDueDate.textContent = todo.dueDate;

          const myStatus = document.createElement('li');
           ul.appendChild(myStatus);
          myStatus.textContent = todo.status;
          
          if (todo.status === 'Concluido!') {
            myStatus.classList.add('done');
          } else if (todo.status === 'Em andamento...') {
            myStatus.classList.add('progress')
          } else {
            myStatus.classList.add('no')
          }

          const titleNote = document.createElement('h4');
          titleNote.textContent = 'Notas:';
          content.appendChild(titleNote)
          const myNotes = document.createElement('p');
           content.appendChild(myNotes);
          myNotes.textContent = todo.notes; 
          
         const removeButton = document.createElement('button');
          removeButton.innerHTML =`<img src=${_icons_delete_png__WEBPACK_IMPORTED_MODULE_6__} alt='Remover a tarefa'/>`;
          removeButton.classList.add('button');

          removeButton.addEventListener('click', (e) => {
      const indexToRemove = e.target.dataset.index;
       _print_js__WEBPACK_IMPORTED_MODULE_0__.myList.splice(indexToRemove, 1);
      localStorage.setItem('todoList', JSON.stringify(_print_js__WEBPACK_IMPORTED_MODULE_0__.myList));
      e.target.closest('.container').remove();
          });
          const newContainer = document.createElement('div');
          newContainer.classList.add('new-container');
          minContainer.appendChild(newContainer)
          newContainer.appendChild(ul); 
          newContainer.appendChild(removeButton);
         
        })
        
      }
    }
  
  add.addEventListener('click', (e) => {
    e.preventDefault()
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const priority = document.querySelector('#priority').value;
  const dueDate = document.querySelector('#dueDate').value;
  const radioFinished = document.querySelector('#finished');
  const radioInProgress = document.querySelector('#progress');
    const radioCantStarted = document.querySelector('#no');
    const form = document.querySelector('form')
    const noteText = noteDocument.value;
    let showError = document.createElement('p');
    form.appendChild(showError)
    let status = '';
    
    if (radioFinished.checked) {
      status = 'Concluido!';
    } else if (radioInProgress.checked) {
      status ='Em andamento...'
    } else if (radioCantStarted.checked) {
      status = `Não iniciado`;
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
      }else {
      const todo = new _print_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, priority, dueDate, status, noteText);
      _print_js__WEBPACK_IMPORTED_MODULE_0__.myList.push(todo.todoList());
      const jsonList = JSON.stringify(_print_js__WEBPACK_IMPORTED_MODULE_0__.myList);
      localStorage.setItem('todoList', jsonList);
    }
    getLists();  
  })
  getLists()
  const date = document.createElement('p');
  main.appendChild(date)
  return main;
 }
    
document.addEventListener('DOMContentLoaded', () => {
 document.body.appendChild(App()) 
 })


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

Todo.prototype.todoList = function () {
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

/***/ "./src/icons/note.png":
/*!****************************!*\
  !*** ./src/icons/note.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9adb409be516b018aa49.png";

/***/ }),

/***/ "./src/icons/plus-this.png":
/*!*********************************!*\
  !*** ./src/icons/plus-this.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d622ac9f8f3c121fc2a0.png";

/***/ }),

/***/ "./src/icons/seenotes.png":
/*!********************************!*\
  !*** ./src/icons/seenotes.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "772bf385f7b866f57634.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxnQ0FBZ0Msa0NBQWtDLGtCQUFrQiwrQkFBK0Isc0JBQXNCLDBDQUEwQyxnQ0FBZ0MseUNBQXlDLEtBQUssb0JBQW9CLGtDQUFrQyxzQkFBc0Isc0JBQXNCLHNCQUFzQixrQkFBa0IsS0FBSywwQkFBMEIseUJBQXlCLDJCQUEyQixLQUFLLHlCQUF5QixxQkFBcUIsS0FBSyxtQ0FBbUMsc0NBQXNDLGlEQUFpRCx3QkFBd0IscUJBQXFCLEtBQUssa0RBQWtELGtDQUFrQyxLQUFLLG9CQUFvQixzQkFBc0IsdUNBQXVDLDRCQUE0Qix3QkFBd0Isa0JBQWtCLGdCQUFnQiwyQkFBMkIsS0FBSyxlQUFlLHFCQUFxQixzQkFBc0Isa0NBQWtDLCtCQUErQixLQUFLLHFCQUFxQixtQ0FBbUMsK0JBQStCLGtDQUFrQyxLQUFLLG9CQUFvQiwrQkFBK0IseUJBQXlCLHNCQUFzQiwrQkFBK0IsMEJBQTBCLDRCQUE0Qiw0Q0FBNEMsc0JBQXNCLHVDQUF1QyxLQUFLLFlBQVksbUJBQW1CLGtCQUFrQixLQUFLLG1CQUFtQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0Msc0JBQXNCLGtDQUFrQyx5QkFBeUIsNEJBQTRCLDRDQUE0QywyQkFBMkIsbUJBQW1CLFNBQVMsd0JBQXdCLHNCQUFzQix1Q0FBdUMsNEJBQTRCLHlCQUF5QixtQkFBbUIseUJBQXlCLEtBQUssZUFBZSxpQkFBaUIsS0FBSyxZQUFZLHVDQUF1QywyQkFBMkIsNEJBQTRCLHlCQUF5QixLQUFLLFVBQVUsNEJBQTRCLEtBQUssWUFBWSxzQkFBc0IsdUNBQXVDLG1CQUFtQiw0QkFBNEIsMkJBQTJCLEtBQUssWUFBWSwyQkFBMkIsc0JBQXNCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLHlCQUF5QixLQUFLLGVBQWUsc0JBQXNCLEtBQUssb0JBQW9CLHVCQUF1Qix3QkFBd0IsS0FBSyxtQkFBbUIseUJBQXlCLG1CQUFtQixxQkFBcUIsS0FBSyxzQkFBc0IscUJBQXFCLHNDQUFzQyx1QkFBdUIsNENBQTRDLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixrQkFBa0Isb0NBQW9DLGtCQUFrQix3QkFBd0Isd0JBQXdCLHNCQUFzQixpREFBaUQsS0FBSyxlQUFlLHFCQUFxQixLQUFLLGlCQUFpQixzQ0FBc0MscUJBQXFCLHdCQUF3QiwyQkFBMkIsbUNBQW1DLEtBQUssZ0JBQWdCLDZCQUE2QixLQUFLLHdCQUF3QixxQkFBcUIsOEJBQThCLHNDQUFzQyxLQUFLLGtCQUFrQixrQ0FBa0MsNEJBQTRCLHNCQUFzQix5QkFBeUIsdUJBQXVCLEtBQUssVUFBVSwyQkFBMkIscUJBQXFCLGtDQUFrQywwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLHdCQUF3QixLQUFLLHFCQUFxQiwwQkFBMEIsd0JBQXdCLEtBQUssNEJBQTRCLHVCQUF1QixLQUFLLHlCQUF5Qix1QkFBdUIsS0FBSyxnQ0FBZ0MsbUNBQW1DLHdDQUF3QywyQkFBMkIsd0JBQXdCLGtDQUFrQyxvQ0FBb0MscUJBQXFCLGlEQUFpRCwyQkFBMkIseUJBQXlCLEtBQUsseUJBQXlCLGtDQUFrQyxLQUFLLGlCQUFpQixzQkFBc0IsaUNBQWlDLHNCQUFzQixxQkFBcUIsc0JBQXNCLGtDQUFrQywyQkFBMkIsS0FBSyxpQkFBaUIsc0JBQXNCLGtDQUFrQyx5QkFBeUIsS0FBSyw4QkFBOEIsWUFBWSxtQkFBbUIsd0JBQXdCLHVCQUF1Qix3QkFBd0Isc0NBQXNDLHFCQUFxQiwyQkFBMkIsc0JBQXNCLHNCQUFzQixvQ0FBb0MsNEJBQTRCLGlEQUFpRCxLQUFLLGlEQUFpRCwrQkFBK0IsMkJBQTJCLEtBQUsscUJBQXFCLDBCQUEwQixLQUFLLDJCQUEyQixzQkFBc0IsNEJBQTRCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsK0JBQStCLHNCQUFzQixrQ0FBa0MsMkJBQTJCLDRCQUE0Qiw0Q0FBNEMsU0FBUyx5QkFBeUIsMkJBQTJCLHlCQUF5QixTQUFTLG1CQUFtQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixLQUFLLCtCQUErQixzQkFBc0IsZ0NBQWdDLDRCQUE0QiwwQkFBMEIsS0FBSyxtQkFBbUIsdUJBQXVCLHFCQUFxQixrQ0FBa0MsS0FBSyxtQkFBbUIsdUJBQXVCLHFCQUFxQixrQ0FBa0MsS0FBSyxhQUFhLHVCQUF1QixxQkFBcUIsa0NBQWtDLEtBQUssbUJBQW1CO0FBQ3R1UztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUM5VjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1owQztBQUNTO0FBQy9CO0FBQ3lCO0FBQ1Q7QUFDQTtBQUNLO0FBQ0Q7QUFDSTtBQUNFO0FBQ0Q7O0FBRTdDO0FBQ0EsUUFBUSw2Q0FBTTtBQUNkLHVCQUF1QiwyQ0FBSTtBQUMzQjtBQUNBO0FBQ0EsUUFBUSw2Q0FBTTtBQUNkLHdDQUF3Qyw2Q0FBTTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpREFBUyxFQUFFO0FBQy9DO0FBQ0E7QUFDQSxpQ0FBaUMsNENBQUksRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFRLEVBQUU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxpQ0FBaUMsZ0RBQVMsRUFBRTtBQUM1QywrQkFBK0IsNENBQUksRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRDQUFJLEVBQUU7QUFDdkI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxpREFBUyxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLDRDQUFJLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsOENBQU0sRUFBRTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsT0FBTyw2Q0FBTTtBQUNiLHNEQUFzRCw2Q0FBTTtBQUM1RDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLHVCQUF1QiwyQ0FBSTtBQUMzQixNQUFNLDZDQUFNO0FBQ1osc0NBQXNDLDZDQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7QUNsVEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXNpZGUgbWFpbic7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xyXG59XHJcblxyXG4uaW52aXNpYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYXNpZGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG5cclxuXHJcbiNzaG93LWFzaWRlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuI3Nob3ctYXNpZGUsICNjbG9zZS1hc2lkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNzaG93LWFzaWRlOmhvdmVyLFxyXG4jY2xvc2UtYXNpZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcclxufVxyXG5cclxuLmJ0bi1hc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLndpZHRoLW1haW4ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MDBweCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNmY2ZhZmE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlY2VjZWM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5cclxuLm5ldy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbnAsIGg0IHtcclxuICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggZ3JlZW47XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxucHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxubGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm5vdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3ctbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnQtYnRuIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBsZWZ0OiAyMHZ3O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jc2hvdy1idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2M0MDkwOTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIC44cHggI2VjZWNlYztcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ubWluLWNvbnRhaW5lciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NjAxMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNmY2ZhZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjYjg4MjYzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc2hvdy1sYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI3Nob3ctYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcblxyXG4uaW5wdXRzLCBzZWxlY3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNwcmlvcml0eSxcclxuI2R1ZURhdGUge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAuNnB4ICNmY2ZhZmE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZWNlY2VjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcclxuICAgIG91dGxpbmU6IHNvbGlkIC40cHggI2VjZWNlYztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4jcHJpb3JpdHk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcclxufVxyXG5cclxuLmlucHV0cyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IG1heCg3MDBweCwgMzIwcHgpO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXlidG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmZhdkRpYWxvZzo6YmFja2Ryb3Age1xyXG4gICBcclxufVxyXG5cclxuI2FkZC10YXNrIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjYzQwOTA5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4jYWRkLXRhc2s6aG92ZXIsIFxyXG4jc2hvdy1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnNob3ctbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuICBcclxuXHJcbi5hZGRpdGlvbmFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVzTm90ZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3ctbXlOb3RlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZWNlY2VjO1xyXG5cclxufVxyXG5cclxuLnN0YXR1cy1lbGVtZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG59XHJcblxyXG4uZmxleC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpbmlzaCwgLnBybywgLm5vLW5vd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcbi5kb25lIHtcclxuICAgIGNvbG9yOiAjMGQ4YTBkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGNvbG9yOiAjZTdlNzExO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufVxyXG5cclxuLm5vIHtcclxuICAgIGNvbG9yOiAjYzQwOTA5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw4QkFBOEI7QUFD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QTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXNpZGUgbWFpbic7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hc2lkZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3Nob3ctYXNpZGUge1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWFzaWRlLCAjY2xvc2UtYXNpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLW91dDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWFzaWRlOmhvdmVyLFxcclxcbiNjbG9zZS1hc2lkZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZhZmE7XFxyXFxufVxcclxcblxcclxcbi5idG4tYXNpZGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ud2lkdGgtbWFpbiB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDAwcHgpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZmNmYWZhO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2VjZWNlYztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NjBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxucCwgaDQge1xcclxcbiAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggZ3JlZW47XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1ub3RlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtYnRuIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbGVmdDogMjB2dztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1idXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogI2M0MDkwOTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIC44cHggI2VjZWNlYztcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5taW4tY29udGFpbmVyIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzYwMTE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcclxcbiAgICBjb2xvcjogI2ZjZmFmYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICNiODgyNjM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctbGFiZWwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1idXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0cywgc2VsZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eSxcXHJcXG4jZHVlRGF0ZSB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgLjZweCAjZmNmYWZhO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZWNlY2VjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcXHJcXG4gICAgb3V0bGluZTogc29saWQgLjRweCAjZWNlY2VjO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0cyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiBtYXgoNzAwcHgsIDMyMHB4KTtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZhO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5teWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmF2RGlhbG9nOjpiYWNrZHJvcCB7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6ICNjNDA5MDk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazpob3ZlciwgXFxyXFxuI3Nob3ctYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1sYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG4gIFxcclxcblxcclxcbi5hZGRpdGlvbmFsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlc05vdGVzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctbXlOb3RlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlY2VjZWM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zdGF0dXMtZWxlbWVudCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2gsIC5wcm8sIC5uby1ub3d7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRvbmUge1xcclxcbiAgICBjb2xvcjogIzBkOGEwZDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3Mge1xcclxcbiAgICBjb2xvcjogI2U3ZTcxMTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8ge1xcclxcbiAgICBjb2xvcjogI2M0MDkwOTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyBUb2RvLCBteUxpc3QgfSBmcm9tICcuL3ByaW50LmpzJztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG1lbnVDbG9zZSBmcm9tICcuL2ljb25zL21lbnUtcmVkLnBuZyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL2ljb25zL21lbnUucG5nJztcbmltcG9ydCBEb3RzIGZyb20gJy4vaWNvbnMvZG90cy5wbmcnO1xuaW1wb3J0IE5vdGVzSWNvbiBmcm9tICcuL2ljb25zL25vdGUucG5nJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi9pY29ucy9kZWxldGUucG5nJztcbmltcG9ydCBzaG93Tm90ZSBmcm9tICcuL2ljb25zL3NlZW5vdGVzLnBuZyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4vaWNvbnMvY2xvc2UtcmVkLnBuZyc7XG5pbXBvcnQgUGx1c1RoaXMgZnJvbSAnLi9pY29ucy9wbHVzLXRoaXMucG5nJztcblxuZnVuY3Rpb24gYWRkRGVmYXVsdFRhc2tJZkxpc3RFbXB0eSgpIHtcbiAgICBpZiAobXlMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFwiVGFyZWZhIHBhZHLDo29cIixcbiAgICAgICAgXCJFc3RhIMOpIHVtYSB0YXJlZmEgcGFkcsOjbyBxdWUgcG9kZSBzZXIgcmVtb3ZpZGEgcGVsbyB1c3XDoXJpb1wiLFxuICAgICAgICBcIlByaW9yaWRhZGUgNlwiLCBcIjIwMjQtMDQtMDlcIiwgXCJOw6NvIGluaWNpYWRvXCIsIFwiRXN0YXMgc8OjbyBhcyBub3RhcyBpbmNsdcOtZGFzIG5hIHRhcmVmYSBhZGljaW9uYWRhIHBlbG8gdXN1w6FyaW8uXCIpO1xuICAgICAgICBteUxpc3QucHVzaCh0b2RvLnRvZG9MaXN0KCkpO1xuICAgICAgICBjb25zdCBqc29uTGlzdCA9IEpTT04uc3RyaW5naWZ5KG15TGlzdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIGpzb25MaXN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICBjb25zdCBmYXZEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2RGlhbG9nJyk7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XG4gIGNsb3NlQnV0dG9uLmlubmVySFRNTD1gPGltZyBzcmM9JHtDbG9zZUljb259IGFsdD0nQ2xvc2UgYnV0dG9uJy8+YFxuICBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctYnV0dG9uJyk7XG4gIGNvbnN0IG5vdGVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnQtbm90ZXMnKTtcbiAgbm90ZXNCdG4uaW5uZXJIVE1MPWA8aW1nIHNyYz0ke0RvdHN9IGFsdD0nTm90ZXMnLz5gXG4gIGNvbnN0IG5vdGVEb2N1bWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXNOb3RlcycpO1xuICBjb25zdCBzaG93QXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1hc2lkZScpO1xuICBjb25zdCBBc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnZpc2libGUnKTtcbiAgY29uc3QgY2xvc2VBc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1hc2lkZScpO1xuICBjb25zdCBTaG93TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1sYWJlbCcpO1xuICBTaG93TGFiZWwuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7UGx1c1RoaXN9IGFsdD0nUGx1cyBpY29uJy8+YFxuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJyk7XG5cbiAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZmF2RGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9KVxuXG4gIGxldCBpc01lbnVDbG9zZWQgPSBgPGltZyBzcmM9JHttZW51Q2xvc2V9IGFsdD0nT3BlbiBtZW51Jy8+YDtcbiAgbGV0IGlzTWVudU9wZW4gPSBgPGltZyBzcmM9JHttZW51fSBhbHQ9J09wZW4gbWVudScvPmA7XG4gIGNsb3NlQXNpZGUuaW5uZXJIVE1MPWlzTWVudUNsb3NlZFxuICBzaG93QXNpZGUuaW5uZXJIVE1MID0gaXNNZW51T3BlbjtcbiAgc2hvd0FzaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0FzaWRlLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgc3JjPSR7bWVudX0gYWx0PSdDbG9zZSBtZW51Jy8+YFxuICAgIEFzaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNob3dBc2lkZS5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICB9KVxuXG4gIGNsb3NlQXNpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBBc2lkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNob3dBc2lkZS5zdHlsZS5kaXNwbGF5ID0nYmxvY2snXG4gIH0pXG4gIGFkZERlZmF1bHRUYXNrSWZMaXN0RW1wdHkoKVxuICAgXG4gIG5vdGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBub3RlRG9jdW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1teU5vdGVzJyk7XG4gIH0pXG5cbiAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmYXZEaWFsb2cuc3R5bGUuZGlzcGxheT0gJ2Jsb2NrJztcbiAgfSlcblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmYXZEaWFsb2cuc3R5bGUuZGlzcGxheT0gJ25vbmUnO1xuICB9KVxuXG4gIGZ1bmN0aW9uIGdldExpc3RzKCkge1xuICAgICAgY29uc3Qgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpO1xuICAgIGlmIChzdG9yZWRMaXN0KSB7XG4gICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2sgPSBteUxpc3QuZmluZCh0YXNrID0+IHRhc2sudGl0bGUgPT09IHRpdGxlKTtcbiAgICBpZiAoZXhpc3RpbmdUYXNrKSB7XG4gICAgICAgIGFsZXJ0KFwiRXNzYSB0YXJlZmEgasOhIGV4aXN0ZSFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgICAgIHN0b3JlZExpc3QubWFwKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICAgIGNvbnN0IG1pbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIG1pbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgICAgbWluQ29udGFpbmVyLmlkID0gaW5kZXg7XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtaW5Db250YWluZXIpO1xuXG4gICAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICBidG5DbG9zZS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICAgICAgICBidG5DbG9zZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtDbG9zZUljb259IGFsdD0nT3BlbiBtZW51Jy8+YDtcbiAgICAgICAgICBidG5DbG9zZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtgO1xuICAgICAgICAgIG1pbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5DbG9zZSlcblxuICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBtaW5Db250YWluZXIuYXBwZW5kQ2hpbGQodWwpXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgICAgICAgIG1pbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgICAgIGNvbnN0IG15VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgIG15VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteVRpdGxlKTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY29udGFpbmVyQXNpZGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWFzaWRlJyk7XG4gICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgICBjb250YWluZXJBc2lkZS5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgICAgQXNpZGUuYXBwZW5kQ2hpbGQoY29udGFpbmVyQXNpZGUpXG5cbiAgICAgICAgICBjb25zdCBzaG93RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93RGV0YWlscyk7XG4gICAgICAgICAgc2hvd0RldGFpbHMuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7RG90c30gYWx0PSdWZXIgZGVzY3JpY2FvJy8+YDtcbiAgICAgICAgICBzaG93RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICAgICAgICBzaG93RGV0YWlscy5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtgXG5cbiAgICAgICAgICBzaG93RGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtaW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIG1pbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB0aXRsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICB0aXRsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyacOnw6NvOic7XG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZURlc2NyaXB0aW9uKVxuICAgICAgICAgIGNvbnN0IG15RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChteURlc2NyaXB0aW9uKVxuICAgICAgICAgIG15RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWwpXG4gICAgICAgICAgcHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG5cbiAgICAgICAgICBjb25zdCBteUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChteUR1ZURhdGUpXG4gICAgICAgICAgbXlEdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgICAgICAgY29uc3QgbXlTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChteVN0YXR1cyk7XG4gICAgICAgICAgbXlTdGF0dXMudGV4dENvbnRlbnQgPSB0b2RvLnN0YXR1cztcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAodG9kby5zdGF0dXMgPT09ICdDb25jbHVpZG8hJykge1xuICAgICAgICAgICAgbXlTdGF0dXMuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9kby5zdGF0dXMgPT09ICdFbSBhbmRhbWVudG8uLi4nKSB7XG4gICAgICAgICAgICBteVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcycpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG15U3RhdHVzLmNsYXNzTGlzdC5hZGQoJ25vJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0aXRsZU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgIHRpdGxlTm90ZS50ZXh0Q29udGVudCA9ICdOb3RhczonO1xuICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVOb3RlKVxuICAgICAgICAgIGNvbnN0IG15Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXlOb3Rlcyk7XG4gICAgICAgICAgbXlOb3Rlcy50ZXh0Q29udGVudCA9IHRvZG8ubm90ZXM7IFxuICAgICAgICAgIFxuICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgcmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9YDxpbWcgc3JjPSR7RGVsZXRlfSBhbHQ9J1JlbW92ZXIgYSB0YXJlZmEnLz5gO1xuICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcblxuICAgICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICBteUxpc3Quc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkobXlMaXN0KSk7XG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCcuY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgbmV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldy1jb250YWluZXInKTtcbiAgICAgICAgICBtaW5Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKVxuICAgICAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7IFxuICAgICAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgXG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlO1xuICBjb25zdCByYWRpb0ZpbmlzaGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmlzaGVkJyk7XG4gIGNvbnN0IHJhZGlvSW5Qcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzcycpO1xuICAgIGNvbnN0IHJhZGlvQ2FudFN0YXJ0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm8nKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG4gICAgY29uc3Qgbm90ZVRleHQgPSBub3RlRG9jdW1lbnQudmFsdWU7XG4gICAgbGV0IHNob3dFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNob3dFcnJvcilcbiAgICBsZXQgc3RhdHVzID0gJyc7XG4gICAgXG4gICAgaWYgKHJhZGlvRmluaXNoZWQuY2hlY2tlZCkge1xuICAgICAgc3RhdHVzID0gJ0NvbmNsdWlkbyEnO1xuICAgIH0gZWxzZSBpZiAocmFkaW9JblByb2dyZXNzLmNoZWNrZWQpIHtcbiAgICAgIHN0YXR1cyA9J0VtIGFuZGFtZW50by4uLidcbiAgICB9IGVsc2UgaWYgKHJhZGlvQ2FudFN0YXJ0ZWQuY2hlY2tlZCkge1xuICAgICAgc3RhdHVzID0gYE7Do28gaW5pY2lhZG9gO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgIWlzTmFOICYmIGRlc2NyaXB0aW9uID09PSAnJyB8fFxuICAgICAgIWlzTmFOICYmIHByaW9yaXR5ID09PSAnJyAmJiBkdWVEYXRlID09PSAnJyAmJlxuICAgICAgbm90ZVRleHQgPT09ICcnIHx8ICFpc05hTikge1xuICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJ0RldmUgcHJlZW5jaGVyIHRvZG9zIG9zIGNhbXBvcyBwYXJhIGd1YXJkYXIgYSB0YXJlZmEhJztcbiAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcjZjAwJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcnO1xuICAgICAgfSwgMzAwMCkgXG4gICAgfSBlbHNlIGlmICh0aXRsZSA9PT0gJycgfHwgIWlzTmFOKSB7XG4gICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnRGV2ZSBwcmVlbmNoZXIgbyBjYW1wbyB0aXR1bG8gcGFyYSBndWFyZGFyIGEgdGFyZWZhISc7XG4gICAgICBzaG93RXJyb3Iuc3R5bGUuY29sb3IgPSAnI2YwMCc7XG4gICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2VjZWMnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnJztcbiAgICAgIH0sIDMwMDApO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmKCBkZXNjcmlwdGlvbiA9PT0gJycgfHxcbiAgICAgICFpc05hTikge1xuICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJ0RldmUgcHJlZW5jaGVyIG8gY2FtcG8gZGVzY3JpY2FvIHBhcmEgZ3VhcmRhciBhIHRhcmVmYSEnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyNmMDAnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlY2VjJztcbiAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJzVweCc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcnO1xuICAgICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJyc7XG4gICAgICB9LCAzMDAwKTsgXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnJykge1xuICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJ0RldmUgc2VsZWNpb25hciBhIHByaW9yaWRhZGUgcGFyYSBndWFyZGFyIGEgdGFyZWZhISc7XG4gICAgICBzaG93RXJyb3Iuc3R5bGUuY29sb3IgPSAnI2YwMCc7XG4gICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2VjZWMnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnJztcbiAgICAgIH0sIDMwMDApO1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChkdWVEYXRlID09PSAnJykge1xuICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJ1ZvY2UgbmFvIGVzY29saGV1IGEgZGF0YSBkZSBleGVjdWNhbyc7XG4gICAgICBzaG93RXJyb3Iuc3R5bGUuY29sb3IgPSAnI2YwMCc7XG4gICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2VjZWMnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnNXB4JztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgc2hvd0Vycm9yLnN0eWxlLnBhZGRpbmcgPSAnJztcbiAgICAgIH0sIDMwMDApOyBcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAobm90ZVRleHQgPT09ICcnIHx8ICFpc05hTikge1xuICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJ0RldmUgYWRpY2lvbmFyIHVtYSBub3RhIHBhcmEgZ3VhcmRhciBhIHRhcmVmYSEnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLmNvbG9yID0gJyNmMDAnO1xuICAgICAgc2hvd0Vycm9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlY2VjJztcbiAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJzVweCc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd0Vycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5jb2xvciA9ICcnO1xuICAgICAgICBzaG93RXJyb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHNob3dFcnJvci5zdHlsZS5wYWRkaW5nID0gJyc7XG4gICAgICB9LCAzMDAwKTtcbiAgICAgIHJldHVyblxuICAgICAgfWVsc2Uge1xuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHN0YXR1cywgbm90ZVRleHQpO1xuICAgICAgbXlMaXN0LnB1c2godG9kby50b2RvTGlzdCgpKTtcbiAgICAgIGNvbnN0IGpzb25MaXN0ID0gSlNPTi5zdHJpbmdpZnkobXlMaXN0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIGpzb25MaXN0KTtcbiAgICB9XG4gICAgZ2V0TGlzdHMoKTsgIFxuICB9KVxuICBnZXRMaXN0cygpXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgcmV0dXJuIG1haW47XG4gfVxuICAgIFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEFwcCgpKSBcbiB9KVxuIiwiZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBzdGF0dXMsIG5vdGVzKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXNcclxufVxyXG5cclxuVG9kby5wcm90b3R5cGUudG9kb0xpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGU6IHRoaXMuZHVlRGF0ZSxcclxuICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxyXG4gICAgICAgIG5vdGVzOiB0aGlzLm5vdGVzXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG15TGlzdCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiBUb2RvLCBteUxpc3RcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==