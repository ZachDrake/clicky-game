import React, { Component } from "react";
import Card from "../card/Card";
import cards from '../../cards.json';

export default class Board extends Component {

    cardWrapStyle = {
        margin: "20px"
    }

    state = {
        cards: [],
        clicked: {}
    }

    shuffle = (array, cb) => {
        let rval = [];
        while(rval.length < array.length){
            const card = array[Math.floor(Math.random() * array.length)];
            if (!rval.includes(card)){
                rval.push(card);
            }
        }
        cb(rval);
    }

    componentDidMount() {
        this.shuffle(cards, shuffled => {
            console.log(shuffled)
            this.setState({
                cards: shuffled,
                
            })
        })
    }

    handleClick = (src) => {
        if (!this.state.clicked[src]){
            const clicked = {...this.state.clicked};
            clicked[src] = true;
            this.shuffle(cards, shuffled => {
                console.log(shuffled)
                this.setState({cards: shuffled, clicked}, () => {
                    this.props.updateScore((state, props) => {
                        console.log(state);
                        if (state.score >= state.highScore){
                            console.log('hit condition 1');
                            return {
                                score: state.score + 1, // state.value is 1 in this case because of previous `setState`.
                                highScore: state.highScore + 1
                            };
                        } else {
                            console.log('hit condition 2');
                            return {
                                score: state.score + 1
                            }
                        }
    
                      });
                })
            })
        } else {
            let clicked = {};
            this.setState({clicked}, this.props.restart);
        }
    }

   
    render() {
        console.log(this.state.cards);
        return (
            <div className="container">
                {this.state.cards.map(({ src }, idx) => {
                    if (!(idx % 4)) {
                        let firstCard = this.state.cards[idx],
                            secondCard = this.state.cards[idx + 1],
                            thirdCard = this.state.cards[idx + 2],
                            fourthCard = this.state.cards[idx + 3];
                        let row = [firstCard, secondCard, thirdCard, fourthCard];
                        console.log(row, idx)
                        return (
                            <div className="row d-flex justify-content-around">
                                {row.map(card => {
                                    if (card) {
                                        return (
                                        <div style={this.cardWrapStyle} className="col-sm-2">
                                            <Card handleClick={this.handleClick} src={card.src} />
                                        </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    }
                })}
                {/*

                    <div className="col-sm-2">
                        test
                    </div>
                    <div className="col-sm-2">
                        test
                    </div>
                </div> */}

            </div>
        );
    }


}

