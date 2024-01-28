import React from "react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

import Button from "../Button";
import Link from "../Link";
import { Product } from "../../lib/types";
import Avatar from "../Avater";
import { truncateName } from "../../lib/utils";

interface ProductTableProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden g-white">
        <thead className="bg-gray-200">
          <tr className="text-gray-800">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{product.id}</td>
              <td className="px-4 py-2 text-nowrap">
                <Avatar
                  src={process.env.PUBLIC_URL + "/img/avatar.jpg"}
                  alt="Product"
                />
              </td>
              <td className="px-4 py-2 text-nowrap">
                {truncateName(product.name, 20)}
              </td>
              <td className="px-4 py-2 text-nowrap">${product.price}</td>
              <td className="px-4 py-2 text-nowrap">{product.stock}</td>
              <td className="px-4 py-2 text-nowrap">{product.categoryId}</td>
              <td className="px-4 py-2 text-nowrap">{product.userId}</td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/products/view/${product.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEye />
                </Link>
                <Link
                  to={`/admin/products/edit/${product.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEdit />
                </Link>
                <Button
                  onClick={() => onDelete(product.id)}
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

export default ProductTable;
