import React, { useState } from 'react';
import Button from "./components/button/Button";
import "./styles/index.scss"
import "./App.scss"
import Icon from "./components/icon/Icon"
import Modal from "./components/modal/Modal"
import Notification from "./components/notification/Notification"
import Affix from "./components/affix/Affix"
import Drawer from "./components/drawer/Drawer"
import { Layout, Header, Footer, Content, Side } from "./components/layout"
import Carousel from "./components/carousel/Carousel"

type notificationType = "info" | "success" | "error" | "warning" | "open"

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const onClose = () => {
    setVisible(false)
  }

  const handleClick = () => {
    setVisible(true)
  }

  const handleNotification = () => {
    Notification.open({
      message: "这是一条test"
    })
  }

  const handleNotification1 = () => {
    Notification.success({
      message: "这是一条test"
    })
  }

  return (
    <div className="App">
      <Button onClick={handleClick}>open</Button>
      <Button onClick={handleNotification}>Notification</Button>
      <Button onClick={handleNotification1}>Notification</Button>

      <Carousel style={{ border: "1px solid #aaa", width: 200 }}>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "skyblue" }}>1</div>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "orange" }}>2</div>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "red" }}>3</div>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "yellow" }}>4</div>
      </Carousel>
    </div >
  );
}

export default App;
