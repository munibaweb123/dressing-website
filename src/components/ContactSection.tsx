import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-white">
      {/* Left Section - Contact Info */}
      <div className="w-full md:w-1/2 text-left">
        <h5 className="text-sm uppercase font-semibold text-gray-500 tracking-widest">
          Contact Us
        </h5>
        <h2 className="mt-2 text-4xl font-bold text-gray-900">Get in touch today!</h2>
        <p className="mt-4 text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">
            Phone: <span className="font-normal text-gray-600">+451 215 215</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Fax: <span className="font-normal text-gray-600">+451 215 215</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4">
          <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <Twitter className="h-5 w-5 text-gray-700" />
          </Link>
          <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <Facebook className="h-5 w-5 text-gray-700" />
          </Link>
          <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <Instagram className="h-5 w-5 text-gray-700" />
          </Link>
          <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
            <Linkedin className="h-5 w-5 text-gray-700" />
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* Background Shape */}
        <div className="absolute top-0 left-10 w-64 h-64 bg-pink-100 rounded-full -z-10"></div>

        <Image
          src="/shopping-cart-girl.png" // Replace with actual image path
          alt="Family Shopping"
          width={500}
          height={500}
          className="relative z-10"
        />
      </div>
    </section>
  );
};

export default ContactSection;
