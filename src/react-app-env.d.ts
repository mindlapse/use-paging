/// <reference types="react-scripts" />

interface UsePagingState {
  rows: Array<any>;
  pageRows: Array<any>;
  pageIndex: number;
  perPage: number;
}

interface UsePagingOptions {
  perPage: number;
}

interface Action {
  type: string;
}
type SetRowsAction = Action & { rows: Array<any> };

interface UsePagingActions {
  nextPage: () => Action;
  prevPage: () => Action;
  setRows: (rows: Array<any>) => SetRowsAction;
}
