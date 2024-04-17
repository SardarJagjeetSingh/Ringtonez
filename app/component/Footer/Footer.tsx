import React from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='w-[1216px] h-[48px] absolute top-[2272px] left-[33px] flex justify-between text-[#232323]'>
      <div className='h-[24px] w-[319px] gap-[48px] flex text-[16px] font-[400] leading-[24px] cursor-pointer'>
        <Link href={`/PrivacyPolicy`}>Privacy Policy</Link>
        <Link href={`/Disclaimer`}>Disclaimer</Link>
        <Link href={`/Contact`}>Contact</Link>
      </div>
      <div className='w-[492px] h-[24px] font-[300] text-[16px] leading-[24px]'>
      © 2024 Ringtonez. All Rights Reserved. Design by Clousor Technologies
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})

