import React, { memo, ReactNode } from "react"
import classnames from "classnames"
import "./Input.scss"

interface IInputProps {
    addonAfter?: ReactNode | string;
    addonBefore?: ReactNode | string;
    className?: string;
    style?: React.CSSProperties;
}

const Input: React.FC<IInputProps> = memo(({ addonAfter, addonBefore, className, style }) => {


    const classes = classnames("le-input-wrapper", className, {

    })

    return (
        <div className={classes} style={style}>
            {addonBefore && <span dangerouslySetInnerHTML={{ __html: addonBefore.toString() }}></span>}
            <input className="le-input" type="text" placeholder="请输入值" />
            {addonAfter && <span dangerouslySetInnerHTML={{ __html: addonAfter.toString() }}></span>}
        </div>
    )
})

export default Input;
