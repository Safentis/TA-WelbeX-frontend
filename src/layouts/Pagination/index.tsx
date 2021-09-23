import React, { FC, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';

import './index.css';
import { Props } from './index.interface';
import { Entry } from '../../application/App/App.interface';

/**
 * Pagination
 * @param {Entry[]} entries
 * @param {Entry[]} filtered
 * @param {number} entriesOnPage
 * @param {number} currentPage
 * @param {(num: number) => void} handlePagination
 * @returns {React.ReactElement} returns react element
 */

// prettier-ignore
const Pagination: FC<Props> = ({ entries, filteredCount, entriesOnPage, currentPage, handlePagination }): React.ReactElement => {
  //* -------------------------------------------------------------------------
  //* All page numbers
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const activeBtnCls: string = 'button_active';
  
  useEffect(() => {
    let division: number = Math.ceil(filteredCount / entriesOnPage);
    let nums: number[] = [];
    
    //* In this case we get all page numbers  
    for (let num = 1; num <= division; num++) {
      nums.push(num);
    }
    
    //* And set new value
    setPageNumbers(nums)
  }, [filteredCount]);

  return (
    <ul className="pagination">
      {pageNumbers.map((num: number) => (
        <li className="pagination__item" key={num}>
          <Button 
            className={currentPage === num ? activeBtnCls : ''} 
            handleClick={() => handlePagination(num)}>
            {num}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
