import React from 'react'
import './Register.css'

const Register = () => (
    <div className="register">
        <div className="register__logo logo"></div>
        <div className="register__modal modal">
            <p className="subtitle">Register</p>
            <form>  
                <input autoComplete="off" placeholder="username" className="form-input caption" id="username" type="search"></input>
                <input placeholder="password" className="form-input caption" id="password" type="password"></input>
                <input placeholder="secret" className="form-input caption" id="secret" type="password"></input>
            </form>
            <button>Create</button>
        </div>
    </div>
)

export default Register