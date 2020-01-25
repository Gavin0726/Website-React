import React, { Component } from 'react';
import PageWrapper from './Components/PageWrapper';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

//Pages
import Home from './Components/Pages/Home';
import Course from './Components/Pages/Course';
import PreEnrolment from './Components/Pages/PreEnrolment';
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

              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Course">
                <Course />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/PreEnrolment">
                <PreEnrolment />
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
     
        <Footer />
      </div>
    );
  }
}

export default App;
