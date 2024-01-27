import Link from "../Link";
import { Product } from "../../lib/types";
import Button from "../Button";
import Avatar from "../Avater";

interface ProductTableProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onDelete }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-2xl font-bold">Product Table</h2>
      <table className="w-full border border-collapse border-gray-800 table-auto">
        <thead>
          <tr className="text-white bg-gray-800">
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
            <tr key={product.id} className="border-t border-gray-500">
              <td className="px-4 py-2">{product.id}</td>
              <td className="px-4 py-2">
                <Avatar
                  src={process.env.PUBLIC_URL + "/img/avatar.jpg"}
                  alt="Product"
                />
              </td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">{product.stock}</td>
              <td className="px-4 py-2">{product.categoryId}</td>
              <td className="px-4 py-2">{product.userId}</td>
              <td className="px-4 py-2">
                <Link
                  to={`/admin/products/edit/${product.id}`}
                  size="sm"
                  variant="edit"
                >
                  Edit
                </Link>
                <Button
                  onClick={() => onDelete(product.id)}
                  size="sm"
                  variant="delete"
                  className="ml-4"
                >
                  Delete
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
