import {
  Entry,
  FilterFunction,
  PaginationCalcFunc,
  Params,
} from './App.interface';

/**
 * Function makes filtering by entries
 * @param {Params} params - required, params of filter
 * @param {Entry[]} entries - required, no filtered entries
 * @returns {Entry[]} returns the filtered entries
 */
// prettier-ignore
export const filterFunction = ({ params, entries }: FilterFunction): Entry[] => {
  const { column, operation, search }: Params = params;

  const isColumnChoosed: boolean = column.length > 0;
  const isOperationChoosed: boolean = operation.length > 0;
  const isSearchFill: boolean = search.length > 0;

  //* If user choosed "column" and "operations"
  //* we will be filtering, else nothing
  if (!isColumnChoosed || !isOperationChoosed) {
    return entries;
  }
  //* If search input is fill
  //* we will be returns result
  //* else return prev state
  if (isSearchFill) {
    const result: Entry[] = entries.filter((entry: Entry) => {
      switch (operation) {
        case 'more': //* return all more then search
          return search < entry[column];
        case 'less': //* returns all less then search
          return search > entry[column];
        case 'equal': //* strong compare
          //* If search is NaN we are making compare by
          //* string, else by number   
          return isNaN(+search)
            ? search === entry[column]
            : +search === entry[column];
        case 'contains':
          const str: string = entry[column].toString();
          return str.includes(search);
        default:
          return {};
      }
    });

    return result;
  } else {
    return entries;
  }
};

export const paginationCalcFunc = ({
  currentPage,
  entriesOnPage,
  entries,
}: PaginationCalcFunc): Entry[] => {
  let lastIndex = currentPage * entriesOnPage;
  let firstIndex = lastIndex - entriesOnPage;
  let currentEntries = entries.slice(firstIndex, lastIndex);

  return currentEntries;
};
