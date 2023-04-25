import React from "react"

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.isOptionsValid} onClick={props.handleMakeDecision}>What should I do?</button>
    </div>
  )
}

export default Action