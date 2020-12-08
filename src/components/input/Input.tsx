import React, { memo, ReactNode, useCallback, useRef } from "react"
import classnames from "classnames"
import "./Input.scss"
import Icon from "../icon/Icon"

interface IInputProps {
	prefix?: ReactNode;
	suffix?: ReactNode;
	disabled?: boolean;
	clearable?: boolean;
	type?: "password" | "textarea" | "text";
	addonAfter?: ReactNode | string;
	addonBefore?: ReactNode | string;
	onChange?: (val: string | number) => void;
	onPressEnter?: (e: React.KeyboardEvent) => void;
	className?: string;
	style?: React.CSSProperties;
}

const Input: React.FC<IInputProps> = memo(({ prefix, suffix, disabled = false, clearable = false, onPressEnter, type = "text", addonAfter, addonBefore, onChange, className, style }) => {

	const inputRef = useRef<HTMLInputElement>(null);

	const classes = classnames("le-input-wrapper", className, {
		"has-before-addon": addonBefore,
		"has-after-addon": addonAfter,
		"disabled": disabled,
		"clearable": clearable
	})

	const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e.target.value)
	}, [])

	const clearValue = useCallback(() => {
		(inputRef.current as HTMLInputElement).value = "";
	}, [inputRef])

	const handleOnKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.charCode === 13) {
			onPressEnter && onPressEnter(e)
		}
	}, [])

	return (
		<div className={classes} style={style}>
			{addonBefore && <span className="before-addon" dangerouslySetInnerHTML={{ __html: addonBefore.toString() }}></span>}
			<span className="le-input-container">
				{/* {prefix && <span dangerouslySetInnerHTML={{ __html: prefix.toString() }}></span>} */}
				{type === "textarea" ? (
					<textarea placeholder="textarea" className="le-textarea" />
				) : (
						<input className="le-input" type={type} placeholder="请输入值" disabled={disabled} onChange={handleOnChange} ref={inputRef} onKeyPress={handleOnKeyPress} />
					)}
				{/* close */}
				{clearable && type !== "textarea" && <span className="le-input-close" onClick={clearValue}><Icon name={"close"} /></span>}
				{/* {suffix && <span dangerouslySetInnerHTML={{ __html: suffix.toString() }}></span>} */}
			</span>
			{addonAfter && <span className="after-addon" dangerouslySetInnerHTML={{ __html: addonAfter.toString() }}></span>}
		</div>
	)
})

export default Input;
