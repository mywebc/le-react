import React, { useState } from "react"
import classnames from "classnames"
import "./HomePage.scss"
import ReactDOM from "react-dom"

type HomePageStaticMethods = {
  open: Function;
}

const HomePage: React.FC & HomePageStaticMethods = () => {

  const toggleHome = () => {
    document.querySelector("#le-home-page-wrapper")?.remove()
  }

  return (
    <div className={"le-homePage"}>
      <button onClick={toggleHome}>go to doc</button>
    </div>
  )
}

HomePage.open = () => {
  const homePageWrapper = judgeDOMExitAndCreateDOMInner("le-home-page-wrapper");
  ReactDOM.render(<HomePage />, homePageWrapper)
}


 const judgeDOMExitAndCreateDOMInner = (id: string) => {
  let domWrapper = document.querySelector(`#${id}`);
  if (domWrapper === null) {
    domWrapper = document.createElement("div");
    domWrapper.setAttribute("id", id);
    document.body.append(domWrapper);
  }
  return domWrapper
}

export default HomePage
