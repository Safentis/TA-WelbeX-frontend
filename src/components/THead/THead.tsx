import React, { FC } from 'react';

import './THead.css';
import { Props, TitlesType } from './THead.interface';

/**
 * THead is header of table component
 * @returns {React.ReactElement} - returns react element
 */
const THead: FC<Props> = ({}): React.ReactElement => {
  //* ------------------------------------------------
  //* Titles of cols
  const titles: TitlesType = ['Date', 'Name', 'Number', 'Distance'];
  const TITLES: React.ReactNode = titles.map(
    (title: string, index: number) => (
      <th className="thead__th" key={index}>
        {title}
      </th>
    ),
  );

  return (
    <thead className="thead">
      <tr className="thead__tr">{TITLES}</tr>
    </thead>
  );
};

export default THead;
