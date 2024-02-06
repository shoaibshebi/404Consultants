"use client";

import Image from "next/image";
import Link from "next/link";
import PrimBtn from "./PrimBtn";

const DrawerBar = ({ isOpen, setIsOpen }: any) => {
  const navbarItems = ["About", "Services", "Process", "Clients"];

  return (
    <>
      <div
        className={`relative inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className='absolute inset-0 bg-gray-600 opacity-75'></div>
        <div
          className={`fixed inset-y-0 right-0 max-w-full flex flex-col w-72 bg-rich-blacks-main boxShadow shadow-lg overflow-y-auto rounded-t-lg ${
            isOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
          }`}
        >
          <div className='absolute h-[40%] w-[40%] top-0 right-0 z-0  gradient-01 ' />

          <div className='flex items-center justify-end py-4 px-4 relative z-10'>
            <button
              className='text-gray-500 hover:text-gray-600 focus:outline-none'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src='/icons/close-square.svg'
                alt='menu'
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className='px-12 flex items-start flex-col justify-center'>
            {/* Close button */}

            {/* Logo */}
            <div className='flex items-center justify-center mt-8'>
              <Link href='/'>
                <Image
                  className='w-auto'
                  src='/icons/logo.svg'
                  alt='Logo'
                  priority
                  width={64}
                  height={64}
                />
              </Link>
            </div>

            {/* Nav items */}
            <div className='mt-8'>
              <nav className='flex flex-col'>
                {navbarItems.map((link, index) => (
                  <div key={index} className='px-3 py-8 relative'>
                    <Link href='/' className='text-gray-300  text-sm'>
                      {link}
                    </Link>
                    <div className='absolute bottom-0 bg-gradient-to-r from-[#B02FED6E] to-[#FFFFFF] w-[150px] h-px opacity-50'></div>
                  </div>
                ))}
              </nav>
            </div>

            <div className='my-12  mb-8'>
              <PrimBtn title="Let's Build" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerBar;