import React from "react";

const profileData = {
  registrationDate: "10/18/23 03:14 pm",
  firstName: "Mariya Luica",
  email: "orgado@example.com",
  phone: "+8801254254252",
  gender: "Female",
  biography: "A brief biography about Mariya Luica...",
};

const Profile: React.FC = () => {
  return (
    <div className="container p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-3xl font-bold">My Profile</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <span className="font-bold">Registration Date:</span>{" "}
            {profileData.registrationDate}
          </div>
          <div className="mb-4">
            <span className="font-bold">First Name:</span>{" "}
            {profileData.firstName}
          </div>
          <div className="mb-4">
            <span className="font-bold">Email:</span> {profileData.email}
          </div>
          <div className="mb-4">
            <span className="font-bold">Phone:</span> {profileData.phone}
          </div>
          <div>
            <span className="font-bold">Gender:</span> {profileData.gender}
          </div>
        </div>
        <div>
          <div className="mb-4">
            <span className="font-bold">Biography:</span>{" "}
            {profileData.biography}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
