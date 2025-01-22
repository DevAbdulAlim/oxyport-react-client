// LoginForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Link from "../../components/ui/Link";

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
      console.log(location.state);
      navigate(intendedDestination);
    },
  });

  return (
    <div className="flex items-center justify-center h-screen max-w-sm mx-auto text-green-900">
      <div className="p-8 shadow-md w-96">
        <RouterLink to="/" className="flex items-center justify-center mb-4">
          <FaLeaf className="mr-2 text-4xl text-green-500" />
          <span className="text-xl font-bold text-green-800">Organic Shop</span>
        </RouterLink>
        <h1 className="mb-4 font-bold text-center">Login Account</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold">
              Email
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`border border-gray-300 rounded w-full p-2 ${
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
            <label htmlFor="password" className="block mb-2 text-sm font-bold">
              Password
            </label>
            <Input
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

          <Button type="submit">Login</Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <Link to="/register" className="text-green-500" variant="link">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
