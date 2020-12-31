import React, { useState, useEffect } from 'react';

export const useIsValidChildren = (children: React.ReactNode, Element: React.FC<any>) => {
	const [isValidChildren, setIsValidChildren] = useState(true)
	useEffect(() => {
		if (children && Array.isArray(children)) {
			React.Children.map(children, _ => {
				if ((_ as any).type !== Element) {
					console.error(`子组件必须是${Element}!`)
					setIsValidChildren(false)
				}
			})
		}
	}, [children, setIsValidChildren, Element])
	return { isValidChildren }
}