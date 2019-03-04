import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import PersonalNavbar from './games/home/personalNavbar'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ClassicGames from './games/home/ClassicGames'
import ConnectFour from './games/connectFour/ConnectFour'
import TicTacToe from './games/tictactoe/TicTacToe'


class App extends Component {
  render() {
    return (
        <div>
        <Router>
            <div>
                <PersonalNavbar/>
                <Switch>
                    <Route exact path='/' component={ClassicGames}/>
                    <Route path="/ConnectFour" component={ConnectFour}/>
                    <Route path="/TicTacToe" component={TicTacToe}/>
                </Switch>
            </div>
        </Router>
        </div>
    );
  }
}

export default App;
