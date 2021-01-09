import React from "react"
import Icon from "../icon/Icon"
import classnames from "classnames"
import "./Spin.scss"

interface IPagerProps {
    totalPage: number,
    currentPage?: number,
    className?: string;
    style?: React.CSSProperties
}

const Pager: React.FC<IPagerProps> = ({ className, style, totalPage, currentPage }) => {

    const classes = classnames("le-pager", className, {

    })

    return (
        <div className={classes} style={style}>
            pager
        </div>
    )
}


export default Pager;