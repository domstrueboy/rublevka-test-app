import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './Sale.css';

import axios from 'axios';

import Paginator from '../../Components/Paginator/Paginator.jsx';
import Page from '../../Components/Page/Page.jsx';

import FilterFromTo from '../../Components/FilterFromTo/FilterFromTo';
import FilterCheckbox from '../../Components/FilterCheckbox/FilterCheckbox';
import filterByPrices from '../../Functions/filterByPrices';
import filterBySquares from '../../Functions/filterBySquares';
import filterByTypes from '../../Functions/filterByTypes';
import filterByFurnishTypes from '../../Functions/filterByFurnishTypes';

let state = {
  total: 0,
  fromDate: Date.now(),
  sales: [],
  filtered: [],
  filters: {
    price: {
      from: 0,
      to: 0
    },
    square: {
      from: 0,
      to: 0
    },
    type: {
      HOUSE: false,
      TOWNHOUSE: false,
      APPARTMENT: false,
      ROOM: false
    },
    furnishType: {
      ELITE: false,
      EURO: false,
      REGULAR: false,
      NOTHING: false
    }
  }
};

class Sale extends Component {

  constructor(props) {

    super(props);

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSquareChange = this.handleSquareChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleFurnishTypeChange = this.handleFurnishTypeChange.bind(this);

    this.handleAnyChange = this.handleAnyChange.bind(this);

    this.state = state;
  }

  handlePriceChange (e) {

    const state = {...this.state};
    if (e.target.name === 'input1') {
      state.filters.price.from = e.target.value;
    } else if (e.target.name === 'input2') {
      state.filters.price.to = e.target.value;
    };
    this.setState({state});
    this.handleAnyChange();
  }

  handleSquareChange (e) {

    const state = {...this.state};
    if (e.target.name === 'input1') {
      state.filters.square.from = e.target.value;
    } else if (e.target.name === 'input2') {
      state.filters.square.to = e.target.value;
    };
    this.setState({state});
    this.handleAnyChange();
  }

  handleTypeChange (e) {

    const state = {...this.state};
    state.filters.type[e.target.name] = e.target.checked;
    this.setState({state});
    this.handleAnyChange();
  }

  handleFurnishTypeChange (e) {

    const state = {...this.state};
    state.filters.furnishType[e.target.name] = e.target.checked;
    this.setState({state});
    this.handleAnyChange();
  }

  handleAnyChange () {

    let filtered = this.state.sales;

    filtered = filterByPrices(filtered, this.state.filters.price.from, this.state.filters.price.to);
    filtered = filterBySquares(filtered, this.state.filters.square.from, this.state.filters.square.to);
    filtered = filterByTypes(filtered, this.state.filters.type);
    filtered = filterByFurnishTypes(filtered, this.state.filters.furnishType);

    this.setState({
      filtered: filtered
    });
  }

  componentDidMount () {

    const num = 120,
          url = `http://localhost:5000/api?num=${num}`;

    if (this.state.sales.length === 0) {
      axios.get(url)
      .then(response => {
        this.setState({
          total: response.data.total,
          fromDate: response.data.lastDate,
          sales: response.data.houses,
          filtered: response.data.houses
        });
      })
      .catch(error => {
        console.log('Error fetching sale data', error);
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

            <FilterFromTo
              from={this.state.filters.price.from}
              placeholderFrom="from price"
              to={this.state.filters.price.to}
              placeholderTo="to price"
              onFilterChange={this.handlePriceChange}
            />

            <FilterFromTo
              from={this.state.filters.square.from}
              placeholderFrom="from square"
              to={this.state.filters.square.to}
              placeholderTo="to square"
              onFilterChange={this.handleSquareChange}
            />

            <FilterCheckbox
              filters={this.state.filters.type}
              onFilterChange={this.handleTypeChange}
            />

            <FilterCheckbox
              filters={this.state.filters.furnishType}
              onFilterChange={this.handleFurnishTypeChange}
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

export default Sale;