import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import QuillEditor from "../../../components/QuillEditor";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Validation Schema
const orderSchema = yup.object().shape({
  name: yup.string().required("Customer name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("ZIP code is required"),
  phone: yup.string().required("Phone number is required"),
  order_status: yup.string().required("Order status is required"),
  payment_status: yup.string().required("Payment status is required"),
  total_amount: yup.number().required("Total amount is required"),
  notes: yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  phone: "",
  order_status: "PENDING",
  payment_status: "UNPAID",
  total_amount: 0,
  notes: "",
};

const CreateOrderPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Define the mutation outside onSubmit
  const mutation = useMutation({
    mutationFn: (orderData: any) =>
      axios.post("/api/orders", orderData, {
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      navigate("/admin/orders");
    },
    onError: (error) => {
      console.error("Error creating order:", error);
    },
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: orderSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Call the mutation function
        mutation.mutate(values);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Order</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Customer Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Customer Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter customer name"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="city">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Enter city"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          )}
        </div>

        {/* ZIP */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="zip">
            ZIP Code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="Enter ZIP code"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.zip && formik.errors.zip && (
            <div className="text-red-500 text-sm">{formik.errors.zip}</div>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>

        {/* Order Status */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="order_status"
          >
            Order Status
          </label>
          <select
            id="order_status"
            name="order_status"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.order_status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="PENDING">Pending</option>
            <option value="PROCESSING">Processing</option>
            <option value="SHIPPED">Shipped</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
          {formik.touched.order_status && formik.errors.order_status && (
            <div className="text-red-500 text-sm">
              {formik.errors.order_status}
            </div>
          )}
        </div>

        {/* Payment Status */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="payment_status"
          >
            Payment Status
          </label>
          <select
            id="payment_status"
            name="payment_status"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.payment_status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="UNPAID">Unpaid</option>
            <option value="PARTIALLY_PAID">Partially Paid</option>
            <option value="PAID">Paid</option>
          </select>
          {formik.touched.payment_status && formik.errors.payment_status && (
            <div className="text-red-500 text-sm">
              {formik.errors.payment_status}
            </div>
          )}
        </div>

        {/* Total Amount */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="total_amount"
          >
            Total Amount
          </label>
          <input
            id="total_amount"
            name="total_amount"
            type="number"
            step="0.01"
            placeholder="Enter total amount"
            className="w-full px-4 py-2 border rounded-md"
            value={formik.values.total_amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.total_amount && formik.errors.total_amount && (
            <div className="text-red-500 text-sm">
              {formik.errors.total_amount}
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="notes">
            Notes
          </label>
          <QuillEditor
            value={formik.values.notes}
            onEditorChange={(content) => formik.setFieldValue("notes", content)}
          />
          {formik.touched.notes && formik.errors.notes && (
            <div className="text-red-500 text-sm">{formik.errors.notes}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting || mutation.isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {formik.isSubmitting || mutation.isPending
            ? "Creating..."
            : "Create Order"}
        </button>
      </form>
    </div>
  );
};

export default CreateOrderPage;
