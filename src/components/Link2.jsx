import React from 'react';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import LineBar from './LineBar';

const Link2 = () => {
  return (
    <div className="bg-blue-950 flex flex-col md:flex-row">
      <div className='text-white px-10 py-4 md:px-12 md:py-8 flex flex-col'>
        <h1 className='text-2xl font-bold'>Sarthak Portfolio</h1>
        <p className='text-base mt-4'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
        <h2 className='text-xl mt-4'>Keep Rising 🚀.</h2>
      </div>
      <div className='text-white px-10 py-4 md:px-12 md:py-8 flex flex-col'>
        <h1 className='text-xl font-bold'>Quick Links</h1>
        <ul className='flex flex-col text-base mt-4'>
          <li className='flex flex-row hover:text-yellow-500 gap-5 my-1 font-semibold'><IoMdArrowDroprightCircle /><Link to="/">Home</Link></li>
          <li className='flex flex-row hover:text-yellow-500 gap-5 my-1 font-semibold'><IoMdArrowDroprightCircle /><Link to="/about">About</Link></li>
          <li className='flex flex-row hover:text-yellow-500 gap-5 my-1 font-semibold'><IoMdArrowDroprightCircle /><Link to="/skills">Skills</Link></li>
          <li className='flex flex-row hover:text-yellow-500 gap-5 my-1 font-semibold'><IoMdArrowDroprightCircle /><Link to="/education">Education</Link></li>
          <li className='flex flex-row hover:text-yellow-500 gap-5 my-1 font-semibold'><IoMdArrowDroprightCircle /><Link to="/project">Project</Link></li>
          <li className='flex flex-row hover:text-yellow-500 gap-5 my-1 font-semibold'><IoMdArrowDroprightCircle /><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className='text-white px-10 py-4 md:px-24 md:py-8 flex flex-col'>
        <h1 className='text-2xl font-bold'>Contact Info</h1>
        <ul className='flex flex-col text-yellow-500 text-base mt-4'>
          <li className='flex flex-row gap-5 my-1 font-semibold'><MdOutlineAddIcCall />+91 9764135683</li>
          <li className='flex flex-row gap-5 my-1 font-semibold'><MdEmail />Sarthakekhande2017@gmail.com</li>
          <li className='flex flex-row gap-5 my-1 font-semibold'><FaMapLocationDot />Pune, Maharashtra - 412307</li>
        </ul>
      </div>
    </div>
  );
}

export default Link2;
