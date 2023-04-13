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

let user = {
  firstName: 'Andy',
  lastName: 'Wang',
  age: 40,
  location: 'Auckland'
};

let template2 = 
<div>
  <h1>{user.firstName.toUpperCase()}, {user.lastName}</h1>
  <p>Age: {user.age}</p>
  <p>Location: {user.location}</p>
</div>;

// Create another object: title/subtitle
// Use title/subtitle into the template
let obj3 = {
  title: 'Indecision APp',
  subtitle: 'Put your life in the hands of a computer'
}
let template3 = 
<div>
  <p>{obj3.title.toUpperCase()}</p>
  <p>{obj3.subtitle.toLowerCase()}</p>
</div>;


let appRoot = document.getElementById('app');
ReactDOM.render(template3, appRoot);