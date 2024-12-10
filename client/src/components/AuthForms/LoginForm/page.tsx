import InputField from "../../InputField/page";
import { authState } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch()

  // Loading State
  const [loading, setLoading] = useState(false);

  // User Details
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // Error Handling
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Handling Inputs
  const handleInput = (e: any) => {
    const name = e.target.name;
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const validateForm = () =>{
    const newErrors: typeof errors = {
      username:"",
      password:""
    }

    if(!user.username){
      newErrors.username = "Please enter username."
    }
    if(!user.password){
      newErrors.password = "Please enter password."
    }

    setErrors(newErrors)

    return !newErrors.username && !newErrors.password
  }

  // Submitting Login form to API
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
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
      alert(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField name="username" label="Username" value={user.username} onChange={handleInput} error={errors.username} placeholder="megha123"/>
      <InputField name="password" label="Password" type="password" value={user.password} onChange={handleInput} error={errors.password} placeholder="*********"/>
    <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-lg bg-[#fff] text-[#000] border border-[#fff] hover:border-gray-600 hover:bg-transparent hover:text-gray-200 font-medium text-sm transition-colors"
    >
        Login
    </button>
    <p className="text-center text-gray-400 text-sm">
        Don't have an account?{" "}
        <Link
        to={"/auth/signup"}
        className="hover:text-white hover:underline cursor-pointer"
        >
        SignUp
        </Link>
    </p>
    </form>
  );
};

export default LoginForm;
