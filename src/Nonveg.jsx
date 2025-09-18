import React from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import Card from './Card';

function Nonveg() {
  const nonvegItems = useSelector((state) => state.products.nonvegItems);
    // Pagination states
    let [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Calculate indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = nonvegItems.slice(indexOfFirstItem, indexOfLastItem);

    // Total pages
    const totalPages = Math.ceil(nonvegItems.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <>
    <div className="container-fluid my-4" style={{color:"#f1f3f6"}}>
    {/* Title Section */}
<div className="text-center mb-4">
  <h2 className="fw-bold text-danger">Non-Veg Specials</h2>
  <p className="text-muted">
    Explore our fresh and premium selection of chicken, mutton, seafood, and more to satisfy your cravings!
  </p>
</div>


      <div className="row g-4 mb-4">
       {currentItems.map((item) => (
        <Card key={item.id} item={item} />
        ))}
        </div>
        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {/* Prev Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNum) => (
                <li
                  key={pageNum}
                  className={`page-item ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                </li>
              )
            )}

            {/* Next Button */}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
        </div>
    </>
  )
}

export default Nonveg
