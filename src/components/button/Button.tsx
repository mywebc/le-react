import React from "react"

interface IButton {
    txt: string;
}

const Button: React.FC<IButton> = (props) => {
    return <div>{props.txt}</div>
}

export default Button;