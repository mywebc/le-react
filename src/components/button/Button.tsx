import React from "react"
import "./Button.scss"

interface IButton {
    txt: string;
}

const Button: React.FC<IButton> = (props) => {
    return <div className="le-button">{props.txt}</div>
}

export default Button;