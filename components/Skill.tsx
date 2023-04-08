import React from 'react'
import ModalBox from './ModalBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

export default function Skill({ }: Props) {
    function solid(arg0: string): import("@fortawesome/fontawesome-svg-core").IconProp {
        throw new Error('Function not implemented.')
    }

    return (
        <div className='relative z-10 my-32'>
            <p className='dark:text-white text-black font-medium text-xl mb-4'>SKILLS</p>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-8 text-slate-400'>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Programming Language</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                    <p className=''>C/C++</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                    <p className=''>Python</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <p className=''>JavaScript</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                    <p className=''>TypeScript</p>
                    <p className=''>Dart</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <p className=''>HTML</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <p className=''>CSS</p>
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Framework & Libraries</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                    <p className=''>Flutter-4</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" />
                    <p className=''>Ionic-3</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />
                    <p className=''>Angular-4</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <p className=''>React-4</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                    <p className=''>NextJs-4</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                    <p className=''>NodeJs-3</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                    <p className=''>Tailwind CSS</p>
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Database</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    <p className=''>MongoDB</p>
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Dev Tool</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                    <p className=''>VS Code</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    <p className=''>Github</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    <p className=''>git</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
                    <p className=''>Android Studio</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
                    <p className=''>Arduino IDE</p>
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Graphic</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    <p className=''>Figma</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" />
                    <p className=''>Blender</p>
                    <p className=''>Procreate</p>
                    {/* <ModalBox /> */}
                </div>
            </div>
        </div>
    )
}