import React from 'react'
import Rectangle from '../Rectangle/Rectangle'
import Searchbar from '../Searchbar/Searchbar'
import Card from '../Cards/Card'
import dynamic from "next/dynamic";


const Hero = () => {
    return (
        <>
        <div className='h-[174px] w-[1216px] text-[#12372A] absolute top-[176px] left-[32px] font-[700] text-[67px] Urbanist leading-[87.1px] tracking-[-2.5%]'>
            Discover the Perfect <br />
            Ringtone for Every Mood and Moment
        </div>
            <Rectangle image="/images/tamplate1.webp"/>
            <Searchbar/>
            <div className='h-[87px] w-[1216px] absolute top-[862px] left-[32px] font-[700] text-[67px] leading-[87.1px] tracking-[-2.5%] text-[#232323]'>
                Trending Now
            </div>
            <div className='h-[320px] w-[1215px] absolute top-[981px] left-[32px] gap-[24px] flex'>
                <Card image='/images/card1.webp'/>
                <Card image='/images/card2.webp'/>
                <Card image='/images/card3.webp'/>
            </div>
            <div className='h-[87px] w-[1216px] absolute top-[1421px] left-[32px] font-[700] text-[67px] leading-[87.1px] tracking-[-2.5%] text-[#232323]'>
                Popular Now
            </div>
            <div className='h-[320px] w-[1215px] absolute top-[1540px] left-[32px] gap-[24px] flex'>
            <Card image='/images/card4.webp'/> 
            <Card image='/images/card5.webp'/>
            <Card image='/images/card6.webp'/>
            </div>
            <div className='h-[320px] w-[1215px] absolute top-[1892px] left-[32px] gap-[24px] flex'>
            <Card image='/images/card7.webp'/>
            <Card image='/images/card8.webp'/>
            <Card image='/images/card9.webp'/>
            </div>
        </>
    )
}

export default Hero
