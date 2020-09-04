import React from "react"
import "./Switch.scss"

interface ISwitchProps {

}

const Switch:React.FC<ISwitchProps> = () => {
  return (
    <button className="le-switch" >
      <span></span>
    </button>
  )
}

export default Switch;