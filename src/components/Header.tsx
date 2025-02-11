'use client'
import React from "react";
import Link from "next/link";
import { Phone, Mail, User, MessageCircle, Search, ShoppingCart, Heart, Menu, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../components/ui/sheet";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white max-w-6xl mx-auto">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-2 text-sm text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 mt-2 sm:mt-0">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-gray-400"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-gray-400"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-gray-400"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-gray-400"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-gray-400"><MessageCircle className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 bg-white text-gray-900">
        <h1 className="text-2xl font-bold">Bandage</h1>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-gray-900"><Menu size={24} /></button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 sm:w-1/2">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <SheetClose asChild>
                
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-6 p-4 sm:hidden">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                {['Shop', 'About', 'Blog', 'Contact', 'Pricing', 'Cart'].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-blue-500">
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          {['Shop', 'About', 'Blog', 'Contact','Pricing', 'Cart'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-blue-500">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/login" className="hover:text-blue-500 text-[#23A6F0] font-bold flex items-center gap-1">
            <User className="w-5 h-5" /> Login / Register
          </Link>
          <Search color="#23A6F0" size={24} />
          <ShoppingCart color="#23A6F0" size={24} />
          <Heart color="#23A6F0" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
