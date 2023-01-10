import React from 'react'
import ModalBox from './ModalBox'

type Props = {}

export default function Design({ }: Props) {
    return (
        <div className='relative z-10 my-32'>
            <p className='dark:text-white text-black font-medium text-xl mb-4'>Design</p>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-8 text-slate-400'>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Poster</p>
                    <p className=''>Internship</p>
                    <p className=''>miniProject-Microcontroller</p>
                    <p className=''>Kapacitor Project</p>
                    {/* <p className=''></p> */}
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Illustration</p>
                    <p className=''>Kapacitor Wep App</p>
                    <p className=''>Kapacitor Whitepaper</p>
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>3D</p>
                    <p className=''>ENX</p>
                    <ModalBox />
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Another</p>
                    <p className=''>Emoticon</p>
                    <p className=''>Logo</p>
                    {/* <p className=''></p> */}
                </div>
            </div>
        </div>
    )
}