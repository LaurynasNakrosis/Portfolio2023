// Import necessary libraries and components
"use client"
import React from 'react';
import Image from 'next/image';
import ExperienceCardAssetsIcon from './ExperienceCardAssetsIcon';
import GitHub from '../app/Icons/GitHub.png'
import Tailwind from '../app/Icons/Tailwind.svg'
import JavaScript from '../app/Icons/javascript-svgrepo-com.svg'
import HTML from '../app/Icons/HTML.svg'
import react from '../app/Icons/React.svg'
import node from '../app/Icons/nodejs-icon.svg'
import oracle from '../app/Icons/oracle-svgrepo-com.svg'

type Props = {}

// Define the ExperienceCard component
function ExperienceCard({}: Props) {
  return (
    // Article container for the experience card
    <article className='bg-[#2f2f2f] flex flex-col items-center  flex-shrink-0 rounded-lg  space-y-0  
    h-[420px] pt-5 pb-2 w-[320px] ml-10 -mr-7
    sm:border-black sm:h-full sm:w-[600px] sm:ml-[200px] sm:m-0 
    md:border-blue-600 md:w-[600px]

    snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

      <ExperienceCardAssetsIcon/>
      <div className='  px-0 md:px-10 flex flex-col space-y-2  '>
        {/* Display job title */}
        <h4 className=' 
        text-[18px]
        sm:text-[35px] sm:tracking-auto
        xl:text-5xl 
        font-light'>Assets Management Group</h4>
        
        {/* Display company name */}
        <p className=' font-bold text-[12px] sm:text-[16px]'>Junior Programmer</p>
        
        {/* Display logos */}
        <div className=' flex space-x-1 '>
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full '
            src={GitHub}
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full '
            src={Tailwind}
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full'
            src={JavaScript}
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full  '
            src={HTML}
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full  '
            src={react}
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full  '
            src={node}
            alt=''
            width={300}
            height={300}
          />
          <Image className=' h-6 w-6 md:h-10 md:w-10 rounded-full  '
            src={oracle}
            alt=''
            width={300}
            height={300}
          />

        </div>
        
        {/* Display start and end date */}
          <p className=' uppercase text-gray-300 text-sm' >2023 - Present</p>

        {/* Display summary points */}
          <ul className=' list-disc space-y-0 ml-3 
        text-[11px]'
        >
          <li>Responsive Design</li>
          <li>New Feature Development</li>
          <li>Cross-Functional Collaboration</li>
          <li>Database Management</li>
          <li>Data Retrieval Efficiency</li>
          <li>Problem Solving</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
