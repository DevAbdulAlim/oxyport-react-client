import { useSearchParams } from "react-router-dom";
import Button from "./ui/Button";

interface PaginationProps {
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(totalItems / pageSize);

  const updatePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  return (
    <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
      <div>
        <span className="font-medium">
          Showing {Math.min(currentPage * pageSize, totalItems)} out of{" "}
          {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <Button onClick={() => updatePage(currentPage - 1)} variant="ghost">
            Previous
          </Button>
        )}
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <Button onClick={() => updatePage(currentPage + 1)} variant="ghost">
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
