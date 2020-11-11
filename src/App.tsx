import React, { useState } from 'react';
import Button from "./components/button/Button";
import "./styles/index.scss"
import "./App.scss"
import Icon from "./components/icon/Icon"
import Modal from "./components/modal/Modal"
import Notification from "./components/notification/Notification"
import Affix from "./components/affix/Affix"
import Drawer from "./components/drawer/Drawer"

type notificationType = "info" | "success" | "error" | "warning" | "open"

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const onClose = () => {
    setVisible(false)
  }

  const handleClick = () => {
    setVisible(true)
  }

  return (
    <div className="App">
      <Button onClick={handleClick}>open</Button>
      <Drawer
        title={"Basic Drawer"}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      {/* <Modal visible={visible} title={"title"} onCancel={ () => setVisible(false)}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </Modal> */}
    </div>
  );
}

export default App;
