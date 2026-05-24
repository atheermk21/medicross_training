import Button from "../../../../components/ui/Button"
import useAppointment from "../hooks/useAppointment"

const doctors=[
    {
        id:1,
        name:"dr. John Doe",
    },{
        id:2,
        name:"dr. Jane Smith",
    }
]
const services=[
    {
        id:1,
        name:"general ",
    },
    {
        id:2,
        name:"dental",
    }
]

function AppointmentForm() {
const {form,handleChange,handleSubmit}=useAppointment()
 
  
   
 
  return (
    <section>
      <h2>book</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
<form action="" onSubmit={handleSubmit}>
    <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="name" required/>
    <input onChange={handleChange} value={form.email} type="email" name="email" id="" placeholder="email"/>
    <input onChange={handleChange} value={form.phone} name="phone" type="tel" placeholder="phone"/>
    <select value={form.service} name="service" id="" onChange={handleChange}>
        <option value="">select service</option>
        { services.map((service,index)=>( 
<option value={service.name} key={index}> {service.name}</option>
        ))}
         
  
    </select>
    <select value={form.doctor} name="doctor" id="" onChange={handleChange}>
        <option value="">select doctor</option>
{doctors.map((doctor,index)=>(
    <option value={doctor.name} key={index}>{doctor.name}</option>
))} 

    </select>
    <input onChange={handleChange} value={form.date} name="date" type="date" />
<Button type="submit" variant="secondary" className=" bg-[var(--color-primary)] ">complete appointment</Button>
</form>
    </section>
  )
}

export default AppointmentForm
