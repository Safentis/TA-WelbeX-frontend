import React, { FC } from 'react';

import './SortSearch.css';
import { Props } from './SortSearch.interface';

/**
 * SortSearch component
 * @returns {React.ReactElement} - returns react element
 */

const SortSearch: FC<Props> = ({}): React.ReactElement => {
  return (
    <ul className="sort-search sort__nested">
      <li className="sort-search__item">
        <input type="text" />
      </li>
    </ul>
  );
};

export default SortSearch;
