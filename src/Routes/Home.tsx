import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col justify-end p-6">
        
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to={"/signup"}>
            <button className="w-full py-3 bg-[#6C25FF] text-white font-medium rounded-md hover:bg-purple-700 transition">
              Create Account
            </button>
          </Link>
          <Link to={"/signin"}>
            <button className="w-full py-3 bg-[#6C25FF4B] text-black font-medium rounded-md">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
