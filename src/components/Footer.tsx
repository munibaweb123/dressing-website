
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-white min-h-[488px] max-w-6xl mx-auto text-black px-4 '>
        <div className='flex items-center justify-between p-10'>
            <h2 className='font-bold text-4xl pl-10'>Bandage</h2>
            <div className='flex items-center gap-x-2'>
                <FaFacebook size={24} color={"#23A6F0"}/>
                <FaInstagram size={24} color={"#23A6F0"}/>
                <FaTwitter size={24} color={"#23A6F0"}/>
            </div>

        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-start md:items-center gap-8 py-10'>
        <ul className='space-y-4'>
          <li className='text-2xl md:text-2xl font-bold'>Company Info</li>
          <li className='text-xl md:text-2xl'>About Us</li>
          <li className='text-lg md:text-xl'>Carrier</li>
          <li className='text-lg md:text-xl'>We are Hiring</li>
          <li className='text-lg md:text-xl'>Blog</li>

          
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl font-bold'>Legal</li>
          <li className='text-xl md:text-2xl'>About Us</li>
          <li className='text-lg md:text-xl'>Carrier</li>
          <li className='text-lg md:text-xl'>We are Hiring</li>
          <li className='text-lg md:text-xl'>Blog</li>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl font-bold'>Features</li>
          <li className='text-lg md:text-xl'>Business Marketing</li>
          <li className='text-lg md:text-xl'>User Analytic</li>
          <li className='text-lg md:text-xl'>Live Chat</li>
          <li className='text-lg md:text-xl'>Unlimited Support</li>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl font-bold'>Resources</li>
          <li className='text-lg md:text-xl'>IOS & Android</li>
          <li className='text-lg md:text-xl'>Watch a DemoTerms Of Use</li>
          <li className='text-lg md:text-xl'>Customers</li>
          <li className='text-lg md:text-xl'>API</li>
        </ul>
        <ul className='w-full md:w-auto '>
          <li className='text-xl md:text-2xl mb-4 font-bold'>Get In Touch</li>
          <div className='w-[321px] h-[58px] flex items-center justify-normal border-2'>
            <input type="text" placeholder='Your Email'/>
            <button className='text-white bg-[#23A6F0] w-[117px] h-[58px]'>Subscribe</button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        
        </ul>
        </div>
        <p className='pl-10'>Made With Love By Finland All Right Reserved </p>
    </div>
  )
}

export default Footer