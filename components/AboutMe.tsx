import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

type Props = {}

export default function About({ }: Props) {
  return (
    <div id='about' className='md:grid grid-cols-3 h-3/4'>
      <div className='flex justify-center items-center pt-24'>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{
            y: [0, -15],
            transition: {
              yoyo: Infinity,
              duration: 2,
              delay: 1,
            }
          }}
        >
          <Image
            className='object-cover'
            src='/assets/mascot.png'
            alt=''
            width={300}
            height={400}
          />
        </motion.div>
      </div>
      <div className='col-span-2 flex justify-center items-center text-slate-400'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='md:px-8 lg:px-16'>
            <p className='dark:text-white text-black font-medium text-xl mb-3 uppercase'>About Me</p>
            <p>As an Electronic Engineering and Computer Systems graduate, I have a strong interest in Front-end development and UI design. My internship experience with the PEA provided me with valuable experience in these areas and reinforced my passion for creating visually appealing and user-friendly interfaces. I am excited to continue learning and growing in these fields to contribute to innovative projects.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}