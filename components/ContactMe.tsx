import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,

};
type Props = {}

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        //  console.log(formData)   
        window.location.href = `mailto:lek17622@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
    return (
        <div className='md:grid md:grid-cols-2 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
            {/* <div className='space-y-4 mb-8'>
               <h3 className='flex items-center space-x-5 justify-center uppercase text-gray-500 text-2xl'>Contact</h3>
                  <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-base'>0813988083</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-base'>lek17622@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-lg md:text-base'>Chachosaoeng, Thailand</p>
                </div>
            </div> */}
              <div className='my-8'>
          <p className='dark:text-white text-black font-medium text-xl mb-4'>CONTACT</p>
          <div className='flex mb-4'>
            <div className='mr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <p className='text-slate-400'>081-3988083</p>
          </div>
          <div className='flex'>
            <div className='mr-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className='text-slate-400'>lek17622@gmail.com</p>
          </div>
        </div>
            <div className='flex flex-col space-y-10'>     
               

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#F7AB0A] py-4 px-8 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe