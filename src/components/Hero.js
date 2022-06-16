import React from "react";
import PhotoGrid from '../images/photo-grid.png'

function Hero () {
    return (
        <div className="hero-box">
            <img className="photo-grid" src={PhotoGrid} alt='Airbnb Grid' />
            <div className="hero-title">Online Experiences</div>
            <div className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</div>
        </div>
    )
}

export default Hero