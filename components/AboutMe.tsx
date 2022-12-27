import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

type Props = {}

export default function About({ }: Props) {
  return (
    <div id='about' className='md:grid grid-cols-3 h-3/4'>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <div className='flex justify-center items-center pt-24'>
          <Image
            className='object-cover'
            src='/assets/mascot.png'
            alt=''
            width={300}
            height={400}
          />
        </div>
      </motion.div>
      <div className='col-span-2 flex justify-center items-center text-slate-400'>
        <div className='md:px-8 lg:px-16'>
          <p className='dark:text-white text-black font-medium text-xl mb-3'>PROFILE</p>
          <p>I am studying in the 4th year of Electronic Engineering and Computer Systems.
            Even though I didn't study programming directly.
            But I am interested in Front-end develop and User Interface design.
            After getting an internship with the Provincial Electricity Authority and doing a project together,
            it gave me more work experience and ways to gain more knowledge.</p>
        </div>
      </div>
    </div>

  )
}