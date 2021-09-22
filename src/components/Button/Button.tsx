import React, { FC } from 'react';

import './Button.css';
import { Props } from './Button.interface';

/**
 * Button component
 * @param {React.ReactElement | React.ReactNode | string} children - any children no required
 * @param {string} style - string style no required
 * @param {() => void} handleClick - function handleClick required
 * @returns {React.ReactElement} - returns react element
 */
const Button: FC<Props> = ({
  children,
  style = '',
  handleClick,
}): React.ReactElement => {
  return (
    <button className={`${style} button`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
