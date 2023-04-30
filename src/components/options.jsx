import React from "react"
import Option from './option.jsx'

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Here are your options:</h3>
      <button 
        className="button button--link"
        onClick={props.handleRemoveAllOptions}
      >Remove All</button>
    </div>

    {props.options.length == 0 && 
      <div className="widget__prompt">
        <p>Please add an option to get started.</p>
      </div>
    }

    {
      props.options.map((option, index) => (
        <Option 
          key={option} 
          option={option} 
          index={index}
          handleRemoveOption={props.handleRemoveOption} 
        />
      ))
    }
  </div>
)
  

export default Options