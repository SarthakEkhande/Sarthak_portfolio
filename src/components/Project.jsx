import React from 'react';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import { Computer_Person_URL, swiggy_LOGO_URL, Tic_tac_toe_LOGO_URL, Weather_LOGO_URL } from '../utils/Constants';
import { Netflix_LOGO_URL } from '../utils/Constants';
import Link from './Link2';

const Project = () => {
  return (
    <div className="bg-blue-950 h-auto pb-10">
      <div className="text-4xl flex flex-row relative justify-center gap-4 top-8 text-white font-bold">
        <AiOutlineFundProjectionScreen />
        <h1 className="items-center font-bold text-white ">Projects Made</h1>
      </div>
      <div className='p-6 my-12 mx-4 md:mx-auto max-w-screen-md rounded-xl bg-opacity-20 flex flex-wrap justify-center gap-8'>
        <ProjectCardGroup>
          <ProjectCard imageSrc={swiggy_LOGO_URL} title="Swiggy Clone" viewLink="https://github.com/SarthakEkhande/Food-Ordering-website-swiggy-clone-" codeLink="https://github.com/SarthakEkhande/Food-Ordering-website-swiggy-clone-" />
          <ProjectCard imageSrc={Netflix_LOGO_URL} title="Netflix GPT" viewLink="https://github.com/SarthakEkhande/Netflix-gpt" codeLink="https://github.com/SarthakEkhande/Netflix-gpt" />
        </ProjectCardGroup>
        <ProjectCardGroup>
          <ProjectCard imageSrc={Weather_LOGO_URL} title="Weather App" viewLink="https://sarthakekhande-wheatherapp.netlify.app/" codeLink="https://github.com/SarthakEkhande/Food-Ordering-website-swiggy-clone-" />
          <ProjectCard imageSrc={Computer_Person_URL} title="Tic-Tac_Toe App" viewLink="https://sarthakekhande-tictactoe.netlify.app/" codeLink="https://github.com/SarthakEkhande/Food-Ordering-website-swiggy-clone-" />
        </ProjectCardGroup>
      </div>
    </div>
  );
}

const ProjectCardGroup = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {children}
    </div>
  );
}

const ProjectCard = ({ imageSrc, title, viewLink, codeLink }) => {
  return (
    <div className="bg-white h-auto w-full md:w-[45%] rounded-lg shadow-md p-4">
      <div className='text-2xl bg-yellow-400 text-black font-bold  flex justify-center'>{title}</div>
      <div className="flex justify-center">
        <img className='rounded-lg h-44 w-[300px]' src={imageSrc} alt={title} />
      </div>
      <div className='flex flex-row gap-2 justify-center mt-4'>
        <button className='text-xl bg-black text-white rounded-lg px-6 py-2 hover:bg-blue-600 font-bold'><a href={viewLink} target="_blank" rel="noopener noreferrer">View</a></button>
        <button className='text-xl bg-black text-white rounded-lg px-6 py-2 hover:bg-blue-600 font-bold'><a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a></button>
      </div>
    </div>
  );
}

export default Project;
