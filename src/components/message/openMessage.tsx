import React, { ComponentClass } from 'react';
import { IMessageProps, modeType } from "./Message"
import Message from "./Message"
import ReactDOM from 'react-dom';

const openMessage = (options: IMessageProps, mode: "info" | "success" | "warning" | "error") => {

    // const {
    //     content,
    //     duration = 3,
    //     top = 24,
    //     showIcon = true,
    //     onClose,
    //     className,
    //     style
    // } = options
    const container = document.createElement('div')
    document.body.append(container)
  
    ReactDOM.render(<Message />, container);
}

export const info = (options: IMessageProps) => {
    openMessage(options, 'info')
}