
import { useState, type ReactNode} from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
interface SliderProps<T>{
    renderSlider: (item: T)=>ReactNode;
    slides: T[];
    dot:boolean;
}


function Slider<T>({renderSlider, slides, dot}: SliderProps<T>){
    const[current ,setCurrent]=useState(0);
    return(
        <div>
        <div className="text-[var(--text-primary)] lg:flex absolute mt-5 left-0 top-1/2 -translate-y-1/2-flex flex-col ms-3 ">
 <button className="hidden lg:flex cursor-pointer h-18 w-18 flex justify-center items-center mb-5  p-4 bg-white/10 rounded-full  hover:bg-yellow-300  "
  onClick={()=>current===0?setCurrent(slides.length-1):setCurrent(current-1)}><FiArrowRight size={20}/></button>
 <button className="hidden lg:flex cursor-pointer h-18 w-18 flex  justify-center items-center mb-5  p-4 bg-white/10 rounded-full  hover:bg-yellow-300  " 
 onClick={()=>current===slides.length-1?setCurrent(0):setCurrent(current+1)}><FiArrowLeft size={20}/></button>

        </div>
        {renderSlider(slides[current])} {dot &&(
            <div >
            {slides.map((_,index) =>( 
<button key={index}
onClick={()=>setCurrent(index)} className={`{ bg-gray-400 rounded-full transition-all duration-300}${current===index}`}></button>
            
            ))}
                
            </div>
        )}

        </div>
    )
}
export default Slider


    
