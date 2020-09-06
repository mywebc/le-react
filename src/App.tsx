import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import "./styles/index.scss"
import "./App.scss"
import Table from "./components/table/Table"
import Switch from "./components/switch/Switch"

const App = () => {
  const aa = (value: boolean, e: React.MouseEvent) => {
    console.log(value);
    console.log(e);
  }

  return (
    <div className="App">
      {/* <Switch defaultChecked={true} onChange={aa} loading={true} /> */}
      {/* <Switch defaultChecked={true} onChange={aa}  size={"small"}/> */}
      <Button  disabled={true}>asdasd</Button>
    </div>
  );
}

export default App;
