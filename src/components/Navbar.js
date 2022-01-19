import React from "react"

import reactLogo from "../images/reactjs-icon.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo}  className="navbar--icon" alt="React logo"/>
      <h3 className="navbar--logo">ReactFacts</h3>
      <h4 className="navbar--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
