import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import OrderSummary from "./OrderSummary";
import SelectPaymentMethod from "./SelectPaymetnMethod";
import { useCreateOrder } from "../../api/order";

const Checkout = () => {
  const { items } = useCart();
  const { mutate } = useCreateOrder();

  const initialValues = {
    name: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    paymentMethod: "",
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
    paymentMethod: Yup.string()
      .required("Payment method is required")
      .oneOf(["cash"], "Only cash payments are accepted at the moment"),
  });

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      items: items,
    },
    validationSchema: addressSchema,
    onSubmit: (values) => {
      console.log(values);
      mutate(values);
    },
  });

  const handlePaymentSelection = (value: string) => {
    formik.setFieldValue("paymentMethod", value);
    console.log(value);
  };

  return (
    <div className="container px-3 py-20 mx-auto ">
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

            {/* Payment Methods */}
            <div className="mb-8">
              <SelectPaymentMethod handleChange={handlePaymentSelection} />
              {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.paymentMethod}
                </div>
              ) : null}
            </div>
          </div>

          <OrderSummary items={items} />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
