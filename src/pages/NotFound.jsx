import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0a0a15] text-white p-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-md text-white"
      >
        <FaArrowLeft /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
