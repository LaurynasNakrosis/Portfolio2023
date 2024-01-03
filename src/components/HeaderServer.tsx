
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import { Social } from '@/typings';
import { getSocials } from '@/libs/api';

// type Props = {
//   socials: Social[],
// }

export default async function HeaderServer() {
  const socials = await getSocials();

console.log("HHHHHHHHHHHHHHHHHHHHHHHH")
console.log(socials);
console.log("HHHHHHHHHHHHHHHHHHHHHHHH")
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
              {/*Social Icons*/}
              <SocialIcon 
              url="https://www.linkedin.com/in/laurynas-nakrosis/"
              fgColor='grey'
              bgColor='transparent'
              />
        </motion.div>

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
            
            {/* { socials.map((social) => (          
              <SocialIcon
                key={social._id}
                url={social.url}
                className='cursor-pointer'
                network='email'
                fgColor='grey'
                bgColor='transparent'
              />
            ))} */}
            
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-grey-900'>Get in touch</p>
        </motion.div>
        </Link>
    </header>
  )
}