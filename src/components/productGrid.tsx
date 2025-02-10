import React from "react";
import ProductCard from "./productCard";


const products = [
  {
    image: "/model1.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/model2.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/model3.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/model4.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/accessories.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/kids.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/women.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
  {
    image: "/men.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
    colors: ["#23A6F0", "#F2994A", "#2D9CDB", "#27AE60"],
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
