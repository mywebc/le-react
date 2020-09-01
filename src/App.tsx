import React from 'react';
import Button from "./components/button/Button";
import "./styles/index.scss"
import "./App.scss"

const App = () => {
  return (
    <div className="App">
     <Button>default button</Button>
     <Button type={"primary"}>primary button</Button>
     <Button type={"dashed"}>dashed button</Button>
     <Button type={"success"}>success button</Button>
     <Button type={"warning"}>warning button</Button>
    </div>
  );
}

export default App;
