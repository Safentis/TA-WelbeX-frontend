export interface Props {}

export interface Entry {
  date: string;
  distance: number;
  id: number;
  name: string;
  number: number;
}

export interface State {
  filter: {
    column: {
      [key: string]: boolean;
    },
    operation: string,
    search: string,
  }
}

export interface Context {
  state: State;
  setState: Function;
}