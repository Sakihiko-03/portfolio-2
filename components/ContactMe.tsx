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
    <div id='projects'>
      <div className='md:grid md:grid-cols-2 h-screen flex relative flex-col text-center md:text-left md:flex-row justify-center items-center'>
        <div className='my-8'>
          <p className='dark:text-white text-black font-medium text-xl mb-4'>CONTACT ME</p>
          <div className='flex mb-4'>
            <div className='mr-4'>
              <PhoneIcon className='text-amber-400 h-7 w-7' />
            </div>
            <p className='text-slate-400'>081-3988083</p>
          </div>
          <div className='flex mb-4'>
            <div className='mr-4'>
              <EnvelopeIcon className='text-amber-400 h-7 w-7' />
            </div>
            <p className='text-slate-400'>lek17622@gmail.com</p>
          </div>
          <div className='flex'>
            <div className='mr-4'>
              <MapPinIcon className='text-amber-400 h-7 w-7' />
            </div>
            <p className='text-slate-400'>Chachosaoeng, Thailand</p>
          </div>
        </div>
        <div className='flex flex-col space-y-8'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
            <div className='grid grid-cols-2 space-x-2'>
              <input {...register('name')} placeholder='Name' className='outline-none bg-slate-400/10 px-4 py-2 text-gray-500 placeholder-gray-500 transition-all dark:focus:text-amber-400/70 focus:text-amber-600/70 rounded-lg border-none overflow-hidden' type="text" />
              <input {...register('email')} placeholder='Email' className='outline-none bg-slate-400/10 px-4 py-2 text-gray-500 placeholder-gray-500 transition-all dark:focus:text-amber-400/70 focus:text-amber-600/70 rounded-lg border-none overflow-hidden' type="text" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='outline-none bg-slate-400/10 px-4 py-2 text-gray-500 placeholder-gray-500 transition-all dark:focus:text-amber-400/70 focus:text-amber-600/70 rounded-lg border-none overflow-hidden' type="text" />
            <textarea {...register('message')} placeholder='Message' className='outline-none bg-slate-400/10 px-4 py-2 text-gray-500 placeholder-gray-500 transition-all dark:focus:text-amber-400/70 focus:text-amber-600/70 rounded-lg border-none overflow-hidden' />
            <button type='submit' className='bg-amber-400 py-4 px-8 rounded-md text-black font-bold text-lg'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe