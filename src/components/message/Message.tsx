import React, { useEffect, useRef } from "react"
import classnames from "classnames"
import ReactDOM from "react-dom";
import { info } from "./openMessage"

export interface IMessageProps {
  content?: string | React.ReactNode
  duration?: number
  top?: number
  showIcon?: boolean
  onClose?: () => any
  className?: string
  style?: React.CSSProperties
}

export type modeType = {
  info: Function;
}

const Message: React.FC<IMessageProps> & modeType = (props) => {
  // const divElement = document.createElement("div");
  // divElement.setAttribute("id", "le-message");
  // const modalEl = useRef<HTMLDivElement>(divElement);

  const classes = classnames("le-message")

  // useEffect(() => {

  //   const $modal = modalEl.current;
  //   return () => {
  //     $modal.remove();
  //   };
  // }, []);

  return (
    <div className={classes}>
      <div className="toast_main">
        <div>{"内容"}</div>
      </div>
    </div>
  )
}

Message.info = () => {
  const divElement = document.createElement("div");
  divElement.setAttribute("id", "le-message-wrapper");
  document.body.append(divElement)
  ReactDOM.render(<Message />, document.getElementById("le-message-wrapper"))
}

export default Message;
