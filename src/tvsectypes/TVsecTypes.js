import React from 'react'
import Nav from '../nav/Nav'
import FooterSec from '../footer/FooterSec'

import activate from '../assets/acti.png'
import childmode from '../assets/child.png'
import scanner from '../assets/scan.png'
import { Link } from 'react-router-dom'


const TVsecTypes = () => {
  return (
    <>
        <div>
            <Nav />
        </div>
        <div>
            <div>
            <div className=' w-[100%] h-[100vh] mt-[100px]'>   
        <div className='flex flex-col justify-center items-center'>
            <div className='sm:text-6xl text-3xl text-center'> <p> SECURITY SERVICES PROTECTION FOR YOUR DEVICE</p> </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-evenly items-center mt-[100px]'>
            <Link to={'/tvsectypes/scan'}><div className='w-[400px] h-[400px] '>
              <img src={scanner} alt=""
               className='w-[400px] h-[300px]' />
            <div className='text-6xl'> <p className='text-center sm:text-3xl text-2xl'>  SCAN YOUR TV  </p> </div>
            </div> </Link>    
            <div className='w-[400px] h-[400px] '>
             <Link to={'/tvsectypes/activatesecuraa'}> <img src={activate} alt=""
               className='w-[400px] h-[300px]' /> 
            <div className='text-6xl'> <p className='text-center sm:text-3xl text-2xl'>  ACTIVATE SECURAA ANTI-VIRUS  </p> </div> </Link>
            </div>
            <div className='w-[400px] h-[400px] '>
           <Link to={'/tvsectypes/childmode'}>  <img src={childmode} alt="" 
               className='w-[400px] h-[300px]' /> 
            <div className='text-6xl'> <p className='text-center sm:text-3xl text-2xl'>  ACTIVATE CHILD MODE  </p> </div>  </Link>
            </div> 
        </div>
        
    </div>
            </div>
        </div>
        <div className='sm:mt-0 mt-[650px]'>
            <FooterSec />
        </div>

    </>
  )
}

export default TVsecTypes