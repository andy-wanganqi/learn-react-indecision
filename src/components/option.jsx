import React from "react"

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button onClick={(e) => {
        props.handleRemoveOption(props.option)
      }}>remove</button>
    </div>
  )
}

export default Option