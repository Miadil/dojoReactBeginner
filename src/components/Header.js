import React, { Component } from "react"
import logo from "../logo.svg"

import "./Header.css"

class Header extends Component {
  // etape 5 declarer la state
  state = {
    status: false
  }
  // etape 11 on declare la fonction
  handleClick = () => {
    // etape 12 on teste si la fonction ce lance bien
    console.log("on est la !")
    // etape 13 on modifie la state
    this.setState({ status: !this.state.status })
  }

  render() {
    // etape 1
    //console.log(this)
    // etape 2
    //console.log(this.props)
    // etape 3
    const { id, name } = this.props
    // etape 6
    const { status } = this.state

    return (
      <header className="header-header">
        <img src={logo} className="header-logo" alt="logo" />
        <div>
          {/* 
            etape 4 utiliser les props id name  
            etape 7 utiliser la state  
            etape 8 lui aplique une ternaire 
          */}
          id: {id} name: {name} status: {status ? "not connected" : "connected"}
          <p>
            {/* 
              etape 9 on crée le bouton 
              etape 10 on lui applique un onclick
            */}
            <input type="button" value="login" onClick={this.handleClick} />
          </p>
        </div>
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}

export default Header
