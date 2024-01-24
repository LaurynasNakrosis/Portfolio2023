import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

const HeaderSocialIcons = () => {
    return(
      <>
        <motion.div
        initial={{
          x: -500,
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
        className='flex flex-row items-center'>

            {/* Render social icons using SocialIcon component */}   
            <SocialIcon 
              url="https://github.com/LaurynasNakrosis" 
              fgColor='grey'
              bgColor='transparent'
            />
            <SocialIcon 
              url="https://www.linkedin.com/in/laurynas-nakrosis/" 
              fgColor='grey'
              bgColor='transparent'
            />
            <SocialIcon 
              url="https://www.facebook.com/profile.php?id=100000850794754" 
              fgColor='grey'
              bgColor='transparent'
            />
            <SocialIcon 
              url="https://www.youtube.com/watch?v=yqWX86uT5jM" 
              fgColor='grey'
              bgColor='transparent'
            />
      </motion.div>
      </>
    )
}
export default dynamic (() => Promise.resolve(HeaderSocialIcons), {ssr: false})
