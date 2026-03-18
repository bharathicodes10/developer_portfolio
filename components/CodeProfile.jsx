import Image from "next/image";
import React from "react";

import Codechef from "../public/assets/skills/codechef_logo.png";
import hackerrank from "../public/assets/skills/hackerrank_logo.png";
import leetcode from "../public/assets/skills/LeetCode_logo.png";


const CodeProfile = () => {
  return (
    <div id="codes" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full animate-fade-in-down">
        <p className="text-xl tracking-widest uppercase text-sky-500 font-semibold">
          Coding Profiles
        </p>
        <h2 className="py-4">My coding profiles</h2>
        <p className="my-2">Girls who code write the future</p>
        <div className=" my-2 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border-2 border-transparent hover:border-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.codechef.com/users/blackunicorn10"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">       
                    <Image src={Codechef} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>
                   Codechef
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="p-6 border-2 border-transparent hover:border-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
             <a
              href="https://leetcode.com/user4803IW/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                
                  <Image src={leetcode} width="64px" height="64px" alt="/" />
                
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>
                  Leetcode
                </h3>
              </div>
            </div>
            </a>
          </div>
          <div className="p-6 border-2 border-transparent hover:border-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
             <a
              href="https://www.hackerrank.com/bharathi_10"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <div className="grid grid-cols-2 gap-9 justify-center items-center">
              <div className="m-auto">
               
                  <Image src={hackerrank} width="64px" height="64px" alt="/" />
               
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>
                
                    Hackerrank
                </h3>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeProfile;
