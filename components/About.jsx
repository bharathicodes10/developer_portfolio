import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about2.jpg';

const About = () => {
  
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 animate-fade-in-down'>
  <div className='max-w-[1280px] m-auto md:grid grid-cols-3 gap-8'>
    <div className='col-span-2'>
      <p className='uppercase text-xl tracking-widest text-sky-500 font-semibold'>
        About
      </p>
      <h2 className='py-4'>Who Am I</h2>
      <p className='py-2 px-2 text-black-600'>
       I’m Bharathi Priya R, a Full-Stack Engineer specializing in high-performance web applications, modern React/TypeScript frontends, and AI integrations. I hold an M.Sc. in Computer Technology (Valedictorian) and authored an IEEE-published paper applying Deep Transfer Learning to medical audio classification.
      </p>
      <p className='py-2 px-2 text-black-600'>
        Over the past few years, I’ve owned and shipped production web applications, from complete e-commerce architectures with live Razorpay payment processing to real-time voice and document AI platforms. My engineering approach centers on strict type safety, defensive code review, and clean UI execution.
      </p>
       <p className='py-2 px-2 text-black-600'>
      I build for scale, whether that means collaborating with early-stage product teams or deploying mission-critical features end-to-end.
      </p>
      <div className='pl-2'>
            <button className='p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500'>
        <a href='https://flowcv.com/resume/ajea8ub2s0ui'>See my Resume</a>
      </button>
      </div>
      {/* <Link href='/#projects'>
        <p className='py-2 text-gray-600 underline cursor-pointer'>
          Check out some of my latest projects.
        </p>
      </Link> */}
    </div>
    <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
      <Image 
        src={AboutImg} 
        alt='About Image'
        className='rounded-xl object-cover w-full h-full'
      />
    </div>
  </div>
</div>

  );
};

export default About;
