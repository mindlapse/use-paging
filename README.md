# use-paging

> A hook for paginating an array

[![NPM](https://img.shields.io/npm/v/use-paging.svg)](https://www.npmjs.com/package/use-paging) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-paging
```


## Usage

```tsx

import React, { useState } from "react";
import { usePaging } from "use-paging";

const ROWS1 = ["A1", "A2", "B1", "B2", "C1"];
const ROWS2 = ["X1", "X2", "Y1"];

export default () => {
  const [rows, setRows] = useState(ROWS1);

  const pages = usePaging(rows, { perPage: 2 });

  return (
    <>
      <div>
        {pages.currentPage.map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </div>
      <div>
        <button onClick={pages.firstPage}>First</button>
        <button onClick={pages.prevPage}>Prev</button>
        <button onClick={pages.nextPage}>Next</button>
        <button onClick={pages.lastPage}>Last</button>
      </div>

      <div>
        <button onClick={() => setRows(rows === ROWS1 ? ROWS2 : ROWS1)}>
          Change List
        </button>
        Num pages: {pages.numPages}
      </div>
    </>
  );
};

```

## Reference

Next page
```tsx


  const options = {
    perPage : 2   // Default is 30
  }

  
  const pages = usePaging(someArray, options)   // note: the options object can be omitted


  // usePaging state:

      // To iterate across the current page
      pages.currentPage.map((row, i) => (
        <div key={i}>{row}</div>
      ))

      // Current page index
      console.log(pages.pageIndex)

      // Total pages
      console.log(pages.numPages)


  // usePaging actions:

      // Skip to the first page
      pages.firstPage()

      // Skip to the next page
      pages.nextPage()

      // Skip to the previous page
      pages.prevPage()  

      // Skip to the last page
      pages.lastPage()

      // To use a different set of rows (the pageIndex is kept)
      pages.setRows(newArray)

      // Jump to an arbitrary 0-based page index (e.g. jump to page at index 5)
      pages.jumpToPage(5)


```


## License

MIT © [mindlapse](https://github.com/mindlapse)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
