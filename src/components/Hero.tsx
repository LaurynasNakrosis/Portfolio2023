"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
  const [text,count] = useTypewriter({
    words: ["Hi, The Name's Laurynas Nakrosis","Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 3000,
  })
  return (
  <div className= 'h-screen flex flex-col space-y-[33px] items-center justify-center text-center overflow-hidden'>

          <BackgroundCircles />

        <div className=' w-full  sm:pt-6' >
        <Image 
          className="relative rounded-full h-20 w-20 mx-auto sm:w-36 sm:h-36 object-cover "
          width={100}
          height={100}
          src='https://media.licdn.com/dms/image/D4E03AQFdvOgeaAqqIA/profile-displayphoto-shrink_800_800/0/1704877804333?e=1710979200&v=beta&t=tNn0c0O0Mmw_SyK2PJvNLWYlDc7okI6hHI4dwrzikqE' 
          alt='Picture of the author'
          priority 
        />
      </div>
      <div className=' z-20'>
        <h2 className='uppercase text-xs sm:text-sm  text-gray-500  pb-2 tracking-[8px]'>
          Software Engineer
        </h2>

        <h1 className='font-semibold px-10 text-xs md:text-4xl lg:text-5xl py-1'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className='pt-1 flex flex-col gap-1 sm:gap-2 sm:flex-row sm:justify-center z-20'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
  </div>
      
    </div>
  )
}