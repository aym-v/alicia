import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="login">
            <div className="login__logo logo"></div>
            <div className="login__modal modal">
                <p className="subtitle">Login</p>
                <form>  
                    <input onChange={(event) => this.setState({username: event.target.value})} autoComplete="off" placeholder="username" className="form-input caption" id="username" type="search" value={this.state.username}></input>
                    <input onChange={(event) => this.setState({password: event.target.value})} placeholder="password" className="form-input caption" id="password" type="password" value={this.state.password}></input>
                </form>
                <button onClick={() => this.props.onClick(this.state.username, this.state.password)}>Enter</button>
            </div>
        </div>
        )
    }
}

export default Login