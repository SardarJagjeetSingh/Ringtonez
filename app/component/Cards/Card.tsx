import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";


interface Props{
    image:string
}

const Card = ({image}:Props) => {
    return (
        <div className='h-[320px] w-[389px] rounded-[32px] gap-[8px] overflow-hidden'>
            <Image src={image} alt='img1' layout='fixed' height={500} width={500} objectFit='cover' />
            <div className='h-[127px] w-[389px] overflow-visible p-[32px] bg-[#232323] bg-opacity-[50%] border-t-[4px] border-[#000000] border-opacity-[10%] '></div>
        </div>
    )
}

export default Card