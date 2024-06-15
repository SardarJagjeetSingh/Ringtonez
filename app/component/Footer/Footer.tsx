import React from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='px-5 pt-14 pb-5 '>
    <div className='container mx-auto flex justify-between text-black'>
      <div className='gap-12 flex text-lg font-normal leading-6 cursor-pointer'>
        <Link href={`/PrivacyPolicy`}>Privacy Policy</Link>
        <Link href={`/Disclaimer`}>Disclaimer</Link>
        <Link href={`/Contact`}>Contact</Link>
      </div>
      <div className='font-[300] text-lg leading-6'>
      © 2024 Ringtonez. All Rights Reserved. Design by Clousor Technologies
      </div>
    </div>
    </div>
  )
}

export default Footer

