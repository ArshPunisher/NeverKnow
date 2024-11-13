import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image"; // Explicitly import StaticImageData
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

interface CarouselProps {
  images: (string | StaticImageData)[]; // Accept both string paths and StaticImageData types
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
    <div className="relative w-full h-[500px] overflow-hidden">
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
            className="w-full h-full"
          />
        </div>
      ))}

      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        <MdArrowBackIosNew size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        <MdArrowForwardIos size={24} />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
