import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-sm font-semibold text-gray-500 uppercase">About Company</h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 uppercase">About Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#23A6F0] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Quote Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
        <div className="relative w-full max-w-md">
          <Image
            src="/shopping-cart-girl.png" // Replace with actual image path
            alt="Shopping Girl"
            width={500}
            height={500}
            className="rounded-lg"
          />
          {/* Background Circle */}
          <div className="absolute -z-10 top-10 left-5 w-40 h-40 bg-pink-100 rounded-full"></div>
          <div className="absolute -z-10 bottom-5 right-5 w-6 h-6 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
