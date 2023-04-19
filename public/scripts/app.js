"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);
  var _super = _createSuper(IndecisionApp);
  function IndecisionApp(props) {
    var _this;
    _classCallCheck(this, IndecisionApp);
    _this = _super.call(this, props);
    _this.isOptionsValid = _this.isOptionsValid.bind(_assertThisInitialized(_this));
    _this.handleMakeDecision = _this.handleMakeDecision.bind(_assertThisInitialized(_this));
    _this.handleRemoveAllOptions = _this.handleRemoveAllOptions.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: ['Option 1', 'Option 2', 'Option 3']
    };
    return _this;
  }
  _createClass(IndecisionApp, [{
    key: "isOptionsValid",
    value: function isOptionsValid() {
      return this.state.options && this.state.options.length > 0;
    }
  }, {
    key: "handleMakeDecision",
    value: function handleMakeDecision() {
      console.log('> handleMakeDecision');
      if (this.isOptionsValid()) {
        var pickIndex = Math.floor(Math.random() * this.state.options.length);
        var option = this.state.options[pickIndex];
        alert(option);
      }
    }
  }, {
    key: "handleRemoveAllOptions",
    value: function handleRemoveAllOptions() {
      console.log('> handleRemoveAllOptions');
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      console.log('> handleAddOption', option);
      this.setState(function (prev) {
        var newOptions = prev.options;
        newOptions.push(option);
        return {
          options: newOptions
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Action, {
        isOptionsValid: this.isOptionsValid(),
        handleMakeDecision: this.handleMakeDecision
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleRemoveAllOptions: this.handleRemoveAllOptions
      }), /*#__PURE__*/React.createElement(OptionForm, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);
  return IndecisionApp;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  var _super2 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super2.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App"), /*#__PURE__*/React.createElement("h2", null, "Put your life in the hands of a computer?"));
    }
  }]);
  return Header;
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component3) {
  _inherits(Action, _React$Component3);
  var _super3 = _createSuper(Action);
  function Action(props) {
    _classCallCheck(this, Action);
    return _super3.call(this, props);
  }
  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        disabled: !this.props.isOptionsValid,
        onClick: this.props.handleMakeDecision
      }, "What should I do?"));
    }
  }]);
  return Action;
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component4) {
  _inherits(Options, _React$Component4);
  var _super4 = _createSuper(Options);
  function Options() {
    _classCallCheck(this, Options);
    return _super4.apply(this, arguments);
  }
  _createClass(Options, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here are your options:"), /*#__PURE__*/React.createElement("div", null, this.props.options.map(function (option) {
        return /*#__PURE__*/React.createElement(Option, {
          key: option,
          option: option
        });
      })), /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handleRemoveAllOptions
      }, "Remove All"), /*#__PURE__*/React.createElement("p", null, "No options"));
    }
  }]);
  return Options;
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component5) {
  _inherits(Option, _React$Component5);
  var _super5 = _createSuper(Option);
  function Option() {
    _classCallCheck(this, Option);
    return _super5.apply(this, arguments);
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.option);
    }
  }]);
  return Option;
}(React.Component);
var OptionForm = /*#__PURE__*/function (_React$Component6) {
  _inherits(OptionForm, _React$Component6);
  var _super6 = _createSuper(OptionForm);
  function OptionForm(props) {
    var _this2;
    _classCallCheck(this, OptionForm);
    _this2 = _super6.call(this, props);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(OptionForm, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var optionValue = e.target.elements.option.value.trim();
      if (optionValue) {
        this.props.handleAddOption(optionValue);
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);
  return OptionForm;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
