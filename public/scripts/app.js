"use strict";

console.log('App.js is running');
var data = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var handleAddOption = function handleAddOption(e) {
  var optionValue = e.target.elements.option.value;
  console.log('> handleAddOption', optionValue);
  e.preventDefault();
  if (optionValue) {
    data.options.push(optionValue);
    e.target.elements.option.value = '';
    renderApp();
  }
};
var handleRemoveAllOption = function handleRemoveAllOption(e) {
  console.log('> handleRemoveAllOption');
  data.options.splice(0, data.options.length);
  renderApp();
};
var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "This is JSX from app.js"), /*#__PURE__*/React.createElement("p", null, "Some info with options: ", data.options.length), data.options && data.options.length > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here are your options:"), /*#__PURE__*/React.createElement("ul", null, data.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  }))) : /*#__PURE__*/React.createElement("p", null, "No options"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAddOption
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("button", {
    onClick: handleRemoveAllOption
  }, "Remove All")));
  ReactDOM.render(template, appRoot);
};
renderApp();
