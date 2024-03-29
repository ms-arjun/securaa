import React from 'react'
import activate from '../assets/acti.png'
import childmode from '../assets/child.png'
import scanner from '../assets/scan.png'
import { Link } from 'react-router-dom'

const SecurityTypes = () => {
  return (
    <>
    <div className=' w-[100%] h-[100vh] mt-[100px]'>   
        <div className='flex flex-col justify-center items-center'>
            <div className='sm:text-6xl text-4xl'> <p>OUR SECURITY SERVICE</p> </div>
            <div className='sm:text-6xl text-4xl'> <p> 360 PROTECTION  </p> </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-evenly items-center mt-[100px]'>
            <div className='w-[400px] h-[400px] '>
           <Link to={'/tvsectypes/scan'}>  <img src={scanner} alt=""
               className='w-[400px] h-[300px]' />
            <div className='text-6xl'> <p className='text-center sm:text-4xl text-2xl'>  SCANNING  </p> </div> </Link> 
            </div>
            <div className='w-[400px] h-[400px] '>
            <Link to={'/tvsectypes/activatesecuraa'}>  <img src={activate} alt=""
               className='w-[400px] h-[300px]' /> 
            <div className='text-6xl'> <p className='text-center sm:text-4xl text-2xl'>  ACTIVATE SECURAA  </p> </div> </Link>
            </div>
            <div className='w-[400px] h-[400px] '>
            <Link to={'/tvsectypes/childmode'}>  <img src={childmode} alt="" 
               className='w-[400px] h-[300px]' />
            <div className='text-6xl'> <p className='text-center sm:text-4xl text-2xl'>  CHILD MODE  </p> </div>  </Link>
            </div>
        </div>
        
    </div>

    </>
  )
}

export default SecurityTypes