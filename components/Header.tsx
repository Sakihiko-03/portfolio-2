import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

type Props = {}

export default function Header({ }: Props) {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    console.log(theme);

    return (
        // relative or sticky top-0
        <header className='sticky top-0 p-2 dark:bg-gray-400 dark:bg-opacity-5 dark:backdrop-blur-sm bg-gray-400 bg-opacity-5 backdrop-blur-sm flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                {/* Social */}
                {/* <SocialIcon url='https://twitter.com/Sakihiko_03'
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url='https://www.youtube.com'
                    fgColor='gray'
                    bgColor='transparent' /> */}
                <SocialIcon url='https://web.facebook.com/supakorn.suriyamongkol/'
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url='https://github.com/Sakihiko-03'
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                {/* <SocialIcon className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' /> */}
                {/* <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p> */}
                <div className='mr-4'>
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
            </motion.div>
        </header>
    )
}