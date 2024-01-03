// Import necessary libraries and components
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

// Define the ExperienceCard component
function ExperienceCard({}: Props) {
  return (
    // Article container for the experience card
    <article className=' bg-[#2f2f2f] flex flex-col mt-10 flex-shrink-0 rounded-lg items-center space-y-0  
     py-17 sm:pt-10
    h-[450px]      w-[200px] ml-[200px]
    sm:w-[350px]  sm:h-[350px] 
    md:w-[600px]  md:h-[550px] 
    lg:w-[850px]  lg:h-[600px] lg:ml-[650px] 
    xl:w-[1000px] xl:h-[580px] 
    snap-center  p-2 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      
      {/* Display profile image with motion */}
      <motion.img 
        initial={{
          y: -100, 
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        //viewport={{ once: true }}
        className=' rounded-full 
        w-20 h-20 
        md:h-[140px] md:w-[140px]  
        xl:w-[200px] xl:h-[200px] 
        object-cover object-center'
        src='https://scontent.flhr2-3.fna.fbcdn.net/v/t39.30808-6/404363941_7121455651226057_7843669369154568195_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fjitpLFfEzUAX9q-BRQ&_nc_ht=scontent.flhr2-3.fna&oh=00_AfCW1Fy9jEYzWjOHr2QJuYy3cdQ7rI-YT2xP4O6Fcu0lCg&oe=65696200' 
        alt=''
      />
      
      <div className='px-0 md:px-10 flex flex-col justify-between '>
        {/* Display job title */}
        <h4 className=' my-1 py-0 
        text-[18px] 
        md:text-4xl
        xl:text-5xl 
        font-light'>Kingston University</h4>
        
        {/* Display company name */}
        <p className=' my-1 font-bold 
        text-[14px] 
        md:text-2xl '>Computer Science With Honours</p>
        
        {/* Display logos */}
        <div className=' flex space-x-2 mb-2 py-0 
        md:mr-[450px] 
        lg:mr-[650px]'>
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full'
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full '
            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
            alt=''
            width={300}
            height={300}
          />
        </div>
        
        {/* Display start and end date */}
        <p className=' my-1 uppercase py-0 text-gray-300 
        text-sm '
        >2020 - 2023</p>
        
        {/* Display summary points */}
        <ul className=' py-0  list-disc space-y-2 ml-5 
        text-sm'
        >
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
          
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
