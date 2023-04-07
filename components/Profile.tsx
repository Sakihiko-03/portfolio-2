import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import Model from '../components/3D';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
    function download() {
        const URL = 'https://drive.google.com/file/d/14TjKE4Awk6FYNzTArBXQ_U7rtCUNR1AQ/view?usp=share_link'
        if (typeof window !== "undefined"){
          window.location.href = URL
        }
    }
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name is",
            "Supakorn Suriyamongkol",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <>
            <div className='relative z-0 h-3/4 items-center justify-center grid md:grid-cols-3 text-center overflow-hidden lg:mx-32'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: {
                            duration: 0.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        },
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    {/* <img
                        className='relative rounded-full lg:h-72 lg:w-72 h-48 w-48 mx-auto object-cover'
                        // src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'
                        src='https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/321289427_865426224659226_5512635338317382693_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGTHJETiFMZTWvjhpWk2wjEGTMBfaka4ZgZMwF9qRrhmMosMM_r4NvrMXhN8BZ0TSymBIB2emASxdyx81mnQ_hQ&_nc_ohc=7H69zTM3VMMAX8Jd9U_&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfChqUML5-IjhvFum6RSY0hfSGVXVNbYOJlkROwRskeirw&oe=63AF7D5B'
                        alt=''
                    /> */}
                    <div className='m-16'>
                    <Model />
                    </div>
                </motion.div>
                <div className='z-20 md:col-span-2'>
                    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px] mb-2'>Front-End Developer</h2>
                    <h1 className='text-5xl lg:text-6xl font-semibold mb-12'>
                        <span className=''>{text}</span>
                        <Cursor cursorColor='#F7AB0A' />
                    </h1>
                    <div>
                        <Link href={'#about'}>
                            <button className='heroButton'>About Me</button>
                        </Link>
                        <Link href={'#projects'}>
                            <button className='heroButton mx-8'>Projects</button>
                        </Link>
                        <button className='heroButton inline-flex items-center px-4 py-2' onClick={download}> 
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            {/*sticky or absolute  | bg-[#F7AB0A]/10 or bg-amber-400 opacity-10 */}
            <div className='sticky w-full top-8 bg-amber-400 opacity-10 left-0 h-3/4 -skew-y-12'></div>
        </>
    )
}