import React from 'react';
import img from '../../assets/images/nykaa/wipes.avif'
import Navbar from '../../components/Navbar/page';
import Sidebar from '../../components/Sidebar/page';
import AllProductsCard from '../../components/AllProductsCard/page';

const products = [
  {
    id: 1,
    image: img,
    name: 'Stylish Jacket',
    price: 79.99,
    rating: 4.5,
  },
  {
    id: 2,
    image: img,
    name: 'Comfortable Sneakers',
    price: 59.99,
    rating: 4.0,
  },
  {
    id: 3,
    image: img,
    name: 'Trendy Sunglasses',
    price: 29.99,
    rating: 4.8,
  },
  // Add more product objects here
];

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100">
        
        {/* Sidebar - Hidden on small screens */}
        <aside className="hidden md:block w-64">
          <Sidebar />
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-4">All Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <AllProductsCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AllProducts;
