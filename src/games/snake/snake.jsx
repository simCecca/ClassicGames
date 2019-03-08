import React, { Component } from 'react';
import SnakeLogic from '../gameLogics/SnakeLogic';
import Board from '../commonComponents/board';
import Utilities from '../gameLogics/Utilities';
import './Snake.css';

class Snake extends Component {

    constructor(props){
        super(props);

        const boardSize = 10;
        this.snakeLogic = new SnakeLogic(boardSize);
        this.scoreForEachApple = 20;
        const boxes = Utilities.createEmptyMatrix(boardSize);
        this.state = {
            boxes: boxes,
            snakePosition: {row: 0, column: 0},
            snakeDirection: {x: 1, y: 0},
            snakeTail: [],
            applePosition: this.snakeLogic.newApplePosition(),//{row: random, column: random}
            boardSize: boardSize,
            score: 0,
            amIDied: false,
            isGamePaused: false,
        };
    }

    componentDidMount = () => {
        //add the event for changing the direction of the snake
        document.addEventListener('keydown', (direction) => {
            this.handleDirection(direction);
        });

        setTimeout(() => {this.gameLoop()}, this.state.snakeTail.length ? (200 / this.state.snakeTail.length) + 100 : 400);
    };

    handleDirection(direction){
        const newDirection = this.snakeLogic.controller(direction, this.state.snakeDirection);
        if(newDirection) this.setState({ snakeDirection: {x: newDirection.x, y: newDirection.y} });
    }

    didIHitABorder(position){
        if(position.row >= this.state.boardSize || position.row < 0)
            return true;
        if(position.column >= this.state.boardSize || position.column < 0)
            return true;
        return false;
    }

    gameLoop() {
        if(!this.state.amIDied && !this.state.isGamePaused) {//understund if I am in the same position of the apple
            const state = {
                score: this.state.score,
                applePosition: this.state.applePosition,
                snakeTail: this.state.snakeTail
            };
            if (this.state.applePosition.row === this.state.snakePosition.row && this.state.applePosition.column === this.state.snakePosition.column) {
                state.score += this.scoreForEachApple;
                state.applePosition = this.snakeLogic.newApplePosition();
                state.snakeTail.push({row: -1, column: -1});
            }
            //set the new position
            const newRow = this.state.snakePosition.row + this.state.snakeDirection.y;
            const newColumn = this.state.snakePosition.column + this.state.snakeDirection.x;
            state.snakePosition = {row: newRow, column: newColumn};

            //if I'm urting one of the edges then I die
            state.amIDied = this.didIHitABorder(state.snakePosition);

            //upgrade the position of the tail
            const hold = {row: this.state.snakePosition.row, column: this.state.snakePosition.column};
            state.snakeTail.forEach((currentTailPiece, index) => {
                const current = {row: currentTailPiece.row, column: currentTailPiece.column};
                state.snakeTail[index] = {row: hold.row, column: hold.column};
                hold.row = current.row;
                hold.column = current.column;

                //if I'm eating myself than I die
                if (state.snakeTail[index].row === state.snakePosition.row && state.snakeTail[index].column === state.snakePosition.column)
                    state.amIDied = true;
            });

            this.setState(state);
            setTimeout(() => {
                this.gameLoop()
            }, this.state.snakeTail.length ? (200 / this.state.snakeTail.length) + 100 : 400);
        }
    }


    getBoxValue(id){
        const coordinates = Utilities.matrixToArrayConverter(id, this.state.boardSize);
        return this.state.boxes[coordinates.row][coordinates.column];
    }

    getName(id){
        const coordinates = Utilities.matrixToArrayConverter(id, this.state.boardSize);
        let name = "";
        name += ((coordinates.row + coordinates.column) % 2 === 0) ? " ground-light " : " ground-dark ";
        if(coordinates.row === this.state.applePosition.row && coordinates.column === this.state.applePosition.column)
            name = "apple";
        this.state.snakeTail.forEach((tailPiece, index, tail) => {
            if(tailPiece.row === coordinates.row && tailPiece.column === coordinates.column) {
                if (index === this.state.snakeTail.length - 1) {
                    name += " end-of-tail-";
                    let inFrontOf;
                    if(index > 0)
                        inFrontOf = tail[index-1];
                    else inFrontOf = this.state.snakePosition;
                    name += (inFrontOf.column > tailPiece.column) ? "right" : (inFrontOf.column < tailPiece.column) ? "left" : (inFrontOf.row > tailPiece.row) ? "bottom" : "top";
                }
                else name = "tail";
            }
        });
        if(coordinates.row === this.state.snakePosition.row && coordinates.column === this.state.snakePosition.column) {
            name = "head-";
            name += (this.state.snakeDirection.x > 0) ? "right" : (this.state.snakeDirection.x < 0) ? "left" : (this.state.snakeDirection.y < 0) ? "top" : "bottom";
        }

        return name;
    }

    reset() {
        if(this.state.amIDied) {
            const boardSize = 10;
            this.snakeLogic = new SnakeLogic(boardSize);
            this.scoreForEachApple = 20;
            const boxes = Utilities.createEmptyMatrix(boardSize);
            this.setState({
                boxes: boxes,
                snakePosition: {row: 0, column: 0},
                snakeDirection: {x: 1, y: 0},
                snakeTail: [],
                applePosition: this.snakeLogic.newApplePosition(),//{row: random, column: random}
                boardSize: boardSize,
                score: 0,
                amIDied: false,
                isGamePaused: false,
            });
            setTimeout(() => {
                this.gameLoop()
            }, this.state.snakeTail.length ? (200 / this.state.snakeTail.length) + 100 : 400);
        }
    }

    pause(){
        if(this.state.isGamePaused){
            this.setState({isGamePaused: false});
            setTimeout(() => {
                this.gameLoop()
            }, this.state.snakeTail.length ? (200 / this.state.snakeTail.length) + 100 : 400);
        }
        else this.setState({isGamePaused: true});
    }

    render() {
        return (
            <main role="main" className="container">
                <div className="row">
                    <div className= "body-snake col">
                        <div className="body-board">
                            <Board
                                name = { (i) => "box-snake " + this.getName(i) }
                                boardSize = { this.state.boardSize }
                                getValue = { (i) => this.getBoxValue(i) }
                                onClick = { (i) => null }
                                style = { (i) => null}
                            />
                        </div>
                        <div className="page-title-snake">
                            <div className="title-text"> <p>Snake</p></div>
                            <div className="game-over-snake"><p>{(this.state.amIDied) ? "Gama Over" : ""}</p></div>
                            <div className= "snake-score row mr-auto">
                                <p>Score: {this.state.score}</p>
                                <div className="col-1">
                                    <div className="btn-group" role="group" aria-label="Second group">
                                        <button  onClick={ () => this.reset() } className="btn btn-danger mr-2">Reset</button>
                                        <button  onClick={ () => this.pause() } className="btn btn-warning">{(this.state.isGamePaused) ? "play" : "pause"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Snake;
