import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image"; 
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface CarouselProps {
  images: (string | StaticImageData)[]; 
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Carousel Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-1 md:p-2 bg-gray-700 bg-opacity-60 text-white rounded-full shadow-md hover:bg-gray-800 transition-all md:left-6 text-sm md:text-base"
      >
        <MdArrowBackIosNew size={18} className="md:w-5 md:h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-1 md:p-2 bg-gray-700 bg-opacity-60 text-white rounded-full shadow-md hover:bg-gray-800 transition-all md:right-6 text-sm md:text-base"
      >
        <MdArrowForwardIos size={18} className="md:w-5 md:h-5" />
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
