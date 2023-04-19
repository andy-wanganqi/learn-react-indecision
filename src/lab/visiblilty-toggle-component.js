class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: true
    }
  }
  handleToggleVisibility(e) {
    console.log('> handleToggleVisibility')
    this.setState((prev)=> {
      visible: !prev.visible
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visible ? "Hide details" : "Show details"}</button>
        <p>{this.state.visible && "Here are some details"}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
