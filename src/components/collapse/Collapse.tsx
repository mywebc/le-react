import React, { memo, useCallback, useState, useRef } from "react"
import classnames from "classnames"
import "./Collapse.scss"
import { useIsValidChildren } from "../../hooks/useIsValidChildren"
import CollapseItem from "./CollapseItem"

interface ICollapseProps {
    accordion?: boolean;
    defaultSpread?: number[] | number;
    onChange?: (value: number[]) => void;
    style?: React.CSSProperties;
    className?: string;
}

export const CollapseContext = React.createContext<any>(null);

const Collapse: React.FC<ICollapseProps> = memo(({ children, accordion = false, defaultSpread = [], onChange, className, style }) => {

    const changeSpread = useRef<number[]>([].concat(defaultSpread as any))
    const [currentSpread, setCurrentSpread] = useState(-1)

    const { isValidChildren } = useIsValidChildren(children, CollapseItem)

    const classes = classnames("le-collapse", className, {

    })

    const handleOnChange = useCallback((key: number, status: boolean) => {
        if (status) {
            setCurrentSpread(key)
            if (!changeSpread.current.includes(key)) {
                changeSpread.current.push(key)
            }
        } else {
            if (changeSpread.current.includes(key)) {
                changeSpread.current.splice(changeSpread.current.indexOf(key), 1);
            }
        }
        onChange && onChange(changeSpread.current)
    }, [])

    return (isValidChildren ?
        (<div className={classes} style={style}>
            <CollapseContext.Provider value={{
                accordion: accordion,
                currentSpread: currentSpread,
                defaultSpread: [].concat(defaultSpread as any)
            }}>
                {React.Children.map(children, (_, i) => {
                    const childProps = {
                        ...(_ as any).props,
                        isLastChild: i === (children as any).length - 1,
                        itemKey: i,
                        onChange: handleOnChange
                    }
                    return React.cloneElement(_ as any, childProps)
                })}
            </CollapseContext.Provider>
        </div >) : null
    )
})

export default Collapse