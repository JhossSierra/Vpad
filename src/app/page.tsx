'use client'
import SignInComponent1 from "@/components/auth/Signin1";
import Posts from "@/components/home/Posts";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { useSidebarContext } from "@/contexts/SidebarContext";
import { useState } from "react";

export default function Home() {

 

  const {open,setOpen} = useSidebarContext()
  const [activeModal, setActiveModal] = useState(false)

  function setCloseModalHandler(a:boolean){
    setActiveModal(a)
  }

  return (
    <main className="bg-[#0b0c0d]">
      {open && <Sidebar />}
      {activeModal==true&&<SignInComponent1 setActivemodal={setCloseModalHandler}/>}
      <Navbar setActivemodal={setCloseModalHandler}/>
      <Posts/>
    </main>
  );
}
