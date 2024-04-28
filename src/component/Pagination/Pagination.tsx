import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import React from "react";

type PaginationProps = {
  onChangePage: (page: number) => void;
  pageCurrent: number;
};

const Pagination: React.FC <PaginationProps> = ({ onChangePage, pageCurrent }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      // forcePage={pageCurrent - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
