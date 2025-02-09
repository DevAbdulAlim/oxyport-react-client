import type React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "../../../components/ui/Link";
import { truncateName } from "../../../lib/utils";
import type { CategoryType } from "../../../lib/types";
import DeleteCategory from "./DeleteCategory";

interface CategoryTableProps {
  categories: CategoryType[];
}

const CategoryTable: React.FC<CategoryTableProps> = ({ categories }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden bg-white">
        <thead className="bg-green-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: CategoryType) => (
            <tr key={category.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{category.id}</td>
              <td className="px-4 py-2 text-nowrap">
                {category.image ? (
                  <img
                    src={`/images/${category.image.split(",")[0]}`}
                    alt={category.name}
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "No image"
                )}
              </td>

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
                <DeleteCategory categoryId={category.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
