import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  isPasswordContainCapitalChar,
  isPasswordContainNumber,
  isPasswordContainSpecialChar,
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "@/utils/Utils";
import InputField from "@/components/InputField/page";
import Link from "next/link";

const SignUpForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!user.username) newErrors.username = "Username is required";
    else if (!isValidUsername(user.username)) newErrors.username = "Please enter a valid username";

    if (!user.email) newErrors.email = "Email is required";
    else if (!isValidEmail(user.email)) newErrors.email = "Please enter a valid email";

    if (!user.password) newErrors.password = "Password is required";
    else if (!isPasswordContainNumber(user.password)) newErrors.password = "Password must contain at least one number";
    else if (!isPasswordContainSpecialChar(user.password)) newErrors.password = "Password must contain at least one special character";
    else if (!isPasswordContainCapitalChar(user.password)) newErrors.password = "Password must contain at least one capital letter";
    else if (!isValidPassword(user.password)) newErrors.password = "Password must be at least 8 characters long";

    if (!user.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    else if (user.confirmPassword !== user.password) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        credentials: "include",
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Signup failed");

      alert("Sign up successfully!");
      router.push("/login");
    } catch (error: any) {
      alert(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField name="username" label="Username" value={user.username} onChange={handleInput} error={errors.username} placeholder="megha123"/>
      <InputField name="email" label="Email" type="email" value={user.email} onChange={handleInput} error={errors.email} placeholder="megha@email.com"/>
      <InputField name="password" label="Password" type="password" value={user.password} onChange={handleInput} error={errors.password} placeholder="*********"/>
      <InputField name="confirmPassword" label="Confirm Password" type="password" value={user.confirmPassword} onChange={handleInput} error={errors.confirmPassword} placeholder="*********"/>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-lg bg-[#fff] text-[#000] border border-[#fff] hover:border-gray-600 hover:bg-transparent hover:text-gray-200 font-medium text-sm transition-colors"
      >
        Sign Up
      </button>
      <p className="text-center text-gray-400 text-sm">
        Already have an account?{" "}
        <Link
          href={"/login"}
          className="hover:text-white hover:underline cursor-pointer"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
