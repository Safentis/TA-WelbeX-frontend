import React, { FC, useState } from 'react';

import Sort from '../../layouts/Sort';
import THead from '../../components/THead/THead';
import TBody from '../../components/TBody/TBody';

import './App.css';
import { Entry, Props, State } from './App.interface';
import { AppContext } from './App.context';

/**
 * App is main component that contains others part of application
 * @returns {React.ReactElement} - returns react element
 */
const App: FC<Props> = ({}): React.ReactElement => {
  //* ---------------------------------------------
  //* Main state of application
  const [state, setState] = useState<State>({
    filter: {
      column: {
        name: true,
        number: false,
        distance: false,
      },
      operation: 'equal',
      search: '',
    },
  });

  return (
    <AppContext.Provider value={{state, setState}}>
      <div className="application">
        <div className="application__inner">
          <div className="table application__table">
            <div className="table__functions">
              <Sort />
            </div>
            <table className="table__field">
              <THead />
              <TBody />
            </table>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
