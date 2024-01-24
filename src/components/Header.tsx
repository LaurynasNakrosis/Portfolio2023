'use client'
// Import necessary libraries and components
import dynamic from 'next/dynamic';
//const HeaderSocialIcons = dynamic(() => import('./HeaderSocialIcons'), { ssr: false });
//const HeaderContactMe = dynamic(() => import('./HeaderContactMe'), { ssr: false });

//import { FC } from "react"
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define the Header component using the HeaderProps interface
const Header = () => {
  return (
    // Header container with sticky positioning
    <header className=' sticky top-0 p-1 flex items-start justify-between max-w-9xl px-6 mx-auto z-20 xl:items-center'>

        {/* Social Icons section with motion */}
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }} 
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        className='flex flex-row items-center'>

            {/* Render social icons using SocialIcon component */}   
            <SocialIcon 
              url="https://github.com/LaurynasNakrosis" 
              fgColor='grey'
              bgColor='transparent'
            />
            <SocialIcon 
              url="https://www.linkedin.com/in/laurynas-nakrosis/" 
              fgColor='grey'
              bgColor='transparent'
            />
            <SocialIcon 
              url="https://www.facebook.com/profile.php?id=100000850794754" 
              fgColor='grey'
              bgColor='transparent'
            />
            <SocialIcon 
              url="https://www.youtube.com/watch?v=yqWX86uT5jM" 
              fgColor='grey'
              bgColor='transparent'
            />
      </motion.div>

        {/* Link to the "Contact Me" section */}
        <Link href='#contactme'>
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }} 
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>

          {/* Social icon for email */}
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
          />

          {/* Text link */}
          <p className='uppercase hidden md:inline-flex text-sm text-grey-900'>Get in touch</p>
      </motion.div>
        </Link>
    </header>
  )
}
export default dynamic (() => Promise.resolve(Header), {ssr: false})