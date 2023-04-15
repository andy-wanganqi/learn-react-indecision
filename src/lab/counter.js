let count = 0;
const minus = () => {
  console.log('> minus');
  count--;
  renderApp();
};
const reset = () => {
  console.log('> reset');
  count = 0;
  renderApp();
};
const plus = () => {
  console.log('> plus');
  count++;
  renderApp();
};
const template4 = (
  <div>
    <h1>Count: {count}</h1>
    <button id="minus1" className="button" onClick={minus}>Minus 1</button>
    <button id="reset1" className="button" onClick={reset}>Reset</button>
    <button id="plus1" className="button" onClick={plus}>Plus 1</button>
  </div>
);
const renderApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button id="minus1" className="button" onClick={minus}>Minus 1</button>
      <button id="reset1" className="button" onClick={reset}>Reset</button>
      <button id="plus1" className="button" onClick={plus}>Plus 1</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp();