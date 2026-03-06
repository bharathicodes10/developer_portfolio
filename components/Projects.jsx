import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import coffeeImg from '../public/assets/projects/coffee.png';
import codeImg from '../public/assets/projects/code-ai.png';
import myportfolioImg from '../public/assets/projects/myportfolio.png'
import constructionImg from '../public/assets/projects/construction.png'
import cosmeticsImg from '../public/assets/projects/cosmetics.png'
import devgramImg from '../public/assets/projects/devgram.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full animate-fade-in-down'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-sky-500 font-semibold'>
          PROJECTS
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* <ProjectItem
            title='CoffeeShop'
            backgroundImg={coffeeImg}
            projectUrl='/coffee'
            tech='ASP .NET and C#'
          /> */}
           <ProjectItem
            title='CodeAI'
            backgroundImg={codeImg}
            projectUrl='/codeai'
            tech='Vite.js and OpenAI'
          />
          <ProjectItem
            title='Portfolio webApp'
            backgroundImg={myportfolioImg}
            projectUrl='/bpportfolio'
            tech='Next JS'

          />
          <ProjectItem
            title='Devgram'
            backgroundImg={devgramImg}
            projectUrl='/devgram'
            tech='MERN Stack'

          />
          <ProjectItem
            title='Online Cosmetics Shop'
            backgroundImg={cosmeticsImg}
            projectUrl='/ocs'
            tech='PHP MYSQL'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
