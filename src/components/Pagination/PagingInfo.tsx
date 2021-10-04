import { FC } from "react";

interface pProps {
  pageSize: number;
  currentPage: number;
  totalCounts: number;
}
export const PagingInfo: FC<pProps> = ({
  pageSize,
  currentPage,
  totalCounts,
}) => {
  return (
    <div className="showing">
      Showing {pageSize * (currentPage - 1) + 1} to &nbsp;
      {pageSize * (currentPage - 1) + (totalCounts < 10 ? totalCounts : 10)}
      &nbsp; of {totalCounts}&nbsp; entries.
    </div>
  );
};
