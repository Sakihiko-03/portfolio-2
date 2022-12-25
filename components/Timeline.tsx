import React from 'react'

type Props = {}

export default function Timeline({ }: Props) {
    return (
        <section className="dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-amber-400">
                            <h3 className="text-3xl font-semibold">TIME-LINE</h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-400">
                                <h3 className="text-xl font-semibold tracking-wide">Training in Silpakorn University</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2021</time>
                                <p className="mt-3">Basic Python, Silpakorn University, 2 days</p>
                                <p className=''>Programming and Image Processing using Python with OpenCV, 2 days</p>
                                <p className=''>Develop Mobile Web Application with HTML, CSS, JavaScript, Bootstrap and php, 2 days</p>
                                <p className=''>Speech-to-Text and Text-to-Speech programming, 1 day</p>
                                <p className=''>Create LINE Chatbot using Python with Flask and wit.ai, 1 day</p>
                                <p className=''>Image Classification by CNN Model using Python with TensorFlow, 1 day</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-400">
                                <h3 className="text-xl font-semibold tracking-wide">Internships and Cooperative Education</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2022</time>
                                <p className="mt-3">At Provincial Electricity Authority, Bangkok, 6 months</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-amber-400">
                                <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
                                <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}