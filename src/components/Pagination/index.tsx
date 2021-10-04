import { FC } from "react";
import ReactPaginate from "react-paginate";
import { PagingInfo } from "./PagingInfo";

interface pProps {
  pageSize: number;
  currentPage: number;
  totalCounts: number;
  pageCount: number;
  handlePageChange: (page: { selected: number }) => void;
}
export const PaginationComponent: FC<pProps> = (props) => {
  const { pageSize, currentPage, totalCounts, pageCount, handlePageChange } =
    props;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <PagingInfo
        pageSize={pageSize}
        currentPage={currentPage}
        totalCounts={totalCounts}
      />

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="paginate"
        previousLabel={"<<"}
        nextLabel={">>"}
        disabledClassName={"paginate__link--disabled"}
        activeClassName={"paginate__link--active"}
        nextLinkClassName="paginate__end-link"
        previousLinkClassName="paginate__end-link"
      />
    </div>
  );
};
