import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './Rent.css';

import axios from 'axios';

import Paginator from '../../Components/Paginator/Paginator.jsx';
import Page from '../../Components/Page/Page.jsx';

import FilterCheckbox from '../../Components/FilterCheckbox/FilterCheckbox';
import filterByTypes from '../../Functions/filterByTypes'

let state = {
  total: 0,
  fromDate: Date.now(),
  rents: [],
  filtered: [],
  filters: {
    type: {
      HOUSE: false,
      TOWNHOUSE: false,
      APPARTMENT: false,
      ROOM: false
    }
  }
};

class Rent extends Component {

  constructor(props) {
    super(props);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.state = state;
  }

  handleTypeChange (e) {

    const state = {...this.state};
    state.filters.type[e.target.name] = e.target.checked;
    this.setState({state});

    this.setState({
      filtered: filterByTypes(this.state.rents, this.state.filters.type)
    });
  }

  componentDidMount () {

    const num = 120,
          url = `http://localhost:5000/api?num=${num}`;

    if (this.state.rents.length === 0) {
      axios.get(url)
      .then(response => {
        this.setState({
          total: response.data.total,
          fromDate: response.data.lastDate,
          rents: response.data.houses,
          filtered: response.data.houses
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

    const total = this.state.filtered.length;
    const itemsPerPage = 12;
    const numberOfPages = Math.ceil(total / itemsPerPage);

    return (
      <Router>
        <main className="content">
          <section className="filters">
            <h2>Filters:</h2>

            <div className="filter-range">
              <label>
                <input type="range"/>
              </label>
              <label>
                <input type="range"/>
              </label>
            </div>

            <FilterCheckbox
              cases={Object.keys(this.state.filters.type)}
              onTypeChange={this.handleTypeChange}
            />
          </section>

          <Paginator numberOfPages={numberOfPages} url={this.props.match.url}/>

          <Route
            path={`${this.props.match.url}/:page`}
            component={(props) => {

              const pageNumber = props.match.params.page;
              const offset = (pageNumber - 1) * itemsPerPage;
              const page = this.state.filtered.slice(offset, offset + itemsPerPage);

              return (<Page {...props} pageData={page} />)
            }}
          />
          <Route exact path={this.props.match.url} render={() => <Redirect to={`${this.props.match.url}/1`} />} />
        
          <Paginator numberOfPages={numberOfPages} url={this.props.match.url}/>
        
        </main>
      </Router>
    );
  }
}

export default Rent;