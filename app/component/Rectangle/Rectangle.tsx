import Image from 'next/image'
import React from 'react'
import img from '@/public/Images/tamplate1.png'

interface Props{
  image : string;
}

const Rectangle = ({image}:Props) => {
  return (
    <div className='h-[240px] w-[1217px] absolute top-[502px] left-[32px] rounded-[32px] overflow-hidden '>
      <Image src={image} alt='img1' layout='fill' objectFit='cover'/>
    </div>
  )
}

export default Rectangle
