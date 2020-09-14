import React from "react"
import Button from "../button/Button"
import Notification from "./Notification"

interface IDemoProps {
  type: "open" | "success" | "info" | "error" | "warning";
  duration: number;
  icon: string;
  placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
}

export const Demo: React.FC<IDemoProps> = (props) => {
  const { type, duration, icon, placement } = props

  const handleClick = () => {
    Notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      duration,
      icon,
      placement
    })
  }

  return (
    <Button onClick={handleClick}>{props.children}</Button>
  )
}

Demo.defaultProps = {
  duration: 4000,
  placement: "topRight",
  type: "open"
}

