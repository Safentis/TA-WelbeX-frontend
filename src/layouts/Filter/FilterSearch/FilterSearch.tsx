import React, { FC } from 'react';

import './FilterSearch.css';
import { Props } from './FilterSearch.interface';

/**
 * FilterSearch component
 * @param {string} value - required
 * @param {(event: React.ChangeEvent) => void} handleSearch - required
 * @returns {React.ReactElement} - returns react element
 */

const FilterSearch: FC<Props> = ({
  className = '',
  value,
  handleSearch,
}): React.ReactElement => {
  return (
    <ul className={'filter-search ' + className}>
      <li className="filter-search__item">
        <input
          className="input filter-search__input"
          placeholder="Search..."
          onChange={handleSearch}
          value={value}
          type="text"
        />
      </li>
    </ul>
  );
};

export default FilterSearch;
