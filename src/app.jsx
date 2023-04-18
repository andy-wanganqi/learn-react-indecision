class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Here are your options:</p>
        <ul>
          <li>A</li>
          <li>B</li>
        </ul>
        <p>No options</p>
      </div> 
    )
  }
}

class OptionForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={null}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
          <div></div>
          <button onClick={null}>Remove All</button>
        </form>
      </div>
    )
  }
}

const template = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <OptionForm />
  </div>
)
ReactDOM.render(template, document.getElementById('app'))
