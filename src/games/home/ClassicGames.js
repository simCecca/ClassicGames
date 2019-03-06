import React, { Component } from 'react'
import GameColumn from './gameColumn'
import './ClassicGames.css'

class ClassicGames extends Component {
    render() {
        return (
            <main role="main">
                <div className="album py-5 games-home-body">
                    <div className="container home-container">
                        <div className="row first-home-row">
                            <GameColumn name = "Connect Four" link = "/ClassicGames/#/ConnectFour" linkImage = "http://simonececcarelli.altervista.org/ClassicGamesImages/connectFour.PNG" description = "This is an implementation of the game Connect Four. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs"/>
                            <GameColumn name = "Snake - Under Construction" link = "#" description = "This is an implementation of the Snake game"/>
                            <GameColumn name = "Tic-Tac-Toe" link = "/ClassicGames/#/TicTacToe" linkImage = "http://simonececcarelli.altervista.org/ClassicGamesImages/ticTacToe.PNG" description = "This is an implementation of the Tic-Tac-Toe game, in which, you can choose the number of rows/columns "/>
                        </div>
                    </div>
                </div>

            </main>
        );
    }
}

export default ClassicGames;