import React from "react"
import classnames from "classnames"
import "./Button.scss"

type btnType = "primary" | "dashed" | "text" | "info" | "success" | "warning" | "error" | "text" | "info";
type btnSize = "large" | "small";

interface IButtonProps {
    type?: btnType;
    size?: btnSize;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { type, className, disabled, size, loading } = props
    const classes = classnames("le-button", className, {
        [`le-btn-${type}`]: type,
        le_btn_disabled: disabled,
        [`le-btn-${size}`]: size,
    })
    const loadingClasses = classnames({
        "le-loadingIndicator": loading
    })

    return (
        <button className={classes} type="button">
            <span className={loadingClasses}></span>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    loading: false
}

export default Button;