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
var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.firstName.toUpperCase(), ", ", user.lastName), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));

// Create another object: title/subtitle
// Use title/subtitle into the template
var obj3 = {
  title: 'Indecision APp',
  subtitle: 'Put your life in the hands of a computer'
};
var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, obj3.title.toUpperCase()), /*#__PURE__*/React.createElement("p", null, obj3.subtitle.toLowerCase()));
var appRoot = document.getElementById('app');
ReactDOM.render(template3, appRoot);
