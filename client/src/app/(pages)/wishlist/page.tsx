"use client";

import Navbar from "@/components/Navbar/page";
import WishlistCard from "@/components/Wishlist/WishlistCard/page";
import React from "react";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "MYTRIDENT Teal Blue Cotton Towel",
      price: "Rs.455",
      originalPrice: "Rs.1,199",
      discount: "62% OFF",
      image: "/images/towel1.png",
    },
    {
      id: 2,
      name: "Jockey Pack Of 2 Cotton Rich Towels",
      price: "Rs.499",
      originalPrice: "",
      discount: "",
      image: "/images/towel2.png",
    },
    {
      id: 3,
      name: "Marks & Spencer Blue 550 GSM Towel",
      price: "Rs.499",
      originalPrice: "",
      discount: "",
      image: "/images/towel3.png",
    },
    {
      id: 4,
      name: "MYTRIDENT Navy Blue 500 GSM Towel",
      price: "Rs.399",
      originalPrice: "Rs.999",
      discount: "60% OFF",
      image: "/images/towel4.png",
    },
    {
      id: 5,
      name: "MYTRIDENT Brown 500 GSM Towel",
      price: "Rs.399",
      originalPrice: "Rs.999",
      discount: "60% OFF",
      image: "/images/towel5.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">My Wishlist</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <WishlistCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
