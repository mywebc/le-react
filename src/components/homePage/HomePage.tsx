import React from "react"
import Button from "../button/Button"
import "./HomePage.scss"


const HomePage: React.FC = () => {

  const toggleHome = () => {

  }

  return (
    <div className="le-homePage le-hidden-homePage">
      homePage
      <Button onClick={toggleHome}>go to doc</Button>
    </div>
  )
}

export default HomePage
