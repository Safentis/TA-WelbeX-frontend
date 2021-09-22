import { createContext, useContext } from 'react';

import { Context } from './App.interface';

export const AppContext = createContext<Context>({
  state: {
    filter: {
      column: {
        name: true,
        number: false,
        distance: false,
      },
      operation: '',
      search: '',
    }
  },
  setState: () => {},
});

export const useAppContext = () => useContext(AppContext);
