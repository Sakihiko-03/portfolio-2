import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='my-8 text-slate-400'>
          <p className='dark:text-white text-black font-medium text-xl'>PROFILE</p>
          <p className=''>
          I am studying in the 4th year of Electronic Engineering and Computer Systems. Even though I didn't study programming directly. But I am interested in Front-end develop and User Interface design. After getting an internship with the Provincial Electricity Authority and doing a project together, it gave me more work experience and ways to gain more knowledge.</p>
        </div>
    )
}