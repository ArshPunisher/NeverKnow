import Link from 'next/link';
import React from 'react';

const ProfileModal = () => {
  return (
    <div className="absolute top-full mt-2 bg-white p-3 md:p-4 shadow-lg rounded-md w-48 z-40 md:w-72">
      <h3 className="font-semibold text-gray-800 text-sm leading-tight">Welcome</h3>
      <p className="text-xs text-gray-600 mb-4 leading-tight">
        To access your account and manage orders
      </p>
      
      {/* Login and Sign Up in a row with hover effects and partition wall */}
      <div className="flex items-center mb-2">
        <Link href="/login" className="mr-2">
          <p className="text-sm text-gray-700 hover:text-black p-2 rounded-md cursor-pointer transition-all relative border-2 border-transparent hover:border-black hover:border-solid font-medium hover:font-bold">
            Login
          </p>
        </Link>

        {/* Partition Wall */}
        <div className="h-6 border-r-2 border-gray-300"></div>

        <Link href="/signup" className="ml-2">
          <p className="text-sm text-gray-700 hover:text-black p-2 rounded-md cursor-pointer transition-all relative border-2 border-transparent hover:border-black hover:border-solid font-medium hover:font-bold">
            Sign Up
          </p>
        </Link>
      </div>

      <hr className="my-2" />
      
      {/* Other links with larger font sizes and bold on hover */}
      <Link href="#">
        <p className="text-sm text-gray-700 hover:underline cursor-pointer mb-1 hover:font-bold">Orders</p>
      </Link>

      <Link href="#">
        <p className="text-sm text-gray-700 hover:underline cursor-pointer mb-1 hover:font-bold">Wishlist</p>
      </Link>

      <Link href="#">
        <p className="text-sm text-gray-700 hover:underline cursor-pointer hover:font-bold">Contact Us</p>
      </Link>
    </div>
  );
};

export default ProfileModal;
