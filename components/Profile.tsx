import Link from 'next/link';
import React from 'react'
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
        <div className='relative z-10 h-3/4 items-center justify-center grid md:grid-cols-3 text-center overflow-hidden'>
            <img
                className='relative rounded-full lg:h-80 lg:w-80 h-48 w-48 mx-auto object-cover'
                src='https://pbs.twimg.com/profile_images/1578650353901662211/T-UNfuW-_400x400.jpg'
                alt=''
            />
            <div className='z-20 md:col-span-2'>
                {/* <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2> */}
                <h1 className='text-5xl lg:text-6xl font-semibold'>
                    <span className=''>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
            </div>
        </div>
        {/*sticky or absolute*/}
        <div className='sticky w-full top-8 bg-[#F7AB0A]/10 left-0 h-3/4 -skew-y-12'></div>
        </>
    )
}