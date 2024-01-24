"useclient"
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function HeaderContactMe (){
    
    return(
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }} 
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>

          {/* Social icon for email */}
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
          />

          {/* Text link */}
          <p className='uppercase hidden md:inline-flex text-sm text-grey-900'>Get in touch</p>
      </motion.div>
    )
}