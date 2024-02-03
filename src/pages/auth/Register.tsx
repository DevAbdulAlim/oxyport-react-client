// RegistrationForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import config from "../../config/config";

const RegistrationForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters"),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), null as unknown as string],
          "Passwords must match"
        )
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        // Make a registration request using Axios
        const response = await axios.post(
          `${config.apiBaseUrl}/users/register`,
          {
            name: values.username,
            email: values.email,
            password: values.password,
          }
        );

        // Handle the response here (e.g., show success message, redirect, etc.)
        console.log("Registration successful:", response.data);
      } catch (error) {
        // Handle registration error (e.g., display error message)
        console.error("Registration failed:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className={`border border-gray-300 rounded w-full p-2 ${
            formik.touched.username && formik.errors.username
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.username}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`border border-gray-300 rounded w-full p-2 ${
            formik.touched.email && formik.errors.email ? "border-red-500" : ""
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`border border-gray-300 rounded w-full p-2 ${
            formik.touched.password && formik.errors.password
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.password}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className={`border border-gray-300 rounded w-full p-2 ${
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-500 text-xs mt-1">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
