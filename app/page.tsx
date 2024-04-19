import React from 'react'
import dynamic from "next/dynamic";
import Home from './Home/page';


const page = () => {
  return (
    <div className='relative'>
      <Home/>
    </div>
  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
