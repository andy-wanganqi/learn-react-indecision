class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer?'
    const options = ['Option 1', 'Option 2', 'Option 3']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <OptionForm />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        <div>
          {
            this.props.options.map((option) => <Option key={option} option={option}></Option>)
          }
        </div>
        <p>No options</p>
      </div> 
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.option}</div>
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
