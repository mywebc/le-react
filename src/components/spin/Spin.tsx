import React from "react"
import Icon from "../icon/Icon"
import classnames from "classnames"
import "./Spin.scss"

type sizeType = "small" | "large";

interface ISpinProps {
    tip?: string;
    size?: sizeType;
    spinning?: boolean;
    className?: string;
    style?: React.CSSProperties
}

const Spin: React.FC<ISpinProps> = (props) => {
    const { className, style, size, tip, spinning } = props

    const classes = classnames("le-spin", className, {
        [`le-spin-${size}`]: size,
        "le-spin-spinning": spinning
    })

    return (
        <div className={classes} style={style}>
            <div className="le-icon-wrapper">
                <Icon name={"loading"} />
            </div>
            {props.tip && <div className="le-spin-txt">{tip}</div>}
        </div>
    )
}

Spin.defaultProps = {
    spinning: true
}

export default Spin;