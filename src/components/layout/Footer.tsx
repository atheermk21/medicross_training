
import logo from "../../assets/images/logo.png"
import { BsTelephoneInbound } from 'react-icons/bs';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';
import { RiTelegram2Line } from 'react-icons/ri';
import { VscTwitter } from 'react-icons/vsc';
import { MdFacebook } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa6';
import { useState } from "react";


function Footer() {
  const[email,setEmail]=useState("");
  const[error,setError]=useState("");
  const[success,setSuccess]=useState("");
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     setError("");
     setSuccess("");
    {if (!email.trim())setError("Please enter your email")}
      return
    const emailRegex =/$^[^\s@]+@[^\s@]+\.[^s@]/
   {if(!emailRegex.test(email))
    setError("Invailed email address")}
    return
      setSuccess("Email submit successfully")
      setEmail("")}
    
   
  return (

    <footer className='  w-full  bg-[var(--color-bg)]  font-sans   '>
     
      
        <div className=" mx-auto  px-6   gap-10">
   <div className=' grid grid-cols-1 lg:grid-cols-3 py-20  '>

  <div className='mb-2  gap-2'>
    <img className='h-20 w-auto  '  src={logo} alt="logoFooter" />
  </div>
  <div className=' font-semibold  text-[var(--third-color)] '>
    <h1 className='text-white font-bold text-3xl '>Medicross Health Care center.</h1></div>
          </div>
           <div className='flex items-center justify-center  grid grid-cols-1 lg:grid-cols-3 gap-10 border border-white/10 rounded-xl'>
      <div className='backdrop-blur-xl  bg-whit/10   rounded-3xl p-8 shadow-2xl gap-10'>
        <h2 className=' text-3xl relative mb-8 text-[var(--color-text)]'>Contact With Us!</h2>
       <p> <span className='font-semibold  text-[var(--third-color)]'>Address: 511 SW 10th Ave 1206, Portland, OR United States</span></p>
       <p> <span className='font-semibold  text-[var(--third-color)] '>Support mail:  Medicrosshealth@gmail.com</span></p>
      <p><span className='font-semibold text-[var(--third-color)]'>Opening Hours: Mon -Sat: 7.00am – 19.00pm</span></p>
      <div className='flex gap-5 mt-5 w-full'>
        <div className='w-14 h-14 text-white rounded-full bg-white/10 flex items-center justify-center text-2xl'><BsTelephoneInbound /></div>
      <h3 className='text-2xl font-bold text-[var(--color-text)]'>Emergency 24h:+1 800-123-1234</h3></div>
      <div className='mt-8'><Button  to="/doctors"  className=" 
       bg-yellow-400 h-15 w-full rounded-xl font-medium hover:bg-yellow-300 transition " variant="primary"><span>Request An Appointment</span><FiArrowRight/></Button></div>
      </div>
     
      <div className='backdrop-blur-xl bg-whit/10  rounded-3xl p-8 shadow-2xl gap-10'>
      <h2 className='text-3xl mb-8 text-white'>Services Link</h2>
      <ul className='space-y-5 text-[var(--third-color)] flex flex-col'>
        <li className='font-semibold hover:text-yellow-500   text-[var(--third-color)]'>
          <a className='' href="http://Lung Diseases">Lung Diseases</a> 
          <span className='inline-block text-[var(--third-color)]w-0  
          mr-1 text-xs  '><FiArrowRight /></span></li>
         <li className='font-semibold hover:text-yellow-500    text-[var(--third-color)] '> 
           <a href="http://Or thopaedic">Or tho paedic</a>
             <span className='inline-block text-[var(--third-color)] w-0 
          mr-1 text-xs'><FiArrowRight /></span>
        </li>
          <li className='font-semibold hover:text-yellow-500  text-[var(--third-color)] '>
            <a href="http://Pharmacy">Pharmacy</a>  
            <span className='inline-block text-[var(--third-color)] w-0  
        mr-1 text-xs  '><FiArrowRight /></span></li>
           <li className='font-semibold hover:text-yellow-500  text-[var(--third-color)]  '>
            <a href="http://Heart">Heart</a><span className='inline-block text-[var(--third-color)] w-0  
          mr-1 text-xs  '><FiArrowRight /></span></li>
            <li className='font-semibold hover:text-yellow-500    text-[var(--third-color)] '>
              <a href="http://Dental Services">Dental Services</a>  <span className='inline-block text-[var(--third-color)] w-0  
          mr-1 text-xs  '><FiArrowRight /></span></li>
        </ul></div>
        <div className=' bg-whit/10  rounded-3xl  shadow-2xl gap-10'>
        <h2 className='text-3xl  mb-8 text-[var(--color-text)]'>Subscribe Newsletter</h2>
        <p className='font-semibold text-[var(--third-color)] '>Please sign up to follow the latest news and events from us, we promise not to spam your inbox.</p>
        <div className='flex  justify-between items-center'>
       <form className="w-full  " onSubmit={handleSubmit}>
        <div className="flex justify-between items-center ps-5 pe-5 w-full bg-white mt-10 border border-white/20 rounded-xl h-15
         outline-none text-[var(--fourth-color)] backdrop-blur-md"><input  onChange={(e)=>setEmail(e.target.value)} 
         value={email} type="email" name="email" className='w-50 ' required placeholder='*Email ...address' />
       <button className='  cursor-pointer' type="submit" ><FiArrowRight/></button></div>
       {error &&(
    <p className="mt-2 text-sm text-red-500">{error}</p>
       )}
       {success &&(
        <p className="mt-2 text-sm text-green-500"></p>
       )}
       </form></div>
      <div className='flex gap-4 mt-10'>
        <div className=' hover:bg-yellow-400 transition text-[var(--color-text)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="/home"><RiTelegram2Line /></a></div>
        <div className='hover:bg-yellow-400 transition text-[var(--color-text)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><VscTwitter /></a></div>
        <div className='hover:bg-yellow-400 transition text-[var(--color-text)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><MdFacebook /></a></div>
        <div className='hover:bg-yellow-400 transition text-[var(--color-text)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><FaInstagram /></a></div>
       </div> </div>
     </div>
        </div>
         <div className='   grid grid-cols-1 lg:grid-cols-3  mx-auto px-6 py-20 flex items-center justify-between gap-10 text-[var(--third-color)] gap-2 bg-white  '>
          <p>This is a sample website by Case-Themes 2026 - All Rights Reserved.</p>
  <div className="GAP-20">
    <a className="cursor-pointer">Sitemap</a>
    <a className="cursor-pointer"> Terms and Conditions  </a>
    <a className="cursor-pointer">Privacy Policy</a>
        <a className="cursor-pointer">  Manage Cookies</a>
  </div>
        </div>
    </footer>
  
  )
}

export default Footer
