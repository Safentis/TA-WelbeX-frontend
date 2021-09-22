import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button/Button';

import './index.css';
import { Props } from './index.interface';
import SortColumn from './SortColumn/SortColumn';
import SortSignal from './SortSignal/SortSignal';
import SortSearch from './SortSearch/SortSearch';

/**
 * Sort components that contains all options of
 * sort, you may choose filter by 3 stage
 * 1) column
 * 2) signals (more, lest, equal and keep)
 * 3) text field
 * @returns {React.ReactElement} - returns react element
 */

const Sort: FC<Props> = ({}): React.ReactElement => {
  //* ----------------------------------------------
  //* Show or hide sub menu with filter
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  //* Dynamic styles
  const sortItemActiveCls: string = isOpen ? 'sort__item_active' : 'sort__item_noactive';
  const btnActiveCls: string = isOpen ? 'button_active' : '';

  return (
    <ul className="sort">
      <li className="sort__item">
        <Button style={btnActiveCls} handleClick={handleClick}>
          <FontAwesomeIcon icon={faFilter} />
        </Button>
      </li>
      <li className={'sort__item sort__submenu ' + sortItemActiveCls}>
        <SortColumn />
        <SortSignal />
        <SortSearch />
      </li>
    </ul>
  );
};

export default Sort;
