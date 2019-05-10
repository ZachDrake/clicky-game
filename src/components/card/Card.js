import React from 'react';
//import cardinfo from '../../cards.json';


// let i = Math.floor(Math.random()* 12) -1;
// console.log(cardinfo)


function Card(props) {
    return (
        <img className="imgCard" onClick={() => props.handleClick(props.src)} src={props.src} alt={props.src} />
);
}

export default Card;