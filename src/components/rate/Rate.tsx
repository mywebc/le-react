import React, { useState, useEffect, ReactNode } from "react"
import classnames from "classnames"
import Icon from "../icon/Icon"
import "./Rate.scss"

interface IRateProps {
	defaultValue?: number;
	disabled?: boolean;
	allowClear?: boolean;
	allowHalf?: boolean;
	character?: JSX.Element[];
	onChange?: (value: number) => any;
	onHoverChange?: (value: number) => any;
	className?: string;
	style?: React.CSSProperties;
}

const characterOrigin = [
	<Icon name="collection-fill" />,
	<Icon name="collection-fill" />,
	<Icon name="collection-fill" />,
	<Icon name="collection-fill" />,
	<Icon name="collection-fill" />
]

const Rate: React.FC<IRateProps> = (props) => {
	const { defaultValue, disabled, allowClear, allowHalf, character, onChange, onHoverChange, className, style } = props
	const [currentSelect, setSelect] = useState<number>(0);
	const [currentHover, setHover] = useState<number>(0);
	const [halfSelected, setHalfSelected] = useState<number>(-1);
	const [characterInner, setCharacterInner] = useState<JSX.Element[]>(characterOrigin);

	const classes = classnames("le-rate", className, {
		"le-rate-disabled": disabled,
		"le-rate-allowHalf": allowHalf
	})

	useEffect(() => {
		if (defaultValue) {
			const floorValue = Math.floor(defaultValue)
			if (defaultValue - floorValue > 0 && allowHalf) {
				setHalfSelected(floorValue)
			}
			setSelect(floorValue)
		}
	}, [])

	useEffect(() => {
		character ? setCharacterInner(character) : setCharacterInner(characterOrigin)
	}, [])

	const handleClick = (index: number, area: 'half' | 'whole') => {
		if (area === 'whole') {
			if (allowClear && currentSelect === index + 1) {
				setSelect(0);
				setHalfSelected(-1);
				onChange && onChange(0);
			} else {
				setSelect(index + 1)
				setHalfSelected(-1);
				onChange && onChange(index + 1);
			}
		}
		if (area === 'half') {
			if (allowClear && currentSelect === index) {
				setSelect(0)
				setHalfSelected(-1)
				onChange && onChange(0);
			} else {
				setSelect(index)
				setHalfSelected(index)
				onChange && onChange(index + 0.5);
			}
		}
	}

	const handleOnMouseEnter = (index: number, area: 'half' | 'whole') => {
		setHover(index)
		if (area === 'half') {
			onHoverChange && onHoverChange(index + 0.5)
		} else {
			onHoverChange && onHoverChange(index + 1)
		}
	}

	const handleOnMouseLeave = () => {
		setHover(0)
	}

	return (
		<div className={classes} style={style}>
			<ul>
				{characterInner.map((node, index) => (
					<li className={`${index < currentSelect && "selected"} ${index < currentHover && "hoverSelected"} ${index === halfSelected && 'halfSelected'}`}>
						{allowHalf && (
							<div className="le-rate-first" onMouseEnter={() => handleOnMouseEnter(index, 'half')} onMouseLeave={handleOnMouseLeave} onClick={() => handleClick(index, 'half')}>
								{(characterInner as any)[index]}
							</div>
						)}
						<div className="le-rate-second" onMouseEnter={() => handleOnMouseEnter(index, 'whole')} onMouseLeave={handleOnMouseLeave} onClick={() => handleClick(index, 'whole')}>
							{(characterInner as any)[index]}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Rate;
