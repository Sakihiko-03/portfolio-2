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
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width={35} />
                        <p className=''>C</p></div>
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width={35} />
                        <p className=''>C++</p></div>
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={35} />
                        <p className=''>Python</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={35} />
                        <p className=''>JavaScript</p>
                    </div>
                    <div className='grid grid-cols-2'>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width={35} />
                        <p className=''>TypeScript</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" width={35} />
                        <p className=''>Dart</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={35} />
                        <p className=''>HTML</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={35} />
                        <p className=''>CSS</p>
                    </div>
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Framework & Libraries</p>
                    <div className='grid grid-cols-2'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width={35} />
                    <p className=''>Flutter</p>
                    </div>

                    {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" width={35}/>
                    <p className=''>Ionic-3</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" width={35}/>
                    <p className=''>Angular-4</p> */}
                    <div className='grid grid-cols-2'>
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={35} />
                    <p className=''>ReactJS</p>
                    </div>
                    <div className='grid grid-cols-2'>
                   
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={35} />
                    <p className=''>NextJS</p>
                    </div>
                    <div className='grid grid-cols-2'>
                   
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width={35} />
                    <p className=''>Tailwind CSS</p>
                    </div>

                </div>
                {/* <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Database</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={35}/>
                    <p className=''>MongoDB</p>
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={35}/>
                    <p className=''>NodeJs-3</p>
                </div> */}
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Dev Tool</p>
                    <div className='grid grid-cols-2'>
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width={35} />
                    <p className=''>VS Code</p>
                    </div>
                    <div className='grid grid-cols-2'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={35} />
                    <p className=''>Github</p>
                    </div>

                    {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={35}/>
                    <p className=''>git</p> */}
                    <div className='grid grid-cols-2'>
                   
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width={35} />
                    <p className=''>Android Studio</p>
                    </div>
                    <div className='grid grid-cols-2'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" width={35} />
                    <p className=''>Arduino IDE</p>
                    </div>
                    
                </div>
                <div className='border dark:border-slate-700 border-slate-300 text-slate-400 p-4 rounded-lg'>
                    <p className='dark:text-white text-black font-semibold'>Graphic</p>
                    <div className='grid grid-cols-2'>
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width={35} />
                    <p className=''>Figma</p>
                    </div>
                    <div className='grid grid-cols-2'>
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" width={35} />
                    <p className=''>Blender</p>
                    </div>
                    
                    <p className=''>Procreate</p>
                    {/* <ModalBox /> */}
                </div>
            </div>
        </div>
    )
}