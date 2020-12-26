import React, { memo, useCallback, useRef } from "react"
import classnames from "classnames"

import "./CheckBox.scss"

interface ICheckBoxProps {
    label: string;
    disabled?: boolean;
    indeterminate?: boolean;
    defaultChecked?: boolean;
    onChange?: (label: string, checked: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
}

const CheckBox: React.FC<ICheckBoxProps> = memo(({ label, disabled = false, defaultChecked = false, onChange, className, style }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const classes = classnames("le-checkBox", className, {
        'le-checkBox-disabled': disabled
    })

    const handleChange = useCallback(() => {
        const checked = (inputRef.current as HTMLInputElement).checked;
        onChange && onChange(label, checked)
    }, [])

    return (
        <div className={classes} style={style}>
            <input type="checkBox" defaultChecked={defaultChecked} id={label} onChange={handleChange} ref={inputRef} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
})

export default CheckBox