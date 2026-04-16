
import Card from "../../../components/ui/Card";
import Home from "../Home";
import React from "react";
import img1 from "/src/assets/images/h5-6.webp"
import img2 from "/src/assets/images/h5-7.webp"
import img3 from "/src/assets/images/sv4-736x596.webp"
import img4 from "/src/assets/images/h5-9.webp"
import { FaArrowRightLong } from "react-icons/fa6";


interface ServiceData{
    id: number;
    title: string;
    subTitle: string;
    description?: string;
    textColor?: string;
    image?: string;
    bg: string;
    isImage?: boolean;
    link?: string;
}

const items: ServiceData[]=[
{
id:1,
title:"",
subTitle:"",
description:"",
image: img1,
bg:"bg-black",
isImage:true,
link:"",
textColor:""
    },
    {
   id:2,
   title: "13+",
   subTitle:"Centers Across the United States.",
   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.",
  link:"view All Location",
   bg: "bg-[#f1f5f5]"  ,
   textColor: "text-[#222222]",
   image:""
                             
    },
{
    id:3,
    title:"",
    subTitle:"",
    description:"",
    image: img2,
    bg:"bg-white",
    isImage:true,
    textColor:"",
    link:""
},
{
    id:4,
    title:"99%",
    subTitle:"Happy Customer.",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget",
    image:"",
    link:" View Testimonials",
    textColor:"text-black",
    bg:"bg-[#e9b64d]",

},
{
    id:5,
    title:"16",
    subTitle:"Health Care Center Award",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.",
    link:"Our Commitment ",
    bg:"bg-[#bfeafb]",
    textColor:"text-[#11121a]",
    image:""
},
{
id:6,
title:"",
subTitle:"",
description:"",
image:img3,
bg:"bg-black",
isImage:true,
link:""
},
{
    id:7,
    title:"385+",
   subTitle:"Qualified Doctors and Nurses .",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien, in interdum urna commodo eu neque eget.", 
    link:"View All The Doctor ",
    bg:"bg-[#09243c]",
    textColor:"text-white",
    image:""
},
{
    id:8,
    title:"",
    subTitle:"",
    description:"",
    image:img4,
    bg:"bg-white",
    isImage:true,
    link:""
}];
    const services = () => {
        return(
            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    <div className="grid gride-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((item) =>( 
                       <Card key={item.id} className={`${item.bg} h-[350px] flex-col justify-center relative shadow-md
                       transition-transform hover:scale-105 overflow-hidden`}>
{item.isImage ?(
    <img src={item.image} alt="Services" className="w-full h-full object-cover rounded-xl" />):(
        <div className={`p-8 ${item.textColor}`}>
            <h2 className="text-5xl font-bold mb-4 tracking-tight leading-thigt">{item.title}
               
            </h2>
            <h3 className="text-[20px] font-bold mb-4 leadin-snug ">{item.subTitle}</h3>
            <p className={`text-sm leading-relaxed mb-8 opacity-80`}>{item.description}</p>
            <a href="#" className="front-bold mt-auto text-xs uppercase hover:underline flex items-center gap-2">{item.link}
                <span className="text-lg"><FaArrowRightLong /></span>

            </a>
        </div>
)}
 </Card>
))}
  </div>
 </div>
</section>
        ); 
    };
export default services;