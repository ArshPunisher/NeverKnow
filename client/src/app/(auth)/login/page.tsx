"use client";

import LoginForm from "@/components/AuthForms/LoginForm/page";
import Navbar from "@/components/Navbar/page";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#0f0f0f]">
        <div className="border border-gray-700 px-6 py-8 rounded-xl space-y-6 w-full max-w-md">
          <div>
            <h2 className="text-2xl font-semibold text-white text-start">
              Login
            </h2>
            <hr className="border-t border-gray-600 opacity-40 mt-2" />
          </div>
          <LoginForm/>
        </div>
      </div>
    </>
  );
};

export default Login;
