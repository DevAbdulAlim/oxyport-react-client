// LoginForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const { login } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      await login(values.email, values.password);
      const intendedDestination = location.state?.from || "/";
      navigate(intendedDestination);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-gray-700"
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
          <div className="mt-1 text-xs text-red-500">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-bold text-gray-700"
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
          <div className="mt-1 text-xs text-red-500">
            {formik.errors.password}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
