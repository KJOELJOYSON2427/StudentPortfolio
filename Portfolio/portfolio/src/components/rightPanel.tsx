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
    <div className="relative z-10 h-full w-full flex flex-col justify-center items-center px-4 md:px-8 py-8 mt-[-80px] md:mt-0">
      <div
        key={images[currentImage].images} // re-render on image change
        className="w-[150px] h-[150px] md:w-[320px] md:h-[320px]
        bg-white md:bg-transparent relative
        rounded-full border-4 border-gray-300 shadow-md
        animate-fadeSlide transition-all duration-700 ease-in-out"
      >
        <Image
          src={images[currentImage].images}
          alt={images[currentImage].alt}
          fill
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default RightPanel;
