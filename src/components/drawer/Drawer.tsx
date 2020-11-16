import React, { useRef, memo } from "react"
import { judgeDOMExitAndCreateDOM } from "../../utils";
import classnames from "classnames"
import ReactDOM from "react-dom";
import "./Drawer.scss"
import Icon from "../icon/Icon";

interface IDrawerProps {
	title: string;
	visible: boolean;
	placement?: "top" | "right" | "bottom" | "left";
	closable?: boolean;
	onClose?: () => any;
	mask?: boolean;
	maskClosable?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

const Drawer: React.FC<IDrawerProps> = memo(({
	title,
	visible,
	onClose,
	maskClosable = true,
	mask = true,
	closable = true,
	placement = "right",
	style,
	className,
	children
}) => {

	if(typeof document === "undefined") return <div></div>

	const drawerRef = useRef<HTMLDivElement>(judgeDOMExitAndCreateDOM("le-drawer-wrapper") as HTMLDivElement);

	const classes = classnames("le-drawer", className, {
		"le-drawer-mask": mask,
		[`le-drawer-${placement}`]: placement
	})

	const handleClickMask = () => {
		if (!maskClosable) return;
		onClose && onClose()
	}

	const handleClose = () => {
		onClose && onClose()
	}

	return visible ? ReactDOM.createPortal(
		<div className={classes} style={style} onClick={handleClickMask}>
			<div className="le-drawer-content">
				<div className="le-drawer-header">
					<div>{title}</div>
					{closable && <div onClick={handleClose}><Icon name={"close"} /></div>}
				</div>
				<div className="le-drawer-body">{children}</div>
			</div>
		</div>,
		drawerRef.current
	) : null
})

export default Drawer
