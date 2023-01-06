import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import Model from '../components/3D';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
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
                    {/* <button className="flex mx-auto mt-6 text-white bg-amber-400 border-0 py-2 px-5 focus:outline-none hover:bg-amber-600 rounded">About Me</button> */}
                    <div>
                        <Link href={'#about'} className=''>
                            <button className='heroButton mr-8'>About Me</button>
                        </Link>
                        <Link href={'#projects'}>
                            <button className='heroButton'>Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/*sticky or absolute  | bg-[#F7AB0A]/10 or bg-amber-400 opacity-10 */}
            <div className='sticky w-full top-8 bg-amber-400 opacity-10 left-0 h-3/4 -skew-y-12'></div>
        </>
    )
}