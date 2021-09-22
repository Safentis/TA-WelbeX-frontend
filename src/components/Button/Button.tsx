import React, { FC } from 'react';

import './Button.css';
import { Props } from './Button.interface';

/**
 * Button component
 * @param {React.ReactElement | React.ReactNode | string} children - any children no required
 * @param {string} className - string className no required
 * @param {() => void} handleClick - function handleClick required
 * @returns {React.ReactElement} - returns react element
 */
const Button: FC<Props> = ({
  children,
  className = '',
  handleClick,
}): React.ReactElement => {
  return (
    <button className={`${className} button`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
