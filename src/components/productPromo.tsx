import Image from "next/image";

const ProductPromo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#23856D] text-white p-6 md:p-12 rounded-lg m-4">
      {/* Left Content */}
      <div className="w-full md:max-w-lg text-center md:text-left">
        <p className="text-sm uppercase">SUMMER 2020</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Vita Classic Product</h1>
        <p className="text-base md:text-lg mt-4">
          We know how large objects will act, We know how are objects will act, We know
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-6 gap-4">
          <span className="text-2xl font-bold">$16.48</span>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-green-600">
            ADD TO CART
          </button>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/productPromo.png"
          alt="Vita Classic Product"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default ProductPromo;
