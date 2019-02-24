import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './Rent.css';

import axios from 'axios';

import Paginator from '../../Components/Paginator/Paginator.jsx';
import Page from '../../Components/Page/Page.jsx';

let state = {
  total: 0,
  fromDate: Date.now(),
  rents: [],
  filters: []
};

class Rent extends Component {

  constructor(props) {
    super(props);
    this.state = state;
  }

  componentDidMount () {

    const num = 120,
          url = `http://localhost:5000/api?num=${num}`;

    if (this.state.rents.length === 0) {
      axios.get(url)
      .then(response => {
        this.setState({
          total: response.data.total,
          fromDate: response.data.from,
          rents: response.data.houses
        });
      })
      .catch(error => {
        console.log('Error fetching rent data', error);
      });
    }
  }

  componentWillUnmount () {
    state = this.state;
  }

  render () {

    const total = this.state.total;
    const itemsPerPage = 12;
    const numberOfPages = Math.ceil(total / itemsPerPage);

    return (
      <Router>
        <main className="content">
          <h2>Rent</h2>

          <Paginator numberOfPages={numberOfPages} url={this.props.match.url}/>

          <Route
            path={`${this.props.match.url}/:page`}
            component={(props) => {

              const pageNumber = props.match.params.page;
              const offset = (pageNumber - 1) * itemsPerPage;
              const page = this.state.rents.slice(offset, offset + itemsPerPage);

              return (<Page {...props} pageData={page} />)
            }}
          />
          <Route exact path={this.props.match.url} render={() => <Redirect to={`${this.props.match.url}/1`} />} />
        </main>
      </Router>
    );
  }
}

export default Rent;