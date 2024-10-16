'use client'
import { useAuthContext } from '@/contexts/AuthProvider'
import { useSidebarContext } from '@/contexts/SidebarContext'
//import { cn } from '@/lib/utils'
import { Button, cn } from '@nextui-org/react'
import Image from 'next/image'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars, FaBell, FaPlus, FaRegPlusSquare, FaSearch, FaUser } from 'react-icons/fa'
import { FaHouse, FaPencil, FaPerson } from 'react-icons/fa6'

type Props = {
  setActivemodal?:(a:boolean)=>void
} 

function Navbar(props:Props) {
  const pathname = usePathname()
  const {open,setOpen} = useSidebarContext()
  /* const{user,setUser}= useAuthContext() */

  const user = 1
  
  return (
    <nav className ='bg-[#0b0c0d] w-full h-[fit-content] py-2 fixed top-0 left-0 px-10 z-[100]'>
         <div className='flex items-center justify-between mx-auto'>

        <div className='flex items-center justify-center gap-4'>
        
        <Link className='min-h-[60px]'
        
        href='/'>
        <Image width={60} height={60}
        src='/logonew.png'
        alt='logo'
        className='w-[60px] h-[60px] object-cover'
        />
        </Link>

        
        
       

       <div className='p-3 rounded-[30px] bg-[#1b1d1e] hidden items-center justify-start sm:flex' >
       <FaSearch/>
       <input
        type='text'
        className='outline-none w-full bg-[#1b1d1e] ml-2 placeholder:text-[1.1rem]'
        placeholder='Search'
        />
        </div>
       </div>
       
       <div className='flex items-center justify-center gap-3'>
       
        {/* <Link
        className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2 ml-3 text-[1.1rem] rounded-[100px]', pathname === 'notifications'?'bg-[#1b1d1e]':"" )}
         href='/profile'
        >
        <FaUser
        size={20}
        />
           
        </Link> */}
        {!user &&<>       
        <Button 
        onClick={()=>{ if (props.setActivemodal) {props.setActivemodal(true)}}}
        className={cn(' flex items-center justify-center w-[100px] text-center hover:bg-[rgba(255,255,255,0.1)] p-1 text-[1.1rem] rounded-[35px]', )}
        >Log in</Button>
        
        
        <Link 
         className={cn('flex items-center justify-center w-[100px] text-center bg-[#4c9bd4] hover:opacity-[0.9] p-1 text-[1.1rem] rounded-[35px]',)}
        href='/signup'>Sign Up</Link>

        </>}
        
       {user && <>
       <Link 
       className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2  text-[1.1rem] rounded-[35px]', pathname === '/create'?'bg-[#1b1d1e]':"" )}
       href='/create'>
        <FaRegPlusSquare size={20}/>
       </Link>
        
        <Link
        className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2 text-[1.1rem] rounded-[100px]', pathname === 'notifications'?'bg-[#1b1d1e]':"" )}
         href='/notifications'
        >
        <FaBell
        size={20}
        />
        </Link>

       <div 
        onClick={()=>setOpen(!open)}
        className={cn('flex items-center hover:bg-[rgba(255,255,255,0.1)] p-2 text-[1.1rem] rounded-[100px]', pathname === 'notifications'?'bg-[#1b1d1e]':"" )}>
        <FaBars size={20}/>
        </div>

        
          </>

          
}
       </div>
       


    </div>
    </nav>
  )
}

export default Navbar