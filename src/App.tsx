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
import Input from "./components/input/Input"

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

      {/* <Carousel style={{ border: "1px solid #aaa", width: 200 }} duration={1000} afterChange={(i) => { console.log("index", i) }}>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "skyblue" }}>1</div>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "orange" }}>2</div>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "red" }}>3</div>
        <div style={{ width: 200, height: 200, textAlign: "center", backgroundColor: "black" }}>4</div>
      </Carousel> */}
      <p>icon</p>
      <Icon name={"txt"} />
      <Icon name={"txt"} />
      <Icon name={"pin"} />
      <Icon name={"reeor"} />
      <Icon name={"close"} />
      <Icon name={"share"} />
      <Icon name={"sorting"} style={{ fill: "#f56c6c" }} />
      <Icon name={"flag"} style={{ fill: "#409eff" }} />
      <Icon name={"Top"} style={{ fill: "#219c91" }} />
      <Icon name={"video"} style={{ fill: "#67c23a" }} />
      <Icon name={"vs"} style={{ fill: "skyblue" }} />
      <Input 
      // addonAfter=".com" 
      // addonBefore="http://" 
      onChange={(e) => { console.log("change",e) }} 
      // type={"textarea"} 
      // prefix={"sa"}
      clearable
      />
    </div>
  );
}

export default App;
