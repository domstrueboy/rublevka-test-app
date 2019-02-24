import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';

import Sale from './Routes/Sale/Sale.jsx';
import Rent from './Routes/Rent/Rent.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">

            <div className="logo">RUBLEVKA</div>
            
            <nav className="nav">
              <ul className="nav__list">

                <li className="nav__item">
                  <NavLink
                    to="/sale"
                    className="nav__link"
                  >
                    SALE
                  </NavLink>
                </li>

                <li className="nav__item">
                  <NavLink
                    to="/rent"
                    className="nav__link"
                  >
                    RENT
                  </NavLink>
                </li>

              </ul>
            </nav>
          </header>

          <Route exact path="/" render={() => <Redirect to="/sale" />} />
          <Route path="/sale" component={Sale} />
          <Route path="/rent" component={Rent} something="foo" />
        </div>
      </Router>
    );
  }
}

export default App;