import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <div className="filter-checkbox">
      {
        Object.entries(props.filters)
          .map(filter => (
            <div
              key={filter[0]}
              className="checkbox"
            >
              <input
                id={filter[0]}
                type="checkbox"
                name={filter[0]}
                onChange={props.onFilterChange}
                className="checkbox__input"
                checked={filter[1]}
              />
              <label htmlFor={filter[0]}
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