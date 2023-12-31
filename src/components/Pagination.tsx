import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages === 1) {
    // Don't render pagination if there's only one page
    return null;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex justify-center mt-8" aria-label="Pagination">
      <ul className="flex">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`mx-1 ${
              page === currentPage
                ? 'bg-blue-500 text-white font-bold'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
            } rounded-full`}
          >
            <button
              type="button"
              onClick={() => onPageChange(page)}
              className="px-4 py-2 rounded-full focus:outline-none"
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
