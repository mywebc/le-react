import React, { useEffect, useRef } from "react"
import classnames from "classnames"
import ReactDOM from "react-dom";

interface IMessageProps {
}

const Message = (props: IMessageProps) => {
  const divElement = document.createElement("div");
  divElement.setAttribute("id", "le-message");
  const modalEl = useRef<HTMLDivElement>(divElement);

  const classes = classnames("le-message")



  useEffect(() => {

    const $modal = modalEl.current;
    return () => {
      $modal.remove();
    };
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={classes}>
        <div className="toast_main">
          <div>{"内容"}</div>
        </div>
      </div>,
      modalEl.current
    )
  )
}

Message.info = () => {
  console.log("info++")
}


export default Message;

