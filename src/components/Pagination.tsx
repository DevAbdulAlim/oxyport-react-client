import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
          showing {itemsPerPage} out of {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {currentPage > 1 && <Button onClick={handlePrevious}>Previous</Button>}

        <span className="text-slate-500">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && <Button onClick={handleNext}>Next</Button>}
      </div>
    </div>
  );
};

export default Pagination;
