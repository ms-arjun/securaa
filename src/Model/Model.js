import React from 'react'

const Model = ({visible,onClose}) => {
    if(!visible) return null;
  return (
    <div className=' fixed inset-0 flex justify-center items-center flex-col  bg-black bg-opacity-30 backdrop-blur-sm'
    onClick={onClose}
    >  
        <h1 className='text-4xl font-bold'>Launching Soon...</h1>
        <p className='text-xl font-semibold'>Kindly stay with Us</p>
        
    </div>
  )
}

export default Model