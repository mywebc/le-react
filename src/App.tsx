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

      {/* <Layout>
        <Header style={{ backgroundColor: "#7dbcea", height: 80 }}>Header</Header>
        <Content style={{ backgroundColor: "rgba(16, 142, 233, 1)", height: 200 }}>Content</Content>
        <Footer style={{ backgroundColor: "#7dbcea", height: 80 }}>Footer</Footer>
      </Layout> */}
      <p></p>
      <Layout>
        <Side style={{ backgroundColor: "#7dbcea", height: 200, width: 100 }}>Side</Side>
        {/* <Header style={{ backgroundColor: "#7dbcea", height: 80 }}>Header</Header> */}
        <Layout>
          <Header style={{ backgroundColor: "#7dbcea", height: 80 }}>Header</Header>
          <Content style={{ backgroundColor: "rgba(16, 142, 233, 1)", height: 200 }}>Content</Content>
          {/* <Side style={{ backgroundColor: "#7dbcea", height: 200, width: 100 }}>Side</Side> */}
          {/* <Content style={{ backgroundColor: "rgba(16, 142, 233, 1)", height: 200 }}>Content</Content> */}
          <Footer style={{ backgroundColor: "#7dbcea", height: 80 }}>Footer</Footer>

        </Layout>
        {/* <Footer style={{ backgroundColor: "#7dbcea", height: 80 }}>Footer</Footer> */}
      </Layout>

      <Header>
       1231231231
      </Header>
    </div>
  );
}

export default App;
