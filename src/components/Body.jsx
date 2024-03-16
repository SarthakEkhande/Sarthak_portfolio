import React from 'react';
import Userinfo from '../Hooks/Userinfo';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import DownloadCV from './DownloadCV ';

const Body = () => {
  return (
    <section className='grid gap-8 md:grid-cols-2 md:items-center'>
      <div className="relative  m-20  grid">
        <h1 className="text-5xl p-3 px-0 font-bold text-blue-900">Hi There,</h1>
        <h1 className="text-5xl p-3 px-0 font-bold text-blue-900">I`m Sarthak Ekhande</h1>
        <h3 className="text-2xl p-3 px-0 font-bold text-blue-900">I am into Web Development</h3>
        <div className='flex'>
        <button className="hover:cursor-pointer flex justify-between bg-blue-900 rounded-3xl m-3 p-3 w-[130px] text-white font-bold">
         <Link to="/about"> About Me</Link>
       
          <FaArrowCircleDown className="relative " />
          
        </button>
        <div className="hover:cursor-pointer flex justify-between bg-orange-600 rounded-3xl m-3 p-3 w-[130px] text-white font-bold">
        <DownloadCV/>
        </div>
        </div>
       
        <ul className="flex gap-5 mx-20">
          <li className="text-blue-900 text-4xl cursor-pointer rounded-3xl">
            <a href="https://www.linkedin.com/in/sarthak-ekhande/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="text-blue-900 text-4xl cursor-pointer rounded-3xl">
            <a href="https://github.com/SarthakEkhande" target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          </li>
          <li className="text-blue-900 text-4xl cursor-pointer rounded-3xl">
            <a href="mailto:sarthakekhande2017@gmail.com">
              <MdOutlineMail />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[250px] mx-28 md:w-[350px]  relative -top-12 md:top-0  rounded-full ">
        <Userinfo/>
       
      </div>
    </section>
  );
}

export default Body;
