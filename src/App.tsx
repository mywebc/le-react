import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import Message from "./components/message/Message"
import Rate from "./components/rate/Rate"
import "./styles/index.scss"
import "./App.scss"
import Icon from "./components/icon/Icon"
import Modal from "./components/modal/Modal"

const App = () => {


  return (
    <div className="App">

      <Rate onHoverChange={(x) => {console.log(x)}} allowHalf />

      <Modal/>

    </div>
  );
}

export default App;
