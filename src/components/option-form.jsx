import React from "react"

class OptionForm extends React.Component {
  state = {
    error: ''
  }
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error
    }))
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

export default OptionForm