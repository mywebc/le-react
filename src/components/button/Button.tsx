import React from "react"
import "./Button.scss"

type btnType = "primary" | "dashed" | "text" | "info" | "success" | "warning" | "error";
type btnSize = "large" | "small" | "default";

interface IButton {
    type?: btnType;
    size?: btnSize;
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<IButton> = (props) => {
    return <div className="le-button">{props.children}</div>
}

Button.defaultProps = {
    type: "primary",
    size: "default",
    disabled: false,
    loading: false
}

export default Button;