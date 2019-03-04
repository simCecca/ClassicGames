import React, { Component } from 'react';
import Board from '../commonComponents/board'
import './ConnectFour.css'
const gameLogic = require('./connectFourLogic');


class GameConnectFour extends Component{

    constructor(props){
        super(props);
        this.state = {
            history: [{
                boxes: Array.from(new Array(7*7), (value, index) => null),
                colors: Array.from(new Array(7*7), (value, index) => null),
            }],
            stepNumber: 0,
            boardSize: 7,
            isXNext: true,
        };
    }

    _findFreePosition(column, boxes){
        let counter = column;
        let before = boxes[counter];
        counter += this.state.boardSize;
        for(let i = 1; i < this.state.boardSize; i++){
            if(before == null && boxes[counter] != null){
                return counter - 7;
            }
            if(boxes[counter] == null && i === this.state.boardSize-1){
                return counter;
            }
            counter += 7;
        }
        return null;
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const boxes = current.boxes.slice();
        const colors = current.colors.slice();
        const column = i % this.state.boardSize;
        const freePosition = this._findFreePosition(column, boxes);
        if(gameLogic.calculateWinner(boxes)){
            return;
        }
        if(freePosition != null){
            boxes[freePosition] = this.state.isXNext ? '#d70000' : '#CCCC00';
            colors[freePosition] = this.state.isXNext ? '#d70000' : '#CCCC00';
            this.setState({
                history: history.concat([{
                    boxes: boxes,
                    colors: colors,
                }]),
                stepNumber: history.length,
                isXNext: !this.state.isXNext,
            });
        }
    }

    reset(){
        this.setState({
            history: [{
                boxes: Array.from(new Array(7*7), (value, index) => null),
                colors: Array.from(new Array(7*7), (value, index) => null),
            }],
            stepNumber: 0,
            isXNext: true,
        });
    }

    handleHistory(i){
        const newStep = this.state.stepNumber + i;
        if( newStep <= this.state.history.length - 1 && newStep >= 0) {
            let state = {
                stepNumber: this.state.stepNumber + i,
                isXNext: !this.state.isXNext,
            };
            this.setState(state);
        }
    }

    handleStyle(id){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = gameLogic.calculateWinner(current.boxes);
        let style = {background: current.colors[id]};
        if(winner && winner[1].includes(id))
            style.border = "0.1em solid green";
        return style;

    }

    render(){

        let boxWinners = [-1,-1];

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = gameLogic.calculateWinner(current.boxes);
        let type;
        if(winner){
            type = winner[0] === '#d70000' ? 'Red' : 'Yellow';
            boxWinners = winner[1];
        }
        const status = winner ? 'The winner is ' + type : 'Next Player is ' + (this.state.isXNext ? 'Red' : 'Yellow');
        return (
            <main role="main" className="container">
                <div className="page-title-connect-four">
                    <h1>
                        Connect Four
                    </h1>
                </div>
                <div className="body-connect-four">
                    <div className="status">
                        <div><h3>{ status }</h3></div>
                    </div>
                    <Board
                        name = "box-connect-four btn-circle"
                        boardSize = { this.state.boardSize }
                        boxes = { "" }
                        onClick = { (i) => this.handleClick(i) }
                        style = { (i) => this.handleStyle(i)}
                    />
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group-reset" role="group" aria-label="First group">
                            <button  onClick={ () => this.reset() } className="btn btn-danger">Reset</button>
                        </div>
                        <div className="btn-group-nextprevious" role="group" aria-label="Second group">
                            <button  onClick={ () => this.handleHistory(-1) } className="btn btn-primary">Precedence</button>
                            <button  onClick={ () => this.handleHistory(1) } className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default GameConnectFour;