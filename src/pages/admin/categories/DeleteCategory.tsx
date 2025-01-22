import type React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import { useDeleteCategory } from "../../../api/category";
import { toast } from "react-toastify";

interface DeleteCategoryProps {
  categoryId: number;
}

const DeleteCategory: React.FC<DeleteCategoryProps> = ({ categoryId }) => {
  const deleteCategory = useDeleteCategory();

  const handleDelete = () => {
    deleteCategory.mutate(categoryId, {
      onSuccess: () => {
        toast.success("Category deleted successfully");
      },
      onError: (error) => {
        console.error("Failed to delete category:", error);
        toast.error("Failed to delete category. Please try again.");
      },
    });
  };

  return (
    <Button
      onClick={handleDelete}
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
