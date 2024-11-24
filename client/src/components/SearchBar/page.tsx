import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchBarProps {
  styles?: string;
}

const SearchBar = ({ styles = '' }:SearchBarProps) => {
  return (
    <div className={`relative w-full flex items-center ${styles}`}>
      <FaMagnifyingGlass className="absolute left-3 text-gray-400" size={20} />
      <input
        type="text"
        className="w-full pl-10 py-2 rounded-lg bg-gray-100 text-gray-700 focus:outline-none"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default SearchBar;
