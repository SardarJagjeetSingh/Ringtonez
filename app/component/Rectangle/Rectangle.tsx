import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";


interface Props{
  image : string;
}

const Rectangle = ({image}:Props) => {
  return (
    <div className='container h-60 rounded-4xl overflow-hidden'>
      <Image src={image} alt='img1' height={10} width={1500} layout='fixed' objectFit='cover'/>
    </div>
  )
}

export default Rectangle
