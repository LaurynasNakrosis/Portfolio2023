'use client';
import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1.5, x: 0 }}
    className='  h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='pl-5 absolute top-24 uppercase text-sm tracking-[10px]  sm:tracking-[20px] text-gray-500  md:text-2xl'>
            Experience
            </h3>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>

  )
}

export default WorkExperience