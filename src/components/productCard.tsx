import React from "react";

interface ProductProps {
  image: string;
  title: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
}

const ProductCard: React.FC<ProductProps> = ({
  image,
  title,
  department,
  originalPrice,
  discountedPrice,
  colors,
}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="font-bold text-lg mt-4">{title}</h3>
      <p className="text-gray-500">{department}</p>
      <div className="mt-2">
        <span className="text-gray-400 line-through mr-2">${originalPrice}</span>
        <span className="text-green-500 font-semibold">${discountedPrice}</span>
      </div>
      {/* Color Dots */}
      <div className="flex justify-center mt-2 space-x-2">
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
