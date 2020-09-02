import React, { useEffect, useState } from "react"
import "./Button.scss"
import { Console } from "console"

const ButtonGroup: React.FC = (props) => {
  const [isValid, setValid] = useState(false)

  useEffect(() => {
    // console.log(props)
    // try {
    //   (props.children as any).map((_: { type: { name: string } }) => {
    //     if (_.type.name === "Button" || _.type.name === "ProxyFacade") {
    //       setValid(true)
    //     } else {
    //       console.error("The child element is not valid!!")
    //     }
    //   })
    // } catch (error) {
    //   setValid(false)
    //   console.error("The child element is not valid!!")
    // }
  }, [])

  useEffect(() => {
    if (Array.isArray(props.children) && props.children.length < 2) {
      setValid(false)
      console.error("Contains at least two child elements!!")
    }
  }, [])

  return (
    <div className="le_btn_group">
      {isValid && props.children}
    </div>
  )
}

export default ButtonGroup;