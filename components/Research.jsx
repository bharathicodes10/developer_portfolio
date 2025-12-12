import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ieeelogo from '../public/assets/projects/mfcc.png';
import ProjectItem from './ProjectItem';
import ResearchItem from './ResearchItem';

const Research = () => {
  return (
    <div id='publication' className='w-full animate-fade-in-down'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-sky-500 font-semibold'>
          Research paper
        </p>
        <h2 className='py-4'>What I&apos;ve Published</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <ResearchItem
            title='COPD Prediction using DTL'
            backgroundImg={ieeelogo}
            projectUrl='/ieee'
            tech='Python, DTL'
          />      
        </div>
      </div>
    </div>
  );
};

export default Research;
