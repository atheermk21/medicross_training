import type { ReactNode } from "react";
import Hero from "../../pages/home/sections/Hero";
import Services from "../../pages/home/sections/Services"

interface CardProps{
    children:ReactNode;
    className?:string;

}

function Card({children,className}:CardProps) {
  return ( 
    <div className= {`rounded-xl overflow-hidden ${className}`}> 
      {children}       
    </div>
) 
}
export default Card