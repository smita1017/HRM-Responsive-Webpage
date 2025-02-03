import React from 'react'
import Heroimage from './assets/HeroImage.png'
const Sectionleft = () => {
  return (
    <section className='sectionleft'>
      <div className='visiblepart'>
        <div className=' hrm w-l'>
        <h1 className=' hrm text-4xl font-bold text-left montserrat-use text-white'>HRM</h1>
        </div>
      </div>
        <div  className='visiblepart heading2 w-l text-left text-white'><h4 className='montserrat-use'>Manage people effectively for performance and 
          <br/>organizational success.</h4></div>
        <div className='visiblepart imagediv'><img className='heroimg h-64 w-full' src={Heroimage} alt="LOGO" /></div> 
        <div className='visiblepart heading3 w-l text-left text-white'><h3 className="poppins-use font-medium text-xs">The new system aimed to enhance employee data management, payroll processing, performance evaluations,and reporting capabilities.</h3></div>

        {/* this code visible @media 600px and othertime it is hiddlen */}
        <div className='hiddenpart hidden'>
          <div className='flex items-center justify-around w-full'>
          <h1 className=' hrm text-4xl font-bold text-left montserrat-use text-white'>HRM</h1>
          {/* <h4 className='montserrat-use text-xs text-center text-white'>Manage people effectively for performance and organizational success.</h4> */}
          <img className='heroimg h-30' src={Heroimage} alt="LOGOImage" /> 
          </div>
          <h3 className=" heding3 poppins-use font-medium text-xs text-white text-center">The new system aimed to enhance employee data management, payroll processing, performance evaluations,and reporting capabilities.</h3>
          </div>          
    </section>
  )
}

export default Sectionleft