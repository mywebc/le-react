import React, { useEffect, useState } from "react"
import classnames from "classnames"
import ReactDOM from "react-dom";
import Icon from "../icon/Icon"
import "./Message.scss"
import { judgeDOMExitAndCreateDOM } from "../../utils";

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

const Message: React.FC<IMessageProps> & modeType = ({ content, onClose, icon, type, duration = 2000, showIcon = true, className, style }) => {

  const [isShowMessage, setMessage] = useState<boolean>(true);
  const [currentIcon, setIcon] = useState<iconType>()

  const classes = classnames("le-message", className, {
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
    setIcon(newIcon)
  }, [])

  const handleClose = () => {
    setMessage(false);
    onClose && onClose();
  }

  return (
    <div className={classes} style={style}>
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

const isMessageWrapperExist = () => {
  // 判断是否有节点,没有则创建返回
  const messageWrapper = judgeDOMExitAndCreateDOM("le-message-wrapper")
  const messageInner = document.createElement("div");
  messageWrapper.append(messageInner);
}

const renderDom = (content: string, options: messageOptionsType, type: mesageType) => {
  ReactDOM.render(<Message
    {...options}
    content={content}
    type={type}
  />, document.querySelector("#le-message-wrapper>div:last-child"))
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
