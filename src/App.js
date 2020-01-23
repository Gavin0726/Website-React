import React, { Component } from 'react';
import PageWrapper from './Components/PageWrapper';

import {
  BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";

//Pages
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Common/Footer';

class App extends Component {


  render() {

    return (
      <div>
      <Router>
      <PageWrapper>

        <Switch>


        <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          </PageWrapper>
      </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;
