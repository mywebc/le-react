import React from "react"
import classnames from "classnames"

interface IContentProps {
    className?: string;
    style?: React.CSSProperties
}

export const Content: React.FC<IContentProps> = React.memo(({ children, className, style }) => {
    return (
        <div className={classnames("le-layout-content", className)} style={style}>
            {children}
        </div>
    )
})