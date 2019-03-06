import React, { Component } from 'react'
import Board from '../commonComponents/board'
import './TicTacToe.css'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
const gameLogic = require('../commonComponents/connectNLogic');



class GameTicTacToe extends Component{

    constructor(props){
        super(props);
        this.state = {
            history:[{
                boxes: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            numberOfBoxes: 3,
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const boxes = current.boxes.slice();
        if(gameLogic.calculateWinner(boxes, this.state.numberOfBoxes, this.state.numberOfBoxes > 4 ? 4 : 3) || boxes[i]) {
            return;
        }
        boxes[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                boxes: boxes,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    handleChange(number){
        const possible = [0,1,2,3,4,5,6,7,8,9];
        if(number >= 3 && number <= 6){
            this.setState({
                history:[{
                    boxes: Array(possible[number] * possible[number]).fill(null),
                }],
                stepNumber: 0,
                xIsNext: true,
                numberOfBoxes: possible[number],
            });
        }

    }

    reset(){
        this.setState({
            history:[{
                boxes: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            numberOfBoxes: 3,
        });
    }

    handleHistory(i){
        const newStep = this.state.stepNumber + i;
        if( newStep <= this.state.history.length - 1 && newStep >= 0) {
            let state = {
                stepNumber: this.state.stepNumber + i,
                xIsNext: !this.state.xIsNext,
            };
            this.setState(state);
        }
    }

    handleStyle(id){
        let style = {};
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = gameLogic.calculateWinner(current.boxes, this.state.numberOfBoxes, this.state.numberOfBoxes > 4 ? 4 : 3);
        const color = "black";
        if(id % this.state.numberOfBoxes === this.state.numberOfBoxes - 1){//last column of the board
            style.borderRight = "solid " + color;
        }
        if(id <= this.state.numberOfBoxes - 1) { //first row
            style.borderTop = "solid " + color;
        }
        if(id % this.state.numberOfBoxes === 0){//first column
            style.borderLeft = "solid " + color;
        }
        if(id >= this.state.numberOfBoxes * this.state.numberOfBoxes - this.state.numberOfBoxes){//last row
            style.borderBottom = "solid " + color;
        }
        if(winner && winner[1].includes(id)){
            style.color = "green";
        }
        return style;
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        let boxWinners = [-1,-1];
        let winner = gameLogic.calculateWinner(current.boxes, this.state.numberOfBoxes, this.state.numberOfBoxes > 4 ? 4 : 3);
        if(winner) {
            boxWinners = winner[1];
            winner = winner[0];
        }
        const status = winner ? 'The winner is ' + winner : 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <main role="main" className="container">
                    <div className="blackboard">
                    <div className="pagetitle-tic-tac">
                        <h1>
                            Tic-Tac-Toe Game
                        </h1>
                    </div>
                        <div className="body-tic-tac">
                            <div className="square-number">
                                <h5>Number of squares (from 3 to 6)</h5>
                                <input type="text" autoComplete="off" name="name" onChange={ (e) => {this.handleChange(e.target.value)}} />
                            </div>

                            <div className="status">
                                <div><h5>{ status }</h5></div>
                            </div>
                            <div className="game-board-tic-tac">
                                    <Board
                                        name = "box-tic-tac"
                                        boxes = { current.boxes }
                                        onClick = { (i) => this.handleClick(i) }
                                        boardSize = { this.state.numberOfBoxes }
                                        style = { (i) => this.handleStyle(i) }
                                    />
                            </div>
                            <div className="btn-toolbar tic-tac-buttons" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group-reset-tic-tac" role="group" aria-label="First group">
                                    <button  onClick={ () => this.reset() } className="btn personal-outline-danger mr-1" >Reset</button>
                                </div>
                                <div className="btn-group-nextprevious-tic-tac" role="group" aria-label="Second group">
                                    <button  onClick={ () => this.handleHistory(-1) } className="btn personal-outline-primary">Precedence</button>
                                    <button  onClick={ () => this.handleHistory(1) } className="btn personal-outline-primary">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        );
    }
}

export default GameTicTacToe;