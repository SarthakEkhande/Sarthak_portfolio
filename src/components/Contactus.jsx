import React from 'react';
import { AiFillContacts } from "react-icons/ai";
import { Computer_Person_URL } from '../utils/Constants';
import LineBar from './LineBar';
import Link2 from './Link2';

const Contactus = () => {
  return (
    <div className="bg-gray-300">
      <div className="text-4xl flex flex-row justify-center items-center gap-4 mt-8 text-black font-bold">
        <AiFillContacts />
        <h1 className="font-bold text-black">Get In Touch</h1>
      </div>
      <div className="mx-auto p-8 m-6 md:w-3/4 lg:w-1/2 bg-white rounded-md shadow-md flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-2/5 relative flex justify-center">
          <img className=" rounded-lg h-auto w-full md:max-w-xs" src={Computer_Person_URL} alt="Contact Person" />
        </div>
        <form className="w-full md:w-3/5 mt-8 md:mt-0 md:ml-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link2 />
      <LineBar />
    </div>
  );
}

export default Contactus;
