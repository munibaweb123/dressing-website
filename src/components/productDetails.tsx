"use client";

import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductDetailsProps {
  
  title: string;
  description: string;
  image: string;
  price: number;
  reviews: number;
  availability: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  
  title,
  description,
  image,
  price,
  reviews,
  availability,
}) => {
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#000000"]; // Example colors array

  return (
    <div className="rounded grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg bg-gray-50 p-6 max-w-6xl mx-auto">
      <div>
        <Image src={image} alt={title} width={500} height={500} />
      </div>
      <div>
        <h1 className="font-bold text-xl mb-2">{title}</h1>

        {/* Star Ratings */}
        <div className="flex items-center justify-start gap-x-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`${
                index < Math.floor(reviews / 2)
                  ? "fill-current text-[#ffff00]"
                  : "fill-transparent text-[#ffff00]"
              }`}
            />
          ))}
          <h2 className="text-gray-700 text-base">{reviews} Reviews</h2>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">${price.toFixed(2)}</h3>
        <p className={`text-sm mb-4 ${availability ? "text-green-600" : "text-red-500"}`}>
          Availability: {availability ? "In Stock" : "Out of Stock"}
        </p>
        <p className="text-gray-700 text-base mb-4">{description}</p>

        {/* Color Selection */}
        <div className="flex justify-start mt-2 space-x-2">
          {colors.map((color, index) => (
            <span key={index} className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }}></span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mb-4 flex items-center justify-start space-x-2 mt-4">
          <select
            id="options"
            className="bg-[#23A6F0] block pl-3 pr-10 py-2 text-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Select</option>
            <option>Option 1</option>
          </select>
          <button className="bg-white border-black border-1 font-bold rounded-full p-2">
            <ShoppingCart />
          </button>
          <button className="bg-white border-black border-1 font-bold rounded-full p-2">
            <Heart />
          </button>
          <button className="bg-white border-black border-1 font-bold rounded-full p-2">
            <Eye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
