import { useSidebarContext } from "@/contexts/SidebarContext";
import Image from "next/image";
import Link from "next/link";

const SidebarProfile = () => {
    const {open,setOpen} = useSidebarContext()
    return ( 
        <>
        <Link onClick={()=>{()=>setOpen(!open)}} href='/userpage'>
        <div className=' flex flex-col w-full hover:bg-[rgba(255,255,255,0.1)] items-center p-4 my-1 gap-2 cursor-pointer rounded-lg justify-start'>
        <img 
        alt="profile picture" 
        src={'https://f004.backblazeb2.com/file/vpad-dev/fc638574ae762d85f3254802f10aa927'}
        className='w-[50px] h-[50px] object-cover rounded-full'
        /* width={50}
        height={50} */
        />
        
      <p>{'Epic_username'}</p>
      <p className="text-sm">{'nickname'}</p>
    </div>
        </Link>
        </>
     );
}
 
export default SidebarProfile;