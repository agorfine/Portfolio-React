import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import './css/homepage.css'
import './css/navBar.css'
import './css/footer.css'
import './css/portfolio.css'
import './css/aboutme.css'
import './css/resume.css'
import './css/contact.css'

import Portfolio from './components/Portfolio';
import Aboutme from './components/Aboutme';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path = "/Aboutme" component = { Aboutme } />
          <Route exact path = "/Resume" component = { Resume } />
          <Route exact path = "/Contact" component = { Contact } />
          <Route exact path = "/Portfolio" component = { Portfolio }/>
          <Route path = "/" component = { Home } />
          <Redirect to= "/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
