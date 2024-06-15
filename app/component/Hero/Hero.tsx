import React from 'react'
import Rectangle from '../Rectangle/Rectangle'
import Searchbar from '../Searchbar/Searchbar'
import Card from '../Cards/Card'
import dynamic from "next/dynamic";


const Hero = () => {
    return (
        <div className="px-5 pt-32">
            <div className='container mx-auto'>
                <div className=' text-black font-bold text-6xl Urbanist leading-[87.1px] tracking-[-2.5%]'>
                    Discover the Perfect <br />
                    Ringtone for Every Mood and Moment
                </div>
                <Searchbar />
                <Rectangle image="/images/tamplate1.webp" />
                <div className='font-bold text-6xl pt-28 leading-relaxed text-black'>
                    Trending Now
                </div>
                <div className='w-full gap-[24px] flex'>
                    <Card image='/images/card1.webp' />
                    <Card image='/images/card2.webp' />
                    <Card image='/images/card3.webp' />
                </div>
                <div className='font-bold text-6xl pt-28 leading-relaxed text-black'>
                    Popular Now
                </div>
                <div className='gap-6'>
                    <div className='w-full gap-6 flex'>
                        <Card image='/images/card4.webp' />
                        <Card image='/images/card5.webp' />
                        <Card image='/images/card6.webp' />
                    </div>
                    <div className='w-full gap-6 flex'>
                        <Card image='/images/card7.webp' />
                        <Card image='/images/card8.webp' />
                        <Card image='/images/card9.webp' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
