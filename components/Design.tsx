import React from 'react'
import ModalBox from './ModalBox'
import { motion } from 'framer-motion'
import ModalBoxImg from './ModalBoxImg'
import CanvaEmbed from './canva'
import ModalBoxLogo from './ModalBoxLogo'

type Props = {}

export default function Design({ }: Props) {
    return (
        <div className='relative z-10 mt-32 mb-8'>
            <p className='dark:text-white text-black font-medium text-xl mb-8 uppercase'>Design Works & Portfolio</p>
            <div className='grid md:grid-cols-3 gap-8 text-slate-400'>
                <motion.div
                    initial={{ opacity: 0, x: -20, scale: .5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    // viewport={{ once: true }}
                    transition={{ duration: .4 }}
                >
                    <div className='h-full border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                        <p className='dark:text-white text-black font-semibold'>3D Models</p>
                        <p className=''>ENX</p>
                        <ModalBox />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20, scale: .5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    // viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <div className='h-full border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                        <p className='dark:text-white text-black font-semibold'>Art Works</p>
                        <p className=''>Emoticon & Cover</p>
                        <ModalBoxImg />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40, scale: .4 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    // viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <div className='h-full border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                        <p className='dark:text-white text-black font-semibold'>Logo Design</p>
                        <p className=''>Logo & Logo Animation</p>
                        <ModalBoxLogo />
                    </div>
                </motion.div>

            </div>
            <div className='mt-8'>
                <CanvaEmbed />
            </div>
        </div>
    )
}