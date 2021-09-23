import React, { FC } from 'react';

import Button from '../../components/Button/Button';

import './index.css';
import { Props } from './index.interface';
import { Entry } from '../../application/App/App.interface';

/**
 * Pagination
 * @param {Entry[]} entries
 * @param {number} entriesOnPage
 * @param {number} currentPage
 * @param {(num: number) => void} handlePagination
 * @returns {React.ReactElement} returns react element
 */

// prettier-ignore
const Pagination: FC<Props> = ({ entries, entriesOnPage, currentPage, handlePagination }): React.ReactElement => {
  //* -------------------------------------------------------------------------
  //* All page numbers
  const activeBtnCls: string = 'button_active';
  const pageNumbers: number[] = [];
  const division: number = Math.ceil(entries.length / entriesOnPage);

  //* In this case we get all page numbers  
  for (let num = 1; num <= division; num++) {
    pageNumbers.push(num);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((num: number) => (
        <li className="pagination__item">
          <Button 
            className={currentPage === num ? activeBtnCls : ''} 
            key={num} 
            handleClick={() => handlePagination(num)}>
            {num}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
