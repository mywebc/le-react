import React from 'react'
import logo from '../../images/logo.png'
import HomePage from "../../homePage/HomePage"

export const Logo = () => {

    const getToHome = () => {
        window.location = window.location.origin
    }

    return (
        <img src={logo} alt="That's my logo" style={{ width: 40, height: 40, cursor: "pointer" }} onClick={getToHome} />
    )
}