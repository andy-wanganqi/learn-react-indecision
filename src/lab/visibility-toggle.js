const appRoot = document.getElementById('app');
let visible = false;
const handleToggleVisibility = (e) => {
  visible = !visible;
};
const renderApp = () => {
  const template = 
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={handleToggleVisibility}>{visible ? "Hide details" : "Show details"}</button>
    <p>{visible && "Here are some details"}</p>
  </div>;
  ReactDOM.render(template, appRoot);
};
renderApp();