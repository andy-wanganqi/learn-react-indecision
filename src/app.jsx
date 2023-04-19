class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.isOptionsValid = this.isOptionsValid.bind(this)
    this.handleMakeDecision = this.handleMakeDecision.bind(this)
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 3']
    }
  }
  isOptionsValid() {
    return this.state.options && this.state.options.length > 0;
  }
  handleMakeDecision() {
    console.log('> handleMakeDecision');
    if (this.isOptionsValid()) {
      const pickIndex = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[pickIndex];
      alert(option);
    }
  }
  handleRemoveAllOptions() {
    console.log('> handleRemoveAllOptions')
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleAddOption(option) {
    console.log('> handleAddOption', option)
    this.setState((prev) => {
      const newOptions = prev.options
      newOptions.push(option)
      return {
        options: newOptions
      }
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Action isOptionsValid={this.isOptionsValid()} handleMakeDecision={this.handleMakeDecision}/>
        <Options options={this.state.options} handleRemoveAllOptions={this.handleRemoveAllOptions} />
        <OptionForm handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer?</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button disabled={!this.props.isOptionsValid} onClick={this.props.handleMakeDecision}>What should I do?</button>
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
        <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
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
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const optionValue = e.target.elements.option.value.trim();
    if (optionValue) {
      this.props.handleAddOption(optionValue)
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
