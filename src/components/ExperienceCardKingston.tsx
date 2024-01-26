// Import necessary libraries and components
"use client"
import React from 'react';
import Image from 'next/image';
import ExperienceCardKingstonIcon from './ExperienceCardKingstonIcon';
type Props = {}

// Define the ExperienceCard component
function ExperienceCard({}: Props) {
  return (
    // Article container for the experience card
    <article className='border border-cyan-200 bg-[#2f2f2f] flex flex-col items-center  flex-shrink-0 rounded-lg  space-y-1  
    h-[420px] pt-5 py-2 w-[280px] ml-10 sm:border-black 

    snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

      <ExperienceCardKingstonIcon/>

      <div className='  px-0 md:px-10 flex flex-col space-y-2  '>
        {/* Display job title */}
        <h4 className='border 
        text-[14px] 
        md:text-4xl
        xl:text-5xl 
        font-light'>Kingston University</h4>
        
        {/* Display company name */}
        <p className='border font-bold text-[12px]'>Computer Science With Honours</p>
        
        {/* Display logos */}
        <div className='border flex space-x-1'>
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
        <p className='borders uppercase text-gray-300 
        text-sm '
        >2020 - 2023</p>
        
        {/* Display summary points */}
        <ul className='border list-disc space-y-0 ml-3 
        text-sm'
        >
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
          <li>Summary points </li>
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
