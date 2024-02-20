import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Details</h1>
        <div className="mb-4">
          <label className="font-semibold">Name:</label>{" "}
          <span className="text-gray-800">{userInfo.name}</span>
        </div>
        <div className="mb-4">
          <label className="font-semibold">Email:</label>{" "}
          <span className="text-gray-800">{userInfo.email}</span>
        </div>
        <div className="mb-4">
          <label className="font-semibold">Mobile Number:</label>{" "}
          <span className="text-gray-800">{userInfo.mobile}</span>
        </div>
        <div>
          <label className="font-semibold">Role:</label>{" "}
          <span className="text-gray-800">Administrator</span> {/* Assuming the role is fixed */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
