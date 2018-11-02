import React from 'react'
import './NewAd.css'

const NewAd = () => (
    <div className="new-ad">
        <div className="new-ad__modal modal">
            <div className="new-ad__header">
                <p className="subtitle">New ad</p>
                <i className="material-icons">close</i>
            </div>
            <form className="new-ad__form">
                <input autoComplete="off" placeholder="name" className="form-input caption" id="name" type="search"></input>
                <p className="caption">size</p>
                <input autoComplete="off" placeholder="width" className="form-input caption" id="width" type="search"></input>
                <input autoComplete="off" placeholder="height" className="form-input caption" id="height" type="search"></input>
            </form>
            <button>Create</button>
        </div>
    </div>
)

export default NewAd