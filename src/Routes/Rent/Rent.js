import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './Rent.css';

class Rent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main className="content">
        <h2>Rent</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
        <Route exact path={this.props.match.url} render={() => <h3>Please select a topic.</h3>} />
      </main>
    );
  }
}

export default Rent;
  
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);