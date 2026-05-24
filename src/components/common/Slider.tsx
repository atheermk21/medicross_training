
import { useState, type ReactNode} from "react";
import { FiArrowRight } from "react-icons/fi";
interface SliderProps<T>{
    renderSlider: (item: T)=> ReactNode;
    slides: T[];
    bot:boolean;
}


function Slider<T>({renderSlider, slides, bot}: SliderProps<T>){
    const[current ,setCurrent]=useState(0);
    return(
        <div>
        <div>
 <button className="group p-4 bg-white/5 rounded-full border border-white/10 hover:bg-[#F2C34E] hover:text-[#0A1A2Ae] transition-all flex items-center justify-center" onClick={()=>current===0?setCurrent(slides.length-1):setCurrent(current-1)}><FiArrowRight/></button>
 <button className="group p-4 bg-white/5 rounded-full border border-white/10 hover:bg-[#F2C34E] hover:text-[#0A1A2Ae] transition-all flex items-center justify-center" onClick={()=>current===slides.length-1?setCurrent(0):setCurrent(current+1)}><FiArrowRight/></button>

        </div>
        {renderSlider(slides[current])}    
        </div>
    )
}
export default Slider


    
