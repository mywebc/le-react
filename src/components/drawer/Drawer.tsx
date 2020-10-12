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
    style?: React.CSSProperties;
    className?: string;
}

const Drawer: React.FC<IDrawerProps> = (props) => {
    const drawerRef = useRef<HTMLDivElement>(judgeDOMExitAndCreateDOM("le-drawer-wrapper") as HTMLDivElement);
    const { visible, onClose, style, className } = props
    const [visibleInner, setVisibleInner] = useState<boolean>(visible)

    const classes = classnames("le-drawer", className, {

    })

    useEffect(() => {
        setVisibleInner(visible)
    }, [visible])

    const handleClickMask = () => {
        setVisibleInner(false)
        onClose && onClose()
    }

    return visibleInner ? ReactDOM.createPortal(
        <div className={classes} style={style} onClick={handleClickMask}>
            <div className="le-drawer-content">
                {props.children}
            </div>
        </div>,
        drawerRef.current
    ) : null
}

export default Drawer
