import type { FC } from "react";
import { Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";

interface DeleteOrderProps {
  orderId: number;
}

const deleteOrderRequest = async (orderId: number) => {
  const response = await fetch(`/api/orders/${orderId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete order");
  }
};

const DeleteOrder: FC<DeleteOrderProps> = ({ orderId }) => {
  const queryClient = useQueryClient();

  const deleteOrder = useMutation({
    mutationFn: () => deleteOrderRequest(orderId),
    onSuccess: () => {
      toast.success("Order deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.error("Failed to delete order:", error);
      toast.error("Failed to delete order. Please try again.");
    },
  });

  return (
    <Button
      onClick={() => deleteOrder.mutate()}
      size="sm"
      variant="ghost"
      disabled={deleteOrder.isPending}
    >
      {deleteOrder.isPending ? (
        <span className="inline-block animate-spin">↻</span>
      ) : (
        <Trash2 className="h-4 w-4" />
      )}
    </Button>
  );
};

export default DeleteOrder;
