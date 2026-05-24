import { useState } from "react"


function useAppointment() {
       const [form,setForm]=useState(
        {
            name:"",
            email:"",
            phone:"",
            service:"",
            doctor:"",
            date:""
            
        }  
    ) 
      const handleChange =(e:React.ChangeEvent <HTMLInputElement|HTMLSelectElement>)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
     const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
        console.log(form);
        setForm({
             name:"",
            email:"",
            phone:"",
            service:"",
            doctor:"",
            date:""
        })

        
    }
  return {  form,handleChange,handleSubmit
     
  }
}
export default useAppointment