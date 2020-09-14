import React, { useEffect, useState } from "react"
import classnames from "classnames"
import "./Notification.scss"
import { judgeDOMExitAndCreateDOM } from "../../utils"
import ReactDOM from "react-dom"
import Icon from "../icon/Icon"

interface INotificationProps {
  message: string;
  description: string;
  duration?: number;
  type?: notificationType;
  icon?: string;
  placement?: notificationPlacement;
  className?: string;
  style?: React.CSSProperties;
}

type notificationType = "info" | "success" | "error" | "warning" | "open"
type notificationPlacement = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

export type staticMethodsType = {
  open: Function;
  info: Function;
  success: Function;
  error: Function;
  warning: Function;
}

type iconType = {
  type: notificationType;
  name: string;
  fill: string;
}

const iconTypeArr: iconType[] = [
  { type: "success", name: "success-fill", fill: "#67c23a" },
  { type: "info", name: "prompt-fill", fill: "#409eff" },
  { type: "error", name: "reeor-fill", fill: "#f56c6c" },
  { type: "warning", name: "warning-fill", fill: "#e69b2b" },
]

const Notification: React.FC<INotificationProps> & staticMethodsType = (props) => {
  const { message, description, duration, type, icon, placement, className, style } = props
  const [isShowNotification, setNotification] = useState<boolean>(true)
  const [currentType, setType] = useState<iconType>()

  const classes = classnames("le-notification", className, {
    hiddenNotification: !isShowNotification,
  })

  useEffect(() => {
    if (duration) {
      if (duration === 0) return;
      setTimeout(() => {
        setNotification(false)
      }, duration)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const hiddenDiv = document.querySelector(".hiddenNotification");
      hiddenDiv?.parentElement?.remove();
    }, 250)
  }, [isShowNotification])

  useEffect(() => {
    const newType = iconTypeArr.find(_ => _.type === type);
    if (icon && newType) {
      newType.name = icon
      newType.fill = "#409eff"
    }
    setType(newType)
  }, [])

  useEffect(() => {
    const notificationWrapper = document.querySelector("#le-notification-wrapper");
    notificationWrapper?.classList.add(`le-notification-wrapper-${placement}`)
  }, [])

  const handleClose = () => {
    setNotification(false)
  }

  return <div className={classes} style={style}>
    <div className="toast_main">
      {currentType && (
        <div className="main_left">
          <Icon name={currentType.name} style={{ fill: currentType.fill }} />
        </div>
      )}
      <div className="main_right">
        <div className="main_header">
          <div className="main_header_title">{message}</div>
          <div className="main_header_icon" onClick={handleClose}><Icon name={"close"} /></div>
        </div>
        <div className="main_content">
          {description}
        </div>
      </div>
    </div>
  </div>
}

const isNotificationExist = () => {
  // 判断是否有节点,没有则创建返回
  const notificationWrapper = judgeDOMExitAndCreateDOM("le-notification-wrapper")
  const messageInner = document.createElement("div");
  notificationWrapper.append(messageInner);
}

const renderDom = (options: INotificationProps, type: notificationType) => {
  ReactDOM.render(<Notification
    message={options.message}
    description={options.description}
    duration={options.duration}
    type={type}
    icon={options.icon}
    placement={options.placement}
  />, document.querySelector("#le-notification-wrapper>div:last-child"))
}

Notification.open = (options: INotificationProps) => {
  isNotificationExist()
  renderDom(options, "open")
}
Notification.success = (options: INotificationProps) => {
  isNotificationExist()
  renderDom(options, "success")
}
Notification.error = (options: INotificationProps) => {
  isNotificationExist()
  renderDom(options, "error")
}
Notification.warning = (options: INotificationProps) => {
  isNotificationExist()
  renderDom(options, "warning")
}
Notification.info = (options: INotificationProps) => {
  isNotificationExist()
  renderDom(options, "info")
}

Notification.defaultProps = {
  duration: 4000,
  type: "open",
  placement: "topRight"
}

export default Notification
