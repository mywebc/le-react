import React from "react"
import classnames from "classnames"

interface IFooterProps {
    className?: string;
    style?: React.CSSProperties
}

export const Footer: React.FC<IFooterProps> = React.memo(({ children, className, style }) => {
    return (
        <div className={classnames("le-layout-footer", className)} style={style}>
            {children}
        </div>
    )
})