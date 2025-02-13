import type React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface DeleteUserProps {
  userId: number;
}

const deleteUserRequest = async (userId: number) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
};

const DeleteUser: React.FC<DeleteUserProps> = ({ userId }) => {
  const queryClient = useQueryClient();

  const deleteUser = useMutation({
    mutationFn: () => deleteUserRequest(userId),
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user. Please try again.");
    },
  });

  return (
    <Button
      onClick={() => deleteUser.mutate()}
      size="sm"
      variant="ghost"
      disabled={deleteUser.isPending}
    >
      {deleteUser.isPending ? (
        <span className="inline-block animate-spin">&#8635;</span>
      ) : (
        <FiTrash2 />
      )}
    </Button>
  );
};

export default DeleteUser;
