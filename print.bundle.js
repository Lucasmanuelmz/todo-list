(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["print"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBzdGF0dXMsIG5vdGVzKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXNcclxufVxyXG5cclxuVG9kby5wcm90b3R5cGUudGFzayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXHJcbiAgICAgICAgZHVlRGF0ZTogdGhpcy5kdWVEYXRlLFxyXG4gICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgbm90ZXM6IHRoaXMubm90ZXNcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbXlMaXN0ID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuIFRvZG8sIG15TGlzdFxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9