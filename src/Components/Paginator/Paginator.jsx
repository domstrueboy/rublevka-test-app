import React from 'react';
import './Paginator.css';

import { BrowserRouter as Router, NavLink, withRouter } from 'react-router-dom';

const Paginator = (props) => {
  return (
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
                    <NavLink
                      to={`${props.url}/${page}`}
                      className="paginator__link"
                    >
                      {page}
                    </NavLink>
                  </li>
                );
            })
        }
      </ul>
  );
}

export default withRouter(Paginator);