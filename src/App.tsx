import React from 'react';
import Button from "./components/button/Button";
import "./styles/index.scss"
import "./App.scss"

const App = () => {
  return (
    <div className="App">
     <Button>default button</Button>
     <Button type={"primary"} disabled>primary</Button>
     <Button type={"dashed"}>dashed</Button>
     <Button type={"success"}>success</Button>
     <Button type={"warning"}>warning</Button>
      <Button type={"error"}>error</Button>
      <Button type={"info"}>info</Button>
      <Button type={"text"}>text</Button>

    </div>
  );
}

export default App;
