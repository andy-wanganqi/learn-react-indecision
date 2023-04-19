class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
  }
  handlePlusOne(){
    console.log('> handlePlusOne')
  }
  handleReset(){
    console.log('> handleReset')
  }
  handleMinusOne(){
    console.log('> handleMinusOne')
  }
  render() {
    return (
      <div>
        <h1>Count: {count}</h1>
        <button id="minus1" className="button" onClick={this.handleMinusOne}>Minus 1</button>
        <button id="reset1" className="button" onClick={this.handleReset}>Reset</button>
        <button id="plus1" className="button" onClick={this.handlePlusOne}>Plus 1</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
