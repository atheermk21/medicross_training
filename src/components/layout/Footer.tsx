
import logo from "../../assets/images/logo.png"
import { BsBell, BsTelephoneInbound } from 'react-icons/bs';
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

    <footer className=' py-10   bg-[var(--bg-primary)]     '>
     
      
        <div className=" max-w-7xl mx-auto px-5 md:px-10 lg:px-20 ">
   <div className=' flex flex-col lg:flex-row  justify-between gap-8 py-20  gap-12  '>
  <div className='  '>
    <img className='h-13 w-auto  '  src={logo} alt="logoFooter" />
  </div>
  <div className=' font-semibold  text-[var(--text-primary)]  '>
    <h1 className=' font-bold  text-3xl '>Medicross Health Care center.</h1></div>
          </div>
           <div className=' border-t border-white/10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-16 gap-12 '>
      <div className=' spacy-y-6'>
        <h2 className=' text-3xl  mb-8 text-[var(--text-primary)]'>Contact With Us!</h2>
       <p> <span className='font-semibold  text-[var(--text-secondary)]'>Address: 511 SW 10th Ave 1206, Portland, OR United States</span></p>
       <p> <span className='font-semibold  text-[var(--text-secondary)] '>Support mail:  Medicrosshealth@gmail.com</span></p>
      <p><span className='font-semibold text-[var(--text-secondary)]'>Opening Hours: Mon -Sat: 7.00am – 19.00pm</span></p>
      <div className='flex gap-5 mt-5 '>
        <div className=" shrink-0 flex items-center justify-center w-13 h-13 rounded-full bg-white/10" ><BsTelephoneInbound size={20} className=' text-2xl text-[var(--text-primary)]   '/></div>
      <h3 className='text-2xl font-bold text-[var(--text-primary)]'>Emergency 24h:+1 800-123-1234</h3></div>
      <div className='mt-8'><Button  to="/doctors"  className=" 
       bg-[var(--color-primary)] h-15 w-full rounded-xl font-medium hover:bg-yellow-300 transition " variant="primary"><span>Request An Appointment</span><FiArrowRight/></Button></div>
      </div>
     
      <div className='spacy-y-6'>
      <h2 className='text-3xl  mb-8 text-[var(--text-primary)] '>Services Link</h2>
      <ul className='gap-5 text-[var(--third-color)] flex flex-col'>
        <li className='font-semibold hover:text-yellow-500   text-[var(--text-secondary)]'>
          <a className='' href="http://Lung Diseases">Lung Diseases</a> 
          <span className='inline-block text-[var(--third-color)] 
          mr-1 text-xs  '><FiArrowRight /></span></li>
         <li className='font-semibold hover:text-yellow-500    text-[var(--text-secondary)] '> 
           <a href="http://Or thopaedic">Or tho paedic</a>
             <span className='inline-block text-[var(--third-color)]  
          mr-1 text-xs'><FiArrowRight /></span>
        </li>
          <li className='font-semibold hover:text-yellow-500  text-[var(--text-secondary)] '>
            <a href="http://Pharmacy">Pharmacy</a>  
            <span className='inline-block text-[var(--third-color)]  
        mr-1 text-xs  '><FiArrowRight /></span></li>
           <li className='font-semibold hover:text-yellow-500  text-[var(--text-secondary)]  '>
            <a href="http://Heart">Heart</a><span className='inline-block text-[var(--text-secondary)]  
          mr-1 text-xs  '><FiArrowRight /></span></li>
            <li className='font-semibold hover:text-yellow-500    text-[var(--text-secondary)] '>
              <a href="http://Dental Services">Dental Services</a>  <span className='inline-block text-[var(--text-secondary)]  
          mr-1 text-xs  '><FiArrowRight /></span></li>
        </ul></div>
        <div className=' spacy-y-6 '>
        <h2 className='text-3xl  mb-8 text-[var(--text-primary)]'>Subscribe Newsletter</h2>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center shrink-0 w-10 h-10 text-[var(--text-primary)] rounded-full bg-white/10"><BsBell size={20} /></div>
        <p className='font-semibold text-[var(--text-secondary)] '>Please sign up to follow the latest news and events from us,
         we promise not to spam your inbox.</p></div>
        <div className='flex  justify-between items-center'>
       <form className="w-full mt-8 " onSubmit={handleSubmit}>
        <div className="flex justify-between items-center ps-5 pe-5 w-full bg-white mt-10 border border-white/20 rounded-xl h-15
         outline-none text-[var(--fourth-color)] backdrop-blur-md"><input  onChange={(e)=>setEmail(e.target.value)} 
         value={email} type="email" name="email" className=' ' required placeholder='*Email ...address' />
       <button className='  cursor-pointer' type="submit" ><FiArrowRight/></button></div>
       {error &&(
    <p className="mt-2 text-sm text-red-500">{error}</p>
       )}
       {success &&(
        <p className="mt-2 text-sm text-green-500"></p>
       )}
       </form></div>
      <div className='flex gap-4 mt-10'>
        <div className=' hover:bg-yellow-400 transition text-[var(--text-primary)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="/home"><RiTelegram2Line /></a></div>
        <div className='hover:bg-yellow-400 transition text-[var(--text-primary)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><VscTwitter /></a></div>
        <div className='hover:bg-yellow-400 transition text-[var(--text-primary)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><MdFacebook /></a></div>
        <div className='hover:bg-yellow-400 transition text-[var(--text-primary)] cursor-pointer w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl'><a href="http://"><FaInstagram /></a></div>
       </div> </div>
     </div>
        </div>
  
    </footer>
  
  )
}

export default Footer
