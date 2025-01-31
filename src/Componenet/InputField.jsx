import React from 'react'

const InputField = (props) => {
  return (
   <div className='inputdesign border-1 border-black/50 flex items-center justify-between'>
    <input className=' bg-white border-0' type="text" placeholder={props.name}/>
   <button className='border-0 btnclass'><img src={props.img} alt=""/></button>
   </div>
  )
}

export default InputField 