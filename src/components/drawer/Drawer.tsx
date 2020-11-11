import React, { useEffect, useRef, useState } from "react"
import { judgeDOMExitAndCreateDOM } from "../../utils";
import classnames from "classnames"
import ReactDOM from "react-dom";
import "./Drawer.scss"

interface IDrawerProps {
    title: string;
    visible: boolean;
    placement?: "top" | "right" | "bottom" | "left";
    closable?: boolean;
    onClose?: () => any;
    maskClosable?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const Drawer: React.FC<IDrawerProps> = ({ visible, onClose, maskClosable = true, style, className, children }) => {
    const drawerRef = useRef<HTMLDivElement>(judgeDOMExitAndCreateDOM("le-drawer-wrapper") as HTMLDivElement);

    const classes = classnames("le-drawer", className, {

    })

    const handleClickMask = () => {
        if (!maskClosable) return;
        onClose && onClose()
    }

    return visible ? ReactDOM.createPortal(
        <div className={classes} style={style} onClick={handleClickMask}>
            <div className="le-drawer-content">
                {children}
            </div>
        </div>,
        drawerRef.current
    ) : null
}



export default Drawer
