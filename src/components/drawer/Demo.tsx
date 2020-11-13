import Button from "../button/Button"
import Drawer from "./Drawer"
import React, { useState } from "react"

interface DemoProps {
  placement?: "top" | "right" | "bottom" | "left"
}

export const Demo: React.FC<DemoProps> = React.memo(({ placement, children }) => {

  const [visible, setVisible] = useState(false)

  const onClose = () => {
    setVisible(false)
  }

  const open = () => {
    setVisible(true)
  }

  return (
    <>
      <Button onClick={open}>{children}</Button>
      <Drawer
        title={"Basic Drawer"}
        onClose={onClose}
        visible={visible}
        placement={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
})
