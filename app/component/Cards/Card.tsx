import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";


interface Props{
    image:string
}

const Card = ({image}:Props) => {
    return (
        <div className='container rounded-4xl gap-2 overflow-hidden'>
            <Image src={image} alt='img1' layout='fixed' height={500} width={500} objectFit='cover' />
            <div className='w-full overflow-visible p-8 bg-black bg-opacity-[50%] border-t-4 border-black border-opacity-[10%]'></div>
        </div>
    )
}

export default Card