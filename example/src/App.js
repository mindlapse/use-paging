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
      </div>
    </>
  );
};
