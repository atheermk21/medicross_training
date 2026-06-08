import  { useMemo, useState } from "react";
interface Doctor{
    id:number,
    name:string,
    specialty:string;
   department:string;
  image:string
}
export const useDoctorFilter=(doctors:Doctor[])=>{
    const[select, setSelect]=useState("");
    const [search, setSearch]=useState("");
    const [visibleCards, setVisibleCards]=useState(10)
    const filteredDoctors=useMemo(()=>{
        return  doctors.filter((doctor) =>(select === "" ? true : doctor.department === select) &&
       doctor.name.toLowerCase().includes(search.toLowerCase()))
    },[doctors, search, select]);
    const displayedDoctors=(filteredDoctors.slice(0 ,visibleCards))
    const handeleShowMore=()=>{
        setVisibleCards((prev)=>prev+10)
    }
     return{
      search,
      setSearch,
      setSelect,
      filteredDoctors,
      visibleCards,
      displayedDoctors,
      handeleShowMore
     }
}