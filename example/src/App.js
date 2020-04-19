import React from "react";
import { usePaging } from "use-paging";

export default () => {
  const ROWS1 = ["A1", "A2", "B1", "B2", "C1"];
  const ROWS2 = ["X1", "X2", "Y1"];

  const { pages } = usePaging(ROWS1);

  return (
    <>
      <div>
        {pages.currentPage.map((row, i) => (
          <div key={i}>{row}</div>
        ))}
        <button onClick={pages.prevPage}>Prev</button>
        <button onClick={pages.nextPage}>Next</button>
      </div>

      <div>
        <button onClick={() => pages.setRows(ROWS2)}>Change List</button>
      </div>
    </>
  );
};
