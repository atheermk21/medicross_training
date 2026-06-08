import React from 'react'
import { useDoctorFilter } from '../hooks/useDoctorFilter'
import Card from '../../../components/ui/Card'
import img1 from "../../../assets/images/dt2.webp"
import img2 from"../../../assets/images/dt3.webp"
import img3 from "../../../assets/images/dt4.webp"
import img4 from "../../../assets/images/dt5.webp"
import img5 from "../../../assets/images/dt6.webp"
import img6 from "../../../assets/images/dt7.webp"
import img7 from "../../../assets/images/dt8.webp"
import img8 from "../../../assets/images/dt9.webp"
import img9 from "../../../assets/images/dt10.webp"
import img10 from "../../../assets/images/dt11.webp"
import img11 from "../../../assets/images/dt12.webp"
import img12 from "../../../assets/images/dt13.webp"
import { FiArrowRight } from 'react-icons/fi'
import { FaHeartbeat } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
const doctors =[
  {
    id :1,
    name:"Dr. Julia Stuard",
    specialty:"Anesthesiologist",
    department:"Internal Medicine Department",
    image:img1
  },
  {
    id :2,
    name:"Dr. Tom Kenneth",
    specialty:"Gynecologic Oncologist",
    department:"Internal Medicine Department",
    image:img2
  },
  {
    id :3,
    name:"Dr. Olivia Addison",
    specialty:"Anesthesiologist",
    department:"Internal Medicine Department",
    image:img3
  },
  {
    id :4,
    name:"Dr. Margery Nixon",
    specialty:"Psychiatry",
    department:"Internal Medicine Department",
    image:img4
  },
  {
    id :5,
    name:"Dr. Jacob Moore",
    specialty:"Neurology Specialist",
    department:"Neurology Department ",
    image:img5
  },
  {
    id :6,
    name:"Dr. Andy Jeffrey",
    specialty:"Rehabilitation Specialist",
    department:"Neurology Department ",
    image:img6
  },

  {
    id :7,
    name:"Dr. Sophia Mandy",
    specialty:"Anesthesiologist",
    department:"Neurology Department ",
    image:img7
  },

  {
    id :8,
    name:"Dr . sone Doe",
    specialty:"Behavioral Pediatric",
    department:"Neurology Department ",
    image:img8
  },

  {
    id :9,
    name:"Dr. Alphonso Hamilton",
    specialty:"Dermatologist",
    department:"Surgical Department",
    image:img9
  },

  {
    id :10,
    name:"Dr. Gavin Bernard",
    specialty:"Rehabilitation Specialist",
    department:"Surgical Department",
    image:img10
  },

  {
    id :11,
    name:"Dr. Gilberto Stevens",
    specialty:"Anesthesiologist",
    department:"Surgical Department",
    image:img11
  },
{
    id :12,
    name:"Dr. Meredith Combs",
    specialty:"Behavioral Pediatric",
    department:"Surgical Department",
    image:img12
  },


]

function AboutDoctor() {
  const { search,

      setSearch,
      setSelect,
      filteredDoctors,
      displayedDoctors,
      visibleCards,
      handeleShowMore
}=useDoctorFilter(doctors)

  return (
    
    <div className='py-24 px-6 bg-white ' >
        <div className='text-center '>

          <p className='text-gray-500 text-1xl'>People who are Always Dedicated to your Health</p>
            <h1 className='text-4xl font-bold mt-5'>Meet Our Doctors Medicross</h1>
           <p className='text-gray-500 text-1xl mt-5'>From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times.</p>
        </div>
        <div className='max-w-5xl mx-auto mt-14 grid md:grid-cols-2 gap-6 flex items-center justify-center'>
      
      <select className=' h-15 text-gray-500  rounded-2xl border border-gray-200 px-5' onChange={(e)=>setSelect(e.target.value)} name="S" id="">
      <option  value="">Filter All Departments</option>
      <option  value="Internal Medicine Department">Internal Medicine Department</option>
      <option value="Neurology Department ">Neurology Department </option>
      <option value="Surgical Department">Surgical Department </option>
      </select>
      <form action="">
      <input className='h-15 rounded-2xl border border-gray-200 px-5' placeholder='Search' type="text" 
      value={search} onChange={(e)=>setSearch(e.target.value)} />
      <button></button></form>
     </div>
      <div className='max-w-7xl  mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      {displayedDoctors.map((doctor) =>(

        <div className='text-center w-full transition-transform hover:scale-105 '>
  
          <img className='w-full h-[300px] object-cover rounded-[30px]' src={doctor.image} alt={doctor.name} />
        <h1 className='mt-5 text-2xl '>{doctor.name}</h1>
        <p className='text-gray-500'>{doctor.specialty}</p>
        
        </div>
      ))}</div>
  {visibleCards < filteredDoctors.length &&(
      <div className="flex justify-center items-center mt-16">
        <button className='text-white bg-[#0A1A2E] text-sx w-60 text-center h-15 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex   justify-center items-center
        gap-2 shadow-sm hover:text-black' onClick={handeleShowMore}>Show More Doctors <FiArrowRight/> </button>
      </div>
  )}
     <div className='rounded-[30px]  mt-10 p-8 md:p-12  flex flex-col md:flex-row flex items-center justify-center gap-18 overflow-hidden
      shadow-sm bg-blue-100 '>
      <div className='w-20 h-20 md:w-20 md:h-20 bg-[#0A1A2E] rounded-[30px] flex items-center justify-center text-yellow-500 shaow-md shrink-0'><FaHeartbeat size={32}/></div>
     <div className='flex-1 text-center  '>
      <h2 className='text-2xl md:text-3xl font-bold mb-3 text-[#0A1A2E]'>Begin your Journey with Medicross!</h2>
      <p className='text-gray-600 md:justify-center  mb-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae laoreet nibh. Curabitur vehicula mauris sit. Suspendisse lectus nisi, laoreet id venenatis eget. Etiam enim nunc.</p>
     <div className='flex flex-col sm:flex-row justify-center items-center md:justify-center gap-4 sm-gap-8 text-sm font-medium text-[#0A1A2E]'>
      <div className=' text-xl flex items-center justify-center gap-2'><FaCheck className='text-emeald-600' size={12}/>
      <span>
       We are fair to our employees</span></div>
       <div className=' text-xl flex items-center justify-center gap-2'><FaCheck className='text-emeald-600' size={12}/><span>
        
      We are fair to our employees</span></div>
     </div>
     </div>
     <div className='h-24 w-24 md:w-28 md:h-28 bg-[#0A1A2E] hover:bg-black-500 rounded-[50%] flex flex-col items-center justify-center
     text-center p-3 cursor-pointer transition-all durtation-300 shrink-0 shadow-lg group '>
      <span className='text-yellow-500  font-serif text-3xl leading-none mb-1'>‘‘ <br /></span>
      <span className='text-[10px] text-white md:text-xs font-bold uppercase tracking-widee '>View Open <br />Position</span>
      
     </div>
     </div>
     
    </div>
  )
}


export default AboutDoctor