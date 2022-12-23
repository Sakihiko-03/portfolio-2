import Image from 'next/image'
import { Text } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import Link from "next/link";
import { Progress, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import * as Sentry from "@sentry/nextjs";
import Head from 'next/head';

export default function Home() {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  console.log(theme);



  return (
    <div className="dark:bg-gray-900 light:bg-gray-100 overflow-hidden min-h-screen">
      <Head>
        <title>Supakorn's Portfolio</title>
      </Head>
      <div className='flex justify-end m-4'>
        <button
          className=" rounded-full dark:bg-white dark:bg-opacity-10 bg-gray-500 bg-opacity-10 hover:bg-gray-400 hover:bg-opacity-5  w-9 h-9 m-1"
          onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }} type='button'>
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>
      <div className='mx-12 md:mx-24 lg:mx-32 mb-12 lg:mb-16'>
        <div className="grid grid-cols-3 mb-8 gap-4">
          <motion.div
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20
            }}
          >
            <div className='object-cover drop-shadow-lg'>
              <Image
                src="/profile.jpg"
                alt=""
                width='120'
                height='120'
                layout="responsive"
              />
            </div>
          </motion.div>
          <div className='col-span-2 my-auto'>
            {/* <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Supakorn Suriyamongkol
          </Text> */}
            <p className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-white text-black">Supakorn</p>
            <p className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-white text-black">Suriyamongkol</p>
          </div>
        </div>
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
        <div className='my-8 text-slate-400'>
          <p className='dark:text-white text-black font-medium text-xl mb-4'>HOBBIES</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: .3 }}>
              <div className='dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md p-4 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-16 h-16 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <p className='text-center'>Reading</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: .6 }}>
              <div className='dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md p-4 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-16 h-16 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
                <p className='text-center'>Gaming & Puzzles</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: .4 }}>
              <div className='dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md p-4 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-16 h-16 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <p className='text-center'>Drawing</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: .8 }}>
              <div className='dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md p-4 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
                <p className='text-center'>Listening to music</p>
              </div>
            </motion.div>
          </div>
        </div>
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
        <div className='my-8 text-slate-400'>
          <p className='dark:text-white text-black font-medium text-xl'>TRAINING</p>
          <p className=''>Basic Python, Silpakorn University, 2 days</p>
          <p className=''>Programming and Image Processing using Python with OpenCV, Silpakorn University, 2 days</p>
          <p className=''>Develop Mobile Web Application with HTML, CSS, JavaScript, Bootstrap and php, Silpakorn University, 2 days</p>
          <p className=''>Speech-to-Text and Text-to-Speech programming, Silpakorn University, 1 day</p>
          <p className=''>Create LINE Chatbot using Python with Flask and wit.ai, Silpakorn University, 1 day</p>
          <p className=''>Image Classification by CNN Model using Python with TensorFlow, Silpakorn University, 1 day</p>
        </div>
        <div className='my-8 text-slate-400'>
          <p className='dark:text-white text-black font-medium text-xl'>EXPERIENCE</p>
          <p className=''>Internships and Cooperative Education</p>
          <p className=''>At Provincial Electricity Authority, Bangkok, 6 months</p>
        </div>
        <div className='my-8'>
          <p className='dark:text-white text-black font-medium text-xl mb-4'>SKILLS</p>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-8 text-slate-400'>
            <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
              <p className='dark:text-white text-black font-semibold'>Programming Language</p>
              <p className=''>C/C++</p>
              <p className=''>Python</p>
              <p className=''>JavaScript</p>
              <p className=''>TypeScript</p>
              <p className=''>Dart</p>
            </div>
            <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
              <p className='dark:text-white text-black font-semibold'>Framework & Libraries</p>
              <p className=''>Flutter-4</p>
              <p className=''>Ionic-3</p>
              <p className=''>Angular-4</p>
              <p className=''>React-4</p>
              <p className=''>NextJs-4</p>
              <p className=''>NodeJs-3</p>
            </div>
            <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
              <p className='dark:text-white text-black font-semibold'>Database</p>
              <p className=''>MongoDB</p>
            </div>
            <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
              <p className='dark:text-white text-black font-semibold'>Operation</p>
              <p className=''>Window</p>
              <p className=''>Linux</p>
              <p className=''>- Shell</p>
              <p className=''>- Nginx</p>
            </div>
            <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
              <p className='dark:text-white text-black font-semibold'>Graphic</p>
              <p className=''>Figma</p>
              <p className=''>Blender</p>
              <p className=''>Procreate</p>
            </div>
          </div>
        </div>
        <div className='my-8'>
          <p className='dark:text-white text-black font-medium text-xl'>WORK</p>
          <p className='dark:text-white text-black font-semibold'>Kapacitor Project</p>
          <p className='text-slate-400'>The Kapacitor is a peer-to-peer (P2P) energy exchange platform that runs on the Public blockchain, which is secure, can't be changed, and is very reliable.
            The KAP Token is a digital representation of energy. The owner of 1 KAP Token can trade it for 1 kWh of energy. The electricity provider will also get KAP in their wallet for energy supply.
          </p>
        </div>
      </div>
    </div>
  )
}


