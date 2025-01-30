import React from 'react'

const ImgDiv = (props) => {
  return (
    <div className='h-8 w-8 flex items-center justify-center rounded-full hover:scale-125'>
       <a href=""><img className='h-4 w-4' src={props.img} alt={props.name} /></a>
    </div>
  )
}

export default ImgDiv