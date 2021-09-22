export interface Props {}

export interface Entry {
  [key: string]: string | number,
  date: string;
  distance: number;
  id: number;
  name: string;
  number: number;
}

export interface Filter {
  column: {
    [key: string]: boolean;
  },
  operation: {
    [key: string]: boolean;
  },
  search: string;
}

export interface Params {
  column: string;
  operation: string;
  search: string;
}

export interface FilterFunction {
  params: Params;
  entries: Entry[]
}