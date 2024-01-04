// LoginForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import config from '../../config';

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        // Make a login request using Axios
        const response = await axios.post(`${config.apiBaseUrl}/users/login`, values);

        // Handle the response here (e.g., store tokens, redirect, etc.)
        console.log('Login successful:', response.data);
      } catch (error) {
        // Handle login error (e.g., display error message)
        console.error('Login failed:', error);
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`border border-gray-300 rounded w-full p-2 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`border border-gray-300 rounded w-full p-2 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
