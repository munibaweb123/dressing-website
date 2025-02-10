import React from "react";
import { Button } from "@/components/ui/button";

import BlogSection from "@/components/BlogSection";

import ProductGrid from "@/components/productGrid";
import EditorsPick from "@/components/editorsPick";
import ProductPromo from "@/components/productPromo";
import NeuralUniversePromo from "@/components/NeuralUniversePromo";

// Homepage Component
const Home = () => {
  return (
    <main className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-[#23A6F0] p-8 rounded-lg relative  min-h-[70vh] overflow-hidden m-4">
        <div className="absolute inset-0 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(/hero-img.jpg)' }}></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-white">NEW COLLECTION</h2>
            <p className="mt-4 text-xl text-white maz-w-360"> We know how large objects will act, 
            but things on a small scale.</p>
            <Button className="mt-6 bg-blue-600 text-white">Shop Now</Button>
          </div>
        
        </div>
      </section>

      <EditorsPick/>
      <ProductGrid/>
      <ProductPromo/>
      <NeuralUniversePromo/>
      <BlogSection />
      
    </main>
  );
};

export default Home;
