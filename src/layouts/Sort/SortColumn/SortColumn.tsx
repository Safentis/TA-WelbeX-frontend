import React, { FC } from 'react';

import './SortColumn.css';
import { Props } from './SortColumn.interface';
import { useAppContext } from '../../../application/App/App.context';

/**
 * SortColumn component
 * @returns {React.ReactElement} - returns react element
 */

const SortColumn: FC<Props> = ({}): React.ReactElement => {
  //* ----------------------------------------------------
  //* In this case we used context
  const { state, setState } = useAppContext();
  
  const handleChange = (event: React.ChangeEvent): void => {
    //* We are creating copy of state;
    const newState = { ...state };

    //* After we are choosing of the column value
    const targer = event.target as HTMLInputElement;
    const column = newState.filter.column;
    const name: string = targer.value;

    //* If it's value we are seting true
    //* else false
    for (let col in column) {
      (col !== name)
        ? column[col] = false
        : column[name] = true;
    }

    //* And finaly, we are seting new state
    setState(newState);
  };

  return (
    <ul className="sort-column sort__nested">
      <li className="sort-column__item">
        <input
          type="radio"
          value="name"
          name="col"
          checked={state.filter.column['name']}
          onChange={handleChange}
        />
      </li>
      <li className="sort-column__item">
        <input
          type="radio"
          value="number"
          name="col"
          checked={state.filter.column['number']}
          onChange={handleChange}
        />
      </li>
      <li className="sort-column__item">
        <input
          type="radio"
          value="distance"
          name="col"
          checked={state.filter.column['distance']}
          onChange={handleChange}
        />
      </li>
    </ul>
  );
};

export default SortColumn;
