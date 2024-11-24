import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      
      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700">Price</h3>
        <input type="range" className="w-full mt-2" min="0" max="10000" />
      </div>
      
      {/* Brands Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700">Brands</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <button className="border rounded-lg px-2 py-1 text-sm">Brand 1</button>
          <button className="border rounded-lg px-2 py-1 text-sm">Brand 2</button>
          <button className="border rounded-lg px-2 py-1 text-sm">Brand 3</button>
          {/* Add more brand buttons */}
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700">Categories</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <button className="border rounded-lg px-2 py-1 text-sm">Category 1</button>
          <button className="border rounded-lg px-2 py-1 text-sm">Category 2</button>
          <button className="border rounded-lg px-2 py-1 text-sm">Category 3</button>
          {/* Add more category buttons */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
