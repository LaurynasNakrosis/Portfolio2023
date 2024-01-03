"use client";
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css'

type Props = {}

export default function Hero({}: Props) {
  const [text,count] = useTypewriter({
    words: ["Hi, The Name's Laurynas Nakrosis","Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
  <div className= ' py-8 sm:py-10 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <div className=' pb-9 sm:pb-1 ' >
        <BackgroundCircles />
        </div>
        <Image 
          className="bg-white relative rounded-full h-20 w-20 mx-auto sm:w-36 sm:h-36 object-cover "
          width={100}
          height={100}
          src='https://media.licdn.com/dms/image/C4D03AQEogDmoacJn4Q/profile-displayphoto-shrink_400_400/0/1639867842897?e=1700092800&v=beta&t=szkfAV00cb437cPqRkSLV3xLS5bPy5QHEz9_759WzSY' 
          alt='Picture of the author'
          priority 
        />

      <div className=' z-20'>
        <h2 className='uppercase text-xs sm:text-sm  text-gray-500  pb-2 tracking-[15px]'>
          Software Engineer
        </h2>

        <h1 className='font-semibold px-10 text-xs md:text-4xl lg:text-5xl pb-2 pt-2'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className='pt-5 flex flex-col gap-2 sm:flex-row sm:justify-center z-20'>
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