import React, { memo, useCallback, useRef, useEffect, useContext, useState } from "react"
import classnames from "classnames"
import { checkBoxGroupContext } from "./CheckBoxGroup"

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

const CheckBox: React.FC<ICheckBoxProps> = memo(({ label, disabled = false, defaultChecked = false, indeterminate = false, onChange, className, style }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const groupDefaultValue = useContext(checkBoxGroupContext)

    const [isChecked, setIsChecked] = useState(defaultChecked)

    const classes = classnames("le-checkBox", className, {
        'le-checkBox-disabled': disabled
    })

    const handleChange = useCallback(() => {
        const checked = (inputRef.current as HTMLInputElement).checked;
        onChange && onChange(label, checked)
    }, [])

    useEffect(() => {
        (inputRef.current as HTMLInputElement).indeterminate = indeterminate
    }, [indeterminate])

    useEffect(() => {
        console.log(groupDefaultValue)
        if (groupDefaultValue.length !== 0) {
            if (groupDefaultValue.includes(label)) {
                setIsChecked(true)
            }
        } else {
            setIsChecked(false)
        }
    }, [groupDefaultValue])

    return (
        <div className={classes} style={style}>
            <input type="checkBox" defaultChecked={isChecked} id={label} onChange={handleChange} ref={inputRef} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
})

export default CheckBox