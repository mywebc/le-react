import React, { memo, useCallback } from "react";
import classnames from "classnames";

import "./Radio.scss"

interface IRadioProps {
    label: string;
    value?: any;
    defaultValue?: any;
    name?: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}


const Radio: React.FC<IRadioProps> = memo(({ label, defaultChecked = false, disabled = false, name, onChange, value, defaultValue, className, style }) => {

    const classes = classnames('le-radio', className, {
        'le-radio-disabled': disabled
    })

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }, [])

    return (
        <div className={classes} style={style}>
            <input type="radio" id={label} defaultChecked={name === "group" ? defaultValue === value : defaultChecked} onChange={handleOnChange} value={value} name={name} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
})

export default Radio