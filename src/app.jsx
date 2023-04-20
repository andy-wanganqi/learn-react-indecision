class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.isOptionsValid = this.isOptionsValid.bind(this)
    this.handleMakeDecision = this.handleMakeDecision.bind(this)
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  isOptionsValid() {
    return this.state.options && this.state.options.length > 0;
  }
  handleMakeDecision() {
    if (this.isOptionsValid()) {
      const pickIndex = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[pickIndex];
      alert(option);
    }
  }
  handleRemoveAllOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleAddOption(option) {
    // Validate
    if (!option) {
      return 'Option should be not empty.'
    } else if(this.state.options.indexOf(option) > -1) {
      return `Option "${option}" exists.`
    }
    // Set State
    this.setState((prev) => {
      return {
        options: prev.options.concat(option)
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

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Indecision App</h1>
//         <h2>Put your life in the hands of a computer?</h2>
//       </div>
//     )
//   }
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Put your life in the hands of a computer?</h2>
    </div>
  )
}
Header.defaultProps = {
  title: "Indecision App"
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled={!this.props.isOptionsValid} onClick={this.props.handleMakeDecision}>What should I do?</button>
//       </div>
//     )
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.isOptionsValid} onClick={props.handleMakeDecision}>What should I do?</button>
    </div>
  )
}

// class Options extends React.Component {
//   render() {
//     if (this.props.options.length > 0) {
//       return (
//         <div>
//           <p>Here are your options:</p>
//           <div>
//             {
//               this.props.options.map((option) => <Option key={option} option={option}></Option>)
//             }
//           </div>
//           <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
//         </div> 
//       )
//     } else {
//       return (
//         <p>No options</p>
//       )
//     }
//   }
// }

const Options = (props) => {
  if (props.options.length > 0) {
    return (
      <div>
        <p>Here are your options:</p>
        <div>
          {
            props.options.map((option) => <Option key={option} option={option}></Option>)
          }
        </div>
        <button onClick={props.handleRemoveAllOptions}>Remove All</button>
      </div> 
    )
  } else {
    return (
      <p>No options</p>
    )
  }
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>{this.props.option}</div>
//     )
//   }
// }

const Option = (props) => {
  return (
    <div>{props.option}</div>
  )
}

class OptionForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: ''
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error
      }
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['Option A', 'Option B']
}
ReactDOM.render(<IndecisionApp options={['Option A', 'Option B']}/>, document.getElementById('app'))
