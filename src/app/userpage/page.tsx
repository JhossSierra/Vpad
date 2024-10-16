'use client'
import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import UserView from '@/components/User/Userpage'


import { useSidebarContext } from '@/contexts/SidebarContext'
import React from 'react'


export default function page() {
  const {open,setOpen} = useSidebarContext()
  return (
    <>
    {open && <Sidebar/>}
    <Navbar/>
    
    <UserView />

    </>
  )
}
