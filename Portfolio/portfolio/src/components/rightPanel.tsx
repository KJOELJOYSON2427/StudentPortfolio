"use client";
import { getImageCarousel } from "@/logic/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = getImageCarousel();

const RightPanel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:ml-100 z-80 h-full w-full flex flex-col justify-center items-center px-4 md:px-8 py-8 mt-[-60px] md:mt-0">
      <div
        key={images[currentImage].images}
        className="
          relative 
          w-[200px] h-[200px] 
          md:w-[350px] md:h-[350px] 
          rounded-full 
          border-4 border-gray-300 shadow-xl
          bg-white md:bg-transparent
          z-30
          animate-fadeSlide 
          transition-all duration-700 ease-in-out
        "
      >
        <Image
          src={images[currentImage].images}
          alt={images[currentImage].alt}
          fill
          className="object-cover rounded-full z-40"
          priority
        />
      </div>
    </div>
  );
};

export default RightPanel;
