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
  handleMakeDecision() {
    // console.log('> handleMakeDecision');
    // if (data.options && data.options.length > 0) {
    //   const pickIndex = Math.floor(Math.random() * data.options.length);
    //   const option = data.options[pickIndex];
    //   alert(option);
    // }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleMakeDecision}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAllOption() {
    // console.log('> handleRemoveAllOption');
    // data.options.splice(0, data.options.length);
  }
  render() {
    return (
      <div>
        <p>Here are your options:</p>
        <div>
          {
            this.props.options.map((option) => <Option key={option} option={option}></Option>)
          }
        </div>
        <button onClick={this.handleRemoveAllOption}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault();
    const optionValue = e.target.elements.option.value.trim();
    console.log('> handleAddOption', optionValue);
    // if (optionValue) {
    //   data.options.push(optionValue);
    //   e.target.elements.option.value = '';
    // }
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
