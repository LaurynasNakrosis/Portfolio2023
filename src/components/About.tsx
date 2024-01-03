"use client";
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}
// Define the About component
function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='border flex flex-col py-20   px-10 mx-auto relative h-screen  items-center justify-center sm:justify-evenly  text-center md:text-sm  md:text-left md:flex-row max-w-[2000px]  '
    >
      {/* Display the "About" title */}
      <h3 className='border pl-2.5 sm:pl-5 absolute top-10  md:top-24 mt-8 sm:mt-2 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-small md:text-2xl lg:text-6xl'>
        About
      </h3>
      
      {/* Display the profile image with motion */}
      <motion.img 
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        //viewport={{ once: true }}
          src='https://scontent.flhr2-3.fna.fbcdn.net/v/t39.30808-6/404363941_7121455651226057_7843669369154568195_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fjitpLFfEzUAX9q-BRQ&_nc_ht=scontent.flhr2-3.fna&oh=00_AfCW1Fy9jEYzWjOHr2QJuYy3cdQ7rI-YT2xP4O6Fcu0lCg&oe=65696200' 
          className=' border flex  p-0  bg-stone-50 w-[120px] h-[120px]  sm:w-[120px] sm:h-[120px] flex-shrink-0  rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[350px]'
      />
        
      {/* Display the "Here is a little background" subtitle */}
      <div className=' border pt-10 border-blue-500 space-y-2 -py-10 px-0 md:px-10' >
        <h4 className=' border text-lg font-semibold sm:text-2xl lg:text-3xl'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h4>
      
        {/* Display the detailed description */}
        <p className=' border text-xs sm:text-xm lg:text-base '>
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

  )
}

export default About;
