import React from 'react'
import Navigation from './component/Navigation/Navigation'
import Hero from './component/Hero/Hero'
import Footer from './component/Footer/Footer'

const page = () => {
  return (
    <div className='relative'>
      <Navigation/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default page
