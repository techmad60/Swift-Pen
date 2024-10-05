'use client'
import {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { montsy } from "@/fonts/fonts";
import { FaTimes } from 'react-icons/fa';

export default function Navbar () {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Add or remove a class to the body and html to disable/enable scrolling
    const body = document.body;
    const html = document.documentElement;

    if (isNavOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
      html.style.overflow = 'visible';
    }
    // Clean up the effect on component unmount
    return () => {
      body.style.overflow = 'visible';
      html.style.overflow = 'visible';
    };
  }, [isNavOpen])

  return (
    <nav className={`${montsy.className} lg:flex justify-between lg:self-center items-center`} >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
            <Image 
            className=""
            src={"/images/logo.svg"}
            alt="Swiftpen-logo"
            width={80}
            height={19}/>
        </div>
        <div className="cursor-pointer lg:hidden" onClick={handleToggleNav}>
          <Image 
            src={"/images/hamBurger.svg"}
            alt="Bars"
            width={4}
            height={16}/>
        </div>
      </div>
      {isNavOpen && (
      <div
        className="fixed top-0 left-0 w-[25vw]  min-h-screen bg-black opacity-50 z-50 lg:hidden"
        onClick={handleToggleNav} 
      />
      )}
      <div className={`bg-[#D9D9D9] absolute top-0 right-0 h-screen flex flex-col items-center p-4 sm:p-8 w-3/4 lg:w-auto lg:flex-row lg:static lg:h-auto lg:bg-transparent lg:p-0 ${isNavOpen ? 'fixed' : 'hidden lg:flex'} `}>
        <button onClick={handleToggleNav} className="lg:hidden">
        <FaTimes size={24} />
        </button>
        
        <div className="flex flex-col text-center leading-[60px] my-12 text-xl lg:flex-row lg:text-sm lg:text-h2-color lg:gap-12 xl:">
            <div className='flex flex-col lg:flex-row justify-between lg:space-x-8 items-center flex-grow lg:relative right-12 xl:space-x-10'>
                <Link href="/" className=" hover:text-primary-color transition duration-150 hover:ease-in border-primary-color">
                    HOME
                </Link>
                <Link href="/about" className="  hover:text-primary-color transition duration-150 hover:ease-in border-primary-color">
                    ABOUT US
                </Link>
                <Link href="/contact" className="  hover:text-primary-color transition duration-150 hover:ease-in border-primary-color">
                    SERVICES
                </Link>
                <Link href="/contact" className="  hover:text-primary-color transition duration-150 hover:ease-in border-primary-color">
                    FAQS
                </Link>
                <Link href="/contact" className="  hover:text-primary-color transition duration-150 hover:ease-in border-primary-color">
                    CONTACT US
                </Link>
            </div>
          
            <div className="flex flex-col space-y-6 mt-12 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-center lg:mt-0">
                <Link href="/login" className="bg-btn-two-color lg:px-4 lg:py-2 rounded-md transition duration-150 hover:ease-in text-white">
                Login
                </Link>
                <Link href="/signup" className=" text-btn-two-color border border-btn-two-color rounded-md lg:px-4 lg:py-2 transition duration-150 hover:ease-in">
                Signup
                </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}