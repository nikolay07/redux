import React from "react";

const Pagination = ({ goPrevPage, goNextPage, currentPage, usersListLength }) => {
  const isPrevPageAvaible = currentPage + 1 !== 1;
  const isNextPageAvaible = (currentPage + 1) * 3 < usersListLength;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrevPage} disabled={!isPrevPageAvaible}>
        {isPrevPageAvaible && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNextPage} disabled={!isNextPageAvaible}>
        {isNextPageAvaible && "→"}
      </button>
    </div>
  );
};

export default Pagination;
