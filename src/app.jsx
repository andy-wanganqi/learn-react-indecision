console.log('App.js is running');

let template = 
<div>
  <h1>This is JSX from app.js</h1>
  <p>Some info</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
  </ul>
</div>;

// Create a new template with: 
// div
//   h1 -> your name
//   p -> age
//   p -> location

let template2 = 
<div>
  <h1>Andy Wang</h1>
  <p>Age: 40</p>
  <p>Location: Auckland</p>
</div>;


let appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);