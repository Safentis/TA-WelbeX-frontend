import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import './FilterRadio.css';
import { Props } from './FilterRadio.interface';

/**
 * FilterRadio component, that contains radio - inputs, which set up filter
 * @param {string} className - no required,
 * @param {string} name - required, name of group inputs
 * @param {[key: string]: boolean} fields - required,
 * object with boolean field
 * @param {(event: React.ChangeEvent) => void} handleChange - required,
 * function, that handle radio inputs
 * @returns {React.ReactElement} - returns react element
 */

//prettier-ignore
const FilterRadio: FC<Props> = ({ className = "", name, fields, handleChange, icons = [] }): React.ReactElement => {
  const entries = Object.entries(fields); //* Created entries from a common object
  const content = entries.map(([key, value], index: number) => (
    <li className="filter-radio__item" key={index}>
      <label 
        className={`filter-radio__label ${value ? "filter-radio__label_active" : ""}`} 
        htmlFor={key}
      >
        {
          icons.length === 0 
            ? key
            : <FontAwesomeIcon icon={icons[index]}/> 
        }
        <input
          className="filter-radio__input"
          name={name}
          type="radio"
          value={key}
          id={key}
          onChange={handleChange}
          checked={value}
        />
      </label>
    </li>
  ));
  return <ul className={`filter-radio ${className}`}>{content}</ul>;
};

export default FilterRadio;
