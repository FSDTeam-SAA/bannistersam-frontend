'use client'

import { ChevronUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/footerbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay (only for dark mode, so text visible) */}
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-black/60" />

      <div className="relative container mx-auto py-[51px] px-4 sm:px-6 lg:px-0">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
          {/* Left */}
          <div className="max-w-full lg:max-w-none">
            <Image
              src="/logo.png"
              width={1000}
              height={1000}
              alt="logo"
              className="w-[148px] h-[49px] object-cover"
              priority
            />

            {/* LG unchanged: w-[490px] only on lg */}
            <p className="text-sm sm:text-base text-white/90 dark:text-white font-regular mt-4 max-w-full lg:w-[490px]">
              A verification-first property platform for the UAE. Launching in
              Dubai with verified agents, real listings, and genuine intent.
            </p>

            <div className="flex mt-6 gap-4 sm:gap-7 justify-start flex-wrap">
              <Image
                src="/hero1.png"
                alt="Store 1"
                width={1000}
                height={1000}
                className="w-[140px] h-[40px] hover:cursor-pointer"
              />
              <Image
                src="/hero2.png"
                alt="Store 2"
                width={1000}
                height={1000}
                className="w-[140px] h-[40px] hover:cursor-pointer"
              />
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="lg:self-start flex justify-center lg:justify-end">
            <ol className="flex gap-4 sm:gap-5 justify-start lg:justify-end">
              <li className="bg-[#F88379] w-10 h-10 rounded-full flex justify-center items-center border border-white/90 hover:cursor-pointer hover:scale-95 duration-300">
                <Facebook className="w-6 h-6 text-white" />
              </li>

              <li className="bg-[#F88379] w-10 h-10 rounded-full flex justify-center items-center border border-white/90 hover:cursor-pointer hover:scale-95 duration-300">
                <Twitter className="w-6 h-6 text-white" />
              </li>

              <li className="bg-[#F88379] w-10 h-10 rounded-full flex justify-center items-center border border-white/90 hover:cursor-pointer hover:scale-95 duration-300">
                <Instagram className="w-6 h-6 text-white" />
              </li>

              <li className="bg-[#F88379] w-10 h-10 rounded-full flex justify-center items-center border border-white/90 hover:cursor-pointer hover:scale-95 duration-300">
                <Linkedin className="w-6 h-6 text-white" />
              </li>
            </ol>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 pt-10 sm:pt-[58px]">
          <div className="text-sm sm:text-base font-normal text-[#FFFFFF99] dark:text-white/70 text-center sm:text-left">
            © Deal360.ae All rights reserved.
          </div>

          <button
            type="button"
            className="flex items-center justify-center sm:justify-end gap-2 hover:cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="text-white dark:text-white hover:scale-95 duration-300">
              Top
            </span>

            <span className="bg-white dark:bg-white w-10 h-10 rounded-full flex justify-center items-center">
              <ChevronUp className="!w-7 !h-7 text-[#F88379] hover:scale-95 duration-300" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
