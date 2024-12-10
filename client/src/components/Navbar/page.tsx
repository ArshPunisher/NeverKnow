// components/Navbar.tsx
import React, { useState } from "react";
import Logo from "../Logo/page";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import SearchBar from "../SearchBar/page";
import ProfileModal from "../Modal/ProfileModal/page";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // const {user} = useSelector((state: RootState)=> state.auth)
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // console.log("Navbr", user)

  return (
    <nav className="sticky top-0 w-full bg-white p-3 md:p-5 z-50 drop-shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Hamburger Icon for mobile */}
          <FaBars
            className="text-gray-700 hover:text-black cursor-pointer md:hidden"
            size={24}
            onClick={toggleMenu}
          />
          {/* Logo */}
          <div id="logo" className="flex items-center">
            <Logo />
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-full md:max-w-md lg:max-w-xl md:mx-4 lg:mx-auto">
          <SearchBar />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8 lg:mr-8 relative">
          <div
            className="flex flex-col items-center cursor-pointer relative"
            onClick={toggleModal}
          >
            <FaRegUser size={20} className="text-gray-700 hover:text-black" />
            <span className="text-[0.6rem] md:text-sm text-gray-600">
              Profile
            </span>
            {isModalOpen && <ProfileModal />}
          </div>

          <Link to="/wishlist">
            <div className="flex flex-col items-center cursor-pointer">
              <FaRegHeart
                size={20}
                className="text-gray-700 hover:text-black"
              />
              <span className="text-[0.6rem] md:text-sm text-gray-600">
                Wishlist
              </span>
            </div>
          </Link>

          <Link to="/cart">
            <div className="flex flex-col items-center cursor-pointer">
              <FiShoppingBag
                size={20}
                className="text-gray-700 hover:text-black"
              />
              <span className="text-[0.6rem] md:text-sm text-gray-600">
                Cart
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Search Bar for mobile view */}
      <div className="mt-3 md:hidden">
        <SearchBar />
      </div>

      {/* Mobile Menu (Optional) */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md">
          {/* Add menu items for mobile */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
