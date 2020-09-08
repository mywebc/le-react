import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import Message from "./components/message/Message"
import "./styles/index.scss"
import "./App.scss"

const App = () => {
  const aa = (value: boolean, e: React.MouseEvent) => {
    console.log(value);
    console.log(e);
  }

  const handleClick = () => {
    console.log("handleClick", 1231231)
    // Message.info()
  }

  return (
    <div className="App">
      {/* <Switch defaultChecked={true} onChange={aa} loading={true} /> */}
      {/* <Switch defaultChecked={true} onChange={aa}  size={"small"}/> */}
      <Button onClick={handleClick}>open message</Button>
    </div>
  );
}

export default App;
