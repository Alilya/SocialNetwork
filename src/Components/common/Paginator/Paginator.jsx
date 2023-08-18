import React from "react";
import style from './Paginator.module.css'

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 1000);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div className={style.page}>
        {pages.map((page) => {
          return (
            <span className={props.currentPage === page && style.selectedPage}
              onClick={(e) => {props.onPageChanged(page)}}>
                {page}
            </span>
          );
        })}
      </div>
  );
};

export default Paginator;
