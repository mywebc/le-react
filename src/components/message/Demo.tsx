import React from "react"
import Button from "../button/Button"
import Message from "./Message"

interface DemoType {
  type?: "info" | "success" | "error" | "warning",
  duration?: number,
  onClose?: boolean,
  icon?: string
}

export const Demo: React.FC<DemoType> = (props) => {

  const handleNormalClick = () => {
    props.type === 'info' && !props.onClose && Message.info("这是一条普通提示.")
    props.type === 'success' && !props.duration && Message.success("这是一条成功提示.")
    props.type === 'error' && Message.error("这是一条失败提示.")
    props.type === 'warning' && !props.icon && Message.warning("这是一条警告提示.")

    props.type === 'success' && props.duration && Message.success("这是一条成功提示.", {
      duration: 4000
    })

    props.type === 'info' && props.onClose && Message.info("这是一条普通提示.", {
      onClose: () => {
        alert("关闭回调")
      }
    })

    props.type === 'warning' && props.icon && Message.warning("这是一条警告提示.", {
      icon: "gift"
    })
  }
  return (
    <Button onClick={handleNormalClick}>{props.type}</Button>
  )
}

