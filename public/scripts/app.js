"use strict";

console.log('App.js is running');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "This is JSX from app.js"), /*#__PURE__*/React.createElement("p", null, "Some info"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));

// Create a new template with: 
// div
//   h1 -> your name
//   p -> age
//   p -> location

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Andy Wang"), /*#__PURE__*/React.createElement("p", null, "Age: 40"), /*#__PURE__*/React.createElement("p", null, "Location: Auckland"));
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
