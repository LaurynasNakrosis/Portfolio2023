"use client";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";


 function AboutContent(){
    return( 
    <div>
        <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col py-20 px-10 mx-auto relative h-screen  items-center justify-center sm:justify-evenly  text-center md:text-sm  md:text-left md:flex-row max-w-[2000px]  '
    >
      {/* Display the "About" title */}
      <div className=' pl-5  absolute top-16 uppercase text-small tracking-[10px] text-gray-500
      md:top-24 mt-8 sm:mt-2 sm:pl-5   sm:tracking-[20px]   md:text-2xl '>
        About
      </div>
      
      {/* Display the profile image with motion */}
      <motion.img 
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        //viewport={{ once: true }}
          src='https://media.licdn.com/dms/image/D4E03AQFdvOgeaAqqIA/profile-displayphoto-shrink_400_400/0/1704877804333?e=1710979200&v=beta&t=pf0VFNI-o_9wCdYSZeLgd9wG0PhMoFtdFaD5Ny_NtXU' 
          className='flex  p-0  bg-stone-50 w-20 h-20  sm:w-[120px] sm:h-[120px] flex-shrink-0  rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[350px]'
      />
        
      {/* Display the "Here is a little background" subtitle */}
      <div className=' pt-10 border-blue-500 space-y-2 -py-10 px-0 md:px-10' >
        <h4 className='text-lg font-semibold sm:text-2xl lg:text-3xl'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
      
        {/* Display the detailed description */}
        <p className='text-xs sm:text-xm lg:text-base '>
          Experienced Full Stack Engineer with a versatile skill set in both front- and back-end development. 
          Proficient in HTML, CSS, JavaScript, React, and backend technologies such as Node.JS and Express. 
          Strong focus on creating visually appealing interfaces and delivering exceptional user experiences.
          Skilled in responsive design, version control, and Agile methodologies.
          Completed advanced training in React development and responsive web design, 
          demonstrating a commitment to innovative web projects, leveraging strong problem-solving abilities, collaborative mindset, 
          and expertise in front-end and back-end development.
        </p>
      </div>
      </motion.div>
    </div>
    )
}
export default dynamic (() => Promise.resolve(AboutContent), {ssr: false})
