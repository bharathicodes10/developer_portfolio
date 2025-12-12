import Image from 'next/image';
import React from 'react';
import coffeeImg from '../public/assets/projects/coffee1.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const coffee = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={coffeeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Coffee Shop</h2>
          <h3>.NET || C#</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This coffeeshop website developed using ASP.NET and C# provides a user-friendly interface for performing various operations such as creating, reading, updating, and deleting (CRUD) coffee products. It also allows users to place orders for their preferred coffee products and track the status of their orders. The website is designed to be responsive, ensuring seamless operation on different devices. The user interface is intuitive and easy to navigate, allowing users to access the information they need quickly and efficiently. With its robust functionality and user-friendly interface, this coffeeshop website provides an excellent platform for coffee lovers to browse and order their favorite beverages.
          </p>
          <a
            href='https://github.com/bharathicodes10/aspprojectI'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500'>Code</button>
          </a>
          {/* <a
            href='https://github.com/bharathicodes10/aspproject'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500'>Demo</button>
          </a> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> .NET
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C#
              </p>
            </div>
          </div>
        </div>
        <button className='p-4 cursor-pointer p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500'>
        <Link href='/#projects'>
          back
        </Link></button>
      </div>
    </div>
  );
};

export default coffee;
