import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import "./styles/index.scss"
import "./App.scss"

const App = () => {
  return (
    <div className="App">
       <ButtonGroup>
            <Button>left</Button>
            <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button>left</Button>
            <Button>middle</Button>
            <Button>right</Button>
        </ButtonGroup>
    </div>
  );
}

export default App;
