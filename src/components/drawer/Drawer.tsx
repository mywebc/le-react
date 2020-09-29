import React, { useEffect, useRef } from "react"
import { judgeDOMExitAndCreateDOM } from "../../utils";
import classnames from "classnames"
import ReactDOM from "react-dom";
import "./Drawer.scss"

interface IDrawerProps {
    title: string;
    visible: boolean;
    placement?: "top" | "right" | "bottom" | "left";
    closable?:boolean;
    onClose?:() => any;
    style?: React.CSSProperties;
    className?: string;
}


const Drawer: React.FC<IDrawerProps> = (props) => {
    const drawerRef = useRef(judgeDOMExitAndCreateDOM("le-drawer-wrapper"));

    const { style, className } = props

    const classes = classnames("le-drawer", className, {

    })

    useEffect(() => {
        return () => {
            drawerRef.current.remove();
        }
    }, [])

    return ReactDOM.createPortal(
        <div className={classes} style={style}>
            <div className="le-drawer-content">
            
            </div>
        </div>,
        drawerRef.current
    )
}

export default Drawer
