import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPuzzlePiece,
  faAngleRight,
  faAngleLeft,
  faEquals,
  faFilter,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button/Button';
import FilterRadio from './FilterRadio/FilterRadio';
import FilterSearch from './FilterSearch/FilterSearch';

import './index.css';
import { Props } from './index.interface';

/**
 * Filter components that contains all options of
 * sort, you may choose filter by 3 stage
 * 1) column
 * 2) signals (more, lest, equal and keep)
 * 3) text field
 *
 * @param {FilterInterface} filter
 * @param {Function} setFilter
 * @returns {React.ReactElement} - returns react element
 */

const Filter: FC<Props> = ({
  filter,
  setFilter,
}): React.ReactElement => {
  //* ----------------------------------------------
  //* Show or hide sub menu with filter
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  //* Dynamic styles
  const filterItemActiveCls: string = isOpen
    ? 'filter__item_active'
    : 'filter__item_noactive';
  const btnActiveCls: string = isOpen ? 'button_active' : '';
  const filterActiveCls: string = isOpen ? 'filter_active' : '';

  //* ----------------------------------------------------
  const { column, operation, search } = filter;
  const operationIcons = [
    faAngleRight,
    faAngleLeft,
    faEquals,
    faPuzzlePiece,
  ];

  //* In this case, we are handling radio buttons
  const handleChange = (event: React.ChangeEvent): void => {
    //* We are creating copy of state;
    const newState = { ...filter };
    const targer = event.target as HTMLInputElement;
    const chooseValue: string = targer.value;
    const chooseName: string = targer.name;

    //* We are choosing category about column or operation
    const filterObject =
      chooseName === 'column' ? newState.column : newState.operation;

    //* If it's value we are seting true
    //* else false
    for (let field in filterObject) {
      field !== chooseValue
        ? (filterObject[field] = false)
        : (filterObject[chooseValue] = true);
    }

    //* And finaly, we are seting new state
    setFilter(newState);
  };

  const handleSearch = (event: React.ChangeEvent): void => {
    const newState = { ...filter };
    const targer = event.target as HTMLInputElement;

    //* We are changing search value
    newState.search = targer.value;
    setFilter(newState);
  };

  return (
    <ul className={`filter ${filterActiveCls}`}>
      <li className="filter__item">
        <Button className={btnActiveCls} handleClick={handleClick}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faFilter} />
        </Button>
      </li>
      <li
        className={`filter__item filter__submenu ${filterItemActiveCls}`}
      >
        <FilterRadio
          className="filter__nested"
          handleChange={handleChange}
          fields={column}
          name="column"
        />
        <FilterRadio
          className="filter__nested"
          handleChange={handleChange}
          icons={operationIcons}
          fields={operation}
          name="operation"
        />
        <FilterSearch handleSearch={handleSearch} value={search} />
      </li>
    </ul>
  );
};

export default Filter;
