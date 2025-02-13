"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import QuillEditor from "../../../components/QuillEditor";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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

const EditOrderPage = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const queryClient = useQueryClient();
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    order_status: "",
    payment_status: "",
    total_amount: 0,
    notes: "",
  });

  // Query to fetch order data
  const {
    data: orderData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () =>
      axios.get(`/api/orders/${orderId}`).then((res) => res.data.order),
  });

  // Mutation to update order
  const updateOrderMutation = useMutation({
    mutationFn: (orderData: any) =>
      axios.put(`/api/orders/${orderId}`, orderData, {
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["order", orderId] });
      navigate("/admin/orders");
    },
    onError: (error) => {
      console.error("Error updating order:", error);
    },
  });

  useEffect(() => {
    if (orderData) {
      setInitialValues({
        name: orderData.name,
        email: orderData.email,
        address: orderData.address,
        city: orderData.city,
        zip: orderData.zip,
        phone: orderData.phone,
        order_status: orderData.order_status,
        payment_status: orderData.payment_status,
        total_amount: orderData.total_amount,
        notes: orderData.notes || "",
      });
    }
  }, [orderData]);

  // Formik setup
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: orderSchema,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Trigger the mutation to update the order
        updateOrderMutation.mutate(values);
      } catch (error) {
        console.error("Error updating order:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading order data</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Order</h1>
      <form onSubmit={formik.handleSubmit}>
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

        <button
          type="submit"
          disabled={formik.isSubmitting || updateOrderMutation.isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {formik.isSubmitting || updateOrderMutation.isPending
            ? "Updating..."
            : "Update Order"}
        </button>
      </form>
    </div>
  );
};

export default EditOrderPage;
