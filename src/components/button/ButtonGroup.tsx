import React from "react"
import "./Button.scss"

const ButtonGroup: React.FC = (props) => {

  return (
    <div className="le_btn_group">
      {props.children}
    </div>
  )
}

export default ButtonGroup;