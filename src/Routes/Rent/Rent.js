import React, { Component } from 'react';
import { BrowserRouter as Route, Link, Redirect } from 'react-router-dom';
import './Rent.css';

import axios from 'axios';

class Rent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rents: []
    };
  }

  componentDidMount () {

    axios.get('http://localhost:5000/api?num=10')
    .then(response => {
      this.setState({
        rents: response.data.houses
      });
      console.log(this.state.rents);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <main className="content">
        <h2>Rent</h2>

        <Route exact path={this.props.match.url} render={() => <Redirect to={`${this.props.match.url}/1`} />} />
        <Route path={`${this.props.match.url}/:pageNumber`} component={Page} />

        <h3>Pages</h3>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/1`}>1</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/2`}>2</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/3`}>3</Link>
          </li>
        </ul>
      </main>
    );
  }
}

export default Rent;
  
const Page = ({ match }) => (
  <div>
    <h3>{match.params.pageNumber}</h3>
  </div>
);