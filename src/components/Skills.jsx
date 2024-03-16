import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="gap-16 bg-purple-950 h-auto md:h-[650px] p-12 md:px-28">
      <div className="text-3xl flex flex-row justify-center items-center gap-4 text-white">
        <FaLaptopCode />
        <h1 className="font-bold">Skills & Abilities</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative top-5">
      <div className="text-blue-500 " ><SkillIcon icon={<RiReactjsFill />} label="ReactJS" /></div>
      <div  className="text-yellow-500"> <SkillIcon icon={<SiFirebase />} label="Firebase" /></div>
      <div className='text-blue-300 '><SkillIcon icon={<SiTailwindcss />} label="TailwindCSS" /></div>
      <div className=' text-yellow-500'><SkillIcon icon={<IoLogoJavascript />} label="JavaScript" /></div>
      <div className='text-orange-500 '><SkillIcon icon={<SiHtml5 />} label="HTML" /></div>
      <div className=' text-blue-200 '><SkillIcon icon={<SiCss3 />} label="CSS3" /></div>
      <div className='text-purple-500'><SkillIcon icon={<TbBrandRedux />} label="Redux" /></div>
      <div className=' text-white'><SkillIcon icon={<FaPython />} label="Python" /></div>
      <div className='text-green-500 '><SkillIcon icon={<TbBrandCpp />} label="C++" /></div>
      <div className='text-blue-500 '><SkillIcon icon={<SiMysql />} label="MySQL" /></div>
      <div className=' text-purple-700'><SkillIcon icon={<FaSquareGithub />} label="GitHub" /></div>
      <div className=' text-pink-500'><SkillIcon icon={<BiLogoNetlify />} label="Netlify" /></div>
       
        
       
       
       
       
       
        
       
        
      </div>
    </div>
  )
}

const SkillIcon = ({ icon, label }) => {
  return (
    <div className="bg-black  hover:bg-opacity-20 h-32 p-4 bg-grey rounded-lg hover:bg-gray-900">
      <div className='text-6xl  flex justify-center'>{icon}</div>
      <div className='text-2xl font-bold text-white flex justify-center'>{label}</div>
    </div>
  );
}

export default Skills;
