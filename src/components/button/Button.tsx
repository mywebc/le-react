import React from "react"
import classnames from "classnames"
import "./Button.scss"

type btnType = "primary" | "dashed" | "text" | "info" | "success" | "warning" | "error";
type btnSize = "large" | "small" | "default";

interface IButton {
    type?: btnType;
    size?: btnSize;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

const Button: React.FC<IButton> = (props) => {
    const { type, className } = props
    const classes = classnames("le-button", className, {
        [`le_btn_${type}`]: type
    })

    return <button className={classes}>{props.children}</button>
}

Button.defaultProps = {
    type: "primary",
    size: "default",
    disabled: false,
    loading: false
}

export default Button;