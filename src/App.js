import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Michael Cheung'
      headerLinks [
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

         </Router>
    );
  }
}

export default App;