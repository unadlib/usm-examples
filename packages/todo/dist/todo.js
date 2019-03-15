"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTodoModule = generateTodoModule;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function generateTodoModule(Module, state, action, computed) {
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  var TodoList = (_class = (_temp =
  /*#__PURE__*/
  function (_Module) {
    _inherits(TodoList, _Module);

    function TodoList() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TodoList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TodoList)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initializerDefineProperty(_this, "a", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "b", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "count", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_this, "list", _descriptor4, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(TodoList, [{
      key: "increase",
      value: function increase(state) {
        state.a += 1;
      }
    }, {
      key: "add",
      value: function add(todo, state) {
        state.list.push(todo);
      }
    }, {
      key: "toggle",
      value: function toggle(index, state) {
        var todo = state.list[index];
        todo.completed = !todo.completed;
      }
    }, {
      key: "edit",
      value: function edit(text, index, state) {
        state.list[index].text = text;
      }
    }, {
      key: "remove",
      value: function remove(index, state) {
        state.list.splice(index, 1);
      }
    }, {
      key: "clearAllCompleted",
      value: function clearAllCompleted(state) {
        state.list = state.list.filter(function (_ref) {
          var completed = _ref.completed;
          return !completed;
        });
      }
    }]);

    return TodoList;
  }(Module), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "a", [state], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 1;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "b", [state], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 1;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "count", [computed], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      var _this2 = this;

      return [function () {
        return _this2.a;
      }, function () {
        return _this2.b;
      }, function (a, b) {
        console.log('count => computing');
        return a + b;
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "increase", [action], Object.getOwnPropertyDescriptor(_class.prototype, "increase"), _class.prototype), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "list", [state], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return [{
        text: 'test',
        completed: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "add", [action], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggle", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "edit", [action], Object.getOwnPropertyDescriptor(_class.prototype, "edit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "remove", [action], Object.getOwnPropertyDescriptor(_class.prototype, "remove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearAllCompleted", [action], Object.getOwnPropertyDescriptor(_class.prototype, "clearAllCompleted"), _class.prototype)), _class);
  return TodoList;
}