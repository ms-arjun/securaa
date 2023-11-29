import React from 'react'
import Nav from '../nav/Nav'
import FooterSec from '../footer/FooterSec'
import tv from '../assets/monitor.png'
import car from '../assets/car.png'
import lock from '../assets/lock.png'
import laptop from '../assets/laptop.png'
import mobile from '../assets/mobile.png'
import home from '../assets/home.png'
import { Link } from 'react-router-dom'





const Discover = () => {
  return (
    <>
      <div> <Nav /> </div>
      <div>
          <div className='grid sm:grid-cols-3 justify-items-center gap-10'>

            <div className='w-[300px] sm:h-[300px] h-[200px]'>
              <Link to={'/smarttv'}>
              <img src={tv} alt="" /> 
              <div className='text-center font-bold'>Smart TV Securities</div>
              </Link>
            </div>
            <div className='w-[300px] sm:h-[300px] h-[200px]'>
              <img src={mobile} alt="" /> 
              <div className='text-center font-bold'>Mobile Protection</div>
            </div>
            <div className='w-[300px] sm:h-[300px] h-[200px]'>
              <img src={home} alt="" /> 
              <div className='text-center font-bold'>Smart Home Controller</div>
            </div>
            <div className='w-[300px] sm:h-[300px] h-[200px]'>
              <img src={laptop} alt="" /> 
              <div className='text-center font-bold'>Computer & Laptops securities</div>
            </div>
            <div className='w-[300px] sm:h-[300px] h-[200px]'>
              <img src={lock} alt="" /> 
              <div className='text-center font-bold'>Smart Locks</div>
            </div>
            <div className='w-[300px] sm:h-[300px] h-[200px]'>
              <img src={car} alt="" /> 
              <div className='text-center font-bold'>Smart Car GPS</div>
            </div>

          </div>
      </div>
      <div className='mt-10'> <FooterSec /> </div>
    </>
  )
}

export default Discover