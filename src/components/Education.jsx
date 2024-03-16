import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { FcEngineering } from "react-icons/fc";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaAddressCard } from "react-icons/fa";

const Education = () => {
  return (
    <div className="bg-gray-200 p-4 md:p-12">
      <div className="text-4xl flex flex-row justify-center items-center gap-4 text-black">
        <FaGraduationCap />
        <h1 className="font-bold text-purple-700">MY Education</h1>
      </div>
      <p className="text-base text-center mt-4 text-black">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <EducationCard icon={<FcEngineering />} title="Bachelor Of Engineering In Computer Science" institution="Savitribai Phule Pune University" date="2019-2023" grade="8.85 CGPA" />
        <EducationCard icon={<HiMiniWrenchScrewdriver />} title="HSC" institution="Agasti College Akole" date="2018-2019" grade="64%" />
        <EducationCard icon={<FaAddressCard />} title="SSC" institution="Ambika Vidyalaya Tahakari" date="2016-2017" grade="80.20%" />
      </div>
    </div>
  )
}

const EducationCard = ({ icon, title, institution, date, grade }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="text-6xl text-blue-700 flex justify-center">{icon}</div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
        <p className="text-lg">{institution}</p>
        <p className="text-lg">{date} | {grade}</p>
      </div>
    </div>
  );
}

export default Education;
