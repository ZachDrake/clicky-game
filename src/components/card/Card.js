import React from 'react';
//import cardinfo from '../../cards.json';


// let i = Math.floor(Math.random()* 12) -1;
// console.log(cardinfo)


function Card(props) {
    let imgStyle = {
        height: "200px",
        width: "200px",
        borderRadius: "20px"
    }
    return (
        <img className="imgCard" onClick={() => props.handleClick(props.src)} src={props.src} alt={props.src} />
);
}

export default Card;