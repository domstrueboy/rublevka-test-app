import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
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
          
          <hr />

          <Route exact path="/" render={() => <Redirect to="/sale"/>} />
          <Route path="/sale" component={Sale} />
          <Route path="/rent" component={Rent} />
        </div>
      </Router>
    );
  }
}

const Sale = () => (
  <div>
    <h2>Sale</h2>
  </div>
);

const Rent = ({ match }) => (
  <div>
    <h2>Rent</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;