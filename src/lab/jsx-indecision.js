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

const handleMakeDecision = (e) => {
  if (data.options && data.options.length > 0) {
    const pickIndex = Math.floor(Math.random() * data.options.length);
    const option = data.options[pickIndex];
    alert(option);
  }
};

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = 
  <div>
    <h1>This is JSX from app.js</h1>
    {
      data.options && data.options.length > 0 
        ? <div>
            <p>Here are your options:</p>
            <ul>
              {
                data.options.map((option) => {
                  return <li key={option}>{option}</li>
                })
              }
            </ul>
          </div> 
        : <p>No options</p>
    }
    <form onSubmit={handleAddOption}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
      <div></div>
      <button onClick={handleRemoveAllOption}>Remove All</button>
      <div></div>
      <button disabled={!(data.options && data.options.length > 0)} onClick={handleMakeDecision}>Make Decision</button>
    </form>
  </div>;
  ReactDOM.render(template, appRoot);
};
renderApp();
