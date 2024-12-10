import React, { useState } from "react";
import { BsBagHeartFill } from "react-icons/bs";
import Navbar from "../../../components/Navbar/page";

const ProductDetails = () => {
  // Dummy data
  const product = {
    id: "1",
    name: "Solid Men's Round Neck T-Shirt",
    price: 1599,
    description:
      "A high-quality, comfortable t-shirt perfect for any casual occasion. Made from 100% cotton and available in various colors.",
    mainImage: "/images/tshirt-main.jpg", // Replace with actual path or placeholder image
    images: [
      "/images/tshirt-main.jpg",
      "/images/tshirt1.jpg",
      "/images/tshirt2.jpg",
    ], // Replace with actual paths
    sizes: ["S", "M", "L", "XL"],
    reviews: [
      { rating: 4, comment: "Great quality!", user: "John Doe" },
      { rating: 5, comment: "Very comfortable.", user: "Jane Smith" },
    ],
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    alert(
      `Added ${quantity} item(s) of size ${selectedSize || "M"} to the cart.`
    );
  };

  const handleBuyNow = () => {
    alert(
      `Proceeding to buy ${quantity} item(s) of size ${selectedSize || "M"}.`
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image Gallery */}
          <div className="flex-1">
            <img
              src={product.mainImage}
              alt={product.name}
              className="w-full rounded-lg"
            />
            <div className="flex gap-2 mt-4">
              {product.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${product.name} ${idx}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Product Info and Options */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p className="text-xl font-semibold text-red-600">
              ₹{product.price}
            </p>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Size Selector */}
            <div className="mt-4">
              <h2 className="font-medium text-lg mb-2">Select Size:</h2>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded text-sm font-medium transition-colors 
          ${
            selectedSize === size
              ? "border-black bg-gray-100"
              : "border-gray-300 hover:border-black"
          }`}
                    aria-pressed={selectedSize === size} // Accessibility
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4">
              <h2 className="font-medium text-lg mb-2">Quantity:</h2>
              <div className="flex items-center gap-2">
                {/* Decrease Button */}
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="p-2 w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-100 active:bg-gray-200"
                >
                  -
                </button>
                {/* Quantity Input */}
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = Math.max(1, Number(e.target.value) || 1);
                    setQuantity(value);
                  }}
                  className="w-16 h-8 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Increase Button */}
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="p-2 w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-100 active:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-4 py-2 bg-[#ff3e6c] text-white rounded hover:bg-[#ff3e6bdd]"
              >
                <BsBagHeartFill /> Add to Bag
              </button>
              <button
                onClick={handleBuyNow}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Buy Now
              </button>
            </div>

            {/* Ratings and Reviews */}
            <div className="mt-8">
              <h2 className="text-lg font-medium">Ratings & Reviews</h2>
              <p className="text-yellow-500">★★★★☆ 4.5</p>
              <p className="text-gray-500">
                Based on {product.reviews.length} reviews
              </p>
              {product.reviews.map((review, idx) => (
                <div key={idx} className="mt-2 border-t pt-2">
                  <p className="font-semibold">{review.user}</p>
                  <p>
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
              <button className="mt-4 text-blue-600">Write a Review</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
