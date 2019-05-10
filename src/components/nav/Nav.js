import React from "react";

function Nav(props) {
    return (
        <nav className="nav d-flex justify-content-around">
        <h3>Clicky Game</h3>
        <h3>Click an image to begin!</h3>
        <h3>Score: {props.score}| Top Score: {props.highScore}</h3>
            
        </nav>
    );
}

export default Nav;