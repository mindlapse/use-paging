import { useReducer, useEffect, Reducer } from "react";


const PER_PAGE = 30;

const types = {
  NEXT_PAGE: "NEXT_PAGE",
  PREV_PAGE: "PREV_PAGE",
  SET_ROWS: "SET_ROWS",
  SET_PAGE_INDEX: "SET_PAGE_INDEX",
};

const initialState : UsePagingState = {
  rows: [],
  currentPage: [],
  pageIndex: 0,
  perPage: 30,
  numPages: 0,
};

const init = (opts : UsePagingOptions) => () : UsePagingState => {
  return {
    ...initialState,
    perPage: opts.perPage,
  };
};

const setPage = (state:UsePagingState, rows:Array<any>, pageIndex:number) => {
  const numPages = Math.ceil(rows.length / state.perPage);

  if (pageIndex === Number.MAX_VALUE || pageIndex >= numPages) {
    pageIndex = numPages - 1
  }
  if (pageIndex < 0) {
    pageIndex = 0;
  }

  const isNewRows = state.rows !== rows;
  const isNewPageIndex = state.pageIndex !== pageIndex;

  if (isNewPageIndex || isNewRows) {

    const start =
      Math.max(0, Math.min(pageIndex, numPages - 1)) * state.perPage;

    state = {
      ...state,
      numPages,
      rows,
      pageIndex,
      currentPage: rows.slice(start, start + state.perPage),
    };
  }
  return state;
};

const reducer : Reducer<UsePagingState, Action>= (state, action) => {
  switch (action.type) {
    case types.NEXT_PAGE:
      state = setPage(state, state.rows, state.pageIndex + 1);
      break;
    case types.PREV_PAGE:
      state = setPage(state, state.rows, state.pageIndex - 1);
      break;
    case types.SET_ROWS:
      state = setPage(state, (action as SetRowsAction).rows, state.pageIndex);
      break;
    case types.SET_PAGE_INDEX:
      state = setPage(state, state.rows, (action as SetPageIndexAction).pageIndex)
      break;
    default:
      console.error(action);
      throw new Error("action.type not recognized");
  }
  return state;
};


const actions : UsePagingActions = {
  nextPage: () => ({
    type: types.NEXT_PAGE,
  }),
  prevPage: () => ({
    type: types.PREV_PAGE,
  }),
  setRows: (rows:Array<any>) => ({
    type: types.SET_ROWS,
    rows,
  }),
  setPageIndex: (pageIndex:number) => ({
    type: types.SET_PAGE_INDEX,
    pageIndex
  })
};

export const usePaging = (rows:Array<any>, opts : UsePagingOptions = { perPage : PER_PAGE }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init(opts));

  useEffect(() => {
    if (rows) {
      setTimeout(() => dispatch(actions.setRows(rows)), 0);
    }
  }, [rows]);

  return {
    currentPage: state.currentPage,
    pageIndex: state.pageIndex,
    numPages: state.numPages,
    jumpToPage: (pageIndex: number) => dispatch(actions.setPageIndex(pageIndex)),
    firstPage: () => dispatch(actions.setPageIndex(0)),
    lastPage: () => dispatch(actions.setPageIndex(Number.MAX_VALUE)),
    nextPage: () => dispatch(actions.nextPage()),
    prevPage: () => dispatch(actions.prevPage()),
    setRows: (rows:[]) => dispatch(actions.setRows(rows)),
  };
};

