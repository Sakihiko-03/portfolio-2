import Image from 'next/image'
import { Text } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import Link from "next/link";
import { Progress, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import * as Sentry from "@sentry/nextjs";
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';
import Hobby from '../components/Hobby';
import Skill from '../components/Skill';
import Test1 from '../components/Test1';

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
        <div className='my-8 text-slate-400'>
          <p className='dark:text-white text-black font-medium text-xl'>PROFILE</p>
          <p className=''>
            I am a senior in the Department of Electronics and Computer system engineering at Silpakorn University. During 1st and 2nd, I used to be a member of the student union of Engineering and industrial technology.
            I am interested in Internet of Things, Image Processing and Programing.</p>
        </div>
        <div className='my-8 text-slate-400'>
          <p className='dark:text-white text-black font-medium text-xl'>EDUCATION</p>
          <p className=''>Bachelor of Engineering (B.Eng.)
            Major: Electronics and Computer System Engineering
            Faculty of Engineering and Industrial Technology
            Silpakorn University
            GPA 3.76</p>
        </div>
        <Hobby />
        <div className='my-8'>
          <p className='dark:text-white text-black font-medium text-xl mb-4'>CONTACT</p>
          <div className='flex mb-4'>
            <div className='mr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <p className='text-slate-400'>081-3988083</p>
          </div>
          <div className='flex'>
            <div className='mr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className='text-slate-400'>lek17622@gmail.com</p>
          </div>
        </div>
        <Timeline />
        <Skill />
        <div className='my-8'>
          <p className='dark:text-white text-black font-medium text-xl'>WORK</p>
          <p className='dark:text-white text-black font-semibold'>Kapacitor Project</p>
          <p className='text-slate-400'>The Kapacitor is a peer-to-peer (P2P) energy exchange platform that runs on the Public blockchain, which is secure, can't be changed, and is very reliable.
            The KAP Token is a digital representation of energy. The owner of 1 KAP Token can trade it for 1 kWh of energy. The electricity provider will also get KAP in their wallet for energy supply.
          </p>
        </div>
        <Test1 />

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


