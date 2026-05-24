import React from 'react'
import heroBg from "../../../assets/images/cm6.webp"
import Button from '../../../components/ui/Button'
import { FaAlignRight, FaArrowRightLong } from 'react-icons/fa6'
import { BsTelephoneInbound } from 'react-icons/bs'

function Hero() {
  return (
    
        <section className=' w-full  rounded-[50px]  overflow-hidden '>
<div style={{backgroundImage:`url(${heroBg})`}}  className='relative md:h-[450px] bg-cover  h-[350px]  bg-center '>
    <div className=' mx-auto max-w-7xl md:flex-row flex flex-col md:pb-12 h-full pt-24 md:items-end  justify-between items-start '>
    <div className=''>
        <h1 className='text-white text-6xl md:text-5xl  ms-15 mb-2 font-bold '>
Our Doctor
        </h1></div>
        <div className=' text-2xl md:text-sm text-gray-500 flex items-center gap-3 mt-2 md:mt-0  '>
   <a className='  text-white' href="#">Home 1 </a>
   <a className='text-white' href="#"><FaArrowRightLong /></a>
   <span className='text-yellow-300'>Our Doctor</span>

    </div>
    </div></div>

        <div className='flex flex-col gap-10 bg-white md:px-16 lg:flex-row py-8 px-6 '>
    <div className=' flex flex-col  max-w-7xl md:flex-row text-3xl mx-auto ms-10 justify-between items-start '>
        <p className='text-[#0A1A2E] text-sm md:text-base max-w-2xl text-center md:text-left'>
            Medicross Hopital Medical Center regularly receives letters of thanks from former patients or their family members for the high level of care we provide throughout our facility
        </p>
    </div>
    <div className='flex  items-center min-w-[280px] bg-transparent gap-4'>
        <div className=' rounded-full bg-[#0A1A2E] text-white p-4 shadow-md 
        flex items-center justify-center '><BsTelephoneInbound size={20}/></div>
    <div className=''>
        <p className='text-gray-500 text-xs uppercase tracking-wider font-medium'>
        Call Us When You Need Help</p>
        <h3 className='text-2xl md:texy-xl mt-0.5 font-simebold text-[#0A1A2E]'>Support 24/7:+1 800-123-1234</h3></div>
    </div>
</div>
        </section>
   
  )
}

export default Hero