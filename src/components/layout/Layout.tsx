import React, { useEffect, useState } from "react"
import classnames from "classnames"

interface ILayoutProps {
	className?: string;
	style?: React.CSSProperties
}

export const Layout: React.FC<ILayoutProps> = React.memo(({ children, className, style }) => {
	const [isExitSide, setIsExitSide] = useState(false)

	const classes = classnames("le-layout", className, {
		hasSide: isExitSide
	})

	useEffect(() => {
		if (children && Array.isArray(children)) {
			const isExitSide = React.Children.map(children, _ => (
				(_ as any).props.children
			))?.indexOf("Side")
			setIsExitSide(isExitSide === -1 ? false : true)
		}
	}, [children])

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	)
})