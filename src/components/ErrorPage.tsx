import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const ErrorPage: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 text-center bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <FiAlertCircle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="mb-4 text-xl font-semibold ">
          Oops! Something went wrong.
        </h1>
        {message && <p className="text-sm text-gray-600">{message}</p>}
        <button
          className="px-4 py-2 mt-6 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
