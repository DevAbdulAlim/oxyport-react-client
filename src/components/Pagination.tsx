import Button from "./Button";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
      <div>
        <span className="font-medium">
          Showing {Math.min(currentPage * itemsPerPage, totalItems)} out of{" "}
          {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <Button onClick={handlePrevious} variant="ghost">
            Previous
          </Button>
        )}
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <Button onClick={handleNext} variant="ghost">
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
