import React, { useState } from 'react'
import { Link, } from "react-router-dom";
import { ROUTES } from "../../constants/router";
import logo from "../../assets/images/logo.png"
import { BsTelephoneInbound } from 'react-icons/bs';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';
import { RiTelegram2Line } from 'react-icons/ri';
import { VscTwitter } from 'react-icons/vsc';
import { MdFacebook } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa6';
import useAppointment from '../../features/appointments/components/hooks/useAppointment';

function Footer() {
  const {form,handleChange,handleSubmit}=useAppointment()
  return (

    <footer className=' relative min-h-screen bg-[#071426] font-sans  overflow-hidden '>
     
      <div className=' absolute inset-0 bg-cover bg-center'>
          <div className=' z-10 mx-auto px-6 py-20 flex justify-between '>

  <div className='mb-2  gap-2'>
    <img className='h-20 w-auto ms-20 '  src={logo} alt="logoFooter" />
  </div>
  <div className='ms-150 md:text-3xl font-semibold  text-gray-200 '>
    <h1 className='text-white font-bold text-3xl '>Medicross Health Care center.</h1></div>
          </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-10 border border-white/10 rounded-xl'>
      <div className='backdrop-blur-xl  bg-whit/10   rounded-3xl p-8 shadow-2xl gap-10'>
        <h2 className=' text-3xl relative mb-8 text-white'>Contact With Us!</h2>
       <p> <span className='font-semibold   text-[#68747a]'>Address: 511 SW 10th Ave 1206, Portland, OR United States</span></p>
       <p> <span className='font-semibold  text-[#68747a] '>Support mail:  Medicrosshealth@gmail.com</span></p>
      <p><span className='font-semibold text-[#68747a]'>Opening Hours: Mon -Sat: 7.00am – 19.00pm</span></p>
      <div className='flex gap-5 mt-5 w-full'>
        <div className='w-14 h-14 text-white rounded-full bg-white/10 flex items-center justify-center text-2xl'><BsTelephoneInbound /></div>
      <h3 className='text-2xl font-bold text-white'>Emergency 24h:+1 800-123-1234</h3></div>
      <div className='mt-8'><Button  to="/doctors"  className=" 
       bg-yellow-400 h-15 rounded-xl font-medium hover:bg-yellow-300 transition " variant="primary"><span>Request An Appointment</span><FiArrowRight/></Button></div>
      </div>
     
      <div className='backdrop-blur-xl bg-whit/10  rounded-3xl p-8 shadow-2xl gap-10'>
      <h2 className='text-3xl mb-8 text-white'>Services Link</h2>
      <ul className='space-y-5 text-gray-300 flex flex-col'>
        <li className='font-semibold hover:text-yellow-500 transition-all duration-300 ease-in-out  hover-transalte-x-2   text-[#68747a] '>
          <a className='' href="http://Lung Diseases">Lung Diseases</a> <span className='inline-block text-gray-300 w-0 opacity-0 -translate-x-2 transition-all
         group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-1 text-xs duration-300 ease-in-out '><FiArrowRight /></span></li>
         <li className='font-semibold hover:text-yellow-500 transition-all duration-300 ease-in-out  hover-transalte-x-2  text-[#68747a] '> 
           <a href="http://Or thopaedic">Or tho paedic</a>  <span className='inline-block text-gray-300 w-0 opacity-0 -translate-x-2 transition-all
         group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-1 text-xs duration-300 ease-in-out '><FiArrowRight /></span>
        </li>
          <li className='font-semibold hover:text-yellow-500 transition-all duration-300 ease-in-out  hover-transalte-x-2  text-[#68747a] '>
            <a href="http://Pharmacy">Pharmacy</a>  <span className='inline-block text-gray-300 w-0 opacity-0 -translate-x-2 transition-all
         group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-1 text-xs duration-300 ease-in-out '><FiArrowRight /></span></li>
           <li className='font-semibold hover:text-yellow-500 transition-all duration-300 ease-in-out  hover-transalte-x-2  text-[#68747a] '>
            <a href="http://Heart">Heart</a>  <FiArrowRight className='inline-block text-gray-300 w-0 opacity-0 -translate-x-2 transition-all
         group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-1 text-xs duration-300 ease-in-out ' /></li>
            <li className='font-semibold hover:text-yellow-500 transition-all duration-300 ease-in-out  hover-transalte-x-2  text-[#68747a] '>
              <a href="http://Dental Services">Dental Services</a>  <span className=' text-gray-300 w-0 opacity-0 -translate-x-2 transition-all
         group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 mr-1 text-xs duration-300 ease-in-out '><FiArrowRight /></span></li>
        </ul></div>
        <div className='backdrop-blur-xl bg-whit/10  rounded-3xl p-8 shadow-2xl gap-10'>
        <h2 className='text-3xl  mb-8 text-white'>Subscribe Newsletter</h2>
        <p className='font-semibold  text-[#68747a] '>Please sign up to follow the latest news and events from us, we promise not to spam your inbox.</p>
        <div className='flex  justify-between items-center'>
         <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange}  value={form.email} type="email" name="email" className='w-full bg-white mt-10 border border-white/20 rounded-2xl py-4 px-5 outline-none placeholder:text-gray-400 backdrop-blur-md' required placeholder='Email ...address' />
       <Button className=''  type="submit" variant="secondary"><FiArrowRight/></Button></form></div>
      <div className='flex gap-4 mt-10'>
        <div className=' hover:bg-yellow-400 transition text-white cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="/home"><RiTelegram2Line /></a></div>
        <div className='hover:bg-yellow-400 transition text-white cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><VscTwitter /></a></div>
        <div className='hover:bg-yellow-400 transition text-white cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><MdFacebook /></a></div>
        <div className='hover:bg-yellow-400 transition  text-white cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><FaInstagram /></a></div>
       </div> </div>
     </div>
     <div className='border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2 bg-white  '>
          <p>2026 Medicross. All Rights Reserved.</p>
         <p>Buy on <span className='text-gray-500 font-semibold'>envato</span></p>
        </div>
        </div>
    </footer>
  
  )
}

export default Footer
