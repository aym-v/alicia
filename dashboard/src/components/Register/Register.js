import React, { Component } from 'react'
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            secret: ''
        }
    }

    componentDidUpdate() {
        if (!this.props.error && this.props.registered) {
            this.props.history.push("/login");
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
            <div className={`register ${this.props.error ? "failure" : "success"}`}>
                <div className="register__logo logo"></div>
                <div className="register__modal modal">
                    <p className="subtitle">Register</p>
                    <form>
                        <input onChange={(event) => this.setState({ username: event.target.value })} autoComplete="off" placeholder="username" className="form-input caption" id="username" type="search" value={this.state.username}></input>
                        <input onChange={(event) => this.setState({ password: event.target.value })} placeholder="password" className="form-input caption" id="password" type="password" value={this.state.password}></input>
                        <input placeholder="secret" className="form-input caption" id="secret" onChange={(event) => this.setState({ secret: event.target.value })} type="password"></input>
                    </form>
                    <button onClick={() => this.props.onClick(this.state.username, this.state.password, this.state.secret)}>{button}</button>
                </div>
            </div>
        )
    }
}

export default Register