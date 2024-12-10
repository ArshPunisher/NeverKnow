import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

interface Product {
  image: string;
  name: string;
  mrp: number;
  discount?: number;
}

interface ProductCardProps {
  products: Product[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to 4 cards

  // Update the number of cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4); // Large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(3); // Medium screens
      } else {
        setCardsToShow(1); // Small screens
      }
    };

    // Set the initial number of cards and add a resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute the total number of slides needed
  const totalSlides = Math.ceil(products.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Swipeable handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div {...swipeHandlers} className="relative w-full">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
        }}
      >
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <div className="card w-[8rem] md:w-[14rem] cursor-pointer">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="text-xs font-semibold mt-2 md:text-sm line-clamp overflow-hidden">
                  {product.name}
                </h2>

                <div className="flex items-center mt-1 text-xs md:text-sm">
                  {product.discount ? (
                    <>
                      <span className="line-through text-gray-500">
                        ₹{product.mrp}
                      </span>
                      <span className="text-red-600 ml-2">
                        ₹
                        {(
                          product.mrp -
                          (product.mrp * product.discount) / 100
                        ).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-800">₹{product.mrp}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (hidden on mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCard;
