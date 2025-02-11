import { client } from "@/sanity/lib/client";

import Image from "next/image";
import { notFound } from "next/navigation";

// GROQ Query to fetch product details
const query = `*[_type == "product" && _id == $id][0]{
  _id,
  title,
  description,
  "imageUrl": productImage.asset->url,
  price,
  tags,
  dicountPercentage,
  isNew
}`;

// Define Product Type
interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  dicountPercentage?: number;
  isNew?: boolean;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string } >}) {
  if (!(await params)?.id) return notFound(); // Ensure params.id exists before fetching

  try {
    const product: Product | null = await client.fetch(query, { id: (await params).id });

    if (!product) return notFound();

    return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Pricing Section */}
          <div className="mt-4">
            <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
            {product.dicountPercentage && (
              <p className="text-red-500 font-bold mt-1">
                Discount: {product.dicountPercentage}%
              </p>
            )}
          </div>

          {/* Tags */}
          {product.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-gray-200 text-black font-semibold rounded-md hover:bg-gray-300 transition">
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return notFound();
  }
}
