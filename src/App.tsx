import React, { useState } from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import Message from "./components/message/Message"
import Rate from "./components/rate/Rate"
import "./styles/index.scss"
import "./App.scss"
import Icon from "./components/icon/Icon"
import Modal from "./components/modal/Modal"

const App = () => {

  const [visible, setVisible] = useState<boolean>(false)
  const handleClick = () => {
    setVisible(true)
  }
  const handleClick2 = () => {
    setVisible(false)
  }
  return (
    <div className="App">
      <Button onClick={handleClick}>open</Button>
      <Button onClick={handleClick2}>close</Button>
      <Modal visible={visible} />
    </div>
  );
}

export default App;
