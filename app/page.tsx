import React from 'react'
import Navigation from './component/Navigation/Navigation'
import Hero from './component/Hero/Hero'

const page = () => {
  return (
    <div className='h-[100vh] w-[100%] bg-blue-100'>
      <Navigation/>
      <Hero/>
    </div>
  )
}

export default page
