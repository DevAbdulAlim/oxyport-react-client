import type React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface DeleteCategoryProps {
  categoryId: number;
}

const deleteCategoryRequest = async (categoryId: number) => {
  const response = await fetch(`/api/categories/${categoryId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete category");
  }
};

const DeleteCategory: React.FC<DeleteCategoryProps> = ({ categoryId }) => {
  const queryClient = useQueryClient();

  const deleteCategory = useMutation({
    mutationFn: () => deleteCategoryRequest(categoryId),
    onSuccess: () => {
      toast.success("Category deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Failed to delete category:", error);
      toast.error("Failed to delete category. Please try again.");
    },
  });

  return (
    <Button
      onClick={() => deleteCategory.mutate()}
      size="sm"
      variant="ghost"
      disabled={deleteCategory.isPending}
    >
      {deleteCategory.isPending ? (
        <span className="inline-block animate-spin">&#8635;</span>
      ) : (
        <FiTrash2 />
      )}
    </Button>
  );
};

export default DeleteCategory;
