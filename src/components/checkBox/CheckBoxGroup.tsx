import React, { memo, useCallback, useState, useEffect, useRef } from "react"
import classnames from "classnames"
import CheckBox from "./CheckBox"

import "./CheckBox.scss"
import { useIsValidChildren } from "../../hooks/useIsValidChildren"

interface ICCheckBoxGroupProps {
	defaultValue?: string[];
	disabled?: boolean;
	onChange?: (checked: string[]) => void;
	className?: string;
	style?: React.CSSProperties;
}

const CheckBoxGroup: React.FC<ICCheckBoxGroupProps> = memo(({ defaultValue = [], onChange, children, className, style }) => {

	const checkedValueRef = useRef(defaultValue)

	const { isValidChildren } = useIsValidChildren(children, CheckBox)

	const classes = classnames("le-checkBox-group", className)

	const handleChange = useCallback((label: string, checked: boolean) => {
		if (checked) {
			if (checkedValueRef.current.indexOf(label) === -1) {
				checkedValueRef.current.push(label);
			}
		} else {
			if (checkedValueRef.current.indexOf(label) !== -1) {
				checkedValueRef.current.splice(
					checkedValueRef.current.findIndex((_) => _ === label), 1
				);
			}
		}
		onChange && onChange(checkedValueRef.current)
	}, [checkedValueRef.current])


	return isValidChildren ? (
		<div className={classes} style={style}>
			{React.Children.map(children, _ => {
				const childProps = {
					...(_ as any).props,
					name: "group",
					defaultChecked: defaultValue?.includes((_ as any).props.label),
					onChange: handleChange
				}
				return React.cloneElement(_ as any, childProps)
			})}
		</div>
	) : null
})

export default CheckBoxGroup
