import React from 'react';
import { IMessageProps } from "./Message"
import Message from "./Message"
import ReactDOM from 'react-dom';
import App from "../../App"

const openMessage = (options:IMessageProps, mode: "info" | "success" | "warning" | "error") => {

    const {
        content,
        duration = 3,
        top = 24,
        showIcon = true,
        onClose,
        className,
        style
      } = options

      const container = document.createElement('div');
      container.setAttribute("id","message-container");
      document.body.append(container);
     
    //   ReactDOM.render(<App />, document.getElementById('root'));
}

export const info = (options:IMessageProps) => {
    openMessage(options, 'info')
}