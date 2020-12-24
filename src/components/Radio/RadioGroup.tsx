import React, { memo, useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import Radio from "./Radio"

import "./Radio.scss"

interface IRadioGroupProps {
	value?: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	style?: React.CSSProperties;
}


const RadioGroup: React.FC<IRadioGroupProps> = memo(({ value, onChange, children, className, style }) => {

	const [isValidChildren, setIsValidChildren] = useState(true)

	const classes = classnames('le-radio-group', className)

	const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e)
	}, [])

	useEffect(() => {
		if (children && Array.isArray(children)) {
			React.Children.map(children, _ => {
				if ((_ as any).type !== Radio) {
					console.error("RadioGroup的子组件必须是Radio!")
					setIsValidChildren(false)
				}
			})
		}
	}, [children, setIsValidChildren])

	useEffect(() => {
		React.Children.map(children, _ => {

		})

	}, [children, isValidChildren])

	return isValidChildren ? (
		<div className={classes} style={style}>
			{React.Children.map(children, _ => {
				const childProps = {
					...(_ as any).props,
					name: "group"
				}
				return React.cloneElement(_ as any, childProps)
			})}
		</div>
	) : null
})

export default RadioGroup