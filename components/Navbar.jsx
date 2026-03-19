import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/Bharathilogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("green-800");
  const [linkColor, setLinkColor] = useState("black");
 

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-white/40 backdrop-blur-md shadow-2xl"
          : "fixed w-full h-20 z-[100] bg-white/20 backdrop-blur-md"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="100"
              height="100"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div className="bg:white/60">
          <ul className="hidden md:flex text-sm font-semibold text-gray-900 gap-8">
            <li className="ml-10 text-sm uppercase">
              <Link href="/">
                <a className="relative group tracking-[0.15em]">
                  <span>HOME</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase">
              <Link href="/#about">
                <a className="relative group tracking-[0.15em]">
                  <span>ABOUT</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase">
              <Link href="/#codes">
                <a className="relative group tracking-[0.15em]">
                  <span>CODES</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <Link href="/#skills">
                <a className="relative group tracking-[0.15em]">
                  <span>Skills</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <Link href="/#publication">
                <a className="relative group tracking-[0.15em]">
                  <span>Paper</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <Link href="/#projects">
                <a className="relative group tracking-[0.15em]">
                  <span>projects</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/myProfile'>Profile</Link>
            </li> */}
            <li className="ml-10 text-sm uppercase">
              <Link href="/#contact">
                <a className="relative group tracking-[0.15em]">
                  <span>contact</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `black` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "mobile-drawer fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[100vh] bg-gradient-to-r from-sky-200 to-white p-10 ease-in duration-500 flex flex-col justify-inbetween"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image
                    src={NavLogo}
                    width="95"
                    height="95"
                    alt="/"
                    className="object-contain"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose className="w-6 h-6" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Get to know me</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#publication">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Paper
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              {/* <Link href='/myProfile'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  My Profile
                </li>
              </Link> */}
              <Link href="https://flowcv.com/resume/ajea8ub2s0ui">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-black">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/bharathi-priya-r-5294391b2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/bharathicodes10"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://flowcv.com/resume/ajea8ub2s0ui">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <IoDocumentTextOutline size={18} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
