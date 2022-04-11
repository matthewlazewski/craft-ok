import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Advertise from './components/Advertise';
import Magazine from './components/Magazine';
import Contact from './components/Contact';
import Home from './components/Home'

class App extends Component {

  render(){
    return (

      <BrowserRouter>
        <Switch>
          <Route 
            exact path = "/"
            render= {props => (
              <Home {...props} />
            )}
          />
          <Route 
            exact path = "/magazine"
            render= {props => (
              <Magazine {...props} />
            )}
          />
          <Route 
            exact path = "/about"
            render= {props => (
              <About {...props} />
            )}
          />
          <Route 
            exact path = "/advertise"
            render= {props => (
              <Advertise {...props} />
            )}
          />
          <Route 
            exact path = "/contact"
            render= {props => (
              <Contact {...props} />
            )}
          />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
