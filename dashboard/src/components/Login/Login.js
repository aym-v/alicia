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

    componentDidUpdate() {
        if (!this.props.error && this.props.token) {
            this.props.history.push("/ads");
        }
    }

    handleKeyDown(key) {
        if (key.key === "Enter") {
            this.props.onClick(this.state.username, this.state.password)
        }
    }

    render() {
        let button;
        if (this.props.isFetching) {
            button = (
                <div className="fetchbar">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        } else {
            button = 'Enter'
        }

        return (
            <div className={`login ${this.props.error ? "failure" : "success"}`} onKeyDown={this.handleKeyDown.bind(this)}>
                <div className="login__logo logo"></div>
                <div className="login__modal modal">
                    <p className="subtitle">Login</p>
                    <form>
                        <input onChange={(event) => this.setState({ username: event.target.value })} autoComplete="off" placeholder="username" className="form-input caption" id="username" type="search" value={this.state.username}></input>
                        <input onChange={(event) => this.setState({ password: event.target.value })} placeholder="password" className="form-input caption" id="password" type="password" value={this.state.password}></input>
                    </form>
                    <button onClick={() => this.props.onClick(this.state.username, this.state.password)}>{button}</button>
                </div>
                <div onClick={() => this.props.history.push('/register')} className={"login__register-button"}>Register</div>
            </div>
        )
    }
}

export default Login