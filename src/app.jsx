class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <OptionForm />
      </div>
    )
  }
}

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
          <Option></Option>
          <Option></Option>
          <Option></Option>
        </ul>
        <p>No options</p>
      </div> 
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>An Option</li>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
