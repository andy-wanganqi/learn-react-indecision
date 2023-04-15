// Create a new template with: 
// div
//   h1 -> your name
//   p -> age
//   p -> location

const user = {
  firstName: 'Andy',
  lastName: 'Wang',
  age: 40,
  location: 'Auckland'
};

function getFullName(user) {
  if (user && user.firstName && user.lastName) {
    return <h1>{user.firstName.toUpperCase()}, {user.lastName}</h1>;
  } else {
    return <h1>Anonymous</h1>;
  }
}

function getLocation(user) {
  if (user && user.location) {
    return <p>Location: {user.location}</p>;
  }
}
const template2 = 
<div>
  {getFullName(user)}
  <p>Age: {user.age}</p>
  {(user && user.age >= 18) && <p>Age: {user.age}</p>}
  {getLocation(user)}
</div>;

// only render the subtitle with p tag, if subtitle exists - logical and operator
// render new p tag - if options.length > 0 show "Here are your options:",
// otherwise show "No options"
const obj3 = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template3 = 
<div>
  <p>{obj3.title.toUpperCase()}</p>
  {(obj3.subtitle && obj3.subtitle.length > 0) && <p>{obj3.subtitle.toLowerCase()}</p>}
  {obj3.options && obj3.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
</div>;