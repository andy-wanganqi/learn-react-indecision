console.log('App.js is running');

let template = <h1>This is JSX from app.js</h1>;

let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);