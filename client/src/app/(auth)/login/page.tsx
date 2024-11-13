"use client";
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e: any) => {
    const name = e.target.name;
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setErrors({ username: "", password: "" });

    if (!user.password) {
      setErrors({
        ...errors,
        password: "Please enter a valid password.",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "An error occurred during login");
      }
      alert("Login successful");
    } catch (error: any) {
      console.log("Error occurred", error.message);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-gray-300 text-sm font-medium"
              >
                Username
              </label>
              <input
                name="username"
                type="text"
                value={user.username}
                onChange={handleInput}
                placeholder="megha123"
                className="bg-transparent border border-gray-600 rounded-lg w-full p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fff]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-gray-300 text-sm font-medium"
              >
                Password
              </label>
              <input
                name="password"
                value={user.password}
                onChange={handleInput}
                type="password"
                placeholder="********"
                className="bg-transparent border border-gray-600 rounded-lg w-full p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fff]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-[#fff] text-[#000] border border-[#fff] hover:border-gray-600 hover:bg-transparent hover:text-gray-200 font-medium text-sm transition-colors"
            >
              Login
            </button>
            <p className="text-center text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link
                href={"/signup"}
                className="hover:text-white hover:underline cursor-pointer"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
