"use client"
import { motion } from 'framer-motion';
export default function ExperienceCardContent () {
    return(
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
      xl:w-[150px] xl:h-[150px] 
      object-cover object-center'
      src='https://studentconnect.org/uploads/institutions/65246278198e0.jpg' 
      alt=''
    />
    )
}