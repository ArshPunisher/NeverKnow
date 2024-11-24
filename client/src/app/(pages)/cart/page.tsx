"use client";

import CartProducts from "@/components/Cart/CartProducts/page";
import Navbar from "@/components/Navbar/page";
import React, { useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Women Purple & White Printed Mesh Running Shoes",
      image: "/images/shoes1.jpg",
      price: 2000,
      originalPrice: 2299,
      discount: 200,
      size: "6",
      quantity: 1,
      deliveryDate: "21 Nov - 23 Nov",
      selected: true,
    },
    {
      id: 2,
      name: "Men Black Running Shoes",
      image: "/images/shoes2.jpg",
      price: 2500,
      originalPrice: 2999,
      discount: 300,
      size: "9",
      quantity: 1,
      deliveryDate: "22 Nov - 24 Nov",
      selected: true,
    },
    {
      id: 3,
      name: "Women Blue Sneakers",
      image: "/images/shoes3.jpg",
      price: 1800,
      originalPrice: 2199,
      discount: 150,
      size: "5",
      quantity: 1,
      deliveryDate: "20 Nov - 22 Nov",
      selected: true,
    },
  ]);

  const handleRemove = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const handleToggleSelect = (id: number, isSelected: boolean) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, selected: isSelected } : product
      )
    );
  };

  const totalAmount = products
    .filter((product) => product.selected)
    .reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Products */}
          <div className="col-span-2">
            <CartProducts
              products={products}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
              onToggleSelect={handleToggleSelect}
            />
          </div>
          <div className="bg-gray-100 p-4 rounded shadow self-start">
            <h2 className="text-lg font-semibold">Price Details</h2>
            <div className="mt-4 text-sm">
              {/* Total MRP */}
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>
                  ₹
                  {products
                    .filter((product) => product.selected)
                    .reduce(
                      (sum, product) =>
                        sum + product.originalPrice * product.quantity,
                      0
                    )}
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>
                  - ₹
                  {products
                    .filter((product) => product.selected)
                    .reduce(
                      (sum, product) =>
                        sum +
                        (product.originalPrice - product.price) *
                          product.quantity,
                      0
                    )}
                </span>
              </div>

              {/* Shipping Fee */}
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>FREE</span>
              </div>

              {/* Total Amount */}
              <div className="flex justify-between mt-4 font-semibold">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
            <button
              disabled={totalAmount === 0}
              className={`mt-6 w-full py-2 rounded ${
                totalAmount === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
