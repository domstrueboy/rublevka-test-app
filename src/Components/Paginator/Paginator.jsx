import React from 'react';
import './Paginator.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

const Paginator = (props) => {
  console.log(props);
  return (
    <Router>
      <ul className="paginator">
        {
          [...Array(props.numberOfPages).keys()]
            .map(i => {
              const page = i + 1;
                return (
                  <li
                    key={`rent-page-${page}`}
                    className="paginator__item"
                  >
                    <Link
                      to={`${props.url}/${page}`}
                      className="paginator__link"
                    >
                      {page}
                    </Link>
                  </li>
                );
            })
        }
      </ul>
    </Router>
  );
}

export default Paginator;