import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import PlayPage from './Pages/PlayPage';
import LeaderboardsPage from './Pages/LeaderboardsPage';
import RulesPage from './Pages/RulesPage';

import Footer from './Components/Footer/Footer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      title: "Black Jack",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "Login", path: "/login"},
        {title: "Play", path: "/play"},
        {title: "Leaderboards", path: "/leaderboards"},
        {title: "Rules", path: "/rules"}
      ],
      home: {
        title: "Black-Jack",
        text: "Click on Image!"
      },
      login: {
        title: "Please login or Sign Up."
      },
      signup: {
        title: "Please create an account."
      },
      play: {
        title: "Place Bet to start"
      },
      leaderboards: {
        title: "Player Highscores"
      },
      rules: {
        title: "How to Play"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0"  fluid={true}>

          <Navbar className="Navbar border-bottom" expand="lg">
            <Navbar.Brand>Welcome!</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" style={{color:"black"}} to="/">Home</Link>
              <Link className="nav-link" style={{color:"black"}} to="/play">Play</Link>
              <Link className="nav-link" style={{color:"black"}} to="/login">Login</Link>
              <Link className="nav-link" style={{color:"black"}} to="/signup">Sign Up</Link>
              <Link className="nav-link" style={{color:"black"}} to="/leaderboards">Leaderboards</Link>
              <Link className="nav-link" style={{color:"black"}} to="/rules">Rules</Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
  
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/login"  render={() => <LoginPage title={this.state.login.title} />} />
          <Route path="/signup"  render={() => <SignupPage title={this.state.signup.title} />} />
          <Route path="/play"  render={() => <PlayPage title={this.state.play.title} />} />
          <Route path="/leaderboards" render={() => <LeaderboardsPage title={this.state.leaderboards.title} />} />
          <Route path="/rules" render={() => <RulesPage title={this.state.rules.title} />} />

          <Footer/>

        </Container>
      </Router>
    )
  }
}

export default App;