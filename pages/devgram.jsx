import Image from "next/image";
import React from "react";
import devgramImg from "../public/assets/projects/devgram.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const devgram = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={devgramImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Devgram</h2>
          <h3>Next js || NextAuth || Firebase || Recoil</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-5">
            Devgram is a full-stack Instagram-inspired social media web
            application where users can sign in, share posts, and interact with
            a dynamic feed. The platform allows users to authenticate using
            Google, upload image posts, view stories, like and comment on posts,
            and browse a responsive social feed similar to Instagram. The
            project focuses on building a modern social media UI while
            integrating real-world backend features such as authentication,
            database storage, and cloud image hosting. Devgram demonstrates the
            development of scalable frontend components, responsive layouts, and
            real-time user interactions using modern JavaScript frameworks
          </p>
          <a
            href="https://github.com/bharathicodes10/ig-clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
              Code
            </button>
          </a>
          <a
            href="https://devgram-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-center font-bold pb-2">Frontend</p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
               <p className="text-center font-bold pb-2">Backend/Database</p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Firestore
              </p>
               <p className="text-center font-bold pb-2">Storage</p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> cloudinary (For image hosting)
              </p>
            </div>
          </div>
        </div>
        <button className="p-4 cursor-pointer p-5 hover:bg-sky-500 hover:text-white rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-sky-500">
          <Link href="/#projects">back</Link>
        </button>
      </div>
    </div>
  );
};

export default devgram;
