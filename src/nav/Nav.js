import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { MdClear } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import {Link} from 'react-router-dom'


const Nav = () => {

  const [nav,setNav] = useState(true)

    const handleNav = ()=>{
      setNav(!nav)
    }

  return (
    <>
        <div className='w-[full] h-[100px] grid grid-cols-[40%,60%] '>
            <div> 
             <div className='flex flex-row  justify-center items-center w-full'>
                      <div>
                        <img src={logo} alt="" className='w-[100px]  h-[90px]' />
                      </div>
                      <div>
                        <span className='sm:text-4xl text-2xl sm:ml-0  '> SECURAA </span>  
                      </div>
             </div>
            </div>


              
             <div onClick={() => handleNav()} className='md:hidden sm:hidden flex justify-end items-end'>
              {(!nav) ?  <MdClear size={20} color='blue' /> : <CiMenuKebab  size={26} color='blue' />}
              </div>

            <div>
                
                 <div className='hidden sm:flex justify-evenly items-center flex-row mt-8 '>
                    <div> <Link to='/'> HOME </Link></div>
                    <div><Link to={'/manual'}> MANUAL </Link></div>
                    <div>PREMIUM</div>
                    <div>PURCHASE</div>
                    <div><Link to='/'> Back </Link></div>
                </div>
            </div>
           
            <div>
            
                  <div className={!nav ? 'fixed left-5 top-[100px] w-[50%] h-[200px] block md:hidden bg-white ease-in duration-300 font-semibold' : 'fixed left-[-200px] ease-in duration-300'}>
                   <div className='p-2 text-[14px]'><Link to={'/'}> HOME </Link></div>
                   <div className='p-2 text-[14px]'><Link to={'/manual'}> MANUAL </Link> </div>
                   <div className='p-2 text-[14px]'>PREMIUM</div>
                   <div className='p-2 text-[14px]'>PURCHASE</div>
                   <div className='p-2 text-[14px]'><Link to='/'> Back </Link></div>
               </div> 
           </div>

        </div>
    </>
  )
}

export default Nav