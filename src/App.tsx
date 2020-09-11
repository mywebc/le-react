import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import Message from "./components/message/Message"
import Rate from "./components/rate/Rate"
import "./styles/index.scss"
import "./App.scss"
import Icon from "./components/icon/Icon"

const App = () => {
  const aa = (value: boolean, e: React.MouseEvent) => {
    console.log(value);
    console.log(e);
  }

  const handleClick = () => {
    Message.info("这是一条外部引用的提示", {
      duration: 200000,
      onClose: () => {
        console.log("close ++++")
      },
    })
  }
  const handleClick1 = () => {
    Message.info("这是一条外部引用的提示", {
      duration: 2000
    })
  }
  const handleClick2 = () => {
    Message.success("这是一条外部引用的提示", {
      duration: 2000
    })
  }
  const handleClick3 = () => {
    Message.error("这是一条外部引用的提示", {
      duration: 2000
    })
  }
  const handleClick4 = () => {
    Message.warning("这是一条外部引用的提示...", {
      duration: 200000,
      onClose: () => {
        console.log("close ++++")
      },
      icon: "gift"
    })
  }
  const character = [
    <Icon name="smile-fill" />,
    <Icon name="smile-fill" />,
    <Icon name="smile-fill" />,
    <Icon name="smile-fill" />,
  ]

  return (
    <div className="App">
      <Button onClick={handleClick}>normal</Button>
      <Button onClick={handleClick1}>info</Button>
      <Button onClick={handleClick2}>success</Button>
      <Button onClick={handleClick3}>error</Button>
      <Button onClick={handleClick4}>warning</Button>



      <Rate character={character} allowClear allowHalf/>
    </div>
  );
}

export default App;
