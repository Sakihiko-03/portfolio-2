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
      <Profile />
      <div className='mx-12 md:mx-24 lg:mx-32 mb-12 lg:mb-16'>
        <AboutMe />
        <Hobby />
        <Timeline />
        <Skill />
        <Work />
        <ContactMe />
        {/* <div className='md:columns-2 lg:columns-4 gap-3 w-screen mx-auto space-y-3'>
          <div className='break-inside-avoid'>
            <img src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'></img>
          </div>
          <div className='break-inside-avoid'>
            <img src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'></img>
          </div>
          <div className='break-inside-avoid'>
            <img src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'></img>
          </div>
          <div className='break-inside-avoid'>
            <img src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'></img>
          </div>
          <div className='break-inside-avoid'>
            <img src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'></img>
          </div>
          <div className='break-inside-avoid'>
            <img src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'></img>
          </div>
        </div> */}
      </div>
    </div>
  )
}


