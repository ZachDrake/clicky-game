import React from "react";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 d-flex justify-content-center">Clicky Game!</h1>
                <p className="display d-flex justify-content-center"><strong>Click on an image to earn points, but don't click on any more than once!</strong></p>
            </div>
        </div>
    );
}

export default Jumbotron;