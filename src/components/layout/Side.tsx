import React from "react"
import classnames from "classnames"

interface ISideProps {
    className?: string;
    style?: React.CSSProperties
}

export const Side: React.FC<ISideProps> = React.memo(({ children, className, style }) => {
    return (
        <div className={classnames("le-layout-side", className)} style={style}>
            {children}
        </div>
    )
})