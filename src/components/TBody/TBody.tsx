import React, { FC } from 'react';

import './TBody.css';
import { Props } from './TBody.interface';
import { Entry } from '../../application/App/App.interface';

/**
 * THead is body of table component
 * @param {Entry[]} filtered
 * @returns {React.ReactElement} - returns react element
 */
const TBody: FC<Props> = ({ filtered }): React.ReactElement => {
  const content: React.ReactNode = filtered.map(
    ({ id, date, name, number, distance }: Entry) => (
      <tr className="tbody__tr" key={id}>
        <td className="tbody__td">{date}</td>
        <td className="tbody__td">{name}</td>
        <td className="tbody__td">{number}</td>
        <td className="tbody__td">{distance}</td>
      </tr>
    ),
  );
  return <tbody className="tbody">{content}</tbody>;
};

export default TBody;
