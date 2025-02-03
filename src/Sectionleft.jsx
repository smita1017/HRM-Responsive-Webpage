import React from 'react'
import Heroimage from './assets/HeroImage.png'
const Sectionleft = () => {
  return (
    <section className='sectionleft'>
      <div>
        <div className='hrm w-l'>
        <h1 className=' hrm text-4xl font-bold text-left montserrat-use text-white'>HRM</h1>
        </div>
      </div>
        <div  className='heading2 w-l text-left text-white'><h4 className='montserrat-use'>Manage people effectively for performance and 
          <br/>organizational success.</h4></div>
        <div className='imagediv'><img className='heroimg h-64 w-full' src={Heroimage} alt="" /></div> 
        <div className='heading3 w-l text-left text-white'><h3 className="poppins-use font-medium text-xs">The new system aimed to enhance employee data management, payroll processing, performance evaluations,and reporting capabilities.</h3></div>
    </section>
  )
}

export default Sectionleft