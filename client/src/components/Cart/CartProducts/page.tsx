"use client"

import React, { useState } from 'react';
import img from '../../../../assets/images/nykaa/cosmeticsKit.avif'
import Image from 'next/image';

type CartProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  size: string;
  quantity: number;
  deliveryDate: string;
  selected: boolean;
};

type CartProductsProps = {
  products: CartProduct[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onToggleSelect: (id: number, isSelected: boolean) => void;
};

const CartProducts = ({
  products,
  onRemove,
  onUpdateQuantity,
  onToggleSelect,
}: CartProductsProps) => {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-start justify-between border-b pb-4 mb-4"
        >
          {/* Left Section */}
          <div className="flex items-start">
            {/* Checkbox */}
            <input
              type="checkbox"
              className="mt-2 mr-4"
              checked={product.selected}
              onChange={(e) => onToggleSelect(product.id, e.target.checked)}
            />
            {/* Product Image */}
            <Image
              src={img}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />
            {/* Product Info */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Sold by: <span className="font-medium">CAMPUS ACTIVEWEAR LIMITED</span>
              </p>
              <p className="text-sm text-gray-500">Size: {product.size}</p>
              <p className="text-sm text-green-600 mt-1">
                Coupon Discount: ₹{product.discount}
              </p>
              <p className="text-lg font-bold mt-1 text-gray-800">
                ₹{product.price}{' '}
                <span className="text-sm line-through text-gray-500">
                  ₹{product.originalPrice}
                </span>
                <span className="ml-2 text-sm text-red-500">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="text-black">14 days</span> return available
              </p>
              <p className="text-sm text-gray-500">
                Delivery between <span className="text-black">{product.deliveryDate}</span>
              </p>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col items-end">
            {/* Quantity Control */}
            <div className="flex items-center">
              <button
                onClick={() =>
                  onUpdateQuantity(product.id, Math.max(1, product.quantity - 1))
                }
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="mx-2">{product.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
            {/* Delete Button */}
            <button
              onClick={() => onRemove(product.id)}
              className="text-red-500 text-sm mt-2 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
