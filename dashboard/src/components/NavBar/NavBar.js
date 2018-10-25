import React from 'react'
import './NavBar.css'

const NavBar = () => (
    <div className="navbar">
        <div className="navbar__logo">
            <div className="logo"></div>
        </div>
        <div className="navbar__search">
            <i className="material-icons">search</i>
            <input className="navbar__input" placeholder="search..." type="search"></input>
        </div>
        <div className="navbar__profile">
            <div className="navbar__username"></div>
            <div className="navbar__picture"></div>
            <div className="navbar__dropdown"></div>
        </div>
    </div>
)

export default NavBar