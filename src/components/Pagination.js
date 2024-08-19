import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          className={`pagination-button ${
            page === currentPage ? "active" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
