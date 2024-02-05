import React from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Settings = () => {
  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">User Settings</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-4 text-xl font-bold">Account Information</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 " htmlFor="username">
                Username
              </label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Your Username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-4 text-xl font-bold">Privacy Settings</h3>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2 ">Receive promotional emails</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2 ">Allow personalized recommendations</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
