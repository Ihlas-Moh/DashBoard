import { Search } from 'lucide-react';
import React from 'react'
import { AiFillCode } from 'react-icons/ai';
import { FaUser } from "react-icons/fa";


export default function NavBar() {
  return (
    <div className='flex gap-4' >
       
       <div className=' gap-[51rem] items-center flex'>
        <div className="flex items-center relative ">
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full p-2 rounded bg-white focus:outline-none ml-5"
      />
      <Search className='absolute h-5  text-gray-400 items-center'/>
       </div>
        <div className='flex items-center gap-4'>
          <img src="/profile.jpg"  alt="jpg" className='rounded-full h-10 w-10 bg-cover bg-center'/>Angry Bird
          <FaUser className='h-6 w-6'/>
          <AiFillCode className='h-6 w-6'/>
        </div>
        </div>
    </div>
  )
}
