import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import Typical from "react-typical";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../context/ThemeContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Main = () => {
  const {isDark:isDarkMode, toggleTheme} = useContext(ThemeContext);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (isDarkMode) {
      htmlElement.classList.add('dark-mode');
    } else {
      htmlElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const cursorTrail = document.querySelector(".cursor-trail");

    const onMouseMove = (event) => {
      cursorTrail.style.left = event.pageX + "px";
      cursorTrail.style.top = event.pageY + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  
  const toggleDarkMode = toggleTheme

  return (
    <div
      id="home"
      className={`w-full h-screen text-center animate-fade-in-down ${
        isDarkMode ? "dark-mode" : ""
      }`}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        
        <div>
          <div className="flex justify-end">

        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="bg-sky-400 relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
          
          // className={classNames(
          //   isDarkMode ? "bg-green-100" : "bg-sky-200",
          //   "relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out "
          // )}
        >
          <span className="sr-only">Toggle dark mode</span>
          <span
            className={classNames(
              isDarkMode ? "translate-x-8" : "translate-x-0",
              "pointer-events-none relative inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            )}
          >
            <span
              className={classNames(
                isDarkMode
                  ? "opacity-0 duration-100 ease-out"
                  : "opacity-100 duration-200 ease-in",
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <Brightness7Icon />
             
            </span>
            <span
              className={classNames(
                isDarkMode
                  ? "opacity-100 duration-200 ease-in"
                  : "opacity-0 duration-100 ease-out",
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <DarkModeIcon className="text-black" />
             
            </span>
          </span>
        </Switch>
          </div>

          <p className="uppercase text-sm font-semibold tracking-widest text-sky-600 italic">
            NEVER STOP LEARNING
          </p>
          
        
          <h1 className="py-4 text-cyan-500">
            Hi, I&#39;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bharathi Priya
            </span>
          </h1>
         
          <h1 className="py-2 text-sky-600">
            <Typical
              steps={[
                "A web developer",
                3000,
                "A Full-stack Developer",
                3000,
                "UI/UX Developer",
                3000,
              ]}
              wrapper="p"
              loop={Infinity}
            />
          </h1>
          <p className="py-4 text-white-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating with back-end technologies. Currently learning Devops!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/bharathi-priya-r-5294391b2/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/bharathicodes10"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://flowcv.com/resume/ajea8ub2s0ui">
            {/* <Link href="https://drive.google.com/file/d/1pVpsUGkYA63oheEaAMpIiS_gF67Unf1s/view?usp=share_link"> */}
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <IoDocumentTextOutline size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="cursor-trail"></div>
    </div>
  );
};

export default Main;
