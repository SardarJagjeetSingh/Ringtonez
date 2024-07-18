import Link from 'next/link'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import dynamic from "next/dynamic";

const Navigation = () => {
  return (
    <div className='py-6 pt-8 px-5 '>
      <div className='container mx-auto flex justify-between items-center text-black'>
        <div className='w-full Urbanist font-bold text-xl leading-[24px]'>
          <Link href={`/`} className='hover:font-bold'>Ringtonez</Link>
        </div>
        <div className=' flex justify-center items-center text-xl leading-5 gap-12'>
          <Link href={`/`} className='hover:font-bold'>Home</Link>
          <Link href={`/Ringtone`} className='hover:font-bold'>Ringtonz</Link>
          <Link href={`/About`} className='hover:font-bold'>About</Link>
          <Link href={`/Contact`} className='hover:font-bold'>Contact</Link>
        </div>
        <div className='w-full gap-3 flex justify-end items-center'>
          <Link href={`https://www.youtube.com/@MindfulMasters2`} target='_blank' className='hover:font-bold'><FaYoutube /></Link>
          <Link href={`https://www.youtube.com/@MindfulMasters2`} target='_blank' className='hover:font-bold'><FaInstagram /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation

