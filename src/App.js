import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';

import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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


          <Route path="/" exact render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          
            <Footer />

          </Container>

         </Router>
    );
  }
}

export default App;