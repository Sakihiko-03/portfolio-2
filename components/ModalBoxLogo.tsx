import React from "react";
import LogoRPA from '../public/assets/logo_rpa.png'
import LogoKAP from '../public/assets/logo_kap.png'
import LogoAni from '../public/assets/logo_ani.png'
import Link from 'next/link';
import Image from 'next/image'


export default function ModalLogo() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="text-amber-400 inline-flex items-center md:mb-2 lg:mb-0"
                type="button"
                onClick={() => setShowModal(true)}
            >
                preview
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </button>
            {showModal ? (
                <>
                    <div className="absolute inset-0 z-30">
                        <div className="flex items-center justify-center w-full h-full fixed top-8 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                            {/*content*/}
                            <div className="max-w-screen max-h-[90%] m-4 rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none overflow-hidden">
                                {/*header*/}
                                <div className="relative h-8 flex items-center w-full bg-gray-800 py-4 px-24 dark:bg-gray-700">
                                    <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    </div>
                                    <div className="">
                                        <button type="button" onClick={() => setShowModal(false)} className="absolute top-0 right-0 translate-y-1 -translate-x-1 bg-transparent hover:bg-red-700 rounded-md text-center">
                                            <svg className="h-6 w-6 text-red-600 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between p-2 mx-4 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold text-black">Energy Node Exchanger (ENX)</h3>
                                </div>
                                {/*body*/}
                                <div className="px-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-sm">
                                        ENX is a device for exchanging energy.
                                    </p>
                                    <div className="flex flex-row">
                                        <Image className="" src={LogoKAP} alt='RPA' width={200} height={200}/>
                                        <Image className="" src={LogoRPA} alt='Kapacitor' width={320} height={200}/>
                                    </div>
                                    <div className="flex mb-4">
                                        <Image className="flex" src={LogoAni} alt='Animation' width={300} height={360}/>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed opacity-50 inset-0 z-10 bg-gray-900 backdrop-blur-md"></div>
                </>
            ) : null}
        </>
    );
}