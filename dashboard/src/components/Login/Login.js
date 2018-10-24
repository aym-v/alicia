import React from 'react'
import './Login.css'

const Login = () => (
    <div className="login">
        <div className="login__logo logo"></div>
        <div className="login__modal modal">
            <p className="subtitle">Login</p>
            <form>  
                <input autoComplete="off" placeholder="username" className="caption" id="username" type="search"></input>
                <input placeholder="password" className="caption" id="password" type="password"></input>
            </form>
            <button>Enter</button>
        </div>
    </div>
)

export default Login