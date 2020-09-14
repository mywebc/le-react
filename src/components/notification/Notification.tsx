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
  onClose?: () => any
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
  { type: "open", name: "", fill: "#409eff" }
]

const Notification: React.FC<INotificationProps> & staticMethodsType = (props) => {
  const { message, description, duration, type, icon, placement, onClose, className, style } = props
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
    let newType = iconTypeArr.find(_ => _.type === type);
    if (icon) {
      if (newType) {
        newType.name = icon;
      }
    }
    if (!icon && newType?.type === "open") {
      if (newType) {
        newType.name = "";
      }
    }
    setType(newType)
  }, [])

  useEffect(() => {
    const notificationWrapper = document.querySelector("#le-notification-wrapper");
    removeAllClasses(notificationWrapper);
    notificationWrapper?.classList.add(`le-notification-wrapper-${placement}`)
  }, [placement])

  const removeAllClasses = (notificationWrapper: Element | null) => {
    if (document.querySelector(".le-notification-wrapper-topLeft")) {
      notificationWrapper?.classList.remove("le-notification-wrapper-topLeft");
    }
    if (document.querySelector(".le-notification-wrapper-topRight")) {
      notificationWrapper?.classList.remove("le-notification-wrapper-topRight");
    }
    if (document.querySelector(".le-notification-wrapper-bottomLeft")) {
      notificationWrapper?.classList.remove("le-notification-wrapper-bottomLeft");
    }
    if (document.querySelector(".le-notification-wrapper-bottomRight")) {
      notificationWrapper?.classList.remove("le-notification-wrapper-bottomRight");
    }
  }

  const handleClose = () => {
    setNotification(false)
    onClose && onClose();
  }

  return <div className={classes} style={style}>
    <div className="toast_main">
      {currentType && currentType.name !== "" && (
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


const isNotificationExist = (placement: notificationPlacement | undefined) => {
  // 判断是否有节点,没有则创建返回
  const notificationWrapper = judgeDOMExitAndCreateDOM(`le-notification-wrapper-${placement ? placement : "topRight"}`)
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
  />, document.querySelector(`#le-notification-wrapper-${options.placement ? options.placement : "topRight"}>div:last-child`))
}

Notification.open = (options: INotificationProps) => {
  isNotificationExist(options.placement)
  renderDom(options, "open")
}
Notification.success = (options: INotificationProps) => {
  isNotificationExist(options.placement)
  renderDom(options, "success")
}
Notification.error = (options: INotificationProps) => {
  isNotificationExist(options.placement)
  renderDom(options, "error")
}
Notification.warning = (options: INotificationProps) => {
  isNotificationExist(options.placement)
  renderDom(options, "warning")
}
Notification.info = (options: INotificationProps) => {
  isNotificationExist(options.placement)
  renderDom(options, "info")
}

Notification.defaultProps = {
  duration: 4000,
  type: "open",
  placement: "topRight"
}

export default Notification
