import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Rectangle from '../Rectangle/Rectangle'

const Hero = () => {
    return (
        <>
        <div className='h-[174px] w-[1216px] text-[#12372A] absolute top-[176px] left-[32px] font-[700] text-[67px] Urbanist leading-[87.1px] tracking-[-2.5%]'>
            Discover the Perfect <br />
            Ringtone for Every Mood and Moment
        </div>
        <div className='h-[88px] w-[1216px] absolute top-[382px] left-[32px] gap-[120px] flex justify-between items-center '>
            <input name="Search" id="search" placeholder='Search' className='h-[88px] w-[921.37px] rounded-[60px] p-[32px] border-black border-solid border-2'></input>

            <div className='h-[36px] w-[174.63px] gap-[24px] flex font-lighter'>
            <FaArrowRightLong className='rotate-45 w-[32px] h-[36px]'/>
            <button className='flex h-[36px] w-[128px] Urbanist leading-[36.4px] text-[28px] text-[#232323] font-[600] tracking-[-1%]'>Browse All</button>
            </div>
        </div>
            <Rectangle/>
            <div className='h-[87px] w-[1216px] absolute top-[862px] left-[32px] font-[700] text-[67px] leading-[87.1px] tracking-[-2.5%]'>
                Trending Now
            </div>
        </>
    )
}

export default Hero
