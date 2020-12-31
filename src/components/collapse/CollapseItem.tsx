import React, { memo, useCallback, useState, useContext, useEffect } from "react"
import classnames from "classnames"
import Icon from "../icon/Icon"
import { CollapseContext } from "./Collapse"

interface ICollapseItemProps {
    title: string;
    disabled?: boolean;
    isLastChild?: boolean;
    itemKey?: number;
    onChange?: (key: number, status: boolean) => void;
    style?: React.CSSProperties;
    className?: string;
}


const CollapseItem: React.FC<ICollapseItemProps> = memo(({ children, title, isLastChild = false, disabled = false, itemKey = -1, onChange, style, className }) => {

    const [itemContentDisplay, setItemContentDisplay] = useState(false)
    const CollapseConfig = useContext<{ accordion: boolean, currentSpread: number, defaultSpread: number[] }>(CollapseContext);

    const titleClasses = classnames("collapse-item-title", className, {
        'collapse-item-title-disabled': disabled,
        isLastChild: isLastChild && !itemContentDisplay,
    })

    const contentClasses = classnames("collapse-item-content", {
        'collapse-item-content-active': itemContentDisplay,
        'collapse-item-content-leave': !itemContentDisplay,
    })

    useEffect(() => {
        if (CollapseConfig.accordion) {
            if (CollapseConfig.defaultSpread.includes(itemKey) && CollapseConfig.defaultSpread.length === 1) {
                setItemContentDisplay(true)
            }
        } else if (!CollapseConfig.accordion && CollapseConfig.defaultSpread.includes(itemKey)) {
            setItemContentDisplay(true)
        }
    }, [])

    useEffect(() => {
        if (CollapseConfig.accordion && CollapseConfig.currentSpread !== -1) {
            if (CollapseConfig.currentSpread === itemKey) {
                setItemContentDisplay(true)
            } else {
                setItemContentDisplay(false)
            }
        }
    }, [CollapseConfig])

    const handleClickPanel = useCallback(() => {
        setItemContentDisplay(_ => {
            onChange && onChange(itemKey, !_)
            return !_
        })

    }, [])

    return (
        <div className={"le-collapse-item"} style={style}>
            <div className={titleClasses}>
                <span className="collapse-icon" onClick={handleClickPanel}>
                    <Icon name="arrow-right" />
                </span>
                {title}
            </div>
            <div className={contentClasses}>
                <div className="collapse-item-content-box" style={{ borderBottom: `${itemContentDisplay && !isLastChild ? '1px solid rgba(0, 0, 0, 0.3)' : ''}` }}>
                    {children}
                </div>
            </div>
        </div>
    )
})

export default CollapseItem