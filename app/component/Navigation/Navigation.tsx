import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Navigation = () => {
  return (
    <div className='h-[24px] w-[1216px] relative top-[32px] left-[32px] flex justify-between items-center text-[#232323]'>
      <div className='h-[24px] w-[103px] Urbanist font-[700] text-[16px] leading-[24px]'>Ringtonez</div>
      <div className='h-[24px] w-[355px] flex justify-between items-center text-[16px] leading-[24px] gap-[48px]'>
        <Link href={`/`} className='hover:font-[700]'>Home</Link>
        <Link href={`/`} className='hover:font-[700]'>Ringtonz</Link>
        <Link href={`/`} className='hover:font-[700]'>About</Link>
        <Link href={`/`} className='hover:font-[700]'>Contact</Link>
      </div>
      <div className='h-[24px] w-[56.88px] gap-[10px] flex items-center'>
        <FaYoutube/>
        <FaInstagram/>
      </div>
    </div>
  )
}

export default Navigation
