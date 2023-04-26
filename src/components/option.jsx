import React from "react"

const Option = (props) => (
  <div>
    {props.option}
    <button onClick={(e) => {
      props.handleRemoveOption(props.option)
    }}>Remove</button>
  </div>
)

export default Option