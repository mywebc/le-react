import React, { useEffect } from "react"
import classnames from "classnames"
import "./Icon.scss"

interface IIconProps {
    name: string;
    iconLibrary?: string;
    onClick?: React.MouseEventHandler
    className?: string;
    style?: React.CSSProperties
}

const Icon: React.FC<IIconProps> = ({ iconLibrary = '//at.alicdn.com/t/font_2049320_ixovveh7lgf.js', onClick, className, name, style }) => {

    useEffect(() => {
        const iconScript = document.querySelector("#icon-library")
        if (iconScript == null) {
            const scriptElem = document.createElement('script');
            scriptElem.id = "icon-library";
            scriptElem.src = iconLibrary
            document.body.appendChild(scriptElem);
        }
        return () => {
            const targeEl = document.getElementById("icon-library");
            targeEl?.parentNode?.removeChild(targeEl);
        }
    }, [iconLibrary])

    const classes = classnames("le-icon", className)

    return (
        <svg className={classes}><use xlinkHref={`#icon-${name}`} style={style} onClick={onClick}/></svg>
    )
}

export default Icon;

