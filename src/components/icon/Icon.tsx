import React, { useEffect } from "react"
import classnames from "classnames"
import "./Icon.scss"

interface IIconProps {
    name: string;
    iconLibrary?: string;
    className?: string;
    style?: React.CSSProperties
}

const Icon: React.FC<IIconProps> = (props) => {

    useEffect(() => {
        const scriptElem = document.createElement('script');
        scriptElem.id = "icon-library";
        scriptElem.src = props.iconLibrary || '//at.alicdn.com/t/font_2049320_ixovveh7lgf.js';
        document.body.appendChild(scriptElem);
        return () => {
            const targeEl = document.getElementById("icon-library");
            targeEl?.parentNode?.removeChild(targeEl);
        }
    }, [])

    const classes = classnames("le-icon", props.className)

    return (
        <svg className={classes}><use xlinkHref={`#icon-${props.name}`} style={props.style} /></svg>
    )
}

Icon.defaultProps = {
    iconLibrary: '//at.alicdn.com/t/font_2049320_ixovveh7lgf.js'
}

export default Icon;

