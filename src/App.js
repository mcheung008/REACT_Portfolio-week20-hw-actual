import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Michael Cheung',
      headerLinks: [
        { title: "Portfolio", path: "/" },
        { title: "About Me", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      portfolio: {
        title: "Michael Cheung",
        subTitle: "Welcome to my Portfolio!",
        text: "Based in Eugene, Oregon. I've been helping many clients with their startups and maintaining their online presence."
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's chat"
      }
    }
  }
  render() {
    return ( 
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Michael Cheung</Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Portfolio</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

            <Footer />

          </Container>

         </Router>
    );
  }
}

export default App;