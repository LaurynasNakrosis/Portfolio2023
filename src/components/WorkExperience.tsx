'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCardKingston from './ExperienceCardKingston';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1.5, x: 0 }}
      className='border border-red-600 h-screen flex relative overflow-hidden pb-12 flex-col text-left md:flex-row max-w-full px-1 justify-evenly mx-auto items-center space-y-1'
    >
      <h3 className='border border-red-700 pl-5 absolute top-16 uppercase text-sm tracking-[10px] sm:tracking-[20px] text-gray-500  md:text-2xl'>
        Experience
      </h3>
      <div className='border border-red-700 w-full my-10 flex space-x-2  sm:space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        <ExperienceCardKingston />
        <ExperienceCardKingston />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
