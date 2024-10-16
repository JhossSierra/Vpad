'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import Navbar from '../ui/Navbar'
import { FaTimes } from 'react-icons/fa'
import Input from '../ui/Input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@nextui-org/react'
import { Button } from '../ui/Button'




function SignUpComponent() {
  let [errorMessage,setErrorMessage] =useState('')
 
  const router = useRouter()
  const handlesubmit= (e:FormEvent<HTMLFormElement>)=>{}
  return (<>
    <Navbar />
    <div className=' bg-[#000] h-screen w-full'>
    <form onSubmit={handlesubmit} className=' fixed flex justify-center h-screen w-screen top-0 left-0 bg-[rgba(90,183,206,0.1)]'>
      <div className='bg-[#000] p-5 rounded-3xl modal flex flex-col items-center justify-start 2xl:h-fit h-[550px] mt-24 overflow-y-hidden overflow-x-hidden mx-auto max-w-[1200px]'>
        <div className='flex w-full cursor-pointer justify-end'>
          {/* <FaTimes
          size={20}
          onClick={()=>router.back()}
          /> */}
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/logonew.png'
            className='w-[40px] h-[40px]'
          />
          <p className='text-[1.2rem] font-semibold'>Welcome To VPad!</p>
        </div>

        {errorMessage && <div>
          <p className='text-red-300 underline'>{errorMessage}</p>

        </div>}

        <div className='flex flex-col items-end p-6 h-[fit-content] w-[350px] rounded-lg'>
            <Input
              label='Username'
              placeholder='Enter your desired username'
            />
           
            <Input
              label='Email'
              placeholder='Email Address'
              labelClassName='mt-[20px]'
            />
            <Input
              label='Password'
              type='password'
              labelClassName='mt-[20px]'
            />

            <Input
              label='Repeat Password'
              type='password'
              labelClassName='mt-[20px]'
            />
             <div className='w-full flex justify-between'>
            
            <a 
               className='flex items-center justify-center w-[100px] text-center underline text-sm mt-5'
              href='/signup'>
              or sign up
            </a>
            
             <Link 
              className={cn('flex items-center justify-center w-[100px] text-center mt-5 bg-[#4c9bd4] hover:opacity-[0.9] p-2 text-[1.1rem] rounded-lg',)} 
              href='/'>
              Log In
            </Link>

            </div>

        </div>
      </div>
    </form>

  </div>
  </>
  )
}

export default SignUpComponent