import React from "react";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import Button from "../../components/ui/Button";

interface PaginationProps {
  pageSize: number;
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const PaginateProduct: React.FC<PaginationProps> = ({
  pageSize,
  currentPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <Button onClick={prevPage} disabled={currentPage === 1}>
        <MdOutlineArrowLeft />
      </Button>
      <div className="px-3 py-1 ">
        Showing {(currentPage - 1) * pageSize + 1}–
        {currentPage * pageSize > totalItems
          ? totalItems
          : currentPage * pageSize}{" "}
        of {totalItems} results
      </div>
      <Button onClick={nextPage} disabled={currentPage === totalPages}>
        <MdOutlineArrowRight />
      </Button>
    </div>
  );
};

export default PaginateProduct;
