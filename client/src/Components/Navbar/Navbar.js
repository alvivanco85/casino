import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
const axios = require('axios');
var email = "";
  //<Link className="nav-link" style={{color:"black"}} to="/play">Play</Link>
  //<Link className={window.location.pathname === "/login" ? "nav-link" : "nav-link disabled"} style={{color:"black"}} to="/play">Play</Link>
function NavBar(props) {
  axios.get('/api/user_data')
    .then(function (response) {
      console.log(response.data);
      email = response.data.email;
      console.log(email);
    })
    .catch(function (error) {
      console.log(error);
    });

    return (
        <Navbar fixed="top" className="Navbar" bg="light" expand="lg">
            <Navbar.Brand>Welcome!</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" style={{color:"black"}} to="/">Home</Link>
                        <Link className="nav-link" style={{color:"black"}} to="/login">{email !=== "" ? "Play" : "Login"}</Link>
                        <Link className="nav-link" style={{color:"black"}} to="/signup">Sign Up</Link>
                        {/* <Link className="nav-link" style={{color:"black"}} to="/leaderboards">Leaderboards</Link> */}
                        <Link className="nav-link" style={{color:"black"}} to="/rules">Rules</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
