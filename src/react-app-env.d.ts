/// <reference types="react-scripts" />

interface UsePagingState {
  rows: Array<any>;
  currentPage: Array<any>;
  pageIndex: number;
  perPage: number;
  numPages: number;
}

interface UsePagingOptions {
  perPage: number;
}

interface Action {
  type: string;
}
type SetRowsAction = Action & { rows: Array<any> };
type SetPageIndexAction = Action & { pageIndex: number };

interface UsePagingActions {
  nextPage: () => Action;
  prevPage: () => Action;
  setRows: (rows: Array<any>) => SetRowsAction;
  setPageIndex: (pageIndex: number) => SetPageIndexAction;
}
