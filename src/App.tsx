import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import "./styles/index.scss"
import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <ButtonGroup>
        <Button>aaa</Button>
        <Button>vbbbb</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
