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
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: []
    };
    return _this;
  }
  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('IndecisionApp', 'componentDidMount');
      try {
        var optionsJson = localStorage.getItem('options');
        var options = JSON.parse(optionsJson);
        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (ex) {
        // Do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('IndecisionApp', 'componentDidUpdate');
      if (prevState.options.length !== this.state.options.length) {
        localStorage.setItem('options', JSON.stringify(this.state.options));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('IndecisionApp', 'componentWillUnmount');
    }
  }, {
    key: "isOptionsValid",
    value: function isOptionsValid() {
      return this.state.options && this.state.options.length > 0;
    }
  }, {
    key: "handleMakeDecision",
    value: function handleMakeDecision() {
      if (this.isOptionsValid()) {
        var pickIndex = Math.floor(Math.random() * this.state.options.length);
        var option = this.state.options[pickIndex];
        alert(option);
      }
    }
  }, {
    key: "handleRemoveAllOptions",
    value: function handleRemoveAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      // Validate
      if (!option) {
        return 'Option should be not empty.';
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option \"".concat(option, "\" exists.");
      }
      // Set State
      this.setState(function (prev) {
        return {
          options: prev.options.concat(option)
        };
      });
    }
  }, {
    key: "handleRemoveOption",
    value: function handleRemoveOption(optionToRemove) {
      if (optionToRemove && this.state.options.indexOf(optionToRemove) > -1) {
        this.setState(function (prev) {
          return {
            options: prev.options.filter(function (option) {
              return optionToRemove !== option;
            })
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Action, {
        isOptionsValid: this.isOptionsValid(),
        handleMakeDecision: this.handleMakeDecision
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleRemoveAllOptions: this.handleRemoveAllOptions,
        handleRemoveOption: this.handleRemoveOption
      }), /*#__PURE__*/React.createElement(OptionForm, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);
  return IndecisionApp;
}(React.Component);
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("h2", null, "Put your life in the hands of a computer?"));
};
Header.defaultProps = {
  title: "Indecision App"
};
var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.isOptionsValid,
    onClick: props.handleMakeDecision
  }, "What should I do?"));
};
var Options = function Options(props) {
  if (props.options.length > 0) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here are your options:"), /*#__PURE__*/React.createElement("div", null, props.options.map(function (option) {
      return /*#__PURE__*/React.createElement(Option, {
        key: option,
        option: option,
        handleRemoveOption: props.handleRemoveOption
      });
    })), /*#__PURE__*/React.createElement("button", {
      onClick: props.handleRemoveAllOptions
    }, "Remove All"));
  } else {
    return /*#__PURE__*/React.createElement("p", null, "No options");
  }
};
var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, props.option, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.handleRemoveOption(props.option);
    }
  }, "remove"));
};
var OptionForm = /*#__PURE__*/function (_React$Component2) {
  _inherits(OptionForm, _React$Component2);
  var _super2 = _createSuper(OptionForm);
  function OptionForm(props) {
    var _this2;
    _classCallCheck(this, OptionForm);
    _this2 = _super2.call(this, props);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ''
    };
    return _this2;
  }
  _createClass(OptionForm, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      e.target.elements.option.value = '';
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")), this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error));
    }
  }]);
  return OptionForm;
}(React.Component);
ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
