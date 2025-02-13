import type React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../../components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface DeletePaymentProps {
  paymentId: string;
}

const deletePaymentRequest = async (paymentId: string) => {
  const response = await fetch(`/api/payments/${paymentId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete payment");
  }
};

const DeletePayment: React.FC<DeletePaymentProps> = ({ paymentId }) => {
  const queryClient = useQueryClient();

  const deletePayment = useMutation({
    mutationFn: () => deletePaymentRequest(paymentId),
    onSuccess: () => {
      toast.success("Payment deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.error("Failed to delete payment:", error);
      toast.error("Failed to delete payment. Please try again.");
    },
  });

  return (
    <Button
      onClick={() => deletePayment.mutate()}
      size="sm"
      variant="ghost"
      disabled={deletePayment.isPending}
    >
      {deletePayment.isPending ? (
        <span className="inline-block animate-spin">&#8635;</span>
      ) : (
        <FiTrash2 />
      )}
    </Button>
  );
};

export default DeletePayment;
