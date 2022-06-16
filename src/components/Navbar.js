import React from "react";
import AirbnbLogo from '../images/airbnb-logo.png'

function Navbar () {
    return (
        <nav className="nav-box">
            <img className="logo" src={AirbnbLogo} alt='Airbnb Logo' />
        </nav>
    )
}

export default Navbar