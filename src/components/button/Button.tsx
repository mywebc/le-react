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
    onClick?: React.MouseEventHandler
    onMouseEnter?: React.MouseEventHandler
    onMouseLeave?: React.MouseEventHandler
    onFocus?: React.FocusEventHandler
    onBlur?: React.FocusEventHandler
    className?: string;
    style?: React.CSSProperties
}

const Button: React.FC<IButtonProps> = ({ type, className, disabled = false, size, loading = false, style, children, ...rest }) => {
    const classes = classnames("le-button", className, {
        [`le-btn-${type}`]: type,
        "le-btn-disabled": disabled,
        [`le-btn-${size}`]: size,
    })
    const loadingClasses = classnames({
        "le-loadingIndicator": loading
    })

    return (
        <button className={classes} type="button" style={style} {...rest}>
            <span className={loadingClasses}></span>
            {children}
        </button>
    )
}

export default Button;