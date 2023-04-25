import React from 'react'
import Header from './header.jsx'
import Action from './action.jsx'
import Options from './options.jsx'
import OptionForm from './option-form.jsx'

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.isOptionsValid = this.isOptionsValid.bind(this)
    this.handleMakeDecision = this.handleMakeDecision.bind(this)
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    console.log('IndecisionApp', 'componentDidMount')
    try {
      const optionsJson = localStorage.getItem('options')
      const options = JSON.parse(optionsJson)
      if (options) {
        this.setState(() => ({
          options
        }))
      }
    } catch (ex) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('IndecisionApp', 'componentDidUpdate')
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options))
    }
  }
  componentWillUnmount() {
    console.log('IndecisionApp', 'componentWillUnmount')
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
    this.setState(() => ({
      options: []
    }))
  }
  handleAddOption(option) {
    // Validate
    if (!option) {
      return 'Option should be not empty.'
    } else if(this.state.options.indexOf(option) > -1) {
      return `Option "${option}" exists.`
    }
    // Set State
    this.setState((prev) => ({
      options: prev.options.concat(option)
    }))
  }
  handleRemoveOption(optionToRemove) {
    if(optionToRemove && this.state.options.indexOf(optionToRemove)> -1) {
      this.setState((prev) => {
        return {
          options: prev.options.filter((option) => optionToRemove !== option)
        }
      })
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Action isOptionsValid={this.isOptionsValid()} handleMakeDecision={this.handleMakeDecision}/>
        <Options options={this.state.options}
          handleRemoveAllOptions={this.handleRemoveAllOptions} 
          handleRemoveOption={this.handleRemoveOption}
        />
        <OptionForm handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

export default IndecisionApp