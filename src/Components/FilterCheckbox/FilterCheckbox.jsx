import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <div className="filter-checkbox">
      {
        props.cases
          .map(filter => (
            <label key={filter}>
              <input
                type="checkbox"
                name={filter}
                onChange={props.onTypeChange}
              />
                {filter}
            </label>
          ))
      }
    </div>
  );
}

export default FilterCheckbox;