import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";
import { truncateName } from "../../../lib/utils";

interface CategoryTableProps {
  categories: any;
  // onDelete: (id: number) => void;
}

const CategoryTable: React.FC<CategoryTableProps> = ({
  categories,
  // onDelete,
}) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden g-white">
        <thead className="bg-gray-200">
          <tr className="text-gray-800">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: any) => (
            <tr key={category.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{category.id}</td>
              <td className="px-4 py-2 text-nowrap">{category.image}</td>
              <td className="px-4 py-2 text-nowrap">
                {truncateName(category.name, 20)}
              </td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/categories/edit/${category.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEdit />
                </Link>
                <Button
                  // onClick={() => onDelete(category.id)}
                  size="sm"
                  variant="ghost"
                >
                  <FiTrash2 />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
