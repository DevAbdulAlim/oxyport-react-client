import type React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "../../../components/ui/Link";
import { truncateName } from "../../../lib/utils";
import type { ProductType } from "../../../lib/types";
import DeleteProduct from "./DeleteProduct";

interface ProductTableProps {
  products: ProductType[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="container mt-8 overflow-auto rounded-lg shadow">
      <table className="min-w-full overflow-hidden bg-white">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: ProductType) => (
            <tr key={product.id} className="text-gray-700">
              <td className="px-4 py-2 text-nowrap">{product.id}</td>
              <td className="px-4 py-2 text-nowrap">
                {product.images ? (
                  <img
                    src={`/images/${product.images.split(",")[0]}`}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td className="px-4 py-2 text-nowrap">
                {truncateName(product.name, 20)}
              </td>
              <td className="px-4 py-2 text-nowrap">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-4 py-2 text-nowrap">{product.stock}</td>
              <td className="px-4 py-2 text-center text-nowrap">
                <Link
                  to={`/admin/products/edit/${product.id}`}
                  size="sm"
                  variant="ghost"
                  className="mr-2"
                >
                  <FiEdit />
                </Link>
                <DeleteProduct productId={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
