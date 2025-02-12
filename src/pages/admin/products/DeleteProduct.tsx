import type React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface DeleteProductProps {
  productId: number;
}

const deleteProductRequest = async (productId: number) => {
  const response = await fetch(`/api/products/${productId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
};

const DeleteProduct: React.FC<DeleteProductProps> = ({ productId }) => {
  const queryClient = useQueryClient();

  const deleteProduct = useMutation({
    mutationFn: () => deleteProductRequest(productId),
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product. Please try again.");
    },
  });

  return (
    <Button
      onClick={() => deleteProduct.mutate()}
      size="sm"
      variant="ghost"
      disabled={deleteProduct.isPending}
    >
      {deleteProduct.isPending ? (
        <span className="inline-block animate-spin">&#8635;</span>
      ) : (
        <FiTrash2 />
      )}
    </Button>
  );
};

export default DeleteProduct;
