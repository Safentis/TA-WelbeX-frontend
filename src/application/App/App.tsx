import React, { FC, useEffect, useState } from 'react';

import Filter from '../../layouts/Filter';
import THead from '../../components/THead/THead';
import TBody from '../../components/TBody/TBody';

import './App.css';
import { filterFunction } from './App.functions';
import {
  Entry,
  Props,
  Filter as FilterInterface,
  Params,
} from './App.interface';

/**
 * App is main component that contains others part of application
 * @returns {React.ReactElement} returns react element
 */
const App: FC<Props> = ({}): React.ReactElement => {
  //* ---------------------------------------------
  //* Main state of entries
  const [entries, setEntries] = useState<Entry[]>([]);
  const [filtered, setFiltered] = useState<Entry[]>([]);

  //* In this case, we are making request to server, that 
  //* returns all entries from DB and after, set them to state
  //* "entries" and "filtered"
  useEffect(() => {
    (async () => {
      //* We are making request to server
      const req = await fetch('http://localhost:8080/entries');
      const ans = await req.json();

      //* After, we set value to main state
      setEntries(ans);
      setFiltered(ans);
    })();
  }, []);

  //* Main state of filter
  const [filter, setFilter] = useState<FilterInterface>({
    column: {
      name: false,
      number: false,
      distance: false,
    },
    operation: {
      more: false,
      less: false,
      equal: false,
      contains: false,
    },
    search: '',
  });

  //* In this case we are making filtering by table,
  //* if "filter" state changing
  useEffect(() => {
    const newEntries = [...entries];
    const params: Params = {
      column: '',
      operation: '',
      search: filter.search,
    };

    for (let column in filter.column) {
      if (filter.column[column] === true) {
        params['column'] = column;
      }
    }

    for (let operation in filter.operation) {
      if (filter.operation[operation] === true) {
        params['operation'] = operation;
      }
    }

    //* Function from ./App.functions.ts
    //* that make filter by entries
    //* prettier-ignore
    const filtered: Entry[] = filterFunction({ 
      params, 
      entries: newEntries 
    });

    //* After filtering, set new or old state
    setFiltered(filtered);
  }, [filter]);

  return (
    <div className="application">
      <div className="application__inner">
        <div className="table application__table">
          <div className="table__functions">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
          <table className="table__field">
            <THead />
            <TBody filtered={filtered} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
