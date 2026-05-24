import React, { useState } from 'react'
import { useDoctorFilter } from '../hooks/useDoctorFilter'

import Hero from '../sections/Hero'
import AboutDoctor from '../sections/AboutDoctor'

 function DoctorsPage(){


  return (
    <div >
      <Hero/>
      <AboutDoctor/>
    </div>
   
  )
}

export default DoctorsPage
