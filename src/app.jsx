console.log('App.js is running');

const data = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const handleAddOption = (e) => {
  const optionValue = e.target.elements.option.value;
  console.log('> handleAddOption', optionValue);
  e.preventDefault();
  if (optionValue) {
    data.options.push(optionValue);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const handleRemoveAllOption = (e) => {
  console.log('> handleRemoveAllOption');
  data.options.splice(0, data.options.length);
  renderApp();
};

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = 
  <div>
    <h1>This is JSX from app.js</h1>
    <p>Some info with options: {data.options.length}</p>
    {data.options && data.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
    <ul>
      <li>Item one</li>
      <li>Item two</li>
    </ul>
    <form onSubmit={handleAddOption}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
      <div></div>
      <button onClick={handleRemoveAllOption}>Remove All</button>
    </form>
  </div>;
  ReactDOM.render(template, appRoot);
};
renderApp();
