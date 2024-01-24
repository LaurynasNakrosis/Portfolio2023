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
      src='https://media.licdn.com/dms/image/D4E03AQFdvOgeaAqqIA/profile-displayphoto-shrink_400_400/0/1704877804333?e=1710979200&v=beta&t=pf0VFNI-o_9wCdYSZeLgd9wG0PhMoFtdFaD5Ny_NtXU' 
      alt=''
    />
    )
}