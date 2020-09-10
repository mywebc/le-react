import React from "react"
import classnames from "classnames"
import Icon from "../icon/Icon"
import "./Rate.scss"
import { link } from "fs"

interface IRateProps {
	defaultValue?: number
	className?: string;
	style?: React.CSSProperties;
}

const character = {
	1: <Icon name="collection" />,
	2: <Icon name="collection" />,
	3: <Icon name="collection" />,
	4: <Icon name="collection" />,
	5: <Icon name="collection" />
}

const Rate: React.FC<IRateProps> = () => {


	const classes = classnames("le-rate", {

	})

	const renderEle = (() => {
		return <div></div>
	})()

	return (
		<div>
			<ul>
				{Object.keys(character).map(key => (
					<li>{(character as any)[key]}</li>
				))}

				{/* {renderEle} */}
			</ul>
		</div>
	)
}

export default Rate;