import React, { useRef, useEffect, useState } from "react"
import "./Modal.scss"
import classnames from "classnames"
import ReactDOM from "react-dom"

interface IModalProps {
	visible: boolean;
	title: string;
	mask?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

const Modal: React.FC<IModalProps> = (props) => {
	const { visible, mask, title, className } = props

	const [isShow, setShow] = useState<boolean>(false)

	const classes = classnames("le-modal", className, {
		"le-modal-mask": mask
	})

	const createModalDom = () => {
		const modalWrapper = document.createElement("div");
		modalWrapper.setAttribute("id", "le-modal-wrapper");
		return modalWrapper;
	}

	const modalWrapper = (document.querySelector("#le-modal-wrapper") ? document.querySelector("#le-modal-wrapper") : createModalDom()) as HTMLDivElement;
	const modalEl = useRef(modalWrapper);

	useEffect(() => {
		const $modal = modalEl.current;
		document.body.append($modal)
		return () => {
			$modal?.remove();
		};
	}, []);

	useEffect(() => {
		setShow(visible)
	}, [visible])

	const handleClickWrapper = () => {
		setShow(false)
	}

	const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	}

	return (
		isShow ? ReactDOM.createPortal((
			<div className={classes} onClick={handleClickWrapper}>
				<div className="le-modal-content-wrapper" onClick={handleContentClick}>
					<div className="le-modal-content-title">{title}</div>
					<div className="le-modal-content">{props.children}</div>
				</div>
			</div>
		), modalEl.current) : null
	)
}

Modal.defaultProps = {
	visible: false,
	mask: true
}

export default Modal
