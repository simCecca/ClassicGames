import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class PersonalNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <img className="mr-2" src="http://simonececcarelli.altervista.org/ClassicGamesImages/icon.png"/>
                <Navbar.Brand href="/ClassicGames/#/"> Classic Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav className="justify-content-end" activeKey="/Home" >
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="/ClassicGames/#/ConnectFour"><h5>Connect Four</h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" href="/ClassicGames/#/Snake"><h5>Snake</h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" href="/ClassicGames/#/TicTacToe"><h5>Tic-Tac-Toe</h5></Nav.Link>
                            </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PersonalNavbar;
