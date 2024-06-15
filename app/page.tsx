import React from 'react'
import dynamic from "next/dynamic";
import Home from './Home/page';


const page = () => {
  return (
      <Home/>
  )
}

export default dynamic (() => Promise.resolve(page), {ssr: false})
