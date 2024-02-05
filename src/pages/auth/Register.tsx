// RegistrationForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import config from "../../config/config";
import { Link as RouterLink } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Link from "../../components/ui/Link";

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
    <div className="flex items-center justify-center h-screen max-w-sm px-3 mx-auto text-green-900 ">
      <div className="p-8 shadow-md w-96">
        <RouterLink to="/" className="flex items-center justify-center mb-4">
          <FaLeaf className="mr-2 text-4xl text-green-500" />
          <span className="mb-4 text-xl font-bold text-green-800">
            Organic Shop
          </span>
        </RouterLink>
        <h1 className="mb-4 font-bold text-center">Register Account</h1>
        <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-bold ">
              Username
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={` ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="mt-1 text-xs text-red-500">
                {formik.errors.username}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold ">
              Email
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={` ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="mt-1 text-xs text-red-500">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-bold ">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={` ${
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

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-bold "
            >
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={` ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="mt-1 text-xs text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <Button type="submit">Register</Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
          </span>
          <Link to="/login" className="text-green-500" variant="link">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
