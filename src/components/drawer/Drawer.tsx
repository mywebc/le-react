import React, { useEffect, useRef } from "react"
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
    style?: React.CSSProperties;
    className?: string;
}


const Drawer: React.FC<IDrawerProps> = (props) => {
    let drawerRef = useRef<HTMLDivElement>();

    const { visible, style, className } = props

    const classes = classnames("le-drawer", className, {

    })

    useEffect(() => {
        if (visible) {
            drawerRef.current = judgeDOMExitAndCreateDOM("le-drawer-wrapper") as HTMLDivElement;
        }
        return () => {
            drawerRef.current?.remove();
        }
    }, [visible])

    return drawerRef.current ? ReactDOM.createPortal(
        <div className={classes} style={style}>
            <div className="le-drawer-content">
                {props.children}
            </div>
        </div>,
        drawerRef.current
    ) : null
}

export default Drawer
