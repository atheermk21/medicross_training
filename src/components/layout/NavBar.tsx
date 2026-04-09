import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ROUTES } from "../../constants/router";
import logo from "../../assets/images/logo-d.png"
import{FaAlignRight, FaArrowRight} from "react-icons/fa";
import { IoChevronDownOutline, IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


function NavBar() {
    const [isMenuOpen,setMenuOpen] = useState(false);
    const handleMenuClick = () =>{
      setMenuOpen(!isMenuOpen);
    }
  
  return (
    <nav className=" bg-[#0f2a44]  px-10 py-4">
    
      <div className="container bg-[#0f2a44]  mx-auto flex justify-between items-center p-4">
     <div className=" flex-shrink-0  flex items-center gap-2 flex h-11 text-white" > <img className="h-10 w-auto" src={logo}  alt="logo" /></div>
     
      <div className="hidden md:flex items-center justify-center  bg-white/10 front-medium rounded-xl h-15 w-250 text-white">
      <ul className="hidden md:flex gap-6 front-semibold ml-20" >
     <li><Link to="/" className="flex items-center gap-1 transition-colors">Home <IoChevronDownOutline/></Link></li>
      <li><Link to="/" className="flex items-center gap-1 transition-colors">About <IoChevronDownOutline/></Link></li>
      <li><Link to="/" className="flex items-center gap-1 transition-colors">Services <IoChevronDownOutline/></Link></li>
      <li><Link to="/" className="flex items-center gap-1 transition-colors">Doctors <IoChevronDownOutline/></Link></li>
      <li><Link to="/" className="flex items-center gap-1 transition-colors">Contact <IoChevronDownOutline/></Link></li>
      </ul>
      <span className="cursor-pointer flex items-center gap-2 mr-75"></span><IoSearchSharp/></div>
     <Button  to="/doctors" children="Book An Appointment" className="items-center  justify-center hidden 
      md:block bg-yellow-400 text-[black] px-5 py-2  h-15 rounded-xl front-medium hover:bg-yellow-300 transition " variant="primary"></Button>

    <button className=" md:hidden bg-yellow 400 text-white" onClick={handleMenuClick}>
      <FaAlignRight/>
    </button>
  {isMenuOpen &&(
    <div className="fixed inset-0 z-50 bg-[white] flex flex-col p-6 md:hidden">
      <div className="flex justify-end">
        <button onClick={handleMenuClick} className="text-2xl text-gray-600"><IoMdClose />
</button>
      </div>
      <div className="flex justify-center mb-8"><img src={logo} alt="logo" /></div>
      <div className="relative mb-8">
        <div className=" flex justify-between py-3 px-4 rounded-full w-full outline-none text-gray-700  bg-gray-100 mb-5">
        <input type="text" placeholder="Search" 
       /><IoSearchSharp className="outline-none"/></div>
        
      <ul className="flex flex-col gap-6 w-full text-gray-800 front-bold">
      <li className="flex justify-between items-center border-bp-2"><Link to="/" className="flex items-center gap-1 transition-colors" >Home <IoChevronDownOutline/></Link></li>
      <li className="flex justify-between items-center border-bp-2"><Link to="/" className="flex items-center gap-1 transition-colors">About <IoChevronDownOutline/></Link></li>
      <li className="flex justify-between items-center border-bp-2"><Link to="/" className="flex items-center gap-1 transition-colors">Services <IoChevronDownOutline/></Link></li>
      <li className="flex justify-between items-center border-bp-2"><Link to="/" className="flex items-center gap-1 transition-colors">Doctors <IoChevronDownOutline/></Link></li>
      <li className="flex justify-between items-center border-bp-2"><Link to="/" className="flex items-center gap-1 transition-colors">Contact <IoChevronDownOutline/></Link></li>
      </ul>
      <button className="bg-yellow-400 text-black px-5 py-2 rounded-full">Book An Appointment</button></div>
    </div>
  )}
    </div></nav>
   
  );
}

export default NavBar;
