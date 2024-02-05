import React from "react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";
import { ProductType } from "../../../lib/types";
import Avatar from "../../../components/ui/Avater";
import { truncateName } from "../../../lib/utils";
import config from "../../../config/config";

interface ProductTableProps {
  products: ProductType[];
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow bg-green-50">
      <table className="min-w-full overflow-hidden g-white">
        <thead className="bg-green-200">
          <tr>
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
                  src={`${config.apiStaticPath}/images/${
                    product.images.split(",")[0]
                  }`}
                  alt="Product"
                />
              </td>
              <td className="px-4 py-2 text-nowrap">
                <Link to={`/admin/products/edit/${product.id}`} variant="link">
                  {truncateName(product.name, 20)}
                </Link>
              </td>
              <td className="px-4 py-2 text-nowrap">${product.price}</td>
              <td className="px-4 py-2 text-nowrap">{product.stock}</td>
              <td className="px-4 py-2 text-nowrap ">
                {product.category?.name}
              </td>
              <td className="px-4 py-2 text-nowrap">{product.user?.name}</td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/product/${product.id}`}
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
