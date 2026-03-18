import Image from "next/image";
import React from "react";
import bookImg from "../public/assets/projects/bookmeetsai.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
//buttons
import { IoMdArrowBack } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const bookmeetsai = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bookImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[700px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Book meets AI</h2>
          <h3>Next.js || TypeScript || Tailwind CSS || MongoDB || Vapi</h3>
        </div>
      </div>

      <button className="mt-5 mx-5 p-4 w-fit cursor-pointer hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
        <div className="flex items-center">
          <IoMdArrowBack />
          <Link href="/#projects"> Go Back</Link>
        </div>
      </button>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2> Project Overview</h2>
          <p className="mt-5">
            BookMeetsAI is an AI-powered web application that transforms static
            books into interactive experiences.
          </p>
          <p className="mt-2">
            Users can upload PDF files and engage in real-time conversations
            with the content. The system processes documents, understands
            context, and generates intelligent responses, enabling efficient
            knowledge retrieval.
          </p>
          <p className="mt-2">
            It also supports voice-based interaction, making reading more
            dynamic and accessible.
          </p>
          <div className="flex items-center">
            <button className="px-8 py-2 mt-4 mr-8 p-5 gap-2 flex items-center hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
              <FaCode />
              <Link href="https://github.com/bharathicodes10/Bookmind">
                Code
              </Link>
            </button>

            <button className="px-8 py-2 mt-4 mr-8 p-5 gap-2 flex items-center hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
              <FiGlobe />
              <Link href="https://bookmeetsai.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1">
              <div>
                <p className="text-center font-bold pb-2">Frontend</p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Next.js
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> TypeScript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                </p>
              </div>
              <div>
                <p className="text-center font-bold pb-2">Backend/AI</p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Vapi
                </p>
              </div>
              <div>
                <p className="text-center font-bold pb-2">Processing</p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> PDF Parsing
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Contextual Retrieval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookmeetsai;
