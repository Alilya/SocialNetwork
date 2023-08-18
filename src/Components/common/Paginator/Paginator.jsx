import React, { useState } from "react";
import style from './Paginator.module.css'

let Paginator = (props) => {
  let portionSize =10;
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
let portionCount = Math.ceil(pagesCount/portionSize);

let [portionNumber, setPortionNumber] = useState(1);
let leftPortionPageNumber =(portionNumber-1)*portionSize+1;
let rightPortionPageNumber =portionNumber*portionSize;
 
return (
  <div className={style.page}>
    {portionNumber > 1 && (
      <button className={style.buttonPaginator} onClick={() => setPortionNumber(portionNumber - 1)} > <img src="" alt=" < " /> </button>
    )}

    {pages
      .filter((p) => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
      .map((page) => {
        return (
          <span
            className={props.currentPage === page && style.selectedPage}
            onClick={(e) => {
              props.onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
      {portionCount > portionNumber && (
      <button className={style.buttonPaginator}  onClick={() => setPortionNumber(portionNumber + 1)}> <img src="" alt=" > "/> </button>
    )}
  </div>
);
};

export default Paginator;
