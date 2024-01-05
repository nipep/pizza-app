import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss"

const Pagination = ({onChangePage, pageCurrent}) => {
    
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
    )
}

export default Pagination