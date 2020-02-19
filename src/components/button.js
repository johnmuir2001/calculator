import React from 'react';

const Button = (props) => {
    return(
      <div>
        <button className="button" onClick={() => props.click(props.label)}>{props.label}</button>
      </div>
    )
  }


  export default Button