import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPuzzlePiece,
  faAngleRight,
  faAngleLeft,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button/Button';

import './SortSignal.css';
import { Props } from './SortSignal.interface';

/**
 * SortSignal component
 * @returns {React.ReactElement} - returns react element
 */

const SortSignal: FC<Props> = ({}): React.ReactElement => {
  return (
    <ul className="sort-signal sort__nested">
      <li className="sort-signal__item">
        <Button handleClick={() => {}}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
      </li>
      <li className="sort-signal__item">
        <Button handleClick={() => {}}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </li>
      <li className="sort-signal__item">
        <Button handleClick={() => {}}>
          <FontAwesomeIcon icon={faEquals} />
        </Button>
      </li>
      <li className="sort-signal__item">
        <Button handleClick={() => {}}>
          <FontAwesomeIcon icon={faPuzzlePiece} />
        </Button>
      </li>
    </ul>
  );
};

export default SortSignal;
