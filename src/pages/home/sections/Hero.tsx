import Button from '../../../components/ui/Button'
import React from 'react'
import Slider from '../../../components/common/Slider'
import img5 from "../../../assets/images/cm6.webp"
import img6 from "../../../assets/images/ab10.webp"
import { FiArrowRight } from 'react-icons/fi';


interface MySlide{
  id:number;
  title:string;
  subtitle:string;
  text:string;
img:string;
}
const slidesData: MySlide[]=[
  {id:1,title:"Your Journey to Exclusive Wellness Begins Here.", text:"The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes, consequently develop an institution supported with necessary.", 
    subtitle:"Medicross Health Care Center",img:img5},
  {id:1,title:"Having A Good Health In Your Best Investment", text:"The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes, consequently develop an institution supported with necessary.",
     subtitle:"Medicross Health Care Center",img:img6}
]

 function Hero(){
  return(
    
<section className='hero-section  bg-[#0A1A2E] text-white min-h-screen flex items-center overflow-hidden relative '>
     <div className='absolute bottom-[-180px] left-[-120px] w-[700px]
     h-[700px] opacity-30 rounded-full blur-3xl'></div>
      <Slider slides={slidesData}
      bot={true}
         renderSlider={(item: MySlide)=>(
<div  key={item.id} className=' slider-contact z-10   max-w-[1280px] mx-auto px-6 md:px-12 flex-col-reverse lg:flex-row md:flex-row justify-between items-center gap-16  py-16 animat-fadeIn rounded-full'  >
 <div className='flex  items-center gap-8 w-full lg:w-1/2 gap-6'>
 <div className=' flex flex-col gap-6 '>
    <p className='text[#D6E4F0] text-lg front-medium'>{item.subtitle}</p>
   <h2 className='text-2xl md:text-4xl font-bold leading-[1.2] max-w-[640px]'>{item.title}</h2>
     <p className='text-lg front-medium'>{item.text}</p>
         <div className="hidden md:flex">
<Button  to="/doctors"  className=" 
       bg-yellow-400 h-15 rounded-xl font-medium hover:bg-yellow-300 transition " variant="primary"><span>View All services</span><FiArrowRight/></Button>
      </div>
 </div>
 <div className='w-full lg:w-1/2 flex justify-center'>
  <img className=' ms-[1000px] w-[full] max-w-[520px] h-[520px]  rounded-[35px] shadow-2xl' src={item.img}  />
</div>
  
</div></div>    )}/>
  </section>
  )
}
export default Hero

