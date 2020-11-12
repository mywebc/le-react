import React, { useEffect, useRef } from "react"
import "./HomePage.scss"
import ReactDOM from "react-dom"

type HomePageStaticMethods = {
  open: Function;
}

const HomePage: React.FC & HomePageStaticMethods = () => {

  const homePageWrapper = useRef(judgeDOMExitAndCreateDOMInner("le-home-page-wrapper"))

  const toggleHome = () => {
    window.location.href = window.location.origin + "/gettingStarted"
    //   document.querySelector("#le-home-page-wrapper")?.remove()
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return ReactDOM.createPortal(
    <div className={"le-homePage"}>
      <button onClick={toggleHome}>go to doc</button>
    </div>,
    homePageWrapper.current
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
