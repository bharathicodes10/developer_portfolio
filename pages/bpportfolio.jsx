import Image from 'next/image';
import React from 'react';
import myportfolioImg from '../public/assets/projects/innerport.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
const bpportfolio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={myportfolioImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>My portfolio</h2>
          <h3>Next JS / Tailwind CSS</h3>
        </div>
      </div>
 <button className="mt-5 mx-5 p-4 w-fit cursor-pointer hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
        <div className="flex items-center">
          <IoMdArrowBack />
          <Link href="/#projects"> Go Back</Link>
        </div>
      </button>
      <div className='max-w-[700px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this app to showcase my knowledge and expertise in technical
            fields using Next JS. This app was built using Next JS and is
            hosted on github. This application uses tailwind css for styling. GetIO form is 
            used for mail sending.
          </p>
        <div className="flex items-center">
            <button className="px-8 py-2 mt-4 mr-8 p-5 gap-2 flex items-center hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
              <FaCode />
              <Link href="https://github.com/bharathicodes10/bp_portfolio">
                Code
              </Link>
            </button>

            <button className="px-8 py-2 mt-4 mr-8 p-5 gap-2 flex items-center hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
              <FiGlobe />
              <Link href="https://thisisbharathi.vercel.app/">Demo</Link>
            </button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              {/* <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coin Gecko API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
              </p> */}
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default bpportfolio;
