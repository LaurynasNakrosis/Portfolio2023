// Import necessary libraries and components
"use client";
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

// Define the BackgroundCircles component
function BackgroundCircles({}: Props) {
  return (
    // Container for animated circles
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale: [2, 0, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: [ "20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 3.5,
        }}
        className='relative flex justify-center items-center p-5'>
            {/* First animated circle */}
            <div className=' absolute border border-[#333333] rounded-full   h-[76px] w-[76px]  sm:h-[152px] sm:w-[152px] mt-64  animate-ping inline-flex' />
            
            {/* Second animated circle */}
            <div className='rounded-full border border-[#333333]            h-[114px] w-[114px] sm:h-[228px] sm:w-[228px] absolute mt-64 ' />
            
            {/* Third animated circle */}
            <div className='rounded-full border border-[#333333]            h-[190px] w-[190px] sm:h-[380px] sm:w-[380px] absolute mt-64 ' />
            
            {/* Fourth animated circle */}
            <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[247px] w-[247px] sm:h-[494px] sm:w-[494px] absolute mt-64 animate-pulse'/>
            
            {/* Fifth animated circle */}
            <div className='rounded-full border border-[#333333]            h-[304px] w-[304px] sm:h-[604px] sm:w-[604px] absolute mt-64 ' />
    </motion.div>
  );
}

export default BackgroundCircles;
