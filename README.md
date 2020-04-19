# use-paging

> A hook for paginating an array

[![NPM](https://img.shields.io/npm/v/use-paging.svg)](https://www.npmjs.com/package/use-paging) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-paging
```


## Usage

```tsx
import React from "react";
import { usePaging } from "use-paging";

function App() {
  const ROWS1 = ["A1", "A2", "B1", "B2", "C1"];
  const ROWS2 = ["X1", "X2", "Y1"];

  const { pages } = usePaging(ROWS1, { perPage: 2 });

  return (
    <>
      <div className="App">
        {pages.currentPage.map((row) => (
          <div key={row}>{row}</div>
        ))}

        <button onClick={pages.prevPage}>Prev</button>
        <button onClick={pages.nextPage}>Next</button>
      </div>

      <div>
        <button onClick={() => pages.setRows(ROWS2)}>Swap List</button>
      </div>
    </>
  );
}

export default App;
```

## Reference

Next page
```tsx
const { pages } = usePaging(someArray, { perPage: 2 })

// To iterate across the current page
pages.currentPage.map((row, i) => (
  <div key={i}>{row}</div>
))

// To skip to the next page
pages.nextPage()

// To skip to the previous page
pages.prevPage()  

// To obtain the current page index
pages.pageIndex

// To use a different set of rows (the pageIndex is kept)
pages.setRows(newArray)
```


## License

MIT © [mindlapse](https://github.com/mindlapse)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
