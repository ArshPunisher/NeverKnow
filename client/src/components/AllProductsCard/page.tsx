import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ProductCardProps {
    image: string | StaticImageData;
    name: string;
    price: string | number;
    rating: number; // out of 5
  }

const AllProductsCard = ({ image, name, price, rating }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Image src={image} alt={name} className="h-48 w-full object-cover rounded-md" />
      <h3 className="text-md font-semibold mt-4 truncate">{name}</h3>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 mr-1">{'★'.repeat(Math.floor(rating))}</span>
        <span className="text-sm text-gray-500">({rating})</span>
      </div>
      <p className="text-lg font-bold mt-2">₹{price}</p>
    </div>
  )
}

export default AllProductsCard
