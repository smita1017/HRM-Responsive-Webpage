import React from 'react'
import Heroimage from './assets/HeroImage.png'
const Sectionleft = () => {
  return (
    <section className=' sectionleft h-screen text-white flex items-center justify-center flex-col gap-3.5' style={{width:640}}>
      <div>
        <div className='w-xl'>
        <h1 style={{marginTop:10}} className='hrm text-4xl text-left font-bold font-montserrat'>HRM</h1>
        </div>
      </div>
        <div  className='w-xl text-left'><h4 className='font-montserrat '>Manage people effectively for performance and <br/>organizational success.</h4></div>
        <div><img className='h-64 w-full' src={Heroimage} alt="" /></div>
        <div className='w-xl text-left'><h3 className='font-montserrat'>The new system aimed to enhance employee data management, payroll processing, performance evaluations,and reporting capabilities.</h3></div>
    </section>
  )
}

export default Sectionleft