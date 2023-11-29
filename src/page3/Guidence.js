import React from 'react'
import guidence from '../assets/guidence.jpg'

const Guidence = () => {
  return (
    <>
    <div className='sm:mt-0 mt-[550px]'>
        <div className='flex justify-center items-center text-6xl'> <p>Guidence</p></div>
        <div className='w-[100%]  flex items-center justify-center '>
          <div className='w-[80%] h-[600px]  flex items-center justify-center sm:mt-0 mt-[-150px]'>
            <a href="">  <img src={guidence} alt="" /> </a>
          </div>
           
        </div>
    </div>
    </>
  )
}

export default Guidence