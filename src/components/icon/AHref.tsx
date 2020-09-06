import React from 'react'

interface IAHrefProps {
    name: string;
    src: string;
}

const AHref: React.FC<IAHrefProps> = (props) => {
    return <a href={props.src} target="_blank">{props.name}</a>
}

export default AHref;