import React from 'react'
import Rectangle from '../Rectangle/Rectangle'
import Searchbar from '../Searchbar/Searchbar'
import Card from '../Cards/Card'

const Hero = () => {
    return (
        <>
        <div className='h-[174px] w-[1216px] text-[#12372A] absolute top-[176px] left-[32px] font-[700] text-[67px] Urbanist leading-[87.1px] tracking-[-2.5%]'>
            Discover the Perfect <br />
            Ringtone for Every Mood and Moment
        </div>
            <Rectangle image='/images/tamplate1.png'/>
            <Searchbar/>
            <div className='h-[87px] w-[1216px] absolute top-[862px] left-[32px] font-[700] text-[67px] leading-[87.1px] tracking-[-2.5%] text-[#232323]'>
                Trending Now
            </div>
            <div className='h-[320px] w-[1215px] absolute top-[981px] left-[32px] gap-[24px] flex'>
                <Card image='/images/card1.png'/>
                <Card image='/images/card2.png'/>
                <Card image='/images/card3.png'/>
            </div>
            <div className='h-[87px] w-[1216px] absolute top-[1421px] left-[32px] font-[700] text-[67px] leading-[87.1px] tracking-[-2.5%] text-[#232323]'>
                Popular Now
            </div>
            <div className='h-[320px] w-[1215px] absolute top-[1540px] left-[32px] gap-[24px] flex'>
            <Card image='/images/card4.png'/> 
            <Card image='/images/card5.png'/>
            <Card image='/images/card6.png'/>
            </div>
            <div className='h-[320px] w-[1215px] absolute top-[1892px] left-[32px] gap-[24px] flex'>
            <Card image='/images/card7.png'/>
            <Card image='/images/card8.png'/>
            <Card image='/images/card9.png'/>
            </div>
        </>
    )
}

export default Hero
