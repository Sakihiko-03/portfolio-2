import Image from 'next/image'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';
import Hobby from '../components/Hobby';
import Skill from '../components/Skill';
import Work from '../components/Work';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import ModalBox from '../components/ModalBox';
import Model from '../components/3D';

// import { Modal } from "flowbite-react"; 
export default function Home() {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  console.log(theme);

  return (
    <div className='dark:bg-zinc-900 light:bg-gray-100 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-amber-400/80'>
      <Head>
        <title>Supakorn's Portfolio</title>
      </Head>
      <Header />
      {/* <section id='nav' className='snap-start'></section> */}
      {/* <section id="about" className='snap-start'> */}
      <Profile />
      {/* </section> */}

      <div className='mx-12 md:mx-24 lg:mx-32 mb-12 lg:mb-16'>
        {/* <section id='about' className='snap-center'> */}
        <AboutMe />
        {/* </section> */}
        <Hobby />
        <Timeline />
        <Skill />
        <Work />
        <ContactMe />
        {/* <Model/> */}
        {/* <ModalBox /> */}

      </div>
    </div>
  )
}


