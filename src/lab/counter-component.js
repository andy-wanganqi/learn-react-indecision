class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.state = {
      count: props.count || 0,
      name: 'Andy'
    }
  }
  handlePlusOne(){
    console.log('> handlePlusOne')
    // Updating but NOT replacing the state
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    })
  }
  handleReset(){
    console.log('> handleReset')
    this.setState((prev) => {
      return {
        count: 0
      }
    })
  }
  handleMinusOne(){
    console.log('> handleMinusOne')
    this.setState((prev) => {
      return {
        count: prev.count - 1
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button id="minus1" className="button" onClick={this.handleMinusOne}>Minus 1</button>
        <button id="reset1" className="button" onClick={this.handleReset}>Reset</button>
        <button id="plus1" className="button" onClick={this.handlePlusOne}>Plus 1</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
