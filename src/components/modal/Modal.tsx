import React, { useRef, useEffect, useState, ReactNode } from "react"
import "./Modal.scss"
import classnames from "classnames"
import ReactDOM from "react-dom"
import Icon from "../icon/Icon"
import Button from "../button/Button"
import { judgeDOMExitAndCreateDOM } from "../../utils"

interface IModalProps {
	visible: boolean;
	title: string | null;
	mask?: boolean;
	content?: ReactNode | string;
	closeIcon?: string | null;
	maskClosable?: boolean;
	okText?: string;
	cancelText?: string;
	footer?: ReactNode[] | null;
	onCancel?: () => any;
	onConfirm?: () => any;
	onCloseIcon?: () => any;
	callType?: "HTML" | "METHODS";
	className?: string;
	style?: React.CSSProperties;
}

type staticModalMethods = {
	open: Function;
}

const Modal: React.FC<IModalProps> & staticModalMethods = (props) => {
	const { visible, mask, title, onCancel, onConfirm, maskClosable, closeIcon, onCloseIcon, content, callType, okText, cancelText, footer, className, style } = props
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

	const toggleModalVisible = () => {
		setShow(false)
		onCancel && onCancel()
	}

	const handleCloseIcon = () => {
		toggleModalVisible()
		onCloseIcon && onCloseIcon()
	}

	const toggleModalVisibleByMask = () => {
		if (!maskClosable) return;
		setShow(false)
		onCancel && onCancel()
	}

	const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	}

	const handleCancel = () => {
		onCancel && onCancel()
	}

	const handleOk = () => {
		onConfirm && onConfirm()
	}

	return (
		isShow ? ReactDOM.createPortal((
			<div className={classes} onClick={toggleModalVisibleByMask} style={style}>
				<div className="le-modal-content-wrapper" onClick={handleContentClick}>
					{title && (
						<div className="le-modal-content-title">
							<div className="le-modal-content-title-left">{title}</div>
							<div className="le-modal-content-title-right" onClick={handleCloseIcon}>
								{closeIcon && <Icon name={closeIcon} />}
							</div>
						</div>
					)}
					<div className="le-modal-content-inner">{callType === "HTML" ? props.children : content}</div>
					{footer === null ? null : (
						<div className="le-modal-content-footer">
							<div className="btn_wrapper">
								{footer ? footer.map(_ => _) : (
									<>
										<Button onClick={handleCancel}>{cancelText ? cancelText : "取消"}</Button>
										<Button type="primary" onClick={handleOk}>{okText ? okText : "确定"}</Button>
									</>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		), modalEl.current) : null
	)
}

Modal.defaultProps = {
	visible: false,
	mask: true,
	closeIcon: "close",
	maskClosable: true,
	callType: "HTML"
}

Modal.open = (options: IModalProps) => {
	const modalWrapper = judgeDOMExitAndCreateDOM("modal-wrapper")
	ReactDOM.render(<Modal {...options} callType={"METHODS"} />, modalWrapper)
}

export default Modal
