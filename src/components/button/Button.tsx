import React from "react"
import "./Button.scss"

type btnType = "primary" | "dashed" | "text" | "info" | "success" | "warning" | "error";
type btnSize = "large"| "small" | "default";

interface IButton {
    txt: string;
    type: btnType;
    size: btnSize;
    disabled: boolean;
    loading: boolean;
}

const Button: React.FC<IButton> = (props) => {
    return <div className="le-button">{props.txt}</div>
}

export default Button;