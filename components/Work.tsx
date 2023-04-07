import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image'
import Web from '../public/assets/kapWeb.png'
import Mobile from '../public/assets/kapMobile.png'
import Micro from '../public/assets/microProject.png'
import DIP from '../public/assets/dipProject.png'
import Internship from '../public/assets/Internship.png'
import Coop from '../public/assets/Coop.png'

export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            customPaging: function (i: any) {
                return (
                    <a className="">
                        <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
                    </a>
                );
            },
            dotsClass: "slick-dots w-max absolute mt-20  ",
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 890,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div id='projects'>
                <p className='dark:text-white text-black font-medium text-xl mb-4'>PROJECTS</p>
                <Slider {...settings}>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg">
                            {/* <img className="rounded-t-lg overflow-hidden" src='https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/321459732_526396949453716_4200402998008371909_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHYIZjagMHg2YGnViyNDrgmSBBGvJQ5lsxIEEa8lDmWzBjlhzvaUyAmfPTFDdB4mHs6g1vHPII3Tm60ZpoF_69r&_nc_ohc=m4oHZnKYP3wAX-tu76H&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfCGxcNKu1DicCZCEFhjLe5jUpC0FlcyifS2v6Oxi7Ni8w&oe=63ADA981'></img> */}
                            <Image className="rounded-t-lg overflow-hidden" src={Web} alt='' />
                            <div className=" p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">INTERNSHIP</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Kapacitor [Web App]</h1>
                                <p className="leading-relaxed mb-3 text-sm">Kapacitor is a peer-to-peer (P2P) energy exchange platform built on Polygon Blockchain. Electric power producers can supply electricity to the utility grid system to earn a utility token as KAP.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={'https://kapacitor.me/'} className=''>
                                        <button className='text-amber-400 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg overflow-hidden">
                            {/* <img src='https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/322264922_2442312899257886_2296934032187418323_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH6SMFWC50uhJ6UOXUnoHi4vX-bbfxfEkS9f5tt_F8SRFlwsctOqKkdvZF3d42spRiGQWAbmQUCNYb9iJBSXHQy&_nc_ohc=dSXrL8nflsYAX-trck3&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfB6Qdw53AO6nUEUAnpVwRB26s0TJjq_V7lsYx8UuoXi1w&oe=63ADE9E9'></img> */}
                            <Image className="rounded-t-lg overflow-hidden" src={Mobile} alt='' />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">INTERNSHIP</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Kapacitor [Mobile App]</h1>
                                <p className="leading-relaxed mb-3 text-sm">Kapacitor is a peer-to-peer (P2P) energy exchange platform built on Polygon Blockchain. Electric power producers can supply electricity to the utility grid system to earn a utility token as KAP.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={'https://play.google.com/store/apps/details?id=com.kapacitor.app'} className=''>
                                        <button className='text-amber-400 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg overflow-hidden">
                            <Image className="rounded-t-lg overflow-hidden" src={Micro} alt='' height={4000} objectFit="cover" objectPosition="center"/>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CO-OP EDUCATION AT PEA</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Let's Study</h1>
                                <p className="leading-relaxed mb-3 text-sm">It is a project to notify when studying. It consists of LCD display, text to speech sound and line notify. Users can choose the mode they want and enter the daily subjects in the GUI. Simulate the operation using  Proteus, Arduino IDE and Python.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={'https://kapacitor.me/'} className=''>
                                        <button className='text-amber-400 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg overflow-hidden">
                            <Image className="rounded-t-lg overflow-hidden" src={Coop} alt='' height={3000} objectFit="cover" objectPosition="center"/>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CO-OP EDUCATION AT PEA</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Let's Study</h1>
                                <p className="leading-relaxed mb-3 text-sm">It is a project to notify when studying. It consists of LCD display, text to speech sound and line notify. Users can choose the mode they want and enter the daily subjects in the GUI. Simulate the operation using  Proteus, Arduino IDE and Python.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={'https://kapacitor.me/'} className=''>
                                        <button className='text-amber-400 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg">
                            <Image className="rounded-t-lg overflow-hidden" src={Internship} alt='' height={6000} objectFit="cover" objectPosition="center"/>
                            <div className=" p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">INTERNSHIP AT PEA</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Kapacitor [Web App]</h1>
                                <p className="leading-relaxed mb-3 text-sm">Kapacitor is a peer-to-peer (P2P) energy exchange platform built on Polygon Blockchain. Electric power producers can supply electricity to the utility grid system to earn a utility token as KAP.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={'https://kapacitor.me/'} className=''>
                                        <button className='text-amber-400 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full dark:bg-white dark:bg-opacity-5 dark:backdrop-blur-md bg-gray-400 bg-opacity-5 backdrop-blur-md rounded-lg">
                            <Image className="rounded-t-lg overflow-hidden" src={DIP} alt='' height={3000} objectFit="cover" objectPosition="center"/>
                            <div className=" p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">DIP PROJECT</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">Kapacitor [Web App]</h1>
                                <p className="leading-relaxed mb-3 text-sm">Kapacitor is a peer-to-peer (P2P) energy exchange platform built on Polygon Blockchain. Electric power producers can supply electricity to the utility grid system to earn a utility token as KAP.</p>
                                <div className="flex items-center flex-wrap ">
                                    <Link href={'https://kapacitor.me/'} className=''>
                                        <button className='text-amber-400 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}