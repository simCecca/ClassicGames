import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class PersonalNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">Classic Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav className="justify-content-end" activeKey="/Home" >
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="/ConnectFour"><h5>Connected Four</h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" href="/TicTacToe"><h5>Tic-Tac-Toe</h5></Nav.Link>
                            </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PersonalNavbar;
