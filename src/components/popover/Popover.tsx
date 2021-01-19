import React, { memo } from "react"
import classnames from "classnames"
import "./Popover.scss"

interface IPopoverProps {

}

const Popover: React.FC<IPopoverProps> = memo(() => {


    const classes = classnames("le-popover", {

    })

    return (
        <div className={classes}>popover</div>
    )
})


export default Popover