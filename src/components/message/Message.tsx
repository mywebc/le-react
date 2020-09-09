import React, { useEffect, useRef, useState } from "react"
import classnames from "classnames"
import ReactDOM from "react-dom";
import { info } from "./openMessage"
import "./Message.scss"

export interface IMessageProps {
  content?: string | React.ReactNode;
  options: messageOptionsType;
  className?: string;
  style?: React.CSSProperties;
}

export type messageOptionsType = {
  duration?: number
  top?: number
  showIcon?: boolean
  onClose?: () => any
}

export type modeType = {
  info: Function;
}

const Message: React.FC<IMessageProps> & modeType = (props) => {
  const { content, options: { duration } } = props

  const [isShowMessage, setMessage] = useState<boolean>(true);

  // const divElement = document.createElement("div");
  // divElement.setAttribute("id", "le-message");
  // const modalEl = useRef<HTMLDivElement>(divElement);

  const classes = classnames("le-message", {
    hiddenMessage: !isShowMessage
  })

  // useEffect(() => {

  //   const $modal = modalEl.current;
  //   return () => {
  //     $modal.remove();
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage(false)
    }, duration)
  }, [])

  useEffect(() => {
    const hiddenDiv = document.querySelector(".hiddenMessage");
    hiddenDiv?.parentElement?.remove();
  }, [isShowMessage])

  return (
    <div className={classes}>
      <div className="toast_main">
        <div className="icon">
          icon
        </div>
        <div className="content">{content}</div>
      </div>
    </div>
  )
}

const isMessageWrapperExist = (messageWrapper: Element | null) => {
  if (messageWrapper === null) {
    messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("id", "le-message-wrapper");
    document.body.append(messageWrapper);
  }
  return messageWrapper
}

Message.info = (content: string, options: messageOptionsType) => {
  let messageWrapper = document.querySelector("#le-message-wrapper");
  const newMessageWrapper = isMessageWrapperExist(messageWrapper)
  const messageInner = document.createElement("div");
  newMessageWrapper.append(messageInner);
  ReactDOM.render(<Message content={content} options={options} />, document.querySelector("#le-message-wrapper>div:last-child"))
}


export default Message;
