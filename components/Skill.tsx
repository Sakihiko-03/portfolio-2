import React from 'react'
import ModalBox from './ModalBox'

type Props = {}

export default function Skill({ }: Props) {
    return (
        <div className='relative z-10 my-32'>
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
                    {/* <ModalBox /> */}
                </div>
            </div>
        </div>
    )
}