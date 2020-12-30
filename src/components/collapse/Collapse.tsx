import React, { memo } from "react"
import classnames from "classnames"
import "./Collapse.scss"
import { useIsValidChildren } from "../../hooks/useIsValidChildren"
import CollapseItem from "./CollapseItem"

interface ICollapseProps {

}

const Collapse: React.FC<ICollapseProps> = memo(({ children, }) => {


    const { isValidChildren } = useIsValidChildren(children, CollapseItem)


    const classes = classnames("le-collapse", {

    })

    return (isValidChildren ?
        (<div className={classes}>
            {children}
        </div>) : null
    )
})

export default Collapse