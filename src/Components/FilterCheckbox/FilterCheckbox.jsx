import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <div className="filter-checkbox">
      {
        props.cases
          .map(filter => (
            <div
              key={filter}
              className="checkbox"
            >
              <input
                id={filter}
                type="checkbox"
                name={filter}
                onChange={props.onFilterChange}
                className="checkbox__input"
              />
              <label htmlFor={filter}
                className="checkbox__label"
              >
                {filter}
              </label>
            </div>
          ))
      }
    </div>
  );
}

export default FilterCheckbox;