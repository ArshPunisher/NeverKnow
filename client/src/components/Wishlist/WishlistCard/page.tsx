import React from "react";
import img from '../../../../assets/images/nykaa/liquidFoundation.avif'
import Image from "next/image";

type WishlistCardProps = {
  product: {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    image: string;
  };
};

const WishlistCard: React.FC<WishlistCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={img}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-gray-500 hover:bg-gray-300">
          ✕
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
        <div className="mt-2 flex items-center">
          <span className="text-lg font-bold text-red-600">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm line-through ml-2 text-gray-500">
              {product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-sm text-orange-500 ml-2">{product.discount}</span>
          )}
        </div>
        <button className="mt-4 w-full py-2 text-center bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-lg">
          MOVE TO BAG
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
