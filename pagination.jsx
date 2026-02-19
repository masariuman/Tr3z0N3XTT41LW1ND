"use client";

import { useState } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  //Tampilkan X - X of X Data
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPages = () => {
    const pages = [];

    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, totalPages);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  const handleSubmit = (index) => {
    const pageNumber = Number(inputValue);

    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }

    setEditingIndex(null);
    setInputValue("");
  };

  return (
    <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
      <span className="fs-12 fw-medium">
        Tampilkan {startItem} - {endItem} dari {totalItems} Data
      </span>

      <ul className="pagination mb-0">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Sebelumnya
            </button>
          </li>
        )}

        {pages.map((page, index) => (
          <li key={index} className="page-item">
            {page === "..." ? (
              editingIndex === index ? (
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={inputValue}
                  autoFocus
                  className="form-control"
                  style={{ width: "70px" }}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={() => {
                    setEditingIndex(null);
                    setInputValue("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(index);
                    }
                  }}
                />
              ) : (
                <button
                  className="page-link"
                  onClick={() => setEditingIndex(index)}
                >
                  ...
                </button>
              )
            ) : (
              <button
                className={`page-link ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {currentPage < totalPages && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Selanjutnya
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
