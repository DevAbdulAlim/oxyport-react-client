import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const { items } = useCart();

  // Calculate the total amount
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const initialValues = {
    name: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
  };

  const addressSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required"),
    address: Yup.string()
      .max(255, "Address is too long!")
      .required("Address is required"),
    city: Yup.string()
      .max(100, "City is too long!")
      .required("City is required"),
    zip: Yup.string()
      .matches(/^\d{5}$/, "Must be exactly 5 digits")
      .required("ZIP code is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Must be exactly 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: addressSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container px-3 py-20 mx-auto">
      <h2 className="mb-4 text-3xl font-semibold">Checkout</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {/* Shipping Address */}
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">Shipping Address</h3>

              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full p-2 mt-1 border rounded-md"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="mt-1 text-sm text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              {/* Address Field */}
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="w-full p-2 mt-1 border rounded-md"
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="mt-1 text-sm text-red-500">
                    {formik.errors.address}
                  </div>
                ) : null}
              </div>

              {/* City Field */}
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600"
                >
                  Town / City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="w-full p-2 mt-1 border rounded-md"
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="mt-1 text-sm text-red-500">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>

              {/* ZIP Code Field */}
              <div className="mb-4">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-600"
                >
                  Postcode / Zip *
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zip}
                  className="w-full p-2 mt-1 border rounded-md"
                />
                {formik.touched.zip && formik.errors.zip ? (
                  <div className="mt-1 text-sm text-red-500">
                    {formik.errors.zip}
                  </div>
                ) : null}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full p-2 mt-1 border rounded-md"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-1 text-sm text-red-500">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full p-2 mt-1 border rounded-md"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="mt-1 text-sm text-red-500">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full px-8 md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
            {/* Display the list of items in the cart with their prices */}
            <div className="mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total Amount */}
            <div className="flex justify-between pt-4 border-t">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${totalAmount.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
              type="submit"
              // Add your onClick handler, e.g., to process the order
            >
              Process Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
