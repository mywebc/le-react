import React, { memo, useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import Radio from "./Radio"

import "./Radio.scss"
import { useIsValidChildren } from "../../hooks/useIsValidChildren";

interface IRadioGroupProps {
	value?: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	style?: React.CSSProperties;
}


const RadioGroup: React.FC<IRadioGroupProps> = memo(({ value, onChange, children, className, style }) => {

	const classes = classnames('le-radio-group', className)

	const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e)
	}, [onChange])

	const { isValidChildren } = useIsValidChildren(children, Radio)
	
	return isValidChildren ? (
		<div className={classes} style={style}>
			{React.Children.map(children, _ => {
				const childProps = {
					...(_ as any).props,
					name: "group",
					defaultValue: value,
					onChange: handleOnChange
				}
				return React.cloneElement(_ as any, childProps)
			})}
		</div>
	) : null
})

export default RadioGroup