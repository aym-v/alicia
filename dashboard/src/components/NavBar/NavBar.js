import React, { Component } from 'react'
import './NavBar.css'
import Arrow from './Arrow'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false
        }
    }

    componentDidUpdate() {
        if (this.state.showDropDown) {
            window.addEventListener('click', this.handleGlobalClick)
        } else {
            window.removeEventListener('click', this.handleGlobalClick);
        } if (!this.props.token) {
            window.removeEventListener('click', this.handleGlobalClick);
            console.log('hey')
            this.props.history.push("/login");
        }
    }

    triggerDropdown = () => {
        this.setState(
            {
                showDropDown: !this.state.showDropDown
            }
        )
    }

    handleGlobalClick = (event) => {
        const navbarNode = document.querySelector('.navbar');
        if (!navbarNode.contains(event.target)) {
            this.triggerDropdown();
        }
    }


    render() {
        const { user, picture = 'https://randomuser.me/api/portraits/women/90.jpg' } = this.props;
        return (
            <div className={`navbar${this.state.showDropDown ? ' dropdown' : ''}`}>
                <div className="navbar__logo">
                    <div className="logo"></div>
                </div>
                <div className="navbar__search">
                    <i className="material-icons">search</i>
                    <input className="navbar__input" placeholder="Search..." type="search"></input>
                </div>
                <div onClick={this.triggerDropdown} className="navbar__profile">
                    <div className="navbar__username">Hi, {user}</div>
                    <div className="navbar__dropdown">
                        <img src={picture} alt="profile" className="navbar__picture"></img>
                        <div className="navbar__arrow"><Arrow></Arrow></div>
                    </div>
                </div>
                <div className="navbar__dropdown-menu">
                    <div className="navbar__signout" onClick={this.props.onLogout}><i className="material-icons">exit_to_app</i>Logout</div>
                </div>
            </div>
        )
    }
}

export default NavBar