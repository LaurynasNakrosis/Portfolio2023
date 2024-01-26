{/* From Deploy Branch */}
import Head from 'next/head';
import type { GetStaticProps, NextPage } from 'next';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '@/components/WorkExperience';
import { getSocials } from '@/libs/api';
import Image from 'next/image';

// Export the default Home component
export default async function Home() {
  // Fetch social media data
  //const socials = await getSocials();

  // Log social media information
  //console.log(socials);

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track--gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Laurynas Profile</title>
      </Head>

      {/* Header */}

        <Header />


      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>
      
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      
      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>
      
      {/* Skills */}
      <section id="skills" className='snap-center'>
        <Skills />
      </section>
      
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      
      {/* Contact Me */}
      <section id='contactme' className='snap-center'>
        <ContactMe />
      </section>

      {/* Back to Top Button */}
      <Link href='#hero'>
        <footer className='sticky bottom-24 sm:bottom-4 mt-0 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              width={100}
              height={100}
              src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
