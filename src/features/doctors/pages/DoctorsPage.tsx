import React, { useState } from 'react'
const doctors =[
  {
    id :1,
    name:"Dr . jone Doe",
    specialty:"caree",
    department:"caree"
  },
  {
    id :1,
    name:"Dr . jone Doe",
    specialty:"kjjjjhh",
    department:"kjjj"
  },
  {
    id :1,
    name:"Dr . jone Doe",
    specialty:"cammmn"
  }
]

function DoctorsPage() {
  const filterDoctores = doctors.filter((doctors)=>doctors.department === select)
  const [select ,setSelect] = useState("")
  return (
    <div >
      <select onChange={(e)=>setSelect(e.target.value)} name="
      " id=""><option value="">select depakkk</option>
      <option value="">ssujuik</option>
      <option value="ffyjkjk">ffyjkjk</option>
      <option value=""></option>nmnmnn</select>
      <div className='gap-6'>
      {doctors.map((doctor) =>(
        <div>
        <h1>{doctor.name}</h1>
        <p>{doctor.specialty}</p>
        </div> 
      ))}</div>
    </div>
  )
}

export default DoctorsPage
