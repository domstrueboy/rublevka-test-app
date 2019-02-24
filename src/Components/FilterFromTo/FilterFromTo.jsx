import React from 'react';
import './FilterFromTo.css';

const FilterFromTo = (props) => {
  return (
    <div className="filter-from-to">
      <input
        type="number"
        name="input1"
        value={props.from === 0 ? '' : props.from}
        placeholder={props.placeholderFrom}
        onChange={props.onFilterChange}
        className="filter-from-to__input"
      />
      <span className="filter-from-to__dash">-</span>
      <input
        type="number"
        name="input2"
        value={props.to === 0 ? '' : props.to}
        placeholder={props.placeholderTo}
        onChange={props.onFilterChange}
        className="filter-from-to__input"
      />

    </div>
  );
}

export default FilterFromTo;