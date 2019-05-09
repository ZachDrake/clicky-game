import React from "react";
import "../assets/styles/Nav.css";


function Nav() {
    return (
        <nav className="nav d-flex justify-content-around">
        <h3>Clicky Game</h3>
        <h3>Click an image to begin!</h3>
        <h3>Score: {}| Top Score: {}</h3>
            
        </nav>
    );
}

export default Nav;