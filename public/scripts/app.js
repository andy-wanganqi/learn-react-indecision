"use strict";

console.log('App.js is running');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "This is JSX from app.js"), /*#__PURE__*/React.createElement("p", null, "Some info"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));

// Create a new template with: 
// div
//   h1 -> your name
//   p -> age
//   p -> location

var user = {
  firstName: 'Andy',
  lastName: 'Wang',
  age: 40,
  location: 'Auckland'
};
function getFullName(user) {
  if (user && user.firstName && user.lastName) {
    return /*#__PURE__*/React.createElement("h1", null, user.firstName.toUpperCase(), ", ", user.lastName);
  } else {
    return /*#__PURE__*/React.createElement("h1", null, "Anonymous");
  }
}
function getLocation(user) {
  if (user && user.location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", user.location);
  }
}
var template2 = /*#__PURE__*/React.createElement("div", null, getFullName(user), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), user && user.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user));

// only render the subtitle with p tag, if subtitle exists - logical and operator
// render new p tag - if options.length > 0 show "Here are your options:",
// otherwise show "No options"
var obj3 = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, obj3.title.toUpperCase()), obj3.subtitle && obj3.subtitle.length > 0 && /*#__PURE__*/React.createElement("p", null, obj3.subtitle.toLowerCase()), obj3.options && obj3.options.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Here are your options:") : /*#__PURE__*/React.createElement("p", null, "No options"));
var count = 0;
var minus = function minus() {
  console.log('> minus');
  count--;
  renderApp();
};
var reset = function reset() {
  console.log('> reset');
  count = 0;
  renderApp();
};
var plus = function plus() {
  console.log('> plus');
  count++;
  renderApp();
};
var template4 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  id: "minus1",
  className: "button",
  onClick: minus
}, "Minus 1"), /*#__PURE__*/React.createElement("button", {
  id: "reset1",
  className: "button",
  onClick: reset
}, "Reset"), /*#__PURE__*/React.createElement("button", {
  id: "plus1",
  className: "button",
  onClick: plus
}, "Plus 1"));
var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    id: "minus1",
    className: "button",
    onClick: minus
  }, "Minus 1"), /*#__PURE__*/React.createElement("button", {
    id: "reset1",
    className: "button",
    onClick: reset
  }, "Reset"), /*#__PURE__*/React.createElement("button", {
    id: "plus1",
    className: "button",
    onClick: plus
  }, "Plus 1"));
  ReactDOM.render(template, appRoot);
};
renderApp();
