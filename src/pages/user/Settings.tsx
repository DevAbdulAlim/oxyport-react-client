import React from "react";

const Settings = () => {
  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">User Settings</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-4 text-xl font-bold">Account Information</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Username"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-4 text-xl font-bold">Privacy Settings</h3>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-600">
                Receive promotional emails
              </span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-600">
                Allow personalized recommendations
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
