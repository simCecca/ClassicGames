import React, { Component } from 'react'
import Box from './box'

class Board extends Component{

    renderBox(i){
        return <Box index = { i } name = { this.props.name } style = { this.props.style } value = { this.props.getValue(i) } onClick={() => this.props.onClick(i)} style = { this.props.style } />;
    }

    renderBoard(numberOfBoxes){
        let board = [];
        for(let i = 0; i < numberOfBoxes; i++){
            board.push(
                <div className="board-row">
                    {
                        Array.from(new Array(numberOfBoxes), () => i).map((value, index) => {
                            return this.renderBox(index + (value * numberOfBoxes));
                        })
                    }
                </div>
            );
        }
        return board;
    }



    render(){
        return (
            <div>
                {this.renderBoard(this.props.boardSize)}
            </div>
        );
    }
}



export default Board;