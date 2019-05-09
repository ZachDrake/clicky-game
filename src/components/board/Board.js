import React from "react";
import Card from "../card/Card";

function Board() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="col-sm-2">
                    <Card />
                </div>
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
                <div className="col-sm-2">
                    test
                </div>
            </div>
        </div>
    );
}

export default Board;