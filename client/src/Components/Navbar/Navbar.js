import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './style.css';

function NavBar(props) {

    return (
        <Navbar fixed="top" className="Navbar" bg="light" expand="lg">
            <Navbar.Brand>Welcome!</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" style={{color:"black"}} to="/">Home</Link>
                        <Link className="nav-link" style={{color:"black"}} to="/play">Play</Link>
                        <Link className="nav-link" style={{color:"black"}} to="/login">Login</Link>
                        <Link className="nav-link" style={{color:"black"}} to="/signup">Sign Up</Link>
                        {/* <Link className="nav-link" style={{color:"black"}} to="/leaderboards">Leaderboards</Link> */}
                        <Link className="nav-link" style={{color:"black"}} to="/rules">Rules</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar