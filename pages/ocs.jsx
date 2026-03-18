import Image from "next/image";
import React from "react";
import cosmeticsImg from "../public/assets/projects/cosmetics.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
const ocs = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cosmeticsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[700px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Online Cosmetics Shop</h2>
          <h3>HTML| CSS| JS| Bootstrap| JQuery| PHP| MYSQL</h3>
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
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The Lush Cosmetics is an ecommerce web application for online
            cosmetics shop with an age wise filter. This application has various
            other filters and payment is done by Paypal. Sales report is
            generated.
          </p>

          <button className="px-8 py-2 mt-4 mr-8 p-5 gap-2 flex items-center hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
            <FaCode />
            <Link href="https://github.com/bharathicodes10/online_cosmetics_shop">
              Code
            </Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JQuery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PHP
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MYSQL
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ocs;
