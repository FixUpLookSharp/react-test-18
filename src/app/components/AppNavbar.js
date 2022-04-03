import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
const AppNavbar = () => {
    const mr15 = {
      marginRight: 15
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Учимся рекат</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav>
                                <Link style={mr15} to="/">Главная</Link>
                            </Nav>
                            <Nav>
                                <Link style={mr15} to="/games">Игры</Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;