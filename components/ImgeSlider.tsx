"use client";
 // If using Next.js App Router (React Server Components)

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { ArrowLeft, ArrowRight, Search} from "lucide-react";
import SearchBar from "./ui/SearchBar";




const images = [
  "https://firebasestorage.googleapis.com/v0/b/internee-pk.appspot.com/o/winning%20pictures%2Fwinners.jpeg?alt=media&token=7d4dbd2a-92bc-45e6-b5f6-9ca640711094",

  "https://firebasestorage.googleapis.com/v0/b/internee-pk.appspot.com/o/winning%20pictures%2Fwinners.jpeg?alt=media&token=7d4dbd2a-92bc-45e6-b5f6-9ca640711094",

  "https://firebasestorage.googleapis.com/v0/b/internee-pk.appspot.com/o/winning%20pictures%2Fwinners.jpeg?alt=media&token=7d4dbd2a-92bc-45e6-b5f6-9ca640711094",
  
  "https://firebasestorage.googleapis.com/v0/b/internee-pk.appspot.com/o/winning%20pictures%2Fwinners.jpeg?alt=media&token=7d4dbd2a-92bc-45e6-b5f6-9ca640711094",
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for previous
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 7000); // Auto-slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
  
    const prevSlide = () => {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
    return (
      <div className="relative w-screen h-[500px] overflow-hidden">
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg flex items-center p-2 w-[300px] sm:w-[400px] md:w-[500px] z-10">
       {/* <Searchar/> */}
       <SearchBar/>
      </div>
        {/* Image Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: direction * 100 + "%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: -direction * 100 + "%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
  
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-green-600 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80"
        >
         <ArrowLeft/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-green-600 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80"
        >
          <ArrowRight/>
        </button>
  
        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white scale-125" : "bg-green-800"
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  }