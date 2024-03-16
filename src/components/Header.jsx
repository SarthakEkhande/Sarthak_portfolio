import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/Constants';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className=" w-16 md:w-16 h-12 ">
          <img src={LOGO_URL}></img>
        </div>
        <div className="md:hidden w-2/4">
          <select className="block focus:outline-none w-full bg-blue-900 font-bold text-lg   text-white rounded-lg" onChange={(e) => window.location.href = e.target.value}>
            <option value="/">Home</option>
            <option value="/about">About</option>
            <option value="/skills">Skills</option>
            <option value="/education">Education</option>
            <option value="/project">Project</option>
            <option value="/contact">Contact</option>
          </select>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex p-2 md:p-0 md:m-0 text-lg gap-3 font-bold">
            <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/">Home</Link></li>
            <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/about">About</Link></li>
            <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/skills">Skills</Link></li>
            <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/education">Education</Link></li>
            <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/project">Project</Link></li>
            <li className="px-4 cursor-pointer hover:border-blue-800 hover:border-b hover:text-blue-800"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
