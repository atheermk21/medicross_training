import Button from '../../../components/ui/Button'
import Slider from '../../../components/common/Slider'
import { FiArrowRight } from 'react-icons/fi';
import {slidesData} from "../../../data/contents/HomeContents"
import {ROUTES} from "../../../constants/router"

interface MySlide{
  id:number;
  title:string;
  subtitle:string;
  text:string;
img:string;
}


 function Hero(){
  
  return(
    
<section className='  bg-[var(--bg-primary)] flex justify-center items-center gap-12  min-h-screen   '>
     
      <Slider<MySlide> slides={slidesData}
      dot={false}
      renderSlider={(item: MySlide)=>(
<div  key={item.id} className=' flex flex-col-reverse items-center justify-center gap-10 lg:flex-row  '  >

 <div className='ms-5 w-full lg:w-1/2 lg:pl-24 '>
    <p className='text-[var(--text-primary)] lg:text-lg font-medium mb-5'>{item.subtitle}</p>
     
   <h2 className='text-[var(--text-primary)] text-1xl md:text-4xl font-bold mb-4 leading-tight'>{item.title}</h2>
    <div className='w-full h-px bg-white/20 mb-8'></div>
     <p className='text-[var(--text-primary)] text-l  font-medium mb-6'>{item.text}</p> 
             <div className="">
<Button  to={ROUTES.DOCTORS} className="  bg-[var(--color-primary)] w-50 h-15 rounded-2xl font-medium hover:bg-yellow-300 transition-all " variant="primary"><span>View All services</span><FiArrowRight/></Button>
 </div></div>
 <div className=' lg:w-1/2  flex justify-center  '>
  <img className=' rounded-[35px] shadow-2xl' src={item.img}  />
</div>
  </div>    )}/>
  </section>
  )
}
export default Hero

