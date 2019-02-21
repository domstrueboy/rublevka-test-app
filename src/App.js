import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Sale from './Routes/Sale/Sale';
import Rent from './Routes/Rent/Rent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">
            <nav className="nav">
              <ul className="nav__list">

                <li className="nav__item">
                  <Link to="/sale">SALE</Link>
                </li>

                <li className="nav__item">
                  <Link to="/rent">RENT</Link>
                </li>

              </ul>
            </nav>
          </header>
          
          <hr />

          <Route exact path="/" render={() => <Redirect to="/sale" />} />
          <Route path="/sale" component={Sale} />
          <Route path="/rent" component={Rent} />
        </div>
      </Router>
    );
  }
}

export default App;