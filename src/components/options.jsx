import React from "react"
import Option from './option.jsx'

const Options = (props) => props.options.length > 0 
  ? (
    <div>
      <p>Here are your options:</p>
      <div>
        {
          props.options.map((option) => <Option key={option} option={option} handleRemoveOption={props.handleRemoveOption} />)
        }
      </div>
      <button onClick={props.handleRemoveAllOptions}>Remove All</button>
    </div> 
  )
  : (
    <p>No options</p>
  )

export default Options