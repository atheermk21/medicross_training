import  { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ROUTES } from "../../constants/router";
import logo from "../../assets/images/logo.png"
import logo2 from "../../assets/images/logo-d.png"
import{FaAlignRight} from "react-icons/fa";
import { IoChevronDownOutline, IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";


function NavBar() {
    const [search, setSearch]=useState("");
    const [isMenuOpen,setMenuOpen] = useState(false);
    const handleMenuClick = () =>{
      setMenuOpen(!isMenuOpen);
    }
  
  return (
    <nav className="sticky   bg-[var(--color-bg)]    py-8 flex justify-between items-center">
    
      <div className="container gap-3  mx-auto flex justify-between items-center p-4">
   
     <div className=" flex-shrink-0  flex items-center gap-10 flex h-11 text-[var(--color-text)]" > <img className="h-12 w-auto" src={logo}  alt="logo" /></div>
     
      <div className="hidden md:flex items-center justify-center  bg-white/10 font-medium rounded-2xl h-18 w-250 text-[var(--color-text)]">
      <ul className="hidden md:flex gap-6 font-semibold ml-20" >
     <li><Link to={ROUTES.HOME} className="flex items-center gap-1 transition-colors">Home <IoChevronDownOutline/></Link></li>
      <li><Link to={ROUTES.ABOUT} className="flex items-center gap-1 transition-colors">About <IoChevronDownOutline/></Link></li>
      <li><Link to={ROUTES.SERVICES} className="flex items-center gap-1 transition-colors">Services <IoChevronDownOutline/></Link></li>
      <li><Link to={ROUTES.DOCTORS} className="flex items-center gap-1 transition-colors">Doctors <IoChevronDownOutline/></Link></li>
      <li><Link to={ROUTES.CONTACT} className="flex items-center gap-1 transition-colors">Contact <IoChevronDownOutline/></Link></li>
      </ul>
      <span className="cursor-pointer flex items-center gap-2 mr-75"></span><IoSearchSharp/> </div>
          <div className="hidden md:flex">
<Button  to="/doctors"  className=" 
       bg-[var(--primary-color)] h-15 rounded-xl font-medium hover:bg-yellow-300 " variant="primary"><span>Book An Appointment</span><FiArrowRight/></Button>
      </div></div>
    <button className=" md:hidden  " onClick={handleMenuClick}>
      <FaAlignRight/>
    </button>
  {isMenuOpen &&(
    <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 md:hidden">
      <div className="flex justify-between">
        <button onClick={handleMenuClick} className="text-2xl "><IoMdClose />
</button>
      </div>
      <div className="flex justify-center mb-8 "><img src={logo2} alt="logo" /></div>
      <div className="relative mb-8 ">
        <div className=" flex justify-between py-3 px-4 rounded-full w-full outline-none  mb-5">
        <input className="w-full  py3 px-4 rounded-lg" type="text" placeholder="Search..."  value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button><IoSearchSharp className="outline-none text-gray-700"/></button></div>
        
      <ul className="flex flex-col  gap-6 w-full  font-bold">
      <div><li ><Link onClick={handleMenuClick} to={ROUTES.HOME} className=" flex items-center justify-between gap-1 transition-colors" >Home <IoChevronDownOutline/></Link></li></div>
       <div ><li ><Link onClick={handleMenuClick} to={ROUTES.ABOUT} className="flex items-center justify-between  gap-1 transition-colors">About <IoChevronDownOutline/></Link></li></div>
       <div><li ><Link onClick={handleMenuClick} to={ROUTES.SERVICES} className="flex items-center justify-between  gap-1 transition-colors">Services <IoChevronDownOutline/></Link></li></div>
       <div><li ><Link onClick={handleMenuClick} to={ROUTES.DOCTORS} className="flex items-center justify-between  gap-1 transition-colors">Doctors <IoChevronDownOutline/></Link></li></div>
       <div><li ><Link onClick={handleMenuClick} to={ROUTES.CONTACT} className="flex items-center justify-between  gap-1 transition-colors">Contact <IoChevronDownOutline/></Link></li></div>
      </ul>
      </div>
    </div>
  )}
 </nav>
   
  );
}

export default NavBar;
