'use client'
import React from 'react'
import Navbar from '../ui/Navbar'
import { FaTimes } from 'react-icons/fa'
import Input from '../ui/Input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@nextui-org/react'

function SignInComponent() {
  const router = useRouter()
  return (<>
  
    <Navbar/>
    <div  className='h-screen w-full absolute' >
    <div className='fixed flex items-center justify-center h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.58)]'>
      <div className='bg-[#000] p-5 rounded-3xl flex flex-col items-center justify-start h-fit mx-auto max-w-[1200px]'>
        <div className='flex w-full cursor-pointer justify-end'>
          <FaTimes
          size={20}
          onClick={()=>router.back()}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/logonew.png'
            className='w-[40px] h-[40px]'
          />
          <p className='text-[1.2rem] font-semibold'>Welcome Back!</p>
        </div>
        <div className='flex flex-col items-end p-6 h-[fit-content] w-[350px] rounded-lg'>
          {/* <label
            className='w-full'
            htmlFor="">
            <p>Email:</p>
            <input
              type='text'
              className='h-[40px] mb-6 rounded-lg bg-[#1b1d1e] w-[100%]'
            />
          </label> */}
            <Input
              label='Email'
              placeholder='Email Address'
            />
            <Input
              label='Password'
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
    </div>

  </div>
  </> )
}

export default SignInComponent