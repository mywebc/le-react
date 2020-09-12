import React from "react"
import "./Modal.scss"
import classnames from "classnames"

interface IModalProps {
    className?: string;
    style?: React.CSSProperties;
}

const Modal: React.FC<IModalProps> = (props) => {
    const { className } = props

    const classes = classnames("le-modal", className)

    return (
        <div className={classes}>
            这是modal
        </div>
    )
}

export default Modal