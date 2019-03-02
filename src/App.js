import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import GameTicTacToe from './games/tictactoe/gameTicTacToe'
import GameConnectFour from './games/connectFour/gameConnectFour'
import PersonalNavbar from './personalNavbar'
import { HashRouter as Router, Route } from 'react-router-dom';
import ConnectFour from './games/connectFour/ConnectFour'
import TicTacToe from './games/tictactoe/TicTacToe'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <PersonalNavbar/>
                <Route path="/ConnectFour" component={ConnectFour}/>
                <Route path="/TicTacToe" component={TicTacToe}/>
            </div>
        </Router>
    );
  }
}

export default App;
