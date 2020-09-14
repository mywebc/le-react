import React from 'react';
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

  const handleClick = (type: notificationType) => {
    Notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      duration: 0,
      placement: "bottomRight"
    })
  }

  return (
    <div className="App">
      <Button onClick={() => handleClick("open")}>open</Button>
      <Button onClick={() => handleClick("info")}>info</Button>
      <Button onClick={() => handleClick("success")}>success</Button>
      <Button onClick={() => handleClick("error")}>error</Button>
      <Button onClick={() => handleClick("warning")}>warning</Button>
    </div>
  );
}

export default App;
