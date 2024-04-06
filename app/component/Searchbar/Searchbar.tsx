import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Searchbar = () => {
  return (
    <div className='h-[88px] w-[1216px] absolute top-[382px] left-[32px] gap-[120px] flex justify-between items-center'>
            <input name="Search" id="search" placeholder='Search' className='h-[88px] w-[921.37px] rounded-[60px] p-[32px] border-[#232323] border-2'></input>
            <div className='h-[36px] w-[174.63px] gap-[24px] flex'>
            <FaArrowRightLong className='rotate-45 w-[32px] h-[36px]'/>
            <div className=''>
            <button className='border-none flex h-[36px] w-[130px] Urbanist leading-[36.4px] text-[28px] text-[#232323] font-[600] tracking-[-1%]'>Browse All</button>
            </div>
            </div>
        </div>
  )
}

export default Searchbar
