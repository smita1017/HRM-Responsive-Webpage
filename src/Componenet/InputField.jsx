import React from 'react'

const InputField = (props) => {
  return (
    <input className='inputdesign bg-white border-1 border-black/50 placeholder-black/50' type="text" placeholder={props.name}/>
  )
}

export default InputField