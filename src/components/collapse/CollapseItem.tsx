import React, { memo, Children } from "react"
import classnames from "classnames"
import Icon from "../icon/Icon"

interface ICollapseItemProps {
    title: string;
    disabled?: boolean;
}


const CollapseItem: React.FC<ICollapseItemProps> = memo(({ children, title, disabled = false }) => {




    const titleClasses = classnames("collapse-item-title", {
        'collapse-item-title-disabled': disabled
    })

    const contentClasses = classnames("collapse-item-content", {
    })


    return (
        <div className={"le-collapse-item"}>
            <div className={titleClasses}>
                <span>
                    <Icon name="arrow-right" />
                </span>
                {title}
            </div>
            <div className={contentClasses}>
                <div className="collapse-item-content-box">
                    {children}
                </div>
            </div>
        </div>
    )
})

export default CollapseItem