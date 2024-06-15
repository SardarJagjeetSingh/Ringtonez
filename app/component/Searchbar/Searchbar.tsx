import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import dynamic from "next/dynamic";


const Searchbar = () => {
  return (
    <div className="py-8">
      <div className='container mx-auto gap-28 justify-between items-center grid grid-cols-10'>
        <input name="Search" id="search" placeholder='Search' className='col-span-7 rounded-full p-[32px] border-black border-2'></input>
        <div className='col-span-3 gap-6 flex justify-end items-center'>
          <FaArrowRightLong className='rotate-45 w-fit h-full' />
          <div className=''>
            <button className='w-full border-none flex Urbanist leading-7 text-2xl text-[#232323] font-[600] tracking-[-1%]'>Browse All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
