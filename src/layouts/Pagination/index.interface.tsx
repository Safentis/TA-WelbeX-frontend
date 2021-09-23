import { Entry } from '../../application/App/App.interface';

export interface Props {
  entries: Entry[];
  entriesOnPage: number;
  currentPage: number;
  handlePagination: (num: number) => void;
}
