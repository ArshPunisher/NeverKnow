"use client";
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleInput = (e:any) =>{
    const name = e.target.name
    setUser({
      ...user,
      [name]: e.target.value
    })
  }

  const handleSubmit = async (e:any) =>{
    e.preventDefault()

    setErrors({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:user.username, email:user.email, password:user.password }),
        credentials: 'include'
      })

      const data = await response.json()

      if(!response.ok){
        throw new Error(data.message || 'An error occurred during signup')
      }
      console.log("data: ", data)
      // document.cookie = `token=${data.token}; Secure; SameSite=Lax;`
      // localStorage.setItem("token", data.token)
      alert("Sign Up successfully!")

    }catch(error:any){
      console.log("Error: ", error.message)
    }
  }

  return (
    <>
      <Navbar/>
      <div className="flex justify-center items-center min-h-screen bg-[#0f0f0f]">
        <div className="border border-gray-700 px-6 py-8 rounded-xl space-y-6 w-full max-w-md">
          <div>
            <h2 className="text-2xl font-semibold text-white text-start">Sign Up</h2>
            <hr className="border-t border-gray-600 opacity-40 mt-2" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-gray-300 text-sm font-medium">Username</label>
              <input
                name="username"
                value={user.username}
                onChange={handleInput}
                type="text"
                placeholder="megha123"
                className="bg-transparent border border-gray-600 rounded-lg w-full p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fff]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-300 text-sm font-medium">Email</label>
              <input
                name="email"
                value={user.email}
                onChange={handleInput}
                type="email"
                placeholder="megha@email.com"
                className="bg-transparent border border-gray-600 rounded-lg w-full p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fff]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-300 text-sm font-medium">Password</label>
              <input
                name="password"
                value={user.password}
                onChange={handleInput}
                type="password"
                placeholder="********"
                className="bg-transparent border border-gray-600 rounded-lg w-full p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fff]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-gray-300 text-sm font-medium">Confirm Password</label>
              <input
                name="confirmPassword"
                value={user.confirmPassword}
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
              Sign Up
            </button>
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <Link href={'/login'} className="hover:text-white hover:underline cursor-pointer">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
