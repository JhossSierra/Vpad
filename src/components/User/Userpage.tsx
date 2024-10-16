'use_client'
import { UserProfile }from '@/types/Util';
import Input from '../ui/Input';
import { Button } from '../ui/Button';
import { useState } from 'react';

let mockUser: UserProfile = {
    token:'',
    username: '',
    nickname: '',
    email: '',
    profilePhotoUrl: '',
    about: '',
    contact: '',
    admin: false,
}


const UserView = (/* UserProfile:UserProfile */) => {
    const [isEditEnable,setEditEnable]= useState(false)
    return(
    <>
    
    <div className=' bg-[#000] h-screen w-full'>

    <div className='mx-auto min-h-screen bg-[#0b0c0d] pt-[100px] w-full px-10 '>

    

    <div className='bg-zinc-800 p-5 rounded-3xl h-fit mx-auto max-w-[1200px]'>
        <div className='w-full h-full flex flex-col justify-start ml-6'>

        <img src='https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84' className='bg-lime-600 w-[200px] h-[200px] object-cover rounded-full'/>
        
        </div>

        <div className='flex flex-col items-end p-6 h-[fit-content] rounded-lg'>
            
            <Input disabled={!isEditEnable}
            defaultValue='SuperCoolName'
              label='Username:'
              placeholder='Enter your desired username'
            />
            <Input disabled={!isEditEnable}
              defaultValue='SuperCoolNickName'
              label='Nickname:'
              placeholder='Enter your nickname'
              labelClassName='mt-[20px]'
            />
            <Input disabled={!isEditEnable}
              label='Email:'
              placeholder='Email Address'
              labelClassName='mt-[20px]'
            />
            <Input disabled={!isEditEnable}
              label='Password:'
              type='password'
              labelClassName='mt-[20px]'
            />

            <label
            className='w-full mt-[20px]'
            htmlFor="about">
                <p className='text-[.9rem] mt-1'>About:</p>

                <textarea disabled={!isEditEnable}
                placeholder='Say something about yourself...'
                className='h-[100px] w-full bg-[#1b1d1e] p-2 placeholder:text-[.9rem] placeholder:text-[#667085] outline-none border-none rounded-lg '
                name="" id="about">
                </textarea>
            </label>
            
            <div className='flex gap-2'>
            { isEditEnable && <>  <Button type='submit'
            className='flex items-center justify-center w-[100px] text-center mt-1 bg-[#4c9bd4] hover:opacity-[0.9] p-2 text-[1.1rem] rounded-lg'>
              Update
            </Button> <Button type='submit' onClick ={()=>setEditEnable(false)}
            className='flex items-center justify-center w-[100px] text-center mt-1 bg-[#ff6565] hover:opacity-[0.9] p-2 text-[1.1rem] rounded-lg'>
              Cancel
            </Button></>}
            
            {!isEditEnable &&<Button type='submit' onClick={()=>setEditEnable(true)}
            className='flex items-center justify-center w-[100px] text-center mt-1 bg-[#4c9bd4] hover:opacity-[0.9] p-2 text-[1.1rem] rounded-lg'>
              Edit
            </Button>}
              </div>

        </div>
        

    </div>
    </div>

    </div>
    
    </>

    )  
    ;
}
 
export default UserView;