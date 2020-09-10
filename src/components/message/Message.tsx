import React, { useEffect, useRef, useState } from "react"
import classnames from "classnames"
import ReactDOM from "react-dom";
import Icon from "../icon/Icon"
import "./Message.scss"

export interface IMessageProps {
  content?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: mesageType
  showIcon?: boolean
  duration?: number
  onClose?: () => any
  icon?: string
}

type mesageType = "info" | "success" | "error" | "warning"

export type messageOptionsType = {
  icon?: string
  showIcon?: boolean
  onClose?: () => any
  duration?: number
}

export type modeType = {
  info: Function;
  success: Function;
  error: Function;
  warning: Function;
}

type iconType = {
  type: string;
  name: string;
  fill: string;
}

const iconTypeArr: iconType[] = [
  { type: "success", name: "success-fill", fill: "#67c23a" },
  { type: "info", name: "prompt-fill", fill: "#409eff" },
  { type: "error", name: "reeor-fill", fill: "#f56c6c" },
  { type: "warning", name: "warning-fill", fill: "#e69b2b" },
]

const Message: React.FC<IMessageProps> & modeType = (props) => {
  const { content, onClose, icon, type, duration, showIcon } = props

  const [isShowMessage, setMessage] = useState<boolean>(true);
  const [currentIcon, setIcon] = useState<iconType>()

  const classes = classnames("le-message", {
    hiddenMessage: !isShowMessage
  })

  useEffect(() => {
    setTimeout(() => {
      setMessage(false)
    }, duration)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const hiddenDiv = document.querySelector(".hiddenMessage");
      hiddenDiv?.parentElement?.remove();
    }, 200)
  }, [isShowMessage])

  useEffect(() => {
    const newIcon = icon ? { type: "primary", name: icon, fill: "#409eff" } : iconTypeArr.find(_ => _.type === type);
    console.log("showIcon", showIcon);
    setIcon(newIcon)
  }, [])

  const handleClose = () => {
    setMessage(false);
    onClose && onClose();
  }

  return (
    <div className={classes}>
      <div className="toast_main">
        <div className="main_left">
          {currentIcon && showIcon && (
            <div className="icon">
              <Icon name={currentIcon.name} style={{ fill: currentIcon.fill }} />
            </div>
          )}
          <div className="content">{content}</div>
        </div>
        <div className="main_right">
          {onClose && (
            <div className="close" onClick={handleClose}>
              <Icon name={"close"} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Message.defaultProps = {
  showIcon: true,
  duration: 2000
}

const isMessageWrapperExist = () => {
  let messageWrapper = document.querySelector("#le-message-wrapper");
  if (messageWrapper === null) {
    messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("id", "le-message-wrapper");
    document.body.append(messageWrapper);
  }
  const messageInner = document.createElement("div");
  messageWrapper.append(messageInner);
}

const renderDom = (content: string, options: messageOptionsType, type: mesageType) => {
  ReactDOM.render(<Message
    content={content}
    showIcon={options?.showIcon}
    duration={options?.duration}
    icon={options?.icon}
    onClose={options?.onClose}
    type={type} />, document.querySelector("#le-message-wrapper>div:last-child"))
}

Message.info = (content: string, options: messageOptionsType) => {
  isMessageWrapperExist()
  renderDom(content, options, "info")
}
Message.success = (content: string, options: messageOptionsType) => {
  isMessageWrapperExist();
  renderDom(content, options, "success")
}
Message.error = (content: string, options: messageOptionsType) => {
  isMessageWrapperExist()
  renderDom(content, options, "error")
}
Message.warning = (content: string, options: messageOptionsType) => {
  isMessageWrapperExist()
  renderDom(content, options, "warning")
}

export default Message;
