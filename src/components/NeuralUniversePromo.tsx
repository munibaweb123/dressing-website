import Image from "next/image";

const NeuralUniversePromo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-gray-900 p-6 md:p-12 rounded-lg">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/neural-universe.png"
          alt="Part of the Neural Universe"
          width={500}
          height={500}
          className="object-contain rounded-lg"
        />
      </div>
      
      {/* Right Content */}
      <div className="w-full md:max-w-lg text-center md:text-left mt-6 md:mt-0">
        <p className="text-sm uppercase text-gray-500">SUMMER 2020</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">Part of the Neural Universe</h1>
        <p className="text-base md:text-lg mt-4 text-gray-700">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-green-600">
            BUY NOW
          </button>
          <button className="border border-green-500 text-green-500 px-6 py-2 rounded-md font-semibold shadow-md hover:bg-green-50">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniversePromo;
