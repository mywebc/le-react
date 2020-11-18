import React from "react"
import classnames from "classnames"

interface IHeaderProps {
    className?: string;
    style?: React.CSSProperties
}

export const Header: React.FC<IHeaderProps> = React.memo(({ children, className, style }) => {
    return (
        <div className={classnames("le-layout-header", className)} style={style}>
            {children}
        </div>
    )
})