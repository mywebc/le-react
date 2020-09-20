import React, { useState } from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import Message from "./components/message/Message"
import Rate from "./components/rate/Rate"
import "./styles/index.scss"
import "./App.scss"
import Icon from "./components/icon/Icon"
import Modal from "./components/modal/Modal"
import Notification from "./components/notification/Notification"

type notificationType = "info" | "success" | "error" | "warning" | "open"

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = (type: notificationType) => {
    Notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      duration: 0,
      // placement: "topRight",
      // icon: "smile"
    })
  }

  const modalClick = () => {
    setVisible(true)
    console.log("app", visible)
  }

  const handleModalClick = () => {
    Modal.open({
      visible: true,
      title: "test",
      content: "你好",
      onCancel: () => {console.log("12")},
      onConfirm: () => {console.log("confirm")}
    })
  }

  return (
    <div className="App">
      {/* <Button onClick={() => handleClick("open")}>open</Button>
      <Button onClick={() => handleClick("info")}>info</Button>
      <Button onClick={() => handleClick("success")}>success</Button>
      <Button onClick={() => handleClick("error")}>error</Button>
      <Button onClick={() => handleClick("warning")}>warning</Button> */}

      {<Button onClick={modalClick}>open</Button>}
      <Button onClick={handleModalClick}>open modal</Button>
      <Modal 
      visible={visible} 
      title={"this is modal title"} 
      onCancel={() => { setVisible(false) }} 
      onConfirm={() => {console.log("hello")}} 
      footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default App;
